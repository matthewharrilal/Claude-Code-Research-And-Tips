# Templates: Activity Zone

> **Purpose:** Copy-paste ready templates for all 16 Activity Zone content types.
> Each template includes placeholders, guidance, and a completed example.

---

## Quick Reference Table

| # | Type | Color | Icon | Core Question |
|---|------|-------|------|---------------|
| 1 | Invariant Connection | Blue #3b82f6 | link | Cross-pattern DNA |
| 2 | Second-Order Effect | Amber #f59e0b | bar-chart-2 | Scale effects |
| 3 | Composition Case | Purple #8b5cf6 | layers | What combines |
| 4 | Research Frontier | Red #ef4444 | flask-conical | What's unsolved |
| 5 | War Story | Green #22c55e | user | Real experiences |
| 6 | Alternative Path | Gray #6b7280 | arrow-right | Navigation |
| 7 | Inversion Lens | Indigo #4f46e5 | rotate-ccw | What if opposite? |
| 8 | Constraint Chain | Violet #8b5cf6 | link-2 | What forced this? |
| 9 | Failure Gradient | Rose #f43f5e | trending-down | Gradual failure |
| 10 | Time Horizon Shift | Cyan #06b6d4 | clock | When is this right? |
| 11 | Violation Chain | Orange #f97316 | alert-octagon | Skip consequences |
| 12 | Trade-Off Tension | Amber #f59e0b | scale | Genuine dilemma |
| 13 | Analogical Bridge | Fuchsia #d946ef | git-compare | Familiar mapping |
| 14 | Expertise Gradient | Emerald #10b981 | bar-chart-3 | Self-calibration |
| 15 | Minimal Pattern | Lime #84cc16 | minimize-2 | Simplest version |
| 16 | Inflection Point | Yellow #eab308 | activity | Benefit flips |

---

# Foundational Types (1-6)

---

## Type 1: Invariant Connection

### Template

```
INVARIANT CONNECTION
[PATTERN_A], [PATTERN_B], [PATTERN_C] all share [INV-XXX]: [INVARIANT_NAME]

WHY THIS MATTERS:
[EXPLANATION of why this connection is important]
If you understand this invariant, you understand [all patterns / the deeper principle].
```

### Placeholder Guidance

- `[PATTERN_A/B/C]`: Specific pattern names (e.g., "Ralph", "Gas Town")
- `[INV-XXX]`: Invariant code from the invariants reference
- `[INVARIANT_NAME]`: Short name of the invariant principle
- `[EXPLANATION]`: 1-2 sentences on why this matters

### Completed Example

```
INVARIANT CONNECTION
Ralph, Gas Town, CC Mirror all share INV-003: External state > internal memory

WHY THIS MATTERS:
The same principle forces the same architectural choice across patterns.
If you understand this invariant, you understand all three.
```

### HTML/CSS Snippet

```html
<div class="activity-item border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg">
  <div class="flex items-center gap-2 text-blue-700 font-semibold mb-2">
    <i data-lucide="link" class="w-4 h-4"></i>
    <span>INVARIANT CONNECTION</span>
  </div>
  <p class="text-sm text-slate-700">[Content here]</p>
</div>
```

---

## Type 2: Second-Order Effect

### Template

```
SECOND-ORDER EFFECT
At [THRESHOLD/SCALE], [PHENOMENON_OCCURS]

IMPLICATION:
[WHAT_THIS_MEANS_FOR_PRACTITIONERS]

THRESHOLD: [CONCRETE_NUMBERS]
```

### Placeholder Guidance

- `[THRESHOLD/SCALE]`: When this effect emerges (e.g., "iteration 50+", "20KB+")
- `[PHENOMENON_OCCURS]`: What happens at scale
- `[WHAT_THIS_MEANS]`: Practical implication
- `[CONCRETE_NUMBERS]`: Specific thresholds (always include)

### Completed Example

```
SECOND-ORDER EFFECT
At iteration 50+, reading state costs more than thinking

IMPLICATION:
progress.txt compounds. What started as useful memory becomes
drag. The pattern that helps at iteration 5 hurts at iteration 50.

THRESHOLD: ~20KB progress.txt, ~50 iterations
```

