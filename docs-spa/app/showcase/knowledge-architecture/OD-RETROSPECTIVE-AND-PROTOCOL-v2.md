# OD RETROSPECTIVE & PROTOCOL v2
## What We Learned, What Failed, What To Do Differently

**Generated:** 2026-02-07
**Context:** First-ever agent team execution (Phase 2.2 OD Explorations)
**Purpose:** Reference document for AD/CD phases — or OD re-execution at higher standard
**Scope:** Team architecture, generative research loop, refinement protocols, communication patterns, identity management, honest assessment of what worked vs what was ceremony

---

## PART 1: WHAT HAPPENED (FACTS ONLY)

### Output
- 6 OD explorations built (OD-001 through OD-006)
- 11,980 lines of HTML, 575KB total
- All 6 passed visual audit (0 soul violations across 3,479 DOM elements)
- All 6 threaded with Tier B inline headers (10 sections each)
- 6 DD source files updated with CONSUMED BY entries (bidirectional)
- 33 research findings applied (9.79% of 337 total)
- 8 new OD-F findings discovered
- 1 emergent meta-insight: OD-F-005 "Organization IS Density"

### Process
- 6+ sessions, multiple context limit crashes
- Team: Lead + Weaver + 3 parallel Builders (peak)
- OD-001 and OD-002 built sequentially with iteration loops
- OD-003, OD-004, OD-005 built in parallel (one-shot, no iteration)
- OD-006 built last as synthesis (one-shot)
- External research: 3 standalone documents (OD-004, OD-005, OD-006), 2 lost to context (OD-001, OD-003)

### Supporting artifacts created
- ACCUMULATED-IDENTITY-v1.md (539 lines)
- OD-CHECKPOINT.md, OD-RESEARCH-GATE.md
- 5 execution journal files
- 40 audit screenshots
- OD-EXECUTION-PROTOCOL.md, OD-EXECUTION-AGENT-TEAM-ARCHITECTURE-v4.md

---

## PART 2: WHAT WORKED AND WHY

### 2.1 Parallel Builders for Independent Artifacts
Launching 3 agents simultaneously to build OD-003, OD-004, OD-005 was the correct pattern. Each had clearly defined inputs (DD pattern pairing, research set, content topic) with zero dependencies between them. This is the ideal team use case: embarrassingly parallel work with clear boundaries. Throughput was roughly 3x faster than sequential building.

**Keep this pattern.** But add the iteration mandate (see Part 5).

### 2.2 The Weaver Role
Having a dedicated agent that didn't build but instead threaded — updating DD source CONSUMED BY tables, maintaining RESEARCH-ACTIVE.md, adding inline headers — prevented merge conflicts on shared files. The Weaver was the only agent with session continuity, and it carried that weight well.

**Keep this role. It's the glue.**

### 2.3 Soul Compliance System
The locked tokens (:root CSS block) plus the 5 soul pieces created a verifiable standard. Zero violations across 6 explorations means the constraint system works. Builder agents independently produced soul-compliant HTML without needing to coordinate — they just followed the tokens.

**Keep the system.** It's the floor, not the ceiling. The next challenge is going beyond compliance to generative use of the soul (see Part 4).

### 2.4 The Accumulated Identity Concept
ACCUMULATED-IDENTITY-v1.md compressed 13 source files into a single document any agent could absorb. The lead-log confirms it was read before spawning Session 5 builders. Whether it measurably changed outputs is unproven (see Part 7, Open Question 1), but the concept — persistent institutional memory for AI agents — is architecturally sound.

### 2.5 Bidirectional Threading
Every OD→DD reference has a corresponding DD→OD reference. The Weaver maintained this rigorously. This means any agent entering any file can trace both upstream (where did this come from?) and downstream (what depends on this?). That navigability has compound value as the system grows.

---

## PART 3: WHAT FAILED AND WHY

