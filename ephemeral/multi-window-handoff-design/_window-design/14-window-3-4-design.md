# Window 3 (Evaluation) and Window 4 (Refinement) Design

**Date:** 2026-02-28
**Author:** Window 3-4 Designer
**Sources:** 01-ideology-extraction.md, 02-implementation-audit.md, 06-handoff-tissue.md, 08-adversarial.md, actual build artifacts (Gas Town Extraction 2026-02-28), SKILL.md (v2, 957 lines)

---

## Design Philosophy

Two principles govern this design:

1. **What works stays.** The current pipeline (SKILL.md v2) produced PA-05 3.5/4 -- CEILING quality. The adversarial review (08) correctly identifies that the REFINE window is the highest-value intervention in the entire system. This design preserves what works and makes targeted improvements.

2. **Each window serves ONE cognitive mode.** Building is generative. Evaluation is perceptual. Refinement is amplification. These modes contaminate each other when mixed. The window boundaries exist to separate cognitive modes, not to manage context size.

---

## WINDOW 3: EVALUATION

### 3.1 The Question This Window Answers

Window 3 answers one question: **What is the distance between this page's personality and its best self?**

It does not answer "does this page comply?" (that is mechanical gate work) or "what rules did the builder break?" (that is extraction thinking). It answers a perceptual question: what does this page feel like, and where is it reaching for something it does not quite grasp?

### 3.2 Screenshot Protocol

**Actor:** Orchestrator (before spawning any evaluation agents)

**Protocol:**

```
1. Serve output.html via http-server (same as current Step 2.1-2.2)

2. Disable scroll-triggered visibility:
   browser_evaluate(() => {
     document.querySelectorAll('*').forEach(el => {
       el.style.setProperty('animation', 'none', 'important');
       el.style.setProperty('opacity', '1', 'important');
       el.style.setProperty('visibility', 'visible', 'important');
       el.style.setProperty('transform', 'none', 'important');
     });
   })

   RATIONALE: The Gas Town build had scroll-triggered visibility that
   hid 60%+ of content during scroll-through screenshots. This was
   the dominant finding of 5/5 auditors -- a "broken page" that was
   actually complete but hidden. Content visibility is physics, not
   style. Force everything visible before capture.

3. Wait 2 seconds for reflow/font loading:
   browser_evaluate(() => document.fonts.ready)

4. Two viewports: 1440px, 768px
   For EACH viewport:
   a. Cold look (full page): browser_take_screenshot(fullPage=true)
   b. Scroll-through at 80% viewport increments (current behavior)
   c. VALIDATE: Compare cold-look height with sum of scroll shots.
      IF cold-look contains content areas not covered by any scroll
      shot (height mismatch > 20%), RE-CAPTURE with longer scroll.

5. Save to {output_dir}/_screenshots/{viewport}/
   Validate file sizes > 5000 bytes (current behavior)
```

**Key change from current:** The force-visible override before screenshot capture. This is the single highest-ROI change -- it prevents the dominant audit failure (invisible content) from consuming all 5 auditors' attention on a non-compositional problem.

### 3.3 Gates as Physics Verification

Gates exist to catch things that are mechanically wrong: container width violations, color palette errors, accessibility failures. They do NOT measure compositional quality, richness, or creative merit. The Weaver's verdict handles creative judgment. Gates handle physics.

**Gate inventory: 30 gates (current), classified into 3 tiers:**

| Tier | Count | Examples | What They Catch |
|------|-------|---------|-----------------|
| REQUIRED (14) | 14 | GR-03 (container), GR-05 (warm palette), GR-60 (WCAG) | Physics violations -- the page is mechanically broken |
| RECOMMENDED (1) | 1 | GR-45 (typography variation) | Structural monotony -- the page is technically correct but perceptually flat |
| ADVISORY (9+4 BV+1 meta) | 14 | GR-01, GR-02, etc. | Informational -- logged but never block |

**What this design preserves and what it changes:**

1. **Gates and PA run in parallel** (current behavior, preserved). Gates measure mechanics; PA measures perception. They are orthogonal and neither waits for the other.

2. **Gate results never enter any auditor's or Weaver's context.** This is the current design and it is correct. Cross-contamination destroys the independence that makes PA valuable.

3. **Gate results inform the routing decision.** The orchestrator reads gate results and Weaver verdict independently, then applies the routing matrix. This is the current design and it is correct.

4. **No gate reduction.** The adversarial review (08) notes the system achieves CEILING quality with the current 30 gates. Reducing gate count is a solution in search of a problem. The gates are lightweight (single browser_evaluate call, <2 seconds) and do not consume context in any creative window.

5. **DPR workaround.** The GR-03 (container width) and GR-14 (stacked gap visual) failures in the Gas Town build were DPR measurement artifacts, not real violations. The gate runner normalizes for DPR before comparison. This is an implementation fix, not an architectural change.

### 3.4 PA Auditors

**Count: 5 auditors (current), preserved.**

The adversarial review (08) argues that 5 is sufficient. The previous "Mode 4" PA used 9 auditors and found that 9/9 converged on the dominant issue (whitespace void). 5 auditors provide adequate convergence detection while keeping the context budget manageable for the Weaver.

**What each auditor receives:**

| Content | Classification | Rationale |
|---------|---------------|-----------|
| Receiving Principle (5 directives) | Creative knowledge | Frames perception as sovereign |
| Section 0 protocol (Cold Look + Scroll-through) | Creative knowledge | Experiential anchoring |
| Screenshot paths (Read tool) | Plumbing | Visual access to the page |
| 4 assigned questions (from the 20) | Creative knowledge | Perceptual prompts |
| Language constraint | Rules | Forces perceptual vocabulary |

**What auditors do NOT receive (UNCHANGED):**

- Gate results
- Builder's reflection
- Other auditor reports
- Conviction brief
- Mechanism catalog / components CSS
- Content markdown
- Any numerical targets or thresholds
- ANY information about what the builder intended

**Why zero-context auditors are the right design:**

The handoff tissue analysis (06) confirms: "The page does not work because most of its content cannot be seen" came from auditors who had zero context. They saw a broken page and reported it as broken. An auditor who received the conviction brief would have known the content "should be there" and might have rationalized the void as intentional spacing. Fresh-eyes independence is not a nice-to-have. It is the mechanism that catches what builders cannot see in their own work.

**Question assignment (current, preserved):**

| Auditor | Questions | Tier Coverage |
|---------|-----------|---------------|
| A | Q-01, Q-05, Q-11, Q-17 | First Encounter + Spatial + Content-Form + Coherence |
| B | Q-02, Q-08, Q-14, Q-18 | First Encounter + Spatial + Coherence + Almost There |
| C | Q-03, Q-07, Q-12, Q-19 | First Encounter + Spatial + Content-Form + Almost There |
| D | Q-04, Q-06, Q-13, Q-20 | Spatial (x2) + Content-Form + Almost There |
| E | Q-09, Q-10, Q-15, Q-16 | Content-Form (x2) + Coherence (x2) |

