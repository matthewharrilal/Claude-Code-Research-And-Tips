# PA Skill Audit: Process vs Channeling vs Compression vs Pipeline-Assumption

## Executive Summary

The Perceptual Auditing skill is fundamentally different from TC. Where TC's problems are channeling and compression (steering creative output toward specific patterns), PA's core is **genuinely useful evaluation process** wrapped in **excessive pipeline infrastructure**. The skill's experiential questions, language constraints, and fresh-eyes principle are sound evaluation thinking. But ~60% of the total line count across all files serves multi-agent orchestration that only makes sense in the old pipeline architecture.

PA has **minimal channeling problems** compared to TC. The questions are open-ended and perception-driven. However, PA does carry **bias from past experiments** and makes **deep assumptions about multi-agent architecture** that must change for standalone invocation.

---

## File Inventory

| File | Lines | Version | Primary Content |
|------|-------|---------|----------------|
| SKILL.md | 525 | v2 (legacy) | 20 experiential questions, bridging prompts, weaver protocol |
| PROTOCOL.md | 719 | v3 (active) | 28 questions, cold look, anti-patterns, sovereignty, language rules |
| GATES.md | 534 | v3 (active) | 7 binary validation gates |
| TEAM.md | 840 | v3 (active) | Team topologies, agent prompts, Playwright management |
| CLAUDE.md | 123 | v3 (active) | Routing/configuration |
| ANTI-QUESTIONS.md | 107 | v2 (legacy) | Anti-questions + anti-pattern taxonomy |
| EMBEDDED-PROMPT.md | 133 | v2 (legacy) | Standalone Q1-Q5 block for embedding |
| **Total** | **~2,981** | | |

---

## Section-by-Section Classification

### SKILL.md (v2 Legacy) -- 525 lines

| Section | Lines | Classification | Reasoning |
|---------|-------|---------------|-----------|
| Opening warning ("If consulting BEFORE building: wrong") | 1-11 | **PROCESS** | Genuinely useful framing. Prevents audit-optimized building. |
| Fresh-Eyes Principle | 12-18 | **PROCESS** | Core evaluation philosophy. Context-starving is sound audit methodology. |
| The One Rule + Three Laws | 19-38 | **PROCESS** | Foundational evaluation thinking. Screenshot-required, plain-language, non-designer-validatable. |
| Section 0: Experiential Pass | 42-88 | **PROCESS** | Cold Look protocol, scroll-through. Pure evaluation methodology. |
| 20 Experiential Questions (E-01 to E-20) | 91-204 | **PROCESS** | Open-ended perceptual questions. Zero channeling -- each invites genuine perception. |
| Responsive Supplement (E-R1 to E-R3) | 207-222 | **PROCESS** | Multi-viewport evaluation. Sound methodology. |
| Auditor Deployment (5 auditors, question assignments) | 225-270 | **PIPELINE-ASSUMPTION** | Assumes 5 separate auditor agents with specific question assignments. Only makes sense in multi-agent architecture. |
| Language Constraint | 289-308 | **PROCESS** | Forces perceptual language. Genuinely useful evaluation discipline. |
| The Weaver: Creative Synthesis | 311-423 | **MIXED: PROCESS + PIPELINE-ASSUMPTION** | The weaver's synthesis methodology (experience portrait, creative direction, AMPLIFY/RELEASE/DEEPEN, verdict) is genuine evaluation PROCESS. But the format assumes a dedicated weaver agent reading 5 separate auditor reports. |
| Bridging Questions: Writing Prompts | 426-466 | **PROCESS** | Builder self-reflection after creating artifact. Dimensions (a)-(f) are genuine creative evaluation. |
| Bridging Questions: Receiving Prompts | 468-485 | **PROCESS** | Orientation for refinement builder. Creative continuation, not compliance. |
| Metaphor Awareness | 488-504 | **PROCESS** | Structural/atmospheric/announced/none classification. Sound evaluation thinking. |
| System Connection Diagram | 507-524 | **PIPELINE-ASSUMPTION** | Shows multi-agent pipeline flow (TC -> builder -> auditors -> weaver -> refine builder). Only relevant in pipeline context. |

