# /falls-in-love SKILL.md Audit: Stale Information and Missed Nuances

**Auditor:** Opus agent (stale-info + nuance focus)
**Date:** 2026-03-03
**Scope:** Full 1,058-line SKILL.md audited against actual files on disk and 11 research files
**Methodology:** Every file path verified via bash. Every line count verified. Every finding count verified. Research files read for missed nuances.

---

## SECTION 1: STALE INFORMATION

### S-1. `mechanism-catalog.md` DOES NOT EXIST at referenced path [BLOCKING]

**SKILL.md references (lines 558, 617, 627, 680, 686):** `mechanism-catalog.md` is referenced 5 times as a file the agent should read in Waves 3 and 5.

**Actual state:** The file `design-system/compositional-core/grammar/mechanism-catalog.md` does NOT exist. It has been superseded and moved to `design-system/compositional-core/_superseded/mechanism-catalog.md` (751 lines). The current active file is `design-system/compositional-core/grammar/mechanisms.md` (88 lines).

**Impact:** An agent following the skill would fail to find mechanism-catalog.md. The skill references a dead path.

**Fix:** Replace all references to `mechanism-catalog.md` with `mechanisms.md`. The line counts and descriptions should also change -- `mechanisms.md` is 88 lines (20 mechanisms across 5 categories), not the 751-line superseded catalog.

---

### S-2. "~26,000 lines" total research claim is OVERSTATED [MODERATE]

**SKILL.md line 195:** "Total available research: ~26,000 lines. The agent reads ALL of it, wave by wave."

**Actual totals from the files listed in the Input section (lines 183-194):**
- Soul files (identity.md + vocabulary.md + tokens.css + components.css): 1,045 lines
- Research R1-R5 + RESEARCH-SYNTHESIS: 4,104 lines (this number is correct)
- Case studies (9 textual + 3 visual + ANTI-PRESCRIPTION-TEMPLATE + README): 5,120 lines (this number is correct)
- Grammar (mechanisms.md + grammar.md): 237 lines
- Guidelines (semantic-rules.md): 529 lines

**Total of files actually listed:** ~11,035 lines

The 26,000 figure comes from the _extreme-depth.md research document which includes validated explorations (28,975 lines) and other material NOT listed in the SKILL.md's Input section. The SKILL.md's own itemized list totals ~11,000, not 26,000.

The SKILL.md lists provenance documents as "(optional depth)" which could account for some of the gap, but even so, the 26,000 claim is misleading given what the Input section actually enumerates.

**Fix:** Either (a) change "~26,000" to "~11,000" to match the enumerated files, or (b) add the additional ~15,000 lines of material (validated explorations, provenance, guidelines, components.md, etc.) to the Input section so the enumeration matches the total.

---

### S-3. R4 finding description says "57% of the corpus" -- ACCURATE but potentially confusing [LOW]

**SKILL.md line 495:** "This is the LARGEST file -- 57% of the corpus."

**Actual:** R4 has 192 of 337 findings = 56.97%. This is accurate.

However, R4 is 990 lines of a 4,104-line research set = 24.1% by line count. The "57%" refers to finding count, not line count. This is correct but an agent might interpret "57% of the corpus" as 57% of the total line count.

**Fix:** Clarify: "57% of the research findings" rather than "57% of the corpus."

---

### S-4. Per-file line count claims in the Input section [VERIFIED ACCURATE]

All line count claims verified:
- identity.md: 87 lines -- CORRECT
- vocabulary.md: 55 lines -- CORRECT
- tokens.css: 124 lines -- CORRECT
- components.css: 779 lines -- CORRECT
- R1-R5 + SYNTHESIS: 4,104 lines total -- CORRECT
  - R1: 584 lines, 28 findings -- CORRECT
  - R2: 810 lines, 27 findings -- CORRECT
  - R3: 553 lines, 51 findings -- CORRECT
  - R4: 990 lines, 192 findings -- CORRECT
  - R5: 784 lines, 39 findings -- CORRECT
  - SYNTHESIS: 383 lines -- CORRECT
- Case studies total: 5,120 lines -- CORRECT (14 files sum exactly)

---

### S-5. Per-research-file finding counts [VERIFIED ACCURATE]