**Output:** `{output_dir}/_pa/auditor-{A-E}.md`

### 3.5 The Weaver

**The Weaver is the most important agent in the pipeline.** This is not rhetoric. The handoff tissue analysis (06) concludes: "The Weaver is the single most important handoff mechanism. It is the only agent that synthesizes perception (auditors) with intent (brief + reflection) into creative direction (for the REFINE builder). If the Weaver fails or produces thin output, the entire handoff collapses."

The current Weaver design is already strong. The Gas Town Weaver synthesis is evidence: it produced creative direction that the REFINE builder acted on to achieve the +1.5 PA-05 improvement. This design preserves the core and makes targeted improvements to maximize handoff tissue quality.

**What enters the Weaver's context:**

| Content | Lines (est.) | Classification | Purpose |
|---------|-------------|---------------|---------|
| Receiving Principle (6 directives) | ~15 | Creative knowledge | Frames the Weaver as creative director |
| 1440px screenshot paths | ~5 | Plumbing | Weaver's own visual impression |
| 5 auditor reports | ~300-600 | Creative knowledge | Raw perceptual data from 5 independent observers |
| Conviction brief | ~75 | Creative knowledge | Builder's intent -- what the page was TRYING to be |
| Reflection (v1) | ~80 | Creative knowledge | Builder's self-assessment -- roads taken and not taken |
| RAW research files (RESEARCH-SYNTHESIS + R5) | ~2,100 | Creative knowledge | Compositional theory (density manifold, component choreography) -- see CREATIVE CORPUS section below |

**What the Weaver does NOT receive:**

- Gate results (mechanics and creative judgment are different kinds of seeing)
- Content markdown (the Weaver judges the DESIGNED output, not the input)
- Reference files (mechanism catalog, components, tokens, prohibitions -- the Weaver is not a builder)
- Previous Weaver reports (independence across runs)
- Raw exploration HTML files (specific CSS moves -- the Weaver is not a builder; it needs THEORY to understand perceptions, not TECHNIQUES to implement changes)
- Case studies (how builders think -- irrelevant to synthesis)

**Weaver output format (ENHANCED):**

The current 5-section format is strong. One structural enhancement: the Weaver's output explicitly serves as handoff tissue by adding sections that directly address the REFINE builder.

```markdown
# Weaver Synthesis

## 1. EXPERIENTIAL ANCHOR (~5-8 sentences)
Weaver's own first impression from screenshots.
Written BEFORE reading any auditor report. Unrevised.

## 2. WHAT IS WORKING
Convergent strengths from 3+ auditors.
Written so the REFINE builder understands WHY they work --
not just THAT they work. Include the mechanism: "This works
because three channels shift simultaneously" not just "the
transition works."

## 3. WHAT IS ALMOST THERE
Near-misses framed as creative invitations, not defect reports.
"The garrison metaphor is announced but not yet pervasive" (Gas Town)
vs "metaphor implementation is incomplete" (defect language).

## 4. WHERE TO GO
Creative direction in 4 territories:
- AMPLIFY: The page's best moment. What makes it work. Extend it.
- RELEASE: Where tension should resolve. Where the page holds too tight.
- DEEPEN: The near-miss. Shortest path to significant improvement.
- THE GAP: Distance between the page's personality and its best self.
  Written as a metaphor, not an assessment.

## 5. WHAT TO PROTECT
NEW SECTION. What the REFINE builder would do well to preserve.
3-5 specific things that are working and would be easy to
accidentally destroy during refinement. Each with a WHY:
"The three identity cards work because they encode a peer
relationship through horizontal arrangement. If you stack
them vertically for mobile, find another way to preserve
the peer signal."

## 6. BUILDER'S SUPPRESSED ENERGY
NEW SECTION. The Weaver reads the builder's reflection and
surfaces suppressed creative ideas as explicit invitations:
"The first builder wanted dark bead cards but suppressed
the impulse. You have permission to try this. The builder's
concern was a fourth dark zone feeling heavy. Consider
whether a warmer dark (#3A3028 vs #1E1E1E) would create
'documents on a desk' rather than 'another command post.'"

This section converts the reflection's dimension 5
(suppressed energy) from historical note into creative
invitation for the REFINE builder.

## 7. VERDICT
SHIP / REFINE / RETHINK + one-sentence reason.
```

**Why 7 sections instead of 5:**

- Section 5 (WHAT TO PROTECT) addresses a real gap: the Gas Town REFINE builder preserved the opening sequence's quality precisely because the Weaver praised it. But implicit protection is fragile. Explicit "do not break X because Y" is cheaper than hoping the REFINE builder independently recognizes what is working.

- Section 6 (BUILDER'S SUPPRESSED ENERGY) addresses the handoff tissue analysis's finding that dimension 5 (suppressed creative energy) is "labeled but classified as ALTERNATIVES, not opportunities." The Weaver is uniquely positioned to transform suppressed energy into creative invitations because it has read BOTH the builder's reflection (what they wanted but couldn't) AND the auditors' reactions (what the page actually needs).

**The routing decision:**

The Weaver's VERDICT is the primary creative judgment. The routing matrix (current) combines this with gate results:

| Weaver Verdict | Gates | Route |
|---------------|-------|-------|
| RETHINK | any | RETHINK (re-derive metaphor) |
| SHIP | PASS | SHIP |
| SHIP | FAIL | PATCH_THEN_SHIP |
| REFINE | PASS | REFINE |
| REFINE | FAIL | PATCH_THEN_REFINE |

This matrix is correct as designed. The Weaver controls the creative decision. Gates control the mechanical decision. The orchestrator combines them mechanically. No interpretation.

### 3.6 What Window 3 Hands to Window 4

**Deliverables that flow to the REFINE builder:**

| Deliverable | Source | Handoff Role |
|-------------|--------|-------------|
| `output.html` | Window 2 builder | The artifact (dimension 1) |
| `_pa/weaver-synthesis.md` | Window 3 Weaver | Creative direction + protection list + suppressed energy |
| `_reflection.md` | Window 2 builder | Builder's conviction, alternatives, unresolved (dimensions 2-6) |
| `_tc-brief.md` | Window 1 TC derivation | Conviction, calibration, opposition, arc, content map |
| `_content.md` | User input | Raw content for context |
| Reference files (4) | Design system | Mechanisms, components, prohibitions, tokens |
| `_gate-results.json` | Window 3 gate runner | **NOT handed to REFINE builder** -- remains orchestrator-only |
| `_user-direction.md` | User (if exists) | Step 9 only -- user feedback for second REFINE |

**What does NOT flow (and why):**

