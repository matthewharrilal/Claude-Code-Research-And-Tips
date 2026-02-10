# Perceptual Auditing Skill: Architecture Blueprint

**Synthesizer:** synthesizer agent
**Date:** 2026-02-10
**Sources:** 01-existing-skill-analysis.md (675 lines), 02-design-perception-science.md (586 lines), 03-audit-failure-analysis.md (488 lines), 04-perceptual-questions.md (1,024 lines), 05-industry-visual-qa.md (610 lines)
**Total Research Consumed:** ~3,383 lines across 5 files

---

## THE ONE RULE

> **"React to what you see before you check what you know."**

Every decision in this skill traces back to this sentence. The word "react" demands an emotional/perceptual response. The word "before" creates temporal ordering -- perception MUST precede analysis. The word "check" acknowledges that rule-verification has a place, but never first. The word "know" captures the accumulated rules, specs, and conventions that agents default to.

If an agent's first action after taking a screenshot is to open a CSS file, the skill has failed. If an agent's first action is to describe what they SEE and FEEL, the skill is working.

---

## 1. SKILL IDENTITY

### Name: Perceptual Auditing

### How It Differs from Perceptual Deepening (v1)

| Dimension | Perceptual Deepening (v1) | Perceptual Auditing (NEW) |
|-----------|--------------------------|---------------------------|
| **Core Verb** | MATCH (reference vs. attempt) | JUDGE (is this good?) |
| **Requires Reference Image** | YES (hard dependency) | NO |
| **Scope** | Single component | Full page + cross-page |
| **Cognitive Mode** | Convergence (getting closer to target) | Assessment (evaluating what exists) |
| **Output** | Soul pieces (design truths) | Verdict + ranked concerns |
| **Primary Question** | "Does this match the reference?" | "Would you ship this?" |
| **When to Use** | Replicating a known-good design | Evaluating original work |
| **Iteration Model** | 5+ iterations until convergence | 1-2 passes (react, then structure) |
| **Failure Mode** | Premature analytical escape | Checklist-robot mode |
| **Philosophy** | Insights emerge from repeated failure | Quality is visible in the first 5 seconds |

### What It Is

Perceptual Auditing is a forcing function that makes agents LOOK at rendered pages and react to what they see before they check any rule, spec, or convention. It is the layer that sits ABOVE automated testing and rule-verification, answering the question that tools fundamentally cannot: "Does this look right?"

### What It Is Not

