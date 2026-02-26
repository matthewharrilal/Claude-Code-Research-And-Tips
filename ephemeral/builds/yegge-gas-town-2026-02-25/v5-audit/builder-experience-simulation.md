# Builder Experience Simulation Report
**Agent:** audit-builder-sim (Opus 4.6)
**Date:** 2026-02-26
**Task:** Simulate the Opus builder experience in v5 pipeline across Pass A, Pass B, and REFINE
**Method:** Read all builder-facing files as if I AM the builder, recording my real-time reactions

---

## PASS A SIMULATION (Compose Recipe)

### Question 1: How many files must I read? Total lines?

**Mandatory reads explicitly named in the compose recipe:**

| File | Lines | When Referenced |
|------|-------|-----------------|
| artifact-builder-recipe-compose.md | 833 | My primary recipe |
| tokens.css | 183 | Step 1.1 |
| components.css | 944 | Step 1.2 |
| mechanism-catalog.md | 751 | Step 1.1b (quick-reference table first, then "full catalog for depth") |
| Execution Brief (assembled) | ~100-165 | Step 1.3 |
| artifact-value-tables.md | 262 | Step 2.1 (referenced for color pairs) |
| **TOTAL** | **~3,073-3,138** | |

**Ambiguity:** The recipe at Step 1.1b says "Before reading the full mechanism-catalog.md (1,200+ lines)" — but the actual file is 751 lines. This is a factual mismatch that would cause me to second-guess whether I have the right file. (The 1,200+ number may be from an older version.)

**Additionally referenced but OPTIONAL:**
- CD-006 reference (~1,200 lines, mentioned in Step 2.1 and zone-by-zone reference)
- Content source material (varies, provided in brief)

**Effective reading load:** ~3,100 lines mandatory + ~1,200 optional = ~4,300 lines total.

**My reaction as builder:** This is A LOT. But the recipe front-loads reading (Phase 1) before any building (Phase 3), which feels structured. The concern: by the time I reach Phase 3, will I REMEMBER what I read 3,000 lines ago? The quick-reference table in Step 1.1b is a smart mitigation — I would actually use that table during building rather than re-reading the full catalog.

### Question 2: What's the FIRST thing I would do? Is sequencing clear?

**Sequencing is VERY clear.** The recipe explicitly says "This is a sequenced recipe, not a checklist. Work through it in order." The first thing is:

1. Step 1.1: Read tokens.css cover to cover
2. Step 1.1b: Scan mechanism catalog quick-reference table
3. Step 1.2: Read components.css
4. Step 1.3: Read the Execution Brief
5. Step 1.4: ASSESS — can I answer the vocabulary questions?

**My reaction:** The sequencing is the recipe's single strongest feature. Each phase has a clear verb: READ (Phase 1), SELECT (Phase 2), DEPLOY (Phase 3), APPLY (Phase 4), EVALUATE (Phase 5). I always know what KIND of work I'm doing. The "assess" steps at the end of each phase create natural checkpoints.

**One sequencing confusion:** Phase 6 (Temporal Composition) says "This phase is verified during Phase 5 self-evaluation" — meaning Phase 6 content is REFERENCE that I should have internalized during building, NOT a separate phase to execute. I would read Phase 6 BEFORE Phase 3 to absorb its concepts, but the recipe positions it AFTER Phase 5. This is a structural mis-ordering.

### Question 3: Conflicting instructions between compose recipe and orchestrator?

**I found 4 conflicts/ambiguities:**

**Conflict A: Pass A disposition scope.** The compose recipe header says "Dispositions: D-01, D-02, D-03, D-04, D-05, D-06, D-09 (7 of 9)." The orchestrator Section 5 says "Pass A Recipe (structure-focused: D-01 through D-05)." That is 5, not 7. The compose recipe includes D-06 and D-09 in Pass A; the orchestrator excludes them. **This is a genuine conflict.** A builder receiving the compose recipe would deploy 7 dispositions. The orchestrator expected 5.

UPDATE: Re-reading orchestrator more carefully, Section 5's "Phase 2B: Pass B Build" says "Pass B Recipe (refinement-focused: D-06 through D-09)." But the compose recipe puts D-06 AND D-09 in Pass A. The orchestrator puts D-06 through D-09 in Pass B. **The recipe disagrees with the orchestrator on D-06 and D-09 ownership.** The recipe wins (since it is what the builder actually sees), but this internal inconsistency could cause orchestrator confusion about handoff expectations.

