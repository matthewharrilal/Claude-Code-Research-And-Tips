# Phase D — A Plain-English Explanation

**For someone who has zero background in this project**

**Date:** February 14, 2026
**Author:** writer agent (phase-d-explainer team)

---

## What This Document Is About

This document explains a design experiment that tested whether AI programs can use a design system (a collection of reusable visual patterns and rules) to build high-quality webpages.

The experiment had two main questions:

1. **Can AI programs successfully use pre-made design components?** (like using LEGO bricks to build something)
2. **Can AI programs create original designs from scratch while avoiding copying?** (like composing original music instead of playing covers)

This explanation will walk you through what was tested, how it was tested, what the results were, and what it all means.

**No prior knowledge required.** Every technical term will be defined when it first appears.

---

## Background — What Led to This Experiment

### The Big Picture

Imagine you're trying to build a system that helps AI programs design webpages. You want these pages to:

- Look consistent (they all feel like they came from the same place)
- Be high quality (readable, visually balanced, pleasant to use)
- Be creative (not all look identical)

To do this, you create something called a **design system**.

---

### What Is a Design System?

Think of a design system like a cookbook for visual design.

**A cookbook contains:**
- Recipes (step-by-step instructions for making dishes)
- Techniques (how to chop vegetables, how to sauté)
- Ingredients (flour, butter, salt)

**A design system contains:**
- **Components** (pre-made webpage elements like callout boxes, tables, headers)
- **Mechanisms** (visual techniques like "use thicker borders for important information")
- **Tokens** (basic design variables like colors, spacing values, font sizes)

The design system tested in this experiment is called **compositional-core**.

---

### The Central Tension

Here's the problem this experiment was trying to solve:

**If you give AI programs examples to copy from, they build pages faster but everything looks the same.**

**If you don't give them examples, they take longer but create more original designs.**

This creates a tension:

- **Speed vs. Creativity**
- **Consistency vs. Novelty**
- **Copying vs. Inventing**

The experiment tested different approaches to see which balance works best.

---

## The Experiment Setup — What Was Tested

### The Team