### HTML/CSS Snippet

```html
<div class="activity-item border-l-4 border-amber-500 bg-amber-50 p-4 rounded-r-lg">
  <div class="flex items-center gap-2 text-amber-700 font-semibold mb-2">
    <i data-lucide="bar-chart-2" class="w-4 h-4"></i>
    <span>SECOND-ORDER EFFECT</span>
  </div>
  <p class="text-sm text-slate-700">[Content here]</p>
</div>
```

---

## Type 3: Composition Case

### Template

```
COMPOSITION: [PATTERN] + [COMPONENT]
WORKS? [Yes / No / Yes, but with caveats]

WHY IT WORKS/DOESN'T:
[EXPLANATION]

THE DANGER/BENEFIT:
[WHAT_TO_WATCH_FOR]

RECOMMENDATION:
[ACTIONABLE_GUIDANCE]
```

### Placeholder Guidance

- `[PATTERN]`: The main pattern (e.g., "Ralph")
- `[COMPONENT]`: What's being combined (e.g., "Playwright")
- `[EXPLANATION]`: Why it works or doesn't
- `[WHAT_TO_WATCH_FOR]`: Key risk or benefit
- `[ACTIONABLE_GUIDANCE]`: Specific recommendation

### Completed Example

```
COMPOSITION: Ralph + Playwright
WORKS? Yes, but with caveats

WHY IT WORKS:
Visual verification catches UI bugs Ralph would miss.

THE DANGER:
Browser context consumes tokens. Put Playwright in subagents
to protect main context window.

RECOMMENDATION:
Use Playwright for UI stories only, not for every task.
```

### HTML/CSS Snippet

```html
<div class="activity-item border-l-4 border-purple-500 bg-purple-50 p-4 rounded-r-lg">
  <div class="flex items-center gap-2 text-purple-700 font-semibold mb-2">
    <i data-lucide="layers" class="w-4 h-4"></i>
    <span>COMPOSITION</span>
  </div>
  <p class="text-sm text-slate-700">[Content here]</p>
</div>
```

---

## Type 4: Research Frontier

### Template

```
UNSOLVED: [PROBLEM_NAME]

THE QUESTION:
[THE_SPECIFIC_QUESTION_UNANSWERED]

WHY IT'S HARD:
[WHAT_MAKES_THIS_DIFFICULT - list the tensions]

CURRENT BEST PRACTICE:
[WHAT_PEOPLE_DO_TODAY_WITHOUT_A_REAL_SOLUTION]
```

### Placeholder Guidance

- `[PROBLEM_NAME]`: Short name for the unsolved problem
- `[THE_QUESTION]`: The specific unanswered question
- `[WHAT_MAKES_THIS_DIFFICULT]`: The tensions (usually 3)
- `[BEST_PRACTICE]`: What practitioners do today

### Completed Example

```
UNSOLVED: Optimal compaction window

THE QUESTION:
When should progress.txt be compacted? After N iterations?
After K bytes? After time T?

WHY IT'S HARD:
Too early = lose useful learnings
Too late = context bloat
Optimal varies by project and task type

CURRENT BEST PRACTICE:
Manual compaction when quality degrades. No automation yet.
```

### HTML/CSS Snippet

```html
<div class="activity-item border-l-4 border-red-500 bg-red-50 p-4 rounded-r-lg">
  <div class="flex items-center gap-2 text-red-700 font-semibold mb-2">
    <i data-lucide="flask-conical" class="w-4 h-4"></i>
    <span>UNSOLVED</span>
  </div>
  <p class="text-sm text-slate-700">[Content here]</p>
</div>
```

---

## Type 5: Production War Story

### Template

```
WAR STORY: [PERSON_NAME/HANDLE]'s [BRIEF_DESCRIPTION]

CONTEXT:
[WHAT_THEY_WERE_DOING - project, scope, timeline]

OUTCOME:
[CONCRETE_RESULTS_WITH_NUMBERS]

KEY LEARNING:
"[QUOTE or INSIGHT]"
[EXPLANATION_OF_TRANSFERABLE_INSIGHT]
```

### Placeholder Guidance

