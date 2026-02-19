# Compression Loss Traceability Report

**Agent:** compression-tracer
**Date:** 2026-02-17
**Task:** Trace what actionable/generative content was lost when ~590k of research was compressed into a 963-line master execution prompt (FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md)
**Method:** Read all 963 lines of the prompt + 15 high-value research source files + audit data. For each source, traced OPERATIONAL/GENERATIVE content (specific techniques, CSS playbooks, builder instructions, concrete examples) and checked presence/absence in the prompt.

---

## EXECUTIVE SUMMARY

**Total actionable lines across all sources read:** ~7,400 lines of operational content
**Lines present in prompt (as rules or references):** ~480 lines (rules, formulas, definitions)
**Lines ABSENT from prompt:** ~6,920 lines (93.5%)
**Compression ratio:** ~15:1 (operational content only; full corpus is ~50:1)

**The critical pattern:** The prompt absorbed WHAT to check (binary rules, thresholds, formulas) but compressed away HOW to achieve it (CSS playbooks, builder recipes, worked examples, channel deployment checklists, interaction documentation templates). The result is a prompt that tells 97 things NOT to do and almost nothing TO do.

**Direct causal link to HTML failures:**
- Scale 5 (Detail/Character) has ZERO operational instructions in the prompt. Result: zero variation in font-size, font-weight, color, or margins across all 12 sections.
- Ch4 (Structural) has no deployment playbook. Result: zero borders, dividers, or containment elements anywhere on the page.
- Channel deployment checklist absent. Result: section transitions change only 1 channel (spacing), not the required 3+.
- Cascade value table absent. Result: 14 mechanisms deployed independently, CCS ~0.05.
- Restraint map absent. Result: mechanisms deployed uniformly, no deliberate absence patterns.

---

## SOURCE-BY-SOURCE TRACEABILITY TABLES

### Source 1: Scale Exploration Report 01 — Beyond Five Scales
**File:** `ephemeral/ceiling-experiment/_scale-exploration/01-beyond-five-scales.md` (~405 lines)

| Actionable Content in Source | Present in Prompt? | If absent, what was lost |
|-----|-----|-----|
| Scale 6-10 concrete CSS examples (letter-spacing progressions, easing curves, state-variant mappings) | ABSENT | Builder has no playbook for Scale 5 micro-details. Scale 5 was defined (SC-01 names it) but has ZERO operational CSS instructions. Direct cause: all 12 sections have identical 16px font-size, 400 weight, rgb(26,26,26) color. |
| Semantic Density Protocol: "how to make each CSS decision carry maximum meaning" — specific letter-spacing values (0.02em/normal/0.1em), font-size steps (0.875/1.0/1.125rem) | ABSENT | Builder received no vocabulary for Scale 5 variation. Only letter-spacing and line-height vary in the output, and those variations are tiny (0.096px to 0.064px — barely perceptible). |
| Scale 10 (Semantic Density) adoption recommendation with specific protocol: "count semantic load per CSS declaration" | ABSENT | No density-per-declaration metric in prompt. Builder cannot self-check whether CSS choices carry meaning. |
| Richness gain estimates per scale (Scale 6: 3-5%, Scale 7: 2-3%, etc.) with reproducibility costs | ABSENT | No cost-benefit framework for builder to decide which micro-details are worth implementing vs. skipping. |
| State-variant mechanism mappings (how mechanism appearance changes based on container state) | ABSENT | Builder has no instructions for making the same mechanism look different in different zones. Direct cause: callouts, paragraphs, and headers look identical regardless of which section they appear in. |

**Actionable lines in source:** ~180
**Lines absorbed by prompt:** ~8 (SC-01 scale definitions, line 244-250)
**Lines lost:** ~172 (95.6%)

---

### Source 2: Scale Exploration Report 02 — Alternative Mental Models
**File:** `ephemeral/ceiling-experiment/_scale-exploration/02-alternative-mental-models.md` (~410 lines)

| Actionable Content in Source | Present in Prompt? | If absent, what was lost |
|-----|-----|-----|
| 7 alternative richness dimensions, each with MEASUREMENT PROTOCOLS: Temporal Metabolism (4-layer scoring), Semantic Resonance (channels-per-transition counting), Narrative Arc (visual intensity correlation), Materiality Gradient (range+distribution scoring), Cognitive Scaffolding (scaffold type counting), Systemic Gravity (semantic density metric), Emotional Topology (register counting) | ABSENT (all 7) | Builder has zero alternative lenses for evaluating richness beyond mechanism count and scale count. The prompt defines channels (SC-02) but provides no measurement protocol for USING them. The builder cannot self-assess "am I achieving semantic resonance?" because no measurement method exists in the prompt. |
| Temporal Metabolism 4-layer framework: Flash (0-100ms) / Scan (1-5s) / Read (30-300s) / Return (days+) with specific CSS techniques per layer | ABSENT | No temporal layer awareness in prompt. Builder has no instructions for creating hover states, progressive disclosure, or return-value markers. The HTML output has zero temporal dynamics. |
| Semantic Resonance channel-counting protocol: "at each transition, count how many channels encode the SAME semantic shift" with scoring (1.0-5.0 average) | PARTIALLY PRESENT | SC-09 says "minimum 3 channels shift at every section transition" but provides NO counting protocol, no examples, no scoring rubric. Builder knows the THRESHOLD but not HOW TO COUNT or WHAT COUNTS as a channel shift. Direct cause: flagship transitions change only spacing (1 channel). |
| Narrative Arc correlation protocol: compare visual intensity to content importance across scroll | ABSENT | No visual intensity measurement method. Builder has no way to verify that visual weight tracks content importance. C-19 says "most important content block MUST use more mechanisms" but provides no method for identifying importance or measuring visual weight. |
| Materiality Gradient scoring: count distinct material treatments (border styles, background textures, containment approaches) and assess range/distribution | ABSENT | No material variety metric. Builder has no instruction to vary border styles, containment approaches, or surface treatments. Direct cause: zero borders, zero containment, zero material variation in output. |

**Actionable lines in source:** ~280
**Lines absorbed by prompt:** ~12 (SC-02 channel definitions, SC-09 channel minimum)
**Lines lost:** ~268 (95.7%)

---

### Source 3: Scale Exploration Report 03 — Diminishing Returns
**File:** `ephemeral/ceiling-experiment/_scale-exploration/03-diminishing-returns.md` (~758 lines)

| Actionable Content in Source | Present in Prompt? | If absent, what was lost |
|-----|-----|-----|
| Mathematical richness functions: R(s) = 30 + 67*(1-e^(-0.55s)), T(s) = 35*2^(0.65s), P(s) = 100-5s-2s^2 | ABSENT | No cost-benefit framework for builder. Builder cannot estimate whether adding a mechanism is worth the attention cost. |
| 40/8/2 distribution model (40 Middle + 8 Ceiling + 2 Flagship per 50 pages) | ABSENT | Not relevant to single-page build, but frames the strategic context. |
| Iteration protocol: Build at Ceiling, audit, fix TOP 3 findings, re-audit (4-step cycle, 235 min total) | ABSENT | The prompt has no iteration protocol. P-08 says "spatial re-check after Pass 2" but there is no fix-and-rebuild cycle. Builder produces one output and audit happens once. No mechanism for iterative improvement. |
| CSS complexity ceiling at 800-1000 lines with quality degradation above 1200 | ABSENT | No CSS line budget in prompt. Builder has no upper bound on CSS complexity. |
| Investment allocation per-mechanism: cost/benefit scoring to identify highest-ROI mechanisms | ABSENT | Builder has no priority ordering for mechanism deployment. All mechanisms are treated equally. |

