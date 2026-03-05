# Meta-Cognitive Audit: PA Experiential Foundation

**Auditor:** Opus 4.6 (meta-cognitive, experiential emphasis)
**Files reviewed:**
- `~/.claude/skills/perceptual-auditing/SKILL.md` (524 lines)
- `~/.claude/skills/compose/SKILL.md` (199 lines)

**Core question:** Is the experiential scan truly the foundation of perceptual auditing, or has it been diluted into analytical checklisting?

---

## 1. Cold Look Dominance

**Verdict: STRONG — with one structural weakness.**

The Cold Look protocol (lines 46-61) is well-designed. Four critical features enforce primacy:

1. **Temporal ordering.** "Before you read any question, before you think about what you're evaluating — inhabit the page." Section 0 comes before the 20 questions, both in document structure and in explicit instruction.

2. **Lock mechanism.** "These responses are FINAL. Nothing you learn later can change them." The word LOCKED appears twice. The word FINAL appears once. The instruction is unambiguous.

3. **Priority override.** "Like the cold look, it has permanent priority — if your anchor found something that no question surfaces later, report it anyway." This gives the experiential pass authority OVER the structured questions.

4. **Contamination check.** Line 86-88: explicit self-check for pipeline vocabulary contamination.

**The structural weakness:** The lock is NORMATIVE, not MECHANICAL. There is no enforcement mechanism. A Claude agent processing Section 0 and then 4 assigned questions will produce all output in a single response. The "locked" cold look lives in the same output document as the analytical answers. Nothing prevents an agent from unconsciously revising its initial impression as it works through later questions. The lock is a strong instruction, but it relies entirely on the agent's compliance.

**What would make it mechanical:** Capture the cold look as a SEPARATE output step — the agent writes cold look responses, those get saved, and only THEN does the agent receive its assigned questions. This would require two-phase agent interaction, which the current compose skill does not support. The cost: doubling agent spawn overhead for PA. The benefit: genuine temporal separation between perception and analysis.

**Assessment: 8/10.** The normative lock is the best possible single-pass design. The weakness is inherent to single-pass agent architecture, not to the skill's design intent.

---

## 2. Contamination Vectors

Every way a PA agent could become contaminated in the compose pipeline:

### HIGH RISK

**C-1: Screenshot file paths.** The compose skill saves screenshots to `[output-dir]/_screenshots/desktop-*.png` and `tablet-*.png`. The `[output-dir]` is `ephemeral/builds/<content-name>-<date>/`. The content name is visible in the file path. If the content is "yegge-gas-town-extraction," the auditor sees that string in every screenshot path it reads. This is a DIRECT CONTENT LEAK — the auditor now knows the content topic before seeing the page.

**Severity: HIGH.** Mitigation: rename screenshots to opaque paths before PA (e.g., `_pa/_screenshots/view-1440-01.png`). Neither the PA skill nor the compose skill specifies this.

**C-2: The PA skill file itself.** Each auditor receives the full 524-line PA skill. This skill contains:
- The Weaver section (lines 311-422) which describes how auditor reports will be used
- The Bridging Questions section (lines 426-485) which describes builder reflections
- The "How the Whole System Connects" section (lines 507-523) which reveals the full pipeline architecture
- References to "TC Pipeline," "conviction brief," "gate runner," "compositional stack"

An auditor reading the full skill knows it is part of a multi-phase pipeline with tension-composition derivation, builder agents, and gate runners. This is PIPELINE CONTEXT LEAKAGE. The auditor's perception is now framed by knowledge of the production process.

**Severity: HIGH.** Mitigation: create a stripped auditor-only version of the PA skill (~150 lines) containing ONLY: The One Rule, Three Laws, Section 0 protocol, their 4 assigned questions, Language Constraint, and Metaphor Awareness. Exclude: Weaver, Bridging Questions, Deployment tables, System Connections.

**C-3: Skill file naming.** The skill is loaded from `~/.claude/skills/perceptual-auditing/SKILL.md`. The path itself reveals that this is a "perceptual auditing" exercise from a skills framework. This primes the agent to think of itself as an "auditor" running a "skill" rather than a person encountering a page.