- `[PERSON_NAME]`: Real person or handle (attribution required)
- `[BRIEF_DESCRIPTION]`: 2-4 words describing the case
- `[WHAT_THEY_WERE_DOING]`: Context (project, scope, timeline)
- `[CONCRETE_RESULTS]`: Must include numbers
- `[INSIGHT]`: Transferable learning from the experience

### Completed Example

```
WAR STORY: Ryan Carson's 14-iteration feature

CONTEXT:
Untangle Legal Agent, Income Upsert Tool
6 user stories, ran overnight

OUTCOME:
14 iterations, ~$10-15, 2 hours autonomous
All stories completed by morning

KEY LEARNING:
"Learnings compound. By story 10, Ralph knew our patterns."
The progress.txt paid off in later iterations.
```

### HTML/CSS Snippet

```html
<div class="activity-item border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
  <div class="flex items-center gap-2 text-green-700 font-semibold mb-2">
    <i data-lucide="user" class="w-4 h-4"></i>
    <span>WAR STORY</span>
  </div>
  <p class="text-sm text-slate-700">[Content here]</p>
</div>
```

---

## Type 6: Alternative Path

### Template

```
IF [PATTERN] ISN'T RIGHT:

[CONDITION_1]?
→ [ALTERNATIVE_1] ([BRIEF_REASON])

[CONDITION_2]?
→ [ALTERNATIVE_2] ([BRIEF_REASON])

[CONDITION_3]?
→ [ALTERNATIVE_3] ([BRIEF_REASON])

[CONDITION_4]?
→ [ALTERNATIVE_4] ([BRIEF_REASON])
```

### Placeholder Guidance

- `[PATTERN]`: The current pattern
- `[CONDITION_N]`: When this alternative is better
- `[ALTERNATIVE_N]`: Specific pattern/approach to use instead
- `[BRIEF_REASON]`: Why this alternative fits the condition

### Completed Example

```
IF RALPH ISN'T RIGHT:

Need parallelism?
→ CC Mirror (multi-agent coordination)

Need human review gates?
→ HOTL Ralph (human-on-the-loop variant)

Need content generation, not code?
→ Ralph Wiggum Marketer (self-critique loop)

Need debugging, not building?
→ Single Claude session with human guidance
```

### HTML/CSS Snippet

```html
<div class="activity-item border-l-4 border-gray-400 bg-gray-50 p-4 rounded-r-lg">
  <div class="flex items-center gap-2 text-gray-700 font-semibold mb-2">
    <i data-lucide="arrow-right" class="w-4 h-4"></i>
    <span>ALTERNATIVES</span>
  </div>
  <p class="text-sm text-slate-700">[Content here]</p>
</div>
```

---

# Generative Types (7-16)

---

## Type 7: Inversion Lens

### Template

```
INVERSION: What if [OPPOSITE_WERE_TRUE]?
You'd design: [THE_ALTERNATIVE_APPROACH]
Why this fails: [THE_CONSTRAINT_THAT_BREAKS_IT]
Hidden constraint revealed: [WHAT_THIS_TEACHES_US]
```

### Placeholder Guidance

- `[OPPOSITE_WERE_TRUE]`: A genuine alternative (not straw man)
- `[THE_ALTERNATIVE_APPROACH]`: How you'd design if opposite were true
- `[THE_CONSTRAINT_THAT_BREAKS_IT]`: Specific failure mode
- `[WHAT_THIS_TEACHES_US]`: The hidden constraint revealed

### Completed Example

```
INVERSION: What if context DIDN'T degrade?
You'd design: One long session per feature, no external files, no restarts.
Why this fails: 80K token context rot is transformer physics, not a bug.
Hidden constraint revealed: Ralph IS the constraint made visible.
```

### HTML/CSS Snippet

```html
<div class="activity-item border-l-4 border-indigo-500 bg-indigo-50 p-4 rounded-r-lg">
  <div class="flex items-center gap-2 text-indigo-700 font-semibold mb-2">
    <i data-lucide="rotate-ccw" class="w-4 h-4"></i>
    <span>INVERSION</span>
  </div>
  <p class="text-sm text-slate-700">[Content here]</p>
</div>
```

---

## Type 8: Constraint Chain

### Template