**SKILL.md line 489-496:** R1=28, R2=27, R3=51, R4=192, R5=39, total=337

All confirmed correct by checking the inline threading headers of each research file and the CLAUDE.md in the research directory.

---

### S-6. Invocation section describes spawning an Opus agent -- possibly stale architecture [LOW]

**SKILL.md line 50:** "Spawn a single Opus agent with `subagent_type: 'general-purpose'`, `model: 'opus'`."

This assumes a specific agent-spawning API that may not exist in all Claude Code environments. The skill is a "framework skill" (per _format-analysis.md) where the executing Claude IS the builder. The invocation section describes an orchestrator spawning a subagent, but the rest of the skill assumes the reader IS the builder. These two framings are potentially inconsistent.

The skill works whether the human invokes it directly (Claude reads the skill and IS the builder) or an orchestrator spawns a subagent. But the Invocation section's agent-spawning syntax (`subagent_type`, `model: "opus"`) may reference a specific infrastructure that doesn't exist in all contexts.

**Fix:** Consider adding a note that when invoked directly via `/falls-in-love`, the invoking Claude instance IS the builder -- no orchestrator spawning is needed.

---

### S-7. Context Window Management estimates [REALISTIC but high-variance]

**SKILL.md line 980:** "At ~200K tokens per context window and ~10K consumed per pass, a single window holds ~15-20 passes."

This is a reasonable estimate but highly variable. Key factors:
- The content markdown itself might be 5K-20K tokens
- Each research file read adds 2K-10K tokens
- Screenshots consume tokens too (image tokens)
- The HTML file grows over time and is re-read each pass

At early waves, the HTML is small and research files are read fully -- passes consume more than 10K tokens. At later waves, the agent reads fewer research files but the HTML is large. The 10K average is plausible but the skill should note that early passes (Wave 2 with full R4 read) will consume significantly more than later passes.

**Fix:** Add a note that token consumption per pass varies significantly -- Wave 2 passes reading R4 (990 lines) will consume 2-3x what a Wave 6 refinement pass consumes.

---

### S-8. Pipeline comparison table claims [PARTIALLY STALE]

**SKILL.md lines 1042-1051:**

| Claim | Status |
|-------|--------|
| Pipeline: 17-34 agents | This was accurate for /research-compose. The current /compose skill uses fewer. |
| Pipeline: ~$60 | Varies. The v5 run was $28.79. /compose may differ. |
| Pipeline: 0 INEVITABLE coupling | This was the finding from pre-/compose pipeline builds. May not reflect current /compose output. |
| Pipeline: 0 spatial inventions | Same caveat. |
| Pipeline: 1-2 DOM skeletons | Same caveat. |

**Fix:** Either label the comparison as "vs. /research-compose pipeline (pre-2026-03)" or update with current /compose data.

---

### S-9. No reference to /compose skill [MODERATE]

The SKILL.md was written before /compose became the primary build pathway. The skill references "the pipeline" and "/build-page" as comparisons, but the current primary build tool is `/compose` (per `design-system/CLAUDE.md`). The "What This Is NOT" section (line 27) and the Anti-Patterns section reference pipeline concepts that are now partially obsolete.

**Fix:** Update pipeline references to acknowledge /compose as the current standard builder, positioning /falls-in-love as the premium alternative to /compose rather than to the older pipeline.

---

## SECTION 2: MISSED NUANCES

Ranked by importance. Each entry identifies what the research file contributed, what the SKILL.md captured, and what was lost.

---

### N-1. Discovery as CONVERGENCE, not reading [CRITICAL]
**Source:** `_gap-audit.md` (Section F.1), `_metacognitive-analysis.md` (Section 2), `_content-spatial-deep.md`

The gap audit identifies the single most important missed principle: spatial invention is not produced by reading content deeply. It is produced by the CONVERGENCE of four inputs from different moments:

1. Accumulated building context (zones that already exist)
2. Absorbed research (a principle that provides the conceptual frame)
3. Looking at the current page state (noticing what is missing)
4. The content itself (features that become visible through the other three)

The terrain map example: it required 5 zones (from Wave 1) + velocity differentiation (from Wave 2) + fractal annotation principle (from DD-006) + the observation that the page's structure was invisible to the reader (from looking). No single input suggests the terrain map. All four converging make it obvious.

