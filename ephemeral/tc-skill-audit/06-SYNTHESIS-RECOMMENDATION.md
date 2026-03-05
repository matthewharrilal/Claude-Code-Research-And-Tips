# TC Skill Audit: Unified Synthesis and Recommendation

**Agent:** synthesizer
**Task:** #6 -- Synthesize 10 audit reports into actionable recommendation
**Date:** 2026-03-01
**Architecture:** Three separate skills (/tension-composition, /build-page-v2, /perceptual-auditing) per user directive. Each uses TeamCreate for comprehensive teams. Rotation mechanism DEFERRED to v2.

---

## 1. Where All 10 Reports AGREE (High-Confidence Recommendations)

These findings have unanimous or near-unanimous convergence across reports. They represent the safest, highest-value changes.

### 1A. TC's Process Core Is Genuinely Valuable

**Reports:** 01 (classification), 02 (bias), 04 (Phase 3), 05 (Phase 4), 09 (integration), 10 (adversarial), 11 (feedback loops)

All agents agree: Phases 1-3 (multi-axis questioning, tension derivation, metaphor collapse) contain the real compositional thinking method. Specifically:

- **The 9 axes of questioning** (FEEL/UNDERSTAND/DO/BECOME + extended) are the ENGINE of TC
- **The Addition Test, BECAUSE test, SUBSTITUTION test** are universally sound diagnostics
- **The "constructing, not discovering" principle** is the skill's most important metacognitive framing
- **The tension derivation logic** (three criteria for genuine tension, tension spectrum) is system-agnostic

**Estimated PROCESS content:** ~545 lines of the ~1,074 total (51%) is pure or mixed PROCESS. This is the core that must survive any refactoring.

### 1B. KortAI-Specific Content Must Leave the Skill

**Reports:** 01 (classification: ~80 lines KortAI-specific), 02 (bias: 4 HIGH BIAS items are all KortAI-derived), 03 (dynamic: ~80 lines of KortAI content identified), 09 (integration: design-system-agnostic skill proposed), 10 (adversarial: agrees with removing KortAI content from skill)

**Unanimous:** The personality spectrum (lines 200-211), tension landscape quick reference (lines 281-297), domain compatibility/incompatibility lists (lines 370-382), CSS channel specifics (lines 533-543), and scattered "for KortAI" references do not belong in a compositional thinking skill. They belong in the design system's own files.

**What moves where:**
- Personality spectrum -> design system file (e.g., `compositional-core/identity/system-personality.md`)
- Tension landscape -> design system file (as observed history, not as universal truth)
- Domain compatibility -> REMOVED entirely (see 1D below)
- CSS channel specifics -> derived from design system vocabulary at runtime

### 1C. The "ZERO Tension" List and Pre-Ranked Tensions Must Go

**Reports:** 02 (bias: HIGH BIAS, pre-closes doors), 10 (adversarial: agrees these should be removed)

The tension landscape quick reference declares specific tensions as "STRONGEST" and others as "ZERO." This:
- Pre-ranks tensions before content is read (channeling)
- Closes doors on valid tensions (hierarchy content AGAINST a hierarchical system = genuine tension)
- Contradicts the skill's own epistemology ("constructing, not discovering")
- Is based on N=15 from 3 content sources, presented as universal truth

**Action:** Remove the pre-ranked tension list and "ZERO tension" declarations entirely.

### 1D. The 10-Domain List and Incompatible Domain Families Must Go

**Reports:** 02 (bias: HIGH BIAS), 04 (Phase 3: identified as domain-forcing), 10 (adversarial: agrees with removal), 11 (feedback loops: domain search territory prevents emergence)

The fixed list of 10 "compatible domains" and 5 "incompatible domain families" channel the creative search:
- LLMs weight earlier list items (Geological/Sedimentary is disproportionately selected)
- The incompatible families are judged at the wrong abstraction level (musical SCORE is angular; woven FABRIC is a grid)
- The list encodes past experiment success, not complete creative possibility
- Providing a menu promotes DISCOVERY over CONSTRUCTION

**Action:** Remove both lists. The search query format and structural property extraction are sufficient to guide domain search. The agent generates candidates from structural overlap, not from a pre-approved menu.

### 1E. Pipeline-Assumption Content Must Be Removed or Rearchitected

**Reports:** 01 (classification: ~209 lines / 19% is PIPELINE-ASSUMPTION), 07 (PA: 49% of PA content is pipeline infrastructure), 09 (integration: detailed architecture for what stays/goes)

Across TC + PA combined, roughly 25-30% of all content exists solely because TC and builder were separate agents, or because PA was orchestrated by a multi-agent pipeline. This includes:
- Sub-skill vs standalone mode branching
- Fix cycle escalation (TYPE A/B/C)
- Exploration recommendation loading
- Phase numbering tied to orchestrator routing
- Agent prompt templates (PA TEAM.md: 840 lines, ~100% pipeline)
- 7 binary gates as orchestrator-checked validation (PA GATES.md: 534 lines, ~90% pipeline)

**Action:** Strip all pipeline-assumption content. The three skills are designed for TeamCreate invocation, not for orchestrator-managed sub-agent spawning.

### 1F. PA's Evaluation Methodology Is Sound and Needs Minimal Change

**Reports:** 07 (PA audit: ~0% channeling, 42% process), 10 (adversarial: does not challenge PA)

PA is the opposite of TC: its process is clean, its infrastructure is bloated. The 28 perceptual questions are open-ended, the language constraint is well-designed, the severity tracks are useful, and the fresh-eyes principle is non-negotiable.

