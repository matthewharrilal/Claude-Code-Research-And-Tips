# MCP (Model Context Protocol) Servers: Comprehensive Research

## Executive Summary

MCP (Model Context Protocol) is an open-source standard created by Anthropic for connecting AI applications to external systems. Think of it as "USB-C for AI" - a universal connector that allows AI assistants like Claude to seamlessly integrate with data sources, tools, and workflows. This document provides exhaustive coverage of MCP servers, their ecosystem, configuration, security, and advanced patterns.

---

## Table of Contents

1. [What is MCP?](#what-is-mcp)
2. [Architecture Deep Dive](#architecture-deep-dive)
3. [Core Concepts](#core-concepts)
4. [Official Reference Servers](#official-reference-servers)
5. [Popular MCP Servers by Category](#popular-mcp-servers-by-category)
6. [Configuring MCP in Claude Code](#configuring-mcp-in-claude-code)
7. [Building Custom MCP Servers](#building-custom-mcp-servers)
8. [Available SDKs](#available-sdks)
9. [Security Considerations](#security-considerations)
10. [Debugging and Troubleshooting](#debugging-and-troubleshooting)
11. [Combining Multiple MCP Servers](#combining-multiple-mcp-servers)
12. [Advanced Patterns](#advanced-patterns)
13. [Resources and Community](#resources-and-community)

---

## What is MCP?

### Definition

**Model Context Protocol (MCP)** is an open protocol enabling seamless integration between LLM applications and external data sources and tools. It standardizes how to connect LLMs with the context they need through a JSON-RPC 2.0 message format.

### The USB-C Analogy

Just as USB-C provides a standardized way to connect electronic devices, MCP provides a standardized way to connect AI applications to external systems. Before MCP, every AI integration required custom code. With MCP, a single protocol handles all integrations.

### What MCP Enables

| Use Case | Description |
|----------|-------------|
| **Personalized Agents** | Access Google Calendar and Notion for context-aware assistance |
| **Design-to-Code** | Claude Code can generate entire web apps using Figma designs |
| **Enterprise Integration** | Connect to multiple organizational databases for data analysis via chat |
| **Hardware Integration** | AI models can create 3D designs on Blender and send to 3D printers |

### Benefits by Stakeholder

| Stakeholder | Benefit |
|-------------|---------|
| **Developers** | Reduces development time and complexity when building or integrating with AI applications |
| **AI Applications** | Access to ecosystem of data sources, tools, and apps that enhance capabilities and UX |
| **End-Users** | More capable AI applications that can access data and take actions on their behalf |

---

## Architecture Deep Dive

### Client-Server Architecture

MCP follows a client-server architecture with two primary layers:

```
+--------------------------------------------------+
|            MCP Host (AI Application)              |
|  (Claude Desktop, VS Code, Claude Code)           |
+-------------------+------------------------------+
                    |
         +----------+----------+
         |          |          |
     +---v--+   +---v--+  +---v--+
     |Client|   |Client|  |Client|
     |  1   |   |  2   |  |  3   |
     +---+--+   +---+--+  +---+--+
         |          |          |
    +----v---+ +----v---+ +----v---+
    |Server A| |Server B| |Server C|
    |(Local) | |(Local) | |(Remote)|
    |STDIO   | |STDIO   | |HTTP    |
    +--------+ +--------+ +--------+
```

### Key Participants

| Participant | Role |
|-------------|------|
| **MCP Host** | AI application (Claude Desktop, Claude Code, VS Code) that coordinates multiple MCP clients |
| **MCP Client** | Component maintaining connection to an MCP server, obtaining context for the host |
| **MCP Server** | Program providing context to clients (runs locally or remotely) |

### Two-Layer Architecture

#### Data Layer
- JSON-RPC 2.0 based protocol for client-server communication
- Lifecycle management (initialization, capability negotiation, termination)
- Core primitives: Tools, Resources, Prompts
- Server features: Tools execution, Resources provision, Prompts templates
- Client features: Sampling (LLM completions), Elicitation (user input), Logging
- Notifications for real-time updates

#### Transport Layer
- **Stdio Transport**: Standard input/output for local process communication (optimal performance)
- **Streamable HTTP Transport**: HTTP POST with optional Server-Sent Events for remote servers (supports OAuth, bearer tokens, API keys)

### Communication Flow

#### 1. Initialization (Lifecycle Management)

```json
// Client Request
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "initialize",
  "params": {
    "protocolVersion": "2025-06-18",
    "capabilities": {
      "elicitation": {}
    },
    "clientInfo": {
      "name": "example-client",
      "version": "1.0.0"
    }
  }
}

// Server Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "protocolVersion": "2025-06-18",
    "capabilities": {
      "tools": { "listChanged": true },
      "resources": {}
    },
    "serverInfo": {
      "name": "example-server",
      "version": "1.0.0"
    }
  }
}
```

#### 2. Tool Discovery

```json
// Request
{ "jsonrpc": "2.0", "id": 2, "method": "tools/list" }

// Response
{
  "jsonrpc": "2.0",
  "id": 2,
  "result": {
    "tools": [
      {
        "name": "weather_current",
        "title": "Weather Information",
        "description": "Get current weather for any location",
        "inputSchema": {
          "type": "object",
          "properties": {
            "location": { "type": "string", "description": "City name or coordinates" },
            "units": { "type": "string", "enum": ["metric", "imperial", "kelvin"], "default": "metric" }
          },
          "required": ["location"]
        }
      }
    ]
  }
}
```

#### 3. Tool Execution

```json
// Request
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "tools/call",
  "params": {
    "name": "weather_current",
    "arguments": { "location": "San Francisco", "units": "imperial" }
  }
}

// Response
{
  "jsonrpc": "2.0",
  "id": 3,
  "result": {
    "content": [
      { "type": "text", "text": "Current weather in San Francisco: 68F, partly cloudy..." }
    ]
  }
}
```

#### 4. Real-time Notifications

```json
// Server sends notification (no ID, no response expected)
{ "jsonrpc": "2.0", "method": "notifications/tools/list_changed" }

// Client responds by fetching updated tools
{ "jsonrpc": "2.0", "id": 4, "method": "tools/list" }
```

---

## Core Concepts

### Server Features (Three Building Blocks)

| Feature | Explanation | Examples | Control |
|---------|-------------|----------|---------|
| **Tools** | Functions LLMs can actively call based on user requests | Search flights, Send messages, Create calendar events | Model-controlled |
| **Resources** | Passive read-only data sources for context | Retrieve documents, Access knowledge bases, Read calendars | Application-controlled |
| **Prompts** | Pre-built instruction templates for workflows | Plan vacation, Summarize meetings, Draft email | User-controlled |

### 1. Tools

**Purpose**: Enable AI models to perform actions with typed inputs/outputs.

**How Tools Work**:
- Schema-defined interfaces using JSON Schema validation
- Single operation with clearly defined inputs and outputs
- May require user consent for execution
- Protocol operations: `tools/list`, `tools/call`

**Example Tool Definition**:
```typescript
{
  name: "searchFlights",
  description: "Search for available flights",
  inputSchema: {
    type: "object",
    properties: {
      origin: { type: "string", description: "Departure city" },
      destination: { type: "string", description: "Arrival city" },
      date: { type: "string", format: "date", description: "Travel date" }
    },
    required: ["origin", "destination", "date"]
  }
}
```

**User Interaction Model**:
- UI displays of available tools with user control
- Approval dialogs for individual executions
- Permission settings for pre-approved operations
- Activity logs showing all executions and results

### 2. Resources

**Purpose**: Provide structured, read-only access to information for context.

**How Resources Work**:
- Expose data from files, APIs, databases
- Unique URIs (e.g., `file:///path/to/document.md`)
- Declare MIME types for content handling

**Two Discovery Patterns**:

| Pattern | Description | Example |
|---------|-------------|---------|
| **Direct Resources** | Fixed URIs pointing to specific data | `calendar://events/2024` |
| **Resource Templates** | Dynamic URIs with parameters | `weather://forecast/{city}/{date}` |

**Protocol Operations**:
- `resources/list` - List available direct resources
- `resources/templates/list` - Discover resource templates
- `resources/read` - Retrieve resource contents
- `resources/subscribe` - Monitor resource changes

### 3. Prompts

**Purpose**: Provide reusable templates for structured AI workflows.

**How Prompts Work**:
- Structured templates defining expected inputs and patterns
- User-controlled with explicit invocation
- Context-aware, referencing available resources and tools

**Example Prompt Definition**:
```json
{
  "name": "plan-vacation",
  "title": "Plan a vacation",
  "description": "Guide through vacation planning process",
  "arguments": [
    { "name": "destination", "type": "string", "required": true },
    { "name": "duration", "type": "number", "description": "days" },
    { "name": "budget", "type": "number", "required": false },
    { "name": "interests", "type": "array", "items": { "type": "string" } }
  ]
}
```

**Discovery Methods**:
- Slash commands (`/plan-vacation`)
- Command palettes for searchable access
- Dedicated UI buttons
- Context menus with relevant suggestions

### Client Features (Offered to Servers)

| Feature | Purpose |
|---------|---------|
| **Elicitation** | Server-initiated requests for additional information from users |
| **Roots** | Server-initiated inquiries into URI or filesystem boundaries |
| **Sampling** | Server-initiated agentic behaviors and recursive LLM interactions |

---

## Official Reference Servers

These are the official MCP servers maintained by the Model Context Protocol team:

| Server | Description | Package |
|--------|-------------|---------|
| **Everything** | Reference/test server with prompts, resources, and tools | `@modelcontextprotocol/server-everything` |
| **Fetch** | Web content fetching and conversion for efficient LLM usage | `@modelcontextprotocol/server-fetch` |
| **Filesystem** | Secure file operations with configurable access controls | `@modelcontextprotocol/server-filesystem` |
| **Git** | Tools to read, search, and manipulate Git repositories | `mcp-server-git` (Python) |
| **Memory** | Knowledge graph-based persistent memory system | `@modelcontextprotocol/server-memory` |
| **Sequential Thinking** | Dynamic and reflective problem-solving through thought sequences | `@modelcontextprotocol/server-sequential-thinking` |
| **Time** | Time and timezone conversion capabilities | `@modelcontextprotocol/server-time` |

### Quick Start Commands

**TypeScript Servers**:
```bash
npx -y @modelcontextprotocol/server-memory
npx -y @modelcontextprotocol/server-filesystem /path/to/allowed/files
```

**Python Servers**:
```bash
# Using uvx (recommended)
uvx mcp-server-git

# Using pip
pip install mcp-server-git
python -m mcp_server_git
```

---

## Popular MCP Servers by Category

### File System Servers

#### Filesystem Server
- **Package**: `@modelcontextprotocol/server-filesystem`
- **Purpose**: Secure file operations with configurable access controls
- **Features**: Read, write, create, delete files within allowed directories
- **Configuration**:
```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/allowed/dir"]
    }
  }
}
```

### Version Control Servers

#### Git Server
- **Package**: `mcp-server-git` (Python)
- **Purpose**: Read, search, and manipulate Git repositories
- **Features**: Git status, diff, log, commit operations
- **Configuration**:
```json
{
  "mcpServers": {
    "git": {
      "command": "uvx",
      "args": ["mcp-server-git", "--repository", "/path/to/repo"]
    }
  }
}
```

#### GitHub Server
- **Package**: `@modelcontextprotocol/server-github`
- **Purpose**: GitHub API integration
- **Features**: Issues, PRs, repositories, organizations
- **Configuration**:
```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "<YOUR_TOKEN>"
      }
    }
  }
}
```

### Database Servers

#### SQLite Server
- **Package**: `mcp-server-sqlite` (Python)
- **Purpose**: SQLite database operations
- **Features**: Query execution, schema inspection, data manipulation
- **Configuration**:
```json
{
  "mcpServers": {
    "sqlite": {
      "command": "uvx",
      "args": ["mcp-server-sqlite", "--db-path", "/path/to/database.db"]
    }
  }
}
```

#### PostgreSQL Server
- **Package**: `mcp-server-postgres` (Python)
- **Purpose**: PostgreSQL database integration
- **Features**: SQL queries, schema introspection, connection pooling
- **Configuration**:
```json
{
  "mcpServers": {
    "postgres": {
      "command": "uvx",
      "args": ["mcp-server-postgres"],
      "env": {
        "DATABASE_URL": "postgresql://user:pass@host:5432/dbname"
      }
    }
  }
}
```

### Communication Servers

#### Slack Server
- **Package**: `@modelcontextprotocol/server-slack`
- **Purpose**: Slack workspace integration
- **Features**: Send messages, read channels, manage threads
- **Configuration**:
```json
{
  "mcpServers": {
    "slack": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-slack"],
      "env": {
        "SLACK_BOT_TOKEN": "<YOUR_BOT_TOKEN>",
        "SLACK_TEAM_ID": "<YOUR_TEAM_ID>"
      }
    }
  }
}
```

### Web/Fetch Servers

#### Fetch Server
- **Package**: `@modelcontextprotocol/server-fetch`
- **Purpose**: Web content fetching and conversion
- **Features**: Fetch URLs, convert HTML to markdown, extract content
- **Configuration**:
```json
{
  "mcpServers": {
    "fetch": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-fetch"]
    }
  }
}
```

### Documentation Servers

#### Context7 (Community)
- **Purpose**: Real-time documentation lookup
- **Features**: Query up-to-date docs for libraries and frameworks
- **Use Case**: Get current documentation instead of potentially outdated training data
- **Note**: Community-maintained, check repository for latest configuration

### Memory/Knowledge Servers

#### Memory Server
- **Package**: `@modelcontextprotocol/server-memory`
- **Purpose**: Knowledge graph-based persistent memory
- **Features**: Store and retrieve context across sessions
- **Configuration**:
```json
{
  "mcpServers": {
    "memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"]
    }
  }
}
```

### Productivity Servers

#### Google Drive Server
- **Purpose**: Google Drive integration
- **Features**: Read, search, and organize files in Google Drive

#### Notion Server
- **Purpose**: Notion workspace integration
- **Features**: Read and write pages, databases, and blocks

#### Linear Server
- **Purpose**: Linear issue tracking
- **Features**: Manage issues, projects, and cycles

### Browser Automation

#### Puppeteer Server
- **Package**: `@modelcontextprotocol/server-puppeteer`
- **Purpose**: Browser automation
- **Features**: Navigate pages, take screenshots, interact with elements

#### Playwright Server
- **Purpose**: Cross-browser automation
- **Features**: Similar to Puppeteer but with multi-browser support

---

## Configuring MCP in Claude Code

### Configuration File Location

| Platform | Path |
|----------|------|
| **macOS** | `~/.claude/settings.json` or project-level `.claude/settings.json` |
| **Windows** | `%USERPROFILE%\.claude\settings.json` |
| **Linux** | `~/.claude/settings.json` |

### Configuration Structure

```json
{
  "mcpServers": {
    "server-name": {
      "command": "command-to-run",
      "args": ["arg1", "arg2"],
      "env": {
        "ENV_VAR": "value"
      }
    }
  }
}
```

### Complete Example Configuration

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/username/Desktop",
        "/Users/username/Documents"
      ]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_xxxxxxxxxxxx"
      }
    },
    "memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"]
    },
    "git": {
      "command": "uvx",
      "args": ["mcp-server-git", "--repository", "/Users/username/projects"]
    },
    "fetch": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-fetch"]
    }
  }
}
```

### Claude Desktop Configuration

For Claude Desktop (not Claude Code), the configuration file is at:

| Platform | Path |
|----------|------|
| **macOS** | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| **Windows** | `%APPDATA%\Claude\claude_desktop_config.json` |

### Enabling MCP Servers

1. Edit the configuration file
2. Add server configurations
3. Restart Claude Code / Claude Desktop
4. Verify servers are connected (check for MCP indicator or run `/mcp` command)

---

## Building Custom MCP Servers

### TypeScript Server Example

```typescript
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

// Create server instance
const server = new Server(
  { name: "my-custom-server", version: "1.0.0" },
  { capabilities: { tools: {} } }
);

// Define tools
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "hello_world",
      description: "Says hello to someone",
      inputSchema: {
        type: "object",
        properties: {
          name: { type: "string", description: "Name to greet" }
        },
        required: ["name"]
      }
    }
  ]
}));

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === "hello_world") {
    const name = request.params.arguments?.name || "World";
    return {
      content: [{ type: "text", text: `Hello, ${name}!` }]
    };
  }
  throw new Error(`Unknown tool: ${request.params.name}`);
});

