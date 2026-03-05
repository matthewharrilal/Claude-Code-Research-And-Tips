# Master Findings: Pipeline Methodology Investigation

**Date:** 2026-03-01
**Scope:** Multi-session investigation into WHY exploration HTML files (DD-001 through CD-006) have significantly higher visual richness than compose pipeline output
**Method:** 7 research agents, progressive dialogue, provenance analysis, agent output synthesis
**Status:** COMPLETE — Core insight identified, million dollar question formulated

---

## 1. Executive Summary

After weeks of investigation across multiple sessions — launching 7 research agents, analyzing provenance chains, comparing build methodologies, and progressive dialogue — we identified the root cause of the quality gap between exploration-era HTML files and compose pipeline output. **We reframed a knowledge-growth problem as a context-management problem, and that reframing is the root cause of the quality gap.** The exploration era was never worried about context windows. It was focused on knowledge QUALITY and RICHNESS. The pipeline inverted this by compressing 337 findings into 7 files to fit a context window. The missing piece is not "more context" — it is a researcher/curation agent layer that traverses accumulated knowledge and compiles bespoke, implementation-mapped packages per build.

---

## 2. The Core Insight

> "We reframed a knowledge-growth problem as a context-management problem, and that reframing is the root cause of the quality gap."

During the exploration era, nobody ever asked "how do we fit this knowledge into a builder's context window?" Instead they asked "how do we make this knowledge RICHER and DEEPER before it reaches the next builder?" The handoff protocols, enrichment waves, bespoke research commissions, and findings production were all mechanisms for GROWING the quality of accumulated knowledge. The window was never the concern. The quality was.

When we built the pipeline, we flipped the orientation entirely. We started asking: "given a context window, what do we put in it?" We compressed 337 research findings into 7 files. We compressed 88 stage findings into 20 mechanism names. We optimized for FIT instead of for RICHNESS. And every conversation about improving the pipeline was framed the same way — "what should the builder receive?" "what goes in the prompt?" "how do we manage context?"

That framing IS the problem. Not something that happens inside it.

### Key User Quotes

> "We weren't worried about context windows, because it wasn't ever something we did in one pass or throughout the scope of one context window. It was so many layers of enrichment loops after and waves after. Our worry there was never a context window, so why should our worry now be a context window?"

> "The exploration process wasn't a BETTER context window — it was a fundamentally different relationship with TIME. Each exploration existed across multiple sessions, multiple agents, multiple enrichment waves. The knowledge wasn't loaded — it was LIVED."

> "Just the sheer amount of the inheritance chain and what we saw CD-006 is sitting on should show us this was never about a context window. It's much deeper than that."

---

## 3. The Two Things Driving the Richness Gap

### Thing 1: Generative Questions

The explorations and TC ask fundamentally different CATEGORIES of question.

**Exploration questions** are architectural hypotheses — top-down structural propositions:
- DD: "Can X work?" (pattern validation) — e.g., "Can CRESCENDO density work for code-heavy content?"
- OD: "What if documentation was organized as X?" (architectural hypothesis) — e.g., "What if documentation was organized as a conversation?"
- AD: "Does X geometry serve or contradict Y density?" (compatibility testing) — e.g., "Does Z-pattern serve or contradict PULSE density?"
- CD: "Can N patterns coexist with M constraints?" (integration testing) — e.g., "Can 3 heavy component types honor the velocity rule while CRESCENDO density builds through an F-Pattern to Bento Grid transition?"

Each stage asked a more structurally complex question than the last. Each question explicitly referenced findings from previous stages.

**TC questions** are experiential — bottom-up from content:
- FEEL: "What does the reader need to feel?"
- UNDERSTAND: "What must the reader understand?"
- DO: "What should the reader be able to do?"
- BECOME: "Who does the reader become?"
- Plus 10 additional discovered axes (NAVIGATE, TRUST, EVALUATE, ORIENT, RECONCILE, COMPARE, IDENTIFY, DISCOVER, SEE, REMEMBER)

TC derives from content → tension → metaphor → structure. Explorations derive from structural hypothesis → instantiation → test.

**The missing category: STRUCTURAL PROPOSITIONS.** TC produces metaphors that IMPLY structure ("the reader should feel grounded" → implies geological stratification). Explorations produce structural propositions that SPECIFY architecture ("density correlates inversely with confidence" — a rule connecting content properties to visual properties). TC never generates these.

Both question types are needed: TC for emotional conviction, structural hypotheses for architectural framework.

