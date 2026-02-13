# MASTER PERCEPTUAL EXECUTION PROMPT

**You are receiving this document as your complete instruction set.** Read it fully before creating any plan or spawning any agents. Everything you need to execute a perceptual auditing run across the entire KortAI Design System pipeline is contained here.

---

## SECTION 1: MISSION STATEMENT

### What You Will Do

You will plan and execute **Perceptual Auditing** across the KortAI Design System pipeline -- 4 completed stages (Components, DD, OD, AD) comprising 18 exploration HTML pages plus 11 base components. You will use TeamCreate agent teams to run audits, enrich provenance layers with findings, and cascade fixes down to the most basic system components.

### What Perceptual Auditing IS

Perceptual Auditing judges visual quality by LOOKING at rendered pages -- not by checking CSS properties, not by reading source code, not by verifying rule compliance. It answers one question: **"Is this good?"** A page can pass every rule check and still look wrong. This skill catches that gap.

### The One Rule

> **"React to what you see before you check what you know."**

Every decision traces back to this sentence. "React" demands a perceptual response. "Before" creates temporal ordering -- perception MUST precede analysis. If an agent's first action after taking a screenshot is opening a CSS file, the skill has failed. If an agent's first action is describing what they SEE and FEEL, the skill is working.

### The Sovereignty Principle

> **"Perceptual Auditing evaluates the EXECUTION of research-backed decisions, never the decisions themselves. Research defines WHAT. Perception judges HOW."**

This governs what happens when a perceptual finding collides with a research-backed decision. Two failure modes it prevents:
1. **Perceptual overreach:** Auditor recommends removing a research-backed F-pattern. The auditor attacks the WHAT, not the HOW.
2. **Research suppression:** Auditor's valid perception ("code blocks create jarring contrast") is dismissed because "the convention allows dark code blocks." The convention becomes a shield.

Three sovereignty categories:
- **ALWAYS-LOCKED:** Soul rules (border-radius: 0, box-shadow: none). Never challengeable.
- **LOCKED:** Research-backed decisions (axis choice, density pairing). Decision protected; execution auditable.
- **CHALLENGEABLE:** Convention values, inherited defaults, builder choices without research backing. Open to challenge.

### The Cascade Requirement

> **"Fixes must be unanimous down to basic components."**

A fix applied only to an exploration HTML file is invisible to downstream consumers who read tokens, patterns, and conventions. Every fix must propagate to its root cause layer -- tokens, patterns, conventions, findings, or identity. When CD or Migration consumes the system, the fixes are already baked in.

### The Three Laws of Perceptual Questions

Every question obeys three laws:
1. **The answer must require a screenshot.** If answerable from CSS/HTML source alone, it's not perceptual.
2. **The answer must be describable in plain language.** No technical vocabulary (px, rem, hex, rgba, flex, grid).
3. **A non-designer must be able to validate the answer.** If validation requires design expertise, the question tests expertise, not perception.

---

## SECTION 2: PIPELINE OVERVIEW

### The Pipeline at a Glance

```
ORIGINAL RESEARCH (337 findings across R-1 to R-5)
       |
       v
STAGE 1: COMPONENT FOUNDATION (COMP-F-001 to COMP-F-021)
       | 5 Soul Pieces discovered, 54% -> 92% compliance
       v
STAGE 2: DENSITY EXPLORATION / DD (DD-F-001 to DD-F-018)
       | 6 explorations, 34.5/40 avg, DD-F-006 FRACTAL = meta-pattern
       v
STAGE 3: ORGANIZATION EXPLORATION / OD (OD-F-001 to OD-F-013 + 4 special)
       | 6 explorations, ~35.5/40 avg, org IS density (OD-F-005)
       v
STAGE 4: AXIS EXPLORATION / AD (AD-F-001 to AD-F-028)
       | 6 explorations, 36.2/40 avg, ATTENTION TOPOLOGY (AD-F-023)
       v
STAGE 5: COMBINATION / CD (PENDING)
```

### Stage Descriptions

**Stage 1 -- Components:** Audited 11 React components against the KortAI aesthetic. Discovered 5 Soul Pieces (border-radius: 0, Instrument Serif italic, callout 2-zone structure, box-shadow: none, square step indicators). These are immutable DNA.

**Stage 2 -- Density (DD):** Explored how components breathe together. 6 density hypotheses: PULSE (alternating), CRESCENDO (progressive build), ISLANDS (task groups), GEOLOGICAL (hierarchy strata), TIDAL/RIVERS (width signal), FRACTAL (meta-pattern at 5 scales). Crown jewel: DD-F-006 FRACTAL is mandatory for all subsequent stages.

**Stage 3 -- Organization (OD):** Explored cognitive rhythm -- how information is organized. 6 patterns: CONVERSATIONAL, NARRATIVE, TASK-BASED, CONFIDENCE, SPATIAL, CREATIVE. Crown jewel: OD-F-005 "Organization IS Density" -- same phenomenon, two perspectives. Re-enriched by 43 agents with 94 bespoke EXT-* findings.

**Stage 4 -- Axis (AD):** Explored spatial layout -- axis geometry. 6 patterns: Z-PATTERN, F-PATTERN, BENTO GRID, SPIRAL, CHOREOGRAPHY, COMPOUND. Crown jewel: AD-F-023 ATTENTION TOPOLOGY -- axis IS organization IS density. Three names for one phenomenon. 28 findings total, 0 soul violations.

**Stage 5 -- Combination (CD):** PENDING. Will explore component chemistry -- how components work together in combinations. Consumes everything above.

### Key File Locations

All paths relative to: `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/docs-spa/app/showcase/`

| Category | Path |
|----------|------|
| DD explorations | `explorations/density/DD-{NNN}-{name}.html` |
| OD explorations | `explorations/organizational/OD-{NNN}-{name}.html` |
| AD explorations | `explorations/axis/AD-{NNN}-{name}.html` |
| Soul Discoveries | `DESIGN-SYSTEM/provenance/SOUL-DISCOVERIES.md` |
| Accumulated Identity v2 | `knowledge-architecture/ACCUMULATED-IDENTITY-v2.md` |
| Pipeline Manifest | `DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md` |
| DD findings | `DESIGN-SYSTEM/provenance/stage-2-density-dd/DD-outbound-findings.md` |
| OD findings | `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-outbound-findings.md` |
| AD findings | `DESIGN-SYSTEM/provenance/stage-4-axis-ad/AD-outbound-findings.md` |
| AD Convention Spec | `knowledge-architecture/_ad-execution/AD-CONVENTION-SPEC.md` |
| OD Convention Spec | `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-CONVENTION-SPEC.md` |
| Research R1 | `DESIGN-SYSTEM/provenance/original-research/R1-DOCUMENTATION-PATTERNS.md` |
| Research R2 | `DESIGN-SYSTEM/provenance/original-research/R2-CREATIVE-LAYOUTS.md` |
| Research R3 | `DESIGN-SYSTEM/provenance/original-research/R3-DENSITY-DIMENSIONS.md` |
| Research R4 | `DESIGN-SYSTEM/provenance/original-research/R4-AXIS-INNOVATIONS.md` |
| Research R5 | `DESIGN-SYSTEM/provenance/original-research/R5-COMBINATION-THEORY.md` |
| Research Synthesis | `DESIGN-SYSTEM/provenance/original-research/RESEARCH-SYNTHESIS.md` |
| EXT Research Registry | `DESIGN-SYSTEM/provenance/EXT-RESEARCH-REGISTRY.md` |
| Tokens | `DESIGN-SYSTEM/tokens/*.md` |
| Patterns | `DESIGN-SYSTEM/patterns/*.md` |
| Anti-patterns | `DESIGN-SYSTEM/anti-patterns/registry.md` |
| Handoff DD->OD | `DESIGN-SYSTEM/provenance/stage-2-density-dd/HANDOFF-DD-TO-OD.md` |
| Handoff OD->AD | `DESIGN-SYSTEM/provenance/stage-3-organization-od/HANDOFF-OD-TO-AD.md` |
| Handoff AD->CD | `DESIGN-SYSTEM/provenance/stage-4-axis-ad/HANDOFF-AD-TO-CD.md` |

### Dependency Chain Between Stages

```
Stage 1 --ENABLES--> Stage 2 --CONSTRAINS--> Stage 3 --CONSTRAINS--> Stage 4
  |                    |                       |                       |
  +-- 21 COMP-F        +-- 18 DD-F             +-- 17 OD-F             +-- 28 AD-F
  +-- 5 Soul Pieces    +-- 6 density patterns   +-- 6 org patterns      +-- 6 axis patterns
                       +-- quality bar 34.5/40  +-- 94 EXT-*            +-- 33 EXT-AXIS-*
                                                +-- convention spec     +-- convention spec
                                                                        +-- transition grammar
```

Accumulated constraints grow at each stage. By AD, the system carries 84 formal findings + 127 EXT-* findings = 211 total constraints.

### Gate Files (Mandatory First-Reads)

| Gate File | Direction |
|-----------|-----------|
| `HANDOFF-DD-TO-OD.md` | DD -> OD |
| `HANDOFF-OD-TO-AD.md` | OD -> AD |
| `HANDOFF-AD-TO-CD.md` | AD -> CD |

### The 6 Exploration Files Per Stage

**DD (density/):**
| File | Pattern | Score |
|------|---------|-------|
| DD-001-breathing.html | PULSE | 33/40 |
| DD-002-gradient.html | CRESCENDO | 35/40 |
| DD-003-islands.html | ISLANDS | 32/40 |
| DD-004-layers.html | GEOLOGICAL | 35/40 |
| DD-005-rivers.html | TIDAL/RIVERS | 36/40 |
| DD-006-fractal.html | FRACTAL (meta-pattern) | 36/40 |