**Severity: MODERATE.** Hard to mitigate without restructuring how skills are loaded.

### MODERATE RISK

**C-4: The auditor deployment table.** Lines 226-237 assign specific questions to specific auditors (A through E). Each auditor can see the FULL table, including what OTHER auditors are evaluating. This violates information isolation — auditor A knows that auditor B is looking at "scroll experience + thirds + rhythm + best moment." This creates awareness that the audit is a structured team exercise, not a solo encounter.

**Severity: MODERATE.** Mitigation: each auditor should receive ONLY their own question assignments, not the full deployment table.

**C-5: Screenshot naming convention.** The PA skill specifies `1440/cold-look.png`, `1440/scroll-01.png`. The compose skill uses `desktop-*.png`, `tablet-*.png`. Both naming schemes communicate viewport purpose. "Cold look" in a filename tells the agent "this is the screenshot you should react to with 5-second gut instinct" — which is meta-information about how to process the image, leaked through the filename.

**Severity: MODERATE.** Mitigation: use opaque sequential naming (`01.png`, `02.png`, etc.) with a separate manifest the orchestrator reads but auditors do not.

**C-6: Number of screenshots implies page length.** If an auditor receives 12 scroll-through screenshots, they know the page is long before they begin scrolling. This pre-shapes spatial expectations.

**Severity: LOW.** Essentially unavoidable with file-based screenshot delivery.

### LOW RISK

**C-7: Viewport width in instructions.** Auditors are told screenshots are at "1440px, 1024px, 768px" (PA skill) or "1440px, 768px" (compose skill). This is technical context — a truly fresh-eyes viewer would not know the exact pixel width of what they are seeing.

**Severity: LOW.** Acceptable tradeoff for multi-viewport evaluation.

**C-8: Timestamp in output directory.** The date in `<content-name>-<date>/` tells auditors when the page was built. Minor.

**Total contamination vectors identified: 8.**
**Vectors addressed by current skill/compose design: 0.**

---

## 3. Experiential vs Analytical Balance

I read all 20 questions (E-01 through E-20, plus E-R1 through E-R3) and classified each.

### Classification Criteria

- **EXPERIENTIAL:** Requires genuine perception. The answer changes based on what the page looks like. Cannot be answered from HTML source alone. Uses perceptual language.
- **ANALYTICAL:** Requires reasoning about structure, pattern recognition, or design knowledge. Could partially be answered from source code. Invites design vocabulary even if the language constraint blocks it.
- **HYBRID:** Has experiential core but analytical framing.

### Results

| Question | Classification | Notes |
|----------|---------------|-------|
| E-01 | EXPERIENTIAL | "What do you notice first?" — pure perception |
| E-02 | EXPERIENTIAL | Scroll speed/attention mapping — embodied experience |
| E-03 | EXPERIENTIAL | Character attribution — personality perception |
| E-04 | EXPERIENTIAL | Pause vs stopped talking — emotional spatial reading |
| E-05 | EXPERIENTIAL | "Can you still breathe?" — physiological response |
| E-06 | HYBRID | "Owns the viewport" is experiential; "placed in the middle" invites layout analysis |
| E-07 | EXPERIENTIAL | "What DO you notice shifting?" — perception of change |
| E-08 | EXPERIENTIAL | "Did someone get tired?" — attention investment perception |
| E-09 | HYBRID | Content-form coupling requires cross-referencing text meaning with visual treatment — some analytical reasoning needed |
| E-10 | ANALYTICAL | "What does the design ADD?" requires comparing to an imagined plain-text version — abstract reasoning, not perception |
| E-11 | HYBRID | "Fighting the content" is experiential tension detection, but identifying the fight requires understanding content intent |
| E-12 | EXPERIENTIAL | "Remove all text and look at shapes" — pure visual structure perception |
| E-13 | HYBRID | "Most complex content" requires reading comprehension to identify complexity; whether the visual treatment helps is experiential |
| E-14 | EXPERIENTIAL | Rhythm perception — musical, embodied |
| E-15 | EXPERIENTIAL | Dramatic peak — emotional intensity perception |
| E-16 | HYBRID | Comparing element instances requires spatial memory and pattern matching across the page |
| E-17 | EXPERIENTIAL | Musical metaphor — synesthetic perception |
| E-18 | EXPERIENTIAL | "Best moment" — peak experience identification |
| E-19 | HYBRID | "Almost working" requires both perception (what you see) and design intuition (what it could become) |
| E-20 | EXPERIENTIAL | "One change for biggest FEEL difference" — experiential prioritization |
| E-R1 | EXPERIENTIAL | "Designed for or squeezed into" — spatial perception |
| E-R2 | EXPERIENTIAL | "Served or punished" — emotional response |
| E-R3 | HYBRID | "Does reorganization make sense" requires reasoning about content needs at different widths |