### Thing 2: Accumulation Across Stages

Each exploration inherited ALL previous findings. The knowledge wasn't compressed — it grew.

| Exploration | Research Refs | CSS Lines | Score | Stage Findings Available |
|---|---|---|---|---|
| DD-001 | 2 | 418 | 33/40 | 0 |
| DD-006 | ~20 | 603 | 36/40 | 5 DD-F |
| OD-006 | 50+ | 1,393 | 37/40 | 18 DD-F + 4 OD-F |
| AD-006 | 100+ | 1,138 | — | 18 DD-F + 17 OD-F + 27 AD-F |
| CD-006 | 337+ | 1,019 | 39/40 | 18 DD-F + 17 OD-F + 28 AD-F + 20 CD-F (Wave 1) |

Key accumulation mechanisms:
- **Formal handoff protocols** (HANDOFF-DD-TO-OD.md with 3-step acknowledgment gates)
- **Bespoke commissioned research** (11-19 EXT findings per exploration)
- **v1→v2→v3 enrichment waves** (43-agent OD re-enrichment)
- **Findings production** (builds discovered new things that fed forward)
- **Lesson chains** that evolved from CORRECTIVE to ADDITIVE
- **ACCUMULATED-IDENTITY documents** that grew per stage (v1: 542 lines → v1.1: 576 → v2: 518)
- **Wave 2 inheritance** (CD-004 through CD-006 got all 12 CD-F findings from Wave 1)

The pipeline has none of these. Single-pass, same 7 files, no findings production, no accumulation.

---

## 4. The Context Window Fallacy

During the exploration era, "context" wasn't a CONSTRAINT to be managed — it was a PRODUCT to be grown. The entire orientation was different.

**Exploration era orientation:**
- "How do we make this knowledge RICHER before it reaches the next builder?"
- "Is this research deep enough? Commission more bespoke findings."
- "Have all prior stage findings been threaded into the handoff?"
- "Does the research package contain implementation-mapped plans?"

**Pipeline orientation:**
- "What fits in the context window?"
- "How do we compress 337 findings into manageable files?"
- "What should the builder receive in its prompt?"
- "How do we manage context between TC and builder?"

The compression IS the quality loss:
- 337 research findings → 7 vocabulary files (48:1 compression)
- 88 stage findings → 20 mechanism names (4.4:1 compression)
- Implementation-mapped plans → bare names with no maps
- Navigation architecture → flat file dump

---

## 5. The Actual Mechanism: How Builders Consumed Knowledge

### 5a. The 3-Layer Curation Architecture (CORRECTED)

The investigation initially hypothesized that builders traversed inline provenance headers to discover knowledge. Two dedicated research agents CORRECTED this:

**Builders did NOT traverse the provenance graph.** The actual architecture was:

1. **Researcher agents** (e.g., Agent-0C, Agent-0C2) traversed the accumulated knowledge graph — reading everything, following provenance chains, compiling knowledge
2. **Research packages** = curated deliverables, self-contained, per-builder, everything needed
3. **Builders** = executors who consumed the packages without needing to navigate the graph themselves

The one exception: **FIX agents** (post-audit) WERE explicitly told to traverse provenance. The OD-FIX-EXECUTION-PROMPT had a formal 5-step "Inline Threading Header Absorption Protocol" including step 3: "If BUILT ON references a source you need to understand, read it."

### 5b. The Anti-Orphaning Principle

From the AD Master Execution Spec:

> "No research evaluation document may exist as a standalone output. Every evaluation must be CONSUMED by a downstream document that builders actually read."

This is the architectural principle that made the curation layer work. Knowledge didn't sit in scratchpad directories. Every finding was compiled into a package that a builder consumed. The pipeline has no equivalent — findings from research exist in files the builder never reads.

### 5c. Research Package Methodology

Agent-0C (Research Packager) in the CD stage created 6 packages (one per builder, 100-200 lines each) containing:
- Soul checklist (MANDATORY)
- All applicable R-5 findings EMBEDDED (not referenced — copied)
- AD-F, DD-F, OD-F findings relevant to that specific exploration
- CSS examples matching the pattern being explored
- Anti-pattern checklist
- Implementation plans with expected evidence

Key principle: **Builder never needs to leave the package.** The package was self-contained.

### 5d. Implementation-Mapped Findings

This is the critical distinction between exploration-era knowledge and pipeline knowledge.

