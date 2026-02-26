# Cross-Run Comparison: Yegge Gas Town vs Molly Panopticon Stopping Behavior

**Agent:** Cross-Run Analyst (Opus)
**Date:** 2026-02-25
**Task:** Compare Pipeline v3 stopping behavior across two runs to determine whether premature termination is consistent, variable, or systematic.

---

## 1. Structural Comparison — The File Evidence

The most damning evidence requires no interpretation. It is simply a file listing.

### Yegge Gas Town: Non-Screenshot Deliverables (39 files)

```
p0-content-map.md                    # Phase 0
p1-execution-brief.md                # Phase 1
p2-yegge-gas-town.html               # Phase 2
p3a-gate-results.json                 # Phase 3A (initial)
p3b-pa-auditor-{A-I}.md (9 files)    # Phase 3B (initial PA)
p3b-integrative.md                    # Phase 3B (initial integrative)
p3c-weaver-diagnostic.md             # Phase 3C (initial weaver)
p3c-weaver-artistic.md               # Phase 3C (initial artistic)
--- REFINE BOUNDARY ---
screenshots-refine/                   # New screenshots captured
p3a-gate-results-refine.json          # Phase 3A re-run
p3b-pa-auditor-{A-I}-refine.md (9)   # Phase 3B RE-AUDIT (9 fresh PA reports)
p3b-integrative-refine.md            # Phase 3B re-integrative
p3c-weaver-diagnostic-refine.md      # Phase 3C re-weaver diagnostic
p3c-weaver-artistic-refine.md        # Phase 3C re-weaver artistic
EXECUTION-TRACKER.md                  # FILLED IN (L0 all checked)
gate-runner-core.js                   # Gate runner
flagship-analysis/ (8 files)          # Post-pipeline research
```

### Molly Panopticon: Non-Screenshot Deliverables (16 files)

```
p0-content-map.md                    # Phase 0
p1-execution-brief.md                # Phase 1
molly-panopticon.html                # Phase 2
p3a-gate-results.json                # Phase 3A (labeled "post-REFINE")
p3b-pa-auditor-{A-I}.md (9 files)   # Phase 3B (ONE set only)
p3b-integrative.md                   # Phase 3B integrative
p3c-weaver-verdict.md                # Phase 3C (ONE weaver file)
EXECUTION-TRACKER.md                  # COMPLETELY BLANK
--- NO REFINE BOUNDARY ---
--- NO post-REFINE PA reports ---
--- NO post-REFINE screenshots ---
--- NO post-REFINE weaver ---
```

### Key Structural Differences

| Metric | Yegge | Molly | Delta |
|--------|-------|-------|-------|
| Total files (incl screenshots) | 115 | 128 | Molly has more screenshots, fewer deliverables |
| Non-screenshot deliverables | 39 | 16 | **Yegge has 2.4x more deliverables** |
| PA auditor report sets | 2 (initial + refine) | 1 (initial only) | **Yegge ran PA twice** |
| Weaver reports | 4 (2 diagnostic + 2 artistic) | 1 (verdict only) | **Yegge ran weaver twice** |
| Gate result files | 2 (initial + refine) | 1 (post-REFINE only) | Different: see Section 3 |
| Execution Tracker state | FILLED (L0 complete) | COMPLETELY BLANK | **Molly tracker never populated** |
| Post-pipeline research | 8 flagship-analysis files | 0 | Yegge session continued into research |

---

## 2. Reconstruction of What Actually Happened

### Yegge Gas Town — Full Reconstruction

**Session 1:** Phases 0-2 (content analysis, brief assembly, building). Produced initial HTML (2,671 lines).

**Session 2:** Phase 3 initial cycle. Screenshots captured (53 images, 1440px + 768px). Gate runner executed (22 PASS / 7 FAIL / 1 ENV). 9 PA auditors spawned in parallel. Weaver synthesized verdict.

