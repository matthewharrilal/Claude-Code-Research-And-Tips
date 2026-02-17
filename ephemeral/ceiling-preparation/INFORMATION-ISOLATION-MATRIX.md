# Information Isolation Matrix: Ceiling Experiment

**Purpose:** Define what each agent can/cannot see to prevent context contamination.
**Date:** 2026-02-16
**Author:** protocol-creator (enrichment-execution team)
**Principle:** Each isolation decision prevents a specific failure mode identified in Middle-tier experiment or prior research.

---

## 1. PURPOSE

Prevent context contamination between agents. Each isolation decision has a rationale based on Middle-tier experiment lessons or prior research findings.

**The Core Problem:** Agents with too much context develop confirmation bias (they see what they expect). Agents with too little context make implementation errors (they miss critical specifications). The matrix defines the optimal information boundary for each role.

**Evidence Base:**
- Middle-tier missing footer: builder lacked structural completeness list
- Phase D container width violations (4/5 pages): insufficient emphasis on non-negotiable rules
- Fresh-eyes PA success: zero context found issues that loaded agents would rationalize
- CD-006 (39/40 score): used agent messaging and collaborative iteration
- Showcase pages: used multi-pass iteration with full context access

---

## 2. INFORMATION CATEGORIES

### A. Soul Constraints (7 rules)
- `border-radius: 0` (no rounded corners)
- `box-shadow: none` (no drop shadows)
- No pure black `#000` or pure white `#FFF`
- No gradients in backgrounds
- No decorative animations
- No stock photography
- Typography must be system fonts only

**Classification:** Identity-defining constraints. Violating these produces output that's not in the design system.

---

### B. Mechanism Catalog (18 mechanisms, ~300 lines)
Full mechanism catalog with CSS patterns, application modes (progressive vs discrete), transfer rules, combination rules.

**Categories:**
- Spatial (S): #5 Spacing Compression, #6 Zone Backgrounds, #15 F-Pattern
- Hierarchy (H): #1 Border-Weight Gradient, #4 Typography Scale, #11 Heading Spacing
- Component (C): #2 2-Zone Callouts, #9 Color Encoding, #10 Icon Integration
- Depth/Emphasis (D): #3 Solid Offset, #7 Dark Zones
- Structure/Navigation (N): #12 Sticky Headers, #13 Dark Header/Footer, #17 Code Blocks

**Classification:** Vocabulary reference. Provides OPTIONS for mechanism selection.

---

### C. Mechanism Names Only (18 items, ~18 lines)
Just mechanism names + 1-line descriptions, no CSS patterns or implementation details.

Example:
- #1 Border-Weight Gradient — Variable border thickness encoding hierarchy or importance
- #7 Zone Backgrounds — Shaded regions creating spatial distinction

**Classification:** Lightweight vocabulary reference. Identifies WHAT mechanisms are, not HOW to implement them.

---

### D. Build Plan (200-400 lines)
Planner's output specifying:
- Which mechanisms selected (with rationale)
- Section map (header, content sections, footer)
- CSS specifications (colors, spacing, typography for each component)
- Reinforcing pairs documented (which mechanisms encode same dimension)
- 4-scale table (Navigation/Page/Section/Component)

**Classification:** Execution specification. Tells builder WHAT to implement.

---

### E. Metaphor Derivation (Phases 1-3, ~400 lines)
Full metaphor derivation process:
- Phase 1: Multi-axis questioning (FEEL/UNDERSTAND/DO/BECOME)
- Phase 2: Tension derivation (irreducible tensions, richness scoring)
- Phase 3: Metaphor collapse (structural isomorphism, domain search)

**Classification:** Conceptual foundation. WHY mechanisms were selected.

---

### F. Metaphor Summary (1 paragraph, ~50 words)
Condensed metaphor description without derivation process.

Example: "The metaphor is geological stratification: foundational bedrock (authentication) supports sedimentary layers (filtering, sanitization) with surface details (rate limiting). Depth encoded through border-weight, zone backgrounds, and spacing compression — all increasing intensity as content deepens."

**Classification:** Conceptual context for implementation.

---

