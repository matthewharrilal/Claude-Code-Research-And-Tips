# Prose Clarity & Digestibility Audit

**File:** `ephemeral/pipeline-guide/PIPELINE-V2-IMPLEMENTATION-GUIDE.html`
**Lines:** 1,927
**Auditor:** Opus readability agent
**Date:** 2026-02-19

---

## Executive Summary

The guide's prose is **strong overall** -- confident, direct, and well-structured for its purpose. The narrative storytelling voice lands well in the introductory sections and the failure analysis (Section 9). The "no-compromise" philosophy gives the writing genuine conviction.

However, there are **meaningful readability problems**:

1. **Repetition is the dominant issue.** The same data points (CD-006 = 39/40, Flagship = 1.5/4, 963-line prompt, "same agent plans AND builds") appear 5-10 times each across the document, often verbatim. This dilutes impact and makes the guide feel longer than it needs to be.
2. **Jargon front-loading.** Terms like "multi-coherence," "fractal echo table," "anti-scale model," and "L1-L5" appear before they are defined, then get defined later, then get re-explained. The guide assumes familiarity in some passages and assumes ignorance in others.
3. **Sentence length varies wildly.** Some sections use clipped, punchy sentences effectively (Section 9 failure headers). Others pack 3-4 clauses into single sentences that require re-reading.
4. **The guide has two audiences and doesn't quite serve either.** It reads partly as a narrative for a human decision-maker and partly as a reference spec for an agent. The narrative voice occasionally drops into spec language ("~660 lines (was ~1,930)") mid-paragraph.

**Verdict:** Needs a focused editing pass for repetition removal and consistent audience targeting. The bones are excellent; the prose needs tightening.

---

## Passage-by-Passage Analysis

### 1. "You Are Here" Box (lines 367-372)

**Quoted:**
> Pipeline v2 is the next-generation build pipeline for the KortAI design system. It replaces the failed multi-agent linear pipeline (19 agents, 11 boundary crossings, PA-05 1.5/4) with something better -- but what that something is hasn't been decided yet. That's what the experiments determine.

**Problem:** Strong opening sentence, but the parenthetical "(19 agents, 11 boundary crossings, PA-05 1.5/4)" is jargon-heavy for the very first paragraph a reader encounters. PA-05 is not yet defined. "Boundary crossings" is a term that gets explained much later.

**Suggested rewrite:**
> Pipeline v2 is the next-generation build pipeline for the KortAI design system. It replaces the failed multi-agent pipeline -- which scored 1.5 out of 4 on perceptual quality -- with something better. But *what* that something is hasn't been decided yet. That's what the experiments determine.

### 2. "You Are Here" -- third paragraph (line 370)

**Quoted:**
> This guide follows the no-compromise philosophy: run all 5 experiments, then build whatever wins, with maximum everything. Cost is irrelevant. Effort is irrelevant. The only thing that matters is that it works and doesn't buckle under its own weight.

**Assessment:** This is **excellent prose**. Punchy, clear, emotionally resonant. The sentence rhythm (short-short-long) is effective. No changes needed.

### 3. "You Are Here" -- fourth paragraph (line 371)

**Quoted:**
> It is the distillation of 50+ research agents, 41 analysis files, and months of experimentation into one document.

**Problem:** "50+ research agents" is insider language. A reader might picture 50 humans. "Months of experimentation" is vague -- the project timeline is well-documented, so precision would serve better.

**Suggested rewrite:**
> It distills the output of 50+ AI research agents, 41 analysis files, and five months of experimentation into one document.

### 4. The No-Compromise Principle Box (lines 376-380)

**Quoted:**
> Every shortcut in this project has cost more than doing it right. The Flagship was the most expensive, most carefully planned build -- 19 agents, 530-line prompt, 7 phases -- and it scored 1.5/4. Meanwhile CD-006, one Opus agent with minimal guidance, scored 39/40.

**Assessment:** This paragraph is **the best writing in the document**. Clear contrast structure. Concrete numbers. The punchline lands. This is the voice the whole guide should aspire to.

**Quoted (same box):**
> No line caps on builder input if the experiments show the builder needs more. If it takes 50 agents to produce one perfect page, so be it.

**Problem:** Minor -- "No line caps on builder input" is jargon. The phrase reads like an internal design decision leaked into narrative prose. General readers won't know what "line caps on builder input" means.

