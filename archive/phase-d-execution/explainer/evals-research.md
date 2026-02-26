# Phase D Evaluations — Plain-Language Summary

**What you're reading:** The judges' scorecards from an experiment where we gave the SAME article to 5 different AI agents with different instructions for how creative they could be.

---

## What This Check Was

We tested 5 different approaches to see what happens when you give AI agents more or less creative freedom:

- **Track 1** ("Just use our component library") — like building with LEGO blocks from a kit
- **Variant A** ("Use our creative process, but NO library") — like designing from scratch with basic rules
- **Variant B** ("Library is there if you want it") — like having LEGO blocks available but optional
- **Variant C** ("Be creative but we'll check you didn't copy") — like designing from scratch with extra anti-plagiarism rules
- **Variant D** ("Copy directly from our best examples") — like tracing someone else's work

After they built their pages, we had DIFFERENT judges evaluate them — like a panel of judges at a design competition who don't know which contestant created which entry.

---

## 1. The Robot Grammar Checker (Programmatic Audit)

### What This Check Was
This is like running spell-check and grammar-check on each page. A program automatically measured 19 specific rules to see if each page followed the design system's requirements — things like "all corners must be sharp," "text must be readable," "spacing must follow the 4-pixel grid."

Think of it like a car inspection: checking tire pressure, brake pad thickness, fluid levels. Binary pass/fail for each measurement.

### The 19 Checks

The audit checked 6 "soul" rules (the non-negotiables), 8 "guardrails" (readability floors), and 3 "token" rules (using the design palette correctly).

**Soul rules** = things that define the visual identity:
- Sharp corners everywhere (no rounded edges)
- Flat surfaces (no shadows)
- Warm color palette only (no pure white or black)
- Specific fonts only
- No 2-pixel borders (they look fuzzy)

**Guardrail rules** = readability minimums:
- Container width at least 940 pixels on desktop
- At least 32 pixels of padding around content
- At least 16 pixels between labels and headings
- Lines of text between 45-80 characters (not too wide)
- Line height at least 1.5× the font size
- At least 48 pixels between major sections

**Token rules** = using the design system's variables:
- All colors from the defined palette
- All spacing in multiples of 4 pixels
- All fonts from the approved trinity

### The Key Findings

**Track 1 (Component Assembly) FAILED BADLY:**
- **11/19 checks passed** (58%)
- **5 critical violations:** pure white header, zero padding, text lines too wide (112-132 characters vs 45-80 max), wrong colors, wrong spacing
- This page was supposed to be the EASIEST (just assembling pre-built components) but had the MOST errors
- **Root cause:** The builder didn't even read the design rules before starting

**Variants A and B (Creative Freedom) MOSTLY PASSED:**
- **Variant A:** 15/19 checks (79%) — failed only on text width (96 characters)
- **Variant B:** 18/19 checks (95%) — borderline on text width, otherwise perfect
- Better compliance than Track 1 despite building from scratch!

**Variants C and D (Anti-Gravity Experiments) HAD ONE PROBLEM:**
- **Variant C:** 17/19 checks (89%) — container too narrow (~650px vs 940px minimum)
- **Variant D:** 18/19 checks (95%) — also container too narrow (~750px vs 940px minimum)
- Both failed the SAME rule: container width

### The Verdicts

| Page | Checks Passed | Critical Issues | Verdict |
|------|--------------|-----------------|---------|
| Track 1 Assembly | 11/19 (58%) | 5 violations | **INSTANT FAIL** |
| Variant A (Skill-Only) | 15/19 (79%) | Text too wide | **CONDITIONAL FAIL** |
| Variant B (Weak Permission) | 18/19 (95%) | Borderline text width | **CONDITIONAL PASS** ✅ |
| Variant C (Anti-Gravity) | 17/19 (89%) | Container too narrow | **FAIL** |
| Variant D (Library-First) | 18/19 (95%) | Container too narrow | **FAIL** |

**BEST:** Variant B (weak permission) — 95% compliance

**WORST:** Track 1 (component assembly) — 58% compliance

### The Drama

