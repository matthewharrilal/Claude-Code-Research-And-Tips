# Audit: Does SKILL.md Communicate 10+ Full BUILD-LOOK-REFINE-ENRICH Cycles Per Slice?

**Date:** 2026-03-03
**Auditor:** Opus 4.6
**File:** `~/.claude/skills/falls-in-love/SKILL.md` (1058 lines)
**User's requirement:** "The tempos aren't just about rotating for primacy. It's also just around that building, refining, reiterating, and enriching cycle, constantly doing that for ten plus passes. Make sure that is known."

---

## Executive Summary

**The skill has a CRITICAL CONTRADICTION.** The dedicated section "What 10+ Passes Per Slice Actually Means" (lines 233-252) states the requirement clearly and forcefully. But two paragraphs in Wave 2 (lines 548 and 550) then WALK IT BACK, redefining "10+ passes per slice" as "2-3 primacy turns PLUS 7-8 passive lens applications." This is the exact misunderstanding the user wants to prevent. An agent reading the Wave 2 section would conclude that 3-4 deep engagements per file is the actual requirement, and "10+ passes per slice" is just marketing language for "keep the dimension in mind."

Additionally, Waves 4-8 never invoke the cycle explicitly. They state "Each pass is a full cycle" but never reinforce what that cycle IS. By Wave 6, an agent deep in context could have forgotten the 6-step sequence entirely.

**Severity: HIGH.** The contradiction in Wave 2 is the single most dangerous defect in the skill for this specific requirement.

---

## Wave-by-Wave Audit

### Wave 0: Content Immersion (lines 435-457)

**1. How many times is the full cycle explicitly invoked?**
- 1 explicit invocation at line 443: "**Each pass is a full cycle:** Read content -> build HTML/CSS -> screenshot and scroll -> evaluate with 5 layers -> refine -> decide what next. This is true for EVERY wave. The cycle is the fundamental unit of engagement."
- The 6-step sequence is spelled out in full.

**2. Could an agent misunderstand "10+ passes" as file rotations?**
- No. Wave 0 has no research files to rotate. There is only the content file. The cycle is unambiguous here because there is only one input and 8-12 passes with it.

**3. Any contradicting language?**
- No.

**Assessment: ADEQUATE.** The cycle is stated once clearly. Could benefit from one more reinforcement within the pass-level deepening section (lines 452-456), but no contradiction.

---

### Wave 1: Design System Soul (lines 459-483)

**1. How many times is the full cycle explicitly invoked?**
- 1 explicit invocation at line 469: "**Each pass is a full cycle:** Read design system file -> build CSS changes -> screenshot and scroll -> evaluate -> refine -> decide what next. Not 'check constraints, fix, next.' Build-look-refine at every pass."
- The anti-pattern "Not 'check constraints, fix, next'" is helpful.

**2. Could an agent misunderstand?**
- Low risk. Wave 1 has a rotation (identity.md -> tokens.css -> components.css -> vocabulary.md -> ...) but 10-14 passes with 4 files means each file gets multiple full cycles naturally. The rotation is clearly a reading-order device, not a pass-count device.

**3. Any contradicting language?**
- No.

**Assessment: ADEQUATE.** Same as Wave 0: stated once clearly, no contradiction.

---

### Wave 2: Research R1-R5 (lines 485-553) -- THE PROBLEM WAVE

**1. How many times is the full cycle explicitly invoked?**
- Line 520: "**Each pass is a full build-look-refine cycle.** Not 'read findings, apply findings.' Each pass: read the research -> build CSS changes -> screenshot and scroll -> evaluate with 5 layers -> refine -> note what you learned."
- Lines 522-526: "**How the cycle evolves across 10+ passes:**" with 4 phases (STRUCTURAL, INTEGRATION, DEPTH, MASTERY), each describing the cycle at that depth.
- Lines 535-539: Pass-level deepening within Wave 2, describing evaluation evolution across 10+ passes.
- Lines 541-546: Per-file phase tracking describing the 4-phase labels per file.
- Lines 643-648: Wave 3 section but references "same as Wave 2."