**What SKILL.md captured:** The skill describes "invention follows visibility, not importance" (line 92) and the reciprocal relationship between page and content reading (lines 256-268). These are good but they frame discovery as a reading phenomenon ("read more deeply, see more").

**What was lost:** The convergence mechanism. The skill should explicitly state that spatial inventions emerge at the intersection of (a) what you have built so far, (b) research you just absorbed, (c) what you see when you look at the page, and (d) the content. All four must be co-present. This is WHY the build-look-refine cycle is the fundamental unit -- it brings all four inputs into the same cognitive moment.

---

### N-2. Perceptual resolution deepening over time [CRITICAL]
**Source:** `_gap-audit.md` (Section F.2), `_metacognitive-analysis.md` (Section 2)

The gap audit identifies what sustained engagement ACTUALLY does at the perceptual level:

- At minute 5: the agent sees "sections"
- At minute 45: the agent sees "a discrepancy between the content's five distinct arguments in Zone 4 and the page's undifferentiated visual treatment of that zone"

The difference is PERCEPTUAL RESOLUTION -- the agent's ability to see finer-grained mismatches between content and form. This is not knowledge or technique. It is the sharpening of perception through sustained engagement.

**What SKILL.md captured:** The skill describes semantic saturation thresholds (lines 75-81) and the qualitative difference between pass 3 and pass 10 evaluation. The "Cognitive State" section does cover threshold phenomena.

**What was lost:** The explicit framing of TIME producing PERCEPTUAL RESOLUTION. The skill describes what becomes possible at different time thresholds but doesn't name the mechanism: sustained building literally changes what you can SEE. Early passes see large-scale structural needs. Middle passes see section-level rhythm problems. Late passes see character-level density gaps. This is a continuous sharpening of the visual acuity for content-form mismatch.

---

### N-3. Taste emergence timing and the "opinions will come from building" principle [CRITICAL]
**Source:** `_gap-audit.md` (Section E.1), `_evolving-evaluation.md`

The wave logs prove a specific progression:
- Wave 1: "The page feels competent but not EXCITING" -- reporting using absence language
- Wave 2: "The velocity model is the most directly useful finding" -- RANKING (the agent has preferences)
- Wave 3: "Hierarchy in grids is more interesting than uniformity" -- AESTHETIC JUDGMENT (the word "interesting" IS taste)

No research file captures the EXACT MOMENT taste emerges. The skill should tell the agent: opinions will emerge from building, not from instruction. If the agent expects to have opinions from the start, it will manufacture them. If the agent expects opinions to emerge from the experience of trying things and seeing results, it will let them develop naturally.

**What SKILL.md captured:** The evaluation evolution sections describe deepening questions per wave. The staleness detection section is excellent.

**What was lost:** The explicit statement that TASTE IS A PRODUCT OF BUILDING, NOT A PREREQUISITE. The agent does not need taste at Wave 0. It needs to trust that taste will emerge from the build-look-refine cycle. Telling the agent "apply taste" at Wave 0 is counterproductive -- it has no taste yet. Telling it "by Wave 3, you will have developed taste from the experience of building; trust that taste" is accurate.

---

### N-4. Triage behavior -- not all problems are worth solving [MAJOR]
**Source:** `_gap-audit.md` (Section E.2), `_rhythm-analysis.md`

Wave logs show three items that persisted across 3+ waves without resolution:
- "Zone 1 feels long" -- Waves 3, 4, 5. Partially addressed but never fully resolved.
- "Footer is minimal" -- Waves 3, 4, 5. Never addressed.
- "Color temperature variation" -- Waves 4, 5. Never addressed.

This proves triage behavior. The agent consciously chose NOT to fix some problems because other problems mattered more. This is ITSELF an expression of taste -- the agent's judgment about where time produces the most value.

**What SKILL.md captured:** The minimum engagement requirements (line 419-432) and false convergence signals (lines 162-171) are about preventing premature stopping. The skill implicitly assumes every identified problem should be addressed.

**What was lost:** An explicit statement that some problems identified in "What Still Needs Work" are correctly left unresolved. The agent should not feel obligated to fix everything it notices. Choosing which problems to solve and which to accept is part of the devoted builder's judgment. The skill's framing could inadvertently create anxiety about unresolved items.

