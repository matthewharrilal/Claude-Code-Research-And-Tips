# Structural Audit: Information Architecture of /falls-in-love SKILL.md

**Auditor focus:** Section ordering, primacy positioning, and execution efficacy for a single Opus agent reading this 1,166-line file at session start before a 6-10 hour, 100-200 pass build.

**Core premise:** Transformer attention follows a U-curve. The first and last ~100 lines receive disproportionate weight. Lines ~400-800 compress. The executing agent reads the SKILL.md once at session start, then references it throughout an extended session where the context window turns over 8-12 times. What the agent internalizes on first read determines the cognitive frame for the entire build.

---

## 1. Primacy Audit (First 100 Lines)

### What the agent sees: Lines 1-100

| Line Range | Content |
|-----------|---------|
| 1-5 | YAML frontmatter (name, description, trigger phrases) |
| 7-22 | Philosophical manifesto — what the skill IS, how building works, when it's done |
| 25-31 | "What This Is NOT" — 4 negations |
| 34-56 | Invocation protocol (orchestrator steps, output paths, early exit) |
| 59-93 | "The Cognitive State" — content-topology formation, 3-step mechanism, semantic saturation thresholds, the two questions, "invention follows visibility" |
| 96-100 | Start of "The Metacognitive Evaluation — The Backbone" (5 layers begin) |

### Assessment: STRONG but with one structural problem

**What is RIGHT in the first 100 lines:**
- The philosophical stance ("the page IS the content," "build until genuine satisfaction") lands at maximum primacy. This is the single most important thing to internalize, and it is exactly where it should be.
- The "What This Is NOT" section (lines 25-31) provides critical anti-pattern framing early. The agent immediately knows not to optimize, not to follow numbered steps, not to apply this to linear content.
- The cognitive state definition (lines 59-93) establishes the mental model the agent needs before touching any content. The 4-order time thresholds (15min/30min/60min/90min) are especially valuable here — they set expectations for a LONG session.
- "Invention follows visibility, not importance" (line 92) is a critical operational principle that prevents the agent from trying to build the "most important" thing first.

**What is WRONG or MISSING from the first 100 lines:**

FINDING 1:
- **SEVERITY:** HIGH
- **LOCATION:** Lines 34-55 (Invocation section)
- **FINDING:** The invocation protocol is orchestrator-facing, not agent-facing. The agent reading this file is the SPAWNED agent, not the orchestrator. Lines 38-52 describe what the orchestrator does (create directories, spawn agent, etc.). The agent already exists when it reads this. These 18 lines consume primacy bandwidth with information the executing agent cannot act on.
- **REMEDIATION:** Move the Invocation section after the Wave Schedule (it is reference material for the orchestrator, not cognitive setup for the builder). Replace those 18 primacy lines with: (a) the Design System Physics (currently buried at line 1037), or (b) the Anti-Patterns list (currently buried at line 1056). Both are critical "don't violate these" instructions that the agent needs in primacy.

FINDING 2:
- **SEVERITY:** CRITICAL
- **LOCATION:** Lines 1037-1053 (Design System Physics)
- **FINDING:** The non-negotiable design system constraints — `border-radius: 0`, `box-shadow: none`, no gradients, font trinity, color palette, 940-960px container, border hierarchy, responsive requirements, accessibility requirements — are at line 1037. This is deep in the document's final quarter. These are HARD CONSTRAINTS that, if violated, produce output that fails at the most basic level. Every single one of these is a binary pass/fail rule. The agent should see these before it sees anything about waves, rotation schedules, or metacognitive evaluation. The attention U-curve will give these moderate recency weight (they're ~130 lines from the end), but they deserve primacy weight because violations are catastrophic and unfixable if the agent has been building for hours on wrong assumptions.
- **REMEDIATION:** Move Design System Physics to immediately after "The Cognitive State" section (after line 93), before the Metacognitive Evaluation. The agent should internalize the creative stance (lines 1-93), then immediately learn the physics of the universe it operates in (the constraints), and THEN learn how to evaluate and build within those constraints.