**Exploration era (from OD-RESEARCH-GATE.md):**
```
R1-001 → "Q&A alternation follows PULSE: Questions=sparse, Answers=dense"
  → Expected evidence: "Visible PULSE rhythm in layout"
  → Must honor: DD-F-001 PULSE
  → Implementation: Use alternating padding (sparse 48px, dense 24px)
```

**Pipeline equivalent (from mechanisms.md):**
```
border-weight gradient encodes hierarchy
```

The exploration gave the builder a PLAN: what to do, what it should look like, what constraint it must honor. The pipeline gives the builder a NAME with no implementation map, no expected evidence, no constraint linkage.

### 5e. The Provenance System

Three layers, each serving a different function:

| Layer | Files | Function | Used By |
|---|---|---|---|
| Inline threading headers | 490 files | Relational context, accountability | Audit agents, FIX agents |
| Light provenance sections | 244 files | Quick reference, dependency tracking | All agents |
| Formal chain documents | ~50 files | Navigation, searchability | Researcher agents, leads |

**Builders encountered provenance headers** when reading dependency HTML files (HANDOFF-AD-TO-CD explicitly says "READ the validated HTML artifacts"). But they didn't TRAVERSE the graph — they didn't follow BUILT ON references to discover new files. The headers CONTEXTUALIZED knowledge (showing WHERE it came from) but didn't DISCOVER it (everything was already in the research package).

**Builders PRODUCED provenance headers.** Starting with OD builds, builders created properly-formatted inline threading headers as part of their output — including BUILT ON tables, CONSUMED BY predictions, RESEARCH DEBT items, and DIAGNOSTIC QUESTIONS. This shows the provenance format was part of their cognitive process, not external documentation.

### 5f. The Navigation Architecture

The exploration era built a multi-layered navigation system that made context windows irrelevant:

- **Research packages** = MAPS (what to read, in what order, for what purpose)
- **Inline provenance headers** = NODES (what was discovered here, where it came from)
- **Actual HTML files** = PROOF (what it looks like implemented in CSS)
- **Research gate documents** = PRE-FLIGHT PLANS (how each finding maps to this specific exploration)

The builder didn't need ALL knowledge simultaneously in context. They had a navigation system that let them pull what they needed, when they needed it.

---

## 6. What the Pipeline Lacks: 6 Missing Mechanisms

### Side-by-Side Comparison

**Exploration era:**
```
Accumulated Knowledge (337 findings, 88 stage findings, enrichments, 24 explorations)
        ↓
Researcher Agent (traverses, curates, contextualizes for THIS specific build)
        ↓
Research Package (self-contained, per-builder, with implementation plans)
        ↓
Builder (consumes curated package, builds, discovers new findings)
        ↓
New Findings (feed back into accumulated knowledge for next builder)
```

**Current pipeline:**
```
7 Vocabulary Files (static compression of accumulated knowledge)
        ↓
TC Agent (derives from content, blind to accumulated knowledge)
        ↓
Conviction Brief
        ↓
Builder (gets same 7 files every time + brief)
        ↓
PA Evaluation → Fix Cycles (no findings production)
```

### The 6 Missing Mechanisms

1. **No researcher/curation layer** between accumulated knowledge and builder.
2. **No per-build package.** Every builder gets the same 7 vocabulary files.
3. **No findings production.** Pipeline builds don't discover new things that feed back.
4. **TC operates blind to accumulated knowledge.** Derives from content without consulting the design system's research.
5. **No enrichment waves.** Pipeline is single-pass.
6. **No implementation-mapped findings.** Pipeline gives builders mechanism NAMES, not PLANS.

---

## 7. Evidence Summary: 7 Research Agents

### Agent 1: DD Build Process
- Traced DD-001 through DD-006 build methodology
- Found lesson chain in CSS comments evolving from corrective to additive
- CSS growth: 418→603 lines across 6 explorations
- DD-F-006 (fractal) could NOT have been discovered first — required accumulation

### Agent 2: OD Build Process
- Traced HANDOFF-DD-TO-OD.md protocol (3-step gate, density pairings)
- Found 5 layers of builder input
- Discovered bespoke EXT research per exploration
- Documented v1→v2→v3 enrichment (43-agent, 7-wave)
- Reference density: DD-001 ~5 refs → OD-006 ~50+ refs (10:1 growth)