**Conflict B: CSS line targets.** The orchestrator says Pass A target is "400-700 CSS lines." The compose recipe at Step 5.7 says "800-1200 CSS lines." The compose recipe's "Single-pass output target" says "Complete HTML page with 800-1200 CSS lines." As a builder, I would aim for 800-1200 (since that's what MY recipe says), which contradicts the orchestrator's expectation.

**Conflict C: components.css line count.** The recipe at Step 1.2 says "components.css (~944 lines)." The orchestrator Section 1 says "components.css: ~944 lines." But the Appendix B references say "ITEM 19: components.css 290 lines" and "ITEM 088: components.css (290 lines)." The actual file is 944 lines. The 290-line references are stale from an earlier version. This wouldn't confuse a builder (they'd read the actual file), but it means the provenance appendix has incorrect data.

**Conflict D: What Pass B builder reads.** The orchestrator says Pass B receives "Pass B Recipe (refinement-focused: D-06 through D-09)." But the actual polish recipe handles D-07 and D-08, not D-06 and D-09 (those are in the compose recipe). There is a 2-disposition gap between orchestrator's description and actual file content.

### Question 4: Would I understand the INTENT comment protocol? Write meaningful narration or checkbox?

**The protocol is well-defined.** Step 3.4d provides:
- Exact format: `<!-- INTENT [D-XX] selector-or-location | what you decided and why | which brief item OR "CREATIVE" | what you traded off OR "--" -->`
- Required count: 17-22 total
- Required categories: governing metaphor (1), zone boundaries (1 per), each disposition (1 per), creative divergences (2-5), deliberate omissions (1-3)
- Self-test: fewer than 15 = under-narrated, more than 25 = over-narrated
- Placement: adjacent to the CSS/HTML it describes (NOT clustered at top)
- REFINE update protocol: append reasoning, don't delete

**My prediction: I would write MEANINGFUL narration for the first 8-10 comments, then shift toward checkbox mode for the remaining 7-12.** Here's why:

The early narration — governing metaphor, first few zone boundaries — is genuinely creative work. I'm discovering what I think as I write. But by INTENT comment #12, I'm experiencing "narration fatigue." The protocol asks me to narrate EVERY disposition AND every zone boundary AND creative divergences AND deliberate omissions. At some point, the narration competes with the BUILDING for my creative attention.

The self-test ("count your INTENT comments") is smart — it catches the extremes. But it doesn't catch the quality gradient within the 15-25 range. I might write 20 comments where 8 are insightful and 12 are "applied D-03 via consistent border hierarchy | D-03 | --" — technically compliant, zero insight.

**The 4-field pipe-delimited format helps.** It forces structure, which prevents both vacuous and verbose narration. But "what you traded off OR '--'" means 80% of my INTENT comments would have "--" for trade-offs, because I would NOT actually be making conscious trade-offs for routine decisions.

**Verdict: 60% meaningful, 40% checkbox.** The format is good. The COUNT is ambitious. Reducing to 10-15 required with emphasis on "write fewer, make them genuine" would improve average quality.

### Question 5: Would Step 5.8 (IMPROVEMENTS) feel like demand or invitation?

**Reading Step 5.8 as a builder:**

> "You made compromises during this build. Every builder does..."

This opening NORMALIZES having improvements. Good.

> "List 5-10 specific things you would improve if you had another pass."

This feels like a DEMAND. "List" is imperative. "5-10" is a quota. If I have 3 genuinely good ideas and am struggling for #4 and #5, the quota forces padding.

> "This is not a confession of failure."

This line is CRITICAL. It pre-empts the builder's natural anxiety about admitting weakness. But the fact that it NEEDS to be said reveals the underlying tension: the pipeline culture up to this point has been heavily gate-and-failure oriented.

> "A different Opus builder will read these ideas during the IMPROVE pass and use them as a starting point for deepening your work."

This is the STRONGEST sentence. It reframes IMPROVEMENTS from "things I failed to do" to "seeds for the next builder." Knowing someone else will READ and USE my ideas makes me want to write good ones.

> "There is no penalty for having ideas. Zero ideas triggers single-pass RELEASE evaluation; four or more ideas confirms the standard IMPROVE path."

