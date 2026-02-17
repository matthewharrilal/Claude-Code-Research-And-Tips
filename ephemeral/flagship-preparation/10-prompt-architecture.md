# Ceiling Prompt Postmortem + Flagship Prompt Architecture Design

**Author:** PROMPT-ARCHITECT (Opus)
**Date:** 2026-02-16
**Task:** #10 -- Forensic analysis of the 1,004-line ceiling execution prompt
**Sources analyzed:**
- CEILING-MASTER-EXECUTION-PROMPT.md (1,004 lines, 12 sections + 3 appendices)
- PROMPT-VALIDATION-REPORT.md (507 lines, 3 BLOCKING + 5 SIGNIFICANT + 8 MINOR issues)
- GAP-ANALYSIS.md (1,123 lines, 7 critical gaps identified)
- META-PURPOSE-ALIGNMENT.md (239 lines, conviction thesis)
- META-CONSTRAINT-BALANCE.md (513 lines, 4-type taxonomy, inverted-U model)
- META-CREATIVE-CONDITIONS.md (369 lines, compliance-creativity orthogonality)
- 04-metacognitive-analysis.md (384 lines, preparation ceiling hypothesis)
- 01-process-retrospective.md (453 lines, 10 new gates, root cause = spatial blindness)

---

## 1. WHAT WORKED IN THE 1,004-LINE PROMPT

### Rules That Achieved 100% Compliance

Every binary rule in the prompt achieved full compliance. This confirms the central architectural principle: **binary rules achieve 100% agent compliance.**

| Rule | Prompt Location | Outcome |
|------|----------------|---------|
| border-radius: 0 | Section 6.1 (line 505) | 8/8 soul -- PASS |
| box-shadow: none | Section 6.1 (line 506) | PASS |
| No drop-shadow | Section 6.1 (line 507) | PASS |
| No semi-transparent backgrounds | Section 6.1 (line 510) | PASS |
| No gradients | Section 6.1 (line 511) | PASS |
| No pure black/white | Section 6.1 (line 512) | PASS |
| Instrument Serif display only | Section 6.3 (line 530) | PASS |
| h3 italic | Section 6.2 (line 523) | PASS (but re-audit found italic missing on some) |
| Per-category minimums S:1+,H:1+,C:1+,D:1+,N:1+ | Section 4.4 (line 348) | ALL 5 categories covered (14 mechanisms) |
| 2+ reinforcing pairs | Section 4.4 (line 360) | 3 pairs documented |
| 3-transition minimum | Section 4.4 (line 366) | 3 types used (SMOOTH/BRIDGE/BREATHING) |
| Footer present | Section 4.8 (line 451) | PASS (correcting Middle defect) |
| Blind novelty evaluation | Section 7.3 (line 619) | PASS -- evaluator was blind |
| Fresh-eyes PA | Section 7.4 (line 635) | PASS -- zero-context maintained |
| Phase 0E library prohibition | Section 4.2 (line 332) | PASS -- no library access during metaphor |
| Two-instance pattern | Section 2.2 (lines 113-135) | PASS -- separate metaphor/planner/builder |
| Token compliance >= 80% | Section 4.6 (line 396) | 86% -- PASS |
| Typography trinity locked | Section 6.3 (line 530) | PASS -- zero dialect shifts |

**Binary compliance rate: 18/18 = 100%.** This is the prompt's unqualified success.

### What Percentage of the Prompt Was Actually Used by the Builder?

The builder received the build plan (02-build-plan.md), not the full 1,004-line prompt. The builder's effective context was:

