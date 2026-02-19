# Structural Architecture Comparison: Master Prompt vs Remediation Spec

**Agent:** structural-architect (Opus 4.6)
**Date:** 2026-02-18
**Sources:** FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md (964 lines, v3) and 12-ENHANCED-REMEDIATION-SPEC.md (1,025 lines)

---

## 1. MASTER PROMPT STRUCTURE: Conviction-Execution-Coordination-Conviction Sandwich

### Architecture Map

```
Section A: CONVICTION LAYER (~107 lines, 11.1%)
  A1. Thesis (10)
  A2. Tensions (6)
  A3. Anti-Scale Model (12)
  A4. Dual Richness Sources (8)
  A5. Compositional Fluency (15)
  A6. Experiential Laws (8)
  A7. Quality Exemplar (10)
  A8. Reader Journey (8)

Section B: EXECUTION SPEC (~297 lines, 30.8%)
  B1. Spatial (17 rules: S-01 through S-17)
  B2. Soul (10 rules: U-01 through U-10)
  B3. Compositional (21 rules: C-01 through C-21)
  B4. Multi-Coherence (8 rules: MC-01 through MC-08)
  B5. Scale-Channel (10 rules: SC-01 through SC-10)
  B6. Metaphor Gates (5 rules: MG-01 through MG-05)
  B7. Process (8 rules: P-01 through P-08)
  B8. TC Pipeline Routing (7 phases)
  B9. PA Integration Routing (assignments)
  B10. Builder Self-Check (22 items)
  B11. Content Transformation (8 rules: CT-01 through CT-08)
  B12. Recovery Protocols (4 rules: RP-01 through RP-04)

Section C: COORDINATION SPEC (~260 lines, 27.0%)
  C1. Agent Roster + Topology
  C2. Communication Protocol
  C3. Gate Sequence
  C4. PA Deployment
  C5. Gate-Then-Ranking
  C6. PA-to-TC Fix Routing
  C7. PA Skill Invocation

Section D: CONVICTION CLOSING (~10 lines, 1.0%)

Section E: REFERENCE LIBRARY (~43 lines, 4.5%)

APPENDIX: Parameter Table + Traceability + Anti-Skimming + Integration Log (~245 lines, 25.4%)
```

### What This Structure ASSUMES

The master prompt assumes a **declarative-constitutional** model of agent guidance. It presents:

1. **WHY** you should do this (Section A -- conviction)
2. **WHAT** you must achieve (Section B -- 97 numbered rules)
3. **WHO** does what and **WHEN** (Section C -- coordination)
4. **WHY** again, in case you forgot (Section D -- closing conviction)
5. **WHERE** to find reference material (Section E)

The assumption is that agents need **motivation before specification** and that providing philosophical grounding ("beauty = confident intention at every scale") will produce qualitatively different behavior than rules alone. The conviction layer treats the agent as a reasoner that can internalize principles and derive correct behavior from them.

The execution spec (B) is organized by **domain** (spatial, soul, compositional, multi-coherence, scale-channel, metaphor, process), NOT by **sequence**. An agent building a skeleton must extract S-01 from B1, U-01 from B2, and relevant rules from B3, B4, B5, B6, B7 -- cross-referencing across six subsections. The structure optimizes for **completeness of specification** over **ease of sequential execution**.

---

## 2. REMEDIATION SPEC STRUCTURE: Phase-Sequential Recipe

### Architecture Map

```
1. Executive Summary (~56 lines, 5.5%)
   - Decision rationale
   - What changes table
   - Expected outcome table
   - Effort estimate
   - Priority ordering

2. Phase 0: Deallocation (~76 lines, 7.4%)
   - 6 deletion steps with find/replace blocks
   - Deallocation summary table
   - CHECKPOINT

3. Phase 1: HTML Restructuring (~142 lines, 13.9%)
   - 9 steps with exact HTML changes
   - CHECKPOINT

4. Phase 2: Zone Backgrounds (~26 lines, 2.5%)
   - 12 CSS variable replacements
   - PERCEPTION CHECK

5. Phase 3: Structural Borders (~178 lines, 17.4%)
   - 6 steps with exact CSS blocks
   - PERCEPTION CHECK

6. Phase 4: Typography (~86 lines, 8.4%)
   - 3 steps with exact CSS blocks
   - PERCEPTION CHECK

7. Phase 5: Spatial Rhythm (~38 lines, 3.7%)
   - 3 steps with exact CSS blocks
   - PERCEPTION CHECK

8. Phase 6: Element-Level Richness (~50 lines, 4.9%)
   - Single CSS block

9. Phase 7: Accessibility and Responsive (~92 lines, 9.0%)
   - Single large CSS block
   - PERCEPTION CHECK

10. Phase 8: Verification (~100 lines, 9.8%)
    - 7 verification sub-checks (8A through 8G)

Root Cause Resolution Matrix (~22 lines)
Risk Assessment (~68 lines)
Appendix: Perception Thresholds (~16 lines)
Appendix: Constraints (~14 lines)
Appendix: Execution Notes (~8 lines)
```

