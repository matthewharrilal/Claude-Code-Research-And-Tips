# Reinforcement Strategy Audit: /falls-in-love SKILL.md

**Audit focus:** Are the most execution-critical rules reinforced enough to survive 6-10 hours of uninterrupted agent execution?

**Core problem:** A 1,166-line file read once at session start, executed across 8-12 context windows spanning 100-200 passes. The agent reads the full file in Window 1. By Window 5 (hour 4), it has only the HTML, notebook, and most recent wave retrospective. The SKILL.md itself is NOT re-read after the first window. Any rule that is not either (a) internalized deeply enough to persist through context boundaries, or (b) re-introduced via notebook/retrospective prompts, will be forgotten.

---

## 1. TOP 10 MOST EXECUTION-CRITICAL RULES

### Rule 1: Every Pass Is a Full Build-Look-Refine Cycle
**What it says:** Each pass = Read research -> Build CSS -> Screenshot and scroll -> Evaluate (5 layers) -> Refine -> Decide next. Not "read findings, apply findings." Not "check constraints, fix, next."

**Where it appears:** Lines 280-299 (definition + non-negotiable declaration), 511, 539, 590, 632, 636, 736, 755, 785, 813, 850, 876, 1140

**Reinforcement count:** 13+ times. Restated at the opening of EVERY wave section.

**Risk level if forgotten:** CATASTROPHIC. Without the full cycle, the agent degenerates into a checklist applier. The screenshot step is what creates the reciprocal learning loop. Skipping it collapses the entire skill into a pipeline.

**Sufficient reinforcement?** YES -- this is the most reinforced rule in the file. Every wave explicitly restates it. This is the gold standard of reinforcement in this document.

---

### Rule 2: 10+ Full Cycles Per Research Slice (Not Per Primacy Turn)
**What it says:** "10+ passes per slice" means 10+ full build-look-refine cycles with each research file's DIMENSION as an active lens -- not 2-3 primacy turns plus passive awareness. Every pass engages every active dimension, not just the primacy file.

**Where it appears:** Lines 278-299 (primary definition, marked "most important operational concept"), 632-636 (Wave 2 clarification), 720 (Wave 3 restatement)

**Reinforcement count:** 3 times. The primary definition is very strong (lines 278-299: bold, explicit correction of the misinterpretation, non-negotiable declaration). But it is reinforced only twice more.

**Risk level if forgotten:** CATASTROPHIC. The difference between the agent doing 2-3 primacy turns per file (resulting in ~36 total passes) versus 10+ active cycles per dimension per wave (resulting in 100-200 total passes) IS the difference between a pipeline build and a devoted build. This rule determines whether the build takes 2 hours or 8 hours.

**Sufficient reinforcement?** NO. This is the most important operational concept, but it appears only 3 times -- all in the first half of the file (lines 278-720). By Wave 5 (line 775), Wave 6 (line 809), Wave 7 (line 846), and Wave 8 (line 872), the "10+ cycles per dimension" requirement is NEVER restated. The later waves say "15-25 passes" or "8-12 passes" but do not re-anchor what a "pass" means in terms of dimension engagement depth. An agent at hour 5 executing Wave 6 has zero textual reminder that "15-25 passes" means 15-25 FULL CYCLES per active dimension, not 15-25 quick adjustments.

---

### Rule 3: Design System Physics (Non-Negotiable Constraints)
**What it says:** border-radius: 0 always, box-shadow: none always, no gradients, font trinity, color palette, 4px spacing, 940-960px container, border hierarchy, responsive at 1440/768, accessibility requirements.

**Where it appears:** Lines 531 (Wave 1 summary), 1037-1051 (dedicated section "Design System Physics")

**Reinforcement count:** 2 times. The Wave 1 description lists them during the design system absorption wave. The dedicated section near the end lists them as "laws of the universe."

**Risk level if forgotten:** SEVERE. A page with border-radius, box-shadows, or the wrong fonts is a soul violation that invalidates the build. These are binary rules -- compliance is trivially verifiable.

**Sufficient reinforcement?** PARTIALLY. These rules are binary and concrete, which makes them easier to internalize. However, they appear in only 2 locations, and the second (lines 1037-1051) is late in the file. The HTML artifact carries forward soul compliance from Wave 1, so violations would require the agent to actively INTRODUCE non-compliant CSS -- which is unlikely but not impossible during refactoring or responsive passes. The bigger risk: the agent forgets accessibility requirements (skip link, ARIA, heading hierarchy, reduced motion, focus-visible, color contrast) which are listed only at line 1050 and very briefly at line 825. Accessibility is the most under-reinforced sub-rule within this category.

---

### Rule 4: Staleness Detection and Recovery
**What it says:** Assume evaluation IS stale right now. Prove it is not. 4 concrete detectors. When 2+ fire: STOP building, perform at least one recovery action (mandatory), next pass must change evaluation dimension.