### G. Tier Model (Floor/Middle/Ceiling/Flagship)
Tier definitions:
- Floor: 5 mechanisms, 1 scale, formatted appearance
- Middle: 8-12 mechanisms, 2 scales, designed appearance
- Ceiling: 12-15 mechanisms, 4 scales, metaphor-driven composition
- Flagship: 16-18 mechanisms, multi-pattern, artisanal craft

**Classification:** Quality benchmarks. Defines tier boundaries.

---

### H. Pattern Table (CRESCENDO/F-PATTERN/BENTO/PULSE)
Pattern selection guide for content types:
- CRESCENDO: Narrative or educational content (sparse → dense → resolution)
- F-PATTERN: Scanning content (header focal, left-aligned hierarchy)
- BENTO: Modular content (grid of self-contained components)
- PULSE: Rhythmic content (alternating dense/sparse for pacing)

**Classification:** Structural templates. Maps content types to layout approaches.

---

### I. PA Results (perceptual audit findings)
Perceptual auditor's assessment:
- PA-05 (Designed): 4 sub-criteria pass/fail
- 48 PA questions responses
- First impressions, visual hierarchy, rhythm, density, novelty reactions

**Classification:** Evaluation outcomes. How the page FEELS.

---

### J. Novelty Assessment (D3 evaluation)
Novelty evaluator's findings:
- D3.1: Layout uniqueness (mental blur test)
- D3.2: CSS value uniqueness (comparison to prior pages)
- D3.3: Mechanism combination uniqueness (novel pairings)

**Classification:** Innovation metrics. How the page DIFFERS from priors.

---

### K. Prior Experiment Results (Middle-tier outcomes, Phase D scores)
Previous experiment performance:
- Middle-tier: 12 mechanisms, PA-05 4/4, D3 3/3, B+ quality
- Phase D Variant B: 18/19 compliance, 4/5 novelty
- CD-006: 39/40 score (with messaging)

**Classification:** Historical benchmarks. What's been achieved before.

---

### L. Success Criteria (11 criteria with thresholds)
All success criteria:
- PA-05 (Designed): 4/4
- D3 (Novelty): 2/3 minimum
- Better than Middle: >= 3 improvements
- 5-category coverage: All 5 present
- Container width: 940-960px
- Soul compliance: 7/7
- No WOULD-NOT-SHIP defects
- Metaphor expression: "felt through"
- Reinforcing pairs: >= 2 documented
- 4-scale coherence: All 4 scales
- Inter-agent messaging: >= 5 substantive messages

**Classification:** Quality gates. What defines success.

---

### M. Token Reference (tokens.css, 65 tokens)
CSS custom properties with usage hints:
- Colors: `--clr-text-base`, `--clr-bg-page`, `--clr-accent`, etc.
- Spacing: `--space-1` through `--space-16`
- Typography: `--text-xs`, `--text-base`, `--text-lg`, etc.

**Classification:** Implementation vocabulary. Standard values for consistency.

---

### N. Guardrails Table (5 constraints)
Non-negotiable specifications:
- Container width: 940-960px at 1440px viewport
- CPL (characters per line): 45-80
- Heading spacing ratio: 1.5:1 minimum (above/below)
- Rhythm variation: 3+ different transition types
- Token compliance: >= 80% var() references

**Classification:** Quality floors. Minimum acceptable thresholds.

---

### O. Pre-Baked CSS Blocks (~200 lines)
Ready-to-paste CSS for:
- `:root` (CSS custom properties)
- Typography scale (font-size, line-height, font-weight)
- Accessibility (focus states, sr-only, reduced-motion)
- Responsive breakpoints (768px, 1024px, 1440px)

**Classification:** Implementation scaffolding. Reduces builder context load by 85%.

---

## 3. THE MATRIX