**SKILL.md Summary:** ~75% PROCESS, ~20% PIPELINE-ASSUMPTION, ~5% MIXED. Very little channeling. The v2 questions are genuinely open-ended.

---

### PROTOCOL.md (v3 Active) -- 719 lines

| Section | Lines | Classification | Reasoning |
|---------|-------|---------------|-----------|
| The One Rule | 14-23 | **PROCESS** | "React to what you SEE before you check what you KNOW." Core principle. |
| Section 1: Modes of Invocation | 27-38 | **PIPELINE-ASSUMPTION** | 4 modes (Standalone/Standard/Quick/Embedded) with agent counts and timing. Assumes multi-agent orchestration. |
| Section 2: Pre-Flight Checklist | 40-63 | **PIPELINE-ASSUMPTION** | HTTP server, Gate 1, output directories, lock sheet generation. Mechanical orchestration steps. |
| Section 3: Cold Look Protocol | 66-136 | **PROCESS** | The cold look methodology, temporal ordering, contamination detection. Pure evaluation process. |
| Section 4: Scroll-Through Protocol | 139-173 | **PROCESS** | 5 dimension passes (readability, spatial balance, hierarchy, consistency, ship test). Sound evaluation methodology. |
| Section 5: The 28 Perceptual Questions | 177-264 | **PROCESS** | All 28 questions (PA-01 to PA-28) are open-ended perceptual questions. Zero channeling. Each catches a specific failure mode without steering toward a specific conclusion. |
| Section 6: Dual Severity Track | 266-301 | **PROCESS** | Perception Track vs Rule Track. Useful severity classification. |
| Section 7: Sovereignty Principle | 303-333 | **PROCESS** | ALWAYS-LOCKED / LOCKED / CHALLENGEABLE. Sound evaluation framework for what can be challenged. |
| Section 8: Anti-Patterns (23 failure modes) | 335-458 | **PROCESS** | AP-01 through AP-23. Each identifies a real failure mode in perceptual evaluation. Genuinely useful. |
| Section 9: Embedded Mode (Q1-Q3) | 460-499 | **PROCESS** | Lightweight self-audit. Useful for any visual-output agent. |
| Section 10: Lock Sheet Generation | 501-538 | **PIPELINE-ASSUMPTION** | Assumes separate "Research Contextualizer" agent generating lock sheets. The CLASSIFICATION logic (traces to formal finding -> LOCKED, etc.) is PROCESS; the agent instructions are PIPELINE-ASSUMPTION. |
| Section 11: Weaver-Synthesizer Protocol | 540-619 | **MIXED: PROCESS + PIPELINE-ASSUMPTION + COMPRESSION** | The synthesis methodology (contamination check, cross-reference, deduplication, ranking, concordance, sovereignty classification) is PROCESS. The audit report structure template (lines 584-619) is COMPRESSION -- it exists to transmit findings to the next pipeline stage in a standardized format. The assumption of a dedicated weaver agent is PIPELINE-ASSUMPTION. |
| Section 12: Fix Execution Protocol | 621-656 | **PIPELINE-ASSUMPTION** | Assumes separate fixer agents with exclusive file ownership, Playwright access, Q1-Q3 post-fix checks. The Q1-Q3 post-fix check itself is PROCESS; the agent topology is PIPELINE-ASSUMPTION. |
| Section 13: Forcing Questions | 658-688 | **PROCESS** | 5-level escalation for stuck auditors. Genuinely useful evaluation thinking. |
| Section 14: Language Reference | 690-719 | **PROCESS** | Perceptual words vs banned technical words. Sound evaluation discipline. |

**PROTOCOL.md Summary:** ~55% PROCESS, ~30% PIPELINE-ASSUMPTION, ~10% MIXED, ~5% COMPRESSION.