### 3.1 The Lead Was Too Fat
The lead agent orchestrated teammates, read their results, ran its own audits (OD-001: 13 screenshots), managed checkpoint files, and processed weaver updates. This consumed context catastrophically and caused multiple session crashes.

**Rule for next time:** The lead does NOTHING except: create tasks, assign them, process verdicts (not raw data), decide next steps. Zero building. Zero auditing. Zero Playwright. Zero file reading beyond checkpoint documents.

### 3.2 The Refinement Loop Was Dropped
The three-step loop (accumulate context → guide research → refine against identity) was architecturally intended but only partially executed:

| Step | OD-001 | OD-002 | OD-003 | OD-004 | OD-005 | OD-006 |
|------|--------|--------|--------|--------|--------|--------|
| Context-guided research | Partial* | N/A | Partial* | YES | YES | YES |
| Findings in HTML | YES | YES | YES | YES | YES | YES |
| Refinement against identity | YES (2 iterations) | YES (2 iterations) | NO (one-shot) | PARTIAL (R1-001 rebuild) | NO (one-shot) | NO (one-shot) |

*OD-001 and OD-003 external research happened but wasn't persisted as standalone documents. Findings appear in HTML headers but source provenance is lost.

**Why it failed:** Parallel agents can't iterate (they terminate after one response). The refinement step requires holding both external findings AND accumulated identity simultaneously — the most context-expensive operation. When context limits hit, refinement was the first casualty.

### 3.3 Message Routing Confusion
SendMessage requires explicit recipients. Early in the process, messages intended for teammates went into the text stream (visible to user, invisible to agents). This caused:
- Lost directives
- Duplicated communication (saying something in text, then realizing you need to SendMessage it)
- Confusion about who heard what

### 3.4 Large MCP Responses in Lead Context
Playwright browser snapshots (~16K tokens each) consumed lead context alive. A single full-page screenshot audit could eat 10-15% of available context. This should NEVER happen in the lead.

### 3.5 The showcase/CLAUDE.md Governance Gap
The showcase/CLAUDE.md mandates a 5-step research grounding loop, refinement loop, mandatory output format, and full perceptual depth audit. None of the builder agents followed it — they were spawned with direct prompts and never traversed into the showcase/ directory. By the document's own criteria ("if this record is missing or incomplete, the work is INVALID"), all 6 ODs are technically invalid.

**This is a systemic problem:** governance documents that depend on directory traversal don't apply to spawned sub-agents. Either embed critical requirements into agent prompts (10-line checklist, not 500-line document) or accept that the document is aspirational, not enforceable.

### 3.6 External Research Documents Lost to Context
OD-001 (EXT-CONV) and OD-003 (EXT-TASK) external research was conducted by agents that terminated or whose sessions crashed before persisting results as standalone documents. The findings ended up in HTML headers but with no source provenance document. This means:
- We can't verify what the research agents actually found
- We can't refine the findings because we don't have the raw material
- The threading references EXT-CONV-001 through EXT-CONV-005 but there's no file that defines what those are

**Rule:** External research agents must write their output to a file BEFORE returning results to the lead. File persistence survives context crashes. Memory doesn't.

---

## PART 4: THE GENERATIVE LOOP (THE BIG IDEA)

### What We Were Trying To Do
Use accumulated context (built through traversal of inline threading headers) to guide sub-agents in finding external UX/design patterns. Then refine those findings back against the accumulated identity to ensure they fit — but also to discover things the identity didn't predict.

### What Actually Happened
The research was *guided by* the identity (confirmed — research files show target findings and soul-piece mapping tables). But the refinement step was largely skipped. External findings went directly into builder prompts as input, and builders produced HTML in one shot. Nobody asked: "Does EXT-CONF-007's approach to epistemic markers conflict with our Rule 5 border weight hierarchy?"

### The Distinction That Matters

**Acquisitive loop (what we did):**
```
Identity → narrows search → finds confirming patterns → inserts them
```