---

### N-5. The "looking before reading" principle [MAJOR]
**Source:** `_gap-audit.md` (Section E.3), `_rhythm-analysis.md` (Section B)

Wave 3 took a "pre" screenshot BEFORE reading any Wave 3 research. The agent looked at the page to determine what it needed before asking what the research offered.

**What SKILL.md captured:** Line 511: "Look before reading: At the START of Wave 2 (and every subsequent wave), take a screenshot and look at the page BEFORE reading any new research." This IS captured, but only as a one-line instruction in Wave 2.

**What was lost:** The principle is present but buried. It should be elevated to a core operational principle: "What does the page need?" ALWAYS precedes "What does the research offer?" This is the mechanism that prevents research-driven additions that the page does not need. It deserves emphasis at least equal to the primacy rotation protocol.

---

### N-6. The agent's relationship is non-transferable -- anti-handoff principle [MAJOR]
**Source:** `_gap-audit.md` (Section B.3), `_metacognitive-analysis.md` (Section 1)

The reflection document states: "This relationship is cumulative and irreproducible. No handoff document can transfer it. No specialist can package it. It exists only in the builder who has lived with the work through iteration after iteration."

The metacognitive analysis provides the deeper explanation: the HTML file carries the STRUCTURAL decisions forward, but the RELATIONSHIP -- the accumulated lived experience with the work -- is what produces quality. The HTML is necessary but not sufficient.

**What SKILL.md captured:** Line 968: "The entire value depends on ONE agent building over MANY iterations. Context window boundaries are tolerable (the HTML carries forward). Agent handoffs are not (the relationship is destroyed)."

This IS captured. However, the skill could be more explicit about WHY context window boundaries are tolerable -- because the HTML IS the understanding in enacted form (not a description of understanding), and reading it reconstitutes a functionally equivalent context window. The _metacognitive-analysis.md's explanation of the HTML as "context-window compression device" and "external memory in enacted form" is richer than the skill's single-line treatment.

---

### N-7. Extreme depth patterns (pass 80+) [MAJOR]
**Source:** `_extreme-depth.md`, `_intensity-architecture.md`

The _extreme-depth.md describes a 6-phase feeding schedule across 50-70+ passes, significantly more detailed than the SKILL.md's 8-wave structure. Key patterns at extreme depth that the SKILL.md's Wave 6-8 sections don't fully capture:

- **Phase 3 case studies (extreme-depth)** prescribes 15-20 passes across DD/OD/CD sub-phases, with per-file pass structures (e.g., "3a.1: Read DD-003... Extract the MECHANISM, not the metaphor"). The SKILL.md's Wave 3 is 12-18 passes and is less granular.
- **The "Bootstrap Test"** from extreme-depth ("could this page exist in Bootstrap? If yes, WHERE specifically?") is a concrete diagnostic that doesn't appear in SKILL.md.
- **Components.md** (37 lines, inventory with velocity/weight ratings) is listed in _extreme-depth.md as a Wave 1 input but is not mentioned in SKILL.md's Input section.

**What SKILL.md captured:** Waves 6-8 describe post-research enrichment, self-audit, and final enrichment with good depth. The 5-layer metacognitive evaluation at each wave is excellent.

**What was lost:** The granularity of the extreme-depth feeding schedule. The SKILL.md's Wave 3 (case studies) says "Read DD-003, DD-004, DD-006" but doesn't specify the per-file extraction protocol that _extreme-depth.md provides (e.g., "Extract the MECHANISM, not the metaphor. Bento grid isolation. Archipelago structure."). The _extreme-depth.md's sub-phase structure (3a for DD, 3b for OD, 3c for CD) with specific per-file instructions would help an agent know what to look for in each case study.

---

### N-8. The content-spatial discovery protocol's Fourth Reading [MODERATE]
**Source:** `_content-spatial-discovery.md` (Section A)

The discovery document defines a 4-reading protocol:
1. Comprehension (what is this about?)
2. Metaphor extraction (what spatial words are embedded?)
3. Structural anatomy (what geometric structures does the content contain?)
4. **Hypothesis formation** (form 2-3 spatial hypotheses)