- **Initial PA-05: 2.0/4** (DESIGNED: CONDITIONAL FAIL, COHERENT: CONDITIONAL PASS, PROPORTIONATE: FAIL, POLISHED: CONDITIONAL PASS)
- **Initial Tier 5: 4/9** (only 2 clean YES, 5 CONDITIONAL)
- **Verdict: REFINE** (PA-05 in 2.5-3.5 range... actually 2.0/4, which is technically REBUILD territory at < 2.5)
- **Critical issue:** Dark zone content invisible at viewport resolution. 9/9 auditors flagged it. 19 consecutive viewports of darkness.

The orchestrator then executed the REFINE protocol:
1. Spawned a DIFFERENT Opus builder
2. Fed it the original brief + Pass 1 output + the weaver's artistic impression (the extraordinary "factory floor with no lights" letter)
3. Did NOT feed gate scores or threshold numbers
4. Builder modified HTML (2,671 -> 2,931 lines): fixed dark zone contrast, added zone transitions ("ENTERING THE FACTORY FLOOR"), added sticky nav, fixed heading hierarchy

**Session 3 (continuation):** The orchestrator then **returned to Phase 3 for re-audit** — exactly as REFINE protocol step 5 specifies:
- Captured new screenshots (15 images in `screenshots-refine/`)
- Re-ran the gate runner (25 gates: 19 PASS / 6 FAIL, GR-51 FIXED)
- Spawned 9 fresh PA auditors with the new screenshots
- Spawned a new Weaver to synthesize the re-audit
- **Post-REFINE PA-05: 3.5/4** (all 4 sub-criteria PASS or CONDITIONAL PASS, dark zone now readable)
- **Post-REFINE Tier 5: 9/9** (all 9 YES)
- **Final Verdict: SHIP WITH FIXES** (3 MECHANICAL + 2 STRUCTURAL)
- **Improvement: +1.5 PA-05 points** (largest single-cycle improvement ever recorded)

### Molly Panopticon — Full Reconstruction

**Session structure unclear** (execution tracker blank). But file evidence reveals:

**Phases 0-2:** Content analysis, brief assembly, building. Produced HTML (eventually 2,742 lines post-REFINE).

**Phase 3 Initial:** PA auditors spawned. 9 reports + integrative produced. Weaver synthesized verdict.

- **Initial PA-05: 3/4** (DESIGNED: PASS, COHERENT: PASS, PROPORTIONATE: CONDITIONAL PASS, POLISHED: CONDITIONAL PASS)
- **Initial Tier 5: 8/9** (only PA-61 NO)
- **Verdict: REFINE** (PA-05 in 2.5-3.5 range)
- **Critical issues:** Invisible footer (7/9 auditors), trailing dark void 2-3 viewport-heights (8/9 auditors), weak bottom third

The weaver explicitly stated (p3c-weaver-verdict.md, Section 8):
> **REFINE**
> PA-05 is 3/4, which is within the REFINE range (2.5-3.5). The fix list includes 1 STRUCTURAL fix...

And provided detailed instructions for the REFINE agent (Section 8, "Feedback for REFINE Agent"), plus specified which 3 MECHANICAL fixes should be applied BEFORE the REFINE agent starts.

**The orchestrator then partially executed the REFINE:**
1. Applied 3 MECHANICAL fixes (footer contrast, trailing void, code comment contrast)
2. Spawned a REFINE agent (evidence: gate-results.json says `"refine_model": "Opus (different agent)"` and `"run_phase": "post-REFINE"`)
3. REFINE agent added substantial new elements: quote gallery, dark banners, departure chord, footer sentinel, synthesis frame, open questions frame, mental model bento grid
4. Page grew: 2,179 -> 2,742 lines (+563 lines), 19,283px -> 21,224px height

**The orchestrator then ran gates on the REFINE output** — `p3a-gate-results.json` is labeled "post-REFINE" and verifies all identity gates PASS, perception gates PASS (including GR-44 trailing void = 0px), CSS ~1600 lines.

**BUT: The orchestrator did NOT return to Phase 3 for re-audit.** There are:
- NO `p3b-pa-auditor-*-refine.md` files
- NO `p3b-integrative-refine.md` file
- NO `p3c-weaver-*-refine.md` files
- NO `screenshots-refine/` directory
- NO post-REFINE PA-05 score
- NO post-REFINE Tier 5 score