// Start server
const transport = new StdioServerTransport();
await server.connect(transport);
```

### Python Server Example

```python
import asyncio
from mcp.server import Server
from mcp.server.stdio import stdio_server
from mcp.types import Tool, TextContent

# Create server instance
server = Server("my-custom-server")

@server.list_tools()
async def list_tools() -> list[Tool]:
    return [
        Tool(
            name="hello_world",
            description="Says hello to someone",
            inputSchema={
                "type": "object",
                "properties": {
                    "name": {"type": "string", "description": "Name to greet"}
                },
                "required": ["name"]
            }
        )
    ]

@server.call_tool()
async def call_tool(name: str, arguments: dict) -> list[TextContent]:
    if name == "hello_world":
        greeting_name = arguments.get("name", "World")
        return [TextContent(type="text", text=f"Hello, {greeting_name}!")]
    raise ValueError(f"Unknown tool: {name}")

async def main():
    async with stdio_server() as (read_stream, write_stream):
        await server.run(read_stream, write_stream)

if __name__ == "__main__":
    asyncio.run(main())
```

### Adding Resources

```typescript
// TypeScript example
server.setRequestHandler(ListResourcesRequestSchema, async () => ({
  resources: [
    {
      uri: "myapp://config",
      name: "Application Configuration",
      mimeType: "application/json"
    }
  ]
}));