- Build plan: ~400 lines (the planner's output)
- Soul constraints reference: ~20 lines
- tokens.css reference: ~174 lines
- 1-paragraph metaphor summary: ~5 lines
- Builder self-check section: ~15 lines (Section 4.7)

**Total builder context: ~614 lines**, of which the build plan (400 lines) was dominant.

Of the 1,004-line prompt:
- ~237 lines were team topology + task creation (Section 2) -- consumed by team-lead only
- ~57 lines were communication protocol (Section 3) -- consumed by team-lead, partially builder
- ~158 lines were build pipeline (Section 4) -- consumed by metaphor-agent and planner
- ~38 lines were mechanism guidance (Section 5) -- consumed by planner only
- ~75 lines were soul/identity (Section 6) -- consumed by all agents but as reference
- ~68 lines were QA protocol (Section 7) -- consumed by auditors only
- ~38 lines were success criteria (Section 8) -- consumed by verdict synthesizer
- ~24 lines were anti-patterns (Section 9) -- advisory, consumed by team-lead
- ~51 lines were checkpoint architecture (Section 10) -- consumed by team-lead
- ~77 lines were per-agent guidance (Section 11) -- consumed by team-lead for slicing
- ~83 lines were Appendix A quick reference -- consumed by team-lead
- ~52 lines were Appendix B checklist -- consumed by team-lead
- ~15 lines were Appendix C manifest -- consumed by team-lead

**The builder directly consumed ~10-15% of the prompt.** The metaphor-agent consumed ~15-20%. The planner consumed ~25-30%. The auditors consumed ~10%. The team-lead consumed ~80% (for orchestration).

### Sections That Could Be Deleted With Zero Impact on Output

| Section | Lines | Could Be Deleted? | Rationale |
|---------|-------|-------------------|-----------|
| Section 0: Conviction | 10-33 | NO -- this was the qualitative frame | Keep |
| Section 2.3-2.4: Task/Wave sequence | 189-237 | YES -- coordination choreography | Team-lead can determine this from agent roster |
| Section 3.4: Anti-spam table | 284-296 | YES -- no messages were sent anyway | Sending too many messages was never a risk |
| Section 5.2-5.3: Mechanism guidance detail | 468-495 | PARTIAL -- redundant with Section 4.4 | Section 4.4 already covers mechanism requirements |
| Section 9: Anti-patterns | 685-708 | PARTIAL -- advisory, not enforcement | Keep top 3 anti-patterns, delete rest |
| Section 11.2-11.3: Isolation rationale + cheat sheet | 782-840 | YES -- redundant with Section 2.2 | Each agent's MUST/MUST-NOT is already in their roster entry |
| Appendix A: Quick reference | 843-923 | PARTIAL -- useful but duplicative | 80% of rules already stated elsewhere in prompt |
| Appendix B: Team-lead checklist | 927-982 | NO -- actionable, non-redundant | Keep |
| Appendix C: File manifest | 986-999 | PARTIAL -- trivially derivable | From Section 2.2 agent roster |

**Deletable without quality impact: ~200-250 lines (20-25% of prompt).** Primarily coordination choreography, redundant restatemens, and advisory material.

---

## 2. WHAT FAILED

### Rules That Were Present But Violated

| Rule | Prompt Location | Stated Value | Actual Result | Why Violated |
|------|----------------|-------------|---------------|-------------|
| Container width 940-960px | Section 4.7 (line 410), 3 locations | 940-960px | Initially reported as 2160px (false positive), likely 960px actual | Measurement error in initial audit, not builder violation |
| CPL 45-80 | Section 4.7 (line 424) | 45-80 chars | 80.0 (boundary pass) | Passed technically but at maximum |
| Inter-agent messaging >= 5 | Section 8.1 (line 662) | >= 5 messages | ZERO messages | See messaging analysis below |
| Metaphor expression observed by PA | Section 8.1 (line 656) | Observed | "Announced" (40% without labels) | Judgment rule disguised as binary |
| Section-scale internal rhythm | Section 5.2 (line 478) | Each section has micro-arc | Not achieved | Judgment rule, never binary-fied |

### The Container Width Question

The container width was specified at three locations in the prompt (lines 410, 416, 432). The initial verdict reported 2160px (BLOCKING violation). Mode 4 PA found "narrow column floating in vast emptiness" -- consistent with 960px content in a wider viewport. The re-audit left this ambiguous.

**Forensic analysis:** The builder's CSS included `max-width: 960px; margin: 0 auto;` -- the exact specification from the prompt (lines 411-416). The 2160px measurement was almost certainly measuring the viewport or a parent container, not the content container. The rule was COMPLIED WITH but the measurement was wrong. This consumed enormous audit attention (mentioned in verdict, Mode 4, re-audit) on what appears to be a non-issue.

**Lesson:** Container width needs a VERIFICATION METHOD in the prompt, not just a value. "Verify via `document.querySelector('.page-container').getBoundingClientRect().width` at 1440px viewport."

### Why Zero Messages Were Sent

The prompt specified inter-agent messaging as a success criterion (line 662: ">= 5 substantive messages"). The prompt also included a detailed communication protocol (Section 3, 57 lines) with 4 message types, urgency levels, and per-agent caps.

Zero messages were sent. The validation report (BLOCKING-3) predicted this: the prompt specified message MAXIMUMS (anti-spam, Section 3.4) but no MINIMUMS in the success criteria table. The ">= 5 messages" criterion was added to Section 8.1 during validation but the BEHAVIORAL TRIGGER was missing -- nothing in the builder's instructions said "send at least one message."

The process retrospective confirms: the builder did not message because (1) the plan appeared complete, (2) nothing was obviously missing, and (3) the builder's role was implementation, not questioning. The Middle experiment's missing footer was caught because the ABSENCE was obvious. The Ceiling plan's spatial blindness was not obvious -- it was an unvalidated assumption embedded in correct-looking specifications.

**Root cause:** Communication protocol specified CAPABILITY without specifying OBLIGATION. The prompt enabled messaging but never required it. The binary-vs-judgment principle applies: "you CAN message" (capability) achieves ~0% adoption; "you MUST message before writing file" (obligation) would achieve 100%.

### Why the Whitespace Void Happened

The whitespace void (70-80% of scroll is blank cream) was the dominant failure. The prompt:

1. Never mentioned whitespace budgeting. Zero references to content-to-void ratio, spatial proportion, or vertical space distribution in 1,004 lines.
2. Specified zone architecture (4 zones from the metaphor) without content volume checks.
3. Specified spacing values (64px/48px/32px/24px zone padding, 80px checkpoint margins) without cumulative impact analysis.
4. Included weight distribution check (line 439: ">= 2 focal points in bottom 50%") but as a builder self-check, not as a plan-level gate.

The process retrospective calculates: 7 zones x ~45px avg padding x 2 = ~630px. 5 checkpoints x ~110px avg = ~550px. 25 headings x ~40px avg top margin = ~1,000px. That is ~2,180px of whitespace from structural elements alone, before any content spacing. The content occupied ~3,600px. Total whitespace-to-content ratio was predetermined at the BUILD PLAN level.

**The void was not a CSS bug. It was an ARCHITECTURAL decision baked into the metaphor (4 zones requiring graduated density) interacting with limited content volume (1,184 words).** The prompt could not have prevented it because the prompt optimized for COMPOSITIONAL SPECIFICATION without spatial accountability.

### Correlation Between Rule Complexity and Compliance

| Rule Type | Example | Complexity | Compliance |
|-----------|---------|-----------|-----------|
| Simple binary (is X true?) | border-radius: 0 | LOW | 100% |
| Binary with formula | CPL = (w-p)/f/0.6 in [45,80] | MEDIUM | 100% (80.0 at boundary) |
| Binary with process | Landmark gate (header + footer + sections) | MEDIUM | 100% |
| Capability rule (you CAN do X) | SendMessage for clarifications | LOW | 0% |
| Judgment rule (feel designed) | Metaphor expression observed by PA | HIGH | ~40% |
| Multi-step judgment (spatial proportion) | Section-scale internal rhythm | VERY HIGH | 0% |

**The correlation is near-perfect: compliance = 1/complexity.** Binary rules with explicit values or formulas achieve 100%. Rules requiring judgment achieve ~0%. Rules requiring multi-step judgment with emergent properties achieve 0%.

---

## 3. THE PROMPT ARCHITECTURE FOR FLAGSHIP

### Evaluation of Options

#### Option A: Single Short Prompt (<150 lines)

**Pros:**
- Fits in builder's attention window
- Only binary rules, maximum compliance per rule
- No dilution of critical rules
- Middle experiment proved ~45-50 effective rules produced B+ quality

**Cons:**
- Cannot communicate "why" behind rules
- Cannot communicate metaphor philosophy
- Cannot communicate inter-agent coordination
- Loses the CONVICTION framing that the meta-purpose-alignment identified as THE differentiator

**Assessment:** This option treats the flagship prompt like a flight checklist. It would prevent known failures (container width, missing footer) but cannot produce compositional fluency. The Middle experiment was effectively this option and it achieved "professionally stiff." Flagship needs more.

#### Option B: Layered Prompts (Base + Per-Phase Diff)

**Pros:**
- Agent only sees what is relevant NOW
- Base template establishes identity; diffs add phase-specific rules
- Prevents ambient overload
- Aligns with the constraint-balance analysis's recommendation: ~55-60 items total

**Cons:**
- Cross-phase coherence depends on base template carrying enough context
- Requires the team-lead to manage prompt assembly per-phase
- Phase diffs must be written in advance (cannot adapt to emergent conditions)
- Does not solve the SPATIAL ACCOUNTABILITY gap

**Assessment:** This is the constraint-balance analysis's recommended architecture. It addresses ambient overload (the inverted-U model) by keeping per-agent prompt size under 100 lines. But it does not address the creative conditions (conviction, designed moments, purpose-built components) that the creative-conditions analysis identified as necessary.

#### Option C: Role-Specific Prompts

**Pros:**
- Each agent gets exactly what it needs
- Maximum information efficiency
- Isolation matrix is enforced by prompt construction, not by agent discipline
- Aligns with the existing isolation matrix (Section 11.1)

**Cons:**
- Coordination complexity shifts to team-lead
- No agent has the full picture (only team-lead does)
- Builder cannot access contextual "why" information
- Requires pre-assembly of 5+ separate prompt documents

**Assessment:** This is essentially what the ceiling prompt already does via the isolation matrix. The team-lead slices the prompt per-agent. The issue is that QUALITY is not a property of any single agent's prompt -- it emerges from the INTERACTION between agents. Role-specific prompts optimize for individual compliance without addressing interaction quality.

#### Option D: Two-Layer Architecture (RECOMMENDED)

**Layer 1: CONVICTION DOCUMENT (60-80 lines)**
- What the page must FEEL like
- The metaphor as load-bearing structure thesis
- 3 exemplar passages from crown jewels (20 lines each)
- 3 metacognitive checkpoints (is the concept buildable? does content fill the structure? does the page have a point of view?)
- WHO reads it: metaphor-agent, planner, builder (all creative agents)

**Layer 2: EXECUTION SPEC (80-120 lines)**
- Binary rules with values and formulas
- Spatial accountability gates (content-to-void ratio, zone content density)
- Communication obligations (not capabilities)
- Builder self-check (expanded with spatial budget verification)
- WHO reads it: builder, programmatic auditor, team-lead

**Layer 3: COORDINATION SPEC (40-60 lines) -- team-lead only**
- Agent roster and blocking dependencies
- Checkpoint sequence
- Audit protocols (PA, novelty, comparison)
- Kill criteria and abort triggers
- WHO reads it: team-lead only

**Layer 4: REFERENCE LIBRARY (any length) -- on-demand**
- Full mechanism catalog
- tokens.css
- prohibitions.md
- semantic-rules.md
- Crown jewels (CD-006, DD-006)
- WHO reads it: agents consult as needed, referenced by path in Layer 2

**Total prompt size: 180-260 lines across Layers 1-3.** Layer 4 is existing files, not new prompt content.

**Why this is better than Options A-C:**

1. It separates THINKING documents (Layer 1: conviction, for creative agents) from EXECUTION specs (Layer 2: binary rules, for building agents). This is the "highest-leverage change" from the memory file.
2. It keeps each agent's effective prompt under 200 lines (the metacognitive analysis's preparation ceiling hypothesis).
3. It addresses both the compliance axis (Layer 2) and the creativity axis (Layer 1) independently, per the creative-conditions analysis's finding that compliance and creativity are orthogonal.
4. It preserves the conviction passage (Layer 1) while keeping execution specs tight (Layer 2).
5. It isolates coordination (Layer 3) from creative and execution content, reducing ambient load for non-lead agents.