---

### GATES.md (v3 Active) -- 534 lines

| Section | Lines | Classification | Reasoning |
|---------|-------|---------------|-----------|
| Three-Layer Architecture | 30-56 | **PIPELINE-ASSUMPTION** | Layer 1/2/3 architecture assumes orchestrator checking gates between agent runs. |
| Gate 1: Playwright Alive | 70-119 | **PIPELINE-ASSUMPTION** | Pre-flight check before spawning auditor agents. Mechanical orchestration. |
| Gate 2: Screenshot Exists | 122-170 | **PIPELINE-ASSUMPTION** | Per-auditor validation. Assumes lead checks after each agent completes. |
| Gate 3: Cold Look Locked | 173-224 | **MIXED: PROCESS + PIPELINE-ASSUMPTION** | The PRINCIPLE (cold look must precede analysis) is PROCESS. The FILE-EXISTENCE check and respawn logic is PIPELINE-ASSUMPTION. |
| Gate 4: Perceptual Language | 227-293 | **MIXED: PROCESS + PIPELINE-ASSUMPTION** | The PRINCIPLE (no CSS terms in findings) is PROCESS. The grep-and-count validation and respawn logic is PIPELINE-ASSUMPTION. |
| Gate 5: Systemic Synthesis | 296-357 | **PIPELINE-ASSUMPTION** | Cross-page synthesis after 3+ pages. Entirely pipeline orchestration. |
| Gate 6: Fix Trigger | 360-411 | **PIPELINE-ASSUMPTION** | Automatic fix proposal when verdicts are severe. Pipeline routing logic. |
| Gate 7: Independent Verification | 420-479 | **PIPELINE-ASSUMPTION** | Fixer-verifier separation. Pipeline agent topology. |
| Gate Execution Summary | 482-534 | **PIPELINE-ASSUMPTION** | Timeline and quick reference for orchestrator. |

**GATES.md Summary:** ~10% PROCESS (embedded in gates 3-4), ~90% PIPELINE-ASSUMPTION. This file is almost entirely orchestration infrastructure.

---

### TEAM.md (v3 Active) -- 840 lines

| Section | Lines | Classification | Reasoning |
|---------|-------|---------------|-----------|
| Lead Rules | 14-26 | **PIPELINE-ASSUMPTION** | Lead orchestration rules. Only meaningful in multi-agent context. |
| Section 1: Team Topologies | 30-143 | **PIPELINE-ASSUMPTION** | Standalone (6 agents), Standard (3 agents), Fix Team, Cross-Page Synthesis, Fresh-Eyes. Entirely pipeline topology. |
| Section 2: Playwright Management | 145-207 | **PIPELINE-ASSUMPTION** | Sequential Playwright access, contention management. Multi-agent orchestration. |
| Section 3: Auditor Prompt Template | 209-360 | **PIPELINE-ASSUMPTION** | Complete agent prompt template with variables. Only meaningful for spawning agents. |
| Section 4: Adversarial Agent Prompt | 362-407 | **PIPELINE-ASSUMPTION** | Agent prompt for adversarial auditor. |
| Section 5: Weaver-Synthesizer Prompt | 409-467 | **PIPELINE-ASSUMPTION** | Agent prompt for weaver. |
| Section 6: Fixer Prompt | 469-528 | **PIPELINE-ASSUMPTION** | Agent prompt for fixer agents. |
| Section 7: Verification Agent Prompts | 530-617 | **PIPELINE-ASSUMPTION** | Programmatic + visual verifier prompts. |
| Section 8: Synthesis Agent Prompt | 619-663 | **PIPELINE-ASSUMPTION** | Cross-page synthesis agent prompt. |
| Section 9: Fresh-Eyes Agent Prompt | 665-708 | **PIPELINE-ASSUMPTION** | Zero-context agent prompt. |
| Section 10: Execution Checklist | 710-776 | **PIPELINE-ASSUMPTION** | Phase-by-phase orchestration checklist with timing estimates. |
| Section 11: Failure Modes and Recovery | 778-820 | **PIPELINE-ASSUMPTION** | Agent failure recovery procedures. |
| Section 12: Lock Sheet Caching | 822-840 | **PIPELINE-ASSUMPTION** | Lock sheet reuse across pages. |

