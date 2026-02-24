# PA PROTOCOL — Perceptual Audit Questions + Deployment Architecture
## Pipeline v3 Layer 7 Artifact
Date: 2026-02-23
Status: AUTHORITATIVE — conforms to council-verdict.md rulings

---

## COUNCIL VERDICT COMPLIANCE

This artifact incorporates the following authoritative rulings:
- **CF-02:** Compositional Critic removed as "primary emotional arc check." PA auditor is the PRIMARY quality check. (council-verdict.md Part 1, CF-02)
- **CF-04:** All PA-05 predictions carry "(hypothesis)" suffix. Evidence taxonomy applied. (council-verdict.md Part 1, CF-04)
- **Pattern 5:** 12 VALUES items rerouted from GATE-RUNNER to PA-AUDITOR. (council-verdict.md Part 2, Pattern 5, Category B)
- **Contradiction C:** Emotional arc assessed by PA auditor post-build, not gate-checked. Disposition-emotion links are DESIGN INTENTIONS, not guarantees. (council-verdict.md Part 3, Contradiction C)
- **CCS:** Tagged as RESEARCH CONSTRUCT, not operational metric. (council-verdict.md Part 2, Pattern 5)

---

## PART 1: PA-05 — THE CORE QUESTION

### 1.1 The Question

**PA-05: "Would you put your name on this? What would you fix first?"**
> Source: ITEM 23 (extract-d18-d20.md, VA L1408) — "Does it look DESIGNED?"
> Source: ITEM 22 (extract-d18-d20.md, VA L1406) — "PA-05 measures: PERCEIVED design quality"

This is the PRIMARY success metric for the entire pipeline. PA-05 measures perceived design quality — the gap between "passes rules" and "is good."

**What PA-05 captures** (ITEM 24, extract-d18-d20.md, VA L1409-1411):
- Vocabulary — does the page use its design language fluently?
- Restraint — does it know what NOT to use?
- Atmosphere — does it feel intentional?
- Content-form resonance — does form serve THIS content?
- Overall gestalt impression — first-look quality

### 1.2 PA-05 Sub-Criteria (ALL FOUR evaluated)

**1. DESIGNED** — Does this feel like intentional composition, or assembled components?
- Look for: multi-scale coherence, rhythm variation, focal points placed deliberately
- PASS: "A designer made choices for THIS content"
- FAIL: "Someone competent followed a template"

**2. COHERENT** — Does this feel like one designer made it, or vocabulary from multiple systems?
- Look for: consistent mechanism deployment, no dialect shifts, shared visual language throughout
- PASS: "Same design intent visible across entire page"
- FAIL: "Header looks different from body which looks different from footer"

**3. PROPORTIONATE (PA-05c)** — Does the spatial balance feel considered?
- Three mandatory sub-dimensions:
  - **3a. Horizontal Proportion:** Content fills 65-80% of viewport width. Margins confident, not wasteful.
  - **3b. Vertical Proportion:** Every third of the page has at least one designed moment or visual peak.
  - **3c. Breathing Proportion:** Empty space feels like silence in music (purposeful), not a dropped signal (accidental).
- ALL THREE sub-dimensions must PASS for PA-05c to PASS.

**4. POLISHED** — Is execution quality high?
- Look for: no missing elements (footer?), token compliance high, transitions typed (not uniform gaps), no stray artifacts
- PASS: "Ready to ship as-is"
- FAIL: "Needs cleanup before showing anyone"

### 1.3 PA-05 Scoring

| Sub-criteria passing | PA-05 Score | Verdict |
|---------------------|-------------|---------|
| 4/4 PASS | 4/4 | DESIGNED — ship-ready |
| 3/4 PASS | 3/4 | YES WITH RESERVATIONS (note failing criterion) |
| 2/4 or fewer | < 3/4 | NO — would not ship |

**CONDITIONAL PASS guidance:** If a sub-criterion technically passes but contains a shipping-blocking defect, treat it as CONDITIONAL PASS (not a clean PASS). Score PA-05 based on the number of clean passes, not conditional passes. Example: Gas Town Auditor A scored 3/4 despite all 4 sub-criteria technically passing — the trailing void made POLISHED a "pass with critical defect," which counts as conditional, reducing the effective score.

### 1.4 The 1-4 Scale: FLAT / ASSEMBLED / COMPOSED / DESIGNED

> Source: ITEM 27 (extract-d18-d20.md, VA L1412)

| Score | Label | Meaning |
|-------|-------|---------|
| 1/4 | FLAT | No perceptible design intent. Uniform treatment. |
| 2/4 | ASSEMBLED | Individual elements competent but not unified. Template quality. |
| 3/4 | COMPOSED | Unified design language. Intentional relationships visible. |
| 4/4 | DESIGNED | Every decision serves the content. Mechanisms in conversation. |

### 1.5 PA-05 as PRIMARY Success Metric

> Source: ITEM 36 (extract-d18-d20.md, VA L1449) — "PA-05 is PRIMARY success metric (user-facing quality)"

PA-05 is what the user sees. CCS is DIAGNOSTIC (explains WHY PA-05 is what it is, but CCS is a RESEARCH CONSTRUCT — do not operationalize until methodology standardized per council ruling).

**Relationship to CCS** (ITEM 21, extract-d18-d20.md, VA L1401-1402):
- CCS != PA-05 — they measure DIFFERENT properties
- PA-05 measures PERCEIVED design quality
- CCS measures MECHANISM INTERDEPENDENCE
- A page can score PA-05 4/4 at CCS 0.15 (Middle — vocabulary alone)
- Flagship requires BOTH PA-05 >= 3.5 AND high compositional depth

> Source: ITEM 20 (extract-d18-d20.md, VA L1397) — CCS != PA-05 diagram

---

## PART 2: TIER 5 — FLAGSHIP DETECTION QUESTIONS (PA-60 through PA-68)

### 2.1 Purpose

PA-05's 4 sub-criteria detect whether a page crosses the "designed" threshold (vocabulary fluency). Tier 5 detects compositional depth ABOVE that threshold — the difference between "mechanisms deployed correctly" and "mechanisms in conversation."

**Epistemic status:** These questions and thresholds are INITIAL HYPOTHESES — derived from compositional intelligence stack, not from observed Flagship artifacts. Thresholds may need adjustment.

### 2.2 The Nine Tier 5 Questions

**PA-60: Design Moment Density** (Auditor F)
> "Can you identify at least 3 distinct 'design moments' — places where the visual treatment does something unique that it does not repeat elsewhere on the page? Point to each."
- YES: >= 3 distinct moments, >= 2 in different scroll thirds, each uses unique property combination
- NO: < 3 moments, OR concentrated in first third, OR moments are repeated patterns

**PA-61: Multi-Voice Composition** (Auditor F)
> "Do different visual properties (weight, color, spacing, type) seem to have their own independent rhythms, or does everything shift at the same time?"
- YES: >= 2 visual properties with their OWN rhythm, independence feels deliberate
- NO: All properties shift at same boundaries, OR independence reads as inconsistency

**PA-62: Transition Variation** (Auditor D)
> "Find a section transition. Count how many visual properties change simultaneously. Is the result dramatic (3+ shifts) or quiet (1 shift)? Are there BOTH kinds?"
- YES: >= 1 dramatic boundary (3+ changes) AND >= 1 quiet boundary (1-2 changes) AND dramatic placement correlates with content importance
- NO: All transitions similar weight, OR placement uncorrelated with content

**PA-63: Fractal Zoom Coherence** (Auditor E)
> "Zoom into one component. Does its design echo the page's language? Then zoom OUT to section level — does this section's internal structure also echo the same language? Then find the SAME component type in a different section — does it adapt?"
- YES: Component's internal structure mirrors page-level design language at BOTH component and section scale AND auditor can NAME the shared language. STRONG YES if same component adapts visibly to different zones.
- NO: Components look generic OR same component type identical in every zone OR section-level structure does not echo page language

**PA-64: Restraint as Expression** (Auditor C)
> "Is there a section that is DELIBERATELY plain — simpler than surrounding sections in a way that makes the surrounding richness more noticeable? Can you tell the difference between 'designed quiet' and 'forgot to design this part'?"
- YES: >= 1 section plainer than neighbors AND plainness feels INTENTIONAL AND surrounding sections feel richer by contrast
- NO: All sections similar density, OR plain sections feel unfinished

**PA-65: Compositional Voice / Music Analogy** (Auditor A)
> "If this page were a piece of music, would it be: (a) a single instrument playing one melody, (b) a choir singing in unison, (c) an ensemble with different parts?"
- YES: Auditor selects (c) "ensemble" AND names >= 2 independent "instruments"
- NO: Auditor selects (a) or (b), OR selects (c) without naming specific instruments

**PA-66: Negative Space Variety** (Auditor C)
> "Look at the empty spaces between sections. Are they all the same 'flavor' of emptiness, or do different gaps feel different from each other?"
- YES: >= 2 perceptibly different gap TYPES AND describes how they feel different AND variety feels purposeful
- NO: All gaps interchangeable OR variety feels random

**PA-67: Novelty Beyond Competence** (Auditor A)
> "Does the page do something visually that you would not have predicted from its content type? Name the specific surprise. Does the surprise serve the content or distract from it?"
- YES: Auditor names specific unpredictable visual element AND it serves the content (not decorative distraction)
- NO: Entirely predictable for its content type, OR surprise is gimmicky/distracting

**PA-68: Metaphor Spatial Coverage** (Auditor G)
> "Does the page's organizing metaphor persist across ALL scroll thirds, or does it fade or disappear as you scroll? Can you identify metaphor expression in the bottom third?"
- YES: Metaphor expression in all three scroll thirds AND expression feels consistent
- NO: Metaphor concentrated in top third, OR disappears after introduction, OR bottom-third expression feels like afterthought

