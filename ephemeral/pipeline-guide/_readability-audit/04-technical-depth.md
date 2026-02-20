# Technical Depth Preservation Audit

## Executive Summary

The HTML synthesis does an excellent job of preserving the structural skeleton and key conclusions from all 9 source sections. The major technical claims, data tables, architecture decisions, and evidence chains survive intact. However, the synthesis systematically drops three categories of content: (1) implementation-level specifics (exact line numbers, code snippets, CSS patterns), (2) rationale chains (the multi-paragraph "why" behind decisions), and (3) operational details that an implementer would need to actually write the files described. The HTML is a DECISION DOCUMENT (why to build PV2) not an IMPLEMENTATION DOCUMENT (how to build PV2). Someone implementing PV2 would need both this HTML and the source sections open simultaneously.

The most significant finding: the HTML adds substantial new content that does NOT appear in any source section -- the Visual Overview section with 4 rich diagrams (main flow, intelligence stack, intelligence heatmap, architecture comparison table) and the "What Comes After" section (Phases E-J roadmap). These additions enhance the document considerably but represent editorial decisions rather than synthesis.

Overall depth preservation: approximately 55-65% of source content survives in the HTML by word count, but approximately 80-85% of source CONCLUSIONS survive. The losses are concentrated in implementation specifics, not in strategic understanding.

---

## Per-Source-Section Comparison

### Section 1: Where We Are Right Now (01-where-we-are.md)

**Source:** 162 lines. Exhaustive inventory of every design system component: 2 skills, 6 ontology layers, the crown jewel, and 5 missing pieces. Each component gets 3 paragraphs: what it IS, what it DOES in the pipeline, what BREAKS without it.

**What the HTML preserves:**
- The two skills with file paths, line counts, and one-paragraph summaries
- The six-layer ontology as a clean table (Layer / Name / File / Purpose)
- The crown jewel (CD-006) description
- The 5 missing pieces as a numbered list
- The "Pipeline v2 builds the connective tissue" conclusion

**What the HTML drops:**
- **Layer-by-layer "what breaks without it" analysis.** The source spends 3 paragraphs per layer explaining failure modes. The HTML puts layer details in a collapsible `<details>` block, but even expanded, it reduces each layer from ~15 lines to ~3 lines. For example, Layer 3 (mechanism catalog) loses: the Name Test and Transfer Test definitions, the specific list of all 18 mechanism names, the cross-file frequency concept, the application modes distinction, and the "tokens but no patterns" failure mode.
- **Specific file sizes and line counts.** Source gives exact line counts for every file (tokens.css 184 lines, mechanism-catalog 800+ lines, components.css 1,195 lines). HTML preserves some (tokens "80 tokens," components "1,195 lines") but drops others.
- **Token classification system.** Source explains IMMUTABLE / MUTABLE / AVAILABLE token types. HTML drops this entirely.
- **Component confidence levels.** Source explains that components carry confidence based on cross-file frequency (universal vs stage-specific). HTML drops this.
- **Case study process proof framing.** Source explains that case studies are organized as "process proofs" (tension -> metaphor -> layout), not recipes. HTML preserves the "THIS IS NOT A TEMPLATE" warning but drops the process proof framing.
- **Semantic Value Framework.** Source describes the 3-question test (WHAT varies? WHY? WHY THESE values?). HTML drops it entirely.