**Suggested rewrite:**
> No artificial limits on what the builder can read, if experiments show it needs more. If it takes 50 agents to produce one perfect page, so be it.

### 5. Section 1 -- Opening paragraph (line 793)

**Quoted:**
> The design system has been through five exploration stages, a full extraction into a six-layer ontology, a validation experiment, a tier-model investigation, a Middle-tier experiment that succeeded, a Ceiling experiment that succeeded on novelty but failed on richness, a Flagship experiment that failed harder, and months of retrospective analysis that diagnosed exactly why.

**Problem:** This is a **92-word single sentence** listing 8 items in series. By the time the reader reaches "a Flagship experiment that failed harder," they've lost the thread of the grammatical structure. The sentence tries to compress the entire project history into one breath.

**Suggested rewrite:**
> The design system has been through five exploration stages, a full extraction into a six-layer ontology, and three major validation experiments. The Middle-tier experiment succeeded. The Ceiling experiment succeeded on novelty but failed on richness. The Flagship experiment failed hardest. Months of retrospective analysis diagnosed exactly *why* each result happened.

### 6. Tension-Composition Skill description (lines 800-802)

**Quoted:**
> Phase 0 assesses content type and tier. Phases 1-3 are the creative core -- multi-axis questioning, tension derivation, and metaphor collapse. Phase 4 extracts mechanisms. Phase 5 checks case studies. Phases 6-7 implement and verify.

**Problem:** "Multi-axis questioning, tension derivation, and metaphor collapse" are three undefined technical terms in a row. A reader encountering this for the first time has no mental model for what "metaphor collapse" means.

**Suggested rewrite:**
> Phase 0 classifies the content. Phases 1-3 are the creative core -- questioning what the content *needs*, discovering the tension between content and design constraints, then collapsing that tension into a single governing metaphor. Phase 4 selects CSS mechanisms. Phase 5 checks case studies. Phases 6-7 build and verify.

### 7. "Where Intelligence Goes to Die" header (line 873)

**Assessment:** This is a **strong section header**. Vivid, memorable, narrative. Sets the right tone for the failure analysis. No change needed.

### 8. Boundary 3 description (lines 874-876)

**Quoted:**
> Compression ratio: ~20:1. Intelligence survival: ~35%.

**Problem:** These stat fragments are dropped without connection to the preceding prose. They read like data annotations rather than narrative. The preceding paragraph establishes the story well; these bare numbers break the voice.

**Suggested rewrite:**
> The compression ratio was roughly 20:1. Only about 35% of the planner's compositional intelligence survived the handoff.

### 9. Fat Core Principle (lines 878-880)

**Quoted:**
> This is the architecture of a studio, not a factory. One artist. Many critics.

**Assessment:** **Excellent.** The metaphor lands immediately. Short, vivid, memorable. This is the single best sentence in the guide.

### 10. "The 12 Agents" code block (lines 884-903)

**Problem:** This mixes narrative description with code-block formatting. The content is prose (sentences, paragraphs), but it's displayed in monospace with code-block styling. This creates a genre confusion -- the reader expects executable or structured data but gets expository text. The copy button further reinforces "this is code."

**Suggested rewrite:** Convert to a styled HTML list or card layout instead of a code block. Reserve code blocks for actual code, file paths, or command sequences.

### 11. Section 3 opening (line 959)

**Quoted:**
> Pipeline v2 requires 6 new files. Not 40, not 20 -- six. Each exists because something went wrong before and this file prevents it from happening again.

**Assessment:** **Strong.** The "Not 40, not 20 -- six" is effective emphasis. The second sentence is clear and purposeful.

### 12. File 1 description (lines 974-976)

**Quoted:**
> When you type /build-page my-content.md, this file wakes up. It is the single entry point for every page build. It reads content, classifies tier, selects agent architecture, routes files to the builder, runs gates, pre-captures screenshots, spawns PA auditors, manages fix cycles, and delivers the result.

**Problem:** The second sentence lists 8 actions in a single comma-separated run. Same overloaded-list issue as the Section 1 opener.

**Suggested rewrite:**
> When you type `/build-page my-content.md`, this file wakes up. It's the single entry point for every page build -- reading content, classifying tier, routing files to the builder, running quality gates, and managing the PA audit cycle through to delivery.

### 13. Section 5 opening (lines 1153-1155)

