# Code-Simplifier Agent - Official Anthropic Plugin

## Source
- **Author:** @bcherny (Boris Cherny) - Claude Code engineer at Anthropic
- **Date:** 2026-01-09
- **URL:** https://x.com/bcherny/status/2009450715081789767
- **Repo:** https://github.com/anthropics/claude-plugins-official/blob/main/plugins/code-simplifier/agents/code-simplifier.md

---
## D-FINAL Connection
**Contributed to:** D-FINAL-implementation.md [Official Plugins, Code Quality, Two-Phase Workflow sections]
**Journey references:** journey-implementation.md [code-simplifier as Level 2-3 polish/refinement pattern]
**Last enhanced:** 2026-01-18 (Phase 2B)
---

## Core Insight

> "We just open sourced the code-simplifier agent we use on the Claude Code team."

> "Ask Claude to use the code simplifier agent at the end of a long coding session, or to clean up complex PRs."

---

## Installation

```bash
# From terminal
claude plugin install code-simplifier

# Or from within a session
/plugin marketplace update claude-plugins-official
/plugin install code-simplifier
```

---

## Usage

After a coding session:
```
Use the code simplifier agent to clean up this code
```

Or for PR cleanup:
```
Use code-simplifier on this PR
```

---

## Full Agent Definition

### Frontmatter
```yaml
name: code-simplifier
description: Simplifies and refines code for clarity, consistency, and maintainability while preserving all functionality. Focuses on recently modified code unless instructed otherwise.
model: opus
```

### Full System Prompt

```
You are an expert code simplification specialist focused on enhancing code clarity, consistency, and maintainability while preserving exact functionality. Your expertise lies in applying project-specific best practices to simplify and improve code without altering its behavior. You prioritize readable, explicit code over overly compact solutions. This is a balance that you have mastered as a result your years as an expert software engineer.

You will analyze recently modified code and apply refinements that:

**Preserve Functionality:** Never change what the code does - only how it does it. All original features, outputs, and behaviors must remain intact.

**Apply Project Standards:** Follow the established coding standards from [CLAUDE.md / internal link] including:
- Use ES modules with proper import sorting and extensions
- Prefer function keyword over arrow functions
- Use explicit return type annotations for top-level functions
- Follow proper React component patterns with explicit Props types
- Use proper error handling patterns (avoid try/catch when possible)
- Maintain consistent naming conventions

**Enhance Clarity:** Simplify code structure by:
- Reducing unnecessary complexity and nesting
- Eliminating redundant code and abstractions
- Improving readability through clear variable and function names
- Consolidating related logic
- Removing unnecessary comments that describe obvious code
- IMPORTANT: Avoid nested ternary operators - prefer switch statements or if/else chains for multiple conditions
- Choose clarity over brevity - explicit code is often better than overly compact code

**Maintain Balance:** Avoid over-simplification that could:
- Reduce code clarity or maintainability
- Create overly clever solutions that are hard to understand
- Combine too many concerns into single functions or components
- Remove helpful abstractions that improve code organization
- Prioritize "fewer lines" over readability (e.g., nested ternaries, dense one-liners)
- Make the code harder to debug or extend

**Focus Scope:** Only refine code that has been recently modified or touched in the current session, unless explicitly instructed to review a broader scope.

Your refinement process:
1. Identify the recently modified code sections
2. Analyze for opportunities to improve elegance and consistency
3. Apply project-specific best practices and coding standards
4. Ensure all functionality remains unchanged
5. Verify the refined code is simpler and more maintainable
6. Document only significant changes that affect understanding

You operate autonomously and proactively, refining code immediately after it's written or modified without requiring explicit requests. Your goal is to ensure all code meets the highest standards of elegance and maintainability while preserving its complete functionality.
```

---

## Mental Model

### Two-Phase Code Production
```
Creation Phase → Get it working (speed + creativity)
                        ↓
Polish Phase → Make it elegant (dedicated specialist agent)
```

### Key Principles