### Agent 3: CD Build Process
- Phase 0: 7 foundation agents (convention, research packages, lock sheet, audits)
- Phase 1A: 3 parallel builders (Wave 1), Phase 1B: 3 parallel builders (Wave 2 with Wave 1 findings)
- Phase 2: 10 audit agents
- Agent-0C (Research Packager): 6 packages, 100-200 lines each, per-builder
- Crown jewel: CD-006 with ALL components, ALL axes, ALL transitions
- Complete CSS progression: DD avg 517 → OD avg 980 → AD avg 897 → CD avg 886

### Agent 4: Generative Questions Catalog
- Cataloged all 24 driving questions verbatim
- Found clear evolution: DD="Can X work?" → OD="What if?" → AD="Does X serve Y?" → CD="Can N coexist?"
- Each stage asked more structurally complex questions referencing prior findings

### Agent 5: TC vs Exploration Questions Comparison
- TC = bottom-up (content → tension → metaphor → structure)
- Explorations = top-down (structural hypothesis → instantiation → test)
- Missing category: STRUCTURAL PROPOSITIONS ("density correlates inversely with confidence")
- 5 structural differences: subject orientation, framework type, generative direction, specificity, knowledge approach

### Agent 6: Provenance Traversal Investigation
- CORRECTED initial hypothesis: Builders did NOT traverse provenance graph
- Builders consumed curated research packages without navigating the graph
- FIX agents were the exception (5-step absorption protocol)
- Builders DID produce their own headers — format was part of cognitive process

### Agent 7: Enrichment Wave Investigation
- Documented 43-agent 7-wave OD re-enrichment producing 42 new EXT-* findings
- ACCUMULATED-IDENTITY evolution: v1 (542 lines) → v1.1 (576) → v2 (518, denser)
- Anti-orphaning rule from AD Master Execution Spec
- Research packages were per-exploration, not generic
- 3-layer knowledge pipeline: packages (builder-facing), headers (provenance-facing), chains (navigation-facing)
- Missing ANY layer = knowledge dies in scratchpad

---

## 8. The Enrichment Wave Pattern

### OD's 6-Wave Evolution

| Wave | Purpose | Agents | Output |
|---|---|---|---|
| 1. Build | Create explorations | 6-18 | 6 HTML files |
| 2. Audit | Find problems | 17 | 89 findings |
| 3. Fix | Resolve problems | 7 | 6 fix reports |
| **4. Re-Enrichment** | **Unify + apply research** | **43** | **42 new EXT-* findings, 94 total** |
| 5. Comprehensive Audit | Second-look | 58 | 78 audit files |
| 6. Provenance Remediation | Formalize chain | 18 | 27 chain files |

**Total OD:** ~149 agents across 6 waves

**AD had NO equivalent re-enrichment cycle.** Result: 28 findings vs OD's 17, BUT each finding 3.6x less densely threaded. 47 "dark matter" items. Critical files left in scratchpad.

---

## 9. The Crown Jewel Pattern

| Crown Jewel | Synthesized | Feature |
|---|---|---|
| DD-006 (fractal) | All 5 density patterns | Meta-density: fractal self-similarity at 5 scales |
| OD-006 (creative) | All 5 org patterns | Meta-organization: emergent "Organization IS Density" |
| AD-006 (compound) | All 5 axis patterns | Meta-axis: attention topology concept |
| CD-006 (pilot) | ALL density + org + axis + combination | Meta-combination: system documenting itself |

CD-006: ALL 11 component types, ALL 5 axis patterns, 7 transitions, 5 fractal scales, 14 AD-F findings cited, self-referential content, 2,085 lines, 1,019 CSS, 39/40.

---

## 10. The Million Dollar Question

> **"What would it mean for the pipeline to have a researcher agent that does what Agent-0C did for the CD explorations — traverse the accumulated knowledge, compile a curated package with implementation-mapped findings, specific to THIS build's metaphor and content?"**

This is not an implementation proposal. It is the question the investigation EARNED through weeks of research, 7 agents, and progressive dialogue.

What we know about what this researcher agent would need to do:
1. Traverse the design system's accumulated knowledge (not just the 7 vocabulary files)
2. Curate a BESPOKE package for THIS specific build (not the same files every time)
3. Include IMPLEMENTATION-MAPPED findings (plans with expected evidence and constraints, not just names)
4. Honor the anti-orphaning rule (every finding consumed by a downstream document the builder reads)
5. Operate on knowledge QUALITY, not context window FIT

What it would replace:
- The current static 7-file dump
- The implicit assumption that compressed vocabulary = sufficient knowledge
- The context-management framing entirely

---

## 11. CSS Progression Data (Complete)