FINDING 3:
- **SEVERITY:** MEDIUM
- **LOCATION:** First 100 lines (missing content)
- **FINDING:** No mention of the builder's notebook as a thinking tool until line 43 (buried in the invocation section as a setup step) and then not substantively until line 133 ("The Definition Journal"). The notebook is a critical execution mechanism — the agent writes in it every pass, uses it for context window transitions, and it carries forward across windows. The agent should know from the FIRST 50 lines that the notebook is its primary thinking and continuity tool.
- **REMEDIATION:** Add a 3-5 line "Your Tools" micro-section in the first 30 lines: "You have three tools: (1) the HTML file you are building, (2) a builder's notebook for reasoning and continuity, (3) screenshots of the rendered page. The notebook is not documentation — it is where your thinking happens."

### Primacy Score: 7/10
The philosophical stance is perfectly positioned. The cognitive state definition is perfectly positioned. But the hard constraints (Design System Physics) being 940 lines away from primacy is a structural error that will cause violations in early passes. The invocation section wastes 18 lines of primacy on orchestrator instructions.

---

## 2. Section Ordering vs. Execution Sequence

### Document structure (current ordering):

| Section | Lines | Execution Relevance |
|---------|-------|-------------------|
| Frontmatter + Philosophy | 1-22 | Pre-execution mindset |
| What This Is NOT | 25-31 | Pre-execution mindset |
| Invocation | 34-56 | Orchestrator only |
| The Cognitive State | 59-93 | Pre-execution mindset |
| Metacognitive Evaluation | 96-219 | ALL waves (continuous) |
| Input/Output | 223-247 | Pre-execution reference |
| The Process (cycle, passes, readings, loss detection, cognitive moves, archetypes) | 250-397 | Wave 0 primarily |
| Primacy Rotation | 399-470 | ALL waves (continuous) |
| Wave Schedule header + Exhaustion + Minimums | 475-501 | ALL waves (continuous) |
| Wave 0 | 503-525 | Wave 0 |
| Wave 1 | 527-552 | Wave 1 |
| Wave 2 | 555-638 | Wave 2 |
| Wave 3 | 642-744 | Wave 3 |
| Wave 4 | 747-772 | Wave 4 |
| Wave 5 | 775-802 | Wave 5 |
| Post-Wave Enrichment header | 805-808 | Wave 6+ |
| Wave 6 | 809-844 | Wave 6 |
| Wave 7 | 846-870 | Wave 7 |
| Wave 8 | 872-895 | Wave 8 |
| Retrospectives | 898-922 | ALL waves (end of each) |
| The "Looking" Protocol | 925-990 | ALL waves (continuous) |
| Measurement (10 criteria, coupling grades, DOM skeleton) | 993-1034 | Wave 3+ evaluation |
| Design System Physics | 1037-1053 | Wave 0+ (continuous) |
| Anti-Patterns | 1056-1081 | Pre-execution mindset |
| Context Window Management | 1084-1141 | ALL waves (at transitions) |
| Cost | 1144-1159 | Reference only |
| The Point | 1162-1166 | Recency — final impression |

### Forward-reference violations (information needed at Wave N but located after Wave N's section):

FINDING 4:
- **SEVERITY:** CRITICAL
- **LOCATION:** Lines 1037-1053 (Design System Physics) vs. Wave 0 at lines 503-525
- **FINDING:** Wave 0 says "This draft will violate soul constraints, use incorrect colors and spacing. That is fine." (line 507). But the actual soul constraints (border-radius: 0, font trinity, color palette, container width, border hierarchy) are not listed until line 1037 — 500 lines after Wave 0. The agent building Wave 0 may not even know WHAT the constraints are that it's "allowed to violate." More critically, Wave 1 (lines 527-552) says "Apply the design system's physics to the skeleton" and lists specific constraints — but the authoritative constraint list is still 500 lines away. The Wave 1 section gives a partial list (line 531: "border-radius: 0, box-shadow: none, no gradients, font trinity, color palette, 4px spacing base, 940-960px"). This creates a REDUNDANCY problem: the same constraints are stated in two places (Wave 1 summary at line 531 and Design System Physics at line 1037), and if they ever diverge, the agent gets contradictory instructions.
- **REMEDIATION:** Move Design System Physics to before Wave 0. Eliminate the redundant constraint list in Wave 1. Wave 1 should reference "the physics above" not restate them.