### Summary

| Type | Count | Questions |
|------|-------|-----------|
| EXPERIENTIAL | 14 | E-01, E-02, E-03, E-04, E-05, E-07, E-08, E-12, E-14, E-15, E-17, E-18, E-20, E-R1, E-R2 |
| HYBRID | 6 | E-06, E-09, E-11, E-13, E-16, E-19, E-R3 |
| ANALYTICAL | 1 | E-10 |

**14 of 20 core questions (70%) are purely experiential. 6 are hybrid. 1 is analytical.** This is a strong experiential ratio.

### Three Laws Compliance

All 20 questions pass Law 1 (requires screenshot) and Law 3 (non-designer can validate). Law 2 (plain language) is technically satisfied — the questions themselves use plain language — but the ANSWERS to E-10, E-13, and E-16 tend to drift toward analytical vocabulary because the questions invite comparative reasoning.

**E-10 is the one question that arguably violates Law 1.** "Imagine this content on a plain white page" — the agent is being asked to reason about a hypothetical, not describe what it sees. This is analytical imagination, not perception. However, it serves a critical function: it asks whether the design is COSMETIC or FUNCTIONAL. This is among the most important questions in the set. The violation is worth the signal.

**Assessment: 9/10.** The question set is remarkably experiential. The few hybrid questions serve critical functions that pure perception questions cannot reach. E-10 is the only genuine violation, and it earns its place.

---

## 4. The Scroll-Through

**Verdict: ADEQUATE but underspecified.**

The scroll-through protocol (lines 63-70) asks three good questions:
- Where did you speed up?
- Where did you slow down?
- Where did you stop?

These map to the three fundamental scroll states. The instruction to "write a 2-3 sentence account of the scroll experience" is appropriately brief — it prevents the scroll-through from becoming a section-by-section analysis.

**What's missing:**

1. **No instruction on scroll SPEED.** "Scroll through every screenshot in sequence" — but at what pace? A Claude agent reading screenshots cannot actually scroll. It reads image files sequentially. The "scroll experience" is a metaphorical reconstruction, not a lived experience. The skill should acknowledge this gap and instruct the agent to imagine scrolling at a natural reading pace, noting where it would WANT to scroll faster or slower based on visual density and interest signals.

2. **No temporal anchoring.** The cold look has a time constraint ("5 seconds"). The scroll-through has none. Without a temporal anchor, an agent may spend 30 seconds analyzing each scroll screenshot rather than experiencing the flow. The scroll-through should instruct: "Spend no more than 3-5 seconds on each scroll capture. You are MOVING THROUGH the page, not studying it."

3. **No direction for TRANSITION perception.** The scroll-through asks about speed changes but not about the experience of moving from one section to the next. The key perceptual signal in scrolling is the BOUNDARY — the moment when one visual world gives way to another. Adding "Where did the page change character?" would capture transition quality.

4. **Screenshot-based scroll is inherently discontinuous.** The agent sees discrete image files, not continuous vertical motion. Scroll-through captures at "80% viewport-height steps" (line 246) mean roughly 20% overlap between frames. This is reasonable for coverage but poor for flow perception. The agent is looking at slides, not watching a movie. The skill should acknowledge this and instruct: "Even though you are seeing discrete images, try to perceive the FLOW between them. Does one image feel like it naturally leads to the next?"