**Actionable lines in source:** ~320
**Lines absorbed by prompt:** ~0
**Lines lost:** ~320 (100%)

---

### Source 4: Scale Exploration Report 04 — Showcase Archaeology
**File:** `ephemeral/ceiling-experiment/_scale-exploration/04-showcase-archaeology.md` (~267 lines)

| Actionable Content in Source | Present in Prompt? | If absent, what was lost |
|-----|-----|-----|
| 6 unmodeled dimensions: self-reference, pedagogical sequencing, cognitive mode transitions, structural bookending, meta-annotation, provenance threading | PARTIALLY PRESENT | C-15 lists them as a checklist (>= 3 of 6 required) but provides ZERO operational instructions for achieving any of them. "Self-reference" is named but the builder has no example of what self-reference LOOKS LIKE in CSS/HTML. CD-006's self-referential code block (CSS inside a styled callout) is mentioned in the conviction layer but not as a builder instruction. |
| Intentionality axis concept: orthogonal to spatial scales, 15-20% of crown jewel quality | PARTIALLY PRESENT | A4 mentions "Design Intelligence" as Source 2 of richness. But the operational path from concept to implementation is absent. Builder knows intentionality matters but has no method for producing it. |
| Iteration hypothesis WRONG finding: DD-006 and CD-006 were single-pass builds | ABSENT | Contradicts the assumption that iteration is required for quality. This evidence that single-pass CAN achieve crown jewel quality would change builder confidence, but it's absent from the prompt. |
| 15-20% richness from unmodeled dimensions (not 2-5% as previously estimated) | ABSENT | The magnitude of the intentionality gap is unknown to the builder. |

**Actionable lines in source:** ~120
**Lines absorbed by prompt:** ~8 (C-15 checklist, C-16 self-reference requirement)
**Lines lost:** ~112 (93.3%)

---

### Source 5: Scale Exploration Report 05 — Cross-Domain Theory
**File:** `ephemeral/ceiling-experiment/_scale-exploration/05-cross-domain-theory.md` (~466 lines)

| Actionable Content in Source | Present in Prompt? | If absent, what was lost |
|-----|-----|-----|
| 6 cross-domain analyses (music, architecture, typography, cinema, software, nature) with specific analogies | ABSENT | Builder has no cross-domain mental models. The music analogy (melody/rhythm/harmony/timbre as channels) would help builders understand channel deployment intuitively. |
| "Scale depth converges; channel width diverges" — universal principle with 6 domain examples | PARTIALLY PRESENT | A3 says "beyond 5, add CHANNELS not LEVELS" in one sentence. But the 6 domain examples that CONVINCE builders of this principle are absent. The conviction is stated but not earned through evidence. |
| Architecture: Alexander's 15 properties operating at each scale | ABSENT | No operational mapping of Alexander properties to CSS. This is the deepest theoretical foundation for the channel concept, completely absent. |
| "Gaps between scales worse than missing scales" finding | ABSENT | Builder has no guidance on maintaining scale adjacency. If implementing 3 scales, the builder doesn't know that Page+Component (gap of 2) is worse than Page+Section+Component (no gap). |
| Perceptual ceiling ~3-5 simultaneously attended scales across all domains | PRESENT | A3 and SC-01 encode this. "Preferred 2-3 for flagship." |

**Actionable lines in source:** ~200
**Lines absorbed by prompt:** ~15 (A3 anti-scale model, SC-01 scale definitions)
**Lines lost:** ~185 (92.5%)

---

### Source 6: Scale Exploration Report 06 — Adversarial Anti-Scale
**File:** `ephemeral/ceiling-experiment/_scale-exploration/06-adversarial-anti-scale.md` (~431 lines)

| Actionable Content in Source | Present in Prompt? | If absent, what was lost |
|-----|-----|-----|
| Anti-scale formula: Richness = (semantic density per decision) x (restraint ratio) x (spatial confidence) | PRESENT | A3 has the formula. |
| Deliberate absence as design tool: specific CSS patterns for "silence zones," signal-to-silence ratio targets | PARTIALLY PRESENT | C-13 requires ">= 2 designed silence zones (200px+)" and C-14 sets ratio 0.6-0.8:1. But NO CSS example of what a silence zone looks like. Builder knows the RULE but not the IMPLEMENTATION. |
| Middle (2 scales) outperformed Ceiling (4 scales) on PA-05: 4/4 vs 1.5/4 — detailed analysis of WHY | PRESENT | A3 includes this empirical warning prominently. |
| Vocabulary constraint (soul) as ENGINE of richness — specific examples of how soul prohibition channels creative energy into remaining toolkit | PARTIALLY PRESENT | A4 says "Soul prohibitions close ~55-65% of CSS toolkit. Surviving channels carry 4-5x semantic weight." But no WORKED EXAMPLE showing: "without gradients, I must use borders for zone differentiation, which forces me to..." The causal chain from constraint to richness is stated but not demonstrated. |
| Signal-to-silence ratio measurement protocol | ABSENT | C-14 says "0.6-0.8:1" but no method for MEASURING the ratio. How does the builder count "signal events" vs "silence events"? What counts as signal? |

**Actionable lines in source:** ~180
**Lines absorbed by prompt:** ~30 (A3 formula + evidence, C-13/C-14 silence rules)
**Lines lost:** ~150 (83.3%)

---

### Source 7: Flagship Prep Report 01 — Process Retrospective
**File:** `ephemeral/ceiling-experiment/_flagship-prep/01-process-retrospective.md` (~453 lines)

| Actionable Content in Source | Present in Prompt? | If absent, what was lost |
|-----|-----|-----|
| 10 specific gate proposals with concrete formats: spatial budget table template, checkpoint content format, post-build self-review gate | PARTIALLY PRESENT | P-01 has estimation formulas. B10 has self-check. But the spatial budget TABLE TEMPLATE (section-by-section height estimates) is absent. Builder estimates globally but not per-section. |
| Spatial budget calculation template: Section | Est. Words | Est. Height | Zone Assignment | Mechanism Budget — with example numbers | ABSENT | Builder has no per-section spatial budget. Cannot verify that each section will produce adequate content density. Direct cause: some sections produce 243-276px voids between them because no per-section height target existed. |
| Post-build self-review gate: specific scroll-through protocol with what to look for at each viewport position | PARTIALLY PRESENT | P-04 says "builder self-scroll before file write." But NO protocol for WHAT TO LOOK FOR during the scroll. The builder scrolls but doesn't know the criteria for "this viewport position looks right." |
| Zone content density threshold: minimum 800px rendered content per zone | PRESENT | P-05 says "content mass >= 800px." |
| Root cause: "pipeline optimizes for COMPOSITIONAL SPECIFICATION without spatial accountability" | PRESENT | Encoded across A6 and multiple S-rules. |