FINDING 5:
- **SEVERITY:** HIGH
- **LOCATION:** Lines 925-990 ("The Looking Protocol") vs. Wave 0 at lines 503-525
- **FINDING:** Wave 0 instructs the agent to do "full cycles" (line 511: "Read content -> build HTML/CSS -> screenshot and scroll -> evaluate -> refine -> decide what next"). But the actual screenshot protocol — how to start a server, take screenshots, verify file sizes, disable animations — is at lines 966-990, over 400 lines later. The agent doing Wave 0 needs to know HOW to look at its page, but the looking protocol is buried deep in the document.
- **REMEDIATION:** Move the Screenshot Protocol (the technical bash commands at lines 968-989) to immediately after the Invocation section or into a "Technical Setup" section early in the document. The conceptual "Looking Protocol" (how looking evolves) can stay where it is — that's evaluative guidance. But the mechanics of HOW to screenshot must be available before Wave 0.

FINDING 6:
- **SEVERITY:** HIGH
- **LOCATION:** Lines 898-922 (Retrospectives) vs. all wave sections
- **FINDING:** The retrospective protocol is positioned AFTER all waves (line 898), but the agent needs to write retrospectives at the END of every wave starting with Wave 0. The wave sections say things like "write the final retrospective" (Wave 8, line 882) but the retrospective format — base questions plus wave-specific questions — doesn't appear until 400+ lines after Wave 0. An agent in Wave 0 that hasn't yet read the retrospective section will either skip the retrospective or write a formless one.
- **REMEDIATION:** Move the Retrospectives section to immediately before the Wave Schedule. The agent should know the retrospective format before entering Wave 0.

FINDING 7:
- **SEVERITY:** HIGH
- **LOCATION:** Lines 993-1034 (Measurement — 10 Falsifiable Criteria) vs. Wave 3 at lines 642-744
- **FINDING:** The 10 falsifiable criteria and coupling grades are evaluation tools the agent should be tracking from Wave 3 onward (line 1012: "At Wave 3: 7+ = on track"). But the measurement section is at line 993, 250 lines after Wave 3. The agent building through Wave 3 may not know these criteria exist until it reaches them — by which time it's potentially already in Wave 4.
- **REMEDIATION:** Move the Measurement section to before the Wave Schedule, alongside the Minimum Engagement table. The criteria are part of the evaluation framework, not a post-build appendix.

FINDING 8:
- **SEVERITY:** MEDIUM
- **LOCATION:** Lines 1056-1081 (Anti-Patterns) vs. entire build
- **FINDING:** The 11 anti-patterns are things the agent should NEVER do — and several are precisely the things a procedural agent WOULD do by default ("build a standard vertical skeleton first," "sample 2-4 mechanisms," "deploy mechanisms," "be creative"). These are at line 1056, deep in the document. The "What This Is NOT" section (lines 25-31) covers similar ground but with only 4 items and in less operational language. The full anti-pattern list should be early enough that the agent internalizes the prohibitions before building.
- **REMEDIATION:** Merge "What This Is NOT" and "Anti-Patterns" into a single section placed in the first 100 lines, immediately after the philosophical manifesto. The prohibitions should be in primacy position.

FINDING 9:
- **SEVERITY:** MEDIUM
- **LOCATION:** Lines 1084-1141 (Context Window Management) vs. entire build
- **FINDING:** Context window transitions will happen every 15-20 passes (the document says so at line 1086). The first transition could occur as early as Wave 1. But the transition protocol — what to write before the window closes, what to read when it reopens, reading order for new windows — is at line 1084, over 500 lines after Wave 1. An agent hitting its first context transition without having read this section will not write proper transition state.
- **REMEDIATION:** Move the Context Window Transition Protocol to before the Wave Schedule. The agent needs to know the transition protocol before it enters its first wave. The content handoff concept (lines 1099-1118) can stay near the waves since it's wave-phase-specific, but the mechanical transition protocol (lines 1120-1141) is critical pre-build knowledge.

### Forward-reference count: 6 violations (2 CRITICAL, 3 HIGH, 1 MEDIUM)
The document's structure places essential operational knowledge (how to screenshot, what constraints to obey, how to handle context transitions, what to measure, what never to do) AFTER the wave sections where that knowledge is first needed.

---

## 3. Front-Matter Effectiveness (First 100 Lines)

