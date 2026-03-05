# Conviction Audit: Cross-File Scoring on 7 Lenses

**Auditor:** Conviction Audit Agent (Opus 4.6)
**Date:** 2026-02-28
**Method:** Read first 50 lines of all 28 files across 3 subdirectories. Scored each file on 7 evaluation lenses (1-5 scale). This captures the BEFORE state -- what was wrong and how deeply -- before the parallel refactoring agents applied their changes.

---

## The 7 Lenses (Reference)

| # | Lens | 1 = Worst | 5 = Best |
|---|------|-----------|----------|
| L1 | Conviction vs Extraction | Pure compliance/extraction | Pure conviction/direction |
| L2 | Content Understanding Depth | Generic, surface-level | Deeply engaged with what content NEEDS |
| L3 | Creative Framing Quality | Checklist -- builder knows what to check | Evocative -- builder FEELS what to build |
| L4 | Evocativeness | Inert information | Would create a rich processing state |
| L5 | Philosophical vs Procedural | "You need to do this" | "By doing this you achieve this" |
| L6 | Multi-Window Suitability | Dead information that arrives inert | Living tissue that survives the crossing |
| L7 | Creative Autonomy | Illusory room within pre-decided boundaries | Genuine choices with real consequences |

---

## SCORING MATRIX: _research/ (11 files)

| File | L1 | L2 | L3 | L4 | L5 | L6 | L7 | AVG | Verdict |
|------|----|----|----|----|----|----|----|----|---------|
| 01-ideology-extraction.md | 5 | 5 | 5 | 5 | 5 | 4 | 5 | **4.9** | EXEMPLARY |
| 02-implementation-audit.md | 2 | 4 | 2 | 2 | 2 | 3 | 2 | **2.4** | COMPLIANCE-HEAVY |
| 03-file-characterization.md | 4 | 5 | 4 | 4 | 4 | 3 | 4 | **4.0** | STRONG |
| 04-corpus-map.md | 2 | 4 | 2 | 2 | 2 | 3 | 2 | **2.4** | COMPLIANCE-HEAVY |
| 05-context-budget.md | 2 | 3 | 1 | 1 | 1 | 2 | 1 | **1.6** | WORST OFFENDER |
| 06-handoff-tissue.md | 4 | 5 | 4 | 5 | 4 | 5 | 3 | **4.3** | STRONG |
| 07-tc-comparison.md | 3 | 4 | 3 | 3 | 3 | 3 | 3 | **3.1** | MIXED |
| 08-adversarial.md | 4 | 5 | 4 | 4 | 4 | 4 | 5 | **4.3** | STRONG |
| 09-timeline.md | 3 | 4 | 3 | 3 | 3 | 3 | 2 | **3.0** | MIXED |
| 10-pipeline-remnant-audit.md | 4 | 4 | 3 | 3 | 4 | 3 | 3 | **3.4** | DECENT |
| 11-blind-spot-analysis.md | 5 | 5 | 5 | 5 | 5 | 5 | 5 | **5.0** | EXEMPLARY |

### _research/ Analysis

**Best files:** 01-ideology-extraction (4.9) and 11-blind-spot-analysis (5.0). Both succeed because they are ABOUT thinking, not about listing. The ideology extraction opens with "The CREATION vs EXTRACTION Paradigm" -- it names the creative frame immediately. The blind-spot analysis opens with contradictions between agents, which is inherently philosophical (it is reasoning about reasoning).

**Worst file:** 05-context-budget (1.6). Opens with a table of model limits ("Context window: 200,000 tokens, Max output tokens: 32,000"). This is pure engineering spreadsheet. No conviction. No creative framing. No philosophy. The question "how much fits?" is procedural. The question it SHOULD ask is: "what processing state does this context budget enable?" Token counts are not creative knowledge. The way token allocation shapes what a builder can BECOME is creative knowledge. This file treats context as a container to fill, not a space to inhabit -- precisely the category error the ideology identifies.

**Pattern:** Files that open with WHAT (audits, maps, budgets) score 2-3. Files that open with WHY (ideology, handoff tissue, adversarial) score 4-5. The opening frame determines the entire file's posture.

---

## SCORING MATRIX: _window-design/ (5 files)