This is CONFUSING. It says "no penalty" but then immediately describes a consequence: zero ideas triggers a different evaluation path. The implication: having FEWER ideas leads to a simpler (faster?) process. This creates a subtle incentive to suppress ideas if I want to finish faster — the opposite of the stated intent.

**Verdict: 70% invitation, 30% demand.** The framing is mostly good. The quota (5-10) and the consequence clause undercut the invitational tone. Changing to "at least 3 ideas" with "more is better" language would feel more invitational. The "no penalty... but consequences" contradiction needs resolution.

### Question 6: What would confuse me? What would I skip?

**Things that would CONFUSE me:**

1. **Phase 6 existence.** Phase 6 says "Note: This phase is verified during Phase 5 self-evaluation." So it's NOT a phase I execute — it's reference material. But it's numbered as a phase and positioned after Phase 5, making me think I still need to DO something here. I would read it, feel uncertain, and move on.

2. **"CD-006 Zone-by-Zone Reference" inside Step 2 (SELECT).** Step 2 is supposed to be where I make MY creative decisions. But it opens with a detailed reference to another page's zone structure. The signal: I should COPY this structure. The stated intent: use it as vocabulary reference. The tension is real — am I selecting my own approach or mimicking CD-006?

3. **The relationship between Steps 3.1 and 3.4.** Step 3.1 says "Deploy the 6-channel framework." Step 3.4 says "Deploy the page — Build Order." But Step 3.1 through 3.3 don't produce OUTPUT — they are planning steps within the deployment phase. The phase says DEPLOY but the first three sub-steps are actually PLAN. I would probably jump from reading 3.1-3.3 to actually writing code in 3.4.

4. **mechanism-catalog.md line count discrepancy.** Recipe says "1,200+ lines." Actual file is 751 lines. I'd wonder if I have an incomplete version.

5. **Appendix B (complete item cross-reference).** This is 200 lines of provenance tables. As a builder, I have ZERO use for this information during building. The recipe says "Use this for audit trail verification, not during building." But it's IN my recipe document, consuming ~24% of the file's length.

**Things I would SKIP:**

1. **Appendix B entirely.** 200 lines of item cross-references serve auditors, not builders. I would scroll past these.

2. **Appendix C (Evidence Status Key).** Useful for researchers, irrelevant during building.

3. **The Gas Town failure references.** Every section includes "Gas Town scored X/10" or "Gas Town had this problem." After the third such reference, I would start skimming these. They serve as warnings, but the VOLUME of failure references creates a corrective mindset: I'm being told what went WRONG elsewhere more than what can go RIGHT here.

4. **Phase 6 (Temporal Composition).** After reading the note that says "verified during Phase 5," I would skip the Phase 6 body entirely. This means I would MISS the deployment instructions for density arc, multi-coherence, structural metaphor, content-form coupling, and creative authority + components — all of which are genuinely useful during building.

5. **The council verdict amendments (Appendix A).** "The following amendments from the council verdict..." — I am a builder, not a policy wonk. I would not read this.

**Net effect of skipping:** I would miss ~400 lines (~48%) of the recipe. The EFFECTIVE recipe for my build experience is ~430 lines (Phases 1-5 without appendices and Phase 6). This is good — 430 lines is digestible. But the recipe PRESENTS as 833 lines, which creates an initial impression of heaviness.

---

## PASS B SIMULATION (Polish Recipe)

### Question 7: Would I understand what Pass A already did?

**Yes, clearly.** The polish recipe opens with:

> "You received a COMPLETE HTML page from Pass A. Your job is to POLISH it — add hover states, micro-refinements, accessibility features, and thorough self-evaluation. You do NOT restructure, restyle zones, or change the metaphor."

And provides:

> "What you received: Pass A HTML output (complete page with zones, transitions, backgrounds, typography, layout)"

**The conviction statement in the HTML itself** (`<!-- CONVICTION: ... -->`) is the key bridging artifact. I would read it to understand Pass A's design intent.

**One gap:** The polish recipe does NOT tell me to read Pass A's INTENT comments. Step 1.1 says "Identify: The governing metaphor (from `<!-- CONVICTION: ... -->`)" and "INTENT comments (read the builder's per-decision rationale)." So it DOES mention reading INTENT comments, but as a sub-bullet under "Identify" rather than a primary step. I might skim past this.

**Verdict:** Understanding of Pass A is GOOD. The recipe is 284 lines — lean, focused, digestible. After the 833-line compose recipe, this feels like relief.

