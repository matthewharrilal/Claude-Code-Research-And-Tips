# Ceiling Experiment Projection

**Date:** 2026-02-16
**Author:** ceiling-projector (retro-analysis team)
**Source:** Retrospective analysis of Middle-tier experiment → Ceiling design
**Context:** Middle tier SUCCESS — 8 agents, 12 mechanisms, PA-05 4/4, D3 3/3, 35 minutes execution. Known defects: missing footer, CPL +2, token compliance 66.5%. Retrospective identified communication isolation as critical quality gap.

---

## Executive Summary

**Ceiling introduces two qualitatively new challenges:** (1) Metaphor derivation is creative judgment (can't be binary-ruled), and (2) Agent isolation costs quality (no messaging = "professionally stiff" output). The Middle experiment validated design improvements (M1 per-category minimums) in isolation but exposed communication as the missing ingredient.

**Single biggest risk:** Metaphor derivation without iteration produces derivative pattern-matching, not genuine compositional purpose.

**Single biggest opportunity:** Agent messaging + metaphor together can achieve "compositionally felt through" quality that Middle couldn't reach without messaging.

**The Big Question answer:** BOTH are required. Iteration alone (CD-006 with 39/40) proves collaborative refinement matters. Metaphor alone (Middle without messaging) proves compositional intent matters. Ceiling needs both to cross from "designed" to "felt through."

---

## 1. NEW RISKS (Ceiling Introduces, Middle Didn't Face)

### Risk 1.1: Metaphor Derivation Cannot Be Binary-Ruled

**The Middle advantage:** All specifications were binary checkable:
- Container 960px? YES/NO
- Footer exists? YES/NO
- Per-category minimum met? YES/NO
- Border-radius zero? YES/NO

**The Ceiling challenge:** "Does this metaphor authentically arise from content tension?" is JUDGMENT, not measurement. The planner can produce a metaphor that passes all syntactic checks ("geological strata" has correct structure, uses allowed vocabulary, follows derivation protocol) while being conceptually forced or cliché.

**Concrete failure mode:** Content about network protocols → "layered architecture" metaphor → border-weight for network stack layers → THIS IS DERIVATIVE. It's the first-order obvious mapping. CD-006 "pilot documentation as flight preparation" was novel because it crossed domains (aviation → technical writing). "Network layers as geological strata" doesn't cross domains — it's the same layering concept in different visual language.

**Why Middle didn't face this:** Middle used lookup-based pattern selection (reference/tutorial → F-PATTERN). The 4-option table is intentionally constrained. No creative derivation required.

**Mitigation options:**
- Dual-metaphor evaluation (two independent agents derive metaphors, compare for convergence → if both land on "geological layers," it's derivative)
- Cross-domain requirement ("metaphor must come from outside the content domain")
- Transfer test ("explain this metaphor to someone unfamiliar with the content — if they understand the content structure from the metaphor, it's resonant; if not, it's decorative")

**Confidence this is a real risk:** HIGH. Phase D showcases were built with multi-pass iteration that allowed metaphor refinement. Single-pass Ceiling must get metaphor right on first attempt.

---

### Risk 1.2: More Mechanisms = More Interaction Complexity

**The Middle deployment:** 12 mechanisms across 5 categories. Retrospective Finding 1: "Mechanisms correctly applied but not felt through" — vocabulary BREADTH creates "designed," but mechanism INTERACTION creates "compelling."

**The Ceiling requirement:** 12-15 mechanisms + metaphor-driven selection. Mechanisms must REINFORCE each other (multi-channel encoding). Example: border-weight + zone backgrounds + spacing compression ALL encode "depth" simultaneously as you scroll.

**Concrete failure mode:** Planner specifies 14 mechanisms with perfect per-category coverage and metaphor alignment. Builder implements all 14 correctly. But mechanisms don't INTERACT — border-weight says "hierarchy," zone backgrounds say "section breaks," spacing says "rhythm." Each solves a different problem independently (Middle-style deployment) rather than encoding shared semantic dimensions together (Ceiling-style coherence).

**Why Middle didn't face this:** Middle explicitly did NOT require interaction. M1 per-category minimums guarantee breadth, not coherence. The border-weight gradient (4px → 3px → 1px) for security criticality was the ONE interaction example — it wasn't required, just happened to emerge from content-mechanism fit.

**Measurement challenge:** How do you CHECK for interaction? The programmatic auditor can verify 14 mechanisms deployed. The perceptual auditor can verify PA-05 4/4. Neither directly measures "do mechanisms reinforce each other?"

**Mitigation options:**
- Interaction requirement in plan specification ("For 3+ mechanism pairs, document how they encode the SAME semantic dimension")
- Perceptual audit refinement (PA-NEW: "Do visual treatments feel like variations on a theme, or independent decisions?")
- Mechanism dependency graph (builder annotates which mechanisms work together vs independently)

**Confidence this is a real risk:** MEDIUM-HIGH. The retrospective flagged this as the gap between "designed" and "felt through," but it's not yet clear whether interaction REQUIREMENTS produce genuine interaction or just compliance theater.

---

### Risk 1.3: Multi-Channel Encoding Is Harder to Verify

**The Middle baseline:** 2 scales (Page + Component). Fractal coherence meant: overall page has density flow (CRESCENDO/F-PATTERN/etc), and individual components mirror it.

**The Ceiling requirement:** 4 scales (Navigation + Page + Section + Component). The density pattern must appear at:
- Navigation scale (header/TOC structure)
- Page scale (overall scroll rhythm)
- Section scale (how sections internally organize)
- Component scale (callout/table structure)

**Concrete failure mode:** Planner specifies 4-scale fractal coherence. Page-scale and Component-scale are obvious (same as Middle). But Navigation-scale and Section-scale are harder to operationalize. What does "CRESCENDO at Navigation scale" mean? If the header is uniform (logo + nav + title), where does sparse-to-dense appear?

The builder might implement something that TECHNICALLY satisfies "4 scales present" (header has padding, sections have structure) without the scales actually ECHOING the same pattern.

**Why Middle didn't face this:** 2 scales is the minimum for fractal coherence. Page-scale is mandatory (the whole point). Component-scale is straightforward (callouts/tables are concrete). 4 scales introduces abstractions (what IS Navigation-scale?) that require interpretation.

**Verification challenge:** The fractal gate checks "does the pattern appear at 4 scales?" But what if:
- Page-scale uses CRESCENDO (sparse intro → dense middle → sparse ending)
- Section-scale uses BENTO (grid-based uniform blocks)
- These patterns CONTRADICT each other — it's not fractal, it's incoherent

The gate might pass because "4 scales present" but the coherence is broken.

**Mitigation options:**
- Concrete scale operationalization (Navigation: sparse=logo only, dense=logo+breadcrumb+TOC+metadata)
- Pattern consistency check ("verify all 4 scales use variants of the SAME pattern, not different patterns")
- Perceptual audit scale-by-scale ("Zoom to Navigation — does it feel like the same design direction as Page?")

**Confidence this is a real risk:** MEDIUM. The Middle fractal gate passed (2 scales), but 4 scales is qualitatively different. The jump from 2→4 may introduce ambiguities the 0→2 jump didn't have.

---

### Risk 1.4: Four Scales (vs Two) = More Inconsistency Points

**The quantitative difference:** Middle had 2 scales, meaning 1 scale pair to keep consistent (Page ↔ Component). Ceiling has 4 scales, meaning 6 scale pairs to keep consistent:
- Navigation ↔ Page
- Navigation ↔ Section
- Navigation ↔ Component
- Page ↔ Section
- Page ↔ Component
- Section ↔ Component

**The consistency failure modes:**
- Navigation feels "geological compression" (narrow, dense, layered)
- Page feels "breathing space" (wide, sparse, open)
- These are OPPOSITE directions — fractal coherence is broken despite both being "specified"

**Why Middle didn't face this:** With only Page ↔ Component, the consistency constraint is simple: "components should mirror page-level rhythm." Verifiable by squinting at page (Page scale visible) vs zooming to one callout (Component scale visible).

**Measurement challenge:** Checking 6 pairwise consistencies is significantly harder than checking 1. The builder can get Page ↔ Component right (Middle-level skill) while Navigation ↔ Section contradicts it.

**Mitigation options:**
- Hierarchical coherence check (Navigation → Page → Section → Component must be consistent chain, not 6 independent pairs)
- Intermediate verification (after Navigation + Page implemented, check consistency before proceeding to Section + Component)
- Perceptual audit multi-scale ("Cycle through 1440px screenshot → header screenshot → section screenshot → callout screenshot — do they feel like the same design philosophy?")

**Confidence this is a real risk:** MEDIUM-HIGH. The combinatorial explosion from 1 pair to 6 pairs is real, and the fractal gate doesn't currently check pairwise consistency — it checks "pattern present at N scales."

---

### Risk 1.5: Agent Communication Overhead vs Quality Benefit Trade-off

**The Middle isolation:** Zero SendMessage calls. Communication only through files. Execution time: 35 minutes. Known quality costs: missing footer (WOULD-NOT-SHIP), "specifications applied correctly not composition felt through," no iteration on plan ambiguities.

**The Ceiling requirement (from Finding 9):** Agents MUST communicate via SendMessage. Required capabilities:
- Builder → Planner: clarifying questions
- Auditor → Team-Lead: mid-process issue flagging
- Team-Lead → Builder: targeted iteration requests

**The new risk:** Communication introduces latency and complexity:
- Builder sends message → waits for planner response → continues
- Message accumulation (10 questions across 8 agents = 10+ message round-trips)
- Async coordination (builder blocked while planner responds)

**Concrete failure mode:** Ceiling build takes 90 minutes but 40 of those minutes are waiting for message responses. The quality improvement (footer doesn't go missing, plan ambiguities get resolved) is real, but the time cost makes Ceiling impractical for anything except crown jewels.

**Mitigation options:**
- Structured clarification protocol (builder collects ALL questions, sends them in one batch, planner answers batch)
- Pre-emptive guidance (planner anticipates ambiguities, includes clarifications in plan proactively)
- Async communication (builder continues on other sections while waiting for response)
- Hybrid approach (file-bus for primary workflow, messaging only for critical clarifications)

**Confidence this is a real risk:** MEDIUM. CD-006 and Phase C used messaging and achieved 39/40 and 11/11 criteria, but we don't have timing data for how much messaging COST in execution time. The quality benefit is proven; the time trade-off is unknown.

---

### Risk 1.6: Metaphor May Force Pattern-Matching Instead of Genuine Divergence

**The theory (from Clarification 3):** Ceiling uses the same 18 mechanisms as Middle. Difference is HOW you select: Middle maps content → mechanism (lookup), Ceiling maps metaphor → mechanism (derivation).

**The concern:** If the metaphor is "geological strata," the mechanisms become obvious:
- Border-weight gradient = pressure layers (1px surface → 4px core)
- Zone backgrounds = material differentiation (light sandstone → dark basalt)
- Spacing compression = consolidation (#4)

This is DERIVATION in the sense of "following metaphor logic" but it might produce OUTPUT that structurally resembles showcase pages using the same mechanisms. The metaphor provides reasoning but not necessarily novelty.

**Why Middle didn't face this:** Middle had no metaphor. The border-weight gradient (4px → 3px → 1px) for security criticality was NOT derived from a metaphor — it emerged from content-mechanism fit (more critical sections get heavier borders). This made it novel because it wasn't anchoring to metaphor templates.

**Concrete test:** If Ceiling output for SYSTEM content uses 80%+ the same mechanisms as a showcase page about infrastructure documentation (both might use border-weight gradients, both might use zone backgrounds, both might use spacing compression), is Ceiling creating genuine divergence or just applying the same toolkit with different reasoning?

**The counterargument:** The combination and interaction might be novel even if individual mechanisms are familiar. "Border-weight gradient + zone backgrounds" is common, but "border-weight gradient + zone backgrounds + spacing compression all encoding the SAME geological depth dimension simultaneously" might be rare.

**Confidence this is a real risk:** MEDIUM. Untested. The retrospective doesn't resolve whether metaphor creates compositional divergence or just rationalized similarity. This is what the Ceiling experiment exists to test.

---

### Risk 1.7: Same Content Test May Not Isolate Tier Boundary

**The proposed design:** Use SAME SYSTEM documentation for both Middle and Ceiling. This isolates tier variables (mechanism count, metaphor presence, scales).

**The benefit:** Direct comparison. Any perceptual difference is attributable to tier methodology, not content.

**The risk:** What if the CONTENT doesn't support metaphor derivation?

SYSTEM remote Mac documentation has:
- Security architecture (concrete, technical)
- Threat model tables (structured reference)
- Setup procedures (step-by-step)

The tension might be: "These features sound scary (remote access, SSH) but are actually safe when done right."

But what if this tension is TOO EXPLICIT? Ceiling's metaphor derivation is designed for IMPLICIT tensions (prose-dominant content where structure must be inferred). SYSTEM content is explicit-structure (tables, steps, diagrams) where tension is stated directly ("Security Through Design" header).

**Concrete failure mode:** Ceiling planner tries to derive metaphor from explicit content → ends up with obvious/forced metaphor ("fortified castle" for security) → mechanisms become derivative → Ceiling looks WORSE than Middle because Middle didn't try to force metaphor where none is needed.

**Why this matters:** If the experiment shows "Ceiling is not better than Middle for SYSTEM content," we can't tell whether:
- A. Ceiling methodology is flawed (metaphor doesn't improve output generally)
- B. SYSTEM content is wrong content type for Ceiling (explicit structure doesn't benefit from metaphor)

**Alternative:** Run TWO Ceiling experiments:
- Ceiling-A: SYSTEM content (same as Middle, for direct comparison)
- Ceiling-B: Prose-dominant content with implicit tension (e.g., "Building Your First API Endpoint" tutorial)

This costs 2x execution time but isolates content-type effects from tier-methodology effects.

**Confidence this is a real risk:** LOW-MEDIUM. The retrospective doesn't examine content-metaphor fit. But Clarification 8 noted "Ceiling is for content with genuine structural tension (prose-dominant, implicit tension)" — SYSTEM might not qualify.

---

## 2. OPPORTUNITIES (Ceiling Has That Middle Didn't)

### Opportunity 2.1: Agent Messaging Enables Collaborative Refinement

**The Middle limitation (Finding 9):** Zero SendMessage. Builder worked in isolation with only the plan. When Footer Mirror was specified but implementation was ambiguous ("mirroring header" — does that mean same border color? same padding? same typography?), builder had NO way to ask planner for clarification.

Result: Footer not implemented at all. WOULD-NOT-SHIP defect.

**The Ceiling capability:** Builder → Planner messaging.

Concrete scenario:
- Builder reads plan: "Section 3 should have sparse breathing with geological compression"
- Builder: "Sparse breathing = 64px padding. But geological compression suggests tighter spacing. Which takes priority, or do they apply to different dimensions?"
- Planner: "Sparse within sections (64px padding), compression BETWEEN sections (32px gap). They're not contradictory — they're different scales."
- Builder proceeds with confidence

**Evidence:** CD-006 (39/40) and Phase C (11/11 criteria) both used agent messaging. Middle (B+ quality, 3 defects) did not. The quality gap is partially explained by agents catching each other's blind spots.

**Why Middle couldn't use this:** The experiment explicitly tested file-only communication to maximize speed. 35 minutes execution proved the topology works, but quality cost was real.

**For Ceiling:** Messaging is NON-NEGOTIABLE (Methodology Change #0). The metaphor derivation phases are complex enough that clarification questions are expected, not exceptional. Building Ceiling without messaging would repeat Middle's quality gaps.

**Confidence this is high-value:** HIGH. Direct evidence from 3+ experiments showing messaging correlates with quality.

---

### Opportunity 2.2: Metaphor Provides Compositional PURPOSE

**The Middle output quality:** Perceptual auditor: "Specifications applied correctly, not composition felt through." PA-05 4/4 (crosses designed threshold) but feels "professionally stiff."

**The diagnosis (Finding 4):** Middle achieved VOCABULARY FLUENCY (knowing many mechanisms, deploying them competently) but lacked COMPOSITIONAL FLUENCY (mechanisms chosen to EXPRESS something).

**The Ceiling addition:** Metaphor-driven mechanism selection. Instead of:
- "This content has code blocks → use mechanism #17" (lookup)

Ceiling does:
- "The metaphor is 'geological core sampling' → code blocks are rock samples → use monospace with dark backgrounds like core specimens → mechanism #17 with metaphor-specific styling" (derivation with purpose)

**The perceptual prediction:** If metaphor gives EVERY MECHANISM a reason that connects to the same conceptual spine, the page should feel like "decisions made for THIS content's meaning" rather than "specs applied correctly."

**Evidence:** OD-004 ("geological confidence") scored high on atmosphere. DD-006 ("fractal recursion") created spatial presence. Both had metaphor-driven coherence. Variant B had metaphor ("scientific calibration lab") but only 5 mechanisms to express it — resulted in 18/19 compliance but not richness.

**For Ceiling:** Same content as Middle isolates this variable. If Ceiling with metaphor produces perceptually richer output than Middle without metaphor (using similar mechanism counts), metaphor's value is proven.

**Confidence this is high-value:** MEDIUM-HIGH. The theory is strong (Finding 4, Clarification 3), but untested whether metaphor + 12-15 mechanisms produces "felt through" or just more elaborate "applied correctly."

---

### Opportunity 2.3: Same Content Enables Direct Tier Comparison

**The comparison challenge historically:** Showcase pages (DD-006, CD-006, OD-004) used different content, different mechanisms, different contexts. Hard to isolate WHAT made one richer than another.

**Phase D comparison:** All 5 variants (A/B/C/D/E) used same content (scientific calibration). Result: clear winner (Variant B at 18/19 compliance). Proved content-constant comparison works.

**Middle vs Ceiling with SYSTEM content:**
- Middle: 12 mechanisms, no metaphor, F-PATTERN, 2 scales, 35 min execution
- Ceiling: 12-15 mechanisms, metaphor-derived, F-PATTERN (same), 4 scales, ~60-90 min execution

**What this isolates:**
- Mechanism count difference: 12 vs 12-15 (marginal)
- Metaphor presence: no vs yes (THE variable)
- Scale count: 2 vs 4 (secondary variable)
- Deployment style: lookup vs creative derivation (THE methodology shift)

**Concrete questions answerable:**
- Does metaphor create perceptual richness with similar mechanism counts?
- Does 4-scale fractal coherence feel more intentional than 2-scale?
- Does creative derivation produce novel combinations or derivative patterns?
- Is "felt through" achievable with systematic process, or does it require iteration beyond process?

**Alternative (different content) wouldn't answer these:** If Ceiling uses tutorial content and Middle uses reference content, perceptual differences could come from content structure, not tier methodology.

**Confidence this is high-value:** HIGH. Direct comparison is rare and valuable. The tier model needs empirical validation — this provides it.

---

### Opportunity 2.4: All Middle Defects Have Known Fixes

**Middle defect #1: Missing footer (WOULD-NOT-SHIP)**
- Root cause: Prompt slicing blind spot + no communication to clarify ambiguity
- Fix: Landmark completeness gate (verify header, footer, all named sections exist) + builder → planner messaging

**Middle defect #2: Token compliance 66.5% (13.5 points below 80% threshold)**
- Root cause: Builder used raw hex/px values instead of CSS custom properties
- Fix: Builder self-check ("scan your CSS for raw values, replace with var() references, verify >= 80%")

**Middle defect #3: CPL at 82 chars (+2 over spec)**
- Root cause: Paragraph font-size 18px instead of 16px, no formula to verify CPL before declaring done
- Fix: CPL verification formula in builder prompt: `(container-width) / (font-size-px) / 0.6 = CPL`, verify 45-80 range

**Middle defect #4: Heading spacing ratio violated**
- Root cause: Binary rule (1.5:1 above/below) not checked programmatically
- Fix: Programmatic audit generated from build plan checks this explicitly

**Middle defect #5: Metronomic rhythm (no spacing variation)**
- Root cause: Skill has no minimum transition count
- Fix: M4 modification (3-transition minimum added to Phase 4.2B)

**For Ceiling:** ALL 5 fixes are implementable in Ceiling master prompt without changing the skill. The fixes are:
1. Landmark gate (team-lead verifies structure before launching auditors)
2. Token self-check (builder scans CSS before writing file)
3. CPL formula (builder calculates before writing file)
4. Generated programmatic audit (checks plan specifications, not generic rules)
5. Transition minimum (3+ different section treatments required)

**The opportunity:** Ceiling gets to SKIP Middle's learning curve. The fixes are known and cheap (add 3-5 minutes to build process). If Ceiling implements all fixes + adds metaphor, it tests CLEAN tier methodology, not methodology + known bugs.

**Confidence this is high-value:** HIGH. Fixing known issues before Ceiling prevents compounding defects and isolates new risks.

---

### Opportunity 2.5: Dual-Evaluator Protocol Can Strengthen Novelty Assessment

**The Middle weakness (Adversarial Finding, Challenge 3):** Single evaluator assessed novelty knowing which page was the experiment. No blind protocol, no inter-rater reliability.

**The Ceiling opportunity:** Add SECOND perceptual auditor (Finding 5, Methodology recommendation).

Protocol:
1. Auditor-1 and Auditor-2 BOTH receive screenshots of Ceiling page at 1440px + 768px
2. BOTH answer PA-01 through PA-48 independently (zero shared context)
3. Team-lead compares answers:
   - Agreement = high confidence in findings
   - Disagreement = flag for review

**Why this matters:** Fresh-eyes auditing is validated (Finding 5), but single-evaluator bias is a real concern (Adversarial Challenge 3). CD-006's 39/40 score came from a single perceptual auditor. If two independent auditors BOTH say "this crosses the engagement threshold," external validity is much stronger.

**Cost:** ~5-7 minutes per auditor (Middle PA took ~5 min). Total ~10-14 minutes for dual audit vs ~5 min for single. But Ceiling already expects ~60-90 min total, so 10 extra minutes is marginal.

**Reconciliation protocol:**
- PA-05 (designed threshold): if BOTH say 4/4, high confidence. If one says 3/4, investigate which sub-criterion differs.
- Novelty: if BOTH identify same mechanisms as novel, strong signal. If one says "derivative" and one says "novel," the derivative verdict wins (novelty requires consensus).
- Quality verdict: if BOTH say "compositionally felt through," SUCCESS. If one says "professionally stiff," that's the quality ceiling.

**Confidence this is high-value:** MEDIUM-HIGH. Adds rigor to evaluation, addresses adversarial challenges, provides inter-rater reliability data the project currently lacks.

---

### Opportunity 2.6: Metaphor Derivation Creates Architectural Documentation

**The Middle limitation:** The build plan specifies WHAT mechanisms to deploy and WHERE, but not WHY in compositional terms. Example:

```
Section 2: Security Architecture
Mechanism #1 (border-weight): 4px for Critical, 3px for Important, 1px for Standard
Mechanism #7 (zone backgrounds): Light cream for introduction, medium tan for procedures
```

This is executable but not conceptually legible. A future reader can't understand the compositional logic — they see mechanism applications but not the spine connecting them.

**The Ceiling addition:** Phases 1-3 produce metaphor derivation documentation:
- 01-metaphor-derivation.md (what metaphor, how it maps to content structure, why it fits tension)
- 02-build-plan.md (mechanisms selected BECAUSE of metaphor, with metaphor rationale)

Example with metaphor:

```
Metaphor: Security as Geological Strata (surface accessibility → core protection)

Section 2: Security Architecture
Metaphor encoding: User-facing features are surface layer (accessible, light), authentication is mid-layer (consolidated, medium), encryption is core (dense, dark).

Mechanism #1 (border-weight): Encodes depth — 4px (core/encryption), 3px (mid/auth), 1px (surface/UI)
Mechanism #7 (zone backgrounds): Encodes material — light cream (surface sandstone), tan (mid-layer sediment), dark gray (core basalt)
Mechanism #4 (spacing compression): Encodes consolidation — 64px surface, 48px mid, 32px core
```

**The value:** This creates TRANSFERABLE KNOWLEDGE. A future instance reading Ceiling output can understand:
- What the compositional spine was (geological strata)
- How it mapped to content (security layers → geological layers)
- Why specific mechanisms were chosen (border-weight for depth, backgrounds for material, spacing for consolidation)
- Whether the metaphor felt forced or resonant

**For learning:** Middle produced data about "does 12 mechanisms work?" Ceiling produces data about "does metaphor-driven selection create coherence?" AND architectural documentation showing how metaphor drives decisions.

**Confidence this is high-value:** MEDIUM. The documentation value is real, but it's unclear how much this matters vs execution output quality. If Ceiling produces B+ quality with great documentation, the documentation doesn't make the output ship-ready.

---

## 3. DESIGN RECOMMENDATIONS

### Team Size, Composition, Communication Protocol

**Recommended team size:** 10-12 agents

**Phase breakdown:**
- Phase 0: Content selection — 1 agent (OPTIONAL if reusing Middle content — SKIP)
- Phase 1: Metaphor derivation — 1 agent (NEW for Ceiling — Opus)
- Phase 2: Planning — 1 agent (Opus planner with metaphor context)
- Phase 3: Building — 1 agent (Sonnet builder)
- Phase 4a: Programmatic audit — 1 agent (Sonnet)
- Phase 4b: Perceptual audit — 2 agents (dual-evaluator protocol — Sonnet)
- Phase 5a: Comparative audit — 1 agent (vs Middle page — Sonnet)
- Phase 5b: Novelty evaluation — 1 agent (Opus for structural fingerprints)
- Phase 6: Verdict synthesis — 1 agent (Sonnet)

**Total: 10 agents (or 9 if content reused)**

**Model assignments:**
- Opus: metaphor-agent, planner, novelty-evaluator (3 agents — creative/analytical tasks)
- Sonnet: builder, auditors, verdict (6-7 agents — execution/verification tasks)

**Communication protocol (CRITICAL):**

Flat file-bus topology (team-lead → agents directly, zero intermediate captains) is VALIDATED. Change ONLY the communication protocol:

**Required SendMessage capabilities:**
1. **Builder → Planner:** Clarifying questions about plan specifications
   - Trigger: builder reads plan section with ambiguity (e.g., "sparse breathing with compression")
   - Process: builder sends message with specific question, planner responds with clarification
   - Builder continues after receiving response

2. **Auditor → Team-Lead:** Mid-process issue flagging
   - Trigger: auditor finds severity-1 defect (missing structural element, soul violation)
   - Process: auditor sends message to team-lead with issue summary
   - Team-lead decides whether to abort and fix, or continue and fix later

3. **Team-Lead → Builder:** Targeted iteration requests
   - Trigger: landmark gate fails (footer missing) OR auditor flags severity-1 defect
   - Process: team-lead sends message to builder with specific fix request
   - Builder reads message, implements fix, writes updated file

**Message discipline:**
- NO broadcast messages (team-wide announcements are expensive and unnecessary)
- NO status updates ("I'm working on Section 3 now") — task completion visible via file existence
- ONLY clarification questions, issue flagging, and iteration requests

**Expected message volume:** 5-10 messages total across build (vs Middle's zero). Each message round-trip adds ~2-4 minutes. Total communication overhead: 10-20 minutes.

**Timing estimate:**
- Metaphor derivation: 10-15 min
- Planning: 15-20 min (more context than Middle)
- Building: 20-25 min (more mechanisms + metaphor encoding)
- Dual perceptual audit: 10-14 min (parallel execution)
- Other audits: 15-20 min
- Messaging overhead: 10-20 min
- **Total: 80-114 minutes (midpoint ~90 min)**

Compare with Middle: 35 min (but 3 defects), CD-006: unknown but included iteration (39/40 quality).

**Confidence in recommendation:** HIGH for topology (flat file-bus validated). HIGH for messaging requirement (Finding 9 evidence). MEDIUM for timing (single Middle data point, no Ceiling data yet).

---

### Gate Structure, Verification Steps

**Recommended gate sequence:**

**Phase 1 → Phase 2 (Metaphor Derivation → Planning):**
- **Metaphor Resonance Gate:** Team-lead reads metaphor derivation output and checks:
  1. Does metaphor authentically arise from content tension? (not forced/obvious)
  2. Is metaphor cross-domain? (geological, musical, architectural — not same-domain as content)
  3. Can metaphor encode 3+ semantic dimensions? (not single-property metaphor like "fast/slow")
  4. Binary check: YES to all 3 → proceed. NO to any → request metaphor revision or abort.

**Phase 2 → Phase 3 (Planning → Building):**
- **Mechanism Interaction Gate:** Team-lead reads build plan and verifies:
  1. Per-category minimums met? (S:2+, H:2+, C:3+, D:2+, N:2+)
  2. Interaction documentation exists? (3+ mechanism pairs with "reinforces each other" explanations)
  3. Fractal coherence specified? (4 scales with concrete implementation guidance)
  4. Binary check: YES to all 3 → launch builder. NO to any → request plan revision.

**Phase 3 → Phase 4 (Building → Validation):**
- **Landmark Completeness Gate (NEW from Middle defect #1):** Team-lead verifies HTML structure:
  1. Header exists and visible? YES/NO
  2. Footer exists and visible? YES/NO
  3. All named sections from plan exist? YES/NO (check each section header against plan TOC)
  4. Binary check: All YES → launch auditors. Any NO → send targeted iteration request to builder, recheck after fix.

**Phase 4 → Phase 5 (Validation → Evaluation):**
- **Severity-1 Defect Gate:** Team-lead reads programmatic + perceptual audit reports and checks:
  1. Any soul violations? (border-radius, box-shadow, container width) YES/NO
  2. Any WOULD-NOT-SHIP findings? (missing structural elements, broken layouts) YES/NO
  3. Binary check: Both NO → proceed to evaluation. Any YES → iteration cycle (fix defects, re-audit).

**Phase 5 → Phase 6 (Evaluation → Verdict):**
- **No gate needed.** Verdict synthesizer reads all evaluation outputs and produces final verdict. No blocking criteria here.

**Self-check requirements for builder (BEFORE writing file):**
- CPL verification: calculate `(960px - 64px) / (font-size-px) / 0.6`, verify 45-80 range
- Token compliance: scan CSS for raw hex/px values, count var() references, verify >= 80% var() usage
- Transition count: verify >= 3 different section treatment types (spacing change, background change, visual break)

**Confidence in recommendation:** HIGH for landmark gate (directly addresses Middle defect #1). MEDIUM for metaphor resonance gate (judgment criteria, not binary). HIGH for self-checks (known preventable failures from Middle).

---

### Metaphor Derivation Process

**Phases 1-3 (NEW for Ceiling):**

**Phase 1: Tension Extraction**
- Input: Content text (800-1,200 words from SYSTEM documentation)
- Agent: metaphor-agent (Opus)
- Task: Read content, identify implicit tension or conceptual spine
- Output: Tension statement (1-2 sentences)
- Example: "SYSTEM features sound scary (remote access, SSH, root privileges) but are actually safe when designed correctly. Tension: perceived danger vs actual security."

**Phase 2: Metaphor Derivation**
- Input: Tension statement from Phase 1
- Agent: same metaphor-agent (continuation)
- Task: Derive metaphor that RESOLVES or EXPRESSES the tension, cross-domain preferred
- Output: Metaphor statement + mapping explanation
- Example: "Metaphor: Fortified architecture. Maps security layers (authentication, encryption, access control) to architectural defense layers (moat, walls, inner keep). Expresses 'apparent vulnerability (castle looks accessible) but actual impermeability (every layer has protection).'"

**Phase 3: Semantic Dimension Mapping**
- Input: Metaphor from Phase 2
- Agent: same metaphor-agent (continuation)
- Task: Map metaphor to CSS dimensions (spacing, weight, color, material)
- Output: 3+ semantic dimensions with CSS encoding strategies
- Example:
  - Defense layer depth → border-weight (1px outer/moat, 3px walls, 4px keep/core)
  - Material solidity → zone backgrounds (light stone walls, dark iron keep)
  - Access restriction → spacing compression (spacious courtyard, tight vault)

**Deliverable:** `01-metaphor-derivation.md` with all 3 phases documented.

**Phase 2.5: Planning (with metaphor context)**
- Input: Metaphor derivation output + mechanism catalog + content
- Agent: planner (Opus)
- Task: Select mechanisms to ENCODE the semantic dimensions from metaphor, specify 4-scale fractal coherence
- Output: Build plan with metaphor-driven justifications

**Critical difference from Middle:** Middle planner selected mechanisms by content-structure mapping (code blocks → #17, tables → #18). Ceiling planner selects mechanisms by metaphor-semantic mapping (border-weight + backgrounds + spacing ALL encode "depth" dimension).

**Metaphor Resonance Test (at Phase 1→2 gate):**

Team-lead asks:
1. **Authenticity:** Does this metaphor feel like it arises FROM the content, or is it imposed ON the content?
   - PASS: "Fortified architecture" for security documentation (aligns with content's concern about safety)
   - FAIL: "Jazz improvisation" for security documentation (no connection)

2. **Cross-domain:** Does the metaphor come from OUTSIDE the content domain?
   - PASS: "Geological strata" for network protocols (geology ≠ networking)
   - FAIL: "Layered architecture" for network protocols (both are about layers, same domain)

3. **Multi-dimensional:** Can this metaphor encode 3+ CSS properties (spacing, weight, color, material, typography)?
   - PASS: "Fortified architecture" → depth (border-weight), material (backgrounds), access (spacing), threat level (color intensity)
   - FAIL: "Fast vs slow" → only encodes one dimension (tempo), hard to express in multiple CSS channels

If ALL THREE pass → proceed. If ANY fail → request revision or choose different metaphor.

**Confidence in recommendation:** MEDIUM. Metaphor derivation is THE new process for Ceiling, but it's untested. The 3-phase structure (tension → metaphor → dimensions) mirrors successful showcase builds, but single-pass execution (no iteration) is new.

---

### Metaphor → Mechanism Selection Step

**The critical handoff:** Metaphor-agent produces semantic dimensions ("defense layer depth," "material solidity"). Planner must TRANSLATE these into specific mechanism selections from the catalog.

**Translation protocol:**

For each semantic dimension from Phase 3:
1. Scan mechanism catalog for mechanisms that CAN express this dimension
2. Select 1-2 mechanisms per dimension
3. Document the encoding logic (how this mechanism expresses this dimension)
4. Check for INTERACTION (do selected mechanisms reinforce each other?)

**Example:**

**Semantic dimension:** "Defense layer depth" (outer accessible → inner protected)

**Catalog scan:**
- Mechanism #1 (border-weight): can encode depth via 1px → 4px progression ✓
- Mechanism #4 (spacing compression): can encode depth via 64px → 32px compression ✓
- Mechanism #7 (zone backgrounds): can encode depth via light → dark progression ✓
- Mechanism #3 (solid-offset): NOT depth-encoding (encodes foreground/background, not progression) ✗

**Selection:** #1 + #4 + #7 (all encode depth, multi-channel reinforcement)

**Encoding logic:**
- Border-weight: 1px outer moat (minimal visual barrier) → 3px walls (moderate boundary) → 4px keep (strong enclosure)
- Spacing: 64px courtyard (open, accessible) → 48px gatehouse (compressed) → 32px vault (tight, protected)
- Backgrounds: Light stone (#f5f5f0) outer walls → medium stone (#e0ddd5) inner walls → dark iron (#2d2d2d) keep

**Interaction verification:** As user scrolls from Section 1 (outer layer) to Section 4 (core layer), SIMULTANEOUSLY:
- Borders get heavier (1px → 4px)
- Spacing gets tighter (64px → 32px)
- Backgrounds get darker (light → dark)

All three changes happen TOGETHER, encoding "you are going deeper" in three CSS channels. This is multi-channel coherence.

**Contrast with Middle (no metaphor):**
- Border-weight: Encodes hierarchy (h2 vs h3 distinction)
- Spacing: Encodes rhythm (dense/sparse alternation)
- Backgrounds: Encode section breaks (visual zones)

Each mechanism serves a DIFFERENT purpose. No reinforcement. This is independent deployment.

**Confidence in recommendation:** MEDIUM-HIGH. The protocol is clear and testable. Risk: planner might map ALL dimensions to ALL mechanisms, creating over-encoding (every mechanism trying to do everything). Mitigation: 1-2 mechanisms per dimension, with clear primary/secondary roles.

---

### Multi-Channel Encoding Verification

**The challenge:** How do you CHECK that mechanisms reinforce each other vs operate independently?

**Proposed verification (by perceptual auditor):**

**PA-NEW-01: Semantic Coherence**
"Scroll from top to bottom slowly. Do visual changes feel like variations on a theme, or independent adjustments?"
- Theme (PASS): Borders get heavier AND backgrounds get darker AND spacing gets tighter = "I am going deeper"
- Independent (FAIL): Borders get heavier (hierarchy) BUT backgrounds alternate light/dark (section breaks) BUT spacing stays constant (no rhythm) = three unrelated changes

**PA-NEW-02: Channel Count**
"How many CSS properties change in the same direction as you scroll? (Example: borders heavier + backgrounds darker + spacing tighter = 3 channels encoding 'depth')"
- Ceiling target: 3+ channels
- Middle baseline: 1-2 channels

**PA-NEW-03: Encoding Legibility**
"Can you infer what dimension the page is encoding from the visual progression? (Example: 'this page is showing me layers' or 'this page is showing me importance' or 'this page is showing me tempo')"
- PASS: Clear inference possible ("I can tell this is about depth/layers")
- FAIL: No clear inference ("It looks designed but I don't know what it's expressing")

**Programmatic check (harder but possible):**

Scan builder's output HTML for:
1. Extract all sections (Section 1 through Section N)
2. For each section, measure:
   - Border-weight (in px)
   - Padding (in px)
   - Background color (as hex)
3. Check for MONOTONIC PROGRESSION:
   - If border-weight increases from Section 1 → Section N: +1 channel
   - If padding decreases from Section 1 → Section N: +1 channel
   - If background darkness increases from Section 1 → Section N: +1 channel
4. Total channels with monotonic progression = multi-channel encoding count

**Ceiling target:** 3+ channels. If only 1-2 channels have monotonic progression, it's Middle-level deployment, not Ceiling-level coherence.

**Confidence in recommendation:** MEDIUM. PA-NEW questions are judgment-based (could suffer from same single-evaluator bias as Middle). Programmatic check is more rigorous but harder to implement and might not capture non-monotonic coherence (e.g., PULSE pattern with rhythmic alternation).

---

### Dual-Evaluator Specifics

**Why dual evaluation:**
- Middle used single perceptual auditor (zero-context, fresh-eyes)
- Adversarial review (Challenge 3) identified single-evaluator bias as measurement weakness
- CD-006's 39/40 score came from single auditor — external validity unknown
- Dual evaluation provides inter-rater reliability data

**Protocol:**

**Phase 4b: Perceptual Audit (parallel execution)**
1. **Auditor-1** receives:
   - Screenshot of Ceiling page at 1440px
   - Screenshot of Ceiling page at 768px
   - PA question list (PA-01 through PA-48)
   - Zero other context (no metaphor, no plan, no mechanism count)

2. **Auditor-2** receives IDENTICAL inputs (same screenshots, same questions, zero shared context with Auditor-1)

3. Both auditors answer ALL 48 questions independently

4. Both write their outputs to separate files:
   - `04a-perceptual-audit-evaluator-1.md`
   - `04b-perceptual-audit-evaluator-2.md`

**Phase 4c: Reconciliation (by team-lead or verdict-synthesizer)**
5. Compare answers for:
   - **PA-05 (designed threshold):** Do both say 4/4? Agreement = high confidence. Disagreement = investigate which sub-criterion differs.
   - **First impression gut reaction:** Do both use similar language ("professionally stiff" vs "compositionally confident")? Agreement = strong signal.
   - **Novelty signals:** Do both identify same mechanisms as novel? Agreement = validated. Disagreement = flag for review.

**Reconciliation rules:**
- **Agreement (both say YES or both say NO):** Accept consensus verdict.
- **Disagreement (one YES, one NO):** Pessimistic rule — NO wins. If one auditor sees a flaw, the flaw exists even if the other missed it.
- **Magnitude disagreement (both say PASS but at different thresholds):** Report BOTH values with range. Example: "PA-05b padding ratio: Evaluator-1 measured 2.0x, Evaluator-2 measured 2.2x. Both pass >= 2.0x threshold."

**Cost:** 10-14 minutes total (5-7 min per auditor, parallel execution). Marginal overhead vs single auditor.

**Value:** Inter-rater reliability, addresses adversarial challenges, stronger external validity.

**Model choice:** Both auditors should be Sonnet. Fresh-eyes protocol works best with straightforward reactions, not high-capability analysis.

**Confidence in recommendation:** HIGH. Low cost, high value, directly addresses measurement weakness identified in adversarial review.

---

## 4. THE BIG QUESTION

**Will metaphor-driven selection produce "felt through" quality? Or is the gap about ITERATION (build-review-refine cycles), not metaphor?**

### Evidence for "Metaphor is the missing ingredient"

**From Finding 4 (Vocabulary vs Compositional Fluency):**
Middle achieved PA-05 4/4 (designed threshold) but perceptual auditor called it "professionally stiff" rather than "compositionally confident." Diagnosis: "Specifications applied correctly, not composition felt through."

The gap is between VOCABULARY FLUENCY (deploying mechanisms competently) and COMPOSITIONAL FLUENCY (deploying mechanisms to EXPRESS something). Middle has vocabulary breadth (12 mechanisms across 5 categories) but no compositional PURPOSE (mechanisms serve independent functions, not shared semantic dimensions).

Ceiling adds metaphor. If metaphor gives mechanisms a shared PURPOSE (all encoding "depth" together), the output should cross from "applied correctly" to "felt through."

**From Clarification 3 (Creative Derivation):**
Middle: content feature → mechanism (lookup). Ceiling: metaphor → semantic dimension → multiple mechanisms encoding that dimension (derivation with purpose).

When border-weight + spacing + backgrounds ALL encode "depth" simultaneously, the page expresses compositional intent in multiple channels. This multi-channel coherence is what creates atmosphere.

**From showcase analysis:**
OD-004 ("geological confidence") and DD-006 ("fractal recursion") both scored high on atmosphere. Both had metaphor-driven selection. Variant B had metaphor but only 5 mechanisms — resulted in 18/19 compliance but not richness. This suggests metaphor + sufficient mechanism count = atmosphere.

**Prediction if metaphor is the driver:**
Ceiling (with metaphor + 12-15 mechanisms) should produce perceptually richer output than Middle (no metaphor + 12 mechanisms). The perceptual audit should identify multi-channel coherence ("borders, spacing, and backgrounds all change together") and compositional purpose ("this page is expressing depth/layers").

---

### Evidence for "Iteration is the missing ingredient"

**From Finding 9 (Agent Communication):**
Middle used zero SendMessage. Result: "professionally stiff" quality, missing footer, no iteration on plan ambiguities. CD-006 used agent messaging. Result: 39/40 quality, "compositionally confident." Phase C used hierarchical messaging. Result: 11/11 criteria met.

The quality gap between Middle (B+, 3 defects) and previous high-scoring experiments (CD-006, Phase C) is partially explained by COLLABORATIVE REFINEMENT — agents catching each other's mistakes, asking clarifying questions, iterating on implementation.

**From showcase build process:**
DD-006, CD-006, OD-004 were NOT single-pass builds. They included:
- Multi-pass audits (build → audit → fix → re-audit)
- Iterative metaphor refinement (try metaphor A, doesn't work, revise to metaphor B)
- CSS experimentation (try spacing values, adjust if rhythm feels off)

The Middle experiment compressed this 4-6 hour iterative process into a 35-minute single-pass execution. Result: technically compliant but not "felt through."

**From Phase D variation:**
All 5 Phase D variants used metaphor derivation. Variant B scored highest (18/19) but was still only 4/5 on novelty and lacked richness. Variant C (strong permission) had metaphor but FAILED soul compliance. Variants D/E had metaphor but scored worse than B.

This suggests metaphor ALONE isn't sufficient. Showcase pages had metaphor + iteration. Phase D variants had metaphor + no iteration (single-pass pipeline).

**Prediction if iteration is the driver:**
Ceiling (with metaphor + messaging + targeted iteration) should produce richer output than Middle (no metaphor + no messaging). BUT Ceiling WITHOUT iteration (metaphor present, messaging present, but still single-pass) might produce "elaborate stiff" — more mechanisms, more complexity, but still not "felt through."

---

### Synthesis: BOTH Are Required

**The evidence suggests iteration and metaphor are INDEPENDENT quality drivers, not alternatives.**

**Iteration without metaphor (hypothetical Middle with messaging):**
- Builder asks planner clarifying questions → footer gets implemented correctly
- Auditor flags CPL violation → builder fixes before shipping
- Result: technically excellent, zero defects, but still "applied correctly" not "felt through"
- Quality: A- (no defects) but not A+ (no atmosphere)

**Metaphor without iteration (Ceiling with file-bus isolation):**
- Planner derives metaphor, specifies multi-channel encoding
- Builder implements in isolation, no clarification questions
- Result: metaphor-driven composition but implementation bugs (missing footer analog, spacing inconsistencies, interaction not felt)
- Quality: B+ (same as Middle, just with different reasoning)

**Metaphor + iteration (Ceiling with messaging):**
- Planner derives metaphor, specifies multi-channel encoding
- Builder asks clarifying questions about ambiguities
- Auditor flags issues mid-process, builder fixes before completion
- Result: compositional PURPOSE (metaphor) + technical EXCELLENCE (iteration)
- Quality: A to A+ (crosses "felt through" threshold)

**The Middle experiment validated design improvements in isolation.** M1 per-category minimums work. Flat file-bus topology works. Fresh-eyes auditing works. But Middle WITHOUT messaging achieved B+ quality with "professionally stiff" verdict.

**Ceiling must validate BOTH improvements together:**
1. Design improvements: metaphor derivation, per-category minimums, 4-scale coherence, landmark gates
2. Communication improvements: inter-agent messaging, collaborative refinement, targeted iteration

**Neither alone is sufficient.** Middle proved mechanism deployment can cross "designed" threshold. CD-006 and Phase C proved messaging enables high-quality refinement. Ceiling needs to combine BOTH to cross "felt through" threshold.

**My answer:** The gap is about BOTH. Metaphor provides compositional PURPOSE (mechanisms chosen to express shared semantic dimensions). Iteration provides technical EXCELLENCE (implementation bugs caught, ambiguities resolved, rhythm refined). Purpose without excellence = "elaborate but stiff." Excellence without purpose = "competent but generic." Both together = "compositionally felt through."

**Confidence in this answer:** HIGH. The evidence from Finding 9 (messaging quality gap), Finding 4 (vocabulary vs compositional fluency), and showcase vs pipeline comparison all point to metaphor and iteration as independent, necessary ingredients.

---

## 5. WHAT SUCCESS LOOKS LIKE

**Concrete criteria for Ceiling meaningfully exceeding Middle's quality:**

### Criterion 1: Perceptual Quality Crosses "Felt Through" Threshold

**Middle baseline:** "Professional but stiff — feels like a technical manual that wants to be approachable but hasn't quite relaxed." (PA first-impression gut reaction)

**Ceiling target:** "Compositionally confident — feels like decisions were made for THIS content's meaning, not just applying specifications correctly."

**Measurement:**
- Dual perceptual audit (both evaluators independently assess)
- PA-05 (designed threshold): BOTH auditors say 4/4 at BOTH viewports (same as Middle)
- First-impression comparison: BOTH auditors use language like "atmosphere," "intentional," "expressive" (not "stiff," "mechanical," "generic")
- If EITHER auditor says "professionally stiff," Ceiling has NOT exceeded Middle

**Pass threshold:** Unanimous "felt through" verdict from dual evaluators.

---

### Criterion 2: Multi-Channel Coherence Is Detectable

**Middle baseline:** Single-channel deployment (border-weight for hierarchy, backgrounds for section breaks, spacing for rhythm — each independent).

**Ceiling target:** Multi-channel reinforcement (border-weight + backgrounds + spacing all encode "depth" together).

**Measurement:**
- PA-NEW-01 (semantic coherence): "Do visual changes feel like variations on a theme?"
  - Middle: Independent adjustments
  - Ceiling: Variations on theme
- PA-NEW-02 (channel count): "How many CSS properties change in same direction?"
  - Middle: 1-2 channels
  - Ceiling: 3+ channels
- Programmatic check: Scan HTML sections for monotonic progression in border-weight, padding, backgrounds
  - Middle: 1 property with monotonic progression
  - Ceiling: 3+ properties with monotonic progression

**Pass threshold:** 3+ channels with coherent encoding (both perceptual and programmatic confirmation).

---

### Criterion 3: Novelty Exceeds Middle AND Variant B

**Middle novelty:** 3/3 STRONGLY NOVEL (D3.1, D3.2, D3.3 all passed). Border-weight gradient (4px → 3px → 1px) was design highlight.

**Variant B novelty:** 4/5 (D4.1-D4.3 passed, D4.4-D4.5 borderline).

**Ceiling target:** EXCEEDS both. Novelty evaluator identifies 4-5 novel signals (not just 3), including:
- Novel mechanism COMBINATIONS (not just individual mechanisms)
- Novel spatial STRUCTURE (section sequencing creates atmosphere)
- Novel metaphor APPLICATION (CSS encoding strategies not seen in showcase pages)

**Measurement:**
- Run D3 novelty protocol (compare Ceiling vs Middle vs Variant B)
- Blind evaluation (evaluator doesn't know which page is Ceiling)
- Automated D3.2 (CSS value extraction + comparison, not manual estimation)
- Look for: mechanism combinations present in Ceiling but absent in BOTH Middle and showcase pages

**Pass threshold:** 4+ novel signals, with at least 1 novel COMBINATION (not just individual mechanism novelty).

---

### Criterion 4: Zero WOULD-NOT-SHIP Defects

**Middle defects:** Missing footer (WOULD-NOT-SHIP), CPL +2 (marginal), token compliance 66.5% (internal hygiene).

**Ceiling target:** ALL severity-1 defects prevented through gates and self-checks:
- Landmark gate catches missing footer BEFORE auditors launch
- CPL formula catches font-size violations BEFORE builder writes file
- Token self-check catches raw value usage BEFORE builder writes file
- Heading spacing ratio checked programmatically (not just perceptually)

**Measurement:**
- Programmatic audit finds ZERO soul violations (border-radius, box-shadow, container width)
- Perceptual audit finds ZERO WOULD-NOT-SHIP findings (missing structure, broken layouts, flow issues)
- Ship verdict = YES WITHOUT RESERVATIONS (not "yes with known defects to fix")

**Pass threshold:** Zero severity-1 defects. Marginal violations (CPL ±1 char, token compliance 78% instead of 80%) are acceptable. Structural failures (missing footer, container width violation) are NOT acceptable.

---

### Criterion 5: Timing Stays Reasonable (≤ 2 hours)

**Middle timing:** ~35 minutes (8 agents, zero messaging)
**Ceiling projection:** 80-114 minutes (10 agents, messaging enabled)

**Ceiling target:** ≤ 120 minutes (2 hours). If Ceiling takes >2 hours, it's only viable for crown jewels (5-10% of pages). The tier model assumes Middle at 70-100 min, Ceiling at 150-220 min for HUMAN time. Agent time should be 40-60% of human time based on Middle data.

**Measurement:**
- Track wall-clock time from team-lead launch to verdict file written
- Track messaging overhead separately (time spent waiting for responses)
- Compare with Middle (35 min) and tier model prediction (150-220 min)

**Pass threshold:** Total execution ≤ 120 minutes. If 80-100 minutes, STRONGLY EXCEEDS expectations. If 100-120 minutes, MEETS expectations. If >120 minutes, practical viability is questionable.

---

### Criterion 6: Metaphor Feels Resonant (Not Forced or Obvious)

**Middle baseline:** No metaphor (N/A for comparison).

**Ceiling target:** Metaphor authentically arises from content tension, not imposed decoratively.

**Measurement:**
- Metaphor Resonance Gate (Phase 1→2): Team-lead checks authenticity, cross-domain, multi-dimensional
- Perceptual audit PA-NEW-03: "Can you infer what dimension the page is encoding?" (Example: "I can tell this is about depth/layers")
- Verdict synthesizer judgment: "Does the metaphor feel like it captures something true about the content, or is it decorative complexity?"

**Pass threshold:**
- Metaphor passes resonance gate (all 3 criteria: authenticity, cross-domain, multi-dimensional)
- Perceptual auditor can INFER the semantic dimension without reading the metaphor derivation document
- Verdict synthesizer concludes "metaphor adds compositional clarity, not just visual elaboration"

---

### Criterion 7: Dual Evaluators Agree on Quality Verdict

**Middle baseline:** Single evaluator (no inter-rater reliability data).

**Ceiling target:** Two independent perceptual auditors AGREE on quality verdict.

**Measurement:**
- Compare PA-05 scores (designed threshold): Do both say 4/4?
- Compare first-impression reactions: Do both use similar language?
- Compare novelty signals: Do both identify same mechanisms as novel?

**Agreement definition:**
- PA-05: BOTH say 4/4 (unanimity required)
- First impression: BOTH use "felt through" language or BOTH use "stiff" language (unanimity required)
- Novelty: BOTH identify 3+ novel signals (consensus on majority)

**Pass threshold:** Agreement on ALL THREE dimensions (PA-05, first impression, novelty). If evaluators disagree on any dimension, external validity is weak and Ceiling has NOT clearly exceeded Middle.

---

### Summary Table: Success Criteria

| Criterion | Middle Baseline | Ceiling Target | Measurement | Pass Threshold |
|-----------|----------------|----------------|-------------|----------------|
| 1. Perceptual quality | "Professionally stiff" | "Compositionally felt through" | Dual PA first impression | Unanimous "felt through" |
| 2. Multi-channel coherence | 1-2 channels independent | 3+ channels reinforcing | PA-NEW + programmatic check | 3+ channels confirmed |
| 3. Novelty | 3/3 STRONGLY NOVEL | 4+ novel signals | D3 protocol + blind eval | 4+ signals, 1+ combination |
| 4. Defect-free | 1 WOULD-NOT-SHIP + 2 marginal | Zero severity-1 | Programmatic + perceptual audit | Zero structural failures |
| 5. Timing | 35 min | ≤ 120 min | Wall-clock tracking | Total ≤ 2 hours |
| 6. Metaphor resonance | N/A (no metaphor) | Authentic, cross-domain, legible | Resonance gate + PA-NEW-03 | Passes all 3 resonance criteria |
| 7. Evaluator agreement | N/A (single evaluator) | Dual evaluators agree | Compare PA outputs | Unanimous on PA-05, impression, novelty |

**Overall SUCCESS verdict requires:**
- ALL 7 criteria met (not 6 of 7)
- Criteria 1 (felt through), 2 (multi-channel), and 4 (defect-free) are NON-NEGOTIABLE
- Criteria 3, 5, 6, 7 are STRONGLY DESIRED but could have partial passes

**PARTIAL SUCCESS (Ceiling improves on Middle but doesn't cross "felt through" threshold):**
- Criteria 2, 4, 5, 7 met (multi-channel, defect-free, reasonable timing, evaluator agreement)
- Criterion 1 partially met (perceptual quality improves but still "elaborate stiff" not "felt through")
- Interpretation: Metaphor + messaging produce better output than Middle, but not yet A+ tier

**FAILURE (Ceiling does not meaningfully improve on Middle):**
- Criterion 1 fails (still "professionally stiff" or worse)
- OR Criterion 4 fails (severity-1 defects present despite gates)
- OR Criterion 5 fails (takes >2 hours, impractical for tier positioning)

---

## Conclusion

**Ceiling is a qualitatively different challenge than Middle.** Middle tested whether mechanism breadth (8-10 across 5 categories) creates "designed" feeling. Answer: YES, with caveats (technically designed but "professionally stiff").

**Ceiling tests two new variables:**
1. Does metaphor-driven selection produce compositional purpose? (mechanisms chosen to express shared semantic dimensions)
2. Does agent messaging + iteration close the quality gap Middle exposed? (collaborative refinement vs isolation)

**The Middle retrospective's most important finding (Finding 9):** Agent isolation costs quality. CD-006 (39/40) and Phase C (11/11) both used messaging. Middle (B+, 3 defects) did not. Ceiling MUST enable messaging to test whether metaphor + collaboration together achieve "felt through" quality.

**Biggest risk:** Metaphor derivation is creative judgment (can't be binary-ruled). Single-pass execution might produce derivative pattern-matching ("geological layers" for infrastructure content = obvious first-order mapping) instead of genuine compositional novelty.

**Biggest opportunity:** All Middle defects have known fixes. Ceiling starts with cleaner methodology (landmark gates, self-checks, dual evaluators) and adds metaphor. If both design improvements AND communication improvements are implemented, Ceiling should cross the quality threshold Middle couldn't reach.

**My answer to The Big Question:** BOTH metaphor and iteration are required. Metaphor provides compositional PURPOSE. Iteration provides technical EXCELLENCE. Neither alone is sufficient. Together, they should produce "compositionally felt through" quality. The Ceiling experiment will be the first test of this hypothesis.

---

**Next steps (subject to user approval):**
1. Apply M1 permanently to tension-composition skill (replace "sample 2-4" with per-category minimums)
2. Implement all 5 Middle defect fixes in Ceiling master prompt (landmark gate, CPL formula, token self-check, heading spacing check, transition minimum)
3. Design Ceiling master execution prompt with metaphor derivation phases + messaging protocol
4. Execute Ceiling experiment with SYSTEM content (same as Middle for direct comparison)
5. Run dual perceptual audit + blind novelty evaluation
6. Synthesize verdict comparing Middle vs Ceiling on all 7 success criteria