**OD (organizational/):**
| File | Pattern | Score |
|------|---------|-------|
| OD-001-conversational.html | CONVERSATIONAL | 37/40 |
| OD-002-narrative.html | NARRATIVE | 35/40 |
| OD-003-task-based.html | TASK-BASED | ~35/40 |
| OD-004-confidence.html | CONFIDENCE | 34/40 |
| OD-005-spatial.html | SPATIAL | 35/40 |
| OD-006-creative.html | CREATIVE (crown jewel) | 37/40 |

**AD (axis/):**
| File | Pattern | Paired OD | Score |
|------|---------|-----------|-------|
| AD-001-z-pattern.html | Z-PATTERN | Conversational | 36/40 |
| AD-002-f-pattern.html | F-PATTERN | Progressive | 35/40 |
| AD-003-bento-grid.html | BENTO GRID | Task-Based | 37/40 |
| AD-004-spiral.html | SPIRAL | Confidence | 36/40 |
| AD-005-choreography.html | CHOREOGRAPHY | Parallel | 35/40 |
| AD-006-compound.html | COMPOUND | Fractal | 38/40 |

---

## SECTION 3: THE PERCEPTUAL AUDITING SKILL

### 3.1 The 28 Core Questions

#### Tier 1: The Mandatory Five (Every Audit, Every Mode)

| ID | Question | Dimension | What It Catches |
|----|----------|-----------|-----------------|
| **PA-01** | What's the first thing that bothers you? | First Impression | Misplaced focal points, gestalt discomfort, the thing a designer sees in 2 seconds |
| **PA-02** | Is any text uncomfortable to read? Point to the worst spot. | Readability | Narrow columns, cramped containers, insufficient contrast, the 130px catastrophe |
| **PA-03** | Does this feel like one designer made it, or three? | Coherence | Design dialect shifts, visual fragmentation, the "collage" effect |
| **PA-04** | Where does your eye go first? Is that where it SHOULD go? | Hierarchy | Competing focal points, badges outranking headlines, decorative elements stealing focus |
| **PA-05** | Would you put your name on this? What would you fix first? | Ship Test | The gap between "passes rules" and "is good," professional pride threshold |

#### Tier 2: The Standard Fifteen (Standard and Standalone Audits)

**Readability and Comfort:**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-06** | Are any words stacking vertically, one per line, in any column? | The canonical bento-grid failure mode |
| **PA-07** | Can you read the longest paragraph without your eye losing its place between lines? | Line length >80 CPL, insufficient leading |
| **PA-08** | Is there any text you have to lean in or squint to read? | Sub-minimum font sizes, low-contrast captions |

**Spatial Balance and Weight:**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-09** | Is there dead space that serves no purpose -- a screen-sized void with nothing in it? | Viewport-scale dead zone, meaningless emptiness |
| **PA-10** | If you squint until you can't read any text, does the layout still look balanced? | Macro composition failure, top-heavy pages, lopsided grids |
| **PA-11** | Are the margins generous (confident spacing) or anxious (clutching or pushing away)? | Spacing psychology, inconsistent rhythm, mechanical rigidity |

**Visual Flow:**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-12** | Do your eyes flow smoothly from section to section, or do they get stuck anywhere? | Visual walls, contrast traps, flow-breaking dividers |
| **PA-13** | Is there a clear visual ending, or does the page just stop? | Abrupt endings, trailing emptiness, no narrative closure |

**Grid and Layout:**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-14** | Does every column have enough room for its content to breathe? | Content-container misfit across all grid cells |
| **PA-15** | If you trace the left edge of every content block top to bottom, how many different starting positions do you count? | Alignment scatter, staircase margins, jittery edges |

**Consistency:**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-16** | Pick two elements that should look identical (e.g., two callout boxes). Do they actually look the same? | Contextual inconsistency, content-volume-driven divergence |
| **PA-17** | Is there a visual rhythm to the page (like a beat in music), or does it feel random? | Arrhythmic section sequencing, unpredictable density alternation |

**Color and Emotion:**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-18** | Do all the grays/neutrals feel like they belong to the same family, or do some feel warmer/cooler? | Color temperature inconsistency |
| **PA-19** | Is there any element that feels like it's from a different website? | Visual intruders (dark code blocks on warm pages, mismatched components) |
| **PA-20** | If you described this page's personality in three words, what would they be? Does that match the intended personality? | Emotional misalignment, tonal incoherence |

#### Tier 3: Deep Dive Eight (Standalone Mode Only)

**Responsiveness:**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-21** | At this viewport, does everything look designed for this width, or squeezed from a wider design? | Afterthought responsive layouts |
| **PA-22** | Would a user who ONLY has this screen size feel served or punished? | Mobile-as-degradation |
| **PA-23** | What breaks if you resize 200px narrower? Is the page one viewport change away from failing? | Fragile breakpoints |

**Cross-Page Consistency:**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-24** | Does this page feel like it belongs in the same family as the other pages in this collection? | Cross-page dialect drift |
| **PA-25** | If you covered the header, could you identify which design system this belongs to? | Visual anonymity, generic-framework appearance |

**Architectural Challenge:**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-26** | Is there any convention (max-width, column count, spacing value) that seems to be CAUSING a visual problem? | Fossilized conventions, the 860px bottleneck |
| **PA-27** | If you were designing this from scratch with no existing code, would you design it this way? | Constraint-shaped design vs intention-shaped design |

**Adversarial:**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-28** | How could someone make this page look terrible while passing every rule check? | Layout vulnerabilities, proportional fragility, content edge cases |

#### Tier Summary

| Tier | Questions | Time | When Used |
|------|-----------|------|-----------|
| Tier 1: Mandatory Five | PA-01 through PA-05 | 3 min | ALWAYS (all modes) |
| Tier 2: Standard Fifteen | PA-06 through PA-20 | 25 min | Standard and Standalone |
| Tier 3: Deep Dive Eight | PA-21 through PA-28 | 20 min | Standalone only |
| **Full Battery** | **28 questions** | **~48 min** | **Standalone only** |

### 3.2 Four Modes

**Mode 1: Embedded (90 Seconds) -- NO TEAM**
- When: Every agent producing visual output, BEFORE declaring done
- What: PA-01 through PA-05, answered in plain language
- Team: 0 agents. Prompt injection into existing agent.
- Steps: Screenshot -> 5-second look -> answer PA-01 through PA-05 -> quality gate on PA-05

**Mode 2: Quick (3 Minutes) -- NO TEAM**
- When: Spot-check, verifier pass
- What: Mandatory Five + Cold Look at 1440px and 768px (viewport-only screenshots, no scroll-through)
- Team: 0 agents. Inline.

**Mode 3: Standard (30 Minutes) -- TEAM OF 4**
- When: Regular page review, pre-ship quality gate
- What: Tier 1 + Tier 2 (20 questions), 2 viewports (1440px, 768px), scroll-through MANDATORY
- Team: Research Contextualizer + 2 Auditors + Synthesizer-Validator

**Mode 4: Standalone (60 Minutes) -- FULL TEAM OF 7**
- When: Final review before shipping, comprehensive assessment
- What: All 28 questions, 3 viewports (1440px, 1024px, 768px), scroll-through MANDATORY
- Team: Research Contextualizer + 4 Auditors + Adversarial + Weaver-Synthesizer

### 3.3 Cold Look Protocol

The closest an agent can get to a user's first impression.

1. **CLEAR:** Close all CSS files, spec documents, convention references. You are a person seeing this page for the first time.
2. **LOOK (5 seconds):** Open the viewport-only screenshot. Do NOT read text. Do NOT examine details. Absorb shape, color, weight, impression.
3. **REACT (immediate):** Write four responses. They are LOCKED -- cannot be changed after writing.

```
COLD LOOK ([WIDTH]px):
Gut reaction: [one sentence -- what did you FEEL?]
Worst thing: [one element or area -- what would you fix first?]
Best thing: [one element or area -- what should be protected?]
Ship verdict: YES / YES WITH RESERVATIONS / NO
```

4. **LOCK:** These responses are FINAL. Even after reading specs, the Cold Look stands. Modifying it is a PROTOCOL VIOLATION.
5. **REPEAT:** Complete independently for each viewport. Do not let one viewport's reaction influence another.

**Why Locking Matters:** Agents retroactively rationalize perceptual findings when they encounter rule compliance. An agent might see "the code blocks don't belong" (correct perception) but then read a convention allowing dark code blocks and revise. Locking prevents this.

### 3.4 Scroll-Through Protocol (Zone Sweep)

**Why Scroll-Through, Not Full-Page Screenshots:** A full-page screenshot of a 15,000px page shrinks everything so small that a 130px crushed column looks "fine" at thumbnail scale. Scrolling through at viewport width, each section fills the screen and problems are immediately obvious.

After Cold Look captures the macro impression, scroll through the ENTIRE page:

1. Start at the top (scroll position 0)
2. Take viewport-sized screenshot (fullPage: false)
3. Scroll down by 80% of viewport height
4. Take another viewport-sized screenshot
5. Repeat until bottom of page
6. Produces 5-15 screenshots per page depending on length

**5 Dimension Passes through the scroll-through screenshots:**

| Pass | Dimension | What To Watch |
|------|-----------|---------------|
| 1 | READABILITY | Word stacking, squinting, lines too wide, text squeezed against edges |
| 2 | SPATIAL BALANCE (Squint) | Blur vision. Only shapes and weight. Dead space, jarring jumps, heavy/light |
| 3 | HIERARCHY & FLOW | Content flow between positions, focal points, section transitions, narrative momentum |
| 4 | CONSISTENCY | Identical elements across positions, visual rhythm, gray family, dialect shifts |
| 5 | SHIP TEST | Senior designer test. Fix with 10 more minutes? Next to Stripe, proud or embarrassed? |

### 3.5 Visual Auditing Protocol (Playwright)

**EXACT STEPS for every screenshot-taking agent:**