### Question 8: Is ADD-ONLY constraint clear? Risk of accidental restructuring?

**The constraint is VERY clear.** Lines 253-276 provide an explicit prohibited/permitted list:

**Prohibited (8 items, each starts with "NO"):**
- NO changing zone backgrounds
- NO changing layout structure
- NO adding or removing zones
- NO changing font-size, font-weight, or line-height
- NO changing padding or margin on zones
- NO changing border-width or border-color
- NO moving content between zones
- NO changing the governing metaphor or CSS custom properties

**Permitted (8 items, each starts with "ADD" or "MODIFY"):**
- ADD hover/focus/selection/print CSS
- ADD ARIA attributes
- ADD skip link
- ADD tabindex
- ADD figure/figcaption wrappers
- ADD HTML comment blocks
- MODIFY heading hierarchy (only if accessibility violation)
- MODIFY font-variant-numeric, text-indent (D-07 micro-refinement)

**Risk of accidental restructuring: LOW.** The list is comprehensive and uses binary language (NO vs ADD). But two subtle risks exist:

1. **"MODIFY heading hierarchy ONLY if it violates accessibility"** — this is the one permitted structural change. A builder who interprets "accessibility" broadly could justify reworking several headings, which would ripple into surrounding styles.

2. **Step 3.3 (Heading Hierarchy):** "Fix if violated (this is the ONE permitted structural change)." — the capitalized "ONE" reinforces the constraint. But heading changes can cascade: if h4 becomes h3, all h3 styles now apply, which could change visual appearance significantly.

**The "COMPOSITIONAL-ISSUE" escape hatch is well-designed:** "If you discover a compositional flaw during D-08 or Step 5.0: DOCUMENT it in the self-evaluation comment but do NOT fix it." This is exactly right — it lets the builder NOTICE without ACTING, preserving ADD-ONLY while capturing intelligence.

### Question 9: Would I know which CSS to add vs leave alone?

**Yes, mostly.** The recipe provides specific CSS snippets for:
- Skip link (lines 103-115)
- Focus-visible (lines 129-133)
- Reduced motion (lines 140-145)
- Hover state patterns (Step 2.1, descriptive)
- ::selection colors (Step 2.2, descriptive)
- Print styles (Step 2.3, descriptive)

**The gap:** Hover state design is DESCRIBED but not SPECIFIED. Step 2.1 says "Table rows: subtle background tint on hover" — but what color? The recipe says to re-read tokens.css for hover-relevant tokens. In practice, I would need to:
1. Read tokens.css hover section
2. Match hover colors to zone backgrounds
3. Decide "subtle background tint" means how many RGB points

This is creative work (appropriate for an Opus builder), not a gap. But a Sonnet builder might struggle here without concrete values.

**Overall verdict on Pass B:** This is a WELL-DESIGNED recipe. 284 lines is the right size. Clear scope, explicit constraints, concrete CSS, and a smart escape hatch for discovered flaws.

---

## REFINE SIMULATION

### Question 10: Receiving REFINE after PA-05 of 2.5 — would I understand what to change vs preserve?

**I am a DIFFERENT Opus agent from the initial builder.** I receive:
- Artistic impression from Weaver (generative language)
- Conviction statement from Pass 1 HTML
- Original brief
- Pass 1 HTML
- Generatively transformed IMPROVEMENTS

**What I would UNDERSTAND:**
- The conviction tells me WHAT the page is about and what metaphor governs it. Clear.
- The artistic impression tells me what PA auditors PERCEIVED. This is my signal for WHERE to focus.
- The IMPROVEMENTS (transformed from diagnostic to generative) tell me what the original builder WANTED to do but didn't.

**What I would NOT understand:**
- WHY the PA-05 score is 2.5. I don't receive the score itself (good — that's isolation), but the artistic impression must be specific enough to communicate what's missing. If the Weaver writes "the page could deepen its atmospheric presence in the middle sections," I have actionable direction. If the Weaver writes "the page needs improvement," I have nothing.

**The preservation question:** The RESIDUAL artifact (`<!-- RESIDUAL: ... -->`) is supposed to tell me what was preserved, changed, what comes next, and trade-offs. This is my PRIMARY guide for preservation. If the RESIDUAL says "Zone 3 dark inversion is the metaphor's heart — preserve the 30/30/30 background and the 4px left borders," I know to keep those. Without a quality RESIDUAL, I would be guessing.