- **Individual auditor reports** do not reach the REFINE builder. The Weaver synthesis is the compressed, directed version. Loading 5 raw auditor reports (~300-600 lines of perceptual prose) would flood the REFINE builder's context with unfocused observations. The Weaver's compression into creative territories is the correct abstraction level.

  **Exception:** If the Weaver fails to produce output, ALL 5 auditor reports load directly (current fallback behavior, preserved).

- **Gate results** do not reach the REFINE builder. Mechanical failures are either patched by the orchestrator (deterministic CSS fixes) or are structural and will be addressed as a natural consequence of compositional refinement. Telling the REFINE builder "GR-05: 111 cold colors" would activate compliance mode. The Weaver's perceptual framing ("the dark zones need differentiation") achieves the same outcome through creative direction.

- **Screenshots** do not reach the REFINE builder. This is a deliberate design choice that the adversarial review (08) questions ("the REFINE builder never sees the page visually -- only reads HTML"). The evidence suggests this is correct: the Gas Town REFINE builder produced PA-05 3.5/4 without ever seeing screenshots. The REFINE builder works from HTML (code-level understanding) + Weaver (perceptual-level understanding). Adding screenshots would create a third information channel that competes with the Weaver's curated direction. The Weaver has already looked at the screenshots and translated visual perception into creative language. Giving the REFINE builder screenshots would bypass the Weaver and risk the builder forming their own perceptual assessment that conflicts with the Weaver's directed one.

  **Counter-consideration:** If the Weaver's perception is wrong, screenshots would let the REFINE builder correct it. But N=1 evidence shows the Weaver's perception was right (Gas Town Weaver accurately identified the opening sequence as excellent and the later sections as needing work). Keep screenshots out unless future evidence shows the Weaver systematically misperceives.

---

## WINDOW 4: REFINEMENT

### 4.1 The Question This Window Answers

Window 4 answers one question: **What is the ONE thing that would make this page more of what it already is?**

This is not a fix window. It is an amplification window. The REFINE builder's job is not to address a list of issues but to find the single creative intervention that would have the largest impact on how the page feels.

### 4.2 What Enters the REFINE Builder's Context

**In sequenced prompt order (ordering matters -- each piece builds on the last):**

```
1. ROLE + SCOPE (3 lines)
   "You are building the second version of a page. Your job is not
   to fix problems. Your job is to make the page more of what it
   already is."

2. RECEIVING PRINCIPLE (5 steps with checkpoints)

3. STEP 1: THE PAGE [output.html]
   + CHECKPOINT: "Write 2 sentences about what you experience."

4. STEP 2: CREATIVE DIRECTION [Weaver synthesis]
   + Framing: "territories to enter, not instructions to follow"

5. STEP 3: PREVIOUS BUILDER'S REFLECTION [_reflection.md]
   + Prompt: "What excites you? What tension is still alive?"

6. STEP 4: THE CREATIVE DIRECTION [_tc-brief.md]
   + "The gap between aspiration and reality is not failure.
     It is your creative territory."

7. STEP 5: CONTENT + BUILDING MATERIALS
   [_content.md + prohibitions + tokens + mechanisms + components
   + conventions block]

8. USER FEEDBACK (if exists) [_user-direction.md]

9. CREATIVE COMMITMENT
   "What is the ONE THING you want to do with this page?"

10. BUILD instruction + reflection-v2 requirement
```

**This is the current prompt structure, PRESERVED.**

The adversarial review (08) makes the strongest argument for keeping it unchanged: "The REFINE builder that produced PA-05 3.5/4 received approximately 4.4% of the corpus -- and it was the 'wrong' files by the transcript's taxonomy. It received rules, constraints, mechanical specifications. It ALSO received the Weaver report, the reflection, and the conviction brief. It produced the best result in the project's history."

### 4.3 The Relationship Between Explorations/Research and the REFINE Builder

**Not full corpus dumps. Yes to SELECTED raw files.**

The adversarial review's argument against loading the ENTIRE corpus remains decisive:

1. **Relevance beats richness.** Loading DD-001 through DD-006 (~6,400 lines of raw HTML) would give general design philosophy but not specific direction about the current page.

2. **Context is zero-sum.** Loading ~6,000-13,000 lines of raw explorations would more than double the context load and compress reasoning space.

3. **The sweet spot exists.** Focused, specific context beats broad, diffuse context.

