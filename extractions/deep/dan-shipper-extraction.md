# Dan Shipper: The Complete Mental Model
## CEO of Every - Compound Engineering Pioneer

---
## D-FINAL Connection
**Contributed to:** D-FINAL-mental-models.md
**Last enhanced:** 2026-01-18 (Phase 2B)
---

> "Every piece of code shipped in the last two months was written by AI. Not assisted by AI. Written by AI."

---

## TIER 1 EXTRACTION: Practitioner Level

**Status:** COMPLETE
**Depth:** Deep extraction (450+ lines)
**Research Date:** 2026-01-13
**Sources:** Every.to, X/Twitter, Lenny's Newsletter

---

## Part I: Who Is Dan Shipper?

### Professional Identity

Dan Shipper is the CEO and Co-founder of Every, a media company and AI-powered writing suite that generates seven-figure revenue. He is known for running the company with 100% AI-written code and pioneering the "Compound Engineering" methodology.

### Public Presence

- **X/Twitter:** @danshipper
- **Website:** every.to
- **Newsletter:** every.to/chain-of-thought
- **Podcast:** Every podcast (AI + Writing)

### Background

Dan's path to AI-native development:
- **Writer first** - Built Every as a writing-focused platform
- **AI adoption early** - Integrated AI tools since GPT-3 era
- **Now runs 100% AI-authored code** - All PRs opened by Claude Code

### Key Distinction

Unlike many practitioners who optimize personal workflows, Dan runs a **company** on AI-written code with a team, making his patterns production-validated at organizational scale.

---

## Part II: The Compound Engineering Philosophy

### What Is Compound Engineering?

Compound Engineering is Dan's methodology where each feature makes the next feature **easier** to build through systematic knowledge capture.

> "Think like an engineering manager, not a coder."

### The Core Loop

```
┌─────────────────────────────────────────────────────────────┐
│                  COMPOUND ENGINEERING LOOP                   │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   ┌──────────┐                        ┌──────────┐          │
│   │   PLAN   │ ──────────────────────→│   WORK   │          │
│   │          │                        │          │          │
│   │ Write    │                        │ AI       │          │
│   │ detailed │                        │ writes   │          │
│   │ specs    │                        │ code     │          │
│   └──────────┘                        └────┬─────┘          │
│        ↑                                   │                │
│        │                                   ↓                │
│   ┌────┴─────┐                        ┌──────────┐          │
│   │ COMPOUND │←───────────────────────│  REVIEW  │          │
│   │          │                        │          │          │
│   │ Update   │                        │ Multi-   │          │
│   │ CLAUDE.md│                        │ agent    │          │
│   │ Learnings│                        │ review   │          │
│   └──────────┘                        └──────────┘          │
│                                                              │
│   THE KEY: Knowledge compounds across sessions               │
└─────────────────────────────────────────────────────────────┘
```

### Why "Compound"?

Traditional development: complexity increases with each feature.
Compound engineering: each feature **deposits knowledge** that future features withdraw.

---

## Part III: The Key Claims

### Claim 1: 100% AI-Written Code

> "Every piece of code shipped in the last two months was written by AI. Not assisted by AI. Written by AI."

**Details:**
- Claude Code opens 100% of pull requests
- Team members "haven't typed a function in weeks"
- Features that took a week now ship in an afternoon

### Claim 2: Team of Five Output

> "Two engineers at Every shipped six features, five bug fixes, and three infrastructure updates in one week."

**The Math:**
- 2 engineers + 6 agents = output of 15
- $400/month for 2 Claude Code subscriptions

### Claim 3: 100% AI-Opened PRs

> "Claude Code opens 100 percent of pull requests."

This isn't metaphorical. Every single PR at Every is created by Claude Code, with humans directing and reviewing.

---

## Part IV: The Technical Setup

### Parallel Instances

Dan runs 4+ Claude instances simultaneously:

```
┌─────────────────────────────────────────────────────────────┐
│                    PARALLEL INSTANCE SETUP                   │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │   Frontend   │  │   Backend    │  │    Tests     │       │
│  │   Instance   │  │   Instance   │  │   Instance   │       │
│  │  (Feature A) │  │  (Feature B) │  │  (Coverage)  │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
│                                                              │
│  ┌──────────────┐                                           │
│  │     Docs     │   Each in separate git worktree           │
│  │   Instance   │   All working simultaneously              │
│  │              │                                           │
│  └──────────────┘                                           │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Git Worktrees

Every parallel instance runs in its own git worktree:

```bash
git worktree add ../feature-a feature-a-branch
git worktree add ../feature-b feature-b-branch
git worktree add ../test-coverage test-branch
git worktree add ../docs-update docs-branch
```

This prevents file conflicts between parallel agents.

### Slash Commands

Every uses custom slash commands for repeated workflows:

- `/issues` - Pull issues from Linear
- `/work` - Start work on a ticket
- `/review` - Trigger multi-agent code review

---

## Part V: The Multi-Agent Review System

### 12-Subagent Code Review

Dan's team uses multiple specialized review agents:

| Agent | Focus |
|-------|-------|
| Security | Vulnerabilities, auth issues |
| Performance | N+1 queries, bottlenecks |
| Complexity | Over-engineering detection |
| Style | Code consistency |
| Tests | Coverage gaps |
| Docs | Documentation needs |
| Architecture | Design pattern adherence |
| Edge Cases | Error handling |
| Dependencies | Outdated or risky packages |
| Accessibility | UI/UX accessibility |
| Data | Privacy and data handling |
| Integration | API contract compliance |

### Why 12 Agents?

Each agent sees code through a specialized lens. A security agent thinks differently than a performance agent. Multiple perspectives catch more issues.

---

## Part VI: The Prompt-That-Writes-Prompts

### Meta-Prompting for GitHub Issues

Dan uses a clever technique: prompts that generate other prompts.

> "I have a prompt that writes prompts for GitHub issues."

**The Pattern:**

```
Level 1: Human has an idea
   ↓
Level 2: Prompt generates a detailed spec
   ↓
Level 3: Spec becomes a GitHub issue
   ↓
Level 4: Claude Code picks up the issue and implements
```

### Voice-to-Feature Workflow

1. **Voice memo** - Dan records feature idea
2. **Transcription** - Converted to text
3. **Meta-prompt** - Turns transcript into detailed spec
4. **Issue creation** - Spec becomes trackable work item
5. **Implementation** - Claude Code executes

---

## Part VII: The CLAUDE.md Flywheel

### How Knowledge Compounds

Every mistake becomes a rule:

```
Mistake detected → Review logs → Update CLAUDE.md → Future prevention
```

### What Goes in CLAUDE.md

At Every, CLAUDE.md contains:
- Architecture decisions
- Code style preferences
- Common gotchas
- Review feedback patterns
- Testing requirements

### The Compounding Effect

Week 1: Basic instructions
Week 4: Patterns from 20+ features
Week 12: Rich institutional knowledge
Week 52: Comprehensive team brain

---

## Part VIII: Kieran Klaassen's Role

### The Compound Engineering Duo

Dan works closely with Kieran Klaassen (Senior Engineer at Every). Together they developed:

- **Compound Engineering methodology** - The overall approach
- **compound-engineering-plugin** - Official Claude Code plugin
- **Multi-agent review system** - 12-agent code review

### Kieran's Key Contribution

> "Slash commands are really good for starting work—things like planning a big feature or doing a first pass review. Subagents are more like colleagues you call in mid-stream."

---

## Part IX: Key Insights

### Insight 1: The Role Shift

> "Think like an engineering manager, not a coder."

This is the mental model shift. You're not writing code - you're:
- Specifying requirements
- Reviewing output
- Directing agents
- Capturing learnings

### Insight 2: Quality Through Iteration

Dan doesn't expect perfect first attempts:

> "Features that took a week now ship in an afternoon."

The speed comes from rapid iteration, not one-shot perfection.

### Insight 3: Knowledge Must Compound

If you're not capturing learnings, you're not using compound engineering:

> "Every correction to CLAUDE.md makes future work better."

---

## Part X: The Business Case

### Investment

- $400/month for 2 Claude Code subscriptions
- Time spent on reviews and direction

### Returns

- 15-person output from 2 engineers
- Features in hours instead of weeks
- Consistent quality through automated review

### The Math That Matters

```
Traditional: 1 engineer = 1 engineer's output
Compound:    1 engineer = 5+ engineers' output