**Assessment: 6/10.** The conceptual framework is right. The operationalization for screenshot-based auditing needs work. The scroll-through risks becoming "look at each screenshot and summarize" rather than "experience the page's vertical journey."

---

## 5. Visual Verification vs Code Interpretation

**Verdict: This is the PA skill's most important — and most fragile — distinction.**

The skill addresses this at lines 72-79 with a clear example:
- WRONG: "I know from the heading structure that this should be Section 3"
- RIGHT: "The text in this area appears small and gray"

**The realistic failure mode is not that agents will open CSS files.** The compose skill prevents that by not providing CSS source to auditors. The realistic failure mode is SEMANTIC LEAKAGE FROM SCREENSHOTS.

When a Claude agent reads a screenshot of a web page, it does not see pixels the way a human does. It processes the image through its multimodal understanding, which includes:

1. **Text recognition.** The agent can read text in screenshots. If the heading says "The Geology of Failure," the agent now knows the content topic — which leaks into its perceptual frame.

2. **Layout pattern recognition.** Claude has been trained on millions of web pages. It recognizes "hero section," "card grid," "footer" patterns automatically. Its perception is already contaminated by web design pattern knowledge. When it says "this area feels like a navigation bar," it may be recognizing a pattern rather than perceiving a visual experience.

3. **Design vocabulary suppression vs actual perception.** The language constraint (lines 289-299) blocks CSS vocabulary from OUTPUTS but cannot block CSS-level reasoning from the agent's internal processing. An agent may think "the font-size is approximately 14px and the line-height looks tight" and then translate that into "the text feels cramped." The perceptual language is a TRANSLATION of analytical perception, not a replacement for it.

**This is not a solvable problem.** Claude is not a naive viewer. It is a model trained extensively on web design. The PA skill does the best possible job of pushing toward experiential language, but the underlying cognition is pattern-matching, not perception.

**The key question is whether the TRANSLATION still produces useful signal.** I believe it does. Even if "the text feels cramped" is a translation of "line-height appears less than 1.4," the output is still more useful than "line-height: 1.2" because:
- It communicates the EXPERIENCE rather than the measurement
- It forces the agent to make a value judgment (cramped = bad) rather than reporting a neutral measurement
- It remains accessible to the refinement builder who needs creative direction, not CSS prescriptions

**Assessment: 5/10.** The skill's design intent is correct, but the underlying reality is that Claude agents don't perceive screenshots the way humans do. The experiential language constraint is the best available mitigation. The signal produced is useful despite being a translation rather than genuine perception. This is a fundamental limitation of AI-based perceptual auditing that no skill file design can fully resolve.

---

## 6. Three Auditors vs Nine

**Verdict: Significant signal loss. Three is the floor of viability, not a reasonable operating point.**

The PA skill specifies 5 auditors (lines 226-237) with carefully designed question assignments ensuring each tier is covered and each auditor has a diverse engagement focus. The compose skill drops this to 3 as minimum, with "scale to 5-9 if budget allows."

**What's lost with 3:**

1. **Coverage gap.** 5 auditors x 4 questions = 20 questions fully covered. 3 auditors x 4 questions = 12 questions. Eight questions go unanswered. With the PA skill's 5-auditor assignment table, dropping to 3 means either:
   - (a) Dropping auditors D and E entirely, losing E-04, E-06, E-09, E-10, E-13, E-15, E-16, E-20 — this eliminates ALL of Tier 3 content-form questions for two auditors and ALL of Tier 5 forward-looking questions for two auditors
   - (b) Reassigning questions, which the compose skill does not specify

2. **Convergence threshold.** The old pipeline's key finding ("catastrophic whitespace voids") was confirmed by 9/9 auditors. With 3 auditors, 2/3 convergence is the best possible signal, and it represents only 67% agreement rather than 100%. More critically, with 3 auditors, a finding reported by 1 auditor is classified as "divergent" and down-weighted by the synthesis — but with 9 auditors, that same finding from 3 auditors would be convergent. **Small N amplifies the convergent/divergent classification error.**