**TEAM.md Summary:** ~100% PIPELINE-ASSUMPTION. This entire file is multi-agent orchestration infrastructure.

---

### ANTI-QUESTIONS.md (v2 Legacy) -- 107 lines

| Classification | Reasoning |
|---------------|-----------|
| **PROCESS** | Anti-question pairs and anti-pattern taxonomy. Genuinely useful evaluation thinking that helps distinguish real perception from disguised rule-checking. |

**ANTI-QUESTIONS.md Summary:** ~100% PROCESS.

---

### EMBEDDED-PROMPT.md (v2 Legacy) -- 133 lines

| Classification | Reasoning |
|---------------|-----------|
| **MIXED: PROCESS + PIPELINE-ASSUMPTION** | The Q1-Q5 self-audit is PROCESS. The "copy into every agent prompt" framing and the agent-type routing table is PIPELINE-ASSUMPTION. |

**EMBEDDED-PROMPT.md Summary:** ~60% PROCESS, ~40% PIPELINE-ASSUMPTION.

---

## Aggregate Classification

| Classification | Approx Lines | % of Total |
|---------------|-------------|-----------|
| **PROCESS** | ~1,250 | ~42% |
| **PIPELINE-ASSUMPTION** | ~1,450 | ~49% |
| **COMPRESSION** | ~80 | ~3% |
| **MIXED** | ~200 | ~7% |
| **CHANNELING** | ~0 | ~0% |

### Key Finding: PA Has Almost Zero Channeling

Unlike TC, which channels creative output toward specific research patterns and metaphors, PA's questions are genuinely open-ended. "What's the first thing that bothers you?" does not steer toward any particular answer. "Where does your eye go first?" does not assume a specific visual hierarchy. The 20 experiential questions (v2) and 28 perceptual questions (v3) are well-designed evaluation instruments.

The closest thing to channeling is:
1. **The soul rules reference** (ALWAYS-LOCKED: border-radius: 0, box-shadow: none) -- but this is correctly classified as LOCKED design identity, not channeling
2. **The Stripe comparison** in PA-05's "Ship Test" dimension pass -- "Next to Stripe, proud or embarrassed?" This is mild channeling toward a specific aesthetic standard, but it serves as a useful benchmark rather than steering conclusions

---

## Evaluation Questions

### 1. Does PA Have Bias from Past Experiments?

**YES, but less than TC.** Specific instances:

- **GATES.md references specific past failures by name:** "AD-004: Both Auditors Alpha and Beta fell back to source-code analysis" (Gate 1), "AD lead had 6 audit reports each mentioning width too narrow" (Gate 5), "AD fixers self-certified their work" (Gate 7). These are useful provenance notes but anchor the skill to specific past experiments.

- **PROTOCOL.md Section 7 references specific past findings:** "ALWAYS-LOCKED" rules (border-radius: 0, box-shadow: none) are design system identity rules that are correctly locked, not experimental bias.

- **No old pipeline metrics contaminate the questions.** There are no tier labels, PA-05 scores, or compliance metrics embedded in the evaluation questions themselves. The questions ask for perception, not scores.

- **TEAM.md timing estimates are based on past runs:** "~60-90 min/page" for Standalone, "~35-45 min/page" for Standard. These are empirical but may not apply in a different architecture.

**Verdict:** PA has historical anchoring in its infrastructure (gates, team topology) but NOT in its evaluation methodology. The questions and principles are clean.

### 2. Does PA Reference Old Pipeline Metrics That Should Be Removed?

