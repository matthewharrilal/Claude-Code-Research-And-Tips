# Boris Cherny's Official Design Philosophy for Claude Code

## Source
- **Author:** Boris Cherny (@bcherny) - Staff Engineer at Anthropic, Creator of Claude Code
- **Research Date:** 2026-01-10
- **Type:** Deep research synthesis across blogs, interviews, Twitter, and official docs

---

## Executive Summary

Boris Cherny, Staff Engineer at Anthropic and creator of Claude Code, has articulated a distinct design philosophy that emphasizes **simplicity over scaffolding**, **raw model access over opinionated workflows**, and **verification loops as the primary quality driver**. His approach differs significantly from many community patterns, prioritizing Unix-style composability and betting on exponential model improvement rather than building workarounds for current limitations.

---

## Part I: Core Design Philosophy

### 1. "Do the Simple Thing First"

Boris's foundational principle, directly inherited from Anthropic's engineering culture:

> "CLAUDE.md is another example of this idea of doing the simple thing first. We had all these crazy ideas about memory architectures—there's so much literature about this, so many external products—but in the end, the thing we did is ship the simplest thing: a file that has some stuff that's auto-read into context."

**Key manifestations:**
- **No vector databases or embeddings** - Claude Code uses regex-based search (ripgrep) because Claude's inherent code understanding makes sophisticated indexing unnecessary
- **Markdown files over databases** - Memory persists in simple `.md` files
- **Local execution without sandboxing** (initially) - Chose simplest approach