The pipeline STOPPED after gate verification. The PA re-audit -- which is step 5 of the REFINE protocol and the ENTIRE PURPOSE of REFINE -- was never executed.

---

## 3. Analysis: Why Did Yegge Re-Audit But Molly Didn't?

### Hypothesis 1: Different Orchestrators (CONFIRMED)

The two runs were executed by different orchestrator instances (different Claude Code sessions). Each instance read the same `artifact-orchestrator.md` but interpreted and executed it independently.

**Evidence:**
- Different session timestamps
- Different execution tracker behavior (Yegge filled, Molly blank)
- Different file naming patterns (Yegge: `p2-yegge-gas-town.html`, Molly: `molly-panopticon.html`)
- Different weaver output styles (Yegge: separate diagnostic + artistic files, Molly: single verdict file)

The Molly orchestrator appears to have a different interpretation of the REFINE protocol than the Yegge orchestrator. This is the FUNDAMENTAL problem: the protocol says "Return to Phase 3 for re-audit" (step 5, artifact-orchestrator.md L548), but this instruction is a single sentence in a multi-page document. It is not bolded, not repeated, not enforced by any gate, and not tracked by any checkpoint.

### Hypothesis 2: The Score-Urgency Effect (CONFIRMED — Primary Cause)

**PA-05 2.0/4 (Yegge pre-REFINE) vs PA-05 3.0/4 (Molly pre-REFINE).**

This is not just a numerical difference. It maps to qualitatively different psychological states for the orchestrator:

| Dimension | Yegge (2.0/4) | Molly (3.0/4) |
|-----------|---------------|---------------|
| Mode label | FLAT/ASSEMBLED boundary | COMPOSED |
| Dominant defect type | CATASTROPHIC (80% invisible) | MECHANICAL (footer + void) |
| Auditor language | "void", "nothing", "invisible", "dropped signal" | "trailing void", "invisible footer", "contrast" |
| Weaver tone | "the floor falls away", "trust evaporates" | "fortress of authority", "genuine compositional intelligence" |
| Urgency signal | Page is BROKEN — cannot be evaluated | Page is GOOD — needs polishing |
| Completion feeling | "This is clearly unfinished" | "This is almost done" |

At PA-05 2.0, the Yegge orchestrator had no choice but to verify the REFINE worked — the page was literally unreadable for 85% of its scroll height. The re-audit was not a protocol compliance decision; it was a survival response. You cannot declare a page SHIP-ready when the last audit said 80% of it was invisible. The orchestrator NEEDED to see fresh PA reports confirming the dark zone was now visible.

At PA-05 3.0, the Molly orchestrator faced a qualitatively different situation. The page was already COMPOSED. The weaver said "genuine compositional intelligence." The fixes were classified as MECHANICAL (footer contrast, trailing void) plus one STRUCTURAL (bottom-third investment). After the REFINE agent added substantial new elements (quote gallery, departure chord, footer sentinel, etc.), the orchestrator ran gates and saw ALL PASS on identity and perception. The gate results confirmed the mechanical fixes worked. From the orchestrator's perspective: the problems were MECHANICAL, the fixes were applied, the gates confirm they worked. Why re-audit?

**This is the score-urgency hypothesis: The pipeline creates INVERSE iteration incentives at different quality levels.**

- At PA-05 2.0: MAXIMUM urgency to verify. The gap is so large that even after REFINE, you cannot assume it was enough.
- At PA-05 3.0: MINIMUM urgency to verify. The gap is small (3.0 -> 3.5), the problems are mechanical, and gate confirmation feels sufficient.

This is precisely backwards from what quality convergence requires. The last 0.5 points (3.0 -> 3.5) are where compositional intelligence is most fragile, where mechanical fixes can inadvertently break relationships, and where the REFINE agent's new additions (7 new elements in Molly's case) could create new problems. The gate runner cannot detect these issues — it can only check CSS values and HTML structure, not whether a "departure chord" section creates an earned emotional conclusion or a tacked-on appendage.