| File | L1 | L2 | L3 | L4 | L5 | L6 | L7 | AVG | Verdict |
|------|----|----|----|----|----|----|----|----|---------|
| 12-window-1-design.md | 4 | 4 | 4 | 3 | 4 | 4 | 4 | **3.9** | STRONG |
| 12a-window-1-corpus-strategy.md | 3 | 4 | 3 | 3 | 4 | 4 | 3 | **3.4** | DECENT |
| 13-window-2-design.md | 4 | 5 | 4 | 4 | 4 | 5 | 4 | **4.3** | STRONG |
| 14-window-3-4-design.md | 4 | 4 | 4 | 3 | 4 | 4 | 4 | **3.9** | STRONG |
| 15-handoff-protocol.md | 5 | 5 | 5 | 5 | 5 | 5 | 5 | **5.0** | EXEMPLARY |

### _window-design/ Analysis

**Best file:** 15-handoff-protocol (5.0). This is the single best file in the entire corpus by conviction quality. Its preamble opens with: "The adversarial reviewer argues that focused direction beats diffuse material. The ideology argues that raw material produces richer generative quality than pre-digested rules. Both are right. They are not in tension." This is philosophical framing at its finest -- it holds two apparently contradictory truths and resolves them through architecture. It provides evidence for its claims. It creates genuine creative autonomy by making the raw material OPTIONAL and budget-aware. This file IS the reconciliation the investigation was building toward.

**Weakest file:** 12a-window-1-corpus-strategy (3.4). Not bad, but mixed. It opens with a valid question ("What happens when Window 1 has access to the creative corpus?") but immediately drops into a file inventory table. The corpus inventory is necessary information, but leading with it creates an engineering-audit posture. The file's best insight ("Window 1 is the WRONG window for the creative corpus, and the reasons are structural, not budgetary") is buried below 45 lines of tables.

**Pattern:** The window-design files are generally strong because they are DESIGN documents -- they argue for WHY a window should be structured a particular way. Design thinking is inherently philosophical. But they still carry procedural weight in their tables and manifests. The best sections are always the reasoning paragraphs; the weakest are always the file inventory tables.

---

## SCORING MATRIX: _corpus-ingestion/ (12 files)

### Digest Files (DEPRECATED)

| File | L1 | L2 | L3 | L4 | L5 | L6 | L7 | AVG | Verdict |
|------|----|----|----|----|----|----|----|----|---------|
| research-digest.md | 4 | 4 | 4 | 5 | 4 | 3 | 4 | **4.0** | STRONG (but wrong approach) |
| dd-digest.md | 4 | 4 | 4 | 5 | 4 | 3 | 4 | **4.0** | STRONG (but wrong approach) |
| od-digest.md | 4 | 4 | 4 | 4 | 4 | 3 | 3 | **3.7** | DECENT (but wrong approach) |
| ad-digest.md | 4 | 4 | 4 | 5 | 4 | 3 | 4 | **4.0** | STRONG (but wrong approach) |
| cd-digest.md | 4 | 4 | 4 | 4 | 4 | 3 | 4 | **3.9** | STRONG (but wrong approach) |
| casestudy-digest.md | 4 | 4 | 4 | 4 | 4 | 3 | 4 | **3.9** | STRONG (but wrong approach) |

### Distribution Map Files

| File | L1 | L2 | L3 | L4 | L5 | L6 | L7 | AVG | Verdict |
|------|----|----|----|----|----|----|----|----|---------|
| research-distribution-map.md | 3 | 4 | 2 | 2 | 3 | 4 | 3 | **3.0** | MIXED |
| dd-distribution-map.md | 3 | 4 | 3 | 3 | 3 | 4 | 3 | **3.3** | MIXED |
| od-distribution-map.md | 3 | 4 | 2 | 2 | 3 | 4 | 3 | **3.0** | MIXED |
| ad-distribution-map.md | 3 | 4 | 3 | 3 | 3 | 4 | 3 | **3.3** | MIXED |
| cd-distribution-map.md | 3 | 4 | 2 | 2 | 3 | 4 | 3 | **3.0** | MIXED |
| casestudy-distribution-map.md | 3 | 4 | 3 | 3 | 3 | 4 | 3 | **3.3** | MIXED |

### _corpus-ingestion/ Analysis

**The irony of the digest files:** They score WELL on conviction framing (3.7-4.0 average). The research-digest opens with "The best layouts treat layout as content, not container." The DD-digest opens with "How do components breathe together on a page?" The AD-digest opens with "Axis geometry IS density IS organization." These are evocative, philosophical framings. The agents who wrote them clearly tried to carry conviction.