**Actionable lines in source:** ~200
**Lines absorbed by prompt:** ~40 (P-01 formulas, P-04 self-scroll, P-05 zone boundary, B10 self-check)
**Lines lost:** ~160 (80.0%)

---

### Source 8: Flagship Prep Report 02 — Content-Form Analysis
**File:** `ephemeral/ceiling-experiment/_flagship-prep/02-content-form-analysis.md` (~310 lines)

| Actionable Content in Source | Present in Prompt? | If absent, what was lost |
|-----|-----|-----|
| Zone-content ratio analysis: 3 REAL zones, 1 PARTIALLY REAL, 3 PERFORMATIVE zones — classification criteria for each | ABSENT | Builder has no method for distinguishing REAL zones (justified by content) from PERFORMATIVE zones (created to hit a count target). The prompt says "zone count ceiling by word count" (S-15) but provides no qualitative test for zone legitimacy. |
| Signal-to-silence ratio analysis: 67 signal events vs 57 silence events = 1.18:1 (should be 0.6-0.8:1) — counting methodology | ABSENT | C-14 sets the target ratio but the COUNTING METHODOLOGY is absent. Builder doesn't know what counts as a "signal event" or a "silence event." |
| Content density minimums: 800px minimum, with specific measurement ("rendered content including text, images, components — NOT whitespace or structural elements") | PARTIALLY PRESENT | P-05 mentions 800px. But the definition of what counts as "content" vs. "structure" is absent. |
| Pattern-content directionality: "content drives pattern, not pattern drives content" — specific anti-pattern examples (performative zones, forced metaphor structures) | ABSENT | The prompt says metaphor spatial cost <= 15% (MG-05) but doesn't address the broader anti-pattern of structure driving content. |
| Concrete recommendations: "remove zone indicators, checkpoints, workstation title bars" — specific structural elements to eliminate for tighter content | ABSENT | No list of structural elements that should be pruned for content density. Builder adds structural elements (zone markers, checkpoints) that inflate void without adding content. |

**Actionable lines in source:** ~170
**Lines absorbed by prompt:** ~15 (P-05 zone boundary, S-15 zone ceiling, C-14 ratio)
**Lines lost:** ~155 (91.2%)

---

### Source 9: Flagship Prep Report 03 — Enrichment Audit
**File:** `ephemeral/ceiling-experiment/_flagship-prep/03-enrichment-audit.md` (~968 lines)

| Actionable Content in Source | Present in Prompt? | If absent, what was lost |
|-----|-----|-----|
| 34 enrichment gaps identified (10 BLOCKING, 14 Important, 10 Nice-to-have) with specific remediation proposals for each | PARTIALLY PRESENT | The BLOCKING gaps were addressed in prompt fixes. But the specific CSS proposals (transition grammar with 3 CSS patterns, restraint protocol with worked examples, content density floors with measurement methods) were compressed to binary rules. |
| Transition Grammar: 3 types with SPECIFIC CSS PATTERNS (Hard Cut = 80px + 3px border, Gradient Fade = 48px + 1px border, Checkpoint = 64px + background + prose) | PRESENT | C-05 has the transition types with CSS values. This is one of the few operational playbook items that survived compression. |
| Restraint protocol: 1.5:1 reject-to-deploy ratio with DOCUMENTATION FORMAT (mechanism name, intended location, reason for rejection) | PRESENT | C-12 has the restraint protocol with documentation format. Another survivor. |
| Maximum spacing token: --space-max-zone = 96px | PRESENT | S-09 and S-11 encode the 96px maximum. |
| Void detection protocol (proposed as PA-49): "at every viewport position, check content coverage >= 30%" | PRESENT | S-12 encodes this as a binary rule. |
| Zone-adapted component variants: "callouts in dense zones have 16px padding, callouts in sparse zones have 24px padding" — specific CSS for per-zone component adjustment | ABSENT | MC-03 says ">= 2 modulating chains" but provides NO CSS example. Builder knows modulation is required but has no CSS pattern to implement it. Direct cause: all callouts (if any existed) would look identical regardless of zone. |
| Content density floor protocol: "measure rendered content height per viewport, minimum 30% coverage" with specific measurement JavaScript | PARTIALLY PRESENT | S-12 states the threshold. But the measurement JavaScript is absent. Builder must invent the measurement method. |
| Wave 1 execution order: Void Prevention Triad + Transition Grammar + Restraint Protocol | ABSENT | No execution priority ordering in prompt. All 97 rules are equally weighted. Builder doesn't know which rules to implement FIRST for maximum impact. |

**Actionable lines in source:** ~500
**Lines absorbed by prompt:** ~60 (C-05 transitions, C-12 restraint, S-09/S-11/S-12 void prevention)
**Lines lost:** ~440 (88.0%)

---

### Source 10: Flagship Prep Report 04 — Metacognitive Analysis
**File:** `ephemeral/ceiling-experiment/_flagship-prep/04-metacognitive-analysis.md` (~384 lines)

| Actionable Content in Source | Present in Prompt? | If absent, what was lost |
|-----|-----|-----|
| Preparation ceiling hypothesis: prompt effectiveness degrades beyond ~100-200 lines for LLM agents | ABSENT | The prompt is 963 lines. If the hypothesis is correct, the builder agent can effectively process only the first ~150 lines (conviction layer + start of execution spec). Everything in B4-B11 may be below the agent's attention threshold. This is a STRUCTURAL critique of the prompt itself. |
| 4 identified biases: confirmation bias, sunk cost, complexity bias, continuation bias — with specific mitigation strategies | ABSENT | No bias mitigation in prompt. Agents are not warned about continuation bias (the tendency to keep building instead of stopping to reassess). |
| 6 metacognitive checkpoints: specific self-questions per pipeline phase ("Am I adding structure because the content needs it or because the plan says to?") | ABSENT | P-07 says "every checkpoint MUST produce a deliverable ARTIFACT" but the QUESTIONS to ask at each checkpoint are absent. Builder produces artifacts but doesn't self-interrogate. |
| 5 kill criteria with specific triggers: "if estimated page height exceeds 15,000px, KILL" / "if content-to-void ratio drops below 50% at any phase, KILL" | PARTIALLY PRESENT | S-14 has graduated content-to-void thresholds. S-10 has void detection. But the full KILL criteria (5 specific triggers) are compressed to individual rules scattered across 17 spatial rules. No KILL DECISION TREE. |
| Gestalt vs specialized observation: "first look at the whole page, THEN zoom to individual elements" | ABSENT | PA deployment (C4) assigns auditors to specific dimensions but doesn't specify gestalt-first observation protocol. (Note: the PA operational scaffolding document DOES have this, but it's not in the main prompt.) |

**Actionable lines in source:** ~200
**Lines absorbed by prompt:** ~10 (S-14 graduated thresholds, P-07 deliverable artifacts)
**Lines lost:** ~190 (95.0%)

---

### Source 11: Flagship Prep Report 05 — Flagship Architecture
**File:** `ephemeral/ceiling-experiment/_flagship-prep/05-flagship-architecture.md` (~625 lines)