### What the agent gets:
1. The soul of the skill (what it means to fall in love with content) — EXCELLENT
2. What this is NOT (4 negations) — GOOD
3. Orchestrator invocation protocol — WASTED (agent can't act on this)
4. The cognitive state definition (content-topology formation, time thresholds) — EXCELLENT
5. Start of metacognitive evaluation — EXCELLENT

### What is MISSING that should be here:

FINDING 10:
- **SEVERITY:** HIGH
- **LOCATION:** First 100 lines (absent)
- **FINDING:** No "session shape" overview. The agent is about to spend 6-10 hours across 9 waves and 100-200 passes. It doesn't see the wave schedule until line 475. It doesn't see the wave names until lines 503+. The agent has no mental map of the journey ahead. For a 6-10 hour session, a 10-line overview ("you will move through 9 waves: content immersion, design system, R1-R5 research, case studies, synthesis, combination, integration, self-audit, final enrichment — each wave absorbing deeper research into the page you're building") would provide critical orientation.
- **REMEDIATION:** Add a "Session Shape" micro-section (10-15 lines) after the philosophical manifesto and before "What This Is NOT." List the 9 waves by name with 1-sentence descriptions. This gives the agent a mental roadmap before diving into the details.

FINDING 11:
- **SEVERITY:** MEDIUM
- **LOCATION:** First 100 lines (absent)
- **FINDING:** No mention of the output file name convention. The agent will be writing to `_build.html` (referenced at line 982 in the screenshot protocol and line 53 as `_build-final.html`). This is a mechanical detail, but an agent that doesn't know its output filename until line 982 may create an arbitrarily-named file in Wave 0.
- **REMEDIATION:** Include the output filename in the early setup: "You are building: `{OUTPUT_DIR}/_build.html`. This is the only file that matters."

### What should be MOVED OUT of the first 100 lines:

FINDING 12:
- **SEVERITY:** MEDIUM
- **LOCATION:** Lines 34-56 (Invocation section)
- **FINDING:** As noted in Finding 1, the invocation section is orchestrator-facing. 22 lines of primacy bandwidth spent on directory creation, file copying, and orchestrator behavior. The agent reading this file has already been spawned by the orchestrator. These lines provide no execution value to the builder.
- **REMEDIATION:** Move to an appendix or to a separate orchestrator-facing section at the end of the document.

### Front-matter score: 7/10
The philosophical and cognitive setup is excellent. But the absence of a session roadmap, the absence of hard constraints, and the presence of orchestrator-facing instructions represent significant inefficiency in the highest-attention zone.

---

## 4. End-Matter Effectiveness (Last 100 Lines, ~1067-1166)

### What the agent sees in the final 100 lines:

| Line Range | Content |
|-----------|---------|
| 1067-1081 | Anti-Patterns #5 through #11 (the list starts at 1056) |
| 1084-1141 | Context Window Management (full section) |
| 1144-1159 | Cost comparison table (pipeline vs. falls-in-love) |
| 1162-1166 | "The Point" — final philosophical statement |

### Assessment: MIXED — good recency anchor, wrong operational content

**What is RIGHT in the last 100 lines:**
- "The Point" (lines 1162-1166) is a perfect recency anchor. It restates the core thesis in 5 lines: one agent, content, unlimited time, the page tells you when it's done. This will be the LAST thing the agent reads, and it perfectly reinforces the session's stance. This is exactly where it should be.
- The cost comparison table (lines 1144-1159) provides motivational reinforcement: "you are producing something pipelines cannot." This is a good recency item — it reminds the agent WHY the extended investment matters.

**What is WRONG in the last 100 lines:**

FINDING 13:
- **SEVERITY:** HIGH
- **LOCATION:** Lines 1084-1141 (Context Window Management in recency zone)
- **FINDING:** Context window management is critical OPERATIONAL knowledge, not philosophical reinforcement. Placing it in the recency zone means the agent will remember the transition protocol with disproportionate weight — but only THEORETICALLY. The problem is that by the time the agent needs this protocol (first context transition, potentially 15-20 passes in), it will have been many passes since the initial read of SKILL.md. The recency boost from initial reading will have decayed. Meanwhile, placing it here means it DISPLACES more important recency content. The ideal recency content is: final philosophical reinforcement (already there), key anti-patterns to remember (partially there), and the evaluation criteria the agent should carry throughout (currently at line 993, not in recency).
- **REMEDIATION:** Move Context Window Management to before the Wave Schedule (as noted in Finding 9). The recency zone should contain: Anti-Patterns (full list), the 10 Falsifiable Criteria summary, Cost, and The Point. These are the things the agent should carry as "last impression" — the prohibitions, the evaluation floor, the motivation, and the philosophy.

FINDING 14:
- **SEVERITY:** MEDIUM
- **LOCATION:** Lines 1056-1081 (Anti-Patterns — partially in recency zone)
- **FINDING:** The anti-pattern list spans from line 1056 to 1081 — partially in the recency zone. Items 1-4 are at lines 1060-1067 (outside the last 100 lines), items 5-11 are at lines 1068-1081 (inside the last 100 lines). The recency curve gives items 5-11 disproportionate weight over items 1-4. But items 1 and 9 are flagged as the "single most destructive instruction" — and item 1 ("Build a standard vertical skeleton first") is OUTSIDE the recency zone. The most critical anti-patterns get less attention weight than the less critical ones.
- **REMEDIATION:** If the anti-patterns are to stay near the end, reorder them so items 1 and 9 (the two "most destructive" ones) are LAST in the list, capturing maximum recency weight. Better: move the entire anti-pattern list to primacy position (first 100 lines) as recommended in Finding 8.

### End-matter score: 6/10
"The Point" is a perfect closer. The cost table provides good motivation. But the Context Window Management section is misplaced operational content eating recency bandwidth, and the anti-pattern ordering works against the attention curve.

---

## 5. Middle Trough Identification (Lines ~400-800)

### What lives in the trough:

| Line Range | Content | Critical? |
|-----------|---------|-----------|
| 399-432 | Primacy Rotation mechanics | YES — governs ALL waves |
| 434-470 | Delta Profile + Named Pass Archetypes | YES — per-pass operational guidance |
| 475-501 | Wave exhaustion criteria + Minimum engagement table | YES — prevents premature convergence |
| 503-525 | Wave 0: Content Immersion | YES — first wave |
| 527-552 | Wave 1: Design System Soul | YES — second wave |
| 555-638 | Wave 2: Research R1-R5 (84 lines!) | YES — widest research wave |
| 642-744 | Wave 3: Case Studies (103 lines!) | YES — deepest research wave |
| 747-772 | Wave 4: Synthesis + Provenance | YES — conflict resolution |
| 775-802 | Wave 5: Combination Mastery | YES — additive-to-subtractive shift |

### Assessment: EVERYTHING IN THE TROUGH IS CRITICAL

This is the core structural problem. The attention trough (lines 400-800) contains the ENTIRE operational heart of the skill:
- How primacy rotation works (the mechanism that prevents research neglect)
- The delta profile (the self-diagnostic that tells the agent if it's on track)
- The pass archetypes (what each pass should feel like)
- The exhaustion criteria (how to know when a wave is done)
- The minimum engagement requirements (floors that prevent premature convergence)
- Waves 0 through 5 (the actual execution sequence)

The document's structure is inverted: **philosophy and metacognition occupy primacy and recency positions, while operational execution instructions occupy the trough.**

### Trough-only instructions (stated ONLY here, no reinforcement elsewhere):

FINDING 15:
- **SEVERITY:** CRITICAL
- **LOCATION:** Lines 475-501 (Exhaustion criteria + Minimums)
- **FINDING:** The three conditions for genuine wave exhaustion (delta stabilized, research re-read produces nothing, "infinite time" answer is invisible) appear ONLY at lines 477-485. These are NEVER restated. The minimum engagement table (8 passes minimum, 3+ swap tests per wave, 2 screenshot sessions per wave, etc.) appears ONLY at lines 489-501. These minimums are the primary defense against the agent's #1 failure mode: premature convergence. An agent that forgets these minimums (because they're in the trough) will stop waves early, producing shallow output.
- **REMEDIATION:** Restate the exhaustion criteria and minimums in a condensed form in the front-matter (first 100 lines), and again in each wave section as a reminder. Alternatively, move the Exhaustion + Minimums section to the very start of the Wave Schedule (before Wave 0), which pushes it slightly earlier, and add a 2-line summary at the end of each wave section: "Remember: exhaustion requires ALL THREE conditions (delta, re-read, infinite-time). Minimum passes for this wave: N."

FINDING 16:
- **SEVERITY:** HIGH
- **LOCATION:** Lines 434-470 (Delta Profile + Named Pass Archetypes)
- **FINDING:** The delta profile (expected CSS lines changed per pass) and the 12 named pass archetypes (First Contact, Second Lens, Gap Sweep, etc.) appear ONLY here. They are never restated or summarized. These are the agent's primary self-diagnostic tools — they tell the agent whether its per-pass behavior is healthy. An agent that has forgotten the delta profile will not realize that making 100+ line changes at pass 8 means its integration passes failed. The pass archetypes are especially valuable because they give the agent a cognitive stance for each pass — without them, the agent may treat all passes identically.
- **REMEDIATION:** The delta profile and pass archetypes are too detailed to move to primacy. Instead, add a brief reference in each wave section: "See Named Pass Archetypes (above) for per-pass cognitive stance." This creates a retrieval cue that reminds the agent to re-read the delta/archetype section.

FINDING 17:
- **SEVERITY:** HIGH
- **LOCATION:** Lines 399-432 (Primacy Rotation)
- **FINDING:** The primacy rotation mechanics — the 4-pass neglect threshold, diagnostic override protocol, per-file phase tracking, dimension permeation, attention trough symptoms — appear ONLY here. Each wave section has its own rotation schedule, but the MECHANICS of how rotation works (what primacy means, what position 1/2/3/final means, how to override, when to override) are stated only at lines 399-432. An agent deep in Wave 3 that has forgotten the override protocol will follow the default rotation rigidly even when the page's weakest dimension needs emergency attention.
- **REMEDIATION:** The override protocol is referenced in wave sections ("See the universal protocol in the Primacy Rotation section") — this is good. But the reference is to a section name, not a line number or location marker. In a 1,166-line file, "the Primacy Rotation section" is hard to find during re-reference. Add a distinctive marker (e.g., `### OVERRIDE PROTOCOL` with a clear header) that makes the section findable during mid-build re-reads.

FINDING 18:
- **SEVERITY:** HIGH
- **LOCATION:** Lines 278-298 ("What 10+ Passes Per Slice Actually Means")
- **FINDING:** This section (lines 278-298) is flagged as "the most important operational concept in the skill" (line 280). It distinguishes 10+ full build-look-refine CYCLES from 10 primacy rotations — a distinction the agent MUST internalize or it will do 2-3 primacy turns per file and call that "10+ passes." The section even says "This definition is non-negotiable and applies to every wave" (line 299). Despite being labeled the most important operational concept, it is located at line 278 — solidly in the attention trough. It IS reinforced throughout (each wave section restates "each pass is a full cycle"), but the foundational definition and its "non-negotiable" framing appear only here.
- **REMEDIATION:** Add a 2-3 line version of this concept to the front-matter: "One pass = one full cycle: read -> build -> screenshot -> evaluate -> refine -> decide. Do this 10+ times per research slice per wave. Primacy turns are not passes — they are reading-order within the cycle." This provides primacy-position reinforcement for the concept the document itself calls most important.

FINDING 19:
- **SEVERITY:** MEDIUM
- **LOCATION:** Lines 503-525 (Wave 0) — in the trough
- **FINDING:** Wave 0 is the FIRST thing the agent executes after reading SKILL.md. It is at line 503 — deep in the trough. The agent's first executive action is governed by instructions in the lowest-attention zone of the document. While Wave 0 is relatively simple (read content, form hypotheses, build a rough draft), the 5-layer evaluation questions specific to Wave 0 depth (lines 513-518) and the pass-level deepening guidance (lines 520-523) are stated only here.
- **REMEDIATION:** This is inherent to the sequential wave structure — Wave 0 can't be both in the front-matter AND after the process sections. The mitigation is to ensure the agent re-reads the SKILL.md from the Wave 0 section before beginning execution, not from the top. Add a directive in the front-matter: "When you begin building, re-read from 'Wave 0: Content Immersion' forward. The front-matter sets your stance; the wave sections guide your execution."

---

## 6. Cross-Cutting Structural Issues

FINDING 20:
- **SEVERITY:** HIGH
- **LOCATION:** Entire document
- **FINDING:** **Redundancy without consistency.** The "each pass is a full build-look-refine cycle" instruction is stated approximately 14 times across the document (lines 280, 299, 511, 539, 590, 632, 755, 785, 813, 850, 876, and more). This repetition is INTENTIONAL — the document says so at line 299 ("This definition is non-negotiable and applies to every wave"). But the repetition is almost word-for-word identical each time. Repetition reinforces when phrasing VARIES (different angles on the same concept create richer encoding). Verbatim repetition creates "skip" behavior — the agent recognizes the sentence and skips it as already-processed. After seeing "each pass is a full build-look-refine cycle" 5 times, the agent will start skipping these sentences.
- **REMEDIATION:** Keep the repetition but vary the framing. In Wave 0: "The cycle is the fundamental unit: read -> build -> look -> evaluate -> refine -> decide." In Wave 2: "Research does not change the cycle. You still build, look, refine. The research changes what you SEE when you look." In Wave 5: "Subtraction is still a cycle. Remove code, look at what you removed, evaluate whether the page is clearer, refine." Different words, same concept, richer encoding.

FINDING 21:
- **SEVERITY:** MEDIUM
- **LOCATION:** Lines 96-219 (Metacognitive Evaluation — 124 lines!)
- **FINDING:** **Section length asymmetry.** The Metacognitive Evaluation section is 124 lines long and occupies lines 96-219 — consuming the entire zone between "strong primacy" (first 100 lines) and "early trough" (after line 200). This section contains: the 5 layers (critical), the deepening test (critical), evaluation as learning (important), discovery as convergence (important), perceptual resolution deepening (moderate), taste emerges from building (moderate), staleness is gravity (critical), wave-specific staleness signatures (important), dimension-specific staleness detectors (important), staleness recovery protocol (critical), and false convergence signals (critical). This is too much for one section. The agent's attention will be strong through the 5 layers (~line 118) and then degrade through the remaining 100 lines.
- **REMEDIATION:** Split into two sections: (a) "The Metacognitive Evaluation" (5 layers, deepening test, evaluation-as-learning — the CORE, ~50 lines) placed in primacy position; (b) "Staleness Detection & Recovery" (staleness gravity, wave-specific signatures, dimension-specific detectors, recovery protocol, false convergence — the DIAGNOSTICS, ~70 lines) placed as a reference section that wave sections can point to. This keeps the core in primacy and makes the diagnostics findable when needed.

FINDING 22:
- **SEVERITY:** LOW
- **LOCATION:** Lines 223-247 (Input/Output)
- **FINDING:** The Input section lists all research files the agent will eventually read (lines 228-239). At this point in the document, the agent hasn't been told about waves yet. The file listing creates a false impression that the agent should read all these files immediately. Wave 2 (line 555) and Wave 3 (line 642) provide wave-specific file listings. The early listing is redundant with the wave-specific ones and may cause the agent to try loading files prematurely.
- **REMEDIATION:** Reduce the Input section to: "You will read the full design system and research corpus (~11,000 lines), absorbed wave by wave. Each wave section specifies which files to read and in what order." Remove the detailed file listing.

---

## 7. Recommended Restructured Section Order

Based on the findings above, the optimal ordering for execution efficacy:

```
1.  Frontmatter + Philosophy (lines 1-22)           [PRIMACY — stance]
2.  Session Shape (NEW — 10-15 lines)                [PRIMACY — roadmap]
3.  What This Is NOT + Anti-Patterns (MERGED)        [PRIMACY — prohibitions]
4.  The Cognitive State (lines 59-93)                 [PRIMACY — mental model]
5.  Design System Physics (from line 1037)            [PRIMACY — hard constraints]
6.  The Metacognitive Evaluation CORE (5 layers,      [PRIMACY — evaluation frame]
    deepening test, eval-as-learning — ~50 lines)
7.  Input/Output (CONDENSED — 10 lines)               [Reference]
8.  The Process (cycle, passes, readings, loss         [Pre-Wave 0 setup]
    detection, cognitive moves, archetypes)
9.  Primacy Rotation                                   [Pre-Wave 0 setup]
10. Staleness Detection & Recovery (SPLIT from #6)     [Reference — waves point here]
11. Retrospectives format                              [Pre-Wave 0 — agent needs this]
12. Measurement (10 criteria, coupling, DOM skeletons) [Pre-Wave 0 — evaluation floors]
13. Context Window Management                          [Pre-Wave 0 — transition protocol]
14. Exhaustion Criteria + Minimums                     [Pre-Wave 0 — convergence defense]
15. Screenshot Protocol (EXTRACTED from Looking)       [Pre-Wave 0 — mechanics]
16. Wave 0                                             [Execution sequence]
17. Wave 1                                             [Execution sequence]
18. Wave 2                                             [Execution sequence]
19. Wave 3                                             [Execution sequence]
20. Wave 4                                             [Execution sequence]
21. Wave 5                                             [Execution sequence]
22. Wave 6                                             [Execution sequence]
23. Wave 7                                             [Execution sequence]
24. Wave 8                                             [Execution sequence]
25. The "Looking" Protocol (conceptual — how           [Reference — waves point here]
    looking evolves, 4-phase progression)
26. Cost                                               [RECENCY — motivation]
27. The Point                                          [RECENCY — final impression]
```

**Key changes:**
- Hard constraints (Design System Physics) move from line 1037 to ~line 110
- Anti-Patterns merge with "What This Is NOT" and move from line 1056 to ~line 30
- Retrospectives move from line 898 to before Wave 0
- Measurement moves from line 993 to before Wave 0
- Context Window Management moves from line 1084 to before Wave 0
- Exhaustion criteria move from line 475 to immediately before Wave 0
- Screenshot protocol extracted and moved to before Wave 0
- Metacognitive evaluation split: core stays early, diagnostics become reference
- "The Point" and Cost stay at end for recency
- Invocation moves to appendix or is folded into orchestrator documentation

---

## 8. Summary of All Findings

| # | Severity | Lines | Finding | Category |
|---|----------|-------|---------|----------|
| 1 | HIGH | 34-55 | Invocation section wastes primacy on orchestrator instructions | Front-matter |
| 2 | CRITICAL | 1037-1053 | Design System Physics buried 940 lines from primacy | Primacy violation |
| 3 | MEDIUM | First 100 | No early mention of notebook as primary thinking tool | Front-matter gap |
| 4 | CRITICAL | 1037 vs 503 | Hard constraints listed 500 lines after the wave that needs them | Forward reference |
| 5 | HIGH | 925-990 vs 503 | Screenshot protocol 400+ lines after Wave 0 needs it | Forward reference |
| 6 | HIGH | 898-922 vs 503 | Retrospective format appears after all waves that use it | Forward reference |
| 7 | HIGH | 993-1034 vs 642 | 10 Falsifiable Criteria 250 lines after Wave 3 needs them | Forward reference |
| 8 | MEDIUM | 1056-1081 | Full anti-pattern list buried in last quarter | Primacy violation |
| 9 | MEDIUM | 1084-1141 | Context window transition protocol after waves that trigger it | Forward reference |
| 10 | HIGH | First 100 | No session shape overview / wave roadmap | Front-matter gap |
| 11 | MEDIUM | First 100 | No output filename convention | Front-matter gap |
| 12 | MEDIUM | 34-56 | Invocation section is orchestrator-facing, not agent-facing | Front-matter waste |
| 13 | HIGH | 1084-1141 | Context Window Management displaces better recency content | End-matter misuse |
| 14 | MEDIUM | 1056-1081 | Anti-pattern ordering works against attention curve | End-matter ordering |
| 15 | CRITICAL | 475-501 | Exhaustion criteria + minimums in trough, never restated | Trough-only |
| 16 | HIGH | 434-470 | Delta profile + pass archetypes in trough, never restated | Trough-only |
| 17 | HIGH | 399-432 | Primacy rotation mechanics in trough | Trough-only |
| 18 | HIGH | 278-298 | "Most important operational concept" in trough | Trough-only |
| 19 | MEDIUM | 503-525 | Wave 0 (first execution) deep in trough | Trough position |
| 20 | HIGH | Entire doc | Verbatim repetition creates skip behavior | Cross-cutting |
| 21 | MEDIUM | 96-219 | 124-line metacognitive section too long for single attention span | Cross-cutting |
| 22 | LOW | 223-247 | Premature file listing before waves are introduced | Cross-cutting |

**Severity distribution:**
- CRITICAL: 3
- HIGH: 10
- MEDIUM: 8
- LOW: 1

**Root cause:** The document is organized by CONCEPT (philosophy -> evaluation -> process -> waves -> measurement -> constraints -> management) rather than by EXECUTION NEED (what the agent needs first -> what it needs during building -> what it references throughout -> what it should remember last). The conceptual organization makes the document readable as a DOCUMENT but suboptimal as an INSTRUCTION SET for a 6-10 hour execution session.

---

## 9. The One-Sentence Diagnosis

The skill file puts PHILOSOPHY in primacy and OPERATIONS in the trough — the agent will deeply internalize the STANCE but may forget the MECHANICS (screenshot protocol, constraint list, exhaustion criteria, transition protocol, measurement criteria) that make the stance executable.