### 2.3 Tier 5 Scoring

| YES Count | Verdict | Meaning |
|-----------|---------|---------|
| 8-9 / 9 | COMPOSED | Full compositional depth. All stack layers active and perceptible. |
| 6-7 / 9 | APPROACHING | Significant depth. Most stack layers active; 1-2 need strengthening. |
| 3-5 / 9 | STRUCTURED | Some compositional intelligence visible. Multiple stack layers absent. |
| 0-2 / 9 | VOCABULARY ONLY | Mechanisms deployed but not composed. Stack layers not engaged. |

### 2.4 Combined Verdict Matrix (PA-05 x Tier 5)

| | PA-05 < 3/4 | PA-05 = 3/4 | PA-05 = 4/4 |
|---|---|---|---|
| **Tier 5: 0-2** | NOT SHIP-READY | STYLED (template) | VOCABULARY ONLY |
| **Tier 5: 3-5** | NOT SHIP-READY | STRUCTURED | STRUCTURED |
| **Tier 5: 6-7** | (unlikely) | APPROACHING | APPROACHING |
| **Tier 5: 8-9** | (impossible in practice) | (unlikely) | **COMPOSED** (target) |

---

## PART 3: FULL PA QUESTION INVENTORY (69 Questions)

### 3.1 Tier 1: The Mandatory Five (Every Audit, Every Mode)

| ID | Question | Auditor |
|----|----------|---------|
| PA-01 | What's the first thing that bothers you? | A |
| PA-02 | Is any text uncomfortable to read? Point to the worst spot. | B |
| PA-03 | Does this feel like one designer made it, or three? | A |
| PA-04 | Where does your eye go first? Is that where it SHOULD go? | A |
| PA-05 | Would you put your name on this? What would you fix first? (4 sub-criteria above) | A |

### 3.2 Tier 2: Standard Twelve

**Readability and Comfort (PA-06, PA-08, PA-29):**

| ID | Question | Auditor |
|----|----------|---------|
| PA-06 | Are any words stacking vertically, one per line, in any column? | B |
| PA-08 | Is there any text you have to lean in or squint to read? | B |
| PA-29 | In the header area (first viewport), count how many different text styles you see. Are more than three fighting for attention? | B |

**Spatial Balance and Proportion (PA-09, PA-11, PA-30 through PA-33):**

| ID | Question | Auditor |
|----|----------|---------|
| PA-09 | Is there dead space that serves no purpose? (with severity calibration) | C |
| PA-11 | Are the margins generous (confident) or anxious (clutching)? | C |
| PA-30 | At 1440px, does the layout feel DESIGNED for this width, or centered in extra space? | C |
| PA-31 | If you covered the content and only looked at the surrounding space, would it feel designed or leftover? | C |
| PA-32 | Squint at the full page. Is the visual weight distributed purposefully across the scroll? | C |
| PA-33 | Pick the largest area of empty space. Does it feel like silence in music or a dropped signal? | C |

**Visual Flow and Pacing (PA-12 through PA-13, PA-34 through PA-36):**

| ID | Question | Auditor |
|----|----------|---------|
| PA-12 | Do your eyes flow smoothly from section to section? | D |
| PA-13 | Is there a clear visual ending, or does the page just stop? | D |
| PA-34 | Pick a transition between two major sections. Is it a DESIGNED moment or just empty space? | D |
| PA-35 | Scroll at reading speed. Does interest stay level, peak and valley, or fade? Where do you start skimming? | D |
| PA-36 | Is there a dramatic visual moment — a place where treatment changes noticeably? Where? | D |

**Grid and Layout (PA-14 through PA-15, PA-37 through PA-39):**

| ID | Question | Auditor |
|----|----------|---------|
| PA-14 | Does every column have enough room for its content to breathe? | E |
| PA-15 | Trace the left edge of every content block. How many starting positions? | E |
| PA-37 | Is there any container with 5+ pieces of information competing? Control panel or pile? | E |
| PA-38 | Pick any card/callout/info-box. Is there a clear reading order? | E |
| PA-39 | In the first screenful, how much is header vs actual content? Doorway or lobby? | E |

**Consistency and Rhythm (PA-16 through PA-17, PA-40 through PA-41):**

| ID | Question | Auditor |
|----|----------|---------|
| PA-16 | Pick two elements that should look identical. Do they? | F |
| PA-17 | Is there a visual rhythm (like a beat in music), or random? **TIER 1 EQUIVALENT** | F |
| PA-40 | Does spacing between sections feel consistent, or is there a sudden jump? Does content justify it? | F |
| PA-41 | Are any visual patterns repeated 4+ times without variation? Purpose or monotony? **TIER 1 EQUIVALENT** | F |

> PA-17 and PA-41 are TIER 1 EQUIVALENT. FAIL on either = verdict cannot exceed "YES WITH RESERVATIONS."

**Color and Emotion (PA-18 through PA-20):**

| ID | Question | Auditor |
|----|----------|---------|
| PA-18 | Do all the grays/neutrals feel like the same family? | G |
| PA-19 | Is there any element that feels like it's from a different website? | G |
| PA-20 | Describe this page's personality in three words. Now read one paragraph of content. Does the page's visual personality match the content's verbal personality? | G |

### 3.3 Tier 3: Deep Dive

**Responsiveness (PA-22, PA-23, PA-46 through PA-47):**

| ID | Question | Auditor |
|----|----------|---------|
| PA-22 | Would a user with ONLY this screen size feel served or punished? | H |
| PA-23 | Comparing the 1024px and 768px screenshots, what changed for the worse? Is there anything that looks squeezed, broken, or lost between these widths? | H |
| PA-46 | At 768px, does element reorganization make SENSE for this content? Or just shrunk to fit? | H |
| PA-47 | At what scroll position do you feel "seen this before"? Anything surprising in second half? | H |

**Cross-Page (PA-24 through PA-25):**

| ID | Question | Auditor |
|----|----------|---------|
| PA-24 | Looking at the design language (borders, colors, spacing, typography), does this feel like it belongs to a SYSTEM, or is it one-off custom work? | I |
| PA-25 | If you covered the header, does the rest of the page still feel like a cohesive design? Does the identity persist throughout, or only in the header? | I |

**Architectural Challenge (PA-26 through PA-27):**

| ID | Question | Auditor |
|----|----------|---------|
| PA-26 | Is there any element that looks wrong but seems intentional — as if a rule is forcing a bad outcome? Point to it. | I |
| PA-27 | Designing from scratch, would you design it this way? | I |

**Adversarial (PA-28, PA-48):**

| ID | Question | Auditor |
|----|----------|---------|
| PA-28 | If you wanted to make this page look terrible while keeping its basic structure and color scheme, what 3 changes would do the most damage? What is this design most FRAGILE about? | I |
| PA-48 | If this layout were one of five options, would this be first or last choice? Why? | I |

### 3.4 Metaphor and Ideology (PA-42 through PA-44)

| ID | Question | Auditor |
|----|----------|---------|
| PA-42 | Any section where you understand WHY it looks this way (metaphor) but it still looks WRONG? | G |
| PA-43 | Could the same metaphor idea be communicated with less visual cost? | G |
| PA-44 | Without labels/headings/text annotations, could you still sense the metaphor from visual structure alone? Does it persist across the ENTIRE page? | G |

### 3.5 Quality and Excellence (PA-45)

| ID | Question | Auditor |
|----|----------|---------|
| PA-45 | Is there a single moment you would show someone as an example of good design? Point to it. | A |

### 3.6 Tier 4: Void Prevention (MANDATORY)

| ID | Question | Auditor |
|----|----------|---------|
| PA-50 | Count viewport-heights where < 30% is content. How many consecutive blank viewports? | C |
| PA-51 | Does the page feel content-dense, balanced, sparse, or void-dominated? | C |
| PA-52 | Divide page into thirds. Does each third have at least one designed moment? | D |
| PA-53 | At 1440px, does the container use 65-80% of horizontal space, or feel like a narrow strip? | C |

**S-09 Stacking Check (MANDATORY at every section boundary):**
> Total boundary gap = section bottom padding + divider margins + divider height + next section top padding
> <= 120px: PASS | > 120px: VOID-RISK | > 200px: CATASTROPHIC VOID

### 3.7 Sub-Perceptual CSS Detection (PA-55, PA-56)

| ID | Question | Auditor |
|----|----------|---------|
| PA-55 | Look at 3 adjacent sections. Can you describe how they DIFFER visually without inspecting code? If not, variation is sub-perceptual. | B |
| PA-56 | Check text treatment between zones. Can you FEEL the tracking difference? If not, flag as sub-perceptual. | B |

### 3.8 Pipeline Integration (PA-69, PA-70, PA-71)

| ID | Question | Auditor |
|----|----------|---------|
| PA-69 | Pick two section transitions. Count visual properties changing. Are transition intensities varied or uniform? | D |
| PA-70 | Compare densest analytical section to lightest overview. Does visual treatment RESPOND to the difference? | B |
| PA-71 | At the boundary between two adjacent zones, does the transition feel like a smooth handoff or an abrupt collision? Does the transition technique SERVE the content shift, or does it feel arbitrary? | D |

### 3.9 Tier 5: Compositional Depth (PA-60 through PA-68)

See Part 2 above for full question text, scoring criteria, and auditor assignments.

### 3.10 Extended Assessment (PA-72 through PA-77)

