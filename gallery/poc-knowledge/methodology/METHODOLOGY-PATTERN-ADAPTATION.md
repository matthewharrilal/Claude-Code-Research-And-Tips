# Methodology: Pattern Adaptation

> **Purpose:** How to apply the POC methodology to patterns beyond Ralph.
> This is the REUSABILITY guide—what's universal vs pattern-specific.

---

## Overview

This methodology was developed for the Ralph pattern but is designed to be universal. This document explains:

1. **What applies to ALL patterns** (universal elements)
2. **What varies by pattern** (adaptations)
3. **How to handle edge cases** (misfit content)
4. **Worked examples** for non-Ralph patterns

---

# Part 1: Universal Elements

These elements apply to EVERY pattern page, without exception.

## 1.1: Three-Panel Architecture

**Always applies:**
- Left Navigation (240px fixed)
- Main Content (flexible)
- Activity Zone (480px, resizable 280-900px)

**Never changes:**
- Panel purposes (Where / What / Operational Intelligence)
- Fixed sidebars with margin-based main content
- Scroll-sync and brushing interaction

## 1.2: 8 Main Panel Sections

**Always required (but may be empty with justification):**

| Section | Universal? | Notes |
|---------|------------|-------|
| Essence | YES | Every pattern has a core abstraction |
| Core Abstraction + Implementation | YES | Every pattern has philosophy + code |
| Why [Decision]? | YES | Every pattern has design decisions |
| File Structure | USUALLY | Some patterns are mental models only |
| Path of a Task | USUALLY | Some patterns are static architectures |
| Gotchas | YES | Every pattern has failure modes |
| What's Hard | YES | Every pattern has fundamental tensions |
| When to Use / When Not | YES | Every pattern has applicability limits |

**When a section doesn't apply:**
- Include the section header
- Add a brief note: "Not applicable: [reason]"
- Example: "**Path of a Task:** Not applicable—CC Mirror is an architecture, not a workflow."

## 1.3: 16 Activity Zone Types

**Always applicable:**

All 16 types can be generated for ANY pattern using the 8 Generation Questions. The minimum counts remain:

| Type | Minimum | Universal Applicability |
|------|---------|-------------------------|
| Invariant Connection | 2 | Always—patterns share principles |
| Second-Order Effect | 2 | Always—scale effects exist |
| Composition Case | 2 | Always—patterns combine |
| Research Frontier | 1 | Always—open questions exist |
| War Story | 2 | May require research |
| Alternative Path | 1 | Always—alternatives exist |
| Inversion Lens | 2 | Always—constraints can be inverted |
| Constraint Chain | 2 | Always—root constraints exist |
| Failure Gradient | 2 | Always—gradual failure exists |
| Time Horizon Shift | 2 | Always—perception changes over time |
| Violation Chain | 2 | Always—shortcuts have consequences |
| Trade-Off Tension | 2 | Always—genuine dilemmas exist |
| Analogical Bridge | 2 | Always—familiar mappings exist |
| Expertise Gradient | 2 | Always—expertise levels exist |
| Minimal Pattern | 1 | Always—minimal version exists |
| Inflection Point | 1 | Always—benefit can flip |

## 1.4: Quality Standards

**Never changes:**
- 0-3 scoring rubrics
- Minimum score 2 for publishing
- Generativity test for Activity Zone
- Red flag checks

## 1.5: Transformation Process

**5 phases always apply:**
1. Source Assessment
2. Main Panel Construction
3. Activity Zone Generation
4. Quality Validation
5. Cross-Pattern Integration

---

# Part 2: Pattern-Specific Adaptations

While the structure is universal, content emphasis varies by pattern type.

## 2.1: Pattern Type Classification

| Pattern Type | Example | Emphasis |
|--------------|---------|----------|
| **Workflow** | Ralph | File Structure, Path of a Task |
| **Architecture** | Gas Town, CC Mirror | Component relationships, coordination |
| **Mental Model** | 8 Invariants | Philosophy, derivation |
| **Tool** | MCP Server | Configuration, API reference |
| **Technique** | Context Management | When/how guidance |

## 2.2: Workflow Patterns (Ralph-like)

**Characteristics:**
- Clear step-by-step flow
- Concrete files and scripts
- Iteration/loop structure

**Emphasis:**
- File Structure: **CRITICAL** (copy-paste ready)
- Path of a Task: **CRITICAL** (shows flow)
- Gotchas: **HIGH** (operational)
- Activity Zone: Focus on VIOLATION CHAIN (skipping steps)

**Example patterns:** Ralph, HOTL Ralph, Dr. Ralph

## 2.3: Architecture Patterns (Gas Town-like)

**Characteristics:**
- Multiple components with relationships
- Coordination between agents
- Emergent properties