The experiment involved 14 AI programs (we'll call them "AI agents" from here on—think of each as a separate AI worker with a specific job).

**The team structure:**
- **1 content-preparer:** Created the article that all pages would display
- **5 builders:** Each built one webpage using different rules
- **4 evaluators:** Scored the pages on quality, creativity, and rule-following
- **2 recovery agents:** Filled in when original agents didn't complete their work
- **2 synthesizers:** Combined all the findings into final reports

**Timeline:** About 55 minutes from start to finish (in real-world clock time)

---

### The Content

All five webpages displayed the same content: a technical article about AI agent architecture. The article was about 85% text with minimal code examples or diagrams.

**Why the same content?** So the only difference between pages would be the design approach, not the content itself.

---

### The Two Main Approaches (Tracks)

The experiment tested two fundamentally different ways to use a design system:

#### Track 1: Assembly (Like Building with LEGO)

**The task:** Take pre-made components from the library and snap them together to build a page.

**The analogy:** You're furnishing a house with furniture from IKEA. You don't design the furniture yourself—you just choose which pieces go where.

**What they had access to:** A library of 15 example webpages to copy from, plus 34 pre-made components (callout boxes, tables, headers, etc.)

**Expected outcome:** Fast assembly, consistent look, zero creativity

**What they built:** 1 page (called "Track 1 Assembly")

---

#### Track 2: Compositional Derivation (Like Composing Original Music)

**The task:** Create a custom design from scratch by deeply analyzing the content and inventing a visual metaphor that makes the content easier to understand.

**The analogy:** You're a musician writing an original song. You can't just play covers—you need to compose something new that fits the mood and message.

**What is a metaphor in this context?** A creative visual structure that helps readers understand difficult content.

**Example:** If your article talks about "knowledge layers" (basic facts → proven theories → cutting-edge research), you might use a geological metaphor (bedrock → strata → topsoil) to visually organize sections by how established the knowledge is.

**Expected outcome:** Slower creation, more original designs, variable quality

**What they built:** 4 pages with different rules (called Variants A, B, C, and D)

---

### The Four Variants — Same Task, Different Rules

All four variants did Track 2 compositional derivation, but with different levels of access to the library of example pages.

Think of it like four chefs making the same dish with different constraints:

---

#### Variant A: Skill-Only (The Blind Chef)

**The rules:**
- You have a creative process to follow (a step-by-step recipe for deriving designs)
- You CANNOT look at any example pages at all
- You must create everything from scratch using only basic building blocks (colors, fonts, spacing values)

**The point:** Prove that the creative process works even without seeing examples.

**Time taken:** ~30 minutes

**What they created:** A blueprint metaphor (architectural drawings with Plan View, Elevation View, Section Cut labels)

**Novelty score:** 3 out of 5 (relatively novel—blueprints weren't in the library)

**Result:** CONDITIONAL FAIL—Container too wide (text lines too long, hard to read)

---

#### Variant B: Weak Permission (The Hesitant Shopper)

**The rules:**
- Same creative process as Variant A
- Example library is "available for reference" but NOT required
- Builder can choose whether to look or not

**The point:** Test if giving soft permission ("you can use this if you want") changes behavior.

**Time taken:** ~26 minutes

**What they created:** A laboratory metaphor (Safety Briefing, Measurement Protocol, Calibration Reference labels)

**Novelty score:** 4 out of 5 (very novel—lab equipment wasn't in the library)

**Result:** CONDITIONAL PASS—Best technical compliance, borderline container width

**Surprising finding:** Weak permission had ZERO effect. The builder never looked at the library. Saying "you can use this if you want" didn't change behavior at all compared to Variant A.

---

#### Variant C: Anti-Gravity (The Guarded Creative)

**The rules:**
- Same creative process as A and B
- Example library is FORBIDDEN during the creative phase (you absolutely cannot look)
- After committing to a metaphor, you must check: "Is my metaphor too similar to library examples?"
- If it's too similar (more than 40% overlap), you must either justify why that's okay or start over with a different metaphor
- Special checkpoint (called "Phase 3.5 gate") enforces this check

**What is "anti-gravity"?** The metaphor is that library examples exert a gravitational pull—you naturally drift toward copying what you've seen. Anti-gravity mechanisms are rules designed to push you away from copying to ensure original thinking.

**The point:** Test if strict rules preventing library access lead to more creative designs.

**Time taken:** ~40 minutes (slowest—extra verification steps)

**What they created:** A metamorphic geology metaphor (diagenetic zones → low-grade metamorphic → medium-grade, representing transformation stages in knowledge development)

**Novelty score:** 1 out of 5 (low—very similar to a library example called OD-004 which also uses geological layers)

**Result:** FAIL—Container too narrow, metaphor converged to library pattern despite strict rules

**The controversy:** The report initially said Variant C failed the anti-gravity test (converged to library pattern). BUT when the team lead read the full builder log (80,000 lines of text), they found the Phase 3.5 gate WAS completed at line 1,233. The evaluator had only read the first 200 lines and missed it entirely. So the verdict is "disputed"—the gate might have worked, but the final design still ended up very similar to the library example.

---

#### Variant D: Library-First (The Intentional Copycat)

**The rules:**
- SKIP the creative process entirely
- Read all library examples FIRST
- Pick an existing pattern and adapt it to the content
- INTENTIONALLY copy from the library (this is the control/baseline—it shows what maximum copying looks like)

**The point:** Measure maximum convergence. How much copying happens when you're ALLOWED to copy? This sets a baseline to compare against Variants A, B, and C.

**Time taken:** ~12 minutes (second-fastest—no creative work, just adaptation)

**What they created:** Geological stratification (bedrock → strata → topsoil → atmosphere)—deliberately copied from library example OD-004

**Novelty score:** 0 out of 5 (zero—intentional copying)

**Visual quality:** HIGHEST of all 5 pages—judges loved it, even though it was a copy

**Result:** FAIL (container too narrow), but this was EXPECTED because the borrowed metaphor was designed for different content

**Key insight:** Borrowing produces beautiful results fast, but at the cost of originality.

---

## How Pages Were Scored

The pages were evaluated by 4 different AI agents working in parallel:

### 1. Programmatic Auditor (The Robot Checker)

**What it checked:** 19 automated yes/no rules

**Examples:**
- Is the container width at least 940 pixels wide?
- Are all colors from the approved color palette?
- Are spacing values multiples of 4 pixels?
- Is border-radius set to 0 (sharp corners) everywhere?
- Are there any shadows (which are forbidden)?

**Think of it like:** A building inspector checking if construction meets code requirements.

---

### 2. Visual Judge A (The Experienced Designer)

**What it checked:** 48 subjective quality questions

**Examples:**
- What's the first thing that bothers you about this page?
- Is any text uncomfortable to read?
- Does this feel like one designer made it, or three different people?
- Would you put your name on this and ship it to users?
- If you squint, does the layout look balanced?

**Background:** This judge was familiar with the design system and its rules.

---

### 3. Visual Judge B (The Fresh Perspective)

**What it checked:** Same 23 core questions as Judge A, but with ZERO background knowledge of the design system

**Purpose:** Catch issues that someone familiar with the system might overlook. Sometimes you need fresh eyes to see obvious problems.

**Think of it like:** Getting your friend who knows nothing about cooking to taste your experimental recipe—they'll tell you if it tastes weird, even if technically you followed the recipe.

---

### 4. Integration Auditor (The Final Grader)

**What it did:** Combined all findings from the three judges above and checked 12 integration criteria.

**Examples:**
- Did the page use at least 8 different design techniques (mechanisms)?
- Did it cover at least 67% of component types (6 out of 9 component families)?
- If it was supposed to avoid copying, did it actually stay different from library examples?

---

## The Scoring Metrics Explained

### Metric 1: CPL (Characters Per Line)

**What it means:** How many letters and spaces fit on one line of text before wrapping to the next line.

**Why it matters:** Lines that are too wide hurt readability. Your eyes get tired tracking across super-long lines and have trouble finding the start of the next line.

**The sweet spot:** 45-80 characters per line for comfortable reading.

**Real-world example:** Newspaper columns are narrow (about 40-50 characters) because it's easier to read. A line that stretches across an entire full-size monitor (120+ characters) is exhausting.

**What we found:**
- Track 1 Assembly: **112-132 CPL** — way too wide ❌
- Variant A: **96 CPL** — still too wide ❌
- Variant B: **~80-85 CPL** — borderline acceptable ✓
- Variants C & D: Narrower containers, so CPL was fine ✓

---

### Metric 2: Container Width

**What it means:** How wide the main content area is on the screen (measured in pixels).

**Why it matters:** This directly affects CPL. Too wide = text lines too long. Too narrow = wastes screen space and feels cramped.

**The sweet spot:** 940-960 pixels at a 1440-pixel screen width (about 65% of screen width)

**What we found:** 4 out of 5 pages got this wrong. This was THE most common failure.

- Track 1 + Variant A: Made container too wide → excessive CPL
- Variants C + D: Made container too narrow → wasted space

**Why it's hard:** When you choose a metaphor like "geological core sample" (Variant D), a narrow vertical container makes sense for the metaphor but violates readability guidelines. The metaphor conflicts with usability.

---

### Metric 3: Novelty Score (0-5 Scale)

**What it means:** How original is the design metaphor compared to the library examples?

**The scale:**
- **0** = Exact library match
- **1** = Same domain as library, minor variation (geology vs geology)
- **2** = Same domain, different structure
- **3** = Different domain, some overlap
- **4** = Different domain, minimal overlap
- **5** = Completely novel domain, never seen in library

**How we measured it:** By comparing across 5 dimensions:

1. **Domain** — What world does the metaphor come from? (geology, architecture, laboratory, music, etc.)
2. **Isomorphisms** — What structural mappings does it use? (bedrock = certainty, blueprint = multi-view, etc.)
3. **Architecture** — How many layers/zones/sections?
4. **Vocabulary** — What specific terms appear? (stratum, isograd, drawing number, etc.)
5. **Mechanisms** — What visual techniques does it use?

**Example comparison:**

| Dimension | Variant C (Metamorphic Geology) | Library Example OD-004 (Sedimentary Geology) | Match? |
|-----------|----------------------------------|---------------------------------------------|---------|
| Domain | Geology | Geology | SAME ❌ |
| Isomorphisms | Temperature zones | Confidence layers | SIMILAR ❌ |
| Architecture | 3 zones | 4 layers | SIMILAR ❌ |
| Vocabulary | zone/isograd/metamorphic | stratum/layer/sediment | DIFFERENT ✅ |
| Mechanisms | Border encoding + spacing | Border encoding + spacing | SAME ❌ |

**Score:** 1 out of 5 dimensions different = novelty score of 1/5

**What we found:**
- **Variant B:** 4/5 (lab metaphor—completely fresh)
- **Variant A:** 3/5 (blueprint metaphor—different from library)
- **Variant C:** 1/5 (geology metaphor—same family as library)
- **Variant D:** 0/5 (exact copy—intentional)

---

### Metric 4: Quality Score (0-20 Scale)

**What it means:** Visual quality measured through subjective questions.

**Scoring breakdown:**
- 5 points from Tier 1 questions (mandatory deal-breakers)
- 15 points from Tier 2 questions (standard polish measures)

**Example questions:**
- "What's the first thing that bothers you?" (Tier 1)
- "Would you put your name on this?" (Tier 1)
- "If you squint, does the layout look balanced?" (Tier 2)
- "Do all grays/neutrals feel like the same color family?" (Tier 2)

**What we found:**
- **Variants B & C:** 19/20 (best scores)
- **Variants A & D:** 13/20 (flawed—black box issues)
- **Track 1:** 11/20 (multiple failures)

**Key insight:** The two highest-scoring pages were built by agents who either had optional library access (Variant B) or had enforced creativity rules (Variant C). The library-first copying approach (Variant D) scored lower despite being 2x faster.

---

### Metric 5: Mechanism Count

**What it means:** Design techniques used to organize information visually.

**Examples of mechanisms:**

**Border-Weight Encoding:**
- Use different border thicknesses to show importance
- Example: 4px border = established fact, 3px = probable, 1px = speculative

**Spacing Compression:**
- Reduce spacing between related items to show they belong together
- Example: 8px between related bullets, 32px between different sections

**Background Warmth Gradient:**
- Subtle background color shifts to show progression
- Example: Light cream → warmer tan → warmest beige to represent temperature zones

**The target:** Use at least 8 mechanisms per page to demonstrate compositional flexibility.

**What we found:**
- **Variant D:** 8 mechanisms ✓
- **Variant C:** 7 mechanisms (close)
- **Variants A & B:** 6 mechanisms (below target)

**The problem:** All pages were built with prose-only content (85% essay text, almost no code examples or tables). Many mechanisms require specific content types:

- Can't demonstrate "code block highlighting" if your content has no code
- Can't show "data table patterns" if you have no tabular data

**Verdict:** The low mechanism counts are a **content problem, not a creativity problem**.

---

### Metric 6: Token Compliance

**What it means:** Does the page use CSS values from the design system's approved list?

**What are tokens?** Pre-approved values for basic design variables.

**Examples:**
- **Colors:** `#E83025` (warm red), `#FEF9F5` (cream background)
- **Spacing:** `16px`, `32px`, `40px` (always multiples of 4)
- **Font sizes:** `16px` (base text), `20px` (large text)

**The rule:** ALL colors, spacing, and font sizes should come from the token list. No random values invented on the spot.

**What we found:**
- **Track 1:** Failed—used `#808080` gray (not in palette), `2px` padding (should be 4px multiples)
- **Variants A, B, C, D:** 97-100% compliance ✓

**Why Track 1 failed:** The builder didn't read the rules first (didn't follow "always-load protocol"—the instruction to read the token list and prohibitions before building).

---

### Metric 7: Library Utilization Percentage

**What it means:** What percentage of the final page was built using pre-made library components vs. custom code?

**How it's measured:** By counting how much CSS (styling code) came from library vs. was written from scratch.

**What we found:**
- **Track 1:** 79% library utilization (used 10 component types from library)
- **Variant A:** 0% (skill-only, created everything custom)
- **Variant B:** 0% (weak permission had no effect—same as A)
- **Variant C:** 47% (used library callouts within custom zones)
- **Variant D:** 68% (intentionally copied library pattern)

**The surprising finding:** Variant B (weak permission—"library available if you want") showed 0% utilization, identical to Variant A (skill-only—library completely forbidden).

**What this means:** Soft framing ("you can use this if helpful") had NO behavioral effect. The agent treated it the same as "forbidden."

---

## The Results — What We Learned

### Overall Verdict: CONDITIONAL PASS

**Translation:** The tools work well enough to proceed, but with important warnings.

**What "conditional pass" means:** Like getting a B+ on a test—good overall performance, but with specific areas that need improvement.

---

### Individual Page Results

#### Track 1 (Assembly): INSTANT FAIL

**Critical violations (5 total):**
1. Pure white background on header (forbidden—should be warm cream)
2. Zero padding on main container (required minimum: 32 pixels)
3. 112-132 characters per line (should be 45-80)
4. 5 off-palette colors (used colors not in the approved list)
5. Wrong spacing values (used 2px and 6px—should be multiples of 4)

**Root cause:** Builder didn't read the rules first (didn't follow always-load protocol).

**What this proves:** Assembly approach CAN work (79% library utilization achieved), but execution failed due to skipping instructions.

---

#### Variant A (Skill-Only): CONDITIONAL FAIL

**Strengths:**
- Creative blueprint metaphor (Plan View, Elevation View, Section Cut)
- 3/5 novelty (relatively original)
- Zero soul violations (followed core identity rules)

**Critical violations:**
- Container too wide → 96 characters per line (should be 45-80)
- Massive black callout box dominates page, creates anxiety
- Only used 6 mechanisms (target: 8)

**Time:** 30 minutes

**What this proves:** Skill-only approach produces competent quality but doesn't optimize proportions (container width issues).

---

#### Variant B (Weak Permission): CONDITIONAL PASS

**Strengths:**
- Novel laboratory metaphor (Safety Briefing, Measurement Protocol)
- 4/5 novelty (highest of all creative variants)
- 18/19 programmatic checks passed (best compliance)
- 19/20 quality score (tied for best)

**Potential issue:**
- Container ~940px borderline (might be slightly over 80 CPL)

**Time:** 26 minutes

**What this proves:** BEST overall compliance. Weak permission framing produced more creativity than strict prohibition.

**The paradox:** Making library "optional" led to MORE creativity than "forbidding" it entirely.

---

#### Variant C (Anti-Gravity): FAIL

**Strengths:**
- Elegant metamorphic geology metaphor
- 19/20 quality score (tied for best)
- Zero soul violations

**Critical violations:**
- Container too narrow (~650px—should be 940px)
- Metaphor converged to library (85% similar to OD-004 geological pattern)
- No divergence table found in first 200 log lines

**Time:** 40 minutes (slowest due to extra verification steps)

**What this proves:** Anti-gravity mechanisms FAILED to prevent convergence. Despite strict rules forbidding library access during creative phase, the final design was 85% similar to a library example.

**The controversy:** Team lead found Phase 3.5 gate (the checkpoint that should catch copying) at log line 1,233, but evaluator only read first 200 lines and concluded gate was missing. Verdict: DISPUTED—gate might have worked, but result still converged.

---

#### Variant D (Library-First): FAIL

**Strengths:**
- EXCEPTIONAL visual quality (highest of all 5 pages)
- Geological stratification metaphor creates brilliant narrative progression
- Fast execution (12 minutes)

**Critical violations:**
- Container too narrow (~750px—should be 940px)
- 0/5 novelty (intentional copying)

**Time:** 12 minutes (second-fastest)

**What this proves:** Borrowing from library produces beautiful results 2x faster than from-scratch derivation, but at cost of zero originality.

**Expected result:** This was the control/baseline showing maximum copying.

---

### The Four Hypotheses — What We Predicted vs. What Happened

#### H1: Library constrains novelty

**Prediction:** Skill-only (Variant A) should produce MUCH HIGHER novelty than library-first (Variant D).

**Results:**
- Variant A: 3/5 novelty
- Variant D: 0/5 novelty
- Delta: +3 points

**Verdict: ✅ CONFIRMED**

Library-first copying produces zero novelty (by design). Skill-only produces moderate novelty.

---

#### H2: Anti-gravity preserves novelty

**Prediction:** Anti-gravity enforcement (Variant C) should have novelty ≥ skill-only (Variant A).

**Results:**
- Variant C: 1/5 novelty
- Variant A: 3/5 novelty
- Delta: -2 points (worse!)

**Verdict: ❌ FAILED**

Anti-gravity mechanisms FAILED to prevent convergence. Variant C (strict rules) converged to geology domain, producing LOWER novelty than Variant A (no rules).

**Why?** Even without direct library access, the agent absorbed patterns through indirect references. Other required documents mentioned "OD-004 uses geological strata" and "OD-004 confidence encoding," which primed the agent's thinking.

---

#### H3: Anti-gravity improves quality

**Prediction:** Anti-gravity (Variant C) should have HIGHER visual quality than skill-only (Variant A).

**Results:**
- Variant C: 19/20 quality
- Variant A: 13/20 quality
- Delta: +6 points

**Verdict: ✅ CONFIRMED**

Anti-gravity enforcement produced significantly better visual quality, even though it didn't preserve novelty.

**Key insight:** Quality and novelty are INDEPENDENT. You can have high-quality derivative work (Variant C) or low-quality original work (Variant A).

---

#### H4: Weak permission enables balanced library use

**Prediction:** Weak permission (Variant B—"library available but not required") should lead to 20-40% library utilization (balanced use).

**Results:**
- Variant B: 0% library utilization
- Same as Variant A (skill-only)

**Verdict: ❌ FAILED**

Soft framing had NO effect. Saying "available if helpful" didn't change behavior compared to complete prohibition.

---

### The Anti-Gravity Paradox

**What we expected:** Strict rules preventing library access would force maximum creativity.

**What happened:**
- Variant C (anti-gravity, strict prohibition): **1/5 novelty** (lowest among creative variants)
- Variant B (weak permission, optional library): **4/5 novelty** (highest)

**The pattern:**
- When you **prohibit** something, agents feel pressure to eventually consult it
- When you make it **optional**, agents feel free to skip it entirely

**Real-world analogy:**

Imagine telling a teenager about a controversial book:

- "You absolutely cannot read that book" → they sneak it and read it anyway
- "You can read it if you want, your choice" → they ignore it and never bother

**The lesson:** **Autonomy beats enforcement** for creativity.

When you give agents choice ("available if you want"), they use their judgment and often choose the harder creative path. When you enforce strict prohibition ("absolutely forbidden"), they feel the restriction as pressure and find ways around it (consciously or unconsciously).

---

### Cross-Cutting Findings

#### Finding 1: Container width is THE critical variable

**The problem:** 4 out of 5 pages failed the 940-pixel sweet spot.

**Two failure modes:**

1. **Too wide (Track 1, Variant A):**
   - 1000-1052 pixels wide
   - Results in 96-132 characters per line
   - Causes eyestrain (tracking across super-long lines is exhausting)

2. **Too narrow (Variants C, D):**
   - 650-750 pixels wide
   - Wastes horizontal space
   - Creates cramped feeling

**The winner:** Variant B hit ~940px perfectly.

**Why this matters so much:** Container width was the ONLY issue that affected 80% of pages (4/5). Other issues like pure black elements only affected 2/5 pages.

**The fix needed:** Guidance must be clearer: "Container width MUST be 940-960px at desktop (65-67% of screen width)."

---

#### Finding 2: Pure black breaks soft color schemes

**Who failed:** Variants A and D both used pure black backgrounds on key elements (callout boxes, headers).

**Evaluator feedback:**
- "The black box feels alien to the warm palette"
- "Looks like an error dialog pasted onto an otherwise calm page"
- "Oppressive and crushing"

**Who succeeded:** Variants B and C used warm grays instead of pure black.

**The lesson:** When building a warm, soft palette (cream, tan, warm gray), harsh black stands out as a visual error. It breaks the color temperature family.

**Real-world analogy:** Like putting a neon pink throw pillow on an all-beige couch—it technically adds visual contrast, but it feels wrong because it doesn't belong to the same color family.

---

#### Finding 3: Speed vs. quality trade-off

**Build times:**
- Variant D (library-first): 12 minutes → 13/20 quality
- Variant C (anti-gravity): 40 minutes → 19/20 quality
- Variant B (weak permission): 26 minutes → 19/20 quality
- Variant A (skill-only): 30 minutes → 13/20 quality

**The pattern:** Library-first copying is **2-3x faster** but produces **30% lower quality** (13 vs 19 points).

**Trade-off confirmed:** You can have it fast (copy from library) or good (derive from scratch), but not both.

**Exception:** Variant B achieved high quality (19/20) in moderate time (26 min) by having optional library access but choosing not to use it. This suggests the ideal framing is "available but not pushed."

---

#### Finding 4: Pattern leakage is unavoidable

**The case:** Variant C (anti-gravity) was PROHIBITED from reading library examples during creative phases. But they still converged to the geological domain (same as library example OD-004).

**How did this happen?** Indirect exposure through other required documents:

- `prohibitions.md` mentions: "OD-004 uses 2px borders for confidence encoding" (3 references)
- `mechanism-catalog.md` shows: "OD-004 geological strata with 4px/3px/2px border gradient" (8 references)

**The result:** Even "blind" agents absorb patterns through casual mentions in required reading.

**The lesson:** You cannot FULLY prevent convergence. Even without direct examples, agents pick up vocabulary and structural patterns from related documents.

**Real-world analogy:** Like trying to describe a movie to someone without spoiling it—you might avoid plot details, but just mentioning "it's a time-travel thriller" already primes them with genre expectations.

---

## What All This Means — The Takeaways

### What Worked ✅

**1. Library sufficiency proven (Track 1):**
- 79% library utilization achieved
- 10 component types used successfully
- Demonstrates that pre-made components CAN enable assembly tasks
- **Caveat:** Execution failed due to not reading rules first, but the components themselves are usable

**2. Weak permission approach (Variant B):**
- Highest novelty (4/5)
- Tied-best quality (19/20)
- Zero soul violations
- Optional framing produced MORE creativity than prohibition

**3. Visual quality strong across Track 2:**
- 4/5 pages scored 13+ out of 20 (acceptable)
- 2/5 pages scored 19/20 (excellent)
- Judges said they would ship 4 out of 5 pages to real users

**4. Token compliance high:**
- All Track 2 variants: 97-100% compliance
- Agents successfully used approved colors, spacing, and fonts
- Proves design system vocabulary is learnable

---

### What Failed ❌

**1. Container width control (4/5 pages):**
- THE primary failure mode
- Either too wide (excessive CPL) or too narrow (wasted space)
- Only Variant B hit the sweet spot
- **Root cause:** Guidance unclear OR metaphors conflicted with usability

**2. Anti-gravity convergence (Variant C):**
- 85% overlap with library example OD-004
- Despite strict prohibition, still converged to geological domain
- Phase 3.5 gate (checkpoint) either missing or ineffective
- **Root cause:** Pattern leakage through indirect exposure

**3. Weak permission behavioral effect (Variant B):**
- 0% library utilization (same as skill-only)
- Soft framing ("available if you want") had zero measurable effect
- **Root cause:** Framing too subtle—agent defaulted to skill-only approach

**4. Track 1 always-load protocol (Assembly):**
- Builder didn't read rules first
- Caused 5 critical violations (pure white, zero padding, off-palette colors)
- **Root cause:** Protocol not enforced, just suggested

**5. Content selection inappropriate (all Track 2):**
- 85% prose, 15% structured content (code/tables/diagrams)
- Made 5/9 component families IMPOSSIBLE to test
- All variants scored 22-44% component coverage (target: 67%)
- **Root cause:** Wrong content type for comprehensive testing

---

### What's Uncertain ⚠️

**1. Phase 3.5 gate effectiveness:**
- Log shows gate present at line 1,233 (verified by team lead)
- Evaluator only read first 200 lines, concluded "missing"
- Gate scored 4.5/5 divergence dimensions (agent's own assessment)
- Final design still 85% similar to library example
- **Question:** Did the gate work correctly but allow same-family convergence? Or did it fail?

**2. Component inventory completeness:**
- 56% of components UNTESTED (19 out of 34)
- Prose-only content prevented testing code blocks, tables, file trees, decision matrices
- **Question:** Are untested components actually usable? Or will they fail when tested?

---

### The Three Critical Gaps

These are the biggest problems that need fixing:

#### GAP-001: Anti-Gravity R6 Enforcement Failure

**What it means:** The rule that says "if your metaphor matches library too closely, you must start over" didn't block Variant C from converging to geology.

**Severity:** CRITICAL

**What went wrong:** Either:
- (a) Gate not enforced (agent skipped it)
- (b) Gate not blocking (just advisory, agent could ignore)
- (c) Gate passed incorrectly (accepted same-family convergence)

**The fix:** Make the gate BLOCKING—if overlap >40% and <3/5 dimensions different, agent MUST regenerate, no "justify convergence" option.

---

#### GAP-002: Prose-Only Content Limits Component Testing

**What it means:** The article was 85% prose with no code blocks, tables, or diagrams. This made 5 out of 9 component families impossible to test.

**Severity:** CRITICAL

**Example:** You can't demonstrate the "code block" component if your content has no code to display. You can't show the "data table" component if you have no data to put in rows and columns.

**The fix:** Phase D Round 2 needs **mixed content** (50% prose, 50% code/tables/diagrams) so all component types can be properly tested.

---

#### GAP-003: Mechanism Count Ceiling for Prose Content

**What it means:** The 18 mechanisms include 4 that require non-prose content (code blocks, tables, file trees, decision matrices). Prose-only content has an effective ceiling of ~14 mechanisms.

**Severity:** CRITICAL

**What we found:** Variants A and B scored 6/18 mechanisms (33%). But if we count only prose-compatible mechanisms, they scored 6/14 (43%)—much better percentage.

**The fix:** Either:
- Use mixed content in Round 2 (so all 18 mechanisms are testable), OR
- Adjust targets: prose-only ≥6 mechanisms, mixed content ≥8 mechanisms

---

## What Happens Next — Recommended Actions

### Immediate Actions (Before Phase D Round 2)

**1. Read full Variant C log (lines 200-80,000):**
- Verify Phase 3.5 gate actually present
- Check divergence table scoring (4.5/5 claimed by agent)
- Determine if gate passed correctly or failed

**2. Fix container width guidance:**
- Add to design system: "Container MUST be 940-960px at desktop"
- Explain WHY (65-67% viewport = 45-80 CPL at 16px font)
- Make it a guardrail with automated checking

**3. Create mixed content for Phase D Round 2:**
- 50% prose (essay text)
- 25% code (4 code examples)
- 15% data (3 tables)
- 10% structure (file trees, decision matrices)
- Target: Test 7/9 component families (up from current 4/9)

**4. Strengthen always-load enforcement:**
- Add to instructions: "BEFORE building, you MUST read prohibitions.md and tokens.css"
- Make this a blocking requirement with verification step
- Track 1 failures happened because this wasn't enforced

---

### Phase D Round 2 (Validation Run)

**Purpose:** Test fixes before proceeding to Phase E (migration to production)

**Changes to test:**

1. **Mixed content** (fixes GAP-002)
   - Should achieve 67% component coverage (target)
   - Should enable 8 mechanisms (up from 6)

2. **Stronger weak permission framing** (tests GAP-005)
   - Change from "available if you want" to "RECOMMENDED for quality validation"
   - Should produce 20-40% library utilization (instead of 0%)

3. **Blocking Phase 3.5 gate** (fixes GAP-001)
   - No "justify convergence" option
   - If <3/5 divergence, MUST regenerate
   - Track success: Variant C-V2 should score 3+/5 novelty

4. **Container width verification** (fixes GAP-004)
   - Add automated check before page completion
   - Block completion if <940px or >960px

**Expected timeline:** 2 hours (1 content-preparer + 5 builders + 4 evaluators)

**Success criteria:**
- All Track 2 variants achieve ≥940px container ✓
- Component coverage ≥67% (6/9 families) ✓
- Variant C-V2 novelty ≥3/5 (no convergence) ✓
- Mechanism count ≥8 for mixed content ✓

---

### After Phase D Round 2 → Phase E Migration

**What Phase E is:** Migrating the design system from experimental status to production use.

**What Phase D data enables:**

**1. Container width standards:**
- Desktop: 940-960px (65-67% viewport)
- Tablet: 640-680px (83-88% viewport)
- Mobile: 335-343px (89-91% viewport)

**2. Content type budgets:**
- Prose-dominant: 30-45 min build time, 6 mechanisms, 4/9 component families
- Mixed content: 45-60 min build time, 8 mechanisms, 7/9 component families

**3. Track classification decision tree:**

```
Does content need compositional structure?
├─ NO → Track 1 Assembly (use library components directly)
└─ YES → Does metaphor improve comprehension?
   ├─ NO → Track 1 Assembly (adding components improves presentation)
   └─ YES → Track 2 Compositional (metaphor chosen because of content difficulty)
```

**4. Quality gates:**
- Pre-build: Content type classification (prose/mixed/visual)
- Post-build: Programmatic audit (19 binary checks)
- Post-audit: Perceptual audit (5 mandatory questions)
- Pre-commit: Container width verification

---

## Important Context and Boundaries

### What This Experiment DOES Prove

✅ **The tools work for their intended purpose:**
- Library components enable assembly tasks (Track 1 demonstrated 79% utilization)
- Creative process produces compositional layouts from content analysis (Track 2 worked)
- Design system vocabulary is learnable (97-100% token compliance)

✅ **For this specific content type (technical documentation):**
- Metaphor derivation improves presentation quality
- Library has sufficient component variety for 41% of inventory tested
- Rules are followable when properly enforced

✅ **At tested screen sizes (1440px desktop + 768px tablet):**
- Responsive design works gracefully
- Automated checking catches violations
- Visual quality measurable through structured questions

---

### What This Experiment DOES NOT Prove

❌ **Universal design correctness:**
- Sharp edges (border-radius: 0) are a CHOICE for this design system, not objective truth
- Warm color palette is a PREFERENCE, not universal requirement
- This tests fitness for THIS design philosophy, not all possible approaches

❌ **Library works for all content types:**
- **NOT tested:** Visual-first content (dashboards, galleries)
- **NOT tested:** Marketing content (landing pages, promotional)
- **NOT tested:** Mobile-first content (phone screens <768px)
- **ONLY tested:** Dense technical documentation

❌ **Complete component inventory:**
- 56% of components UNTESTED (19 out of 34)
- Prose-only content prevented testing many component types
- Need mixed content to validate full inventory

❌ **Anti-gravity mechanisms fully validated:**
- Phase 3.5 gate presence verified but effectiveness disputed
- Pattern leakage creates 20-40% baseline convergence
- Unknown if perfect isolation is achievable

---

### The Epistemological Boundary

**What "epistemological boundary" means:** The line between what we know and what we don't know based on this evidence.

**Inside the boundary (HIGH CONFIDENCE):**
- Design system works for dense technical documentation
- At 1440px and 768px screen sizes
- With this specific design philosophy (sharp edges, warm palette, metaphor-driven)

**Outside the boundary (ZERO CONFIDENCE):**
- Design system works for marketing pages
- At mobile phone sizes (<768px)
- With different design philosophies (rounded corners, cool colors, minimalist)

**Real-world analogy:**

If you test a recipe for chocolate chip cookies using:
- All-purpose flour
- Dark chocolate chips
- 350°F oven
- 12-minute bake time

You can say: "This recipe works for chocolate chip cookies with these ingredients at this temperature."

You CANNOT say: "This recipe works for all cookies" or "This recipe works at any temperature" or "You can substitute ingredients freely."

**The lesson:** Use this data within its proven boundaries. Don't extrapolate beyond them.

---

## Key Terms Reference — Quick Lookup

This section provides one-sentence definitions of all jargon used in this document.

### Core Concepts

**Agent:** An AI program given a specific task and instructions (like an AI worker).

**Anti-gravity:** Rules designed to prevent AI from unconsciously copying library examples (metaphor: library exerts gravitational pull).

**Assembly (Track 1):** Using pre-made components like LEGO bricks to build a page (no creative derivation).

**Component:** A pre-made webpage element (callout box, table, header, footer).

**Compositional derivation (Track 2):** Creating a custom design from scratch by analyzing content and deriving a metaphor.

**Container width:** How wide the main content area is on screen (measured in pixels).

**CPL (Characters Per Line):** How many letters fit on one line before wrapping (sweet spot: 45-80).

**Design system:** A collection of reusable patterns + rules for using them (like a cookbook for visual design).

**Divergence:** How different a new design is from library examples (measured across 5 dimensions).

**Library:** The collection of 15 example webpages that AI could potentially copy from.

**Mechanism:** A design technique that encodes meaning visually (border encoding, spacing compression).

**Metaphor:** A creative visual structure that helps readers understand content (geological layers, blueprints, lab equipment).

**Novelty score:** 0-5 scale measuring how original a metaphor is compared to library.

**Phase 3.5 gate:** Mandatory checkpoint where AI must prove its design is different from library before building.

**Quality score:** 0-20 scale measuring visual quality through subjective questions.

**Token:** A basic design variable (color, spacing value, font size) from the approved list.

**Variant:** One of four creative approaches (A, B, C, D) with different library access rules.

---

### Process Terms

**Always-load protocol:** The instruction to read rules and token list BEFORE building (Track 1 failed this).

**Evaluator:** An AI agent that scores pages on quality, creativity, and rule-following.

**Programmatic audit:** Automated checking of 19 yes/no rules (container width, colors, spacing).

**Perceptual audit:** Subjective quality checking through 48 questions (balance, readability, flow).

**Wall time:** Real-world clock time from start to finish (~55 minutes for this experiment).

**Wave:** A group of agents working in parallel (Wave 1 = 5 builders, Wave 2 = 4 evaluators).

---

### Scoring Terms

**Component coverage:** Percentage of component types used (target: 67% = 6 out of 9 families).

**Convergence:** How similar a design is to library examples (0-20% = novel, 60-100% = copied).

**Guardrail:** A minimum/maximum threshold rule (container ≥940px, padding ≥32px).

**Library utilization:** Percentage of CSS code copied from library vs. written from scratch.

**Prohibition:** An absolute NEVER rule (never use pure white, never use shadows).

**Soul violation:** Breaking core identity constraints (using rounded corners, shadows, pure black/white).

**Token compliance:** Percentage of colors/spacing/fonts that come from the approved token list.

---

## Final Summary — The Bottom Line

### What We Tested

An experiment with 5 AI agents building the same webpage with different approaches:

- **Track 1:** Assemble pre-made components (like LEGO)
- **Variant A:** Create from scratch, no library access
- **Variant B:** Create from scratch, library optional
- **Variant C:** Create from scratch, library strictly forbidden with enforcement
- **Variant D:** Copy from library intentionally (baseline)

### What We Found

**Successes:**
- Library components ARE usable (79% utilization achieved)
- Creative process produces quality designs (19/20 scores)
- Weak permission ("library optional") produced MORE creativity than strict prohibition

**Failures:**
- Container width THE critical problem (4/5 pages failed)
- Anti-gravity mechanisms failed to prevent copying (85% convergence despite rules)
- Prose-only content limited testing to 41% of components

**Paradoxes:**
- Prohibition led to MORE copying (1/5 novelty)
- Optional framing led to MORE creativity (4/5 novelty)
- Copying produced BEST visual quality (Variant D highest score)

### What It Means

**The design system works** for dense technical documentation at desktop/tablet sizes, BUT:

- Container width guidance needs fixing (4/5 pages violated sweet spot)
- Anti-gravity needs stronger enforcement (current rules ineffective)
- Component inventory needs testing with mixed content (code + tables + diagrams)
- Track 1 needs forced always-load protocol (can't skip reading rules)

### What's Next

**Immediate:**
1. Fix container width guidance (940-960px requirement)
2. Create mixed content (50% prose, 50% structured)
3. Strengthen anti-gravity gate (make it blocking, not advisory)

**Phase D Round 2:**
- Test fixes with new content
- Validate component coverage improves to 67%
- Verify anti-gravity prevents convergence

**After validation:**
- Proceed to Phase E (production migration)
- Apply to similar content (technical docs, conceptual explorations)
- DO NOT apply to dissimilar content (marketing, mobile, visual-first)

---

## The Real-World Takeaway

If you're using AI tools for design work, this experiment suggests:

**For speed:** Give examples and expect copying (2-3x faster, but zero originality)

**For creativity:** Give examples but make them optional (autonomy beats prohibition)

**For quality:** Always specify constraints explicitly (colors, widths, spacing—don't make AI guess)

**For compliance:** Make rules blocking, not advisory (Track 1 failed because rules were suggestions)

**The paradox:** The more you restrict AI, the less creative it becomes. The more freedom you give (with clear guardrails), the better it performs.

---

**END OF EXPLANATION**

Total length: 1,206 lines
Target audience: Someone with zero background in this project
Jargon policy: Every term defined before or as it's used
Structure: Background → Test setup → Scoring → Results → Meaning → Next steps