**Quoted:**
> The gate system verifies ~70% of quality that can be measured by code. The remaining ~30% -- "does this feel designed?" -- belongs to the perceptual audit. Gates are necessary but not sufficient.
>
> Every gate exists because something went wrong in an actual experiment. They are scars.

**Assessment:** The first paragraph is clear and well-framed. "They are scars" is **vivid and effective** -- it contextualizes the gates emotionally. Strong writing.

### 14. SC-13 Multi-Coherence description (lines 1258-1259)

**Quoted:**
> Measures 6 channels per boundary: chromatic, typographic, spatial, structural, behavioral, material. Need >= 3 shifting. Cannot assess whether shifts are semantically coherent -- PA handles that.

**Problem:** "Need >= 3 shifting" is shorthand that breaks prose voice. It reads like a spec annotation, not a sentence.

**Suggested rewrite:**
> Measures 6 channels at each boundary: chromatic, typographic, spatial, structural, behavioral, material. At least 3 must shift. However, the gate cannot assess *whether* those shifts are semantically coherent -- that's what PA handles.

### 15. Experiment section framing (lines 1401-1404)

**Quoted:**
> These experiments are not optional. They are Step 1. Everything described in Sections 2-6 is what we expect to build. The experiments determine what we actually build. The PV2 diagram specifies 5 experiments (labeled E/D/A/B/C). This guide relabels them A through E for clarity. Cheapest first.

**Problem:** The parenthetical "(labeled E/D/A/B/C)" is a meta-reference that interrupts the narrative momentum. This is an internal bookkeeping note that doesn't serve the reader.

**Suggested rewrite:**
> These experiments are not optional. They are Step 1. Everything in Sections 2-6 describes what we *expect* to build. The experiments determine what we *actually* build. Five experiments, ordered cheapest first.

### 16. Experiment B description (lines 1457-1459)

**Quoted:**
> Tests the most radical question: does any pipeline infrastructure help at all, or is the conventions brief enough?
>
> Why run it: If B >= 3.0/4, the entire orchestrator and gate infrastructure is unnecessary. This is the best possible outcome -- maximum quality with minimum complexity.

**Assessment:** **Clear and compelling.** The framing of "best possible outcome" gives the reader emotional stakes. No change needed.

### 17. Section 9 -- Failure headers pattern

**Assessment:** The Failure 1-9 structure is **the strongest section of the document.** Each follows: "What happened (concrete). How Fat Core prevents it (concrete)." This is exactly the right pattern -- narrative cause-and-effect with specific evidence. If the entire guide maintained this voice, it would be significantly more readable.

### 18. "What Comes After" section (lines 1849-1902)

**Problem:** This section shifts from the confident "no-compromise" voice to a more conventional project-plan voice. Phrases like "Estimated: 2-4 weeks with parallel execution" and "Estimated: 4-8 weeks at 2-3 pages per day" are time estimates that feel out of place in a document whose philosophy is "cost is irrelevant, effort is irrelevant."

**Suggested approach:** Either commit to the no-compromise voice ("We build every Track 2 page sequentially, because shortcuts produce flat output") or flag this section explicitly as a practical planning addendum with different rules.

---

## Jargon Inventory

Terms used without adequate prior definition at point of first use:

| Term | First Used | First Defined | Gap |
|------|-----------|---------------|-----|
| PA-05 | Line 368 (You Are Here) | Line 806 (Section 1) | ~440 lines |
| Multi-coherence | Line 544 (diagram) | Line 1258 (Section 5) | ~714 lines |
| Boundary crossings | Line 368 | Line 874 (Section 2) | ~506 lines |
| Fractal Echo Table | Line 426 (diagram) | Never fully defined | N/A |
| Transition Table | Line 426 (diagram) | Never fully defined | N/A |
| Anti-scale model | Line 534 (diagram) | Never fully defined | N/A |
| Mode 4 PA | Line 378 | Line 806 (PA skill description) | ~428 lines |
| TC / Tension-Composition | Line 424 (diagram) | Line 798 (Section 1) | ~374 lines |
| L1-L5 | Line 528 (diagram) | Line 528-570 (diagram itself) | Defined in diagram but not in prose |
| Fat Core | Title/subtitle area | Line 878 (Section 2) | ~500+ lines |
| Soul properties | Line 378 | Line 823 (Layer 1 expandable) | ~445 lines |
| Build recipe | Line 426 | Line 875 (Section 2) | ~449 lines |
| Weaver | Line 901 | Line 901 (Section 2) | Inline, OK |
| Phase-locked gates | Line 906 | Line 906 (Section 2) | Inline, OK |