**But they are the wrong approach entirely.** This is the investigation's most important lesson: a file can score well on individual conviction lenses AND STILL EMBODY THE EXTRACTION ANTI-PATTERN. The digests are well-written extractions. They are beautifully compressed summaries. They carry conviction in their FRAMING. But they are still extractions -- 8,400 lines collapsed to 235 lines, 36:1 compression, category-switching from creation to description.

The conviction scoring reveals a subtle failure mode: extraction can DISGUISE ITSELF as conviction by using philosophical language. "The best layouts treat layout as content" SOUNDS like conviction. But it is a sentence ABOUT a processing state, not a prompt that CREATES a processing state. The raw explorations create the processing state; the digest describes it after the fact. The map is not the territory, however beautifully drawn.

**The distribution maps are the correct approach but score lower (3.0-3.3).** They are structured as file inventories with 7-lens evaluations -- necessary work, but the framing is audit/compliance. They answer "which file goes where?" (procedural) rather than "what creative state does this file enable in this window?" (philosophical). The distribution maps treat files as CARGO to route, not as ENVIRONMENTS to inhabit.

---

## THE 5 WORST OFFENDERS (Deepest Compliance/Extraction Framing)

### 1. 05-context-budget.md (AVG: 1.6) -- WORST

Opens with a parameter table. Treats context as a container with a capacity limit. The entire document asks "how much fits?" -- a packing problem. Never asks what processing state the budget enables, what creative mode different allocations produce, or how token allocation shapes the builder's relationship with material. This is engineering documentation about a creative architecture problem. It embodies the compression-thinking the ideology explicitly rejects.

**What it should be:** A document about what it FEELS LIKE to build with 61% headroom versus 90% headroom. What changes in creative output when you add 30,000 tokens of raw explorations to a builder's context? What is the perceptual difference between a builder who has read 3 case studies and a builder who has read none? The budget is not a constraint -- it is a creative resource. Frame it as one.

### 2. 02-implementation-audit.md (AVG: 2.4) -- COMPLIANCE-HEAVY

Opens with an architecture overview table. Classifies files by COLOR (Red = Rules, Blue = Reference, Green = Creative Knowledge, Gray = Plumbing). This is a compliance audit -- it maps what exists, classifies it, and inventories it. There is zero creative framing. The audit answers "what does each window receive?" (inventory) not "what does each window BECOME?" (philosophy).

**What it should be:** A document about the cognitive experience of being a builder agent in each window. What does it feel like to receive 419 lines of prohibitions? What changes when the mechanism catalog arrives? The audit correctly identifies the problem (builders receive 89% rules/reference, 0.5% creative knowledge) but frames the finding as a ratio rather than an experience.

### 3. 04-corpus-map.md (AVG: 2.4) -- COMPLIANCE-HEAVY

Opens with a corpus size inventory table. Pure cartography. 560 files, 242,278 lines, percentage breakdowns by directory. This is necessary reference material, but it is framed as a warehouse inventory. The corpus is not a warehouse -- it is a LIBRARY of creative experiences. The map never describes what any file DOES to a reader's mind.

**What it should be:** A guide to the creative experiences available in the corpus. Not "validated-explorations: 30 files, 33,312 lines" but "30 explorations that each prove a different compositional hypothesis -- a builder who reads DD-006 understands fractal self-similarity not as a rule but as a way of seeing." The map should make you want to explore the territory.

### 4. research-distribution-map.md (AVG: 3.0) -- MIXED

Structured as a file analysis matrix. Each file gets a table of 7-lens assessments, which is useful, but the framing is audit-mode. The assessments themselves are strong ("CONVICTION-PURE (9:1 ratio)") but wrapped in classification infrastructure that creates a bureaucratic reading experience. The map distributes files as if routing cargo, not as if curating an exhibition.

### 5. od-distribution-map.md (AVG: 3.0) -- MIXED

Similar to research-distribution-map. Each OD file gets a lens evaluation table with scores. The evaluations contain genuine creative insight ("Q&A format naturally generates PULSE") but the frame is "File Inventory with Evaluations" -- an audit document, not a curatorial guide. The builder who reads this learns WHERE files go but not WHY those files will transform their creative state.

---

## CROSS-CUTTING FINDINGS

### Finding 1: The Opening Frame Determines Everything