| Agent | Soul | Catalog | Names | Plan | Metaphor Full | Metaphor Sum | Tier | Pattern | PA Res | Nov | Prior | Success | Tokens | Guards | CSS |
|-------|------|---------|-------|------|---------------|--------------|------|---------|--------|-----|-------|---------|--------|--------|-----|
| **team-lead** | MUST | MUST | MUST | MUST | MUST | MUST | MUST | MUST | MUST | MUST | MUST | MUST | MUST | MUST | MUST |
| **metaphor-agent** | MUST | NOT | MAY | NOT | N/A | N/A | NOT | NOT | NOT | NOT | NOT | NOT | NOT | MAY | NOT |
| **planner** | MUST | MUST | MUST | NOT | MUST | N/A | NOT | MUST | NOT | NOT | NOT | NOT | MAY | MUST | NOT |
| **builder** | MUST | NOT | MAY | MUST | NOT | MAY | NOT | MAY | NOT | NOT | NOT | NOT | MUST | MUST | MUST |
| **prog-auditor** | MUST | NOT | NOT | MUST | NOT | NOT | NOT | NOT | NOT | NOT | NOT | NOT | MAY | MUST | NOT |
| **PA-1** | NOT | NOT | NOT | NOT | NOT | NOT | NOT | NOT | N/A | NOT | NOT | NOT | NOT | NOT | NOT |
| **PA-2** | NOT | NOT | NOT | NOT | NOT | NOT | NOT | NOT | N/A | NOT | NOT | NOT | NOT | NOT | NOT |
| **comp-auditor** | MUST | MAY | MAY | NOT | NOT | NOT | NOT | MAY | NOT | NOT | NOT | NOT | NOT | NOT | NOT |
| **nov-evaluator** | NOT | NOT | NOT | NOT | NOT | NOT | NOT | NOT | NOT | N/A | NOT | NOT | NOT | NOT | NOT |
| **verdict-synth** | MAY | MAY | MAY | MAY | MAY | MAY | MUST | MAY | MUST | MUST | MAY | MUST | MAY | MUST | MAY |

