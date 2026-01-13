# Productivity Workflows & Feedback Loops

A comprehensive corpus of productivity systems, daily routines, and self-reinforcing feedback loops for software engineers using Claude Code + Obsidian. Sourced from power user anecdotes and expanded research.

---

## Part 1: Anecdotal Tips from Power Users

Collected from the @kepano thread and related discussions. Each tip attributed to its source.

### Daily & Personal Productivity

| Tip | Description | Source |
|-----|-------------|--------|
| `/today` Command | Pull yesterday's saved/read/written notes, GitHub PRs needing review, related old notes → generate todos. Start every day with this. | @bleikamp |
| Morning Routine Snapshot | Run a morning command to snapshot current projects, areas, tasks, and context for quick reference. Combine with CLI tools like `taskdn`. | @dannysmith |
| `/wrapup` Review | End the day with `/wrapup` to review progress, priorities based on context/goals/due dates. Use Kanban for tasks/ideas/notes/1:1s, with auto-git commits. | @mimc__ |
| Therapy Session Reviews | Transcribe sessions (via Granola), save to MD files, summarize, run quarterly reviews for progress, growth areas, blind spots. | @ValtteriValo |
| Workout Tracking | Log workouts from Garmin/Strava via scraper into notes; Claude suggests workouts based on history. | @_grojo |
| Life Management System | Manage entire life with infinite todo lists; Claude handles some tasks, integrates Google calendar/Gmail via Go CLI, assists with outreach. | @aditya_advani |
| Personal Assistant Setup | Integrate as 24/7 assistant with MCP on home server, natural language queries for life data (e.g., pubs visited). | @_grojo |
| Goal Trend Analysis | Review past years' goals (e.g., 2022-2025) for trends; sub-agents explore themes like relationships/career/daily practice, pull quotes for patterns. | @belindmo |
| Success Definition Exercise | AI lists referenced people (YouTubers/authors), run "tournament" in Canvas to define success, analyze for goal adjustments. | @yesTheRealOne |
| Master Context Files | Maintain per-project/area master context files; repeatedly pass to Claude instead of re-explaining. Update with progress reviews. | @internetVin |
| Hierarchical Time Organization | Year folders with tasks/weekly subfolders/daily notes/summaries. Dependency chain: `/year` → `/week` → `/today` (weather/news/calendar). `/capture` for quick tasks, `/backlog` for priorities/due dates. | @markfrancisio |
| Daily Brief with Limitless | Daily sync with Limitless for yesterday's lifelog, draft tweets/propose blog topics. | @lyc_zh |
| Council of Advisors | `/counsel` consults AI personas, `/persona` creates new ones, `/counsel-list` views all. Use for mid-day check-ins on blockers. | @mimc__ |
| Import & Life Coach | Import Apple Notes/Notion, organize/distill insights, act as life coach for goal-setting. | @ronforbes |

### Note Organization & Management

| Tip | Description | Source |
|-----|-------------|--------|
| Inbox/Attachment Organizing | Automate organizing attachments/inbox; use as thinking/research assistant. Mobile via terminal. GitHub: claudesidian | @heyitsnoah |
| Batch Editing | Complex bash commands for adding links/properties; project folders with notes/PDFs, Claude critiques from perspectives, iterates into notes. | @poetengineer__ |
| Terse Notes Expansion | Turn concise ideas into bulleted structures with wiki links, maintaining personal style/tone. | @AnsonBiggs |
| Property Tidying | Use as janitor to tidy note properties; integrated 4000 Evernote notes. | @NickMilo |
| Stream of Consciousness Processing | Handwrite on tablet, export PDF, OCR with Claude, slash commands to outlines/essays in directories. | @VarunGodbole |
| Progressive Memory System | Background storage/deprecation/update of work; agents check/store memories. Backend linked to Obsidian for readability. | @Cato_Pine |
| Unstructured to Formatted | Write unstructured notes; Claude formats properly. | @Artan404 |
| Link Saving & Weekly Organize | Drop links anywhere; weekly `/organize` fetches content, summarizes, categorizes by reading time, filenames/folders/tagging/connections. Dashboard for "read next" recommendations. Custom skills for ingestion, parallel subagents, auto-commits. | @OmerGronich |
| Claims Vault | Note research claims/literature, linked with metadata; skills break papers into claims, clean metadata. | @korenmiklos |
| Repo-Wiki | Vault for codebases with rules/updates/docs/decisions/plans; webhooks update on changes, kick dev agents on new Kanban cards. | @eSaadster |
| Frontmatter Validity | Generate code to check frontmatter validity. | @f |
| Research Agent | Find 10-20 sources with WebSearch/WebFetch, summarize into note with frontmatter/key concepts/learning path/suggested redlinks/citations. | @echophons |
| Chroma DB Patterns | Save notes to Chroma DB, Claude finds patterns/things missed across months/days. Update frontmatter. | @BeyondPremiere |
| Mood Journal Analysis | Use backlinks to analyze mood journal patterns. | @sridca |