```
ROOT CONSTRAINT: [THE_FORCING_FUNCTION]
→ [FIRST_DOWNSTREAM_DECISION]
→ [SECOND_DOWNSTREAM_DECISION]
→ [THIRD_DOWNSTREAM_DECISION]
→ [FOURTH_DOWNSTREAM_DECISION]
→ [FIFTH_DOWNSTREAM_DECISION]

One constraint, FIVE downstream decisions.
```

### Placeholder Guidance

- `[THE_FORCING_FUNCTION]`: The root constraint (physics/math level)
- `[DECISIONS_1-5]`: Cascading decisions, each following from previous
- Must have at least 5 decisions
- Each decision must logically follow

### Completed Example

```
ROOT CONSTRAINT: Context finite (200K) → Quality degrades as context fills
→ Fresh context beats extended sessions
→ State must persist externally (files)
→ Each iteration must be self-contained
→ Tasks must complete in one context window
→ Verification must be automatable

One constraint, FIVE downstream decisions.
```

### HTML/CSS Snippet

```html
<div class="activity-item border-l-4 border-violet-500 bg-violet-50 p-4 rounded-r-lg">
  <div class="flex items-center gap-2 text-violet-700 font-semibold mb-2">
    <i data-lucide="link-2" class="w-4 h-4"></i>
    <span>CONSTRAINT CHAIN</span>
  </div>
  <p class="text-sm text-slate-700">[Content here]</p>
</div>
```

---

## Type 9: Failure Gradient

### Template

```
FAILURE GRADIENT: [WHAT_DEGRADES]
[HIGH_%] → [RANGE_1]: [SUBTLE_SYMPTOMS]
[MID_%] → [RANGE_2]: [NOTICEABLE_SYMPTOMS]
[LOW_%] → [RANGE_3]: [SERIOUS_SYMPTOMS]
[CLIFF] → [RANGE_4]: [CATASTROPHIC_SYMPTOMS]

Critical: [KEY_INSIGHT_ABOUT_INVISIBILITY]
```

### Placeholder Guidance

- `[WHAT_DEGRADES]`: The thing that fails gradually
- `[RANGE_N]`: Concrete thresholds (always include numbers)
- `[SYMPTOMS]`: What you observe at each stage
- `[KEY_INSIGHT]`: Usually about invisibility of early stages

### Completed Example

```
FAILURE GRADIENT: Context Quality
100% → 90% (40-60K tokens): Subtle drift, you won't notice
90% → 70% (60-80K tokens): Repetition, compression
70% → 50% (80-100K tokens): Instructions forgotten
50% → CLIFF (100K+ tokens): Hallucinations, amnesia

Critical: The gradient is invisible until the cliff.
```

### HTML/CSS Snippet

```html
<div class="activity-item border-l-4 border-rose-500 bg-rose-50 p-4 rounded-r-lg">
  <div class="flex items-center gap-2 text-rose-700 font-semibold mb-2">
    <i data-lucide="trending-down" class="w-4 h-4"></i>
    <span>FAILURE GRADIENT</span>
  </div>
  <p class="text-sm text-slate-700">[Content here]</p>
</div>
```

---

## Type 10: Time Horizon Shift

### Template

```
TIME HORIZON: [THE_THING_BEING_EVALUATED]
[EARLY_POINT]: "[HOW_IT_FEELS]"
[MID_POINT]: "[HOW_PERCEPTION_SHIFTS]"
[LATE_POINT]: "[THE_OPPOSITE_FEELING]"
[VERY_LATE]: "[THE_MATURE_UNDERSTANDING]"

[HEURISTIC_ABOUT_WHEN_TO_JUDGE]
```

### Placeholder Guidance

- `[THING_BEING_EVALUATED]`: The practice or component
- `[TIME_POINTS]`: Specific moments (iteration 3, iteration 15, etc.)
- `[FEELINGS]`: How it feels at each point (show the flip)
- `[HEURISTIC]`: When to judge, usually "Don't judge by X"

### Completed Example

```
TIME HORIZON: progress.txt Reading (Step 5)
ITERATION 3: "Reading progress.txt feels like overhead"
ITERATION 8: "Wait, Claude is repeating solved mistakes"
ITERATION 15: "progress.txt is why late iterations are FASTER"
ITERATION 30: "This is institutional memory"

Don't judge Ralph by iteration 2.
```