**Recommendation:** Add a 10-15 line glossary box immediately after the Table of Contents. The guide uses ~20 domain-specific terms. A glossary would eliminate most of the "used before defined" problems without restructuring.

---

## Repetition Instances

These are the most frequently repeated data points and phrasings:

### 1. "CD-006 scored 39/40" -- 4 occurrences
- Line 377: "CD-006, one Opus agent with minimal guidance, scored 39/40"
- Line 834: "scored 39/40"
- Line 863: "~4/4 (39/40)"
- Line 876: "That is why it scored 39/40"

**Impact:** Effective the first 2 times, diminishing after. By the 4th occurrence, it reads like a broken record.

### 2. "Flagship scored 1.5/4" -- 6 occurrences
- Line 368: "PA-05 1.5/4"
- Line 377: "scored 1.5/4"
- Line 867: "1.5/4"
- Line 1020: implied
- Line 1632: "PA-05 1.5/4"
- Line 1663: "1.5/4"

**Impact:** Central data point, warrants repetition, but 6 times is excessive. The first 3 establish the fact; occurrences 4-6 feel like padding.

### 3. "Same agent plans AND builds" -- 5 occurrences
- Line 879: "One Opus agent that both plans AND builds"
- Line 889: "Plans AND builds in one continuous session"
- Line 937: "Same agent / Separate agents"
- Line 1304: "single Opus, plans AND builds"
- Line 1644: "Same agent plans AND builds"

**Impact:** This is the core thesis of Fat Core, so repetition is somewhat warranted. But the exact phrasing "plans AND builds" with the capitalized AND appears 4 times. Vary the expression: "a single creative mind," "one continuous session," "no handoff."

### 4. "963-line prompt" -- 3 occurrences
- Line 981: "not 963 lines of compressed intelligence"
- Line 1020: "963-line master prompt"
- Line 1635: "963-line prompt"

### 5. "9 fresh-eyes auditors" -- 5 occurrences
- Lines 378, 488, 897, 1331, 1390

### 6. "Zero compression / Zero handoff" -- 3 occurrences
- Line 876-877: "Zero compression. Zero handoff."
- Line 1656: "Cannot fail to communicate with itself"
- Line 1660: "ZERO destructive"

### 7. Evidence table (CD-006 / Middle / Remediation / Flagship) -- appears ~3 times
- Lines 862-867 (Section 2 table)
- Lines 935-944 (Section 2 comparison table)
- Scattered throughout Section 9

**Recommendation:** Present the evidence table ONCE with full detail, then reference it by section number. Replace subsequent occurrences with forward/back references: "As the evidence table in Section 2 shows..."

---

## Tone Consistency Issues

### 1. Narrative vs. Spec Voice Switching

The guide oscillates between two voices:

**Narrative voice** (dominant, effective):
> "This is the architecture of a studio, not a factory. One artist. Many critics."

**Spec voice** (intrusive):
> "~660 lines (was ~1,930). 30-60 min."

These appear side-by-side in the same sections, sometimes in the same paragraph. The visual overview diagrams are the worst offenders -- they contain prose-length descriptions in spec shorthand.

**Recommendation:** Commit to narrative voice in body text. Move spec data (line counts, timing estimates, file sizes) into tables or info boxes where spec voice is expected.

### 2. Emotional Intensity Calibration

The "no-compromise" philosophy is stated 3 times:
- Line 370: "no-compromise philosophy"
- Line 376: "The No-Compromise Principle" (full box)
- Line 1843: footer tagline

This is appropriate for a philosophy statement. However, the intensity drops in Sections 3-6 (which read more like conventional technical docs) and then spikes again in Section 9 (failure analysis). The emotional arc is: HIGH - medium - low - low - low - HIGH - medium. A more consistent modulation would serve better.

### 3. The "You" Problem

The guide sometimes addresses "you" directly:
- "You type /build-page content.md" (line 1292)
- "You now understand the Fat Core architecture" (line 949, checkpoint)
- "You now have the full picture" (line 1706, checkpoint)

But other times it uses impersonal or third-person:
- "The design system has been through..." (line 793)
- "Architecture without validation is expensive fiction" (line 1404)

**Recommendation:** Consistently use "you" for instructions/checkpoints and impersonal voice for analysis/evidence. The current mixing is not severe but could be tightened.

---