### Research & Analysis

| Tip | Description | Source |
|-----|-------------|--------|
| Cross-File Patterns | Sub-agent finds patterns across files (search term, copy results, send to agent). | @internetVin |
| Lecture Processing | Structured knowledge from slides/transcript, Zettelkasten atomic notes linked to slides, content map. GitHub: claude-lecture-processor | @ChristianWiess1 |
| Competitor Analysis | Prompt initial names, Google for full list, create doc with findings, iterate. | @sanketsaurav |
| Recommendation System | Suggest new reads based on notes. | @joshycodes |

### Coding & Integration

| Tip | Description | Source |
|-----|-------------|--------|
| Embedded Claude Code | Embed Claude Code in Obsidian via agent SDK to avoid switching. GitHub: obsidian-claude-code | @roasbeef |
| ACP Plugin | Plugin for AI agents (Claude Code/Codex/Gemini CLI) via ACP, organize/search/automate with MCP. | @rainbow_0219 |
| iOS Workflow | Combine iOS Memos/Obsidian/Claude. | @DBredvick |
| Custom Assistant | Built with agent SDK, Telegram/voice/web/terminal access, email/cal/memory/git sync. Folder per project/area. | @chrshys |
| Quartz Setup | Open `/content/` as vault, 1-level folders, templates/quick add for frontmatter. Skills for wiki links/update people/map word/markdown/draft blogs. Tags for quarters, excluded personal. | @conner_xyz |
| Remote Vault Setup | Vault on remote server, Mac sync, agents use as memory. Messages from devices, auto-events/schedules. Categories: public/private/instructions/memories. | @_overment |
| MCP Server | For Claude desktop, notes of AI conversations, find red lines/think concepts. | @sensei_bas |
| Technical Docs Skill | Microsoft style guide templates for investigations/proposals/designs. Write from research/bug to inbox. | @WCM_Trades |
| Astro Blogs | Write/edit Astro sites built by Claude. | @Kenneth |
| Claudian Embedded | Make Claude Code embedded in Obsidian. GitHub: claudian | @Yishen_Tu |
| AI COO for Ecommerce | Skills for workflows, cronjobs autonomous run, logging/improvement. | @reubenloojl |
| Sales CRM | Analyze transcripts, maintain markdown CRM, update backlinks/frontmatter. | @FraCorazza |

### Broader System Architectures

| Tip | Description | Source |
|-----|-------------|--------|
| Shared Cognitive Layer | Instruction-first access, resolve human/agent edits with dry-run/tools/version control/no delete/trace in Langfuse/auto-git. | @_overment, @MichalAiWorld |
| Exo-Brain | Organized vault with links/frontmatter as talkable exo-brain. | @f |
| Personal OS | Documentation first, all context in docs. | @philfreo |
| Memory/Context Graph | Integrate for AI memory readability. | @meta_alchemist |
| EA/GTD System | GTD-ish workflow with Obsidian as central store. | @johnbanq |
| Context Layers | Organize into layers for Claude. | @buyborrowdie |
| Wikilinks as Knowledge Graph | Opus 4.5 writes notes, wikilinks traverse thoughts like filesystem. | @sowmay_jain |