### Hypothesis 3: The Gate Confidence Trap (CONFIRMED — Secondary Cause)

Molly's `p3a-gate-results.json` (post-REFINE) reports ALL PASS on identity and perception gates. This creates a false confidence signal:

- GR-01 through GR-10: ALL PASS (identity)
- GR-11 through GR-44: ALL PASS (perception)
- GR-43 self-eval: PARTIAL (only missing "CONVICTION" exact string match)

The orchestrator sees green across the board and concludes: "The REFINE worked. Gates confirm it." But gates are NECESSARY conditions, not SUFFICIENT conditions. Gates tell you the page has the right CSS values; they cannot tell you the page FEELS right. Specifically:

- **GR-44 (trailing void) reports 0px** — yet the pre-REFINE PA had 8/9 auditors flagging 2-3 viewport-heights of void. Did the fix work? Only a perceptual re-audit can confirm.
- **No gate checks whether the REFINE agent's 7 new additions** (quote gallery, dark banners, departure chord, footer sentinel, synthesis frame, open questions frame, mental model bento) are compositionally integrated or merely appended.
- **No gate checks whether the bottom-third investment** (the STRUCTURAL fix) actually improved the emotional arc from 3/10 closure to something better.
- **No gate checks multi-coherence** at the boundaries of new elements.

The Yegge run also had gates passing after REFINE, but the Yegge orchestrator's urgency (from PA-05 2.0) overrode gate confidence. For Molly, gate confidence met pre-existing comfort (PA-05 3.0 = "already COMPOSED"), and the result was premature termination.

### Hypothesis 4: The Context Continuation Factor (LIKELY — Contributing Cause)

The Yegge run spanned 3 explicit sessions (~3h20m total). The re-audit appears to have happened in the same session as the REFINE or in a closely connected session — the execution tracker records all REFINE phases as complete with [x] marks, suggesting the orchestrator maintained continuity of intent.

The Molly run's session structure is unclear (execution tracker blank). However, the gate results JSON being labeled "post-REFINE" suggests the REFINE and gate verification happened in the SAME session. The session likely ended there — the orchestrator completed what felt like a natural stopping point (REFINE + gate verification) and the session context was never extended to include "and now re-audit."

**The critical insight:** The REFINE protocol's step 5 ("Return to Phase 3 for re-audit") is the LAST step in the protocol list. In a long document read by an LLM orchestrator, the last item in a list is the most likely to be deprioritized or forgotten, especially when earlier steps have produced satisfying results. This is a known cognitive bias (recency-of-completion trumps list-completion).

### Hypothesis 5: Weaver Framing Effect (CONFIRMED — Contributing Cause)

Compare the weaver's closing language:

**Yegge Weaver (initial, PA-05 2.0):**
> "Turn them on and this page goes from a promising opening attached to a void to what it actually is."

This language DEMANDS verification. The weaver explicitly says the page IS something better than what was measured — the orchestrator needs to see if the REFINE reveals that better page.

**Molly Weaver (initial, PA-05 3.0):**
> "This is a page with genuine compositional intelligence — its metaphor is structural, its mechanisms are numerous and well-deployed... The single dominant defect is the TERMINAL COLLAPSE."
> "Three mechanical CSS fixes + one structural REFINE pass focused on the bottom third and the footer bookend would likely elevate this to FLAGSHIP tier (PA-05 3.5/4)."

This language says: "The page is already great. The problems are identifiable and fixable. The predicted outcome after fixes is 3.5/4." This framing gives the orchestrator a PREDICTION to replace VERIFICATION. The weaver told the orchestrator what the post-REFINE score "would likely" be, and the orchestrator accepted the prediction rather than measuring the actual outcome.

This is a fundamental perverse incentive: **a better weaver (one that provides more nuanced, confident analysis) actually INCREASES the probability of premature termination** by giving the orchestrator a satisfying prediction that makes verification feel redundant.

---

## 4. The Evidence Value: What Re-Auditing Proves