## Top 10 Specific Rewrite Recommendations

### 1. Add a Glossary Box After the Table of Contents

Insert 15-20 key terms with one-line definitions. Eliminates the "used before defined" problem for PA-05, multi-coherence, Fat Core, TC, boundary crossings, L1-L5, Mode 4 PA, soul properties, etc.

### 2. Rewrite Section 1 Opening Sentence

**Current (92 words, 1 sentence):**
> The design system has been through five exploration stages, a full extraction into a six-layer ontology, a validation experiment, a tier-model investigation, a Middle-tier experiment that succeeded, a Ceiling experiment that succeeded on novelty but failed on richness, a Flagship experiment that failed harder, and months of retrospective analysis that diagnosed exactly why.

**Proposed (4 sentences, same information):**
> The design system has been through five exploration stages and a full extraction into a six-layer ontology. Three major experiments followed: the Middle-tier (succeeded), the Ceiling (succeeded on novelty, failed on richness), and the Flagship (failed hardest). Months of retrospective analysis diagnosed exactly *why* each result happened. The result is a rich, validated body of material.

### 3. Remove 2-3 Repetitions of the CD-006/Flagship Comparison

Keep the evidence table in Section 2 and the full explanation in Section 9. Remove or condense the other 2-3 occurrences to back-references: "the inverse quality pattern established in Section 2."

### 4. Vary "Same Agent Plans AND Builds" Phrasing

Replace at least 2 of the 5 occurrences with variations:
- "one continuous creative session"
- "the planner IS the builder"
- "no handoff boundary"

### 5. Convert Agent Description Code Block to HTML Cards

The "12 Agents" section (lines 884-903) uses a code block for prose. Convert to styled cards or a structured list. Reserve code blocks for actual commands, file paths, and data.

### 6. Explain "Metaphor Collapse" on First Use

Line 801: "multi-axis questioning, tension derivation, and metaphor collapse" -- three undefined terms in a row. Define at least "metaphor collapse" inline: "collapsing multiple tensions into one governing visual metaphor."

### 7. Tighten the "What Comes After" Section

This section introduces a different voice (planning estimates, phase labels). Either:
- (a) Shorten it to 1/3 its current length and keep it as a brief forward-look, or
- (b) Mark it explicitly as an addendum with a different purpose

### 8. Remove the PV2 Diagram Cross-Reference Note

Line 1401: "The PV2 diagram specifies 5 experiments (labeled E/D/A/B/C). This guide relabels them A through E for clarity."

This is internal bookkeeping. The reader doesn't need to know about label mapping. Delete.

### 9. Consolidate Checkpoint Boxes

The four checkpoint boxes (Architecture, Gates, Build Flow, Complete Understanding) all follow the same pattern: "You now understand X." They are useful but could be tightened. The "Complete Understanding" checkpoint (line 1706) is especially redundant -- it just lists the sections the reader has already read.

**Proposed rewrite for the final checkpoint:**
> **Checkpoint: Ready to Execute.** You have the architecture, the files, the gates, the flow, the experiments, and the failure lessons. What remains is the master checklist below.

### 10. Fix Stat-Fragment Voice Breaks

Several passages drop into bare-stat voice mid-paragraph:

- "Compression ratio: ~20:1. Intelligence survival: ~35%." (line 875)
- "~660 lines (was ~1,930). 30-60 min." (line 426, diagram)
- "~400-line JavaScript module" (line 1025)

Convert these to full sentences or move them to structured data elements (tables, info boxes) where fragment voice is expected.

---

## Summary of Findings by Category

| Category | Issue Count | Severity |
|----------|------------|----------|
| Repetition | 7 major repeated data points | MODERATE -- dilutes impact |
| Jargon without definition | 13 terms used before defined | MODERATE -- blocks new readers |
| Sentence overloading | 3-4 sentences with 6+ clauses | LOW-MODERATE -- re-reading needed |
| Voice switching (narrative/spec) | ~10 instances | LOW-MODERATE -- disrupts flow |
| Tone inconsistency | Emotional arc drops in middle | LOW -- structural, not prose |
| Audience confusion | Dual-audience friction | LOW -- mostly works despite this |

**Overall prose quality: 7/10.** The writing has genuine voice and conviction. The failure analysis (Section 9) is the high-water mark. The main issues -- repetition and jargon front-loading -- are fixable with a single focused editing pass. The underlying structure is sound; the prose needs tightening, not restructuring.