1. **Clarity + explicitness > brevity + cleverness**
2. **Protect functionality religiously** — changes are stylistic/structural only
3. **Scope discipline** — focus on recent changes to avoid scope creep
4. **Balance is hard-won wisdom** — avoid both over-abstraction and under-abstraction
5. **"Readable by humans tomorrow morning"** is the ultimate success metric

---

## Style Guide Highlights

The Anthropic team's coding standards encoded in this agent:

| Rule | Guidance |
|------|----------|
| Modules | ES modules with proper import sorting |
| Functions | Prefer `function` keyword over arrow functions |
| Types | Explicit return type annotations for top-level functions |
| React | Explicit Props types, proper component patterns |
| Error handling | Avoid try/catch when possible |
| Ternaries | **AVOID nested ternaries** - use switch/if-else |
| Brevity | Explicit code > compact code |

---

## What It Does

- Simplifies code structure
- Reduces unnecessary complexity and nesting
- Eliminates redundant code and abstractions
- Improves variable and function names
- Consolidates related logic
- Removes obvious/redundant comments
- Maintains helpful abstractions

## What It Doesn't Do

- Change functionality
- Over-simplify
- Create "clever" solutions
- Combine too many concerns
- Prioritize LOC reduction over readability

---

## Caveats & Gotchas

| Issue | Mitigation |
|-------|------------|
| Plugin not found | Update marketplace first, restart |
| TypeScript/React bias | May fight your project conventions |
| Over-conservative | Sometimes preserves too much to be safe |
| Still needs review | Risk is low but not zero |
| Claude Code only | Not available in web Claude.ai |

---

## Workflow Integration

### Boris's High-Velocity Workflow
- 50-100 PRs/week
- Code-simplifier as final quality gate
- Feature → Implementation → Tests → **Simplifier**

### Chain Pattern
```
Feature Agent
     ↓
Implementation Agent
     ↓
Test Agent
     ↓
Code-Simplifier Agent (polish)
     ↓
Commit
```

---

## Related Concepts

**Builds on:**
- Claude Code agents/plugins system
- Prompt engineering for code review
- Internal Anthropic CLAUDE.md style guide

**Enables:**
- Much faster "final polish" step
- Higher quality PRs with minimal effort
- Consistent style across long sessions

**Similar to:**
- gofmt / prettier (but semantic + opinionated + AI-powered)
- Other community code-review agents

---

## Follow-Up Questions

1. How well does it handle non-TypeScript/non-React codebases?
2. Token cost: messy main agent vs simplifier every few steps?
3. Will Anthropic release a style-guide adapter version?

---

## Synthesis Hooks

**Combines well with:**
- Parallel agents (feature → tests → simplifier chain)
- Long coding sessions
- Complex PR cleanup

**Part of larger pattern:**
"Specialist polish agents" after creative heavy-lifting agents

---

## Why This Matters

> "This is one of the most immediately useful open-source drops from Anthropic yet"

This is the actual tool the Claude Code team uses internally, now available to everyone. Install it today.

---

## Actionability

🟢 **Quick Win** - Install + use in under 5 minutes

---

## What You'll See When You Run This

**Before running:** You've finished a coding session and want to clean up the code before committing.

### Installing the Plugin

```bash
$ claude plugin install code-simplifier
```

**Annotated Output:**
```
🔍 Searching official plugins...
   Found: code-simplifier (anthropic-official)

📦 Installing code-simplifier...
   ✓ agents/code-simplifier.md downloaded
   ✓ Plugin registered

✅ code-simplifier installed!

Usage:
  "Use the code simplifier agent to clean up this code"
  "Use code-simplifier on this PR"
```

**Or from within a session:**
```
claude> /plugin marketplace update claude-plugins-official
```

**Output:**
```
Updating official plugins...
  ✓ code-simplifier (new!)
  ✓ test-generator (updated)
  ✓ doc-writer (unchanged)

Found 1 new plugin: code-simplifier
Run /plugin install code-simplifier to add it.
```

