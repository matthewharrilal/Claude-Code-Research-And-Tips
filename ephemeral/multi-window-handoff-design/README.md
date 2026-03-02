# How Creative Intelligence Moves Between Context Windows

When a builder receives "border-radius: 0, box-shadow: none, container: 940-960px," every constraint is a boundary on output space. The builder generates CSS that satisfies checkboxes. Attention is consumed by compliance -- am I violating anything? Does this pass?

When a builder receives "this page is a frontier garrison, not a castle -- castles are defensive and inward-looking" -- the builder generates CSS that creates that feeling. Full generative capacity is engaged because the builder is producing toward a direction, not within a cage.

This investigation asks: **how do we architect multi-window handoff so that creative intelligence -- not extracted rules -- flows between context boundaries?**

---

## The Discovery That Changed Everything

The original research (R1-R5, 337 findings across density, organization, axis, combination) was framed as philosophy: "by doing this you achieved this." That framing produced beautiful pages. The pipeline then converted philosophy into constraints: "you need to do this." That conversion destroyed what made the research generative.

Understanding is not information. It is the STATE of a system that has processed information. You cannot transfer a state by describing it. The only way to preserve understanding across context boundaries is through **creation**, not extraction.

> "Every time we ask an LLM 'what did you learn?' we're asking it to compress its processing state into language about that state. The language is always thinner than the state. Every time we ask an LLM 'make something from this' we're asking it to generate from the full processing state. The creation can be as rich as the state that produced it."

This is the foundational insight. Extraction -- compressing creative knowledge into rules, digesting explorations into summaries, converting philosophy into checklists -- is the failure mode. Not because compression is lossy (it is), but because **switching from creation to description is a category error**. You are bottling the exhaust of a fire and trying to use it as fuel.

---

## The 7 Evaluation Lenses

Every file, every handoff artifact, every design decision in this investigation is measured against these lenses. They are the quality standard -- not for compliance, but for creative fitness.

| # | Lens | What It Asks |
|---|------|-------------|
| 1 | **Conviction vs Extraction** | Does this evoke creation or compliance? Does it paint a world or list prohibitions? |
| 2 | **Content Understanding Depth** | How deeply does this engage with what the actual content NEEDS -- not generically, but specifically? |
| 3 | **Creative Framing Quality** | Does this help a builder FEEL what to build, or just know what to check? |
| 4 | **Evocativeness** | Would holding this alongside raw explorations produce a richer processing state? |
| 5 | **Philosophical vs Procedural** | Is the knowledge framed as "by doing this you achieve this" (philosophy) or "you need to do this" (task)? |
| 6 | **Multi-Window Suitability** | Would this serve as living tissue between context windows, or dead information that survives the crossing but arrives inert? |
| 7 | **Honest Creative Autonomy** | Does this give genuine creative room -- real choices with real consequences -- or illusory room within pre-decided boundaries? |

---

## The Core Tension (and Its Resolution)

**The ideology says:** Load raw creative knowledge -- explorations, research, case studies -- instead of extracted rules. Generative quality scales with raw material in context.

**The adversary says:** The best result ever (PA-05 3.5/4) came from focused direction (~200 lines of Weaver report), not diffuse material. Do not fix what works.

**The evidence says:** N=2 is insufficient. Multiple confounded variables. File RELEVANCE beats file TYPE. But both arguments describe real mechanisms.

**The resolution:** Direction (the conviction brief) tells WHERE to go. Raw material (explorations, research) gives WHAT TO BUILD WITH when you get there. They are not competing approaches. They are two halves of one architecture: a small focused document carries conviction, and the remaining context budget fills with creative material. The builder reads conviction first, then inhabits the material.

---

## The Architecture

Four windows, each serving one cognitive mode:

```
W1: DERIVE          W2: BUILD           W3: EVALUATE        W4: REFINE
(TC Derivation)     (Create artifact)   (PA + Weaver)       (Deepen)

MODE: Questioning   MODE: Creating      MODE: Perceiving     MODE: Amplifying
```

Each boundary exists for a reason. W1/W2 separation frees 12,600 tokens of TC machinery from the builder's context -- space that can hold raw explorations instead. W2/W3 separation enforces cognitive isolation (the builder cannot be the judge). W3/W4 separation prevents evaluator intent from contaminating the refiner's fresh perspective.