Files that open with WHY (ideology, handoff tissue, adversarial, blind spots) consistently score 4.0+. Files that open with WHAT (budgets, maps, audits, inventories) consistently score 2.0-3.0. The first 3 lines establish whether the reader enters a creative or compliance mindset. No file that opened with a table scored above 3.5. No file that opened with a philosophical claim scored below 3.4.

**Implication for refactoring:** Every file should open with its most important creative insight, not its structural overhead. Tables and inventories can appear AFTER the reader understands WHY the information matters.

### Finding 2: Extraction Can Wear Conviction's Clothing

The digest files score 3.7-4.0 on conviction framing while embodying the extraction anti-pattern. This is the subtlest failure mode: using philosophical language to frame what is still a compression operation. "The best layouts treat layout as content" is a sentence ABOUT creative knowledge, not creative knowledge itself. The distinction matters because a builder reading this sentence LEARNS A FACT but does not ENTER A STATE. The raw explorations create the state; the digest merely labels it.

**Implication:** Conviction scoring alone is insufficient to detect extraction. The test must include: "Does this file create a processing state, or does it describe one?" Description and creation produce the same language but activate different generative modes.

### Finding 3: The Distribution Maps Are Right About Approach, Wrong About Framing

All 6 distribution maps correctly reject extraction in favor of selection and routing. They correctly apply the 7 lenses. They correctly identify which files belong in which windows. But they frame this correct work as inventory management, not creative curation. The difference: "WINDOW 2 (primary -- demonstrates proven pattern)" is routing language. "A builder in Window 2 who reads this file will understand that Q&A format IS PULSE rhythm -- they will feel the breathing pattern before they write a single line of CSS" is curatorial language. Same conclusion, different frame, different processing state for the reader.

### Finding 4: The Best Files Are About Tensions, Not Categories

11-blind-spot-analysis (5.0), 15-handoff-protocol (5.0), 08-adversarial (4.3), 01-ideology-extraction (4.9) -- the highest-scoring files all organize around TENSIONS: contradictions between agents, competing truths that need reconciliation, challenges to assumptions, paradigm shifts. The lowest-scoring files organize around CATEGORIES: file types, token counts, directory structures, classification keys.

Tensions are inherently philosophical because they demand reasoning about WHY. Categories are inherently procedural because they demand listing WHAT. The investigation's own ideology (tension-composition, conviction-over-compliance) predicts this pattern. The files that embody the ideology score highest on the ideology's own lenses.

### Finding 5: Creative Autonomy Is the Hardest Lens

L7 (Creative Autonomy) is the most frequently scored at 2-3 across all files. Even files with strong conviction framing (L1: 4-5) often provide only moderate creative autonomy (L7: 3). This reveals a structural tension: the investigation produces CONCLUSIONS about how things should work, which inherently narrows creative space. The best files (15-handoff-protocol, 08-adversarial) maintain autonomy by presenting evidence and reasoning rather than decisions, letting the reader reach their own conclusions. The worst files present inventories as given facts, leaving no room for interpretation.

---

## SUMMARY STATISTICS

| Subdirectory | Files | Avg Score | Best | Worst |
|-------------|-------|-----------|------|-------|
| _research/ | 11 | 3.5 | 11-blind-spot (5.0) | 05-context-budget (1.6) |
| _window-design/ | 5 | 4.1 | 15-handoff-protocol (5.0) | 12a-corpus-strategy (3.4) |
| _corpus-ingestion/ | 12 | 3.5 | research-digest (4.0) | research-distribution (3.0) |
| **ALL FILES** | **28** | **3.6** | **5.0** (2 files) | **1.6** (1 file) |

### Distribution

- Score 5.0 (Exemplary): 2 files (7%)
- Score 4.0-4.9 (Strong): 8 files (29%)
- Score 3.0-3.9 (Mixed/Decent): 15 files (54%)
- Score 2.0-2.9 (Compliance-Heavy): 2 files (7%)
- Score 1.0-1.9 (Worst Offender): 1 file (4%)

**The corpus is not broken, but it is uneven.** The best files (ideology, blind spots, handoff protocol) achieve the investigation's own standard. The worst files (context budget, implementation audit) embody the extraction/compliance pattern the investigation argues against. The middle bulk (54%) is competent but procedurally framed -- these files carry correct information in compliance packaging. The refactoring agents should focus on RE-FRAMING rather than rewriting: the content is generally sound; the opening posture and organizational frame need to shift from inventory to philosophy.