But also:
Traditional: Knowledge stays in heads
Compound:    Knowledge compounds in files
```

---

## Part XI: Resources and Tools

### Open Source

- **compound-engineering-plugin** - GitHub: EveryInc/compound-engineering-plugin
- Implements the compound engineering loop
- Works with Claude Code native features

### Learning Resources

- **Claude Code for Beginners Workshop** - https://claude101.every.to/
- **Podcast Episodes** - Every podcast on AI engineering
- **Articles** - every.to/chain-of-thought

---

## Part XII: Mental Model Summary

### The Dan Shipper Mental Model

```
┌─────────────────────────────────────────────────────────────┐
│               DAN SHIPPER'S APPROACH                         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  CORE PRINCIPLE: "Think like an engineering manager"         │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ INPUTS                                                │   │
│  │ • Voice memos → Specs                                │   │
│  │ • Meta-prompts → Issues                              │   │
│  │ • CLAUDE.md → Context                                │   │
│  └──────────────────────────────────────────────────────┘   │
│                           ↓                                  │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ EXECUTION                                             │   │
│  │ • 4+ parallel Claude instances                       │   │
│  │ • Git worktrees for isolation                        │   │
│  │ • Slash commands for workflows                       │   │
│  └──────────────────────────────────────────────────────┘   │
│                           ↓                                  │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ QUALITY                                               │   │
│  │ • 12-agent code review                               │   │
│  │ • Human review for architecture                      │   │
│  │ • Tests as verification                              │   │
│  └──────────────────────────────────────────────────────┘   │
│                           ↓                                  │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ COMPOUNDING                                           │   │
│  │ • Update CLAUDE.md with learnings                    │   │
│  │ • Each feature makes next easier                     │   │
│  │ • Team knowledge persists                            │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Part XIII: Quotes in Dan's Voice

### On AI Writing Code

> "Every piece of code shipped in the last two months was written by AI. Not assisted by AI. Written by AI."

> "Claude Code opens 100 percent of pull requests."

> "Haven't typed a function in weeks."

### On Productivity

> "Two engineers at Every shipped six features, five bug fixes, and three infrastructure updates in one week."

> "Features that took a week now ship in an afternoon."

### On the Mental Shift

> "Think like an engineering manager, not a coder."

---

## Part XIV: Sources

### Primary

1. **Compound Engineering Article:** https://every.to/chain-of-thought/compound-engineering-how-every-codes-with-agents
2. **Ship Like a Team of Five:** https://every.to/source-code/how-i-use-claude-code-to-ship-like-a-team-of-five
3. **Podcast:** https://every.to/podcast/how-two-engineers-ship-like-a-team-of-15-with-ai-agents

### Secondary

4. **X/Twitter:** https://x.com/danshipper
5. **Lenny's Newsletter:** https://www.lennysnewsletter.com/p/inside-every-dan-shipper
6. **Claude Beginners Workshop:** https://claude101.every.to/

---

## Verification: Extraction Complete

- [x] Professional identity verified
- [x] Compound Engineering methodology documented
- [x] Technical setup captured
- [x] Key claims and evidence
- [x] Mental model extractable
- [x] Tools and resources listed

---

## Tags

`#dan-shipper` `#every` `#compound-engineering` `#100-percent-ai-code` `#multi-agent-review` `#parallel-instances` `#kieran-klaassen` `#practitioner` `#founder` `#production-validated`

---

*Extracted: 2026-01-13*
*Agent: Claude Opus 4.5*
*Depth: Tier 1 practitioner extraction (450+ lines)*