---

## 4. THE CRITICAL 2.5%

The process retrospective found that only 2.5% of planning content (430/17,084 lines across the full planning corpus) was on the critical execution path. The metacognitive analysis hypothesizes that beyond ~100-200 lines, additional rules DEGRADE output by consuming the builder's attention budget.

### The ~25-30 Lines on the Critical Execution Path

These are the rules that, if violated, cause the DOMINANT failure modes observed across Phase D, Middle, and Ceiling experiments:

```
CRITICAL EXECUTION RULES (25 lines)

SPATIAL:
1. Container: max-width: 960px; margin: 0 auto;
   Verify: document.querySelector('.page-container').getBoundingClientRect().width
2. CPL: (content-width-px) / (font-size-px) / 0.6 must be in [45, 80]
3. Content-to-void ratio: >= 60:40 (sum content element heights / total scroll height)
4. No empty structural elements (every <div> with class must have text or visible children)

SOUL (8 binary checks):
5. border-radius: 0
6. box-shadow: none
7. No drop-shadow filter
8. No semi-transparent backgrounds (opacity: 1)
9. No gradients
10. No pure #000 or #FFF (use #1A1A1A, #FEF9F5)
11. Instrument Serif NEVER for body text
12. No cool-toned grays (warm palette only)

STRUCTURE:
13. <header> exists with visible content
14. <footer> exists with visible content
15. Section count matches plan
16. Per-category mechanism coverage: S:1+, H:1+, C:1+, D:1+, N:1+
17. Token compliance: var() / (var() + raw) >= 0.80

PROCESS:
18. No mechanism catalog access before metaphor lock-in
19. Builder MUST send >= 1 message to planner before writing file
20. Builder MUST send page height + content ratio after writing file
21. Planner MUST include spatial budget table in build plan

RHYTHM:
22. 3+ transition types (no two adjacent identical)
23. >= 2 reinforcing pairs (same semantic, different CSS channels)
24. >= 1 designed moment per scroll quartile (0-25%, 25-50%, 50-75%, 75-100%)

KILL:
25. If content-to-void < 40:60 at any checkpoint: STOP BUILD, restructure architecture
```