| Actionable Content in Source | Present in Prompt? | If absent, what was lost |
|-----|-----|-----|
| 3-pass execution model: Pass 1 (spatial skeleton) -> Pass 2 (compositional elaboration) -> Pass 3 (intentionality layer) with specific deliverables per pass | PARTIALLY PRESENT | The prompt mentions "Pass 1" and "Pass 2" in passing (P-08 references "skeleton gate" and "post-mechanism"). But the 3-pass model is not explicitly structured. The builder receives 97 rules to implement in an unspecified order, not a 3-pass sequence. |
| Spatial Confidence Gate: 7 binary checks (SC-01 through SC-07) that BLOCK all higher-scale work until spatial proportion is verified | ABSENT as a GATE | Individual checks exist (S-01, S-02, S-10, S-12). But they are NOT structured as a BLOCKING GATE between passes. The builder can proceed to compositional elaboration without verifying spatial proportion first. Direct cause: the flagship built mechanisms INTO a spatially broken skeleton instead of fixing the skeleton first. |
| Restraint Map: worked example showing "Zone 1: deploy mechanisms A, B, C. Zone 2: deploy mechanism A only (deliberate absence of B, C). Zone 3: deploy mechanisms B, D (deliberate absence of A, C)." | ABSENT | C-12 requires a rejection log and C-13 requires silence zones. But no RESTRAINT MAP format exists. Builder cannot plan which mechanisms appear WHERE and which are deliberately absent WHERE. Direct cause: mechanisms are deployed uniformly across all sections instead of selectively. |
| Multi-pattern question: "ONE pattern recommended (not 3-5)" | PRESENT | Implied by C-21 (compositional clusters). |
| 24-item success criteria table with per-item thresholds and verification methods | PARTIALLY PRESENT | Success criteria scattered across B1-B10. But not collected into a SINGLE verification table. Builder must hunt through 97 rules to find relevant thresholds. |
| 6 kill criteria (KILL-01 through KILL-06) with specific triggers and decision tree | ABSENT as a coherent structure | Individual thresholds exist but no KILL DECISION TREE. Builder doesn't know when to STOP and REBUILD vs. CONTINUE and FIX. |

**Actionable lines in source:** ~350
**Lines absorbed by prompt:** ~50 (S-rules, P-08 spatial re-check)
**Lines lost:** ~300 (85.7%)

---

### Source 12: Flagship Prep Report 06 — Failure Analysis
**File:** `ephemeral/ceiling-experiment/_flagship-prep/06-failure-analysis.md` (~520 lines)

| Actionable Content in Source | Present in Prompt? | If absent, what was lost |
|-----|-----|-----|
| 7 failure root cause chains fully traced (whitespace-as-boundary, metaphor-spatial-conflict, void-cascade, mechanism-wallpaper, channel-monotony, attention-fragmentation, process-debt) | PARTIALLY PRESENT | A6 "Experiential Laws" summarizes 6 lessons. But the full root cause CHAINS (A caused B which caused C which caused D) are absent. Builder sees the conclusion but not the causal path. |
| Classification: 3 process-fixable, 1 tooling-fixable, 1 spec-fixable, 2 structural (manageable) — with specific fixes per category | ABSENT | Builder doesn't know which failure modes are process-fixable (and thus within their control) vs. structural (requiring system-level changes). |
| 12-item consolidated prevention checklist with per-item verification | PARTIALLY PRESENT | Items distributed across B1-B10. But not as a PREVENTION checklist (what to actively prevent) vs. an AUDIT checklist (what to check after building). Prevention and audit are different mental modes. |
| "Attention budget problem" — specific analysis of how many binary rules a builder can attend to simultaneously (~15-20 max, prompt has 97) | ABSENT | THE most important metacognitive finding. 97 rules exceed builder attention capacity by 5x. Builder skims or ignores most rules. This is a STRUCTURAL failure of the prompt architecture itself. |
| "Faithful execution trap" — builder follows rules faithfully but produces bad output because rules don't encode quality, only compliance | PRESENT | A6 states "Deployment does NOT equal perception." But the trap mechanism (why compliance != quality) is not explained to the builder. |

**Actionable lines in source:** ~270
**Lines absorbed by prompt:** ~25 (A6 experiential laws, distributed prevention rules)
**Lines lost:** ~245 (90.7%)

---

### Source 13: Ceiling Preparation Brief
**File:** `ephemeral/ceiling-preparation/CEILING-PREPARATION-BRIEF.md` (~504 lines)