**Minimally.** PA explicitly avoids numerical scores -- "No numerical scores. The verdict is a creative judgment, not a calculation" (SKILL.md line 407). The v3 verdict system (SHIP / SHIP WITH CONCERNS / DO NOT SHIP) is perception-based, not metric-based.

However:
- The Lock Sheet classification system references "formal finding (XX-F-NNN)" identifiers from the old research pipeline
- Gate 4's contamination threshold (0-3 = minor, 4+ = contaminated) is a metric, but a reasonable one for enforcing language discipline
- The audit report template (PROTOCOL.md Section 11) has a structured format that exists partly for pipeline transmission

### 3. PA's Relationship to the 7 Evaluation Lenses

The 7 evaluation lenses (conviction/direction, content depth, creative framing, evocativeness, philosophical framing, multi-window suitability, honest creative autonomy) are NOT referenced anywhere in the PA skill. PA operates on its own framework:

- **PA's framework:** 28 perceptual questions organized by tier (First Encounter, Spatial, Content-Form, Coherence, Responsiveness, Cross-Page, Adversarial)
- **PA's verdicts:** SHIP / SHIP WITH CONCERNS / DO NOT SHIP (perception-based)
- **PA's severity:** WOULD-NOT-SHIP / LOOKS-WRONG / COULD-BE-BETTER (perception-based)

The 7 lenses appear to be from the TC/building evaluation framework, not from PA. PA evaluates the VISUAL EXPERIENCE of a built artifact. The 7 lenses evaluate the CREATIVE QUALITY of content-form decisions. These are complementary but different concerns.

**Recommendation:** PA should NOT be retrofitted to use the 7 lenses. PA's perceptual framework is well-designed for its purpose. The 7 lenses should inform the BUILD process; PA should evaluate the RESULT perceptually.

### 4. Does PA Assume Multi-Agent Architecture?

**Deeply.** This is PA's primary architectural assumption:

- **5 auditors with assigned questions** (SKILL.md v2) or 4-6 auditors per page (TEAM.md v3)
- **Sequential Playwright access** across auditors
- **Weaver-Synthesizer** as a separate agent reading all auditor reports
- **Lock Sheet generation** by a separate Research Contextualizer agent
- **Fix Team** with 1 fixer per file + independent verifier
- **Fresh-Eyes Agent** as a zero-context independent agent
- **7 gates** checked by orchestrator between agent steps
- **All agent prompts** in TEAM.md are templates for spawning separate agents

**What changes when invoked standalone (single agent):**

1. **All 28 questions answered by one agent** instead of split across 5. The question quality doesn't degrade -- they're still good questions.
2. **No weaver needed** -- the single auditor synthesizes their own findings.
3. **No lock sheet agent needed** -- the auditor either has design context or doesn't. In standalone, the fresh-eyes principle is the default.
4. **No gate orchestrator needed** -- the single agent self-enforces the cold-look-first temporal ordering and language discipline.
5. **No Playwright contention** -- one agent, one browser.
6. **Fix + verify can be the same agent** or a separate pass, but not a separate agent topology.

### 5. Process vs Infrastructure

**Process (keep, extract, reuse):**
- The One Rule ("React to what you SEE before you check what you KNOW")
- Cold Look protocol (5-second gut reaction, LOCKED before analysis)
- Scroll-through with 5 dimension passes
- 28 perceptual questions (all tiers)
- Language constraint (no CSS property names)
- Anti-pattern taxonomy (23 failure modes)
- Severity tracks (Perception Track + Rule Track)
- Sovereignty principle (LOCKED vs CHALLENGEABLE)
- Forcing questions (5 levels for stuck auditors)
- Anti-questions (distinguishing perception from disguised rule-checking)
- Bridging questions (writing and receiving prompts for creative continuity)
- Metaphor awareness (structural/atmospheric/announced/none)
- Embedded Mode Q1-Q3 (lightweight self-audit)
- Weaver synthesis METHODOLOGY (experience portrait, creative direction, AMPLIFY/RELEASE/DEEPEN)