3. **Breadth of perception.** The MEMORY.md explicitly states: "Breadth of perspectives is the key value of Mode 4 PA." Nine auditors bring nine independent first impressions. The cold look varies across agents — different aspects catch different eyes. With 3, you get 3 first impressions. The chance of ALL THREE missing a subtle-but-important perception is much higher.

4. **Adversarial coverage.** With 9 auditors, the probability that at least one auditor is a contrarian (sees something differently from consensus) is high. With 3, you are likely to get 3 similar impressions, especially since all 3 are Opus agents with similar training.

**What's preserved with 3:**
- Cold look independence (each agent still sees the page fresh)
- Language constraint enforcement
- Minimum viable convergence signal (2/3 agreement)

**The compose skill says "scale to 5-9 if budget allows."** This is the wrong framing. It should say "5 is the standard deployment. 3 is an emergency minimum that sacrifices convergence quality and question coverage. 9 is the full Mode 4 deployment for high-stakes pages."

**Assessment: 4/10.** Three auditors is a survival mode, not a design choice. The compose skill treats it as the default, which normalizes inadequate coverage.

---

## 7. Screenshot Quality

**Verdict: Missing mobile viewport is a meaningful gap.**

The compose skill captures at 1440px (desktop) and 768px (tablet). The PA skill specifies 1440px, 1024px, and 768px. Neither includes mobile (375px or 390px).

**What's lost without mobile:**
- Whether the page functions at all on small screens
- Whether responsive design degrades gracefully or catastrophically
- Touch-target sizing (though this is more analytical than experiential)
- Whether the page's compositional rhythm survives radical viewport change

**What's lost without 1024px:**
- The intermediate breakpoint where many layouts shift from desktop to tablet mode
- The compose skill drops this viewport entirely

**However:** The E-R1 through E-R3 responsive questions only trigger "when screenshots are provided at multiple viewport widths." With only 2 widths (1440 + 768), responsive evaluation is thin. The old pipeline had DPR issues with screenshot capture (0.667 DPR causing black screenshots). Screenshot quality issues are more damaging than missing viewports.

**Assessment: 6/10.** Two viewports is adequate for core experiential audit. Mobile is a real gap for pages that will be viewed on phones. 1024px omission from compose is less critical. The bigger risk is screenshot QUALITY (DPR, blank captures, font loading) which the PA skill addresses (lines 276-284) but the compose skill does not.

---

## 8. Synthesis Quality

**Verdict: Orchestrator synthesis is a contamination risk. Separate Weaver agent is the correct design.**

The compose skill (Step 3C, lines 132-139) has the ORCHESTRATOR synthesize PA results into convergent/divergent findings and an overall verdict. The PA skill (lines 311-422) specifies a dedicated WEAVER role with its own experiential process.

**Problems with orchestrator synthesis:**

1. **The orchestrator has context.** The orchestrator has read the conviction brief, the builder reflection, the component files, the tokens. When it reads auditor report saying "the middle section feels abandoned," the orchestrator may unconsciously filter this through its knowledge that the builder intended that section to be "sparse bedrock." This is EXACTLY the contamination the fresh-eyes principle is designed to prevent.

2. **The orchestrator's language will drift analytical.** The Weaver protocol specifies AMPLIFY/RELEASE/DEEPEN structure with creative language. The orchestrator, having processed gate results and file manifests all session, will naturally produce synthesis in pipeline language: "2 of 3 auditors flagged the middle section. Convergence signal: spatial concern. Recommend Type A fix."

3. **The orchestrator lacks the Weaver's experiential anchor.** The Weaver is instructed (line 317) to "scroll through every screenshot as a reader" and write a 3-sentence first impression BEFORE reading auditor reports. The orchestrator, having already taken those screenshots, will not have a fresh-eyes experience of them.

4. **Creative direction vs routing decision.** The Weaver's Output 2 (Creative Direction) is written "FOR a creator, not for a manager." The orchestrator IS the manager. Its synthesis will naturally lean toward fix routing rather than creative inspiration.

**The PA skill's Weaver design is superior.** It adds one more agent spawn but preserves the experiential chain: auditors perceive, Weaver synthesizes perception into creative direction, builder receives creative direction. The orchestrator should route the verdict (SHIP/REFINE/REBUILD) but should not produce the creative direction.