server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  if (request.params.uri === "myapp://config") {
    return {
      contents: [{
        uri: "myapp://config",
        mimeType: "application/json",
        text: JSON.stringify({ setting1: "value1", setting2: "value2" })
      }]
    };
  }
});
```

### Adding Prompts

```typescript
// TypeScript example
server.setRequestHandler(ListPromptsRequestSchema, async () => ({
  prompts: [
    {
      name: "code-review",
      description: "Review code for best practices",
      arguments: [
        { name: "language", description: "Programming language", required: true },
        { name: "focus", description: "Areas to focus on", required: false }
      ]
    }
  ]
}));

server.setRequestHandler(GetPromptRequestSchema, async (request) => {
  if (request.params.name === "code-review") {
    const language = request.params.arguments?.language || "general";
    return {
      messages: [{
        role: "user",
        content: {
          type: "text",
          text: `Please review the following ${language} code for best practices...`
        }
      }]
    };
  }
});
```

---

## Available SDKs

The Model Context Protocol provides official SDKs for 10 programming languages:

| Language | Repository | Installation |
|----------|------------|--------------|
| **TypeScript** | [typescript-sdk](https://github.com/modelcontextprotocol/typescript-sdk) | `npm install @modelcontextprotocol/sdk` |
| **Python** | [python-sdk](https://github.com/modelcontextprotocol/python-sdk) | `pip install mcp` |
| **Go** | [go-sdk](https://github.com/modelcontextprotocol/go-sdk) | `go get github.com/modelcontextprotocol/go-sdk` |
| **Kotlin** | [kotlin-sdk](https://github.com/modelcontextprotocol/kotlin-sdk) | Maven/Gradle |
| **Swift** | [swift-sdk](https://github.com/modelcontextprotocol/swift-sdk) | Swift Package Manager |
| **Java** | [java-sdk](https://github.com/modelcontextprotocol/java-sdk) | Maven/Gradle |
| **C#** | [csharp-sdk](https://github.com/modelcontextprotocol/csharp-sdk) | NuGet |
| **Ruby** | [ruby-sdk](https://github.com/modelcontextprotocol/ruby-sdk) | `gem install mcp` |
| **Rust** | [rust-sdk](https://github.com/modelcontextprotocol/rust-sdk) | Cargo |
| **PHP** | [php-sdk](https://github.com/modelcontextprotocol/php-sdk) | Composer |

All SDKs provide:
- Full MCP protocol compliance
- Type-safe implementations
- Local and remote server connections
- Comprehensive documentation and examples

---

## Security Considerations

### Core Security Principles

#### 1. User Consent and Control
- Explicit user consent required for data access and operations
- User control over data sharing and actions
- Clear UIs for reviewing and authorizing activities

#### 2. Data Privacy
- Explicit consent before exposing user data to servers
- No transmission of resource data without user consent
- Appropriate access controls for user data

#### 3. Tool Safety
- Treat tools as arbitrary code execution with appropriate caution
- Tool descriptions considered untrusted unless from trusted server
- Explicit user consent before tool invocation

#### 4. LLM Sampling Controls
- User approval for any LLM sampling requests
- User control over sampling occurrence, prompts, and result visibility
- Protocol intentionally limits server visibility into prompts

### Security Best Practices

#### For Server Developers

```typescript
// Example: Input validation
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  // Validate input types
  if (typeof args.path !== "string") {
    throw new Error("Invalid path type");
  }

  // Sanitize paths to prevent directory traversal
  const safePath = path.resolve(allowedDir, path.basename(args.path));
  if (!safePath.startsWith(allowedDir)) {
    throw new Error("Access denied: path outside allowed directory");
  }

  // Proceed with operation
});
```

#### For Server Configuration

1. **Limit directory access**: Only expose necessary directories
2. **Use environment variables**: Never hardcode secrets in config files
3. **Validate server sources**: Only use servers from trusted sources
4. **Review permissions**: Regularly audit which tools are enabled

#### Filesystem Security Example

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/username/safe-directory"
      ]
    }
  }
}
```

