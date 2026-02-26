# Confusion Map — Phase D Explainer

**Date:** February 14, 2026
**Agent:** clarity-tester
**Purpose:** Map every jargon term, unexplained concept, and confusing implication in the existing Phase D explanation

---

## Category 1: CORE CONCEPTS — Must Understand First

These are foundational concepts that appear throughout the explanation. If a reader doesn't understand these, nothing else makes sense.

### 1.1 What is "Phase D"?

**Confused reader asks:** "Is this like version D? A fourth attempt? What are Phases A-C?"

**What they need to know:**
- Phase D is a validation experiment (not a version number)
- It's part of a larger multi-phase research project testing a design system
- Phases A-C happened before this (extraction, testing, refinement)
- Think of it as "Experiment #4" in a series

**Where it appears:** Title, throughout all documents

---

### 1.2 What is a "design system"?

**Confused reader asks:** "Is this like a graphic design tool? A template collection? A set of rules?"

**What they need to know:**
- A design system = collection of reusable design patterns + rules for how to use them
- Like a cookbook: recipes (components) + techniques (mechanisms) + ingredients (tokens)
- In this case: 15 example webpages + CSS components + design rules
- Purpose: help AI build consistent, high-quality pages

**Where it appears:** Throughout, especially "library" references

---

### 1.3 What is "the library"?

**Confused reader asks:** "Is this a code library? A physical library? A collection of books?"

**What they need to know:**
- "Library" = the 15 example webpages the AI could potentially copy from
- Called "library" because it's a reference collection
- Contains: DD-001 through DD-006, OD-001 through OD-006, CD-001 through CD-006
- Each example has a different design metaphor (geological layers, blueprint drawings, etc.)

**Where it appears:** All variant descriptions, hypothesis testing

---

### 1.4 What is an "agent"?

**Confused reader asks:** "Is this a human agent? A secret agent? A software agent? An AI assistant?"

**What they need to know:**
- "Agent" = an AI program given a specific task and instructions
- Think of it as "an AI worker" with a job assignment
- In Phase D: 14 different agents with different roles (builders, evaluators, synthesizers)
- Each agent is a separate instance of Claude running independently

**Where it appears:** Everywhere (50+ uses in digest, 100+ in report)

**CRITICAL FIX NEEDED:** The digest reviewer already changed "agents" to "AI programs" or "AI" — but the full report still uses "agents" heavily.

---

### 1.5 What is a "metaphor" in this context?

**Confused reader asks:** "I know what a metaphor is in writing, but what does it mean for webpage design?"

**What they need to know:**
- A design metaphor = organizing visual elements around a real-world concept
- Examples: "geological layers," "laboratory safety zones," "architectural blueprints"
- The metaphor guides spacing, colors, borders, section names
- Good metaphors make complex information feel intuitive

**Where it appears:** All variant analyses, novelty scoring, convergence discussions

---

### 1.6 What are "Track 1" and "Track 2"?

**Confused reader asks:** "Are these different experiments? Different phases? Different teams?"

**What they need to know:**
- Track 1 = Assembly approach (use pre-made components like LEGO bricks)
- Track 2 = Creative derivation approach (design from scratch using a creative process)
- Two different ways to use the design system
- Variants A-D are all Track 2, with different rules about library access

**Where it appears:** Report structure, results section

---

### 1.7 What is "compositional-core"?

**Confused reader asks:** "Is this a software library? A design philosophy? A specific tool?"

**What they need to know:**
- compositional-core = the name of the design system being validated
- Contains: tokens (colors, spacing), mechanisms (border encoding), components (callouts, tables)
- "Compositional" = designs are composed from reusable patterns, not designed from scratch
- Think of it as "the rulebook + toolkit being tested"

**Where it appears:** Throughout report, CLAUDE.md references, file paths

---

## Category 2: TECHNICAL DETAILS — Matter for Understanding Findings

