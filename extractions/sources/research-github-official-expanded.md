# Official Anthropic GitHub Repositories - Comprehensive Research

> **Research Date:** January 9, 2026
> **Source:** GitHub Official Repositories
> **Scope:** Complete analysis of Anthropic's official GitHub presence

---

## D-FINAL Connection

**Sources contributed to:** All D-FINAL files
**Last enhanced:** 2026-01-18 (Phase 2B)

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Claude Code Repository](#claude-code-repository)
3. [Official SDKs](#official-sdks)
4. [Claude Cookbooks](#claude-cookbooks)
5. [Educational Resources](#educational-resources)
6. [Skills Repository](#skills-repository)
7. [Official Plugins](#official-plugins)
8. [MCP (Model Context Protocol)](#mcp-model-context-protocol)
9. [Quickstart Projects](#quickstart-projects)
10. [Industry-Specific Repositories](#industry-specific-repositories)
11. [Release Notes & Changelog](#release-notes--changelog)
12. [Open Issues & Feature Requests](#open-issues--feature-requests)
13. [Recent Pull Requests](#recent-pull-requests)

---

## Executive Summary

Anthropic maintains a comprehensive ecosystem of open-source tools, SDKs, and educational resources on GitHub. Key repositories include:

| Repository | Stars | Description |
|------------|-------|-------------|
| claude-code | 54.1k | Agentic coding tool for terminal |
| skills | 36.5k | Public repository for Agent Skills |
| claude-cookbooks | 30.8k | Jupyter notebooks with Claude examples |
| prompt-eng-interactive-tutorial | 28.6k | Interactive prompt engineering course |
| courses | 18k | Anthropic's educational courses |
| claude-quickstarts | 13.4k | Quick-deploy application templates |
| claude-plugins-official | 2.3k | Official plugins directory |

---

## Claude Code Repository

**Repository:** [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)
**Stars:** 54.1k | **Forks:** 3.9k | **Contributors:** 48

### Overview

Claude Code is an agentic coding tool that operates in your terminal, understands your codebase, and accelerates development through natural language commands. It's available on:
- Terminal (primary interface)
- IDE integrations (VS Code, JetBrains)
- GitHub (via @claude mentions)
- Web interface (async cloud execution)

### Installation Methods

```bash
# macOS/Linux (Recommended)
curl -fsSL https://claude.ai/install.sh | bash

# Homebrew (macOS)
brew install --cask claude-code

# Windows PowerShell
irm https://claude.ai/install.ps1 | iex

# Windows CMD
curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd

# NPM (requires Node.js 18+)
npm install -g @anthropic-ai/claude-code
```

### Core Features

1. **Build features from descriptions** - Convert plain English to working code
2. **Debug and fix issues** - Analyze codebases to identify and fix bugs
3. **Navigate any codebase** - Answer questions about project structure
4. **Automate tedious tasks** - Handle lint fixes, merge conflicts, release notes
5. **Git workflow management** - Commits, PRs, branch operations

### Directory Structure

```
.claude/                    # Configuration directory
  commands/                 # Custom slash commands
.claude-plugin/             # Plugin configurations
plugins/                    # Official plugins
examples/hooks/             # Integration examples
scripts/                    # Utility scripts
```

### Key Commands

- `/bug` - Report issues directly within Claude Code
- `/plugin` - Manage plugin installations
- `/terminal-setup` - Configure terminal integration
- `/theme` - Customize appearance
- `/context` - View context visualization
- `/tasks` - Manage task queue

### Language Distribution

| Language | Percentage |
|----------|------------|
| Shell | 48.2% |
| Python | 32.7% |
| TypeScript | 12.5% |
| PowerShell | 4.5% |
| Dockerfile | 2.1% |

### Data Practices

- **Collection:** Usage data, conversation data, user feedback
- **Privacy Safeguards:** Limited retention, restricted access
- **No Model Training:** Feedback not used for training
- **Legal:** [Commercial Terms](https://www.anthropic.com/legal/commercial-terms), [Privacy Policy](https://www.anthropic.com/legal/privacy)

---

## Official SDKs

Anthropic provides official SDKs for major programming languages, all following consistent API patterns.

### Python SDK

**Repository:** [github.com/anthropics/anthropic-sdk-python](https://github.com/anthropics/anthropic-sdk-python)

```bash
pip install anthropic

# Optional features
pip install anthropic[aiohttp]   # aiohttp support
pip install anthropic[bedrock]   # AWS Bedrock
pip install anthropic[vertex]    # Google Vertex AI
```

**Key Features:**
- Synchronous and async support
- Streaming responses
- Tool use / function calling
- Token counting
- Message batches
- File uploads
- Auto-pagination
- AWS Bedrock & Google Vertex integration

**Basic Usage:**
```python
from anthropic import Anthropic

client = Anthropic()
message = client.messages.create(
    max_tokens=1024,
    messages=[{"role": "user", "content": "Hello, Claude"}],
    model="claude-sonnet-4-5-20250929",
)
```

**Requirements:** Python 3.9+

---

### TypeScript SDK

**Repository:** [github.com/anthropics/anthropic-sdk-typescript](https://github.com/anthropics/anthropic-sdk-typescript)
**Stars:** 1.5k

```bash
npm install @anthropic-ai/sdk
```

**Key Features:**
- Full TypeScript support
- Streaming with helper methods
- Tool calling with Zod integration
- Message batches API
- File uploads
- Auto-pagination
- Custom fetch support

**Basic Usage:**
```typescript
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic();
const message = await client.messages.create({
    max_tokens: 1024,
    messages: [{ role: 'user', content: 'Hello, Claude' }],
    model: 'claude-sonnet-4-5-20250929',
});
```

**Requirements:** TypeScript >= 4.9, Node.js 20+ LTS

---

### Go SDK

**Repository:** [github.com/anthropics/anthropic-sdk-go](https://github.com/anthropics/anthropic-sdk-go)
**Stars:** 694

```bash
go get -u 'github.com/anthropics/anthropic-sdk-go@v1.19.0'
```

**Key Features:**
- Idiomatic Go patterns
- Streaming support
- Tool calling
- Multi-turn conversations
- System prompts
- AWS Bedrock & Vertex AI support

**Basic Usage:**
```go
client := anthropic.NewClient()
message, err := client.Messages.New(context.TODO(), anthropic.MessageNewParams{
    MaxTokens: 1024,
    Messages: []anthropic.MessageParam{
        anthropic.NewUserMessage(anthropic.NewTextBlock("Hello, Claude")),
    },
    Model: anthropic.ModelClaudeOpus4_5_20251101,
})
```

**Requirements:** Go 1.22+

---

### Ruby SDK

**Repository:** [github.com/anthropics/anthropic-sdk-ruby](https://github.com/anthropics/anthropic-sdk-ruby)
**Stars:** 272 | **License:** MIT

```ruby
gem "anthropic", "~> 1.16.3"
```

**Key Features:**
- Sorbet/RBS/RBI type definitions
- Connection pooling via net/http
- SSE streaming
- Tool calling with BaseModel
- AWS Bedrock & Vertex AI support

**Basic Usage:**
```ruby
anthropic = Anthropic::Client.new
message = anthropic.messages.create(
  max_tokens: 1024,
  messages: [{role: "user", content: "Hello, Claude"}],
  model: :"claude-opus-4-5-20251101"
)
```

**Requirements:** Ruby 3.2.0+

---

### C# SDK

**Repository:** [github.com/anthropics/anthropic-sdk-csharp](https://github.com/anthropics/anthropic-sdk-csharp)
**Stars:** 104 | **Status:** Beta

```bash
dotnet add package Anthropic
```

**Key Features:**
- .NET Standard 2.0+ support
- Streaming responses
- IChatClient integration
- Per-request configuration
- Binary response handling

**Basic Usage:**
```csharp
AnthropicClient client = new();
var message = await client.Messages.Create(new MessageCreateParams {
    MaxTokens = 1024,
    Messages = [new() { Role = Role.User, Content = "Hello, Claude" }],
    Model = Model.ClaudeOpus4_5_20251101,
});
```

---

### PHP SDK

**Repository:** [github.com/anthropics/anthropic-sdk-php](https://github.com/anthropics/anthropic-sdk-php)
**Stars:** 74 | **Status:** Beta

```bash
composer require "anthropic-ai/sdk 0.4.0"
```

**Key Features:**
- SSE streaming
- Auto-pagination
- Automatic retries
- Comprehensive error handling

**Requirements:** PHP 8.1.0+

---

### Java/Kotlin SDK

**Repository:** [github.com/anthropics/anthropic-sdk-java](https://github.com/anthropics/anthropic-sdk-java)
**Stars:** 202

Primary language: Kotlin with Java interoperability.

---

## Claude Cookbooks

**Repository:** [github.com/anthropics/anthropic-cookbook](https://github.com/anthropics/anthropic-cookbook)
**Stars:** 30.8k | **License:** MIT | **Contributors:** 61

A comprehensive collection of Jupyter notebooks demonstrating effective Claude usage.

### Categories

#### 1. Capabilities
- **Classification** - Text and data classification techniques
- **RAG (Retrieval Augmented Generation)** - External knowledge integration
- **Summarization** - Effective text summarization methods

#### 2. Tool Use & Integration
- Customer service agent implementation
- Calculator tool integration
- SQL query execution
- Function calling patterns

#### 3. Third-Party Integrations
- **Vector Databases** - Pinecone for RAG
- **Wikipedia Search** - Knowledge augmentation
- **Web Pages** - Content processing
- **Voyage AI** - Embeddings creation

#### 4. Multimodal Capabilities
- Vision/image getting started
- Chart and graph interpretation
- PowerPoint analysis
- Form extraction
- Stable Diffusion image generation

#### 5. Advanced Techniques
- **Sub-agents** - Haiku as sub-agent with Opus
- **PDF Processing** - Upload and parse PDFs
- **Automated Evaluations** - Prompt evaluation automation
- **JSON Mode** - Consistent JSON output
- **Content Moderation** - Building moderation filters
- **Prompt Caching** - Efficient caching techniques

### Additional Directories

| Directory | Purpose |
|-----------|---------|
| `claude_agent_sdk/` | Agent framework examples |
| `coding/` | Code generation |
| `extended_thinking/` | Extended reasoning patterns |
| `finetuning/` | Model fine-tuning |
| `observability/` | Monitoring and logging |
| `skills/` | Skill implementations |
| `tool_evaluation/` | Tool assessment |

---

## Educational Resources

### Courses Repository

**Repository:** [github.com/anthropics/courses](https://github.com/anthropics/courses)
**Stars:** 18k

#### Available Courses (Recommended Order)

1. **Anthropic API Fundamentals**
   - Getting an API key
   - Model parameters
   - Multimodal prompts
   - Streaming responses

2. **Prompt Engineering Interactive Tutorial**
   - Comprehensive step-by-step guide
   - Also available as [AWS Workshop](https://catalog.us-east-1.prod.workshops.aws/workshops/0644c9e9-5b82-45f2-8835-3b5aa30b1848)

3. **Real World Prompting**
   - Complex, real-world scenarios
   - Available as [Google Vertex version](https://github.com/anthropics/courses/tree/vertex/real_world_prompting)

4. **Prompt Evaluations**
   - Production-grade prompt evaluations
   - Quality measurement

5. **Tool Use**
   - Complete tool use implementation
   - Integration workflows

> **Note:** Courses use Claude 3 Haiku to minimize API costs.

---

### Prompt Engineering Interactive Tutorial

**Repository:** [github.com/anthropics/prompt-eng-interactive-tutorial](https://github.com/anthropics/prompt-eng-interactive-tutorial)
**Stars:** 28.6k

#### Course Structure (9 Chapters)

**Beginner Level:**
1. Basic Prompt Structure
2. Being Clear and Direct
3. Assigning Roles

**Intermediate Level:**
4. Separating Data from Instructions
5. Formatting Output & Speaking for Claude
6. Precognition (Thinking Step by Step)
7. Using Examples

**Advanced Level:**
8. Avoiding Hallucinations
9. Building Complex Prompts (Industry Use Cases)
   - Chatbot development
   - Legal services
   - Financial services
   - Coding applications

**Appendix:**
- Chaining Prompts
- Tool Use
- Search & Retrieval

#### Resources
- [Answer Key (Google Sheets)](https://docs.google.com/spreadsheets/d/1jIxjzUWG-6xBVIa2ay6yDpLyeuOh_hR_ZB75a47KX_E)
- [User-friendly Version](https://docs.google.com/spreadsheets/d/19jzLgRruG9kjUQNKtCg1ZjdD6l6weA6qRXG5zLIAhC8)

---

## Skills Repository

**Repository:** [github.com/anthropics/skills](https://github.com/anthropics/skills)
**Stars:** 36.5k | **Forks:** 3.3k

### What Are Skills?

Skills are folders of instructions, scripts, and resources that Claude loads dynamically to improve performance on specialized tasks:
- Creating documents with brand guidelines
- Analyzing data using organizational workflows
- Automating personal tasks

### Repository Structure

```
anthropics/skills/
├── skills/                 # Skill examples
├── spec/                   # Agent Skills specification
├── template/               # Skill template
├── .claude-plugin/         # Plugin configuration
└── README.md
```

### Creating a Skill

**Minimal Structure:**
```markdown
---
name: my-skill-name
description: A clear description of what this skill does
---

# My Skill Name

[Instructions Claude will follow when skill is active]

## Examples
- Example usage 1
- Example usage 2

## Guidelines
- Guideline 1
- Guideline 2
```

### Using Skills

**Claude Code:**
```bash
# Add marketplace
/plugin marketplace add anthropics/skills

# Install skill
/plugin install document-skills@anthropic-agent-skills
```

**Claude.ai:**
- Available to paid plans via Skills interface

**Claude API:**
- Use pre-built Anthropic skills
- Upload custom skills via API

### Skill Categories

- **Creative & Design** - Art, music, design
- **Development & Technical** - Testing, MCP server generation
- **Enterprise & Communication** - Branding workflows
- **Document Skills** - DOCX, PDF, PPTX, XLSX manipulation

---

## Official Plugins

**Repository:** [github.com/anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official)
**Stars:** 2.3k | **Forks:** 270

### Plugin Directory Structure

```
claude-plugins-official/
├── plugins/                # Internal Anthropic plugins
├── external_plugins/       # Third-party community plugins
└── README.md
```

### Available Official Plugins

#### 1. agent-sdk-dev
Development kit for Claude Agent SDK
- Command: `/new-sdk-app`
- Agents: `agent-sdk-verifier-py`, `agent-sdk-verifier-ts`

#### 2. claude-opus-4-5-migration
Migrate from Sonnet 4.x/Opus 4.1 to Opus 4.5
- Automated model string migration
- Beta header updates
- Prompt adjustments

#### 3. code-review
Automated PR review with confidence scoring
- Command: `/code-review`
- 5 parallel Sonnet agents for different review aspects

#### 4. commit-commands
Git workflow automation
- Commands: `/commit`, `/commit-push-pr`, `/clean_gone`

#### 5. explanatory-output-style
Educational insights about implementation choices
- Hook: `SessionStart`

#### 6. feature-dev
7-phase feature development workflow
- Command: `/feature-dev`
- Agents: `code-explorer`, `code-architect`, `code-reviewer`

#### 7. frontend-design
Production-grade frontend interfaces
- Skill: `frontend-design`

#### 8. hookify
Create custom hooks from conversation patterns
- Commands: `/hookify`, `/hookify:list`, `/hookify:configure`
- Agent: `conversation-analyzer`

#### 9. learning-output-style
Interactive learning mode
- Hook: `SessionStart`

#### 10. plugin-dev
Plugin development toolkit
- Command: `/plugin-dev:create-plugin`
- 8-phase guided workflow

#### 11. pr-review-toolkit
Comprehensive PR review agents
- Command: `/pr-review-toolkit:review-pr`
- Agents: `comment-analyzer`, `pr-test-analyzer`, `silent-failure-hunter`, etc.

#### 12. ralph-wiggum
Interactive self-referential AI loops
- Commands: `/ralph-loop`, `/cancel-ralph`
- Hook: `Stop`

#### 13. security-guidance
Security reminder hook
- Hook: `PreToolUse`
- Monitors 9 security patterns (XSS, command injection, eval, etc.)

### Plugin Structure

```
plugin-name/
├── .claude-plugin/
│   └── plugin.json
├── commands/
├── agents/
├── skills/
├── hooks/
├── .mcp.json
└── README.md
```

---

## MCP (Model Context Protocol)

**Specification:** [modelcontextprotocol.io](https://modelcontextprotocol.io)
**Organization:** [github.com/modelcontextprotocol](https://github.com/modelcontextprotocol)

### What is MCP?

MCP is an open-source standard for connecting AI applications to external systems. Think of it as a **USB-C port for AI** - standardized connections to data sources, tools, and workflows.

### Key Capabilities

- Access data sources (files, databases)
- Use tools (search, calculators)
- Execute workflows (specialized prompts)

### Architecture

- **MCP Servers** - Expose data, tools, resources
- **MCP Clients** - Connect to servers, request capabilities
- **Standardized Protocol** - Cross-implementation interoperability

### Official SDKs

- Python SDK: `github.com/modelcontextprotocol/python-sdk`
- TypeScript SDK: `github.com/modelcontextprotocol/typescript-sdk`

### Specification Versions

| Version | Status |
|---------|--------|
| 2025-11-25 | Latest stable |
| 2025-06-18 | Previous |
| 2025-03-26 | Previous |
| 2024-11-05 | Previous |
| Draft | Experimental |

---

## Quickstart Projects

**Repository:** [github.com/anthropics/claude-quickstarts](https://github.com/anthropics/claude-quickstarts)
**Stars:** 13.4k | **License:** MIT

### Available Projects

#### 1. Customer Support Agent
**Location:** `/customer-support-agent`

AI-powered customer support system:
- Natural language understanding
- Knowledge base access
- Customer interaction handling

#### 2. Financial Data Analyst
**Location:** `/financial-data-analyst`

Claude + interactive data visualization:
- Financial data analysis
- Chat-based interface
- Interactive charts

#### 3. Computer Use Demo
**Location:** `/computer-use-demo`

Claude controlling a desktop computer:
- `computer_use_20251124` tool version
- Zoom actions support
- Full desktop automation

#### 4. Browser Tools API Demo
**Location:** `/browser-use-demo`

Browser automation reference implementation:
- Navigation
- DOM inspection
- Form manipulation
- Playwright integration

#### 5. Autonomous Coding Agent
**Location:** `/autonomous-coding`

Agent SDK-powered coding agent:
- Two-agent pattern (initializer + coding agent)
- Multi-session development
- Git-based progress persistence
- Incremental feature implementation

---

## Industry-Specific Repositories

### Life Sciences

**Repository:** [github.com/anthropics/life-sciences](https://github.com/anthropics/life-sciences)
**Stars:** 120

#### Remote MCP Servers

| Plugin | Requirements | Purpose |
|--------|--------------|---------|
| `pubmed@life-sciences` | None | Biomedical literature search |
| `biorender@life-sciences` | Free account | Scientific illustrations |
| `synapse@life-sciences` | Free account | Data management |
| `wiley-scholar-gateway@life-sciences` | Free account | Academic publications |
| `10x-genomics@life-sciences` | Paid account | Genomics analysis |

#### Skills

1. **Single-Cell RNA-seq QC** (`single-cell-rna-qc@life-sciences`)
   - Automated QC workflow
   - MAD-based filtering
   - Visualizations

2. **Instrument Data to Allotrope** (`instrument-data-to-allotrope@life-sciences`)
   - ASM format conversion

3. **Nextflow Development** (`nextflow-development@life-sciences`)
   - nf-core pipelines (rnaseq, sarek, atacseq)
   - GEO/SRA data download
   - Auto pipeline detection

4. **scvi-tools** (`scvi-tools@life-sciences`)
   - Deep learning for single-cell omics
   - scVI, scANVI, totalVI, PeakVI, MultiVI

---

### Healthcare

**Repository:** [github.com/anthropics/healthcare](https://github.com/anthropics/healthcare)
**Stars:** 6

#### Skills

1. **FHIR Developer** (`fhir-developer@healthcare`)
   - HL7 FHIR R4 expertise
   - LOINC, SNOMED CT, RxNorm coding
   - Validation patterns

2. **Prior Authorization Review** (`prior-auth@healthcare`)
   - NPI, ICD-10, CMS Coverage, CPT checks
   - Medical necessity summarization

3. **Clinical Trial Protocol Generator** (`clinical-trial-protocol@healthcare`)
   - FDA/NIH-compliant protocols
   - Requires scipy, numpy

#### Remote MCP Servers

| Service | Description |
|---------|-------------|
| CMS Coverage | CMS Coverage Database access |
| NPI Registry | US National Provider Identifier |
| PubMed | Biomedical literature search |

---

## Release Notes & Changelog

### Latest Release: v2.1.2 (January 9, 2026)

**New Features:**
- Source path metadata for images dragged onto terminal
- Clickable hyperlinks for file paths (OSC 8 support)
- Windows Package Manager (winget) installation
- Shift+Tab shortcut in plan mode for "auto-accept edits"
- `FORCE_AUTOUPDATE_PLUGINS` environment variable
- `agent_type` in SessionStart hook input

**Security Fixes:**
- Command injection vulnerability in bash processing

**Performance:**
- Fixed memory leak in tree-sitter parse trees

**Bug Fixes:**
- Binary files in memory with `@include` directives
- Update claiming installation in progress
- Crash with socket files in watched directories
- Remote session URL/teleport with `/tasks`
- MCP tool names in analytics

**Changes:**
- Large bash/tool outputs saved to disk instead of truncated
- Deprecated Windows managed settings path

**SDK:**
- Minimum zod peer dependency: ^4.0.0

---

### v2.0.76 (January 7, 2026)
- Fixed macOS code-sign warning in Chrome integration

---

### v2.0.74 (December 19, 2025)

**New Features:**
- LSP (Language Server Protocol) tool for code intelligence
- `/terminal-setup` for Kitty, Alacritty, Zed, Warp
- ctrl+t in `/theme` for syntax highlighting toggle

**Fixes:**
- Skill `allowed-tools` application
- Opus 4.5 tip display
- Windows rendering issues

**VS Code:**
- Gift tag pictogram for year-end promotion

---

### v2.0.73 (December 19, 2025)

**New Features:**
- Clickable `[Image #N]` links
- alt-y yank-pop for kill ring history
- Search filtering in plugin discover
- Custom session IDs with `--session-id`

**Improvements:**
- `/theme` command and picker UI
- Fixed slow input history cycling

**VS Code:**
- Tab icon badges for permissions (blue) and completions (orange)

---

## Open Issues & Feature Requests

**Total Open Issues:** 4,677

### Recent Feature Requests

| Issue | Title |
|-------|-------|
| #17195 | Sync claude.ai Projects with Claude Code CLI |
| #17191 | Classification: Project Creation / Start |
| #17188 | Expose Session Metadata via Environment Variables and API |
| #17185 | Notification system for long-running sessions |
| #17175 | Re-read CLAUDE.md after auto-compact |
| #17172 | Project isolation mode with --project-only flag |

### Recent Bug Reports

| Issue | Title | Platform |
|-------|-------|----------|
| #17194 | Memory/performance issue | Linux |
| #17193 | Inconsistent token limit status | Windows |
| #17192 | Path-based permission bypass | Linux |
| #17190 | Destructive git reset --hard for rollback | All |
| #17189 | Excessive re-authentication | Linux |
| #17187 | Custom slash commands not discovered | macOS |
| #17186 | Plugin installation conflict | macOS |
| #17183 | Statusline context gauge freezes | Windows |
| #17182 | Environment variable expansion in pipes | Linux |
| #17181 | VS Code terminal issues | Windows |
| #17176 | OAuth redirect_uri space issue | macOS |

### Issue Categories

Issues are labeled by:
- **Area:** api, core, security, auth, mcp, tui
- **Platform:** Windows, macOS, Linux

---

## Recent Pull Requests

**Open PRs:** 103 | **Closed PRs:** 255

### Notable Open PRs

| PR | Title | Author |
|----|-------|--------|
| #17163 | Add workflow for publishing to WinGet | mdanish-kh |
| #17115 | Fixes yaml syntax | tdhopper |
| #17057 | Add trunk based development workflow | danielbodart |
| #17038 | Improve input validation and JSON safety | gn00295120 |
| #17035 | Preserve labels and retry logic for GitHub API | gn00295120 |
| #16680 | Add recall plugin for context recovery | bledden |
| #16456 | Add Windows support with PowerShell scripts | moorerad |

---

## Additional Resources

### Documentation

| Resource | URL |
|----------|-----|
| Official Docs | https://code.claude.com/docs/en/overview |
| Data Usage | https://code.claude.com/docs/en/data-usage |
| Plugin Docs | https://code.claude.com/docs/en/plugins |
| API Reference | https://docs.anthropic.com |

### Community

| Platform | Link |
|----------|------|
| Discord | https://anthropic.com/discord |
| GitHub Issues | https://github.com/anthropics/claude-code/issues |
| GitHub Discussions | https://github.com/anthropics/claude-code/discussions |

### Legal

| Document | URL |
|----------|-----|
| Commercial Terms | https://www.anthropic.com/legal/commercial-terms |
| Privacy Policy | https://www.anthropic.com/legal/privacy |

---

## Summary Statistics

| Metric | Value |
|--------|-------|
| Total Anthropic Repos | 20+ |
| Combined Stars | 150k+ |
| Primary Languages | Python, TypeScript, Go, Shell |
| SDK Languages | Python, TypeScript, Go, Ruby, C#, PHP, Java/Kotlin |
| Active Contributors | 100+ |
| Open Issues (claude-code) | 4,677 |
| Commits (claude-code) | 425 |

---

*This research document is comprehensive as of January 9, 2026. For the latest updates, visit the official GitHub repositories.*