**Assessment: 3/10.** The compose skill's decision to have the orchestrator handle synthesis is the single biggest experiential compromise in the pipeline. It short-circuits the PA skill's most carefully designed handoff: from perception to creative direction. The Weaver is not optional — it is the mechanism that translates experiential findings into builder-usable creative tissue.

---

## 9. Void Detection

**Verdict: Current PA skill WOULD surface whitespace voids, but not with maximum sensitivity.**

The old pipeline's biggest finding was "catastrophic whitespace void" — 9/9 auditors flagged 70-80% of the scroll as blank cream space. Could the current 20-question set catch this?

**Questions that would surface voids:**

- **E-04:** "Find the most generous area of empty space. Does it feel like a pause or like the other person stopped talking?" — DIRECT detection. A void that occupies 70% of the page would be immediately flagged as "stopped talking."
- **E-08:** "Divide the page into thirds. Does each third feel like it got the same amount of attention?" — A void in the middle or bottom third would surface as "someone got tired."
- **E-02:** "Where did you speed up?" — A void zone is a speed-up zone. The auditor would report racing through empty space.
- **E-06:** "Does the content feel like it owns the viewport or like it's been placed in the middle?" — A void with content cowering in a narrow strip.

**Questions that would NOT surface voids but should:**
- No question directly asks "Is there any area that feels EMPTY in a bad way — not designed silence, but actual absence?" The closest is E-04, but E-04 asks about "generous space" which frames emptiness positively before the auditor evaluates it. A catastrophic void is not "generous space" — it is NOTHING. The framing of E-04 may actually soften the auditor's response to what should be a WOULD-NOT-SHIP finding.