**Infrastructure (pipeline-specific, rethink for standalone):**
- 7 binary gates and orchestrator-checked validation
- Team topologies (6 agents, 3 agents, fix team, etc.)
- Agent prompt templates (auditor, adversarial, weaver, fixer, verifier, synthesis, fresh-eyes)
- Playwright management (sequential access, contention avoidance)
- Lock Sheet generation and caching
- Execution checklist and timing estimates
- Failure mode recovery procedures (respawn, reject, etc.)
- Cross-page synthesis (Gate 5)
- Fix trigger automation (Gate 6)
- Independent verification enforcement (Gate 7)

### 6. How Should PA Be Invoked After a Build?

**Recommended standalone invocation:**

**Inputs needed:**
1. The built HTML artifact (file path or URL)
2. Playwright access (to render and screenshot)
3. The PA skill's evaluation methodology (questions, cold look protocol, language constraint)
4. Optionally: the conviction brief / builder reflection (for the receiving prompts / creative continuity)

**Invocation flow (single agent):**
1. Serve the page via HTTP
2. Cold Look at 1440px (5-second gut reaction, LOCK it)
3. Scroll-through at 1440px with 5 dimension passes
4. Answer relevant perceptual questions (Tier 1 mandatory, Tier 2 for depth, Tier 3 for first-of-type)
5. Repeat cold look + scroll-through at 768px and 1024px
6. Self-check language (no CSS property names)
7. Produce: Experience Portrait + Creative Direction (AMPLIFY/RELEASE/DEEPEN) + Verdict (SHIP/REFINE/RETHINK)
8. If REFINE: creative direction feeds back to builder for next pass

**What to strip for standalone:**
- No separate weaver -- auditor produces the synthesis directly
- No lock sheet agent -- either context-free (fresh-eyes) or context-aware (read design conventions inline)
- No gate orchestrator -- self-enforce temporal ordering
- No agent prompts or team topologies
- No Playwright contention management (single agent)

### 7. Channeling or Bias Issues Similar to TC?

**PA has far less channeling than TC.** The key differences:

| Dimension | TC Problem | PA Status |
|-----------|-----------|-----------|
| **Vocabulary channeling** | TC channels toward specific mechanisms, patterns, metaphors from research corpus | PA questions are open-ended, domain-agnostic |
| **Output format channeling** | TC produces structured conviction briefs in specific formats | PA produces prose descriptions in perceptual language (healthy constraint) |
| **Reference anchoring** | TC references specific showcase pages, mechanism catalog, scale-channel theory | PA references only the rendered page (fresh-eyes principle) |
| **Metric bias** | TC embedded tier labels, compliance scores | PA explicitly rejects numerical scores |
| **Past experiment bias** | TC carries compression artifacts from 50+ agent research phases | PA carries infrastructure artifacts from past orchestration failures, but questions are clean |

**The one subtle bias:** PA's anti-pattern taxonomy (AP-01 through AP-23) was derived from specific past failures (AD audit, OD audit). While each anti-pattern is genuinely useful, the taxonomy is weighted toward failures that happened to be observed, not a complete taxonomy of possible failures. New failure modes not in the list won't be caught by anti-pattern detection. This is a **coverage gap**, not channeling.

---

## Structural Recommendations

### What to Keep (extract into combined skill)

