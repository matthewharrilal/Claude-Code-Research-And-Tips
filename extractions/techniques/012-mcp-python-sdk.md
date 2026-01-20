# MCP Python SDK: Complete Technical Extraction

---

## You Are Here

```
                    Claude Code Extension Landscape

    Official SDKs                   Custom Integrations
         |                                  |
         v                                  v
+------------------+              +------------------+
| MCP Python SDK   | <-- THIS     | Third-Party      |
| MCP TypeScript   |    DOC       | Plugins          |
| MCP Go/Rust/etc  |              | Community MCP    |
+------------------+              +------------------+
         |                                  |
         v                                  v
+------------------+              +------------------+
| Tools, Resources |              | Gas Town Agents  |
| Prompts          |              | Ralph Loops      |
| Transports       |              | CC Mirror        |
+------------------+              +------------------+
         |                                  |
         +---------------+------------------+
                         |
                         v
              +---------------------+
              |   CLAUDE CODE       |
              |   Enhanced Runtime  |
              +---------------------+
```

**What this document covers:** Complete technical reference for the official MCP Python SDK - architecture, installation, building custom tools, integration patterns with orchestration systems (Ralph, Gas Town, CC-Mirror), and production deployment.

**Why it matters:** MCP is the standardized protocol for extending Claude Code with custom capabilities. The Python SDK enables developers to build tools that integrate seamlessly with Claude Code, Amp, and other MCP-compatible applications.

**Prerequisites:**
- Python 3.10+ (3.11+ recommended)
- Basic understanding of Claude Code workflows
- Familiarity with async Python (asyncio)
- Package manager: uv (recommended) or pip

---

## Table of Contents