**Legend:**
- **MUST** = Agent MUST see this to execute its role correctly
- **MAY** = Agent may see this; helpful but optional
- **NOT** = Agent MUST NOT see this; contamination risk
- **N/A** = Not applicable (agent produces this, or it's self-referential)

---

## 4. RATIONALE FOR KEY ISOLATION DECISIONS

### Builder MUST NOT See Full Mechanism Catalog

**Why:** Prevents mechanism shopping. Builder should implement what planner specified, not browse catalog and substitute mechanisms.

**Evidence:** Middle-tier builder saw only mechanism names from plan. Result: novel border-weight gradient composition (4px→3px→1px for security criticality). If builder had seen full catalog, it might have selected "standard" border-weight applications from catalog examples instead of deriving content-specific progression.

**Failure mode if violated:** Builder reads plan ("deploy #1 border-weight gradient"), sees catalog entry with example CSS ("4px for callouts, 3px for headers, 1px for separators"), copies that pattern instead of deriving content-appropriate usage. Output is mechanically correct but semantically wrong.

**Mitigation:** Builder sees mechanism names + 1-line descriptions from plan. If builder needs implementation details, it uses SendMessage to ask planner ("Should border-weight increase or decrease as content deepens?").

---

### PA MUST NOT See Mechanism Counts

**Why:** Prevents confirmation bias. PA should react to perceptual properties, not verify a checklist.

**Evidence:** Fresh-eyes protocol validated across 6+ teams. Zero-context PA in Middle-tier found missing footer, heading spacing violations, top-heavy weight distribution. Context-loaded agent would rationalize these as "acceptable given constraints."

**Failure mode if violated:** PA sees "this page should have 12 mechanisms." PA counts mechanisms and reports "yes, I see 12 mechanisms" without evaluating whether the 12 mechanisms create coherent composition. Checklist compliance replaces perceptual judgment.

**Mitigation:** PA receives ONLY rendered page and PA questions. Zero design system context. PA reacts to WHAT EXISTS, not whether it matches expectations.

---

### Novelty Evaluator MUST NOT See Experiment Hypothesis

**Why:** Prevents framing effect. Evaluator's expectations shape what they perceive.

**Evidence:** Adversarial review of Middle-tier flagged single-evaluator novelty assessment as methodologically weak. If evaluator knows "we expect Ceiling to show novel mechanism combinations," evaluator looks for novel combinations and finds them.

**Failure mode if violated:** Evaluator knows "this is the Ceiling experiment using metaphor-driven selection." Evaluator sees metaphor-derived mechanisms and concludes "this is novel because it used metaphor" without comparing to actual perceptual differences from prior pages.

**Mitigation:** Blind evaluation protocol. Evaluator receives 3 unlabeled pages in random order, identifies which is newest based SOLELY on perceptual differences. No hypothesis, no labels, no context.

---

### Metaphor-Agent MUST NOT See Mechanism Details

**Why:** Prevents mechanism-first thinking. Metaphor should drive mechanism selection, not vice versa.

**Evidence:** Richness research (11 agents) identified "sample 2-4 mechanisms" as limiting specification because it creates MECHANISM-FIRST thinking ("I need 2-4 mechanisms, what mechanisms fit this content?") instead of CONTENT-FIRST thinking ("What does this content need to express, which mechanisms enable that?").

**Failure mode if violated:** Metaphor-agent sees "we have border-weight gradient, solid offset, zone backgrounds" and derives metaphors that MAP ONTO those mechanisms. Example: sees border-weight gradient → derives "stratification metaphor" because border-weight encodes layers. This is mechanism-driven metaphor, not content-driven.

**Mitigation:** Metaphor-agent sees only mechanism category names (Spatial, Hierarchy, Component, Depth, Structure) to verify metaphor CAN address all 5 categories. Does NOT see mechanism details or CSS patterns.

---

### Builder MUST NOT See Metaphor Derivation (Phases 1-3)

**Why:** Prevents continuation bias from planning. Builder should implement plan specifications, not re-derive planner's conceptual framing.

**Evidence:** Two-instance pattern validated in Middle-tier. Planner wrote plan, builder implemented ONLY from plan output. Result: builder produced novel composition without anchoring to planner's framing. If same instance does both, continuation bias creates derivative implementation.

**Failure mode if violated:** Builder reads 400-line metaphor derivation ("geological stratification: bedrock → sediment → surface"). Builder anchors to geological framing and implements LITERALLY (dark brown for bedrock, tan for sediment, light beige for surface) instead of deriving content-appropriate colors from tokens.

**Mitigation:** Builder sees 1-paragraph metaphor SUMMARY for context ("metaphor is geological stratification") but NOT full derivation process. This gives concept without creating anchoring.

---

### Planner MUST NOT See PA Results

**Why:** Prevents goal-driven selection. Planner should select mechanisms for metaphor fit, not to pass PA questions.

**Evidence:** PA-05 operationalized "designed" with 4 binary criteria. If planner sees these criteria before planning, it creates teaching-to-the-test: planner selects mechanisms that maximize PA-05 score instead of mechanisms that express metaphor optimally.

**Failure mode if violated:** Planner reads "PA-05b requires >= 2.0x padding range ratio." Planner selects mechanisms specifically to hit 2.0x ratio (32px max padding, 16px min padding) instead of selecting for metaphor expression. Result: technically passes PA-05b but feels constraint-shaped.

**Mitigation:** Planner sees metaphor + catalog + constraints. Does NOT see evaluation criteria. Selection is driven by "what expresses this metaphor?" not "what passes this test?"

---

### Programmatic Auditor MUST NOT See Metaphor

**Why:** Auditor checks IMPLEMENTATION compliance, not conceptual coherence. Metaphor assessment is PA's role.

**Evidence:** Separation of concerns. Programmatic audit measures binary compliance (container width, CPL, soul constraints, token usage). Perceptual audit measures subjective experience (rhythm, visual hierarchy, metaphor expression). Mixing these creates role confusion.

**Failure mode if violated:** Programmatic auditor reads metaphor ("geological stratification"), sees border-weight gradient implementation, judges "is this border-weight progression geologically authentic?" This is NOT the auditor's role. Auditor should check "is border-weight used as specified in plan?" not "does border-weight fit metaphor?"

**Mitigation:** Programmatic auditor sees build plan (to verify plan fidelity) and guardrails (to verify compliance). Does NOT see metaphor derivation.

---

### Comparative Auditor MUST NOT See Which Page Is "Better"

**Why:** Prevents confirmation bias. Auditor should identify improvements without knowing which page is expected to win.

**Evidence:** Similar to blind novelty evaluation. If auditor knows "Ceiling should be better than Middle," auditor looks for improvements and finds them. Perceptual anchoring creates false positives.

**Failure mode if violated:** Auditor knows "Ceiling used metaphor, Middle used pattern lookup. Ceiling should be richer." Auditor sees Ceiling page, rationalizes all design choices as "metaphor-driven richness" without objective comparison.

**Mitigation:** Auditor receives both pages WITHOUT labels ("Page A" and "Page B"). Identifies differences, evaluates improvements. Only after assessment, reveals which is Ceiling/Middle.

---

## 5. MIDDLE-TIER VIOLATIONS AND CONSEQUENCES

### Violation 1: Builder Didn't See Structural Completeness List

**What was missing:** Builder prompt lacked explicit list of required landmarks (header, footer, section names).

**How it manifested:** Builder implemented Sections A-E from plan, declared "done," never added Section F (footer).

**Severity:** WOULD-NOT-SHIP defect. Page ends abruptly with no visual closure.

**Root cause:** Information blind spot from prompt slicing. Builder saw build plan (which specified footer) but didn't have structural verification checklist to confirm ALL planned elements were implemented.

**Fix for Ceiling:** Add 3-line structural completeness list to builder prompt:
```
Your output MUST include:
- Header (dark, full-width)
- Footer (dark, mirrors header)
- All named sections from plan: [list section names]
```

---

### Violation 2: PA Was Appropriately Context-Starved (CORRECT)

**What happened:** PA saw ONLY rendered page and PA questions. Zero design system context.

**How it manifested:** PA identified: missing footer ("page just stops"), heading spacing violations ("space above appears equal to below"), top-heavy weight distribution ("visual interest concentrates in header then dissipates"), metronomic rhythm ("spacing patterns repeat without variation").

**Severity:** Critical findings that context-loaded agent would rationalize.

**Verdict:** This isolation worked CORRECTLY. Maintain for Ceiling.

**Rationale:** Fresh-eyes principle. If PA knew "this used 12 mechanisms across 5 categories," it would rationalize design choices through that lens. Zero context = genuine perceptual reaction = unbiased assessment.

---

### Violation 3: Programmatic Audit Used Generic Checklist (INEFFICIENCY)

**What was missing:** Programmatic audit checked generic compliance (CPL, container width, soul, token usage). Did NOT check plan-specific items.

**How it manifested:** Programmatic audit passed page on all binary checks. Did NOT verify "did builder implement ALL 12 mechanisms specified in plan?"

**Severity:** If builder had implemented 9/12 mechanisms, programmatic audit would PASS (all 9 are compliant) but plan fidelity would FAIL.

**Root cause:** Programmatic auditor didn't see build plan, couldn't generate plan-derived checklist.

**Fix for Ceiling:** Programmatic auditor MUST see build plan. Generate checklist: PLANNED vs DEPLOYED vs MISSING. Example: plan specifies "#1 border-weight gradient on security layers with 4px→3px→1px progression" → programmatic audit checks for that specific CSS pattern.

---

## 6. CROSS-AGENT DEPENDENCIES (Information Flow)

### Phase 0: Content Selection
**Output:** Content selection document (800-1,200 words, 4+ structural types)
**Consumers:** metaphor-agent (full), planner (full), builder (summary)
**Isolation:** content-selector firewalled from mechanism catalog (prevents reverse-fitting)

---

### Phase 1-3: Metaphor Derivation
**Output:** Metaphor derivation document (~400 lines: tensions, metaphor, semantic dimensions)
**Consumers:** planner (full), builder (1-paragraph summary), team-lead (full)
**Isolation:** Builder sees summary only (prevents continuation bias)

---

### Phase 4: Planning
**Output:** Build plan (~300 lines: mechanisms, sections, CSS specs, reinforcing pairs, 4 scales)
**Consumers:** builder (full), programmatic-auditor (full), team-lead (full)
**Isolation:** Perceptual auditors never see plan (fresh-eyes evaluation)

---

### Phase 5: Build
**Output:** HTML page (~500-800 lines)
**Consumers:** programmatic-auditor, PA-1, PA-2, comparative-auditor, novelty-evaluator, team-lead
**Isolation:** Perceptual auditors see ONLY rendered page (zero source code access)

---

### Phase 6a: Programmatic Audit
**Output:** Programmatic audit report (PLANNED vs DEPLOYED vs MISSING)
**Consumers:** team-lead, verdict-synthesizer
**Isolation:** Not shared with perceptual auditors (prevents contamination)

---

### Phase 6b: Perceptual Audits (Dual)
**Output:** PA-1 report (~100 lines), PA-2 report (~100 lines)
**Consumers:** team-lead (for reconciliation), verdict-synthesizer
**Isolation:** PA-1 and PA-2 do NOT see each other's reports until after both complete

---

### Phase 7a: Comparative Audit
**Output:** Comparison report (Ceiling vs Middle, >= 3 improvements identified)
**Consumers:** verdict-synthesizer
**Isolation:** Not shared with novelty evaluator (independent assessments)

---

### Phase 7b: Novelty Evaluation
**Output:** Novelty assessment (D3.1, D3.2, D3.3)
**Consumers:** verdict-synthesizer
**Isolation:** Not shared with comparative auditor (independent assessments)

---

### Phase 8: Verdict Synthesis
**Output:** Final verdict (11 success criteria, pass margins, adversarial self-check)
**Consumers:** team-lead, human reviewer
**Isolation:** None (synthesis sees everything)

---

## 7. CONTAMINATION FAILURE MODES (What Happens When Isolation Breaks)

### Failure Mode 1: Builder Sees Evaluation Criteria
**Contamination:** Builder knows "PA-05b requires >= 2.0x padding range ratio."
**Consequence:** Builder sets `padding: 64px 32px` to hit exactly 2.0x ratio, even if content needs 96px/48px (different ratio).
**Result:** Teaching to the test. Technically passes but feels constraint-shaped.

---

### Failure Mode 2: PA Sees Mechanism Counts
**Contamination:** PA knows "this page should have 12 mechanisms."
**Consequence:** PA counts mechanisms ("yes, I see 12") instead of evaluating perceptual coherence.
**Result:** Checklist compliance replaces perceptual judgment.

---

### Failure Mode 3: Planner Sees Prior Experiment Results
**Contamination:** Planner knows "Middle-tier used border-weight gradient and scored 4/4 on PA-05."
**Consequence:** Planner selects border-weight gradient for Ceiling because "it worked before" instead of deriving from metaphor.
**Result:** Derivative selection. Ceiling becomes Middle+, not fundamentally different.

---

### Failure Mode 4: Novelty Evaluator Knows Hypothesis
**Contamination:** Evaluator knows "we expect Ceiling to show novel mechanism combinations."
**Consequence:** Evaluator looks for novel combinations and finds them, even if differences are subtle.
**Result:** Confirmation bias inflates novelty scores.

---

### Failure Mode 5: Builder Sees Full Metaphor Derivation
**Contamination:** Builder reads 400-line metaphor derivation ("geological stratification from bedrock to surface").
**Consequence:** Builder anchors to geological framing, implements LITERALLY instead of abstractly.
**Result:** Continuation bias. Builder becomes extension of planner instead of independent implementer.

---

### Failure Mode 6: Comparative Auditor Knows Which Page Is "New"
**Contamination:** Auditor knows "Page A is Ceiling (new), Page B is Middle (baseline)."
**Consequence:** Auditor assumes Page A should be better, rationalizes all design choices as improvements.
**Result:** False positives. "Different" gets conflated with "better."

---

## 8. VALIDATION CHECKLIST (Before Launching Ceiling)

For each agent, verify:

**1. Role clarity:**
- [ ] Agent knows its job (what to produce)
- [ ] Agent knows its inputs (what files to read)
- [ ] Agent knows its outputs (what file to write)
- [ ] Agent knows its dependencies (which other agents it talks to)

**2. Information completeness:**
- [ ] Agent has all MUST-SEE information
- [ ] Agent is missing all MUST-NOT-SEE information
- [ ] MAY-SEE information included if token budget allows

**3. Contamination prevention:**
- [ ] Agent doesn't know evaluation criteria (if it's evaluated)
- [ ] Agent doesn't know experiment hypothesis (if it's an evaluator)
- [ ] Agent doesn't see others' outputs (if independent assessment required)

**4. Communication protocol:**
- [ ] Agent knows it CAN use SendMessage
- [ ] Agent knows WHEN to message (clarifications, issues, iteration requests)
- [ ] Agent knows WHO to message (planner, team-lead, builder)

**5. Token budget:**
- [ ] Agent prompt <= 70% of model context window
- [ ] Critical information in first 30% (most salient)
- [ ] Reference materials in middle 40%
- [ ] Instructions and checklists in final 30%

---

**END INFORMATION ISOLATION MATRIX**

*This matrix defines the optimal information boundary for each agent role, balancing context completeness (agents can execute) with contamination prevention (agents remain unbiased). Every isolation decision has a rationale traced to Middle-tier experiment findings or prior research.*