---

## Part 2: Expanded Daily Productivity Workflows

Deep research synthesis combining coding workflows, PKM principles, and AI-driven analysis into self-reinforcing feedback loops.

### Morning Ignition Workflows

**Goal:** Turn daily starts into feedback-driven launches with predictive analysis and goal tethering.

#### Adaptive Goal-Aligned Snapshot

Expand the morning routine to not just snapshot current projects/tasks/context but cross-reference against quarterly goals stored in a master "Goals Vault" (e.g., a YAML-frontmatter note).

**How it works:**
1. Claude pulls yesterday's notes, GitHub PRs/commits (via MCP integration), and external data (calendar events, weather APIs)
2. Generates a "delta report": What's aligned with goals? What's drifting?
3. For engineers: flags overdue PR reviews or code debt trends

**Feedback loop:** At quarter-end, Claude aggregates deltas to spot patterns (e.g., "You consistently underrate testing time").

**Inspiration:** Teresa Torres' 3-layer context system (global rules → project rules → reference files) for reducing re-explanation. (@petergyang)

**Win:** Starts your day with 80/20 focus, leading to 20-30% faster quarterly goal attainment by catching misalignments early.

---

#### Parallel Scenario Planning

Use Claude Code's sub-agents (run 3-5 in parallel tabs) to simulate daily outcomes based on pulled data.

**How it works:**
1. One agent pulls notes/PRs
2. Another forecasts risks (e.g., "This bug fix might block deployment based on past merge patterns")
3. A third suggests optimizations
4. Output to Obsidian as a Canvas with linked notes

**Feedback loop:** Evening wrap-up compares simulated vs. actual, updating a "Prediction Accuracy Log" for Claude to refine future forecasts.

**For life:** Integrate health data (e.g., sleep from Apple Health) to predict energy dips.

**Inspiration:** Boris Cherny's parallel Claude strategy for engineering teams. (@coffeewithone)

**Win:** Engineers avoid overcommitting, reducing burnout; quarterly reviews reveal blind spots like "Weekend recovery predicts Monday velocity."

---

#### Voice-to-Context Builder

Dictate a quick voice note (via Superwhisper or iOS Memos) on morning thoughts; Claude transcribes, summarizes, and weaves into the snapshot with cross-links to related old notes.

**How it works:**
1. Voice capture via Superwhisper, iOS Memos, or similar
2. Claude transcribes and summarizes
3. Cross-links to related old notes (e.g., "This idea echoes your Q3 therapy blind spot on delegation")
4. Integrates into morning snapshot

**Feedback loop:** Quarterly, Claude analyzes voice note themes for growth trends (e.g., shifting from reactive to strategic thinking).

**Win:** Frees mental space for deep coding sessions, with huge quarterly wins in self-awareness.

---

### Mid-Day Momentum Workflows

**Goal:** Create intra-day loops to maintain flow, inspired by agentic systems that verify work autonomously.

#### Commit-Triggered Reviews

Hook Claude to GitHub webhooks (via MCP or custom scripts) so every commit/PR triggers a mini-review in Obsidian.

**How it works:**
1. GitHub webhook triggers on commit/PR
2. Claude analyzes changes against project rules (stored in CLAUDE.md)
3. Suggests refactors and logs to a daily note
4. Aggregates into a "Code Health Score" (e.g., based on complexity metrics via tools like Radon)

**Feedback loop:** Daily wrap-up aggregates these into a "Code Health Score"; quarterly, it trends scores to identify blind spots (e.g., "Increasing technical debt in frontend modules").

**For life:** Extend to personal commits (e.g., journal entries) for habit tracking.

**Inspiration:** Anthropic's internal study where Claude handles 20 consecutive actions for debugging. (@rohanpaul_ai)