### What This Structure ASSUMES

The remediation spec assumes a **procedural-recipe** model. It presents:

1. **WHAT** you will achieve (executive summary -- outcome tables)
2. **HOW** to achieve it, step by step (Phases 0-7)
3. **HOW** to verify you succeeded (Phase 8)
4. **WHY** these specific changes (appendices -- constraints, risk, root causes)

The assumption is that the agent is an **executor, not a reasoner**. The spec never asks the agent to derive, discover, or judge. Every value is pre-computed. Every CSS block is copy-pasteable. The philosophy is embedded in the VALUES chosen, not articulated as principles the agent must internalize.

---

## 3. INFORMATION SCATTERING VS CONCENTRATION

### Master Prompt: Scattered by Domain

To build a spatial skeleton, the master prompt agent must extract information from:

| Rule Category | Location | Lines to Read |
|--------------|----------|---------------|
| Container width | B1 S-01 | line 118 |
| Content-to-void | B1 S-02 | line 121 |
| CPL | B1 S-07 | line 130 |
| Max spacing | B1 S-09, S-11 | lines 132-138 |
| Soul prohibitions | B2 U-01 through U-10 | lines 156-166 |
| Transition types | B3 C-05 through C-07 | lines 180-186 |
| Scale limits | B5 SC-01 | lines 243-250 |
| Metaphor gates | B6 MG-01 through MG-05 | lines 276-293 |
| Self-check items | B10 | lines 350-383 |
| Builder file list | E | lines 743-748 |

**Total cross-referencing required: 10 locations across 5 major sections, spanning 625+ lines.**

The master prompt acknowledges this problem (C1: "BUILDER VISIBILITY CAP: Builders receive <= 75 lines") but this creates a second-order problem: someone must SELECT which 75 lines from a 964-line document.

### Remediation Spec: Concentrated by Phase

To execute Phase 3 (structural borders), the remediation agent reads:

| Step | Location | Lines |
|------|----------|-------|
| Section borders | Step 3.1 | lines 318-355 |
| Divider amplification | Step 3.2 | lines 357-381 |
| Bridge prose margin | Step 3.3 | lines 383-394 |
| Callout family | Step 3.4 | lines 396-463 |
| Grid layouts | Step 3.5 | lines 465-495 |
| Table headers | Step 3.6 | lines 497-512 |
| Perception check | End of Phase 3 | lines 514-520 |

**Total: 1 location, 202 contiguous lines. Zero cross-referencing.**

Every value needed for Phase 3 is WITHIN Phase 3. The agent never looks backward or forward. The constraint information (soul rules, container width) is embedded in the Appendix: Constraints section, but the agent rarely needs to consult it because the CSS values already comply -- the spec author pre-validated.

### Cognitive Load Comparison

| Dimension | Master Prompt | Remediation Spec |
|-----------|--------------|-----------------|
| Cross-references per task | 8-12 | 0-1 |
| Lines to scan for one build step | 400-600 | 30-80 |
| External file reads required | 6-8 per agent | 0 (all embedded) |
| Working memory demand | HIGH (must hold rule IDs + thresholds + locations) | LOW (follow recipe linearly) |
| Error mode | Missed cross-reference -> silent violation | Missed step -> incomplete but not contradictory |

---

## 4. ENTRY POINTS: Front-Loaded Reading vs Phase-by-Phase

### Master Prompt: Read-All-Then-Execute

The master prompt contains an implicit mandate: every rule applies simultaneously. There is no "you can start after reading Section A." The builder self-check (B10) references rules from B1, B2, B3, B4, B5, B7, and B8. The gate sequence (C3) references rules from every B subsection. Missing any single rule risks a gate failure.