**Total cycle invocations: 3 strong.** The cycle is well-described in the first half of Wave 2.

**2. Could an agent misunderstand "10+ passes" as file rotations?**

**YES. This is where the contradiction lives.**

**Line 548** (the "What '10+ passes per slice' means" paragraph inside Wave 2):
> Each research file gets 2-3 primacy turns across the wave. But the file's DIMENSION permeates ALL passes. When R3 is at primacy for passes 3 and 6, density thinking doesn't stop at pass 7 -- density is always a dimension being evaluated and applied. "10+ meaningful engagements with each slice" means: 2-3 primacy turns where you read the file deeply, PLUS 7-8 passes where you actively apply that file's lens to your building.

This redefines "10+ passes per slice" as "2-3 deep reads + 7-8 lens applications." That is NOT what the user means. The user means 10+ FULL BUILD-LOOK-REFINE-ENRICH CYCLES with each slice. Not "read it 3 times deeply and then keep it in mind for 7 more passes." The cycle is the unit, not the primacy turn.

**Line 550** (the "Per-file engagement depth" paragraph) makes it worse:
> The rotation schedule gives each file 2 explicit primacy turns across 12 passes. With diagnostic overrides and depth passes, most files will reach 3-4 primacy turns. **This is not 10 passes per file -- it is 3-4 passes of DEEP, structured engagement per file**, where each engagement is qualitatively different (STRUCTURAL at first primacy, INTEGRATION at second, diagnostic-driven at third). The quality of engagement matters more than the count...

This EXPLICITLY says "This is not 10 passes per file." An agent reading this sentence will conclude that "10+ passes per slice" from line 235 was aspirational language, not an operational requirement. The user's instruction is directly contradicted.

**3. Any contradicting language?**

YES -- lines 548 and 550 are the contradictions. They reframe "10+ passes per slice" from "10+ full cycles" to "3-4 primacy turns + passive lens thinking." This is exactly the misunderstanding the user wants to prevent.

**Assessment: FAILING.** The first half of Wave 2 (lines 520-539) is strong. Lines 548 and 550 then undermine it catastrophically. An agent that reads the full Wave 2 section will walk away thinking "10+ passes per slice" means "3-4 deep reads plus keeping the dimension in mind." Not "10+ full build-look-refine cycles."

---

### Wave 3: Case Studies (lines 556-649)

**1. How many times is the full cycle explicitly invoked?**
- Line 641: "**Each pass is a full build-look-refine cycle** (same as Wave 2 -- this is always true)."
- Lines 643-648: "**How the cycle evolves across 10+ passes per dimension:**" with 5 phases (EXTRACTION, TRANSLATION, CONTENT-DEEPENING, COMPOUND VISION, INTERNALIZATION).
- Line 625: "**What '10+ passes per dimension' means for case studies:**" -- redefines as "3-4 primacy turns + permeating thinking."

**2. Could an agent misunderstand?**

**YES.** Line 625 repeats the same pattern as Wave 2 line 548:
> Each dimension (DD, OD, CD) gets 3-4 primacy turns across the wave. But that dimension's THINKING permeates all subsequent passes.

This is the "rotation + passive lens" framing, not the "10+ full cycles" framing. However, the contradiction is softer here because line 643 describes "10+ passes per dimension" with full cycle evolution (EXTRACTION through INTERNALIZATION across 13+ passes), which implies full cycles at each pass. The tension exists but is less acute than Wave 2.

**3. Any contradicting language?**

Partial. Line 625 follows the same "3-4 primacy + passive thinking = 10+" formula as Wave 2. But line 643's cycle evolution description (with explicit CSS line counts per phase) implies full cycles at every pass. The two coexist in tension.