**PA cleanup is architectural, not conceptual:**
- Keep: One Rule, Cold Look, 28 questions, language constraint, anti-patterns, severity tracks, sovereignty principle, forcing questions, bridging questions, metaphor awareness, embedded Q1-Q3
- Remove: TEAM.md entirely (840 lines), GATES.md entirely (534 lines), most of PROTOCOL.md sections 1-2, 10-12 (~200 lines)
- Estimated PA process content: ~450 lines (down from ~2,981)

---

## 2. Where Reports CONTRADICT Each Other

### 2A. Domain Metaphors: Broaden or Preserve?

**For broadening:** Reports 04 (Phase 3), 05 (Phase 4), 11 (feedback loops)
- Domain-noun forcing channels the search query
- Non-domain ideas (dynamics, behaviors, experiences) are legitimate compositional bridges
- Alexander's patterns, Laban movement analysis, musical counterpoint all demonstrate non-domain composition
- Some content produces tensions that don't naturally collapse into domain metaphors

**Against broadening:** Report 10 (adversarial)
- Domains have FREE PHYSICS (internal consistency without invention)
- Non-domain ideas produce sparser isomorphism tables (3-6 vs 6-10 mappings)
- ZERO successful builds in project history used a non-domain compositional idea
- Lowering the structural mapping threshold accommodates weakness, doesn't find strength
- LLMs default to the path of least resistance; "this page deepens" is easier than "geological strata"

**SYNTHESIS RECOMMENDATION:**

The adversarial reviewer is right that domains are the highest-proven-value path. The broadening advocates are right that the current framing artificially restricts the creative space.

**Resolution:** Broaden the search query from "What real-world domain..." to "What compositional idea..." BUT:
1. Keep domain metaphors as the EXPECTED primary output (most content will naturally produce domain metaphors)
2. Allow non-domain ideas as a valid secondary path
3. Apply the SAME structural mapping threshold to all ideas (not a lower bar for non-domains)
4. Add a **Compositional Actionability Gate**: the idea must suggest specific decisions in 4+ of the 6 CSS channels
5. Add a **Physics Articulation Requirement** for non-domain ideas: if the idea lacks natural physics, the agent must articulate the rules of its compositional world in 3-5 sentences
6. The Generativity Test catches obvious/flat ideas regardless of type

This preserves domains' proven value while opening a door (not flinging it open) for compositional ideas that genuinely cannot be captured as domain nouns. The door has a quality threshold.

### 2B. Dynamic Side B: Full Dynamic, Static, or Hybrid?

**For full dynamic (Approach B):** Reports 03 (dynamics), 11 (feedback loops)
- Content-sensitive reading of the design system
- Agent forms its OWN understanding rather than inheriting someone else's summary
- Eliminates the 27:1 compression from ~950 lines to ~35 lines

**For static preservation:** Report 10 (adversarial)
- Static summary represents accumulated wisdom from 50+ experiments
- Fresh reading can be SHALLOWER, not deeper
- Inconsistency across invocations risks visual inconsistency across pages

**For hybrid (Approach C):** Reports 03 (dynamics -- recommended C), 10 (adversarial -- agreed with C + safety net)

**SYNTHESIS RECOMMENDATION:**

Approach C (hybrid) with the adversarial reviewer's safety net. Specifically:

1. **The TC skill teaches a System Reading Protocol** (~40 lines) -- HOW to read any design system (soul constraints, structural vocabulary, personality characterization, internal tensions, generative properties, zero-tension territories, highest-tension territories)
2. **The skill contains NO design-system-specific content** -- it is fully design-system-agnostic
3. **The design system provides a `system-personality.md` file** in its identity directory containing the curated personality spectrum, observed tension landscape, and domain compatibility notes as SUPPLEMENTARY context
4. **The agent reads the actual files first**, then optionally cross-references the curated personality summary
5. **Significant divergences between the agent's reading and the curated summary trigger investigation**, not blind acceptance of either

This gives the agent fresh, content-sensitive engagement with the design system while preserving the accumulated wisdom as an available resource (not a prescriptive input).

### 2C. Single Agent for TC+Building, or Keep Them Separate?

**For merging:** Reports 09 (integration), 11 (feedback loops -- "TC and building CANNOT be separated")
- Eliminates 50:1 compression loss at TC->builder boundary
- The agent who questioned content writes the CSS (no transmission loss)
- The conviction brief becomes a 15-20 line self-commitment instead of an 80-120 line handoff
- Feedback-loop composition requires the thinking agent to be the building agent

**Against merging (yet):** Report 10 (adversarial -- UNDERDETERMINED)
- Context window pressure (5,000-7,000 lines of active context)
- Compositional thinking and CSS writing are different cognitive modes
- The two-instance pattern defeats continuation bias
- ZERO experiments comparing single-agent vs two-agent builds

**SYNTHESIS RECOMMENDATION:**

This is a critical tension. The composition-researcher's finding is theoretically compelling: "TC's value is the changed state of the agent who has done the thinking. The output is not a document; the output is perceptual readiness." If TC's value is perceptual readiness, then transmitting it via a document is inherently lossy.

BUT the adversarial reviewer is right that this is UNTESTED. The theoretical argument is strong; the empirical evidence is zero.

**Resolution for the skill architecture (NOT the experiment question):**

