# HANDOFF: KortAI Design System Continuity Document

**Date:** 2026-02-15
**Status:** Phase D COMPLETE, richness + rigidity research COMPLETE, skill enrichment IN PROGRESS
**Last Updated By:** staleness-fixer (skill-enrichment-prep team)

---

## 1. START HERE (2-Minute Orientation)

You are picking up a long-running design system project ("KortAI") that produces single-file HTML pages from content. Pages are built by Claude agents (Sonnet models), orchestrated by the user with teams of 5-50 named agents.

**What is KortAI?** A design system and production pipeline for transforming written content (documentation, tutorials, conceptual explanations) into richly designed single-file HTML pages. The pages use a constrained visual identity (sharp edges, warm palette, no rounded corners) with unique metaphor-driven spatial layouts. The user is the architect and orchestrator; AI agents are the builders and auditors.

**Where we are:** Phase D validation is COMPLETE with a CONDITIONAL PASS verdict. Two follow-up research investigations (richness + rigidity, 11 agents, 11 reports) have also completed. No modifications have been applied yet -- research is done, action is pending the user's decision.

**What just happened:**
1. Phase D tested 5 pipeline configurations against the same content (see Section 2)
2. Richness research (5 agents) answered: "What IS the gap between pipeline and showcase output?"
3. Rigidity research (6 agents) answered: "Can we close that gap without creating limiting rigidity?"

**What comes next:** Skill enrichment is currently IN PROGRESS (2026-02-15). After skill modifications are applied, the research unanimously recommends building an exceptional Middle-tier page as the next step (the most important untested hypothesis). User commitment will be required before proceeding to experimentation or Phase E.

**Documentation status:** Staleness FIXED (2026-02-15). All critical documentation updated to reflect Phase D completion and current skill enrichment phase.

---

## 2. CRITICAL STATE: Phase D Results

Phase D ran 5 variants of the same content through different pipeline configurations on 2026-02-15:

| Variant | Configuration | Compliance | Novelty | Verdict |
|---------|--------------|------------|---------|---------|
| Track 1 | Assembly (library only) | 11/19 | N/A | INSTANT FAIL -- builder skipped always-load protocol |
| A | Skill-only | 15/19 | 3/5 | CONDITIONAL FAIL -- CPL violation + 6/8 mechanisms |
| **B** | **Weak permission** | **18/19** | **4/5** | **CONDITIONAL PASS (best)** -- novel "scientific calibration laboratory" metaphor |
| C | Anti-gravity | 17/19 | 1/5 (disputed) | FAIL -- convergence. Report-writer truncation error: only read 200/80k log lines, missed Phase 3.5 gate |
| D | Library-first | 18/19 | 0/5 | FAIL -- intentional convergence (expected) |

**3 gaps remain:**
1. **Container width is THE primary failure mode** -- 4/5 pages violated the 940px sweet spot (either too wide at 1052px or too narrow at 650-750px)
2. **Prose-only content limited component testing** to 22-44% (vs 67% target) -- need mixed content for Phase D-V2
3. **Mechanism ceiling for prose content** is 6 (vs 8 target)

**Key learnings:**
- "Always-load" protocol failure caused Track 1's instant fail (5 critical violations from not reading prohibitions.md)
- "Weak permission" framing ("available for reference") had ZERO behavioral effect on library utilization
- All Track 2 variants achieved 97-100% token compliance

**Phase D output:** 47 files, 17MB in `ephemeral/phase-d-execution/`

---

## 3. CURRENT WORLDVIEW: Established Principles

These are settled positions from the two research investigations. All have high confidence and multi-agent convergence.

### The Core Finding