**What SKILL.md captured:** Lines 274-293 describe three readings (Comprehension, Spatial Listening, Structural Anatomy) plus a fourth step for hypothesis formation. The SKILL.md has this content.

**What was lost:** The discovery document's richer treatment of "good hypotheses" vs "bad hypotheses." The SKILL.md includes three good examples and three bad examples (lines 283-290), which came from this research. However, the discovery document also provides the 4-property test for a good hypothesis (about the content, falsifiable, passes the swap test, drives CSS decisions) and a detailed example of applying all four properties to the Molly content. The SKILL.md includes the properties (line 280) but the worked example -- showing HOW to apply the four properties to generate a hypothesis -- was simplified to the template sentence format.

---

### N-9. The "reading order determines attentional frame" principle [MODERATE]
**Source:** `_metacognitive-analysis.md` (Sections 1, 4)

The metacognitive analysis provides a precise explanation of WHY content-first reading matters:

> "If the builder reads the content first and instructions second, spatial invention is possible. If the builder reads instructions first and content third (the pipeline's actual reading order), spatial invention is prevented. The reading order determines the attentional frame, and the attentional frame determines what features of the content become visible."

This is not just a practical recommendation. It is a structural claim about how transformer attention works: the first tokens in the context window set the attentional frame for everything that follows. Content-first means the content's features are the primary attention attractors. Instructions-first means compliance becomes the primary attention mode.

**What SKILL.md captured:** Wave 0 specifies "content source file ONLY. No design system. No research. No vocabulary." (line 437). This enforces content-first reading.

**What was lost:** The EXPLANATION of why. The skill prescribes content-first but doesn't explain the attentional-frame mechanism. An agent that understands WHY content-first matters is more likely to maintain the principle under pressure (e.g., when a context window resets and the agent is tempted to read the notebook first for efficiency).

---

### N-10. The "wave logs prove items the skill should address" list [MODERATE]
**Source:** `_gap-audit.md` (Section E)

The gap audit identifies 5 specific findings from the wave logs that no research file captures:

1. **E.1 - Taste emergence timing** (covered in N-3 above)
2. **E.2 - Persistent unresolved items as triage** (covered in N-4 above)
3. **E.3 - Looking before reading** (covered in N-5 above)
4. **E.4 - The exact moment the agent stops adding and starts understanding** -- Wave 5 added zero new component types. The shift is from "what should I add?" to "how should what exists work together?" The SKILL.md describes this in Wave 5 (line 682: "The Critical Shift: This wave marks the transition from ADDITIVE to SUBTRACTIVE building") but frames it as a prescribed wave behavior rather than a natural emergence the agent should recognize.
5. **E.5 - Naming conventions as content-semantic vocabulary** -- Class names like `.zone--datum`, `.terrain-quote--warm` encode the agent's conceptual model. The SKILL.md doesn't mention this naming convention principle. The 10 Falsifiable Criteria include "CSS comments reference content reasoning" but not "class names use content vocabulary."

---

### N-11. The competing builders architecture as an option [LOW]
**Source:** `_gap-audit.md` (Section B.5, B.6)

The master build philosophy describes 18 agents across 6 waves including 2 competing builders that produce categorically different spatial topologies. Builder Alpha invented the watchtower rail. Builder Beta invented the widening corridor. Neither would have invented the other's central idea.

**What SKILL.md captured:** The skill commits to the single-agent model, which is the right decision for a $300 budget skill.

**What was lost:** The option. The skill could mention that for higher-budget runs ($600+), spawning two competing builders at Wave 0 -- each forming independent spatial hypotheses from the same content -- and then selecting the stronger topology for enrichment is a known architecture that produces broader spatial exploration. This would be a "high-investment variant" note, not a change to the core skill.

---

### N-12. The CSS source order bug as a cautionary tale [LOW]
**Source:** `_gap-audit.md` (Section C.7), `_rhythm-analysis.md`

The Wave 5 log reveals a process-created CSS bug: components added in Waves 3-4 had their base CSS defined AFTER the @media responsive block. Due to CSS source order, base styles overrode responsive overrides. This bug was invisible until Wave 5's architectural audit.

**What SKILL.md captured:** Wave 5 and Wave 6 describe CSS architecture cleanup (lines 684, 723-724). The screenshot protocol (lines 862-883) includes responsive checking.