### HTML/CSS Snippet

```html
<div class="activity-item border-l-4 border-cyan-500 bg-cyan-50 p-4 rounded-r-lg">
  <div class="flex items-center gap-2 text-cyan-700 font-semibold mb-2">
    <i data-lucide="clock" class="w-4 h-4"></i>
    <span>TIME HORIZON</span>
  </div>
  <p class="text-sm text-slate-700">[Content here]</p>
</div>
```

---

## Type 11: Violation Chain

### Template

```
IF: [THE_THING_YOU_MIGHT_SKIP]
THEN: [FIRST_CONSEQUENCE]
THEN: [SECOND_CONSEQUENCE]
THEN: [THIRD_CONSEQUENCE]
FINALLY: [ULTIMATE_FAILURE]

THE FIX: [WHAT_TO_DO_INSTEAD]
```

### Placeholder Guidance

- `[THING_YOU_MIGHT_SKIP]`: A tempting shortcut
- `[CONSEQUENCES]`: Causal chain (each follows from previous)
- `[ULTIMATE_FAILURE]`: The worst-case outcome
- `[THE_FIX]`: Why you don't skip, what to do

### Completed Example

```
IF: You skip "run typecheck and tests" (step 7)
THEN: Claude marks tasks done without verification
THEN: Broken code enters git
THEN: Future iterations inherit broken foundation
THEN: Errors compound faster than learnings
FINALLY: Morning reveals 20 bad commits

THE FIX: Never skip verification. One bad commit poisons all future iterations.
```

### HTML/CSS Snippet

```html
<div class="activity-item border-l-4 border-orange-500 bg-orange-50 p-4 rounded-r-lg">
  <div class="flex items-center gap-2 text-orange-700 font-semibold mb-2">
    <i data-lucide="alert-octagon" class="w-4 h-4"></i>
    <span>VIOLATION CHAIN</span>
  </div>
  <p class="text-sm text-slate-700">[Content here]</p>
</div>
```

---

## Type 12: Trade-Off Tension

### Template

```
THE DILEMMA: [THE_TENSION]
• [OPTION_A]: [BENEFIT], but [COST]
• [OPTION_B]: [BENEFIT], but [COST]
• [OPTION_C]: [BENEFIT], but [COST]

WHY NO PERFECT ANSWER: [WHY_THIS_IS_HARD]

HEURISTIC: [RULE_OF_THUMB]
```

### Placeholder Guidance

- `[THE_TENSION]`: What the dilemma is about
- `[OPTION_A/B/C]`: Three genuine options
- `[BENEFIT/COST]`: Each option has both
- `[WHY_THIS_IS_HARD]`: Why there's no obvious winner
- `[RULE_OF_THUMB]`: Practical heuristic

### Completed Example

```
THE DILEMMA: Task Size
• Very small tasks: Safe, but spawn overhead dominates
• Medium tasks: Balanced, but judgment required
• Large tasks: Efficient, but context collapse risk

WHY NO PERFECT ANSWER: Optimal varies by codebase, task type, and Claude model.

HEURISTIC: If the task description is longer than the code change,
you've decomposed too far.
```

### HTML/CSS Snippet

```html
<div class="activity-item border-l-4 border-amber-500 bg-amber-50 p-4 rounded-r-lg">
  <div class="flex items-center gap-2 text-amber-700 font-semibold mb-2">
    <i data-lucide="scale" class="w-4 h-4"></i>
    <span>TRADE-OFF</span>
  </div>
  <p class="text-sm text-slate-700">[Content here]</p>
</div>
```

---

## Type 13: Analogical Bridge

### Template

```
[NEW_CONCEPT] = [FAMILIAR_CONCEPT]
[ELEMENT_A] → [FAMILIAR_A]
[ELEMENT_B] → [FAMILIAR_B]
[ELEMENT_C] → [FAMILIAR_C]
[ELEMENT_D] → [FAMILIAR_D]

If you've [DONE_FAMILIAR_THING], you already understand [NEW_CONCEPT].
```

