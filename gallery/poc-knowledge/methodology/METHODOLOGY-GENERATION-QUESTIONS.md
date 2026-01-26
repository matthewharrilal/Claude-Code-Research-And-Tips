# Methodology: Generation Questions

> **Purpose:** Deep dive on applying the 8 Generation Questions to create generative (not descriptive) Activity Zone content.
> This is the HOW for generating the 10 generative content types.

---

## The Mindset

**Staff engineers don't need more facts. They need cognitive tools that change how they think.**

Every piece of Activity Zone content should pass this test:

> "Does this change how I REASON about the topic, or just add to what I KNOW?"

- **Descriptive content** adds to what the reader knows.
- **Generative content** changes how the reader thinks.

After reading descriptive content, the reader can recite facts.
After reading generative content, the reader can derive new facts.

---

## The Mental Shift

| Descriptive (OLD) | Generative (NEW) |
|-------------------|------------------|
| "Ralph shares INV-003 with Gas Town" | "What constraint forced this design? If it didn't exist, what would you build instead?" |
| "Context degrades at 80K tokens" | "How does this fail GRADUALLY before it fails completely? What's invisible?" |
| "Use small tasks" | "When does this help become a hindrance? Where's the inflection point?" |
| "Fresh context beats extended sessions" | "At what time horizon does this feel wrong but work right?" |
| "Ralph has 4 files" | "What's the MINIMAL version? What does removing each file break?" |
| "progress.txt stores learnings" | "If you skip writing to progress.txt, what cascade happens?" |

The generative version asks questions that change reasoning, not just add facts.

---

## The 8 Generation Questions

For every Main Panel concept, apply these questions to generate Activity Zone content:

| # | Question | What It Reveals | Produces |
|---|----------|-----------------|----------|
| 1 | INVERSION | Hidden constraints | Inversion Lens |
| 2 | CONSTRAINT CHAIN | Root causes and cascades | Constraint Chain |
| 3 | FAILURE GRADIENT | Invisible degradation | Failure Gradient |
| 4 | TIME HORIZON | Perception changes | Time Horizon Shift |
| 5 | VIOLATION CHAIN | Consequences of skipping | Violation Chain |
| 6 | ANALOGICAL BRIDGE | Familiar mappings | Analogical Bridge |
| 7 | EXPERTISE GRADIENT | Level-appropriate questions | Expertise Gradient |
| 8 | TRADE-OFF TENSION | Genuine dilemmas | Trade-Off Tension |

---

# Question 1: INVERSION

**"What if the opposite were true? Why would it fail?"**

## What It Reveals
Hidden constraints that force the current design. By imagining the opposite, you expose why alternatives don't work.

## When to Use It
- Any design decision that might seem arbitrary
- Any "best practice" that could be questioned
- Any constraint that's stated without proof

## Which Main Panel Sections Trigger It
- **Core Abstraction** - Invert the core philosophy
- **Why [Decision]?** - What if the opposite decision?
- **What's Hard** - What if this constraint didn't exist?

## Step-by-Step Workflow

```
1. Identify a design decision or constraint
   Example: "Fresh context every iteration"

2. Propose the opposite
   "What if context DIDN'T degrade?"

3. Design what you'd build if the opposite were true
   "One long session per feature, no external files, no restarts"

4. Identify why this fails
   "80K token context rot is transformer physics, not a bug"

5. Name the hidden constraint revealed
   "Ralph IS the constraint made visible"
```

## Produces: Inversion Lens

```
INVERSION: What if [opposite were true]?
You'd design: [The alternative approach]
Why this fails: [The constraint that breaks it]
Hidden constraint revealed: [What this teaches us]
```

## Worked Example: Ralph

**Input (from Core Abstraction):** "Context degrades with tokens. Files persist."

**Step 1:** Design decision = "Fresh context every iteration"

**Step 2:** Opposite = "Keep context, never restart"

**Step 3:** Alternative design = "One long Claude session that accumulates knowledge. No external files needed because context holds everything."

**Step 4:** Why it fails = "At 80K tokens, Claude starts forgetting instructions, repeating itself, hallucinating. Context rot is transformer physics."

**Step 5:** Hidden constraint = "The loop pattern (fresh context) exists because of token limits and quality degradation. Ralph is the constraint made visible."