The handoff protocol carries 6 dimensions of creative tissue between windows:
1. What I built (the artifact itself)
2. What I was trying to achieve (conviction, intent, the "why")
3. What I rejected and why (roads not taken)
4. What surprised me (emergent discoveries)
5. What I wanted but couldn't (suppressed creative energy)
6. What's aesthetically unresolved (open questions for the next builder)

---

## The Extraction Lesson

Three corpus ingestors were asked to "digest" explorations into compressed summaries. They produced exactly what this ideology argues against: pre-digested extractions that destroy the creative processing state.

8,400 lines collapsed to 235 lines. 36:1 compression. The digests defaulted to procedural framing despite explicit instructions to use philosophical framing. Extraction is a reflex that recurs even when you know it is wrong.

**The correct approach is SELECTION and DISTRIBUTION, not extraction.** Each window holds RAW explorations and research, not summaries. The handoff protocol creates coherence between windows that each processed different raw slices.

---

## Reading Order

Start with the philosophy. Then challenge it. Then see how it was built.

**Act I -- The Ideology and Its Evidence**
- `_research/01-ideology-extraction.md` -- The creation-vs-extraction paradigm, conviction-vs-compliance, the 53-vs-3774 finding
- `_research/03-file-characterization.md` -- What each file does to a builder's mind (world-description: 9/10 conviction; prohibitions: 2/10)
- `_research/06-handoff-tissue.md` -- The 6 dimensions of creative tissue, traced through a real build

**Act II -- The Challenge**
- `_research/08-adversarial.md` -- 12 challenges to every assumption. The key contrarian: focused direction beat diffuse material in the only controlled comparison
- `_research/11-blind-spot-analysis.md` -- Where the agents contradicted each other, where circular reasoning hides, uncomfortable questions nobody asked

**Act III -- The Design**
- `_window-design/15-handoff-protocol.md` -- The reconciliation: conviction + raw material, not either/or
- `_window-design/12-window-1-design.md` -- TC Derivation: what enters, what is excluded and why
- `_window-design/13-window-2-design.md` -- The Builder: conviction + calibration + vocabulary + creative material
- `_window-design/14-window-3-4-design.md` -- Evaluation and Refinement: perceptual judgment and artistic amplification

**Act IV -- The Corpus**
- `_corpus-ingestion/` -- Distribution maps (ad, cd, dd, od, research, casestudy) show where raw files route to which windows. The digest files are marked DEPRECATED as the anti-pattern they embody.

---

## Directory Structure

```
multi-window-handoff-design/
|
|-- README.md                          <-- You are here
|-- previous-session-transcript.txt    <-- Raw transcript (~172k chars)
|
|-- _research/                         <-- The ideology, the evidence, and the challenge
|   |-- 01-ideology-extraction.md      Creation vs extraction, conviction vs compliance
|   |-- 02-implementation-audit.md     What each window actually receives today
|   |-- 03-file-characterization.md    7 files scored: 5.7% conviction vs 11.9% compliance
|   |-- 04-corpus-map.md              172k lines, 1.2% loaded, 0.5% creative knowledge
|   |-- 05-context-budget.md          Token budgets, 61% headroom in Window 1
|   |-- 06-handoff-tissue.md          6 dimensions of creative tissue
|   |-- 07-tc-comparison.md           TC skill vs pipeline TC derivation
|   |-- 08-adversarial.md             12 challenges to every assumption
|   |-- 09-timeline.md               23 decisions, 6 critical drifts
|   |-- 10-pipeline-remnant-audit.md  6 CRITICAL remnants in current SKILL.md
|   '-- 11-blind-spot-analysis.md     Cross-agent contradictions and blind spots
|
|-- _window-design/                    <-- The architecture
|   |-- 12-window-1-design.md         TC Derivation window
|   |-- 12a-window-1-corpus-strategy.md  Why W1 should NOT load creative corpus
|   |-- 13-window-2-design.md         Builder window design
|   |-- 14-window-3-4-design.md       Evaluation + Refinement
|   '-- 15-handoff-protocol.md        Inter-window handoff protocol
|
|-- _corpus-ingestion/                 <-- Raw file distribution (NOT extraction)
|   |-- *-distribution-map.md         Which raw files route to which windows
|   '-- *-digest.md                   [DEPRECATED] Extraction anti-pattern examples
|
'-- _relay-chain/                      <-- Meta-analysis and audit
    '-- 04-conviction-audit.md        Cross-file conviction scoring (this refactoring)
```