**With 3 auditors:** E-04 is assigned to auditor D (in the PA skill's 5-auditor table). If the compose skill uses only 3 auditors (A, B, C), E-04 may not be assigned at all. This means the single most direct void-detection question could go unasked.

**With the cold look:** A catastrophic void WOULD be caught by the cold look, assuming the full-page screenshot captures it. The gut reaction to 70% blank space is visceral. But the cold look produces only 4 data points (gut reaction, worst thing, best thing, ship it), and if the void is in the scroll-through rather than above the fold, the cold-look screenshot (above-the-fold only in the compose skill) would miss it entirely.

**Assessment: 7/10.** The question set has the tools to catch voids, but the compose skill's reduced auditor count (3 vs 5) and reduced screenshot scope (above-the-fold cold look) create real risk that a catastrophic void in the lower page goes undetected or under-reported.

---

## 10. Recommendations

### CRITICAL (must fix for experiential integrity)

**R-1: Restore the Weaver as a separate agent in the compose skill.**
The compose skill's Step 3C should spawn a dedicated Weaver agent that:
- Receives ONLY screenshots and all auditor reports
- Follows the PA skill's Weaver protocol (experiential anchor, then read reports)
- Produces Experience Portrait, Creative Direction (AMPLIFY/RELEASE/DEEPEN), and Verdict
- Does NOT receive: conviction brief, builder reflection, gate results, or any pipeline context

The orchestrator extracts the verdict for routing but does not produce synthesis.

**Edit to compose SKILL.md, Step 3C:** Replace the current "YOU do this" synthesis with a Weaver agent spawn following the PA skill's Section "THE WEAVER: CREATIVE SYNTHESIS" protocol.

**R-2: Create a stripped auditor-only version of the PA skill.**
Current auditors receive the full 524-line skill including Weaver instructions, Bridging Questions, and system architecture. They should receive only:
- The One Rule (line 23)
- The Three Laws (lines 29-34)
- Your Role as Auditor (lines 36-38)
- Section 0: The Experiential Pass (lines 42-88)
- Their 4 assigned questions only (not all 20)
- Language Constraint (lines 289-308)
- Metaphor Awareness (lines 488-503)

Estimated: ~150 lines instead of 524. This removes 370 lines of contaminating context.

**R-3: Sanitize screenshot file paths before PA.**
Before spawning auditors, copy screenshots to opaque paths:
```
_pa/_images/v1-01.png, v1-02.png, ...  (viewport 1)
_pa/_images/v2-01.png, v2-02.png, ...  (viewport 2)
```
No content names, no viewport pixel widths, no "cold-look" or "scroll" labels in filenames.

### HIGH PRIORITY (significant experiential improvement)

**R-4: Increase minimum auditors to 5 in the compose skill.**
Change line 117 from "3 Opus agents as independent auditors (minimum viable for signal)" to "5 Opus agents as independent auditors (minimum for full question coverage)." Three auditors should be labeled as degraded mode, not default mode.

**R-5: Add temporal anchoring to the scroll-through.**
Add to Section 0, after line 64:
```
Spend no more than 3-5 seconds per scroll image. You are MOVING THROUGH
the page, not studying individual frames. Note where you want to linger
(high interest) and where you want to skip ahead (low interest). The
scroll-through should take less than 60 seconds total.
```

**R-6: Add explicit void detection question.**
Add E-04b or modify E-04:
```
E-04b: "Is there any area on this page that feels EMPTY — not designed
silence, but actual absence? A zone where nothing is happening and
nothing seems intended to happen? How large is it relative to the
full page?"
```

This is more direct than E-04's "generous space" framing, which softens the perception of catastrophic voids.

**R-7: Add full-page cold-look screenshot to compose skill.**
Currently the compose skill captures "above-the-fold (no scroll)" as the cold look, plus scroll captures. The PA skill specifies "1 cold-look capture (full page)" (line 265). The compose skill should match: a full-page screenshot for the cold look, so that voids in the lower page are visible in the initial gut reaction.

### MODERATE PRIORITY (polish and hardening)

**R-8: Strip the auditor deployment table to per-auditor view.**
Each auditor should see only their own row, not the full table. This prevents awareness of the team structure.

**R-9: Add 1024px viewport to compose skill.**
Match the PA skill's three-viewport specification (1440, 1024, 768) instead of two (1440, 768).

**R-10: Add transition perception to scroll-through.**
Add to the scroll-through instructions:
```
- Where did the page change character? (A boundary where one visual
  world gives way to another — or where it SHOULD change but doesn't.)
```

---

## Overall Assessment

### The PA Skill (standalone): 8.5/10 for experiential design

The PA skill is genuinely experiential-first. Section 0 is well-designed as the foundation, not a warm-up. The 20 questions are overwhelmingly perceptual (14/20 purely experiential, 6 hybrid, 1 analytical). The language constraint is the strongest possible enforcement of experiential framing short of preventing text output entirely. The Weaver protocol preserves experiential signal through synthesis. The Three Laws are simple and effective filters.

The skill's weaknesses are inherent to AI-based perceptual auditing (agents pattern-match rather than perceive) and to single-pass architecture (the cold look lock is normative, not mechanical). These are not design failures — they are honest limitations.

### The Compose Skill's PA Deployment: 5/10 for experiential integrity

The compose skill makes three decisions that significantly degrade the PA skill's experiential design:

1. **Orchestrator synthesis instead of Weaver agent** (most damaging — contaminates the perception-to-creation handoff)
2. **3 auditors instead of 5** (reduces question coverage from 100% to ~60% and weakens convergence signal)
3. **No path sanitization** (leaks content identity to auditors through file paths)

These are not cost-saving tradeoffs — they are experiential compromises that undermine the PA skill's core principle. The PA skill was designed around 5 isolated auditors feeding a context-free Weaver. The compose skill deploys 3 partially-contaminated auditors feeding a fully-contaminated orchestrator. The soul of perceptual auditing — fresh-eyes perception translated into creative direction — is present in the PA skill but degraded in its deployment.

### The Bottom Line

The PA skill's experiential foundation is solid. The compose skill's deployment of it is where the experiential signal gets diluted. The three critical recommendations (R-1, R-2, R-3) would restore most of the experiential integrity. R-4 (5 auditors) would restore question coverage. Together, these four changes would bring compose's PA deployment from 5/10 to approximately 8/10 for experiential integrity.

The experiential scan IS the soul of perceptual auditing. The PA skill knows this. The compose skill needs to treat it with the same reverence.