1. **The One Rule** -- "React to what you SEE before you check what you KNOW." (5 lines)
2. **Cold Look Protocol** -- 5-second gut reaction, LOCK, checkpoint write. (~40 lines)
3. **5 Dimension Passes** for scroll-through. (~20 lines)
4. **The 28 Perceptual Questions** -- all tiers, with "What It Catches" annotations. (~90 lines)
5. **Language Constraint** -- banned words + replacement words. (~30 lines)
6. **Anti-Pattern Taxonomy** -- all 23, condensed. (~50 lines)
7. **Anti-Questions** -- the invalid/valid pairs. (~20 lines)
8. **Severity Tracks** -- WOULD-NOT-SHIP / LOOKS-WRONG / COULD-BE-BETTER. (~15 lines)
9. **Sovereignty Principle** -- ALWAYS-LOCKED / LOCKED / CHALLENGEABLE. (~20 lines)
10. **Embedded Mode Q1-Q3** -- lightweight self-audit for builders. (~20 lines)
11. **Weaver Synthesis Methodology** -- experience portrait, AMPLIFY/RELEASE/DEEPEN, verdict. (~40 lines)
12. **Bridging Questions** -- writing prompts (a-f) and receiving prompts (R-01 to R-07). (~60 lines)
13. **Metaphor Awareness** -- structural/atmospheric/announced/none. (~15 lines)
14. **Forcing Questions** -- 5 levels for when "nothing seems wrong." (~25 lines)

**Estimated total for PA process content:** ~450 lines (down from ~2,981 total across all files).

### What to Remove

1. **TEAM.md entirely** (840 lines) -- all agent prompts, team topologies, Playwright management. This is orchestration infrastructure that belongs in a pipeline tool, not a skill.
2. **GATES.md entirely** (534 lines) -- binary gate validation is orchestration, not evaluation. The PRINCIPLES embedded in gates 3-4 (cold-look-first, no-CSS-terms) are already captured in the process content.
3. **Most of PROTOCOL.md Sections 1-2, 10-12** (~200 lines) -- modes of invocation, pre-flight checklist, lock sheet generation, weaver protocol, fix execution protocol. Pipeline infrastructure.
4. **SKILL.md auditor deployment table** (~50 lines) -- 5-auditor question assignments. Pipeline topology.
5. **EMBEDDED-PROMPT.md** (133 lines) -- superseded by PROTOCOL.md Section 9 and can be further condensed.
6. **CLAUDE.md routing** (123 lines) -- v2/v3 version management is unnecessary when consolidated.

### What Changes for Combined Skill Integration

PA stays SEPARATE from the combined TC+building skill. It is invoked AFTER building as its own step. But:

1. **PA's Embedded Mode Q1-Q3** should be referenced by the building skill as a post-build self-check
2. **PA's Bridging Questions** (writing prompts) should be referenced by the building skill for builder reflection
3. **PA's Bridging Questions** (receiving prompts) should be referenced by the building skill for refinement builder orientation
4. **PA's verdict** (SHIP/REFINE/RETHINK) determines whether the build cycle continues
5. **PA's creative direction** (AMPLIFY/RELEASE/DEEPEN) feeds directly to the refinement builder

The interface between building and PA is:
- Building outputs: HTML artifact + builder reflection (6 dimensions)
- PA inputs: HTML artifact (+ optionally builder reflection for receiving prompts)
- PA outputs: Verdict + Creative Direction (+ optionally Experience Portrait)
- If REFINE: Creative Direction + artifact + reflection go to refinement builder

---

## Comparison: PA vs TC Issues

| Issue | TC Severity | PA Severity |
|-------|-----------|-----------|
| Channeling toward specific creative patterns | **HIGH** | **NONE** |
| Compression of research into rigid rules | **HIGH** | **LOW** (audit report template only) |
| Pipeline architecture assumptions | **MEDIUM** | **HIGH** (49% of total content) |
| Bias from past experiments | **HIGH** | **LOW** (infrastructure, not questions) |
| Old metric contamination | **MEDIUM** | **NONE** (explicitly rejects scores) |
| Vocabulary steering | **HIGH** | **NONE** (open-ended questions) |
| Output format rigidity | **MEDIUM** | **LOW** (prose-based) |

**Bottom line:** PA's evaluation methodology is sound and should be preserved largely intact. The cleanup is architectural (removing pipeline infrastructure), not conceptual (removing channeling). This is the opposite of TC's situation, where the conceptual framework itself needs rethinking.