**Generative loop (what we want):**
```
Identity → generates better questions → discovers surprising patterns
    → refines against identity → identity itself evolves
    → threads the evolution back in
```

The acquisitive loop produces compliant artifacts. The generative loop produces discoveries. OD-F-005 ("Organization IS Density") was a genuine discovery — but it emerged from the OD-006 builder's accumulated context, not from a structured dialectical process. It was accidental generativity, not designed generativity.

### How To Make It Structural

The generative loop requires a dedicated agent role: **the Dialectician**. This agent doesn't build, doesn't search, doesn't thread. It *thinks*. It holds the accumulated identity in one hand and the scout's discoveries in the other and asks:

- **Resonance:** Which findings vibrate at the same frequency as our identity? (Easy adopts.)
- **Extension:** Which findings suggest capabilities our identity *should* have but doesn't yet? (The valuable ones — they grow the identity.)
- **Friction:** Which findings contradict something we believe? (The most important. A contradiction either reveals a flaw in the finding or a blind spot in the identity.)
- **Absence:** What did we expect the scouts to find but didn't? What does our identity predict should exist in the world but doesn't? (The most proactive question — identifies genuine innovation space.)

The Dialectician's output is a refinement synthesis document (see template in Part 6) that the builder receives *instead of* raw research. The builder never sees unrefined external material.

---

## PART 5: TEAM ARCHITECTURE FOR NEXT PHASE

### 5.1 Role Definitions

```
Lead (THIN orchestrator — zero building, zero auditing, zero Playwright)
│
├── Traverser (runs ONCE at phase start)
│   Input:  all inline headers + previous ACCUMULATED-IDENTITY
│   Output: ACCUMULATED-IDENTITY-vN.md + IDENTITY-CORE.md
│   Job:    pure accumulation, no judgment
│   Dies after producing output.
│
├── Scout × 2-3 (parallel, EXPLORATORY mandate)
│   Input:  IDENTITY-CORE.md + phase constraints
│   Output: raw discovery reports (MUST write to file before returning)
│   Job:    cross-domain discovery, not confirmation search
│   Prompt: "Given this identity, what exists that we haven't
│            considered? Go wide — adjacent fields, not just UX."
│   Dies after producing output.
│
├── Dialectician (sequential, AFTER all scouts return)
│   Input:  ACCUMULATED-IDENTITY-vN.md (full) + ALL scout reports
│   Output: refinement synthesis (Adopt / Extend / Tension / Absence)
│   Job:    the thinking step — productive friction between
│            identity and new material
│   Dies after producing output.
│
├── Builder × 2-3 (parallel, AFTER dialectician)
│   Input:  IDENTITY-CORE.md + dialectician's refined synthesis
│   Output: HTML explorations (MUST do minimum 2 internal passes)
│   Job:    build with pre-refined material, mandatory self-critique
│   Prompt includes: "After first draft, re-read identity fresh.
│            Answer: (1) What would the Unhurried Editor change?
│            (2) Where did you default to generic instead of identity-specific?
│            (3) What tension from the synthesis did you avoid?"
│   Dies after producing output.
│
├── Weaver (CONTINUOUS — only persistent agent besides lead)
│   Input:  all outputs from above
│   Output: updated inline headers, DD CONSUMED BY tables,
│           RESEARCH-ACTIVE.md, checkpoint files
│   Job:    threading only, no building, no auditing
│
└── Auditor (AFTER builders, BEFORE commit)
    Input:  built HTML + IDENTITY-CORE.md + dialectician's synthesis
    Output: audit report — PROACTIVE, not just compliance
    Job:    "What opportunity did the builder miss that the
             identity enables? What would surprise a reader?
             If nothing — the builder played it safe."
    Dies after producing output.
```

### 5.2 Execution Sequence