**Important**: Only grant access to directories you're comfortable with Claude reading and modifying. The server runs with your user account permissions.

### Authentication for Remote Servers

Remote MCP servers support various authentication methods:
- OAuth 2.0
- Bearer tokens
- API keys
- Username/password

Always verify server authenticity before connecting to remote servers.

---

## Debugging and Troubleshooting

### MCP Inspector

The **MCP Inspector** is the official interactive developer tool for testing and debugging MCP servers.

#### Installation and Usage

```bash
# Run directly via npx
npx @modelcontextprotocol/inspector <command>

# Inspect npm packages
npx -y @modelcontextprotocol/inspector npx @modelcontextprotocol/server-filesystem /Users/username/Desktop

# Inspect PyPI packages
npx @modelcontextprotocol/inspector uvx mcp-server-git --repository ~/code/repo.git

# Inspect local TypeScript servers
npx @modelcontextprotocol/inspector node path/to/server/index.js

# Inspect local Python servers
npx @modelcontextprotocol/inspector uv --directory path/to/server run package-name
```

#### Inspector Features

| Feature | Capabilities |
|---------|--------------|
| **Server Connection Pane** | Select transport type, customize command-line arguments and environment |
| **Resources Tab** | List resources, view metadata, inspect content, test subscriptions |
| **Prompts Tab** | Display prompt templates, show arguments, test with custom inputs |
| **Tools Tab** | List available tools, view schemas, test with custom inputs |
| **Notifications Pane** | View server logs and received notifications |