The TC skill and the build-page-v2 skill are SEPARATE FILES (user directive: three separate skills). But when build-page-v2 orchestrates, the SAME agent instance should:
1. Run TC's thinking process (from the TC skill instructions)
2. Produce a self-commitment (not a handoff brief)
3. Build the HTML page

The skill FILES are separate (composable, independently invocable). The EXECUTION is unified within a single agent session when orchestrated by build-page-v2.

This means:
- `/tension-composition` can be invoked standalone (produces thinking + optional HTML in standalone mode)
- `/build-page-v2` spawns ONE Opus agent that reads TC skill instructions, does TC thinking, then builds
- The combined agent's prompt includes both TC process and building instructions
- PA is invoked SEPARATELY afterward with fresh eyes

If experiments later show that two agents produce better results, the architecture supports splitting the TC thinking and building into separate agents without redesigning the skills.

### 2D. Linear Decomposition vs Non-Linear Composition

**For non-linear:** Reports 05 (Phase 4), 11 (feedback loops)
- Phase 4's linear decomposition prevents emergence
- Schon's "conversation with the situation," Alexander's generative codes, musical counterpoint all demonstrate non-linear composition
- The coherence model is too rigid (no contrary motion)
- Fractal self-similarity is too rigid (no scale-dependent transformation)
- "Composition is a conversation, not a plan"

**For preserving linearity:** Report 10 (adversarial)
- Every creative process has structure
- Non-linear composition sounds beautiful but may produce incoherence
- The top-down build order is justified (macro before micro)
- Linear decomposition produces implementable CSS
- Non-linear composition has NEVER produced a better page in this project's history

**SYNTHESIS RECOMMENDATION:**

Both sides are right about different things. The SPECIFIC rigidities in Phase 4 should be fixed. The OVERALL linear structure should be preserved as a reliable path.

**Fix these specific issues within the linear framework:**
1. **Coherence model**: Allow "DIVERGENT" as a valid transition direction. Channels can intentionally oppose each other at a boundary if the divergence is perceptible and purposeful.
2. **Fractal consistency**: Replace "self-similar at all scales" with "compositional idea perceptible at 3+ scales, potentially expressed through DIFFERENT channels at each scale." Scale-dependent transformation, not replication.
3. **Density patterns**: Present the 4 known patterns as illustrative examples, not as the complete taxonomy. Add: "Your content may suggest a density flow not described here. Derive from the compositional idea's properties."
4. **Transition table**: Allow as a pre-build planning tool OR a mid-build/post-build assessment tool. Not exclusively pre-build.

**Add perception prompts as a LIGHTWEIGHT supplement:**
After major building moves, include prompts like:
- "What do you notice about what you've built that you didn't plan?"
- "If an unplanned relationship emerges between elements, amplify it rather than correcting it."
- "After implementing section N+1, check whether section N still works as intended."

These add ~10-15 lines to the skill and introduce feedback-loop awareness WITHOUT abandoning the linear structure that produces reliable implementations.

**Do NOT restructure Phase 4 as a generative code system.** The research on feedback-loop composition (Report 11) is intellectually rich but represents an aspirational model that has never been tested in this context. The linear model has produced SHIP-quality pages. Introduce perception prompts as a first step; if they demonstrably improve results, consider deeper restructuring.

---

## 3. Line-Level Guidance for TC Skill: KEEP / REMOVE / TRANSFORM

Based on Report 01 (classification map) cross-referenced with all other reports:

### KEEP AS-IS (high-value PROCESS, no changes needed)

| Section | Lines | Reason |
|---------|-------|--------|
| Critical Principle ("CONSTRUCTING, not DISCOVERING") | 6-24 | Foundational metacognitive framing. Unanimously valued. |
| Phase 0A-0C: Content Assessment | 46-67 | Pure process. Content type, scope, section identification. |
| Phase 1: Core Four axes (FEEL/UNDERSTAND/DO/BECOME) | 98-106 | The ENGINE of TC. Structured questioning tools. |
| Phase 1: Extended axes (5 additional) | 107-117 | Disciplined inquiry. "Mark LOW YIELD when they don't produce genuine needs." |
| Phase 1: Axis Selection Protocol | 131-137 | Procedural sequencing. |
| Phase 2: Addition Test | 220-227 | Brilliant diagnostic. Works for ANY design system. |
| Phase 2: Three Criteria for Genuine Tension | 228-237 | Universal compositional theory. |
| Phase 2: Three Criteria for Cosmetic Tension | 239-244 | Universal diagnostic. |
| Phase 2: Tension Spectrum | 246-256 | Conceptual map of tension space. |
| Phase 2: Deriving Tension (6-step procedure) | 258-268 | Pure thinking tools. BECAUSE test, SUBSTITUTION test. |
| Phase 2: Evaluating Tension Richness | 269-279 | Three dimensions, multiplicative insight. |
| Phase 2: Tension Validity Check | 298-306 | Four honest questions. "If any check fails, accept assembly." |
| Phase 3: Steps 3.1, 3.3 (structural extraction, overlap) | 324-333, 343-348 | Universal structural thinking. |
| Phase 3: Step 3.4 Search Query | 349-358 | Core creative search format (but TRANSFORM the "domain" wording). |
| Phase 3: Interpretive Distance | 412-416 | Universal creative principle. |
| Phase 3: Step 3.6 Select Metaphor | 418-424 | Disciplined creative decision-making. |
| Phase 3: Metaphor Failure Modes | 426-432 | Universal diagnostic toolkit. |
| Phase 3: Irreducible Creative Step | 434-442 | Honest about where process ends and creativity begins. |
| Phase 3.5: Commitment Gate | 453-503 | Lock-in discipline. Creative check ("Are you EXCITED?"). |
| Phase 4: RICHNESS equation | 519-529 | Compositional theory. (Add provenance note per Report 02.) |
| Phase 4: "Build boundary-by-boundary" | 531 | Single most important building instruction. |
| Phase 4: Pacing Assessment | 585-599 | Universal scroll rhythm questions. |
| Phase 4: Adapt Before Inventing | 617-625 | Universal component economy. |
| Phase 4.7: Builder Reflection (6 dimensions) | 795-821 | Universally valuable creative reflection. |
| Standalone: Edge Cases | 64-89 | Genuine process wisdom. |

