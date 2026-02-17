# PA Skill Invocation Audit: Deep Analysis

**Author:** PA-SKILL-AUDITOR (Opus 4.6)
**Date:** 2026-02-17
**Task:** #2 -- Deep-audit perceptual-auditing skill invocation
**Sources Analyzed:**
- `~/.claude/skills/perceptual-auditing/SKILL.md` (847 lines, complete read)
- `ephemeral/prompt-enrichment-audit/00-PROMPT-STRUCTURE-OUTLINE.md` (105 lines)
- `ephemeral/flagship-preparation/01-pa-lessons-for-build.md` (505 lines)
- `ephemeral/flagship-preparation/15-perceptual-hierarchy.md` (609 lines)
- `ephemeral/flagship-preparation/07-kill-criteria.md` (797 lines)
- `ephemeral/flagship-preparation/03-spatial-confidence-gate.md` (1,110 lines)
- `ephemeral/flagship-preparation/17-no-compromise-pipeline.md` (806 lines)

---

## 1. EXECUTIVE SUMMARY

**Rating: 4/10 -- Significant gaps in PA skill invocation.**

The current prompt structure references PA at a surface level: it mentions "9x PA auditors" in the agent roster, "dual PA" in the audit protocol, "gate sequence 0-5" for gates, and "screenshot pre-capture" for logistics. But it fails to invoke the PA skill's deepest and most operationally critical content:

- The 48 PA questions are never enumerated, grouped, or routed to auditors
- PA-05 sub-criteria (the 4-dimension scoring) are referenced by number but not by evaluation protocol
- Void detection questions PA-50 through PA-53 (the ceiling experiment's most important enrichments) are not explicitly integrated into gates
- The severity calibration system (PA-09's LOOKS-WRONG / WOULD-NOT-SHIP / CATASTROPHIC ladder) is not referenced
- The Cold Look protocol and Temporal Firewall are not specified in the coordination layer
- The Mode 4 auditor deployment strategy (9 auditors by dimension) is not in the prompt
- The Builder's 10 self-check (from 01-pa-lessons-for-build.md) is partially in Section 2E but missing 4 of 10 questions
- The Metaphor-Awareness Principles (lines 226-297 of SKILL.md) are not referenced despite the prompt's heavy metaphor emphasis
- The Dual Severity Track (Rule Track vs Perception Track) is absent from the gate architecture

The prompt treats PA as a black box ("run Mode 4 PA") when the skill requires explicit operational scaffolding to function. The PA skill's own structure shows that Mode 4 requires: Lock Sheet production, temporal firewall enforcement, dimension-specialized auditor assignment, cold look protocol, scroll-through protocol, zone sweep passes, finding classification, and verdict synthesis. None of these operational steps appear in the prompt's coordination layer.

---

## 2. CRITICAL GAPS (Must Be Added)

### GAP-C1: Mode 4 Auditor-to-Question Assignment Missing

**What the skill specifies (lines 487-497):**
```
Auditor A: Impression+Emotion (PA-01,04,05,18,19,20,45)
Auditor B: Readability+Typography (PA-02,06,07,08,29)
Auditor C: Spatial+Proportion (PA-09,10,11,30,31,32,33,50,51,52,53)
Auditor D: Flow+Pacing (PA-12,13,34,35,36)
Auditor E: Grid+Layout (PA-14,15,37,38,39)
Auditor F: Consistency+Rhythm (PA-16,17,40,41)
Auditor G: Metaphor+Ideology (PA-42,43,44)
Auditor H: Responsive (PA-21,22,23,46,47)
Adversarial (PA-26,27,28,48)
```

**What the prompt has:** "9x PA auditors (Sonnet)" -- no question assignments, no dimension specialization.

**Why critical:** The ceiling experiment's Mode 4 PA proved that dimension-specialized auditors produce dramatically deeper analysis than generalist auditors. Auditor C (Spatial) at 100% hit rate found 7/7 genuine issues. Without explicit assignments, auditors will self-select questions or duplicate effort.

**Impact if missing:** Auditors overlap on easy questions (PA-01, PA-02), skip hard ones (PA-50 through PA-53), and spatial specialization -- THE most diagnostic dimension -- is diluted.

### GAP-C2: Cold Look Protocol Not Specified

**What the skill specifies (lines 598-611):**
```
1. CLEAR: Close all CSS files, specs, convention docs
2. LOOK (5 seconds): Open viewport screenshot. Do NOT read text. Absorb shape, color, weight.
3. REACT (immediate): Write four locked responses:
   COLD LOOK ({WIDTH}px):
   Gut reaction: [one sentence]
   Worst thing: [one element]
   Best thing: [one element]
   Ship verdict: YES / YES WITH RESERVATIONS / NO
4. LOCK: These responses are FINAL. Cannot be changed after reading specs.
5. REPEAT: Independently for each viewport.
```

**What the prompt has:** No mention of Cold Look. Section 3C mentions "screenshot pre-capture" but not the protocol for how auditors USE those screenshots.

**Why critical:** The Cold Look is the PA skill's most important anti-bias mechanism. Without it, auditors read CSS first and rationalize visual problems. The temporal firewall (cold look BEFORE lock sheet) is the foundation of finding integrity.

### GAP-C3: Void Detection Pipeline (PA-50 through PA-53) Not Integrated into Gates

**What the skill specifies (lines 337-364):**
PA-50 through PA-53 are Tier 4 "Void Prevention" questions, MANDATORY for Ceiling+ audits. They include:
- PA-50: Count consecutive blank viewport-heights below 30% content
- PA-51: Estimate total content-to-scroll percentage
- PA-52: Designed moment per third of scroll
- PA-53: Container width utilization at 1440px

Plus **binary void guardrails** (lines 350-360):
- Max consecutive blank: 1.5 viewport-heights
- Min content percentage: 60%
- Visual weight per third: at least 1 designed moment
- Width utilization: 65-80%

**What the prompt has:** Section 2A mentions "content-to-void >= 60:40" and "max void threshold" but does NOT reference PA-50 through PA-53 by number, does not include the binary guardrail table, and does not route these questions to Auditor C (Spatial).

**Why critical:** These questions were CREATED specifically because the ceiling experiment's void was missed by earlier audits. They are the most important PA enrichment in the entire skill. Failing to integrate them into the prompt reproduces the exact conditions that caused the ceiling failure.

### GAP-C4: PA-05 Scoring Methodology Incomplete

**What the skill specifies (lines 88-133):**
PA-05 has 4 sub-criteria with explicit PASS/FAIL language:
1. DESIGNED: "intentional composition, or assembled components?"
2. COHERENT: "one designer, or vocabulary from multiple systems?"
3. PROPORTIONATE (PA-05c): THREE sub-dimensions (horizontal, vertical, breathing), ALL THREE must pass
4. POLISHED: "Ready to ship as-is?"

Plus scoring: 4/4 = YES (ship-ready), 3/4 = YES WITH RESERVATIONS, 2/4 or fewer = NO.

PA-05c has expanded sub-dimensions (lines 105-122):
- 3a Horizontal Proportion: 65-80% of viewport width
- 3b Vertical Proportion: every third has a designed moment
- 3c Breathing Proportion: negative space designed not abandoned
- All THREE must PASS for PA-05c to PASS

**What the prompt has:** Section 3C mentions "dual PA" and FK-01 in kill criteria references "PA-05 avg_score >= 3" but the EVALUATION PROTOCOL (what auditors actually look for in each sub-criterion) is absent.

**Why critical:** Without the evaluation protocol, auditors will score PA-05 holistically ("looks okay") instead of systematically (4 sub-criteria x explicit pass/fail). The ceiling experiment was scored 1.5/4 when PA-05c was evaluated with the expanded 3-sub-dimension protocol -- without it, it would have scored higher and the spatial failure would have been masked.

### GAP-C5: Dual Severity Track Absent from Gates

**What the skill specifies (lines 737-754):**
Two independent severity tracks:
- **Rule Track:** SOUL VIOLATION / CONVENTION BUG / OVERFLOW
- **Perception Track:** WOULD-NOT-SHIP / LOOKS-WRONG / COULD-BE-BETTER

Critical rules:
1. Perception Track findings can NEVER be reclassified onto Rule Track
2. Cannot be dismissed because "the convention allows it"
3. A finding can exist on BOTH tracks simultaneously
4. Convention vs perception conflict: escalate to human

**What the prompt has:** Kill criteria FK-05 mentions "WOULD-NOT-SHIP" but the dual-track classification system is absent. No instructions for the synthesizer on how to classify findings into tracks.

**Why critical:** Without dual severity, the synthesizer will merge all findings into a single severity scale. This allows perception-track findings ("this void looks wrong") to be dismissed by rule-track compliance ("but the CSS is valid"). This is EXACTLY what happened in the initial lighter audit of the ceiling experiment.

### GAP-C6: Scroll-Through Protocol Not Specified

**What the skill specifies (lines 613-640):**
Full-page screenshots compress 15,000px pages to thumbnail scale where crushed columns look "fine." The scroll-through forces viewport-scale examination:
1. Start at top (scroll position 0)
2. Take viewport-sized screenshot (fullPage: false)
3. Scroll down 80% of viewport height
4. Repeat until bottom
5. Produces 5-15 screenshots
6. Examine EACH screenshot individually at full viewport scale

Plus JavaScript implementation code (lines 627-638).

**What the prompt has:** "screenshot pre-capture" mentioned in Section 3C but no specification of scroll-through vs full-page, no viewport increment, no count expectation.

**Why critical:** The scroll-through protocol IS the void detection mechanism. Full-page screenshots make voids invisible. The Mode 4 PA that caught the ceiling void used 102 viewport-scale screenshots. Without specifying scroll-through, auditors will take 2-3 full-page screenshots and miss viewport-scale problems.

### GAP-C7: PA-17 and PA-41 Ceiling+ Elevation Missing

**What the skill specifies (lines 202-215):**
PA-17 (rhythm) and PA-41 (repetition monotony) are formally elevated to Tier 1 equivalent for Ceiling+ audits. This is MANDATORY, not advisory:
- FAIL on PA-17 or PA-41 = equivalent to FAIL on PA-01 through PA-05
- All Mode 4 auditors MUST evaluate PA-17 and PA-41 regardless of assigned question set
- Binary enforcement: if PA-17 FAIL or PA-41 FAIL, page verdict CANNOT exceed "YES WITH RESERVATIONS"

**What the prompt has:** No mention of PA-17 or PA-41 elevation. No rhythm/monotony enforcement in gates or kill criteria.

**Why critical:** The middle experiment's highest-leverage perceptual finding was "metronomic rather than musical" rhythm. The ceiling experiment compounded rhythm failure with spatial failure. If the flagship prompt doesn't enforce PA-17/PA-41 elevation, the same monotony will recur.

---

## 3. HIGH-VALUE ADDITIONS (Should Be Added)

### ADD-H1: Builder's 10 Self-Check (Complete Version)

The prompt's Section 2E "BUILDER SELF-CHECK" has ~11 items but is missing several from the Builder's 10 (from 01-pa-lessons-for-build.md):

| Builder's 10 Question | In Prompt 2E? | Gap |
|----------------------|---------------|-----|
| B-01: Section has content filling container? | Partial (content-to-void) | Missing explicit per-section check |
| B-02: Transition is designed moment? | NO | **MISSING** |
| B-03: Content uses container width at 1440? | YES (container width) | Present |
| B-04: All text readable? | Partial (CPL) | Missing font-size/contrast |
| B-05: Section looks different from previous? | NO | **MISSING** |
| B-06: Tokens used? | YES (token compliance) | Present |
| B-07: Metaphor identifiable from section? | NO | **MISSING** |
| B-08: Spacing consistent with previous? | YES (rhythm) | Present |
| B-09: Container 940-960px? | YES | Present |
| B-10: Visual interest distributed across scroll? | YES (designed moment) | Present |

Three questions missing: B-02 (transition quality), B-05 (section visual differentiation), B-07 (metaphor structural presence per section).

### ADD-H2: Three Embedded Checkpoints for Build Process

From 01-pa-lessons-for-build.md Section 4, three checkpoints embed PA-level scrutiny INTO the build:
1. **Content Audit (before CSS):** Does each zone have enough content? Binary: each zone >= 3 distinct content elements.
2. **Spatial Skeleton Check (after layout):** Full-page squint test, scroll-through count, content-to-scroll ratio.
3. **Scroll Experience Check (after styling):** Does interest sustain? Is footer reachable? Are transitions designed?

These map to Checkpoints A and B in the prompt but are more operationally specific. The prompt says "checkpoints A+B" without specifying what they CHECK.

### ADD-H3: Metaphor-Awareness Principles for Auditors

The PA skill (lines 226-297) contains detailed guidance on how auditors should handle metaphor-driven layouts:
- Metaphor expression spectrum: Structural > Atmospheric > Labeled > Announced
- Common metaphor traps: compression, width, density, monotony, label, dead zone
- The core principle: "metaphor shapes experience; guardrails prevent it from breaking experience"
- The distinction: "I wouldn't design it this way" != "This violates guardrails"

The prompt emphasizes metaphor heavily (Layer 1 conviction, Pass 3 metaphor integration) but does NOT tell the PA auditors how to evaluate metaphor-driven designs. Without these principles, auditors will flag metaphor-driven spatial decisions as failures when they are intentional.

### ADD-H4: PA-09 Severity Calibration

The PA skill (lines 153-165) provides explicit severity calibration for dead space:

| Dead Space Scale | Severity | Action |
|-----------------|----------|--------|
| 1-2 viewport-heights | LOOKS-WRONG | Document and flag |
| 3-5 viewport-heights | WOULD-NOT-SHIP | Mandatory fix |
| 6+ viewport-heights | CATASTROPHIC | Structural rebuild required |

Without this calibration, auditors report "dead space" without distinguishing minor from catastrophic. The ceiling experiment had CATASTROPHIC (24 viewport-heights) dead space but initial auditors reported it with the same severity as minor spacing issues.

### ADD-H5: Information Isolation Matrix

The PA skill (lines 757-765) specifies a strict information isolation protocol:

| From | To | Blocked | Why |
|------|-----|---------|-----|
| Research Contextualizer | Visual Auditors | ALL | Auditors must not know what is LOCKED |
| Visual Auditors | Research Contextualizer | ALL | Contextualizer must not be influenced |
| Research Validator | Visual Auditors | ALL | Classifications must not influence |
| Visual Auditors | Fixers | Direct | Findings go through validation first |

The prompt mentions "blind novelty" and "fresh-eyes" but does not specify the information isolation matrix that prevents auditors from receiving build context.

### ADD-H6: Auditor Language Hard Block

The PA skill (lines 718-721) specifies a hard block on CSS vocabulary in auditor responses:

> Answers may NOT contain: px, rem, em, %, hex, rgb, rgba, border-radius, box-shadow, padding, margin, font-size, font-family, line-height, max-width, min-width, flex, grid, gap, opacity, z-index, overflow, display, position, or ANY CSS property name.

> Use instead: heavy, light, cramped, spacious, jarring, smooth, floating, grounded, anxious, confident, broken, polished, warm, cold, sharp, soft, cluttered, breathing, stacking, flowing, stuck, drifting.

This is not in the prompt. Without it, auditors describe problems in CSS terms (verifying code) instead of perceptual terms (describing experience).

### ADD-H7: Root Cause Classification Protocol

From 01-pa-lessons-for-build.md Section 5, finding root causes should be classified:

| Type | Fix Strategy |
|------|-------------|
| CONTENT | Add content or remove containers. CSS fixes useless. |
| SPACING | Adjust padding/margin values. |
| STRUCTURAL | Restructure information architecture. |
| EXECUTION | Fix CSS to match design intent. |
| METAPHOR | Modify metaphor expression or choose different metaphor. |

The ceiling experiment's void was misclassified as SPACING when it was CONTENT, causing the fix to fail. Without this classification in the prompt, the synthesizer will repeat this error.

---

## 4. SPECIFIC INSERTABLE TEXT

### For Layer 2A (SPATIAL):

```
VOID DETECTION (PA-50 through PA-53, MANDATORY):
- Max consecutive blank viewports: 1.5 viewport-heights at 1440px with <30% content = FAIL if 2+ consecutive
- Min content percentage: 60% of total scroll height must contain meaningful content
- Visual weight distribution: every third of page must have at least 1 designed moment
- Width utilization: content container at 65-80% of viewport width at 1440px
Builder runs these as self-checks after each major section. Spatial auditor verifies at Pass 1 gate.
```

### For Layer 2C (COMPOSITIONAL):

```
RHYTHM ENFORCEMENT (PA-17 + PA-41, Ceiling+ MANDATORY):
PA-17 rhythm and PA-41 repetition monotony are Tier 1 equivalent for flagship.
If PA-17 = FAIL or PA-41 = FAIL, page verdict CANNOT exceed "YES WITH RESERVATIONS" regardless of other PA scores.
All 9 Mode 4 auditors evaluate rhythm/monotony regardless of assigned question set.
```

### For Layer 2E (BUILDER SELF-CHECK):

Add missing Builder's 10 questions:
```
- Transition between each major section: designed moment (visual shift, breathing space) or just empty gap?
- Each section visually distinct from previous section (different visual treatment, diagram, table, callout)?
- Without reading text labels, can you sense the metaphor from visual structure alone?
```

### For Layer 3B (COMMUNICATION):

```
PA INFORMATION ISOLATION (NON-NEGOTIABLE):
- Auditors receive ONLY: screenshots + PA questions. NO build plan, mechanism count, metaphor name, prior results.
- Cold Look protocol: 5-second look at screenshot, lock 4 responses (gut reaction, worst thing, best thing, ship verdict) BEFORE answering PA questions. Locked responses are FINAL.
- Auditor answers may NOT contain CSS property names (px, rem, padding, margin, etc). Use perceptual language only.
- Lock Sheet (sovereignty classification) provided to synthesizer AFTER auditor findings are locked, never before.
```

### For Layer 3C (AUDIT PROTOCOL):

```
MODE 4 DEPLOYMENT:
Screenshot pre-capture: team-lead takes ALL screenshots BEFORE spawning auditors:
  - Cold look screenshots: fullPage at 1440px, 1024px, 768px (3 images)
  - Scroll-through: viewport-sized screenshots at 80% scroll increments for each viewport width
  - Expected: 30-45 screenshots total (10-15 per viewport width)
  - Save to _perceptual-audit/screenshots/ with systematic naming
  - Auditors read images via Read tool, NEVER touch Playwright

AUDITOR ASSIGNMENTS (dimension-specialized, NOT generalist):
  A: Impression+Emotion → PA-01,04,05,18,19,20,45
  B: Readability+Typography → PA-02,06,07,08,29
  C: Spatial+Proportion → PA-09,10,11,30,31,32,33,50,51,52,53
  D: Flow+Pacing → PA-12,13,34,35,36
  E: Grid+Layout → PA-14,15,37,38,39
  F: Consistency+Rhythm → PA-16,17,40,41
  G: Metaphor+Ideology → PA-42,43,44
  H: Responsive → PA-21,22,23,46,47
  I: Adversarial → PA-26,27,28,48

ALL auditors additionally evaluate PA-17 (rhythm) and PA-41 (monotony) -- Ceiling+ elevation.

SEVERITY CALIBRATION for spatial findings:
  1-2 viewport-heights dead space → LOOKS-WRONG
  3-5 viewport-heights → WOULD-NOT-SHIP
  6+ viewport-heights → CATASTROPHIC (structural rebuild, not CSS fix)

DUAL SEVERITY TRACK in synthesis:
  Rule Track: soul violation / convention bug / overflow
  Perception Track: would-not-ship / looks-wrong / could-be-better
  Perception findings CANNOT be dismissed by convention compliance.
  Convention vs perception conflict → escalate to human.

ROOT CAUSE CLASSIFICATION by synthesizer:
  CONTENT (add content, CSS useless) / SPACING (adjust CSS) / STRUCTURAL (restructure IA) / EXECUTION (fix CSS) / METAPHOR (modify metaphor)
```

### For Layer 3C (Gate Integration):

```
PA-05 EVALUATION PROTOCOL (for both dual PAs and Mode 4 Auditor A):
  Score ALL FOUR sub-criteria independently:
  1. DESIGNED: intentional composition or assembled components? Look for multi-scale coherence, rhythm variation, deliberate focal points.
  2. COHERENT: one designer or vocabulary from multiple systems? Look for consistent mechanism deployment, no dialect shifts.
  3. PROPORTIONATE (3 sub-dimensions, ALL must pass):
     a. Horizontal: content fills 65-80% viewport width
     b. Vertical: every third of page has designed moment
     c. Breathing: negative space designed (silence in music) not abandoned (dropped signal)
  4. POLISHED: ready to ship? Missing elements? Token compliance? Transition grammar?

  Scoring: 4/4 = YES, 3/4 = YES WITH RESERVATIONS (name failing criterion), 2/4 or fewer = NO

FK-01 GATE: avg PA-05 across both PAs >= 3/4. If PROPORTIONATE (PA-05c) fails for both PAs, DO NOT SHIP regardless of other sub-criteria.
```

---

## 5. PA QUESTION MAP

Complete map of all 48+ PA questions and their reference status in the prompt:

### Tier 1: Mandatory Five (Every Audit)

| PA# | Question Summary | Referenced in Prompt? | Where? | Gap Level |
|-----|-----------------|----------------------|--------|-----------|
| PA-01 | First thing that bothers you | Indirectly (cold look concept) | Not explicit | MEDIUM |
| PA-02 | Text uncomfortable to read | Indirectly (CPL in 2E) | 2E check | LOW |
| PA-03 | One designer or three | NO | -- | LOW (redundant with PA-05b) |
| PA-04 | Eye goes where first | NO | -- | MEDIUM |
| PA-05 | Would you put your name on this | YES (FK-01 references score) | Kill criteria | HIGH (protocol missing) |

### Tier 2: Standard Fifteen

| PA# | Question Summary | Referenced? | Gap Level |
|-----|-----------------|-------------|-----------|
| PA-06 | Words stacking vertically | NO | LOW |
| PA-07 | Read longest paragraph | Indirectly (CPL) | LOW |
| PA-08 | Squint to read | NO | LOW |
| PA-09 | Dead space no purpose | Indirectly (void metrics) | HIGH (severity calibration missing) |
| PA-10 | Squint test balanced | Indirectly (SC-04) | MEDIUM |
| PA-11 | Margins generous or anxious | NO | LOW |
| PA-12 | Eyes flow smoothly | NO | MEDIUM |
| PA-13 | Clear visual ending | Indirectly (footer check) | LOW |
| PA-14 | Columns breathing room | NO | LOW |
| PA-15 | Left edge positions | NO | LOW |
| PA-16 | Identical elements match | NO | LOW |
| PA-17 | Visual rhythm | NO | **CRITICAL** (Ceiling+ elevation missing) |
| PA-18 | Grays same family | NO | LOW |
| PA-19 | Element from different website | NO | LOW |
| PA-20 | Three-word personality | Indirectly ("warm authoritative unhurried" in Layer 1) | LOW |

### Tier 2 Extended

| PA# | Question Summary | Referenced? | Gap Level |
|-----|-----------------|-------------|-----------|
| PA-29 | Header text styles competing | NO | LOW |
| PA-30 | 1440px designed for this width | Indirectly (container width) | MEDIUM |
| PA-31 | Surrounding space designed or leftover | NO | MEDIUM |
| PA-32 | Visual weight distributed across scroll | Indirectly (designed moment per quartile in 2C) | MEDIUM |
| PA-33 | Largest empty space: silence or dropped signal | NO | HIGH |
| PA-34 | Transition: designed or empty space | NO | HIGH (3-transition minimum in 2C doesn't reference this) |
| PA-35 | Interest level across scroll | NO | HIGH |
| PA-36 | Dramatic visual moment position | Indirectly (designed moment per quartile) | MEDIUM |
| PA-37 | 5+ competing elements in container | NO | LOW |
| PA-38 | Clear reading order in callout | NO | LOW |
| PA-39 | Header vs content ratio | Indirectly (SP-05 header ratio) | LOW |
| PA-40 | Section spacing consistent | Indirectly (rhythm in 2E) | LOW |
| PA-41 | Patterns repeated 4+ times | NO | **CRITICAL** (Ceiling+ elevation missing) |

### Metaphor Questions

| PA# | Question Summary | Referenced? | Gap Level |
|-----|-----------------|-------------|-----------|
| PA-42 | Metaphor causing visual problem | NO | HIGH (prompt is metaphor-heavy) |
| PA-43 | Same metaphor, less visual cost | NO | HIGH |
| PA-44 | Sense metaphor without labels | Indirectly (metaphor structural 70% target) | HIGH |
| PA-45 | Good design moment to show someone | NO | LOW |

### Tier 3: Deep Dive

| PA# | Question Summary | Referenced? | Gap Level |
|-----|-----------------|-------------|-----------|
| PA-21 | Designed for this width | NO | LOW |
| PA-22 | User feel served or punished | NO | LOW |
| PA-23 | What breaks 200px narrower | NO | LOW |
| PA-24 | Belongs with siblings | N/A (single page) | N/A |
| PA-25 | Identify design system | N/A (single page) | N/A |
| PA-26 | Convention causing visual problem | NO | MEDIUM |
| PA-27 | Design from scratch | NO | MEDIUM |
| PA-28 | Make terrible while passing rules | NO | MEDIUM |
| PA-46 | 768px reorganization sensible | NO | LOW |
| PA-47 | "Seen this before" scroll point | NO | MEDIUM |
| PA-48 | Rank among 5 options | NO | LOW |

### Tier 4: Void Prevention (Ceiling+ MANDATORY)

| PA# | Question Summary | Referenced? | Gap Level |
|-----|-----------------|-------------|-----------|
| PA-50 | Count blank viewport-heights | Indirectly (SP-02 void) | **CRITICAL** (not routed to auditors) |
| PA-51 | Content-to-scroll percentage | Indirectly (SC-03) | **CRITICAL** (not routed to auditors) |
| PA-52 | Designed moment per third | Indirectly (2C) | **CRITICAL** (not routed to auditors) |
| PA-53 | Container width utilization | Indirectly (SP-01) | **CRITICAL** (not routed to auditors) |

### Summary Statistics

- **Total PA questions in skill:** 48 (PA-01 through PA-48, PA-50 through PA-53)
- **Explicitly referenced in prompt:** 2 (PA-05, PA-05c)
- **Indirectly referenced (threshold present but question not named):** 14
- **Not referenced at all:** 32
- **CRITICAL gaps (must add):** 6 (PA-17, PA-41, PA-50, PA-51, PA-52, PA-53)
- **HIGH gaps (should add):** 7 (PA-05 full protocol, PA-09 severity, PA-33, PA-34, PA-35, PA-42, PA-43)

---

## 6. AUDITOR DEPLOYMENT STRATEGY

### Optimal Assignment (from PA skill, validated by ceiling Mode 4 PA)

The PA skill's Mode 4 assignment (lines 487-497) was empirically validated in the ceiling experiment Mode 4 PA (12 agents, 102 screenshots, all 48 questions answered). Hit rates by dimension:

| Dimension | Auditor | Questions | Hit Rate | Blocking Findings |
|-----------|---------|-----------|----------|-------------------|
| Spatial+Proportion | C | PA-09,10,11,30,31,32,33,50,51,52,53 | 100% | 4 blocking |
| Flow+Pacing | D | PA-12,13,34,35,36 | 100% | 3 blocking |
| Adversarial | I | PA-26,27,28,48 | 100% | 2 blocking |
| Metaphor+Ideology | G | PA-42,43,44 | 100% | 1 blocking |
| Impression+Emotion | A | PA-01,04,05,18,19,20,45 | 71% | 2 blocking |
| Responsive | H | PA-21,22,23,46,47 | 80% | 1 blocking |
| Consistency+Rhythm | F | PA-16,17,40,41 | 50% | 0 blocking |
| Grid+Layout | E | PA-14,15,37,38,39 | 40% | 0 blocking |
| Readability+Typography | B | PA-02,06,07,08,29 | 20% | 0 blocking |

### Load Balancing Analysis

| Auditor | Question Count | Estimated Effort | Load Status |
|---------|---------------|-----------------|-------------|
| A (Impression) | 7 | HIGH (PA-05 alone is complex) | HEAVY |
| B (Readability) | 5 | LOW (often finds nothing if typography is good) | LIGHT |
| C (Spatial) | 11 | EXTREME (most questions + most diagnostic) | **OVERLOADED** |
| D (Flow) | 5 | MEDIUM | BALANCED |
| E (Grid) | 5 | MEDIUM | BALANCED |
| F (Rhythm) | 4 | MEDIUM (elevated questions add work) | BALANCED |
| G (Metaphor) | 3 | MEDIUM (each question requires deep analysis) | BALANCED |
| H (Responsive) | 5 | MEDIUM (multiple viewports) | BALANCED |
| I (Adversarial) | 4 | HIGH (adversarial requires creative attack) | BALANCED |

### Recommendations for Flagship Deployment

1. **Auditor C is overloaded.** 11 questions is nearly 2.5x the median (4-5). The flagship should either:
   - Split Auditor C into C1 (PA-09,10,11,30,31) and C2 (PA-32,33,50,51,52,53) -- 2 spatial auditors
   - Or keep 9 auditors but have the synthesizer WEIGHT Auditor C's findings most heavily

2. **Auditor B is underutilized.** If the page's typography is good (as the ceiling experiment's was), Auditor B produces minimal findings. Consider assigning B additional spatial or flow questions as secondary.

3. **ALL auditors must evaluate PA-17 and PA-41** per Ceiling+ elevation. This adds 2 questions to every auditor's set.

4. **Prompt should specify:** "Auditor C is the PRIMARY spatial evaluator. If only one auditor's findings survive synthesis cuts, keep Auditor C's."

### Insertable Roster for Section 3A:

```
9x PA Auditors (Sonnet 4.5), dimension-specialized:
  A: Impression+Emotion (PA-01,04,05,18,19,20,45) -- includes PA-05 full 4-criterion evaluation
  B: Readability+Typography (PA-02,06,07,08,29) + secondary: PA-32 (weight distribution)
  C: Spatial+Proportion (PA-09,10,11,30,31,32,33,50,51,52,53) -- PRIMARY spatial evaluator, 11 questions
  D: Flow+Pacing (PA-12,13,34,35,36)
  E: Grid+Layout (PA-14,15,37,38,39)
  F: Consistency+Rhythm (PA-16,17,40,41) -- PA-17/PA-41 are Ceiling+ CRITICAL
  G: Metaphor+Ideology (PA-42,43,44)
  H: Responsive (PA-21,22,23,46,47)
  I: Adversarial (PA-26,27,28,48)
  ALL auditors additionally note: PA-17 (rhythm) and PA-41 (monotony) observations
```

---

## 7. GATE INTEGRATION

### How PA Findings Should Feed Into Gates

The prompt's 5-gate structure (outlined in Section 3C) needs PA integration at specific points:

#### Gate 2: Spatial Confidence Gate (After Pass 1)

**Current:** 7 binary checks (SC-01 through SC-07).

**PA Integration needed:**
- SC-04 (squint test) IS a PA-derived check but doesn't reference the PA skill's specific methodology
- Add: Builder runs B-01, B-03, B-09, B-10 from Builder's 10 as self-check BEFORE gate fires
- Add: If embedded auditor flagged spatial alerts during Pass 1, these feed into gate diagnosis

#### Gate 4: Composition Verification Gate (After Pass 2)

**Current:** "Reinforcing pairs, 4-scale coherence, mechanism count 12-16, 3+ transition types, PA-05 quick-check."

**PA Integration needed:**
- PA-05 quick-check should use the FULL 4-criterion protocol, not a simplified version
- Add PA-17 (rhythm) evaluation -- mechanism deployment often creates monotone grids
- Add PA-44 (metaphor without labels) -- verify metaphor is structural before Pass 3 adds vocabulary
- Add PA-34 (transition quality) -- verify 3+ transitions are DESIGNED moments, not empty space

#### Gate 5: Ship-Ready Gate (After Pass 3)

**Current:** "Full programmatic audit, dual perceptual audit, comparative audit, blind novelty."

**PA Integration needed -- this is the Mode 4 deployment point:**
```
GATE 5 PA PROTOCOL:
1. Team-lead pre-captures all screenshots (cold look + scroll-through at 1440, 1024, 768px)
2. Team-lead spawns 9 auditors with dimension assignments (see roster above)
3. Each auditor receives ONLY: screenshots + their assigned PA questions + perceptual language guide
4. Each auditor performs Cold Look protocol FIRST, locks 4 responses
5. Each auditor answers assigned questions + PA-17 + PA-41
6. All findings files collected
7. Synthesizer (separate agent) receives: all findings + Lock Sheet → classifies findings on dual severity track
8. Synthesizer produces AUDIT-REPORT.md with:
   - Per-dimension summary
   - Top 5 concerns (ranked)
   - PA-05 score (4 sub-criteria)
   - Severity distribution (WOULD-NOT-SHIP / LOOKS-WRONG / COULD-BE-BETTER)
   - Root cause classification per finding (CONTENT / SPACING / STRUCTURAL / EXECUTION / METAPHOR)
   - VERDICT: SHIP / SHIP WITH RESERVATIONS / DO NOT SHIP
```

### Kill Criteria PA Hooks

| Kill Criterion | PA Hook | What PA Provides |
|---------------|---------|------------------|
| FK-01 (PA-05 >= 3) | PA-05 full 4-criterion score from both PAs | Quantified quality gate |
| FK-03 (spatial final) | PA-50 through PA-53 corroboration | Perceptual verification of programmatic spatial checks |
| FK-05 (no spatial WNS) | PA-09 severity calibration | Severity classification distinguishes minor from catastrophic |
| SP-02 (void budget) | PA-50 (count blank viewports) | Auditor corroboration of programmatic void measurement |
| CP-03 (zone visibility) | PA-44 (metaphor without labels) | Perceptual test of zone boundary visibility |

### The PA-Gate Feedback Loop

```
BUILD → EMBEDDED CHECKPOINTS (Builder's 10) → SPATIAL GATE (programmatic) →
  COMPOSITION GATE (PA-05 quick + PA-17 + PA-44) → MODE 4 AUDIT (full 48 questions) →
  VERDICT (dual severity track + root cause classification) → SHIP or ITERATE
```

At each stage, the PA depth increases:
- Embedded: 10 questions, 60 seconds, builder runs
- Spatial Gate: 7 binary checks + squint test, 15 min, auditor runs
- Composition Gate: 4-5 PA questions + programmatic, 15 min, auditor + team-lead
- Mode 4: 48 questions + 27 cold looks, 45 min, 9 auditors

This graduated deployment prevents over-auditing early (which wastes time) and under-auditing late (which misses problems).

---

## 8. ADDITIONAL OBSERVATIONS

### What the Prompt Gets RIGHT About PA

1. **Screenshot pre-capture pattern is mentioned.** The prompt knows this is important.
2. **Container width 940-960px is non-negotiable.** Correctly prioritized.
3. **PA-05 score is a kill criterion (FK-01).** Correctly gated.
4. **Void threshold exists in spatial spec (2A).** The concept is present even if PA-50 through PA-53 aren't named.
5. **"Designed moment per quartile" is in 2C.** Maps to PA-52 even if not referenced by number.
6. **Comparative audit is planned.** Comparing to Middle experiment is valuable.

### What the Prompt Gets WRONG About PA

1. **Treats PA as a single event ("run Mode 4 PA") rather than a multi-phase protocol.** The skill defines Mode 4 as: Lock Sheet (Wave 1) -> 9 Auditors in parallel (Wave 2) -> Synthesizer (Wave 3). The prompt collapses all three waves into "9x PA auditors."
2. **Conflates programmatic and perceptual auditing.** SP-01 through SP-07 are programmatic (JavaScript). PA-01 through PA-53 are perceptual (screenshots + human judgment). The prompt mixes them in Section 3C without distinguishing which is which.
3. **Missing the Temporal Firewall.** The skill's most important anti-bias mechanism (cold look BEFORE lock sheet) is absent. Without it, auditors will see the sovereignty classification before forming independent perceptions.
4. **No CSS language block.** Auditors will describe findings in CSS terms, losing the perceptual quality that makes PA findings valuable.
5. **"Dual PA" undersells Mode 4.** The prompt mentions "dual PA" which implies 2 PAs. Mode 4 uses 9 specialized auditors. This ambiguity could cause the execution to deploy only 2 PAs instead of 9.

### PA Skill Lines With Highest Prompt-Insertion Value

| Lines | Content | Why High Value |
|-------|---------|----------------|
| 46-48 | Fresh-eyes principle | Prevents context contamination |
| 88-133 | PA-05 full protocol | Enables precise quality scoring |
| 153-165 | PA-09 severity calibration | Prevents severity conflation |
| 202-215 | PA-17/PA-41 Ceiling+ elevation | Catches rhythm monotony |
| 337-364 | PA-50-53 void questions + guardrails | THE ceiling fix |
| 487-497 | Mode 4 auditor assignments | Ensures dimension coverage |
| 598-611 | Cold Look protocol | Anti-bias mechanism |
| 613-640 | Scroll-through protocol | Void detection mechanism |
| 718-721 | CSS language hard block | Preserves perceptual quality |
| 737-754 | Dual severity track | Prevents perception dismissal |

---

## SUMMARY OF REQUIRED ACTIONS

| Priority | Gap ID | Action | Effort |
|----------|--------|--------|--------|
| **CRITICAL** | GAP-C1 | Add Mode 4 auditor-to-question assignments to Section 3A/3C | 15 lines |
| **CRITICAL** | GAP-C2 | Add Cold Look protocol to Section 3B or 3C | 8 lines |
| **CRITICAL** | GAP-C3 | Add PA-50-53 void questions and binary guardrails to Section 2A | 10 lines |
| **CRITICAL** | GAP-C4 | Add PA-05 full 4-criterion evaluation protocol to FK-01 area | 12 lines |
| **CRITICAL** | GAP-C5 | Add dual severity track to Section 3C synthesis instructions | 8 lines |
| **CRITICAL** | GAP-C6 | Add scroll-through protocol specification to Section 3C | 6 lines |
| **CRITICAL** | GAP-C7 | Add PA-17/PA-41 Ceiling+ elevation to Section 2C | 4 lines |
| **HIGH** | ADD-H1 | Complete Builder's 10 in Section 2E (add B-02, B-05, B-07) | 3 lines |
| **HIGH** | ADD-H2 | Specify checkpoint A/B content (what they CHECK) | 8 lines |
| **HIGH** | ADD-H3 | Add metaphor-awareness principles for auditor prompts | 6 lines |
| **HIGH** | ADD-H4 | Add PA-09 severity calibration table | 5 lines |
| **HIGH** | ADD-H5 | Add information isolation matrix | 6 lines |
| **HIGH** | ADD-H6 | Add auditor CSS language hard block | 4 lines |
| **HIGH** | ADD-H7 | Add root cause classification for synthesizer | 6 lines |

**Total insertable text: ~101 lines across 14 gaps.**

This represents approximately 40-50% increase in Section 3C content, 15-20% increase in Section 2A/2C, and 10% increase in Section 2E. The total prompt would grow by approximately 101 lines -- which may conflict with the 240-line target. The synthesizer should determine which gaps are highest-leverage for the line budget.

---

**REPORT COMPLETE**
**Total source material analyzed:** ~4,779 lines across 7 documents
**PA skill coverage in prompt:** 4/10
**Critical gaps identified:** 7
**High-value additions identified:** 7
**Total insertable text provided:** ~101 lines with exact placement guidance