| Stage | Exploration | Total Lines | CSS Lines | Score |
|---|---|---|---|---|
| DD | DD-001-breathing | 770 | 418 | 33/40 |
| DD | DD-002-gradient | 962 | 463 | 35/40 |
| DD | DD-003-islands | 881 | 399 | 32/40 |
| DD | DD-004-layers | 1,275 | 615 | 35/40 |
| DD | DD-005-rivers | 1,251 | 602 | 36/40 |
| DD | DD-006-fractal | 1,120 | 603 | 36/40 |
| **DD avg** | | **1,043** | **517** | **34.5** |
| OD | OD-001-conversational | 2,293 | 1,146 | 37/40 |
| OD | OD-002-narrative | 1,659 | 775 | 35/40 |
| OD | OD-003-task-based | 1,163 | 585 | 35/40 |
| OD | OD-004-confidence | 1,978 | 1,073 | 34/40 |
| OD | OD-005-spatial | 2,284 | 908 | 35/40 |
| OD | OD-006-creative | 2,635 | 1,393 | 37/40 |
| **OD avg** | | **2,002** | **980** | **35.5** |
| AD | AD-001-z-pattern | 1,737 | 706 | — |
| AD | AD-002-f-pattern | 1,682 | 795 | — |
| AD | AD-003-bento-grid | 1,896 | 933 | — |
| AD | AD-004-spiral | 1,483 | 894 | — |
| AD | AD-005-choreography | 1,846 | 918 | — |
| AD | AD-006-compound | 2,276 | 1,138 | — |
| **AD avg** | | **1,820** | **897** | — |
| CD | CD-001-reasoning-code | 1,654 | 824 | 39/40 |
| CD | CD-002-task-decision | 1,567 | 770 | 37/40 |
| CD | CD-003-file-tree | 1,770 | 916 | 38/40 |
| CD | CD-004-essence | 1,625 | 721 | 38/40 |
| CD | CD-005-multi-axis | 2,003 | 1,066 | 33/40 |
| CD | CD-006-pilot | 2,085 | 1,019 | 39/40 |
| **CD avg** | | **1,784** | **886** | **37.3** |

### DD-001 vs CD-006 Accumulation Delta

| Metric | DD-001 | CD-006 | Growth |
|---|---|---|---|
| Research findings available | 2 | 337+ | ~169x |
| Stage findings cited | 0 | 25 direct | N/A |
| Component types | ~3 | 11 (ALL) | 3.7x |
| Axis patterns | 0 | 5 (ALL) | N/A |
| Transitions | 0 | 7 | N/A |
| CSS lines | 418 | 1,019 | 2.4x |
| Total lines | 770 | 2,085 | 2.7x |
| Score | 33/40 | 39/40 | +6 |

---

## 12. Accumulation Architecture Diagram

```
R1 (28 findings) ----\
R2 (27 findings) -----\
R3 (51 findings) ------→ DD-001..DD-006 (18 DD-F findings) ----\
                                                                 \
R1 (28 findings) ----\                                            \
R3 (via DD-F) --------→ OD-001..OD-006 (17 OD-F findings) --------\
EXT-CREATIVE (15+) --/    + OD-F-005 "Org IS Density"               \
                                                                      \
R4 (192 findings) --\                                                  \
R2 (27 findings) ----→ AD-001..AD-006 (28 AD-F findings) -------------\
OD-F (17 findings) -/    + AD-F-023 "ATTENTION TOPOLOGY"                \
DD-F (18 findings) -/    + AD-F-024 "compound is sequential"            \
                                                                         \
R5 (39 findings) ----\                                                    \
ALL DD-F findings ----\                                                    |
ALL OD-F findings -----→ CD-001..CD-006 (25 CD-F findings) <--------------/
ALL AD-F findings ---/    + CD-006 = ALL of the above
ALL CD-F (waves) ---/
```

---

## 13. The Conversation Arc

1. "Why are exploration files richer?" → 7 operational vocabulary files = 50:1 compression
2. Two things: generative questions + accumulation across stages
3. Reframing: "knowledge-growth problem → context-management problem"
4. Mechanics: "How did builders actually consume all that research?"
5. Provenance hypothesis: Did builders traverse inline provenance graph?
6. CORRECTION: No — researchers compiled curated packages; builders consumed packages
7. Anti-orphaning rule: "Every evaluation CONSUMED by downstream document"
8. 3-layer architecture: researchers = navigators, packages = deliverables, builders = executors
9. Million dollar question: What would a pipeline researcher agent look like?