### Development Workflow

1. **Start Development**
   - Launch Inspector with your server
   - Verify basic connectivity
   - Check capability negotiation

2. **Iterative Testing**
   - Make server changes
   - Rebuild the server
   - Reconnect the Inspector
   - Test affected features
   - Monitor messages

3. **Test Edge Cases**
   - Invalid inputs
   - Missing prompt arguments
   - Concurrent operations
   - Verify error handling

### Log Locations

| Platform | Log Path |
|----------|----------|
| **macOS** | `~/Library/Logs/Claude/mcp*.log` |
| **Windows** | `%APPDATA%\Claude\logs` |

### Common Issues and Solutions

#### Server Not Appearing

1. Check configuration JSON syntax
2. Verify file paths are absolute (not relative)
3. Restart Claude Code / Claude Desktop
4. Check logs for error messages

#### Server Fails to Start

```bash
# Test server manually
npx -y @modelcontextprotocol/server-filesystem /path/to/directory

# Check Node.js version
node --version

# Check Python/uv for Python servers
python --version
uvx --version
```

#### Permission Errors

- Verify the server has access to required directories
- Check environment variables are set correctly
- Ensure API tokens have required scopes

#### Connection Timeouts

- Check network connectivity for remote servers
- Verify firewall settings
- Test with MCP Inspector first

