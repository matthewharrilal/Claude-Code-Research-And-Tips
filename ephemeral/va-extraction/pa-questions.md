# PA QUESTIONS — Perceptual Audit Question Definitions
## Pipeline v3 Layer 7 — Questions Reference
Date: 2026-02-24
Status: AUTHORITATIVE — split from artifact-pa-protocol-MONOLITHIC.md
Split: Contains question definitions ONLY (PA-01 through PA-77). No deployment, guardrails, or weaver content.

---

## 1. PA-05 — THE CORE QUESTION

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

## 2. TIER 5 — FLAGSHIP DETECTION QUESTIONS (PA-60 through PA-68)

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

---

## 3. FULL PA QUESTION INVENTORY (69 Questions)

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
| PA-69 | Pick two section transitions. Count visual properties changing. Are transition intensities varied or uniform? **Additionally:** Do the changes at each boundary AGREE with each other (e.g., darker bg + heavier type + tighter spacing = all saying "denser"), or do some changes CONTRADICT others (e.g., darker bg but lighter type)? | D |
| PA-70 | Compare densest analytical section to lightest overview. Does visual treatment RESPOND to the difference? | B |
| PA-71 | At the boundary between two adjacent zones, does the transition feel like a smooth handoff or an abrupt collision? Does the transition technique SERVE the content shift, or does it feel arbitrary? | D |

### 3.9 Tier 5: Compositional Depth (PA-60 through PA-68)

See Section 2 above for full question text, scoring criteria, and auditor assignments.

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

## 4. QUALITY FRAMEWORK (10 VALUES Items Integrated)

These definitions are CALIBRATION for the PA-05 scale and Tier 5 questions — not additional questions.

### 4.1 PA-05 Scale Calibration

| Score | Label | Meaning | Historical Reference |
|-------|-------|---------|---------------------|
| 1/4 | FLAT | No perceptible design intent. Uniform treatment. | Flagship experiment (PA-05 1.5/4 FAILED) |
| 2/4 | ASSEMBLED | Individual elements competent but not unified. Template quality. | Current spec baseline (20 suppressors active) |
| 3/4 | COMPOSED | Unified design language. Intentional relationships visible. | Middle experiment (PA-05 4/4 DESIGNED), Gas Town (PA-05 3.5) |
| 4/4 | DESIGNED | Every decision serves the content. Mechanisms in conversation. | NEVER ACHIEVED at Flagship tier |

### 4.2 Quality Tiers (Discrete Registers, Not Continuous Spectrum)

| Tier | PA-05 Range | Mechanisms | CSS Lines | Coupling Register |
|------|-------------|------------|-----------|-------------------|
| FLOOR | < 2.5 | 5 | 150-250 | Register 0 (NO coupling) |
| MIDDLE (default) | 2.5-3.0 | 8-10 | 350-500 | Register 1 (LOCAL coupling) |
| CEILING | 3.0-3.5 | 12-15 | 700-1000 | Register 2 (STRUCTURAL coupling) |
| FLAGSHIP | >= 3.5 | 16-18 | 1000-1500 | Register 3 (ATMOSPHERIC coupling) |

> **CCS (Compositional Coherence Score):** RESEARCH CONSTRUCT — do not operationalize as a numeric pass/fail criterion until methodology is standardized. PA auditors may reference CCS qualitatively but must NOT use it as a gate check.

### 4.3 Tier 5 Scoring

| YES Count | Verdict | Meaning |
|-----------|---------|---------|
| 8-9 / 9 | COMPOSED | Full compositional depth. All stack layers active and perceptible. |
| 6-7 / 9 | APPROACHING | Significant depth. Most stack layers active; 1-2 need strengthening. |
| 3-5 / 9 | STRUCTURED | Some compositional intelligence visible. Multiple stack layers absent. |
| 0-2 / 9 | VOCABULARY ONLY | Mechanisms deployed but not composed. Stack layers not engaged. |

> **PROVISIONAL SCORING NOTE:** Tier 5 scoring thresholds (8-9 = COMPOSED, 6-7 = APPROACHING, etc.) are PROVISIONAL with N=1 validation (derived from compositional intelligence stack theory, not from observed Flagship artifacts). Treat these thresholds as hypotheses until at least N=3 data points exist. Boundary cases (e.g., exactly 6 or exactly 8) should be reported with the caveat "threshold is provisional" and the Weaver should note whether the score feels like a natural break point or an arbitrary cutoff.

### 4.4 Combined Verdict Matrix (PA-05 x Tier 5)

| | PA-05 < 3/4 | PA-05 = 3/4 | PA-05 = 4/4 |
|---|---|---|---|
| **Tier 5: 0-2** | NOT SHIP-READY | STYLED (template) | VOCABULARY ONLY |
| **Tier 5: 3-5** | NOT SHIP-READY | STRUCTURED | STRUCTURED |
| **Tier 5: 6-7** | (unlikely) | APPROACHING | APPROACHING |
| **Tier 5: 8-9** | (impossible in practice) | (unlikely) | **COMPOSED** (target) |

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

*End of PA Questions artifact. 69 questions defined (PA-01 through PA-77, with gaps). Split from artifact-pa-protocol-MONOLITHIC.md.*