**However, SELECTED raw files serve a different purpose than full corpus dumps.** The REFINE builder faces a specific creative problem: it knows WHERE to go (the Weaver's direction) but needs compositional repertoire -- specific techniques proven to create perceptible effects -- without the context flood of the full corpus.

**The key insight:** The correct approach is SELECTION and DISTRIBUTION of raw files, not extraction into digests. Digests compress 36:1 and reproduce exactly the failure mode the ideology condemns: "bottling the exhaust of a fire and using it as fuel." Raw files preserve the creative processing state that digests destroy.

See the CREATIVE CORPUS IN WINDOWS 3 AND 4 section (below) for the complete analysis of WHICH raw files enter the REFINE builder's context and WHY they differ from Window 2's corpus loading.

**The REFINE builder receives the same reference files as the BUILD builder** (mechanism catalog, components CSS, prohibitions, tokens). These reference files are tools, not instructions -- they expand the builder's vocabulary without directing its attention.

### 4.4 Why the REFINE Builder Does Not See Screenshots

**The current design does not give the REFINE builder screenshots, and the Gas Town REFINE builder produced PA-05 3.5/4 without them.** The Weaver's perceptual synthesis is a higher-quality input than raw screenshots because:

- The Weaver has correlated 5 independent perceptions into convergent/divergent observations
- The Weaver frames observations as creative territories, not visual defects
- The Weaver contextualizes observations against the builder's intent (brief + reflection)

**The one exception:** The REFINE builder reads the page it is refining. The current prompt includes the artifact HTML as Step 1 with a checkpoint ("Write 2 sentences about what you experience"). This is correct -- the builder reads the code, forms an impression, then reads the Weaver's creative direction. The builder's code-level understanding + Weaver's perceptual-level direction = complementary channels that together produce better refinement than either alone.

### 4.5 Why Focused Context Worked

The adversarial review's analysis deserves direct address:

> "The REFINE builder's focused context (~5,800 lines) produced the best result (3.5/4). Does adding more material help or hurt?"

The evidence says adding GENERAL material hurts and adding SPECIFIC material helps. The REFINE builder's context was almost entirely specific to this page:

- output.html: THIS page's CSS and HTML
- Weaver synthesis: 5 people's reactions to THIS page
- Reflection: THIS builder's creative self-assessment
- Conviction brief: THIS builder's metaphor and arc

The reference files (mechanisms, components, prohibitions, tokens) are general but serve as tools, not direction. They expand the builder's vocabulary without directing its attention.

The lesson: the REFINE builder's context works when it is MAXIMALLY SPECIFIC to the current page and MINIMALLY GENERAL about design philosophy. Every line is about THIS page, THIS metaphor, THIS creative territory. Explorations, research, and case studies are about OTHER pages and would dilute specificity.

### 4.6 What the REFINE Builder Produces

**2 files (UNCHANGED):**

1. `{output_dir}/output.html` -- overwrites existing HTML with refined version
2. `{output_dir}/_reflection-v2.md` -- 5-dimension reflection

**Reflection structure (ENHANCED from 3 to 5 sections):**

```markdown
# Reflection v2

## CONVICTION
What were you trying to make? Where did you succeed/fall short?
The ONE THING you committed to -- did you achieve it?

## ALTERNATIVES
What roads did you not take? Why?
What creative energy did you suppress?
Label each: "Road not taken: [name]" and "Suppressed: [name]"

## DISCOVERIES
NEW SECTION.
What emerged during refinement that you did not plan?
What did the first builder's work teach you about the content?
What did you learn about the metaphor by working inside it?

## UNRESOLVED
What tension remains? What would you tell a third builder?
What is aesthetically incomplete?

## PROTECTION LIST
NEW SECTION.
3-5 things you preserved from the first builder's work and WHY.
This creates continuity evidence -- the third builder (if any)
can trace what survived from W2 through W4 and understand
WHY it survived.
```

**Why 5 sections instead of 3:**

- DISCOVERIES (dimension 4 -- surprises) was the weakest dimension in the handoff tissue analysis. The current 3-section template buries surprises under UNRESOLVED. A dedicated section invites the builder to explicitly name what emerged.

- PROTECTION LIST creates a survival record. The handoff tissue analysis found that the v2 reflection is "currently a dead document." Even if the v2 reflection is never read by another agent (which is the current case unless Step 9 triggers), the protection list has value: it tells the user what the REFINE builder chose to preserve, making the refinement process auditable.

### 4.7 The v2 Reflection: Not Dead, An Archive

The handoff tissue analysis (06) identifies that `_reflection-v2.md` is "rich information that goes nowhere." This is true in the current design: the v2 reflection is never read by any subsequent agent unless Step 9 (user-requested second REFINE) triggers.

**Design decision: The v2 reflection is NOT dead -- it is an archive.**

The v2 reflection serves two purposes:

1. **Step 9 input.** If the user requests a second REFINE cycle, the third builder receives both reflections + user direction. The v2 reflection is alive in this path.

2. **Build record for the user.** The user reads the v2 reflection as part of the ship report (Step 8.8). It tells the user what the REFINE builder was thinking, what was preserved, what was changed, and what remains unresolved. This is valuable for the user's own understanding of the page, even if no agent ever reads it again.

**On post-REFINE evaluation:**

The current pipeline runs post-REFINE gates (Step 8.2) and a regression check (Step 8.3b) but does NOT run a second PA evaluation after refinement. Two reasons this is correct by default:

1. **Diminishing returns.** The REFINE step already improved PA-05 from 2.0 to 3.5. A post-REFINE PA would consume 5 more Opus agents + 1 Weaver to produce a quality assessment of something that is already CEILING quality. The ROI is negative for the default case.

2. **Infinite regress.** If post-REFINE PA finds issues, it implies a second REFINE. If second REFINE gets its own post-REFINE PA, it implies a third. There is no natural stopping point. The current design uses post-REFINE GATES (mechanical regression check) as the stopping criterion and defers creative judgment to the user via Step 9.

**Exception:** Step 9 (user-requested second REFINE) runs abbreviated PA before spawning the third builder. The user has explicitly asked for another cycle, so investing in evaluation is warranted.

---

## THE FULL CHAIN: What Survives Each Transition

### W1 (TC Derivation) -> W2 (Building)

**What SURVIVES:**

| Artifact | Content | Creative Intelligence |
|----------|---------|----------------------|
| Conviction brief (~80-165 lines) | Metaphor, opposition, arc, calibration, content map | The TC pipeline's deepest creative work -- 14-axis questioning compressed into a creative commitment |

**What DIES:**

- The TC skill's questioning process (841 lines of derivation methodology). The brief carries the CONCLUSION but not the JOURNEY. The builder who derived the metaphor through 14 axes of questioning, opposition analysis, and metaphor collapse cannot transmit the experience of that derivation. Only its output survives.

- Content processing state. The TC instance read the content deeply and formed connections. Those connections exist as attention patterns during the TC instance's lifetime. They do not transfer. The conviction brief is the TC instance's best attempt to externalize its most important connections. Some are lost.

**What is CREATED at this boundary:**

- Creative ownership. The conviction brief is authored by the TC instance. The BUILD instance reads it as someone else's creative direction. This separation creates productive distance -- the builder can engage with, push back against, or extend the brief rather than being locked into the TC instance's framing.

### W2 (Building) -> W3 (Evaluation)

**What SURVIVES:**

| Artifact | Content | Creative Intelligence |
|----------|---------|----------------------|
| output.html (~1,500-2,500 lines) | The page itself -- every CSS decision, every class name, every structural choice | The builder's full creative output. This is the richest artifact in the chain. |
| _tc-brief.md (~75-165 lines) | Metaphor, calibration, opposition, arc, content map | Builder's inherited conviction (from W1), unchanged |
| _reflection.md (~80-120 lines) | Conviction, alternatives, unresolved, surprises | Builder's creative self-assessment -- what they were reaching for, what they rejected, what remains open |
| Screenshots (~20-40 PNG files) | Visual captures at 1440px and 768px | The page as a reader would see it (bypasses code-level understanding) |

**What DIES:**

- The builder's processing of the mechanism catalog. The builder read 751 lines of mechanism descriptions and selected 14. The reasoning behind each selection is partially captured in the TC brief's CALIBRATION section but the full consideration (why THIS spatial mechanism here, why NOT that material mechanism there) is lost.

- The builder's experience of reading the content. The builder processed the content markdown and formed an understanding of its structure, rhetoric, emotional arc. The output HTML embeds this understanding in structural choices (which content gets which zone, which transitions get which treatment) but the understanding itself does not transfer.

- Component adaptation decisions. The builder adapted components from the library. Why they adapted some and invented others is not documented. The reflection captures "roads not taken" at the MACRO level (metaphor alternatives) but not at the MICRO level (component adaptation choices).

**What is CREATED at this boundary:**

- Perceptual data. 5 auditors experience the page as fresh-eyes readers and produce ~300-600 lines of perceptual prose. This is NEW creative intelligence that did not exist before -- it is the page experienced through 5 independent consciousnesses. The Weaver then synthesizes this into creative direction.

- The Weaver's creative bridge. The Weaver uniquely holds both intent (brief + reflection) and reception (auditor reports). Its synthesis creates something neither the builder nor the auditors could produce alone: creative direction that connects what the builder was trying to do with what readers actually experienced.

### W3 (Evaluation) -> W4 (Refinement)

**What SURVIVES:**

| Artifact | Content | Creative Intelligence |
|----------|---------|----------------------|
| output.html | The page (may be mechanically patched) | Full artifact, builder's creative output |
| weaver-synthesis.md (~200-400 lines) | 7 sections: Anchor, Working, Almost There, Where to Go, Protect, Suppressed Energy, Verdict | The Weaver's creative bridge -- intent correlated with reception, compressed into creative territories |
| _reflection.md | Builder's self-assessment | Dimensions 2-6 of handoff tissue |
| _tc-brief.md | Conviction brief | Original creative commitment |
| _content.md | Raw content | Context (same as W2 builder received) |
| Reference files (4) | Mechanisms, components, prohibitions, tokens | Vocabulary and constraints (same as W2 builder) |

**What DIES:**

- 5 individual auditor reports (~300-600 lines). The Weaver compresses these into ~200-400 lines. Divergent minority observations (1 auditor sees something 4 miss) may be filtered. The Weaver template instructs "Divergence surfaces subtlety" but synthesis inherently privileges convergence.

- Gate details. The routing log records gate failures but the REFINE builder never sees which gates failed or why. Structural gate failures (GR-05 cold colors, GR-45 typography monotony) would inform the REFINE builder's work, but transmitting them would activate compliance mode. The Weaver's perceptual framing achieves the same outcome without triggering compliance.

- Visual perception. The REFINE builder never sees screenshots. Its understanding of the page is code-level (from reading HTML) + Weaver-level (from reading the Weaver's perceptual synthesis). The screenshots' raw visual data is compressed through the Weaver into language. This is information loss, but the evidence shows it is net-positive loss -- focused language beats unfocused images for creative amplification.

**What is CREATED at this boundary:**

- Amplification focus. The REFINE builder's "ONE THING" commitment creates creative focus that the original builder did not have. The original builder had to create FROM SCRATCH -- metaphor, structure, zones, transitions, everything. The REFINE builder inherits all of that and focuses on ONE intervention. This constraint is productive: it prevents the REFINE builder from trying to "fix everything" and instead channels all creative energy into the single highest-impact change.

- Continuation bias defeat. The REFINE builder is a DIFFERENT instance from the BUILD builder. It cannot fall into continuation bias ("I already committed to this approach, so I'll keep going"). It reads someone else's work with fresh eyes, receives creative direction from someone else's synthesis, and commits to ONE thing. This cognitive freshness is a feature of the window boundary, not a cost.

### W4 (Refinement) -> Done (or -> Step 9)

**What SURVIVES (for the user):**

| Artifact | Content |
|----------|---------|
| output.html (final) | The refined page |
| _gate-results-post-refine.json | Mechanical verification |
| _reflection-v2.md | REFINE builder's creative self-assessment |
| _routing-log.md | Pipeline decision record |
| Ship report (printed) | Gate summary, route, Weaver verdict, auditor excerpts |

**What SURVIVES (for Step 9, if triggered):**

| Artifact | Content |
|----------|---------|
| Everything above | + |
| _reflection.md (v1) | Original builder's reflection |
| _reflection-v2.md (v2) | REFINE builder's reflection |
| _user-direction.md | User's specific feedback |
| New screenshots + PA | Fresh evaluation of refined page |

**What DIES (permanently):**

- The Weaver's processing state. The Weaver held 5 auditor reports + brief + reflection simultaneously and formed connections between intent and reception. That synthesis produced the weaver-synthesis.md document, but the attention patterns that connected "Auditor A said X" with "the builder intended Y" and produced "therefore do Z" are gone. Only the conclusion (Z) survives.

- The REFINE builder's experience of reading the Weaver's direction and choosing the ONE THING. Why THIS one thing and not another? The reflection-v2 captures some of this, but the moment of decision -- the creative judgment that said "differentiate the dark zones is more important than extending the transition grammar" -- is a processing state that does not externalize fully.

---

## CREATIVE CORPUS IN WINDOWS 3 AND 4

### The Principle: Raw Files, Not Digests

**Extraction is the old pipeline's failure mode.** When corpus material is "digested" into compressed summaries, the result reproduces exactly the failure the ideology condemns: pre-digested extractions that destroy the creative processing state. 8,400 lines compressed to 235 lines is 36:1 compression -- "bottling the exhaust of a fire and using it as fuel."

The correct approach is **SELECTION and DISTRIBUTION of raw files** across windows. Each window holds RAW explorations/research, not summaries. The handoff protocol creates coherence between windows that each processed different raw slices.

The creative corpus (~172,800 lines: R1-R5 research, DD/OD/AD/CD explorations, case studies, connective tissue) is the project's accumulated creative intelligence. Windows 1 and 2 have clear corpus loading strategies (Window 1: none beyond TC skill + world description; Window 2: case study + mechanism combinations as calibration). This section addresses whether and how RAW corpus files flow through evaluation and refinement.

### Each Window's Agent Does Different Cognitive Work

The corpus is not one thing. It contains at least four kinds of creative intelligence:

1. **Compositional theory** (raw research files R1-R5, ~8,400 lines): density manifold, component choreography, layout patterns, eye-movement scaffolding. This is KNOWLEDGE ABOUT DESIGN -- how design works perceptually and cognitively.

2. **Compositional examples** (raw exploration HTML files DD/OD/AD/CD, ~74,000 lines): what DESIGNED pages feel like, specific CSS decisions that produced specific perceptual effects, collapse moments where organization-equals-density was proven. This is WHAT DESIGNED LOOKS LIKE.

3. **Calibration material** (case studies, ~15,600 lines): anti-prescription process documentation showing HOW a builder thinks through a composition from metaphor to CSS. This is HOW TO THINK ABOUT BUILDING.

4. **Vocabulary extension** (mechanism catalog, component library): the tools and their CSS implementations. This is already loaded in Windows 2 and 4.

The question is: which KIND of creative intelligence serves each agent's actual cognitive work?

### Window 3: PA Auditors -- NO CORPUS

PA auditors receive ZERO creative corpus. This is the strongest design constraint in the pipeline. The auditors' value comes entirely from fresh-eyes independence. Loading compositional theory ("density has six dimensions") or exploration examples ("here's what DESIGNED looks like") would contaminate their perception with expectations.

An auditor who knows the density manifold theory will pattern-match for six dimensions instead of reporting what they actually perceive. An auditor who has seen CD-006's geological strata will compare the current page against that exemplar instead of experiencing it on its own terms.

The auditors' language constraint (no CSS terms, perceptual vocabulary only) already enforces this separation. Loading creative corpus would undermine the constraint from the opposite direction -- the vocabulary would be perceptual but the expectations would be theory-laden.

**No exceptions.**

### Window 3: The Weaver -- SELECTED RAW RESEARCH FILES

**Load 1-2 selected RAW research files (~1,500-3,600 lines) into the Weaver's context.**

**Why the Weaver benefits from theory but not examples:**

The Weaver's job is to translate 5 auditors' perceptual accounts into creative direction for a builder. This involves:

1. Recognizing WHAT the auditors are perceiving (convergence detection)
2. Understanding WHY it matters compositionally (theory)
3. Articulating WHERE the builder could go (creative direction)

Step 2 is where the Weaver currently operates on instinct. The Gas Town Weaver produced excellent direction ("the same SPECIFICITY... the same CONVICTION in the shift"), but this was one instance. A Weaver that understands density theory, component choreography, and transition grammar has a richer vocabulary for EXPLAINING why convergent observations matter.

**Example:** Five auditors converge on "the bottom two-thirds feel flat." A theory-naive Weaver writes: "extend the opening quality throughout the page." A theory-informed Weaver writes: "the opening uses PULSE density (sparse question zones alternating with dense answer zones) but the lower sections use uniform medium density. The REFINE builder could identify which lower sections are naturally sparse (reflective, concluding) and which are naturally dense (technical, procedural) and let that natural variation express itself through the same channels the opening uses."

The theory-informed direction is more actionable because it gives the REFINE builder a MECHANISM (PULSE density, sparse/dense classification) not just an OBSERVATION (flat).

**What the Weaver receives (SPECIFIC RAW FILES):**

Selected raw research files, loaded directly without compression:
- **RESEARCH-SYNTHESIS.md** (~900 lines) -- Cross-stream synthesis. Density manifold, component choreography, layout patterns, conflict resolutions. The most concentrated theory file in the corpus.
- **R5 (combination theory)** (~1,200 lines) -- Component velocity/temperature/weight theory, setup-payoff arc, combination chemistry. Directly relevant to translating auditor observations about component relationships.
- *Optional:* **R1 (documentation patterns)** (~1,500 lines) -- Only if context budget allows. The 4 density temporal shapes (PULSE, CRESCENDO, BOOKENDS, WAVE) live here.

Total: ~2,100-3,600 lines of RAW research. Not digested. Not compressed. The Weaver processes the theory in its full exploratory form, preserving the reasoning and connections that compression destroys.

**Why raw files instead of digests:** A digest of RESEARCH-SYNTHESIS.md would compress 900 lines to ~25 lines at 36:1. Those 25 lines would contain labels ("density is 6-dimensional") without the reasoning, examples, and conflict resolutions that make the theory USEFUL. The Weaver needs to UNDERSTAND the theory deeply enough to apply it; labels are insufficient.

**What the Weaver does NOT receive from the corpus:**
- Raw exploration HTML files (DD/OD/AD/CD). The Weaver is not a builder. Knowing specific CSS implementations is irrelevant to perceptual synthesis.
- Case studies. The Weaver does not need to see how another builder thought -- it needs to understand what the auditors are perceiving.
- Mechanism catalog / components. The Weaver speaks perceptual language, not CSS language.

**Updated Weaver context table:**

| Content | Lines (est.) | Classification | Purpose |
|---------|-------------|---------------|---------|
| Receiving Principle (6 directives) | ~15 | Creative knowledge | Frames the Weaver as creative director |
| 1440px screenshot paths | ~5 | Plumbing | Weaver's own visual impression |
| 5 auditor reports | ~300-600 | Creative knowledge | Raw perceptual data |
| Conviction brief | ~75 | Creative knowledge | Builder's intent |
| Reflection (v1) | ~80 | Creative knowledge | Builder's self-assessment |
| **RAW research files (RESEARCH-SYNTHESIS + R5)** | **~2,100** | **Creative knowledge** | **Compositional theory for informed direction** |

**Token impact:** ~15,000-25,000 additional tokens. The Weaver's context is currently light (~600-900 lines + auditor reports). Adding 2,100-3,600 lines of raw research is substantial but still within budget -- the Weaver has ample headroom in a 200K context window and the research files are high-signal material.

**Critical framing for raw research:** The research files contain both THEORY and PRESCRIPTION. The Weaver's prompt framing explicitly says: "The following research is for UNDERSTANDING what the auditors describe. Use it as vocabulary for your creative direction. It does not tell you what to look for. Your experiential anchor takes priority over any theoretical framework."

**File selection criteria (7 evaluation lenses):**
1. Conviction/direction vs constraint/extraction -- prefer files that explain WHY, not WHAT TO DO
2. Content understanding depth -- prefer files that show deep perceptual reasoning
3. Creative framing quality -- prefer files framed as philosophy, not procedure
4. Evocativeness -- prefer files that inspire richer creative vocabulary
5. Philosophical vs procedural framing -- reject procedurally-framed files
6. Multi-window suitability -- prefer files the Weaver can actually USE
7. Honest creative autonomy -- prefer files that expand options, not constrain them

### Window 4: The REFINE Builder -- DIFFERENT RAW FILES THAN WINDOW 2

**Load 1-2 selected RAW CD exploration HTML files (~1,500-3,000 lines) into the REFINE builder's context -- DIFFERENT material than Window 2's builder receives.**

**The reasoning:**

The original design (Section 4.3) argued that the REFINE builder receives NO explorations/research because "focused specific context beats broad diffuse context." This was correct as a general principle but failed to consider a crucial distinction: **the REFINE builder faces a DIFFERENT creative problem than the BUILD builder.**

The BUILD builder (Window 2) creates from scratch. It needs:
- Conviction (what to create) -- from the brief
- Calibration (what DESIGNED looks like) -- from the case study
- Vocabulary (what to build with) -- from mechanisms/components

The REFINE builder (Window 4) amplifies what exists. It needs:
- Direction (where to go) -- from the Weaver
- Understanding (what the first builder was reaching for) -- from the brief + reflection
- **Compositional repertoire (what MOVES are available)** -- THIS is where the corpus serves the REFINE builder differently

The Gas Town REFINE builder's "ONE THING" was to differentiate the dark zones (different furniture in different dark rooms). This required the builder to KNOW what differentiation techniques exist. The builder invented solutions (different dark tones, different border treatments, different internal spacing). But it operated from instinct + mechanism catalog alone.

A REFINE builder with access to RAW exploration HTML -- complete pages showing specific CSS decisions that produced specific perceptual effects -- has a richer repertoire of SPECIFIC TECHNIQUES for achieving the Weaver's creative direction. Not through extracted rules, but through seeing what another builder ACTUALLY BUILT.

**What the REFINE builder receives (SPECIFIC RAW FILES):**

The REFINE builder receives DIFFERENT corpus material than Window 2's builder. Specifically:

| Raw File | Lines (est.) | Why THIS for REFINE |
|----------|-------------|---------------------|
| 1-2 CD exploration HTML files (e.g., CD-001, CD-003) | ~1,500-3,000 | Complete designed pages showing compositional repertoire in action: width variation as rhythm, border-weight as semantic hierarchy, spacing compression as density signal. These are EXEMPLARS for the ONE THING -- the REFINE builder sees what DESIGNED actually looks like in complete HTML/CSS. |

**Why raw HTML files instead of digests:** A CD exploration HTML file IS the creative intelligence. The CSS decisions, the class naming, the structural choices, the density patterns -- all are present in the raw file. A digest of that file would extract labels ("uses PULSE rhythm via width variation") but strip the actual CSS that SHOWS how it works. The REFINE builder writes CSS. It needs to see CSS, not descriptions of CSS.

**What the REFINE builder does NOT receive from the corpus:**
- Case study (CD-006 process doc). The REFINE builder does not need to see how another builder thought from scratch. It is not building from scratch. The case study serves Window 2's calibration need.
- Raw research files (R1-R5). The Weaver already processed these and translated the relevant theory into creative direction. Loading them again would split attention between the Weaver's specific direction and general theory.
- Full corpus of ALL explorations. Selection, not quantity. 1-2 exemplars beat 6.
- Mechanism combinations file (already served Window 2; the REFINE builder's combination thinking is directed by the Weaver, not by general theory).

**Why DIFFERENT material for REFINE vs BUILD:**

The BUILD builder needs CALIBRATION material (what does DESIGNED look like as a process?). The case study serves this -- it shows the PROCESS of compositional thinking.

The REFINE builder needs REPERTOIRE material (what specific techniques exist for amplification?). Raw exploration HTML files serve this -- they show what MOVES produce specific perceptual effects, visible in actual CSS.

The BUILD builder does not benefit from exploration HTML because it is creating from scratch and derives its own moves from its metaphor. The REFINE builder benefits because it already has a metaphor and is looking for specific techniques to deepen its expression.

**Updated REFINE builder context table:**

```
CURRENT (from Section 4.2):
1. ROLE + SCOPE
2. RECEIVING PRINCIPLE
3. THE PAGE [output.html]
4. CREATIVE DIRECTION [Weaver synthesis]
5. PREVIOUS BUILDER'S REFLECTION
6. THE CREATIVE DIRECTION [conviction brief]
7. CONTENT + BUILDING MATERIALS [content + prohibitions + tokens + mechanisms + components + conventions]
8. USER FEEDBACK (if exists)
9. CREATIVE COMMITMENT (ONE THING)
10. BUILD instruction

NEW (inserted between 6 and 7):
6.5. COMPOSITIONAL REPERTOIRE [1-2 raw CD exploration HTML files]
     "The following are complete HTML pages built by other builders for
     different content with different metaphors. They are not templates.
     They are not instructions. They are pages that achieved compositional
     quality through specific CSS decisions you can see in the code.
     Study what serves your ONE THING. Ignore what does not."
```

**Token impact:** ~10,000-20,000 additional tokens. The REFINE builder's current context is ~5,800 lines excluding content. Adding 1,500-3,000 lines of raw exploration HTML increases this to ~7,300-8,800 lines -- still well within the 200K token budget with substantial headroom. Raw files are larger than digests but carry proportionally more usable creative intelligence.

**Framing constraint:** The raw HTML files are framed as repertoire, not templates. The prompt framing ("complete HTML pages... not templates... not instructions") prevents the explorations from becoming copy targets. The REFINE builder reads the Weaver's direction FIRST (Step 4 in the prompt sequence), commits to ONE THING (Step 9), and only then encounters the repertoire as exemplars for achieving that commitment. The explorations are for DIFFERENT content with DIFFERENT metaphors -- they cannot be copied, only studied.

### What Each Window Receives from the Corpus: Summary

| Agent | Corpus Material | Lines | Purpose | Why THIS Material |
|-------|----------------|-------|---------|-------------------|
| W1 TC Agent | None | 0 | -- | TC derives from content + world-description; research would distract from content-specific derivation |
| W2 BUILD Builder | Case study (CD-006) + mechanism combinations | ~834 | Calibration | Builder creating from scratch needs to know what DESIGNED process looks like |
| W3 PA Auditors | None | 0 | -- | Fresh-eyes independence is the entire value proposition |
| W3 Weaver | RAW research files (RESEARCH-SYNTHESIS + R5, optionally R1) | ~2,100-3,600 | Compositional theory | Weaver needs to UNDERSTAND what auditors perceive to translate it into builder-actionable direction |
| W4 REFINE Builder | 1-2 RAW CD exploration HTML files | ~1,500-3,000 | Compositional repertoire | REFINE builder needs to SEE specific techniques for amplifying existing composition in actual CSS |

### The Corpus Flow Principle

Each window needs the corpus DIFFERENTLY because each window's agent does different cognitive work:

- **TC Agent** (derive conviction): NOTHING from corpus. Its intelligence comes from deep content engagement through the TC skill's questioning machinery. Corpus material would split attention away from content.

- **BUILD Builder** (create from scratch): PROCESS CALIBRATION (what does a builder's compositional thinking look like?). The case study (CD-006, 387 lines) serves this. General theory or specific techniques would split attention during the most creatively demanding task.

- **PA Auditors** (perceive): NOTHING. Corpus would contaminate perception with expectations.

- **Weaver** (synthesize perception into direction): RAW THEORY FILES (frameworks for understanding what auditors describe). Raw research files (RESEARCH-SYNTHESIS + R5, ~2,100 lines) make the Weaver's direction more specific and more actionable. Exploration HTML or process documentation would be irrelevant to synthesis.

- **REFINE Builder** (amplify what exists): RAW EXEMPLARS (complete designed pages showing specific CSS techniques). 1-2 CD exploration HTML files (~1,500-3,000 lines) let the REFINE builder SEE what compositional quality looks like in actual CSS. The builder's creative problem is not "what to create" but "how to deepen what exists." Exemplars directly serve this.

### Risks and What Addresses Them

**Risk 1: Weaver becomes theory-laden instead of perceptually responsive.**
What addresses it: Raw research files load AFTER the Weaver's experiential anchor (the Weaver writes its first impression BEFORE reading anything else, including theory). The theory informs synthesis, not first impression. The Weaver prompt framing says: "The following research is for UNDERSTANDING what the auditors describe. It does not tell you what to look for. Your experiential anchor takes priority."

**Risk 2: REFINE builder copies exploration CSS instead of creating original solutions.**
What addresses it: Raw HTML files load AFTER the ONE THING commitment (prompt sequence Step 9 comes before Step 6.5 in cognitive order -- the builder commits to ONE THING, then encounters exemplars). The framing ("complete HTML pages for DIFFERENT content with DIFFERENT metaphors... not templates") prevents copying. The explorations use different metaphors and different content -- they structurally cannot be copied, only studied for technique.

**Risk 3: Raw files exceed context budget.**
What addresses it: Careful SELECTION limits exposure. The Weaver receives 2-3 research files (~2,100-3,600 lines), not all 7. The REFINE builder receives 1-2 CD explorations (~1,500-3,000 lines), not all 6. File selection uses the 7 evaluation lenses (conviction vs constraint, creative framing quality, evocativeness, etc.) to pick the highest-value files.

**Risk 4: Adding 2,000+ lines of raw research to the Weaver's context degrades output quality.**
What addresses it: The Weaver's current context is light (~600-900 lines + auditor reports). Adding 2,100 lines of high-signal research files brings it to ~3,000-3,600 lines of non-auditor material. This is below the attention-degradation threshold observed in the project (which occurs at ~5,000+ lines of undifferentiated input). Research files are highly structured and differentiated, not undifferentiated.

**Risk 5: Raw file selection becomes its own extraction problem (choosing = compressing).**
What addresses it: Selection operates at the FILE level, not the LINE level. Choosing "load RESEARCH-SYNTHESIS but not R3" is a binary inclusion decision, not a compression act. The content of each selected file arrives in full, unmodified. The paradigm shift from digests to raw files eliminates compression entirely -- the only decision is which files to include.

---

## Summary of Changes from Current SKILL.md

### Window 3 Changes

| Change | Type | Rationale |
|--------|------|-----------|
| Force-visible override before screenshots | New | Prevents dominant audit failure (invisible content due to scroll animations) |
| Validate cold-look vs scroll-through coverage | New | Catches DPR/scroll artifacts before auditors spend attention on them |
| Add Section 5 (WHAT TO PROTECT) to Weaver output | Enhancement | Explicit protection list prevents REFINE from breaking what works |
| Add Section 6 (BUILDER'S SUPPRESSED ENERGY) to Weaver output | Enhancement | Converts reflection D5 from historical note to creative invitation |
| Load RAW research files (RESEARCH-SYNTHESIS + R5) into Weaver context | New | Compositional theory gives Weaver richer vocabulary for translating perceptual observations into builder-actionable direction |
| All other evaluation components | Preserved | 5 auditors (zero corpus), 20 questions, language constraint, routing matrix |

### Window 4 Changes

| Change | Type | Rationale |
|--------|------|-----------|
| Add DISCOVERIES section to reflection-v2 | Enhancement | Captures dimension 4 (surprises) that current template buries |
| Add PROTECTION LIST section to reflection-v2 | Enhancement | Creates survival record for user + potential Step 9 builder |
| Load 1-2 RAW CD exploration HTML files into REFINE builder | New | Compositional repertoire via exemplars -- REFINE builder SEES specific techniques in actual CSS (DIFFERENT material from Window 2's case study calibration) |
| No screenshots to REFINE builder | Preserved (explicit decision) | Weaver's synthesis > raw screenshots for directed refinement |
| All other REFINE components | Preserved | ONE THING commitment, same reference files, scope of authority |

### What is NOT Changed

- 5 PA auditors (not 9)
- 30 gates (not reduced)
- Zero build context for auditors (zero corpus)
- Weaver as sole bridge between evaluation and refinement
- Gate results never reach REFINE builder
- Same reference files in REFINE as in BUILD
- ONE THING creative commitment
- Maximum 1 REFINE cycle by default
- Routing matrix (Weaver verdict x gate results)

---

## Appendix A: Creative Intelligence Flow Diagram

```
W1 (TC)                    W2 (BUILD)                W3 (EVALUATE)           W4 (REFINE)

Content ──→ TC Skill ──→   Brief ──→ Builder ──→     Screenshots ──→         Artifact ──→
                           World desc                  5 Auditors              Weaver synthesis
                           Mechanisms                  (ZERO corpus)           Reflection v1
                           Components                       │                  Brief
                           Tokens                           ↓                  Content
                           Content                     Weaver ←── Brief       Mechanisms
                           Case study (CD-006)               ←── Reflection    Components
                           Mech. combinations                ←── RAW RESEARCH   Tokens
                                │                            │   FILES         RAW CD exploration
                                │                            ↓   (R-SYNTH+R5)  HTML (1-2 files)
                                ↓                      Routing Matrix           │
                           output.html                (Weaver × Gates)          ↓
                           _tc-brief.md                     │                  output.html (v2)
                           _reflection.md                   ↓                  _reflection-v2.md
                                                       SHIP / REFINE /
                                                       RETHINK

CORPUS:      None           Case study +               None (auditors)         RAW CD exploration
                            Mech. combinations          RAW research files      HTML (1-2 files)
                            (CALIBRATION)               (THEORY, Weaver)       (REPERTOIRE)

CREATED:     Conviction     Full artifact              Perceptual data         Amplification focus
             Creative       Creative self-             Creative direction      Continuation bias
             ownership      assessment                 (theory-informed)       defeat

DIES:        TC questioning  Mechanism selection        Individual auditor      Weaver processing
             process         reasoning                  reports (compressed)    state
                            Content processing          Gate details            REFINE builder's
                            state                       (deliberately)          decision process
                            Component adaptation        Visual screenshots
                            micro-decisions             (deliberately)
```

## Appendix B: Raw File Distribution Map

```
CREATIVE CORPUS (~172,800 lines) -- SELECTION, NOT EXTRACTION

├── Research (R1-R5 + RESEARCH-SYNTHESIS, ~8,400 lines)
│   ├── RESEARCH-SYNTHESIS.md (~900 lines)  ──→ Weaver (W3, raw)
│   ├── R5 combination theory (~1,200 lines) ──→ Weaver (W3, raw)
│   ├── R1 documentation patterns (~1,500 lines) ──→ Weaver (W3, optional, raw)
│   └── R2, R3, R4 ──→ NOT loaded (lower relevance to Weaver's task)
│
├── DD Explorations (~6,400 lines)
│   └── Raw files ──→ NOT loaded in any window (DD techniques visible in CD explorations)
│
├── OD Explorations (~20,500 lines)
│   └── Raw files ──→ NOT loaded in any window (OD techniques visible in CD explorations)
│
├── AD Explorations (~10,900 lines)
│   └── Raw files ──→ NOT loaded in any window (AD techniques visible in CD explorations)
│
├── CD Explorations (~36,000 lines)
│   ├── 1-2 SELECTED raw HTML files ──→ REFINE Builder (W4, raw, ~1,500-3,000 lines)
│   │   Selection criteria: 7 evaluation lenses (conviction, creative framing,
│   │   evocativeness, philosophical framing, multi-window suitability, autonomy)
│   │   Candidates: CD-001, CD-003, CD-006 (highest-rated explorations)
│   └── Remaining CD HTML files ──→ NOT loaded
│
├── Case Studies (~15,600 lines)
│   ├── CD-006 process doc (387 lines) ──→ BUILD Builder (W2, calibration)
│   └── Others ──→ NOT loaded
│
└── Connective Tissue (~75,000 lines)
    └── NOT loaded in any window (orchestrator infrastructure)

NO DIGESTS. NO EXTRACTION. NO COMPRESSION.
File selection is a binary decision (include/exclude), not a compression act.
Selected files arrive in FULL, unmodified.
```

---

**END DESIGN**