**Verdict: I would understand DIRECTION (what to deepen) but could struggle with PRESERVATION (what not to touch) if the RESIDUAL is thin.** The protocol's quality depends heavily on two upstream artifact qualities: (1) Weaver artistic impression specificity, and (2) RESIDUAL artifact completeness.

### Question 11: Would IMPROVEMENTS-to-generative transformation be helpful or confusing?

**The transformation protocol (orchestrator responsibility):**

> "Replace diagnostic verbs (fix, increase, add) with generative verbs (deepen, reveal, illuminate)"
> "Replace specific values (8 RGB, 16px) with perceptual descriptions (whispers where it could speak, feels compressed where it could breathe)"

**My honest reaction as the REFINE builder:**

This is **mostly helpful with one serious risk.**

**Helpful:** The generative language puts me in COMPOSITIONAL mode immediately. Instead of "increase padding in Zone 3 from 16px to 24px," I receive "Zone 3 feels compressed where it could breathe." The first triggers CORRECTIVE mode (find 16px, change to 24px, done). The second triggers COMPOSITIONAL mode (how does Zone 3 breathe? maybe padding, maybe line-height, maybe fewer elements, maybe a different approach entirely). The generative frame opens MORE possibilities, which is what an Opus builder needs.

**The serious risk: LOSS OF SPECIFICITY.** When the original builder wrote "[D-02] Z3-Z4 boundary — background delta only 8 RGB, needs more contrast | MEDIUM," the transformed version might become "the transition from dense to resolving zones whispers where it could speak." I've lost THREE pieces of information:
1. WHICH boundary (Z3-Z4 specifically)
2. WHAT property (background delta)
3. HOW MUCH gap (8 RGB)

The protocol says "Preserve the ZONE REFERENCE" — which keeps #1. But #2 and #3 are deliberately dropped. For COMPOSITIONAL issues this is appropriate (the REFINE builder might find a better solution than the original builder's specific idea). For MECHANICAL issues (8 RGB delta is below perceptual threshold), the loss of specificity means I might "deepen" the transition in a way that STILL doesn't cross 15 RGB.

**Verdict: The transformation is a good idea with an information loss risk on mechanical items.** Suggestion: mechanical items (threshold violations, integer pixel rules) should be passed through with SPECIFIC VALUES intact, wrapped in generative framing: "The Z3-Z4 boundary barely whispers (8 RGB delta) — at least 15 RGB is needed for the eye to register the transition. How might this boundary announce itself?"

### Question 12: Would convergence framing encourage pushing further, or do stop signals still dominate?

**The convergence framing is PRESENT and GENUINE.** Key signals:

**Continue signals in the orchestrator:**
- "The IMPROVE pass is the pipeline's highest-value phase: +1.0 to +1.5 PA-05 per pass"
- "This is the standard path to excellence, not recovery from failure"
- "Quality_n = Quality_{n-1} + Convergence(Builder_Intent, PA_Perception)"
- "60-80% of builds converge in two passes" (normalizes iteration)
- "The gap between 'what I built' and 'what I see it could become'"

**Stop signals that persist:**
- "Convergence budget: 1 REBUILD + 2 IMPROVE passes maximum" (hard cap)
- GR-65 structure preservation verification (if I change too much, my work gets DISCARDED)
- "Max 1 retry" (multiple places)
- Pass A identity gates: "ANY FAIL -> REBUILD" (nuclear option)
- BV-07 builder volume ceiling: "If > 2,500, compress or remove" (line budget)

**My REFINE experience:** I receive artistic + conviction + improvements + brief + HTML. The artistic tells me what's beautiful. The improvements tell me what's possible. The conviction tells me what to protect. And then...

**I would push further, but with CAUTION.** The isolation rules protect me from diagnostic thinking, which is the right move. But I would be hyper-aware that my changes get re-audited by 9 PA agents, and that structural changes trigger GR-65. This creates a natural conservatism: I deepen CSS within existing structure rather than rethinking structure itself. This is probably the RIGHT behavior for REFINE (vs. REBUILD), but it means my "pushing further" is bounded to SURFACE AND DEPTH, not ARCHITECTURE.

**The net dynamic:** Convergence framing WORKS for encouraging another pass. It does NOT work for encouraging BOLD moves within that pass. The REFINE builder will make 20 safe improvements rather than 3 transformative ones, because the gate structure rewards compliance over ambition.