---

## Combining Multiple MCP Servers

### Multi-Server Architecture

MCP hosts can connect to multiple servers simultaneously, each providing different capabilities:

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users/me/projects"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": { "GITHUB_PERSONAL_ACCESS_TOKEN": "..." }
    },
    "memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"]
    },
    "fetch": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-fetch"]
    },
    "sqlite": {
      "command": "uvx",
      "args": ["mcp-server-sqlite", "--db-path", "/path/to/data.db"]
    }
  }
}
```

### Example: Travel Planning Multi-Server Flow

**Servers Involved**:
- Travel Server (flights, hotels, itineraries)
- Weather Server (climate data, forecasts)
- Calendar/Email Server (schedules, communications)

**The Process**:

1. **User invokes prompt**:
```json
{
  "prompt": "plan-vacation",
  "arguments": {
    "destination": "Barcelona",
    "departure_date": "2024-06-15",
    "return_date": "2024-06-22",
    "budget": 3000
  }
}
```

2. **User selects resources**:
- `calendar://my-calendar/June-2024` (Calendar Server)
- `travel://preferences/europe` (Travel Server)

3. **AI processes using tools**:
- Reads resources for context
- Executes `searchFlights()` from Travel Server
- Executes `checkWeather()` from Weather Server
- Executes `bookHotel()` from Travel Server
- Executes `createCalendarEvent()` from Calendar Server
- Executes `sendEmail()` from Email Server