```
Phase A: ACCUMULATION
  └── Traverser reads all inline headers → ACCUMULATED-IDENTITY-vN.md + IDENTITY-CORE.md

Phase B: DISCOVERY
  └── 2-3 Scouts search in parallel (cross-domain, identity as lens)
  └── Each scout writes output to file IMMEDIATELY (survives crashes)

Phase C: REFINEMENT (the step we kept dropping)
  └── Dialectician reads full identity + all scout reports
  └── Produces refinement synthesis: Adopt / Extend / Tension / Absence
  └── Lead reviews synthesis before proceeding (human checkpoint optional)

Phase D: CONSTRUCTION
  └── 2-3 Builders work in parallel
  └── Each receives: IDENTITY-CORE + refined synthesis (NOT raw research)
  └── Each does mandatory 2-pass internal iteration
  └── Each writes output to file

Phase E: THREADING
  └── Weaver updates all inline headers, cross-references, checkpoints
  └── Runs continuously through Phases D and F

Phase F: PROACTIVE AUDIT
  └── Auditor reviews built HTML against identity + synthesis
  └── Report includes both compliance AND missed opportunities
  └── If opportunities are significant → revision cycle (new builder or lead edits)

Phase G: COMMIT
  └── Lead commits all work (one committer, one branch)
  └── Lead updates MEMORY.md with session learnings
```

### 5.3 Key Differences From OD Phase

| Aspect | OD Phase (v1) | Next Phase (v2) |
|--------|---------------|-----------------|
| Lead role | Fat (built, audited, orchestrated) | Thin (orchestrate only) |
| Research | Confirmation search ("find examples of X") | Discovery search ("what haven't we considered?") |
| Refinement | Skipped for 4/6 ODs | Dedicated Dialectician role |
| Builder iteration | 2/6 ODs iterated | All builders do 2-pass minimum |
| Audit | Reactive compliance (does it pass?) | Proactive (what was missed?) |
| Research persistence | 2/5 research docs lost to context | Write to file BEFORE returning |
| Identity distribution | Full 539-line doc to everyone | Tiered: CORE (builders) vs FULL (dialectician) |
| Exploration count | 6 (several shallow) | 3-4 (all deep) |
| Playwright in lead | Yes (killed context) | Never (delegate to auditor) |

---

## PART 6: TEMPLATES AND PROMPTS

### 6.1 Scout Prompt Template

```
You are deeply familiar with this design identity:

[INSERT IDENTITY-CORE.md HERE — ~100 lines]

Your phase is [AD/CD/etc] and your specific density pattern is [PATTERN].

Your job is NOT to find examples of [PATTERN] in documentation. We know the
obvious references. Your job is to find patterns in the wild — from ANY field,
not just web design or documentation — that either:

(a) Do something we haven't thought of that our identity would predict should work
(b) Contradict our assumptions in a way that might reveal a gap in our identity
(c) Solve a problem we didn't know we had
(d) Come from a completely different domain but apply to our situation

Suggested cross-domain directions for [AD/Animation Density]:
- Film editing theory (Eisenstein's montage, Tarkovsky's time-pressure)
- Music composition (dynamics, silence as structural element)
- Choreography (movement tension and release)
- Data visualization animation (Hans Rosling, Gapminder)
- Game design ("juice" theory, animation as feedback)
- Theatrical lighting design (attention direction without words)

For each discovery, document:
1. What it is and where it comes from
2. Why it surprised you given our identity
3. The specific tension or resonance with our identity
4. A concrete implementation sketch (CSS/HTML)

CRITICAL: Write your output to a file at [PATH] BEFORE returning your summary.
File persistence survives context crashes. Your memory doesn't.
```

### 6.2 Dialectician Synthesis Template