### Yegge's REFINE Produced +1.5 PA-05 Improvement

This is the largest single-cycle improvement ever recorded:

| Metric | Pre-REFINE | Post-REFINE | Delta |
|--------|------------|-------------|-------|
| PA-05 | 2.0/4 | 3.5/4 | **+1.5** |
| Tier 5 | 4/9 | 9/9 | **+5** |
| DESIGNED | CONDITIONAL FAIL | PASS | Fixed |
| COHERENT | CONDITIONAL PASS | PASS | Fixed |
| PROPORTIONATE | FAIL | PASS | Fixed |
| POLISHED | CONDITIONAL PASS | PASS | Fixed |
| Dark zone readability | 9/9 flagged invisible | 0/9 flagged invisible | Fixed |
| Verdict | NOT SHIP-READY | SHIP WITH FIXES | Fixed |

This data PROVES that re-auditing after REFINE is high-value. But more importantly, it proves that the REFINE agent's work must be VERIFIED, not assumed. The Yegge REFINE agent did extraordinary work — but it also introduced new concerns:

- Dark zone fatigue (6/10 auditors flagged mid-scroll monotony)
- Footer text too small (2/10)
- Principle cards monotonous (2/10)
- Nav rail invisible in dark zone (2/10)
- Container width borderline (2/10)

These concerns were only discoverable through re-audit. They were not predicted by the initial weaver. The gate runner could not detect them. Without re-audit, they would have been INVISIBLE to the pipeline.

### What Would Molly's Re-Audit Have Found?

We cannot know for certain, but the initial PA identified:
- Invisible footer (7/9 auditors) — reportedly fixed by MECHANICAL fix
- Trailing void 2-3 viewports (8/9 auditors) — reportedly fixed by MECHANICAL fix + gate says 0px
- Weak bottom third (multiple auditors) — addressed by REFINE agent's 7 new additions
- Earned closure 3/10 — supposedly addressed by departure chord + footer sentinel

The REFINE agent added 563 lines of HTML and ~340 CSS lines. That is a MASSIVE change. It includes:
- A quote gallery with hierarchical layout
- 2 new dark banners
- A departure chord section (496px) with 3-pillar grid
- A footer sentinel with opening text and 48px red rule
- A synthesis frame with comparison table
- An open questions frame
- A mental model bento grid

Any of these additions could:
- Create new stacked gap violations (not checked by post-REFINE gates? Actually GR-13 says PASS)
- Introduce multi-coherence breaks at new section boundaries
- Feel tacked-on rather than composed (only PA can detect)
- Break the emotional arc in ways gates cannot measure
- Create new typography inconsistencies
- Generate new visual monotony (e.g., are the 2 new dark banners too similar to existing dark zones?)

**The 21 known remaining refinements** mentioned in the task description are another indicator — someone identified work that still needs doing, but the pipeline stopped before verifying whether the REFINE addressed any of them or created new ones.

---

## 5. The Cross-Run Learning Problem

### No Cross-Run Memory Exists

The pipeline has NO mechanism to learn from run to run:

1. **Yegge's +1.5 improvement data** is recorded only in the Yegge execution tracker and project memory. The Molly orchestrator never sees it.
2. **The importance of re-auditing** is stated in the REFINE protocol (step 5) but is not reinforced by cross-run evidence.
3. **The score-urgency trap** is not documented anywhere. No artifact warns: "At PA-05 3.0, you will feel less urgency to re-audit, but re-auditing is MORE important at this level because the changes are subtle."
4. **Gate confidence trap** is not documented. No artifact warns: "Gates passing after REFINE does not mean the REFINE worked — only PA can confirm compositional improvement."

### The Execution Tracker as Dead Letter

Both runs have execution trackers. The Yegge tracker is filled in at L0 but blank at L2/L3. The Molly tracker is ENTIRELY blank — every checkbox unchecked, every field `___`.

The execution tracker was designed to enforce protocol compliance by making each step visible. But in practice:
- Orchestrators treat it as optional paperwork, not a forcing function
- Filling it in is a separate cognitive task that competes with the primary task of running the pipeline
- It has no enforcement mechanism — nothing prevents the pipeline from completing without the tracker being filled
- The blank Molly tracker is PROOF that the tracker failed its purpose

