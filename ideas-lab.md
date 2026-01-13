# Ideas Lab

A living document for extrapolated workflow concepts—systems that combine, extend, and transform anecdotal tips into compound intelligence that generates insights impossible to get any other way.

---

## Core Insight: The Power Lies in the Intersection

Single data streams are useful but limited. The transformative power comes from:

1. **Temporal Accumulation** - Data over time reveals patterns invisible day-by-day
2. **Cross-Domain Correlation** - Connecting code + health + meetings + emotions + decisions
3. **Counterfactual Reasoning** - "What would have happened if..."
4. **Compound Context** - Claude getting smarter about YOU specifically over time
5. **Feedback Loops That Close** - Not just tracking, but acting on insights

---

## Category 1: Decision Intelligence Systems

### Decision Archaeology

Track every major decision to discover your personal decision-making failure modes.

**How it works:**
- Log each significant decision: context, alternatives considered, reasoning, outcome
- Tag what was known vs unknown at decision time
- Categorize by type: technical, career, resource allocation, scope, interpersonal
- Track outcomes over time (was it a good decision?)

**Data inputs:**
- Meeting transcripts (Zoom/Granola)
- Slack/email discussions
- PR comments and design docs
- Personal journal entries

**Feedback loop:**
- Quarterly synthesis: "Your best decisions share X characteristics. Your worst were made when Y conditions were present."
- Update decision-making heuristics based on patterns

**Unique insight:** Discover your personal decision-making failure modes before they cost you. "You make poor scope decisions under deadline pressure" or "Your technical intuition is strong, but people-related decisions drift."

**Complexity:** Medium - requires consistent logging, but analysis is automated

---

### Meeting ROI Tracker

Discover which meetings are theater vs substance by tracing meetings to shipped code.

**How it works:**
- Transcribe all meetings (Zoom/Granola)
- Tag: decisions made, action items generated, who committed to what
- Track which decisions actually got implemented
- Trace causal chain: meeting → decision → action → shipped code

**Data inputs:**
- Meeting transcripts
- Task/project management (Linear, Jira)
- GitHub PRs and merges
- Calendar data

**Feedback loop:**
- Quarterly: "These meeting types have 3% implementation rate. These have 80%."
- Adjust which meetings you attend, how you structure them

**Unique insight:** Most meetings produce nothing. Knowing which ones matter lets you protect your time ruthlessly while attending the ones that actually drive outcomes.

**Complexity:** High - requires integrating multiple data sources

---

### Commitment Archaeology

Understand your credibility gaps before others notice them.

**How it works:**
- Extract commitments from: standups, 1:1s, planning sessions, Slack
- Track what you said you'd do vs what you actually did
- Categorize by commitment type, audience, stakes

**Data inputs:**
- Meeting transcripts
- Slack messages
- Calendar
- GitHub activity

**Feedback loop:**
- Quarterly: "You follow through on X-type commitments. Y-type drift."
- Identify patterns: "Commitments to your manager: 90% follow-through. Commitments to yourself: 40%."

**Unique insight:** Your reputation is built on follow-through patterns others perceive but don't articulate. Knowing your patterns lets you either fix them or stop making commitments you won't keep.

**Complexity:** Medium - extraction can be automated, analysis is pattern-matching

---

## Category 2: Correlation Engines

### Energy-Output Mapping

Work WITH your biology instead of against it.

**How it works:**
- Track inputs: sleep (Apple Health), exercise (Strava/Garmin), mood (journal tags), time of day, day of week, weather, caffeine
- Track outputs: code quality (PR comments, bug rate), creative output (notes generated), meeting effectiveness (decisions made per hour)
- Build personal model of when you're most effective at what

**Data inputs:**
- Apple Health / Garmin / Whoop
- Strava / fitness apps
- Journal mood tags
- GitHub activity with timestamps
- Meeting transcript quality metrics

**Feedback loop:**
- Morning briefing: "Based on last night's sleep and today's schedule, here's your optimized task sequence"
- Weekly: energy-output correlation updates
- Quarterly: "Your peak creative hours are 9-11am after 7+ hours sleep"

**Unique insight:** Most people guess when they're productive. You'll KNOW. "Debug work is 40% more effective in the afternoon. Creative design work crashes after meetings."