---

## IDEOLOGY EXPERIENCE

### Question 13: Does the recipe feel like it INVITES quality, or DEMANDS compliance?

**Both, in different phases:**

| Phase | Feeling | Evidence |
|-------|---------|----------|
| Phase 1 (Read) | **Neutral — information intake** | "Read tokens.css cover to cover." Neither inviting nor demanding, just preparation. |
| Phase 2 (Select) | **INVITES quality** | "80% creative authority." "Are you EXCITED about building this page?" "Can you see the finished product?" The creative check at Step 2.9 is GENUINELY invitational. |
| Phase 3 (Deploy) | **DEMANDS compliance** | "Layout variety requirement." "Component adoption requirement." "Border width rule: All border widths use INTEGER pixels." The deployment phase is rule-heavy. |
| Phase 4 (Dispositions) | **INVITES quality** | "PURPOSE + VOCABULARY" framing. Each disposition provides intent and tools, not checklists. "D-04 creates CONDITIONS for surprise (not guaranteed)." |
| Phase 5 (Self-Eval) | **Mixed** | Step 5.3-5.7 are reflective (invitation). Step 5.8 (IMPROVEMENTS) starts invitational but has the quota tension. |
| Appendices | **DEMANDS compliance** | Council amendments, evidence status, item cross-reference — all compliance infrastructure. |

**Overall ratio: 55% invitation, 45% compliance.** The recipe is BETTER than previous pipeline versions (which were 90%+ compliance), but the deployment phase (which is WHERE I SPEND THE MOST TIME) still reads as rule-first. The creative peak of the recipe is in Phase 2 and Phase 4, which are ~35% of the document. Phase 3 (the actual building) is ~30% of the document and reads as compliance-heavy.

**The critical design question:** Can Phase 3 be rewritten to feel invitational? The rules in Phase 3 are REAL constraints (integer borders, layout variety, component adoption) — they are not arbitrary. But the FRAMING is imperative-negative ("Do NOT", "WRONG:", anti-patterns). The same content framed as "your borders sing clearest at integer pixels (1px, 2px, 3px, 4px) — non-integer borders blur across zoom levels" would communicate the same constraint with different energy.

### Question 14: Count the stop signals vs continue signals I encounter during my simulated build

**STOP SIGNALS (things that say "don't", "avoid", "wrong", "fail", "anti-pattern", "must not"):**

| # | Location | Signal |
|---|----------|--------|
| 1 | Step 2.1 | "Never use #FFFFFF for zone backgrounds" |
| 2 | Step 2.1 | "No cold blues (#4A90D9) or cold purples (#7C3AED)" |
| 3 | Step 2.1 | "Anti-pattern: threshold gaming" |
| 4 | Step 2.3 | "APPLIED mode indicator: --bg-z1, --bg-z2 (named by position -- avoid this)" |
| 5 | Step 3 | "single-column stack must not exceed 60% of zones" |
| 6 | Step 3 | "never reinvent" (components) |
| 7 | Step 3 | "No trailing white space should be visible below the last content zone" |
| 8 | Step 3.4 | "WRONG: border-width: 0.5px" |
| 9 | Step 3.4d | "Do not cluster them at the top of the file" |
| 10 | D-09 | "Anti-pattern: empty zone with uniform cream" |
| 11 | D-04 | "GAS TOWN: ZERO surprise moments" (failure example) |
| 12 | D-03 | "Gas Town scored 7/10 authority" (failure example) |
| 13 | D-05 | "Gas Town: 5/10 closure" (failure example) |
| 14 | Phase 4 | "Gas Town scored 19/25 on spatial composition" (failure example) |
| 15 | Appendix A | "Activation framing RETIRED" |
| 16 | Various | "Do NOT attempt D-07 or D-08" (boundary enforcement) |
| 17 | Various | "EXPERIMENTAL" status labels (implying untested, cautious) |

**CONTINUE SIGNALS (things that say "can", "explore", "create", "deepen", "choose", "your decision"):**