**Consequence for attention degradation:** By the time an agent reaches B10 (the self-check, line 350), it has consumed 350 lines of dense specification. LLM attention to detail degrades with context length. The rules that matter MOST (the self-check, the gate definitions, the kill criteria) are positioned AFTER the rules that matter LEAST (conviction philosophy, experiential laws, exemplar CSS).

The prompt partially compensates with:
- "Recency position" (self-check is last before building)
- "Conviction sandwich" (opens and closes with motivation)
- Rule numbering (unique IDs for each rule)

But these are mitigations for a structural problem, not solutions to it.

### Remediation Spec: Read-Phase-Then-Execute

The remediation spec has explicit CHECKPOINTs after every phase. Each checkpoint is the ONLY validation needed before proceeding:

```
Phase 0 CHECKPOINT: "Open the page at 1440px. It should look IDENTICAL to before."
Phase 1 CHECKPOINT: "Skip link appears on Tab press. All sections have aria-labels."
Phase 3 PERCEPTION CHECK: "Scroll through at 1440px. You should see..."
```

An agent can execute Phase 0 after reading ONLY the executive summary (56 lines) and Phase 0 (76 lines) -- 132 lines total. It never needs to understand multi-coherence, scale-channel theory, or compositional fluency to delete sub-perceptual CSS.

**Consequence for attention degradation:** The agent's attention budget renews at each phase boundary. The maximum contiguous reading before action is ~178 lines (Phase 3, the largest). Average is ~70 lines per phase. The document naturally decomposes into 9 independent attention windows.

### Robustness Comparison

| Property | Master Prompt | Remediation Spec |
|----------|--------------|-----------------|
| Lines to read before first action | ~500 (all of A+B) | 132 (summary + Phase 0) |
| Max contiguous reading | 964 | 178 |
| Attention renewal points | 0 (single pass) | 8 (phase boundaries) |
| Degradation failure mode | Rule omission in late sections | Phase omission (detectable, recoverable) |
| Recovery from partial read | Impossible (rules are interdependent) | Possible (phases are mostly independent) |

---

## 5. THE CONVICTION LAYER QUESTION

### Master Prompt Conviction: ~117 Lines

The master prompt spends 107 lines (Section A) + 10 lines (Section D) on conviction -- 12.1% of the document. This includes:

- Philosophical thesis ("beauty = confident intention at every scale")
- IS/IS NOT tension table
- Anti-scale model with mathematical formula
- Empirical warnings from past experiments
- Compositional fluency theory with CD-006 worked example
- Experiential laws derived from 4 experiments
- Reader journey as 5-act story

### Remediation Spec Conviction: 0 Lines

The remediation spec has ZERO conviction content. It opens with a decision rationale (2 sentences) and immediately moves to structural decisions. The closest thing to a philosophical statement is:

> "THE RULE: If a human cannot SEE the difference without a color picker, do NOT write the CSS."

This is positioned in the appendix (line 985), not as a framing device.

### Does Conviction Help or Hurt?

**The case FOR conviction:** Conviction creates a shared mental model. When an agent encounters an ambiguous decision (e.g., "should I add a 5th scale or strengthen the 4th?"), conviction provides decision criteria that rules cannot enumerate. The master prompt's A3 (anti-scale model) directly answers this question without needing a rule.

**The case AGAINST conviction:** Conviction consumes attention budget. 107 lines of philosophy means 107 lines LESS of specification the agent can hold in active memory. For a builder agent whose job is to write CSS, knowing WHY richness = semantic_density x restraint x spatial_confidence does not change WHAT CSS they write. The philosophical grounding helps the prompt AUTHOR design better rules, but offers diminishing returns to the prompt CONSUMER (the builder agent).

**Empirical evidence from this project:** The master prompt was used for the Ceiling experiment. Result: 9/9 novelty, 14 mechanisms, 8/8 soul -- BUT catastrophic whitespace void, PA-05 1.5/4, DO NOT SHIP. The conviction layer did NOT prevent the dominant failure. The remediation spec (zero conviction) addresses that failure directly through embedded values and perception checks.

**Verdict:** Conviction helps PLANNING agents (Opus metaphor derivation, build planning) who must make novel decisions. Conviction hurts EXECUTION agents (Sonnet builders) who should follow recipes. The master prompt treats ALL agents as planners. The remediation spec treats the builder as an executor. The remediation spec's approach is more appropriate for the builder role, while the master prompt's approach is more appropriate for the planning roles -- suggesting that a hybrid would outperform either.