**Output:**
```
INVERSION: What if context DIDN'T degrade?
You'd design: One long session per feature, no external files, no restarts.
Why this fails: 80K token context rot is transformer physics, not a bug.
Hidden constraint revealed: Ralph IS the constraint made visible.
```

## Worked Example: Gas Town

**Input:** "Mayor delegates tasks to Dogs via inbox files."

**Step 1:** Design decision = "Delegation via files (inbox.md)"

**Step 2:** Opposite = "Direct API calls between agents"

**Step 3:** Alternative design = "Mayor calls Dog APIs directly, passes context in memory."

**Step 4:** Why it fails = "No observability, no recovery from crashes, no human intervention point."

**Step 5:** Hidden constraint = "Files provide the seam for observability, recovery, and human intervention."

**Output:**
```
INVERSION: What if agents communicated via API, not files?
You'd design: Direct in-memory calls between Mayor and Dogs.
Why this fails: Crash loses state. No way to inspect or intervene.
Hidden constraint revealed: Files are the observability and recovery layer.
```

## Common Mistakes

| Mistake | Why It's Wrong | Fix |
|---------|----------------|-----|
| Straw man opposite | "What if we used no computers?" isn't genuine | Choose an opposite someone might actually try |
| Missing the failure | "It just wouldn't work" isn't specific | Name the specific constraint that breaks it |
| Obvious constraint | "What if gravity didn't exist?" | Choose non-obvious constraints |

---

# Question 2: CONSTRAINT CHAIN

**"What forced this? What cascades from it?"**

## What It Reveals
How one root constraint produces 5+ downstream decisions. Helps readers derive patterns, not memorize them.

## When to Use It
- Major architectural decisions
- Non-obvious design choices
- Patterns that seem over-engineered

## Which Main Panel Sections Trigger It
- **Why [Decision]?** - Trace back to root constraint
- **File Structure** - Why these specific files?
- **What's Hard** - What constraint creates this tension?

## Step-by-Step Workflow

```
1. Identify a design decision
   Example: "Fresh context every iteration"

2. Ask "WHY?" to find the root
   "Why fresh context?" → "Context degrades"
   "Why does context degrade?" → "Token limits + quality loss"
   (Keep asking until you hit physics/math/fundamental limits)

3. From the root, trace downstream decisions
   ROOT → Decision 1 → Decision 2 → Decision 3 → ...

4. Count at least 5 downstream decisions

5. Format as chain
```

## Produces: Constraint Chain

```
ROOT CONSTRAINT: [The forcing function]
→ [First downstream decision]
→ [Second downstream decision]
→ [Third downstream decision]
→ [Fourth downstream decision]
→ [Fifth downstream decision]

One constraint, FIVE downstream decisions.
```

## Worked Example: Ralph

**Input:** The entire Ralph pattern

**Step 1:** Design decisions = "Loop, fresh context, external files, task verification, progress logging"

**Step 2:** Root constraint = "Context finite (200K) → Quality degrades as context fills"