### Using Code-Simplifier After a Session

```
claude> Use the code simplifier agent to clean up this code
```

**Annotated Output:**
```
🤖 Spawning agent: code-simplifier
   Model: opus                         ← Uses Opus for quality
   Focus: Recently modified files

[code-simplifier analyzing...]

Scanning recently modified files:
  • src/components/UserDashboard.tsx (147 lines, 12 changes)
  • src/utils/formatters.ts (89 lines, 5 changes)
  • src/api/userService.ts (203 lines, 23 changes)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 SIMPLIFICATION REPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## src/components/UserDashboard.tsx

### Issue 1: Nested ternaries (High Priority)
```tsx
// Before:
const status = user.active ? user.premium ? 'premium' : 'active' : 'inactive';

// After:
function getUserStatus(user: User): string {
  if (!user.active) return 'inactive';
  if (user.premium) return 'premium';
  return 'active';
}
```
Reason: Nested ternaries reduce readability. Explicit if/else is clearer.

### Issue 2: Unnecessary complexity
```tsx
// Before:
const handleClick = useCallback(() => {
  return (() => {
    setLoading(true);
  })();
}, []);

// After:
const handleClick = useCallback(() => {
  setLoading(true);
}, []);
```
Reason: IIFE serves no purpose here.

## src/api/userService.ts

### Issue 3: Redundant abstraction
```tsx
// Before:
class UserServiceHelper {
  static fetchUser = (id: string) => fetch(`/api/users/${id}`);
}
const getUser = (id: string) => UserServiceHelper.fetchUser(id);

// After:
async function getUser(id: string): Promise<User> {
  return fetch(`/api/users/${id}`).then(r => r.json());
}
```
Reason: Helper class adds unnecessary indirection.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Summary:
  Files analyzed: 3
  Issues found: 7
  Issues fixed: 7
  Functionality changed: 0           ← This is key!

All changes preserve exact functionality.
[code-simplifier session complete]
```

### For PR Cleanup

```
claude> Use code-simplifier on this PR
```

**Annotated Output:**
```
🤖 Spawning agent: code-simplifier

Fetching PR diff...
  Branch: feature/user-settings
  Files changed: 8
  Lines added: 347
  Lines removed: 89

[code-simplifier analyzing PR changes only...]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 PR SIMPLIFICATION REPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Focusing on PR changes only (not entire files).

Changes made:
  • Removed 3 unnecessary type casts
  • Simplified 2 complex conditionals
  • Renamed 4 variables for clarity
  • Removed 5 obvious comments
  • Added 2 explicit return types

Before → After metrics:
  Lines of code: 347 → 312 (-10%)
  Cyclomatic complexity: 23 → 18 (-22%)
  Readability score: 72 → 89 (+24%)

All changes preserve exact PR functionality.

Ready to commit? [y/n]
```

### Boris's Workflow (50-100 PRs/week)

```
Feature Development:
  Step 1: claude> Implement user settings page
  Step 2: claude> Add tests for UserSettings
  Step 3: claude> Use code-simplifier agent      ← Final polish
  Step 4: git commit -m "feat: user settings"
```

**Timing Expectations:**
- Plugin installation: <1 minute
- Small file analysis: 30-60 seconds
- Large PR cleanup: 1-3 minutes
- Per-file simplification: 10-20 seconds

**What to Do While It Runs:**
- Simplifier runs on Opus for quality
- It only touches recently modified code
- Review the simplification report
- All functionality is preserved (verify with tests)

**If you skip this step:** Your PRs ship with the first-draft quality - nested ternaries, redundant abstractions, obvious comments. The simplifier applies the polish that makes code maintainable.

**This connects to:** The two-phase code production pattern - Creation Phase (get it working) then Polish Phase (make it elegant). This automates the polish phase.

---

## Tags
`#tooling` `#plugin` `#code-simplifier` `#official` `#anthropic` `#refactoring` `#code-quality` `#bcherny` `#full-prompt`