### Server Coordination Patterns

#### Pattern 1: Sequential Pipeline
Server A output feeds into Server B input:
```
Fetch Server -> Extract content -> Memory Server -> Store knowledge
```

#### Pattern 2: Parallel Aggregation
Multiple servers queried simultaneously:
```
GitHub Server  ─┐
                ├─> Aggregate results
Database Server ─┘
```

#### Pattern 3: Conditional Routing
Choose server based on task:
```
Is it a file operation? -> Filesystem Server
Is it a GitHub issue? -> GitHub Server
Is it a database query? -> Database Server
```

---

## Advanced Patterns

### Client Features Usage

#### Elicitation (Requesting User Input)

Servers can request additional information from users:

```typescript
// Server requests user input
{
  method: "elicitation/requestInput",
  params: {
    message: "Please confirm your booking details:",
    schema: {
      type: "object",
      properties: {
        confirmBooking: { type: "boolean" },
        seatPreference: { type: "string", enum: ["window", "aisle"] }
      },
      required: ["confirmBooking"]
    }
  }
}
```

#### Roots (Filesystem Boundaries)

Define workspace boundaries for servers:

```json
{
  "uri": "file:///Users/agent/project-workspace",
  "name": "Project Workspace"
}
```

#### Sampling (LLM Completions)