| # | Location | Signal |
|---|----------|--------|
| 1 | Header | "80% creative authority" |
| 2 | Step 2.1 | "Choose how background colors differentiate your page's zones" |
| 3 | Step 2.2 | "Choose how typography varies" |
| 4 | Step 2.3 | "Derive a governing metaphor from the content" |
| 5 | Step 2.4 | "Decide how callouts adapt" |
| 6 | Step 2.5 | "Choose which components to use" |
| 7 | Step 2.7 | "Choose how interactive elements respond" |
| 8 | Step 2.8 | "Choose how zones transition" |
| 9 | Step 2.9 | "Are you EXCITED about building this page?" |
| 10 | Step 2.9 | "Can you see the finished product in your mind?" |
| 11 | D-04 | "Somewhere in the second half, create a moment" |
| 12 | D-09 | "The quiet zone is deliberate restraint, not absence" |
| 13 | Phase 4 | "80% creative authority / 20% constraint" |
| 14 | Step 5.8 | "This is not a confession of failure" |
| 15 | Step 5.8 | "The gap between what I built and what I see it could become" |
| 16 | Appendix A | "80% creative authority = retained as builder framing" |

**COUNT: 17 STOP signals vs 16 CONTINUE signals.**

**Ratio: ~1.06:1 (nearly equal).**

This is a DRAMATIC improvement from previous pipeline versions (which were reportedly 30:1 stop-to-continue). But the signals are not evenly distributed:

- Phase 2 (Select): 2 stop, 9 continue = **0.22:1** (very invitational)
- Phase 3 (Deploy): 7 stop, 0 continue = **infinity:1** (pure compliance)
- Phase 4 (Dispositions): 5 stop, 3 continue = **1.67:1** (slightly compliance-heavy)
- Phase 5 (Evaluate): 1 stop, 3 continue = **0.33:1** (invitational)

**The building phase (Phase 3) has ZERO continue signals.** This is where I spend the most creative energy, and every signal I encounter is a constraint. The continue signals cluster in Phase 2 (where I'm PLANNING) and Phase 5 (where I'm REFLECTING). The actual MAKING has no encouragement.

### Question 15: Would I stop at "done" or push for "better"?

**I would stop at "done" for Pass A.** Here's why:

1. The recipe explicitly tells me that a SECOND builder will handle Pass B. My work is INTERMEDIATE, not final. The psychological signal: don't over-invest — someone else will continue.

2. Step 5.8 (IMPROVEMENTS) asks me to LIST what I would do with another pass. The implication: I should HAVE unfinished business. If I push for "better" within Pass A, I have fewer genuine improvement ideas for Step 5.8, which triggers "single-pass RELEASE evaluation" (a different path). There is a subtle incentive to STOP.

3. The Phase 5 self-evaluation is positioned as the FINAL step. After evaluating, there is no "now improve what you found" step within Pass A. The recipe ends. Done.

4. The 833-line recipe creates cognitive fatigue. By the time I finish Phase 4 dispositions and enter Phase 5, I have been reading and building for ~20 minutes. The urge to FINISH is strong.

**For REFINE, I would push slightly further**, because:
- The REFINE framing explicitly says "deepen" and "intensify"
- I am reading artistic prose about what the page COULD be
- I have specific improvement seeds to work with
- The isolation from gates/scores means I'm not watching a compliance meter

**But my "further" would be conservative.** GR-65 structure preservation + the knowledge that 9 PA auditors will examine my work creates self-censorship. I would make 15-20 CSS refinements (safe), not attempt a zone restructure (risky, even if compositionally better).

**Honest answer: I would stop at "done" 70% of the time.** The 30% where I push for "better" would be when the content genuinely excites me AND the metaphor suggests an obvious deepening that I can execute without structural risk.

---

## CROSS-CUTTING FINDINGS

### Finding 1: The recipe is well-sequenced but FRONT-LOADED with reading

3,100+ mandatory lines of reading before writing any CSS. The quick-reference table (Step 1.1b) is a smart mitigation. But the fundamental tension: reading is PASSIVE, building is ACTIVE. A builder in COMPOSING mode wants to START MAKING. The recipe asks for 15-20 minutes of reading first. By Phase 3, some of that reading has decayed.

**Suggestion:** Intersperse reading with micro-exercises. After reading tokens.css, have the builder WRITE their custom properties from memory. After reading components.css, have them SKETCH which components they'll use. Reading + immediate application = better retention than reading + delayed application.

### Finding 2: Phase 3 (Deploy) is the compliance dead zone