---

## 6. REFERENCE ARCHITECTURE: External Files vs Embedded Values

### Master Prompt: External Reference Model

The master prompt's Section E routes 15+ external files to agents:

```
BUILDER reads: [build plan], tokens.css, prohibitions.md, 00-components-extract.md, 00-case-studies-extract.md
PLANNER reads: mechanism-catalog.md, semantic-rules.md, 16-multi-coherence-invocation.md, 15-scale-channel-invocation.md
METAPHOR AGENT reads: SKILL.md (1,932 lines), CD-006.html, DD-006.html
INTENTIONALITY BUILDER reads: 11-crown-jewel-forensics.md, 13-compositional-fluency.md, 05-content-first-methodology.md
PA AUDITORS reads: SKILL.md (774 lines)
```

**Total external reading: ~5,000-8,000 lines across all agents.**

Advantages: DRY (Don't Repeat Yourself). Changes to mechanism-catalog.md propagate to all future experiments. Single source of truth.

Disadvantages: File access introduces failure modes (wrong file path, file changed between experiments, agent reads wrong version). The master prompt itself documented 2 BLOCKING issues from broken file paths (BG-05). External files also expand the total attention budget required per agent.

### Remediation Spec: Embedded Value Model

The remediation spec embeds ALL needed values directly:

```css
--color-zone-s1: #FEF5EB;    /* warm peach cream */
--color-zone-s5: #FAFAFA;    /* cool analytical */
```

No external file reads. Every CSS value, every HTML change, every verification check is self-contained in the document.

Advantages: Zero file-path failures. Zero version-drift risk. Agent needs nothing but this document.

Disadvantages: Values are frozen at authoring time. If tokens.css changes, the remediation spec becomes stale. No reusability -- the values are specific to this one HTML file.

### Verdict

The external reference model is better for GENERATIVE tasks (building new pages where mechanism-catalog.md provides the vocabulary). The embedded model is better for SPECIFIC tasks (modifying this one existing page). The remediation spec is inherently specific (it names exact CSS lines to delete, exact HTML elements to modify), so embedding is the correct choice. The master prompt is inherently generative (it must produce novel compositions), so external references are the correct choice -- but the file-path fragility is a real cost that the master prompt's validation team quantified at 2 BLOCKING issues.

---

## 7. HOW STRUCTURE PROPAGATES TO EXECUTION QUALITY

### Structural Predictions

| Structural Property | Master Prompt Prediction | Remediation Prediction |
|---------------------|------------------------|----------------------|
| **Rule compliance** | HIGH for binary rules, LOW for judgment rules | HIGH for all (values pre-computed, nothing to judge) |
| **Spatial proportion** | VARIABLE (depends on agent interpretation of S-01 through S-17) | HIGH (padding overrides are exact px values) |
| **Compositional quality** | VARIABLE (depends on how well agent cross-references B3+B4+B5) | MODERATE (phases are independent, no composition theory) |
| **Novel composition** | POSSIBLE (conviction + external refs enable creative decisions) | IMPOSSIBLE (recipe follows predetermined values) |
| **Failure mode** | Ambiguous (rule omission, cross-reference miss, judgment error) | Detectable (missed phase, failed perception check) |

### Evidence from Actual Execution

**Master prompt -> Ceiling experiment:**
- 14 mechanisms deployed (rule compliance: high)
- CCS ~0.05 (multi-coherence: catastrophically low despite MC-01 requiring >= 0.30)
- Catastrophic whitespace void (spatial: failed despite 17 spatial rules)
- 9/9 novelty (conviction layer produced creative intent)
- Zero inter-agent messaging (coordination spec ignored)

The master prompt's domain-organized structure made it possible to comply with mechanism COUNT rules (C-01, C-02) while violating mechanism INTERACTION rules (MC-01). The rules were in different sections (B3 vs B4), and the builder apparently read B3 without internalizing B4. This is a structural scattering failure.

**Remediation spec -> not yet executed, but predictions:**
- Values will be exactly as specified (recipe following)
- No whitespace voids (divider margins pre-computed to cap at 120px)
- No compositional surprises (no conviction to inspire novel decisions)
- Predictable 3/4 PA-05 (COMPETENT, not DESIGNED)

### The Traceability Chain

```
Master prompt structure (scattered by domain)
  -> Agent must cross-reference 10+ locations
    -> Attention degradation at location 7+
      -> MC rules in B4 not fully internalized
        -> CCS 0.05 despite 14 mechanisms
          -> DO NOT SHIP

Remediation structure (sequential by phase)
  -> Agent reads Phase N, executes Phase N, verifies Phase N
    -> Attention resets at each checkpoint
      -> All values applied as specified
        -> 3/4 COMPETENT, not 4/4 DESIGNED
          -> SHIP WITH NOTES
```

The master prompt's structure enables ceiling-quality outcomes (4/4 DESIGNED) but also enables catastrophic failures (1.5/4 DO NOT SHIP). The remediation spec's structure guarantees floor-quality outcomes (3/4 COMPETENT) and makes catastrophic failure nearly impossible. This is the classic reliability-vs-ceiling tradeoff.

---

## 8. SYNTHESIS: STRUCTURAL RECOMMENDATIONS

### What Each Document Does Better

| Capability | Winner | Why |
|-----------|--------|-----|
| Preventing catastrophic failure | Remediation | Phase isolation + embedded values + perception checks |
| Enabling creative composition | Master prompt | Conviction + external references + compositional theory |
| Agent compliance rate | Remediation | Zero judgment, zero cross-referencing, pre-computed values |
| Novel page construction | Master prompt | Conviction layer provides derivation framework |
| Debuggability | Remediation | Each phase is independently verifiable |
| Reusability | Master prompt | Domain-organized rules apply to any content |
| Attention management | Remediation | 9 attention windows vs 1 marathon read |
| Compositional ceiling | Master prompt | Theory enables compositions the recipe cannot specify |

### The Architecture the Project Needs (But Neither Document Provides)

The ideal structure would be:

```
LAYER 0: PHASE-SPECIFIC RECIPE (remediation style)
  - Sequential steps with embedded values
  - Checkpoints after each step
  - Zero cross-referencing within layer

LAYER 1: DOMAIN RULES (master prompt style)
  - Complete rule set organized by domain
  - Read ONLY by planning agents, NOT builders
  - Gates reference these rules, builders reference the recipe

LAYER 2: CONVICTION (master prompt style)
  - Read ONLY by Opus creative agents
  - Provides derivation framework for novel decisions
  - Zero cost to builder agents

LAYER 3: REFERENCE (master prompt style)
  - External files routed to specialists
  - File paths validated before experiment launch
```

This four-layer architecture separates the audiences:
- **Builders** read Layer 0 only (recipe) -- ~75 lines per phase, embedded values
- **Planners** read Layer 1 (rules) + Layer 2 (conviction) -- ~300 lines total
- **Auditors** read Layer 1 (rules) for verification -- ~200 lines of gates
- **Creative agents** read Layer 2 (conviction) + Layer 3 (references) -- open-ended

The master prompt collapses all four layers into one document, forcing builders to read conviction they do not need and planners to read CSS recipes they will not use. The remediation spec provides only Layer 0, making it unsuitable for novel page construction.

### The Structural Architecture Finding

**Structure is not neutral.** The master prompt's domain-organized, conviction-first, external-reference architecture PRODUCES a specific failure mode: high ambition + incomplete execution. The remediation spec's phase-sequential, embedded-value, checkpoint-driven architecture PRODUCES a different outcome: reliable competence without creative breakthrough.

The project's history confirms this: the master prompt produced 9/9 novelty with DO NOT SHIP spatial failure. The remediation spec is predicted to produce 0/9 novelty with SHIP-ready spatial compliance. Neither structure alone achieves the project's goal of 4/4 DESIGNED + SHIP-ready. The structural gap is not in the content of either document but in the absence of an architecture that serves BOTH creative derivation and reliable execution in a single coherent system.

---

**END OF STRUCTURAL ARCHITECTURE ANALYSIS**

**Key structural finding:** Document architecture propagates to execution quality through three mechanisms: (1) attention budget allocation (what the agent reads first and most), (2) cross-reference demand (how many locations must be synthesized simultaneously), and (3) verification granularity (how early failures are detected). The master prompt optimizes (1) for conviction but fails on (2) and (3). The remediation spec optimizes (2) and (3) but abandons (1). The optimal architecture would separate these concerns by audience role.