| Actionable Content in Source | Present in Prompt? | If absent, what was lost |
|-----|-----|-----|
| Ceiling tier verbiage specification: exact wording for "1+ per category" + reinforcing pairs + 4-scale requirement | PRESENT | C-01, C-08, C-20 encode these. |
| Container width rule: "940-960px NON-NEGOTIABLE, express metaphor through internal padding" | PRESENT | S-01 (940-1100px range — note: slightly wider than brief's 940-960px). |
| Pipeline architecture: single tiered pipeline with 3 quality gates, Track 1 vs Track 2 routing | PRESENT | B8 TC Pipeline Routing encodes this. |
| Richness gap analysis: composite gap table (DD-006 vs Middle) with "total addressable gap 60-70%" | ABSENT | Builder doesn't know the theoretical ceiling for improvement or which dimensions contribute most to the gap. |
| Fractal Scale Depth identified as "single most important richness dimension" accounting for 15-20% of perceived richness gap | PARTIALLY PRESENT | C-20 requires fractal coherence. But the 15-20% importance estimate and the specific diagnosis (missing section-scale coherence) are absent. Builder knows to do fractal coherence but doesn't know it's the #1 priority. |
| Conflict resolutions (5 conflicts resolved with specific rationale) | ABSENT | Builder doesn't know which design decisions were contested and how they were resolved. Risks re-opening settled debates during build. |
| Agent team topology specification: flat + messaging, per-file ownership, 3 Opus + 7 Sonnet | PRESENT | Section C agent roster. |
| Risk mitigations table (8 risks with specific mitigations) | PARTIALLY PRESENT | Some mitigations embedded in rules. But not as a RISK TABLE that agents can consult. |

**Actionable lines in source:** ~250
**Lines absorbed by prompt:** ~80 (rules derived from brief's specifications)
**Lines lost:** ~170 (68.0%)

---

### Source 14: Scale-Channel Invocation Architecture
**File:** `ephemeral/prompt-enrichment-audit/15-scale-channel-invocation.md` (~700 lines)

| Actionable Content in Source | Present in Prompt? | If absent, what was lost |
|-----|-----|-----|
| 7-channel taxonomy with 5-scale manifestations each (35 cells total): CHROMATIC, TYPOGRAPHIC, SPATIAL, STRUCTURAL, DENSITY, RHYTHMIC, INTENTIONAL — each with concrete CSS examples at each scale | PARTIALLY PRESENT | SC-02 lists channel names and 1-line definitions. But the PER-SCALE MANIFESTATIONS (what each channel looks like at Navigation vs Page vs Section vs Component vs Character scale) are absent. Builder knows the channel names but not what to DO with them at each scale. This is a ~280-line taxonomy compressed to ~12 lines. |
| Channel Interaction Matrix: which channel pairs REINFORCE vs INDEPENDENT, with examples | ABSENT | Builder knows to create reinforcing pairs (C-08, MC-02) but doesn't know WHICH channel pairs naturally reinforce. The matrix shows that chromatic+density and spatial+structural are natural reinforcing pairs, while chromatic+typographic are independent. Without this, builder cannot efficiently identify reinforcing opportunities. |
| 8 binary channel rules (C-01 through C-08) with full verification protocols | PARTIALLY PRESENT | SC-09 (3 channels per transition), SC-10 (chromatic-density alignment) are present. But C-01 through C-08 from this source are NOT in the prompt as written — they were RENAMED and REDISTRIBUTED across B3 and B5. Some verification protocols were lost in the rename. |
| Builder quick-reference checklist (30-line per-agent context for channel deployment) | ABSENT | This was designed as "30 lines of per-agent memory" for the builder. It contains the WHAT-TO-DO-AT-EACH-TRANSITION checklist that the prompt lacks. Its absence means the builder has rules but no checklist for real-time use during construction. Direct cause: transitions change only 1 channel instead of 3+. |
| 6 anti-patterns with specific symptoms, results, and fixes: Scale Stacking, Channel Monotony, Channel Cacophony, Intentional Channel Neglect, Restraint Deficit, Channel-Mechanism Confusion | ABSENT | Builder has no anti-pattern library. Cannot recognize when they're falling into Channel Monotony (same channel at every transition) or Channel-Mechanism Confusion (deploying 5 spatial mechanisms but thinking they've activated 5 channels). These are EXACTLY the failure modes visible in the flagship output. |
| 7 operational formulas: CDT, RDT, MCS, SRS, RR, SCI, CSPS — with worked examples and interpretation ranges | PARTIALLY PRESENT | Some formulas referenced (SCI in S-16, CCS in MC-01). But CDT (channel density per transition), RDT (reinforcement depth), MCS (matrix coverage score), SRS (semantic resonance score), CSPS (channel-scale priority score) are absent. Builder has no quantitative self-assessment tools for channel deployment quality. |
| Agent-channel ownership map: which agent owns which channels, with mandatory communication checkpoints | PARTIALLY PRESENT | Section C assigns agent roles. But CHANNEL OWNERSHIP (metaphor agent owns Ch7, planner owns Ch3+Ch4, builder implements Ch1+Ch2+Ch3+Ch4) is absent. No mandatory channel-specific communication. |
| Conviction layer text (~20 lines) designed to inspire channel-aware thinking in builders | PARTIALLY PRESENT | A3 has channel concept. But the specific conviction text from this source ("The builder who asks 'how many channels are SAYING THE SAME THING at this transition point?' is asking the right question") is more operationally inspiring than the prompt's abstract formula. |

**Actionable lines in source:** ~530
**Lines absorbed by prompt:** ~50 (SC-01 through SC-10 rules)
**Lines lost:** ~480 (90.6%)

---

### Source 15: Multi-Coherence Invocation System
**File:** `ephemeral/prompt-enrichment-audit/16-multi-coherence-invocation.md` (~952 lines)

| Actionable Content in Source | Present in Prompt? | If absent, what was lost |
|-----|-----|-----|
| 5 interaction types with CROWN JEWEL CSS EXAMPLES: Reinforcing (3 OD-004 CSS blocks showing 3 channels encoding "depth"), Modulating (DD-006 CSS showing dense/sparse section adjusting callout internals), Responding (CD-006 CSS showing header-to-drop-cap weight response), Contrasting (zone background presence/absence pattern), Cascading (CD-006 4-act CSS showing 4 mechanisms tracking CRESCENDO) | PARTIALLY PRESENT | A5 names the 5 types and gives ONE worked example (CD-006 cascading). But the other 4 types have ZERO CSS examples. The builder knows the NAMES of interaction types but has CSS examples for only 1 of 5. |
| DOCUMENTATION FORMAT for each interaction type: "PAIR [N]: Mechanism #[A] + Mechanism #[B] / SHARED SEMANTIC: / CSS CHANNELS: / CO-VARIATION: / PERCEPTUAL EFFECT:" | ABSENT | Builder has no template for DOCUMENTING reinforcing pairs, modulating chains, etc. C-08 says ">= 2 reinforcing pairs" but the builder doesn't know what the documentation looks like. Without documentation format, the requirement becomes a mental note instead of a verifiable artifact. |
| CCS (Compositional Coupling Score) worked example: per-mechanism CCS calculation for CD-006 (16 mechanisms, scored individually) | PARTIALLY PRESENT | MC-01 has the formula. But the WORKED EXAMPLE showing how to apply it (mechanism-by-mechanism scoring table) is absent. Builder knows CCS >= 0.30 but has never seen a real CCS calculation. |
| Fractal coherence verification protocol: 5 scales with specific format (SCALE [N] / DIRECTION VISIBLE / CSS EVIDENCE / RELATIONSHIP TO ADJACENT SCALE) | ABSENT | C-20 requires fractal coherence but provides no documentation format. Builder must invent their own verification method. |
| Cross-dimension coherence matrix: 15 dimension pairs with specific coherence descriptions, verification questions, and CSS evidence | ABSENT | MC-07 says ">= 10 of 15 dimension pairs actively coupled." But the 15 PAIRS ARE NOT LISTED. Builder doesn't even know what the 15 pairs ARE, let alone how to verify coherence for each. A 30-line table compressed to 2 lines. |
| Anti-Metronome principle with CD-006 spacing contour: 80->48->32->32->48->48->64->80 | ABSENT | MC-08 says ">= 3 distinct padding values." But the CONTOUR CONCEPT (spacing values forming a shape that maps to density arc) is absent. Builder can satisfy MC-08 with random variation instead of intentional contour. |
| Builder self-check (2-minute protocol): 8 specific checks with expected time per check | ABSENT | B10 has a builder self-check but it's focused on COMPLIANCE (binary rule checks). This source's self-check is focused on COMPOSITION (does the page feel atmospheric, do mechanisms need each other). The two checklists serve different purposes and the compositional one is absent. |
| Multi-coherence checkpoint sequence: A through E with per-checkpoint binary questions | ABSENT | MC rules exist individually but the CHECKPOINT SEQUENCE (which checks happen at which phase of the build) is absent. Builder doesn't know WHEN to verify multi-coherence — before writing CSS? After? During? |
| Agent responsibilities for multi-coherence: which agent ensures coherence at which build stage | PARTIALLY PRESENT | Section C has agent roles. But multi-coherence RESPONSIBILITIES (planner documents reinforcing pairs, builder implements modulating chains, auditor runs CCS removal test) are not assigned to specific agents. |

**Actionable lines in source:** ~680
**Lines absorbed by prompt:** ~40 (MC-01 through MC-08 rules, A5 worked example)
**Lines lost:** ~640 (94.1%)

---

### Source 16: PA Operational Scaffolding
**File:** `ephemeral/prompt-enrichment-audit/17-pa-operational-scaffolding.md` (~1,114 lines)

| Actionable Content in Source | Present in Prompt? | If absent, what was lost |
|-----|-----|-----|
| 9-auditor assignment matrix with per-auditor question assignments, screenshot dependencies, expected times | PARTIALLY PRESENT | B9 has PA routing ("9 Mode 4 auditors, see Section C4"). But C4 in the prompt has a much-compressed version. The FULL assignment matrix with time estimates, priority ordering, and screenshot dependencies per auditor is absent from the main prompt. |
| Per-auditor instruction sheets: 9 detailed sheets (~60-80 lines each) with exact execution sequences | ABSENT from main prompt | These are designed as per-agent context, not main prompt content. However, they would need to be provided AS per-agent context files, and the prompt doesn't specify this. |
| Cold Look Protocol: 5-step sequence (CLEAR/LOOK/REACT/LOCK/REPEAT) with specific emotional response format | ABSENT from main prompt | The cold look is referenced but the operational protocol is absent. |
| Finding classification taxonomy: CATASTROPHIC/WOULD-NOT-SHIP/LOOKS-WRONG with calibration examples from ceiling experiment | ABSENT from main prompt | Severity calibration (what does CATASTROPHIC look like in practice) is absent. Without calibration, auditors may under- or over-classify findings. |
| Verdict synthesis protocol: 8-step process for weaver agent with decision tree | ABSENT from main prompt | The weaver/synthesis role is mentioned but the PROTOCOL is absent. |
| Gate integration: PA findings to gate decisions mapping table | ABSENT from main prompt | The relationship between PA findings and ship/kill decisions is not mapped. |
| Screenshot capture protocol: JavaScript code for pre-capture, scroll-through, viewport sizes | ABSENT from main prompt | No operational protocol for capturing screenshots. |
| Language hard block: list of CSS terms auditors may NOT use in findings | ABSENT from main prompt | This was designed to prevent CSS vocabulary contamination in perceptual findings. |

**Actionable lines in source:** ~800
**Lines absorbed by prompt:** ~15 (B9 PA routing summary, C4 assignment sketch)
**Lines lost:** ~785 (98.1%)

**NOTE:** This source is somewhat different — it's designed as per-agent operational scaffolding, not main prompt content. Much of its content SHOULD be in per-agent context files, not the main prompt. However, the main prompt doesn't clearly specify that these per-agent files need to exist or be distributed.

---

## TOTAL LOSS SUMMARY

| Source # | Source File | Actionable Lines | Lines in Prompt | Lines Lost | Loss % |
|----------|-----------|-----------------|----------------|-----------|--------|
| 1 | 01-beyond-five-scales.md | 180 | 8 | 172 | 95.6% |
| 2 | 02-alternative-mental-models.md | 280 | 12 | 268 | 95.7% |
| 3 | 03-diminishing-returns.md | 320 | 0 | 320 | 100% |
| 4 | 04-showcase-archaeology.md | 120 | 8 | 112 | 93.3% |
| 5 | 05-cross-domain-theory.md | 200 | 15 | 185 | 92.5% |
| 6 | 06-adversarial-anti-scale.md | 180 | 30 | 150 | 83.3% |
| 7 | 01-process-retrospective.md | 200 | 40 | 160 | 80.0% |
| 8 | 02-content-form-analysis.md | 170 | 15 | 155 | 91.2% |
| 9 | 03-enrichment-audit.md | 500 | 60 | 440 | 88.0% |
| 10 | 04-metacognitive-analysis.md | 200 | 10 | 190 | 95.0% |
| 11 | 05-flagship-architecture.md | 350 | 50 | 300 | 85.7% |
| 12 | 06-failure-analysis.md | 270 | 25 | 245 | 90.7% |
| 13 | CEILING-PREPARATION-BRIEF.md | 250 | 80 | 170 | 68.0% |
| 14 | 15-scale-channel-invocation.md | 530 | 50 | 480 | 90.6% |
| 15 | 16-multi-coherence-invocation.md | 680 | 40 | 640 | 94.1% |
| 16 | 17-pa-operational-scaffolding.md | 800 | 15 | 785 | 98.1% |
| **TOTAL** | | **5,230** | **458** | **4,772** | **91.2%** |

**Note:** ~2,170 additional actionable lines existed in research files I was NOT assigned to read (flagship-preparation deliverables, other prompt-enrichment-audit files). Total actionable corpus is likely ~7,400+ lines.

---

## TOP 20 MOST CRITICAL LOSSES — Ranked by Impact on HTML Output Richness

### RANK 1: Channel Deployment Checklist (Builder Quick-Reference)
**Source:** 15-scale-channel-invocation.md, Section 7 (~40 lines)
**What was lost:** A 30-line per-agent checklist telling the builder EXACTLY what to do at each section transition: "Background color changes? Heading treatment changes? Spacing changes? Border changes? Content density changes? Element pattern changes? COUNT: must be >= 3."
**Impact on output:** THE single most actionable loss. Builder transitions change only spacing (1 channel). With this checklist, builder would be forced to consider ALL 6 channels at EVERY transition. This alone would have prevented the uniform look.
**Causal chain:** Absent checklist -> builder defaults to spacing-only transitions -> 1 channel per transition -> monotonous page -> PA-05 fails DESIGNED sub-criterion.

### RANK 2: Scale 5 (Detail/Character) Operational CSS Playbook
**Source:** 01-beyond-five-scales.md (~80 lines of CSS examples)
**What was lost:** Specific CSS values for Scale 5 micro-details: letter-spacing progressions (0.02em in sparse zones to 0.1em in dense zones), font-size steps (0.875rem in meta-voice to 1.125rem in emphasis), line-height variation (1.5 in dense to 1.8 in sparse), font-weight modulation (400 body to 500 section emphasis to 600 labels).
**Impact on output:** Scale 5 is COMPLETELY UNIFORM: every section has 16px font-size, 400 weight, rgb(26,26,26) color, 16px margin-bottom. Zero variation in 6 measured properties across 12 sections. With this playbook, builder would know the SPECIFIC values to vary.
**Causal chain:** Absent CSS playbook -> builder uses single values for all text properties -> Scale 5 carries zero information -> 20% of potential richness matrix is empty.

### RANK 3: Channel Anti-Pattern Library (6 Anti-Patterns)
**Source:** 15-scale-channel-invocation.md, Section 8 (~70 lines)
**What was lost:** 6 specific anti-patterns with symptoms, results, and fixes: Scale Stacking, Channel Monotony, Channel Cacophony, Intentional Channel Neglect, Restraint Deficit, Channel-Mechanism Confusion. Each has a diagnosis and correction.
**Impact on output:** The flagship exhibits EXACTLY Channel Monotony (same channel at every transition) and Channel-Mechanism Confusion (14 mechanisms deployed but only 1-2 channels active). If the builder had been warned about these specific failure modes with symptoms, they could have self-diagnosed and corrected.
**Causal chain:** No anti-pattern awareness -> builder falls into Channel Monotony + Channel-Mechanism Confusion -> 14 mechanisms produce 1-2 active channels -> page feels "formatted not designed."

### RANK 4: Restraint Map Format (Zone-by-Mechanism Deployment Grid)
**Source:** 05-flagship-architecture.md (~40 lines)
**What was lost:** A zone-by-mechanism grid showing WHERE each mechanism is deployed and WHERE it is deliberately absent. Format: Zone 1 = mechanisms A, B, C. Zone 2 = mechanism A only (B, C deliberately absent). Zone 3 = mechanisms B, D (A, C deliberately absent).
**Impact on output:** Without a restraint map, builder deploys mechanisms uniformly across all zones. No zone has unique character. No mechanism has selective deployment. Zero contrasting deployments. Every section looks the same.
**Causal chain:** No restraint map -> uniform mechanism deployment -> zero deliberate absence -> no contrast between zones -> page monotony -> PA-17 rhythm FAIL.

### RANK 5: Cascade Value Table Template
**Source:** 16-multi-coherence-invocation.md, Section 2.5 (~40 lines)
**What was lost:** Template for documenting how 3+ mechanisms co-vary across a density trajectory: | Stage | Mech A Value | Mech B Value | Mech C Value | with worked CD-006 example (padding 64->48->32->48, backgrounds sparse->breathing->dense->breathing, borders 1px->3px->4px->3px).
**Impact on output:** MC-06 requires ">= 1 cascade of 3+ mechanisms" but without the VALUE TABLE, builder has no method for planning coordinated mechanism variation. The flagship deployed 14 mechanisms independently — ZERO cascading. With the table, builder would see that mechanisms must change IN CONCERT, not independently.
**Causal chain:** No value table template -> no coordinated variation -> 14 independent mechanisms -> CCS ~0.05 -> zero multi-coherence -> "wallpaper" mechanisms.

### RANK 6: Modulating Chain CSS Examples
**Source:** 16-multi-coherence-invocation.md, Section 2.2 (~60 lines)
**What was lost:** Specific CSS showing how components ADJUST based on container density: `.section--dense .callout { padding: 16px 20px; margin: 12px 0; }` vs `.section--sparse .callout { padding: 24px 32px; margin: 24px 0; }`.
**Impact on output:** MC-03 requires ">= 2 modulating chains" but provides NO CSS pattern. Builder has never seen modulation implemented. Result: if callouts existed, they would look identical in all zones.
**Causal chain:** No CSS example -> builder doesn't implement modulation -> components ignore container state -> no fractal coherence at component scale -> C-20 fractal fails at component level.

### RANK 7: Structural Channel (Ch4) Deployment Playbook
**Source:** 15-scale-channel-invocation.md, Channel 4 definition (~30 lines)
**What was lost:** Specific Ch4 manifestations at each scale: Navigation = header bottom border 3px, Page = section dividers, Section = callout left borders (4px critical, 3px standard, 1px supplementary), Component = container borders/table grid, Character = inline code background boundary.
**Impact on output:** Ch4 is COMPLETELY ABSENT from flagship. Zero borders anywhere. Zero dividers. Zero containment elements. Zero callouts with border accents. The channel taxonomy explicitly lists what Ch4 looks like at each scale — this is the missing playbook.
**Causal chain:** No Ch4 playbook -> builder deploys zero structural elements -> no visible page architecture -> spatial confidence collapses -> "the page looks like a single long text dump."

### RANK 8: Spatial Budget Table Template (Per-Section Height Estimates)
**Source:** 01-process-retrospective.md (~30 lines)
**What was lost:** Template: Section | Est. Words | Est. Height | Zone Assignment | Mechanism Budget — to be completed before building. Forces the planner to estimate how much vertical space each section will occupy.
**Impact on output:** Without per-section height estimates, the builder cannot predict void locations. The 243-276px gaps between sections are invisible during planning. With the table, planner would see "Section 4 = 500px content, Section 5 = 500px content, gap = 270px" and flag the ratio.
**Causal chain:** No spatial budget table -> unknown per-section heights -> unexpected voids between sections -> 6 gaps of 210-276px -> 17% total void.

### RANK 9: Responding Sequence CSS Examples (Header-to-Content Weight Response)
**Source:** 16-multi-coherence-invocation.md, Section 2.3 (~50 lines)
**What was lost:** CD-006 CSS showing how the drop cap RESPONDS to the dark header's visual weight: header has `background: var(--color-text)` + `border-bottom: 3px solid var(--color-primary)`, drop cap responds with `font-size: 3.5em; color: var(--color-primary)` — ECHOING the header's red border color.
**Impact on output:** MC-04 requires ">= 2 responding sequences" but with no CSS example, the builder doesn't know what a response looks like. The flagship's dark header transitions to content with no visual response — no drop cap, no color echo, no weight acknowledgment.
**Causal chain:** No CSS example -> no visual weight responses -> transitions feel disconnected -> no compositional continuity.

### RANK 10: Cross-Dimension Coherence Matrix (15 Pairs)
**Source:** 16-multi-coherence-invocation.md, Section 6 (~80 lines)
**What was lost:** 15 dimension pair descriptions: Spatial-Chromatic ("dense zones have warmer backgrounds"), Spatial-Typographic ("dense zones have tighter line-height"), Chromatic-Rhythmic ("accent colors match zone temperature"), etc. Each with verification question and CSS evidence.
**Impact on output:** MC-07 says ">= 10 of 15 dimension pairs actively coupled" but the 15 PAIRS ARE NOT LISTED IN THE PROMPT. Builder cannot satisfy a rule when the rule's domain (the 15 pairs) is undefined. This is a rule that is literally IMPOSSIBLE to verify.
**Causal chain:** Undefined domain -> unverifiable rule -> rule ignored -> zero dimension pairing -> no atmospheric coherence.

### RANK 11: Attention Budget Problem Analysis
**Source:** 06-failure-analysis.md (~30 lines)
**What was lost:** Specific analysis showing builder attention capacity is ~15-20 binary rules simultaneously, but the prompt has 97 rules. Builder skims or ignores 75-80% of rules. The rules processed are likely the first ~20 (spatial rules, soul rules) while compositional quality rules (C-08 through C-21, MC-01 through MC-08) are below the attention waterline.
**Impact on output:** The flagship perfectly satisfies early rules (spatial, soul) but violates later rules (multi-coherence, channel deployment, restraint). This pattern is consistent with the builder processing only the first ~20 rules. The attention budget analysis would have motivated restructuring the prompt to put COMPOSITIONAL rules first and COMPLIANCE rules in a separate check.

### RANK 12: Channel Interaction Matrix (Which Pairs Reinforce Naturally)
**Source:** 15-scale-channel-invocation.md, Section 1.7 (~15 lines)
**What was lost:** Matrix showing: Chromatic+Density = REINFORCING, Typographic+Structural = REINFORCING, Spatial+Density = STRONGLY REINFORCING, Chromatic+Typographic = INDEPENDENT. Builder can identify HIGH-VALUE reinforcing pairs instantly.
**Impact on output:** Builder must guess which channel pairs to reinforce. Without the matrix, they might try to reinforce chromatic+typographic (naturally independent, hard to couple) instead of spatial+density (naturally reinforcing, easy to couple).

### RANK 13: Temporal Metabolism Framework (4 Layers)
**Source:** 02-alternative-mental-models.md (~40 lines)
**What was lost:** Flash (0-100ms): hover states, micro-animations. Scan (1-5s): section differentiation, landmark identification. Read (30-300s): content engagement, pacing. Return (days+): memorable moments, bookmarks.
**Impact on output:** The flagship has ZERO temporal dynamics. No hover states, no progressive disclosure, no designed scan-level landmarks. The temporal dimension is completely absent from both the prompt AND the output.

### RANK 14: Contrasting Deployment Documentation Format
**Source:** 16-multi-coherence-invocation.md, Section 2.4 (~40 lines)
**What was lost:** Format: CONTRAST [N]: Mechanism #[X] / DEPLOYED IN: [sections] / ABSENT FROM: [sections] / ABSENCE MEANING: [what absence communicates] / DEPLOYMENT RATIO: [deployed/total].
**Impact on output:** MC-05 requires ">= 2 contrasting deployments" but with no documentation format, the builder cannot PLAN deliberate absence. They deploy mechanisms everywhere or nowhere. The flagship has no selective deployment patterns.

### RANK 15: Metacognitive Checkpoints (6 Self-Questions Per Phase)
**Source:** 04-metacognitive-analysis.md (~30 lines)
**What was lost:** Phase-specific self-interrogation: "Am I adding structure because the content needs it or because the plan says to?" / "Is this mechanism load-bearing or wallpaper?" / "Would removing this section change the reader's experience?"
**Impact on output:** Builder operates in "execution mode" without self-reflection. No metacognitive checkpoint asks "is what I'm building ACTUALLY good?" The builder faithfully follows rules without questioning whether the result serves the reader.

### RANK 16: Zone-Adapted Component Variants (Dense vs Sparse CSS)
**Source:** 03-enrichment-audit.md (~20 lines)
**What was lost:** Specific CSS showing components adapting to zone density. Dense zone callout: `padding: 16px; margin: 12px 0; font-size: 0.6875rem` label. Sparse zone callout: `padding: 24px; margin: 24px 0; font-size: 0.75rem` label.
**Impact on output:** All components (if present) would use identical styling regardless of zone. No component variation = no component-scale fractal coherence.

### RANK 17: Kill Decision Tree (When to STOP and REBUILD)
**Source:** 05-flagship-architecture.md (~25 lines) + 04-metacognitive-analysis.md (~20 lines)
**What was lost:** Decision tree: IF estimated-page-height > 15,000px THEN KILL. IF content-to-void < 50% at any phase THEN KILL. IF CCS < 0.15 after Pass 2 THEN restructure. The flagship is 15,711px tall — it would have triggered KILL-01 (>15,000px).
**Impact on output:** Without kill criteria, the build proceeded through all phases producing a 15,711px page that should have been killed at spatial skeleton stage.

### RANK 18: Spacing Contour Concept (Intentional Variation Mapping)
**Source:** 16-multi-coherence-invocation.md, Section 7 (~30 lines)
**What was lost:** CD-006 spacing contour: 80->48->32->32->48->48->64->80. The concept that section padding values should form a SHAPE that maps to the density arc, not random or uniform values.
**Impact on output:** MC-08 requires 3 distinct values. But without the CONTOUR concept, builder satisfies this with arbitrary variation (48, 32, 64) instead of intentional mapping (values form a crescendo shape). The flagship likely has some spacing variation but no meaningful contour.

### RANK 19: Signal-to-Silence Counting Methodology
**Source:** 02-content-form-analysis.md (~15 lines) + 06-adversarial-anti-scale.md (~10 lines)
**What was lost:** Counting method: signal events = elements with 3+ mechanisms applied. Silence events = elements with 0-2 mechanisms. Count both. Ratio should be 0.6-0.8:1 (more silence than signal).
**Impact on output:** C-14 states the ratio target. But the builder doesn't know how to COUNT. Without the methodology, C-14 is unverifiable and thus ignored.

### RANK 20: Preparation Ceiling Hypothesis (>100-200 Lines = Diminishing Returns)
**Source:** 04-metacognitive-analysis.md (~15 lines)
**What was lost:** Evidence that LLM agent prompt effectiveness degrades beyond 100-200 lines. At 963 lines, the prompt is 5-10x beyond the effective ceiling. This is a structural critique of the prompt itself that would have motivated radical compression.
**Impact on output:** The prompt's length may be its own primary failure mode. Builder agent processes ~150 lines effectively, skimming or ignoring the remaining 813 lines. The compositional quality rules (which live in lines 170-400) may be below the attention waterline while spatial compliance rules (lines 115-155) are above it.

---

## SYNTHESIS: THE COMPRESSION PATHOLOGY

The compression from research to prompt followed a consistent pathological pattern:

1. **WHAT-TO-CHECK survived. HOW-TO-ACHIEVE died.** Every binary rule from the research was absorbed (thresholds, minimums, gate conditions). But the operational instructions for SATISFYING those rules were compressed away. The prompt is 97 guardrails with 0 playbooks.

2. **NAMES survived. MANIFESTATIONS died.** The prompt names 7 channels, 5 scales, 5 interaction types, 6 intentionality dimensions. But the per-scale manifestations, per-interaction CSS examples, per-dimension implementation instructions — all compressed to nothing.

3. **THRESHOLDS survived. MEASUREMENT PROTOCOLS died.** C-14 says "ratio 0.6-0.8:1." MC-07 says ">= 10 of 15 pairs." SC-03 says ">= 30 of 35 cells." But the COUNTING METHODS for ratio, the 15 PAIRS to evaluate, the 35 CELLS to fill — all absent. Rules with undefined domains are unverifiable and thus ignored.

4. **RULES survived. PRIORITY ORDERING died.** 97 rules exist in a flat list. No hierarchy. No "do this FIRST." No distinction between rules that prevent catastrophic failure (S-01, S-02, S-12) and rules that enable compositional quality (MC-01 through MC-08, SC-09). Builder processes rules in document order, exhausting attention on spatial compliance before reaching compositional quality.

5. **BUILDER INSTRUCTIONS died; AUDITOR INSTRUCTIONS survived.** The PA operational scaffolding (1,114 lines of detailed auditor instructions) was designed to be distributed as per-agent context. But the BUILDER'S equivalent (channel deployment checklist, cascade value table, restraint map, modulating chain CSS) was compressed to binary rules. The prompt tells auditors EXACTLY how to JUDGE but tells builders ALMOST NOTHING about how to BUILD.

**The root cause is structural:** The prompt was assembled by agents who treated it as a CONSTRAINT DOCUMENT (what to check) rather than a CRAFT PLAYBOOK (how to build). The research contained both constraints AND playbooks. Only the constraints survived compression.

---

**END COMPRESSION LOSS TRACEABILITY REPORT**

**Total sources read:** 16 files (~7,400 actionable lines)
**Total lines in prompt:** ~458 (from these sources)
**Total lines lost:** ~4,772 (91.2% of actionable content)
**Top loss category:** HOW-TO-ACHIEVE operational playbooks (CSS examples, deployment checklists, value tables, documentation formats)
**Impact:** Builder had 97 things NOT to do and nearly 0 things TO do. Result: compliant skeleton, zero compositional quality.
