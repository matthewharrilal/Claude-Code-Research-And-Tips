# DRAFT: PA Questions + Tier 5 Section of Master Prompt

**Agent:** orchestrator-researcher (Opus 4.6)
**Date:** 2026-02-19
**Task:** #11 (part 1 of 2)
**Sources:** 03-pa-research.md (389 lines), 04-orchestrator-research.md (830 lines), 15-orchestrator-cross-ref.md (amendments)

---

## SECTION: FLAGSHIP PA QUESTIONS (flagship-pa-questions.md)

This is the complete reference file for Tier 5 perceptual audit questions. The orchestrator reads this file when deploying PA auditors.

---

### TIER 5 QUESTIONS: COMPOSITIONAL DEPTH (PA-60 through PA-67)

These 8 questions measure compositional depth ABOVE the PA-05 designed threshold. They distinguish Middle-tier (4/4 on PA-05 but "professionally stiff") from Flagship-tier (4/4 on PA-05 AND compositionally deep).

Asked in EVERY Mode 4 audit. No tier gating.

---

#### PA-60: Design Moment Density
**Assigned to:** Auditor F (Consistency+Rhythm)

Can you identify at least 3 distinct "design moments" -- places where the visual treatment does something unique that it does not repeat elsewhere on the page? Point to each.

**YES:** Auditor identifies >=3 moments, at least 2 in different scroll thirds, each using a unique combination of visual properties.
**NO:** Fewer than 3 moments, or concentrated in first third only, or just repeated component patterns.

---

#### PA-61: Multi-Voice Composition
**Assigned to:** Auditor F (Consistency+Rhythm)

Do different visual properties (weight, color, spacing, type) seem to have their own independent rhythms, or does everything shift at the same time?

**YES:** Auditor identifies >=2 visual properties with their own rhythm AND the independence feels deliberate.
**NO:** All properties shift at the same boundaries, or independence reads as inconsistency.

---

#### PA-62: Transition Variation
**Assigned to:** Auditor D (Flow+Pacing)

Find a section transition. Count how many visual properties change simultaneously. Is the result dramatic (3+ shifts) or quiet (1 shift)? Are there BOTH kinds?

**YES:** At least 1 dramatic boundary (3+ simultaneous changes) AND at least 1 quiet boundary (1-2 changes) AND dramatic ones are at more important content transitions.
**NO:** All transitions have similar visual weight, or dramatic/quiet placement does not correlate with content importance.

---

#### PA-63: Fractal Zoom Coherence
**Assigned to:** Auditor E (Grid+Layout)

Zoom into one component (a card, callout, table, or code block). Does its internal design echo the page's overall design language at a smaller scale? Then zoom back out -- is that relationship deliberate?

**YES:** Component's internal structure mirrors the page's overall design language AND the auditor can name the shared language.
**NO:** Components look generic (could belong to any page) or the relationship feels accidental.

---

#### PA-64: Restraint as Expression
**Assigned to:** Auditor C (Spatial+Proportion)

Is there a section that is DELIBERATELY plain -- simpler than surrounding sections in a way that makes the surrounding richness more noticeable? Can you tell the difference between "designed quiet" and "forgot to design this part"?

**YES:** At least 1 section is plainer than neighbors AND the plainness feels intentional AND surrounding sections feel richer by contrast.
**NO:** All sections have similar density, or plain sections feel like the designer ran out of ideas.

---

#### PA-65: Musical Analogy
**Assigned to:** Auditor A (Impression+Emotion)

If this page were a piece of music, would it be: (a) a single instrument playing one melody, (b) a choir singing in unison, (c) an ensemble with different parts?

**YES:** Auditor selects (c) "ensemble" AND names at least 2 visual "instruments" with their own rhythm.
**NO:** Auditor selects (a) or (b), or selects (c) but cannot name specific independent instruments.

---

#### PA-66: Negative Space Variety
**Assigned to:** Auditor C (Spatial+Proportion)

Look at the empty spaces between sections. Are they all the same "flavor" of emptiness, or do different gaps feel different from each other?

**YES:** At least 2 perceptibly different types of gaps AND the variety feels purposeful.
**NO:** All gaps feel interchangeable (same size, same background, same energy), or variety feels random.

---

#### PA-67: Novelty Beyond Competence
**Assigned to:** Auditor A (Impression+Emotion)

Does the page feel like it is doing something you have not seen before -- not just well-executed, but inventive? What specifically is novel?

**YES:** Auditor names a specific novel element, technique, or combination AND explains why it works.
**NO:** Page is well-executed but familiar, or surprising elements feel gimmicky.

---

### TIER 5 SCORING

**Per-question:** YES (with 2-3 sentence evidence) or NO (with reason).

**Aggregate thresholds:**
| YES Count | Label | Meaning |
|-----------|-------|---------|
| 7-8/8 | COMPOSED | Full compositional depth. Flagship target. |
| 5-6/8 | APPROACHING | Significant depth. 1-2 layers need strengthening. |
| 3-4/8 | STRUCTURED | Some intelligence visible. Multiple layers absent. |
| 0-2/8 | VOCABULARY ONLY | Mechanisms deployed but not composed. Middle-equivalent. |

---

### AUDITOR QUESTION ASSIGNMENTS (Complete, 56 Questions)

| Auditor | Role | Standard Questions | Tier 5 | Total |
|---------|------|-------------------|--------|-------|
| **A** | Impression+Emotion | PA-01, 04, 05, 18, 19, 20, 45 | PA-65, PA-67 | 9 |
| **B** | Readability+Typography | PA-02, 06, 07, 08, 29 | -- | 5 |
| **C** | Spatial+Proportion | PA-09, 10, 11, 30, 31, 32, 33, 50, 51, 52, 53 | PA-64, PA-66 | 13 |
| **D** | Flow+Pacing | PA-12, 13, 34, 35, 36 | PA-62 | 6 |
| **E** | Grid+Layout | PA-14, 15, 37, 38, 39 | PA-63 | 6 |
| **F** | Consistency+Rhythm | PA-16, 17, 40, 41 | PA-60, PA-61 | 6 |
| **G** | Metaphor+Ideology | PA-42, 43, 44 | -- | 3 |
| **H** | Responsive | PA-21, 22, 23, 46, 47 | -- | 5 |
| **I** | Adversarial | PA-26, 27, 28, 48 | -- | 4 |

**Total: 48 standard + 8 Tier 5 = 56 questions across 9 auditors.**

---

### SUCCESS BAR

| Score | Pass Threshold | Measures |
|-------|----------------|----------|
| PA-05 | >= 3.5/4 | "Is this DESIGNED?" |
| Tier 5 | >= 6/8 | "Is this Flagship-tier?" |
| Soul | zero violations | Identity integrity |

**Combined verdict:**
| PA-05 | Tier 5 | Verdict |
|-------|--------|---------|
| >= 3.5 | >= 6/8 | **SHIP** |
| >= 3.5 | 4-5/8 | **SHIP WITH RESERVATION** |
| >= 3.5 | 0-3/8 | **NOT FLAGSHIP** (rescope) |
| 3.0-3.4 | any | **FIX CYCLE** |
| < 3.0 | N/A | **REBUILD** |

---

**END OF PA QUESTIONS SECTION DRAFT**