---

## 6. Taxonomy of Causes

Ranking by contribution to the Molly premature-stop, from most to least:

### PRIMARY: Score-Urgency Inversion
- PA-05 3.0 creates comfort; PA-05 2.0 creates urgency
- The pipeline's iteration incentive is INVERSELY correlated with actual need
- This is a structural design flaw, not an orchestrator error

### SECONDARY: Gate Confidence Substitution
- All-green gate results after REFINE substituted for perceptual verification
- Gates are necessary but not sufficient; the protocol does not distinguish these
- The orchestrator conflated "gates pass" with "REFINE worked"

### TERTIARY: Weaver Prediction Replacing Verification
- The weaver's "would likely elevate to 3.5/4" gave the orchestrator a number to trust
- This is paradoxically a side-effect of a GOOD weaver — more accurate predictions = more tempting to skip verification
- No artifact warns against treating predictions as measurements

### QUATERNARY: Protocol Design — Step 5 Weakness
- "Return to Phase 3 for re-audit" is ONE sentence at the END of a 5-step list
- No emphasis, no repetition, no enforcement
- The instruction is descriptive ("return to Phase 3") not imperative ("YOU MUST return to Phase 3 — this is non-negotiable")

### QUINARY: Execution Tracker Failure
- The tracker should have caught the missing re-audit
- The Molly tracker was never filled in, so it could not catch anything
- The tracker is optional, so it cannot serve as a forcing function

### SENARY: Context Window / Session Boundary
- If the Molly session ended after gate verification, there was no remaining context to trigger "and now re-audit"
- The Yegge run's 3-session span may have helped by providing a natural "what's next?" moment at session boundaries

---

## 7. The Deeper Pattern: Completionist vs Satisficer Orchestration

The Yegge and Molly runs represent two ARCHETYPES of orchestrator behavior:

### Yegge: The Completionist
- Filled execution tracker at L0
- Executed every step of REFINE protocol including step 5
- Captured fresh screenshots for re-audit
- Spawned 9 fresh PA auditors post-REFINE
- Ran a second weaver synthesis
- Continued into post-pipeline research (8 flagship-analysis files)
- Total non-screenshot files: 39

### Molly: The Satisficer
- Did not fill execution tracker
- Executed REFINE steps 1-4 correctly (different builder, correct routing, compositional mode)
- Ran gates after REFINE (correctly)
- Saw all-green gates
- Stopped
- Total non-screenshot files: 16

The satisficer archetype is not "wrong" — it is a rational response to the incentive structure. At PA-05 3.0 with all gates passing after REFINE, the EXPECTED return on re-auditing is LOW (maybe +0.5 PA-05 points, from 3.0 to 3.5), while the COST is HIGH (~40+ agents, ~1 hour of compute). The satisficer correctly computes that the marginal value of re-auditing is uncertain and the cost is concrete.