Servers can request AI completions:

```typescript
{
  messages: [
    {
      role: "user",
      content: "Analyze these options and recommend the best choice..."
    }
  ],
  modelPreferences: {
    hints: [{ name: "claude-sonnet-4-20250514" }],
    intelligencePriority: 0.9
  },
  maxTokens: 1500
}
```

### Performance Optimization

1. **Lazy Loading**: Only connect servers when needed
2. **Caching**: Cache frequently accessed resources
3. **Batching**: Combine multiple tool calls when possible
4. **Timeout Configuration**: Set appropriate timeouts for slow operations

### Error Handling Patterns

```typescript
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  try {
    // Tool implementation
    return { content: [{ type: "text", text: result }] };
  } catch (error) {
    // Return error in content, don't throw
    return {
      content: [{
        type: "text",
        text: `Error: ${error.message}`
      }],
      isError: true
    };
  }
});
```

---

## Resources and Community

### Official Resources

| Resource | URL |
|----------|-----|
| **Official Documentation** | https://modelcontextprotocol.io |
| **GitHub Organization** | https://github.com/modelcontextprotocol |
| **Servers Repository** | https://github.com/modelcontextprotocol/servers |
| **Specification** | https://modelcontextprotocol.io/specification |
| **Blog** | https://blog.modelcontextprotocol.io |

### MCP Inspector

| Resource | URL |
|----------|-----|
| **Inspector Repository** | https://github.com/modelcontextprotocol/inspector |
| **Usage Guide** | https://modelcontextprotocol.io/docs/tools/inspector |

### Community Directories

Several community-maintained directories list available MCP servers:
- **mcp.so** - Community MCP server directory
- **Glama.ai** - MCP server registry
- **Smithery.ai** - MCP server marketplace

### Protocol Versions

| Version | Date |
|---------|------|
| 2025-11-25 | Latest |
| 2025-06-18 | Previous |
| 2025-03-26 | Earlier |
| 2024-11-05 | Initial |

### Getting Help

1. Check official documentation first
2. Use MCP Inspector for debugging
3. Review server logs
4. Check GitHub issues for known problems
5. Join community discussions

---

## Quick Reference Card

### Essential Commands

```bash
# Test filesystem server
npx -y @modelcontextprotocol/server-filesystem /path/to/dir

# Test with Inspector
npx @modelcontextprotocol/inspector npx @modelcontextprotocol/server-filesystem /path

# Install TypeScript SDK
npm install @modelcontextprotocol/sdk

# Install Python SDK
pip install mcp

# Run Python server
uvx mcp-server-git --repository /path/to/repo
```

### Configuration Template

```json
{
  "mcpServers": {
    "server-name": {
      "command": "npx|uvx|node|python",
      "args": ["-y", "package-name", "arg1", "arg2"],
      "env": {
        "API_KEY": "your-key"
      }
    }
  }
}
```

### Protocol Methods

| Category | Methods |
|----------|---------|
| **Lifecycle** | `initialize`, `shutdown` |
| **Tools** | `tools/list`, `tools/call` |
| **Resources** | `resources/list`, `resources/read`, `resources/subscribe` |
| **Prompts** | `prompts/list`, `prompts/get` |
| **Client** | `sampling/complete`, `elicitation/request`, `roots/list` |

---

*Last updated: January 2026*
*Based on MCP Specification Version 2025-11-25*