---

## 14. The Tripod: Three Instruments as One System

Through progressive dialogue, a deeper structural insight emerged: the exploration era's quality came from THREE interlocking instruments that cannot be separated. They are three views of the SAME THING — a methodology for bridging accumulated knowledge to builder execution.

### Instrument 1: Master Execution Prompts
**Function:** HOW to consume knowledge
**Examples:** MASTER-AD-EXECUTION-SPEC, HANDOFF-DD-TO-OD.md, CD-BUILD-STATE.md
- Specified PROTOCOL for consuming knowledge (read order, absorption sequence)
- Sequenced builder's cognitive process (first read identity, then package, then reference HTML, then build)
- Required findings production with CHAIN annotations
- Established lock-sheet classification (ALWAYS-LOCKED / LOCKED / CHALLENGEABLE)
- Defined driving question (structural hypothesis to test)

### Instrument 2: Research Packages
**Function:** WHAT to consume
**Examples:** research-package-cd-006.md (~200 lines, per-builder)
- Implementation-mapped findings (not names — plans with expected evidence)
- Per-builder curation (different package for each builder's assignment)
- Anti-pattern checklists with examples from prior explorations
- CSS examples matching the pattern being explored

### Instrument 3: Curation Process
**Function:** HOW the package was created (quality-producing step)
**Who:** Agent-0C (Research Packager), dedicated Phase 0 role
- Traversed ALL prior stage findings (DD-F, OD-F, AD-F)
- JUDGED which findings applied to each specific builder
- Mapped findings to implementation plans with expected evidence
- Created lock-sheet classifying constraints into 3 tiers
- Made strategic decisions (replaced CD-005's plan due to 75% overlap)

### The Interlocking Property

Remove any one and the system breaks:
- **Without #1:** Builder has great package but no protocol. No sequencing, no finding-production requirement.
- **Without #2:** Master prompt says "apply R-5 findings" but builder must find them across 39 scattered documents.
- **Without #3:** Package exists but is static, not curated for THIS assignment. Same package every time = pipeline's 7 vocabulary files.

### The Pipeline's State
- Instrument 1: EXISTS (compose skill builder prompt) but points to static files, not curated packages
- Instrument 2: MISSING — every builder gets the same 7 files
- Instrument 3: MISSING — no researcher agent performs curation

> "You can't separate them. The master execution prompt, the research package, and the curation process are THREE VIEWS of the SAME THING: a methodology for bridging accumulated knowledge to builder execution. Asking 'which one is the quality?' is like asking which leg of a tripod holds it up."

### Updated Million Dollar Question

Given the tripod insight, the question deepens: What would it mean for the pipeline to reconstruct all three instruments — not just add a researcher agent, but create the interlocking system where the master execution prompt points to a curated package compiled by a quality-producing curation process, all three working together for THIS specific build?

---

*Companion documents (16 total):*
- `02-EXPLORATION-ARCHITECTURE.md` — How explorations were built (769 lines)
- `03-PIPELINE-GAP-ANALYSIS.md` — What pipeline lacks and why (652 lines)
- `04-GENERATIVE-QUESTIONS.md` — All 24 questions + TC comparison (519 lines)
- `05-PROVENANCE-MECHANISM.md` — Provenance and navigation system (526 lines)
- `06-DIMENSIONAL-FUNCTIONAL.md` — What researcher agent would DO (640 lines)
- `07-DIMENSIONAL-EPISTEMOLOGICAL.md` — Knowledge quality vs quantity (393 lines)
- `08-DIMENSIONAL-ARCHITECTURAL.md` — Constraints and tradeoffs (521 lines)
- `09-DIMENSIONAL-COMPARATIVE.md` — Lessons from AD failure (386 lines)
- `10-PIPELINE-REDEFINITION.md` — What tripod means for pipeline (795 lines)
- `11-CURATION-WITH-EXISTING-KNOWLEDGE.md` — Curation with pre-existing knowledge (512 lines)
- `12-TC-AND-THE-TRIPOD.md` — How TC interacts with tripod (577 lines)
- `13-MINIMUM-VIABLE-TRIPOD.md` — Cheapest viable version
- `14-CONTRARIAN-TRIPOD.md` — Devil's advocate analysis (394 lines)
- `15-MASTER-SYNTHESIS.md` — Capstone synthesis of everything
- `16-AGENT-0C-INVESTIGATION.md` — How Agent-0C actually curated
