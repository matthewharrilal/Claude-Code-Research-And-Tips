# Dynamic Side B Validation Experiment Design

**Task:** Design a concrete experiment to test whether an agent can derive adequate design system understanding from files alone -- without the pre-baked personality summary.

**Agent:** experiment-designer (Task #33)
**Date:** 2026-03-01

---

## 1. The Question

Can an agent reading raw design system files derive an understanding that is AT LEAST AS RICH as the curated 35-line static Side B summary -- and ideally RICHER because it is grounded in primary sources rather than 27:1 compressed conclusions?

The adversarial reviewer's specific challenge (Report 10, Challenge 4): "The agent might read 10 design system files and derive a WORSE understanding than the carefully crafted 30-line summary." This is the hypothesis to test.

---

## 2. Experiment Structure

### 2A. Control Group: Static Side B (2 agents)

**What they receive:**
- The current static Side B text extracted verbatim from SKILL.md lines 184-218 (the world description, personality spectrum, and soul test)
- The pre-computed tension landscape quick reference from SKILL.md lines 281-297
- The domain compatibility lists from SKILL.md lines 370-382

**What they DO NOT receive:**
- Any raw design system files
- Any other context about the design system beyond the static Side B

**Instructions given:**
```
You are analyzing a design system. Below is a summary of its personality and character.

[INSERT STATIC SIDE B TEXT HERE]

Based on this summary, answer the following questions. For each answer, cite the specific evidence from the summary that supports your conclusion.
```

### 2B. Dynamic Group: Raw File Reading (3 agents)

**What they receive -- the MINIMAL SET (~2,400 lines across 6 files):**
1. `design-system/compositional-core/identity/prohibitions.md` (419 lines) -- The 22 prohibitions
2. `design-system/compositional-core/vocabulary/tokens.css` (183 lines) -- The 65 CSS custom properties
3. `design-system/compositional-core/identity/soul-constraints.md` (342 lines) -- Soul-level constraints
4. `design-system/compositional-core/grammar/mechanism-catalog.md` (751 lines) -- 18 reusable mechanisms
5. `design-system/compositional-core/grammar/compositional-rules.md` (527 lines) -- Zone nesting and structural grammar
6. `design-system/compositional-core/vocabulary/tokens-mutability.md` (424 lines, first 200 lines) -- Token lock/mutable status

**Why these 6 and not more or fewer:**
- Fewer than 6 risks the adversarial reviewer being RIGHT -- shallow input produces shallow understanding
- More than 6 risks context fatigue -- the agent summarizes instead of engaging
- These 6 are the MINIMAL SET identified by the design-system-inventory report (Report 08) as the non-negotiable foundation
- Total: ~2,400 lines, well within a single agent's processing capacity
- Critically: NO summary, NO personality spectrum, NO pre-interpreted conclusions

**Instructions given:**
```
You are encountering a design system for the first time. You have been given its core identity files. Read all of them carefully.

After reading, answer the following questions. For each answer, cite the specific file and line/section that supports your conclusion. If you cannot answer a question, say so explicitly.
```

### 2C. Hybrid Group: Raw Files + Reading Protocol (2 agents)

**What they receive:**
- The same 6 files as the Dynamic Group
- PLUS a System Reading Protocol (the one proposed in Report 03, Section "What Would a System Reading Protocol Look Like?") -- approximately 40 lines of guidance on HOW to read the files

**Instructions given:**
```
You are encountering a design system for the first time. You have been given its core identity files and a protocol for reading them.

First, follow the System Reading Protocol to form your understanding. Then answer the following questions. For each answer, cite the specific file and line/section that supports your conclusion.
```

**Why 3 groups, not 2:**
The Dynamic vs Hybrid comparison isolates the value of the reading protocol itself. If Dynamic agents perform as well as Hybrid agents, the protocol adds no value. If Hybrid agents are significantly better, the protocol is essential. This directly addresses the adversarial reviewer's concern -- the protocol is the proposed mitigation for shallow reading, so we need to test whether it works.

---

## 3. The Evaluation Questions (Asked of ALL Groups)

These questions are designed to test understanding at three levels: surface features, interpretive depth, and internal tensions. The static Side B EXPLICITLY answers some, IMPLICITLY answers others, and CANNOT answer the rest.

### Level 1: Surface Features (the static summary covers these)
**Q1.** What are the system's geometric properties? (angles, curves, border-radius)
**Q2.** What is the system's color palette? List specific colors and their roles.
**Q3.** What typefaces does the system use?

### Level 2: Interpretive Depth (the static summary partially covers these)
**Q4.** On a spectrum from warm to austere, where does this system sit? Explain your reasoning with specific evidence.
**Q5.** What are the system's 3 most defining visual characteristics -- the things that make it THIS system and not any other?
**Q6.** If you had to describe this design system's "personality" in 2-3 sentences (as if describing a person), what would you say?

### Level 3: Internal Tensions and Nuance (the static summary CANNOT answer these)
**Q7.** Does this design system contain any INTERNAL contradictions or tensions -- places where its own properties pull in different directions? Identify at least one.
**Q8.** Name a specific constraint that is GENERATIVE -- a rule that forces creative solutions into existence rather than merely preventing bad ones. Explain the mechanism.
**Q9.** What does this design system REFUSE that most design systems allow? What design patterns are impossible here? Name at least 3.
**Q10.** Describe the system's approach to DENSITY -- how does it handle the rhythm of sparse vs. dense content?

### Level 4: Compositional Intelligence (tests whether understanding is ACTIONABLE)
**Q11.** If you were building a page about someone's deeply personal experience of failure and redemption, what tension would exist between the content's emotional needs and this design system's character? How might you resolve it?
**Q12.** Name two domains (real-world systems or environments) whose physical properties are COMPATIBLE with this design system's constraints. Explain why for each.

### Scoring Key

Each question is scored on a 3-point scale:
- **0 = Wrong or empty.** Factually incorrect, or the agent cannot answer.
- **1 = Correct but shallow.** Accurate surface-level answer without insight.
- **2 = Correct and deep.** Accurate answer with interpretive depth, internal reasoning, or discovered nuance.

**Maximum score: 24 (12 questions x 2 points)**

The scoring key for each question is derived from the design system files themselves (ground truth) and from the existing static Side B (to calibrate what "adequate" means).

---

## 4. Expected Outcomes and Decision Criteria

### Hypothesis A (Adversarial Reviewer Is Right)
Dynamic agents score LOWER than Static agents on questions 1-6 (the summary's home territory) and do NOT recover the gap on questions 7-12. Total Dynamic < Total Static.

**If this happens:** Dynamic Side B is a net loss. Keep the static summary. The curated wisdom matters more than fresh engagement.

### Hypothesis B (Dynamics Analyst Is Right)
Dynamic agents score EQUAL OR HIGHER than Static agents on questions 1-6 AND score significantly higher on questions 7-12 (nuance, tensions, generative constraints). Total Dynamic > Total Static.

**If this happens:** Dynamic Side B is a net win. The raw files provide richer understanding than the compressed summary. Proceed with Approach C.

### Hypothesis C (Reading Protocol Is Essential)
Dynamic agents WITHOUT the protocol score lower than Static agents, but Dynamic agents WITH the protocol score higher. Hybrid > Static > Dynamic.

**If this happens:** Dynamic Side B works ONLY with the reading protocol. Approach C is the correct path, and the System Reading Protocol is non-optional.

### Hypothesis D (All Produce Similar Results)
All three groups score within 2 points of each other on total. No meaningful difference.

**If this happens:** The choice between static and dynamic is not about QUALITY but about other properties (portability, maintenance, philosophical consistency). Decide on those grounds instead.

### Decision Thresholds

| Metric | Threshold | Decision |
|--------|-----------|----------|
| Dynamic mean >= Static mean - 2 points | Dynamic is NOT worse | Safe to proceed with dynamic |
| Dynamic mean >= Static mean + 3 points | Dynamic is BETTER | Strong case for Approach C |
| Hybrid mean > Dynamic mean + 3 points | Protocol is essential | Reading protocol is required |
| Dynamic Q7-Q12 mean > Static Q7-Q12 mean + 4 points | Dynamic finds what summary misses | Core value proposition confirmed |
| Any agent scores 0 on Q4 (warmth-austerity) | Shallow reading failure | Need stronger protocol or more files |

---

## 5. Agent Configuration

### Agent Count: 7 Total
- **2 Static agents** (Control) -- enough for basic consistency check
- **3 Dynamic agents** (Treatment A) -- 3 for diversity of reading; if all 3 converge on similar understanding, the signal is strong; if they diverge wildly, inconsistency is a real cost
- **2 Hybrid agents** (Treatment B) -- enough to test protocol value

### Model: All Sonnet
- Sonnet is the model that will actually run TC in the pipeline
- Using Opus would test a capability the pipeline doesn't use
- If Sonnet agents can derive adequate understanding from files, the experiment succeeds for the actual use case

### Agent Independence
- Each agent runs in a SEPARATE context (no shared state, no cross-agent communication)
- Each agent writes its answers to a SEPARATE output file
- No agent sees any other agent's output

### Evaluator: 1 Opus Agent (Separate)
- Reads all 7 output files AFTER all agents complete
- Scores each answer on the 0-2 scale using the scoring rubric
- Produces a comparison matrix with scores, commentary, and verdict
- The evaluator does NOT know which agents were Static, Dynamic, or Hybrid until AFTER scoring (blind evaluation)
- Agent labels are replaced with neutral IDs (Agent-A through Agent-G, randomly shuffled) before the evaluator sees them

---

## 6. The System Reading Protocol (Given to Hybrid Group Only)

This is the protocol from Report 03, lightly edited for clarity:

```markdown
## System Reading Protocol

Read the design system's identity files. For THIS SPECIFIC SYSTEM, derive:

1. **Soul Constraints:** What does the system REFUSE? What CSS properties are
   absolutely prohibited? These refusals ARE the system's character.

2. **Structural Vocabulary:** What spatial tools does the system provide?
   (Border weights, spacing scale, grid system, color zones.) These are the
   WORDS the system can speak.

3. **Personality Characterization:** For each axis below, determine where the
   system sits based on evidence from the files.

   | Axis         | Pole A   | Pole B     | System Position | Evidence |
   |--------------|----------|------------|-----------------|----------|
   | Temperature  | Warm     | Cool       | ?               |          |
   | Geometry     | Soft     | Angular    | ?               |          |
   | Tone         | Playful  | Serious    | ?               |          |
   | Form         | Organic  | Geometric  | ?               |          |
   | Density      | Dense    | Sparse     | ?               |          |
   | Flexibility  | Flexible | Rigid      | ?               |          |
   | Register     | Casual   | Formal     | ?               |          |
   | Chromatic    | Colorful | Restrained | ?               |          |

4. **Internal Tensions:** Where does the system contradict ITSELF? (A system
   can be warm in palette but austere in geometry -- these internal tensions
   are the richest creative territory.)

5. **Generative Properties:** Where do the system's constraints CREATE rather
   than merely PREVENT? (What design solutions are FORCED into existence by
   the constraints?)

6. **Zero-Tension Territories:** What does the system already provide directly?
   (Hierarchy mechanisms, structural patterns, component inventory.) These are
   areas where the system already solves the problem without metaphor.

7. **Highest-Tension Territories:** Where does the system most strongly resist?
   (What emotional/experiential needs have NO direct tool in the system's
   vocabulary?) These are where metaphor lives.
```

---

## 7. Logistics

### Can This Run BEFORE We Update the TC Skill?

**YES.** This experiment is entirely self-contained. It does not touch SKILL.md, does not invoke TC, does not modify any design system files. It only:
- Reads existing design system files (read-only)
- Spawns 7+1 agents with specific prompts
- Collects text output
- Has an evaluator score the output

The experiment's results INFORM whether to update the TC skill. It is a prerequisite, not a dependent.

### How Does This Feed Into the Larger First Experiment?

This experiment answers ONE question: "Can an agent derive adequate design system understanding from files?" The larger first experiment tests whether the FULL updated TC skill (with dynamic Side B, broadened Phase 3, modified conviction brief, etc.) produces compositions as good as or better than the current skill.

The relationship:
1. **This experiment (mini):** Does dynamic Side B produce adequate understanding? (Binary: yes/no)
2. **If yes:** Update TC skill to use dynamic Side B (Approach C)
3. **Then the larger experiment:** Does the updated TC skill produce better compositions? (Comparative: old TC vs new TC on same content)

If this mini-experiment returns NO (Hypothesis A), the larger experiment should use a MODIFIED dynamic approach (more files, stronger protocol, or hybrid with static validation) rather than pure static Side B.

### Estimated Cost and Time

- 7 Sonnet agents, each processing ~2,400 lines of input + 12 questions: ~$2-3 total
- 1 Opus evaluator processing 7 output files: ~$1-2
- Total: ~$3-5, approximately 20-30 minutes elapsed
- This is well within "cheap experiment" territory

### Output Files

| File | Agent | Content |
|------|-------|---------|
| `19-sideb-static-1.md` | Static agent 1 | 12 answers |
| `20-sideb-static-2.md` | Static agent 2 | 12 answers |
| `21-sideb-dynamic-1.md` | Dynamic agent 1 | 12 answers |
| `22-sideb-dynamic-2.md` | Dynamic agent 2 | 12 answers |
| `23-sideb-dynamic-3.md` | Dynamic agent 3 | 12 answers |
| `24-sideb-hybrid-1.md` | Hybrid agent 1 | 12 answers |
| `25-sideb-hybrid-2.md` | Hybrid agent 2 | 12 answers |
| `26-sideb-evaluation.md` | Opus evaluator | Blind scoring matrix + verdict |

All output to `ephemeral/tc-skill-audit/`.

---

## 8. Specific Prompt Templates

### 8A. Static Agent Prompt

```markdown
# Design System Understanding Assessment

You are analyzing a design system. Below is a summary of its personality and character. This is your ONLY source of information about the system.

---

## The World

Every surface is sharp. Corners are cut, not curved. There are no soft edges
in this world. Light is direct. Nothing floats -- every element is placed.

The palette is warm but restrained: cream backgrounds, black text, a single
structural red. Color is not decorative; it is hierarchical. Red means "this
matters." Everything else is achromatic.

Three typefaces. A sans-serif (Geist Sans) at the foundation, a monospace
(Geist Mono) for precision, and a serif (Source Serif 4) for editorial warmth.
The serif appears rarely -- its scarcity makes each appearance an event.

The page has a spine at 940-960px. This is not a recommendation; it is a
structural constraint. Wider pages feel corporate. Narrower pages feel academic.

Borders are semantic. 4px left borders mark primary structural elements.
3px borders mark secondary structure. 1px borders are mere separation.
No other weights exist.

## Personality Spectrum

WARM <-------------> AUSTERE      [75% austere]
SOFT <-------------> ANGULAR      [95% angular]
PLAYFUL <----------> SERIOUS      [85% serious]
ORGANIC <----------> GEOMETRIC    [100% geometric]
BUSY <-------------> SPARSE       [70% sparse]
FLEXIBLE <---------> RIGID        [80% rigid]
CASUAL <-----------> FORMAL       [80% formal]
COLORFUL <---------> RESTRAINED   [90% restrained]

## Soul Test

1. "Does this look like it could appear in a magazine?" -> PASS
2. "Does this look like Bootstrap?" -> FAIL
3. "Would a typographer respect the spacing?" -> PASS
4. "Is there at least one moment of visual surprise?" -> PASS
5. "Could you remove any element without weakening the whole?" -> PASS (nothing is decorative)

## Tension Landscape (Quick Reference)

STRONGEST tensions against this system:
- Warmth/comfort vs. austerity (proven)
- Organic/natural vs. geometric/constructed (proven)
- Playfulness vs. formality (unexplored, high potential)
- Fluidity/flow vs. angular rigidity (proven)

MODERATE tensions:
- Intimacy vs. editorial distance (moderate)
- Spontaneity vs. deliberation (moderate)
- Abundance vs. restraint (moderate)

ZERO tension (assembly territory -- the system already provides these):
- Hierarchy/structure (the system IS hierarchy)
- Precision/clarity (the system IS precision)
- Authority/confidence (the system IS authority)
- Professional polish (the system IS polish)

## Domain Compatibility

Compatible domains: Geological, Architectural, Industrial, Mechanical, Military,
Cartographic, Archaeological, Typographic/Printing, Metallurgical, Botanical
(structure only)

Incompatible domains: Organic/Biological, Liquid/Fluid, Atmospheric/Weather,
Textile/Fabric, Musical

---

Based on this summary, answer the following 12 questions. For each answer,
cite the specific evidence from the summary that supports your conclusion.
If you cannot answer a question from the information provided, say so explicitly.

[INSERT 12 QUESTIONS HERE]
```

### 8B. Dynamic Agent Prompt

```markdown
# Design System Understanding Assessment

You are encountering a design system for the first time. You have been given
its core identity files. Read ALL of them carefully before answering.

After reading, answer the 12 questions below. For each answer, cite the
specific file and section/line that supports your conclusion. If you cannot
answer a question from the files provided, say so explicitly.

## Files to Read (read in this order):

1. design-system/compositional-core/identity/prohibitions.md
2. design-system/compositional-core/vocabulary/tokens.css
3. design-system/compositional-core/identity/soul-constraints.md
4. design-system/compositional-core/grammar/mechanism-catalog.md
5. design-system/compositional-core/grammar/compositional-rules.md
6. design-system/compositional-core/vocabulary/tokens-mutability.md

Read each file using the Read tool, then answer:

[INSERT 12 QUESTIONS HERE]
```

### 8C. Hybrid Agent Prompt

```markdown
# Design System Understanding Assessment

You are encountering a design system for the first time. You have been given
its core identity files AND a protocol for reading them.

First, follow the System Reading Protocol below to form your understanding
of the design system. WRITE OUT your protocol findings (the personality table,
internal tensions, generative properties, etc.) before answering the questions.

Then answer the 12 questions. For each answer, cite the specific file and
section/line that supports your conclusion.

## System Reading Protocol

[INSERT READING PROTOCOL FROM SECTION 6 HERE]

## Files to Read (read in this order):

1. design-system/compositional-core/identity/prohibitions.md
2. design-system/compositional-core/vocabulary/tokens.css
3. design-system/compositional-core/identity/soul-constraints.md
4. design-system/compositional-core/grammar/mechanism-catalog.md
5. design-system/compositional-core/grammar/compositional-rules.md
6. design-system/compositional-core/vocabulary/tokens-mutability.md

[INSERT 12 QUESTIONS HERE]
```

### 8D. Evaluator Prompt

```markdown
# Blind Evaluation: Design System Understanding

You are evaluating 7 agents' understanding of a design system. Each agent
answered the same 12 questions. You do NOT know what information each agent
was given -- they are labeled Agent-A through Agent-G in randomized order.

## Scoring Rubric

For each answer, assign a score:

- **0 = Wrong or empty.** Factually incorrect, cannot answer, or trivially
  shallow ("the system uses colors").
- **1 = Correct but shallow.** Accurately identifies a property without insight
  ("the system is geometric because it uses 0 border-radius").
- **2 = Correct and deep.** Accurate answer with interpretive depth, internal
  reasoning, discovered nuance, or synthesis across multiple properties
  ("the system's geometry is absolute -- zero border-radius with no exceptions --
  but its palette introduces warmth through cream and red, creating an internal
  tension between angular austerity and chromatic warmth").

## Ground Truth Reference

[INSERT: The key facts from prohibitions.md, tokens.css, soul-constraints.md
that constitute ground truth for each question. The evaluator needs this to
detect factual errors.]

## Output Format

For each question, provide:
1. A score table (Agent-A through Agent-G)
2. Brief justification for each score
3. Notable differences between agents

At the end, provide:
- Total scores per agent
- Group analysis (which agents seem to have deeper vs shallower understanding)
- Overall verdict: does the group with raw file access perform better, worse,
  or the same as the group with the curated summary?

IMPORTANT: Do NOT try to guess which agents had which input. Score purely on
the quality and depth of the answers.

[INSERT 7 AGENT OUTPUTS HERE]
```

---

## 9. What Specifically Gets Validated

This experiment directly tests 5 claims from the team's analysis:

| Claim | From Report | How This Experiment Tests It |
|-------|-------------|------------------------------|
| "Dynamic reading produces richer understanding" | 03 (Dynamics) | Q7-Q12 scores: Dynamic vs Static |
| "The agent might derive a WORSE understanding" | 10 (Adversarial) | Q1-Q6 scores: Dynamic vs Static |
| "The static summary flattens warmth-austerity" | 03 (Dynamics) | Q4 + Q7: Does dynamic find the internal tension? |
| "Content-sensitive reading" is valuable | 03 (Dynamics) | Q11: The "failure and redemption" scenario -- does Dynamic see warmer possibilities? |
| "The System Reading Protocol mitigates shallow reading" | 03 (Dynamics) | Hybrid vs Dynamic scores: protocol effect |

---

## 10. Known Limitations

1. **N=7 is small.** This is a signal-detection experiment, not a statistically powered study. It tells us WHETHER dynamic reading can work, not HOW RELIABLY it works across hundreds of invocations.

2. **No content-sensitivity test.** All agents answer the same questions without prior content engagement. The experiment does NOT test the claim that dynamic Side B produces content-SENSITIVE reading (that requires Phase 1 to run first). This is a foundational test: can the agent derive BASELINE understanding?

3. **Evaluator bias.** Even blind, the evaluator might prefer longer, more detailed answers (which dynamic agents will produce because they cite file locations). Mitigated by the scoring rubric's focus on DEPTH, not LENGTH.

4. **File set may be too small or too large.** The MINIMAL SET (2,400 lines) is the proposed floor. If dynamic agents fail, it might be the file set, not the approach. If they succeed, we still don't know the MINIMUM viable file set.

5. **Model homogeneity.** All agents are Sonnet. If the experiment fails, it might work with Opus. But Sonnet is the pipeline's actual builder model, so this is the right test.

---

## 11. Decision Tree After Results

```
Results arrive
    |
    +-- Hypothesis A (Dynamic worse): STOP dynamic Side B
    |   - Keep static summary
    |   - Consider: was the file set too small? Try COMPOSITIONAL SET (6,500 lines)?
    |   - Consider: was Sonnet the wrong model? Would Opus do better?
    |
    +-- Hypothesis B (Dynamic better): PROCEED with Approach C
    |   - Implement System Reading Protocol in TC skill
    |   - Remove ~80 lines of KortAI-specific content
    |   - Move personality spectrum to design system documentation
    |   - Feed into larger TC update experiment
    |
    +-- Hypothesis C (Hybrid better, Dynamic worse): PROCEED with Approach C + MANDATORY protocol
    |   - The reading protocol is non-optional
    |   - Implement System Reading Protocol as REQUIRED Phase 2A
    |   - Consider strengthening the protocol (more questions? worked example?)
    |
    +-- Hypothesis D (No difference): PROCEED with Approach C on non-quality grounds
        - Portability, maintenance, philosophical consistency justify the change
        - The quality concern (adversarial reviewer) is resolved: dynamic is not WORSE
        - Protocol is optional (nice-to-have, not essential)
```

---

*END REPORT*