### Placeholder Guidance

- `[NEW_CONCEPT]`: The pattern being explained
- `[FAMILIAR_CONCEPT]`: Something readers know well
- `[ELEMENT_A-D]`: 4+ specific mappings
- `[DONE_FAMILIAR_THING]`: Experience that transfers

### Completed Example

```
RALPH = Stateless Web Servers
HTTP stateless → Fresh context per iteration
Database → prd.json, progress.txt, git
Session cookie → Files read at iteration start
Horizontal scaling → Parallel Ralph loops

If you've designed stateless web services, you already understand Ralph.
```

### HTML/CSS Snippet

```html
<div class="activity-item border-l-4 border-fuchsia-500 bg-fuchsia-50 p-4 rounded-r-lg">
  <div class="flex items-center gap-2 text-fuchsia-700 font-semibold mb-2">
    <i data-lucide="git-compare" class="w-4 h-4"></i>
    <span>ANALOGY</span>
  </div>
  <p class="text-sm text-slate-700">[Content here]</p>
</div>
```

---

## Type 14: Expertise Gradient

### Template

```
EXPERTISE GRADIENT: [TOPIC]

BEGINNER: "[BEGINNER_QUESTION]"
→ [BEGINNER_ANSWER]

INTERMEDIATE: "[INTERMEDIATE_QUESTION]"
→ [INTERMEDIATE_ANSWER]

ADVANCED: "[ADVANCED_QUESTION]"
→ [ADVANCED_ANSWER]

STAFF: "[STAFF_QUESTION]"
→ [STAFF_ANSWER]

EXPERT: "[EXPERT_QUESTION]"
→ [EXPERT_ANSWER]
```

### Placeholder Guidance

- `[TOPIC]`: What aspect being tested
- Questions must genuinely increase in sophistication
- Answers must be specific (not "it depends")
- BEGINNER: What is it?
- INTERMEDIATE: Why this way?
- ADVANCED: What's minimal?
- STAFF: When to extend?
- EXPERT: Cross-pattern composition?

### Completed Example

```
EXPERTISE GRADIENT: File Structure

BEGINNER: "What files do I need?"
→ The 4 files: ralph.sh, prompt.md, prd.json, progress.txt

INTERMEDIATE: "Why these specific files?"
→ Each file serves exactly ONE purpose in the task path

ADVANCED: "What's the minimal file set?"
→ Just while loop + prompt. Everything else is reliability.

STAFF: "When would I add more files?"
→ When you need: confidence scoring (Dr. Ralph), human gates (HOTL)

EXPERT: "How do these files compose with other patterns?"
→ prd.json = Gas Town inbox. progress.txt = Refinery analog.
```

### HTML/CSS Snippet

```html
<div class="activity-item border-l-4 border-emerald-500 bg-emerald-50 p-4 rounded-r-lg">
  <div class="flex items-center gap-2 text-emerald-700 font-semibold mb-2">
    <i data-lucide="bar-chart-3" class="w-4 h-4"></i>
    <span>EXPERTISE GRADIENT</span>
  </div>
  <p class="text-sm text-slate-700">[Content here]</p>
</div>
```

---

## Type 15: Minimal Pattern

### Template

```
MINIMAL VIABLE [PATTERN]:
[THE_ABSOLUTE_MINIMUM_CODE]

[COMPONENT_A] is essential.
[COMPONENT_B] is essential.
Everything else is refinement for [QUALITY_ATTRIBUTE].
```

### Placeholder Guidance

- `[PATTERN]`: Pattern name
- `[MINIMUM_CODE]`: Actual working code, stripped down
- `[COMPONENT_A/B]`: The irreducible essentials
- `[QUALITY_ATTRIBUTE]`: What the "extras" provide (reliability, observability, etc.)

### Completed Example

```
MINIMAL VIABLE RALPH:
while :; do cat PROMPT.md | claude; done
+ a PROMPT.md that says "Do task X, exit when done"

The loop is essential. Fresh context is essential.
Everything else is refinement for reliability.
```

### HTML/CSS Snippet