**Emphasis:**
- Core Abstraction: **CRITICAL** (component relationships)
- Why [Decision]?: **CRITICAL** (architecture choices)
- What's Hard: **HIGH** (coordination complexity)
- Activity Zone: Focus on COMPOSITION CASE and CONSTRAINT CHAIN

**Example patterns:** Gas Town, CC Mirror, Personal Panopticon

### Gas Town Adaptation

**Main Panel Adaptations:**

| Section | Adaptation |
|---------|------------|
| Essence | Focus on factory metaphor |
| Core Abstraction | Show component diagram (Mayor, Deacon, Dogs, Refinery) |
| Why [Decision]? | Why Mayor? Why Deacon separate? Why Dogs specialized? |
| File Structure | Inbox files, outbox files, coordination files |
| Path of a Task | Task enters → Mayor delegates → Dog works → Deacon reviews → Refinery consolidates |
| Gotchas | Coordination failures, inbox flooding, Deacon bottleneck |
| What's Hard | Specialization vs coordination overhead |
| When to Use | When domain diversity exceeds single-agent coherence |

**Activity Zone Focus:**

- **Constraint Chain:** Why factory structure? → Specialization constraint → Delegation → Coordination → Quality gate → Memory consolidation
- **Composition Case:** Gas Town + Ralph (Dogs can run Ralph loops)
- **Analogical Bridge:** Gas Town = Microservices Architecture
- **Expertise Gradient:** What components? → Why this structure? → Minimal viable? → When to add roles? → Cross-pattern composition?

### CC Mirror Adaptation

**Main Panel Adaptations:**

| Section | Adaptation |
|---------|------------|
| Essence | Focus on parallelism enablement |
| Core Abstraction | Hidden multi-agent, shared filesystem |
| Why [Decision]? | Why hidden? Why shared fs? Why no explicit coordination? |
| File Structure | Shared workspace, lock files, sync mechanisms |
| Path of a Task | Task appears → Multiple agents see it → First to claim works → Results shared |
| Gotchas | Race conditions, duplicate work, coordination overhead |
| What's Hard | Implicit vs explicit coordination tradeoff |
| When to Use | Need parallelism with minimal coordination code |

## 2.4: Mental Model Patterns (Invariants-like)

**Characteristics:**
- Abstract principles
- Derivation-oriented
- Cross-pattern applicability

**Emphasis:**
- Core Abstraction: **CRITICAL** (the principle itself)
- Why [Decision]?: **HIGH** (derivation of principle)
- File Structure: **LOW** (may not apply)
- Path of a Task: **LOW** (may not apply)
- Activity Zone: Focus on ANALOGICAL BRIDGE and EXPERTISE GRADIENT

**Example patterns:** 8 Invariants, Context Management Principles

### Mental Model Adaptation

**Main Panel Adaptations:**

| Section | Adaptation |
|---------|------------|
| Essence | The principle in 15 words |
| Core Abstraction | Principle + how it manifests in multiple patterns |
| Why [Decision]? | How this principle was derived |
| File Structure | "Not applicable: This is a mental model, not a workflow" |
| Path of a Task | "Not applicable: No step-by-step flow" |
| Gotchas | Misapplication patterns |
| What's Hard | When principle conflicts with intuition |
| When to Use | When this principle applies |

## 2.5: Tool Patterns (MCP Server-like)

**Characteristics:**
- Configuration-focused
- API surface
- Integration points

**Emphasis:**
- File Structure: **CRITICAL** (config files, API)
- Gotchas: **CRITICAL** (common misconfigurations)
- When to Use: **HIGH** (integration decision)
- Activity Zone: Focus on COMPOSITION CASE (integrations)

---

# Part 3: Decision Trees

Use these to determine how to adapt the methodology.

## 3.1: Section Relevance

```
Does this pattern have a step-by-step flow?
├─ YES → Include PATH OF A TASK
└─ NO → Mark "Not applicable: [reason]"

Does this pattern have concrete files/code?
├─ YES → Include FILE STRUCTURE (copy-paste ready)
└─ NO → Mark "Not applicable: [reason]" OR show conceptual structure

Does this pattern have multiple components?
├─ YES → Emphasize CORE ABSTRACTION (component diagram)
└─ NO → Focus on single concept

Does this pattern have choices that vary by situation?
├─ YES → Emphasize TRADE-OFF TENSION in Activity Zone
└─ NO → Focus on clear rules
```

## 3.2: Activity Zone Emphasis