**Source:** [Pragmatic Engineer - How Claude Code is Built](https://newsletter.pragmaticengineer.com/p/how-claude-code-is-built)

---

### 2. "Build for the Model Six Months From Now"

Perhaps Boris's most counterintuitive principle:

> "Don't build for the model of today, build for the model six months from now. Honestly, for a long time, Claude Code was not a great product. I used it for maybe 10% of my code because the model wasn't capable enough."

**The bet paid off:** When Sonnet and Opus 4 released, Claude Code "just worked"—enabling Boris to write 50% of his code with it, later reaching 80-90%.

**Implication:** Don't over-engineer workarounds for current model limitations.

**Source:** [Developing Dev - Boris Cherny Career Interview](https://www.developing.dev/p/boris-cherny-creator-of-claude-code)

---

### 3. Raw Model Access as Design Goal

Boris explicitly rejected building "a Cursor or Windsurf":

> "The way we build this is we want people to feel the model as raw as possible."

The team **deletes code with each model release**—removing half the system prompt when upgrading to newer versions.

**Source:** [Latent Space - Claude Code: Anthropic's Agent in Your Terminal](https://www.latent.space/p/claude-code)

---

### 4. Unix Philosophy as Foundation

Boris frames Claude Code as **"a Unix utility"**:

> "Very similar to the original UNIX design philosophy."

This manifests in:
- Composability with external tools (tmux, bash, CI/CD)
- Headless mode (`claude -p`) for programmatic integration
- Avoiding feature bloat

---

## Part II: Official Best Practices

### The CLAUDE.md Mental Model

**Purpose:** Collective institutional memory, not complex configuration

**Boris's actual approach:**
- Team shares ONE CLAUDE.md checked into git
- Entire team contributes multiple times weekly
- **"Anytime we see Claude do something incorrectly we add it to the CLAUDE.md, so Claude knows not to do it next time"**
- During code review, tags `@.claude` to update guidelines

**Critical insight:** "Every mistake becomes a rule. The longer the team works together, the smarter the agent becomes."

The file is **short and focused**—only a couple thousand tokens covering: commands, code style, UI guidelines, state management, logging, error handling, debugging, and PR templates.

**Source:** [Boris Cherny Twitter Thread](https://twitter-thread.com/t/2007179832300581177)

---

### Plan Mode: Non-Negotiable for Complex Tasks

**How Boris uses it:**
1. Starts in Plan Mode (Shift+Tab twice)
2. Iterates back-and-forth until plan is solid
3. Switches to auto-accept mode
4. Claude executes the entire implementation without further interruption

**Why it matters:**

> "This prevents the classic failure: when the agent thinks it's helpful and makes 40 changes you didn't want. Don't let a system act before you've agreed on intent and constraints."

**Impact:** Plan Mode can "2-3x success rates" for complex tasks.

**Source:** [DEV.to Analysis](https://dev.to/with_attitude/how-boris-cherny-builder-of-claude-code-uses-it-and-why-that-should-change-how-you-think-about-173g)

---

### Verification: "The Most Important Thing"

Boris saved his strongest recommendation for last:

> "Probably the most important thing to get great results out of Claude Code: give Claude a way to verify its work. If Claude has that feedback loop, it will 2-3x the quality of the final result."

**His verification methods:**
- **Browser testing** via Chrome extension for UI changes
- **Test suites** for moderate complexity code
- **Phone simulator** for mobile work
- **Bash commands** for simple validations

> "Claude tests every single change I land to claude.ai/code using the Claude Chrome extension. It opens a browser, tests the UI, and iterates until the code works and the UX feels good."

**Source:** [Anthropic Engineering Blog](https://www.anthropic.com/engineering/claude-code-best-practices)

---

### Model Selection: Opus 4.5 with Thinking

Boris's surprising stance:

> "I use Opus 4.5 with thinking for everything. Even though it's bigger and slower than Sonnet, since you have to steer it less and it's better at tool use, it is almost always faster than using a smaller model in the end."

**Extended thinking keywords in Claude Code:**
- `think` → 4,000 tokens
- `think hard` / `think more` → 10,000 tokens
- `ultrathink` / `think harder` → 31,999 tokens

**Source:** [Boris Cherny Workflow Analysis](https://karozieminski.substack.com/p/boris-cherny-claude-code-workflow)

---

## Part III: The Fleet Model (Parallelization)

Boris maintains **10-15 concurrent Claude Code sessions**:
- 5 in terminal (numbered tabs 1-5 with system notifications)
- 5-10 in browser on claude.ai/code
- Mobile sessions started in morning, checked on later
- Sessions can "teleport" between environments

**Mental model shift:**

> "Boris doesn't see AI as a tool you use, but as a capacity you schedule. He's distributing cognition like compute: allocate it, queue it, keep it hot, switch contexts only when value is ready."

**Key insight:** Each session is a separate worker with its own context, not a single assistant that must hold everything.

**Source:** [VentureBeat Coverage](https://venturebeat.com/technology/the-creator-of-claude-code-just-revealed-his-workflow-and-developers-are)

---

## Part IV: Anti-Patterns Boris Warns Against

### 1. Skipping Plan Mode
> "The ones struggling often skip planning to save time, then spend more time fixing mistakes. Plan Mode isn't training wheels—it's measuring before you cut."

### 2. Sequential Instead of Parallel Sessions
- **WRONG:** Run one Claude, wait for it, start another
- **RIGHT:** Run 5 Claudes, context-switch between them as they work

### 3. Optimizing for Token Speed Over Quality
Using smaller/faster models to "save time" is false economy—correction time dominates generation time.

### 4. Not Maintaining CLAUDE.md
Without institutional memory, mistakes repeat indefinitely.

### 5. No Verification Infrastructure
Missing feedback loops means 2-3x worse output quality.

### 6. Over-Customization
> "My setup might be surprisingly vanilla! Claude Code works great out of the box, so I personally don't customize it much."

### 7. Complex Magic Command Systems
> "Having a long list of complex, custom slash commands is an anti-pattern. The entire point of an agent like Claude is that you can type almost whatever you want."

### 8. Skipping Formatting Hooks
> "Consider using hooks to stop AI from quietly breaking lint/format/typecheck."

---

## Part V: Official Anthropic vs. Community Patterns

### Official Design Intent

Anthropic's official stance emphasizes **flexibility over prescription**:

> "Claude Code doesn't impose a specific workflow, giving you the flexibility to use it how you want... Nothing in this list is set in stone nor universally applicable."

### The Ralph Pattern: Official Support, Different Philosophy

The "Ralph Wiggum" technique was **officially added to Claude Code** as a plugin. However, Boris's approach differs:

- **Boris's style:** Parallelized human-supervised sessions with frequent checkpoints
- **Ralph's style:** Single autonomous loops that run until completion

The original Ralph creator notes the official plugin "misses the key point of ralph which is not 'run forever' but 'carve off small bits of work into independent context windows.'"

### Complex Scaffolding Frameworks

The official position is skeptical of heavy community frameworks:

> "Extreme scaffolding frameworks will hurt more than help. Claude Code demonstrates that an 'agent' can be simple and yet extremely powerful."

Boris actively removes scaffolding as models improve, while some community patterns add complexity.

---

## Part VI: Key Mental Models Summary

### 1. Agents as Team Members, Not Tools
> "Agents belong inside the team's social workflows (PRs) as participants that can update shared norms."

### 2. Modular Roles Over One Big Agent
Boris uses specialized subagents (code-simplifier, verify-app, build-validator) rather than one generalist.

### 3. Context Windows as Independent Workers
Each session is a separate worker—don't try to make one brain hold everything.

### 4. Permissions as Team Assets
> "He treats permissions as a team asset. Shared, reviewable, and versioned. Pre-allowing safe actions makes the right thing the default."

### 5. Compounding Engineering
> "Every correction becomes permanent context. The cost of a mistake pays dividends forever."

---

## Conclusion: The Official Mental Model

**Boris Cherny's design philosophy can be summarized as:**

1. **Simplicity over sophistication** - The simplest solution that works is the right solution
2. **Trust the model** - Build for future capability, not current limitations
3. **Raw access over opinion** - Let users feel the model directly
4. **Verification as force multiplier** - Feedback loops 2-3x quality
5. **Parallelization over optimization** - Run many sessions, not one perfect one
6. **Institutional memory compounds** - CLAUDE.md turns mistakes into permanent improvements
7. **Planning prevents waste** - Agree on intent before execution
8. **Agents are team members** - Integrate into workflows, not alongside them

---

## Sources

- [Boris Cherny Twitter Thread - How I Use Claude Code](https://twitter-thread.com/t/2007179832300581177)
- [Pragmatic Engineer - How Claude Code is Built](https://newsletter.pragmaticengineer.com/p/how-claude-code-is-built)
- [Anthropic Engineering - Claude Code Best Practices](https://www.anthropic.com/engineering/claude-code-best-practices)
- [Developing Dev - Boris Cherny Career Interview](https://www.developing.dev/p/boris-cherny-creator-of-claude-code)
- [Latent Space - Claude Code: Anthropic's Agent in Your Terminal](https://www.latent.space/p/claude-code)
- [VentureBeat - Creator of Claude Code Reveals Workflow](https://venturebeat.com/technology/the-creator-of-claude-code-just-revealed-his-workflow-and-developers-are)
- [GitHub - bcherny](https://github.com/bcherny)

---

## Actionability

🟡 **Medium Lift** - Most of Boris's approach can be adopted immediately (Plan Mode, verification, CLAUDE.md discipline). Fleet parallelization requires more setup.

---

## Tags
`#philosophy` `#boris-cherny` `#official` `#anthropic` `#design-philosophy` `#plan-mode` `#verification` `#staff-engineer` `#mental-model`