**Win:** Engineers ship cleaner code faster, with quarterly insights driving promotions via demonstrated improvement.

---

#### Papercut Auto-Fixer

Claude scans your vault for "papercuts" (minor issues like untagged notes or unresolved todos) during lulls, using sub-agents to fix them.

**How it works:**
1. One sub-agent categorizes issues
2. Another links orphan notes
3. Output to a "Fixed Log" note

**Feedback loop:** Weekly review compares fixed vs. new papercuts; quarterly, Claude correlates with productivity data (e.g., from RescueTime integration) to spot causes (e.g., "Meetings spike papercuts").

**Inspiration:** Naveen Naidu's Codex workflow for delegating small tasks. (@naveennaidu_m)

**Win:** Reclaims hours for high-value engineering, revealing life blind spots like "Email overload fragments focus."

---

#### Dynamic Council Check-Ins

Midway through the day, invoke a `/counsel` command with AI personas (e.g., "Code Architect" for tech advice, "Life Coach" for balance) on current blockers, pulling vault context.

**How it works:**
1. Invoke `/counsel` with current blocker
2. AI personas respond based on their configured personalities
3. Log advice and whether you took it

**Feedback loop:** Log advice uptake in notes; quarterly analysis shows which personas drive wins (e.g., "Coach reduced overtime by 15%").

**Inspiration:** Council system from the @kepano thread. (@markfrancisio)

**Win:** Mid-day pivots prevent engineering rabbit holes, fostering holistic growth.

---

### Evening Closure Workflows

**Goal:** Ground wrap-ups in data, not self-reports, for honest feedback.

#### Data-Driven Wrap-Up

The `/wrapup` pulls actual completions (GitHub merges, note edits, even email sends via MCP), compares to morning plan, and generates priorities for tomorrow.

**How it works:**
1. Pull actual completions from GitHub, Obsidian, email
2. Compare to morning plan
3. Generate "Completion Gap Analysis" (e.g., "You planned 5 PRs but merged 3—due to underestimated reviews")
4. Output priorities for tomorrow

**Feedback loop:** Feed gaps into a "Trends Vault"; quarterly, Claude synthesizes (e.g., "Q4 gaps highlight collaboration blind spots").

**For life:** Integrate therapy transcripts (auto-summarized from Zoom/Granola).

**Inspiration:** Brivael's QA loops in Claude Code. (@brivael)

**Win:** Engineers end days satisfied, with quarterly reviews quantifying progress (e.g., "Merged PRs up 40% via better estimation").

---

#### Multi-Agent Reflection

Run parallel agents at end of day: One reviews code/output, another personal notes/health, a third cross-compares (e.g., "Low steps correlated with fewer commits").

**How it works:**
1. Agent 1: Reviews code output and quality
2. Agent 2: Reviews personal notes and health data
3. Agent 3: Cross-compares for correlations
4. Output to Obsidian as linked summaries

**Feedback loop:** Agents self-verify via tests/hooks; quarterly, update agent rules based on accuracy.

**Inspiration:** Kol Tregaskes' multi-AI coordination. (@koltregaskes)

**Win:** Uncovers engineering-life intersections (e.g., "Exercise boosts debug speed"), amplifying quarterly growth.

---

#### Evergreen Note Distiller

Claude distills day's raw notes into atomic Zettelkasten entries, linking to existing knowledge graph.

**How it works:**
1. Review day's raw notes
2. Extract atomic concepts
3. Create Zettelkasten-style permanent notes
4. Link to existing knowledge graph

**Feedback loop:** Monthly graph analysis detects orphans/gaps; quarterly, suggests learning paths (e.g., "Fill Rust knowledge hole from recent PRs").

**Inspiration:** PKM plugins for AI-enhanced graphs.

**Win:** Builds a durable engineering knowledge base, revealing career blind spots like skill atrophy.

---

### Quarterly Synthesis Workflows

**Goal:** Scale daily loops to quarters, using AI for deep pattern recognition.