**Assessment: MIXED.** The cycle evolution section (643-648) is strong and implicitly communicates full cycles per pass. The "10+ passes per dimension" definition (625) follows Wave 2's weaker framing. An agent would be confused about whether "10+ passes" means 10+ full cycles or 3-4 deep reads + lens thinking.

---

### Wave 4: Synthesis + Provenance (lines 652-675)

**1. How many times is the full cycle explicitly invoked?**
- Line 660: "**Each pass is a full cycle:** Read synthesis/provenance -> build conflict-resolution CSS changes -> screenshot and scroll -> evaluate at meta-level -> refine -> decide what next. The cycle applies here too -- not just 'resolve conflicts,' but build-look-refine the resolutions."

**Total: 1.** The cycle is stated once.

**2. Could an agent misunderstand?**
- Moderate risk. The cycle is stated but there is no reinforcement of "10+ full cycles." Wave 4 has 8-12 passes minimum. The cycle is stated as applying to each pass. An agent that remembered the "10+ per slice" definition from earlier could apply it. An agent that forgot it (or internalized Wave 2's watered-down definition at line 548) would not.

**3. Any contradicting language?**
- No explicit contradiction. But the absence of cycle reinforcement is a gap.

**Assessment: THIN.** One invocation, no contradiction, but no reinforcement of the "every pass = full cycle" principle. The cycle starts to fade here.

---

### Wave 5: Combination Mastery (lines 678-703)

**1. How many times is the full cycle explicitly invoked?**
- Line 688: "**Each pass is a full cycle:** Read reference -> build compound/subtractive CSS changes -> screenshot and scroll -> evaluate at system level -> refine -> decide what next."

**Total: 1.** Identical structure to Wave 4.

**2. Could an agent misunderstand?**
- Same moderate risk as Wave 4. The cycle is stated but not reinforced.

**3. Any contradicting language?**
- No.

**Assessment: THIN.** Same as Wave 4.

---

### Wave 6: Integration (lines 710-743)

**1. How many times is the full cycle explicitly invoked?**
- **ZERO explicit "each pass is a full cycle" statements.** Wave 6 describes 5 pass groups (Taste Audit, Surgical Refinement, Responsive Deepening, Architecture Audit, Deep Re-evaluation) with their own structures. Screenshots are mentioned in the Taste Audit (line 715) and implicitly in other groups, but the 6-step cycle is never explicitly invoked.

**2. Could an agent misunderstand?**
- YES. Wave 6 describes pass groups that sound like task-based work (audit, refine, deepen) rather than the build-look-refine-enrich cycle. An agent could interpret "Passes 1-5: Taste Audit -- Full-page screenshots at 1440px, 1024px, 768px" as a single audit session, not as 5 individual full cycles.

**3. Any contradicting language?**
- Not contradicting, but the ABSENCE of the cycle invocation allows the agent to slip into task-mode thinking. The pass groups read more like a checklist of activities than a cycle repeated 15-25 times.

**Assessment: GAP.** The cycle is not invoked. Wave 6 is the longest wave (15-25 passes) and has zero explicit cycle reinforcement. This is where an agent is most likely to drift into "do the checklist" mode.

---

### Wave 7: Self-Audit Cycle (lines 745-767)

**1. How many times is the full cycle explicitly invoked?**
- **ZERO.** Wave 7 describes individual passes (Pass 1, Pass 2, Pass 3-4, etc.) but never says "each pass is a full cycle." The passes describe activities (screenshots, adversarial pass, criteria, comprehensive pass, content-coupling pass, surgery) but not the build-look-refine cycle.

**2. Could an agent misunderstand?**
- YES. The named passes (adversarial, comprehensive, content-coupling, surgery) read as sequential tasks, not as iterative cycles. An agent could do "Pass 1: take screenshots. Pass 2: adversarial critique. Done." without ever building, looking, refining, and enriching within each pass.

**3. Any contradicting language?**
- The structure itself (numbered passes with specific activities) implicitly contradicts the cycle model by suggesting each pass has ONE activity rather than a full build-look-refine loop.

**Assessment: GAP.** Same as Wave 6 but more acute because the named passes suggest single activities.

---

### Wave 8: Final Enrichment (lines 769-792)

**1. How many times is the full cycle explicitly invoked?**
- Line 773: "**Each pass is still a full cycle** -- even surgery. Make a change -> screenshot -> evaluate whether it improved -> refine -> decide what's next. Do not batch fixes."

**Total: 1.** The cycle returns after being absent in Waves 6 and 7.

**2. Could an agent misunderstand?**
- Low risk for Wave 8 itself. The explicit "do not batch fixes" reinforces per-pass cycling.

**3. Any contradicting language?**
- No.

**Assessment: ADEQUATE.** The cycle reappears. But its absence in Waves 6 and 7 means an agent may have already drifted into task-mode before reaching Wave 8.

---

## Audit of the "What 10+ Passes Per Slice Actually Means" Section (lines 233-252)

**Is it clear enough?**

YES -- in isolation, this section is excellent. It states the requirement three ways:
1. "It does NOT mean 'rotate this file to primacy 10 times.'" (negation)
2. "It means: do the full build -> look -> refine -> enrich cycle 10+ times with each research slice as the active lens." (positive definition)
3. "One pass = one full cycle" with the 6-step sequence spelled out. (operational definition)

**Would a fresh agent GET IT?**

YES -- if the agent reads ONLY this section. The problem is that this section lives at line 233 and is overridden by the contradicting language at lines 548 and 550 (300+ lines later). The Wave 2 specifics trump the general principle because they are more operationally detailed and more recent in the agent's context window.

---

## Critical Contradiction: Lines 548 and 550

This is the single most important finding. These two paragraphs undo the work of lines 233-252.

### Line 548 -- The Redefinition

Current text:
> **What "10+ passes per slice" means:** Each research file gets 2-3 primacy turns across the wave. But the file's DIMENSION permeates ALL passes. When R3 is at primacy for passes 3 and 6, density thinking doesn't stop at pass 7 -- density is always a dimension being evaluated and applied. "10+ meaningful engagements with each slice" means: 2-3 primacy turns where you read the file deeply, PLUS 7-8 passes where you actively apply that file's lens to your building.

**Problem:** This redefines "10+ passes per slice" from "10+ full cycles" to "2-3 deep reads + 7-8 lens applications." It introduces the phrase "meaningful engagements" as a substitute for "full cycles," which is a weaker concept. Keeping a file's dimension in mind while building from a DIFFERENT file at primacy is NOT the same as doing a full build-look-refine cycle with that file as the active lens.

### Line 550 -- The Explicit Negation

Current text:
> **Per-file engagement depth:** The rotation schedule gives each file 2 explicit primacy turns across 12 passes. With diagnostic overrides and depth passes, most files will reach 3-4 primacy turns. **This is not 10 passes per file -- it is 3-4 passes of DEEP, structured engagement per file**, where each engagement is qualitatively different... The quality of engagement matters more than the count...

**Problem:** The bolded sentence "This is not 10 passes per file" explicitly negates the "10+ passes per slice" requirement from line 235. An agent will read this and conclude the earlier section was aspirational. The "quality over count" framing provides a rationalization for doing fewer cycles.

---

## Gaps in Later Waves

### Wave 2 Pass Descriptions (lines 522-526)
The 4-phase cycle evolution (STRUCTURAL through MASTERY) is strong -- it describes how the cycle itself changes across 10+ passes. But it describes the cycle at the WAVE level, not per-file. An agent could read "How the cycle evolves across 10+ passes" as "10+ passes total for the wave" rather than "10+ passes per slice."

### Wave 3 Pass Descriptions (lines 643-648)
Same strength and same ambiguity. "How the cycle evolves across 10+ passes per dimension" is better because it says "per dimension," but the subsequent descriptions (EXTRACTION through INTERNALIZATION at 13+ passes) describe a progression that could be read as the wave's total progression, not per-dimension progression.

### Waves 6 and 7 -- Missing Cycle Invocation
These waves (which account for 23-37 passes, roughly 20-30% of the total build) never say "each pass is a full cycle." This is a structural gap. An agent entering Wave 6 after an extended build may have forgotten the cycle entirely if it lost context from the early sections.

---

## Specific Remediations

### Remediation 1: CRITICAL -- Rewrite lines 548-550 to align with the 10+ full cycles requirement

**DELETE** the current text at lines 548-550 and **REPLACE** with:

```markdown
**What "10+ passes per slice" means in practice:** The wave has 12-18 passes total. Each research file gets 2-3 turns at primacy position (read first, highest attention). But "10+ passes per slice" does NOT mean "2-3 primacy turns plus keeping the dimension in mind." It means: the full build -> look -> refine -> enrich cycle, repeated with each file's dimension as an ACTIVE lens, 10+ times. When R3 is not at primacy, the agent is still ACTIVELY applying density thinking at every pass -- not passively "keeping it in mind" but making density-informed CSS changes, screenshotting to check density rhythm, evaluating density at multiple scales, and refining density decisions. Every pass is a full cycle for EVERY active dimension, not just the primacy file. The primacy file gets the deepest read; all other files' dimensions get active cycle engagement.

Track this in your notebook: for each pass, note which dimensions you actively built-from, looked-at, and refined -- not just which file was at primacy. If any dimension goes 3+ passes without an ACTIVE build-look-refine cycle (not just "I thought about it"), that dimension needs focused attention. "10+ meaningful engagements" means 10+ passes where you physically changed CSS, took a screenshot, and evaluated through that dimension's lens.

**Per-file engagement depth:** The rotation schedule gives each file 2 explicit primacy turns. With diagnostic overrides and depth passes, most files reach 3-4 primacy turns. But the cycle count per file is NOT limited to primacy turns. The agent does the full build-look-refine cycle with each file's dimension at EVERY pass of the wave -- the primacy file gets the deepest engagement, but non-primacy dimensions still get active cycles, not passive attention. The quality of each cycle matters, AND the count matters. A single STRUCTURAL primacy pass that reads 80% of R4 and applies 5-8 findings is valuable -- but it is ONE cycle of engagement, and R4 needs 9 more. If the triage notebook shows any file with fewer than 2 primacy turns by pass 10, that file gets the next 2 primacy slots regardless of the default schedule.
```

### Remediation 2: CRITICAL -- Rewrite line 625 (Wave 3) to match

**REPLACE** line 625's current text with:

```markdown
**What "10+ passes per dimension" means for case studies:** Each dimension (DD, OD, CD) gets 3-4 primacy turns across the wave. But "10+ passes" means 10+ FULL BUILD-LOOK-REFINE CYCLES per dimension, not 3-4 primacy turns plus passive awareness. After absorbing DD-006's fractal density in passes 2-3, density is not just "in mind" -- it is ACTIVELY built-from, looked-at, evaluated, and refined at every subsequent pass. Track in your notebook: for each pass, note which dimensions received an active build-look-refine cycle (CSS changed, screenshot taken, evaluation made through that lens). If any dimension goes 3+ passes without an active cycle, give its case study primacy next.
```

### Remediation 3: HIGH -- Add cycle invocation to Wave 6

**INSERT** after line 712 ("No new research. The agent works ONLY with what it already knows. This is where internalized understanding produces the deepest work."):

```markdown
**Every pass in Wave 6 is still a full build-look-refine cycle.** The cycle does not stop because research absorption is complete. Each pass: identify a dimension to deepen -> build CSS changes -> screenshot and scroll -> evaluate with full 5-layer metacognition -> refine -> decide what next. The fact that no new research is being read does not mean the cycle shortens. The cycle is the fundamental unit. 15-25 passes means 15-25 full cycles.
```

### Remediation 4: HIGH -- Add cycle invocation to Wave 7

**INSERT** after line 747 ("The agent evaluates its own work as if encountering it for the first time."):

```markdown
**Every pass in Wave 7 is still a full build-look-refine cycle.** The audit IS the cycle -- not a separate activity. Pass 1 is not "take screenshots." Pass 1 is: take screenshots -> evaluate what you see -> build changes based on the evaluation -> screenshot again -> refine -> decide what next. The named activities below (adversarial, criteria, comprehensive, content-coupling, surgery) describe the EVALUATION LENS for each pass's cycle, not the entire pass.
```

### Remediation 5: MEDIUM -- Reinforce in Wave 4

**INSERT** after line 660 (the "Each pass is a full cycle" statement), to prevent the fade:

```markdown
The cycle has been the fundamental unit since Wave 0 and remains so here. 8-12 passes means 8-12 full build-look-refine cycles with synthesis documents as the active lens. Not 8 conflict-resolution tasks.
```

### Remediation 6: MEDIUM -- Reinforce in Wave 5

**INSERT** after line 688 (the "Each pass is a full cycle" statement):

```markdown
Even subtractive passes are full cycles. Removing dead code is not a task -- it is: identify dead code -> remove it -> screenshot -> evaluate whether the page's spatial argument is clearer without it -> refine -> decide what next. The cycle applies to removal as much as to addition. 8-12 passes means 8-12 full cycles.
```

### Remediation 7: LOW -- Strengthen the dedicated section at lines 233-252

The section is good but could add one more sentence to preempt the contradiction that currently follows in Wave 2. **INSERT** after line 252 ("Primacy rotation is a secondary mechanism..."):

```markdown
**This definition is non-negotiable and applies to every wave.** Any later section that describes "primacy turns" or "engagement depth" per file is describing the READING ORDER within the cycle, not reducing the cycle count. If a wave section seems to suggest fewer than 10 full cycles per slice, re-read THIS section. The cycle count is the requirement. The rotation schedule is a mechanism within it.
```

---

## Summary Table

| Wave | Cycle Invocations | Could Agent Misread? | Contradiction? | Remediation |
|------|-------------------|---------------------|----------------|-------------|
| 0 | 1 (strong) | No | No | None needed |
| 1 | 1 (strong) | Low | No | None needed |
| 2 | 3 (strong) then CONTRADICTED | **YES -- lines 548, 550** | **YES -- CRITICAL** | Rewrite 548-550 (Rem 1) |
| 3 | 2 (mixed) | **YES -- line 625** | Partial | Rewrite 625 (Rem 2) |
| 4 | 1 (thin) | Moderate | No | Add reinforcement (Rem 5) |
| 5 | 1 (thin) | Moderate | No | Add reinforcement (Rem 6) |
| 6 | **0** | **YES** | By omission | Add invocation (Rem 3) |
| 7 | **0** | **YES** | By structure | Add invocation (Rem 4) |
| 8 | 1 (adequate) | Low | No | None needed |

**Priority order for fixes:**
1. Remediation 1 (lines 548-550) -- this is the one that an agent will use to override the general principle
2. Remediation 2 (line 625) -- same pattern in Wave 3
3. Remediation 3 (Wave 6 gap) -- longest wave with zero cycle invocation
4. Remediation 4 (Wave 7 gap) -- named passes suggest single activities
5. Remediation 5 (Wave 4 reinforcement)
6. Remediation 6 (Wave 5 reinforcement)
7. Remediation 7 (preemptive anchor in the dedicated section)

---

## The Core Problem in One Sentence

The skill defines "10+ passes per slice" perfectly at line 235, then redefines it at line 550 as "3-4 deep reads, not 10 passes per file" -- and an agent will believe the operational detail over the general principle every time.