```markdown
# [PHASE]-[NUMBER] Refinement Synthesis
## Dialectician's Evaluation of Scout Discoveries Against Accumulated Identity

**Date:** [date]
**Identity version:** ACCUMULATED-IDENTITY-v[N]
**Scout reports evaluated:** [list]
**Total discoveries evaluated:** [count]

---

## ADOPT — Fits the Identity Naturally ([count])

### [EXT-ID]: [Name]
- **What:** [brief description]
- **Why it fits:** [specific identity element it resonates with]
- **Integration:** [how the builder should use this]
- **Evidence of fit:** [quote from identity that predicts this would work]

---

## EXTEND — Pushes the Identity in a Productive Direction ([count])

### [EXT-ID]: [Name]
- **What:** [brief description]
- **The extension:** [what capability this suggests our identity SHOULD have]
- **Current identity gap:** [what the identity doesn't address that this fills]
- **Proposal:** [specific identity extension to test in the build]
- **Risk if adopted:** [what could go wrong]
- **Risk if ignored:** [what we miss]

---

## TENSION — Contradicts Something We Believe ([count])

### [EXT-ID]: [Name]
- **What:** [brief description]
- **The contradiction:** [specific identity element this challenges]
- **Possible resolutions:**
  (a) The finding is wrong because [reasoning]
  (b) Our identity has a blind spot because [reasoning]
  (c) Both are true in different contexts because [reasoning]
- **Recommended investigation:** [what the builder should explore]

---

## ABSENCE — What We Expected But Didn't Find

- **Expected:** [what the identity predicts should exist in the world]
- **Found:** Nothing matching this prediction
- **Implication:** [is this an innovation space? a flaw in the identity?
  an unexplored territory?]
- **Recommended action:** [build it? park it? investigate further?]

---

## BUILDER BRIEF (what the builder actually needs)

### Must implement:
[numbered list from ADOPT]

### Should explore:
[numbered list from EXTEND, with specific questions to answer]

### Must investigate:
[numbered list from TENSION, with specific tests to run]

### May discover:
[description of ABSENCE territory — permission to innovate here]
```

### 6.3 Builder Self-Critique Questions (Mandatory Before Returning)

```
After completing your first draft, STOP. Do not return yet.

1. Re-read IDENTITY-CORE.md fresh. Then re-read your HTML from top to bottom.

2. Answer these questions honestly:

   COMPLIANCE (floor):
   - border-radius: 0 everywhere?
   - box-shadow: none everywhere?
   - Instrument Serif for wisdom voice, Inter for body, JetBrains Mono for code?
   - Max 2 callouts per viewport section?
   - DD-F-006 fractal at 4 scales (page/section/component/character)?

   GENERATIVE (ceiling):
   - What would the Unhurried Editor change about this page?
   - Where did I default to a generic web pattern instead of leveraging
     something specific from the identity?
   - Which EXTEND item from the Dialectician's synthesis did I explore?
     Which did I avoid? Why?
   - Which TENSION item did I investigate? What did I find?
   - What on this page would SURPRISE a reader familiar with standard
     documentation? If the answer is "nothing" — I played it safe.

3. Make at least 3 specific changes based on your answers above.

4. Now you may return your output.
```

### 6.4 Proactive Auditor Prompt Template

```
You are auditing [FILE] against the accumulated identity and the
Dialectician's refinement synthesis.

Your job is NOT just compliance checking. The Weaver handles that.

Your job is to answer:

1. MISSED OPPORTUNITIES: What did the Dialectician's synthesis say to
   explore that the builder didn't touch? Why might they have avoided it?

2. SURPRISE TEST: Show this page to someone who reads documentation daily.
   What would make them pause? If nothing — identify the 3 places where
   the builder chose safety over identity.

3. DENSITY AUTHENTICITY: Is the claimed density pattern (e.g., GEOLOGICAL)
   genuinely visible at the page scale? Or is it named but not felt?
   Describe what you see when you squint at the full-page layout.

4. IDENTITY EVOLUTION: Did this exploration discover anything new about
   the identity? Any finding that should feed back into
   ACCUMULATED-IDENTITY-v(N+1)?

5. REVISION PRIORITY: If this builder gets ONE more pass, what single
   change would most improve the exploration? Be specific — cite a
   section, a line range, a component.
```