**THE BIG SURPRISE:** Track 1 was supposed to be foolproof (just use the pre-built components) but had the WORST compliance. Why? The builder never loaded the design rules file first. It's like trying to assemble IKEA furniture without reading the instructions.

**THE CONTAINER WIDTH PLAGUE:** 4 out of 5 pages violated the container width rule in different ways:
- Track 1 and Variant A: TOO WIDE (1000-1050px) → text lines got too long → readability failure
- Variant C and D: TOO NARROW (600-800px) → violated the minimum width → wasted screen space

Only Variant B hit the sweet spot (~940px).

**THE METAPHOR TRAP:** Variants C and D both used geological metaphors (core sample, sediment layers) that LOOKED beautiful but created narrow containers. The designers prioritized the metaphor's aesthetic over the readability requirement. This is exactly the tension the skill is supposed to prevent: "The metaphor shapes experience; the guardrails prevent it from breaking experience."

### What We Still Don't Know

- **Why did Track 1 fail so badly?** The builder was given the easiest task but produced the most violations. This suggests a workflow problem — maybe the builder skipped reading the design rules entirely.

- **Can the container width issue be fixed?** All the narrow containers (C and D) were driven by metaphor aesthetics. Can you widen them to 940px without destroying the metaphor?

---

## 2. The Expert Judge (Visual Judge A)

### What This Check Was

This is like having a professional design critic evaluate each page BY LOOKING AT IT, not running automated tests. This judge knew the design system's rules (sharp edges, warm colors, etc.) but didn't know which page came from which experiment.

The judge used a 23-question checklist focused on PERCEPTUAL quality:
- Does anything immediately bother you?
- Is any text uncomfortable to read?
- Does it feel like one designer made it?
- Where does your eye go first?
- Would you ship this?

### The Key Findings

**RANKING (Best to Worst):**

1. **Page A (Track 1) — CLEAN AND BALANCED**
   - Score: 20/20 ✅
   - "Clean, balanced, cohesive. Only issue: black code blocks feel heavy."
   - Would ship: YES

2. **Page C (Variant C) — CALM AND SPACIOUS**
   - Score: 19/20
   - "Calm, spacious, confident. Only issue: beige callouts too subtle."
   - Would ship: YES

3. **Page E (Variant B) — STRUCTURED AND ENGAGING**
   - Score: 19/20
   - "Structured, clear, engaging. Only issue: metric boxes too dense."
   - Would ship: YES

4. **Page B (Variant A) — RUINED BY BLACK BOX**
   - Score: 13/20 ⚠️
   - "Good bones, but massive black callout box dominates and breaks flow."
   - Would ship: YES WITH RESERVATIONS

5. **Page D (Variant D) — CRUSHED BY DARK HEADER**
   - Score: 13/20 ⚠️
   - "Geological layers metaphor is BRILLIANT, but oppressive black banner crushes the top."
   - Would ship: YES WITH RESERVATIONS

### The Verdicts

**THE BLACK ELEMENT PROBLEM:** Pages B and D both used pure black backgrounds (violating the warm color palette) that created "visual weight problems":
- Page B: Massive black callout box felt like "a warning label or error state"
- Page D: Black banner header felt "oppressive" and "like a barrier"

The judge said: "The black-element problem (code blocks on A, callout on B, header on D) is the single largest quality differentiator across this set."

**METAPHOR QUALITY VS. EXECUTION QUALITY:**
- Page D had the BEST metaphor ("geological layering exceptional," "transition labels innovative") but WORST execution (black header)
- Page A had NO metaphor (just functional assembly) but cleanest execution

**COMMON STRENGTHS:**
- Sharp edges worked beautifully throughout — felt intentional, not broken
- Warm editorial palette created approachable professional tone
- All pages felt like they came from the same design team

### The Drama

**THE IRONY:** The judge ranked Page A (Track 1 component assembly) as #1 with a perfect 20/20 score, but the PROGRAMMATIC audit ranked it DEAD LAST with 5 critical violations. Why the disagreement?

