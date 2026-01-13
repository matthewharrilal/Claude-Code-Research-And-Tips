# Ralph Wiggum Marketer - Self-Critiquing Content Loop

## Source
- **Author:** @koylanai (Muratcan Koylan) - AI Agent Systems Manager, building agents since GPT-2
- **Date:** 2026-01-07
- **URL:** https://x.com/koylanai/status/2008824728824451098
- **Engagement:** 1.5K likes, 84K views, 1.9K bookmarks

---

## Core Insight

**One-liner:** Claude Code plugin that iteratively drafts, self-critiques, and refines marketing content until it passes "founder quality" standards in your voice.

**The Loop:**
```
DISCOVER → LEARN → RESEARCH → IDEATE → WRITE → CRITIQUE
                                                   ↓
                                          "Would founder publish?"
                                                   ↓
                                            No → ITERATE → back to CRITIQUE
                                            Yes → PUBLISH
```

---

## Key Innovation: Separation of Discovery vs Synthesis

From author's reply to @mattyp:

> "Ralph doesn't have the LLM 'discover' things on its own. Its discovery is a database-driven input system... The agent's job is synthesis."

**Translation:** Don't let AI discover—it hallucinates. Pre-populate a SQLite DB with:
- Your content/voice samples
- Competitor analysis
- Market trends
- Internal communications

AI then SYNTHESIZES unique angles from known data, not discovering new facts.

---

## Architecture

### Multi-Agent Ecosystem
```
┌─────────────────────────────────────────────┐
│  External Agents (feed the DB)              │
│  • TrendScout                               │
│  • Research Agent                           │
│  • Product/Marketing Intel                  │
└─────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────┐
│  SQLite Database (single source of truth)   │
│  • trends                                   │
│  • research                                 │
│  • communications                           │
│  • content_plan                             │
│  • drafts                                   │
│  • published                                │
└─────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────┐
│  Ralph Copywriter Agent                     │
│  • Reads prd.json for tasks                 │
│  • Checks progress.txt for learnings        │
│  • Writes → Critiques → Iterates            │
│  • Commits to git                           │
└─────────────────────────────────────────────┘
```

---

## Implementation

### Install
```bash
# Marketplace
/plugin marketplace add muratcankoylan/ralph-wiggum-marketer
/plugin install ralph-wiggum-marketer@muratcankoylan-ralph-wiggum-marketer

# Local
git clone https://github.com/muratcankoylan/ralph-wiggum-marketer.git
claude --plugin-dir ./ralph-wiggum-marketer
```

### Commands
```
/ralph-init      # Initialize project
/ralph-marketer  # Start the loop
/ralph-status    # Check progress
/ralph-cancel    # Stop
```

### Seed the Database
```javascript
// From seed.js
insertTrend.run('Your Trend Topic', 'Description', 'Source', 85); // relevance score
insertComm.run('product_update', 'Launch Title', 'Details',
  JSON.stringify(['Key message 1', 'Key message 2']), 'Target audience', 1);
```

### Task Definition (prd.json)
```json
{
  "id": "WRITE-004",
  "title": "Write your custom blog",
  "acceptanceCriteria": [
    "At least 1000 words",
    "Includes 3 data points",
    "Has compelling CTA"
  ],
  "priority": 5,
  "passes": false
}
```

---

## The Critique Output

Example from screenshot:
```
Voice match score: 7/10
Passes founder test: NO
Weaknesses identified: 5
  - Opening could be more provocative
  - CTA too soft
  - Section 3 too lengthy
  ...
Recommendations: [list]
```

Iteration continues until founder test = YES.

---

## File Structure
```
.claude-plugin/plugin.json     # Plugin manifest
commands/ralph-marketer.md     # Main loop prompt
commands/ralph-init.md         # Initialization
commands/ralph-status.md       # Status check
commands/ralph-cancel.md       # Cancel
skills/copywriter/SKILL.md     # Copywriter skill
hooks/hooks.json               # Hook config
hooks/stop-hook.sh             # Loop continuation
scripts/src/seed.js            # DB seeding
templates/prd.json             # Task template
templates/progress.txt         # Progress log
templates/prompt.md            # Agent instructions
```