| ID | Question | Tier | Auditor |
|----|----------|------|---------|
| PA-72 | If you replaced this page's content with completely different content (say, a cooking recipe instead of whatever this is), would the visual design need to change? Or would it work for anything? | 2 | A |
| PA-73 | Is there any text, button, or interactive element that you think would be invisible, unreachable, or confusing to someone using only a keyboard or screen reader? Point to the most likely problem. | 3 | H |
| PA-74 | Pick a boundary where the page changes. Do ALL the changes point in the same direction? For example, if background gets darker, does text get heavier, spacing tighter, borders thicker — all saying 'denser'? Or do some changes contradict others? | 2 | D |
| PA-75 | Scroll to the very bottom. Does the page end with a DESIGNED conclusion (footer, closing statement, visual bookend), or does it just stop? Is there any area that looks like the designer ran out of time? | 2 | D |
| PA-76 | Scroll from top to bottom at reading speed. Does the visual journey have a shape — building, peaking, resolving — or does it feel like the same room repeated? Where is the peak? Does the ending feel earned? | 2 | A |
| PA-77 | Looking only at text sizes and weights (ignore color and spacing), can you identify 3 or more levels of importance? Does the hierarchy guide your reading order? | 2 | B |

**Total: 69 questions** (49 standard + 2 sub-perceptual + 3 pipeline integration + 6 extended + 9 Tier 5)

---

## PART 3.5: QUALITY FRAMEWORK (10 VALUES Items Integrated)

These definitions are CALIBRATION for the PA-05 scale and Tier 5 questions — not additional questions.

### PA-05 Scale Calibration

| Score | Label | Meaning | Historical Reference |
|-------|-------|---------|---------------------|
| 1/4 | FLAT | No perceptible design intent. Uniform treatment. | Flagship experiment (PA-05 1.5/4 FAILED) |
| 2/4 | ASSEMBLED | Individual elements competent but not unified. Template quality. | Current spec baseline (20 suppressors active) |
| 3/4 | COMPOSED | Unified design language. Intentional relationships visible. | Middle experiment (PA-05 4/4 DESIGNED), Gas Town (PA-05 3.5) |
| 4/4 | DESIGNED | Every decision serves the content. Mechanisms in conversation. | NEVER ACHIEVED at Flagship tier |

### Quality Tiers (Discrete Registers, Not Continuous Spectrum)

| Tier | PA-05 Range | Mechanisms | CSS Lines | Coupling Register |
|------|-------------|------------|-----------|-------------------|
| FLOOR | < 2.5 | 5 | 150-250 | Register 0 (NO coupling) |
| MIDDLE (default) | 2.5-3.0 | 8-10 | 350-500 | Register 1 (LOCAL coupling) |
| CEILING | 3.0-3.5 | 12-15 | 700-1000 | Register 2 (STRUCTURAL coupling) |
| FLAGSHIP | >= 3.5 | 16-18 | 1000-1500 | Register 3 (ATMOSPHERIC coupling) |

> **CCS (Compositional Coherence Score):** RESEARCH CONSTRUCT — do not operationalize as a numeric pass/fail criterion until methodology is standardized. PA auditors may reference CCS qualitatively but must NOT use it as a gate check.

---

## PART 4: 9-AUDITOR DEPLOYMENT ARCHITECTURE (Mode 4)

### 4.1 Architecture Overview

> Source: ITEM 69 (extract-d01-d03.md, VA L158) — "PHASE 3: PERCEPTUAL AUDIT (Verification Only)"
> Source: ITEM 30 (extract-d06-d08.md, VA L548-550) — "Standard Mode 4 PA Audit (9 auditors + 1 integrative + 1 weaver)"
> Source: ITEM 160 (extract-d21-d25.md, VA L2006) — "PROVEN: PA Mode 4 (9 auditors) >> Mode 2 for catching failures"

Mode 4 deploys 11 agents total:
- 9 PA Auditors (A through I), each with assigned questions
- 1 Integrative Auditor (no assigned questions — gestalt impression only)
- 1 Weaver (reads all 10 reports, produces VERDICT)

All agents run in PARALLEL (except Weaver, which is sequential after all auditors complete).

### 4.2 Auditor Assignments

> Source: ITEM 72 (extract-d01-d03.md, VA L168-169) — question distribution
> Source: ITEM 73 (extract-d01-d03.md, VA L172-173) — PA-8
> Source: ITEM 74 (extract-d01-d03.md, VA L176-177) — PA-9
> Source: ITEM 84 (extract-d09-d11.md, VA L893) — "PA-1 thru PA-9 (9 parallel auditors)"

| Auditor | Role | Core Questions | Tier 5 Questions | Extended | Total |
|---------|------|---------------|-------------------|----------|-------|
| **A** | Impression + Emotion | PA-01, PA-03, PA-04, PA-05, PA-45 | PA-65, PA-67 | PA-72, PA-76 | 9 |
| **B** | Readability + Typography | PA-02, PA-06, PA-08, PA-29, PA-55, PA-56, PA-70 | — | PA-77 | 8 |
| **C** | Spatial + Proportion | PA-09, PA-11, PA-30, PA-31, PA-32, PA-33, PA-50, PA-51, PA-53 | PA-64, PA-66 | — | 11 |
| **D** | Flow + Pacing | PA-12, PA-13, PA-34, PA-35, PA-36, PA-52, PA-69, PA-71 | PA-62 | PA-74, PA-75 | 11 |
| **E** | Grid + Layout | PA-14, PA-15, PA-37, PA-38, PA-39 | PA-63 | — | 6 |
| **F** | Consistency + Rhythm | PA-16, PA-17, PA-40, PA-41 | PA-60, PA-61 | — | 6 |
| **G** | Metaphor + Ideology | PA-18, PA-19, PA-20, PA-42, PA-43, PA-44 | PA-68 | — | 7 |
| **H** | Responsiveness | PA-22, PA-23, PA-46, PA-47 | — | PA-73 | 5 |
| **I** | Cross-Page + Adversarial | PA-24, PA-25, PA-26, PA-27, PA-28, PA-48 | — | — | 6 |

**Total: 69 questions across 9 auditors** (49 standard + 2 sub-perceptual + 3 pipeline integration + 6 extended + 9 Tier 5)

