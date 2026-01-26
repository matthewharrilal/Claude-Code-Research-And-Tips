---
**DEPRECATED** (2026-01-18)

This content has been superseded by D-FINAL synthesis.

**Replacement:** See D-FINAL-implementation Section 2 for current content.
**Reason:** Content fully covered in D-FINAL with production validation.
**Original preserved below for reference.**

---

# Memory Approaches Compared

> **You Are Here:** This document compares four memory strategies (progress.txt, Git History, AGENTS.md, Claude-Mem) for persisting knowledge across Claude Code sessions. Use this when your agent keeps "forgetting" context between sessions or when you need to decide how to store learnings.

## The Same Goal

Every approach aims to solve the same fundamental problem: **persist knowledge across sessions**. Claude starts fresh each conversation. Without memory, every session is groundhog day.

---

## Approach 1: progress.txt

### How it works
- Append-only text file in project root
- Often includes "Codebase Patterns" or "Session Learnings" sections
- Dated entries track what was discovered and when
- Agent appends before ending session

### Pros
- Zero setup required
- Human readable and editable
- Easy to update with simple append
- Visible in file tree
- Works with any tooling

### Cons
- Can grow large over time
- No inherent structure or schema
- Manual pruning needed periodically
- No semantic search capability
- Duplicates accumulate

### Best for
- Session memory and short-term learnings
- Scratchpad for current work
- Quick handoff between sessions
- Projects without complex memory needs

---

## Approach 2: Git History

### How it works
- Commit messages encode decisions and context
- Branch state shows work in progress
- Diff history reveals code evolution
- PR descriptions capture rationale

### Pros
- Already exists in every project
- Structured timeline built-in
- No extra files to maintain
- Immutable record
- Standard tooling support

### Cons
- Hard to query semantically
- Knowledge is implicit, not explicit
- Requires discipline in commit messages
- Can't store non-code learnings
- git log archaeology is tedious

### Best for
- Code evolution tracking
- Decision history ("why was this changed?")
- Rollback scenarios
- Audit trails

---

## Approach 3: AGENTS.md

### How it works
- Permanent learnings document in project root
- Captures patterns, gotchas, and conventions
- Updated by agents when significant learning occurs
- Lives alongside CLAUDE.md (instructions) as knowledge base

### Pros
- Long-term knowledge survives all sessions
- Both human and agent readable
- Curated signal, not noise
- Version controlled with project
- Natural place for "project wisdom"

### Cons
- Requires manual curation
- Can become stale if not maintained
- Single file limits organization
- No automatic updates
- Subjective what belongs

### Best for
- Permanent project knowledge
- Team onboarding context
- Architectural decisions
- "Things we learned the hard way"

---

## Approach 4: Claude-Mem / External Database

### How it works
- Semantic memory store (vector DB, structured DB, or hybrid)
- Compressed summaries of learnings
- Cross-session persistence with retrieval
- Often uses embeddings for similarity search

### Pros
- Automatic memory formation
- Semantic search ("find related learnings")
- Scales to massive knowledge bases
- Cross-project knowledge possible
- Handles unstructured data well

### Cons
- Requires setup and infrastructure
- External dependency to maintain
- Less transparent (black box feeling)
- Cost and complexity overhead
- Potential latency in retrieval

### Best for
- Long-running AI systems
- Large teams or organizations
- Cross-project knowledge sharing
- Systems requiring semantic retrieval

---

## Comparison Matrix

| Factor | progress.txt | Git History | AGENTS.md | Claude-Mem |
|--------|--------------|-------------|-----------|------------|
| **Setup** | None | None | Low | Medium-High |
| **Persistence** | Session | Forever | Forever | Forever |
| **Query** | Manual/grep | Hard | Manual/grep | Semantic |
| **Scale** | Medium | Good | Limited | Excellent |
| **Structure** | Freeform | Rigid | Curated | Flexible |
| **Maintenance** | Prune needed | Automatic | Curation | Automatic |
| **Transparency** | Full | Full | Full | Variable |
| **Human readable** | Yes | Partial | Yes | Depends |
| **Cross-project** | No | No | No | Possible |

---

### Checkpoint: Memory Approaches
**You should now understand:**
- [ ] The four memory approaches and their tradeoffs
- [ ] Which approach fits which persistence need
- [ ] How to query/search each memory type

**If unclear:** Re-read the Comparison Matrix or "Best for" sections above.

---

## Layered Memory Strategy

**The insight: Use ALL of them, each for its strength.**

### Layer 1: progress.txt (Session Memory)
```
What am I working on RIGHT NOW?
What did I just discover?
What should I pick up next session?
```
- Append during work
- Review at session start
- Prune after incorporating learnings elsewhere