1. [What This Is](#what-this-is)
2. [Why It Matters](#why-it-matters)
3. [Architecture Deep Dive](#architecture-deep-dive)
4. [Key Features](#key-features)
5. [Installation and Setup](#installation-and-setup)
6. [Building Custom Tools](#building-custom-tools)
7. [Resources and Prompts](#resources-and-prompts)
8. [Transport Configuration](#transport-configuration)
9. [Integration Patterns](#integration-patterns)
10. [Mental Models](#mental-models)
11. [Checkpoints](#checkpoints)
12. [Troubleshooting](#troubleshooting)
13. [Source Attribution](#source-attribution)

---

## What This Is

### Official Definition

The **MCP Python SDK** is the official Python implementation of the Model Context Protocol, maintained by Anthropic. It enables developers to build:

- **MCP Servers** - Expose tools, resources, and prompts to AI applications
- **MCP Clients** - Connect to MCP servers and consume their capabilities
- **Custom Integrations** - Bridge external systems with Claude Code

### Repository Details

| Attribute | Value |
|-----------|-------|
| **Repository** | github.com/modelcontextprotocol/python-sdk |
| **Stars** | 21.2k+ |
| **License** | MIT |
| **Current Version** | v2 (pre-alpha on main), v1.x (production recommended) |
| **Python Requirement** | 3.10+ |

### The USB-C Analogy

> "Think of MCP like a USB-C port for AI applications. Just as USB-C provides a standardized way to connect electronic devices, MCP provides a standardized way to connect AI applications to external systems."
> -- MCP Documentation

This standardization means:
- Tools you build work with Claude Code, Claude Desktop, and other MCP clients
- You don't need to write custom integrations for each AI application
- The ecosystem grows as more servers become available

---

## Why It Matters

### For Claude Code Users

| Without MCP | With MCP |
|-------------|----------|
| Claude only sees what you paste | Claude can read databases, APIs, files |
| Manual copy-paste of data | Automatic data retrieval |
| No persistent tool access | Tools available across sessions |
| Limited to built-in capabilities | Extensible through custom servers |

### Real-World Capabilities Unlocked

**Data Access:**
- Query PostgreSQL, SQLite, MongoDB directly
- Read files from specific directories
- Access APIs with authentication

**Tool Execution:**
- Run custom scripts and automations
- Control external services (GitHub, Jira, etc.)
- Execute domain-specific operations

**Context Provision:**
- Provide documentation dynamically
- Surface relevant code snippets
- Inject business-specific knowledge

### The Extension Point for Orchestration

MCP tools become the **capability layer** for advanced patterns:
- Ralph loops can invoke MCP tools for verification
- Gas Town agents can use specialized MCP tools for their roles
- CC-Mirror orchestrators can dispatch tool-heavy tasks to workers

---

## Architecture Deep Dive

### SDK Structure

```
src/mcp/
├── __init__.py          # Package initialization
├── types.py             # Core type definitions (Pydantic models)
├── py.typed             # PEP 561 type hint marker
├── cli/                 # Command-line interface tools
├── client/              # MCP client implementation
├── server/              # MCP server implementation
│   └── fastmcp/         # High-level FastMCP framework
├── shared/              # Utilities shared between client/server
└── os/                  # OS integration layer
```

### The Three Primitives

MCP defines three core primitives that servers expose:

#### 1. Tools (Model-Controlled Functions)

Tools are executable functions the AI can invoke. Think of them like POST endpoints.

```python
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("Calculator")

@mcp.tool()
def add(a: float, b: float) -> float:
    """Add two numbers together."""
    return a + b
```

**Characteristics:**
- AI decides when to call them
- Can have side effects
- Require human approval (in most clients)
- Return structured or text results

#### 2. Resources (Data Sources)

Resources expose read-only data to AI applications. Think of them like GET endpoints.

```python
@mcp.resource("config://settings")
def get_settings() -> str:
    """Return application settings."""
    return json.dumps(app_settings)

@mcp.resource("file:///{path}")
def get_file(path: str) -> str:
    """Read a file from the allowed directory."""
    return Path(path).read_text()
```

**Characteristics:**
- Read-only access
- URI-based identification
- Can use templates for dynamic URIs
- Application-controlled (not AI-controlled)

#### 3. Prompts (Reusable Templates)

Prompts provide structured interaction patterns.

```python
@mcp.prompt()
def code_review(code: str) -> str:
    """Template for requesting a code review."""
    return f"""Please review this code:

```
{code}
```

Focus on:
1. Bug potential
2. Performance issues
3. Best practices"""
```

**Characteristics:**
- User-initiated (exposed as slash commands)
- Parameterized for reuse
- Return message sequences

### Client-Server Model

```
┌─────────────────────────────────────────────────────────────┐
│                      MCP HOST (Claude Code)                  │
│                                                              │
│   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│   │ MCP Client 1 │  │ MCP Client 2 │  │ MCP Client 3 │     │
│   └──────┬───────┘  └──────┬───────┘  └──────┬───────┘     │
│          │                 │                 │               │
└──────────┼─────────────────┼─────────────────┼───────────────┘
           │                 │                 │
           │ STDIO           │ HTTP            │ HTTP
           │                 │                 │
    ┌──────▼───────┐  ┌──────▼───────┐  ┌──────▼───────┐
    │ MCP Server   │  │ MCP Server   │  │ MCP Server   │
    │ (Local)      │  │ (Remote)     │  │ (Remote)     │
    │ - Filesystem │  │ - GitHub     │  │ - Postgres   │
    └──────────────┘  └──────────────┘  └──────────────┘
```

**Key Points:**
- One MCP client per server connection
- Local servers use STDIO transport
- Remote servers use HTTP transport
- Host application coordinates all clients

---

## Key Features

### FastMCP Framework

FastMCP is the high-level interface that makes server creation simple:

```python
from mcp.server.fastmcp import FastMCP

# Create server instance
mcp = FastMCP("MyServer")

# Tools use decorators
@mcp.tool()
def my_tool(param: str) -> str:
    """Tool description becomes the AI-visible description."""
    return f"Processed: {param}"

# Resources use URI patterns
@mcp.resource("data://users/{user_id}")
def get_user(user_id: str) -> dict:
    """Fetch user data by ID."""
    return database.get_user(user_id)

# Run the server
if __name__ == "__main__":
    mcp.run()  # Default: stdio transport
```

### Structured Output Validation

Tools automatically validate structured outputs when type annotations support it:

```python
from pydantic import BaseModel

class WeatherData(BaseModel):
    temperature: float
    conditions: str
    humidity: int

@mcp.tool()
def get_weather(location: str) -> WeatherData:
    """Get weather data for a location."""
    # FastMCP automatically validates the return type
    return WeatherData(
        temperature=22.5,
        conditions="Partly cloudy",
        humidity=65
    )
```

**Supported return types:**
- Pydantic BaseModel subclasses
- TypedDicts
- Dataclasses with type hints
- `dict[str, T]` mappings
- Primitive types (wrapped automatically)

### Context Injection

Tools can receive injected context for advanced operations:

```python
from mcp.server.fastmcp import Context
from mcp.server.session import ServerSession

@mcp.tool()
async def long_running_task(
    input_data: str,
    ctx: Context[ServerSession, None]
) -> str:
    """Process data with progress reporting."""

    # Log to client
    await ctx.info(f"Starting processing for: {input_data}")

    # Report progress
    for i in range(10):
        await asyncio.sleep(0.5)
        await ctx.report_progress(progress=i+1, total=10)

    await ctx.info("Processing complete!")
    return f"Processed: {input_data}"
```

**Context capabilities:**
- `ctx.info()`, `ctx.warning()`, `ctx.error()` - Logging
- `ctx.report_progress(progress, total)` - Progress tracking
- `ctx.read_resource(uri)` - Read other resources
- Request metadata access

### Lifespan Management

Initialize and cleanup resources with the lifespan API:

```python
from contextlib import asynccontextmanager
from dataclasses import dataclass

@dataclass
class AppContext:
    db_connection: Connection
    cache: Redis

@asynccontextmanager
async def app_lifespan(server: FastMCP):
    """Manage application lifecycle."""
    # Startup
    db = await connect_database()
    cache = await Redis.connect()

    yield AppContext(db_connection=db, cache=cache)

    # Cleanup
    await db.close()
    await cache.close()

mcp = FastMCP("MyApp", lifespan=app_lifespan)

@mcp.tool()
async def query_data(query: str, ctx: Context) -> str:
    """Query using initialized resources."""
    app = ctx.request_context.lifespan_context
    result = await app.db_connection.execute(query)
    return str(result)
```

### Complex Input Handling

Use Pydantic for sophisticated parameter validation:

```python
from pydantic import BaseModel, Field
from typing import Annotated

class DatabaseQuery(BaseModel):
    table: str
    columns: list[str]
    where: dict[str, str] | None = None
    limit: int = Field(default=100, le=1000)

@mcp.tool()
def query_database(query: DatabaseQuery) -> str:
    """Execute a database query with validation."""
    # query is already validated Pydantic model
    return execute_query(query)

# Or with Annotated for inline validation
@mcp.tool()
def search(
    query: str,
    max_results: Annotated[int, Field(ge=1, le=100)] = 10
) -> list[str]:
    """Search with validated parameters."""
    return perform_search(query, max_results)
```

---

## Installation and Setup

### Method 1: Using uv (Recommended)

```bash
# Install uv if needed
curl -LsSf https://astral.sh/uv/install.sh | sh

# Create new project
uv init my-mcp-server
cd my-mcp-server

# Add MCP SDK with CLI tools
uv add "mcp[cli]"

# Verify installation
uv run python -c "import mcp; print('MCP installed successfully')"
```

### Method 2: Using pip

```bash
# Create virtual environment
python -m venv .venv
source .venv/bin/activate  # Unix
# .venv\Scripts\activate   # Windows

# Install MCP SDK
pip install "mcp[cli]"

# Verify installation
python -c "import mcp; print('MCP installed successfully')"
```

### Checkpoint: Installation Verified

**Verify your state:**
```bash
# Check MCP CLI is available
uv run mcp --help

# Check Python can import MCP
uv run python -c "from mcp.server.fastmcp import FastMCP; print('FastMCP ready')"
```

**You should see:**
```
MCP installed successfully
FastMCP ready
```

**If you don't see this:**
- Check: Python version 3.10+ (`python --version`)
- Check: Virtual environment activated
- Check: Installation completed without errors
- Go back to: Reinstall with `uv add "mcp[cli]"` or `pip install "mcp[cli]"`

---

## Building Custom Tools

### Minimal Server

```python
# server.py
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("Echo Server")

@mcp.tool()
def echo(text: str) -> str:
    """Echo the input text back."""
    return text

if __name__ == "__main__":
    mcp.run()
```

**Run the server:**
```bash
uv run server.py
```

### Weather Tool Example (Complete)

```python
# weather_server.py
from typing import Any
import httpx
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("weather")

NWS_API_BASE = "https://api.weather.gov"
USER_AGENT = "weather-app/1.0"

async def make_nws_request(url: str) -> dict[str, Any] | None:
    """Make a request to the NWS API with proper error handling."""
    headers = {"User-Agent": USER_AGENT, "Accept": "application/geo+json"}
    async with httpx.AsyncClient() as client:
        try:
            response = await client.get(url, headers=headers, timeout=30.0)
            response.raise_for_status()
            return response.json()
        except Exception as e:
            print(f"Error: {e}", file=sys.stderr)
            return None

def format_alert(feature: dict) -> str:
    """Format a weather alert for display."""
    props = feature.get("properties", {})
    return f"""
Event: {props.get("event", "Unknown")}
Area: {props.get("areaDesc", "Unknown")}
Severity: {props.get("severity", "Unknown")}
Description: {props.get("description", "No description")}
"""

@mcp.tool()
async def get_alerts(state: str) -> str:
    """Get weather alerts for a US state.

    Args:
        state: Two-letter US state code (e.g. CA, NY)
    """
    url = f"{NWS_API_BASE}/alerts/active/area/{state.upper()}"
    data = await make_nws_request(url)

    if not data or "features" not in data:
        return "Unable to fetch alerts or no alerts found."

    if not data["features"]:
        return f"No active alerts for {state.upper()}."

    alerts = [format_alert(feature) for feature in data["features"]]
    return "\n---\n".join(alerts)

@mcp.tool()
async def get_forecast(latitude: float, longitude: float) -> str:
    """Get weather forecast for a location.

    Args:
        latitude: Latitude of the location
        longitude: Longitude of the location
    """
    # First get the forecast URL for this location
    points_url = f"{NWS_API_BASE}/points/{latitude},{longitude}"
    points_data = await make_nws_request(points_url)

    if not points_data:
        return "Unable to fetch forecast data for this location."

    # Get the actual forecast
    forecast_url = points_data["properties"]["forecast"]
    forecast_data = await make_nws_request(forecast_url)

    if not forecast_data:
        return "Unable to fetch detailed forecast."

    # Format the forecast periods
    periods = forecast_data["properties"]["periods"]
    forecasts = []
    for period in periods[:5]:
        forecast = f"""
{period["name"]}:
Temperature: {period["temperature"]}deg{period["temperatureUnit"]}
Wind: {period["windSpeed"]} {period["windDirection"]}
Forecast: {period["detailedForecast"]}
"""
        forecasts.append(forecast)

    return "\n---\n".join(forecasts)

def main():
    mcp.run(transport="stdio")

if __name__ == "__main__":
    import sys
    main()
```

### Registering with Claude Code

**Method 1: Command Line**
```bash
# Local stdio server
claude mcp add --transport stdio weather -- uv run weather_server.py

# Remote HTTP server
claude mcp add --transport http weather-api https://api.example.com/mcp
```

**Method 2: JSON Configuration**
```bash
# Add from JSON
claude mcp add-json weather '{"type":"stdio","command":"uv","args":["run","weather_server.py"]}'
```

**Method 3: Edit Configuration File**

Create or edit `~/.claude.json`:
```json
{
  "mcpServers": {
    "weather": {
      "command": "uv",
      "args": ["run", "/path/to/weather_server.py"],
      "env": {}
    }
  }
}
```

### Checkpoint: Server Running

**Verify your state:**
```bash
# Test server directly (it should wait for input)
echo '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"test","version":"1.0.0"}}}' | uv run weather_server.py

# Check in Claude Code
/mcp
```

**You should see:**
- Server responds with JSON-RPC response
- In Claude Code: weather server listed as connected

---

## Resources and Prompts

### Creating Resources

```python
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("DocumentServer")

# Static resource
@mcp.resource("docs://readme")
def get_readme() -> str:
    """Return the README content."""
    return Path("README.md").read_text()

# Dynamic resource with URI template
@mcp.resource("docs://file/{filename}")
def get_doc_file(filename: str) -> str:
    """Read a documentation file."""
    doc_path = Path("docs") / filename
    if not doc_path.exists():
        raise ValueError(f"File not found: {filename}")
    return doc_path.read_text()

# Resource returning binary data
@mcp.resource("images://{name}")
def get_image(name: str) -> bytes:
    """Read an image file."""
    image_path = Path("images") / name
    return image_path.read_bytes()
```

### Creating Prompts

```python
@mcp.prompt()
def explain_code(code: str, language: str = "python") -> str:
    """Template for code explanation requests."""
    return f"""Please explain this {language} code:

```{language}
{code}
```

Include:
1. What the code does
2. How it works step by step
3. Any potential issues or improvements"""

@mcp.prompt()
def debug_error(error: str, code: str) -> str:
    """Template for debugging assistance."""
    return f"""I'm getting this error:

```
{error}
```

In this code:

```python
{code}
```

Please help me:
1. Understand what's causing the error
2. How to fix it
3. How to prevent it in the future"""
```

---

## Transport Configuration

### STDIO Transport (Local Development)

Default and recommended for local servers:

```python
mcp = FastMCP("LocalServer")

# Run with stdio (default)
mcp.run()  # or mcp.run(transport="stdio")
```

**Claude Code configuration:**
```bash
claude mcp add --transport stdio local-server -- uv run server.py
```

**Characteristics:**
- Server runs as subprocess of Claude Code
- Communication via stdin/stdout
- Single client per server instance
- Best for development and desktop use

### Streamable HTTP Transport (Production)

For remote deployment and multiple clients:

```python
mcp = FastMCP("RemoteServer")

# Run with HTTP
mcp.run(
    transport="streamable-http",
    host="0.0.0.0",
    port=8000,
    json_response=True
)
```

**Claude Code configuration:**
```bash
claude mcp add --transport http remote-server https://api.example.com/mcp
```

**Characteristics:**
- Server runs independently
- Supports multiple concurrent clients
- Session management for stateful operations
- CORS support for browser clients

### ASGI Mounting (Advanced)

Mount MCP server in existing web application:

```python
from starlette.applications import Starlette
from starlette.routing import Mount
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("EmbeddedServer")

@mcp.tool()
def my_tool(x: str) -> str:
    return f"Processed: {x}"

# Create ASGI application
app = Starlette(
    routes=[
        Mount("/mcp", app=mcp.sse_app()),  # MCP endpoint
        # ... other routes
    ]
)
```

---

## Integration Patterns

### With Ralph

Ralph loops can leverage MCP tools for verification, data access, and automation.

**Use Case:** Custom verification tools for acceptance criteria

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
    return f"Exit code: {result.returncode}\n{result.stdout}\n{result.stderr}"

@mcp.tool()
def run_tests(pattern: str = "") -> str:
    """Run test suite with optional pattern filter."""
    cmd = ["npm", "test"]
    if pattern:
        cmd.extend(["--", "--grep", pattern])
    result = subprocess.run(
        cmd,
        capture_output=True,
        text=True,
        cwd="/path/to/project"
    )
    return f"Exit code: {result.returncode}\n{result.stdout}\n{result.stderr}"

@mcp.tool()
def read_prd() -> str:
    """Read current PRD status."""
    import json
    with open("/path/to/project/plans/prd.json") as f:
        prd = json.load(f)
    incomplete = [s for s in prd["userStories"] if not s["passes"]]
    return json.dumps({"incomplete": incomplete}, indent=2)

@mcp.tool()
def update_progress(entry: str) -> str:
    """Append entry to progress.txt."""
    with open("/path/to/project/plans/progress.txt", "a") as f:
        f.write(f"\n{entry}\n")
    return "Progress updated"
```

**Configuration for Ralph:**
```bash
# Add to Claude Code
claude mcp add --transport stdio ralph-tools -- uv run ralph_tools_server.py
```

**In prompt.md:**
```markdown
## Available Tools

Use these MCP tools for verification:
- `run_typecheck` - Verify type safety
- `run_tests` - Run test suite
- `read_prd` - Check task status
- `update_progress` - Log learnings
```

### With Gas Town

Gas Town agents can have specialized MCP tools matching their roles.

**Use Case:** Role-specific tool servers

```python
# witness_tools_server.py (for Witness role)
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("WitnessTools")

@mcp.tool()
def check_test_coverage(module: str) -> str:
    """Check test coverage for a module."""
    # Implementation
    pass

@mcp.tool()
def run_lint(files: list[str]) -> str:
    """Run linting on specified files."""
    pass

@mcp.tool()
def verify_build() -> str:
    """Verify the build completes successfully."""
    pass
```

```python
# refinery_tools_server.py (for Refinery role)
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("RefineryTools")

@mcp.tool()
def check_merge_queue() -> str:
    """Check status of merge queue."""
    pass

@mcp.tool()
def trigger_ci(branch: str) -> str:
    """Trigger CI for a branch."""
    pass

@mcp.tool()
def merge_branch(source: str, target: str) -> str:
    """Merge source into target branch."""
    pass
```

**Configuration Pattern:**
```json
{
  "mcpServers": {
    "witness-tools": {
      "command": "uv",
      "args": ["run", "witness_tools_server.py"],
      "env": {"ROLE": "witness"}
    },
    "refinery-tools": {
      "command": "uv",
      "args": ["run", "refinery_tools_server.py"],
      "env": {"ROLE": "refinery"}
    }
  }
}
```

### With CC-Mirror

MCP tools enhance CC-Mirror orchestration by providing specialized capabilities to workers.

**Use Case:** Worker-specific tool access

```python
# orchestration_tools_server.py
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("OrchestrationTools")

@mcp.tool()
def analyze_codebase(path: str) -> str:
    """Deep analysis of codebase structure for research workers."""
    pass

@mcp.tool()
def generate_tests(module: str, coverage_target: int = 80) -> str:
    """Generate tests for a module (for test workers)."""
    pass

@mcp.tool()
def review_changes(pr_number: int) -> str:
    """Review PR changes (for review workers)."""
    pass

@mcp.tool()
def fetch_external_docs(url: str) -> str:
    """Fetch and parse external documentation."""
    pass
```

**Integration with TaskCreate pattern:**
```
Orchestrator creates task: "Implement user authentication"
  -> Worker claims task
  -> Worker uses analyze_codebase tool to understand existing patterns
  -> Worker implements feature
  -> Worker uses generate_tests tool
  -> Worker marks task complete
```

### Combination Matrix

| MCP Python + | Use Case | Complexity | Value |
|--------------|----------|------------|-------|
| **Ralph** | Custom verification tools, PRD management, automated testing | Medium | Very High |
| **Gas Town** | Role-specific tooling (Witness, Refinery, Polecat), scalable capabilities | Medium | Very High |
| **CC-Mirror** | Worker specialization, research tools, cross-codebase analysis | Medium | Very High |
| **Playwright** | Browser-based verification, UI testing, screenshot capture | Medium | High |
| **Database** | Direct data access, schema introspection, query execution | Low | High |
| **External APIs** | GitHub, Jira, Slack integration, third-party services | Low | High |
| **Custom Workflows** | Domain-specific automation, business logic tools | Medium | Very High |

### Universal Integration Pattern

```python
# universal_tools_server.py
"""
Universal MCP server that provides tools for any orchestration pattern.
"""
from mcp.server.fastmcp import FastMCP
import os

mcp = FastMCP("UniversalTools")

# Environment detection
ORCHESTRATION_MODE = os.getenv("ORCHESTRATION_MODE", "standalone")

@mcp.tool()
def execute_shell(command: str, cwd: str = ".") -> str:
    """Execute a shell command safely."""
    import subprocess
    result = subprocess.run(
        command,
        shell=True,
        capture_output=True,
        text=True,
        cwd=cwd,
        timeout=300
    )
    return f"Exit: {result.returncode}\nStdout:\n{result.stdout}\nStderr:\n{result.stderr}"

@mcp.tool()
def read_file(path: str) -> str:
    """Read a file's contents."""
    return open(path).read()

@mcp.tool()
def write_file(path: str, content: str) -> str:
    """Write content to a file."""
    with open(path, "w") as f:
        f.write(content)
    return f"Written {len(content)} bytes to {path}"

@mcp.tool()
def append_file(path: str, content: str) -> str:
    """Append content to a file."""
    with open(path, "a") as f:
        f.write(content)
    return f"Appended {len(content)} bytes to {path}"

@mcp.tool()
def git_status(repo_path: str = ".") -> str:
    """Get git status of a repository."""
    import subprocess
    result = subprocess.run(
        ["git", "status", "--porcelain"],
        capture_output=True,
        text=True,
        cwd=repo_path
    )
    return result.stdout or "Clean working tree"

@mcp.tool()
def git_diff(repo_path: str = ".", staged: bool = False) -> str:
    """Get git diff."""
    import subprocess
    cmd = ["git", "diff"]
    if staged:
        cmd.append("--staged")
    result = subprocess.run(
        cmd,
        capture_output=True,
        text=True,
        cwd=repo_path
    )
    return result.stdout or "No changes"

if __name__ == "__main__":
    mcp.run()
```

---

## Mental Models

### Model 1: The Tool is the API

```
Traditional Approach:
  Developer -> Writes code -> Calls API -> Gets result

MCP Approach:
  Developer -> Defines tool -> Claude calls tool -> Claude uses result

The inversion:
  You define WHAT can be done (tool)
  AI decides WHEN to do it (invocation)
  You control HOW it's done (implementation)
```

### Model 2: Resources as Context Windows

```
Without Resources:
  [Fixed Context] -> Claude -> [Response]

With Resources:
  [Dynamic Context from Resources] -> Claude -> [Informed Response]

Resources extend Claude's knowledge at runtime, not training time.
```

### Model 3: The MCP Sandwich

```
         ┌─────────────────────────────────────┐
         │          Your Application           │
         │         (Claude Code, etc.)         │
         └─────────────────┬───────────────────┘
                           │
         ┌─────────────────▼───────────────────┐
         │           MCP Protocol              │
         │  (JSON-RPC, Capability Negotiation) │
         └─────────────────┬───────────────────┘
                           │
         ┌─────────────────▼───────────────────┐
         │          Your MCP Server            │
         │     (Tools, Resources, Prompts)     │
         └─────────────────┬───────────────────┘
                           │
         ┌─────────────────▼───────────────────┐
         │        External Systems             │
         │    (Databases, APIs, Files, etc.)   │
         └─────────────────────────────────────┘

MCP is the bread in the middle - standardized interface layer.
```

### Model 4: Orchestration Enhancement

```
Without MCP:
  Ralph/Gas Town/CC-Mirror -> Claude -> Text-based actions only

With MCP:
  Ralph/Gas Town/CC-Mirror -> Claude + MCP Tools -> Real-world actions

MCP transforms orchestration from "talking about doing" to "actually doing."
```

---

## Checkpoints

### Checkpoint 1: First Tool Running

**Where you are:** You have created a basic MCP server with one tool.

**Verify your state:**
```bash
# Server file exists and has correct structure
grep -q "@mcp.tool()" server.py && echo "Tool decorator found"

# Server runs without errors
timeout 2 uv run server.py || echo "Server started (timeout expected)"
```

**You should see:**
- Tool decorator found
- Server starts and waits for input

### Checkpoint 2: Registered with Claude Code

**Where you are:** MCP server is registered and visible in Claude Code.

**Verify your state:**
```bash
# Check Claude Code sees the server
claude mcp list | grep -q "your-server-name"

# Test in Claude Code
/mcp
```

**You should see:**
- Server listed in `claude mcp list`
- Server appears in `/mcp` output as connected

### Checkpoint 3: Tool Successfully Invoked

**Where you are:** Claude has successfully called your custom tool.

**Verify your state:**
1. Ask Claude to use your tool
2. Check the tool output appears in response
3. Verify any side effects occurred

**Example test:**
```
User: "Use the weather tool to get alerts for California"
Claude: [Invokes get_alerts with state="CA"]
Output: [Weather alert data]
```

### Checkpoint 4: Integration with Orchestration

**Where you are:** MCP tools working within Ralph/Gas Town/CC-Mirror.

**Verify your state:**
- Ralph prompt.md references MCP tools
- Tools invoked during automated iterations
- Results influence task completion

---

## Troubleshooting

### Server Not Appearing in Claude Code

**Symptoms:** Server not listed in `/mcp` output

**Diagnosis:**
```bash
# Check configuration
claude mcp get your-server-name

# Check for syntax errors
cat ~/.claude.json | jq .
```

**Solutions:**
1. Verify absolute paths in configuration
2. Restart Claude Code completely
3. Check server runs standalone: `uv run server.py`

### Tool Calls Failing

**Symptoms:** Claude tries to call tool but gets error

**Diagnosis:**
```bash
# Check Claude Code logs
tail -n 50 ~/Library/Logs/Claude/mcp*.log
```

**Solutions:**
1. Verify tool function has correct type hints
2. Check for async/sync mismatch
3. Ensure all dependencies installed
4. Add error handling in tool function

### Server Crashes on Input

**Symptoms:** Server exits when receiving requests

**Diagnosis:**
```python
# Add debug logging
import sys
print("Debug: received request", file=sys.stderr)
```

**Solutions:**
1. Never print to stdout (corrupts JSON-RPC)
2. Use stderr for logging
3. Catch exceptions in tool functions
4. Return error strings instead of raising

### Rate Limiting Issues

**Symptoms:** Tools work initially, then fail

**Diagnosis:**
Check for external API rate limits in tool implementations

**Solutions:**
```python
@mcp.tool()
async def rate_limited_tool(input: str) -> str:
    """Tool with retry logic."""
    import asyncio
    for attempt in range(3):
        try:
            return await external_api_call(input)
        except RateLimitError:
            await asyncio.sleep(2 ** attempt)
    return "Rate limit exceeded, try again later"
```

### Common Error Messages

| Error | Cause | Solution |
|-------|-------|----------|
| `ModuleNotFoundError: mcp` | SDK not installed | `uv add "mcp[cli]"` |
| `Transport error` | Server crashed | Check server logs |
| `Tool not found` | Registration issue | Restart Claude Code |
| `Invalid JSON` | stdout pollution | Use stderr for logging |
| `Timeout` | Tool taking too long | Add timeout handling |

### Debug Mode

Run server with verbose output:
```bash
# Development mode with MCP Inspector
uv run mcp dev server.py

# Or add debug logging
PYTHONVERBOSE=1 uv run server.py 2>&1 | tee debug.log
```

---

## Source Attribution

### Primary Sources

| Source | Type | Reliability |
|--------|------|-------------|
| github.com/modelcontextprotocol/python-sdk | Official Repository | Authoritative |
| modelcontextprotocol.io | Official Documentation | Authoritative |
| code.claude.com/docs/en/mcp | Anthropic Documentation | Authoritative |

### Repository Statistics (as of 2026-01)

- **Stars:** 21.2k+
- **Forks:** 3k+
- **Contributors:** Active Anthropic team
- **License:** MIT

### Version Information

- **v2 (pre-alpha):** Main branch, in development
- **v1.x:** Production recommended, security updates for 6 months post-v2 release
- **Stable release:** Q1 2026 expected for v2

### Related Documentation

- Protocol Specification: modelcontextprotocol.io/specification/latest
- TypeScript SDK: github.com/modelcontextprotocol/typescript-sdk
- Official Servers: github.com/modelcontextprotocol/servers

---

## Tags

`#mcp` `#python-sdk` `#tools` `#resources` `#prompts` `#fastmcp` `#integration` `#orchestration` `#ralph` `#gas-town` `#cc-mirror` `#custom-tools` `#transports` `#stdio` `#http`

---

*Extracted and synthesized from official MCP documentation, Python SDK repository, and integration pattern analysis. Last updated: 2026-01-19.*