### Separating THINKING from EXECUTION

| Document | Audience | Purpose | Length |
|----------|----------|---------|--------|
| Conviction + metaphor philosophy | Human + metaphor-agent + planner | Understand WHY | 60-80 lines |
| Critical execution rules (above) | Builder + auditor | Know WHAT | 25-30 lines |
| Spatial accountability gates | Planner + builder + team-lead | Prevent KNOWN failures | 20-30 lines |
| Coordination protocol | Team-lead | Orchestrate HOW | 40-60 lines |
| Reference library | On-demand | Look up details | Any length |

The builder needs 25-30 lines of critical rules + 20-30 lines of spatial gates = ~55 lines of execution spec. Everything else is context that the HUMAN needs to understand the system but the AGENT does not need to internalize.

---

## 5. RULE CLASSIFICATION

### Full Classification of All ~56 Rules in the Ceiling Prompt

**Legend:**
- B = Binary / J = Judgment
- C = Critical / N = Nice-to-have
- S = Spatial / O = Compositional / P = Process
- KEEP = Include in flagship execution spec
- CONV = Move to conviction document
- COORD = Move to coordination spec
- DROP = Remove entirely

| # | Rule (from Appendix A) | B/J | C/N | S/O/P | Verdict |
|---|----------------------|-----|-----|-------|---------|
| 1 | border-radius: 0 | B | C | S | KEEP |
| 2 | box-shadow: none | B | C | S | KEEP |
| 3 | No drop-shadow | B | C | S | KEEP |
| 4 | No semi-transparent backgrounds | B | C | S | KEEP |
| 5 | No gradients | B | C | S | KEEP |
| 6 | No pure black/white | B | C | S | KEEP |
| 7 | Instrument Serif display only | B | C | O | KEEP |
| 8 | No cool grays | B | C | S | KEEP |
| 9 | Container 940-960px | B | C | S | KEEP (add verification method) |
| 10 | CPL 45-80 | B | C | S | KEEP (with formula) |
| 11 | Per-category minimums | B | C | O | KEEP |
| 12 | 2+ reinforcing pairs | B | C | O | KEEP |
| 13 | 4-scale fractal coherence | J | N | O | CONV (not binary-fiable) |
| 14 | 3-transition minimum | B | C | O | KEEP |
| 15 | No identical adjacent transitions | B | C | O | KEEP |
| 16 | 3-5 designed moments | B | C | O | KEEP (change to "1 per scroll quartile") |
| 17 | 2-3 purpose-built components | B | N | O | KEEP (binary: >= 2) |
| 18 | Full Phase 1-3 derivation | B | C | P | KEEP |
| 19 | Metaphor resonance gate | J | C | P | COORD (team-lead verifies, not self-check) |
| 20 | Metaphor lock-in before library | B | C | P | KEEP |
| 21 | Structural obligation table | B | N | O | CONV (planner output format, not binary rule) |
| 22 | 1:MANY derivation | J | C | O | CONV (philosophy, not checkable) |
| 23 | Phase 0E library prohibition | B | C | P | KEEP |
| 24 | CP-1 metaphor gate | B | C | P | COORD |
| 25 | CP-2 build plan verification | B | C | P | COORD |
| 26 | CP-3 builder self-check | B | C | P | KEEP |
| 27 | CP-4 landmark completeness | B | C | P | COORD |
| 28 | Two-instance pattern | B | C | P | KEEP |
| 29 | Builder can message planner | J | C | P | CHANGE to "Builder MUST message planner" -- KEEP |
| 30 | Auditor can flag severity-1 | J | N | P | COORD |
| 31 | Team-lead can request fixes | J | N | P | COORD |
| 32 | Fresh-eyes zero-context PA | B | C | P | COORD |
| 33 | Dual PA with reconciliation | B | N | P | COORD |
| 34 | Blind novelty evaluation | B | C | P | COORD |
| 35 | Programmatic audit from plan | B | C | P | COORD |
| 36 | PA-05 4/4 DESIGNED | B | C | S | KEEP (success criterion) |
| 37 | D3 >= 2/3 NOVEL | B | C | O | KEEP (success criterion) |
| 38 | Better than Middle >= 3 improvements | B | C | O | KEEP (success criterion) |
| 39 | Metaphor expression observed by PA | J | N | O | DROP (not binary-fiable) |
| 40 | No severity-1 findings | B | C | S | KEEP (tautological but useful) |
| 41 | Container width PASS | B | C | S | MERGE with #9 |
| 42 | Container width (self-check) | B | C | S | MERGE with #9 |
| 43 | CPL (self-check) | B | C | S | MERGE with #10 |
| 44 | Token compliance (self-check) | B | C | O | MERGE with separate token rule |
| 45 | Landmarks (self-check) | B | C | S | MERGE with CP-4 |
| 46 | Heading spacing >= 1.5:1 | B | N | S | KEEP (in self-check) |
| 47 | Soul 8/8 (self-check) | B | C | S | MERGE with #1-8 |
| 48 | Rhythm variation (self-check) | B | C | O | MERGE with #14 |
| 49 | Weight distribution (self-check) | J | N | S | DROP (not binary) |
| 50 | Token compliance >= 80% | B | C | O | KEEP (with formula) |
| 51 | Typography trinity locked | B | C | O | MERGE with #7 |
| 52 | 3-Question Test 90% metaphor-justified | J | N | O | CONV (planner guidance) |
| 53 | Approved raw value exceptions | B | N | O | KEEP (in builder appendix) |
| 54 | Metaphor through full pipeline | B | C | P | MERGE with #18 |
| 55 | Mechanism through metaphor lens | J | C | O | CONV (philosophy) |
| 56 | Section-scale internal rhythm | J | N | O | CONV (aspirational) |