**Where it appears:** Lines 170-206 (primary treatment, 36 lines), wave-specific staleness signatures at lines 182-198 (per-wave and per-dimension), line 546 (Wave 1 L5), line 603 (Wave 2 L5), line 1068 (Anti-Pattern #5)

**Reinforcement count:** 4 references to the concept, but the PROTOCOL (stop, intervene, rotate dimension) appears only ONCE (lines 199-205). The wave-specific staleness signatures are powerful but are all in one block (lines 182-198) and are never restated at the waves they describe.

**Risk level if forgotten:** CATASTROPHIC. Staleness is explicitly described as "gravity" -- the default state the agent drifts toward every pass. If the agent forgets the staleness protocol, it will execute 50+ passes in a habituated state, producing a page that looks "done" but lacks depth. The entire value proposition of 6-10 hours depends on the agent fighting staleness at every pass.

**Sufficient reinforcement?** NO. The staleness recovery PROTOCOL (lines 199-205) -- the most actionable part -- appears exactly once. The wave-specific signatures (lines 182-191) are excellent but are placed in a single early block rather than being distributed to the wave sections where they would actually be needed. Wave 6's staleness signature ("I am confirming that the page is good rather than interrogating whether it could be great") appears at line 189, but the Wave 6 section (lines 809-845) never references it. The agent executing Wave 6 at hour 5 will not remember what Wave 6 staleness looks like.

---

### Rule 5: Evaluation Must Evolve (5-Layer Metacognitive Framework)
**What it says:** Every look at the page operates across 5 layers simultaneously: L1 (What am I seeing?), L2 (Why now?), L3 (What am I NOT seeing?), L4 (How do I know?), L5 (Has my evaluation evolved?). The evaluation at pass 30 is a DIFFERENT evaluation from pass 5.

**Where it appears:** Lines 100-118 (primary definition), 513-518 (Wave 0 depth), 541-546 (Wave 1 depth), 598-603 (Wave 2 depth), 724-729 (Wave 3 depth), 761-766 (Wave 4 depth), 791-796 (Wave 5 depth), 830-835 (Wave 6 depth), 859-864 (Wave 7 depth), 884-889 (Wave 8 depth)

**Reinforcement count:** 10 times. Every wave provides wave-specific versions of all 5 layers.

**Risk level if forgotten:** SEVERE. Without evolving evaluation, the agent applies the same lens at pass 50 that it used at pass 5. The page becomes "professionally stiff" -- compliant but perceptually flat.

**Sufficient reinforcement?** YES -- this is the second-best reinforced concept after the build-look-refine cycle. Every wave's 5-layer customization forces the agent to engage with evaluation evolution at wave-appropriate depth. The wave-specific L5 questions are particularly effective because they describe what staleness looks like at that specific depth.

---

### Rule 6: The Swap Test (Content-Derivation Verification)
**What it says:** Take any spatial decision and mentally transplant it to different content. If it survives, it is GENERIC -- push deeper. If it breaks, it is CONTENT-DERIVED -- keep it.

**Where it appears:** Lines 114, 186, 211, 327, 339 (primary definition), 423, 716, 722, 728, 740, 816, 935, 1064

**Reinforcement count:** 13 references. Mentioned in staleness detection, false convergence, hypothesis formation, Wave 3 exhaustion signals, the Looking protocol, and anti-patterns.

**Risk level if forgotten:** SEVERE. Without the swap test, the agent has no mechanism to distinguish content-derived spatial decisions from generic ones. The page may look rich but be transplantable.

**Sufficient reinforcement?** YES. Well-distributed across the file. Appears in early conceptual sections, mid-file wave sections, and late-file protocol sections. The swap test is the one evaluation tool the agent will remember.

---

### Rule 7: Loss Detection as Primary Cognitive Move
**What it says:** "What would be lost if this content were presented as prose in a single column?" The loss NAMES the spatial form. Transform open-ended creative problem into diagnostic problem.

**Where it appears:** Lines 343-363 (primary treatment, 20 lines with worked example table), 368 (in the 7 cognitive moves list), 517 (Wave 0 L4), 1078 (Anti-Pattern #10)

**Reinforcement count:** 4 times.

**Risk level if forgotten:** SEVERE. Loss detection is described as "the MOST POWERFUL" cognitive move and produces the spatial skeleton. However, it is primarily a Wave 0 tool. Once the spatial skeleton is established, loss detection becomes less critical for moment-to-moment building. The risk is highest if the agent needs to re-derive spatial form after a context window transition.

**Sufficient reinforcement?** PARTIALLY. Well-explained in the primary treatment with a concrete worked example. But it is front-loaded: 3 of 4 appearances are in the first 368 lines. Only one reminder appears in the back half (line 1078). For a Wave 0 tool, this distribution is acceptable -- it appears when the agent is doing Wave 0 work. But if the agent enters a new context window mid-build and needs to re-orient to the content's spatial logic, the notebook/retrospective should carry the loss-detection table forward. The skill does not explicitly instruct the agent to include the loss-detection table in its notebook.

---

### Rule 8: Content Source Re-Reading at Wave Boundaries
**What it says:** Re-read the CONTENT (not the page -- the CONTENT) at specific intervals. The content handoff moves the source file from primacy to audit position, but the agent must return to it when staleness is detected, at wave boundaries, and during deep re-evaluation.

**Where it appears:** Lines 125 (staleness recovery), 202 (staleness protocol), 309-316 (how re-reading evolves), 507 (Wave 0), 581 (Wave 2 "look before reading"), 827-828 (Wave 6 passes 21-25), 856-857 (Wave 7 passes 7-8), 888 (Wave 8 L4), 1099-1109 (Content Handoff section)

**Reinforcement count:** 9 references, but spread across many different framings. The explicit instruction "re-read the content source file" appears at lines 125, 202, 827, 856, 888. The content handoff section (1099-1109) describes when to de-prioritize the content file but does not emphasize re-reading.

**Risk level if forgotten:** SEVERE. The content is what the entire spatial form is derived from. If the agent stops returning to the content, it builds from its MEMORY of the content -- which is compressed and habituated. The "reciprocal relationship" (building teaches you how to read the content) requires actual re-reading.

**Sufficient reinforcement?** PARTIALLY. The concept is present throughout the file, but it is always secondary -- mentioned within other instructions (staleness recovery, wave descriptions) rather than being a standalone instruction with its own heading and protocol. There is no "re-read the content" checkpoint in the wave transition prompts. The notebook transition protocol (lines 1120-1141) does not include "re-read the content source" as a mandatory step (it lists notebook -> retrospective -> HTML -> research -> content, and notes content is read "if entering a new wave" -- but this is conditional, not mandatory).

---

### Rule 9: Notebook Entries (1 Per Pass, Definition Journal, Wave Summaries)
**What it says:** Write 1 notebook entry per pass. Write the "definition of good" at the start and end of each wave (NEVER prune these). After each wave, write a 20-40 line wave summary. If notebook exceeds ~200 lines, prune per-pass entries but keep summaries.

**Where it appears:** Lines 133 (Definition Journal primary), 177 (staleness detector #1), 496 (minimum engagement table), 588, 634, 1092-1098 (notebook management), 1097 (deepening test journal -- NEVER prune), 1124-1133 (context transition protocol)

**Reinforcement count:** 7 references to notebook writing.

**Risk level if forgotten:** SEVERE. The notebook is the primary context-window bridging mechanism. If the agent stops writing notebook entries, context transitions lose the reasoning thread. The "definition of good" journal is the material evidence of evaluation evolution -- without it, there is no way to verify that the evaluation deepened.

**Sufficient reinforcement?** NO. The "1 notebook entry per pass" rule appears in the minimum engagement table (line 496) but is NOT restated in any wave section. Each wave lists exhaustion signals, minimum passes, and rotation schedules -- but none says "remember: 1 notebook entry per pass." The Definition Journal appears at line 133 and line 1097 but is never mentioned in any wave section. The most critical notebook instruction -- the context transition protocol (lines 1120-1141) -- appears only once, at the very end of the file. An agent approaching context limits at hour 3 will need to remember a protocol it read at the START of hour 1, from the last 50 lines of a 1,166-line file.

---

### Rule 10: Minimum Engagement Floors (Passes, Findings, Screenshots, etc.)
**What it says:** Each wave has minimum pass counts (8-18 depending on wave). Additional minimums: 0-finding files need explanation, swap test on 3+ sections/wave, 1 notebook entry/pass, 2 screenshot sessions/wave, 1 adversarial self-question per 4 passes, 2 full HTML re-reads/wave.

**Where it appears:** Lines 489-501 (primary table), individual wave sections state per-wave minimums (509, 537, 638, 722, 759, 789, 844)

**Reinforcement count:** 8 times (once in the primary table, once per wave). But only the pass-count minimum is restated per wave. The OTHER minimums (findings explanation, swap test frequency, notebook entries, screenshot sessions, adversarial questions, HTML re-reads) appear ONLY in the primary table at line 489-500.

**Risk level if forgotten:** MODERATE. Minimum pass counts are well-reinforced per wave. But the supplementary minimums (screenshot frequency, adversarial questioning frequency, HTML re-read frequency) are stated once and never restated. These are guardrails against exactly the kind of drift that occurs over 6-10 hours.

**Sufficient reinforcement?** NO for supplementary minimums, YES for pass counts. The primary minimum engagement table (lines 489-500) lists 7 requirements. Only 1 (pass count) is restated per wave. The other 6 -- especially "2 screenshot sessions per wave" and "1 adversarial self-question per 4 passes" -- are extremely unlikely to be remembered at hour 5.

---

## 2. REINFORCEMENT MECHANISM INVENTORY

### Mechanism A: Wave-Level Restatement
**Description:** Critical concepts are restated at the opening of each wave section.
**Used for:** Build-look-refine cycle (restated 9 times across waves), 5-layer evaluation (customized per wave), pass-level deepening phases.
**Effectiveness:** HIGH. This is the file's strongest reinforcement mechanism. The wave structure creates natural re-read points, and embedding critical rules at wave openings means the agent encounters them when transitioning between phases.
**Limitation:** Only works if the agent re-reads the SKILL.md wave section when entering a new wave. In later context windows, the agent may not re-read the skill file at all -- it reads the notebook, retrospective, and HTML.

### Mechanism B: Bold/Caps Emphasis
**Description:** Critical statements use **bold**, CAPS, or both.
**Used for:** "non-negotiable" declarations (line 299, 1039), "CATASTROPHIC" labels (none actually used), "MOST POWERFUL" markers (line 345), "NEVER prune" (line 1097), CAPS in concept names (STRUCTURAL, INTEGRATION, DEPTH, MASTERY).
**Effectiveness:** MODERATE. Draws attention during the initial read. Has zero effect if the agent does not re-read the file. CAPS is overused -- the file uses CAPS for emphasis so frequently that no individual instance stands out.

### Mechanism C: Explicit Misinterpretation Correction
**Description:** The file anticipates how the agent will misread an instruction and pre-corrects it: "This does NOT mean X. It means Y."
**Used for:** "10+ passes per slice" (lines 278-299: "does NOT mean rotate this file to primacy 10 times"), build-look-refine cycle (line 590: "Not 'read findings, apply findings'"), Wave 5 shift (line 779: "If you are still inventing new components in Wave 5..."), retrospectives (line 900: "This is NOT documentation -- it is a COGNITIVE ACT").
**Effectiveness:** HIGH for the initial read. This is the most cognitively sticky mechanism in the file because it creates a contrast between the wrong interpretation and the right one. The agent remembers the correction better than a plain statement. But like all initial-read mechanisms, it fades without re-exposure.

### Mechanism D: Per-Wave Exhaustion Signals
**Description:** Each wave ends with "Exhaustion signal:" followed by the specific conditions that must be met before advancing.
**Used for:** Every wave (lines 509, 537, 638, 722, 759, 789, 844).
**Effectiveness:** MODERATE-HIGH. These are natural checkpoints -- the agent must evaluate whether it has reached genuine exhaustion before moving to the next wave. However, the exhaustion signals are qualitative ("the agent can annotate every finding as 'applied,' 'irrelevant,' or 'addressed indirectly'"), which means the agent can satisfy them through motivated reasoning.

### Mechanism E: Notebook-Embedded Checkpoints
**Description:** The file instructs the agent to write specific notebook entries that force re-engagement with critical concepts.
**Used for:** Definition Journal (line 133), staleness notebook entry (line 204), dimension-tracking notebook entries (lines 421, 634), context transition state (lines 1124-1133), per-pass triage entries (line 588).
**Effectiveness:** POTENTIALLY HIGH -- but under-deployed. This is the most promising mechanism for cross-context-window reinforcement because notebook entries survive context boundaries. When the agent writes "My current definition of 'good' for this page is: ___" at the start of each wave, it forces re-engagement with evaluation evolution. But few critical rules have corresponding notebook prompts.

### Mechanism F: Concrete Examples and Tables
**Description:** Abstract rules are accompanied by worked examples or tables.
**Used for:** Loss-detection table (lines 349-360), spatial hypothesis examples (lines 329-337), delta profile (lines 438-449), staleness signatures (lines 182-198), content-form coupling grades (lines 1015-1025).
**Effectiveness:** HIGH for comprehension, LOW for long-term retention. Tables and examples are excellent for the initial read but do not persist across context windows unless the agent copies them to its notebook.

### Mechanism G: Anti-Pattern Enumeration
**Description:** A dedicated section listing 11 things the skill explicitly rejects.
**Used for:** Lines 1056-1081. Covers "build a standard vertical skeleton first," "deploy mechanisms," "be creative," fixed pass counts, static evaluation, compression, separation of building/evaluating, handoff between agents, "sample 2-4 mechanisms," "use interesting layouts," premature convergence.
**Effectiveness:** MODERATE. Concentrated at the end of the file (lines 1056-1081), so it is the LAST major content section the agent reads -- benefiting from recency during the initial read. But anti-patterns are negative constraints ("do NOT do X") which are harder to retain than positive instructions ("DO Y"). The agent is more likely to remember what TO do (from the wave sections) than what NOT to do (from the anti-patterns section).

### MISSING Mechanism: Wave Transition "Critical Rules" Box
**Not present.** The file has no mechanism for re-presenting the top rules at wave boundaries. Each wave section opens with its own content but does not include a brief summary of the rules that are most at risk of being forgotten at that wave's depth.

### MISSING Mechanism: Hour-Boundary Reminders
**Not present.** The file has no time-aware reinforcement. An instruction like "At the start of each new context window, re-read the following rules before continuing" would create reinforcement at the exact moments when drift is highest.

### MISSING Mechanism: Notebook Checkpoint Prompts for Rules (Beyond Definition Journal)
**Mostly absent.** The Definition Journal (line 133) is the only notebook prompt that forces re-engagement with a critical rule. There are no notebook prompts for: "Am I still doing the full build-look-refine cycle?" or "When was my last screenshot session?" or "Have I re-read the content source since the last wave?" or "Am I hitting the minimum engagement floors?"

---

## 3. MISSING REINFORCEMENT OPPORTUNITIES

### Rule 1 (Build-Look-Refine Cycle): Sufficiently reinforced
No additional reinforcement needed. This rule is restated at every wave opening. It is the one rule the agent will remember.

### Rule 2 (10+ Full Cycles Per Slice):
**Missing at:** Wave 5 (line 775), Wave 6 (line 809), Wave 7 (line 846), Wave 8 (line 872). These waves specify pass counts (8-12, 15-25, 8-12, 5-10) but never re-anchor what constitutes a "pass" in terms of per-dimension engagement depth.
**Should be reinforced at:** The opening of EVERY wave that specifies a pass count. A single sentence: "Each pass is a full build-look-refine cycle with the active dimension as lens -- not a quick adjustment. See 'What 10+ Passes Per Slice Actually Means.'"
**Also missing at:** The context window transition protocol (lines 1120-1141). When a new context window opens, the agent re-reads the notebook and HTML but is never reminded of the cycle-depth requirement.
**Notebook prompt opportunity:** "At the start of each wave, write in your notebook: 'This wave has N passes minimum. Each pass = full build-look-refine cycle. Dimensions I will actively engage per pass: ___'"

### Rule 3 (Design System Physics):
**Missing at:** Wave 5 (architectural cleanup) and Wave 6 (responsive deepening). These are the waves where the agent is most likely to introduce soul violations through refactoring.
**Should be reinforced at:** Wave 5 passes 7-8 (architecture audit) with a brief reminder: "Verify: border-radius: 0 everywhere. box-shadow: none everywhere. No gradients. Font trinity intact."
**Also missing at:** The accessibility sub-rules. "Skip link, ARIA landmarks, heading hierarchy, color contrast, reduced motion, focus-visible" appears only at lines 825 and 1050. These should be part of Wave 6's Architecture Audit passes (lines 824-825) with a more detailed checklist.

### Rule 4 (Staleness Detection and Recovery):
**Missing at:** Every wave section. The staleness recovery PROTOCOL (stop, intervene, rotate) appears only at lines 199-205. Wave-specific staleness signatures appear at lines 182-198 but are never embedded in the wave sections they describe.
**Should be reinforced at:** Each wave section should include its own staleness signature (moved FROM lines 182-191 TO the wave where it applies). Example: Wave 3 section should include "Wave 3 staleness signature: 'I am copying case study outputs instead of absorbing case study PROCESSES.'" at the wave opening.
**Notebook prompt opportunity:** "After every 4th pass, write: 'Staleness check -- detectors firing: [list]. Recovery action taken: [action]. Dimension rotated to: [dimension].'"

### Rule 5 (Evaluation Must Evolve): Sufficiently reinforced
No additional reinforcement needed. The per-wave 5-layer customizations are effective.

### Rule 6 (Swap Test): Sufficiently reinforced
No additional reinforcement needed. Well-distributed across the file.

### Rule 7 (Loss Detection):
**Missing at:** The context window transition protocol. If the agent enters a new context window, it should re-derive or re-read its loss-detection table.
**Notebook prompt opportunity:** "Include the loss-detection table in your Wave 0 notebook entry. This table persists across context windows and should be referenced at the start of each new wave: 'Does the current page still preserve everything the loss-detection table identified?'"

### Rule 8 (Content Source Re-Reading):
**Missing at:** Wave transitions. The file describes re-reading at Waves 6, 7, and 8, but does not include a standing instruction like "At the start of each wave, re-read the content source file." The content handoff (lines 1099-1109) describes when the source file LOSES primacy but does not describe when it should REGAIN it.
**Should be reinforced at:** Every wave's opening instruction block. A single sentence: "Before starting this wave, re-read the content source file. After N waves of building, new content features will be visible."
**Notebook prompt opportunity:** "At the start of each wave, write: 'Content re-read #N. New content features visible since last re-read: ___'"

### Rule 9 (Notebook Entries):
**Missing at:** Every wave section. The minimum engagement table (line 496) says "1 notebook entry per pass" but no wave section restates this.
**Should be reinforced at:** Each wave's opening. A single sentence: "Remember: 1 notebook entry per pass. Definition of 'good' at wave start and end."
**Also missing:** The context transition protocol (lines 1120-1141) is the single most important notebook instruction and appears only once, at the very end of the file. It should be referenced earlier -- perhaps in the "Context Window Management" heading at line 1084 or in a "critical rules" summary.

### Rule 10 (Minimum Engagement Floors):
**Missing at:** Every wave section (for supplementary minimums). Pass counts are restated per wave but screenshot frequency (2/wave), adversarial questioning (1/4 passes), and HTML re-reads (2/wave) are never restated.
**Should be reinforced at:** A compact "engagement floor" reminder at each wave opening: "Minimums: N passes, 2 screenshot sessions, 1 adversarial question per 4 passes, 2 full HTML re-reads."

---

## 4. OVER-REINFORCED VS UNDER-REINFORCED

### Rules Reinforced 3+ Times

| Rule | Reinforcement Count | All Needed? | Assessment |
|------|---------------------|-------------|------------|
| Build-look-refine cycle | 13+ | Yes -- each wave restatement adds wave-specific framing | CORRECTLY REINFORCED. The gold standard. |
| 5-layer evaluation evolution | 10 (per-wave customization) | Yes -- wave-specific L1-L5 questions are qualitatively different | CORRECTLY REINFORCED. Each restatement adds unique value. |
| Swap test | 13 | Mostly -- some mentions are incidental | SLIGHTLY OVER-REINFORCED. 2-3 mentions are in passing (e.g., line 1064 in anti-patterns is redundant with line 339). But the swap test is simple enough that over-reinforcement costs little. |
| Staleness concept | 12+ | The concept is reinforced; the recovery PROTOCOL is not | MISALLOCATED. The file spends 36 lines (170-206) defining staleness and its detectors, plus mentions in wave L5 questions and anti-patterns. But the actionable PROTOCOL (what to DO when stale) appears once. The reinforcement budget is spent on the diagnostic, not the treatment. |
| Screenshot/looking | 20+ | Many are embedded in cycle definitions | CORRECTLY REINFORCED but indirectly. Most "screenshot" mentions are inside the build-look-refine cycle restatements, not standalone screenshot reminders. |
| Content-derived/content-form | 15+ | Many are philosophical rather than operational | SLIGHTLY OVER-REINFORCED on philosophy, under-reinforced on operation. The file extensively argues WHY spatial form should be content-derived but reinforces the operational HOW (loss detection, swap test) less frequently. |

### Rules Stated Only Once or Twice

| Rule | Reinforcement Count | Risk | Needs More? |
|------|---------------------|------|-------------|
| Staleness recovery PROTOCOL (stop, intervene, rotate) | 1 (lines 199-205) | CATASTROPHIC -- this is the treatment for the #1 failure mode | YES -- URGENTLY |
| Context window transition protocol | 1 (lines 1120-1141) | SEVERE -- this is how accumulated understanding survives context boundaries | YES -- URGENTLY |
| "NEVER prune" deepening test journal | 1 (line 1097) | MODERATE -- pruning the definition journal destroys evaluation evolution evidence | YES |
| Notebook management (200-line cap, wave summaries) | 1 (lines 1095-1098) | MODERATE -- unbounded notebooks consume context window space | PARTIALLY -- the cap could be mentioned once more |
| Accessibility requirements | 2 (lines 825, 1050) | MODERATE -- accessibility failures invalidate the build for real use | YES |
| Loss-detection table inclusion in notebook | 0 | SEVERE -- the spatial skeleton needs to persist across context windows | YES -- this is a missing instruction entirely |
| Definition Journal at wave start/end | 2 (lines 133, 1097) | MODERATE -- the Definition Journal is the core staleness detector | YES -- should appear in each wave's opening |
| Minimum engagement supplementary floors | 1 (lines 489-500) | MODERATE -- screenshot frequency, adversarial questioning frequency | YES |
| Content re-reading at wave boundaries | Scattered, no standing instruction | SEVERE -- the content is the anchor; losing contact with it means building from memory | YES |
| Anti-pattern: "Build a standard vertical skeleton first" | 1 (line 1060) | SEVERE -- this is the "single most destructive instruction" per the file | YES -- should appear at Wave 0 |

### Reinforcement Budget Ratio

The file allocates its reinforcement roughly as follows:

| Category | Approx. Lines | % of Reinforcement Budget |
|----------|---------------|---------------------------|
| Build-look-refine cycle definition | ~65 lines (across 13 restatements) | 23% |
| 5-layer evaluation per wave | ~90 lines (across 9 wave customizations) | 32% |
| Per-wave pass-level deepening | ~60 lines (across 9 wave phase descriptions) | 21% |
| Staleness concept + signatures | ~36 lines (one block) | 13% |
| Rotation/primacy mechanics | ~30 lines (across waves) | 11% |
| **Staleness recovery PROTOCOL** | **~6 lines (one block)** | **2%** |
| **Context window transition** | **~20 lines (one block)** | **0% -- never restated** |
| **Minimum engagement floors** | **~12 lines (one table)** | **0% -- never restated** |

**The diagnosis:** The file spends 76% of its reinforcement budget on the build-look-refine cycle and 5-layer evaluation -- both of which ARE correctly the most important concepts. But it spends 2% on the staleness recovery protocol and 0% on context window transitions, minimum engagement floors, and content re-reading reminders. The budget is right at the TOP but wrong at the BOTTOM. The top 2 rules are golden. Rules 3-10 are under-reinforced.

---

## 5. STRUCTURAL REINFORCEMENT PROPOSAL

The following proposal adds approximately 80-120 lines to the file (7-10% increase) while dramatically improving reinforcement for rules 2-10.

### Proposal A: Wave Preamble Blocks

Add a compact "CRITICAL RULES" box at the opening of each wave section (Waves 2-8). Each box contains 5-8 lines of the rules most at risk of being forgotten at that wave's depth. The box is identical in structure across waves but customized in content.

**Template:**

```
> **CRITICAL RULES (re-read before starting this wave):**
> - Each pass = full build-look-refine cycle (Read -> Build CSS -> Screenshot -> 5-layer Evaluate -> Refine -> Decide). Not quick adjustments.
> - [Wave-specific staleness signature for this wave]
> - Minimums: [N] passes, 2 screenshot sessions, 1 adversarial question per 4 passes, 1 notebook entry per pass.
> - Start this wave by writing: "My current definition of 'good' for this page is: ___"
> - Re-read the content source file before starting.
```

**Example for Wave 6 (line 809):**

```
> **CRITICAL RULES (re-read before starting this wave):**
> - Each pass = full build-look-refine cycle. 15-25 passes means 15-25 FULL CYCLES, not 15-25 tweaks.
> - Wave 6 staleness: "I am confirming the page is good rather than interrogating whether it could be great."
> - Minimums: 15 passes, 2 screenshot sessions, 1 adversarial question per 4 passes, 1 notebook entry per pass.
> - Start this wave by writing: "My current definition of 'good' for this page is: ___"
> - Re-read the content source file. After 70+ passes, new content features will be visible.
> - Accessibility check: skip link, ARIA, heading hierarchy, contrast, reduced motion, focus-visible.
```

**Cost:** ~8 lines per wave x 7 waves = ~56 lines added.
**Value:** Puts the most at-risk rules at the natural re-read point (wave transitions). Creates a checklist-style reminder that is fast to scan. Wave-specific staleness signatures are moved to where they are needed.

### Proposal B: Notebook Checkpoint Prompts

Add 3 new mandatory notebook entries that force re-engagement with at-risk rules:

1. **Per-wave start:** "Write in your notebook: 'Wave [N] start. Definition of good: ___. Content re-read #[N]: new features visible: ___. Loss-detection table still valid: [yes/no, with notes].'"

2. **Every 4th pass (staleness checkpoint):** "Write in your notebook: 'Pass [M] staleness checkpoint. Detectors firing: [list 4 detectors, mark each TRUE/FALSE]. If 2+ TRUE: STOP. Recovery action: ___. Next dimension: ___.'"

3. **Context window transition (already exists at lines 1120-1141 but add a forward reference):** At the END of the "Minimum Engagement Per Wave" section (after line 501), add: "CONTEXT WINDOW NOTE: When approaching context limits, execute the Context Transition Protocol (see Context Window Management). The notebook transition state is the MOST IMPORTANT thing you write. If you write nothing else, write the transition state."

**Cost:** ~15 lines added.
**Value:** Transforms passive rules into active notebook prompts. The staleness checkpoint at every 4th pass creates a recurring rhythm of self-interrogation. The loss-detection table persistence ensures the spatial skeleton survives context boundaries.

### Proposal C: Context Window Preamble

Add a compact "NEW CONTEXT WINDOW PREAMBLE" section immediately after the "Context Window Management" heading (line 1084), designed to be the first thing an agent reads when entering a new context window. The agent's notebook transition state should instruct it to re-read this section.

```
### New Context Window Preamble (Re-Read This at Every Context Boundary)

YOU ARE IN A MULTI-WINDOW BUILD. Critical reminders:

1. **Each pass = full build-look-refine cycle.** Not quick tweaks. Read -> Build CSS -> Screenshot -> 5-layer Evaluate -> Refine -> Decide.
2. **Staleness is the default state.** Prove you are not stale. 4 detectors: (a) has your definition of "good" changed? (b) name ONE new thing you see. (c) same dimension 3 passes in a row? (d) fewer than 5 CSS lines changed -- is the page done or are you habituated?
3. **When 2+ staleness detectors fire:** STOP. Re-read content, screenshot at new viewport, or write "what would I build differently?" Then rotate dimension.
4. **Design system physics:** border-radius: 0, box-shadow: none, no gradients, font trinity, 940-960px container, 4px spacing, border hierarchy 4/3/1.
5. **Take screenshots.** Minimum 2 sessions per wave. Verify file sizes (real = 30k+, blank = ~5k).
6. **Write 1 notebook entry per pass.** Write "definition of good" at wave start and end. NEVER prune definition journal entries.
7. **Re-read the content source file** at each wave start. New features become visible with accumulated building context.
```

**Cost:** ~20 lines added.
**Value:** Creates a single concentrated reinforcement point designed for cross-context-window survival. The notebook transition state (which the agent writes before context boundaries) can include "Re-read the New Context Window Preamble before continuing." This creates a self-referential reinforcement loop: the notebook tells the agent to re-read the preamble, and the preamble reminds the agent of all at-risk rules.

### Proposal D: Staleness Protocol Elevation

Move the staleness recovery protocol from its current position (buried at lines 199-205 within a long subsection) to a more prominent structural position. Options:

1. **Repeat the 3-step protocol at lines 199-205 AND at the end of the staleness section (after line 206) in a highlighted box.** This doubles the reinforcement within the same section.

2. **Add a 2-line protocol reminder to each wave's preamble block** (see Proposal A). This distributes the protocol to every wave.

3. **Add a notebook prompt** (see Proposal B) that forces the agent to write the protocol steps at every 4th pass. This makes the protocol self-reinforcing through the notebook.

**Recommended:** All three. The staleness recovery protocol is the single most under-reinforced rule relative to its importance. It deserves 3x the current reinforcement.

### Summary: Total Cost vs. Value

| Proposal | Lines Added | Rules Reinforced |
|----------|-------------|-----------------|
| A: Wave Preamble Blocks | ~56 | Rules 2, 3, 4, 8, 9, 10 |
| B: Notebook Checkpoint Prompts | ~15 | Rules 4, 7, 9 |
| C: Context Window Preamble | ~20 | Rules 1, 2, 3, 4, 6, 8, 9 |
| D: Staleness Protocol Elevation | ~10 | Rule 4 |
| **Total** | **~101** | **8 of 10 rules** |

File grows from 1,166 to ~1,267 lines (8.7% increase). The two rules NOT needing additional reinforcement (Rules 1 and 5) are already the file's gold standard.

### What NOT To Do

1. **Do not add a "summary of all rules" section at the top.** An upfront summary would be read once and then the agent would treat it as "the rules" and skip the nuanced treatment in the body. The nuanced treatment IS the value.

2. **Do not add inline "REMINDER:" callouts throughout the text.** The file already uses bold/caps extensively. More inline emphasis creates diminishing returns -- if everything is emphasized, nothing is.

3. **Do not double the file length.** The 1,166-line length is already at the upper bound of what an agent can absorb in a single read. Adding 100 lines of concentrated reinforcement is acceptable. Adding 500 lines of distributed reinforcement would dilute the signal.

4. **Do not make the notebook prompts too verbose.** The notebook entries should be 2-3 lines each. If they become 10-line essays, the agent will skip them or fill them perfunctorily. Short, structured prompts with blanks to fill ("Definition of good: ___") are more effective than essay prompts.

---

## CONCLUSION

The file has two rules reinforced to gold-standard level (build-look-refine cycle, 5-layer evaluation evolution) and eight rules that are under-reinforced relative to their importance. The most dangerous gap is the staleness recovery protocol -- the actionable treatment for the file's #1 identified failure mode -- which appears exactly once in 1,166 lines.

The fundamental structural problem is that the file is designed to be read once and executed for 6-10 hours across 8-12 context windows. The file's reinforcement mechanisms (wave-level restatement, bold emphasis, misinterpretation correction) are all optimized for the INITIAL READ. The file has almost no mechanisms for cross-context-window reinforcement -- the notebook is the only bridge, and the notebook prompts are too few and too scattered to carry the critical rules forward.

The proposed solution (wave preamble blocks + notebook checkpoints + context window preamble + staleness protocol elevation) costs ~101 lines and creates a three-layer reinforcement architecture:

1. **Layer 1: Wave preambles** -- reinforcement at natural transition points within a single context window
2. **Layer 2: Notebook checkpoints** -- reinforcement that WRITES rules into the artifact that survives context boundaries
3. **Layer 3: Context window preamble** -- a concentrated re-read target for new context windows

Together, these three layers ensure that the top 10 rules are not just read at hour 1 but actively re-engaged at hours 2, 3, 4, 5, 6, 7, 8, 9, and 10.