**Richness comes FROM constraint, not despite it.** The showcase pages (DD-006, OD-004, CD-006) were MORE rigid than the pipeline, not less. CD-006 (the richest page, 39/40 score) operated under 78 simultaneous constraints. Variant B (the pipeline's best output) operated under roughly 20. More constraints produced more richness because the constraints were overwhelmingly VOCABULARY (new expressive tools) rather than PROHIBITIONS (things you cannot do).

**The memorable formulation:** "Richness is not the opposite of rigidity. Richness is the fluency that comes from having many rigid words to compose with."

### The Vocabulary vs. Prohibition Distinction

- **Prohibitions** say "don't do X" -- border-radius: 0, no box-shadow, no gradients, no pure black/white. There are 22 of these (8 absolute, 12 conditional, 2 meta). They define identity through REFUSAL.
- **Vocabulary** says "here are 18 ways to create meaning WITHIN those constraints" -- border-weight gradient encoding, 2-zone component DNA, solid offset depth, spacing compression, zone background differentiation, and 13 more mechanisms. They define capability through TOOLS.

At CD stage, vocabulary-type rigidity outnumbered constraint-type rigidity 62 to 16 -- a 4:1 ratio. The system is already well-designed. Only 4-5 of ~168 constraints are genuinely limiting.

### The Four-Type Constraint Taxonomy

| Type | Name | Effect | Example | Action |
|------|------|--------|---------|--------|
| 1 | Identity Rigidity | ALWAYS enabling | border-radius: 0, font trinity, warm palette | KEEP ALL |
| 2 | Procedural Rigidity | Sequences creativity | Phase-gated library access, sequential phases | KEEP ALL |
| 3 | Specification Rigidity | Mixed: some protect, some limit | 940px container (protective), "sample 2-4" (limiting) | EVALUATE EACH |
| 4 | Ambient Rigidity | Emergent overload from volume | ~168 constraints simultaneously active | MANAGE |

The "rigidity-richness paradox" dissolved entirely once this taxonomy was applied. There is no paradox -- identity and procedural rigidity are GENERATIVE. Only specification caps genuinely limit.

### The Accumulation Principle

Showcase richness accumulated through 4-6 pipeline stages (DD -> OD -> AD -> CD), each adding 13-16 new techniques. The skill compresses this 337-finding, 94-external-research chain into "sample 2-4 mechanisms" -- a 50:1 information loss. The pipeline's richness gap is primarily an ITERATION gap, not a FREEDOM gap.

### The Operational Definition of Richness

> Richness is the degree to which a page's CSS structure, spatial topology, and rhythmic variation work in multi-channel coordination to reinforce a content-derived metaphor, creating an experience where spatial organization MEANS something rather than merely CONTAINING something. Peak richness occurs not at maximum technique count but at maximum content-mechanism fit.

Measurable across 5 dimensions: Layout Complexity, Visual Depth, Token Semantic Density, Responsive Sophistication, Metaphor-to-CSS Encoding Depth. Plus 2 unmeasured: text-level rhythm and reader agency.

---

## 4. THE TIER MODEL

The research converged on a 4-tier system mapping content needs to richness levels. Grounded in actual CSS analysis of existing pages.

| Property | Floor | Middle | Ceiling | Flagship |
|----------|-------|--------|---------|----------|
| **Target %** | 10-20% of pages | 40-50% of pages | 20-30% of pages | 5-10% of pages |
| **Mechanisms** | 5 of 18 | 8-10 of 18 | 12-15 of 18 | 16-18 of 18 |
| **CSS lines** | ~150-250 | ~350-500 | ~700-1,000 | ~1,000-1,500 |
| **Build time** | 30-45 min | 70-100 min | 150-220 min | 240-400 min |
| **Reproducibility** | 95%+ | 80-90% | 50-70% | 30-50% |
| **Quality band** | 14-17/20 | 16-18/20 | 17-19/20 | 18-20/20 |
| **Richness vs Floor** | 1x | 3-4x | 5-6x | 7-8x |
| **Metaphor?** | No | No | Yes (full pipeline) | Yes (multi-pass audit) |
| **Content type** | API refs, changelogs, config | Tutorials, guides, overviews | Conceptual docs, deep explanations | Anchor content, crown jewels |

**The key insight: the Floor-to-Middle transition has the HIGHEST ROI.** For ~45 extra minutes, you get 3-4x richness, crossing the threshold from "formatted" to "designed." Every page should be at least Middle.

**Middle tier adds (over Floor):** grid/flex layouts, zone backgrounds, density rhythm patterns, dark header, accessibility triple, pseudo-elements. All lookup-based decisions, not creative ones.

**Density rhythm patterns (used at Middle tier and above):**
- **CRESCENDO:** Information density builds from sparse to dense across the page (opening breath, gradual intensification, peak section, resolution). Best for tutorials and progressive explanations.
- **F-PATTERN:** Dense-sparse alternation following natural eye scanning. Dense left column, sparse right. Best for reference and documentation.
- **BENTO:** Grid-based modular sections of varying density. Independent blocks at different densities. Best for overviews and dashboards.
- **PULSE:** Rhythmic dense-sparse-dense alternation creating a heartbeat pattern. Best for narrative content with periodic emphasis.

**Supersession note:** The tier model numbers above come from the rigidity synthesis (the LATER investigation). The earlier richness synthesis used different ranges (3-5 for Middle, 8-15 for Ceiling). The rigidity synthesis numbers are authoritative.

**Terminology note:** "Middle tier," "exceptional Track 1," and "Track 1 Enhanced" all refer to the SAME concept: pages with full design token compliance, spatial variety, and density rhythm but NO metaphor derivation. The name evolved across two research investigations. "Middle tier" is the current standard term.

---

## 5. MODIFICATION RECOMMENDATIONS

Four modifications were proposed to close the richness gap. The rigidity research evaluated each:

| Modification | Original Proposal | Verdict | Recommended Implementation |
|-------------|------------------|---------|---------------------------|
| **Mod 1: Mechanism mandate** | Raise from "2-4" to "min 8" | **MODIFY** | Per-category minimum (1+ per each of 5 property categories) + justification. Natural landing: 5-10. |
| **Mod 2: Fractal gate** | Make fractal a GATE | **ADOPT** | Promote to full gate with scale coverage table. Scope: Floor=exempt, Middle=2 scales, Ceiling=4, Flagship=5. |
| **Mod 3: Coherence check** | Full section-by-channel table | **MODIFY** | 3 critical transitions + inline CSS annotations. Move to PLANNING phase. |
| **Mod 4: Technique count** | Add X/18 metric | **REJECT** | Goodhart's Law trap. Replace with narrative + quality markers (strongest/weakest deployment). |

**Critical warning:** Adopting all 4 AS ORIGINALLY STATED would create a "checklist factory." Mods 2+3 together are safe (enabling). Mods 1+4 together are dangerous (metric-driven assembly line). The interaction effects between modifications matter more than any individual modification.

**The single most damaging instruction:** "Sample 2-4 mechanisms" in `~/.claude/skills/tension-composition/SKILL.md` (line ~787). Exists in two inconsistent forms ("2-4" and "3-5"). Caps technique density, prevents engagement with the full mechanism catalog. All 11 research agents independently identified this as the highest-leverage change.

**Status: NO modifications have been applied yet.** The skill files are unchanged. The user has not committed to implementation.

---

## 6. KEY DEFINITIONS

Terms with specific meanings in this project:

| Term | Definition |
|------|-----------|
| **Soul constraints** | The 3 non-negotiable identity anchors: `border-radius: 0`, `box-shadow: none`, warm palette. Present on every page, no exceptions. |
| **Tension-composition pipeline** | 7-phase process for deriving unique metaphors from content: Content Assessment -> Multi-Axis Questioning -> Tension Derivation -> [Gate] -> Metaphor Collapse -> Compositional Layout -> Output |
| **Addition Test** | "Can existing components fulfill this WITHOUT transforming their meaning?" YES = Track 1 (assembly). NO = Track 2 (composition). |
| **Anti-gravity** | 5 mechanisms (R1, R2, R3, R5, R6) that prevent pattern-matching / template convergence. Prevents agents from copying showcase pages. |
| **Mechanism catalog** | 18 reusable CSS techniques: border-weight gradient, 2-zone DNA, solid offset depth, spacing compression, zone backgrounds, dark header, etc. Lives in `compositional-core/grammar/mechanism-catalog.md`. |
| **Phase 3.5 gate** | Divergence checkpoint in the tension-composition pipeline. If metaphor converges with an existing case study, builder must justify or regenerate. |
| **Track 1 (Assembly)** | Components map directly to content. No metaphor needed. 45-90 min. Use compositional-core vocabulary + grammar + components. |
| **Track 2 (Composition)** | Prose-dominant content with implicit tension. Full pipeline. 3-5 hours. Independent metaphor derivation required. |
| **Crown jewels** | DD-006 (fractal), OD-004 (geological confidence), CD-006 (pilot migration) -- the best showcase pages. |
| **Variant B** | The "scientific calibration laboratory" metaphor page from Phase D. 18/19 compliance, 4/5 novelty. Current baseline for "what the pipeline produces." |
| **Always-load protocol** | Every agent MUST read `compositional-core/identity/prohibitions.md` (353 lines) + `compositional-core/vocabulary/tokens.css` (174 lines) before any work. 527 lines mandatory overhead. |
| **Compositional-core** | The 6-layer operational ontology: identity -> vocabulary -> grammar -> components -> case-studies -> guidelines. 43 files, 880KB. |
| **2-zone DNA** | Component structure: sparse label zone (category/type marker, minimal text) + dense content zone (the actual information). The fundamental building block for callouts, cards, and data components. |
| **Solid offset depth** | Technique replacing box-shadow (prohibited). Uses a solid-color offset rectangle behind a component to create visual depth. E.g., `position: relative` with a `::before` pseudo-element offset by 4-8px. |
| **Border-weight gradient encoding** | Using border thickness to encode hierarchy/importance. Thicker borders (3-4px) = primary/important. Thinner borders (1px) = secondary/supporting. Creates visual weight without color changes. |
| **5-scale fractal** | Design coherence across 5 nested scales: Navigation (TOC/header), Page (section sequence), Section (components within), Component (content within component), Inline (text-level). Each scale should reflect the same design logic. |
| **Convention spec** | A formal specification document written at each exploration stage (DD, OD, AD, CD) that codifies the constraints, patterns, and vocabulary discovered during that stage. These accumulated across stages. |
| **Isomorphism score** | How many structural properties of a metaphor map to structural properties of the content (range 1-6+). Score below 4 = metaphor is being forced, should downgrade to Middle tier. |
| **Mode 2 perceptual audit** | A focused 14-question audit at 2 viewports (1440px + 768px). Lighter than the full 48-question Mode 1 audit. Recommended as mandatory for Ceiling+ tier pages. |

**IMPORTANT -- "R" code disambiguation:**
Three different numbering systems use the letter "R" in this project:
1. **R1-R5 (research streams):** The 5 research dimensions -- R1=density, R2=organization, R3=axis, R4=combination, R5=evaluation
2. **R1, R2, R3, R5, R6 (anti-gravity mechanisms):** R1=phase-gated library, R2=mechanism/metaphor separation, R3=anti-prescription framing, R5=binary sequential phases, R6=divergence mandate
3. **R-01 through R-18 (rigidity patterns):** Specific rigidity patterns catalogued by the rigidity archaeologist across showcase pages

These are THREE UNRELATED numbering systems. Context determines which is meant.

---

## 7. THE VOCABULARY-VS-LIBRARY DISTINCTION

This is the operational heart of the anti-gravity system. Understanding it is essential.

**grammar/ = vocabulary to USE. case-studies/ = library to NOT COPY.**

The mechanism catalog contains 18 transferable techniques. They were discovered in showcase pages but are metaphor-agnostic. Using them is fluency. Copying a showcase page's specific CSS is template convergence.

**The Name Test:** If you can describe the mechanism WITHOUT using the original metaphor's vocabulary, it is transferable. "Border-weight gradient encodes hierarchy" passes. "4px bedrock border" fails.

**The Transfer Test:** If the mechanism produces DIFFERENT CSS values when applied to a different metaphor, it is transferable. Same mechanism, different values, different expression.

**In practice:**

| Transferable MECHANISM (grammar/) | Non-transferable IMPLEMENTATION (case-studies/) |
|---|---|
| "Border-weight encodes hierarchy" | "4px bedrock border" |
| "Background progression encodes depth" | "#FEF9F5 topsoil, #1A1A1A bedrock" |
| "Spacing compression encodes confidence" | "80px surface, 32px bedrock" |
| "2-zone DNA: sparse label + dense body" | "Stratum label + geological content" |

**The anti-gravity mechanism (R2: Mechanism/Metaphor Separation) enforces this distinction.** Mechanisms live in grammar/. Metaphor-specific implementations live in case-studies/. If it is in grammar/, it is vocabulary. If it is in case-studies/, it is library. The Phase 3.5 gate (R6: Divergence Mandate) operationalizes enforcement: if your metaphor matches a library pattern, you must justify or regenerate.

**OPEN QUESTION -- Mechanism Density and Perceived Novelty:**
The distinction above is resolved in THEORY (Name Test + Transfer Test). It is NOT resolved in PRACTICE. The untested question: when a builder deploys 8-10 mechanisms from grammar/ with a new metaphor (or no metaphor at Middle tier), does the result feel like novel grammar usage or like a derivative copy of showcase pages? Variant B scored 4/5 novelty with only 5 techniques -- would higher technique density have REDUCED perceived novelty by making the page structurally similar to showcases? The Middle-tier experiment directly tests this. If the result feels derivative despite a different metaphor, anti-gravity may need to address mechanism combination divergence, not just metaphor divergence. This question shapes how builders approach every tier experiment.

---

## 8. HOW WE GOT HERE

### The Exploration Stages (DD through CD)

The project built 30 validated HTML pages across 4 design dimensions, each with 6 explorations:
- **DD (Density):** 6 pages exploring information density. Established soul constraints, tokens, typography trinity. 18 DD-F findings.
- **OD (Organization):** 6 pages exploring organizational structures. Key discovery: "Organization IS Density." 17 OD-F findings, v3 re-enrichment.
- **AD (Axis):** 6 pages exploring single-axis patterns (CRESCENDO, F-PATTERN, BENTO, PULSE). 28 AD-F findings.
- **CD (Combination):** 6 pages combining multiple axes. Crown jewel CD-006 scored 39/40. 25 CD-F findings.

Each stage inherited ALL prior constraints, applied ALL prior research, and was audited by 4-17 adversarial agents. This accumulation produced 78 constraints and 44 CSS technique families by CD stage.

### Phase C: Extraction (COMPLETE)

19 agents extracted the accumulated knowledge into a 6-layer compositional-core (42 files, 880KB, 20,576 lines): identity -> vocabulary -> grammar -> components -> case-studies -> guidelines. 94.7% anti-gravity compliance. All 11 success criteria MET or EXCEEDED.

### Phase D: Validation (COMPLETE -- CONDITIONAL PASS)

14 agents tested whether the extracted system could produce pages comparable to showcases. See Section 2 for results. Variant B was the best output: genuine metaphor derivation, high compliance, but only 5/44 CSS techniques deployed (vs showcase pages' 23-44/44).

### The Richness Investigation

The user asked: "What IS the gap between Variant B and showcase pages?" 5 agents investigated.

Core finding: The gap is technique SATURATION (density of mechanism deployment), not technique ABSENCE. Variant B derives genuine identity through the pipeline -- the user correctly pushed back on the initial "cold assembly" framing. The gap is quantitative, not qualitative. The identity-theorist estimated ~60-65% of the gap is addressable through pipeline modifications (the remaining ~35-40% comes from irreducible iteration depth and accumulated understanding). The worldview document estimates ~85% addressable when including compression loss as partially addressable. The exact figure depends on how "addressable" is defined, but the point is: most of the gap can be closed. "Sample 2-4 mechanisms" is the single most damaging instruction.

### The Rigidity Investigation

The user asked: "Can we close the gap WITHOUT creating limiting rigidity?" 6 agents investigated.

Core finding: The "paradox" dissolves. The showcase pages were MORE rigid than the pipeline. Their richness came FROM rigidity (vocabulary type). The fix is not "less rigidity" but "rigidity in the right places." The 4-type taxonomy (identity/procedural/specification/ambient) separates generative from limiting constraints. Only 4-5 of ~168 constraints genuinely limit.

### The Pivot Moment

The user read the richness team's 4 modification recommendations and said: "I feel like it's very easy to get that confused with giving it these concrete mechanics or concrete mandates or concrete metrics... that enters us in a state of rigidity." This launched the rigidity investigation. The user's concern was VALIDATED (some specifications do limit) even though the premise was overturned (showcase pages were not "free").

---

## 9. USER CONTEXT

### Preferences and Communication Style

- **Direct and substantive.** No hedging, no excessive caveats. Clear positions with uncertainty noted.
- **"Both/and" over "either/or."** Rejects false dichotomies. Richness AND rigidity. Reader experience AND proof-of-capacity.
- **Grounded in specifics.** "Not just idealizing what each tier looks like." Work backward from actual code and actual CSS, not forward from abstract descriptions.
- **Reads everything.** The user reads all agent output carefully and forms independent conclusions.
- **Values being challenged.** Genuine investigation over validation. Push back when evidence warrants it.
- **Metacognitive analysis is standard.** Every research team includes a contrarian/metacognitive analyst.
- **Agent teams, not sub-agents.** Large orchestrated teams (5-50) with named roles, waves, and explicit prompts. Opus for leads, Sonnet for workers.

### Operational Preferences

- **Ephemeral folder rule:** ALL agent research and temporary output goes in `ephemeral/`. NEVER create new top-level project folders. Ephemeral files are NOT committed to git by default -- they persist locally but are not in version control. If critical findings in `ephemeral/` need to be preserved long-term, they should be summarized and committed to the `design-system/` tree. Currently, the richness/rigidity research findings exist ONLY in `ephemeral/` and `MEMORY.md` -- if ephemeral is cleaned up, the findings should be persisted elsewhere first.
- **Commits are intentional.** The user commits at specific milestones with descriptive messages. Never auto-commit.
- **File-writing emphasis.** Every agent prompt must include "You MUST write your output file using the Write tool." ~20-30% failure rate without this.
- **Sequential Playwright scheduling.** Only 1-2 agents should use Playwright concurrently.
- **Recovery agents.** Plan for agents that fail to write output files.

### Motivation

The user said: "Before we even had KortAI... I didn't feel like I wanted to read this." The design system exists to transform flat documents into "places you want to spend time in." This is personal motivation, not just a technical goal.

"All dimensions, no compromise" meant: explore the FULL possibility space before constraining. Understand everything before making calibrated decisions.

### The Meta-Awareness

The user is aware of the 2.6:1 meta-to-output ratio (47,944 lines infrastructure vs 18,428 lines product). They watch for over-researching and under-building. If the conversation drifts toward more analysis when action would be more productive, it is appropriate to note this.

---

## 10. GOALS AND ACTIONABLES

### Immediate (Before Next Build)

1. **Edit `~/.claude/skills/tension-composition/SKILL.md`:** Replace "sample 2-4 mechanisms" with per-category minimum + justification. New instruction: "For each of the 5 property categories (Spatial, Temporal, Material, Behavioral, Relational), identify AT LEAST ONE mechanism. For each mechanism deployed, document WHY. For at least 3 mechanisms NOT deployed, document WHY NOT."

2. **Edit `~/.claude/skills/tension-composition/SKILL.md`:** Add tier-based pipeline selection. Middle tier: SKIP Phases 1-3, go directly to Phase 4.0 with content-type pattern.

3. **Edit `~/.claude/skills/tension-composition/SKILL.md`:** Promote fractal consistency from CHECK to GATE with scale coverage table. Scope-calibrate by tier.

4. **Add NON-NEGOTIABLE container width rule** to Phase 4.0 guardrails: "Container width 940-960px is NON-NEGOTIABLE. Express narrowing through INTERNAL spacing, not external width reduction."

### Short-Term (Next 1-2 Builds)

5. **Build one exceptional Middle-tier page.** THE single most important next step all research agents agreed on. Full CRESCENDO density, zone backgrounds, grid layouts, dark header, no metaphor. Evaluate against Variant B and showcase pages. This single experiment resolves more questions than further analysis.

6. **Build the same content at 3 tiers** (Middle, Ceiling, Flagship). Evaluate quality differences. First data point on the diminishing returns curve.

7. **Add Mode 2 perceptual audit** as mandatory for Ceiling+ pages. 14 questions at 2 viewports, ~5 extra minutes per page.

### Medium-Term (After 10+ Builds)

8. **Track quality metrics** across sequential pipeline runs to model fluency development.

9. **Implement sunset protocol:** Every specification constraint gets a "last caught real issue" timestamp. Constraints not triggered in 10 consecutive runs are candidates for retirement.

10. **Strengthen Phase 3.5 gate** to check domain FAMILY, not just exact match.

---

## 11. OPEN QUESTIONS

These are genuinely unresolved. All have been investigated but not answered.

| # | Question | What Resolves It | Priority |
|---|----------|-----------------|----------|
| Q1 | Where is the diminishing returns peak for mechanism count? | Build same content at 5/8/12/18 mechanisms. Blind evaluation. | HIGH |
| Q2 | What does an exceptional Middle-tier page feel like? | Build one. The most important untested hypothesis. | HIGHEST |
| Q3 | How fast does builder fluency develop? | Track quality across 20+ sequential pipeline runs. | MEDIUM |
| Q4 | Does collection-level richness emerge at 75+ pages? | Build 10 pages across all 4 tiers. Navigate between them. | MEDIUM |
| Q5 | Do readers notice the difference? | Zero consumer-side validation exists. Reader comprehension testing needed. | HIGH but DEFERRED |

---

## 12. READING ORDER

### For ANY new instance (5 minutes)
1. **This file** (HANDOFF.md) -- orientation and current state

### For a BUILDER instance (+15 minutes)
2. `design-system/compositional-core/CLAUDE.md` (493 lines) -- phase-gated build protocol
3. `design-system/compositional-core/identity/prohibitions.md` (353 lines) -- mandatory, zero exceptions
4. `design-system/compositional-core/vocabulary/tokens.css` (174 lines) -- 65 tokens

### For a PLANNER instance (+20 minutes)
2. `ephemeral/continuity-docs/02-worldview-and-goals.md` (~377 lines) -- full project narrative
3. `design-system/pipeline/05-COMPLETE-ROADMAP.md` (first 120 lines) -- master timeline (NOTE: stale, see Section 14)
4. `ephemeral/rigidity-research/03-tier-specifications.md` -- concrete tier definitions

### For a RESEARCHER instance (+25 minutes)
2. `ephemeral/rigidity-research/06-unified-synthesis.md` (~550 lines) -- settled position on richness vs rigidity
3. `ephemeral/richness-research/05-unified-synthesis.md` (~415 lines) -- richness investigation conclusions
4. `ephemeral/rigidity-research/02-modification-analysis.md` -- the 4 proposed changes analyzed

### For deep understanding of the intellectual journey
5. `ephemeral/continuity-docs/01-narrative-arc.md` (~437 lines) -- full story from Phase D through both investigations

---

## 13. WHAT NOT TO DO

These are the most common mistakes a new instance would make:

1. **Do NOT re-execute Phase D.** It is COMPLETE (CONDITIONAL PASS, 2026-02-15). The results are in `ephemeral/phase-d-execution/` (47 files).

2. **Do NOT ignore container width guidance.** 940-960px is NON-NEGOTIABLE. This was THE primary failure mode in Phase D (4/5 pages violated it). Express narrowing through internal spacing, not external width reduction.

3. **Do NOT use "sample 2-4 mechanisms."** This instruction is identified by ALL 11 research agents as the single most limiting specification. It will be replaced with per-category minimum when modifications are applied.

4. **Do NOT skip the always-load protocol.** Every agent MUST read `compositional-core/identity/prohibitions.md` + `compositional-core/vocabulary/tokens.css` before any work. Track 1's instant fail in Phase D was caused by skipping this.

5. **Do NOT treat case studies as templates.** Case studies in `compositional-core/case-studies/` are LITERATURE showing the language in use, not templates to copy. Anti-gravity mechanism R3 explicitly warns against this. Use grammar/mechanism-catalog.md for transferable techniques.

6. **Do NOT read `specification/` for building.** Use `compositional-core/` for building. Specification is for research context and understanding rationale.

7. **Do NOT implement all 4 modifications as originally proposed.** The modification analysis warns against compound rigidity. Mod 2 (fractal gate): ADOPT. Mod 3 (coherence): MODIFY. Mod 1 (mechanism count): MODIFY. Mod 4 (technique count metric): REJECT.

8. **Do NOT assume the user wants more research.** The meta-to-output ratio is 2.6:1. One experiment resolves more questions than another research team.

9. **Do NOT trust the phase status in `design-system/CLAUDE.md` or `pipeline/05-COMPLETE-ROADMAP.md`.** Both are stale. See Section 14.

---

## 14. DOCUMENTATION HEALTH

### Documentation Staleness Status

**Status:** ✅ FIXED (2026-02-15)

All blocking staleness has been resolved:
- `design-system/CLAUDE.md` updated to reflect Phase D complete, richness/rigidity research complete, skill enrichment in progress
- `pipeline/05-COMPLETE-ROADMAP.md` updated with Phase D/D+/D++/D+++ progression, "YOU ARE HERE" moved to current phase
- `ephemeral/doc-enrichment/03-ENTRY-POINT.md` updated to reflect current state
- `ephemeral/continuity-docs/HANDOFF.md` updated to reflect skill enrichment in progress
- `MEMORY.md` is 135 lines (under 200-line limit, no truncation issues)

### Nice-to-Have Staleness

| File | Issue | Priority |
|------|-------|----------|
| `compositional-core/CLAUDE.md` | No Phase D results or richness/rigidity findings mentioned | Low (not misleading, just incomplete) |
| `pipeline/09-EXTRACTION-VALIDATION-PROTOCOL.md` line 14 | Says "Draft Specification" -- should say "EXECUTED" | Low |
| `pipeline/03-MIGRATION-PIPELINE.md` | No tier model integration | Low (architecturally sound, just missing context) |
| No persistent file captures richness/rigidity research | Results only in ephemeral/ + MEMORY.md | Medium (if ephemeral/ is cleaned, findings are lost) |

### Missing Documentation

- No persistent summary of Phase D results in the `design-system/` tree
- No document integrating the tier model (Floor/Middle/Ceiling/Flagship) into the pipeline docs
- No "what comes next" document with Phase E prerequisites (this HANDOFF.md fills that gap)
- MEMORY.md has no mention of richness/rigidity research findings

See `ephemeral/continuity-docs/DOC-UPDATES.md` for specific edit instructions.

---

## 15. THE DESIGN SYSTEM ARCHITECTURE (Quick Reference)

### What Exists

| Component | Location | Size | Purpose |
|-----------|----------|------|---------|
| Compositional-core | `design-system/compositional-core/` | 43 files, 880KB | Operational vocabulary for BUILDING. 6-layer ontology, phase-gated. |
| Specification | `design-system/specification/` | 57 files | Complete documentation for UNDERSTANDING. Research provenance. |
| Validated explorations | `design-system/validated-explorations/` | 19 HTML files | Fortress zone. DD/OD/AD/CD showcase pages. Zero deletions. |
| Pipeline docs | `design-system/pipeline/` | 9 files | Planning documents: roadmap, migration pipeline, protocol. |
| Tension-composition skill | `~/.claude/skills/tension-composition/SKILL.md` | 1,402 lines | 7-phase metaphor derivation pipeline. |
| Perceptual-auditing skill | `~/.claude/skills/perceptual-auditing/SKILL.md` | 736 lines | 48 PA questions, 4 modes, guardrail verification. |
| Richness research | `ephemeral/richness-research/` | 5 files | Investigation 1: what IS richness? |
| Rigidity research | `ephemeral/rigidity-research/` | 6 files | Investigation 2: richness without limiting rigidity? |
| Phase D results | `ephemeral/phase-d-execution/` | 47 files, 17MB | Phase D validation outputs, screenshots, reports. |

### The 6-Layer Ontology (compositional-core/)

| Layer | Directory | Contents | Purpose |
|-------|-----------|----------|---------|
| 1. Identity | `identity/` | 22 prohibitions (8 absolute), 3 soul constraints | What the system REFUSES to do |
| 2. Vocabulary | `vocabulary/` | `tokens.css` (65 tokens in :root block) + mutability classification | The words (design tokens) |
| 3. Grammar | `grammar/` | 18 mechanisms, 11 compositional rules, border system | How words combine (mechanisms) |
| 4. Components | `components/` | Merged CSS (31k), inventory with confidence levels | Pre-built phrases |
| 5. Case Studies | `case-studies/` | 9 case studies in anti-prescription format | Literature showing language in use (NOT templates) |
| 6. Guidelines | `guidelines/` | 7+ semantic gap rules, responsive strategy, usage criteria | When and how to apply |

### The Two Tracks

- **Track 1 (Assembly):** Content where existing components fulfill reader needs. No metaphor. 45-90 min. Use compositional-core vocabulary + grammar + components.
- **Track 2 (Composition):** Prose-dominant content with implicit tension. Full tension-composition pipeline. 3-5 hours. Independent metaphor derivation required.

The **Addition Test** classifies: "Can existing components fulfill this WITHOUT transforming their meaning?" YES = Track 1. NO = Track 2.

### Anti-Gravity (5 Essential Mechanisms)

| ID | Name | Function |
|----|------|----------|
| R1 | Phase-gated library access | Case studies PROHIBITED until Phase 5 |
| R2 | Mechanism/metaphor separation | Tools (grammar/) vs decisions (case-studies/) in different files |
| R3 | Anti-prescription framing | "Not a template" warnings, narrative format in case studies |
| R5 | Binary sequential phase rules | MUST complete phases in order |
| R6 | Divergence mandate | Convergence with library requires justification or regeneration |

---

## 16. PRINCIPLES TO INTERNALIZE

These are the highest-leverage insights from the entire project history:

1. **Binary rules achieve 100% agent compliance; judgment rules achieve ~0%.** Every constraint must be binary ("MUST" / "MUST NOT") or it will be ignored. This is the most important architectural principle for agent-facing instructions.

2. **Vocabulary rigidity ENABLES richness.** 4:1 ratio over constraint rigidity at CD stage. More "words" to compose with = more expressive capability.

3. **Content type determines richness level.** Not all content benefits from maximum richness. API references need clarity, not atmosphere.

4. **The metaphor shapes experience; the guardrails prevent it from breaking experience.** Guardrails: 940px container, 16px label-to-heading, 32px padding floor, 40% compression ratio.

5. **Richness is accumulated, not designed.** Iterative discovery within constraints, not single-pass freedom.

6. **Structure enables, counting limits.** Constraints that prescribe HOW TO THINK (fractal coherence, multi-channel awareness) create enabling structure. Constraints that prescribe WHAT (mechanism count, technique inventory) create limiting rigidity.

7. **Graceful degradation over catastrophic failure.** When judgment fails, degrade to a lower tier (Ceiling -> Middle -> Floor), not crash to invalid output.

8. **The complexity ratchet needs a sunset protocol.** Rules only accumulate, never retire. Every new constraint should include: "Re-evaluate after 10 pipeline runs."

---

**END HANDOFF**

*This document synthesizes: ephemeral/continuity-docs/01-narrative-arc.md (story arc), 02-worldview-and-goals.md (worldview), 03-documentation-audit.md (staleness), 04-instance-continuity-guide.md (new instance needs), 04b-ingestion-architecture.md (structure recommendations), ephemeral/rigidity-research/06-unified-synthesis.md (rigidity findings), and ephemeral/richness-research/05-unified-synthesis.md (richness findings). Date: 2026-02-15.*