```
STEP 1: NAVIGATE
  browser_navigate to the target URL.

STEP 2: WAIT FOR FONTS
  browser_evaluate: () => document.fonts.ready

  CRITICAL: Without this, fallback fonts render with wrong metrics.
  Previous audits produced FALSE POSITIVES from font-loading timing.

STEP 3: DISABLE ANIMATIONS
  browser_run_code to inject:
  *, *::before, *::after {
    animation: none !important;
    animation-delay: 0s !important;
    animation-duration: 0s !important;
    transition: none !important;
    transition-delay: 0s !important;
    transition-duration: 0s !important;
    opacity: 1 !important;
    transform: none !important;
    scroll-behavior: auto !important;
  }

  CRITICAL: opacity: 1 is ESSENTIAL. Many libraries initialize elements
  at opacity: 0 and reveal on scroll. Without this override, half the
  page may be invisible (the "dead zone" false positive).

STEP 4: WAIT FOR LAYOUT STABILITY
  Wait 500ms for style recalculations to settle.

STEP 5: SET VIEWPORT AND CAPTURE (Cold Look)
  Set viewport size, take viewport-only screenshot (fullPage: false).

STEP 6: SCROLL-THROUGH (Zone Sweep) -- MANDATORY for Standard/Standalone
  a) Start at top (scroll position 0).
  b) Take viewport-sized screenshot (fullPage: false).
  c) Scroll down by 80% of viewport height.
  d) Take another screenshot.
  e) Repeat until bottom.
  f) Screenshots named: {page}-{viewport}-scroll-01.png, scroll-02.png, etc.

  Quick mode SKIPS scroll-through (Cold Look viewport shot only).
```

**Scroll-through implementation (browser_run_code):**
```javascript
async (page) => {
  const viewportHeight = page.viewportSize().height;
  const scrollStep = Math.floor(viewportHeight * 0.8);
  const totalHeight = await page.evaluate(() => document.body.scrollHeight);
  const positions = [];
  for (let y = 0; y < totalHeight; y += scrollStep) {
    positions.push(y);
  }
  return positions;
}
```

Then for each scroll position:
```javascript
await page.evaluate((y) => window.scrollTo(0, y), position);
await page.waitForTimeout(300);
await page.screenshot({ path: '[OUTPUT_PATH]', fullPage: false });
```

**Viewport Specification:**

| Viewport | Width | Height | Priority | Used In |
|----------|-------|--------|----------|---------|
| Desktop | 1440px | 900px | PRIMARY | All modes |
| Tablet | 1024px | 768px | SECONDARY | Standalone only |
| Mobile | 768px | 1024px | TERTIARY | Standard + Standalone |

Screenshot order: 1440px first, 768px second, 1024px last. The jump from 1440 to 768 prevents perceptual anchoring.

**Multi-Viewport Comparison (after all viewports done independently):**
1. **Squeeze Test:** Track each major element from widest to narrowest. Graceful degradation or collapse?
2. **Content Survival:** All 1440px content visible at 768px? Anything unreadable?
3. **Identity Survival:** At 768px alone -- designed for this width, or squeezed?
4. **Cold Look Reconciliation:** Compare Cold Look verdicts. If they differ, the difference reveals where the design breaks.

### 3.6 Research Sovereignty

#### Lock Sheet Format

```markdown
# RESEARCH-LOCK-SHEET.md
# Project: [name]
# Generated by: Research Contextualizer
# Date: [date]

## ALWAYS-LOCKED (Soul / Identity -- Universal)

| Rule | Lock Source |
|------|------------|
| border-radius: 0 | Soul Piece #1 |
| box-shadow: none | Soul Piece #4 |
| No filter: drop-shadow() | Soul Piece #5 |
| No 2px structural borders | OD-F-AP-001 |
| Opacity === 1 on backgrounds | ANTI-PHYSICAL identity |
| Font trio: Instrument Serif / Inter / JetBrains Mono | Soul constraint |

## LOCKED (Research-Backed -- Project-Specific)

| Decision | Lock Source | Research Chain | Auditable Execution Aspects |
|----------|------------|----------------|----------------------------|
| [decision] | [finding] | [chain] | [what CAN be questioned] |

## CHALLENGEABLE (Inherited / Builder-Chosen)

| Decision | Origin | Why Challengeable | What Could Change |
|----------|--------|-------------------|-------------------|
| [decision] | [origin] | [reason] | [possible alternatives] |

## PREVIOUS FINDINGS (from prior audits)

| Finding ID | Description | Status |
|------------|-------------|--------|
| [ID] | [desc] | FIXED / STILL PRESENT |
```

#### Research Contextualizer Protocol

**Reading Order (provenance order, critical):**

1. SOUL-DISCOVERIES.md -> soul pieces (ALWAYS-LOCKED)
2. ACCUMULATED-IDENTITY-v[latest].md -> identity constraints
3. R[relevant]-*.md -> primary research findings
4. Outbound-findings.md per consumed stage
5. SYNTHESIS.md for current stage
6. EXT-RESEARCH-REGISTRY.md if exists
7. Convention spec -> CHALLENGEABLE items
8. HANDOFF file -> constraints from prior stage
9. Prior AUDIT-SYNTHESIS.md if exists

**Classification Decision Tree:**
```
Does it trace to a formal finding (XX-F-NNN) with research citation?
  YES -> LOCKED
Does the convention cite research?
  YES -> LOCKED
Convention value without research citation?
  -> CHALLENGEABLE
Inherited without re-validation?
  -> CHALLENGEABLE
Builder choice within convention bounds?
  -> CHALLENGEABLE
Unknown provenance?
  -> CHALLENGEABLE
```

#### The Temporal Firewall

Visual auditors NEVER see the Lock Sheet before completing their perceptual work. The Cold Look and all PA findings are locked before any research context is introduced. The auditor never experiences the cognitive conflict between "I see a problem" and "the research says it's correct."

#### When Perception and Research Conflict

- Finding attacks a LOCKED decision -> INVALID (redirect to execution)
- Finding attacks EXECUTION of a locked decision -> VALID (fix within constraints)
- Finding attacks a CHALLENGEABLE value -> VALID and ACTIONABLE
- Genuine conflict between perception and locked research -> ESCALATE to human

### 3.7 Dual Severity Track

**Rule Track (existing, unchanged):**
```
SOUL VIOLATION    --> Always fix (binary)
CONVENTION BUG    --> Always fix (binary)
OVERFLOW          --> Usually fix (binary)
```

**Perception Track (NEW):**
```
WOULD-NOT-SHIP    --> Designer would refuse to release. Requires human review.
LOOKS-WRONG       --> Something visually off. Needs attention.
COULD-BE-BETTER   --> Polish opportunity. Documented for future.
```

**Critical Rules:**
1. Perception Track findings can NEVER be reclassified onto the Rule Track
2. Cannot be dismissed because "the convention allows it"
3. A finding can exist on BOTH tracks simultaneously
4. When convention and perception conflict, escalate to human

### 3.8 Anti-Patterns (The Complete Taxonomy)

**Category A -- Cognitive Escape:**
| ID | Anti-Pattern | The Tell |
|----|-------------|----------|
| AP-01 | Analytical Escape | First action after screenshot is reading source code |
| AP-02 | Grepping for Existence | Answer could be written without a screenshot |
| AP-03 | Technical Documentation | Finding describes CSS properties, not visual experience |
| AP-04 | Property-Name Answers | Answer contains CSS property names |

**Category B -- Rule-Checking in Disguise:**
| ID | Anti-Pattern | The Tell |
|----|-------------|----------|
| AP-05 | Rule Checking in Disguise | Answer is a compliance statement |
| AP-06 | Spec Comparison Masquerading | Answer references a specification value |
| AP-07 | Pixel-Value Perception | Answer includes pixel measurements without visual context |
| AP-08 | Convention Worship | Convention cited as proof despite visual evidence |

**Category C -- Scope Failures:**
| ID | Anti-Pattern | The Tell |
|----|-------------|----------|
| AP-09 | Component Blindness | No finding references relationships between elements |
| AP-10 | Viewport Tunnel Vision | Only two widths tested in Standalone |
| AP-11 | Container vs Viewport Blindness | Media query targets viewport when problem is container width |
| AP-12 | Self-Reference Blindness | No reference to industry standards |

**Category D -- Completion Failures:**
| ID | Anti-Pattern | The Tell |
|----|-------------|----------|
| AP-13 | Declaring Victory After Writing CSS | No post-fix screenshot |
| AP-14 | Premature Ship Declaration | PA-05 answer is suspiciously fast |
| AP-15 | "Nothing New" Surrender | Only one dimension examined before declaring clean |
| AP-16 | Finding-Without-Looking | Findings match task prompt verbatim but not actual page |

**Category E -- Aesthetic Masking:**
| ID | Anti-Pattern | The Tell |
|----|-------------|----------|
| AP-17 | Aesthetic-Usability Blindness | High rating coexists with element-level problems |
| AP-18 | Halo Effect | Assessment focuses only on strongest dimension |

**Category F -- Sovereignty Violations:**
| ID | Anti-Pattern | The Tell |
|----|-------------|----------|
| AP-19 | Research Suppression | Valid perception dismissed because "convention allows it" |
| AP-20 | Perceptual Overreach | Finding attacks LOCKED decision (the WHAT) |
| AP-21 | Temporal Firewall Breach | Auditor reads Lock Sheet before completing Cold Look |
| AP-22 | Post-Lock Revision | Cold Look modified after encountering research |

**Category G -- Scale Distortion:**
| ID | Anti-Pattern | The Tell |
|----|-------------|----------|
| AP-23 | Thumbnail-Scale Blindness | Agent evaluates from a full-page screenshot instead of scrolling through at viewport scale |

**Total: 23 Anti-Patterns across 7 categories.**

---

## SECTION 4: TEAM ARCHITECTURE