Zero continue signals. All rules. This is the phase where the builder writes the actual CSS — the creative heart of the work. And it reads like a building code. The irony: the recipe INVITES creative thinking in Phase 2, then CONSTRAINS it in Phase 3, then asks the builder to REFLECT on their creativity in Phase 5.

**Suggestion:** Each Step 3.x should end with a brief invitational note: "How does this zone's background express the metaphor?" or "What does this transition's weight tell the reader about the territory ahead?" This costs ~10 lines and would break the compliance monotone.

### Finding 3: The appendices consume 24% of the file and serve zero builder needs

Lines 634-833 (200 lines of appendices) are audit infrastructure embedded in a builder document. The builder is explicitly told "Use this for audit trail verification, not during building." This is the definition of wrong audience. Moving appendices to a separate `recipe-provenance.md` file would shrink the compose recipe from 833 to ~633 lines (24% reduction) with zero loss of builder utility.

### Finding 4: The two-pass split is the recipe's highest-value v5 change

Pass A (833 lines) produces structure. Pass B (284 lines) adds polish. The scope separation is CLEAR, the handoff artifacts (CONVICTION + INTENT comments + RESIDUAL) are well-designed, and the ADD-ONLY constraint prevents Pass B from undermining Pass A. This is a genuine improvement over a single-pass approach.

### Finding 5: D-06/D-09 disposition ownership conflict between recipe and orchestrator

The compose recipe assigns 7 dispositions to Pass A (D-01 through D-06 + D-09). The orchestrator assigns 5 to Pass A (D-01 through D-05) and 4 to Pass B (D-06 through D-09). The builder will follow the recipe (7 dispositions), which means Pass B's recipe covers D-07 and D-08 but NOT D-06 and D-09 (because they were already done in Pass A). This works in practice — but the orchestrator's description is wrong.

### Finding 6: REFINE isolation is well-designed but fragile

The protocol depends on UPSTREAM ARTIFACT QUALITY: Weaver artistic impression must be specific, RESIDUAL must be complete, IMPROVEMENTS transformation must preserve zone references. If any of these are thin or generic, the REFINE builder is navigating blind. The protocol doesn't have a quality gate on these artifacts — it trusts the orchestrator and Weaver to produce good ones.

### Finding 7: Gas Town failure references create a corrective undertow

The compose recipe contains 6 explicit "Gas Town scored X" or "Gas Town had this problem" references. Each is instructive individually. Together, they create a narrative: "the last builder failed, don't make the same mistakes." This narrative is CORRECTIVE, not GENERATIVE. An alternative framing: "CD-006 achieved X by doing Y" (exemplar-positive) rather than "Gas Town scored X because it didn't do Y" (failure-negative). Both communicate the same technical content; the emotional register differs.

---

## SUMMARY VERDICT

| Dimension | Score | Notes |
|-----------|-------|-------|
| Sequencing clarity | 4/5 | Clear phase verbs (READ/SELECT/DEPLOY/APPLY/EVALUATE). Phase 6 positioning is wrong. |
| Reading load | 2/5 | ~3,100 lines mandatory. Appendices inflate recipe by 24%. |
| Creative invitation | 3/5 | Phase 2 is excellent. Phase 3 is a compliance desert. |
| INTENT narration protocol | 4/5 | Well-structured format. Count target may be too high (17-22). |
| Pass B ADD-ONLY clarity | 5/5 | Binary prohibited/permitted lists. Escape hatch for discovered flaws. |
| REFINE builder experience | 3/5 | Good isolation. Fragile on upstream artifact quality. Conservative by design. |
| Stop vs continue balance | 3/5 | 17:16 global ratio (huge improvement from 30:1). Phase 3 is infinity:1. |
| Overall: would I COMPOSE or COMPLY? | **COMPOSE in Phase 2, COMPLY in Phase 3, REFLECT in Phase 5** | The recipe creates three modes, not one. Phase 3 needs invitational energy. |

**Bottom line:** A competent Opus builder receiving this recipe would produce a COMPOSED page at PA-05 2.5-3.0. The recipe's structure (phases, verbs, sequencing) is genuinely good. Its emotional register is uneven — invitational in planning, compliant in execution. The REFINE protocol is the pipeline's highest-value innovation but depends on upstream artifact quality. The single highest-leverage improvement: add continue signals to Phase 3 (the building phase) and move appendices out of the builder's document.

---

*End of builder experience simulation. 15 questions answered across 3 simulation passes.*