---

## DB Schema
```sql
trends (topic, description, source, relevance_score, status)
research (title, summary, key_findings, data_points, category, status)
communications (type, title, details, key_messages, target_audience, priority, status)
content_plan (content_type, title, brief, target_keywords, status)
drafts (plan_id, version, content, word_count, feedback)
published (plan_id, final_content, meta_description)
agent_log (action, details, created_at)
```

---

## The Original Ralph Loop

At its core:
```bash
while :; do cat PROMPT.md | claude-code ; done
```

Everything else is scaffolding around this pattern.

---

## Mental Model

> "View Claude Code as a persistent, file-memory-based loop where AI acts as an autonomous copywriter, breaking projects into small, verifiable stories that compound over iterations—emphasizing eventual consistency over perfect first attempts."

**Key principles:**
- Small stories (complete in one iteration)
- Explicit acceptance criteria
- Fast feedback via critiques
- Compound learnings in files
- Separate discovery (human/DB) from synthesis (AI)

---

## Caveats

- Discovery MUST be pre-populated—AI can't reliably find new facts
- Each iteration = fresh context, so persist learnings in files
- Initial outputs may be bad ("deterministically bad"), but improve
- Mock DB needs real content for personalized output
- Long loops consume resources; use /ralph-cancel

---

## Actionability

🟡 **Medium Lift** - Need to install plugin, seed DB with your content/voice

### Quick Start
1. Install plugin
2. Run `/ralph-init`
3. Update mock DB with your content
4. Run `/ralph-marketer`
5. Watch it critique and iterate

---

## What You'll See When You Run This

**Before running:** Plugin installed, database seeded with your voice samples and content topics.

### Installing the Plugin

```bash
$ /plugin marketplace add muratcankoylan/ralph-wiggum-marketer
```

**Annotated Output:**
```
Searching marketplace...               ← Finding the plugin
Found: ralph-wiggum-marketer          ← Plugin exists
  Author: muratcankoylan
  Version: 1.2.0
  Description: Self-critiquing content loop

Downloading...                         ← Pulling plugin files
  ✓ commands/ralph-marketer.md
  ✓ commands/ralph-init.md
  ✓ hooks/hooks.json
  ✓ skills/copywriter/SKILL.md
  ✓ scripts/src/seed.js

Installing dependencies...             ← Setting up SQLite, etc.
  ✓ better-sqlite3
  ✓ Plugin dependencies installed

✅ Plugin installed successfully       ← Ready to use
   Run /ralph-init to initialize
```

### Initializing the Project

```bash
$ /ralph-init
```

**Annotated Output:**
```
Initializing Ralph Wiggum Marketer...  ← Setting up project structure

Creating directories...
  ✓ Created .ralph/                   ← Local config folder
  ✓ Created .ralph/data/              ← SQLite database location

Initializing database...               ← Creating tables
  ✓ Table: trends
  ✓ Table: research
  ✓ Table: communications
  ✓ Table: content_plan
  ✓ Table: drafts
  ✓ Table: published

Creating template files...
  ✓ prd.json                          ← Task tracking
  ✓ progress.txt                      ← Learning log
  ✓ prompt.md                         ← Agent instructions

✅ Initialization complete!

Next steps:
  1. Seed database with your content: node scripts/src/seed.js
  2. Update voice samples in database
  3. Run /ralph-marketer to start
```

### Running the Content Loop

```bash
$ /ralph-marketer
```

