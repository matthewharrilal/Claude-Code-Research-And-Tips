# Pipeline Evolution Research: Patterns Across v1-v5 and Methodology Research

**Researcher:** evolution-researcher (Task #7)
**Date:** 2026-03-03
**Sources analyzed:** 30+ files across pipeline-methodology-research/, pipeline-improvements.md, v1.1-audit/, invention-gap-analysis/, builds/ (10 build directories spanning 02-25 through 03-03), SKILL.md version history, MEMORY.md project history

---

## 1. The Complete Timeline: What Actually Happened

The pipeline has gone through two fundamentally different eras, and tracking the evolution across both reveals a pattern that the system has never confronted directly.

### Era 1: The Automated Pipeline (v3-v5, 2026-02-25 through 2026-03-01)

This was a TypeScript-based automation system (`supervisor.sh`, `assembler.ts`, `pipeline.ts`, `pass-executor.ts`, `gate-runner.ts`, `claude-cli.ts`, `weaver-spawner.ts`, `auditor-spawner.ts`).

| Run | Date | Content | Passes | Outcome | Cost | Notes |
|-----|------|---------|--------|---------|------|-------|
| v3 | 02-25 | Molly/Panopticon | ~40 agents | Build completed | Unknown | First automated run |
| v3.2 | 02-28 | Yegge/Gas Town | 8 passes + PA | REFINE verdict, 7 gate failures | ~$23 | DPR 0.667 screenshot artifact, cold colors, contrast issues |
| v4 | 03-01 (run 4) | Yegge/Gas Town | 6/8 passes, refine crashed | Force-SHIP, PA-05: 3.0 | $23.45 | 430K prompt overflow, refine builder crashed |
| v5 | 03-01 (run 5) | Yegge/Gas Town | 8/8 passes, 2 refine cycles | SHIP, PA-05: 4.3 | $28.79 | 13 fixes applied, all passes worked |

**Key observation:** Runs 1-4 of the Yegge content (03-01, 03-01-2, 03-01-3, 03-01-4) all failed or produced poor results. Run 5 (03-01-5) succeeded only after 13 fixes to the pipeline infrastructure. The infrastructure was the bottleneck, not the creative design.

### Era 2: The Orchestrator Pipeline (v1.0-v1.2, 2026-03-01 through 2026-03-03)

Complete architectural replacement. Discarded the TypeScript automation. Replaced with a prompt-based orchestrator (`SKILL.md`, 887+ lines) that a human or Claude instance runs manually, spawning agents via the Agent tool.

| Run | Date | Content | Agents | Outcome | Cost | Notes |
|-----|------|---------|--------|---------|------|-------|
| v1.0 run 1 | 03-02 | Molly/Panopticon | Setup only | Incomplete | ~$0 | Log shows only Phase 0 |
| v1.0 run 2 | 03-02 | Yegge/Gas Town | 16+ | SHIP after 1 fix cycle | $56-64 | Full pipeline, all phases |
| v1.0 run 3 | 03-02 | Molly/Panopticon (v2) | 16+ | SHIP after 1 fix cycle | $51-67 | Full pipeline, all phases |
| v1.2 run 1 | 03-03 | Molly/Panopticon | 16+ | SHIP after 1 fix cycle | $56-67 | v1.2 with structural awareness |

**Key observation:** Every v1.x run has achieved SHIP after exactly 1 fix cycle. The pipeline is stable but expensive ($51-67 per run vs $23-29 in the automated era).

### The Missing Middle: Methodology Research (2026-03-01)

Between eras, 7 research agents + 16 companion documents produced a landmark finding: the quality gap was caused by reframing "knowledge-growth" as "context-management." The Tripod was identified (researcher + packages + execution prompts). 6 missing mechanisms catalogued. The "million dollar question" posed.

**Then the v1.0 orchestrator pipeline was built.** This is the critical junction.

---

## 2. What Problems Appear REPEATEDLY

### Problem 1: Compression Destroys Knowledge Quality (Appears in EVERY Analysis)

- **v3-v5 era:** 337 findings compressed into 7 vocabulary files (48:1 compression). Builders receive mechanism NAMES, not implementation PLANS.
- **Methodology research:** Identified as THE root cause. "We reframed a knowledge-growth problem as a context-management problem."
- **v1.x era:** Added 5 specialists + 1 synthesizer to address this. Compression improved from 48:1 to approximately 10:1 (337 findings -> 5 specialist reports -> 3 packages). But packages are still generic per-content, not per-build curated like Agent-0C's packages.
- **Invention gap analysis:** "Pipeline builds are one long room with different wallpaper. Explorations are different rooms." The structural dimension is still missing.

**Verdict:** The problem has been MITIGATED (specialists recover some findings) but not SOLVED (no per-build curation, no implementation-mapped findings with expected evidence and constraint linkage).

### Problem 2: Structural Monotony (Appears Starting Flagship, Persists Through All v1.x)

- **Flagship experiment (02-17):** "Programmatic gates passed, perceptual audit failed. Zero borders, uniform typography, imperceptible backgrounds."
- **Invention gap analysis (03-02):** "Both pipeline builds reveal the same structure: `section > container > section-indicator > h2 > [h3 > prose > component]* > hr` repeated 8-13 times." 0 novel CSS techniques per build vs 5-9 per exploration.
- **v1.2 addition:** Structural awareness (Section 11, E-21/E-22/E-23, structural variety metrics in weaver). Non-blocking -- orchestrator "enables but does not enforce structural invention."
- **v1.2 builds (03-03):** Weaver reports "STRUCTURALLY UNIFORM with 1 strong exception." Diagnosis: "CONTENT APPROPRIATE + BUILDER VALID CHOICE." The system acknowledged the problem but classified it as acceptable.

**Verdict:** The problem has been MEASURED (v1.2 now detects it) but not ADDRESSED. The pipeline gives builders permission to be structural but provides no structural invention mechanism. Builders default to vertical stacking because that is the path of least resistance.

### Problem 3: Context Window Overflow / Prompt Size (Appears in v4, v5, v1.x)

- **v4:** 430K char prompt for refine builder -> crash
- **v5:** Fixed with artifact-via-disk (67K reduction) and edit tool
- **v1.x era:** Specialists produce 131-409 line reports. Packages run 177-391 lines. Total research output per build: ~1,800+ lines. Builders receive one package (177-391 lines) + HTML artifact via disk read, but the orchestrator's own context is under pressure (887-line SKILL.md + validation + routing).

**Verdict:** Mechanically solved (artifact-via-disk), but the INFORMATION QUALITY problem remains. The constraint is not "how much fits" but "how much is relevant to THIS build."

### Problem 4: The Audit-Fix Ratchet (Appears in Flagship Retro, v1.x Audit)

- **Flagship retrospective (02-17):** "7.9:1 guardrail-to-playbook ratio. Builders get told what NOT to do but almost never what TO DO."
- **v1.1 audit (03-02):** 2 BLOCKING + 8 SIGNIFICANT + 11 MINOR findings across 14 files. Every version adds rules, checks, and guardrails. Rules only accumulate, never retire.
- **v1.1 -> v1.2:** v1.1 added Section 10 (Compositional Questions), citation format, PA rebalancing. v1.2 added Section 11 (Structural Propositions), 3 PA questions, weaver metrics. Each version expanded the document.
- **SKILL.md growth:** 887+ lines and growing. 13 prompt files. The orchestrator doc alone is longer than many of the design system's source files.

**Verdict:** The complexity ratchet identified in the strategic discoveries ("rules only accumulate, never retire -- needs sunset protocol") has been confirmed across EVERY version. No sunset protocol has ever been implemented.

### Problem 5: Cost Escalation

- **v3.2 (automated):** ~$23
- **v5 (automated, all fixes):** $28.79
- **v1.0 (orchestrator):** $51-67
- **v1.2 (orchestrator):** $56-67

Cost has approximately doubled from the automated to the orchestrator era. The cause: replacing 1 TypeScript pipeline call with 16-17 individually spawned Opus agents, each reading files and producing output. The specialists + synthesizer phase alone costs $10-18.

**Verdict:** The pipeline got more expensive when it got more capable. Nobody has asked: "Is the $30-40 increase in cost producing a proportional quality improvement?" The automated v5 produced SHIP with PA-05: 4.3 for $29. The orchestrator v1.2 produces SHIP for $60. Is the orchestrator output 2x better? This has never been measured.

---

## 3. What Each Version ADDED (and the Trajectory)

| Version | What Was Added | What Was Removed | Net Complexity |
|---------|---------------|-----------------|----------------|
| v3 (automated) | TypeScript pipeline, content chunking, multi-pass builder, programmatic gates (42->47), PA protocol, execution tracker | N/A (first version) | Baseline |
| v3.1 | Gate runner split, PA protocol split | Monolithic gate file | Slight increase |
| v3.2 | Tracker 375->58 fields | 317 tracker fields | Decrease |
| v4 | Bug fixes, context management | N/A | Slight increase |
| v5 | 13 infrastructure fixes (artifact-via-disk, edit tool, weaver truncation fallback, disk fallback, directory auto-suffix, etc.) | N/A | Increase |
| **v1.0** | **Complete rewrite.** 5 specialists, synthesizer, 3-pass rotation, research packages, 14 prompt files, orchestrator pattern, perceptual audit with 5 auditors + weaver. | **Entire TypeScript automation layer.** Programmatic gates, content chunking, automated pass scheduling. | **Massive increase** (887-line SKILL.md + 13 prompts + specialist/synthesizer system) |
| v1.1 | Section 10 (Compositional Questions), citation format, TC question carry-through, KB families, PA rebalancing, $50 hard gate, pre-fix preservation | N/A | Increase |
| v1.2 | Section 11 (Structural Propositions), 3 PA questions (E-21/E-22/E-23), structural variety metrics, weaver structural assessment | N/A | Increase |

**The trajectory is unambiguously additive.** The only subtraction event was v3.2 reducing tracker fields (375->58) and the era transition from automated to orchestrator (which was a replacement, not a subtraction -- the orchestrator is far more complex than what it replaced).

---

## 4. Has It Ever Gotten Simpler?

**No.** The tracker field reduction (375->58) is the single instance of subtraction across the entire history. Everything else has been additive.

The era transition LOOKS like simplification (TypeScript removed) but it was replacement with something far more complex:
- 1 pipeline script -> 887-line orchestrator + 13 prompt files
- 1 builder prompt -> 3 rotation-specific builder prompts + refine builder
- 1 PA call -> 5 auditors + 1 weaver with specific question assignments
- 0 research agents -> 5 specialists + 1 synthesizer
- Programmatic gates (automated) -> Manual validation by orchestrator (more flexible but more complex)

**The system has never experienced deliberate simplification as a design goal.** Every intervention has been "add a new layer to address a diagnosed deficiency."

---

## 5. Was the Methodology Research's Core Insight Honored?

The methodology research (03-01) identified three missing instruments (the Tripod):
1. **Researcher/curation layer** (Agent-0C pattern)
2. **Structural propositions** (top-down architectural questions)
3. **Accumulation across builds** (findings production, enrichment waves)

### Instrument 1: Researcher/Curation Layer
**Partially addressed.** The v1.0 pipeline added 5 specialists + 1 synthesizer. This IS a form of curation -- specialists analyze TC output against the design system knowledge base and produce curated packages for the builder. But it differs from Agent-0C in critical ways:
- Agent-0C traversed the FULL knowledge graph (337 findings, 88 stage findings, 24 explorations). Specialists read a subset of files assigned to them by the orchestrator.
- Agent-0C produced packages specific to THIS builder's assignment. The synthesizer produces packages specific to the content but identical across passes (each pass gets its own package by rotation, but the packages are derived from the same specialist inputs).
- Agent-0C included implementation-mapped findings with expected evidence. Packages include mechanism selections and CSS examples but not the 4-layer finding format (what/evidence/constraint/how).

**Score: 40-50% implemented.** The curation layer exists but lacks per-build specificity, full knowledge traversal, and implementation-mapped findings with expected evidence.

### Instrument 2: Structural Propositions
**Partially addressed.** v1.1 added compositional questions (Section 10) and v1.2 added structural propositions (Section 11). But:
- The structural propositions are generated by the synthesizer from specialist analysis, not from top-down architectural hypotheses like the exploration era.
- They are NON-BLOCKING -- the orchestrator "enables but does not enforce structural invention."
- The weaver can measure structural variety but classifies "STRUCTURALLY UNIFORM" as acceptable if it is "CONTENT APPROPRIATE."
- Builders are explicitly told they may REJECT structural propositions (ADOPT/MODIFY/REJECT framework).

**Score: 30-40% implemented.** The concept exists on paper but the pipeline provides no mechanism for structural propositions to actually COMPEL structural invention. Builders predictably default to the familiar.

### Instrument 3: Accumulation Across Builds
**Not addressed at all.** Each pipeline run is stateless. There is no findings production. There is no accumulated identity. There is no enrichment wave. Build N teaches Build N+1 nothing. The pipeline log records what happened but feeds nothing forward.

**Score: 0% implemented.**

### Overall Tripod Implementation: ~25%

The methodology research's CORE insight -- "we reframed a knowledge-growth problem as a context-management problem, and that reframing IS the root cause" -- has been partially honored in the curation layer but completely ignored in the accumulation dimension. The pipeline is still fundamentally context-management-oriented: "what fits in the specialist's context? what fits in the builder's context?" The knowledge-growth orientation would ask: "how does this build make the next build better?"

---

## 6. How Many Times Has "Add More" Been the Solution vs "Rethink"?

### "Add More" Interventions
1. v3.1: Split gates, split PA protocol (structural, but additive)
2. v5: 13 infrastructure fixes (all additive)
3. v1.0: Add 5 specialists + synthesizer + 3-pass rotation + 14 prompts
4. v1.1: Add Section 10, citation format, PA rebalancing
5. v1.2: Add Section 11, 3 PA questions, structural metrics

**Count: 5 "add more" interventions**

### "Rethink" Interventions
1. v3.2: Tracker field reduction (375->58) -- the only subtraction
2. v1.0 era transition: Replace TypeScript automation with orchestrator pattern -- this was a RETHINK but resulted in MORE complexity, not less

**Count: 1 clear subtraction, 1 rethink-that-added**

### "Simplify" Interventions
**Count: 0**

**Ratio: "Add more" to "Simplify" = infinity. The pipeline has NEVER deliberately simplified itself.**

---

## 7. What Has NEVER Been Tried

1. **Subtraction as a design goal.** No version has asked: "What can we REMOVE and still produce the same quality?"

2. **A single-agent build.** Give one Opus agent the content, the full design system, and see what it produces with zero pipeline infrastructure. This would establish a TRUE baseline for measuring pipeline value-add. Without it, we don't know if the pipeline's $60 of orchestration improves on a $5 single-agent build.

3. **Builder with full knowledge access.** Instead of curating, let the builder traverse the knowledge graph itself (with Read tool access to all 57 files). Agent-0C was one agent reading everything; why can't the builder be Agent-0C + builder in one?

4. **Multi-build accumulation.** No version has carried findings from Build N to Build N+1. The methodology research identified this as Instrument 3 of the Tripod. It remains untested.

5. **Parallel architectures on the same content.** Run the pipeline AND a single-agent build on the same content and compare. This A/B test has never been attempted.

6. **Fewer agents, more turns.** Instead of 16-17 agents each getting 1 shot, what about 3-5 agents each getting 3-4 rounds of iteration? The exploration era's quality came partly from iteration (6 explorations per stage, each learning from predecessors). The pipeline has zero iteration at the creative level.

7. **Human-in-the-loop after TC.** Let the user review the metaphor and structural direction before committing $50+ to the build. Currently the pipeline runs to completion with only a $50 cost gate.

8. **Constraint retirement.** No rule has ever been removed. The "sunset protocol" identified in strategic discoveries has never been implemented.

9. **Builder reading exploration HTML directly.** The explorations (DD-001 through CD-006) are the highest-quality reference material. Builders have never been given direct access to read and learn from these files during a build.

10. **Reducing the PA battery.** All 5 auditors + weaver has been the fixed configuration since v1.0. Has anyone asked: would 3 auditors + 1 weaver produce equivalent signal at 40% lower cost?

---

## 8. Cost Trajectory

| Build | Date | Era | Cost | Time |
|-------|------|-----|------|------|
| v3 | 02-25 | Automated | Unknown | Unknown |
| v3.2 | 02-28 | Automated | ~$23 | Unknown |
| v4 | 03-01 | Automated | $23.45 | 2h 10m |
| v5 | 03-01 | Automated | $28.79 | 1h 40m |
| v1.0 Yegge | 03-02 | Orchestrator | $56-64 | ~3.5h |
| v1.0 Molly v2 | 03-02 | Orchestrator | $51-67 | ~3.5h |
| v1.2 Molly | 03-03 | Orchestrator | $56-67 | ~4h |

**Trajectory:** Automated era stabilized at ~$25-30. Orchestrator era stabilized at ~$55-67. The cost roughly doubled. The time also roughly doubled (1h40m -> 3.5-4h).

**Cost per agent:** Automated era: ~$3-4/agent. Orchestrator era: ~$3-4/agent (similar per-agent cost, but twice as many agents).

**The question nobody has asked:** What is the cost-quality curve? Is $60 worth 2x what $30 buys? Is there a cheaper orchestrator configuration that captures 80% of the quality at 50% of the cost?

---

## 9. What Would SUBTRACTION Look Like?

This is the question the pipeline has never asked. Here are concrete subtraction experiments:

### Subtraction Experiment 1: Kill the Specialists
**Remove:** 5 specialists + 1 synthesizer (6 agents, ~$12-18)
**Replace with:** 1 researcher agent that reads TC brief + all 57 knowledge base files and produces 3 build packages directly.
**Hypothesis:** One agent with full knowledge access produces better-curated packages than 5 specialists with partial file assignments, because the specialist boundaries create artificial information silos.
**Cost saving:** ~$8-12 (6 agents -> 1 agent)

### Subtraction Experiment 2: Kill the Rotation
**Remove:** 3-pass build rotation (3 agents, ~$12-18)
**Replace with:** 1 builder agent with 1 comprehensive package + 30 max turns + Edit tool.
**Hypothesis:** The rotation system was designed to work around context limits. With artifact-via-disk and Edit tool, a single builder can iteratively build the full page.
**Cost saving:** ~$8-12 (3 agents -> 1 agent)

### Subtraction Experiment 3: Kill Half the PA
**Remove:** 3 of 5 PA auditors (~$3-5)
**Replace with:** 2 PA auditors (different question sets) + 1 weaver.
**Hypothesis:** 5 auditors produce convergent signals (as confirmed in all pipeline logs: "5/5 flagged dark-block overuse as dominant issue"). If they converge, 2-3 are sufficient for the signal; the other 2-3 are confirming what was already found.
**Cost saving:** ~$3-5

### Subtraction Experiment 4: Combined Subtraction
Apply all three: 1 researcher + 1 builder + 2 auditors + 1 weaver = 5 agents total.
**Estimated cost:** $15-25 (vs $55-67 current)
**Risk:** Untested. Could produce significantly worse output. But the exploration era's BEST work (CD-006, 39/40) was built by 1 builder with 1 curated package from 1 researcher, audited by 1 human.

### Subtraction Experiment 5: The Zero Pipeline Baseline
**Remove:** Everything.
**Replace with:** 1 Opus agent, content + full design system access, "build a designed HTML page."
**Estimated cost:** $3-5
**Purpose:** Establish the baseline. If this produces PA-05 3.5, and the full pipeline produces PA-05 4.3, the pipeline's marginal value is 0.8 points for $55-62 extra. Is that worth it?

---

## 10. The Meta-Pattern: What This Evolution Reveals

### Pattern 1: Diagnosis Is Always Better Than Treatment
Every pipeline version has produced excellent DIAGNOSIS of what went wrong. The flagship dissection identified root causes with surgical precision. The methodology research identified the Tripod with rigorous evidence. The invention gap analysis measured the structural flatness exactly. The v1.1 audit found every contradiction.

But the TREATMENTS have consistently been "add more layers." The diagnosis says "the builder lacks curated knowledge" and the treatment is "add 5 specialists + 1 synthesizer." The diagnosis says "structural monotony" and the treatment is "add Section 11 + 3 PA questions." The diagnosis says "multi-channel coordination is weak" and the treatment is "add Section 10 + citation format."

Each treatment is reasonable in isolation. But the aggregate effect is a system that now has 16-17 agents, 14 prompt files, 887+ lines of orchestrator instructions, 11 package sections, 23 PA questions, 3 fix classification types, and still produces "one long room with different wallpaper."

### Pattern 2: The Research Gets Deeper But the Pipeline Gets Wider
The methodology research went DEEP: 16 companion documents, the Tripod insight, the context window fallacy, the anti-orphaning principle, the 6 missing mechanisms. This was genuine discovery.

The pipeline responded by getting WIDE: more specialists, more sections, more questions, more metrics, more validation gates. Width is easier than depth. Adding Section 10 is easier than implementing a researcher agent that traverses the full knowledge graph. Adding structural variety metrics is easier than giving the builder a mechanism for structural invention.

### Pattern 3: The Ratchet Is Real
Every version has added rules, checks, and constraints. No version has removed any. The SKILL.md has grown from nothing to 887+ lines in 3 days. The prompt files total ~2,500+ lines. The total pipeline specification is ~3,500+ lines of instructions that agents must follow.

This is exactly the "complexity ratchet" identified in the strategic discoveries. And the sunset protocol that was supposed to prevent it has never been implemented.

### Pattern 4: The Original Sin Was Never Addressed
The methodology research identified the core problem: "we reframed a knowledge-growth problem as a context-management problem." The v1.0 pipeline was built AFTER this insight, but it is STILL a context-management system. It asks "what fits in each agent's context?" not "how does each build grow the knowledge?" The Tripod's third instrument (accumulation) was identified, documented, and ignored.

---

## 11. Recommendations for the Synthesizer

1. **The pipeline is over-engineered and under-rethought.** It has been treated as an additive system for its entire history. The synthesizer should consider whether a fundamentally simpler architecture could produce equivalent output.

2. **The cost-quality curve is unknown.** No A/B testing has ever been done between pipeline configurations. The synthesizer should recommend establishing a baseline before adding more features.

3. **The methodology research's insight was honored in principle but not in practice.** The Tripod was identified but only 25% implemented. The synthesizer should ask whether the remaining 75% (per-build curation, implementation-mapped findings, accumulation) is the actual priority, rather than adding more layers to the current architecture.

4. **Subtraction is the unexplored frontier.** The pipeline has never tried producing less infrastructure to get similar or better results. The single most valuable experiment might be: "1 researcher + 1 builder + 2 auditors + 1 weaver = does this match 16-17 agents?"

5. **The structural monotony problem won't be solved by more measurements.** v1.2 added structural variety metrics. The weaver now detects uniformity. But detection is not causation. The builder defaults to vertical stacking because the package gives it textural mechanisms but no spatial mechanisms. Adding spatial mechanisms to the vocabulary, or letting builders read exploration HTML directly, would be more effective than adding more detection.

6. **The builders have never failed creatively; they have failed architecturally.** Every build produces genuine texture -- zone differentiation, typography compression, metaphor-driven naming, transition corridors. The gap is not in visual quality but in spatial invention. This suggests the creative agents are capable but the information they receive lacks spatial content.

---

*This research was conducted by reading 30+ source files spanning the full pipeline history from v3 (2026-02-25) through v1.2 (2026-03-03), including 10 build directories, the complete methodology research corpus, the v1.1 audit suite, the invention gap analysis, and the MEMORY.md project history.*