**Complexity:** High - requires health data integration and correlation analysis

---

### Context-Switch Cost Calculator

Quantify the hidden tax on your productivity.

**How it works:**
- Track every interruption: source, duration, recovery time
- Measure output quality before/after context switches
- Calculate true cost per interruption type

**Data inputs:**
- Screen time / app usage (RescueTime)
- Slack/notification logs
- GitHub commit patterns
- Focus time vs fragmented time

**Feedback loop:**
- Weekly: "Slack during morning deep work cost you 2.3 hours this week"
- Suggest boundaries: "Blocking notifications 9-11am would gain you 4 hours/week"

**Unique insight:** Interruptions feel small but compound devastatingly. "Each Slack ping during flow costs you 23 minutes on average" changes behavior when you SEE the number.

**Complexity:** Medium - tracking is automated, analysis is straightforward

---

### Relationship Capital Tracker

Manage your professional network intentionally, not accidentally.

**How it works:**
- Track interactions: 1:1s, PR reviews, Slack convos, coffees, collaborations
- Detect relationship drift (haven't interacted with X in 2 months)
- Calculate "relationship debt" like technical debt
- Categorize relationships by importance/utility

**Data inputs:**
- Calendar (1:1s, meetings)
- Slack activity
- GitHub (who you review, who reviews you)
- Email frequency

**Feedback loop:**
- Weekly: "Relationship drift alerts: haven't talked to Alex in 6 weeks"
- Quarterly: "Strongest relationships: Y. Drifted: Z. At risk: W."
- Suggest reconnection actions

**Unique insight:** Relationships decay silently. The people who could help your career in a crisis aren't the ones you talk to daily—they're the ones you've let drift. Systematic tracking prevents regret.

**Complexity:** Medium - data aggregation across platforms

---

### Codebase Familiarity Decay

Know what you've forgotten before it bites you.

**How it works:**
- Track which parts of codebase you've touched, when
- Model familiarity decay over time (exponential decay curve)
- Alert when assigned work in areas you've forgotten
- Map team familiarity across codebase

**Data inputs:**
- Git history (files touched, frequency)
- PR review history
- Time since last interaction per module

**Feedback loop:**
- Alert: "You're assigned auth module work, but haven't touched it in 4 months. Refresh context first."
- Quarterly: "Your codebase blindspots are X, Y, Z"
- Team view: "Only one person has touched payments in 6 months—bus factor risk"

**Unique insight:** We think we remember code we wrote, but memory fades. Knowing your actual familiarity prevents overconfident estimates and embarrassing bugs.

**Complexity:** Low-Medium - Git data is readily available

---

## Category 3: Calibration Systems

### Prediction Market for Self

Know exactly where your judgment is trustworthy—and where it isn't.

**How it works:**
- Make explicit predictions: "This will take 3 days" / "This feature will be heavily used" / "This person will leave in 6 months"
- Assign confidence levels (70%, 90%, etc.)
- Track outcomes with Brier scores
- Build calibration model by domain

**Data inputs:**
- Prediction log (simple note-taking)
- Outcome tracking
- Domain tagging

**Feedback loop:**
- Continuous: prediction accuracy scores
- Quarterly: "You overestimate by 40% on frontend work. Accurate on backend. Wildly wrong on timelines involving other teams."
- Calibration curve: "When you say 80% confident, you're right 60% of the time"

**Unique insight:** Most people are overconfident in predictable ways. Knowing YOUR specific calibration lets you adjust—or know when to seek other opinions.

**Complexity:** Low - just requires discipline to log and review

---

### Estimation Calibration Engine

Become genuinely good at estimation—a rare and valuable skill.

**How it works:**
- Every task: estimate before starting, actual time after
- Categorize by: task type, domain, dependencies, uncertainty level, team involvement
- Generate personal estimation adjustment factors

**Data inputs:**
- Task estimates (from planning)
- Actual time spent (time tracking or Git activity)
- Task categorization

**Feedback loop:**
- Per-task: immediate feedback on accuracy
- Quarterly: "When you estimate React work, multiply by 1.4. Golang: your estimates are accurate. Anything involving external APIs: multiply by 2."
- Improvement tracking over time

**Unique insight:** Estimation is a learnable skill, but only with feedback. Most engineers never get systematic feedback on their estimates. This creates it.

**Complexity:** Medium - requires consistent logging

---

### Risk Intuition Tracker

Know when to trust your gut and when to override it.

**How it works:**
- When you feel "this is risky" or "this is safe," log it
- Track outcomes
- Analyze accuracy by domain, stakes, uncertainty type

**Data inputs:**
- Risk intuition logs
- Outcome tracking
- Context at time of intuition

**Feedback loop:**
- Quarterly: "Your risk intuition is strong for technical decisions, poor for timeline risks, and mediocre for people-related risks"
- Domain-specific calibration

**Unique insight:** Intuition is pattern-matching from experience—but your experience is biased. Knowing where your intuition is calibrated vs miscalibrated is meta-cognition gold.

**Complexity:** Low - logging is simple

---

## Category 4: Decay & Drift Detection

### Knowledge Decay Tracker

Prevent skill decay before it costs you.

**How it works:**
- Track what you learn: from PRs, docs, courses, meetings, debugging sessions
- Track when you last used that knowledge
- Model decay curves by knowledge type (procedural decays slower than factual)
- Alert when skills are atrophying

**Data inputs:**
- Learning logs (notes, course completions)
- GitHub activity (which technologies used)
- Time since last usage

**Feedback loop:**
- Alert: "You haven't touched Kubernetes in 4 months. Refresh before that migration project."
- Quarterly: "Skills atrophying: Docker orchestration, GraphQL. Skills strengthening: Rust, system design."
- Suggest refresh activities

**Unique insight:** We assume skills persist, but they decay without use. Systematic tracking prevents the embarrassment of claiming expertise you've actually lost.

**Complexity:** Medium - requires learning logging discipline

---

### Goal Drift Detector

Catch drift in weeks, not quarters.

**How it works:**
- State quarterly goals explicitly
- Track daily/weekly actions
- Measure alignment continuously, not just at review time
- Alert when drifting

**Data inputs:**
- Quarterly goals (explicit)
- Daily activity (from GitHub, notes, calendar)
- Task categorization

**Feedback loop:**
- Weekly: "Your actions this week are 40% aligned with stated goals"
- Alert: "You said Q1 priority was API redesign. You've spent 80% of time on support tickets."
- Monthly course correction

**Unique insight:** We're all excellent at rationalization. Objective measurement prevents fooling ourselves about where time actually goes.

**Complexity:** Low-Medium - goal statement is simple, activity tracking can be automated

---

### Technical Debt Cartographer

Understand debt as a living system, not a static backlog.

**How it works:**
- Track every TODO, workaround, "we'll fix this later"
- Map debt to business pressure at time of creation
- Model: when will this debt cause problems? (based on feature roadmap, team changes)
- Track debt that's blocking vs dormant

**Data inputs:**
- TODO comments in code
- Tech debt tickets
- Decision logs (why was shortcut taken?)
- Feature roadmap

**Feedback loop:**
- Quarterly: "This Q1 debt is now blocking 3 features. This Q2 debt is dormant—don't prioritize it."
- Predict: "If you don't address payment module debt by Q3, the new checkout flow will be 3x harder"

**Unique insight:** Most tech debt tracking is a static list. Understanding debt as a dynamic system—which debt is growing interest, which is dormant—enables strategic prioritization.

**Complexity:** High - requires codebase analysis and roadmap integration

---

## Category 5: Serendipity & Connection Engines

### The Serendipity Engine

Surface connections your memory would miss.

**How it works:**
- Track all ideas, even half-baked (voice notes, quick captures)
- Track all inputs: articles, podcasts, conversations, PRs, books
- Use embeddings to find unexpected connections between old ideas and new information
- Surface connections when relevant

**Data inputs:**
- Obsidian vault (all notes)
- Reading history
- Podcast/video transcripts
- Conversation logs

**Feedback loop:**
- Real-time: "Your note from March about distributed systems connects to this PR discussion today"
- Weekly: serendipity digest of surprising connections
- Enable: ideas that would have been lost recombine productively

**Unique insight:** The best ideas come from unexpected collisions. Your brain forgets—but an AI-augmented vault remembers and connects.

**Complexity:** Medium-High - requires embedding-based similarity search

---

### Influence Network Mapper

Understand your position in the intellectual network.

**How it works:**
- Track sources of concepts you use (who do your ideas come from?)
- Track when your approaches spread (who adopts your ideas?)
- Map idea genealogy across the org
- Identify thought leaders vs followers in different domains

**Data inputs:**
- Reading/learning sources
- Team adoption of your approaches
- Citation patterns in discussions
- Architecture decision influences

**Feedback loop:**
- Quarterly: "Your influence is growing in frontend architecture. You're a follower in DevOps. You're the source for testing patterns."
- Strategic: where should you invest to grow influence?

**Unique insight:** Influence in orgs is invisible but real. Knowing your position—and watching it change—enables strategic career moves.

**Complexity:** High - requires tracking diffusion of ideas

---

### Cross-Project Pattern Detector

Extract your implicit expertise explicitly.

**How it works:**
- Across all projects you touch, find repeated patterns
- Analyze similar problems and solutions
- Build personal pattern library automatically
- Suggest applicable patterns for new problems

**Data inputs:**
- Git history across projects
- Architecture decisions
- Problem/solution pairs from notes

**Feedback loop:**
- Alert: "You've solved this authentication pattern 3 times. Here's your composite approach."
- Build: personal pattern library grows automatically
- Share: extractable patterns for team documentation

**Unique insight:** Senior engineers have implicit knowledge they can't articulate. This makes it explicit and transferable—to others and to your future self.

**Complexity:** High - requires cross-project analysis and pattern extraction

---

## Category 6: Protection & Warning Systems

### Burnout Early Warning System

Intervention happens before damage, not after.

**How it works:**
- Track: hours worked, code churn (rewrites/reversions), meeting load, exercise, social interaction, sleep quality
- Build YOUR personal burnout signature from historical data
- Alert when current patterns match pre-burnout states

**Data inputs:**
- Work hours (calendar, commits)
- Code churn metrics
- Health data
- Social activity patterns
- Historical burnout incidents (if any)

**Feedback loop:**
- Alert: "Your patterns this week match pre-burnout state from Q2 2024. Intervention needed."
- Suggest: specific actions that helped last time
- Track: recovery patterns

**Unique insight:** Burnout has personal signatures—yours is different from others'. Knowing YOUR warning signs enables preventive action, not reactive recovery.

**Complexity:** High - requires historical data and personal pattern modeling

---

### Deep Work Guardian

Protect the time that actually produces value.

**How it works:**
- Track scheduled deep work vs actual deep work
- Track what interrupts and when
- Calculate: true deep work hours per week
- Measure output quality during deep work vs fragmented time

**Data inputs:**
- Calendar (blocked deep work)
- Interruption logs
- Output metrics
- Focus app data (if used)

**Feedback loop:**
- Weekly: "You scheduled 10 hours of deep work. You got 3.5."
- Diagnose: "Main interrupters: Slack (40%), meetings overrun (30%), self-interruption (30%)"
- Suggest: "Blocking Slack 9-11am would gain you 4 hours/week based on your patterns"

**Unique insight:** Deep work is where value is created, but it's also what gets sacrificed first. Systematic protection is the only way to preserve it.

**Complexity:** Medium - tracking is automatable

---

### Scope Creep Detector

See scope creep as it happens, not after delivery slips.

**How it works:**
- Track original spec vs current state for active projects
- Measure scope growth over time
- Alert when scope grows without timeline adjustment
- Correlate with historical project outcomes

**Data inputs:**
- Original specs/PRDs
- Current requirements
- Timeline/deadline data
- Historical project outcomes

**Feedback loop:**
- Alert: "This project has grown 40% in scope but deadline unchanged. Historically, this pattern leads to missed deadlines 80% of the time."
- Enable: early renegotiation of scope or timeline

**Unique insight:** Scope creep is invisible until it's too late. Making it visible early enables adult conversations instead of missed deadlines.

**Complexity:** Medium - requires spec tracking and comparison

---

## Category 7: Compound Intelligence Systems

### Progressive Memory System

An AI that actually knows YOU, not just knows things.

**How it works:**
- Claude accumulates context about you specifically over time
- Preferences, patterns, history, working style, past decisions
- Conversations become increasingly efficient
- Memory persists across sessions via vault notes

**Data inputs:**
- All previous Claude conversations
- Decision history
- Preference patterns
- Working style observations

**Feedback loop:**
- Continuous: Claude references past context appropriately
- Suggestions: "Based on your history, you'll want to approach this like you did the auth refactor in Q3"
- Efficiency: less explanation needed over time

**Unique insight:** Current AI forgets everything each session. Progressive memory transforms Claude from a tool to a partner who understands your context.

**Complexity:** Medium - requires systematic context storage

---

### The Retrospective Engine

Honest retrospectives without ego distortion.

**How it works:**
- Auto-generate sprint/quarter retros from actual data
- What did you commit to? What shipped? What blocked?
- Compare stated goals to execution
- Detect systematic gaps without self-report bias

**Data inputs:**
- Sprint commitments
- Shipped work (GitHub)
- Blockers (from standups, Slack)
- Stated vs actual focus areas

**Feedback loop:**
- Sprint: data-driven retro with honest gap analysis
- Quarterly: patterns across sprints
- Action: specific improvements for next cycle

**Unique insight:** Human retrospectives are biased toward recent events and ego-protective narratives. Data-driven retros reveal uncomfortable truths that enable real improvement.

**Complexity:** Medium - data aggregation across sources

---

### Learning Velocity Tracker

Meta-learn how YOU learn.

**How it works:**
- Track: time from first encounter with concept to confident usage
- Compare across domains: picked up Rust fast, Go slow
- Identify YOUR optimal learning patterns
- Suggest learning approaches based on personal history

**Data inputs:**
- Learning timestamps (first exposure)
- Usage confidence (self-assessment + actual usage)
- Learning method used
- Domain categorization

**Feedback loop:**
- Quarterly: "You learn best via hands-on projects. Video courses don't work for you. Pair programming accelerates learning 2x."
- Suggest: optimal learning approach for new technologies based on your patterns

**Unique insight:** Learning advice is generic. YOUR learning patterns are specific. Knowing how you learn enables dramatically more effective skill acquisition.

**Complexity:** Medium - requires learning logging

---

### Career Trajectory Analyzer

Strategic career management, not just hoping.

**How it works:**
- Track: skills acquired, projects completed, scope of responsibility, compensation, title
- Compare to desired trajectory
- Model: "At current velocity, you reach X in Y years"
- Identify accelerators and blockers

**Data inputs:**
- Skill inventory over time
- Project scope/impact
- Responsibility growth
- Career goals (explicit)

**Feedback loop:**
- Quarterly: "You're on track for senior engineer in 2 years at current pace. To reach staff level, you need to demonstrate X, Y, Z."
- Suggest: high-leverage investments for trajectory acceleration
- Alert: "You haven't taken on technical leadership in 6 months. This is blocking your progression."

**Unique insight:** Most engineers let careers happen to them. Systematic tracking and projection enables strategic positioning and intentional growth.

**Complexity:** Medium - requires honest skill and impact assessment

---

## Meta-Workflows: Combining Systems

### The Quarterly Life Operating System

**Combines:** All daily loops + quarterly synthesis + correlation engines + protection systems

The full stack of self-knowledge and intentional growth.

**Daily Layer:**
- Morning: `/today` + energy prediction + goal alignment check
- Mid-day: Council check-ins when blocked + decision logging
- Evening: `/wrapup` + gap analysis + prediction logging

**Weekly Layer:**
- Relationship drift check
- Knowledge decay scan
- Papercut fixes + pattern extraction
- Energy-output correlation update
- Deep work protection review

**Monthly Layer:**
- Trend analysis + trajectory check
- Goal drift correction
- Knowledge graph analysis
- Calibration score review

**Quarterly Layer:**
- Full Progress Auditor: GitHub + therapy + vault + health → integrated dashboard
- Decision archaeology synthesis
- Calibration scores update (estimation, prediction, risk intuition)
- Career trajectory projection
- Burnout risk assessment
- Relationship capital inventory

**Output:** A quarterly document that tells you:
- What you shipped vs planned (and WHY the gaps)
- How your skills evolved (strengthening, atrophying)
- Your relationship network health
- Your decision quality trends
- Your calibration improvements
- Your trajectory vs goals
- Top 3 focus areas for next quarter (prioritized, actionable)

**Win:** Unprecedented self-knowledge. The kind of clarity people pay executive coaches $500/hour for—but based on actual data, not self-report.

---

### The Engineering Excellence Flywheel

**Combines:** Commit reviews + knowledge distillation + estimation calibration + pattern detection

A compounding loop of technical growth.

**The Loop:**
1. Every PR generates learnings (logged automatically)
2. Learnings distill into Zettelkasten atomic notes
3. Notes compound into expertise patterns
4. Expertise improves PR quality (measured via review feedback)
5. Better PRs get better feedback
6. Better feedback generates richer learnings
7. Claude tracks flywheel velocity and identifies friction

**Metrics tracked:**
- PR review feedback quality (constructive vs rubber-stamp)
- Learning extraction rate
- Pattern reuse frequency
- Estimation accuracy improvement
- Code quality trends

**Output:**
- Flywheel velocity score
- Friction points identified
- Suggested accelerators

**Win:** Technical growth that compounds instead of plateauing. Senior engineers stop growing because they stop learning from their work—this keeps the loop spinning.

---

### The Integrated Performance System

**Combines:** Energy mapping + output correlation + burnout protection + trajectory analysis

The physical → mental → professional chain.

**Tracked correlations:**
- Sleep → Code quality
- Exercise → Creative output
- Nutrition → Meeting effectiveness
- Social interaction → Motivation
- Learning → Capability growth
- Output → Career progress

**Weekly analysis:**
- Energy-output heat map
- High-leverage intervention identification
- Burnout risk check

**Output:**
- Highest-leverage interventions ranked by impact
- Example: "Improving sleep by 1 hour would improve your code quality by ~15% based on your historical data"
- Example: "Your creative output crashes on days without morning exercise—consider non-negotiable workout blocks"

**Win:** Optimize the whole system, not just work hours. Most productivity advice ignores that you're a human animal whose output depends on physical state.

---

## Implementation Priorities

### Start Here (Week 1)
1. **Goal Drift Detector** - Low complexity, high insight
2. **Estimation Calibration** - Just start logging estimates vs actuals
3. **Deep Work Guardian** - Track scheduled vs actual

### Build Toward (Month 1)
4. **Energy-Output Mapping** - Connect health data
5. **Decision Archaeology** - Start logging decisions
6. **Context-Switch Calculator** - Track interruptions

### Full System (Quarter 1)
7. **Quarterly Life OS** daily/weekly loops
8. **Progressive Memory** for Claude context
9. **Relationship Capital Tracker**
10. **Burnout Early Warning**

---

## Resources & Links

### GitHub Repos
- [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code)
- [roasbeef/obsidian-claude-code](https://github.com/roasbeef/obsidian-claude-code)
- [heyitsnoah/claudesidian](https://github.com/heyitsnoah/claudesidian)
- [ChristianWiess1/claude-lecture-processor](https://github.com/ChristianWiess1/claude-lecture-processor)

### Frameworks & Protocols
- AutoGen (Microsoft multi-agent)
- A2A Protocol (agent-to-agent)
- uAgents (Fetch.ai)
- Agent-MCP
- Browserbase

### Tools for Data Collection
- Wispr Flow / Superwhisper (voice)
- Granola (meeting transcription)
- RescueTime (screen time)
- Radon (code complexity)
- Limitless (lifelog)
- Apple Health / Garmin / Whoop (physical)

### People Pushing Boundaries
- @boris (Claude Code creator)
- @kepano (Obsidian developer)
- @pk_iv (Browserbase/MCP)
- @rohanpaul_ai (AI engineering)
- @_overment (vault systems)

---

## Changelog

| Date | Entry |
|------|-------|
| 2026-01-03 | Major expansion: 25+ extrapolated workflow systems across 7 categories |
| 2026-01-03 | Added 3 meta-workflows: Quarterly Life OS, Engineering Flywheel, Integrated Performance |
| 2026-01-03 | Added implementation priorities and complexity ratings |

---

## See Also

- [[productivity-workflows]] - Original anecdotal tips and daily systems
- [[claude-code-mastery]] - Technical implementation details