> **Load balance note (FIX-061/062/063):** PA-52 moved C→D (pacing aligns with D's PA-35), PA-55 moved C→B (descriptive question suits B's role), PA-70 moved D→B (density/typography question suits B's role). FIX-064 (C1/C2 split) is DEFERRED CONTINGENT — only revisit if C's quality degrades at 11 questions.

> Source: ITEM 65 (extract-d21-d25.md, VA L1777) — "PA question count reconciliation"

### 4.3 PA-05 Distributed Cross-Validation Protocol

> Source: FIX-065 — PA-05 is the PRIMARY success metric. Single-evaluator risk is the biggest protocol weakness.

Auditor A remains the PRIMARY evaluator for all 4 PA-05 sub-criteria. However, 4 other auditors provide SECONDARY cross-validation scores for the sub-criterion in their domain:

| PA-05 Sub-Criterion | Primary (A) | Cross-Validator | Rationale |
|---------------------|-------------|-----------------|-----------|
| **DESIGNED** (PA-05a) | A | **F** (Consistency + Rhythm) | F assesses whether mechanisms are in conversation — core of DESIGNED |
| **COHERENT** (PA-05b) | A | **G** (Metaphor + Ideology) | G assesses whether one design voice persists — core of COHERENT |
| **PROPORTIONATE** (PA-05c) | A | **C** (Spatial + Proportion) | C directly owns spatial balance questions — core of PROPORTIONATE |
| **POLISHED** (PA-05d) | A | **B** (Readability + Typography) | B assesses execution quality details — core of POLISHED |

**Cross-Validation Workflow:**
1. Each cross-validator rates ONLY their assigned sub-criterion as a SECONDARY assessment (PASS / CONDITIONAL PASS / FAIL) at the END of their own report.
2. Cross-validators use the same criteria as Part 1.2 but apply it through their domain lens.
3. The Weaver receives BOTH Auditor A's primary scores AND the 4 cross-validation scores.
4. If primary and cross scores AGREE: Weaver uses the agreed score.
5. If primary and cross scores DISAGREE: Weaver must explain the disagreement and resolve it, citing evidence from both reports.

**Cross-validators do NOT see Auditor A's scores.** They assess independently. This is a blind cross-validation.

### 4.4 Agent Requirements

> Source: ITEM 85 (extract-d09-d11.md, VA L894) — "all PA auditors must be Opus"
> Source: ITEM 89 (extract-d09-d11.md, VA L899) — "Weaver must be Opus"
> Source: ITEM 75 (extract-d01-d03.md, VA L182-184) — "Agent 14: INTEGRATIVE AUDITOR (Opus) NO assigned questions"

| Agent | Model | Requirement |
|-------|-------|-------------|
| Auditors A-I | Opus | All 9 auditors MUST be Opus |
| Integrative Auditor | Opus | No assigned questions, gestalt only |
| Weaver | Opus | Reads all 10 reports, produces VERDICT |

**Evidence Format Requirement (FIX-067):** Every PA question answer MUST follow this format:

> **ANSWER FORMAT:** YES / NO / CONDITIONAL + for each finding: [screenshot reference, e.g., `1440/scroll-03.png`] + [1-sentence description of what you see]

This applies to ALL 69 questions across ALL 9 auditors (A-I). Evidence is a STRUCTURAL part of the answer, not optional. Answers without screenshot references are INCOMPLETE.

**Completion Manifest Requirement (FIX-066):** Each auditor's report MUST include a **completion table** as its FINAL section:

```
## Completion Manifest — Auditor [LETTER]
| Question ID | Answered | Evidence Screenshot(s) |
|-------------|----------|----------------------|
| PA-XX       | YES      | 1440/scroll-02.png   |
| PA-YY       | YES      | 768/cold-look.png    |
| ...         | ...      | ...                  |
```

**Weaver's FIRST action:** Verify all 9 auditor manifests are complete. Total expected: 69 YES entries across 9 manifests. Any missing answer = report is INCOMPLETE. The Weaver must request the missing answer before proceeding to verdict.

### 4.5 Integrative Auditor

> Source: ITEM 75 (extract-d01-d03.md, VA L182-184)
> Source: ITEM 73 (extract-d21-d25.md, VA L1789) — "Add integrative gestalt auditor (#14)"

The Integrative Auditor has NO assigned questions and does NOT score PA-05. Their role:
1. Receive ALL screenshots
2. Write a free-form **gestalt impression** from screenshots (what FEELS right, what FEELS wrong — no structured questions)
3. Identify **cross-cutting patterns** that no individual auditor catches (because each is focused on their question set)
4. Observe the **emotional arc** using the 4-register framework (Part 6): SURPRISE, DELIGHT, AUTHORITY, EARNED CLOSURE
5. Flag cross-cutting issues (e.g., "the rhythm is consistent but the rhythm itself is monotonous")

> **CLARIFICATION (FIX-083):** PA-05 scoring is the WEAVER's responsibility (Part 4.6), NOT the Integrative Auditor's. The Integrative Auditor's gestalt impression INFORMS the Weaver's PA-05 score but does not constitute a score itself. Any prior reference (including MANIFEST) stating that the Integrative Auditor scores PA-05 is INCORRECT.

### 4.6 Weaver

> Source: ITEM 76 (extract-d01-d03.md, VA L191-192) — "reads 10 auditor reports -> VERDICT"
> Source: ITEM 87 (extract-d09-d11.md, VA L897) — "Phase 3: Weaver"
> Source: ITEM 88 (extract-d09-d11.md, VA L898) — "Agent 15 (Weaver) = 15 total agents"

The Weaver reads ALL 10 auditor reports (9 PA auditors + 1 Integrative) and produces:

0. **Manifest Verification** — FIRST ACTION: verify all 9 auditor completion manifests total 69 answered questions. Any missing = INCOMPLETE.
1. **PA-05 Score** (1-4 scale with sub-criteria breakdown). Includes cross-validation resolution: for each sub-criterion, compare Auditor A's primary score with the cross-validator's secondary score (Part 4.3). If they disagree, explain and resolve.
2. **Tier 5 Score** (0-9 YES count with per-question results)
3. **Combined Verdict** (from the PA-05 x Tier 5 matrix)
4. **Top-5 Fixes** (classified as MECHANICAL / STRUCTURAL / COMPOSITIONAL — see Part 4.7 for diagnostic vocabulary)
5. **Ship Decision** (SHIP / SHIP WITH FIXES / REFINE / REBUILD)
6. **Emotional Arc Assessment** (see Part 6)

**Weaver Calibration References** (for CLASSIFICATION, not perception — auditors NEVER see these):

> **SEQUENCING (FIX-085):** Calibration references are CLASSIFICATION tools, not evaluation rubrics. The Weaver must FIRST describe observations in own words, THEN classify using the reference scales below. Reading scales before describing evidence risks anchoring on categories rather than perceiving what is actually there.

*Multi-Coherence Scale:*
| Simultaneous Shifts at Boundary | Quality Level |
|--------------------------------|---------------|
| 0-1 | FLAT |
| 2 | FUNCTIONAL |
| 3 | DESIGNED |
| 4-5 | COMPOSED |
| 6 | FLAGSHIP |

*Severity Scale:*
| Dead Space | Severity |
|------------|----------|
| 1-2 viewport-heights | LOOKS-WRONG |
| 3-5 viewport-heights | WOULD-NOT-SHIP |
| 6+ viewport-heights | CATASTROPHIC |

*Metaphor Expression Spectrum:*
| Level | Expression | Quality |
|-------|-----------|---------|
| STRUCTURAL | Spatial organization, color progression, visual weight | HIGHEST |
| ATMOSPHERIC | Palette, typography, vocabulary choices | HIGH |
| LABELED | Explicit text labels on structural elements | MEDIUM |
| ANNOUNCED | Section titles explain the metaphor | LOW |

**Weaver Fix-Type Classification:**
- **MECHANICAL:** CSS value wrong (margin, color, spacing). Builder fixes directly.
- **STRUCTURAL:** Zone organization or boundary design. Builder re-reads TC brief Sections 2+4.
- **COMPOSITIONAL:** Metaphor not expressed visually. Requires TC re-invocation (TYPE C fix cycle).

### 4.7 Weaver Diagnostic Vocabulary

> Source: FIX-086 — Currently the Weaver must infer diagnostic categories without guidance.

When classifying fixes in the Top-5 list, the Weaver uses these diagnostic categories with their evidence signatures:

| Category | Definition | Evidence Pattern | Remediation |
|----------|-----------|-----------------|-------------|
| **MECHANICAL** | Fix by changing a CSS value | Auditors cite SPECIFIC elements with SPECIFIC visual problems (e.g., "the gap between S3 and S4 is too large") | Builder changes the value directly |
| **STRUCTURAL** | Reorganize zones, boundaries, or grids | Auditors cite SPATIAL RELATIONSHIP problems (e.g., "sections feel disconnected," "no visual hierarchy between zones") | Builder re-reads TC brief Sections 2+4, reorganizes zone structure |
| **COMPOSITIONAL** | Re-invoke tension-composition | Auditors cite ABSENCE of unifying logic or metaphor (e.g., "elements feel random," "no governing idea visible," "competent but soulless") | Requires TC re-invocation (TYPE C fix cycle — new conviction, new TC brief) |

**Diagnostic Decision Tree:**
1. Can the problem be fixed by changing ONE CSS property? → MECHANICAL
2. Can the problem be fixed by reorganizing existing elements? → STRUCTURAL
3. Does the problem require rethinking the page's compositional logic? → COMPOSITIONAL

---

## PART 5: SCREENSHOT PRE-CAPTURE PATTERN

### 5.1 Protocol

> Source: ITEM 70 (extract-d01-d03.md, VA L161) — "Lead takes ALL screenshots at 1440px, 1024px, 768px"
> Source: ITEM 71 (extract-d01-d03.md, VA L162) — "eliminates Playwright contention, enables parallel auditors"
> Source: ITEM 82 (extract-d09-d11.md, VA L889) — "Screenshots at 3 viewports"

**The orchestrator (team lead) captures ALL screenshots BEFORE spawning any PA auditors.**

This is a proven pattern (Mode 4 PA: 102 screenshots, 9 agents parallel, zero contention).

### 5.2 Capture Sequence

For each of 3 viewport widths (1440px, 1024px, 768px):

1. **Cold Look** — 1 full-page screenshot at viewport top (no scrolling)
2. **Scroll-Through** — Sequential screenshots at 80% viewport-height steps, covering the entire page
3. **Disable animations first:** `animation: none !important; opacity: 1 !important;`
4. **Wait for fonts:** `document.fonts.ready` is CRITICAL before capturing

### 5.3 File Naming Convention

```
screenshots/
  1440/
    cold-look.png
    scroll-01.png
    scroll-02.png
    ...
  1024/
    cold-look.png
    scroll-01.png
    ...
  768/
    cold-look.png
    scroll-01.png
    ...
```

### 5.4 Auditor Screenshot-Reading Protocol

Auditors receive file paths to saved PNG screenshots and use the Read tool (which renders images visually). They CANNOT interact with the page.

**Workflow:**
1. Receive file paths
2. Read each screenshot using Read tool
3. Apply Cold Look Protocol to cold-look screenshots independently
4. Read scroll-through screenshots in sequence
5. Apply Zone Sweep (5 dimension passes) on scroll-through sequence
6. Answer assigned questions using evidence from screenshots

**Key rule:** Assessment is purely VISUAL. Describe what you SEE using perceptual language ("The background shifts from warm cream to cooler gray") not CSS language ("background-color changes from #FEF9F5 to #F0EBE3").

---

## PART 6: EMOTIONAL ARC ASSESSMENT (PA Auditor Post-Build)

### 6.1 Council Ruling: PA Auditor Is Primary

> Source: council-verdict.md, CF-02 — "PA auditor is the primary check; Compositional Critic is an experimental alternative pending validation"
> Source: council-verdict.md, Contradiction C — "PA auditor assesses emotional arc post-build (not gate-runner, not Compositional Critic)"
> Source: ITEM 037 (extract-d21-d25.md, VA L1664) — "PA auditor can assess emotional arc AFTER build"
> Source: ITEM 032 (extract-d21-d25.md, VA L1656-1657) — "Emotional arc is EMERGENT, not SPECIFIED. Cannot be gate-checked"

**CRITICAL:** The Compositional Critic was previously listed as the "primary emotional arc check" (ITEM 038, extract-d21-d25.md, VA L1665). Per council ruling CF-02, this is OVERRIDDEN. The Compositional Critic has zero evidence (N=0) and is classified as EXPERIMENTAL. The PA auditor is the primary quality check.

### 6.2 Four Emotional Registers

> Source: ITEM 001 (extract-d21-d25.md, VA L1572-1574) — "4 emotional registers distinct from density arc"

Emotional arc has 4 registers, each with CSS signatures and assessment criteria:

**1. SURPRISE** — moment page does something unexpected
> Source: ITEM 002 (extract-d21-d25.md, VA L1579-1580)
- CSS signatures: scale break (headline 2.5x body), color inversion (dark zone mid-page), layout rupture (grid after 4+ single-column viewports), structural inversion (border-RIGHT in border-LEFT page)
> Source: ITEM 003 through ITEM 006 (extract-d21-d25.md, VA L1583-1586)
- Expected: 1-2 moments only, in SECOND HALF (D-04)
> Source: ITEM 029 (extract-d21-d25.md, VA L1644-1645)
- Gas Town: ZERO surprise moments
> Source: ITEM 007 (extract-d21-d25.md, VA L1588-1590)
- Disposition link: D-04 'Second-half moment' creates CONDITIONS for surprise (not guaranteed)
> Source: ITEM 034 (extract-d21-d25.md, VA L1660)

**2. DELIGHT** — small unexpected refinements that reward attention
> Source: ITEM 009 (extract-d21-d25.md, VA L1597-1598)
- CSS signatures: hover states revealing hidden content, typographic micro-refinement (tabular-nums, text-indent), zone-specific ::selection colors, print-specific styling, first/last child edge treatments
> Source: ITEM 010 through ITEM 014 (extract-d21-d25.md, VA L1601-1605)
- Expected: distributed throughout, more in high-density zones
> Source: ITEM 030 (extract-d21-d25.md, VA L1647-1648)
- Gas Town: 2/10 delight score, missing 6 techniques
> Source: ITEM 015 (extract-d21-d25.md, VA L1607-1609)
- Disposition link: D-07 'Edge intentionality' creates conditions for delight
> Source: ITEM 036 (extract-d21-d25.md, VA L1662)

**3. AUTHORITY** — page knows what it is, every element expresses certainty
> Source: ITEM 016 (extract-d21-d25.md, VA L1611-1612)
- CSS signatures: consistent border-weight hierarchy (4px ALWAYS = primary), restraint (knowing what NOT to use), dense purposeful header (dark bg, tight spacing), zero decorative elements
> Source: ITEM 017 through ITEM 020 (extract-d21-d25.md, VA L1615-1618)
- Expected: should be HIGH throughout (soul ensures)
> Source: ITEM 028 (extract-d21-d25.md, VA L1641-1642)
- Gas Town: 7/10 authority, loses for uniform component styling
> Source: ITEM 021 (extract-d21-d25.md, VA L1620-1622)
- Disposition link: D-03 'Would you sign this?' creates conditions for authority
> Source: ITEM 033 (extract-d21-d25.md, VA L1659)

**4. EARNED CLOSURE** — ending feels earned by the journey
> Source: ITEM 022 (extract-d21-d25.md, VA L1624-1625)
- CSS signatures: footer echoes header (bookending), density arc resolves (Z4 releases what Z3 compressed), final drop cap or typographic moment, breathing space before footer (80-120px gap)
> Source: ITEM 023 through ITEM 026 (extract-d21-d25.md, VA L1628-1631)
- Expected: only in final 2-3 viewports, must be EARNED
> Source: ITEM 031 (extract-d21-d25.md, VA L1650-1651)
- Gas Town: 5/10 closure, Z4 too similar to Z2, no final moment
> Source: ITEM 027 (extract-d21-d25.md, VA L1633-1635)
- Disposition link: D-05 'Scroll as reader' creates conditions for closure
> Source: ITEM 035 (extract-d21-d25.md, VA L1661)

### 6.3 How PA Assesses Emotional Arc

Emotional arc is EMERGENT — it cannot be specified or gate-checked. The PA auditor assesses it post-build through:

1. **PA-35** (scroll at reading speed — interest peaks/valleys/fades) detects overall arc shape
2. **PA-36** (dramatic visual moment — position and impact) detects SURPRISE placement
3. **PA-13** (clear visual ending?) detects CLOSURE
4. **PA-45** (single moment to show someone as good design) detects DELIGHT
5. **PA-05** sub-criterion DESIGNED detects AUTHORITY
6. **PA-47** (anything surprising in second half) detects late-page SURPRISE

The Weaver synthesizes these into an emotional arc assessment using the 4-register framework.

### 6.4 Disposition-Emotion Links (DESIGN INTENTIONS, Not Guarantees)

> Source: council-verdict.md, Contradiction C — "DESIGN INTENTIONS, not guaranteed causal links"

| Disposition | Creates Conditions For | Evidence |
|-------------|----------------------|----------|
| D-03 'Would you sign this?' | AUTHORITY | DESIGN INTENTION (not guaranteed) |
| D-04 'Second-half moment' | SURPRISE | DESIGN INTENTION (not guaranteed) |
| D-05 'Scroll as reader' | CLOSURE | DESIGN INTENTION (not guaranteed) |
| D-07 'Edge intentionality' | DELIGHT | DESIGN INTENTION (not guaranteed) |

---

## PART 7: 12 VALUES ITEMS REROUTED TO PA-AUDITOR

> **WARNING (FIX-084): WEAVER USE ONLY.** The tier definitions, quality tier tables, and calibration data in this section are for the WEAVER's classification use ONLY. They MUST NOT be included in PA Auditor A-I prompts. The fresh-eyes principle (Part 13) prohibits tier context for individual auditors. Including tier targets in auditor prompts would anchor their assessments on expected outcomes rather than genuine perception.

### 7.1 Council Ruling

> Source: council-verdict.md, Part 2, Pattern 5, Category B — "REROUTE to PA AUDITOR (quality assessment) — 12 items"

The gate-runner checks BINARY constraints only. Quality tier assessments require judgment and belong with the PA auditor (specifically, the WEAVER who synthesizes all auditor reports).

### 7.2 The 12 Rerouted Items

**Quality Tier Definitions:**

| # | Item ID | Source | VA Line | Text | Why PA-AUDITOR |
|---|---------|--------|---------|------|----------------|
| 1 | ITEM 36 | extract-d09-d11.md | L813-815 | Quality tiers are DISCRETE REGISTERS not continuous spectrum | PA auditor uses this framework to classify output |
| 2 | ITEM 37 | extract-d09-d11.md | L818 | Tiers measured: PA-05, CCS, Mechanisms, CSS Lines, Build Time | PA auditor assessment dimensions |
| 3 | ITEM 38 | extract-d09-d11.md | L821 | FLAGSHIP (highest tier) | Tier definition for PA classification |
| 4 | ITEM 39 | extract-d09-d11.md | L822 | Flagship: PA-05 >=3.5 (hypothesis), CCS 0.55-0.80 | PA target threshold (hypothesis) |
| 5 | ITEM 40 | extract-d09-d11.md | L823 | Register 3 (ATMOSPHERIC coupling) | Tier characteristic for PA understanding |
| 6 | ITEM 41 | extract-d09-d11.md | L824 | Flagship: 16-18 mechanisms, 1000-1500 CSS lines | Tier characteristic for PA context |
| 7 | ITEM 43 | extract-d09-d11.md | L826 | Unified pervading metaphor throughout | Flagship requirement — PA-68 directly assesses this |
| 8 | ITEM 44 | extract-d09-d11.md | L827 | Content-form INDISTINGUISHABLE | Flagship characteristic — PA-70 assesses this |
| 9 | ITEM 45 | extract-d09-d11.md | L830 | CEILING (second tier) | Tier definition for PA classification |
| 10 | ITEM 46 | extract-d09-d11.md | L831 | Ceiling: PA-05 3.0-3.5, CCS 0.35-0.55 | Tier threshold for PA context |
| 11 | ITEM 47 | extract-d09-d11.md | L832 | Register 2 (STRUCTURAL coupling) | Tier characteristic |
| 12 | ITEM 48 | extract-d09-d11.md | L833 | Ceiling: 12-15 mechanisms, 700-1000 CSS lines | Tier characteristic |

**Additional tier definitions needed for complete PA context (also routed to PA-AUDITOR per registry):**

| # | Item ID | Source | VA Line | Text |
|---|---------|--------|---------|------|
| 13 | ITEM 49 | extract-d09-d11.md | L834 | CD-006 (39/40), Gas Town (3.5/4) reference exemplars |
| 14 | ITEM 50 | extract-d09-d11.md | L835 | Multi-coherence LOCAL not GLOBAL |
| 15 | ITEM 51 | extract-d09-d11.md | L838 | MIDDLE (Default Floor) |
| 16 | ITEM 52 | extract-d09-d11.md | L839 | Middle: PA-05 2.5-3.0, CCS 0.15-0.35 |
| 17 | ITEM 53 | extract-d09-d11.md | L840 | Register 1 (LOCAL coupling) |
| 18 | ITEM 54 | extract-d09-d11.md | L841 | Middle: 8-10 mechanisms, 350-500 CSS lines |
| 19 | ITEM 55 | extract-d09-d11.md | L842 | Middle experiment (PA-05 4/4 DESIGNED) |
| 20 | ITEM 56 | extract-d09-d11.md | L843 | Highest ROI tier (3-4x richness for +45min) |
| 21 | ITEM 57 | extract-d09-d11.md | L846 | FLOOR (lowest tier) |
| 22 | ITEM 58 | extract-d09-d11.md | L847 | Floor: PA-05 <2.5, CCS <0.15 |
| 23 | ITEM 59 | extract-d09-d11.md | L848 | Register 0 (NO coupling) |
| 24 | ITEM 60 | extract-d09-d11.md | L849 | Floor: 5 mechanisms, 150-250 CSS lines |
| 25 | ITEM 61 | extract-d09-d11.md | L850 | Flagship experiment (PA-05 1.5/4 FAILED) = Floor tier |

### 7.3 CCS Items — RESEARCH CONSTRUCT Warning

> Source: council-verdict.md, Part 2, Pattern 5 — "CCS thresholds CANNOT be gate-checked until methodology is standardized"

The following items reference CCS. PA auditors may use them for qualitative context but must NOT use CCS as a numeric pass/fail criterion:

| Item ID | Source | Text | CCS Reference |
|---------|--------|------|---------------|
| ITEM 22 (extract-d18-d20.md) | VA L1406 | PA-05 measures perceived quality | CCS is separate |
| ITEM 28 (extract-d18-d20.md) | VA L1415 | CCS measures MECHANISM INTERDEPENDENCE | Definition only |
| ITEM 31 (extract-d18-d20.md) | VA L1420 | CCS 0.00-1.00 scale | Scale definition |
| ITEM 43-45 (extract-d18-d20.md) | VA L1463-1473 | Register 1/2/3 definitions with CCS ranges | Context only |
| ITEM 32-35 (extract-d18-d20.md) | VA L1426-1443 | Page scores (Middle, Gas Town, CD-006, Flagship) | Historical data |

**Status:** CCS measurement varies by +/- 0.15 depending on methodology. Tag all CCS items: "RESEARCH — do not operationalize until methodology standardized."

---

## PART 8: PA-ASSESSED ANTI-PATTERNS

### 8.1 Anti-Patterns Requiring Perceptual Judgment

> Source: ITEM 023 (extract-d15-d17.md, VA L1188) — "4 require PERCEPTUAL AUDIT (PA-05 questions)"
> Source: ITEM 026 (extract-d15-d17.md, VA L1192) — "Phase 3 PA adds anti-pattern-aware questions"

Some anti-patterns cannot be detected programmatically. They require the PA auditor's perceptual judgment:

| AP | Anti-Pattern | What It Detects | PA Questions That Catch It |
|----|-------------|-----------------|---------------------------|
| AP-02 | COLOR ZONE CONFLICT | Hierarchy DISAGREEMENT between color zones | PA-18 (color family), PA-55 (zone differences) |
| AP-03 | TRANSITION MONOTONY | All zones use identical dividers | PA-17 (rhythm), PA-69 (transition variation), PA-62 (Tier 5) |
| AP-05 | SPACING FLAT-LINE | Density arc compresses uniformly | PA-40 (spacing consistency), PA-66 (negative space variety) |
| AP-06 | CHANNEL ISOLATION | 6 channels shift not at same boundaries | PA-69 (transition properties), PA-61 (multi-voice) |
| AP-07 | METAPHOR BLEED | Vocabulary leaks across zone boundaries | PA-44 (metaphor persistence), PA-68 (metaphor coverage) |
| AP-08 | COMPONENT ORPHAN | Component styled for wrong zone | PA-63 (fractal zoom), PA-19 (different website element) |
| AP-12 | RESTRAINT EROSION | Additions erode deliberate absences | PA-64 (restraint as expression) |
| AP-13 | BOOKEND ASYMMETRY | Header/footer echo breaks in revision | PA-13 (clear ending), PA-24 (system coherence) |

> Source: ITEM 005, 007, 009, 011, 012, 013, 019, 020 (extract-d15-d17.md)

### 8.2 Revision Degradation Warnings

> Source: ITEM 028 (extract-d15-d17.md, VA L1199) — "REVISION QUALITY — WHY FIX CYCLES DEGRADE COMPOSITION"

PA auditors should be aware that fix cycles can DEGRADE composition. Watch for:

| Warning | What Degrades | Source |
|---------|--------------|--------|
| Multi-channel encoding decouples | Fix to one channel breaks alignment with others | ITEM 038 (extract-d15-d17.md, VA L1237-1238) |
| Density arcs flatten | Individual zone correction breaks overall arc | ITEM 039 (extract-d15-d17.md, VA L1239-1240) |
| Bookending symmetry breaks | Modifying one end breaks header/footer echo | ITEM 040 (extract-d15-d17.md, VA L1241-1242) |
| Component-context coupling breaks | CSS changes disconnect components from zones | ITEM 041 (extract-d15-d17.md, VA L1243-1244) |
| Restraint coherence degrades | Changing mechanisms shifts what "restraint" means | ITEM 042 (extract-d15-d17.md, VA L1245-1246) |

These inform the Weaver's fix-type classification. COMPOSITIONAL fixes should not be attempted through MECHANICAL means.

---

## PART 9: CROSS-PAGE COHERENCE (Family DNA)

> Source: ITEM 052 (extract-d15-d17.md, VA L1268) — "CROSS-PAGE COHERENCE — FAMILY DNA"
> Source: ITEM 053 (extract-d15-d17.md, VA L1273) — "~30 CSS properties IDENTICAL between independently-built pages"
> Source: ITEM 054 (extract-d15-d17.md, VA L1277) — "SHARED DNA"

PA auditors assess cross-page coherence through:
- **PA-24:** Looking at the design language (borders, colors, spacing, typography), does this feel like it belongs to a SYSTEM, or is it one-off custom work?
- **PA-25:** If you covered the header, does the rest of the page still feel like a cohesive design? Does the identity persist throughout, or only in the header?

The shared DNA (~30 identical properties) comes from tokens.css + soul constraints + components.css. No additional cross-page gate is needed — the DNA is INHERENT.

> Source: ITEM 073 (extract-d15-d17.md, VA L1300) — "Source: tokens.css + soul constraints + components.css"
> Source: ITEM 083 (extract-d15-d17.md, VA L1316) — "VERDICT: SIBLINGS, NOT STRANGERS"
> Source: ITEM 092 (extract-d15-d17.md, VA L1327) — "No additional cross-page gate needed"

---

## PART 10: SHIP DECISION AND FEEDBACK LOOP

### 10.1 Ship Thresholds

> Source: ITEM 77 (extract-d01-d03.md, VA L201-204)

| Condition | Decision |
|-----------|----------|
| PA-05 >= 3.5/4 AND zero soul violations | **SHIP** |
| PA-05 2.5-3.5 | **REFINE** (see 10.2) |
| PA-05 < 2.5 | **REBUILD** (see 10.3) |

### 10.2 REFINE Protocol

> Source: ITEM 78 (extract-d01-d03.md, VA L206-210) — "DIFFERENT Opus agent, reads conviction"

- DIFFERENT Opus agent (defeats continuation bias)
- Reads conviction artifact + PA artistic impressions
- Refine agent NEVER sees gate scores or threshold numbers
> Source: ITEM 050 (extract-d15-d17.md, VA L1259)

### 10.3 REBUILD Protocol

> Source: ITEM 79 (extract-d01-d03.md, VA L212-215) — "FRESH builder in COMPOSING mode"

- FRESH Opus builder
- In COMPOSING mode (not REPAIR mode)
- Reads previous conviction artifact (not fix list)
- Generative language, not diagnostic
> Source: ITEM 044-046 (extract-d15-d17.md, VA L1252-1254)

### 10.4 Feedback Language

> Source: ITEM 80 (extract-d01-d03.md, VA L219-220) — "Returns to Phase 2 with PA verdict as CONTEXT (generative language)"

PA verdict goes back to Phase 2 as CONTEXT in generative language. NOT: "SC-09 FAILED: stacked gap 210px exceeds 120px." YES: "The middle sags — energy dissipates by S5."

> Source: ITEM 14, ITEM 15 (extract-d06-d08.md, VA L509-514)

---

## PART 11: MODE DETERMINANTS (Applied vs Composed Detection)

### 11.1 PA-Relevant Mode Indicators

The PA auditor can detect whether a page was built in APPLIED or COMPOSED mode through perceptual observation:

| Determinant | APPLIED Mode | COMPOSED Mode | Source |
|-------------|-------------|---------------|--------|
| Layout choice driver | Content-type driven | Metaphor driven | ITEM 76 (extract-d18-d20.md, VA L1552) |
| Governing logic | Absent (no articulable in 1 sentence) | Present | ITEM 78 (extract-d18-d20.md, VA L1554) |
| Component adaptation | Callouts identical across zones | Callouts adapt to zone context | ITEM 64-65 (extract-d18-d20.md, VA L1520-1526) |
| Removal impact | Remove A, B unchanged | Remove A, B's meaning shifts | ITEM 55-56 (extract-d18-d20.md, VA L1498-1499) |

> Source: ITEM 69-72 (extract-d18-d20.md, VA L1529-1542) — THE REMOVAL TEST (Gas Town)

### 11.2 PA Questions That Detect Mode

- **PA-03** ("one designer or three") — COMPOSED mode reads as "one designer"
- **PA-05a** ("intentional composition or assembled") — COMPOSED = intentional, APPLIED = assembled
- **PA-63** (fractal zoom / component adaptation) — directly detects zone-responsive components
- **PA-65** (music analogy) — "ensemble" = COMPOSED, "choir in unison" = APPLIED
- **PA-70** (content-form coupling) — COMPOSED mode shows visual density matching content density

---

## PART 12: COMPLETE LAYER 7 ITEM REGISTRY

All 56 Layer 7 items from the unified registry, plus the 12 rerouted VALUES items (Category B from council verdict). Items marked with their source, VA line reference, agent assignment, and type.

### 12.1 Core PA Process Items

| # | Item ID | Source | VA Line | Agent | Type | Text |
|---|---------|--------|---------|-------|------|------|
| 1 | ITEM 69 | extract-d01-d03.md | L158 | ORCHESTRATOR | PROCESS | PHASE 3: PERCEPTUAL AUDIT (Verification Only) |
| 2 | ITEM 70 | extract-d01-d03.md | L161 | ORCHESTRATOR | PROCESS | Lead takes ALL screenshots at 1440px, 1024px, 768px |
| 3 | ITEM 71 | extract-d01-d03.md | L162 | ORCHESTRATOR | DECISION | Eliminates Playwright contention, enables parallel auditors |
| 4 | ITEM 72 | extract-d01-d03.md | L168-169 | ORCHESTRATOR | AGENT_ROLE | PA-1 Q1-6, PA-2 Q7-12, ..., PA-7 Q37-42 (7 auditors x 6 questions) |
| 5 | ITEM 73 | extract-d01-d03.md | L172-173 | ORCHESTRATOR | AGENT_ROLE | PA-8 Q43-48 |
| 6 | ITEM 74 | extract-d01-d03.md | L176-177 | ORCHESTRATOR | AGENT_ROLE | PA-9 Q49-54 (total 54 PA questions across 9 auditors) |
| 7 | ITEM 75 | extract-d01-d03.md | L182-184 | ORCHESTRATOR | AGENT_ROLE | Agent 14: INTEGRATIVE AUDITOR (Opus) NO assigned questions |
| 8 | ITEM 76 | extract-d01-d03.md | L191-192 | ORCHESTRATOR | AGENT_ROLE | Agent 15: WEAVER (Opus) reads 10 auditor reports -> VERDICT |
| 9 | ITEM 78 | extract-d01-d03.md | L206-210 | ORCHESTRATOR | PROCESS | REFINE: PA-05 2.5-3.5, DIFFERENT Opus agent, reads conviction |
| 10 | ITEM 79 | extract-d01-d03.md | L212-215 | ORCHESTRATOR | PROCESS | REBUILD: PA-05 < 2.5, FRESH builder in COMPOSING mode |
| 11 | ITEM 80 | extract-d01-d03.md | L219-220 | ORCHESTRATOR | DECISION | Returns to Phase 2 with PA verdict as CONTEXT (generative language) |
| 12 | ITEM 30 | extract-d06-d08.md | L548-550 | ORCHESTRATOR | PROCESS | Standard Mode 4 PA Audit (9 auditors + 1 integrative + 1 weaver) |
| 13 | ITEM 82 | extract-d09-d11.md | L889 | ORCHESTRATOR | PROCESS | Screenshots at 3 viewports: 1440px, 1024px, 768px |
| 14 | ITEM 83 | extract-d09-d11.md | L892 | ORCHESTRATOR | PROCESS | Phase 3: PA Audit (parallel) |
| 15 | ITEM 84 | extract-d09-d11.md | L893 | ORCHESTRATOR | PROCESS | PA-1 thru PA-9 (9 parallel auditors) |
| 16 | ITEM 85 | extract-d09-d11.md | L894 | ORCHESTRATOR | PROCESS | (9 Opus) all PA auditors must be Opus |
| 17 | ITEM 86 | extract-d09-d11.md | L895 | ORCHESTRATOR | PROCESS | + Integrative auditor |
| 18 | ITEM 87 | extract-d09-d11.md | L897 | ORCHESTRATOR | PROCESS | Phase 3: Weaver |
| 19 | ITEM 88 | extract-d09-d11.md | L898 | ORCHESTRATOR | PROCESS | Agent 15 (Weaver) = 15 total agents |
| 20 | ITEM 89 | extract-d09-d11.md | L899 | ORCHESTRATOR | PROCESS | Weaver must be Opus, produces final VERDICT |

### 12.2 PA Question and Content Items

| # | Item ID | Source | VA Line | Agent | Type | Text |
|---|---------|--------|---------|-------|------|------|
| 21 | ITEM 73 | extract-d12-d14.md | L1067 | PA-AUDITOR | PROCESS | Phase 3: PA auditor checks transition variety + rhythm |
| 22 | ITEM 065 | extract-d21-d25.md | L1777 | PIPELINE-META | RECOMMENDATION | PA question count reconciliation — 4 find-replace (#7) |
| 23 | ITEM 073 | extract-d21-d25.md | L1789 | PIPELINE-META | RECOMMENDATION | Add integrative gestalt auditor (#14) |
| 24 | ITEM 074 | extract-d21-d25.md | L1790 | PIPELINE-META | RECOMMENDATION | Add emotional trajectory to TC + PA (#15) |
| 25 | ITEM 160 | extract-d21-d25.md | L2006 | PIPELINE-META | DECISION | PROVEN: PA Mode 4 (9 auditors) >> Mode 2 for catching failures |
| 26 | ITEM 20 | extract-d18-d20.md | L1397 | PA-AUDITOR | FILE_REF | CCS != PA-05 diagram (from A6) |
| 27 | ITEM 064 | extract-d21-d25.md | L1776 | PIPELINE-META | RECOMMENDATION | Semantic value 3-question test (#6) |

### 12.3 Anti-Pattern Items (PA-Detectable)

| # | Item ID | Source | VA Line | Agent | Type | Text |
|---|---------|--------|---------|-------|------|------|
| 28 | ITEM 001 | extract-d15-d17.md | L1125 | GATE-RUNNER | FILE_REF | 14 COMPOSITIONAL ANTI-PATTERNS (from B4) |
| 29 | ITEM 002 | extract-d15-d17.md | L1130 | GATE-RUNNER | VALUE | Current catalog covers 3/153 pairs = 2% coverage |
| 30 | ITEM 005 | extract-d15-d17.md | L1144-1148 | GATE-RUNNER | RECOMMENDATION | AP-02 COLOR ZONE CONFLICT |
| 31 | ITEM 007 | extract-d15-d17.md | L1152 | GATE-RUNNER | RECOMMENDATION | AP-03 TRANSITION MONOTONY |
| 32 | ITEM 008 | extract-d15-d17.md | L1153-1154 | GATE-RUNNER | RECOMMENDATION | AP-04 SCALE COLLISION |
| 33 | ITEM 009 | extract-d15-d17.md | L1155-1156 | GATE-RUNNER | RECOMMENDATION | AP-05 SPACING FLAT-LINE |
| 34 | ITEM 011 | extract-d15-d17.md | L1161-1162 | PA-AUDITOR | RECOMMENDATION | AP-06 CHANNEL ISOLATION |
| 35 | ITEM 012 | extract-d15-d17.md | L1163-1164 | PA-AUDITOR | RECOMMENDATION | AP-07 METAPHOR BLEED |
| 36 | ITEM 013 | extract-d15-d17.md | L1165-1166 | PA-AUDITOR | RECOMMENDATION | AP-08 COMPONENT ORPHAN |
| 37 | ITEM 019 | extract-d15-d17.md | L1181 | PA-AUDITOR | RECOMMENDATION | AP-12 RESTRAINT EROSION |
| 38 | ITEM 020 | extract-d15-d17.md | L1182 | PA-AUDITOR | RECOMMENDATION | AP-13 BOOKEND ASYMMETRY |

### 12.4 Revision Quality Items

| # | Item ID | Source | VA Line | Agent | Type | Text |
|---|---------|--------|---------|-------|------|------|
| 39 | ITEM 028 | extract-d15-d17.md | L1199 | ORCHESTRATOR | DECISION | REVISION QUALITY — WHY FIX CYCLES DEGRADE COMPOSITION |
| 40 | ITEM 038 | extract-d15-d17.md | L1237-1238 | PA-AUDITOR | WARNING | Multi-channel encoding decouples during revision |
| 41 | ITEM 039 | extract-d15-d17.md | L1239-1240 | PA-AUDITOR | WARNING | Density arcs flatten when individual zones corrected |
| 42 | ITEM 040 | extract-d15-d17.md | L1241-1242 | PA-AUDITOR | WARNING | Bookending symmetry breaks when one end modified |
| 43 | ITEM 041 | extract-d15-d17.md | L1243-1244 | PA-AUDITOR | WARNING | Component-context coupling breaks on CSS changes |
| 44 | ITEM 042 | extract-d15-d17.md | L1245-1246 | PA-AUDITOR | WARNING | Restraint coherence degrades when surrounding mechanisms change |

### 12.5 Cross-Page Coherence Items

| # | Item ID | Source | VA Line | Agent | Type | Text |
|---|---------|--------|---------|-------|------|------|
| 45 | ITEM 052 | extract-d15-d17.md | L1268 | ORCHESTRATOR | DECISION | CROSS-PAGE COHERENCE — FAMILY DNA |
| 46 | ITEM 053 | extract-d15-d17.md | L1273 | ORCHESTRATOR | VALUE | ~30 CSS properties IDENTICAL between independently-built pages |
| 47 | ITEM 054 | extract-d15-d17.md | L1277 | GATE-RUNNER | DECISION | SHARED DNA (identical across Gas Town + CD-006) |

### 12.6 Applied/Composed Mode Detection Items

| # | Item ID | Source | VA Line | Agent | Type | Text |
|---|---------|--------|---------|-------|------|------|
| 48 | ITEM 55 | extract-d18-d20.md | L1498-1499 | GATE-RUNNER | VALUE | APPLIED: Remove A, B unchanged (low coupling) |
| 49 | ITEM 56 | extract-d18-d20.md | L1498-1499 | GATE-RUNNER | VALUE | COMPOSED: Remove A, B's meaning shifts (high coupling) |
| 50 | ITEM 69 | extract-d18-d20.md | L1529 | GATE-RUNNER | VALUE | THE REMOVAL TEST (Gas Town) |
| 51 | ITEM 70 | extract-d18-d20.md | L1531-1535 | GATE-RUNNER | VALUE | Remove bento grid from Zone 2: all others unchanged, CCS 0.25-0.35 |
| 52 | ITEM 72 | extract-d18-d20.md | L1537-1542 | GATE-RUNNER | VALUE | Remove zone backgrounds: typography/spacing still work |

### 12.7 Emotional Arc Items

| # | Item ID | Source | VA Line | Agent | Type | Text |
|---|---------|--------|---------|-------|------|------|
| 53 | ITEM 037 | extract-d21-d25.md | L1664 | PA-AUDITOR | PROCESS | PA auditor can assess emotional arc AFTER build |
| 54 | ITEM 038 | extract-d21-d25.md | L1665 | PA-AUDITOR | AGENT_ROLE | PA auditor is PRIMARY for emotional arc check (council override of original Compositional Critic assignment) |

### 12.8 Ship Threshold Items (Overlap with GATES Layer)

| # | Item ID | Source | VA Line | Agent | Type | Text |
|---|---------|--------|---------|-------|------|------|
| 55 | ITEM 77 | extract-d01-d03.md | L201-204 | ORCHESTRATOR | THRESHOLD | SHIP: PA-05>=3.5/4, Zero soul violations |
| 56 | ITEM 026 | extract-d15-d17.md | L1192 | PIPELINE-META | RECOMMENDATION | Phase 3 PA adds anti-pattern-aware questions |

### 12.9 Rerouted VALUES Items (12 from Council Verdict Category B)

| # | Item ID | Source | VA Line | Text | Council Routing |
|---|---------|--------|---------|------|-----------------|
| 57 | ITEM 22 (D18) | extract-d18-d20.md | L1406 | PA-05 measures perceived quality | VALUES -> PA-AUDITOR |
| 58 | ITEM 23 (D18) | extract-d18-d20.md | L1408 | Does it look DESIGNED? | VALUES -> PA-AUDITOR |
| 59 | ITEM 27 (D18) | extract-d18-d20.md | L1412 | 1-4 scale FLAT/ASSEMBLED/COMPOSED/DESIGNED | VALUES -> PA-AUDITOR |
| 60 | ITEM 28-31 (D18) | extract-d18-d20.md | L1415-1420 | CCS definition, measurement, scale | VALUES -> PA-AUDITOR (RESEARCH CONSTRUCT) |
| 61 | ITEM 32-35 (D18) | extract-d18-d20.md | L1426-1443 | Page scores (Middle, Gas Town, CD-006, Flagship) | VALUES -> PA-AUDITOR |
| 62 | ITEM 43-45 (D18) | extract-d18-d20.md | L1463-1473 | Register 1/2/3 definitions | VALUES -> PA-AUDITOR |

### 12.10 Additional Rerouted Tier Items (from registry, PA-AUDITOR agent)

| # | Item ID | Source | VA Line | Text |
|---|---------|--------|---------|------|
| 63 | ITEM 36 | extract-d09-d11.md | L813-815 | Quality tiers are DISCRETE REGISTERS |
| 64 | ITEM 37 | extract-d09-d11.md | L818 | Tiers measured: PA-05, CCS, Mechanisms, CSS Lines |
| 65 | ITEM 38 | extract-d09-d11.md | L821 | FLAGSHIP (highest tier) |
| 66 | ITEM 39 | extract-d09-d11.md | L822 | Flagship: PA-05 >=3.5 (hypothesis), CCS 0.55-0.80 |
| 67 | ITEM 40 | extract-d09-d11.md | L823 | Register 3 (ATMOSPHERIC coupling) |
| 68 | ITEM 41 | extract-d09-d11.md | L824 | Flagship: 16-18 mechanisms, 1000-1500 CSS lines |
| 69 | ITEM 42 | extract-d09-d11.md | L825 | NEVER ACHIEVED — requires 3-pass + Opus |
| 70 | ITEM 43 | extract-d09-d11.md | L826 | Unified pervading metaphor throughout |
| 71 | ITEM 44 | extract-d09-d11.md | L827 | Content-form INDISTINGUISHABLE |
| 72 | ITEM 45 | extract-d09-d11.md | L830 | CEILING (second tier) |
| 73 | ITEM 46 | extract-d09-d11.md | L831 | Ceiling: PA-05 3.0-3.5, CCS 0.35-0.55 |
| 74 | ITEM 47 | extract-d09-d11.md | L832 | Register 2 (STRUCTURAL coupling) |
| 75 | ITEM 48 | extract-d09-d11.md | L833 | Ceiling: 12-15 mechanisms, 700-1000 CSS lines |
| 76 | ITEM 49 | extract-d09-d11.md | L834 | CD-006 (39/40), Gas Town (3.5/4) exemplars |
| 77 | ITEM 50 | extract-d09-d11.md | L835 | Multi-coherence LOCAL not GLOBAL |
| 78 | ITEM 51 | extract-d09-d11.md | L838 | MIDDLE (Default Floor) |
| 79 | ITEM 52 | extract-d09-d11.md | L839 | Middle: PA-05 2.5-3.0, CCS 0.15-0.35 |
| 80 | ITEM 53 | extract-d09-d11.md | L840 | Register 1 (LOCAL coupling) |
| 81 | ITEM 54 | extract-d09-d11.md | L841 | Middle: 8-10 mechanisms, 350-500 CSS lines |
| 82 | ITEM 55 | extract-d09-d11.md | L842 | Middle experiment (PA-05 4/4 DESIGNED) |
| 83 | ITEM 56 | extract-d09-d11.md | L843 | Highest ROI tier |
| 84 | ITEM 57 | extract-d09-d11.md | L846 | FLOOR (lowest tier) |
| 85 | ITEM 58 | extract-d09-d11.md | L847 | Floor: PA-05 <2.5, CCS <0.15 |
| 86 | ITEM 59 | extract-d09-d11.md | L848 | Register 0 (NO coupling) |
| 87 | ITEM 60 | extract-d09-d11.md | L849 | Floor: 5 mechanisms, 150-250 CSS lines |
| 88 | ITEM 61 | extract-d09-d11.md | L850 | Flagship experiment (PA-05 1.5/4 FAILED) |

**TOTAL: 88 items tracked** (56 Layer 7 + 26 rerouted tier definitions + 6 CCS items tagged RESEARCH CONSTRUCT)

---

## PART 13: FRESH-EYES PRINCIPLE (NON-NEGOTIABLE)

> Source: perceptual-auditing/SKILL.md, line 46-48

**PA auditors MUST be context-starved.** Do NOT provide:
- Mechanism counts
- Pattern names
- Build plan details
- Prior experiment results
- Tier 5 expected scores
- Compositional stack theory

If the auditor knows "this should have 12 mechanisms," they will see 12 mechanisms everywhere.

**Zero context = genuine first impressions.**

The auditor receives ONLY:
1. The rendered page (saved screenshots)
2. The PA questions
3. Nothing else

### 13.1 The One Rule

> "React to what you see before you check what you know."

If an agent's first action after taking a screenshot is opening a CSS file, the skill has failed.
If an agent's first action is describing what they SEE and FEEL, the skill is working.

### 13.2 The Three Laws

1. The answer must require a screenshot (not answerable from source code alone)
2. The answer must be describable in plain language (no CSS vocabulary)
3. A non-designer must be able to validate the answer

---

## APPENDIX A: PERCEPTION THRESHOLD REFERENCE TABLE

These are MINIMUM deltas for CSS changes to be PERCEPTIBLE. Changes below these are sub-perceptual.

| CSS Property | Minimum Perceptible Delta | What to Look For |
|-------------|--------------------------|------------------|
| Background color | >= 15 RGB on at least one channel | Adjacent backgrounds look DIFFERENT |
| Font-size | >= 2px between zones | Zone text looks LARGER/SMALLER |
| Letter-spacing | >= 0.5px (0.03em at 16px) | Heading tracking feels OPEN vs TIGHT |
| Line-height | >= 0.15 difference | Line spacing VISIBLY shifts |
| Padding/margins | >= 24px between zones | Spatial density SHIFTS at boundaries |
| Border-width | >= 1px (present or absent) | Borders either exist or don't |
| Font-weight | >= 200 units | Weight changes are FELT |
| Total boundary gap | <= 120px stacked | No void exceeding ~8% of viewport |

**Warm palette note:** Warm-palette backgrounds require 1.3-1.5x standard threshold. Effective warm-palette background threshold: >= 20 RGB.

---

## APPENDIX B: QUANTITATIVE GUARDRAILS (FLOORS)

### Content Width and Proportion (at 1440px)

| Metric | Minimum | Optimal | Maximum |
|--------|---------|---------|---------|
| Content container width | 640px (44%) | 700-960px (49-67%) | 1280px (89%) |
| Characters per line (CPL) | 45 | 60-66 | 80 |
| Content-to-viewport ratio | 44% | 65-80% | 89% |

### Typographic Spacing

| Metric | Minimum | Optimal | Maximum |
|--------|---------|---------|---------|
| Body line-height | 1.5 (WCAG) | 1.5-1.6 | 1.8 |
| Space after heading | 12px | 16-24px | 32px |
| Space before heading | 24px | 32-48px | 64px |
| Paragraph gap | 16px | 20-24px | 32px |

### Layout and Grid Spacing

| Metric | Minimum | Optimal | Maximum |
|--------|---------|---------|---------|
| Horizontal padding (desktop) | 32px | 40-64px | 80px |
| Section vertical spacing | 48px | 60-80px | 160px |

### Void Prevention

| Guardrail | Threshold | Pass/Fail |
|-----------|-----------|-----------|
| Max consecutive blank viewports | 1.5 viewport-heights with <30% content | 0-1 = PASS, 2+ = FAIL |
| Min content percentage | 60% of total scroll height | >= 60% = PASS |
| Visual weight distribution | Every third has >= 1 designed moment | All = PASS |
| Width utilization | 65-80% of viewport at 1440px | In range = PASS |

---

*End of PA Protocol artifact. All Layer 7 items accounted for. 12 rerouted VALUES items included. Council verdict rulings applied throughout.*