**Step 3-4:** Downstream cascade:
1. Fresh context beats extended sessions (avoid degradation)
2. State must persist externally (files, not memory)
3. Each iteration must be self-contained (no dependency on previous context)
4. Tasks must complete in one context window (size constraint)
5. Verification must be automatable (can't rely on human judgment mid-loop)

**Output:**
```
ROOT CONSTRAINT: Context finite (200K) → Quality degrades as context fills
→ Fresh context beats extended sessions
→ State must persist externally (files)
→ Each iteration must be self-contained
→ Tasks must complete in one context window
→ Verification must be automatable

One constraint, FIVE downstream decisions.
```

## Worked Example: Gas Town

**Input:** "Mayor, Deacon, Dogs, Refinery architecture"

**Step 1:** Why this structure?

**Step 2:** Root = "Single Claude instance can't maintain coherence across diverse specialized tasks"

**Step 3-4:** Cascade:
1. Specialized agents (Dogs) for different domains
2. Orchestration layer (Mayor) to coordinate
3. Quality gate (Deacon) because Mayor is biased toward Dogs' work
4. File-based communication for observability
5. Refinery for consolidating learnings across agents

**Output:**
```
ROOT CONSTRAINT: Single Claude can't maintain coherence across diverse specializations
→ Specialized agents (Dogs) for different domains
→ Orchestration layer (Mayor) to delegate and coordinate
→ Quality gate (Deacon) independent from Mayor
→ File-based communication for observability
→ Refinery for consolidating cross-agent learnings

One constraint, FIVE downstream decisions.
```

## Common Mistakes

| Mistake | Why It's Wrong | Fix |
|---------|----------------|-----|
| Starting at symptom, not root | "Fresh context" isn't the root | Keep asking WHY until physics/math |
| Random list, not cascade | Decisions must follow logically | Each decision should follow from previous |
| Fewer than 5 | Not a meaningful chain | Keep tracing until 5+ |

---

# Question 3: FAILURE GRADIENT

**"How does this fail gradually?"**

## What It Reveals
The invisible degradation that happens before catastrophic failure. Prevents overconfidence.

## When to Use It
- Any threshold or limit mentioned
- Any "quality degrades" statement
- Any sudden failure mode

## Which Main Panel Sections Trigger It
- **Gotchas** - What's the gradient before this gotcha?
- **What's Hard** - How does this difficulty manifest gradually?

## Step-by-Step Workflow

```
1. Identify a failure mode or threshold
   Example: "Context rot at 80K tokens"

2. Identify the 100% state (fully functional)

3. Work backward: What happens at 90%? 70%? 50%?

4. Identify the cliff (catastrophic failure point)

5. Note which phases are invisible
```

## Produces: Failure Gradient

```
FAILURE GRADIENT: [What degrades]
[High%] → [Range]: [Subtle symptoms]
[Mid%] → [Range]: [Noticeable symptoms]
[Low%] → [Range]: [Serious symptoms]
[Cliff] → [Range]: [Catastrophic symptoms]

Critical: [The key insight about invisibility]
```

## Worked Example: Context Quality

**Output:**
```
FAILURE GRADIENT: Context Quality
100% → 90% (40-60K tokens): Subtle drift, you won't notice
90% → 70% (60-80K tokens): Repetition, compression, early signs
70% → 50% (80-100K tokens): Instructions forgotten, quality drops
50% → CLIFF (100K+ tokens): Hallucinations, amnesia, unusable

Critical: The gradient from 100% to 70% is invisible until you compare output.
```

## Worked Example: progress.txt Size

**Output:**
```
FAILURE GRADIENT: progress.txt Effectiveness
100% → 90% (0-10KB): Pure benefit, learnings compound
90% → 70% (10-20KB): Diminishing returns, more to read
70% → 50% (20-30KB): Reading cost ≈ thinking benefit
50% → CLIFF (30KB+): Context wasted on history, net negative

Critical: The 10-20KB range feels fine but is already declining.
```

---

# Question 4: TIME HORIZON

**"At what scale is this right?"**

## What It Reveals
How judgments about a practice flip over time. Fixes short-term optimization bias.

## When to Use It
- Any practice that "feels wrong" initially
- Any advice that seems counterintuitive
- Any feature whose value compounds

## Which Main Panel Sections Trigger It
- **Path of a Task** - How does each step feel at different iterations?
- **What's Hard** - When does this difficulty pay off?

## Step-by-Step Workflow

```
1. Identify a practice or component
   Example: "Reading progress.txt every iteration"

2. Describe how it feels at early time point
   "Feels like overhead"

3. Describe how perception shifts at mid point
   "Wait, we're repeating mistakes"

4. Describe the late realization
   "This is why late iterations are faster"

5. Provide judgment heuristic
   "Don't judge by iteration 2"
```

## Produces: Time Horizon Shift

```
TIME HORIZON: [The thing being evaluated]
[Early point]: "[How it feels]"
[Mid point]: "[How perception shifts]"
[Late point]: "[The opposite feeling]"
[Very late]: "[The mature understanding]"

[Heuristic about when to judge]
```

## Worked Example

**Output:**
```
TIME HORIZON: progress.txt Reading (Step 5)
ITERATION 3: "Reading progress.txt feels like overhead"
ITERATION 8: "Wait, Claude is repeating solved mistakes"
ITERATION 15: "progress.txt is why late iterations are FASTER"
ITERATION 30: "This is institutional memory"

Don't judge Ralph by iteration 2.
```

---

# Question 5: VIOLATION CHAIN

**"If I skip this, what cascade happens?"**

## What It Reveals
Causal consequences that make rules feel necessary, not arbitrary.

## When to Use It
- Any step in the Path of a Task
- Any "always do X" rule
- Any gotcha that seems avoidable

## Which Main Panel Sections Trigger It
- **Path of a Task** - What if you skip step N?
- **Gotchas** - What caused this gotcha?

## Step-by-Step Workflow

```
1. Identify a step or rule
   "Run typecheck and tests before marking done"

2. Name the tempting shortcut
   "Skip tests to go faster"

3. Trace the cascade: THEN → THEN → THEN → FINALLY

4. End with the ultimate failure

5. Provide the fix (why you don't skip)
```

## Produces: Violation Chain

```
IF: [The thing you might skip]
THEN: [First consequence]
THEN: [Second consequence]
THEN: [Third consequence]
FINALLY: [Ultimate failure]

THE FIX: [What to do instead]
```

## Worked Example

**Output:**
```
IF: You skip "run typecheck and tests" (step 7)
THEN: Claude marks tasks done without verification
THEN: Broken code enters git
THEN: Future iterations inherit broken foundation
THEN: Errors compound faster than learnings
FINALLY: Morning reveals 20 bad commits

THE FIX: Never skip verification. One bad commit poisons all future iterations.
```

---

# Question 6: ANALOGICAL BRIDGE

**"What do I already know that applies?"**

## What It Reveals
Familiar concepts that map to new patterns, accelerating learning.

## When to Use It
- When the pattern has a familiar analog
- When explaining to someone from a different domain
- When the pattern seems complex but has simple parallels

## Which Main Panel Sections Trigger It
- **Core Abstraction** - What familiar concept matches this?
- **File Structure** - What do these files map to?

## Step-by-Step Workflow

```
1. Identify the new concept
   "Ralph pattern"

2. Find a familiar domain with similar structure
   "Stateless web servers"

3. Map 4+ elements specifically
   HTTP stateless → Fresh context
   Database → prd.json, progress.txt
   ...

4. End with "If you've [done X], you understand [Y]"
```

## Produces: Analogical Bridge

```
[NEW CONCEPT] = [FAMILIAR CONCEPT]
[Element A] → [Familiar element A]
[Element B] → [Familiar element B]
[Element C] → [Familiar element C]
[Element D] → [Familiar element D]

If you've [done familiar thing], you already understand [new concept].
```

## Worked Example

**Output:**
```
RALPH = Stateless Web Servers
HTTP stateless → Fresh context per iteration
Database → prd.json, progress.txt, git
Session cookie → Files read at iteration start
Horizontal scaling → Parallel Ralph loops

If you've designed stateless web services, you already understand Ralph.
```

---

# Question 7: EXPERTISE GRADIENT

**"How deeply do I understand?"**

## What It Reveals
Questions at each expertise level for self-calibration.

## When to Use It
- For any major component or concept
- When readers might have varying expertise
- When depth of understanding matters

## Step-by-Step Workflow

```
1. Identify the topic
   "File Structure"

2. Write a BEGINNER question (what is it?)

3. Write an INTERMEDIATE question (why this way?)

4. Write an ADVANCED question (minimal version?)

5. Write a STAFF question (when to extend?)

6. Write an EXPERT question (cross-pattern composition?)
```

## Produces: Expertise Gradient

```
EXPERTISE GRADIENT: [Topic]

BEGINNER: "[What is it?]"
→ [Answer]

INTERMEDIATE: "[Why this way?]"
→ [Answer]

ADVANCED: "[Minimal version?]"
→ [Answer]

STAFF: "[When to extend?]"
→ [Answer]

EXPERT: "[Cross-pattern?]"
→ [Answer]
```

---

# Question 8: TRADE-OFF TENSION

**"What's the genuine dilemma?"**

## What It Reveals
Both-valid tensions that require judgment, not rules.

## When to Use It
- Any advice that comes with "it depends"
- Any decision with no perfect answer
- Any heuristic that has exceptions

## Step-by-Step Workflow

```
1. Identify the dilemma
   "Task size"

2. List 3 options with BENEFIT and COST for each

3. Explain why no perfect answer exists

4. Provide a heuristic (rule of thumb)
```

## Produces: Trade-Off Tension

```
THE DILEMMA: [The tension]
• [Option A]: [Benefit], but [cost]
• [Option B]: [Benefit], but [cost]
• [Option C]: [Benefit], but [cost]

WHY NO PERFECT ANSWER: [Why this is hard]

HEURISTIC: [Rule of thumb]
```

## Worked Example

**Output:**
```
THE DILEMMA: Task Size
• Very small tasks: Safe, but spawn overhead dominates
• Medium tasks: Balanced, but judgment required
• Large tasks: Efficient, but context collapse risk

WHY NO PERFECT ANSWER: Optimal varies by codebase, task type, and Claude model.

HEURISTIC: If the task description is longer than the code change,
you've decomposed too far.
```

---

# Sequencing Guidance

## Recommended Order

When generating Activity Zone content for a pattern, apply questions in this order:

```
1. INVERSION - Start here to find hidden constraints
2. CONSTRAINT CHAIN - Trace from constraints to decisions
3. ANALOGICAL BRIDGE - Map to familiar concepts
4. TRADE-OFF TENSION - Identify genuine dilemmas

Then deepen:

5. FAILURE GRADIENT - For any threshold mentioned
6. TIME HORIZON - For any practice that compounds
7. VIOLATION CHAIN - For each step in Path of a Task
8. EXPERTISE GRADIENT - For major components
```

## Why This Order

1-2 establish the constraint foundation
3-4 make the pattern learnable and nuanced
5-8 provide depth and specific calibration

## Question Dependencies

| Question | Builds On |
|----------|-----------|
| INVERSION | (Start here) |
| CONSTRAINT CHAIN | INVERSION reveals the constraints to chain |
| FAILURE GRADIENT | CONSTRAINT CHAIN reveals what fails |
| TIME HORIZON | CONSTRAINT CHAIN reveals what compounds |
| VIOLATION CHAIN | Path of a Task (Main Panel) |
| TRADE-OFF TENSION | CONSTRAINT CHAIN reveals the tensions |
| ANALOGICAL BRIDGE | Core Abstraction (Main Panel) |
| EXPERTISE GRADIENT | All of the above |

---

# Decision Tree

Given Main Panel content, use this to select questions:

```
Is there a design decision that might seem arbitrary?
  YES → INVERSION

Is there a "because of X" explanation?
  YES → CONSTRAINT CHAIN (trace X back and forward)

Is there a threshold or limit mentioned?
  YES → FAILURE GRADIENT

Is there advice that "feels wrong" initially?
  YES → TIME HORIZON

Is there a step in Path of a Task?
  YES → VIOLATION CHAIN (what if you skip it?)

Is there a familiar parallel from another domain?
  YES → ANALOGICAL BRIDGE

Is there "it depends" or "judgment required"?
  YES → TRADE-OFF TENSION

Is there a major component worth calibrating on?
  YES → EXPERTISE GRADIENT
```

---

# Generativity Verification

After generating content, apply this test:

## The 6-Question Test

For each Activity Zone item, ask:

| Question | What It Tests |
|----------|---------------|
| 1. **Changed reasoning**: "Did this change how I THINK about the topic?" | Transformation, not addition |
| 2. **Constraint awareness**: "Can I name the constraint that forced this design?" | Root cause understanding |
| 3. **Cascade tracing**: "Can I trace what happens if I violate this?" | Consequence understanding |
| 4. **Analogy unlocked**: "Do I now see this maps to something I already know?" | Transfer learning |
| 5. **Self-calibration**: "Do I know which expertise level I'm at?" | Meta-understanding |
| 6. **Inflection awareness**: "Do I know when this advice STOPS being true?" | Limitation understanding |

## Scoring

- **4+ YES** → Generative (publish)
- **2-3 YES** → Descriptive (rewrite)
- **<2 YES** → Fact (remove or reframe)

## What to Do If Descriptive

1. Identify which questions returned NO
2. Apply the corresponding Generation Question
3. Rewrite to include the missing element
4. Re-test

---

## Related Documents

- `METHODOLOGY-PHILOSOPHY.md` - The worldview behind these questions
- `METHODOLOGY-CONTENT-TYPES.md` - The content types these questions produce
- `TEMPLATES-ACTIVITY-ZONE.md` - Templates to fill in
- `METHODOLOGY-QUALITY-RUBRICS.md` - Scoring each output

---

## Source Traceability

| Section | Source Document | Line References |
|---------|-----------------|-----------------|
| The Mindset | CONTENT-STRUCTURE.md | Lines 244-259 |
| 8 Generation Questions | CONTENT-STRUCTURE.md | Lines 260-271 |
| Generativity Test | CONTENT-STRUCTURE.md | Lines 850-861 |
| Staff Engineer Worldview | CONTENT-STRUCTURE.md | Lines 273-280 |

---

## Tags

`#methodology` `#generation-questions` `#generative-content` `#cognitive-tools` `#workflow`