**What was lost:** A specific warning that waves of additive building create CSS source order bugs. The responsive block must ALWAYS be the last section of the stylesheet. This is a concrete, actionable warning that would prevent a known failure mode.

---

### N-13. The "HTML as enacted understanding" framing [LOW]
**Source:** `_metacognitive-analysis.md` (Section 1)

The metacognitive analysis provides a philosophically rich explanation: "The model's understanding is not described in the file. The model's understanding IS the file." The HTML doesn't say "we decided 7:3 ratio because of power asymmetry." The HTML CONTAINS the 7:3 ratio. Reading it reconstitutes the understanding without needing to re-derive it.

This is distinguished from a handoff document which describes decisions propositionally. The HTML stores understanding in enacted form -- you see the decision, you don't read about the decision.

**What SKILL.md captured:** Lines 982-983: "The HTML file is not just memory. It is a context-window compression device."

**What was lost:** The distinction between "enacted" and "propositional" understanding. The skill could add one sentence: "The HTML encodes your understanding in enacted form -- the 7:3 ratio IS the understanding, not a description of it. This is why handoff documents fail and HTML carries forward: the recipient reads the understanding directly rather than interpreting an instruction."

---

## SUMMARY

### Stale Information (9 items)
| # | Severity | Issue |
|---|----------|-------|
| S-1 | BLOCKING | `mechanism-catalog.md` path does not exist; should be `mechanisms.md` |
| S-2 | MODERATE | "~26,000 lines" claim overstated; enumerated files total ~11,000 |
| S-3 | LOW | "57% of the corpus" could be clearer as "57% of research findings" |
| S-4 | -- | All per-file line counts VERIFIED CORRECT |
| S-5 | -- | All per-file finding counts VERIFIED CORRECT |
| S-6 | LOW | Invocation section's agent-spawning syntax may not match all contexts |
| S-7 | LOW | Context window token estimates are reasonable but high-variance |
| S-8 | MODERATE | Pipeline comparison table references pre-/compose pipeline |
| S-9 | MODERATE | No reference to /compose as current standard builder |

### Missed Nuances (13 items)
| # | Importance | Nuance |
|---|-----------|--------|
| N-1 | CRITICAL | Discovery as convergence of 4 inputs, not reading |
| N-2 | CRITICAL | Perceptual resolution deepening (what time produces) |
| N-3 | CRITICAL | Taste emerges from building, not instruction |
| N-4 | MAJOR | Triage -- not all problems worth solving |
| N-5 | MAJOR | "Look before reading" needs elevation |
| N-6 | MAJOR | Anti-handoff explanation deserves richer treatment |
| N-7 | MAJOR | Extreme depth patterns (per-file case study extraction protocol) |
| N-8 | MODERATE | Fourth reading hypothesis formation detail |
| N-9 | MODERATE | Reading order as attentional frame mechanism |
| N-10 | MODERATE | Wave log findings (class naming, additive-to-systemic shift) |
| N-11 | LOW | Competing builders as high-investment option |
| N-12 | LOW | CSS source order bug as cautionary tale |
| N-13 | LOW | HTML as "enacted" vs "propositional" understanding |

### Overall Completeness Assessment

The SKILL.md is remarkably comprehensive at 1,058 lines. It captures the core philosophy, the wave structure, the metacognitive evaluation framework, the primacy rotation protocol, and the measurement criteria. The 5-layer metacognitive evaluation at each wave depth is the skill's strongest contribution -- this level of evaluation evolution specificity exists in no other skill.

The biggest gap is conceptual, not informational: the skill describes WHAT the agent should do at each wave but doesn't fully explain the MECHANISMS that make those activities productive. Why does building produce deeper seeing? Because perceptual resolution sharpens through sustained engagement (N-2). Why does research absorption produce spatial invention? Because invention is a convergence phenomenon requiring 4 co-present inputs (N-1). Why does taste appear at Wave 3 but not Wave 0? Because taste is a product of building, not a prerequisite (N-3). Adding these mechanistic explanations would transform the skill from an excellent process description into a complete cognitive theory the agent can internalize and adapt.

The only BLOCKING stale information is S-1 (the dead `mechanism-catalog.md` path). Everything else is accurate to within reasonable margins.
