# Prompt Slicing Strategy: Ceiling Experiment

**Purpose:** Document how to decompose the master execution prompt into per-agent views for the Ceiling experiment.
**Date:** 2026-02-16
**Author:** protocol-creator (enrichment-execution team)
**Context:** Middle-tier builder saw ~40% of master prompt and missed implementing the footer. Ceiling prompts will be ~60% longer with Phases 1-3 metaphor derivation. Wrong slicing = information contamination OR blind spots.

---

## 1. WHY PROMPT SLICING MATTERS

### The Ceiling Context

- **Middle-tier master prompt:** ~1,000 lines (estimated)
- **Builder view:** ~400 lines (40% of master)
- **What builder missed:** 60% of master prompt, including implementation guidance, anti-patterns, structural completeness lists
- **Ceiling master prompt:** ~1,600 lines (adding Phases 1-3 metaphor derivation = +60% content)
- **Slicing challenge:** If builder still sees 40%, that's 640 lines — but which 640?

### The Consequences of Wrong Slicing

**Information contamination:**
- Novelty evaluator sees experiment hypothesis → confirmation bias
- Perceptual auditor sees mechanism counts → counts mechanisms instead of reacting to experience
- Builder sees full metaphor derivation → anchors to metaphor framing, can't explore independently

**Information blind spots:**
- Builder doesn't see structural completeness list → misses footer (happened in Middle-tier)
- Builder doesn't see container width non-negotiable rule → violates 940-960px ceiling (happened in Phase D, 4/5 pages)
- Programmatic auditor doesn't see build plan → audits generic compliance instead of plan fidelity

### The Core Tension

Agents need ENOUGH context to do their jobs correctly, but NOT SO MUCH that they develop biases or get overwhelmed. The slicing strategy must balance:

1. **Minimum viable context:** What does this agent NEED to execute its role?
2. **Contamination prevention:** What would bias this agent's judgment or anchor its creativity?
3. **Cognitive load:** Can this agent process this much content within token limits?

---

## 2. SLICING PRINCIPLES

### Principle 1: Need-to-Know Basis
Each agent sees ONLY what it needs to do its job. No "just in case" context. If an agent doesn't use a piece of information to make decisions, it shouldn't see it.

### Principle 2: Continuation Bias Prevention
Agents that PLAN should not BUILD. Agents that BUILD should not AUDIT their own work. The two-instance pattern exploits LLM continuation bias: an instance that writes "this will be X" has strong bias toward implementing X. Separation creates fresh perspectives.

**Evidence:** Middle-tier used separate planner and builder. Planner saw full catalog and wrote plan. Builder saw only plan output, produced novel border-weight gradient composition. Had planner also built, it would likely have implemented its own framing literally.

### Principle 3: Fresh-Eyes for Evaluation
Auditors and evaluators must NOT know:
- Mechanism counts or tier targets (prevents "I should see 12 mechanisms" confirmation bias)
- Experiment hypothesis (prevents framing effects)
- Prior experiment results (prevents comparative anchoring)

Fresh-eyes principle: If an agent knows what SHOULD be there, it will see it everywhere. Zero context = genuine first impressions.

**Evidence:** Middle-tier perceptual auditor (zero context) saw "page just stops, no footer." A context-loaded auditor might rationalize "intentional negative space."

### Principle 4: Information Isolation Prevents Cross-Contamination
Some information must be completely isolated between phases:

- **Metaphor-agent** must NOT see mechanism catalog details (prevents mechanism-first thinking; metaphor should drive selection)
- **Builder** must NOT see full metaphor derivation (prevents continuation bias from planning)
- **Novelty evaluator** must NOT know which page is the experiment (prevents confirmation bias)

### Principle 5: Structural Completeness Lists Go to Implementers
The Middle-tier lesson: builder must see "what landmarks to implement" or structural elements get missed. This includes:

- Header: yes/no
- Footer: yes/no
- Sections: list of section names from plan
- Mechanism count: total count ONLY (not which mechanisms — that's in the plan)

---

## 3. CEILING AGENT SLICING TABLE

| Agent | Model | What They MUST See | What They MAY See | What They MUST NOT See | Approximate Lines | % of Master |
|-------|-------|-------------------|-------------------|----------------------|-------------------|-------------|
| **team-lead** | Opus 4.6 | All phases, all gates, communication protocol, success criteria, timing estimates, agent assignments, risk mitigations | Full master prompt | Nothing excluded | ~1,600 | 100% |
| **metaphor-agent** | Opus 4.6 | Content selection output, multi-axis questioning protocol, tension derivation steps, metaphor collapse process, soul constraints, content affinity requirements | Mechanism category names (Spatial, Hierarchy, Component, Depth, Structure) for coverage verification | Build plan, PA results, prior experiments, mechanism catalog full entries, mechanism details, tier targets, evaluation criteria | ~480 | 30% |
| **planner** | Opus 4.6 | Metaphor output, full mechanism catalog (18 entries), pattern table (CRESCENDO/F-PATTERN/BENTO/PULSE), per-category minimums (S:1+, H:1+, C:1+, D:1+, N:1+), reinforcing pairs requirement (2+ documented), 4-scale requirement, soul constraints, guardrails table, container width rule | Case studies (DD-006, CD-006) for reference, tokens.css | PA results, prior experiment scores, evaluation criteria, novelty assessment questions, specific Middle-tier outcome | ~800 | 50% |
| **builder** | Sonnet 4.5 | Build plan (mechanism list, section map, CSS specifications), pre-baked CSS blocks (:root, typography, accessibility, responsive), soul constraints (7 rules), guardrails table (CPL, container width, heading ratios), self-check checklist (8 items), landmark completeness list (header/footer/sections), token reference (tokens.css with usage hints), metaphor SUMMARY (1 paragraph, not full derivation) | Mechanism names + 1-line descriptions from plan, pattern name (F-PATTERN or CRESCENDO), SendMessage fallback to planner for clarifications | Master prompt, full metaphor derivation (Phases 1-3), PA questions, evaluation criteria, mechanism catalog full entries, prior experiment results, tier targets, case study implementation details | ~400 | 25% |
| **programmatic-auditor** | Sonnet 4.5 | Build plan (for generating plan-derived checklist: PLANNED vs DEPLOYED vs MISSING), soul constraints (7 rules), Critical-10 checklist, guardrails table, container width rule (940-960px non-negotiable), CPL formula, heading spacing ratio (1.5:1), rhythm variation check (3+ transitions) | Token reference (for token compliance measurement) | Metaphor derivation, PA questions, evaluation criteria, case studies, tier targets, mechanism catalog, prior results | ~320 | 20% |
| **PA-1** | Sonnet 4.5 | PA questions ONLY (48 questions from perceptual-auditing skill), rendered page (HTML served via HTTP) | Nothing else | Everything else: mechanism counts, build plan, metaphor, tier model, soul constraints, container width rules, prior experiments, evaluation criteria, master prompt, agent roles | ~130 | 8% |
| **PA-2** | Sonnet 4.5 | Same as PA-1 (independent duplicate for dual evaluation) | Nothing else | Same as PA-1 | ~130 | 8% |
| **comparative-auditor** | Sonnet 4.5 | Both pages (Ceiling HTML + Middle HTML), comparison criteria (>= 3 specific perceptual improvements), soul constraints (to verify both pages comply), structural comparison framework (mechanisms, layout, components) | Mechanism catalog (names only, for identifying what changed), pattern names | Metaphor derivation, build plans (neither page), PA results, evaluation hypothesis, which page is "better," tier targets, prior experiments | ~240 | 15% |
| **novelty-evaluator** | Sonnet 4.5 | 3 unlabeled pages in random order (Ceiling, Middle, Phase D Variant B), novelty assessment questions (D3.1, D3.2, D3.3), blind evaluation protocol | Nothing else | Page labels ("this is Ceiling"), experiment hypothesis, prior results, mechanism counts, build plans, metaphor derivation, PA results, which is the "new" page, tier targets, success criteria | ~80 | 5% |
| **verdict-synthesizer** | Sonnet 4.5 | ALL audit outputs (programmatic, PA-1, PA-2, comparison, novelty), success criteria table (all 11 criteria with thresholds), margin reporting requirements, adversarial self-check protocol, defect severity classification | Master prompt summary (phases, goals, tier definition) | Nothing excluded (synthesis role sees everything) | ~640 | 40% |

### Key Notes on the Table

- **Percentages are guidelines, not absolutes.** The "40% for builder" is based on Middle-tier experience. Ceiling builder might need 20-30% depending on how much is delegated to pre-baked CSS blocks.
- **"MUST See" = agent cannot function without this.** Omitting these causes execution failure.
- **"MAY See" = helpful but optional.** Improves quality but isn't blocking.
- **"MUST NOT See" = contamination risk.** Including these biases judgment or creates blind spots.

---

## 4. SLICING ANTI-PATTERNS (From Middle Experiment)

### Anti-Pattern 1: Builder Seeing Full Mechanism Catalog
**What happened:** Builder saw mechanism names from plan but not full catalog entries.
**Why it's wrong:** If builder sees full catalog, it creates information overload (18 mechanisms, 300+ lines of CSS patterns). Builder doesn't know which are selected for THIS page.
**Correct approach:** Builder sees mechanism names + 1-line descriptions from the plan. If builder needs more detail, it uses SendMessage to ask planner.

### Anti-Pattern 2: PA Seeing Mechanism Counts
**What would happen:** PA sees "this page should have 12 mechanisms." PA counts mechanisms and confirms "yes, I see 12 mechanisms."
**Why it's wrong:** Confirmation bias. PA should react to the page's PERCEPTUAL properties, not verify a checklist.
**Correct approach:** PA sees ONLY the rendered page and PA questions. Zero design system context.

### Anti-Pattern 3: Novelty Evaluator Knowing Hypothesis
**What would happen:** Evaluator sees "we expect Ceiling to show novel mechanism combinations." Evaluator looks for novel combinations and finds them.
**Why it's wrong:** Framing effect. Evaluator's expectations shape what they perceive.
**Correct approach:** Blind evaluation. Evaluator receives 3 unlabeled pages, identifies which is newest based solely on perceptual differences.

### Anti-Pattern 4: Single Agent Doing Plan + Build
**What happened in other experiments:** One agent writes "I will deploy border-weight gradient with 4px→3px→1px progression" then implements it.
**Why it's wrong:** Continuation bias. Agent that writes the plan has strong bias toward implementing it literally. No fresh perspective.
**Correct approach:** Two-instance pattern. Planner writes plan, builder reads ONLY plan. Builder has NO continuation bias from planning.

---

## 5. CEILING-SPECIFIC SLICING NOTES

### metaphor-agent (NEW in Ceiling)

**Isolation rationale:** Metaphor-agent is the FIRST creative instance in the pipeline. It must NOT see mechanism catalog details because that prevents metaphor-first thinking. If metaphor-agent knows "we have border-weight gradient, solid offset, zone backgrounds," it will derive metaphors that MAP ONTO those mechanisms instead of deriving metaphors from content TENSIONS.

**What it MUST see:**
- Content selection output (the SYSTEM documentation content)
- Multi-axis questioning protocol (FEEL/UNDERSTAND/DO/BECOME + emergent axes)
- Tension derivation steps (identify irreducible tensions, score richness potential)
- Metaphor collapse process (structural isomorphism search)
- Soul constraints (to ensure metaphor doesn't violate identity)

**What it MAY see:**
- Mechanism category names ONLY (Spatial, Hierarchy, Component, Depth, Structure) — so metaphor-agent can verify metaphor can address all 5 categories

**What it MUST NOT see:**
- Mechanism catalog full entries (prevents mechanism-first thinking)
- Build plan (doesn't exist yet)
- Prior experiment results (prevents anchoring)
- Evaluation criteria (prevents goal-driven metaphor creation)

**Approximate lines:** 480 (~30% of master)

---

### planner (Opus, Phases 1-3 consumer)

**Role:** Receives metaphor output + full mechanism catalog. This is the CRITICAL junction where metaphor-to-mechanism translation happens.

**What it MUST see:**
- Metaphor output from metaphor-agent (full Phases 1-3 results)
- Full mechanism catalog (all 18 mechanisms with CSS patterns)
- Pattern table (CRESCENDO/F-PATTERN/BENTO/PULSE selection guide)
- Per-category minimums (S:1+, H:1+, C:1+, D:1+, N:1+)
- Reinforcing pairs requirement (2+ documented)
- 4-scale requirement (Navigation + Page + Section + Component)
- Soul constraints
- Guardrails table

**What it MAY see:**
- Case studies (DD-006, CD-006) for mechanism deployment patterns
- tokens.css for understanding available design tokens

**What it MUST NOT see:**
- PA results (prevents goal-driven selection to "pass PA questions")
- Prior experiment scores (prevents anchoring to Middle-tier outcomes)
- Evaluation criteria (planner should select for metaphor fit, not for passing novelty tests)

**Approximate lines:** 800 (~50% of master)

**Why planner sees more than builder:** Planner makes SELECTION decisions (which mechanisms, which combinations, which scale applications). This requires seeing OPTIONS (full catalog). Builder makes IMPLEMENTATION decisions (how to write CSS for chosen mechanisms). This requires seeing SPECIFICATIONS (plan output), not options.

---

### builder (Sonnet, implementer)

**Role:** Implements planner's specification in HTML/CSS. Should NOT re-derive mechanism selection logic.

**What it MUST see:**
- Build plan (mechanism list, section map, CSS specifications from planner)
- Pre-baked CSS blocks (ready-to-paste :root, typography, accessibility, responsive)
- Soul constraints (7 rules: border-radius:0, no #000/#FFF, etc.)
- Guardrails table (CPL 45-80, container 940-960px, heading ratios 1.5:1)
- Self-check checklist (8 items builder must verify before file write)
- Landmark completeness list (header, footer, all section names from plan)
- Token reference (tokens.css with usage hints)
- Metaphor SUMMARY (1 paragraph explaining the concept, NOT full derivation)

**What it MAY see:**
- Mechanism names + 1-line descriptions from plan
- Pattern name (F-PATTERN or CRESCENDO — for understanding structural intent)
- SendMessage fallback (can ask planner for clarification)

**What it MUST NOT see:**
- Master prompt (too much context, creates cognitive overload)
- Full metaphor derivation (prevents continuation bias from planning)
- PA questions (builder shouldn't know how it will be evaluated)
- Evaluation criteria (prevents teaching to the test)
- Mechanism catalog full entries (prevents mechanism shopping during build)
- Prior experiment results (prevents anchoring)
- Tier targets (builder shouldn't know "I need 12 mechanisms")

**Approximate lines:** 400 (~25% of master)

**Critical Middle-tier lesson:** Builder didn't see structural completeness list, missed footer. Ceiling builder MUST see: "Your output must include: (1) dark header, (2) 6 content sections [list names], (3) dark footer." This is a 3-line addition that prevents severity-1 defects.

---

### programmatic-auditor (Sonnet, plan-fidelity checker)

**Role:** Verify that builder implemented what planner specified. This is NOT generic compliance (that's a subset) — it's plan-specific verification.

**What it MUST see:**
- Build plan (to generate plan-derived checklist: PLANNED vs DEPLOYED vs MISSING)
- Soul constraints (7 rules)
- Critical-10 checklist (if separate from soul constraints)
- Guardrails table (CPL, container width, heading ratios, rhythm variation)
- Container width rule (940-960px non-negotiable)
- CPL formula (to measure characters-per-line)
- Heading spacing ratio formula (to measure computed margin-top / margin-bottom)
- Rhythm variation check (count unique section gaps, require >= 2 distinct values)

**What it MAY see:**
- Token reference (to measure token compliance: count var() references vs raw values)

**What it MUST NOT see:**
- Metaphor derivation (auditor checks IMPLEMENTATION, not concept)
- PA questions (programmatic checks binary rules, perceptual checks subjective experience)
- Evaluation criteria (prevents goal-driven auditing)
- Case studies (prevents comparative anchoring)
- Tier targets (auditor checks compliance, not tier achievement)
- Mechanism catalog (auditor verifies what's in the plan, not what's in the catalog)
- Prior results (prevents "Middle had this defect, so I'll look extra hard for it" bias)

**Approximate lines:** 320 (~20% of master)

**Key difference from Middle:** Middle programmatic audit used GENERIC checklist. Ceiling programmatic audit GENERATES checklist FROM build plan. Example: if plan specifies "Deploy #1 border-weight gradient on security layers with 4px→3px→1px progression," programmatic audit checks for that specific CSS pattern.

---

### PA-1 and PA-2 (Sonnet, fresh-eyes perceptual auditors)

**Role:** Evaluate page perceptual properties with ZERO design system context. Dual evaluation for inter-rater reliability.

**What they MUST see:**
- PA questions ONLY (48 questions from perceptual-auditing skill)
- Rendered page (HTML served via HTTP, both 1440px and 768px viewports)

**What they MAY see:**
- Nothing else

**What they MUST NOT see:**
- EVERYTHING ELSE: mechanism counts, build plan, metaphor, tier model, soul constraints, container width rules, prior experiments, evaluation criteria, master prompt, agent roles, success thresholds, etc.

**Approximate lines:** 130 each (~8% of master)

**Rationale:** Fresh-eyes principle. If PA knows "this should have 12 mechanisms," it will see 12 mechanisms. If PA knows "this uses geological metaphor," it will rationalize all design choices through that lens. Zero context = genuine first impressions = unbiased perceptual reaction.

**Middle-tier lesson:** Fresh-eyes PA saw "page just stops, no footer" because it had zero expectations. Context-loaded auditor might rationalize missing footer as "intentional negative space."

---

### comparative-auditor (Sonnet, tier comparison)

**Role:** Compare Ceiling vs Middle on SAME content. Identify >= 3 specific perceptual improvements.

**What it MUST see:**
- Both pages (Ceiling HTML + Middle HTML)
- Comparison criteria (what defines "better")
- Soul constraints (to verify both pages comply — comparison only valid if both are compliant)
- Structural comparison framework (layout, mechanisms, components)

**What it MAY see:**
- Mechanism catalog (names only, for identifying WHAT changed between pages)
- Pattern names (to understand structural approaches)

**What it MUST NOT see:**
- Metaphor derivation (evaluates OUTCOME, not PROCESS)
- Build plans (sees implemented pages, not plans)
- PA results (independent evaluation, no cross-contamination)
- Evaluation hypothesis (evaluator shouldn't know "we expect Ceiling to be better")
- Which page is "better" (that's what it determines)
- Tier targets (evaluates observable differences, not tier achievement)
- Prior experiments (compares these two pages, not historical context)

**Approximate lines:** 240 (~15% of master)

---

### novelty-evaluator (Sonnet, blind assessment)

**Role:** Receive 3 unlabeled pages, identify which is newest based solely on perceptual differences. NO context on which is the experiment.

**What it MUST see:**
- 3 unlabeled pages in random order (Ceiling, Middle, Phase D Variant B)
- Novelty assessment questions (D3.1 layout uniqueness, D3.2 CSS uniqueness, D3.3 combination uniqueness)
- Blind evaluation protocol

**What it MAY see:**
- Nothing else

**What it MUST NOT see:**
- Page labels ("this is Ceiling, this is Middle")
- Experiment hypothesis ("we expect Ceiling to be more novel")
- Prior results (prevents anchoring)
- Mechanism counts (prevents "this has more mechanisms so it must be newer")
- Build plans (evaluates OUTCOME)
- Metaphor derivation (evaluates PERCEPTUAL novelty, not conceptual novelty)
- PA results (independent evaluation)
- Which is the "new" page (that's what it determines)
- Tier targets
- Success criteria

**Approximate lines:** 80 (~5% of master)

**Critical for validity:** If evaluator knows hypothesis, it creates framing effect. "We expect X" → evaluator looks for X → evaluator finds X. Blind evaluation breaks this bias loop.

---

### verdict-synthesizer (Sonnet, final synthesis)

**Role:** Integrate all audit/evaluation outputs, report pass margins, include adversarial self-check.

**What it MUST see:**
- ALL audit outputs (programmatic, PA-1, PA-2, comparison, novelty)
- Success criteria table (all 11 criteria with thresholds)
- Margin reporting requirements (report actual values, not just pass/fail)
- Adversarial self-check protocol (3 strongest challenges to verdict, with responses)
- Defect severity classification

**What it MAY see:**
- Master prompt summary (phases, goals, tier definition — for context)

**What it MUST NOT see:**
- Nothing excluded (synthesis role sees everything)

**Approximate lines:** 640 (~40% of master)

**Why synthesizer sees more than anyone else:** Synthesis requires INTEGRATION across all evaluation dimensions. Synthesizer must reconcile PA disagreements, weigh defect severity, assess pass margins, and challenge its own conclusions. This requires full context.

---

## 6. SLICING WORKFLOW (How to Generate Agent Views)

### Step 1: Build Master Execution Prompt (1,600 lines)
This is the single source of truth. Contains:
- All phases (0-8)
- All gates
- All success criteria
- All agent assignments
- Communication protocol
- Timing estimates
- Risk mitigations
- Metaphor derivation steps
- Mechanism selection logic
- Builder self-checks
- Audit protocols
- Evaluation methodology

### Step 2: Extract Agent-Specific Sections
For each agent, create a prompt slice by:

1. **Start with agent role definition** (50 lines: "You are X, your job is Y, you will receive Z, you must output W")
2. **Add MUST-SEE content** from slicing table
3. **Add MAY-SEE content** if token budget allows
4. **Verify MUST-NOT-SEE exclusions** (double-check nothing contaminating leaked in)
5. **Add agent-specific instructions** (self-checks, gates, communication protocol)

### Step 3: Validate Slice Completeness
For each agent, verify:

- **Can it execute?** Does it have all information needed to complete its task?
- **Is it unbiased?** Does it lack information that would contaminate judgment?
- **Is it under token limit?** 70% of model context window is safe ceiling
- **Does it know its dependencies?** Does it know which files to read or which agents to message?

### Step 4: Test Slices (Optional Pre-Flight)
Before launching full experiment:

- Run builder with slice, verify it asks for clarifications (tests SendMessage fallback)
- Run PA with slice, verify it evaluates perceptually not mechanically
- Run novelty evaluator, verify it can identify differences without labels

---

## 7. MIDDLE-TIER VIOLATIONS AND CONSEQUENCES

### Violation 1: Builder Didn't See Structural Completeness List
**What was missing:** Builder prompt lacked "Your output must include: header, footer, Sections A-E."
**Consequence:** Builder implemented Sections A-E, stopped, never added footer.
**Severity:** WOULD-NOT-SHIP defect.
**Fix for Ceiling:** Add 3-line structural completeness list to builder prompt.

### Violation 2: PA Was Appropriately Context-Starved
**What happened:** PA saw ONLY rendered page and PA questions. Zero design system context.
**Consequence:** PA caught "page just stops, no footer" because it had no expectations to rationalize the gap.
**Verdict:** This worked correctly. Maintain for Ceiling.

### Violation 3: Novelty Evaluator Knew Hypothesis (Potential)
**What may have happened:** If novelty evaluator knew "we expect Middle to show novel mechanisms," it creates confirmation bias.
**Consequence:** Couldn't verify in Middle (evaluation details not public). Flagged as risk.
**Fix for Ceiling:** Blind evaluation protocol. Evaluator receives 3 unlabeled pages, no hypothesis.

### Violation 4: Programmatic Audit Used Generic Checklist
**What happened:** Programmatic audit checked generic compliance (CPL, container width, soul). Did NOT check plan-specific items ("did builder implement ALL 12 mechanisms specified in plan?").
**Consequence:** If builder had implemented 9/12 mechanisms, generic audit would PASS (all 9 are compliant), but plan fidelity would FAIL.
**Fix for Ceiling:** Generate programmatic checklist FROM build plan. Check PLANNED vs DEPLOYED vs MISSING.

---

## 8. SLICING DECISION LOG (Rationale for Key Choices)

### Decision 1: Builder Sees Metaphor SUMMARY, Not Full Derivation
**Options considered:**
- A: Builder sees full Phases 1-3 metaphor derivation (480 lines)
- B: Builder sees 1-paragraph metaphor summary
- C: Builder sees zero metaphor context

**Choice:** Option B (summary)

**Rationale:** Builder needs to understand WHAT the metaphor is (to implement metaphor-driven spatial layouts) but not WHY it was derived (to avoid continuation bias from planning). A 1-paragraph summary ("The metaphor is geological stratification: bedrock foundation to surface details") gives builder the concept without the 480-line derivation process.

---

### Decision 2: Planner Sees Full Catalog, Builder Sees Names Only
**Options considered:**
- A: Both see full catalog (800 lines)
- B: Planner sees full catalog, builder sees names + 1-line descriptions
- C: Both see names only

**Choice:** Option B

**Rationale:** Planner SELECTS mechanisms (needs to see options to choose). Builder IMPLEMENTS mechanisms (needs to know what was chosen, not what's available). If builder sees full catalog, it creates: (a) information overload (18 mechanisms, multiple application modes), (b) temptation to "mechanism shop" instead of implementing plan, (c) cognitive load that obscures plan specifications.

Middle-tier evidence: Builder saw only mechanism names from plan. This prevented template copying and enabled novel composition (border-weight gradient for security layers).

---

### Decision 3: Dual PA vs Single PA
**Options considered:**
- A: Single PA (Middle-tier approach)
- B: Dual PA with independent evaluation + reconciliation

**Choice:** Option B for Ceiling

**Rationale:** Adversarial review flagged single-evaluator bias as methodology weakness. Marginal cost (+5-7 minutes) for significant rigor improvement. PA-1 and PA-2 evaluate independently, team-lead reconciles: agreement = high confidence, disagreement = flag for investigation.

---

### Decision 4: Blind Novelty Evaluation
**Options considered:**
- A: Evaluator knows which page is experiment (Middle-tier approach)
- B: Evaluator receives 3 unlabeled pages in random order

**Choice:** Option B

**Rationale:** Confirmation bias prevention. If evaluator knows "this is the new page," they look for novelty and find it. Blind evaluation: evaluator must identify newest page SOLELY from perceptual differences. This is the gold standard for bias elimination.

---

## 9. AGENT COMMUNICATION PROTOCOL (NEW in Ceiling)

Middle-tier used file-only communication (zero SendMessage). This produced fast execution (35 min) but contributed to missing footer and "professionally stiff" quality. Ceiling MUST enable inter-agent messaging while preserving flat topology.

### Required Communication Capabilities

**Builder → Planner:**
- "What does 'Footer Mirror' look like? Is the border-top red or using --clr-accent?"
- "The plan says 'geological depth encoding' — should border-weight increase or decrease as content deepens?"

**Auditor → Team-Lead:**
- "I see a missing section — should I continue or wait for a fix?"
- "CPL is 92 chars (+12 over spec) — is this FAIL or flag for investigation?"

**Team-Lead → Builder:**
- "Footer is missing from the HTML — add it before we proceed to evaluation."
- "Token compliance is 68% (below 80% threshold) — scan for raw values and replace with vars."

**Planner → Builder (Proactive):**
- "The metaphor requires spacing compression in the lower third — prioritize mechanisms #4 and #5 there."
- "Section D should be the densest zone — use 32px padding instead of 48px."

### What NOT to Change

- **Flat topology:** Team-lead launches agents directly, no intermediate captains. Validated for speed and simplicity.
- **Per-file ownership:** 1 agent = 1 output file. Prevents contention.
- **File-based output:** Agents write deliverable files, not just messages. Files are source of truth.

### The Change

From file-only to file + messaging. Agents can ask questions, flag issues, request iteration. But primary output is still files.

---

**END PROMPT SLICING STRATEGY**

*This document provides the framework for decomposing the Ceiling master execution prompt into agent-specific views that balance information completeness, contamination prevention, and cognitive load optimization.*