These are more specific concepts that explain HOW the experiment worked and WHY certain findings matter.

### 2.1 What is "container width" and why does it matter?

**Confused reader asks:** "Is this the page width? The text width? Why is 940px important?"

**What they need to know:**
- Container width = how wide the main content column is
- Too wide (>1000px) = text lines too long, eyes get tired, hard to read
- Too narrow (<800px) = page feels cramped, wastes screen space
- 940px sweet spot = ~65 characters per line at typical font sizes (optimal readability)

**Where it appears:** All variant analyses, "primary failure mode," Gap #1

---

### 2.2 What is "CPL" (characters per line)?

**Confused reader asks:** "Is this a technical spec? Why does it matter?"

**What they need to know:**
- CPL = how many letters fit on one line of text
- 45-80 characters = comfortable reading (your eyes don't get lost returning to next line)
- 96-132 characters = exhausting to read (like reading a newspaper sideways)
- Container width + font size determines CPL

**Where it appears:** Track 1 failures, Variant A failures, readability discussions

---

### 2.3 What are "mechanisms"?

**Confused reader asks:** "Is this a software term? A design pattern? A CSS trick?"

**What they need to know:**
- Mechanism = a design technique that encodes meaning through visual properties
- Example: "Border-weight encoding" = thicker borders = more important information
- Example: "Spacing compression" = tighter spacing = related items grouped together
- The design system has 18 documented mechanisms to choose from

**Where it appears:** Integration criteria (PD-05), mechanism count targets (8 mechanisms)

---

### 2.4 What is "component coverage"?

**Confused reader asks:** "Is this test coverage? Visual coverage? Something else?"

**What they need to know:**
- Component coverage = how many different design pattern types were used
- 9 component families available: callouts, tables, code blocks, file trees, stats bars, etc.
- Target: 67% (6/9 families)
- Why it matters: tests whether design system has enough variety for real content

**Where it appears:** All variant failures, Gap #2 (prose-only content)

---

### 2.5 What are "tokens"?

**Confused reader asks:** "Is this blockchain tokens? Security tokens? Something else?"

**What they need to know:**
- Tokens = the basic design variables (colors, spacing values, font sizes)
- Defined in tokens.css as CSS custom properties (--color-primary, --spacing-md, etc.)
- Think of them as "design ingredients" that components use
- Example: --color-bg-primary: #fefcf3 (warm cream background)

**Where it appears:** Token compliance scoring (97-100%), programmatic checks

---

### 2.6 What is "programmatic" vs "perceptual" evaluation?

**Confused reader asks:** "What's the difference? Why do both?"

**What they need to know:**
- Programmatic = automated rule checks (does container width = 940px? Are colors from palette?)
- Perceptual = human judgment questions (does this feel balanced? Is the black box too heavy?)
- Programmatic catches objective violations, perceptual catches subjective quality issues
- Both needed because good design isn't just following rules

**Where it appears:** All evaluation sections, scoring breakdowns

---

### 2.7 What are "prohibitions" vs "guardrails"?

**Confused reader asks:** "Aren't these the same thing?"

**What they need to know:**
- Prohibitions = NEVER rules (never use pure white, never use border-radius, never use box-shadow)
- Guardrails = MINIMUM/MAXIMUM rules (container must be ≥940px, padding must be ≥32px)
- Prohibitions are absolute, guardrails are thresholds
- Both checked in programmatic evaluation

**Where it appears:** Violation categories (S4 = soul/prohibition, G1-G5 = guardrail)

---

### 2.8 What is "anti-gravity"?

**Confused reader asks:** "Is this a physics reference? A metaphor? What's being prevented?"

**What they need to know:**
- Anti-gravity = mechanisms designed to prevent AI from copying library examples
- "Gravity" metaphor: library examples exert gravitational pull → AI wants to copy them
- Anti-gravity mechanisms: phase gates (can't look at examples during creative phase), divergence checks (prove your design is different)
- Goal: preserve creativity despite having examples available

**Where it appears:** Variant C name, R1/R5/R6 mechanisms, hypothesis H2

---

### 2.9 What is "divergence" and the "divergence table"?

**Confused reader asks:** "Divergence from what? Why does it need a table?"

**What they need to know:**
- Divergence = how different a new design is from library examples
- Measured across 5 dimensions: domain, isomorphisms, architecture, vocabulary, mechanisms
- Divergence table = comparison chart showing each dimension (like a report card)
- Threshold: if <3/5 dimensions different AND >40% overlap → must justify or regenerate

**Where it appears:** Variant C controversy, anti-gravity R6 failure, Phase 3.5 gate

---

### 2.10 What is "Phase 3.5 gate"?

**Confused reader asks:** "Why is there a Phase 3.5? What's a gate?"

**What they need to know:**
- Gate = mandatory checkpoint where AI must answer questions before proceeding
- Phase 3.5 = divergence verification gate (happens after metaphor is chosen, before building)
- 5 mandatory questions: Did I derive independently? Can I justify? Does this match library? Show divergence table. Pass/regenerate?
- Purpose: catch convergence before wasting time building

**Where it appears:** Variant C controversy (line 1,233), anti-gravity R6 analysis

---

### 2.11 What is "novelty scoring" (0-5 scale)?

**Confused reader asks:** "Is 5 most novel or least novel? What counts as novel?"

**What they need to know:**
- 0 = exact copy (no novelty)
- 1 = same domain, minor variations (e.g., metamorphic vs sedimentary geology)
- 3 = new domain with familiar structure (e.g., blueprints — architecture not in library)
- 5 = completely unprecedented domain + structure
- Judges score based on how fresh/surprising the metaphor feels

**Where it appears:** All variant results, creativity dimension, hypothesis H1/H2

---

### 2.12 What is "quality scoring" (0-20 scale)?

**Confused reader asks:** "What makes something 13/20 vs 19/20?"

**What they need to know:**
- 20 points split across categories:
  - Visual balance (does it feel top-heavy, cluttered?)
  - Readability (is text comfortable to read?)
  - Color harmony (do colors work well together?)
  - Spacing consistency (is whitespace rhythmic or chaotic?)
- Judges score subjectively based on perceptual audit questions
- 19/20 = excellent quality with 1-2 minor flaws

**Where it appears:** All variant results, quality dimension

---

### 2.13 What is "library utilization" percentage?

**Confused reader asks:** "How is this calculated? What counts as using the library?"

**What they need to know:**
- Measured by counting how much CSS came from library vs custom-written
- Example: Track 1 used 79% library CSS (most callouts/tables copied directly)
- Variant B used 0% library CSS (wrote everything from scratch)
- Helps measure whether instructions to use/avoid library were followed

**Where it appears:** Track 1 results, Variant B surprise, hypothesis H3/H4

---

### 2.14 What are "variants A, B, C, D"?

**Confused reader asks:** "Why letters? Are they ranked? What makes them different?"

**What they need to know:**
- All 4 variants got same content, same creative skill, different library access rules
- Variant A (Skill-Only): No library access, creative process only
- Variant B (Weak Permission): Library "available if you want" (soft framing)
- Variant C (Anti-Gravity): Library strictly prohibited with enforcement gates
- Variant D (Library-First): Required to read all library, then pattern-match
- Letters randomized during evaluation to prevent bias

**Where it appears:** Throughout (the 5 "designers" in digest, 4 Track 2 variants in report)

---

### 2.15 What is "weak permission"?

**Confused reader asks:** "Weak compared to what? What makes permission 'weak'?"

**What they need to know:**
- Weak permission = soft framing ("available for reference if you find it helpful")
- Contrasts with strong prohibition (Variant C: "you MUST NOT look") or strong requirement (Variant D: "you MUST read all")
- Hypothesis: weak permission would lead to 20-40% library utilization (balanced use)
- Reality: 0% utilization (soft framing had ZERO behavioral effect)

**Where it appears:** Variant B name, hypothesis H3, surprising finding

---

### 2.16 What is "prose-only content"?

**Confused reader asks:** "What's the alternative? Why does this matter?"

**What they need to know:**
- Prose-only = 85% essay text, 15% structured content (code, tables, diagrams)
- Alternative = mixed content (50% prose, 50% structured elements)
- Why it matters: can't test "code block" design patterns when content has no code
- Result: all variants scored low on component coverage (22-44% vs 67% target)

**Where it appears:** Gap #2, component coverage failures, Phase D-V2 recommendation

---

### 2.17 What is "wall time"?

**Confused reader asks:** "Is this different from execution time? What's being measured?"

**What they need to know:**
- Wall time = how long the entire process took in real-world clock time
- Includes: thinking, writing, waiting, Playwright rendering
- Different from CPU time or cost (token usage)
- ~55 minutes wall time = from starting first agent to last agent completing

**Where it appears:** Team execution summary (14 agents, 3 waves, ~55 min)

---

### 2.18 What are "waves"?

**Confused reader asks:** "Are these phases? Teams? Parallel processes?"

**What they need to know:**
- Wave = group of agents working in parallel on related tasks
- Wave 1: 5 builders (page-A through page-E)
- Wave 2: 4 evaluators + 1 integration auditor (assess pages)
- Sequential waves: Wave 2 can't start until Wave 1 completes
- Parallel within wave: all Wave 1 agents run simultaneously

**Where it appears:** Team structure, execution timeline

---

## Category 3: NICE-TO-KNOW DETAILS — Can Skip Without Breaking Understanding

These are interesting details that enrich the story but aren't essential to understanding the main findings.

### 3.1 What are "DD," "OD," "CD" prefixes?

**Confused reader asks:** "Are these codes? Categories? What do the letters mean?"

**Nice to know (but not critical):**
- DD = Design Derivation (early experimental layouts)
- OD = Ontological Derivation (refined theoretical layouts)
- CD = Conventional Derivation (applying design conventions)
- Just naming conventions for the 15 library examples
- Reader can understand "library example OD-004" without knowing what "OD" stands for

**Where it appears:** Library example names (OD-004, CD-006, DD-006)

---

### 3.2 What is "OD-004" and why is it mentioned so much?

**Confused reader asks:** "Is this special? Why do 3 variants reference it?"

**Nice to know:**
- OD-004 = one of the 15 library examples using geological strata metaphor
- Apparently visually compelling (multiple variants converged to similar geology concept)
- Used sedimentary layers with border-weight encoding for confidence levels
- Became the convergence attractor in this experiment

**Where it appears:** Variant C/D comparisons, convergence analysis

---

### 3.3 What is "Playwright"?

**Confused reader asks:** "Is this a person? A tool? Why does it matter?"

**Nice to know:**
- Playwright = browser automation tool that lets AI take screenshots and inspect pages
- Used by evaluator agents to visually assess pages
- Sometimes multiple agents compete for access (contention issues)
- Not critical to understand findings, just interesting technical detail

**Where it appears:** Agent team lessons, Playwright contention notes

---

### 3.4 What is "CLAUDE.md"?

**Confused reader asks:** "Is this about Claude AI? A configuration file? Instructions?"

**Nice to know:**
- CLAUDE.md = instruction file that agents read before starting work
- Contains design system rules, prohibitions, mechanisms
- Track 1 failure happened because builder didn't read CLAUDE.md first
- Think of it as "the rulebook" or "the manual"

**Where it appears:** Track 1 root cause, always-load protocol failures

---

### 3.5 What is the "always-load protocol"?

**Confused reader asks:** "Is this a technical requirement? A best practice?"

**Nice to know:**
- Always-load protocol = instruction that agents MUST read prohibitions.md + tokens.css FIRST
- Prevents mistakes like using pure white or off-palette colors
- Track 1 builder violated this (didn't read rules before building)
- Just means "read the instructions before you start"

**Where it appears:** Track 1 failure analysis, Phase E recommendations

---

### 3.6 What is "lens" (Identity + Enablement)?

**Confused reader asks:** "Is this a design philosophy? A filter? Why does it matter?"

**Nice to know:**
- Lens = the design philosophy/aesthetic this system was built around
- Identity + Enablement = values sharp edges, warm editorial palette, metaphor-driven composition
- NOT universal design principles — just THIS system's choices
- Important caveat: results don't prove objective design quality, just fitness for this lens

**Where it appears:** Report header, "Lens Context & Bounds" section

---

### 3.7 What are "PD-01 through PD-12"?

**Confused reader asks:** "Are these test IDs? Requirements? Standards?"

**Nice to know:**
- PD = Phase D integration criteria (12 specific tests)
- Example: PD-05 = mechanism count (must use 8 mechanisms)
- Example: PD-12 = component coverage (must use 6/9 component families)
- Just the numbered checklist evaluators used
- Reader can understand "failed component coverage test" without knowing it's "PD-12"

**Where it appears:** Integration auditor results, criteria PASS/FAIL breakdowns

---

### 3.8 What is "Soul" (S4 violations)?

**Confused reader asks:** "Is this philosophical? Spiritual? Why 'soul'?"

**Nice to know:**
- "Soul" = core identity constraints of the design system (the non-negotiables)
- S4 = prohibition against pure white/black, border-radius >0, box-shadow
- Called "soul" because violating these breaks the system's essential character
- Reader can understand "pure white violation" without knowing the term "soul"

**Where it appears:** Violation codes (S4), prohibition categories

---

### 3.9 What is "R1, R5, R6" (anti-gravity mechanisms)?

**Confused reader asks:** "Are these requirement numbers? Rule IDs?"

**Nice to know:**
- R1 = Phase-Gated Library Access (can't look at case-studies during creative phases)
- R5 = Binary Sequential Phases (must complete phases 0→1→2→3 in order)
- R6 = Divergence Mandate (prove your design is different or regenerate)
- Just numbered anti-gravity mechanisms being tested
- Reader can understand "phase gate" and "divergence check" without knowing they're "R1" and "R6"

**Where it appears:** Anti-gravity mechanism validation section

---

### 3.10 What is "compression ratio"?

**Confused reader asks:** "Is this file compression? Information density?"

**Nice to know:**
- Compression ratio = visual density metric (how much info per screen area)
- 40% threshold = comfortable density (not too sparse, not too dense)
- Too high = overwhelming, too low = boring
- Just one of many perceptual quality factors

**Where it appears:** Perceptual audit guardrails, skill enrichment history

---

### 3.11 What is a "tension-composition skill"?

**Confused reader asks:** "Is this a software tool? A design technique? AI training?"

**Nice to know:**
- Tension-composition = the creative process skill that Track 2 variants used
- Multi-phase process: content analysis → tension derivation → metaphor collapse → layout
- Built from prior research (Phase C, skill enrichment work)
- Reader can understand "creative process" without knowing the skill's formal name

**Where it appears:** Variant A/B/C descriptions, skill-only approach

---

### 3.12 What is "perceptual auditing"?

**Confused reader asks:** "Is this visual design? User testing? Eye tracking?"

**Nice to know:**
- Perceptual auditing = asking 48 structured questions about visual perception
- Questions like: "Does this feel top-heavy?" "Where does your eye go first?" "Would you ship this?"
- Judges A and B used this to score quality (0-20) and catch subjective issues
- Reader can understand "visual quality scoring" without knowing the formal methodology

**Where it appears:** Evaluation process, PA-01 through PA-48 question codes

---

### 3.13 What is "Team Lead" and "recovery agents"?

**Confused reader asks:** "Is there a human team lead? What needs recovering?"

**Nice to know:**
- Team lead = the orchestrator agent that spawns/manages other agents
- Recovery agents = backup agents spawned when original agents fail to write files
- Common pattern: research agents often don't write output, need recovery agents to do the actual writing
- Just project management details

**Where it appears:** Agent team lessons, execution notes

---

### 3.14 What are "screenshots" and "17MB output"?

**Confused reader asks:** "Why so much data? What's being stored?"

**Nice to know:**
- 47 files total: build logs, screenshots, evaluation reports, synthesis documents
- Screenshots = Playwright-captured images of rendered pages (for visual evaluation)
- 17MB mostly from images (screenshots are large files)
- Just scope/scale context — not critical to findings

**Where it appears:** Execution summary statistics

---

### 3.15 What is "Phase D-V2"?

**Confused reader asks:** "Is this a future version? A revision? When?"

**Nice to know:**
- Phase D-V2 = planned second round of Phase D with fixes applied
- Will use mixed content (50% prose, 50% structured) to test component coverage properly
- Will include container width guidance fixes
- Just forward-looking recommendation — not part of current results

**Where it appears:** Recommendations, Gap #2 mitigation, next steps

---

### 3.16 What are "hypotheses H1-H4"?

**Confused reader asks:** "Is this a scientific experiment? Why hypotheses?"

**Nice to know:**
- H1: Library-first creates maximum convergence (CONFIRMED)
- H2: Anti-gravity prevents convergence (FAILED)
- H3: Weak permission enables balanced use (FAILED)
- H4: Skill-only produces quality output (PARTIAL)
- Structured as scientific experiment to test design system mechanisms
- Reader can understand findings without knowing formal hypothesis framework

**Where it appears:** Cross-variant analysis, hypothesis results section

---

### 3.17 What is "line 1,233 controversy"?

**Confused reader asks:** "What's special about this line number? Why does it matter?"

**Nice to know:**
- Variant C build log was 80,000 lines long
- Report-writer only read first 200 lines when checking for Phase 3.5 gate
- Concluded "gate not found"
- Team lead read full log, found gate at line 1,233
- Lesson: AI evaluators can make reading errors too (don't trust first 200 lines of 80k file)

**Where it appears:** "Plot Twist" section in digest, GAP-001 in report

---

### 3.18 What is "Sonnet model"?

**Confused reader asks:** "Is this the AI being tested? A specific version?"

**Nice to know:**
- Sonnet = Claude AI model (smaller/faster than Opus, cheaper)
- All 14 Phase D agents used Sonnet model
- Contrast with larger Opus model used for complex creative work
- Team lessons note: Sonnet effective for both building and evaluating

**Where it appears:** Agent team lessons, model choice notes

---

### 3.19 What is "context exhaustion" or "compaction"?

**Confused reader asks:** "Is this memory issues? Crashes? Performance problems?"

**Nice to know:**
- Context exhaustion = when agent conversation gets too long, old messages get compressed
- Compaction = automatic summarization of old messages to save space
- Not a problem in Phase D (all agents completed without compaction)
- Just technical implementation detail

**Where it appears:** Agent performance notes, zero compaction recorded

---

### 3.20 What are "Gaps GAP-001, GAP-002, GAP-003"?

**Confused reader asks:** "Are these bugs? Requirements? Limitations?"

**Nice to know:**
- GAP-001: Anti-gravity R6 scoring disputed (line 1,233 issue)
- GAP-002: Prose-only content limits component testing
- GAP-003: Mechanism count ceiling for prose content
- Just the 3 critical open issues identified for Phase D-V2
- Numbered for tracking/reference

**Where it appears:** Report conclusion, recommendations section

---

## Summary by Category

**CORE CONCEPTS (20):** Phase D, design system, library, agents, metaphor, Track 1/2, compositional-core, container width, CPL, mechanisms, component coverage, tokens, programmatic/perceptual, prohibitions/guardrails, anti-gravity, divergence, Phase 3.5 gate, novelty scoring, quality scoring, library utilization, variants A-D, weak permission, prose-only content, wall time, waves

**TECHNICAL DETAILS (0 additional — all promoted to core):** Everything that explains findings was critical enough to promote.

**NICE-TO-KNOW (20):** DD/OD/CD prefixes, OD-004, Playwright, CLAUDE.md, always-load protocol, lens, PD-01 to PD-12, Soul/S4, R1/R5/R6, compression ratio, tension-composition skill, perceptual auditing, Team Lead, screenshots/17MB, Phase D-V2, hypotheses H1-H4, line 1,233 controversy, Sonnet model, context exhaustion, GAP-001/002/003

---

## Prioritization for Writer Agent

**MUST explain in main narrative (20 core concepts):**
1. Phase D = validation experiment (not version number)
2. Design system = reusable patterns + rules (like a cookbook)
3. Library = 15 example webpages AI could copy from
4. Agents = AI workers (separate Claude instances with tasks)
5. Metaphor = organizing visuals around real-world concept (geology, blueprints, lab)
6. Track 1 = assembly (LEGO bricks), Track 2 = creative derivation (from scratch)
7. Container width = main column width (940px sweet spot for readability)
8. CPL = characters per line (45-80 comfortable, 96+ exhausting)
9. Mechanisms = design techniques that encode meaning (border encoding, spacing compression)
10. Component coverage = how many pattern types used (target: 6/9 families)
11. Tokens = design variables (colors, spacing, fonts)
12. Programmatic = automated checks, Perceptual = human judgment
13. Prohibitions = NEVER rules (no pure white), Guardrails = min/max thresholds (≥940px)
14. Anti-gravity = mechanisms to prevent copying library examples
15. Divergence = how different design is from library (5 dimensions, need 3/5 different)
16. Phase 3.5 gate = mandatory divergence checkpoint before building
17. Novelty = 0-5 creativity score (0=copy, 5=unprecedented)
18. Quality = 0-20 visual score (balance, readability, color, spacing)
19. Library utilization = % of CSS from library vs custom
20. Variants A-D = same content, different library access rules

**CAN explain contextually if mentioned (20 nice-to-know):**
- OD-004 = geological library example (convergence attractor)
- CLAUDE.md = instruction file (the rulebook)
- Lens = design philosophy (Identity + Enablement aesthetic)
- PD-05, PD-12 = integration tests (mechanism count, component coverage)
- Soul/S4 = core identity constraints (the non-negotiables)
- R1, R6 = anti-gravity mechanisms (phase gates, divergence mandate)
- Line 1,233 = where Phase 3.5 gate was found (evaluator reading error)
- Prose-only = 85% essay text (limits component testing)
- Weak permission = soft framing ("available if helpful")
- Wall time = real-world clock time (~55 minutes)
- Waves = parallel agent groups (Wave 1 builders, Wave 2 evaluators)

**SKIP unless directly asked:**
- DD/OD/CD prefixes (just say "library example")
- Playwright (just say "browser automation")
- Always-load protocol (just say "read instructions first")
- Compression ratio (one of many quality metrics)
- Tension-composition skill (just say "creative process")
- Perceptual auditing (just say "visual quality questions")
- Team Lead/recovery agents (just say "project coordination")
- 17MB/47 files (just say "extensive analysis")
- Phase D-V2 (just say "next round with fixes")
- Hypotheses H1-H4 (results speak for themselves)
- Sonnet model (just say "AI agents")
- Context exhaustion (technical implementation detail)
- GAP-001/002/003 (just describe the open issues)

---

## Key Confusing Implications

### Implication 1: "Library" has two meanings

**Confusion:** Is "the library" a code library (software components) or example library (reference designs)?

**Clarification needed:** It's example designs (15 webpages), NOT software. The CSS components ARE in the design system, but "library utilization" measures copying from EXAMPLE pages, not using components.

---

### Implication 2: Why test 5 variations of the same task?

**Confusion:** Seems wasteful — why not just pick the best approach?

**Clarification needed:** This is SCIENCE, not production. Testing 4 variants (+ 1 assembly control) lets us isolate which variable (library access rules) affects which outcome (creativity, quality, speed).

---

### Implication 3: How can an AI "choose" or "ignore" instructions?

**Confusion:** Variant B told "library available," chose not to use it. How does AI decide?

**Clarification needed:** AI interprets instruction framing. "MUST use library" = clear directive. "Available if helpful" = AI judges helpfulness. Weak framing had no effect because AI defaulted to creative approach (same as Variant A).

---

### Implication 4: Why is convergence bad?

**Confusion:** If geology metaphor works well (Variant D rated 19/20 quality), why is it a failure for Variant C to also use geology?

**Clarification needed:** Convergence isn't bad for quality — it's bad for CREATIVITY TESTING. Variant C was supposed to prove anti-gravity prevents copying. If it converged anyway, anti-gravity failed (even though design looks good).

---

### Implication 5: Can you score creativity objectively?

**Confusion:** Novelty scored 1/5 vs 4/5 — isn't that subjective?

**Clarification needed:** YES, it's subjective but systematic. Judges score based on: (1) Is domain new? (2) Is structure new? (3) Is vocabulary new? (4) Are mechanisms new? (5) Does it FEEL fresh? Still human judgment, but criteria make it consistent.

---

### Implication 6: What does "CONDITIONAL PASS" mean?

**Confusion:** Is that passing or failing? Sounds wishy-washy.

**Clarification needed:** CONDITIONAL PASS = meets most requirements with minor issues. Track 1 = INSTANT FAIL (5 critical violations). Variant A = CONDITIONAL FAIL (1 critical violation). Variant B = CONDITIONAL PASS (0 critical, 1 borderline). It's a spectrum, not binary.

---

### Implication 7: Why is container width THE primary failure mode?

**Confusion:** Seems like one detail among many — why emphasize it?

**Clarification needed:** Because 4/5 pages failed it (80% failure rate) AND it directly affects reading comfort. Pure black elements affect 2/5 pages. Component coverage affects all pages but is content-driven. Container width is CONTROLLABLE and HIGH-IMPACT.

---

### Implication 8: How did Variant C "look" at geology without reading library?

**Confusion:** If case-studies/ prohibited, where did geological metaphor come from?

**Clarification needed:** INDIRECT EXPOSURE. prohibitions.md mentions "OD-004 confidence encoding pattern." mechanism-catalog.md describes "OD-004 strata metaphor." Agent never saw OD-004 page, but absorbed concept through required reading. This is "pattern leakage."

---

### Implication 9: Why does report-writer reading error matter?

**Confusion:** Team lead found the gate at line 1,233, so problem solved — why make it a "plot twist"?

**Clarification needed:** It reveals AI EVALUATORS can fail just like AI BUILDERS. The report almost invalidated Variant C based on incomplete evidence. Lesson: don't trust automated evaluation of 80k-line files without verification.

---

### Implication 10: What's the real-world takeaway?

**Confusion:** This is an experiment about AI agents building webpages. How does it apply to ME using AI tools?

**Clarification needed:**
- If you need speed: give examples, expect copying (2x faster, 30% lower quality)
- If you need creativity: give examples but don't force use (best novelty from choice, not prohibition)
- Always specify constraints: colors, widths, spacing (don't make AI guess)
- Don't over-engineer rules: strict prohibition (Variant C) performed worse than soft permission (Variant B)

---

**END CONFUSION MAP**

Total concepts mapped: 40 (20 core, 20 nice-to-know)
Total implications clarified: 10
Recommendation: Writer should explain all 20 core concepts inline, contextualize nice-to-know only if mentioned, skip technical implementation details.