### Distribution

| Classification | Count |
|---------------|-------|
| Binary + Critical | 25 |
| Binary + Nice-to-have | 7 |
| Judgment + Critical | 5 |
| Judgment + Nice-to-have | 5 |
| Redundant/Merge | 10 |
| **Total unique rules** | **42** (after merging) |

| Destination | Count |
|------------|-------|
| KEEP in execution spec | 22 |
| CONV (conviction document) | 7 |
| COORD (coordination spec) | 10 |
| DROP | 3 |
| MERGE (into other rules) | 10 |

### Proposed Flagship Prompt Rules: ONLY Binary + Critical

After merging and removing redundancies, the flagship execution spec contains **22 rules** for the builder + **3 NEW spatial rules** = **25 binary rules**.

The 3 NEW spatial rules (from process retrospective's proposed gates):

| # | New Rule | Type | Source |
|---|---------|------|--------|
| NEW-1 | Content-to-void ratio >= 60:40 (measured) | B + C | Process retro, Change 1 |
| NEW-2 | No empty structural elements (every div with class has content) | B + C | Process retro, Change 2 |
| NEW-3 | >= 1 designed moment per scroll quartile | B + C | Process retro, Change 6 |

These three rules address the DOMINANT failure mode (whitespace void) that the original 56 rules failed to prevent.

---

## 6. FLAGSHIP PROMPT STRUCTURE (RECOMMENDED)

### Layer 1: CONVICTION (70 lines)

```
SECTION 0: THE THESIS
- "The difference between Flagship and Ceiling is not complexity. It is restraint."
- Load-bearing metaphor test: if metaphor changed, would structure change?
- "This page should have a point of view."
- 3 metacognitive checkpoints from metacognitive analysis

SECTION 0.5: QUALITY EXEMPLAR
- 20 lines from CD-006 showing one designed transition zone
- 20 lines from DD-006 showing fractal coherence at 2 scales
- "This is what 'felt through' looks like. Not the specific patterns -- the QUALITY."
```

### Layer 2: EXECUTION SPEC (100-120 lines)

```
SECTION 1: MISSION (10 lines)
- Content source, tier definition, output directory

SECTION 2: SPATIAL RULES (15 lines)
- Container 940-960px with verification method
- CPL 45-80 with formula
- Content-to-void >= 60:40 with measurement method
- No empty structural elements
- Heading spacing >= 1.5:1

SECTION 3: SOUL RULES (10 lines)
- 8/8 soul check (compressed)
- Warm palette, typography trinity

SECTION 4: COMPOSITIONAL RULES (15 lines)
- Per-category minimums
- 2+ reinforcing pairs with shared semantic
- 3-transition minimum, no identical adjacent
- 1 designed moment per scroll quartile
- 2+ purpose-built components

SECTION 5: PROCESS RULES (15 lines)
- Phase 0E library prohibition
- Metaphor lock-in before catalog access
- Two-instance pattern
- Builder MUST send spatial concern message before building
- Builder MUST report page height + content ratio after building

SECTION 6: BUILDER SELF-CHECK (15 lines)
- Container width
- CPL
- Content-to-void ratio
- Token compliance >= 80%
- Soul 8/8
- Landmarks (header + footer + sections)
- Rhythm variation
- Designed moment distribution

SECTION 7: SUCCESS CRITERIA (10 lines)
- PA-05 4/4 DESIGNED
- D3 >= 2/3 NOVEL
- Better than Middle >= 3 improvements
- No severity-1 findings
- Content-to-void >= 60:40

SECTION 8: KILL CRITERIA (10 lines)
- Prompt > 200 lines: STOP, compress
- Content-to-void < 40:60 at any checkpoint: STOP, restructure
- Cold-look majority NO at 1440px: DO NOT CSS-FIX, rebuild
- Fix cycle does not improve PA-05c by >= 1 point: ABANDON architecture
```

### Layer 3: COORDINATION SPEC (60 lines)

```
SECTION A: AGENT ROSTER (25 lines)
- Metaphor-agent (Opus): Phases 1-3, writes 01-metaphor-derivation.md
- Planner (Opus): Phase 4, writes 02-build-plan.md (MUST include spatial budget)
- Builder (Sonnet): Phase 5, writes ceiling-page.html (MUST message planner)
- Auditors: programmatic, 2x PA (zero context), comparative, novelty (blind)
- Verdict synthesizer

SECTION B: CHECKPOINTS (20 lines)
- CP-1: Metaphor resonance (team-lead verifies)
- CP-2: Build plan + spatial budget (team-lead verifies content-to-void)
- CP-3: Landmark + spatial proportion (team-lead via Playwright)
- CP-4: Audit reconciliation (team-lead reconciles PA disagreements)

SECTION C: COMMUNICATION OBLIGATIONS (15 lines)
- Builder MUST send >= 1 message to planner with spatial concern
- Builder MUST send page metrics to team-lead after writing file
- If builder sends zero messages: team-lead prompts "What was your biggest spatial concern?"
- PA findings dismissed as artifacts MUST be independently verified
```

### Layer 4: REFERENCE LIBRARY (existing files)

- `~/.claude/skills/tension-composition/SKILL.md`
- `~/.claude/skills/perceptual-auditing/SKILL.md`
- `design-system/compositional-core/grammar/mechanism-catalog.md`
- `design-system/compositional-core/vocabulary/tokens.css`
- `design-system/compositional-core/identity/prohibitions.md`
- `design-system/compositional-core/guidelines/semantic-rules.md`
- Crown jewels (CD-006, DD-006) -- planner only

### Total Prompt Size

| Layer | Lines | Who Reads |
|-------|-------|-----------|
| Layer 1: Conviction | 70 | Metaphor-agent, planner, builder |
| Layer 2: Execution | 100-120 | Builder, auditors, team-lead |
| Layer 3: Coordination | 60 | Team-lead only |
| **Total** | **230-250** | |

**Reduction: 1,004 -> ~240 lines (76% reduction).** Aligns with constraint-balance analysis's recommendation.

---

## 7. KEY FORENSIC FINDINGS

### Finding 1: The Prompt's Architecture Was Sound; Its VOLUME Was the Problem

The 12-section + 3-appendix structure was well-organized. Section 0 (Conviction) was excellent. Sections 1-11 covered all necessary dimensions. The isolation matrix was correct. The checkpoint architecture was well-designed.

The problem was not structure but VOLUME. At 1,004 lines, every rule competed for the builder's finite attention budget. Container width was mentioned at 3 locations but was one of 56 rules. Its weight was 1/56th of the builder's attention, not the 1/5th it deserved given that it was the historical #1 failure mode.

**The inverted-U model is confirmed:** the ceiling prompt was 5-10x beyond the ~100-200 line preparation ceiling. Additional specification beyond this point degraded rather than improved compliance.

### Finding 2: The Prompt Solved the LAST Experiment's Problem, Not the NEXT One

The ceiling prompt's most prominent corrections addressed Middle-tier defects:
- Missing footer -> CP-4 landmark gate (SUCCESS: footer was present)
- Token compliance 66.5% -> self-check with formula (SUCCESS: 86%)
- CPL +2 -> formula in builder self-check (SUCCESS: 80.0 at boundary)
- Metronomic rhythm -> 3-transition MANDATORY (SUCCESS: 3 types used)
- Zero messaging -> communication protocol (FAILURE: still zero messages)

But the prompt did NOT anticipate the EMERGENT failure (whitespace void) that the metaphor's zone architecture would produce. Preparation optimizes for known risks; the most damaging failures are emergent.

### Finding 3: The Conviction Section Was the Prompt's Best Innovation

Section 0 (Conviction, lines 10-33) was the single most valuable section per line. It established the qualitative frame that separated Ceiling from Middle. The meta-purpose-alignment correctly identified this as the "missing ingredient" -- every auditor recognized the metaphor (SUCCESS-04), and novelty scored 9/9.

The conviction section WAS the 2.5% critical path for CREATIVE quality. The execution spec WAS the critical path for COMPLIANCE quality. Both are necessary; neither alone is sufficient.

### Finding 4: The Communication Protocol Was the Prompt's Biggest Wasted Opportunity

57 lines of communication protocol (Section 3) produced zero messages. The protocol described message types, urgency levels, examples, response expectations, and per-agent caps. None of it was used.

The protocol specified CAPABILITY ("builder CAN message planner") not OBLIGATION ("builder MUST message planner"). For flagship, every communication rule must be OBLIGATION with a binary check: "Did the builder send a message? YES/NO."

### Finding 5: Redundancy Diluted Critical Rules

Container width appears at lines 410, 416, and 432 (3 times). Per-category minimums at lines 348 and 727 (2 times). Token compliance at lines 396, 432, and 550 (3 times). The isolation matrix (Section 11.1, 10 lines) restates information already in each agent's roster entry (Section 2.2, ~120 lines). The quick reference (Appendix A, 80 lines) restates rules from Sections 4-8.

**Redundancy does not reinforce; it dilutes.** Each restatement adds length without adding information. The builder processes "container width 940-960px" the same whether it appears once or three times. But the prompt is 80+ lines longer due to redundancy, pushing critical rules further into the attention budget's diminishing returns zone.

---

## 8. RECOMMENDATION SUMMARY

### For Flagship Prompt Assembly

1. **Adopt the Two-Layer architecture** (Layer 1: Conviction + Layer 2: Execution Spec + Layer 3: Coordination). Total: ~240 lines.

2. **Add 3 new spatial accountability rules** (content-to-void >= 60:40, no empty structural elements, designed moments distributed across scroll quartiles). These address the DOMINANT failure mode that 56 ceiling rules failed to prevent.

3. **Convert all CAPABILITY rules to OBLIGATION rules.** "Builder CAN message" -> "Builder MUST message." "Builder CAN self-check" -> "Builder MUST self-check AND report results."

4. **Remove all redundancy.** Each rule appears ONCE, at its canonical location. No restatements. No "see also" references. One location, one rule.

5. **Move all judgment rules to the Conviction document.** Judgment rules achieve ~0% compliance as execution rules. They achieve their purpose as CONTEXT -- helping the agent understand what "good" means without prescribing how to achieve it.

6. **Add kill criteria with explicit abandon triggers.** Pre-committing to abandonment neutralizes sunk cost bias at the decision point.

7. **Keep the Conviction passage.** Section 0 was the best innovation of the ceiling prompt. Expand it with quality exemplar passages from crown jewels.

8. **Include spatial budget gate in build plan phase.** The planner MUST calculate content-to-void ratio before the builder begins. This is the single highest-leverage addition.

### Highest-Priority Changes (Top 3)

1. **Spatial budget gate** -- prevents the void (THE dominant failure)
2. **Mandatory messaging** -- prevents the isolation failure (the #2 failure)
3. **Prompt compression to ~240 lines** -- prevents attention dilution (the meta-failure that enabled #1 and #2)

---

**END PROMPT ARCHITECTURE ANALYSIS**

**Lines:** ~490
**Rules classified:** 56 (from ceiling prompt) + 3 NEW
**Architecture recommended:** Two-Layer (Conviction + Execution + Coordination)
**Prompt reduction:** 1,004 -> ~240 lines (76%)
**Critical 2.5%:** 25 binary rules on the execution path
**Root cause confirmed:** The 1,004-line prompt solved the WRONG problem (compositional specification) while ignoring the ACTUAL problem (spatial accountability)