**Answer:** The programmatic audit caught violations that look fine to the human eye (pure white header, text 96 characters instead of 80 max, 11-pixel font instead of 12). The human judge focused on overall visual harmony and didn't notice these technical violations.

**THE GEOLOGICAL TRAGEDY:** Page D (Variant D) had "the HIGHEST visual quality of all 5 pages" with "geological layering creating exceptional narrative progression." BUT it failed on execution because the black banner "crushes the top of the page" and "creates immediate anxiety."

The judge's verdict: "The metaphor shapes experience; the guardrails prevent it from breaking experience." The designer got so focused on the metaphor they violated both soul constraints (pure black) and perceptual quality (oppressive weight).

### What We Still Don't Know

Why did Page A score 20/20 with the visual judge but fail 5 automated checks? This reveals a gap: human perception vs. programmatic enforcement. The page LOOKS good but violates technical rules.

---

## 3. The Fresh-Eyes Judge (Visual Judge B)

### What This Check Was

This is like having someone who's NEVER seen the design system evaluate the pages purely on gut reaction and readability. No knowledge of the rules about sharp edges or warm colors — just "does this look good and work well?"

Same 23-question checklist as Judge A, but from a completely uninformed perspective.

### The Key Findings

**RANKING (Best to Worst):**

1. **Page B (Variant A — Blueprint Metaphor) — DISTINCTIVE**
   - "Blueprint metaphor is accessible and distinctive without being exclusive"
   - "Plan View, Elevation View, Section Cut" labels added conceptual value
   - The architectural drawing metaphor helped comprehension without requiring specialized knowledge

2. **Page D (Variant D — Geological Layers) — CLEAR STRUCTURE**
   - "Bedrock → Strata → Topsoil → Atmosphere progression creates clear layers"
   - "Layer labels provide instant confidence calibration"
   - Layer labels like "Bedrock — Established" and "Strata — Probable" communicated certainty levels brilliantly

3. **Page E (Variant B — Lab Protocol) — EFFECTIVE BUT DISTRACTING**
   - "Lab protocol metaphor is effective"
   - "Too much inline code (backticks for numbers) creates visual stuttering"
   - Using monospace font for statistics like `41%` felt jarring in prose

4. **Page A (Track 1) — FUNCTIONAL BUT BLAND**
   - "Functional and solid, but lacks personality of others"
   - The comparison table created visual fatigue
   - Clean but no memorable metaphor

5. **Page C (Variant C — Metamorphic Geology) — TOO ACADEMIC**
   - "Metaphor is elegant but potentially alienating"
   - Geology terminology like "Diagenetic," "Chlorite zone," "Biotite zone" requires specialized knowledge
   - Would need a glossary for general audience

### The Verdicts

**ALL 5 PAGES WOULD SHIP:**
- Page A: YES (with table concern)
- Page B: YES
- Page C: YES WITH RESERVATIONS (metaphor accessibility)
- Page D: YES
- Page E: YES

Fresh-eyes judge found all 5 pages met perceptual minimums. "This is a choice between good options, not filtering out bad ones."

### The Drama

**THE DISAGREEMENT:** Fresh-eyes judge ranked pages COMPLETELY DIFFERENTLY than expert judge:

| Page | Expert Judge (A) | Fresh-Eyes Judge (B) | Delta |
|------|------------------|---------------------|-------|
| Page A (Track 1) | #1 (20/20) | #4 (functional) | -3 ⬇️ |
| Page B (Variant A) | #4 (13/20) | #1 (distinctive) | +3 ⬆️ |
| Page C (Variant C) | #2 (19/20) | #5 (too academic) | -3 ⬇️ |
| Page D (Variant D) | #5 (13/20) | #2 (clear structure) | +3 ⬆️ |
| Page E (Variant B) | #3 (19/20) | #3 (effective) | 0 |

**THE PATTERN:** Expert judge penalized black elements (Pages B and D dropped to bottom). Fresh-eyes judge LOVED the strong metaphors (Pages B and D rose to top) and didn't care about the black backgrounds because they didn't know about the warm palette soul constraint.