### 4.1 Team Roles

**Lead (The Skill Invoker) -- YOU when orchestrating:**
- CAN: Create teams, assign questions, receive findings, make mode-escalation decisions, reject contaminated answers, start HTTP server, commit results
- CANNOT: Take screenshots, read CSS/HTML source, make fixes, answer PA questions, override Lock Sheet
- Self-Discipline: THIN rule (zero building, zero Playwright, zero source-code reading), file-existence verification, one committer, staggered spawning

**Research Contextualizer:**
- CAN: Read research files, provenance chain, convention specs, tokens, prior audits. Write Lock Sheet.
- CANNOT: Take screenshots, navigate URLs, read CSS/HTML source, communicate with Visual Auditors
- Produces: `lock-sheet.md`

**Visual Auditor (2-5 in parallel):**
- CAN: Take screenshots via Playwright, navigate, resize viewport, write findings file
- CANNOT: Read ANY source file (.css/.html/.tsx/.ts/.md/.json), Grep, Glob, browser_evaluate, browser_console_messages, read Lock Sheet, communicate with Research Contextualizer
- **Language HARD BLOCK:** Answers may NOT contain: px, rem, em, %, hex (#), rgb, rgba, hsl, border-radius, box-shadow, padding, margin, font-size, font-family, line-height, max-width, min-width, flex, grid, gap, opacity, z-index, overflow, display, position, or ANY CSS property name. Use instead: heavy, light, cramped, spacious, jarring, smooth, floating, grounded, anxious, confident, broken, polished, loud, quiet, warm, cold, sharp, soft, cluttered, breathing, stacking, flowing, stuck, drifting.
- Produces: `findings-[agent-name].md`

**Research Validator / Synthesizer-Validator:**
- CAN: Read Lock Sheet + all findings files + research for context. Write validated findings or audit report.
- CANNOT: Take screenshots, read source files, make fixes, communicate with auditors, override ABSOLUTE-lock, dismiss WOULD-NOT-SHIP findings
- Produces: `AUDIT-REPORT.md` (Standard) or `validated-findings.md` (Standalone)

**Adversarial Agent (Standalone only):**
- CAN: Take screenshots, navigate, resize, read Lock Sheet (CHALLENGEABLE section)
- CANNOT: Read source files, use browser_evaluate
- Questions: PA-26, PA-27, PA-28
- Produces: `findings-adversarial.md`

**Fixer (Optional, Standalone + Fix mode):**
- CAN: Read source files, edit source, take post-fix screenshots, read findings + convention specs
- CANNOT: Violate soul rules, fix LOCKED decisions without human approval
- **Post-fix loop:** Save -> Navigate -> Screenshot -> PA-01 and PA-02 -> "Does this LOOK better, or just change a number?" -> If just a number: REVERT and try again
- Per-file ownership eliminates contention
- Produces: `fix-report-fixer-[a/b].md`

**Weaver-Synthesizer (Standalone only):**
- CAN: Read ALL output files, research files, write final verdict
- CANNOT: Take screenshots, read source files, make fixes, override validator classifications
- Produces: `AUDIT-REPORT.md` (THE final deliverable)

### 4.2 Standard Mode Team (4 agents -- DD/OD)

```
[Lead]
  |-- Research Contextualizer (Wave 1, 0:00-0:05)
  |     Writes: lock-sheet.md
  |
  |-- Auditor Alpha (Wave 2, 0:05-0:22)
  |     PA-01 through PA-11 at 1440px + 768px, scroll-through
  |     Writes: findings-alpha.md
  |
  |-- Auditor Beta (Wave 2, +30s stagger)
  |     PA-12 through PA-20 at 1440px + 768px, scroll-through
  |     Writes: findings-beta.md
  |
  |-- Synthesizer-Validator (Wave 3, 0:22-0:30)
  |     Reads: lock-sheet + both findings files
  |     Writes: AUDIT-REPORT.md
```

**Task Graph:**
```
#1 Lock Sheet     blockedBy: []      blocks: [#2, #3]
#2 Alpha          blockedBy: [#1]    blocks: [#4]
#3 Beta           blockedBy: [#1]    blocks: [#4]
#4 Synthesizer    blockedBy: [#2,#3] blocks: []
```

### 4.3 Standalone Mode Team (7 agents -- AD/CD)

```
[Lead]
  |-- Research Contextualizer (Wave 1, 0:00-0:08)
  |     Writes: lock-sheet.md
  |
  |-- Auditor A: Impression+Emotion+Color (Wave 2)
  |     PA-01, PA-04, PA-05, PA-18, PA-19, PA-20
  |     3 viewports, scroll-through
  |     Writes: findings-impression-emotion.md
  |
  |-- Auditor B: Readability+Responsiveness (Wave 2, +10s)
  |     PA-02, PA-06, PA-07, PA-08, PA-21, PA-22, PA-23
  |     3 viewports, scroll-through
  |     Writes: findings-readability-resp.md
  |
  |-- Auditor C: Spatial+Grid (Wave 2, +20s)
  |     PA-09, PA-10, PA-11, PA-14, PA-15, PA-17
  |     3 viewports, scroll-through
  |     Writes: findings-spatial-grid.md
  |
  |-- Auditor D: Hierarchy+Coherence+Cross-Page (Wave 2, +30s)
  |     PA-03, PA-12, PA-13, PA-16, PA-24, PA-25
  |     3 viewports + cross-page screenshots (2-3 siblings)
  |     Writes: findings-hierarchy-coherence.md
  |
  |-- Adversarial Agent (Wave 2, +40s)
  |     PA-26, PA-27, PA-28
  |     Reads Lock Sheet (CHALLENGEABLE section)
  |     Tests non-standard viewports
  |     Writes: findings-adversarial.md
  |
  |-- Weaver-Synthesizer (Wave 3, 0:38-0:60)
  |     Reads: lock-sheet + all 5 findings
  |     Writes: AUDIT-REPORT.md (~300-500 lines)
```

**Task Graph:**
```
#1 Lock Sheet     blockedBy: []          blocks: [#2-#6]
#2 Auditor A      blockedBy: [#1]        blocks: [#7]
#3 Auditor B      blockedBy: [#1]        blocks: [#7]
#4 Auditor C      blockedBy: [#1]        blocks: [#7]
#5 Auditor D      blockedBy: [#1]        blocks: [#7]
#6 Adversarial    blockedBy: [#1]        blocks: [#7]
#7 Weaver         blockedBy: [#2-#6]     blocks: []
```

### 4.4 Fix Team (Optional, spawned after audit if --fix and verdict is not SHIP)

```
#F1: Fixer A (owns file-1 exclusively)
#F2: Fixer B (owns file-2 exclusively)
#F-verify: Re-verifier (Quick mode on all fixed files)
```

### 4.5 Communication Protocol

**PRIMARY: File-based.** All inter-agent data flows through files, not SendMessage. Files survive crashes, can be read by any agent, and become audit artifacts.

**SendMessage ONLY for:** Lock Sheet completion notification, critical errors blocking downstream work. Nothing else.

### 4.6 Information Isolation Barriers

| From | To | Blocked | Why |
|------|----|---------|-----|
| Research Contextualizer | Visual Auditors | ALL | Auditors must not know what is LOCKED |
| Visual Auditors | Research Contextualizer | ALL | Contextualizer must not be influenced |
| Research Validator | Visual Auditors | ALL | Classifications must not influence perception |
| Visual Auditors | Fixers | Direct findings | Findings must go through validation first |

### 4.7 Team Lifecycle

**Phase A (Initialization):**
1. Create scratchpad: `{target-dir}/_perceptual-audit/`
2. Verify HTTP server running
3. Spawn Research Contextualizer

**Phase B (Lock Sheet -- Wave 1):**
1. Contextualizer reads research, writes `lock-sheet.md`
2. Lead detects completion via file existence

**Phase C (Visual Auditing -- Wave 2):**
1. Spawn auditors (staggered 10-30s intervals)
2. Each takes screenshots, Cold Look, answers questions, writes findings

**Phase D (Synthesis -- Wave 3):**
1. Spawn Synthesizer/Weaver
2. Reads Lock Sheet + all findings, classifies, deduplicates, ranks
3. Writes `AUDIT-REPORT.md`

**Phase E (Completion):**
1. Lead reads verdict
2. If DO NOT SHIP + fix mode: spawn separate fix team
3. Send shutdown requests
4. Report verdict

### 4.8 Gate Verification

| Gate | Condition | What Lead Checks |
|------|-----------|-----------------|
| Gate 1 | Contextualizer done | Lock Sheet file exists with LOCKED and CHALLENGEABLE sections |
| Gate 2 | All auditors done | All finding files exist, PA questions answered, no CSS property names |
| Gate 3 | Synthesizer/Weaver done | AUDIT-REPORT.md exists with verdict and ranked concerns |

### 4.9 Error Handling

| Failure | Detection | Recovery |
|---------|-----------|----------|
| Lock Sheet not written within 10 min | File check | Lead produces emergency Lock Sheet from convention spec + identity |
| Auditor doesn't write findings | File check at 2x expected duration | Respawn with "MUST write file using Write tool" |
| Playwright contention | Agent reports unavailability | Agent WAITS (no source-code fallback). 3 retries max. |
| All auditors return zero concerns | Red flag | Spawn adversarial: "Your predecessors found nothing. Find what they missed." |
| HTTP server not running | Navigation fails | Lead starts server |
| Answers contain CSS properties | Contamination check | Flag CONTAMINATED, exclude, note in report |

### 4.10 Agent Prompt Templates

#### Research Contextualizer Prompt

```
You are the Research Contextualizer for a Perceptual Audit of {target-id}.

YOUR JOB: Read the project's design conventions, identity, and research,
then produce a LOCK SHEET that classifies every design decision as LOCKED
(cannot be changed) versus CHALLENGEABLE (can be questioned).

YOU MUST READ THESE FILES:
1. {path-to-soul-discoveries}
2. {path-to-identity-doc}
3. {path-to-outbound-findings}
4. {path-to-convention-spec} (if exists)
5. {additional-research-files-for-stage}

YOU MAY NOT:
- Use Playwright or take screenshots
- Read HTML/CSS source files of the target page
- Make visual judgments

OUTPUT: Write lock-sheet.md to {output-path}/_perceptual-audit/lock-sheet.md

The Lock Sheet has this structure:
## ALWAYS-LOCKED (Do Not Question)
| Rule | Lock Source |

## LOCKED (Research-Backed)
| Decision | Lock Source | Research Chain | Auditable Execution Aspects |

## CHALLENGEABLE (Question If Visually Problematic)
| Convention | Current Value | Can Be Questioned If... |

## PREVIOUS FINDINGS
| Finding ID | Description | Status |

CRITICAL:
1. You MUST write the file using the Write tool
2. Mark your task as completed using TaskUpdate
3. Keep the Lock Sheet under 200 lines
4. You are a FILE-READING agent: no Playwright, no screenshots
```

#### Visual Auditor Prompt (Standard -- Alpha)

```
You are Visual Auditor Alpha for a Perceptual Audit of {target-id}.

YOUR JOB: LOOK at the rendered page and describe what you SEE. You are
a designer evaluating visual quality, NOT a rule-checker scanning CSS.

THE ONE RULE: React to what you see before you check what you know.

YOU MUST NOT READ the Lock Sheet.

YOU MUST USE:
- Playwright (browser_snapshot, browser_take_screenshot, browser_navigate,
  browser_resize)
- Write tool (to write your findings file)
- TaskUpdate (to mark completion)

YOU MUST NOT USE:
- Read tool on ANY .html, .css, .tsx, .ts, or .js file
- Grep or Glob to search source code
- browser_evaluate to run DOM scans or computed-style checks

YOUR ASSIGNED QUESTIONS (for 1440px AND 768px):
PA-01: What's the first thing that bothers you?
PA-02: Is any text uncomfortable to read? Point to the worst spot.
PA-03: Does this feel like one designer made it, or three?
PA-04: Where does your eye go first? Is that where it SHOULD go?
PA-05: Would you put your name on this? What would you fix first?
PA-06: Are any words stacking vertically, one per line?
PA-07: Can you read the longest paragraph without losing your place?
PA-08: Is there any text you have to lean in or squint to read?
PA-09: Is there dead space that serves no purpose?
PA-10: Squint test -- does the layout look balanced?
PA-11: Are the margins generous (confident) or anxious (clutching)?

EXACT PROCEDURE:
Step 1: Navigate to {target-url}. Wait for fonts: document.fonts.ready.
        Disable animations (opacity:1, animation:none, transition:none).
Step 2: Take viewport-only screenshot at 1440px (Cold Look shot).
Step 3: COLD LOOK -- look 5 seconds, write LOCKED reactions immediately.
Step 4: SCROLL-THROUGH -- scroll the entire page section by section at
        1440px. Take viewport-sized screenshot at each scroll position
        (every ~80% of viewport height). Look at EACH screenshot at full
        viewport scale. Answer PA-01 through PA-11.
Step 5: Resize to 768px. New Cold Look.
Step 6: SCROLL-THROUGH at 768px. Same process.
Step 7: Answer PA-01 through PA-11 for 768px.
Step 8: Write findings file.

THE SCROLL EXPERIENCE IS THE AUDIT.

LANGUAGE RESTRICTIONS (HARD BLOCK):
Your answers may NOT contain: px, rem, em, %, hex (#), rgb, rgba, hsl,
border-radius, box-shadow, padding, margin, font-size, font-family,
line-height, max-width, min-width, flex, grid, gap, opacity, z-index,
overflow, display, position, or ANY CSS property name.

Use instead: heavy, light, cramped, spacious, jarring, smooth, floating,
grounded, anxious, confident, broken, polished, warm, cold, sharp, soft.

OUTPUT: {output-path}/_perceptual-audit/findings-alpha.md

CRITICAL:
1. You MUST write your findings file using the Write tool
2. Mark your task as completed using TaskUpdate
3. If Playwright unavailable, wait 30s and retry (3 max)
```

#### Visual Auditor Prompt (Standard -- Beta)

Same as Alpha but questions PA-12 through PA-20. Output: `findings-beta.md`.

#### Standalone Auditor Prompts

Same template structure, with these per-agent differences:

- **Auditor A:** PA-01, PA-04, PA-05, PA-18, PA-19, PA-20. Three viewports. Output: `findings-impression-emotion.md`
- **Auditor B:** PA-02, PA-06, PA-07, PA-08, PA-21, PA-22, PA-23. Three viewports. Output: `findings-readability-resp.md`
- **Auditor C:** PA-09, PA-10, PA-11, PA-14, PA-15, PA-17. Three viewports. Output: `findings-spatial-grid.md`
- **Auditor D:** PA-03, PA-12, PA-13, PA-16, PA-24, PA-25. Three viewports + cross-page screenshots. Output: `findings-hierarchy-coherence.md`

#### Adversarial Agent Prompt (Standalone)

```
You are the Adversarial Agent for a Perceptual Audit of {target-id}.

YOUR JOB: Challenge the design. Find how it could fail. Question whether
conventions are CAUSING visual problems. You are the red team.

YOU MUST READ: {output-path}/_perceptual-audit/lock-sheet.md
  Pay special attention to the CHALLENGEABLE section.

YOU MUST NOT: Read source files, use browser_evaluate.

YOUR QUESTIONS:
PA-26: Is any convention CAUSING a visual problem? Check each CHALLENGEABLE
       item against visual evidence.
PA-27: If designing from scratch with no existing code, would you design
       it this way? What is constraint-shaped vs intention-shaped?
PA-28: How could someone make this page look terrible while passing every
       rule check? Test by:
       a) Resize 1440->320 in 50px increments. Screenshot breakage points.
       b) Check content length variation (short vs long).
       c) Check non-standard breakpoints (900px, 1100px, 500px).

OUTPUT: {output-path}/_perceptual-audit/findings-adversarial.md

Format includes: Convention Challenges, From-Scratch Assessment,
Fragility Map, Risk Assessment (ROBUST / ADEQUATE / FRAGILE / BRITTLE).
```

#### Synthesizer-Validator Prompt (Standard)

```
You are the Synthesizer-Validator for a Perceptual Audit of {target-id}.

YOUR JOB: Read all findings files, cross-reference against Lock Sheet,
deduplicate, rank by visual impact, produce final verdict.

YOU MUST READ:
1. {output-path}/_perceptual-audit/lock-sheet.md
2. {output-path}/_perceptual-audit/findings-alpha.md
3. {output-path}/_perceptual-audit/findings-beta.md

YOU MUST NOT: Use Playwright, read source files.

YOUR TASKS:
1. CONTAMINATION CHECK -- flag findings with CSS property names, hex
   values, pixel measurements, or selectors. Exclude contaminated.
2. CROSS-REFERENCE against Lock Sheet:
   - Flags LOCKED rule? -> RULE TRACK
   - Flags CONVENTION? -> PERCEPTION TRACK
   - Not in Lock Sheet? -> NOVEL PERCEPTION
3. DEDUPLICATION -- merge identical, note auditor agreement.
4. RANKING -- WOULD-NOT-SHIP highest, then LOOKS-WRONG, then COULD-BE-BETTER.
5. COLD LOOK CONCORDANCE -- do gut reactions agree?
6. SOVEREIGNTY CLASSIFICATION -- for each finding:
   - Targets locked DECISION? -> INVALID
   - Targets locked EXECUTION? -> VALID (note constraints)
   - Targets CHALLENGEABLE? -> VALID and ACTIONABLE
   - Genuine conflict? -> ESCALATE
7. FINAL VERDICT:
   - SHIP: No WOULD-NOT-SHIP. Few LOOKS-WRONG.
   - SHIP WITH CONCERNS: No WOULD-NOT-SHIP, multiple LOOKS-WRONG.
   - DO NOT SHIP: Any WOULD-NOT-SHIP survives validation.

OUTPUT: {output-path}/_perceptual-audit/AUDIT-REPORT.md

Format: Verdict, Cold Look Summary, Top 5 Findings, All Findings by Track,
Contamination Report, Sovereignty Classifications, Escalation Items.

CRITICAL:
1. You MUST write AUDIT-REPORT.md using the Write tool
2. You are the LAST agent -- your output IS the deliverable
3. Do NOT add your own visual opinions -- you synthesize, not perceive
```

#### Weaver-Synthesizer Prompt (Standalone)

Same structure as Standard Synthesizer plus:
- Reads 5 findings files (A-D + Adversarial)
- Includes CONVENTION CHALLENGE section from PA-26/27
- Includes FRAGILITY ASSESSMENT from PA-28
- Cross-references all 28 questions
- Includes FIX RECOMMENDATIONS ranked by visual impact
- Produces ~300-500 line report

#### Builder/Fixer Embedded Mode Injection

```
BEFORE YOU DECLARE THIS WORK DONE:
Take a screenshot. Answer these 5 questions in plain language
(no CSS property names, no pixel values):
1. What's the first thing that bothers you?
2. Is any text uncomfortable to read?
3. Does this feel like one designer made it?
4. Where does your eye go first? Is that correct?
5. Would you put your name on this?
If Q5 is NO: identify what Q5 flagged and fix it.
```

#### Fixer Post-Fix Injection

```
After writing your CSS fix:
1. Re-render the page.
2. Take a screenshot.
3. Answer PA-01 and PA-02 for the fixed area.
4. Did your fix make it LOOK better, or did it just change a number?
5. Did your fix create any NEW visual problems?
If Q4 is "just changed a number" or Q5 is "yes": iterate.
```

---

## SECTION 5: ENRICHMENT PROTOCOL

### 5.1 Finding ID Format: PA-F-###

Perceptual Audit findings use the `PA-F-` prefix:

| Prefix | Stage | Example |
|--------|-------|---------|
| COMP-F- | Components | COMP-F-001 |
| DD-F- | Density | DD-F-001 |
| OD-F- | Organization | OD-F-001 |
| AD-F- | Axis | AD-F-001 |
| **PA-F-** | **Perceptual Audit** | **PA-F-001** |
| CD-F- | Combination | CD-F-001 |

PA-F is cross-cutting (not stage-bound). IDs are globally sequential, never reset per audit.

### 5.2 Finding Classification Suffixes

| Suffix | Classification | Meaning | Flows Forward? |
|--------|---------------|---------|----------------|
| (none) | PERCEPTUAL | Visual quality concern from perception | No -- fixed in place |
| -R | RULE | Maps to existing rule violation | No -- fixed via rule track |
| -C | CASCADE | Systemic issue affecting multiple files/stages | YES |
| -E | ESCALATION | Conflicts with LOCKED research decision | YES -- human decides |
| -S | SOUL | Proposes or validates soul-level truth | YES |

### 5.3 Finding Registry Entry Template

```markdown
### PA-F-NNN[-suffix]: [Title]

| Field | Value |
|-------|-------|
| **ID** | PA-F-NNN[-suffix] |
| **Title** | [One-line description] |
| **Source Audit** | [audit-id] |
| **Target** | [file audited] |
| **PA Question** | [which PA-NN surfaced this] |
| **Classification** | PERCEPTUAL / RULE / CASCADE / ESCALATION / SOUL |
| **Rule Track** | N/A / SOUL VIOLATION / CONVENTION BUG / OVERFLOW |
| **Perception Track** | WOULD-NOT-SHIP / LOOKS-WRONG / COULD-BE-BETTER |
| **Sovereignty** | LOCKED-EXECUTION / CHALLENGEABLE / ESCALATION |
| **Cold Look Quote** | [exact locked sentence, if applicable] |
| **Description** | [Full description in plain perceptual language] |
| **Evidence** | [Screenshot refs, scroll positions, viewports] |
| **Fix Status** | PENDING / FIXED / WONT-FIX / ESCALATED |
| **Fix Applied In** | [file path + commit, or N/A] |
| **Downstream Impact** | [affected files/stages] |
```

### 5.4 The 7 Enrichment Layers

After a PA audit completes, findings propagate through 7 layers:

**Layer 1 -- PA-outbound-findings.md** (new cross-cutting document at `DESIGN-SYSTEM/provenance/PA-outbound-findings.md`): Central registry for ALL PA-F findings across all stages. Source of truth for ID allocation.

**Layer 2 -- Target File Inline Headers (Phase 2B):** Update 3 sections:
- Section 3 (STATUS): Append `PA audit: {audit-id} ({verdict}). N PA-F findings: {list}.`
- Section 5 (BUILT ON): Add row per FIXED PA-F finding
- Section 9 (RESEARCH DEBT): Add bullet per PENDING PA-F finding

**Layer 3 -- Target File Light Sections (Phase 2D):** Add one line:
`PA-AUDIT: {audit-id} | {verdict} | PA-F-NNN (STATUS), PA-F-NNN (STATUS)`

**Layer 4 -- Stage Provenance Documents:**
- STAGE-HEADER.md: PA audit summary in STATUS section
- outbound-findings.md: CASCADE and SOUL findings only (they flow forward)
- AUDIT-SYNTHESIS.md: Full PA results section
- CLAUDE.md: PA status line

**Layer 5 -- RESEARCH-ACTIVE.md:** Track research validated by perception (APPLIED -> VALIDATED), challenged (PA-CHALLENGED flag), and new perceptual discoveries not in R1-R5.

**Layer 6 -- PIPELINE-MANIFEST.md:** New section for PA-F findings, cross-references for validated/challenged research.

**Layer 7 -- Accumulated Identity (flagged, not directly written):** If SOUL or systemic CASCADE findings exist, write a PA-IDENTITY-DELTA.md listing proposed changes. Identity doc updates at next stage version bump.

### 5.5 Enrichment Execution Sequence

```
STEP 1: READ the PA AUDIT-REPORT.md
        Extract: all PA-F findings, verdicts, classifications, fix statuses

STEP 2: CREATE/UPDATE PA-outbound-findings.md
        Allocate PA-F IDs (check current max)
        Write full finding entries

STEP 3: UPDATE target file inline headers (Phase 2B)
        Section 3 (STATUS), Section 5 (BUILT ON), Section 9 (RESEARCH DEBT)

STEP 4: UPDATE target file light sections (Phase 2D)
        Add PA-AUDIT line

STEP 5: UPDATE stage provenance documents
        STAGE-HEADER, outbound-findings (CASCADE/SOUL only), AUDIT-SYNTHESIS, CLAUDE.md

STEP 6: UPDATE RESEARCH-ACTIVE.md
        Validated, challenged, new discoveries

STEP 7: UPDATE PIPELINE-MANIFEST.md
        PA-F entries, cross-references, lifecycle states

STEP 8: FLAG identity updates (DO NOT WRITE directly)
        Write PA-IDENTITY-DELTA.md if SOUL/CASCADE findings exist
```

### 5.6 Enrichment Verification Checklist

```
[ ] PA-outbound-findings.md exists with all PA-F entries
[ ] Every target file's inline header updated (Section 3, 5, 9)
[ ] Every target file's light section has PA-AUDIT line
[ ] STAGE-HEADER.md STATUS section updated
[ ] AUDIT-SYNTHESIS.md has PA results section
[ ] RESEARCH-ACTIVE.md has PA tracking entry
[ ] PIPELINE-MANIFEST.md has PA-F section
[ ] PA-F IDs are sequential with no gaps
[ ] No existing content was deleted or overwritten
[ ] CASCADE findings appear in outbound-findings.md
[ ] SOUL findings flagged in PA-IDENTITY-DELTA.md
```

---

## SECTION 6: CASCADE PROPAGATION

### 6.1 The 5-Layer Dependency Chain

```
LAYER 1: TOKENS (most fundamental)
  tokens/geometry.md, colors.md, typography.md, spacing.md
    |
    v
LAYER 2: PATTERNS
  patterns/density-patterns.md, organizational-patterns.md, PATTERN-INDEX.md
    |
    v
LAYER 3: RESEARCH & FINDINGS
  PIPELINE-MANIFEST.md, outbound-findings.md, ACCUMULATED-IDENTITY, convention specs
    |
    v
LAYER 4: EXPLORATIONS (surface)
  DD-001..006.html, OD-001..006.html, AD-001..006.html
    |
    v
LAYER 5: DOWNSTREAM CONSUMERS
  CD, Migration, final product pages
```

**Key insight:** Fixes applied ONLY at Layer 4 are invisible to Layer 5 consumers who read from Layers 1-3.

### 6.2 Root Cause Classification (7 Classes)

| Class | Name | Fix Location | Cascade Scope |
|-------|------|-------------|---------------|
| **S** | SURFACE | Layer 4 only | None -- local fix |
| **T** | TOKEN | Layer 1 (tokens) | ALL downstream |
| **P** | PATTERN | Layer 2 (patterns) | All explorations using pattern |
| **C** | CONVENTION | Layer 3 (convention spec) | Stage explorations + downstream |
| **R** | RESEARCH | Layer 3 (research) | Future stages |
| **I** | IDENTITY | Layer 3 (identity) | All stages |
| **F** | FINDING | Layer 3 (findings) | All downstream consumers |

### 6.3 Classification Decision Tree

```
Q1: Involves a LOCKED VALUE (color, font, spacing, border-radius)?
    YES --> Locked value CORRECT in tokens?
            YES --> Exploration using hardcoded value?
                    YES --> Class S (builder failed to use token)
                    NO  --> Class P (pattern CSS doesn't reference token)
            NO  --> Class T (fix at token source)

Q2: Involves LAYOUT or RHYTHM decision?
    YES --> Pattern definition exists?
            YES --> Pattern matches finding?
                    YES --> Class S (builder deviated)
                    NO  --> Class P (pattern is wrong)
            NO  --> Convention rule exists?
                    YES --> Convention matches?
                            YES --> Class S
                            NO  --> Class C (convention is wrong)
                    NO  --> Class R (no rule exists)

Q3: Appears in MULTIPLE explorations?
    YES --> Convention governs this?
            YES --> Class C (ambiguous or wrong)
            NO  --> Class C (MISSING)
    NO  --> Class S

Q4: Contradicts a documented finding?
    YES --> Finding correct? YES -> Class S. NO -> Class F.
    NO  --> Class R

Q5: Relates to ANTI-PHYSICAL identity or soul pieces?
    YES --> Documented in ACCUMULATED-IDENTITY?
            YES -> Class S. NO -> Class I.
```

### 6.4 Cascade Propagation Protocol (6 Phases)

**Phase 1 -- CLASSIFY:** For each finding, walk the decision tree, assign S/T/P/C/R/I/F.

**Phase 2 -- TRACE:** For non-Surface findings, identify root file, list all consuming files, build IMPACT SET.

**Phase 3 -- FIX AT SOURCE:** Apply fix at root layer (1, 2, or 3). Update inline headers. Generate finding.

**Phase 4 -- PROPAGATE DOWN:** Check every file in IMPACT SET. Fix files using old value.

**Phase 5 -- VERIFY UNANIMITY:** Search ENTIRE system for old value. Zero remaining = UNANIMOUS.

**Phase 6 -- DOCUMENT:** Record in CASCADE-LOG.md. Update PIPELINE-MANIFEST. Update RESEARCH-ACTIVE.

### 6.5 Cross-Stage Impact Matrix

**Token Change -> Check:** ALL exploration CSS `:root`, ALL pattern CSS, ALL component CSS

**Pattern Change -> Check:** All explorations implementing that pattern

**Convention Change -> Check:** ALL explorations at current + future stages

**Finding Change -> Check:** All downstream stages consuming the finding + ACCUMULATED-IDENTITY if cross-cutting

### 6.6 The Unanimity Guarantee (7 Conditions)

A fix is UNANIMOUS when ALL 7 conditions are met:

| # | Condition | Verification |
|---|-----------|-------------|
| 1 | Token-level correct | Read tokens/*.md, verify value |
| 2 | Pattern-level correct | Read patterns/*.md, verify CSS references |
| 3 | Convention-level correct | Read *-CONVENTION-SPEC.md, verify rules |
| 4 | Finding-level correct | Read outbound-findings.md, verify descriptions |
| 5 | Identity-level correct | Read ACCUMULATED-IDENTITY, verify constraint listed |
| 6 | Exploration-level correct | Programmatic search + visual audit across all HTML |
| 7 | Zero residual instances | Full-system grep for old value returns zero |

### 6.7 Fix Order

**Layer 1 first (tokens) -> Layer 2 (patterns) -> Layer 3 (conventions/findings/identity) -> Layer 4 (explorations)**

Within each layer, fix in dependency order (tokens before patterns, patterns before conventions).

---

## SECTION 7: EXECUTION SEQUENCE

### 7.1 Stage-by-Stage Mode Selection

| Stage | Default Mode | Agents | Escalation Trigger |
|-------|-------------|--------|-------------------|
| DD | Standard | 4 | Escalate to Standalone if DO-NOT-SHIP |
| OD | Standard | 4 | Escalate to Standalone if dialect drift (PA-24) |
| AD | Standalone | 7 | Already maximum |
| CD | Standalone | 7 | Already maximum |
| Components | Quick | 0 (inline) | Escalate to Standard for complex components |

### 7.2 Recommended Full-Pipeline Audit Sequence

**Phase 1: AD First (Most Complex, Highest Risk)**

AD pages layer density + organization + axis geometry. Start here for maximum finding coverage.

1. Audit AD-006 (Compound) -- Standalone mode, 7 agents, ~60 min
2. If SHIP: audit AD-003 (Bento Grid) + AD-005 (Choreography) in Standalone
3. Audit AD-001, AD-002, AD-004 in Standard mode
4. Cross-page pass: Quick mode on all 6 AD pages for PA-24/PA-25

**Phase 2: OD (Medium Complexity)**

1. Audit OD-006 (Creative) -- Standard mode, 4 agents, ~30 min
2. If SHIP: audit remaining OD-001 through OD-005 in Standard
3. Cross-page pass: Quick mode on all 6 OD pages

**Phase 3: DD (Lowest Complexity)**

1. Audit DD-006 (Fractal) -- Standard mode, 4 agents, ~30 min
2. If SHIP: audit remaining DD-001 through DD-005 in Standard
3. Cross-page pass: Quick mode on all 6 DD pages

**Phase 4: Cross-Stage Synthesis**

After all stages audited:
1. Write PA-AUDIT-SYNTHESIS.md aggregating all stage verdicts
2. Identify cross-stage patterns (findings appearing at multiple stages)
3. Classify cross-stage findings as CASCADE
4. Run enrichment protocol (Section 5)
5. Run cascade propagation (Section 6)

### 7.3 Recommended Abbreviated Audit

If the full pipeline is too costly, audit ONE page per stage:

1. AD-006 (Compound) -- Standalone
2. OD-006 (Creative) -- Standard
3. DD-006 (Fractal) -- Standard

These are the crown jewels at each stage. If they ship, the others likely ship.

### 7.4 Research Context Per Stage

**DD Research Contextualizer reads:**
- SOUL-DISCOVERIES.md
- ACCUMULATED-IDENTITY-v1.md (539 lines)
- R3 Density Dimensions (51 findings, PRIMARY)
- R1 Documentation Patterns (28 findings, SECONDARY)
- COMP-F findings (component-findings.md)
- DD outbound findings (DD-outbound-findings.md)

**OD Research Contextualizer reads (in addition to DD):**
- ACCUMULATED-IDENTITY-v1.1.md
- R1 (PRIMARY for OD)
- HANDOFF-DD-TO-OD.md
- OD outbound findings
- EXT-RESEARCH-REGISTRY.md
- OD-CONVENTION-SPEC.md (if exists)
- OD-AUDIT-SYNTHESIS.md (prior findings)

**AD Research Contextualizer reads (in addition to DD + OD):**
- ACCUMULATED-IDENTITY-v2.md (FULL identity, latest)
- R4 Axis Innovations (192 findings, PRIMARY)
- R2 Creative Layouts (27 findings, SECONDARY)
- HANDOFF-OD-TO-AD.md
- AD outbound findings (AD-outbound-findings.md)
- AD-CONVENTION-SPEC.md (822 lines)
- AD-AUDIT-SYNTHESIS.md, AD-SYNTHESIS.md

### 7.5 Stage-Specific Auditor Focus Annotations

**DD Auditors:** Focus on density RHYTHM (PA-17). Dead space may be INTENTIONAL (PULSE breathing room, GEOLOGICAL strata) or PROBLEMATIC (CRESCENDO energy loss). The scroll-through is the density experience.

**OD Auditors:** Focus on organizational coherence (PA-03), flow matching org pattern (PA-12), repeating organizational units consistency (PA-16).

**AD Auditors:**
- Auditor C (PA-14/PA-15): Some axis patterns create INTENTIONAL misalignment (Z-Pattern alternates, Spiral curves). Distinguish intentional from accidental.
- Auditor D (PA-24/PA-25): All 6 AD pages should feel like siblings despite different axes. Take cross-page screenshots.
- Adversarial (PA-26): Test whether AD-CONVENTION-SPEC container width works for ALL 6 axis patterns. The 860px bottleneck is a known risk for bento grids.

### 7.6 HTTP Server Setup

```bash
# Start from showcase root
cd /Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/docs-spa/app/showcase
python3 -m http.server 8080 &

# Verify
curl -s -o /dev/null -w "%{http_code}" http://localhost:8080/
# Expected: 200
```

**URL patterns:**
| Stage | URL |
|-------|-----|
| DD | `http://localhost:8080/explorations/density/DD-{NNN}-{name}.html` |
| OD | `http://localhost:8080/explorations/organizational/OD-{NNN}-{name}.html` |
| AD | `http://localhost:8080/explorations/axis/AD-{NNN}-{name}.html` |

### 7.7 Estimated Timeline

| Stage | Pages | Mode | Per-Page | Total |
|-------|-------|------|----------|-------|
| AD | 6 | Standalone(3) + Standard(3) | ~45 min avg | ~4.5 hrs |
| OD | 6 | Standard | ~30 min | ~3 hrs |
| DD | 6 | Standard | ~30 min | ~3 hrs |
| Cross-page | 3 passes | Quick | ~15 min | ~45 min |
| Enrichment | -- | -- | -- | ~2 hrs |
| Cascade | -- | -- | -- | ~2 hrs |
| **Total** | **18 pages** | | | **~15 hrs** |

---

## SECTION 8: VALIDATION CRITERIA

### 8.1 The Bento Grid Litmus Test

The skill passes if and only if it catches the canonical failure: a 4-column bento grid in an 860px container where one column is ~130px wide and every word stacks on its own line.

**Specific Requirements:**
- PA-02 must catch the word stacking (text uncomfortable to read)
- PA-06 must catch it explicitly (words stacking vertically)
- PA-14 must catch content-container misfit
- PA-10 (squint test) must reveal lopsided column distribution
- Research Validator must classify container width as CHALLENGEABLE (not LOCKED)
- If Fixers present, fix must increase column room (not reduce font size)
- Weaver must include it in top 3 concerns

### 8.2 Ongoing Metrics

| Metric | Target | Red Flag |
|--------|--------|----------|
| Perception-to-Rule finding ratio | >= 40% perception | < 15% |
| Cold Look accuracy | Gut matches final verdict | Gut says NO, final says SHIP |
| Fix rate parity | >= 30% perception findings fixed | 0% |
| False positive rate | < 20% | > 50% |
| Anti-pattern contamination | < 10% of answers | > 30% |
| Auditor agreement rate | >= 60% overlap on top 3 | < 30% |
| Post-fix improvement | Visual improvement reported | "Just changed a number" |
| WOULD-NOT-SHIP appearance rate | Non-zero per audit | 0% across multiple audits |

### 8.3 Red Flags

- Agents answer PA-01 through PA-05 in under 30 seconds (not really looking)
- Every Cold Look verdict is "YES" (compliant, not honest)
- All Perception Track findings are COULD-BE-BETTER (hedging)
- No WOULD-NOT-SHIP findings ever appear (threshold too high)
- Answers contain CSS properties (rule-checking in disguise)
- Findings copy-pasted across pages (pattern-matching the prompt)
- Escalation rate > 10% (Lock Sheet too aggressive)
- All auditors return zero concerns (spawn adversarial auditor)

### 8.4 The "Would They Tweet It" Test

Would someone screenshot this page and share it as an example of great design? If "no" after passing all checks, the skill found the gap.

### 8.5 Calibration Examples

**Good Cold Look (perceptual, immediate):**
```
Gut reaction: The page feels confident and spacious, but the bottom
              third seems to run out of energy.
Worst thing:  The narrow column on the left where text is stacking
              vertically -- it looks like a bookmark, not a content area.
Best thing:   The header typography commands attention without shouting.
Ship verdict: YES WITH RESERVATIONS
```

**Bad Cold Look (analytical, technical):**
```
Gut reaction: The layout uses a 4-column grid with appropriate spacing
              and the color palette matches the design system tokens.
Worst thing:  The third grid column computes to approximately 130px
              which is below the minimum recommended width.
Best thing:   The h1 element uses the correct font-family and weight.
Ship verdict: YES
```

The bad example could be written without seeing the page.

**Good Zone Sweep Finding:**
```
READABILITY CONCERN: In the "How It Works" section, the right-most
column is so narrow that every word sits alone on its own line.
Reading it feels like reading a shopping list, not a paragraph. The
neighboring column has plenty of room -- the space distribution
feels unfair.
```

**Bad Zone Sweep Finding:**
```
READABILITY CONCERN: Column 4 in the bento grid has a computed width
of 130px. At 16px font-size, this yields approximately 8 characters
per line. Recommend increasing grid-template-columns.
```

---

## SECTION 9: FILE MANIFEST

### 9.1 Files You Must Read (Research Context)

**Universal (all stages):**
- `DESIGN-SYSTEM/provenance/SOUL-DISCOVERIES.md`
- `DESIGN-SYSTEM/tokens/geometry.md`
- `DESIGN-SYSTEM/tokens/colors.md`
- `DESIGN-SYSTEM/tokens/typography.md`
- `DESIGN-SYSTEM/tokens/spacing.md`

**Per-stage (see Section 7.4 for full lists):**
- Accumulated Identity (v1, v1.1, or v2 depending on stage)
- Primary research file (R3 for DD, R1 for OD, R4 for AD)
- Outbound findings for current + all prior stages
- Convention spec (if exists)
- Handoff file from prior stage
- Prior audit synthesis (if exists)

### 9.2 Files You Will Produce

**Per single-page audit:**
```
{exploration-dir}/_perceptual-audit/{target-id}/
  screenshots/
    {page}-1440-coldlook.png
    {page}-1440-scroll-01.png through scroll-NN.png
    {page}-768-coldlook.png
    {page}-768-scroll-01.png through scroll-NN.png
    {page}-1024-coldlook.png  (Standalone only)
    {page}-1024-scroll-01.png through scroll-NN.png  (Standalone only)
  lock-sheet.md
  findings-alpha.md            (Standard)
  findings-beta.md             (Standard)
  findings-impression-emotion.md  (Standalone)
  findings-readability-resp.md    (Standalone)
  findings-spatial-grid.md        (Standalone)
  findings-hierarchy-coherence.md (Standalone)
  findings-adversarial.md         (Standalone)
  validated-findings.md           (Standalone, if separate from weaver)
  AUDIT-REPORT.md              (THE final deliverable)
  fix-report-fixer-a.md        (if --fix mode)
  fix-report-fixer-b.md        (if --fix mode)
```

**Per full-stage audit:**
```
{exploration-dir}/_perceptual-audit/
  {target-1}/   (individual audit outputs)
  {target-2}/
  ...
  {target-6}/
  PA-STAGE-SYNTHESIS.md   (cross-page synthesis)
```

**Cross-stage outputs (enrichment):**
```
DESIGN-SYSTEM/provenance/PA-outbound-findings.md    (central PA-F registry)
CASCADE-LOG.md                                       (cascade documentation)
PA-IDENTITY-DELTA.md                                 (if SOUL/CASCADE findings)
```

**Updated files (enrichment modifies existing files):**
- Target file inline headers (Sections 3, 5, 9)
- Target file light sections (PA-AUDIT line)
- STAGE-HEADER.md (STATUS section)
- AUDIT-SYNTHESIS.md (PA results section)
- RESEARCH-ACTIVE.md (PA tracking entry)
- PIPELINE-MANIFEST.md (PA-F section)
- Stage CLAUDE.md files (PA status line)

### 9.3 Output Directory Convention

```
{exploration-dir}/_perceptual-audit/{target-id}/
```

Examples:
- `explorations/density/_perceptual-audit/DD-001/`
- `explorations/organizational/_perceptual-audit/OD-006/`
- `explorations/axis/_perceptual-audit/AD-003/`

### 9.4 Team Naming Convention

```
pa-{stage}-{exploration-id}-{mode}-{date}
```

Examples:
- `pa-dd-001-standard-20260210`
- `pa-ad-006-standalone-20260210`
- `pa-od-full-standard-20260210` (multi-page)

---

## APPENDIX A: SCROLL-THROUGH ADAPTATIONS BY STAGE

### DD Pages (Density-Focused)
- Length: ~10,000-15,000px
- Focus: Watch for density RHYTHM as you scroll. PULSE alternates dense-sparse. CRESCENDO builds energy downward. GEOLOGICAL has distinct strata.
- Dead zones between sections are red flags for density patterns specifically.
- Expected: 8-12 scroll screenshots per page at 1440px

### OD Pages (Organization-Focused)
- Length: ~12,000-18,000px (longer due to org structure)
- Focus: Watch for ORGANIZATIONAL coherence. Q&A pairs read naturally? Story momentum sustained? Hub remains contextually present?
- Expected: 10-15 screenshots per page

### AD Pages (Axis-Focused)
- Length: varies dramatically by axis pattern
- Focus:
  - Z-Pattern (AD-001): Eye-path repeats Z naturally?
  - F-Pattern (AD-002): Typography hierarchy holds?
  - Bento Grid (AD-003): CRITICAL -- canonical failure mode. Crushed columns?
  - Spiral (AD-004): Flow or confusion?
  - Choreography (AD-005): Direction changes smooth or jarring?
  - Compound (AD-006): Pattern transitions -- where does one hand off to another?
- Expected: 8-20 screenshots depending on pattern

---

## APPENDIX B: PRE-FLIGHT CHECKLIST

Before invoking any audit, verify:

```
[ ] HTTP server running at localhost:8080 from showcase/ directory
[ ] Target page loads correctly (curl test)
[ ] Output directory created
[ ] Know the target stage (DD/OD/AD/CD/Component)
[ ] Know the correct mode (Section 7.1 decision matrix)
[ ] Have correct file paths for research context (Section 7.4)
[ ] Playwright MCP available (test with simple navigation)
[ ] No other agents currently using Playwright (contention risk)
```

---

## APPENDIX C: RETROACTIVE CASCADE CHECKLISTS

### DD Retroactive Cascade

```
[ ] tokens/geometry.md: border-radius: 0, box-shadow: none (CONFIRMED)
[ ] tokens/colors.md: all DD explorations use correct tokens
[ ] tokens/spacing.md: all DD explorations use token variables, not hardcoded px
[ ] patterns/density-patterns.md: CSS matches actual DD implementations
[ ] DD-outbound-findings: all 18 findings accurate
[ ] PIPELINE-MANIFEST: consistent with outbound-findings
```

### OD Retroactive Cascade

```
[ ] All OD fixes reflected in convention spec
[ ] OD-CONVENTION-SPEC unified 3 dialects -- verify all 6 ODs match
[ ] OD-outbound-findings: all 17 findings accurate
[ ] EXT-* registry: 94 findings cataloged
[ ] 2px border epidemic (OD-F-AP-001): zero 2px structural borders remain
[ ] rgba() opacity: zero non-1.0 opacity on visual elements
```

### AD Retroactive Cascade

```
[ ] All 7 BROKEN/SOUL VIOLATION fixes applied
[ ] 11 OVERFLOW fixes applied
[ ] AD-CONVENTION-SPEC matches post-fix state
[ ] AD-outbound-findings: 28 findings accurate post-fix
[ ] HANDOFF-AD-TO-CD reflects post-fix state
[ ] ACCUMULATED-IDENTITY-v2 reflects all AD discoveries
```

---

## APPENDIX D: THE SEVERITY SYSTEM THAT KILLED PERCEPTION

This documents why the Perception Track exists:

```
Raw Finding: "The page is visually monotonous" (Fresh-Eyes agent)
  --> Classified as: CONCERN (judgment, not binary)
    --> Weaver verdict: "UX observation, not CSS fix"
      --> Fix manifest: NOT INCLUDED (below threshold)
        --> Fix execution: N/A
          --> Final status: "DOCUMENTED" (= permanently ignored)
```

| Phase | Rule Findings | Perception Findings | Rule Fix Rate | Perception Fix Rate |
|-------|--------------|--------------------|--------------|--------------------|
| AD Audit (24+ agents) | 40 (85%) | 7 (15%) | ~100% | 0% |
| OD Comprehensive (~58 agents) | ~69 (78%) | ~20 (22%) | ~100% | ~10% |
| **Combined** | **~109 (82%)** | **~27 (18%)** | **~100%** | **~4%** |

The Perception Track exists to break this pattern. WOULD-NOT-SHIP findings cannot be auto-dismissed.

---

## APPENDIX E: ESCALATION PROTOCOL FORMAT

When a finding correctly identifies a perceptual problem AND it traces to a LOCKED research decision AND cannot be fixed within constraints:

```markdown
## ESCALATION: [Finding ID]

### Perceptual Evidence
- Finding: [raw observation]
- Confidence: [how many agents flagged this]
- Severity: [WOULD-NOT-SHIP / LOOKS-WRONG]

### Research Lock
- Locked decision: [what creates this]
- Lock source: [finding ID and chain]
- Lock strength: [ALWAYS-LOCKED / LOCKED]

### Attempted Resolution Within Constraints
- Fix attempted: [what was tried]
- Result: [did it resolve?]
- Remaining gap: [what persists]

### Escalation Question
[Exactly one question for the human]

### Options
1. Maintain lock -- accept perceptual cost as known trade-off
2. Revise decision -- specific change with impact analysis
3. Modify execution -- partial address within constraints
```

---

*Master Perceptual Execution Prompt assembled 2026-02-10.*
*Synthesized from: 11-final-specification.md (1,541 lines), 12-pipeline-map.md (733 lines), 13-enrichment-protocol.md (754 lines), 14-cascade-propagation.md (703 lines), 15-skill-invocation.md (1,087 lines).*
*Total input: 4,818 lines across 5 documents. Output: self-contained execution prompt.*