---

## PART 7: OPEN QUESTIONS AND AVENUES OF EXPLORATION

### Open Question 1: Does the Accumulated Identity Actually Change Outcomes?

We believe it does. The lead-log claims "the accumulated identity was sufficient for 3 parallel builder agents to independently produce soul-compliant, research-grounded explorations." But we have no control group.

**Proposed test for AD phase:** Give one builder the full accumulated identity. Give another builder only IDENTITY-CORE.md (soul pieces + tokens + anti-patterns). Same pattern, same research. Compare outputs. If they're equivalent, the full identity is expensive ceremony. If they're genuinely different, we've proven compound value.

This test costs one extra builder agent. The insight is worth it.

### Open Question 2: Is 337 the Right Denominator?

33 of 337 findings applied (9.79%). But R-4 has 192 findings with 0 applied. R-2 has 27 with 0 applied. Are these actually applicable to visual explorations, or are they reference material that doesn't translate?

**Proposed action:** Before AD phase, audit all 337 findings. Classify each as:
- "Applicable to explorations" — should be applied in DD/OD/AD/CD builds
- "Reference only" — useful context but not directly implementable
- "Superseded" — later findings replaced this
- "Redundant" — says the same thing as another finding

Suspicion: the real applicable set is 80-120, not 337. A 33/100 rate is very different from 33/337.

### Open Question 3: Quality vs Quantity — How Many Explorations Per Phase?

OD had 6 explorations. OD-001 and OD-002 got genuine iteration (2 passes each) and scored higher. OD-003 through OD-005 were one-shot builds that passed compliance but didn't go through refinement.

**Proposal:** AD phase does 3-4 explorations instead of 6. Each gets:
- Scout discovery
- Dialectician refinement
- Builder with 2-pass minimum
- Proactive audit
- Possible revision cycle

Three deeply refined explorations will likely produce more emergent findings than six surface-level ones. The insights that matter (like OD-F-005) come from depth, not breadth.

### Open Question 4: Identity Drift and Pruning

As phases accumulate, the identity grows. DD added density findings. OD added organizational findings and external research. AD will add animation findings. CD will add combination findings.

At what point does the identity become so large that it constrains rather than enables? When does accumulated context become accumulated baggage?

**Proposed mechanism:** Each phase's Traverser does not just ADD to the identity — it also asks: "What from earlier phases do we now know is wrong, irrelevant, or superseded?" A pruning step. The identity should get *sharper* over time, not just *larger*.

### Open Question 5: The Showcase CLAUDE.md Problem

The 500-line governance document is either enforceable or it isn't. Right now it isn't — spawned agents don't read it. Options:

(a) **Extract a 10-line checklist** that gets embedded in every agent prompt. The full document stays as reference but the enforcement is the prompt.

(b) **Accept it as aspirational.** The document describes the ideal process. The agent prompts describe the actual process. They're allowed to diverge as long as the actual process produces quality results.

(c) **Rewrite it as an agent prompt template.** Instead of a CLAUDE.md that agents might read, make it a literal prompt fragment that the lead copy-pastes into every agent spawn. If it's too long to copy-paste, it's too long to enforce.

Recommendation: option (a). The soul pieces, locked tokens, and anti-patterns are the enforceable core. The refinement loop is aspirational until we have the Dialectician role to execute it.

### Avenue of Exploration: Cross-Domain Scout Directions for AD Phase

The best finding in OD was Kevin Lynch's wayfinding theory (1960 urban planning). It came from a completely different field. The worst findings were standard UX articles (NN/G progressive disclosure) that confirmed what we already knew.

For AD (Animation Density), don't search "CSS animation best practices." Search:

- **Film editing:** Eisenstein's montage theory (collision of images creates meaning neither had alone). Tarkovsky's "sculpting in time" (pace as emotional argument). How editors use pacing to control cognitive density.

- **Music dynamics:** How composers create density perception through dynamics (pp → ff) without adding notes. The concept of "rest" as structural element. Bernstein's notion that silence is the loudest note.

- **Choreography:** How dancers create and release tension through movement quality (sharp vs sustained, direct vs indirect — Laban movement analysis). Martha Graham's contraction-release cycle maps directly to PULSE.

- **Data visualization animation:** Hans Rosling's Gapminder — how motion made statistics viscerally understandable. The "animation as revelation" pattern (static chart → animated explanation → static conclusion = CRESCENDO).

- **Game design:** "Juice" theory — how small animations create disproportionate sense of responsiveness and life. Animation as *feedback*, not decoration. Nintendo's "game feel" philosophy (Miyamoto).

- **Theatrical lighting:** How lighting designers direct attention without words. Fade-in/fade-out as density control. The concept of "wash" (uniform light = low density) vs "spot" (focused light = high density).

The accumulated identity should generate these directions. An "Unhurried Editor" has more in common with a film editor than with a frontend developer. That's the kind of cross-domain thinking the Scout prompts should enable.

### Avenue of Exploration: The EXT-* Naming Problem

External findings use inconsistent naming: EXT-CONV, EXT-TASK, EXT-CONF, EXT-SPAT, EXT-CREATIVE. Some have 5 findings, some 12, some 9. There's no registry. Cross-referencing is unreliable.

**Proposed fix:** Standardize to `EXT-[PHASE]-[OD_NUMBER]-[SEQUENCE]`. Example: `EXT-OD-004-007` (7th external finding for OD-004). For AD phase: `EXT-AD-002-003` (3rd external finding for AD-002). Create a single EXT-REGISTRY.md that catalogs all external findings with one-line descriptions.

### Avenue of Exploration: OD-F and DD-F Deduplication

OD-F-005 says "Organization IS Density." DD-F-010 says "Organization serves density." Are these the same insight? If so, we're inflating the finding count. If they're genuinely different (one says "serves," one says "IS"), the difference is worth articulating precisely.

**Proposed action:** Before AD phase, a dedicated agent reads all DD-F and OD-F findings and produces a deduplication report. Where findings overlap, merge them. Where they differ subtly, articulate the difference. The goal is a clean finding set going into AD.

---

## PART 8: HARD RULES (NON-NEGOTIABLE)

These are lessons paid for in crashed sessions and lost work.

### Communication
1. **SendMessage is the ONLY way teammates hear you.** Text output goes to the user. If you want an agent to do something, you MUST use SendMessage with an explicit recipient.
2. **Idle notifications are noise.** Teammates go idle after every turn. The system sends `{"type":"idle_notification"}` every time. Filter these mentally. They mean "waiting for input," nothing more.
3. **Background agents are underused.** Use `run_in_background` for scouts and researchers. Don't block the lead on their completion. Check output files when ready.

### Context Management
4. **The lead NEVER runs Playwright.** Browser snapshots are ~16K tokens. That's 10-15% of lead context per screenshot. ALL visual work goes to the Auditor agent.
5. **The lead NEVER builds.** The OD-001 deep audit (13 screenshots, 5 fixes) should have been a sub-agent. The lead's context is for orchestration decisions, not file manipulation.
6. **Research agents write to file BEFORE returning.** File persistence survives context crashes. Agent memory doesn't. If the session crashes before the agent reports back, the file still exists.
7. **Identity documents are tiered.** IDENTITY-CORE.md (~100 lines) for builders and scouts. Full ACCUMULATED-IDENTITY-vN.md for the Dialectician and Traverser only.

