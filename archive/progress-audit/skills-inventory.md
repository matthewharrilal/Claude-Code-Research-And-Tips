# Skills Inventory

## Sub-Agent 0A Report
**Status:** COMPLETE
**Date:** 2026-02-02

---

## Available Skills (from Skill tool)

Based on the system-reminder in the conversation, the following skills are available:

### User-Invocable Skills

| Skill Name | Trigger | Relevance to Design System |
|------------|---------|---------------------------|
| `keybindings-help` | User wants to customize keyboard shortcuts | LOW - not design related |
| `crypto-sovereignty-analyst` | Analyzing institutional trust failures | NONE - off-topic |
| `essence` | Extract worldview from codebases/documents | MEDIUM - could extract design philosophy |
| `essence-load` | Internalize a worldview for collaboration | MEDIUM |
| `essence-check` | Check if idea resonates with loaded essence | MEDIUM |
| `essence-quick` | 60-second essence triage | MEDIUM |
| `principle-extraction` | Extract principles, "/extract" command | LOW |
| `youtube-research` | Fetch YouTube transcripts | LOW |

### Design-Relevant Skills

**essence** - Could potentially be used to:
- Extract design philosophy from reference images/documents
- Check if component implementations match the "soul" of the reference
- Internalize Attio/Sanrok/Nous design worldviews

However, for this project, the primary tools are:
1. **Playwright MCP** - Visual auditing, screenshots, measurements
2. **Standard tools** - Read, Write, Edit, Glob, Grep for code
3. **WebFetch/WebSearch** - External reference gathering

---

## MCP Tools (Cross-referenced from 0B)

The Playwright MCP provides 22 tools that ARE relevant to design work:

| Category | Tool | Design Use |
|----------|------|------------|
| Snapshot | `browser_snapshot` | Accessibility tree for structure audit |
| Screenshot | `browser_take_screenshot` | Visual documentation |
| Measure | `browser_evaluate` | Extract computed CSS values |
| Responsive | `browser_resize` | Test breakpoints |
| Navigate | `browser_navigate` | Load pages for testing |
| Interact | `browser_click`, `browser_type` | Test interactions |

---

## Directory Exploration

The `/mnt/skills/` path referenced in the plan does not exist in this environment. Skills are accessed through the Skill tool's built-in registry rather than a filesystem.

---

## Recommendations for Design System Work

### Primary Tools to Use
1. **Playwright MCP** - All visual testing and auditing
2. **Read/Write/Edit** - Code and token file manipulation
3. **WebFetch** - Reference documentation scraping
4. **Glob/Grep** - Finding existing patterns in codebase

### Secondary Tools (Optional)
1. **essence** skill - For design philosophy extraction if needed
2. **WebSearch** - Additional font/library research

### Not Needed
- crypto-sovereignty-analyst
- youtube-research
- keybindings-help
- principle-extraction

---

## Phase 0A Status: COMPLETE