- NOT a replacement for soul compliance checks (border-radius: 0 still matters)
- NOT a design system (it evaluates any design system's output)
- NOT a checklist (it forces open-ended perception, then structures the output)
- NOT Perceptual Deepening v2 (that was a component-matching refinement; this is page-level assessment)

---

## 2. CORE QUESTION SET

### Curation Criteria

From the ~200+ questions across all research files, the final set was distilled using four filters:

1. **Cannot be answered by rule-checking** -- If an agent could answer by reading CSS/HTML source, the question was cut
2. **Covers a gap area** -- Questions that address the documented blind spots (color, motion, cross-page, accessibility, emotion) were prioritized
3. **Practically answerable** -- An agent looking at a screenshot CAN answer it in under 60 seconds
4. **Non-redundant** -- Overlapping questions were merged into the strongest formulation

### Tier 1: The Mandatory Five (Every Audit, Every Mode)

These five questions are the irreducible core. They take 2-3 minutes total and cover the most critical perceptual dimensions. An audit that asks ONLY these five questions still produces more design value than a 200-point rule checklist.

| ID | Question | Dimension | What It Catches |
|----|----------|-----------|-----------------|
| **PA-01** | What's the first thing that bothers you? | First Impression | Misplaced focal points, gestalt discomfort, the thing a designer sees in 2 seconds |
| **PA-02** | Is any text uncomfortable to read? Point to the worst spot. | Readability | Narrow columns, cramped containers, insufficient contrast, the 130px catastrophe |
| **PA-03** | Does this feel like one designer made it, or three? | Coherence | Design dialect shifts, visual fragmentation, the "collage" effect |
| **PA-04** | Where does your eye go first? Is that where it SHOULD go? | Hierarchy | Competing focal points, badges outranking headlines, decorative elements stealing focus |
| **PA-05** | Would you put your name on this? What would you fix first? | Ship Test | The gap between "passes rules" and "is good," professional pride threshold |

### Tier 2: The Standard Fifteen (Standard and Standalone Audits)

These extend the Mandatory Five into a comprehensive assessment. For a Standard Audit (~30 min), use Tier 1 + Tier 2 = 20 questions.

**Readability and Comfort (3 questions):**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-06** | Are any words stacking vertically, one per line, in any column? | The canonical bento-grid failure mode |
| **PA-07** | Can you read the longest paragraph without your eye losing its place between lines? | Line length >80 CPL, insufficient leading |
| **PA-08** | Is there any text you have to lean in or squint to read? | Sub-minimum font sizes, low-contrast captions, metadata illegibility |

**Spatial Balance and Weight (3 questions):**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-09** | Is there dead space that serves no purpose -- a screen-sized void with nothing in it? | The viewport-scale dead zone (OD-004 finding), meaningless emptiness |
| **PA-10** | If you squint until you can't read any text, does the layout still look balanced? | Macro composition failure, top-heavy pages, lopsided grids |
| **PA-11** | Are the margins generous (confident spacing) or anxious (clutching or pushing away)? | Spacing psychology, inconsistent rhythm, mechanical rigidity |

**Visual Flow (2 questions):**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-12** | Do your eyes flow smoothly from section to section, or do they get stuck anywhere? | Visual walls, contrast traps, flow-breaking dividers |
| **PA-13** | Is there a clear visual ending, or does the page just stop? | Abrupt endings, trailing emptiness, no narrative closure |

**Grid and Layout (2 questions):**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-14** | Does every column have enough room for its content to breathe? | Content-container misfit across all grid cells |
| **PA-15** | If you trace the left edge of every content block top to bottom, how many different starting positions do you count? | Alignment scatter, staircase margins, jittery edges |

**Consistency (2 questions):**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-16** | Pick two elements that should look identical (e.g., two callout boxes). Do they actually look the same? | Contextual inconsistency, content-volume-driven divergence |
| **PA-17** | Is there a visual rhythm to the page (like a beat in music), or does it feel random? | Arrhythmic section sequencing, unpredictable density alternation |

**Color and Emotion (3 questions):**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-18** | Do all the grays/neutrals feel like they belong to the same family, or do some feel warmer/cooler? | Color temperature inconsistency, warm-gray/cool-gray mixing |
| **PA-19** | Is there any element that feels like it's from a different website? | Visual intruders (dark code blocks on warm pages, mismatched component styles) |
| **PA-20** | If you described this page's personality in three words, what would they be? Does that match the intended personality? | Emotional misalignment, tonal incoherence |

### Tier 3: Deep Dive (8 questions, Standalone Mode only)

For the full 38-question audit, add these to Tiers 1 and 2. Assign by dimension to parallel agents.

**Responsiveness (3 questions):**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-21** | At this viewport, does everything look designed for this width, or squeezed from a wider design? | Afterthought responsive layouts |
| **PA-22** | Would a user who ONLY has this screen size feel served or punished? | Mobile-as-degradation vs. mobile-first |
| **PA-23** | What breaks if you resize 200px narrower? Is the page one viewport change away from failing? | Fragile breakpoints, "about to overflow" states |

**Cross-Page Consistency (2 questions):**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-24** | Does this page feel like it belongs in the same family as the other pages in this collection? | Cross-page dialect drift, the "three dialects" problem |
| **PA-25** | If you covered the header, could you identify which design system this belongs to? | Visual anonymity, generic-framework appearance |

**Architectural Challenge (2 questions):**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-26** | Is there any convention (max-width, column count, spacing value) that seems to be CAUSING a visual problem? | Fossilized conventions, the 860px bottleneck |
| **PA-27** | If you were designing this from scratch with no existing code, would you design it this way? | Constraint-shaped design vs. intention-shaped design |

**Adversarial (1 question):**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-28** | How could someone make this page look terrible while passing every rule check? | Layout vulnerabilities, proportional fragility, content edge cases |

### Summary: 28 Total Questions, 3 Tiers

| Tier | Questions | Time | When Used |
|------|-----------|------|-----------|
| Tier 1: Mandatory Five | PA-01 through PA-05 | 3 min | ALWAYS (Embedded, Quick, Standard, Standalone) |
| Tier 2: Standard Fifteen | PA-06 through PA-20 | 25 min | Standard and Standalone |
| Tier 3: Deep Dive Eight | PA-21 through PA-28 | 20 min | Standalone only |
| **Full Battery** | **28 questions** | **~48 min** | **Standalone only** |

---

## 3. MODES OF OPERATION

### Mode 1: Embedded (Mandatory 90 Seconds)

**When:** Every agent producing visual output, BEFORE declaring work done.
**Who:** Builders, fixers, any agent that modifies CSS/HTML and renders a page.
**What:** The Mandatory Five (PA-01 through PA-05), answered in plain language.

**Exact Steps:**
1. Take a screenshot at the viewport you're working at.
2. STOP. Do not open any CSS file. Do not check any spec.
3. Look at the screenshot for 5 full seconds.
4. Answer PA-01 through PA-05 in 1-2 sentences each.
5. Quality gate: if PA-05 answer is "no, I would not put my name on this," you have more work to do. Identify what PA-05 flagged and fix it before declaring done.

**Output Format:**
```
PERCEPTUAL CHECK (Embedded):
PA-01 (Bothers me): [plain language answer]
PA-02 (Text comfort): [plain language answer]
PA-03 (One designer?): [plain language answer]
PA-04 (Eye path): [plain language answer]
PA-05 (Ship it?): YES / YES WITH CONCERNS / NO
If NO: [what needs fixing]
```

**Anti-Pattern Detection:**
If any answer references a CSS property name, a hex value, a pixel measurement, or a selector -- the answer is INVALID. Rewrite it using human words: heavy, cramped, jarring, floating, anxious, confident, broken, polished.

### Mode 2: Quick (3 Minutes)

**When:** Spot-checking a page. Verifier pass after programmatic checks. Lead assessing a builder's work.
**Who:** Verifiers, leads, anyone doing a fast assessment.
**What:** The Mandatory Five (PA-01 through PA-05) plus a 10-second Cold Look.

**Exact Steps:**
1. Take a screenshot at 1440px AND 768px.
2. Cold Look: Look at the 1440px screenshot for 3 seconds. Write down your gut reaction in exactly one sentence. This sentence is LOCKED -- you cannot change it later.
3. Cold Look: Look at the 768px screenshot for 3 seconds. Write one sentence. LOCKED.
4. Answer PA-01 through PA-05 for each viewport.
5. Verdict: SHIP / SHIP WITH CONCERNS / DO NOT SHIP.

**Output Format:**
```
PERCEPTUAL CHECK (Quick):
Cold Look (1440px): [one locked sentence]
Cold Look (768px): [one locked sentence]
[PA-01 through PA-05 answers for each viewport]
Verdict: SHIP / SHIP WITH CONCERNS / DO NOT SHIP
```

### Mode 3: Standard (30 Minutes)

**When:** Regular page review. Pre-ship quality gate. Design review checkpoint.
**Who:** Dedicated auditor agent(s). Fresh-eyes agents.
**What:** Tier 1 + Tier 2 (20 questions) across 2 viewports.

**Exact Steps:**
1. Cold Look Protocol (see Section 6).
2. Take screenshots at 1440px and 768px.
3. Answer PA-01 through PA-20 for the 1440px viewport.
4. Answer PA-02, PA-06, PA-14, PA-21-PA-23 again for 768px (readability and responsiveness subset).
5. For each concern flagged, provide: what you see, where on the page, and severity (WOULD-NOT-SHIP / LOOKS-WRONG / COULD-BE-BETTER).
6. Rank your top 3 concerns in order of visual impact.

**Output Format:**
```
PERCEPTUAL AUDIT (Standard):
Cold Look (1440px): [locked sentence]
Cold Look (768px): [locked sentence]

[PA-01 through PA-20 answers with concern flags]

RESPONSIVE SUBSET (768px):
[PA-02, PA-06, PA-14, PA-21-PA-23 answers]

TOP 3 CONCERNS (ranked by visual impact):
1. [concern, location, severity]
2. [concern, location, severity]
3. [concern, location, severity]

VERDICT: SHIP / SHIP WITH CONCERNS / DO NOT SHIP
```

### Mode 4: Standalone (Full Deep Audit, ~60 Minutes)

**When:** Final review before shipping. Comprehensive design assessment. Post-build evaluation.
**Who:** 3-5 parallel auditor agents, each assigned 1-2 dimensions.
**What:** All 28 questions across 3 viewports (1440px, 1024px, 768px) + cross-page comparison.

**Exact Steps:**
1. Cold Look Protocol for all viewports.
2. Each agent answers their assigned questions for all viewports.
3. Cross-page assessment: PA-24, PA-25 require screenshots of 2+ pages for comparison.
4. Adversarial phase: PA-28 gets a dedicated adversarial agent.
5. Weaver agent synthesizes all findings, deduplicates, ranks.

**Agent Assignment for Full Standalone:**

| Agent | Dimensions | Questions | Estimated Time |
|-------|-----------|-----------|----------------|
| Agent A | First Impression + Emotion | PA-01, PA-04, PA-05, PA-18, PA-19, PA-20 | 12 min |
| Agent B | Readability + Responsiveness | PA-02, PA-06, PA-07, PA-08, PA-21, PA-22, PA-23 | 15 min |
| Agent C | Spatial + Grid + Alignment | PA-09, PA-10, PA-11, PA-14, PA-15, PA-17 | 15 min |
| Agent D | Hierarchy + Coherence + Cross-Page | PA-03, PA-12, PA-13, PA-16, PA-24, PA-25 | 15 min |
| Agent E | Architecture + Adversarial | PA-26, PA-27, PA-28 | 10 min |

---

## 4. ANTI-PATTERNS: THE COMPLETE TAXONOMY

### Category A: Cognitive Escape (The Agent Flees Perception)

| ID | Anti-Pattern | What It Looks Like | The Tell |
|----|--------------|--------------------|----------|
| AP-01 | **Analytical Escape** | Agent opens CSS files immediately after taking a screenshot | First action after screenshot is reading source code |
| AP-02 | **Grepping for Existence** | Agent runs `scrollWidth > clientWidth` instead of looking at whether content overflows visually | Answer could be written without a screenshot |
| AP-03 | **Technical Documentation** | Agent writes "Changed padding from 16px to 24px" as a perceptual finding | Finding describes CSS properties, not visual experience |
| AP-04 | **Property-Name Answers** | Agent answers PA-01 with "border-radius is 0 on all elements" | Answer contains CSS property names |

### Category B: Rule-Checking in Disguise (Agent Thinks It's Perceiving)

| ID | Anti-Pattern | What It Looks Like | The Tell |
|----|--------------|--------------------|----------|
| AP-05 | **Rule Checking in Disguise** | Agent answers "What bothers you?" with "The font-family matches the spec" | Answer is a compliance statement, not a visual reaction |
| AP-06 | **Spec Comparison Masquerading as Judgment** | Agent says "Header padding is 64px as specified" when asked about spatial balance | Answer references a specification value |
| AP-07 | **Pixel-Value Perception** | Agent says "The margin is 32px which seems adequate" -- measuring, not perceiving | Answer includes pixel measurements without visual context |
| AP-08 | **Convention Worship** | Agent says "matches convention spec" when something LOOKS wrong | Convention is cited as proof of correctness despite visual evidence |

### Category C: Scope Failures (Agent Looks at the Wrong Thing)

| ID | Anti-Pattern | What It Looks Like | The Tell |
|----|--------------|--------------------|----------|
| AP-09 | **Component Blindness** | Agent checks each callout, each header, each code block in isolation, never assessing the PAGE | No finding references relationships between elements |
| AP-10 | **Viewport Tunnel Vision** | Agent checks 1440px and 768px, misses 1024px where the grid actually squeezes | Only two viewport widths tested |
| AP-11 | **Container vs. Viewport Blindness** | Agent adds `@media (max-width: 1024px)` but the container is 860px so the breakpoint never fires | Media query targets viewport when the problem is container width |
| AP-12 | **Self-Reference Blindness** | Agent compares page against internal specs only, never against external design standards | No reference to how the page compares to industry standard |

### Category D: Completion Failures (Agent Declares Victory Too Early)

| ID | Anti-Pattern | What It Looks Like | The Tell |
|----|--------------|--------------------|----------|
| AP-13 | **Declaring Victory After Writing CSS** | Agent writes a fix, never re-renders the page to see if the fix actually worked | No post-fix screenshot |
| AP-14 | **Premature Ship Declaration** | Agent answers PA-05 with "yes" in under 5 seconds without genuine reflection | PA-05 answer is suspiciously fast or formulaic |
| AP-15 | **"Nothing New" Surrender** | Agent says "I don't see anything else wrong" after checking only one dimension | Only one or two dimensions examined before declaring clean |
| AP-16 | **Finding-Without-Looking** | Agent "finds" violations that don't exist because the task description told them to look for them | Findings match the task prompt verbatim but don't match the actual page |

### Category E: Aesthetic Masking (The Page Looks Good Enough to Hide Problems)

| ID | Anti-Pattern | What It Looks Like | The Tell |
|----|--------------|--------------------|----------|
| AP-17 | **Aesthetic-Usability Blindness** | Page is pretty, so agent rates it highly despite proportional failures | High overall rating coexists with specific element-level problems |
| AP-18 | **Halo Effect** | Good typography masks broken grid; agent never looks at the grid because the text looks nice | Assessment focuses only on strongest visual dimension, ignoring others |

**Total: 18 Anti-Patterns across 5 categories.**

---

## 5. INTEGRATION POINTS

The skill must be woven into every role's prompt, not bolted on as a separate tool. Here is how each role integrates Perceptual Auditing.

### Builders (Before Declaring Done)

**Insert into builder prompt:**
```
BEFORE YOU DECLARE THIS WORK DONE:
Take a screenshot. Answer these 5 questions in plain language
(no CSS property names, no pixel values):
1. What's the first thing that bothers you?
2. Is any text uncomfortable to read?
3. Does this feel like one designer made it?
4. Where does your eye go first? Is that correct?
5. Would you put your name on this?
If Q5 is NO: identify what Q5 flagged and fix it.
```

### Auditors (Primary Assessment Method)

**Replace the current audit prompt preamble with:**
```
You are a PERCEPTUAL auditor, not a RULE auditor.
Your job is to LOOK at rendered pages and describe what you SEE.

RULE: You may NOT open any CSS file, HTML source, or spec document
until AFTER you have completed the Cold Look Protocol and answered
PA-01 through PA-05. Rule-checking comes AFTER perception, never before.

Your findings use the PERCEPTION TRACK severity:
- WOULD-NOT-SHIP: A designer would refuse to release this
- LOOKS-WRONG: Something is visually off, needs attention
- COULD-BE-BETTER: Polish opportunity, not blocking
```

### Fixers (After Applying Fix)

**Insert into fixer prompt:**
```
After writing your CSS fix:
1. Re-render the page.
2. Take a screenshot.
3. Answer PA-01 and PA-02 for the fixed area.
4. Did your fix make it LOOK better, or did it just change a number?
5. Did your fix create any NEW visual problems?
If Q4 is "just changed a number" or Q5 is "yes": iterate.
```

### Fresh-Eyes Agents (The Natural Home)

**Fresh-eyes agents already do perceptual work.** The integration is:
- Use the Cold Look Protocol (Section 6) as their opening move
- Use Tier 1 + Tier 2 questions as their assessment framework
- Their findings go on the PERCEPTION TRACK, not the RULE TRACK
- Fresh-eyes findings can NEVER be classified as CONCERN/NITPICK -- they use WOULD-NOT-SHIP / LOOKS-WRONG / COULD-BE-BETTER

### Lead Orchestration

**The lead's role is to:**
1. Ensure every visual agent receives the Embedded Mode prompt injection
2. Reject any perceptual answer that contains CSS property names
3. Maintain separate RULE TRACK and PERCEPTION TRACK finding lists
4. Ensure PERCEPTION TRACK findings reach the fix manifest (they are NOT automatically deprioritized)
5. Use Standard or Standalone Mode for final quality gates

---

## 6. THE COLD LOOK PROTOCOL

### Purpose

Capture the 50-millisecond verdict before analytical contamination. Based on Lindgaard's 2006 research (first impressions form in 50ms and are remarkably stable) and the 5-second test methodology.

### Exact Steps

**Step 1: Prepare**
- Close all CSS files, spec documents, and convention references.
- Clear your analytical context. You are not an auditor. You are a person seeing this page for the first time.

**Step 2: Look (5 seconds)**
- Open the screenshot (or navigate to the page).
- Look at it for exactly 5 seconds.
- Do NOT read text. Do NOT examine details. Just absorb the overall shape, color, weight, and impression.

**Step 3: React (immediate, before any analysis)**
Write these four responses. They are LOCKED -- you cannot change them after writing.

```
COLD LOOK:
Gut reaction: [one sentence -- what did you FEEL?]
Worst thing: [one element or area -- what would you fix first?]
Best thing: [one element or area -- what should be protected?]
Ship verdict: YES / YES WITH RESERVATIONS / NO
```

**Step 4: Lock**
These four responses are FINAL. They cannot be revised after reading specs, examining CSS, or analyzing the DOM. They represent the uncontaminated perceptual response -- the closest an agent can get to a user's first impression.

### Why Locking Matters

Research (03-audit-failure-analysis.md) documents that agents retroactively rationalize perceptual findings when they encounter rule compliance. An agent might see "the code blocks don't belong" (correct perceptual assessment) but then read the convention spec which says dark code blocks are allowed, and revise their assessment to "code blocks are convention-compliant" (incorrect perceptual withdrawal). Locking prevents this.

---

## 7. ARCHITECTURAL QUESTIONING

### When to Challenge Conventions

Not every convention should be questioned. The trigger is:

**A perceptual problem that traces to a convention value.**

Example: "This column is too narrow for its content" (perceptual observation) traces to "max-width: 860px with 4 columns" (convention value). The convention may be CAUSING the perceptual problem.

### The Five-Step Protocol

1. **Identify the perceptual problem.** Describe it in plain language. (e.g., "Text in column 4 stacks one word per line.")
2. **Trace to root cause.** What convention, constraint, or value creates this problem? (e.g., "860px container / 4 columns = 143px per column after gaps.")
3. **Classify the convention:**
   - **Research-backed:** A study, user test, or measurement supports this value. KEEP IT.
   - **Inherited without justification:** Someone chose this value and it was never questioned. CHALLENGE IT.
   - **Fossilized:** It was appropriate in a prior context but the context has changed. CHALLENGE IT.
4. **Propose resolution.** What would fix the perceptual problem? (e.g., "Use 3 columns, or widen container to 1100px, or use responsive column count.")
5. **Escalate.** Convention changes require human approval. Document the perceptual evidence and the proposed resolution. Do NOT silently change conventions.

### What NOT to Challenge

- Soul rules (border-radius: 0, box-shadow: none) -- these are identity, not convention.
- Token values that ARE research-backed.
- Constraints imposed by the platform (viewport limits, browser rendering).

---

## 8. FILE STRUCTURE

### Recommended Structure (4 files, not 10)

```
perceptual-auditing/
  SKILL.md              # THE skill definition (single source of truth)
  CLAUDE.md             # Skill registration and routing (minimal)
  EMBEDDED-PROMPT.md    # The exact text injected into builder/fixer/auditor prompts
  ANTI-QUESTIONS.md     # The 12 anti-questions + 18 anti-patterns (reference)
```

### Why 4 Files, Not 10

The v1 skill has 10 files totaling ~4,700 lines with massive redundancy. The same concepts (squint test, one change per iteration, perceptual not analytical) appear in 4+ files. This creates:
- Unclear canonical authority (which file is definitive?)
- Maintenance burden (update one file, forget three others)
- Agent confusion (which file to read for which situation?)

The new structure has:
- **SKILL.md** (~400 lines): Complete skill definition including all 28 questions, all 4 modes, the Cold Look Protocol, anti-patterns, integration points, and validation criteria. One file, one authority.
- **CLAUDE.md** (~30 lines): Registers the skill, defines the `/perceptual-audit` command, routes modes.
- **EMBEDDED-PROMPT.md** (~50 lines): The exact text block that gets injected into other agents' prompts. This is the "tissue" integration -- the 5-question Embedded Mode that every visual agent receives.
- **ANTI-QUESTIONS.md** (~150 lines): Reference document listing the 12 anti-questions (questions that SEEM perceptual but enable rule-checking) and the 18 anti-patterns. Separate because it's reference material, not operational protocol.

### What v1 Files Become

| v1 File | Lines | Disposition |
|---------|-------|-------------|
| SKILL.md (v1) | 770 | SUPERSEDED -- reference-matching protocol no longer primary |
| SKILL-v2.md | 625 | ABSORBED into new SKILL.md (ship-readiness content) |
| PERCEPTUAL-DEEPENING-PROTOCOL.md | 1,059 | ABSORBED -- philosophy into SKILL.md, forcing questions into question set |
| ZONE-SUB-AGENTS.md | 713 | SUPERSEDED -- zone model replaced by dimension model |
| TURBO-ORCHESTRATOR.md | 594 | SUPERSEDED -- orchestration is now in SKILL.md modes |
| QUICK-INVOKE.md | 274 | SUPERSEDED -- invocation is now in CLAUDE.md |
| EMBEDDED-PROMPT.md | 113 | EVOLVED into new EMBEDDED-PROMPT.md (different content) |
| CLAUDE.md | 92 | EVOLVED into new CLAUDE.md (different routing) |
| PERCEPTUAL-AUDIT-LOG-TEMPLATE.md | 206 | DROPPED -- template bloat (5 identical iteration blocks) |
| SOUL-DISCOVERIES-TEMPLATE.md | 258 | KEPT for v1 -- not needed for Perceptual Auditing |

---

## 9. RELATIONSHIP TO EXISTING SKILL

### Can Both Coexist?

Yes, but with clear separation.

| Situation | Use This Skill |
|-----------|---------------|
| Matching a known reference design (Figma mockup, approved screenshot) | **Perceptual Deepening** (v1) |
| Evaluating original work (new explorations, builds without reference) | **Perceptual Auditing** (NEW) |
| Post-build quality gate (any visual output before declaring done) | **Perceptual Auditing** (NEW, Embedded Mode) |
| Component-level soul convergence (getting closer to a specific reference) | **Perceptual Deepening** (v1) |
| Page-level or cross-page assessment | **Perceptual Auditing** (NEW) |
| Questioning whether a convention is correct | **Perceptual Auditing** (NEW, Architectural Questioning) |

### Should v1 Be Deprecated?

Not yet. Perceptual Deepening (v1) remains useful for the specific case of reference-matching -- when you have a Figma design or approved screenshot and want to converge on it. This is a genuinely different cognitive task from open-ended assessment.

However, v1 should be:
- **Frozen** -- no further development
- **Archived** -- moved from active skill status to reference status
- **Scoped** -- explicitly labeled as "for reference-matching only"
- **Superseded for auditing** -- any audit, review, or quality gate should use Perceptual Auditing, not Perceptual Deepening

### What Transfers from v1 to New Skill

| v1 Element | Transfer Status | Rationale |
|------------|----------------|-----------|
| Perceptual vs. Analytical distinction | KEEP (core philosophy) | The fundamental insight is universal |
| Anti-pattern library (13 entries) | MERGE into expanded 18-pattern taxonomy | v1 patterns are subset of full taxonomy |
| Soul piece ontology | KEEP for v1 only | Perceptual Auditing produces verdicts, not soul pieces |
| Squint test mechanic | ABSORBED into PA-10 | Now one question among 28, not a standalone protocol |
| "What ELSE?" repetition | ABSORBED into Tier 3 depth | Iteration happens in Standalone mode, not embedded |
| One-change-per-iteration | DROP for Perceptual Auditing | This applies to convergence (v1), not assessment (new) |
| 5-iteration minimum | DROP | Assessment needs 1-2 passes, not 5 |
| Zone agent model (5 zones) | EVOLVED into 8-dimension model | Zones were too rigid and missed 5 dimensions |
| Reference image requirement | DROP | The whole point of the new skill is working WITHOUT references |
| Pixel-diff mechanic | DROP | Diffs are for matching, not judging |

---

## 10. THE DUAL SEVERITY TRACK

### Why a Separate Track

The current severity system (BROKEN > OVERFLOW > CRAMPED > INCONSISTENT > CONCERN > NITPICK) guarantees that perceptual findings never get fixed. Research file 03 documented the ratio: 100% of rule-based findings get fixed, 0% of perceptual findings get fixed. The severity system IS the filtering mechanism.

### The Solution: Two Parallel Tracks

**Rule Track (existing, unchanged):**
```
SOUL VIOLATION    --> Always fix (binary: violates locked rule)
CONVENTION BUG    --> Always fix (binary: violates spec)
OVERFLOW          --> Usually fix (binary: content escapes container)
```

**Perception Track (NEW):**
```
WOULD-NOT-SHIP    --> A designer would refuse to release this.
                      Requires human review. Cannot be auto-dismissed.
LOOKS-WRONG       --> Something is visually off. Needs attention.
                      Addressed in current cycle if time permits.
COULD-BE-BETTER   --> Polish opportunity. Documented for future.
```

### Critical Rule

Perception Track findings can NEVER be reclassified onto the Rule Track. They cannot be dismissed because "the convention spec allows it." A finding of "WOULD-NOT-SHIP: the dark code blocks create jarring contrast holes" cannot be countered with "but the convention spec prescribes dark code blocks." The convention spec is not a defense against perceptual failure.

**The convention describes WHAT is built. The perception track describes HOW IT LOOKS.** Both are valid. When they conflict, the conflict is escalated to a human, not auto-resolved in favor of the convention.

---

## 11. VALIDATION CRITERIA

### The Bento Grid Litmus Test

The skill is working if and only if it would have caught the canonical failure: a 4-column bento grid in an 860px container where one column is 130px wide and every word stacks on its own line.

**Specific Validation:**
- PA-02 ("Is any text uncomfortable to read?") must catch the word stacking
- PA-06 ("Are any words stacking vertically?") must catch it explicitly
- PA-14 ("Does every column have enough room?") must catch the content-container misfit
- PA-10 ("Squint test") must reveal the lopsided column distribution

If an agent runs Perceptual Auditing on a page with this failure and does NOT flag it, the skill has failed.

### Ongoing Validation Metrics

1. **Perception-to-Rule Ratio:** Target >= 40% perception findings (currently 15%). Measured per audit cycle.
2. **Cold Look Accuracy:** Do the locked Cold Look reactions correlate with final findings? If the gut reaction says "NO" but the structured audit says "SHIP," something is wrong.
3. **Fix Rate Parity:** Perception Track findings should have a non-zero fix rate. Currently 0%. Target >= 30% within 2 cycles.
4. **False Positive Rate:** Perception findings that are later determined to be non-issues. Target < 20%.
5. **Designer Concordance:** If a human designer reviews the same page, do they flag the same top-3 concerns? Target >= 60% overlap.
6. **Anti-Pattern Detection Rate:** When reviewing agent answers, what percentage contain CSS property names, pixel values, or spec references? Target < 10%.
7. **The "Would They Tweet It" Test:** Would someone screenshot this page and share it as an example of great design? If the answer is "no" after passing all checks, the skill found the gap.

### Red Flags That the Skill Is Failing

- Agents answer PA-01 through PA-05 in under 30 seconds (they're not really looking)
- Every Cold Look verdict is "YES" (agents are being compliant, not honest)
- Perception Track findings are all COULD-BE-BETTER (agents are hedging)
- No WOULD-NOT-SHIP findings ever appear (the threshold is too high or agents are afraid to use it)
- Agent answers contain "border-radius," "padding," "font-size," or other CSS properties (they're rule-checking in disguise)
- Perception findings are copy-pasted across pages (agents are pattern-matching the task prompt, not looking at each page)

---

## APPENDIX A: QUESTION PROVENANCE

Every question in the final set traces to research. This table maps each PA-ID to its research origin.

| PA-ID | Primary Source | Additional Sources |
|-------|---------------|-------------------|
| PA-01 | 04 Q-FI-02 (gestalt discomfort) | 01 v2 Q53 ("first thing that bothers me"), 03 fresh-eyes format |
| PA-02 | 04 Q-RC-01 (10-min comfort) | 01 v2 Q54 ("text uncomfortable to read"), 02 readability science |
| PA-03 | 04 Q-CC-01 (one designer or three) | 03 "three dialects" finding, 02 design debt |
| PA-04 | 04 Q-FI-01 (eye draw) | 02 eye-tracking patterns, 05 Material Design 3 "4x faster" |
| PA-05 | 04 Q-ST-01 (put your name on it) | 01 v2 Q55 ("would a designer ship this"), 05 Stripe PQR |
| PA-06 | 04 Q-RC-02 (word stacking) | 03 130px column canonical failure, 02 min column width table |
| PA-07 | 04 Q-RC-06 (read aloud) | 02 Baymard line-length, 02 CPL research |
| PA-08 | 04 Q-RC-05 (lean in to read) | 02 font size research, 01 v2 level 1 Q82 |
| PA-09 | 04 Q-SB-01 (dead space) | 02 white space science, 03 OD-004 dead zone |
| PA-10 | 04 Q-FI-05 (squint shapes) | 01 squint test stages, 05 squint test research, 02 visual balance |
| PA-11 | 04 Q-SB-03 (generous or anxious) | 02 white space science, 01 zone 2 Q37 |
| PA-12 | 04 Q-VH-02 (eyes flow or stuck) | 02 eye-tracking patterns, 02 visual continuity |
| PA-13 | 04 Q-VH-04 (clear ending) | 03 "page just stops" finding |
| PA-14 | 04 Q-GL-01 (column room) | 03 130px bento failure, 02 min column width table |
| PA-15 | 04 Q-GL-03 (left-edge alignment) | 02 alignment science, 02 grid consistency |
| PA-16 | 04 Q-CC-03 (same component same look) | 03 callout dialect finding |
| PA-17 | 04 Q-CC-04 (visual rhythm) | 02 visual rhythm science, 02 five rhythm types |
| PA-18 | 02 color harmony (gray family) | 01 Section 6.1 (color gap) |
| PA-19 | 01 Section 6.1 + 03 dark code block | 02 figure-ground, 04 Q-FI-02 |
| PA-20 | 04 Q-FI-06 (describe with feelings) | 02 designer vs developer perception, 01 Section 6.9 |
| PA-21 | 04 Q-RP-01 (breathing room at width) | 01 v2 zone 1, 02 responsive breakpoints |
| PA-22 | 04 Q-RP-02 (served or punished) | 05 Vercel content resilience |
| PA-23 | 04 Q-RP-03 (wrong screen size) | 01 v2 Q64-Q69, 03 "about to overflow" |
| PA-24 | 01 Section 6.3 (cross-page) | 03 "all look the same" finding |
| PA-25 | 04 Q-CC-02 (identity without header) | 02 design debt, 05 Stripe trust question |
| PA-26 | 01 v2 architectural questioning | 03 860px convention finding |
| PA-27 | 05 Julie Zhuo Q7 (unconstrained) | 03 "would we design 130px from scratch" |
| PA-28 | 05 red team design lab | 03 adversarial review concept |

---

## APPENDIX B: THE THREE LAWS OF PERCEPTUAL QUESTIONS

These laws (from 04-perceptual-questions.md) govern every question in the skill:

### Law 1: The Answer Must Require a Screenshot

If an agent can answer the question by reading CSS files, HTML source, or design tokens WITHOUT rendering the page, the question is not perceptual. Every question in this skill requires looking at the rendered output.

### Law 2: The Answer Must Be Describable in Plain Language

If the answer requires technical vocabulary (px, rem, hex, rgba, flex, grid), the question has been answered technically, not perceptually. Perceptual answers use human words: heavy, cramped, jarring, floating, anxious, confident, broken, polished.

### Law 3: A Non-Designer Must Be Able to Validate the Answer

If validating the answer requires design expertise or tool knowledge, the question tests expertise, not perception. Anyone can tell you whether a page feels finished, whether text is hard to read, or whether they would be proud to show it.

---

## APPENDIX C: THE SEVERITY SYSTEM THAT KILLED PERCEPTION

This appendix documents the mechanism by which 100% of perceptual findings were filtered out across 7 teams and 100+ agents. It is included so that the new dual-track system does not repeat this failure.

### The Pipeline That Filters Out Judgment

```
Raw Finding: "The page is visually monotonous" (Fresh-Eyes agent)
  --> Classified as: CONCERN (judgment, not binary)
    --> Weaver verdict: "UX observation, not CSS fix"
      --> Fix manifest: NOT INCLUDED (below threshold)
        --> Fix execution: N/A
          --> Post-fix verification: N/A
            --> Final status: "DOCUMENTED" (= permanently ignored)
```

### The Ratio

| Phase | Rule Findings | Perception Findings | Rule Fix Rate | Perception Fix Rate |
|-------|--------------|--------------------|--------------|--------------------|
| AD Audit (24+ agents) | 40 (85%) | 7 (15%) | ~100% | 0% |
| OD Comprehensive (~58 agents) | ~69 (78%) | ~20 (22%) | ~100% | ~10% |
| **Combined** | **~109 (82%)** | **~27 (18%)** | **~100%** | **~4%** |

The new Perception Track exists to break this pattern. Perceptual findings enter a separate pipeline where "the convention allows it" is not a valid dismissal.

---

## APPENDIX D: INDUSTRY VALIDATION

The skill's approach aligns with how leading design organizations assess quality:

| Organization | Method | Alignment to This Skill |
|-------------|--------|------------------------|
| **Stripe** | Quarterly Product Quality Reviews, "Walking the Store" | Cold Look Protocol + Standard Mode are the agent-equivalent of walking the store |
| **Linear** | "Screenshot the app, design on top of it" | PA-10 (squint test) + PA-14 (column room) perform the same function |
| **Vercel** | Content resilience testing (short, average, long content) | PA-06 (word stacking) + PA-28 (adversarial) cover content edge cases |
| **Apple** | Clarity / Deference / Depth principles | PA-04 (hierarchy), PA-02 (readability), PA-12 (flow) map to these |
| **Google M3** | 46 global studies, "4x faster element detection" | PA-01/PA-04 (first impression + eye draw) test the same perception |
| **Julie Zhuo** | "If we threw away all constraints, would we still design it this way?" | PA-27 (unconstrained design) is a direct adaptation |
| **NN/g** | Heuristic #8 (Aesthetic and Minimalist Design) | PA-19 (element from different website) + PA-09 (dead space) |

Every major approach confirms: the gap between "tests pass" and "looks right" requires perceptual judgment that no rule-based system can provide.

---

*Skill synthesis complete. 2026-02-10.*