**What an implementer needs from source:**
- All 18 mechanism names (for conventions brief Section 4 and gate runner SC-08)
- Token classification system (for understanding which tokens can be overridden)
- Semantic Value Framework (for the conventions brief's creative authority section)
- Component confidence levels (for deciding which components to mandate in SC-08)

---

### Section 2: The Architecture -- Fat Core (02-the-architecture.md)

**Source:** 192 lines. The most narratively rich section. Contains the evidence table, the "Where Intelligence Goes to Die" analysis, the Fat Core principle, all 12 agents described individually, the 3 phase-locked gates with specific checks per gate, the full build sequence, and the "Why This Is Not the Flagship" comparison.

**What the HTML preserves:**
- Evidence table (4 experiments, agents, input, PA-05, quality) -- preserved exactly
- The inverse correlation insight
- "Where Intelligence Goes to Die" narrative with Boundary 3 specifics (20:1 compression, 35% survival)
- The Fat Core principle statement
- All 12 agents in a code-block summary
- The 3 gates as a table (Gate / When / What It Checks)
- The full build sequence (inside a collapsible block)
- "Why This Is Not the Flagship" as a comparison table

**What the HTML drops:**
- **Individual agent descriptions.** Source gives each of the 12 agents a dedicated subsection (Agent 1: The Orchestrator, Agent 2: The Core Agent, etc.) with multi-paragraph descriptions. HTML compresses all 12 into a single code block (~15 lines total). The Core Agent alone was ~50 lines in the source describing its 4 self-directed phases (A: Understand, B: Plan, C: Build, D: Prove), the specific files it receives (~230 lines), what it does NOT receive (no recipe, no catalog, no research digest, no transition table, no fractal echo table), and why Opus is non-negotiable.
- **Core Agent input specification.** Source lists exactly what the core agent receives (content brief ~30 lines, conventions brief ~100 lines, tokens.css ~65 lines, prohibitions ~35 lines) AND what it does not receive (no 650-line recipe, no mechanism catalog, no research digest). HTML mentions ~230 lines total but drops the per-file breakdown.
- **The 4-phase self-directed build.** Source describes Phase A (Understand), Phase B (Plan), Phase C (Build), Phase D (Prove) with specific deliverables. HTML references these phases in the build flow section but not in the agent description.
- **PA auditor question assignment.** Source gives the specific PA question ranges per auditor pair (1-2 get PA-01 through PA-06, etc.). HTML mentions 5-6 questions each but drops the assignment table.
- **Weaver convergence thresholds.** Source specifies 7/9 = real defect, 4-6/9 = likely, 2-3/9 = noise. HTML drops this.
- **Fix cycle detailed mechanics.** Source explains: fix list -> SAME core agent -> targeted changes (not rebuild) -> G3 re-runs -> optionally 2-PA spot check -> max 3 cycles -> escalate. Source also explains that the orchestrator keeps the core agent alive during PA processing (~30-45 min idle). HTML preserves the "same agent" point but drops the 2-PA spot check, the idle context preservation, and the "targeted changes not rebuild" distinction.
- **The Flagship comparison narrative.** Source has 6 multi-paragraph contrasts (agent count, builder input, guardrail ratio, planning/building separation, builder model, recipe vs conventions). HTML reduces these to a comparison table with one-line entries per dimension.

**What an implementer needs from source:**
- Core agent input specification (exact files and line counts for the orchestrator to assemble)
- The "what it does NOT receive" list (critical for orchestrator file routing)
- PA question assignment table (for the orchestrator's auditor spawning logic)
- Weaver convergence thresholds (for the weaver agent's synthesis logic)
- Fix cycle mechanics including 2-PA spot check and context preservation

---

### Section 3: The Files We Need to Create (03-files-to-create.md)

**Source:** 542 lines. The longest and most implementation-dense section. Describes all 6 new files with: location, size, what it does, why it must exist, what makes it different from predecessors, key design decisions, and source evidence. Includes code snippets (gate-registry.js config), the file dependency diagram, the "What We Are NOT Creating" section, and the Before vs After specification stack comparison.

**What the HTML preserves:**
- Overview table (6 files with location, size, purpose) -- preserved exactly
- File 1 (orchestrator): key design decisions in a collapsible block
- File 2 (conventions brief): 5-section structure, key insight box about inverse correlation
- File 3 (perception thresholds): full threshold table preserved
- File 4 (gate runner): fix recipe system in collapsible block
- File 5 (gate registry): one-line description
- File 6 (experiment protocol): 3 experiments listed
- File dependency diagram -- preserved as a code block
- "What We Are NOT Creating" -- partially preserved (within collapsible)

**What the HTML drops:**
- **File 1 (orchestrator) 9-step sequence.** Source lists 9 specific steps the orchestrator follows (read content -> classify tier -> select agent architecture -> route files -> run gates -> pre-capture screenshots -> spawn PA -> manage fix cycle -> deliver result). HTML reduces to one paragraph.
- **File 1 source evidence.** Source cites 3 specific reports (Master synthesis Report 32, Maximum efficacy Report 94, Pipeline v2 architecture doc). HTML drops all citations.
- **File 2 (conventions brief) 5-section detail.** Source gives ~10 lines per section with specific content (e.g., Section 1 lists exact thresholds, Section 4 lists per-category mechanism minimums, Section 5 quotes "Your compositional judgment supersedes this document"). HTML lists the 5 sections by name with one-line descriptions each.
- **File 2 two-dimensional model diagram.** Source includes the SPECIFICITY vs FREEDOM 2D diagram showing where the conventions brief sits relative to Flagship, CD-006, and Floor. HTML preserves this diagram in the Experiments section but drops it from the conventions brief discussion.
- **File 2 four emergent capabilities.** Source lists content-form resonance, proportional intelligence, creative surprise, and emergent coherence as capabilities that live in the agent, not in any document. HTML drops this entirely.
- **File 3 confidence note.** Source distinguishes Tier 1 (principle is unanimous) from Tier 2 (specific values derived from one agent, not empirical). HTML drops this important caveat.
- **File 4 gate-runner.js runtime description.** Source gives a 6-step runtime sequence (opens browser -> navigates -> waits for fonts -> disables animations -> runs 15 gates -> returns results). HTML drops to a one-sentence summary.
- **File 4 phase-locked gate table.** Source gives the exact phase-to-gate mapping (After Phase 1: SC-06/07/08/12; After Phase 3: SC-04/05/09; etc.). HTML moves this to Section 5 instead.
- **File 4 70/30 boundary explanation.** Source explains the 70% gates / 30% PA division. HTML moves this to Section 5.
- **File 5 gate-registry.js code snippet.** Source includes a ~35-line JavaScript code block showing THRESHOLDS, SELECTORS, and PHASE_GATES objects. HTML drops the code entirely, reducing to "~120 lines of configuration."
- **"What We Are NOT Creating" rationale.** Source lists 5 deliberate omissions with per-item evidence (no recipe because of recipe ceiling, no transition table because agent discovers, etc.). HTML partially preserves in passing mentions.
- **Before vs After specification stack.** Source provides a detailed side-by-side (Flagship: 963-line prompt + 1,878-line TC + 774-line PA + 530 to builder = 1.5/4 vs PV2: ~350-line orchestrator + ~100-line brief + ~80-line thresholds + ~520-line gate runner + ~230 to builder = target 3.0+). HTML drops this comparison entirely.

**What an implementer needs from source:**
- Orchestrator 9-step sequence (the actual specification for writing build-page SKILL.md)
- Conventions brief 5-section detail (the actual content specification)
- Four emergent capabilities list (for writing Section 5 of the conventions brief)
- Gate-registry.js code snippet (closest thing to a starter file for implementation)
- Phase-locked gate table (which gates run when)
- "What We Are NOT Creating" list (prevents scope creep during implementation)

---

### Section 4: The Files We Need to Edit (04-files-to-edit.md)

**Source:** 540 lines. The most precise section -- provides exact line numbers, exact "current content" blocks, exact "new content" blocks, and exact rationale for each of 10 edits across 6 files. Also includes the critical 108px stacking threshold derivation with arithmetic proof.

**What the HTML preserves:**
- Summary table (6 files, what changes, lines, problem solved) -- preserved with minor compressions
- All 10 edits described by name in collapsible blocks
- The 108px stacking threshold value
- Key rationale for each edit (one sentence per edit)

**What the HTML drops:**
- **Exact current/new content blocks.** This is the single largest depth loss. Source provides copy-paste-ready before/after content for EVERY edit. For example, Edit 1 shows the exact current lines 114-122 of tokens.css and the exact replacement. Edit 2 shows the exact current lines 289-297 of semantic-rules.md and the exact replacement with the S-09 stacking rule. Edit 3 shows the exact current lines 359-364 of PA SKILL.md and the exact insertion. The HTML drops ALL of these, reducing each edit to a 2-3 sentence description.
- **108px arithmetic proof.** Source provides the complete derivation: BREATHING (32+24+4+24+24=108), BRIDGE (24+32+3+24+24=106), SMOOTH (24+24+1+16+24=89). HTML mentions "arithmetic proof" in the stacking token collapsible but doesn't show the math.
- **108px vs 192px resolution.** Source has a dedicated subsection explaining why 108px is correct and the codification-map's 192px is wrong. This is critical context -- the source sections (08-implementation-order.md) use 192px in some places, which contradicts the canonical 108px in Section 4. HTML uses 108px consistently but doesn't explain the discrepancy.
- **Edit 5A builder recipe.** Source provides a complete 7-step builder recipe with specific CSS values (e.g., "SET UP container: max-width: 960px; margin: 0 auto; padding: 0 32px", "DEPLOY header: dark background, 3px red bottom border, inverted text", etc.). HTML mentions "7-step builder recipe" but drops the actual steps.
- **Edit 5B "first 200 lines" context.** Source explains that the current CLAUDE.md restricts mechanism catalog to "first 200 lines" and explains why this must change to FULL access. HTML mentions the restriction removal but drops the rationale.
- **Edit 5C communication protocol minimum message counts.** Source specifies: Middle 2+, Ceiling 4+, Flagship 6+. HTML mentions messaging is required but drops the per-tier counts.
- **Summary table with "Already applied" notes.** Source notes that per-category mechanism minimums and 3-transition minimum are already applied (no edit needed). HTML drops this, which could cause an implementer to make unnecessary edits.

**What an implementer needs from source:**
- ALL current/new content blocks (these ARE the implementation -- without them, you cannot make the edits)
- The 108px arithmetic proof (needed to write the stacking rule)
- The 108px vs 192px resolution (needed to resolve inconsistencies in implementation-order section)
- Edit 5A builder recipe steps (needed to write the CLAUDE.md edit)
- "Already applied" notes (prevents duplicate work)

---

### Section 5: The Gate System (05-gate-system.md)

**Source:** 510 lines. The most reference-dense section. Provides per-gate documentation for all 15 gates: what it checks, technical measurement (Playwright selector + getComputedStyle call), pass criteria, why it matters, what goes wrong without it, and a fix recipe code block. Also covers gate classification (binary/structural/compositional), the 70/30 boundary, and how fix recipes work.

**What the HTML preserves:**
- Phase-locked gate timing diagram (G1/G2/G3 with specific SC gates) -- preserved as a code block
- Quick reference table (all 15 gates with name, category, threshold, phase) -- preserved exactly
- Gate-by-gate detail in a collapsible block with 1-2 sentences per gate
- The 70/30 boundary table (code can verify vs cannot verify)
- Gate classification tiers mentioned in the checkpoint box

**What the HTML drops:**
- **Technical measurement details.** Source specifies exact Playwright selectors and getComputedStyle calls for every gate. For example, SC-09: "Selects [data-zone] or main > section, parses backgroundColor into RGB, calculates max(|R1-R2|, |G1-G2|, |B1-B2|)." HTML drops all measurement implementations.
- **Fix recipe code blocks.** Source provides concrete fix recipes for all 15 gates in fenced code blocks. For example, SC-01: `FIX: "Container max-width is {measured}px. Set to 960px." CSS: "main { max-width: 960px; margin: 0 auto; }"`. HTML drops all fix recipe code blocks except brief mentions in the collapsible.
- **SC-13 honest limitation.** Source explicitly states SC-13 is "the weakest gate (~70% confidence)" and explains it counts channels but cannot assess semantic coherence. HTML notes "~70% confidence" but drops the explanation of why.
- **SC-14 three sub-checks.** Source describes 3 specific sub-checks: letter-spacing clustering, letter-spacing minimum, intra-zone background deltas. HTML compresses to one sentence.
- **Gate fix cycle mechanics.** Source specifies: per-phase gate max 2 re-runs, full G3 max 3 fix cycles, total max 8 invocations per build at 5-15 sec each = 40-120 sec total. HTML drops these operational details.
- **"What Gates Cannot Do" section.** Source has a dedicated section explaining that gate-passing is necessary but not sufficient, distinguishing the gate floor (2.5-3.0/4) from the PA ceiling (4.0/4). HTML preserves the concept in the 70/30 table but drops the explicit score predictions.

**What an implementer needs from source:**
- All 15 technical measurement specifications (THE specification for writing gate-runner.js)
- All 15 fix recipe templates (needed for the gate runner's output format)
- SC-14 three sub-checks detail (needed for implementing the sub-perceptual prevention gate)
- Fix cycle max invocations (needed for the orchestrator's gate management logic)

---

### Section 6: The Build Flow (06-build-flow.md)

**Source:** 442 lines. Step-by-step walkthrough of the complete build flow with detailed timing, the 7 boundary crossings table, per-step explanations with code blocks showing gate outputs, and core agent input assembly table.

**What the HTML preserves:**
- Complete flow diagram as a code block (top-level architecture)
- Timing breakdown table (preserved nearly verbatim)
- 7 boundary crossings table (preserved with minor compression)
- Boundary 3 elimination point
- The "3 structural differences" from Flagship comparison

**What the HTML drops:**
- **Core agent input assembly table.** Source provides a 6-row table (content.md variable lines, conventions-brief ~100, tokens.css ~65, prohibitions ~35, mechanism-catalog ~869 as reference, components.css ~500 as reference) with total ~2,200-4,000 lines. HTML drops this table entirely.
- **The "critical tension" about input volume.** Source explains why ~2,200-4,000 lines total input does NOT contradict the ~230-line builder input recommendation (reference files consulted per-phase vs held in active attention). HTML drops this nuanced distinction.
- **Step 1 Track 1 vs Track 2 classification.** Source explains the orchestrator's content classification (prose-dominant -> Track 2, mixed/data-heavy -> Track 1, self-referential -> abort). HTML mentions Track 1/Track 2 but drops the classification criteria and the self-referential abort condition.
- **Phase A-D detailed descriptions.** Source provides 10+ lines per phase with specific deliverables (Phase A: zone count, emotional arc, semantic direction sentence, metaphor decision; Phase B: per-zone plan with bg color, typography, mechanisms, transition type, written as HTML comment). HTML describes the phases in the flow diagram but drops the per-phase deliverables.
- **G1/G2 output examples.** Source provides concrete examples of gate pass/fail messages: `"Gate 2 failed at zones 2-3. Background delta = 8 RGB. Need >= 15. Fix: Change .zone-2 background from #FAF5ED to #F0EBE3."` HTML drops these examples.
- **Step 4 screenshot capture protocol.** Source gives the 8-step protocol (serve via HTTP, set viewport, wait for fonts.ready, disable animations, cold look, scroll-through, repeat at 768px, save PNGs). HTML compresses to "1440px + 768px viewports, cold look + full scroll-through."
- **Step 5 PA question assignment table.** Source gives the auditor-to-question mapping (Auditors 1-2: PA-01 through PA-06, etc.). HTML drops this.
- **Step 6 weaver convergence synthesis.** Source describes convergence-based synthesis (7/9 = real defect, 4-6/9 = likely, 2-3/9 = noise) and the 4 outputs (PA-05 score, top-3 issues, soul compliance, per-question matrix). HTML drops to "synthesizes verdict."
- **Step 7 fix cycle "core agent alive during PA" detail.** Source explains the orchestrator keeps the core agent alive during the 30-45 min PA processing to preserve context. HTML drops this operational detail.
- **"What was eliminated" from linear pipeline.** Source lists 4 specific old boundaries (B3, B4, B5, B10) that were eliminated and why. HTML mentions B3 elimination only.

**What an implementer needs from source:**
- Core agent input assembly table (specifies the orchestrator's file routing)
- Track classification criteria (needed for the orchestrator's tier logic)
- Phase A-D deliverables (needed for the core agent's expected outputs)
- Screenshot capture 8-step protocol (needed for the orchestrator's screenshot logic)
- PA question assignment table (needed for the orchestrator's auditor spawning)
- Weaver convergence thresholds and 4 outputs (needed for the weaver agent's logic)

---

### Section 7: The Experiments (07-experiments.md)

**Source:** 413 lines. Describes 3 primary experiments (A, B, C) plus the Q20 pre-test. Each experiment has: story, what happens, what it tests, success criteria with exact PA-05 thresholds, cost, and decision gate. Includes the 2D model diagram, shared protocol, and post-experiment decision table.

**What the HTML preserves:**
- Decision tree as a code block -- MODIFIED to show 5 experiments (A through E) instead of 3 (A through C). This is a significant editorial change, not a source preservation issue.
- Experiment A, B, C, D, E summaries (1-2 paragraphs each)
- 2D model diagram in a collapsible block
- Shared protocol (content, model, PA, success threshold)
- Post-experiment decision table

**What the HTML CHANGES (not just drops):**
- **Experiment count expanded from 3 to 5.** Source describes 3 experiments (A=$5 test, B=Fat Core full, C=Recipe comparison) plus the Q20 pre-test. HTML relabels and expands to 5 experiments (A=Naked test, B=$5 conventions test, C=Fat Core full, D=Full recipe, E=Head-to-head). This is NOT a loss -- it is an enhancement that adds experiments not in the source. The HTML's Experiment A (naked test) and Experiment E (head-to-head) are new additions.
- **Philosophy shift from "cheapest first, stop when validated" to "run all 5, no pre-commitment."** Source uses conditional sequencing (Exp B runs only if Exp A < 3.0; Exp C runs only if scientifically curious). HTML explicitly states "ALL 5 EXPERIMENTS -- RUN THEM ALL, CHEAPEST FIRST" with "No pre-commitment." This is a philosophical change.

**What the HTML drops:**
- **Experiment A narrative ("The Story").** Source uses an architect metaphor to set up the experiment. HTML drops the narrative framing.
- **Experiment B detailed procedure.** Source gives 5 numbered steps with specific details (orchestrator reads content and produces content brief ~50-80 lines, core agent receives conventions + content + tokens + prohibitions, 3 gates fire during build, Mode 4 PA, fix cycle with SAME core agent). HTML compresses to 1-2 sentences.
- **Experiment C detailed recipe ceiling hypothesis.** Source explains Report 85's prediction that recipes cap quality at 3/4 for complex content. HTML mentions "recipe ceiling hypothesis" but drops the theoretical basis.
- **Q20 pre-test.** Source includes a full description of Q20 (change ONLY perception thresholds while keeping format/specificity identical to Flagship) with 3 outcome scenarios, a confound variables table, and a relationship-to-ABC section. HTML drops Q20 entirely.
- **Measurement standard details.** Source specifies blind scoring: "Auditors do NOT know which experiment produced the artifact." HTML preserves the "blind" mention but drops the emphasis on why this matters.
- **Timeline (Day 1 / Day 2 / Day 3 breakdown).** Source provides a 3-day breakdown with per-day hour estimates. HTML drops this timeline.

**What an implementer needs from source:**
- Experiment B 5-step procedure (needed to run the Fat Core experiment)
- Q20 pre-test protocol (if diagnostic investigation is needed)
- Blind scoring protocol detail (needed for PA evaluation setup)
- Per-experiment cost estimates (for planning)

---

### Section 8: The Implementation Order (08-implementation-order.md)

**Source:** 402 lines. 7-step dependency chain with per-step descriptions including what to build, why at this position, dependencies, and what depends on it. Includes the fast path, the complete timeline table, and "What NOT to Build."

**What the HTML preserves:**
- Dependency diagram as a code block -- preserved nearly verbatim
- Step-by-step summaries (1-3 sentences per step)
- The fast path (Steps 1+2+3+7 = 4-8 hours)
- Complete timeline table
- Decision gates at Steps 3 and 6

**What the HTML drops:**
- **Step 2 conventions brief 5-section detail.** Source provides ~15 lines per section with specific content guidance (e.g., Section 4: "Minimum 8 distinct mechanisms across 5 categories (Spatial 1+, Temporal 1+, Material 1+, Behavioral 1+, Relational 1+)"). HTML reduces to section names only.
- **Step 4 gate details.** Source lists all 3 gate categories (Soul SC-01-05, Structure SC-06-08/12/15, Perception SC-09-11/13/14) with their pass criteria. HTML compresses to "15 programmatic checks via Playwright."
- **Step 5 orchestrator 9-step sequence.** Source repeats the 9 steps from Section 3 with implementation-order context. HTML compresses to a bulleted sub-list.
- **"What NOT to Build" section.** Source has two subsections: "Do not build before experiments" (5 items) and "Do not build at all unless experiments prove otherwise" (4 items). HTML drops this entirely.
- **CRITICAL: Section 8 uses 192px for stacking threshold in multiple places.** Source section 08 references 192px (lines 89, 93, 100, 127, 136, 217) while section 04 explicitly resolves this to 108px. The HTML correctly uses 108px throughout, silently fixing this inconsistency. An implementer reading only Section 8 would get the wrong threshold.

**What an implementer needs from source:**
- Step 2 conventions brief section-by-section content guidance
- "What NOT to Build" list (critical scope control)
- The 192px vs 108px inconsistency awareness (Section 8 uses wrong number; Section 4 corrects it)

---

### Section 9: Why This Won't Fail (09-why-this-wont-fail.md)

**Source:** 565 lines. 9 diagnosed failures with: what happened (multi-paragraph narrative), why it happened (root cause analysis), and how Fat Core prevents it. Also includes the meta-pattern table, the "What Could Still Go Wrong" section with 5 acknowledged risks.

**What the HTML preserves:**
- All 9 failures by name with 2-3 sentence "what happened" + "how prevented" summaries
- The meta-pattern table (in a collapsible block)
- All 5 "what could still go wrong" risks with mitigations
- The key conclusion: "every failure was an instance of trying to encode compositional intelligence into documents"

**What the HTML drops:**
- **"Why It Happened" root cause analysis for each failure.** Source provides multi-paragraph root cause analysis. For example, Failure 1 (Guardrail Factory): "Analysis is the default mode for LLM agent teams. When you tell agents to 'analyze' or 'audit,' they produce constraints. They do not produce recipes unless you explicitly ask for recipes. The pipeline never asked." HTML drops all "why it happened" sections.
- **Failure 2 (Visibility Cap) specifics.** Source details: 71 of 530 lines visible, the Extract Creator agent role, the compression pathology (WHAT to check survives, HOW to achieve dies), and the two-instance pattern context. HTML compresses to 2 sentences.
- **Failure 3 (Inverted Routing) specifics.** Source names the specific files misrouted (mechanism-catalog, scale-channel invocation, multi-coherence invocation) and the specific missing file (16-multi-coherence-invocation.md). HTML drops file names.
- **Failure 4 (Imperceptible Deltas) CSS detail.** Source provides specific measurements (letter-spacing 0.001-0.01em, at 16px = 0.016px to 0.16px, both below 0.5px threshold). HTML preserves the headline numbers but drops the calculation.
- **Failure 5 (S-09 Stacking) arithmetic example.** Source provides: section-bottom-padding (64px) + divider-margin-top (48px) + divider-height (3px) + divider-margin-bottom (32px) + next-section-padding-top (32px) = 179px. HTML drops the arithmetic.
- **Failure 7 (Compression Death) five critical losses.** Source lists: channel deployment checklist, Scale 5 operational CSS playbook, channel anti-pattern library, restraint map format, cascade value table -- all ABSENT from the builder's view. HTML drops this specific loss inventory.
- **Failure 7 boundary loss table.** Source gives intelligence loss percentages per boundary (B0: ~0%, B1: ~5%, B2: 0%, B3: ~10%, B4: ~15%, B5: ~10%, B6: 0%). HTML drops percentages.
- **Failure 8 (Checklist vs Recipe) comparison table.** Source provides a 6-row comparison (Format, Verbs, CSS values, Build workflow, Tone, PA-05) between Middle (recipe) and Flagship (checklist). HTML drops the table.
- **Failure 9 (660:1 Ratio) complexity ratchet analysis.** Source explains: rules only accumulated, never retired; no sunset protocol; attention budget problem (15-20 simultaneous rules max, prompt grew to 97). HTML drops this analysis.

**What an implementer needs from source:**
- Root cause analyses (understanding WHY failures happened prevents accidentally reproducing them in PV2 implementation)
- Failure 7 five critical losses (these items must be present in the core agent's input to avoid the same gaps)
- Failure 8 recipe vs checklist comparison table (guides the conventions brief writing)

---

## Critical Gaps: What an Implementer NEEDS That's Missing

### Gap 1: Copy-Paste Edit Specifications (BLOCKING)
**Severity: HIGH.** Section 4 (files to edit) provides exact current/new content blocks for all 10 edits. These are the SPECIFICATION -- without them, an implementer must re-derive every edit from context. The HTML drops ALL of these. An implementer cannot make the edits from the HTML alone.

### Gap 2: Gate Runner Technical Specifications (BLOCKING for Step 4)
**Severity: HIGH.** Section 5 provides Playwright selectors, getComputedStyle calls, and fix recipe templates for all 15 gates. These are the specification for writing gate-runner.js. The HTML drops all measurement implementations. An implementer cannot write gate-runner.js from the HTML alone.

### Gap 3: Core Agent Input Assembly (BLOCKING for Step 5)
**Severity: HIGH.** Section 6 provides the exact file-to-agent routing table (what the core agent receives, what it consults as reference, total line counts). The HTML drops this table. An implementer cannot write the orchestrator's routing logic from the HTML alone.

### Gap 4: Conventions Brief Content Specification (BLOCKING for Step 2)
**Severity: HIGH.** Section 3 provides per-section content guidance for the conventions brief (Section 1: specific thresholds, Section 4: per-category mechanism minimums, Section 5: creative authority quote). The HTML reduces each section to its name. An implementer cannot write the conventions brief from the HTML alone.

### Gap 5: PA Question Assignment Table (MODERATE for Step 5)
**Severity: MODERATE.** Sections 2 and 6 both provide the auditor-to-question mapping. The HTML drops it. The orchestrator needs this to spawn auditors correctly.

### Gap 6: 192px vs 108px Inconsistency (MODERATE -- SILENTLY FIXED)
**Severity: MODERATE.** Section 8 uses 192px for stacking threshold. Section 4 explicitly resolves this to 108px. The HTML silently uses 108px throughout. An implementer reading only Section 8's source would get the wrong value. The HTML correctly fixes this but doesn't document the discrepancy.

### Gap 7: "What NOT to Build" Scope Control (MODERATE)
**Severity: MODERATE.** Section 8 lists 9 items that should NOT be built. The HTML drops this list. Without it, an implementer may build unnecessary artifacts (transition table YAML, fractal echo table, per-agent memory files, 650-line recipe).

### Gap 8: Gate-Registry.js Code Snippet (LOW for Step 4)
**Severity: LOW.** Section 3 provides a ~35-line JavaScript starter for gate-registry.js. The HTML drops it. Not blocking (the implementer can write this from the threshold table), but it would save time.

---

## Suggestions for Restoring Depth Without Hurting Readability

### Approach 1: Targeted Collapsible Expansions (Recommended)
Add `<details>` blocks for implementation-critical content that the HTML currently omits:

1. **Edit specifications collapsible per edit.** Each Edit in Section 4 already has a collapsible. Add the current/new content blocks INSIDE the existing collapsibles. This adds ~400 lines of content but zero visual weight since they are collapsed by default.

2. **Gate measurement collapsible.** The gate-by-gate detail collapsible in Section 5 already exists. Expand each gate entry from 1-2 sentences to include the Playwright selector and fix recipe template (~200 additional lines, collapsed).

3. **Core agent input table.** Add a small collapsible after the "12 Agents" code block in Section 2 or in the Build Flow section showing the file-to-agent routing table (~15 lines).

4. **Conventions brief section specs.** The conventions brief description in Section 3 already lists the 5 sections. Add a collapsible with 3-4 lines of content specification per section (~25 lines).

### Approach 2: Companion Document (Alternative)
Create a separate "PV2 Implementation Companion" document containing ONLY the implementation-level specifics: edit blocks, gate specs, routing tables, code snippets. The HTML guide links to it with "For implementation details, see the Companion." This preserves the HTML's readability as a decision document while providing a separate implementation reference.

### Approach 3: Inline Anchored Footnotes (Lightest Touch)
For each dropped detail, add a sentence like "For exact CSS, see 04-files-to-edit.md, Edit 1" or "Gate measurement selectors: see 05-gate-system.md, SC-09." This costs almost nothing in readability but provides explicit pointers for implementers.

### Recommendation
Use Approach 1 (targeted collapsible expansions) for Gaps 1-4 (the BLOCKING gaps) and Approach 3 (inline source pointers) for Gaps 5-8 (the MODERATE/LOW gaps). This restores implementation depth where it is essential while keeping the main reading experience clean.

---

## Addendum: Content the HTML ADDS Beyond Source Sections

The HTML is not purely a synthesis -- it adds substantial new content:

1. **Visual Overview section** (lines 405-785 of HTML). Contains 4 rich diagrams:
   - The Complete Build Flow (inline CSS flowchart with color-coded boxes)
   - The 5-Layer Compositional Intelligence Stack (pyramid visualization)
   - The Intelligence Heatmap (table with colored bar indicators showing layer survival per pipeline stage)
   - Architecture Comparison table (Master Prompt vs Original PV2 vs Updated PV2 vs Fat Core across 12 dimensions)

   None of these diagrams appear in any source section. They are editorial additions that significantly enhance understanding of the architecture.

2. **"What Comes After" section** (lines 1848-1903 of HTML). Describes Phases E through J (hardening, pilot migration, playbook refinement, freeze line, Track 1 migration, Track 2 migration, content ingestion) with timeline. Not in any source section.

3. **Experiment count expansion.** Source describes 3 experiments; HTML describes 5. The additions (Naked test and Head-to-head) align with the no-compromise philosophy stated in the You Are Here box.

4. **No-Compromise Philosophy box** (lines 375-380). This framing device does not appear in any source section. It sets the editorial tone for the entire document.

These additions are well-considered and add real value. They should be noted as editorial enhancements rather than source preservation.