### REMOVE (pipeline-assumption, compression, or harmful channeling)

| Section | Lines | Reason |
|---------|-------|--------|
| Frontmatter (skill trigger phrases) | 1-4 | Replaced by TeamCreate invocation. |
| Pipeline phase diagram (ASCII) | 31-36 | Orchestrator routing. Phase numbering is pipeline-specific. |
| Standalone appendix reference | 37-38 | No sub-skill/standalone distinction. |
| Phase 0D "Sub-skill mode" | 69-75 (partial) | Remove pipeline routing. Keep "Peak richness occurs at maximum content-mechanism fit." |
| Phase 0E: Library prohibition file paths | 77-91 (partial) | Keep the PRINCIPLE (don't read examples before derivation). Remove specific file system paths. |
| Phase 1: Axis Interaction Effects | 150-158 | CHANNELING. Pre-specified pairs from limited experiments. |
| Phase 1: Opposition Principle rankings | 138-148 (partial) | Keep the opposition principle. Remove specific axis rankings ("richest," "cosmetic"). |
| Phase 2: Side B KortAI personality | 184-218 | CHANNELING. Move to design system file. Replace with System Reading Protocol. |
| Phase 2: Soul Test (5 questions) | 213-218 | CHANNELING. KortAI-specific taste encoding. |
| Phase 2: Tension Landscape Quick Reference | 281-297 | HIGH BIAS. Pre-ranked tensions from N=15. |
| Phase 2: Exit Ramp routing | 308-315 (partial) | Remove pipeline-specific "Skip Phases 3-4" routing. Keep tension threshold concept. |
| Phase 3: Domain Search Territory | 370-372 | HIGH BIAS. 10-domain lookup table. |
| Phase 3: Incompatible Domain Families | 374-382 | MEDIUM BIAS. Surface-level incompatibility. |
| Phase 3.5Z: Zone Architecture (Sub-Skill Only) | 505-514 | PIPELINE-ASSUMPTION. Sub-skill mode doesn't exist. |
| Phase 4: 6 CSS Channels (KortAI specifics) | 533-544 | CHANNELING. Channel identifiers are universal; specific constraints (primary red, 5 accent colors) are KortAI. Replace with "identify channels from your design system vocabulary." |
| Phase 4.0: Mechanism Library Access timing | 546-559 (partial) | PIPELINE-ASSUMPTION. Keep principle of documenting mechanism rationale. Remove phased-access timing. |
| Phase 4.5: Conviction Brief (entire phase) | 654-788 | COMPRESSION + PIPELINE-ASSUMPTION. Replaced by self-commitment (~15-20 lines). See Section 4 below. |
| Phase 4.5: Exploration Recommendation | 767-788 | PIPELINE-ASSUMPTION. Context window loading for a separate builder. |
| Fix Cycle protocol | 825-838 | PIPELINE-ASSUMPTION. TYPE A/B/C escalation. |
| Standalone appendix: Output A (Conventions Brief) | 13-35 | COMPRESSION. Handoff artifact. |
| Standalone appendix: Invocation instructions | 203-215 | PIPELINE-ASSUMPTION. Replaced by TeamCreate. |
| Standalone appendix: Test content recommendations | 182-200 | CHANNELING. Pre-predicts metaphor spaces for specific content. |

### TRANSFORM (keep the principle, change the expression)

| Section | Lines | Transformation |
|---------|-------|---------------|
| Phase 0D: "Every page runs the FULL pipeline" | 69-75 | Keep the principle. Remove "16-18 mechanisms" target (mild channeling). Remove sub-skill routing. |
| Phase 0E: Library prohibition | 77-91 | Keep: "Do not read vocabulary/examples before deriving your own compositional idea." Remove: specific file paths. |
| Phase 1: Structural Trigger Axes | 119-130 | Keep: conditional axes triggered by content signals. Remove: pre-specified structural patterns ("Side-by-side layout, comparison tables" for COMPARE). Let the questioning produce its own structural implications. |
| Phase 1: Opposition Principle | 138-148 | Keep: "Axes whose demands OPPOSE the system produce richer tension." Remove: ranked list of specific axes. Remove: "cosmetic" label for TRUST/DO/ORIENT. Add: "Derive which axes oppose YOUR system from the System Reading Protocol." |
| Phase 1: Output format | 160-173 | Transform from COMPRESSION (table for next agent) to internal working notes (the agent's own reference for tension derivation). |
| Phase 2: Side B | 184-218 | Replace with System Reading Protocol (~40 lines). Agent reads design system files and derives personality through guided questions. See Section 5 below. |
| Phase 3: Step 3.2 | 335-342 | Keep the METHOD (transform design constraints into abstractions). Remove the SPECIFIC EXAMPLES (`border-radius: 0` -> ANGULARITY). These come from the System Reading Protocol output, not from hardcoded examples. |
| Phase 3: Search query | 349-358 | Broaden from "What real-world domain..." to "What compositional idea resolves the opposition..." Allow domain, dynamic, behavioral, relational, experiential, or emergent ideas. |
| Phase 3: Three Search Heuristics | 360-368 | Keep constraint scan, content resonance, emotional valence. Generalize language (remove "for KortAI, ANGULARITY is hardest"). |
| Phase 3: Binary Rejection Checks | 401-410 | Keep R1 (reframe for non-domain ideas), R2, R3, R6 as-is. Soften R4 (distinguish deliberate breathing from dead zones). Soften R5 (context-dependent, not hard "6+" threshold). |
| Phase 3: Step 3.5C | 471-481 | Remove specific file path references. Keep the self-interrogation: "Did I derive independently? Can I justify without reference material?" |
| Phase 3: Cultural Consideration | 444-449 | Keep "prefer universal over regional." Remove specific examples (crystal formation > origami). |
| Phase 4: 5-Category Extraction | 562-583 | Keep the 5 categories (Spatial/Temporal/Material/Behavioral/Relational). Transform from "extract FROM metaphor" to "describe your composition's properties ACROSS these 5 dimensions." This accommodates non-domain ideas. |
| Phase 4: Density Patterns | 574-583 | Keep as "4 Observed Density Patterns (illustrative, not exhaustive)." Add: "Your content may suggest a density flow not described here." Remove "The metaphor determines WHICH pattern." |
| Phase 4: Coherence | 601-616 | Keep: multi-channel simultaneous shifts at boundaries. Transform: allow "DIVERGENT" as valid direction (contrary motion). Add: divergence must be intentional and perceptible. |
| Phase 4: Fractal Consistency | 627-641 | Transform from "SAME pattern at ALL 5 scales" to "compositional idea perceptible at 3+ scales, expressed through potentially DIFFERENT channels at each scale." Remove mandatory top-down build order. |
| Phase 4: Concept-Based CSS Naming | 643-651 | Keep the principle (name by intent, not position). Remove expectation of domain vocabulary specifically. Any compositional intent vocabulary works. |
| Phase 4.7: Reflection Rules | 815-821 | Remove "Written BY the builder" (pipeline assumption). Keep "Written BEFORE audit" and "Written as DIRECTION, not FINDINGS." |
| Standalone: Phase 5 (Divergence Verification) | 93-170 | Transform from case-study-library comparison to general divergence awareness: "Have you seen this compositional approach before? If it feels familiar, what makes THIS instance specifically derived from THIS content?" |
| RICHNESS equation | 519-529 | Keep as a valuable lens. Add provenance note: "This model was proposed during scale exploration research and has shown utility but is not the only valid richness framework." |

---

## 4. The Three-Skill Architecture

### 4A. How They Interface

```
USER: /build-page-v2 content.md
         |
BUILD-PAGE-V2 SKILL (thin orchestrator, ~150-200 lines):
  1. Creates output directory
  2. Spawns ONE Opus agent with TC + building instructions
  3. Agent does: THINK -> COMMIT -> BUILD -> REFLECT
  4. Verifies outputs (output.html, _commitment.md, _reflection.md)
  5. Captures screenshots, runs gate runner
  6. Invokes PA (TeamCreate: auditors + weaver)
  7. Routes on PA verdict (SHIP / REFINE / RETHINK)
  8. If REFINE: spawns DIFFERENT Opus with reflection + PA synthesis
         |
TENSION-COMPOSITION SKILL (~400-500 lines):
  - Loaded as instructions into the build agent's prompt
  - Sections 0-4: Content engagement, questioning, tension, compositional idea
  - Section 5: Self-commitment (15-20 lines, for self, not handoff)
  - Section 6: Building instructions
  - Section 7: Self-reflection
  - Can also be invoked standalone: /tension-composition content.md
    (produces thinking + optional HTML in standalone mode)
         |
PERCEPTUAL-AUDITING SKILL (~450 lines):
  - Invoked SEPARATELY after build completes
  - Fresh-eyes principle: auditors receive ONLY screenshots + questions
  - PA weaver receives auditor reports + builder's _commitment.md + _reflection.md
  - Produces: Verdict + Creative Direction (AMPLIFY/RELEASE/DEEPEN)
```

### 4B. What Each Skill Outputs

| Skill | Outputs | Who Consumes |
|-------|---------|-------------|
| **TC** (standalone) | Thinking notes + optional HTML | User directly |
| **TC** (via build-page-v2) | Understanding IN CONTEXT (no separate output -- the agent carries it into building) | The same agent |
| **Build-page-v2** | output.html, _commitment.md, _reflection.md | PA, user, REFINE builder |
| **PA** | Verdict (SHIP/REFINE/RETHINK) + Creative Direction + Experience Portrait | Build-page-v2 orchestrator, REFINE builder, user |

### 4C. What TC Outputs When Invoked Standalone

When a user invokes `/tension-composition content.md` directly (not through build-page-v2):

1. **Thinking notes** -- the agent's multi-axis questioning, tension derivation, compositional idea, and self-commitment. Written as working notes, not as a formal brief.
2. **Optionally: HTML page** -- if the user provides a design system to work with, TC can continue into building. If not, it produces the thinking output only.

This is the current "standalone mode" simplified: there's no separate STANDALONE-APPENDIX. The skill has a natural stopping point at self-commitment (for thinking-only invocation) and can continue into building (for full invocation).

### 4D. TeamCreate Usage Per Skill

**TC (standalone):** Single agent. No team needed. The thinking process is inherently single-agent (one mind engaging with content). If building is included, still single agent.

**Build-page-v2:** TeamCreate spawns:
1. One Opus agent (TC thinking + building + reflection)
2. PA team (see below) after build completes
3. Optionally: one REFINE Opus agent if PA verdict is REFINE
4. Gate runner (mechanical compliance check, can be programmatic)

**PA:** TeamCreate spawns:
1. 3-5 Opus auditors (question assignments distributed, fresh-eyes principle)
2. 1 Opus weaver (synthesizes auditor reports + builder context)
3. Optionally: 1 adversarial auditor (searches for what others missed)
4. Optionally: 1 fresh-eyes agent (zero context, different model or zero-shot)

---

## 5. Dynamic Side B: The System Reading Protocol

This replaces the static KortAI personality in TC's Phase 2. ~40 lines in the skill.

### 5A. What the Protocol Instructs

After completing Phase 1 (multi-axis questioning of content), the agent reads the design system's identity files. The skill instructs:

> Read your design system's identity and vocabulary files. For THIS SPECIFIC SYSTEM, derive:
>
> **1. Soul Constraints:** What does the system REFUSE? What CSS properties are absolutely prohibited? These refusals ARE the system's character.
>
> **2. Structural Vocabulary:** What spatial tools does the system provide? Border weights, spacing scale, grid system, color zones, typography options. These are the WORDS the system can speak.
>
> **3. Personality Characterization:** Where does the system sit on these axes?
>   - Warm <-> Austere
>   - Soft <-> Angular
>   - Playful <-> Serious
>   - Organic <-> Geometric
>   - Busy <-> Sparse
>   - Flexible <-> Rigid
>   Use qualitative descriptions ("strongly angular," "moderately warm") not numeric percentages.
>   Cite evidence from the files for each positioning.
>
> **4. Internal Tensions:** Where does the system contradict ITSELF? A system can be warm in palette but austere in geometry. These internal tensions are the richest creative territory.
>
> **5. Generative Properties:** Where do the system's constraints CREATE rather than merely PREVENT? What design solutions are FORCED into existence by the constraints?
>
> **6. Zero-Tension Territories:** What does the system already provide directly? (Hierarchy mechanisms, structural patterns, component inventory.) These are where the Addition Test returns YES.
>
> **7. Highest-Tension Territories:** Where does the system most strongly resist? What emotional/experiential needs have NO direct tool in the system's vocabulary? These are where composition lives.

### 5B. Safeguard: Cross-Reference

If the design system provides a curated personality file (e.g., `system-personality.md`), the agent reads it AFTER forming their own characterization and checks for significant divergences. Divergences trigger investigation, not blind acceptance.

### 5C. What Files to Read

The skill specifies the FILE TYPES to look for, not the specific paths:
- Prohibitions / soul constraints (what the system refuses)
- Design tokens (CSS variables, colors, spacing, typography)
- Component vocabulary (what's available to use)
- Mechanism catalog (reusable composition techniques)

When integrated with build-page-v2, the orchestrator provides the specific file paths for the current design system.

---

## 6. Phase 3 Broadening: How Far, With What Guardrails

### 6A. The Broadened Search Query

**Current:** "What real-world domain naturally exhibits [OVERLAP] while being [SIDE B GAP] yet conveying [SIDE A GAP]?"

**Broadened:** "What compositional idea resolves the opposition between [SIDE A GAP] and [SIDE B GAP] by working through [OVERLAP PROPERTIES]?"

This removes domain-noun forcing while preserving the constraint structure. The answer can be a domain, a dynamic, a behavior, a relationship, an experience, or something emergent.

### 6B. Guardrails for Non-Domain Ideas

Three new gates from Report 04 (Phase 3 broadening), endorsed by Report 10 (adversarial) with threshold adjustment:

1. **Compositional Actionability Gate:** For each of the 6 CSS channels, does this idea suggest a SPECIFIC decision? Threshold: 4+ channels with specific decisions = actionable. Below 4 = too vague, either concretize or search for a domain metaphor.

2. **Physics Articulation Requirement:** Non-domain ideas must articulate their own physics in 3-5 sentences. "This page accelerates" must become "spacing compresses from 64px to 24px, typography weight increases from 400 to 500, backgrounds darken from #fefaf5 to #f5f0e8, information density doubles per zone." If physics can't be articulated, the idea is too abstract.

3. **Generativity Test:** Does this idea suggest CSS decisions you wouldn't have made otherwise? If it produces only obvious decisions (darken backgrounds, tighten spacing), it's insufficiently generative. Reject and search again.

### 6C. Evaluation Is Type-Blind

Domain metaphors and non-domain ideas are evaluated by the SAME criteria: structural mapping richness, actionability, generativity, interpretive distance. A domain that produces 3 thin mappings loses to a dynamic that produces 5 rich ones. No category privilege, only quality discrimination.

---

## 7. Phase 4 Restructuring: What Stays, What Goes, What Transforms

### 7A. Universal Principles (KEEP, ~40 lines)

These survive any refactoring and apply regardless of compositional input:

1. **RICHNESS = SEMANTIC DENSITY x RESTRAINT x SPATIAL CONFIDENCE** (add provenance note)
2. **Build boundary-by-boundary, not channel-by-channel**
3. **6 CSS channels as expression vocabulary** (identified from design system, not hardcoded)
4. **Pacing assessment** -- scroll rhythm questions, transition type variation
5. **Adapt before inventing** -- 3-question gate before new components
6. **Density variation** -- at least 3 perceptibly different density levels
7. **Restraint** -- not every mechanism deployed; events are powerful because rare
8. **Perceptibility** -- every CSS rule creates a visible change at 100% zoom

### 7B. Transformed Elements (~30 lines)

1. **5-category vocabulary** -> "Describe your composition's properties across Spatial, Temporal, Material, Behavioral, Relational dimensions" (not "extract from metaphor")
2. **Density patterns** -> 4 observed patterns as illustrative examples, not exhaustive taxonomy
3. **Coherence** -> Multi-channel shifts at boundaries, with DIVERGENT as a valid direction
4. **Fractal consistency** -> "Compositional idea perceptible at 3+ scales, potentially through different channels"
5. **Concept-based CSS naming** -> Name by compositional intent (not restricted to domain vocabulary)
6. **Transition table** -> Available pre-build, mid-build, or post-build (not exclusively pre-build)

### 7C. Added Elements (~15 lines)

Perception prompts (from Report 11, feedback loops):
- "After implementing a major section, pause. What do you notice that you didn't plan?"
- "If an unplanned relationship emerges between elements, amplify it rather than correcting it."
- "After building section N+1, check: does section N still work as intended?"

These introduce feedback-loop awareness without abandoning the linear structure.

### 7D. Removed Elements

- KortAI-specific CSS channel constraints (moved to design system files)
- Mechanism Library Access timing (Phase 4-only access is pipeline-specific)
- Single density pattern selection for entire page
- Mandatory top-down scale building order
- Self-similarity requirement at all zoom levels

---

## 8. Composition-as-Feedback-Loops: How It Informs Skill Design

Report 11 (feedback loops) is the most theoretically ambitious report. Its central finding -- "composition is a conversation, not a plan" -- represents an aspirational model. Here is how it informs the skill design without requiring untested restructuring:

### 8A. What We Adopt Now

1. **Perception prompts during building** (~10-15 lines). These are the lowest-risk, highest-value introduction of feedback-loop thinking. They don't restructure the process; they add moments of reflection within it.

2. **Contrary motion as valid coherence.** The coherence model expands to allow intentional channel divergence at boundaries.

3. **Scale-dependent transformation.** Fractal consistency becomes "the idea is present at multiple scales but expressed differently at each."

4. **"The output is perceptual readiness."** This reframes TC's purpose: the skill doesn't produce a document; it produces an agent who can perceive compositional possibilities that an un-prepared agent would miss. This framing supports the single-agent architecture (the prepared agent IS the builder).

### 8B. What We Defer to Experimentation

1. **The generative code model** (Alexander's structure-preserving transformations applied to web composition). This would replace Phase 4's linear decomposition with a move-respond-discover loop. Intellectually compelling but untested.

2. **Mandatory back-loops from building to thinking.** The current recommendation adds OPTIONAL perception prompts. Making them mandatory (you MUST revisit tension derivation after building 3 sections) is a deeper change that needs validation.

3. **Provisional commitment.** The current model locks the compositional idea at Phase 3.5 and allows adaptation of expression but not the idea itself. The feedback-loop model would allow the idea to evolve through building. This is philosophically attractive but risks producing incoherent compositions if the agent changes its mind mid-build.

---

## 9. The Two Paths: Surgical Fixes vs Fundamental Restructuring

### Path A: Surgical Fixes (Adversarial Reviewer's Recommendation)

**Do these 6 things (LOW RISK, HIGH VALUE):**
1. Remove 10-domain list and incompatible domain families
2. Remove "ZERO tension" list from tension landscape
3. Remove KortAI-specific content from skill (move to design system file)
4. Fix coherence model (allow DIVERGENT direction)
5. Fix fractal consistency (multi-scale presence, not self-similarity)
6. Keep conviction brief structure as internal planning step

**Do NOT do these 4 things (HIGH RISK, UNDERDETERMINED VALUE):**
7. Replace domain metaphors with "compositional ideas" as primary path
8. Merge TC + building into single agent without experiment
9. Remove Phase 4's linear decomposition
10. Make Phase 1's axis set dynamic

### Path B: Fundamental Restructuring (Majority Recommendation)

Reports 01-05, 07-09, 11 converge on deeper changes:
1. All of Path A items 1-6
2. Broaden Phase 3 to "compositional ideas" with guardrails
3. Design the skill for single-agent TC+building execution
4. Replace static Side B with System Reading Protocol
5. Add perception prompts for feedback-loop awareness
6. Transform Phase 4's rigid elements (density patterns, coherence, fractals)
7. Replace conviction brief with self-commitment
8. Strip all pipeline-assumption content from TC and PA
9. Make TC design-system-agnostic

### SYNTHESIZED RECOMMENDATION: Path B with Path A's Caution

Implement Path B, but with these concessions to the adversarial reviewer's wisdom:

1. **Domain metaphors remain the EXPECTED primary output.** Broadening opens a door; it doesn't demolish the wall. The guardrails (Actionability Gate, Physics Articulation, Generativity Test) ensure non-domain ideas meet the same quality bar as domains.

2. **The conviction brief's STRUCTURE survives as a self-commitment.** The 6-section structure (World-Description, Opposition Map, Compositional Arc, Creative Conditions) is a thinking discipline, not just a transmission format. It becomes 15-20 lines written for self, not 80-120 lines for another agent. The Calibration section (pre-computed values) and Content Map (summary for an agent that hasn't read content) are removed.

3. **The linear build process is preserved.** Perception prompts are added as supplements, not replacements. The top-down orientation (macro before micro) remains the recommended approach. Feedback-loop composition is acknowledged as an aspiration and deferred to experimentation.

4. **The merged TC+building agent is designed for but not mandated.** The skill architecture supports both single-agent (preferred) and two-agent (fallback) execution. Build-page-v2 spawns one agent by default; if experiments show two agents produce better results, the orchestrator adapts.

5. **The System Reading Protocol includes the curated personality as a validation artifact.** The agent derives its own Side B AND cross-references the curated summary. This preserves accumulated wisdom while enabling content-sensitive engagement.

---

## 10. Risks and Unknowns (Honest Acknowledgment)

### 10A. Known Risks

1. **Broadening Phase 3 may produce vaguer compositions.** Non-domain ideas have sparser natural physics. The guardrails mitigate this but are themselves untested.

2. **Dynamic Side B may produce shallower readings than the curated summary.** The System Reading Protocol is designed to prevent this, but protocol quality != execution quality. Agents may engage superficially with design system files.

3. **Single-agent TC+building may hit context limits on long content.** The combined context load (skill + content + design system files + output) is substantial. This needs empirical testing.

4. **Removing channeling may reduce quality rather than increase it.** The adversarial reviewer's point is valid: LLMs without constraints default to mediocrity. The channeling we're removing (pre-ranked tensions, domain lists) also served as creative handrails.

5. **Perception prompts may be ignored or treated as checkbox items.** Adding "What do you notice that you didn't plan?" is only valuable if the agent genuinely pauses and reflects. There's no guarantee it will.

### 10B. Unknowns (Require Experimentation)

1. **Single agent vs two agents for TC+building.** Zero experiments. The theoretical argument is strong in both directions.

2. **Opus vs Sonnet for builders.** This is potentially the highest-leverage single intervention (from MEMORY.md). Completely unexamined by this audit.

3. **Whether non-domain ideas CAN produce pages as rich as domain metaphors.** Zero experiments.

4. **Whether the System Reading Protocol produces adequate Side B depth.** Zero experiments.

5. **Whether perception prompts actually improve composition quality.** Zero experiments.

### 10C. The Adversarial Reviewer's Core Challenge

Report 10 makes a point that this synthesis must not paper over: **Every proposed change is based on theory, not evidence.** The existing system has produced SHIP-quality pages. The proposed changes are intellectually compelling but untested. The RESPONSIBLE approach is to make changes, run the system, and measure results before making more changes.

This synthesis recommends Path B because the theoretical convergence across 9 of 10 reports is strong and the specific changes are well-reasoned. But the adversarial reviewer's caution is embedded throughout: guardrails on broadening, preservation of linear structure, curated personality as validation artifact, experimental validation before deeper restructuring.

---

## 11. Estimated Skill Sizes After Restructuring

| Skill | Current Lines | Estimated After | Change |
|-------|-------------|----------------|--------|
| **TC SKILL.md** | 842 | ~400-450 | -47% (remove pipeline + channeling + compression) |
| **TC STANDALONE-APPENDIX.md** | 232 | 0 (merged into main skill) | -100% |
| **PA (all files)** | 2,981 | ~450 | -85% (remove pipeline infrastructure) |
| **Build-page-v2** | 957 | ~150-200 | -80% (thin orchestrator, creative content in TC) |
| **TOTAL** | 5,012 | ~1,000-1,100 | -78% |

The dramatic reduction comes from three sources:
1. Removing pipeline infrastructure (~1,700 lines from PA, ~200 from TC)
2. Removing KortAI-specific channeling (~80 lines from TC)
3. Removing compression artifacts (~130 lines from TC)
4. Collapsing the build-page orchestrator from 957 to ~150-200 lines (creative content moves to TC skill)

---

## 12. Next Steps (Ordered)

1. **Draft the updated TC skill** (~400-450 lines) based on this recommendation's KEEP/REMOVE/TRANSFORM table
2. **Draft the updated PA skill** (~450 lines) based on Report 07's extraction of process content
3. **Draft the thin build-page-v2 orchestrator** (~150-200 lines) based on Report 09's architecture
4. **Create `system-personality.md`** in the design system's identity directory with the curated personality spectrum, observed tensions, and domain notes (moved from TC)
5. **Run the updated system on known content** (Gas Town or Boris) and compare results to previous pipeline runs
6. **Run the single-agent vs two-agent experiment** (same content, same design system, different agent architecture)
7. **Run the Opus-builder experiment** (same pipeline, Opus instead of Sonnet for building)

Steps 1-4 are skill drafting. Steps 5-7 are experimental validation. This synthesis provides the specification for steps 1-4. Steps 5-7 will determine whether the deeper aspirations (feedback-loop composition, mandatory back-loops, provisional commitment) are warranted.

---

*This synthesis draws on all 10 audit reports: process-mapper (01), bias-auditor (02), dynamics-analyst (03), phase3-analyst (04), phase4-analyst (05), pa-auditor (07), file-mapper (08), integration-architect (09), adversarial-reviewer (10), composition-researcher (11). Where reports agree, recommendations are high-confidence. Where reports contradict, both positions are presented with a reasoned resolution. The adversarial reviewer's caution is embedded throughout as a structural safeguard against untested theoretical enthusiasm.*