```html
<div class="activity-item border-l-4 border-lime-500 bg-lime-50 p-4 rounded-r-lg">
  <div class="flex items-center gap-2 text-lime-700 font-semibold mb-2">
    <i data-lucide="minimize-2" class="w-4 h-4"></i>
    <span>MINIMAL PATTERN</span>
  </div>
  <p class="text-sm text-slate-700">[Content here]</p>
</div>
```

---

## Type 16: Inflection Point

### Template

```
INFLECTION POINT: [WHAT'S_BEING_MEASURED]
[RANGE_A]: [NET_BENEFIT_DESCRIPTION]
[RANGE_B]: [DIMINISHING_RETURNS_DESCRIPTION]
[RANGE_C]: [NEUTRAL_DESCRIPTION]
[RANGE_D+]: [NET_NEGATIVE_DESCRIPTION]

THE INFLECTION: ~[THRESHOLD]

BEFORE INFLECTION: "[RULE_THAT_APPLIES]"
AFTER INFLECTION: "[OPPOSITE_RULE_THAT_APPLIES]"

DETECTION: [HOW_TO_KNOW_YOU'VE_CROSSED_IT]
```

### Placeholder Guidance

- `[WHAT'S_BEING_MEASURED]`: The metric or attribute
- `[RANGE_A-D]`: Progression from benefit to liability
- `[THRESHOLD]`: Specific number
- `[RULES]`: The advice that flips
- `[DETECTION]`: Signal that you've crossed the inflection

### Completed Example

```
INFLECTION POINT: progress.txt Size
0-10KB: Pure benefit (learnings compound)
10-20KB: Diminishing returns (more to read)
20-30KB: Neutral (reading cost = thinking benefit)
30KB+: Net negative (context wasted on history)

THE INFLECTION: ~20KB

BEFORE INFLECTION: "Always append. Never delete."
AFTER INFLECTION: "Archive to AGENTS.md. Start fresh."

DETECTION: Late iterations worse than early ones? Check file size.
```

### HTML/CSS Snippet

```html
<div class="activity-item border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded-r-lg">
  <div class="flex items-center gap-2 text-yellow-700 font-semibold mb-2">
    <i data-lucide="activity" class="w-4 h-4"></i>
    <span>INFLECTION POINT</span>
  </div>
  <p class="text-sm text-slate-700">[Content here]</p>
</div>
```

---

# When to Use Each Type

## Decision Guide

| If you want to show... | Use |
|------------------------|-----|
| Cross-pattern principle | Invariant Connection |
| What happens at scale | Second-Order Effect |
| What combines well/poorly | Composition Case |
| What's still unsolved | Research Frontier |
| Real production experience | War Story |
| Where else to go | Alternative Path |
| Why alternatives fail | Inversion Lens |
| Root cause → consequences | Constraint Chain |
| Gradual degradation | Failure Gradient |
| How judgment changes over time | Time Horizon Shift |
| Consequences of shortcuts | Violation Chain |
| Genuine dilemmas | Trade-Off Tension |
| Familiar concept mapping | Analogical Bridge |
| Self-assessment questions | Expertise Gradient |
| Stripped-down essence | Minimal Pattern |
| When benefit becomes liability | Inflection Point |

---

## Minimum Counts Per Pattern Page

| Type | Minimum |
|------|---------|
| Invariant Connection | 2 |
| Second-Order Effect | 2 |
| Composition Case | 2 |
| Research Frontier | 1 |
| War Story | 2 |
| Alternative Path | 1 (section) |
| Inversion Lens | 2 |
| Constraint Chain | 2 |
| Failure Gradient | 2 |
| Time Horizon Shift | 2 |
| Violation Chain | 2 |
| Trade-Off Tension | 2 |
| Analogical Bridge | 2 |
| Expertise Gradient | 2 |
| Minimal Pattern | 1 |
| Inflection Point | 1 |

**Total minimum: 28 Activity Zone items per pattern page**

---

## Related Documents

- `METHODOLOGY-CONTENT-TYPES.md` - Full specification of each type
- `METHODOLOGY-GENERATION-QUESTIONS.md` - How to generate content for these templates
- `METHODOLOGY-QUALITY-RUBRICS.md` - How to score completed items

---

## Tags

`#templates` `#activity-zone` `#copy-paste` `#html-css`