#### Integrated Progress Auditor

Quarterly, Claude pulls GitHub data (PRs/merges), therapy summaries, and vault trends to generate a "Growth Dashboard."

**How it works:**
1. Pull GitHub metrics: PRs merged, code complexity trends, review turnaround
2. Pull therapy/journal summaries
3. Pull vault trends (note creation, topics)
4. Generate dashboard table: Code output, mood correlations, goal hit rate
5. Highlight blind spots (e.g., "Overfocus on features neglects docs")

**Feedback loop:** Use as input for next quarter's goals, with agents simulating improvements.

**Inspiration:** Patrick O'Shaughnessy's morning pages and Anthropic's autonomy trends.

**Win:** Tangible career boosts (e.g., data-backed reviews), plus life wins like "Addressed delegation blind spot, freeing family time."

---

#### Trend Tournament

Claude lists themes from quarters (e.g., from goals/notes/PRs), runs a "tournament" in Obsidian Canvas to rank/track evolutions.

**How it works:**
1. Extract themes from quarterly data
2. Create Canvas with theme nodes
3. Run tournament-style ranking (which themes are growing? shrinking?)
4. Track evolution (e.g., "Career focus shifted from solo coding to team leads")

**Feedback loop:** Sub-agents explore outliers, pulling external research for context.

**Inspiration:** User goal trend analysis. (@rohanpaul_ai)

**Win:** Sparks innovative ideas, like pivoting to AI mentorship to counter skill atrophy concerns.

---

#### Holistic Life-Engineering Simulator

Quarterly, feed vault/GitHub/health data to parallel agents for "what-if" scenarios.

**How it works:**
1. Gather all quarterly data (vault, GitHub, health)
2. Feed to parallel agents
3. Simulate scenarios (e.g., "If I automate 20% more, how does work-life balance improve?")
4. Output reports with actionable steps

**Feedback loop:** Track implementation success in next quarter.

**Inspiration:** Jason Zhou's parallel design exploration. (@jasonzhou1993)

**Win:** Massive compounding—engineers gain leverage, spotting life growth areas like "Integrate hobbies to boost creativity."

---

## Part 3: Implementation Patterns

### Quick Start: First Week Setup

1. **Day 1:** Create a `/today` slash command that pulls yesterday's notes + GitHub PRs
2. **Day 2:** Add a `/wrapup` command that compares planned vs. completed
3. **Day 3:** Set up a master "Goals" note with YAML frontmatter for quarterly objectives
4. **Day 4:** Create one AI persona for `/counsel` (e.g., "Code Architect")
5. **Day 5:** Run your first week review comparing deltas

### File Structure Pattern

```
vault/
├── _system/
│   ├── goals.md              # Quarterly goals with YAML frontmatter
│   ├── personas/             # AI advisor personas
│   └── templates/            # Daily note templates
├── daily/
│   └── YYYY-MM-DD.md         # Daily notes with wrap-ups
├── projects/
│   └── [project-name]/       # Per-project context
├── trends/
│   └── quarterly-reviews/    # Quarterly synthesis outputs
└── inbox/                    # Quick capture
```

### MCP Integrations for Data Pulling

- **GitHub:** PRs, commits, review status
- **Calendar:** Events, time blocking
- **Health apps:** Sleep, steps, exercise
- **Email:** Send counts, response times (via Gmail MCP)
- **RescueTime:** Productivity scores, app usage

### Key Metrics to Track

| Metric | Source | Frequency |
|--------|--------|-----------|
| PRs merged | GitHub | Daily/Weekly |
| Code Health Score | Radon/custom | Daily |
| Completion Gap % | Planned vs done | Daily |
| Energy correlation | Health + output | Weekly |
| Goal alignment % | Delta reports | Monthly |
| Blind spots identified | Quarterly synthesis | Quarterly |

---

## See Also

- [[claude-code-mastery]] - Technical implementation details
- [[ideas-lab]] - Extrapolation and new ideas