### Quality
8. **One committer, one branch.** The lead commits. Agents never commit independently. This prevents merge conflicts and maintains a clean history.
9. **Builders iterate twice minimum.** The prompt MUST include a self-critique step before the builder returns. One-shot builds are not accepted.
10. **3-4 deep explorations beats 6 shallow ones.** Trade throughput for depth. Emergent findings come from sitting with material, not from producing volume.

### Process
11. **Decisions.md gets filled in.** When a decision's consequence becomes clear, update the "Actual Consequence" field. The feedback loop is what makes decision logs valuable.
12. **CURRENT-STATE.md is redundant.** Use OD-CHECKPOINT (or AD-CHECKPOINT) instead. It already tracks position and was maintained more consistently.
13. **The showcase/CLAUDE.md requirements get extracted into a 10-line checklist** appended to agent prompts. The full document is aspirational reference.
14. **External findings get standardized naming.** EXT-[PHASE]-[NUMBER]-[SEQUENCE] with a central EXT-REGISTRY.md.

---

## PART 9: THE META-INSIGHT

What we're building is a system where AI agents construct their own institutional memory and then use that memory to guide future work. The inline threading system is version control for knowledge, not just code. The accumulated identity is compressed organizational memory. The Dialectician role (when implemented) makes this a *learning* organization — one that doesn't just apply what it knows, but uses what it knows to discover what it doesn't.

The user's original insight was that the identity shouldn't just *constrain* future work (verification). It should *generate* future work (discovery). The identity should be a source of questions, not just a checklist of rules.

That generative loop — identity generates questions, questions guide discovery, discovery refines identity, refined identity generates better questions — is the thing we're reaching for. We got about 60% of it in the OD phase. The Dialectician role and the proactive Scout prompts close the gap.

The foundation is solid. The team infrastructure works. The threading creates navigability. The soul compliance system catches violations. What we're optimizing now is the last 40% — the part where accumulated knowledge stops being a constraint and starts being a creative partner.

---

## APPENDIX A: QUICK REFERENCE — AD PHASE KICKOFF CHECKLIST

```
□ Read this document (OD-RETROSPECTIVE-AND-PROTOCOL-v2.md)
□ Read OD-CHECKPOINT.md (understand where OD ended)
□ Read ACCUMULATED-IDENTITY-v1.md (the current identity)
□ Decide: 3 or 4 AD explorations? (recommend 3)
□ Decide: which AD density patterns? (animation-specific)
□ Audit 337 findings — classify applicable vs reference vs superseded
□ Deduplicate DD-F and OD-F findings
□ Standardize EXT-* naming convention
□ Extract showcase/CLAUDE.md into 10-line agent checklist
□ Create IDENTITY-CORE.md from ACCUMULATED-IDENTITY
□ Spawn team: Lead + Traverser + 2 Scouts + Dialectician + 2 Builders + Weaver + Auditor
□ Traverser produces ACCUMULATED-IDENTITY-v2.md first
□ Scouts search cross-domain (film, music, choreography, games)
□ Dialectician refines (Adopt / Extend / Tension / Absence)
□ Builders receive refined synthesis, iterate 2x minimum
□ Auditor runs proactive audit (not just compliance)
□ Weaver threads everything
□ Lead commits
```

## APPENDIX B: WHAT WE SHOULD CELEBRATE

It's easy in a retrospective to focus on failures. But:

- 11,980 lines of soul-compliant HTML in a phase plagued by context crashes
- Zero soul violations across 3,479 DOM elements
- 8 new findings discovered, including the emergent "Organization IS Density"
- First-ever agent team execution — learned the entire communication model from scratch
- The Weaver pattern proved itself as a reusable role
- Bidirectional threading maintained with 100% accuracy across 12 files
- External research genuinely enriched the explorations (Kevin Lynch wayfinding, Stripe API patterns, confidence visualization, CSS scroll-driven animations)
- The accumulated identity concept is architecturally novel and appears to work

This was a first attempt. It produced real artifacts. The next attempt will produce better ones because this document exists.