**Annotated Output:**
```
🚀 Starting Ralph Wiggum Marketer      ← Loop is starting
   Max iterations: 10                  ← Safety limit
   Target: Blog post draft

=== Iteration 1 of 10 ===

Phase: DISCOVER                        ← Reading from database
  Loading trends from DB...
  Found 5 relevant trends
  Loading communications...
  Found 3 product updates

Phase: LEARN                           ← Analyzing your voice
  Reading voice samples...
  Extracted patterns:
    - Conversational tone
    - Technical but accessible
    - Uses concrete examples

Phase: RESEARCH                        ← Finding angles
  Cross-referencing trends with product...
  Identified 4 potential angles

Phase: IDEATE                          ← Generating concepts
  Concept 1: "Why X matters for Y"
  Concept 2: "The hidden cost of Z"
  → Selected: Concept 2 (highest relevance)

Phase: WRITE                           ← First draft
  [Writing draft...]                   ← Takes 30-60 seconds
  Draft complete: 1,247 words

Phase: CRITIQUE                        ← Self-evaluation
  ┌─────────────────────────────────┐
  │ CRITIQUE RESULTS                │
  ├─────────────────────────────────┤
  │ Voice match score: 7/10         │ ← Not quite your voice yet
  │ Passes founder test: NO         │ ← Wouldn't publish as-is
  │                                 │
  │ Weaknesses identified: 5        │
  │  - Opening could be more        │
  │    provocative                  │
  │  - CTA too soft                 │
  │  - Section 3 too lengthy        │
  │  - Missing concrete example     │
  │  - Tone shifts in paragraph 4   │
  │                                 │
  │ Recommendations:                │
  │  1. Rewrite opening hook        │
  │  2. Add customer story          │
  │  3. Strengthen CTA              │
  └─────────────────────────────────┘

Decision: ITERATE                      ← Will try again

=== Iteration 2 of 10 ===

Applying feedback from iteration 1...  ← Learning from critique

Phase: WRITE                           ← Revised draft
  [Rewriting with feedback...]
  Draft complete: 1,189 words

Phase: CRITIQUE
  ┌─────────────────────────────────┐
  │ CRITIQUE RESULTS                │
  ├─────────────────────────────────┤
  │ Voice match score: 8/10         │ ← Better!
  │ Passes founder test: NO         │ ← Still not there
  │                                 │
  │ Weaknesses identified: 2        │ ← Fewer issues
  │  - Example needs more detail    │
  │  - Conclusion feels rushed      │
  └─────────────────────────────────┘

Decision: ITERATE

=== Iteration 3 of 10 ===

[...]                                  ← Continues refining

=== Iteration 4 of 10 ===

Phase: CRITIQUE
  ┌─────────────────────────────────┐
  │ CRITIQUE RESULTS                │
  ├─────────────────────────────────┤
  │ Voice match score: 9/10         │ ← Excellent match
  │ Passes founder test: YES        │ ← Would publish this!
  │                                 │
  │ Strengths:                      │
  │  ✓ Strong opening hook          │
  │  ✓ Authentic voice              │
  │  ✓ Clear examples               │
  │  ✓ Compelling CTA               │
  └─────────────────────────────────┘

Decision: PUBLISH                      ← Meets quality bar

Saving to published table...
  ✓ Saved as draft ID: 127

Updating prd.json...
  WRITE-004: passes = true

✅ Content complete!
   Iterations used: 4
   Final word count: 1,156
   Voice match: 9/10
```

**Timing Expectations:**
- Each critique iteration: 60-90 seconds
- Simple blog post: 3-5 iterations (5-8 minutes)
- Complex thought piece: 6-10 iterations (10-15 minutes)
- High-stakes content: May need multiple runs with adjusted prompts

**What to Do While It Runs:**
- Let it iterate autonomously
- Check `/ralph-status` for progress
- Review the critique feedback in progress.txt
- DON'T interrupt unless you need to (`/ralph-cancel`)

**If you skip the self-critique loop:** You'll get first-draft quality content that doesn't match your voice and needs heavy manual editing.

**This connects to:** The broader Ralph pattern of "iterate until quality bar is met" - same concept applied to content instead of code.

---

## Resources

- **Repo:** github.com/muratcankoylan/ralph-wiggum-marketer
- **Official Ralph plugin:** github.com/anthropics/claude-plugins-official/tree/main/plugins/ralph-loop
- **Original concept:** ghuntley.com/ralph/

---

## Contrast with Other Ralph Variants

| Variant | Focus | Output |
|---------|-------|--------|
| Ralph (Carson) | Feature dev | Shipped code |
| Ralph Marketer | Content | Blog posts, copy |
| Original (Huntley) | General tasks | Any completion |

Same loop pattern, different domains.

---

## Tags
`#orchestration` `#ralph-loop` `#self-critique` `#content-generation` `#voice-matching` `#sqlite-memory` `#plugin`