```
Is this a workflow pattern (step-by-step)?
├─ YES → Prioritize: VIOLATION CHAIN, FAILURE GRADIENT, TIME HORIZON
└─ NO → Continue

Is this an architecture pattern (components)?
├─ YES → Prioritize: COMPOSITION CASE, CONSTRAINT CHAIN, ANALOGICAL BRIDGE
└─ NO → Continue

Is this a mental model (principle)?
├─ YES → Prioritize: ANALOGICAL BRIDGE, EXPERTISE GRADIENT, INVERSION
└─ NO → Continue

Is this a tool (config/API)?
├─ YES → Prioritize: COMPOSITION CASE, GOTCHAS extensions, ALTERNATIVE PATH
└─ NO → Use default priorities
```

---

# Part 4: Edge Cases

## 4.1: Missing Sections

**When source material doesn't support a section:**

1. **Try to synthesize** - Can you derive it from other information?
2. **Mark as incomplete** - "Section incomplete: Needs [specific information]"
3. **Flag for research** - Add to Research Frontier in Activity Zone

**Example:**
```
**Gotchas:**
This section is incomplete. No production gotchas documented yet.
[Research Frontier item: "Known failure modes for [Pattern] - need practitioner input"]
```

## 4.2: Misfit Content

**When content doesn't fit the 8-section structure:**

1. **Reconsider classification** - Is this actually a different pattern type?
2. **Extend a section** - Can it fit as a subsection?
3. **Create supplementary** - Link to appendix or related page

**Example:** Pattern has 3 distinct use cases with different flows
- Option A: Include all 3 in Path of a Task (numbered A1-A3, B1-B3, etc.)
- Option B: Create 3 variant pages (Pattern-A, Pattern-B, Pattern-C)

## 4.3: New Patterns

**When a completely new pattern emerges:**

1. **Classify first** - Which pattern type is it closest to?
2. **Apply transformation** - Use standard process
3. **Document deviations** - Note any methodology extensions needed
4. **Consider methodology update** - Does this reveal a gap?

## 4.4: Hybrid Patterns

**When a pattern spans multiple types:**

Example: A pattern that is both workflow (step-by-step) AND architecture (components)

1. **Identify primary type** - Which aspect is more central?
2. **Include both emphases** - Don't drop sections
3. **Flag in Essence** - "Hybrid: workflow + architecture"

---

# Part 5: Worked Examples

## 5.1: Gas Town (Architecture Pattern)

### Source Assessment

**Sources:**
- `extractions/orchestration/gas-town-yegge.md`
- `synthesis/mastery-gastown-complete.md`

**Classification:** Architecture pattern (multi-component)

### Main Panel Outline

**Essence:**
> "Gas Town is an agent factory where Mayor delegates to specialized Dogs, Deacon reviews quality, and Refinery consolidates learnings."

**Core Abstraction:**
```
PHILOSOPHY: "Single agent can't maintain coherence across diverse specializations."
     ↓
ARCHITECTURE:
┌─────────────────────────────────────────────┐
│                   MAYOR                      │
│    (Orchestrator - assigns tasks)           │
└─────────────────────────────────────────────┘
         ↓ delegates          ↑ results
┌─────────────────┐    ┌─────────────────┐
│      DOG 1      │    │      DOG 2      │
│  (Specialist)   │    │  (Specialist)   │
└─────────────────┘    └─────────────────┘
         ↓ output             ↓ output
┌─────────────────────────────────────────────┐
│                   DEACON                     │
│    (Quality gate - independent review)       │
└─────────────────────────────────────────────┘
         ↓ learnings
┌─────────────────────────────────────────────┐
│                  REFINERY                    │
│    (Memory consolidation)                    │
└─────────────────────────────────────────────┘
     ↓
ANCHOR: "The factory metaphor IS the architecture."
```

**Why [Decision] examples:**
- Why Mayor? → Coordination complexity exceeds single context
- Why Deacon separate from Mayor? → Mayor is biased toward Dogs' work
- Why Dogs specialized? → Domain expertise enables deeper work

**File Structure:**
```
gastown/
├── inbox/           # Tasks waiting for Dogs
├── outbox/          # Completed work for Deacon
├── assignments/     # Mayor's delegation records
├── reviews/         # Deacon's review notes
└── refinery/        # Consolidated learnings
```

### Activity Zone Highlights

**Constraint Chain:**
```
ROOT CONSTRAINT: Single Claude can't maintain coherence across diverse specializations
→ Specialized agents (Dogs) for different domains
→ Orchestration layer (Mayor) to delegate and coordinate
→ Quality gate (Deacon) independent from Mayor
→ File-based communication for observability
→ Refinery for consolidating cross-agent learnings

One constraint, FIVE downstream decisions.
```

**Analogical Bridge:**
```
GAS TOWN = Microservices Architecture
Mayor → API Gateway / Orchestrator
Dogs → Domain-specific microservices
Deacon → QA service / Review workflow
Refinery → Data warehouse / Analytics
Inbox/Outbox → Message queues

If you've designed microservices, you already understand Gas Town.
```