**THE METAPHOR PREFERENCE:** Fresh-eyes judge explicitly preferred pages with strong metaphors:
- Blueprint metaphor (#1): "Adds conceptual value without requiring specialized knowledge"
- Geological layers (#2): "Instant confidence calibration"
- Lab protocol (#3): "Measurement labels provide scannable structure"
- Plain functional (#4): "Lacks personality"
- Metamorphic geology (#5): "Too clever, potentially exclusive"

### What We Still Don't Know

**The accessibility question:** Fresh-eyes judge worried that Page C's geology terminology ("Diagenetic," "Chlorite zone") would alienate readers. But is this ACTUALLY a problem? Would readers understand from context, or would they bounce?

---

## 4. The Process Police (Integration Audit)

### What This Check Was

This auditor checked whether each builder FOLLOWED THE INSTRUCTIONS for their experiment variant. Think of it like checking if students followed the essay prompt, not grading the essay quality.

12 specific criteria (labeled PD-01 through PD-12):
- Did they use the library when they should?
- Did they follow the phase sequence (read this first, then that)?
- Did they exercise enough different components?
- Did they create a unique metaphor or copy from examples?

### The Key Findings

**TRACK 1 (ASSEMBLY) — PERFECT PROCESS:**
- **Met:** 8/8 applicable criteria (100%) ✅
- Used library components: 79% (just under 80% target but acceptable)
- Used 8/9 component families
- All components worked correctly
- **HOWEVER:** Failed programmatic checks because builder didn't read design rules first

**VARIANT A (SKILL-ONLY) — HALF SUCCESS:**
- **Met:** 6/12 criteria (50%)
- Used 0% library (expected — skill-only means no library access)
- Created novel blueprint metaphor (3/5 novelty score)
- **FAILED:** Only used 6/18 mechanisms (needed 8), only 2/9 component families (needed 6)
- Why so low? Content was 85% prose — no code blocks, no tables to demonstrate components

**VARIANT B (WEAK PERMISSION) — BASICALLY SAME AS VARIANT A:**
- **Met:** 5/12 criteria (41%)
- Used 0% library despite library being "available"
- Created HIGHLY novel lab metaphor (4/5 novelty score — best novelty!)
- **FAILED:** Same issues as Variant A (only 6 mechanisms, only 4/9 components)
- **BIG FINDING:** "Available but not required" had ZERO effect — builder ignored library entirely

**VARIANT C (ANTI-GRAVITY) — CRITICAL FAILURE:**
- **Met:** 3/12 criteria (25%) ⚠️
- Used 47% library (moderate)
- Created geological metaphor but it matched the library's geological example
- **FAILED:** Converged to the library's geological pattern (85% overlap, only 1/5 dimensions different)
- **CRITICAL ISSUE:** Should have triggered "divergence mandate" requiring builder to either justify convergence or start over — but no evidence of this check happening

**VARIANT D (LIBRARY-FIRST) — INTENTIONAL COPYING:**
- **Met:** 6/12 criteria (50%)
- Used 68% library
- Copied geological pattern directly (0/5 novelty — exact library match)
- **EXPECTED:** This variant was SUPPOSED to copy — testing what happens with maximum library exposure

### The Verdicts

**THE PROSE-ONLY PROBLEM:** All creative variants (A, B, C, D) failed component coverage tests because content was 85% prose text with no code examples, no tables, no diagrams. You can't test "code block component" if the content has no code!

Target: Use 6/9 component families (67%)
Reality: Used 2-4/9 families (22-44%)

This is like testing a car's towing capacity without ever hooking up a trailer.

**THE MECHANISM CEILING:** Creative variants hit 6-7 mechanisms (out of 8 target) consistently. Why? Same issue — 4 mechanisms require specific content:
- Code block mechanism: needs code examples
- Table mechanism: needs tabular data
- File tree mechanism: needs directory structures
- Decision matrix mechanism: needs comparison grids

Prose-only content can't use these mechanisms.

**THE WEAK PERMISSION PARADOX:** Variant B was told "library is available but not required." Expected outcome: maybe 20-40% library usage. Actual: 0% (ignored library completely, same as skill-only variant). The framing had NO effect.

**THE ANTI-GRAVITY FAILURE:** Variant C was supposed to have the STRONGEST anti-copying enforcement but produced the SECOND-MOST library-like result (85% overlap with existing geological example). Only Variant D (intentional copying baseline) was more similar. This is the experiment's most critical failure.

### The Drama

**THE EVALUATION ERROR:** One evaluator only read the first 200 lines of Variant C's 80,000-line work log and concluded "anti-gravity failed, no divergence check happened." But the team lead later verified the divergence check IS present at line 1233 — the evaluator just stopped reading too early!

This is like a judge at a talent competition leaving after 30 seconds and saying "they didn't perform" when the performance happened in minute 2.

**THE CONTENT MISTAKE:** Every single Track 2 variant failed component coverage because experimenters chose prose-heavy content. This is a research design flaw, not a builder failure. It's like testing 5 cars' towing capacity using a course with no trailers.

### What We Still Don't Know

**Why did Variant C converge to geological metaphor?** Integration auditor found 85% overlap with library's geological example but evidence of the "divergence gate" is disputed (one auditor said it's missing, team lead says it exists at line 1233). Need to verify what ACTUALLY happened:
- Did the check happen?
- If yes, what was the justification for accepting convergence?
- If no, was it skipped by accident or by design?

---

## 5. The Side-by-Side Comparison

### What This Check Was

This analyst looked at all 5 pages TOGETHER to find patterns, test hypotheses, and rank outcomes. Like comparing all contestants' performances after the competition ends.

They tested 4 specific hypotheses:
- **H1:** Does library access reduce novelty?
- **H2:** Does anti-copying enforcement preserve novelty?
- **H3:** Does anti-copying enforcement improve quality?
- **H4:** Is weak permission insufficient?

### The Key Findings

**NOVELTY SCORES (0-5 scale, 5 = most original):**
- Variant B (Weak Permission): **4/5** — Scientific lab metaphor ✅
- Variant A (Skill-Only): **3/5** — Blueprint metaphor
- Variant C (Anti-Gravity): **1/5** — Geological metamorphism (same domain as library example)
- Variant D (Library-First): **0/5** — Exact copy of library example

**QUALITY SCORES (out of 20, from visual judges):**
- Variant B (Weak Permission): **19/20** ✅
- Variant C (Anti-Gravity): **19/20**
- Variant A (Skill-Only): **13/20**
- Variant D (Library-First): **13/20**

**TIME TO COMPLETE:**
- Variant D (Library-First): **37 minutes** ⚡
- Variant C (Anti-Gravity): **78 minutes**
- Variant B (Weak Permission): **86 minutes**
- Variant A (Skill-Only): **117 minutes**

### The Hypothesis Results

**H1: Library constrains novelty** → ✅ **CONFIRMED**
- Variant A (no library): 3/5 novelty
- Variant D (library first): 0/5 novelty
- Delta: +3 points for creative freedom
- Conclusion: Early library exposure creates exact copying

**H2: Anti-gravity preserves novelty** → ❌ **REJECTED**
- Variant C (anti-gravity): 1/5 novelty
- Variant A (skill-only): 3/5 novelty
- Delta: -2 points (WORSE with anti-gravity!)
- Conclusion: Anti-copying enforcement FAILED — produced LESS novelty than skill-only

**H3: Anti-gravity improves quality** → ✅ **CONFIRMED**
- Variant C (anti-gravity): 19/20 quality
- Variant A (skill-only): 13/20 quality
- Delta: +6 points quality improvement
- Conclusion: Anti-gravity enforcement produced better perceptual quality even though novelty was low

**H4: Weak permission insufficient** → ❌ **REJECTED**
- Variant C (strong anti-gravity): 1/5 novelty
- Variant B (weak permission): 4/5 novelty
- Delta: +3 points for WEAKER constraint!
- Conclusion: "Available but not required" produced MORE novelty than "prohibited then gated"

### The Verdicts

**THE WINNER:** Variant B (Weak Permission)
- HIGHEST novelty (4/5)
- HIGHEST quality (19/20 tied with C)
- 0% library usage (chose creative path)
- ZERO soul violations (no black elements)
- **Conclusion:** "Library available but not required" may be the OPTIMAL framing

**THE PARADOXES:**

**Paradox 1 — Anti-Gravity Quality ≠ Novelty:**
- Variant C had HIGH quality (19/20) but LOW novelty (1/5)
- Produced better execution than skill-only but LESS original metaphor
- Why? Anti-gravity enforcement improved rigor but didn't prevent domain convergence

**Paradox 2 — Weak Permission > Strong Enforcement:**
- Variant B (soft framing) produced MORE novelty than Variant C (hard rules)
- Why? Soft framing removed urgency to consult library. Hard prohibition created psychological scarcity — when library opened, convergence pressure increased.

**THE TIME-QUALITY TRADE-OFF:**
- Library-first (D): 37 min, quality 13/20 (fast but low quality)
- Anti-gravity (C): 78 min, quality 19/20 (2x time, 46% better quality)
- Skill-only (A): 117 min, quality 13/20 (slowest AND low quality)

### The Drama

**THE ANTI-GRAVITY FAILURE:** The experiment's centerpiece mechanism failed its primary goal. Variant C was supposed to preserve novelty through strict anti-copying rules but produced the SECOND-LEAST original result (only beating the intentional copying baseline).

Possible causes:
1. Divergence check wasn't blocking (just advisory)
2. Indirect library exposure through rule documents that cite examples
3. Content naturally led to geological vocabulary
4. Check happened but accepted weak justification

**THE WEAK PERMISSION SURPRISE:** The "control" condition (Variant B — library available but not emphasized) produced the BEST results across novelty, quality, and soul compliance. This was unexpected — researchers thought weak framing would be insufficient. Instead it became the winner.

**THE BLACK ELEMENT PLAGUE:** Variants A and D both used pure black backgrounds violating the warm color palette. Variants B and C avoided this. Why? Hypothesis: Both B and C emphasized identity constraints more heavily than process instructions. Strong constraint framing prevents soul violations.

### What We Still Don't Know

**The convergence mystery:** Why did Variant C converge to geological domain despite anti-copying enforcement? Three possible answers:
1. Rules cited the geological example by name → priming effect
2. Content vocabulary naturally suggests geology ("layers," "transformation," "threshold")
3. Divergence check accepted "same family, different species" logic (metamorphic vs sedimentary geology)

Need full investigation to determine root cause.

---

## 6. The Anti-Plagiarism Investigation

### What This Check Was

This was a DEEP DIVE into Variant C specifically to verify whether the anti-copying mechanisms actually worked. Think of it like a plagiarism investigation for a student's essay.

The mechanisms being tested:
- **R1:** Case studies prohibited during early creative work
- **R5:** Must complete phases in strict order
- **R6:** If your work matches existing examples, justify why or start over

### The Key Findings

**R1 (Phase-Gated Access) — ✅ WORKING:**
- Evidence: First 200 lines of work log show case studies NOT accessed during creative phases
- Builder acknowledged prohibition: "I MUST NOT read case-studies/ during Phases 0-3. Violation invalidates the entire derivation."
- **VALIDATED for early phases** (couldn't verify later phases — log truncated)

**R5 (Sequential Phases) — ✅ WORKING:**
- Evidence: Builder completed Phase 0 → Phase 1 in correct sequence
- Each sub-phase completed in order
- **VALIDATED for early phases** (couldn't verify full sequence — log truncated)

**R6 (Divergence Mandate) — ❌ FAILED:**
- Variant C metaphor: Metamorphic geology (85% overlap with library's geological example)
- Divergence check: 1/5 dimensions different (below 3/5 threshold)
- Required outcome: Divergence table OR regeneration
- **Evidence: DIVERGENCE TABLE NOT FOUND** in available log
- **CRITICAL FAILURE:** Builder produced near-copy without documented justification

### The Verdicts

**PARTIAL SUCCESS:**
- 2/3 mechanisms working (R1, R5)
- 1/3 mechanisms failed (R6)
- Overall: anti-copying enforcement PARTIALLY effective

**THE INDIRECT EXPOSURE PROBLEM:**
The investigation found evidence of "priming" even before case studies access. How?

The rule documents cite examples by name:
- Prohibitions document: "OD-004 uses 2px borders as part of confidence-encoding system"
- Mechanisms catalog: "OD-004 (confidence strata: 4px=established, 3px=probable)"

A builder reading these documents learns:
1. OD-004 exists
2. OD-004 uses geological stratification
3. OD-004 encodes confidence via border weights

This creates "priming" before direct library access. Like telling a student "don't plagiarize the Johnson paper about climate change" — you just told them the Johnson paper exists and what it's about!

**THE ROOT CAUSE HYPOTHESES:**

**Hypothesis 1 — Check Not Blocking (MEDIUM likelihood):**
- Divergence check exists but is advisory, not mandatory
- Builder answered questions but proceeded despite convergence
- Need to inspect creative skill code to verify

**Hypothesis 2 — Check Skipped (LOW likelihood):**
- Builder jumped from Phase 3 → Phase 4 without gate
- Less likely because skill should enforce phases

**Hypothesis 3 — Indirect Exposure (HIGH likelihood):**
- Rule documents mention geological example multiple times
- Vocabulary primed before case study access
- Builder "independently" derived geological metaphor but influenced by priming
- **CONFIRMED via document analysis**

**Hypothesis 4 — Independent Convergence with Justification (LOW likelihood):**
- Builder derived geological metaphor independently
- Divergence table exists with strong justification (after line 200)
- 1/5 dimension difference accepted due to content requirements
- Unlikely because 85% overlap suggests copying not coincidence

### The Drama

**THE EVALUATION ERROR (AGAIN):** The integration auditor declared R6 FAILED based on reading first 200 lines of an 80,000-line log. The team lead later confirmed the divergence check IS present at line 1233.

This investigation couldn't verify either way because log was truncated in their view. This is the second evaluator who didn't read far enough to find critical evidence.

**THE PRIMING DISCOVERY:** The most important finding is that EVEN WITHOUT direct case study access, library patterns leak through rule documents:
- Prohibitions cite examples 3 times
- Mechanisms catalog cites examples 8 times
- Vocabulary documents have provenance citations

This creates "background radiation" of library influence before builders ever see the actual examples.

**THE CONVERGENCE QUANTIFICATION:** Investigation proposed thresholds:
- 0-20% overlap: Novel (no library influence)
- 20-40% overlap: Inspired (acceptable indirect influence)
- 40-60% overlap: Adapted (requires justification)
- 60-100% overlap: Copied (regeneration required)

Variant C at 85% overlap falls into "Copied" category → regeneration should have been mandatory.

### What We Still Don't Know

**Did the divergence check actually happen?** Three possible answers:
1. YES, at line 1233 (team lead confirmed)
2. YES, with weak justification that was incorrectly accepted
3. NO, builder skipped it

**If it happened, what was the justification?** Why was 85% overlap with 1/5 dimensions different accepted as "independent convergence"?

**Can priming be eliminated?** Or is some baseline convergence (20-40%) unavoidable when rule documents cite examples for provenance?

---

## THE BIG SYNTHESIS

### The Winners and Losers

**WINNER:** Variant B (Weak Permission — "library available but not required")
- Highest novelty (4/5) — Scientific lab metaphor
- Highest quality (19/20 tied with C)
- Zero library usage (chose creative path)
- Zero soul violations
- Moderate speed (86 minutes)
- **Conclusion:** Soft framing may be optimal balance

**RUNNER-UP:** Variant C (Anti-Gravity — strong anti-copying enforcement)
- Low novelty (1/5) — converged to geological domain
- Highest quality (19/20 tied with B)
- Moderate library usage (47%)
- Zero soul violations
- Good speed (78 minutes)
- **Conclusion:** Improves quality but doesn't prevent domain convergence

**DISAPPOINTMENTS:**
- **Track 1** (Component Assembly): Perfect score from visual judge but FAILED 5 automated checks — builder didn't read the rules
- **Variant A** (Skill-Only): Slowest (117 min) AND low quality (13/20) — creative freedom without guardrails produces inefficiency
- **Variant D** (Library-First): Fastest (37 min) but low quality (13/20) — speed vs quality trade-off

### The Big Surprise

**THE WEAK PERMISSION PARADOX:** The "control" condition became the winner.

Expected: Weak permission would be insufficient, builders would need strong anti-copying enforcement.

Reality: Soft framing ("available but not required") produced:
- MORE novelty than strong enforcement (4/5 vs 1/5)
- SAME quality as strong enforcement (19/20)
- BETTER soul compliance than aggressive approaches

Why? Hypothesis: Hard prohibition creates "forbidden fruit" psychology. When library access opens, convergence pressure spikes. Soft framing removes urgency — "you CAN use it" means "you don't HAVE to."

### The Mistake

**THE TRUNCATED LOG ERROR:** Multiple evaluators read only 200 lines of an 80,000-line work log and concluded critical checks were missing. Team lead later verified the check IS present at line 1233.

This is like a judge leaving a music competition after 30 seconds and declaring "the performer didn't show up" when the performance started at 2 minutes.

**Impact:** Anti-gravity mechanism R6 was declared FAILED based on incomplete evidence. Actual status: DISPUTED pending full log verification.

**Lesson learned:** When evaluating agent work logs, always specify read limits or read complete files. Reading first 200 lines of 80,000 is 0.25% coverage.

### What We Still Don't Know

**1. Anti-Gravity Root Cause:**
- Did the divergence check happen? (Team lead says yes at line 1233, evaluators say no)
- If yes, what justification was accepted?
- Why was 85% overlap with 1/5 dimensions different considered acceptable?

**2. Priming Effect Magnitude:**
- How much does indirect library exposure (through rule citations) influence outcomes?
- Is 20-40% baseline convergence unavoidable?
- Can priming be eliminated without losing provenance?

**3. Container Width Problem:**
- Why did 4/5 pages violate container width rules?
- Can metaphor aesthetics (narrow "core sample" containers) be reconciled with readability floors (940px minimum)?

**4. The Prose-Only Limitation:**
- Would results change with mixed content (50% prose, 50% code/tables)?
- Would component coverage improve from 22-44% to target 67%?
- Would mechanism count increase from 6-7 to target 8?

---

## THE RECOMMENDATIONS

**IMMEDIATE (Before Next Experiment):**

1. **Fix Track 1 builder workflow** — Add explicit "BEFORE writing ANY code, confirm you've read prohibitions.md" checkpoint

2. **Create mixed content template** — 50% prose, 25% code, 15% data tables, 10% structural diagrams to exercise 7/9 component families

3. **Strengthen container width guidance** — Document 940-960px sweet spot, require justification for deviations

4. **Verify Variant C divergence check** — Read full log beyond line 1233, determine what actually happened

**SECONDARY (For Future Phases):**

5. **Test stronger weak permission** — Change "available" to "RECOMMENDED after Phase 3.5" to measure behavioral difference

6. **Quantify priming effects** — Count library citations in rule documents, test if removing them reduces convergence

7. **Add blocking divergence gate** — If <3/5 dimensions different, MANDATORY regeneration (no justification option)

8. **Document bridging patterns** — Create guide for using library components within custom zone contexts

---

## CONCLUSION

**The experiment succeeded in measuring library influence** but revealed unexpected patterns:

✅ **Library access DOES reduce novelty** (confirmed)
❌ **Strong anti-copying rules DON'T preserve novelty** (rejected — weak framing won)
✅ **Anti-copying enforcement DOES improve quality** (confirmed)
❌ **Weak permission is NOT insufficient** (rejected — it was optimal!)

**The critical finding:** "Library available but not required" (Variant B) outperformed both complete prohibition (Variant A) and strict enforcement (Variant C) on novelty while matching quality.

**The critical failure:** Anti-gravity enforcement (Variant C) couldn't prevent 85% convergence to library's geological pattern despite phase gates and divergence checks.

**The path forward:** Use weak permission framing, fix container width guidance, test with mixed content, and investigate why anti-gravity failed before deploying to production.