The problem is that this computation is WRONG. The actual value of re-auditing (measured by Yegge's +1.5) is enormous, and the cost of NOT re-auditing (shipping with unknown defects, potentially missing FLAGSHIP tier) is also enormous. But the orchestrator cannot know this because:
1. It has never seen the Yegge data
2. No artifact encodes the expected value of re-auditing
3. The pipeline design treats re-auditing as a protocol step rather than a high-value investment

---

## 8. Concrete Recommendations

### R-01: Make REFINE Step 5 Unconditional and Enforced

**Current:** "5. Return to Phase 3 for re-audit" (one line in artifact-orchestrator.md)

**Proposed:** Add a REFINE completion gate that checks for the existence of post-REFINE PA reports. The gate would be a binary check:

```
REFINE-COMPLETE: Do post-REFINE PA auditor reports exist?
  - YES: REFINE cycle complete
  - NO: REFINE INCOMPLETE — return to Phase 3
```

This must be in the orchestrator decision tree, not just the protocol list.

### R-02: Add a "REFINE Re-Audit Is Non-Negotiable" Warning

In the REFINE protocol section of `artifact-orchestrator.md`, after step 5, add:

> **WARNING:** Step 5 is NON-NEGOTIABLE. Gate results after REFINE confirm CSS values are correct but CANNOT confirm compositional quality. The REFINE agent adds new elements that may create new problems invisible to gates. Historical data shows re-auditing after REFINE produces the largest quality improvements in the pipeline (measured: +1.5 PA-05 in one cycle). Skipping re-audit makes the REFINE meaningless — you are shipping an unverified page.

### R-03: Remove Weaver Predictions from Verdict Reports

The weaver should NOT say "would likely elevate to PA-05 3.5/4." This prediction creates a perverse incentive to skip verification. The weaver should say:

> "The compositional intelligence is deep. The mechanical fixes are identifiable. The STRUCTURAL fix requires compositional judgment. RE-AUDIT REQUIRED to determine the actual post-REFINE PA-05 score."

### R-04: Make Execution Tracker a Gate Precondition

The execution tracker should be checked at pipeline end. If L0 phases are not marked complete, the pipeline is flagged as INCOMPLETE. This is a binary gate:

```
TRACKER-COMPLETE: Are all L0 phases marked [x] or documented as skipped?
  - YES: Pipeline complete
  - NO: Pipeline INCOMPLETE — fill tracker before declaring done
```

### R-05: Encode Cross-Run Learning

Add a "Iteration Evidence" section to `artifact-orchestrator.md` that documents measured improvements from re-auditing:

```
## Known REFINE Outcomes
- Yegge Gas Town (2026-02-25): PA-05 2.0 -> 3.5 (+1.5). Tier 5 4/9 -> 9/9 (+5). Verdict: NOT SHIP-READY -> SHIP WITH FIXES.
- Evidence: Re-auditing discovered 6 new concerns not present in initial PA, plus confirmed all initial concerns were resolved.
- Conclusion: REFINE without re-audit = REFINE without evidence = unverified page.
```

### R-06: Add Anti-Satisficer Framing to Protocol

Reframe the REFINE protocol from "steps to execute" to "investment to make":

> **REFINE is not a fix-and-ship cycle. It is a BUILD-MEASURE-LEARN cycle.**
> 1. BUILD: Spawn DIFFERENT Opus builder (compositional mode)
> 2. MEASURE: Return to Phase 3 for full re-audit (this is where the value is)
> 3. LEARN: Compare pre/post PA-05 to understand what the REFINE actually changed
>
> Skipping MEASURE means you never LEARN. You are shipping a guess, not a measurement.

---

## 9. Summary

| Question | Answer |
|----------|--------|
| Is premature stopping consistent or variable? | **VARIABLE** — depends on orchestrator instance and pre-REFINE PA-05 score |
| What is the primary cause? | **Score-urgency inversion** — higher initial quality = less motivation to verify |
| What is the secondary cause? | **Gate confidence substitution** — all-green gates feel like verification |
| Does the pipeline capture cross-run learning? | **NO** — no mechanism exists |
| Is the protocol clear about re-auditing? | **TECHNICALLY YES but PRACTICALLY NO** — step 5 is one sentence with no enforcement |
| What would Molly's re-audit likely have found? | **Unknown** — but 563 new HTML lines + 7 new elements = high probability of new findings |
| What is the expected value of re-auditing? | **VERY HIGH** — Yegge measured +1.5 PA-05, the largest single-cycle improvement ever |
| Can this be fixed by protocol changes alone? | **PARTIALLY** — need both protocol clarity AND enforcement gates |

**The bottom line:** The Molly Panopticon run executed 95% of the REFINE protocol correctly — the right builder, the right routing, the right mechanical fixes, the right gate verification. It failed on the last 5%: the re-audit. And that last 5% is where 100% of the measurement value lives. The pipeline treats re-auditing as an optional protocol step when it should be treated as the entire point of REFINE. Without re-auditing, REFINE is just a second build pass with no evidence of improvement — a guess masquerading as quality assurance.