### Layer 2: Git History (Code Memory)
```
What changed and why?
What was the state before?
Who/what made this decision?
```
- Good commit messages are investment
- PR descriptions capture context
- Tags mark significant states

### Layer 3: AGENTS.md (Project Memory)
```
What does this codebase NEED to know forever?
What gotchas will bite future agents?
What patterns define this project?
```
- Graduate from progress.txt when proven valuable
- Curate ruthlessly
- Review quarterly

### Layer 4: Claude-Mem/DB (System Memory)
```
What have we learned across ALL projects?
What patterns recur?
What can be retrieved semantically?
```
- For sophisticated setups
- Organizational knowledge
- Long-term AI assistant memory

---

## Migration Path

```
Session Discovery
      ↓
 progress.txt (temporary hold)
      ↓
 Proven valuable? → AGENTS.md (permanent)
      ↓
 Cross-project relevance? → Claude-Mem (semantic store)

Git captures code decisions throughout
```

---

## Anti-Patterns

1. **Everything in progress.txt** - becomes unreadable
2. **Nothing in AGENTS.md** - keeps rediscovering
3. **Over-engineering Claude-Mem for simple project** - complexity overhead
4. **Ignoring git messages** - losing free memory
5. **Never pruning** - noise overwhelms signal

---

## Recommended Defaults

**Solo developer, small project:**
- progress.txt + good git messages

**Team project, medium complexity:**
- progress.txt + AGENTS.md + disciplined git

**Long-running AI system, organization:**
- All four layers, with automation

---

## The Core Insight

Memory is not one thing. It's layers:

| Layer | Analogy | Purpose |
|-------|---------|---------|
| progress.txt | Working memory | What's active now |
| Git | Episodic memory | What happened when |
| AGENTS.md | Semantic memory | What we know |
| Claude-Mem | Long-term store | Everything, searchable |

Each layer has different retention, access patterns, and maintenance needs. Use the right layer for the right knowledge.

---

## Troubleshooting

### Common Issue: progress.txt Becomes Unmanageable
**Symptom:** File is thousands of lines; agent references outdated information; search returns too many results.
**Cause:** Never pruned; everything accumulated without curation.
**Fix:** Archive old content to a dated backup, then prune to recent sessions only. Graduate valuable patterns to AGENTS.md.

```bash
# Check progress.txt size
wc -l scripts/ralph/progress.txt

# Archive and reset
mv scripts/ralph/progress.txt scripts/ralph/progress-archive-$(date +%Y%m%d).txt
echo "# Session Progress" > scripts/ralph/progress.txt
```

### Common Issue: Agent Keeps Rediscovering Same Patterns
**Symptom:** Same "Learned:" entries appearing in progress.txt across sessions; agent makes same mistakes repeatedly.
**Cause:** Knowledge not graduating from progress.txt to AGENTS.md; agent not reading AGENTS.md.
**Fix:** Create AGENTS.md with proven patterns. Ensure CLAUDE.md instructs agent to read AGENTS.md at session start.

```bash
# Create AGENTS.md if it doesn't exist
touch AGENTS.md

# Add to CLAUDE.md:
# "At session start, read AGENTS.md for permanent project knowledge."
```

### Common Issue: Git History Hard to Search
**Symptom:** Know something was changed but can't find when or why.
**Cause:** Poor commit messages; no semantic tagging; relying on implicit knowledge.
**Fix:** Improve commit message discipline. Use conventional commits. Consider adding `[DECISION]` or `[PATTERN]` tags.

```bash
# Search commit messages
git log --all --oneline --grep="auth"

# Search code changes
git log -p -S "functionName"

# Find commits by date range
git log --since="2026-01-01" --until="2026-01-15" --oneline
```

### Common Issue: Claude-Mem Retrieval Returns Irrelevant Results
**Symptom:** Semantic search returns tangentially related content; misses obviously relevant entries.
**Cause:** Poor embedding quality for your domain; retrieval threshold too loose/strict.
**Fix:** Tune similarity thresholds. Consider domain-specific embeddings. Fall back to keyword search for precision needs.

### Common Issue: Memory Layers Out of Sync
**Symptom:** progress.txt says one thing, AGENTS.md says another, code comments say a third.
**Cause:** No graduation process; multiple sources of truth evolving independently.
**Fix:** Establish weekly memory maintenance: prune progress.txt, review AGENTS.md, archive stale content.

```bash
# Weekly memory audit script
echo "=== Memory Audit $(date) ==="
echo "progress.txt lines: $(wc -l < scripts/ralph/progress.txt)"
echo "AGENTS.md lines: $(wc -l < AGENTS.md)"
echo "Recent patterns in progress.txt:"
grep -i "pattern\|learned" scripts/ralph/progress.txt | tail -10
```