**Composition Case:**
```
COMPOSITION: Gas Town + Ralph
WORKS? Yes, with coordination

WHY IT WORKS:
Dogs can run Ralph loops for their specialized tasks.
Mayor orchestrates across Dog loops.

THE DANGER:
Nested loops = exponential complexity.
State coordination between Dog loops is fragile.

RECOMMENDATION:
Dogs use Ralph for single-task deep work.
Mayor doesn't run Ralph (needs human oversight).
```

---

## 5.2: MCP Server (Tool Pattern)

### Source Assessment

**Sources:**
- `extractions/techniques/mcp-server-guide.md`
- Official MCP documentation

**Classification:** Tool pattern (configuration-focused)

### Main Panel Outline

**Essence:**
> "MCP servers expose capabilities to Claude via standardized protocol, enabling tool-use without custom code."

**Core Abstraction:**
```
PHILOSOPHY: "Standardized tool interface > custom integrations"
     ↓
CONFIG:
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path"]
    }
  }
}
     ↓
ANCHOR: "The config IS the integration. No code needed."
```

**File Structure:** Emphasize configuration files
```
~/.claude/
├── claude_desktop_config.json    # Server definitions
└── mcp-servers/
    └── custom/                   # Custom server code if needed
```

**Path of a Task:** "Not applicable in traditional sense—show request/response flow instead"
```
1. Claude encounters tool-like need
2. Checks registered MCP servers
3. Sends standardized request
4. Server processes, returns response
5. Claude uses response in context
```

**Gotchas:** Focus on configuration errors
```
GOTCHA: Server path not found
  Symptom: "MCP server failed to start"
  Why: Path in config doesn't exist or isn't absolute
  Fix: Use absolute paths, verify existence

GOTCHA: Permission denied
  Symptom: "EACCES: permission denied"
  Why: Server can't access requested files
  Fix: Check file permissions, use allowed paths
```

### Activity Zone Highlights

**Composition Case:** (Primary focus for tools)
```
COMPOSITION: MCP Filesystem + Claude Code
WORKS? Yes, native integration

WHY IT WORKS:
Claude Code registers filesystem server automatically.
All file operations go through standardized interface.

THE BENEFIT:
No custom file handling code.
Consistent behavior across environments.

RECOMMENDATION:
Use built-in filesystem server for Claude Code.
Custom servers for specialized needs only.
```

---

# Part 6: Governance

## 6.1: Who Can Write

**Pattern pages require:**
- Understanding of the methodology (this documentation)
- Domain knowledge of the pattern
- Ability to apply 8 Generation Questions

**Roles:**
- **Author:** Creates initial transformation
- **Reviewer:** Validates against rubrics
- **Approver:** Final sign-off before publishing

## 6.2: Validation Requirements

**Before publishing:**
1. All Main Panel sections score 2+ (or marked N/A with justification)
2. All Activity Zone items score 2+
3. Generativity test passed (4+ YES for each item)
4. Red flag check passed
5. Cross-references verified

## 6.3: Maintenance

**When to update:**
- New gotchas discovered in production
- War Stories accumulate
- Research Frontier items get solved
- Pattern evolves

**Update process:**
1. Identify what changed
2. Update affected sections
3. Re-validate affected content
4. Update cross-references

## 6.4: Methodology Extensions

**If the methodology doesn't fit:**
1. Document the gap
2. Propose extension
3. Review with pattern examples
4. Update methodology if approved

---

## Summary

### Universal vs Pattern-Specific

| Element | Universal? | Varies By |
|---------|------------|-----------|
| Three-panel architecture | YES | - |
| 8 Main Panel sections | YES | Emphasis, N/A markings |
| 16 Activity Zone types | YES | Priorities |
| Quality rubrics | YES | - |
| Transformation process | YES | Section emphasis |

### Pattern Type Emphases

| Type | File Structure | Path of Task | Activity Focus |
|------|----------------|--------------|----------------|
| Workflow | HIGH | HIGH | VIOLATION CHAIN |
| Architecture | MEDIUM | LOW | COMPOSITION CASE |
| Mental Model | LOW | LOW | ANALOGICAL BRIDGE |
| Tool | HIGH | MEDIUM | COMPOSITION CASE |

### Key Principle

> "The structure is universal; the content emphasis adapts to the pattern type."

---

## Related Documents

- `METHODOLOGY-PHILOSOPHY.md` - Universal principles
- `METHODOLOGY-TRANSFORMATION.md` - The process being adapted
- `METHODOLOGY-CONTENT-TYPES.md` - All types that apply universally

---

## Tags

`#methodology` `#adaptation` `#reusability` `#pattern-types` `#governance`
