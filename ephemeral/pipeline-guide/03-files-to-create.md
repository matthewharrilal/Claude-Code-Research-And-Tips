# Section 3: The Files We Need to Create

Pipeline v2 requires 6 new files. Not 40, not 20 -- six. Each one exists because something went wrong before and this file prevents it from happening again. Here is every file, what it is, what it does, and why it must exist.

---

## Overview: The 6 New Files

| # | File | Location | Size | One-Sentence Purpose |
|---|------|----------|------|---------------------|
| 1 | build-page SKILL.md | `~/.claude/skills/build-page/SKILL.md` | ~350-500 lines | The conductor -- when you type `/build-page`, this wakes up and runs everything |
| 2 | conventions-brief.md | `design-system/compositional-core/guidelines/conventions-brief.md` | ~100 lines | The ONLY document the builder reads -- tells it what to achieve, not how to achieve it |
| 3 | perception-thresholds.md | `design-system/compositional-core/guidelines/perception-thresholds.md` | ~80 lines | The minimum CSS differences a human eye can actually see |
| 4 | gate-runner.js | `design-system/compositional-core/validation/gate-runner.js` | ~400 lines | The automated quality checker that catches problems before humans ever look |
| 5 | gate-registry.js | `design-system/compositional-core/validation/gate-registry.js` | ~120 lines | The central config file that defines what each quality check looks for |
| 6 | experiment-protocol.md | `ephemeral/compositional-intelligence/experiment-protocol.md` | ~80 lines | The 3 experiments we run before committing to this architecture |

**Total new code:** ~1,130 lines across 6 files.

Compare that to the 47,944 lines of infrastructure that produced the flagship's 1.5/4 score. Pipeline v2 is deliberately small because the research proved one thing conclusively: more specification produces worse output.

---

## File 1: build-page SKILL.md

**Location:** `~/.claude/skills/build-page/SKILL.md`
**Size:** ~350-500 lines
**What it is in plain language:** The conductor of an orchestra.

### What It Does

When you type `/build-page my-content.md`, this file wakes up. It is the single entry point for every page build in the design system. Think of it like a restaurant host -- it greets you, figures out what you need, seats you at the right table, and makes sure the kitchen delivers your food.

Here is the sequence it follows:

1. **Reads the content.** It opens whatever markdown file you pointed it at and figures out what kind of page this needs to be.

2. **Classifies the tier.** Based on content length, complexity, and your explicit instructions, it decides: is this a Floor page (simple, 5 minutes), a Middle page (standard, 15-25 minutes), a Ceiling page (complex, 45-60 minutes), or a Flagship page (showcase, 90-180 minutes)? This classification determines everything that follows.

3. **Selects the agent architecture.** For Floor, it just does component assembly directly. For Middle, it spawns a single Opus agent with the conventions brief. For Ceiling and Flagship, it first invokes the tension-composition skill for content analysis, THEN spawns the builder.

4. **Routes files to the builder.** This is where it fixes a critical past failure. In the flagship experiment, the builder agent received 75 lines out of a 963-line prompt (13.4% visibility). The orchestrator ensures the builder gets exactly the right files: content brief, conventions brief, tokens.css, prohibitions summary, and the full mechanism catalog.

5. **Runs programmatic gates.** After the builder saves intermediate HTML, the orchestrator serves it via HTTP and runs gate-runner.js against it. If gates fail, it sends the fix recipes (with exact CSS values) back to the builder.

6. **Pre-captures screenshots.** Once the build passes all gates, the orchestrator takes screenshots at 1440px and 768px viewports. This is mechanical work -- no creative judgment involved.

7. **Spawns PA auditors.** It launches 9 fresh-eyes perceptual auditors in parallel, each receiving screenshots but zero context about how the page was built. A 10th agent (the weaver) synthesizes their reports.

8. **Manages the fix cycle.** If PA-05 (the "does this feel designed?" score) is below 3/4, the orchestrator routes the top 3 issues back to the SAME builder agent (preserving its compositional memory). Maximum 3 fix cycles.

9. **Delivers the result.** The final HTML file plus a build report documenting what was built, what gates passed, and what the PA auditors found.

### Why It Must Exist

Before this file, there was no single entry point. Building a page meant manually invoking the tension-composition skill, then separately spawning a builder, then running gates, then doing a perceptual audit. Each handoff was a place where intelligence could degrade.

The orchestrator is deliberately thin -- it does NOT understand compositional intelligence. It is a traffic cop, not a creative director. It routes artifacts between agents but never interprets them. This prevents the orchestrator from becoming a compression engine (which is what the 963-line master prompt became in the flagship experiment).

### What Makes It Different From What Existed Before

The old approach used a thick master prompt (963 lines) that tried to carry ALL the compositional intelligence. It told the builder everything: the metaphor, the mechanisms, the transitions, the verification criteria, the soul constraints. By the time the builder received it, 99.8% of the original intelligence had been compressed away (50:1 compression from 337 research findings to "sample 2-4 mechanisms").

The new orchestrator carries NO compositional intelligence. It carries routing logic. The intelligence lives in the conventions brief (for the builder), the TC skill (for the planner), and the PA skill (for the auditors). Each agent reads ONE document suited to its role.

### Key Design Decisions

- **Thin, not thick.** ~350 lines of routing logic, not 963 lines of compressed intelligence.
- **Tier classification at the front door.** Not every page needs the full pipeline. Floor pages skip TC entirely. Middle pages skip metaphor validation.
- **Same builder for fix cycles.** The flagship used a DIFFERENT agent for fixes, which had no memory of WHY things were built a certain way. Keeping the same agent means it remembers "the alternating border presence IS the rhythm mechanism" when the PA says "borders feel inconsistent."
- **Screenshot pre-capture.** The team lead (orchestrator) takes ALL screenshots before spawning auditors. This eliminates Playwright contention (proven pattern: 102 screenshots, 9 agents parallel, zero contention in Mode 4 PA).

### Source Evidence

- **Master synthesis (Report 32):** "Pipeline v2 should be a FAT CORE architecture: one Opus agent that plans AND builds, surrounded by a thin verification shell."
- **Maximum efficacy architecture (Report 94):** Designed the thin orchestrator model (~250 lines) with Fat Core + Thin Shell topology.
- **Pipeline v2 architecture doc:** Resolves the 7 contradictions between proposals; confirms `/build-page` as the single entry point.

---

## File 2: conventions-brief.md

**Location:** `design-system/compositional-core/guidelines/conventions-brief.md`
**Size:** ~100 lines
**What it is in plain language:** A one-page cheat sheet for the builder -- everything it needs to know, nothing it doesn't.

### What It Does

This is the ONLY document the core builder agent reads (besides the content itself, tokens.css, and prohibitions.md). It tells the builder WHAT to achieve, not HOW to achieve it. Think of it as the difference between a recipe and a grocery list. The conventions brief is the grocery list -- it says "you need these ingredients" but lets the chef decide how to cook.

It has exactly 5 sections:

**Section 1: Perception Thresholds (~20 lines)**
The minimum CSS differences humans can see. Background colors must differ by at least 15 RGB points between adjacent sections. Typography must shift by at least 2px font-size between zones. Letter-spacing must differ by at least 0.5px. No gap wider than 108px at section boundaries.

**Section 2: Soul Constraints (~20 lines)**
The 8 absolute prohibitions that define the design system's identity. Border-radius: always 0. Box-shadow: always none. No gradients. No pure black or white. Container: 940-960px. Font trinity: Instrument Serif for display, system serif for body, system sans for detail. These are non-negotiable -- violating any of them produces invalid output.

**Section 3: Spatial Rules (~20 lines)**
How space should work on the page. F-pattern or Z-pattern attention topology. Progressive disclosure with 3+ depth levels. Content-to-chrome ratio no more than 40% chrome. Responsive breakpoints at 1440px and 768px.

**Section 4: Quality Floor (~20 lines)**
The minimum bar for any page. At least 8 distinct mechanisms, with at least 1 from each of the 5 categories (Spatial, Temporal, Material, Behavioral, Relational). At least 3 multi-coherence transitions where 3+ CSS channels shift simultaneously at a zone boundary. At least 5 distinct component types. Zero whitespace voids larger than 108px.

**Section 5: Creative Authority (~20 lines)**
This section is non-negotiable and exists because of a specific failure. It explicitly tells the builder: "You may override any non-soul value if you log the override and reason. You may introduce mechanisms not in the catalog. Your compositional judgment supersedes this document on all non-soul matters."

### Why It Must Exist

This file exists because of a direct, empirical observation: **quality degrades as builder input volume increases.**

| Experiment | Builder Input | PA-05 Score |
|------------|---------------|-------------|
| CD-006 | ~50 lines | ~3/4 COMPOSED (39/40 soul score, CEILING tier) |
| Middle | ~100 lines | 4/4 DESIGNED |
| Remediation | ~300 lines | 2.5/4 COMPOSED |
| Flagship | ~530 lines | 1.5/4 FLAT |

The pattern is unambiguous across all 4 experiments. More input means more constraints competing for the builder's attention, which means less compositional freedom, which means flatter output. CD-006 (39/40 soul score, CEILING tier, ~3/4 PA-05 COMPOSED) was built by a single Opus agent with minimal guidance.

The conventions brief targets the sweet spot: ~100 lines of WHAT constraints (not HOW recipes). Combined with content + tokens.css + prohibitions, the builder receives ~230 total lines. This is between Middle (100) and Remediation (300), and weighted toward the successful end.

### What Makes It Different From the Recipe

The old approach gave builders a 650-line recipe that said HOW to execute step by step: "First write the HTML skeleton. Then add soul CSS. Then zone backgrounds..." This was prescriptive -- it told the builder what moves to make. The conventions brief is proscriptive -- it tells the builder what boundaries not to cross.

Why does this matter? Recipes cap quality at their own specificity level. A recipe that says "set h1 to 36px" produces a page with h1 at 36px. It cannot produce a page where the builder realizes 42px serves the content better. Conventions that say "display-body delta must be at least 10px" allow the builder to choose 36px OR 42px OR 28px -- whatever serves the content.

Report 85's two-dimensional model explains this:

```
                    HIGH SPECIFICITY
                         |
         Flagship        |       conventions brief
         (1.5/4)         |       (UNTESTED, target)
                         |
  LOW FREEDOM -----------+----------- HIGH FREEDOM
                         |
         Floor           |        CD-006 / Middle
         (baseline)      |        (4/4)
                         |
                    LOW SPECIFICITY
```

The conventions brief occupies the quadrant that has never been tested: high specificity (exact perception thresholds) combined with high freedom (explicit creative authority). The master synthesis predicts this will achieve 3.0-3.5/4 on first build.

### The Creative Authority Section Specifically

Four capabilities exist beyond any recipe's reach, identified in Report 85:

1. **Content-form resonance** -- the page FEELS like its content (a research synthesis page reads differently from a product launch page, even with identical components)
2. **Proportional intelligence** -- spatial distribution matches semantic weight (the conclusion gets 30% of the page because it carries 30% of the meaning)
3. **Creative surprise** -- unexpected-yet-correct compositional choices (a pull quote placed asymmetrically because the content demands tension)
4. **Emergent coherence** -- the whole exceeds the sum of parts

These capabilities live in the AGENT, not in any document. The conventions brief does not encode them. It creates the space for them to emerge by constraining only what would break the soul and freeing everything else.

### Source Evidence

- **Master synthesis (Report 32), Decision 3:** "CONVENTIONS BRIEF (~100 lines) for the Core agent. NO recipe. NO hybrid."
- **Maximum efficacy architecture (Report 94), Appendix B:** Draft conventions brief (~57 lines), expanded to ~100 in the master synthesis.
- **Recipe ceiling analysis (Report 85):** Established the two-dimensional model showing conventions + creative authority as the ceiling-breaker.
- **Codification map, Changes 1 and 3:** Map the recipe-vs-checklist distinction to specific file edits.

---

## File 3: perception-thresholds.md

**Location:** `design-system/compositional-core/guidelines/perception-thresholds.md`
**Size:** ~80 lines
**What it is in plain language:** The minimum CSS differences that human eyes can actually see.

### What It Does

This file contains a lookup table. For every CSS property that can encode visual differentiation, it states the smallest change a human can perceive. Below this threshold, the CSS exists but is invisible.

The core table:

| CSS Property | Minimum Perceptible Delta | Sub-Perceptual (INVISIBLE) |
|---|---|---|
| Background color | >= 15 RGB points apart (any channel) | < 15 RGB points |
| Font size | >= 2px between adjacent sections | < 2px |
| Letter-spacing | >= 0.5px (0.03em at 16px base) | < 0.5px |
| Line-height | >= 0.15 difference (e.g., 1.5 vs 1.7) | < 0.15 |
| Padding/margins | >= 24px between zones | < 24px |
| Border width | >= 1px (present or absent) | -- |
| Font weight | >= 200 units (400 vs 600, not 400 vs 500) | < 200 units |
| Total boundary gap | <= 108px stacked maximum | > 108px = whitespace void |

The file also includes:
- Application rules: how gates should use these thresholds
- Builder self-check: how to verify your own CSS before running gates
- Warm palette enforcement: R >= G >= B for all background colors

### Why It Must Exist

This file exists because of the single most-cited finding in the entire research corpus: **the flagship's 963-line master prompt contained zero perception-related terms.**

Not "threshold." Not "delta." Not "RGB." Not "magnitude." Zero. The prompt told the builder to create visual differentiation but never said HOW MUCH differentiation was enough. The builder complied perfectly -- it wrote 227 lines of CSS with letter-spacing values between 0.001em and 0.01em. Each was technically a different value. None was visible to the human eye.

The programmatic gates passed. They counted: "Yes, there are 6 distinct letter-spacing values." They didn't check: "Can a human see the difference between 0.003em and 0.005em?" The answer is no. At 16px base size, 0.003em is 0.048 pixels. 0.005em is 0.08 pixels. The difference is 0.032 pixels. Monitors don't even render at that resolution.

The perception thresholds file closes this gap. It draws the line between CSS that humans can perceive and CSS that is invisible theater. Every programmatic gate (in gate-runner.js) references this file. Every builder reads it (via the conventions brief, which inlines the key thresholds). Every auditor evaluates against it (via the PA skill).

### The Specific Failure This Prevents

In the flagship experiment:
- Background colors between adjacent sections differed by 1-8 RGB points. At the most extreme, rgb(254,252,243) vs rgb(249,248,240) -- a difference of 5 on the red channel, 4 on green, 3 on blue. Invisible.
- The gate runner confirmed: "Yes, adjacent sections have different backgrounds." The gate passed.
- 9 out of 9 fresh-eyes auditors said: "The sections look the same color."

With perception-thresholds.md, the gate runner would check: "Is the delta >= 15 RGB?" 5 < 15. FAIL. The builder receives: "Zone 2 background is too close to Zone 1. Increase delta by at least 10 RGB points. Try #f0ebe3."

### What the Conventions Brief Inlines vs. What This File Contains

The conventions brief includes the key numbers (15 RGB, 2px font-size, 0.5px letter-spacing, 108px max gap). This standalone file contains:
- The full table with all properties
- The rationale for each threshold (linking to specific flagship measurements)
- Application rules for gate runners (how to calculate deltas, how to handle margin collapsing)
- A warm palette reference (known-good hex values that satisfy R >= G >= B)

### Confidence Note

The PRINCIPLE (that the master prompt lacked perception terms and this caused invisible CSS) is Tier 1 -- unanimous across 11 of 25 analysis files with zero dissent. The SPECIFIC VALUES (15 RGB, 0.5px, etc.) are Tier 2 -- derived from one agent's analysis, not empirical human testing. The values are conservative estimates. They may need adjustment after real builds, but they are vastly better than the status quo of having no thresholds at all.

### Source Evidence

- **Perception model shift (File 08):** THE dominant finding. Zero perception terms in 963 lines.
- **Master prompt failures (File 02):** 42 failures, with sub-perceptual CSS among the BLOCKING tier.
- **Codification map, Change 2:** Maps these thresholds to specific edits in the PA skill and gate runner.
- **Gate runner architecture (Report 73):** SC-09 (Background Delta) and SC-14 (Sub-Perceptual Prevention) gates implement these thresholds programmatically.

---

## File 4: gate-runner.js

**Location:** `design-system/compositional-core/validation/gate-runner.js`
**Size:** ~400 lines
**What it is in plain language:** An automated quality inspector that checks the built page using a real browser.

### What It Does

gate-runner.js is a JavaScript module that launches a headless browser (Playwright), navigates to the built HTML page, inspects every element's computed styles, and returns a structured pass/fail report for 15 quality checks. Think of it as a building inspector who walks through your house with a checklist and a tape measure.

Here is how it works at runtime:

1. **Opens a browser.** Playwright launches headless Chromium. One browser instance, one page. Total runtime: 5-15 seconds for all 15 gates.

2. **Navigates to the page.** The orchestrator must serve the HTML via HTTP first (Playwright blocks `file://` protocol). It navigates to `http://localhost:3456/output.html`.

3. **Waits for fonts.** This is critical and easy to miss. It calls `document.fonts.ready` before measuring anything. Font metrics change after fonts load -- if you measure font-size before the web font arrives, you get the fallback font's size, not the final one.

4. **Disables animations.** Injects CSS that kills all animations and transitions. Otherwise, elements might be mid-animation when measured, producing wrong values.

5. **Runs 15 gates sequentially.** Each gate uses `page.$$eval` to run JavaScript inside the page, extracting computed styles from all matching elements. Each gate returns: pass/fail, what was measured, and (if it failed) a fix recipe with exact CSS.

6. **Returns structured results.** A JSON object with: summary (15/15 passed, or 13/15 with 2 failures), per-gate details, and a flat list of fix recipes for all failures.

### The 15 Gates at a Glance

The gates fall into three categories:

**Soul Gates (5 gates) -- "Is this our design system?"**
- SC-01: Container width is 940-960px
- SC-02: border-radius is 0 and box-shadow is none on EVERY element
- SC-03: Only the 3 allowed font families are used
- SC-04: All backgrounds satisfy R >= G >= B (warm palette)
- SC-05: No pure black (#000) or pure white (#FFF) anywhere

**Structure Gates (4 gates) -- "Is this properly built?"**
- SC-06: At least 3 ARIA landmarks (header, main, footer/nav)
- SC-07: Skip link exists (`<a href="#main">`)
- SC-08: At least 3 component library classes from merged-components.css
- SC-12: 2-5 content zones with data-zone attributes

**Perception Gates (6 gates) -- "Can humans see the differences?"**
- SC-09: Background colors differ by >= 15 RGB between adjacent zones
- SC-10: Total whitespace at section boundaries <= 108px
- SC-11: Display text is >= 10px larger than body text, body >= 2px larger than detail
- SC-13: At least 3 CSS channels shift at every zone boundary (multi-coherence)
- SC-14: No sub-perceptual CSS (no letter-spacing < 0.02em, no intra-zone bg deltas < 10 RGB)
- SC-15: At least 1 structural border or 2 horizontal dividers

### Why It Must Exist

This file exists because of a fundamental discovery: **programmatic verification and perceptual verification are different things, and you need both.**

The flagship experiment passed all its programmatic checks. The gate runner (such as it was) confirmed: zone backgrounds exist, typography varies, channel shifts occur. But the PA auditors (fresh human-like eyes) said: "Everything looks the same."

The problem was that the old gates counted VALUES but didn't verify MAGNITUDES. They checked "are the backgrounds different?" (yes, by 3 RGB points) instead of "can you SEE the backgrounds are different?" (no, 3 RGB points is invisible).

gate-runner.js closes this gap by embedding the perception thresholds directly into every measurement. When it checks background deltas, it doesn't just confirm they're different -- it confirms the delta exceeds 15 RGB. When it checks typography, it doesn't just count font sizes -- it verifies display-to-body gap exceeds 10px.

### The Fix Recipe System

This is what makes gate-runner.js genuinely useful instead of just diagnostic. Every failed gate produces a fix recipe with:

- **What was measured:** "Zone 1 bg: rgb(254,252,243). Zone 2 bg: rgb(249,248,240). Delta: 5 RGB."
- **What the threshold is:** "Need >= 15 RGB."
- **Exact CSS to fix it:** ".zone-2 { background-color: #f0ebe3; } /* delta from zone-1: 14,17,16 */"
- **Alternatives:** Two more color options that also satisfy the threshold AND the warm palette rule.

This means the builder never receives vague feedback like "fix the backgrounds." It receives: "Zone 2 is too close to Zone 1. Here are 3 hex values that work. Pick one." The builder can apply the fix in seconds.

### Phase-Locked Gates

The orchestrator doesn't wait until the end to run all 15 gates. It runs subsets at specific build phases:

| After Phase | Gates Run | What They Catch |
|-------------|-----------|-----------------|
| Skeleton (Phase 1) | SC-06, SC-07, SC-08, SC-12 | Missing landmarks, skip link, components, zones |
| Backgrounds (Phase 3) | SC-04, SC-05, SC-09 | Warm palette violations, imperceptible bg deltas |
| Borders + Soul (Phase 4) | SC-01, SC-02, SC-15 | Container width wrong, soul violations, missing borders |
| Typography (Phase 5) | SC-03, SC-11 | Wrong fonts, insufficient size hierarchy |
| Final (Phase 8) | ALL 15 | Comprehensive regression check before PA |

This catches errors early. In the flagship experiment, the builder spent 90-150 minutes writing CSS before ANY verification. A background delta problem at Phase 3 wasted all subsequent effort. Phase-locked gates mean the builder learns about the delta at minute 30, not minute 150.

### The 70/30 Boundary

The gates handle ~70% of quality verification (everything with a numeric threshold). The other ~30% requires the perceptual audit (PA) -- questions like "does this FEEL designed?" and "does the visual rhythm create a satisfying reading experience." A page can pass all 15 gates and still feel flat if the choices don't compose into a coherent whole.

The gates are necessary but not sufficient. They are the FLOOR, not the CEILING.

### Source Evidence

- **Gate runner architecture (Report 73):** 1,313 lines of gate specs with Playwright integration, pseudocode for 5 critical gates, phase lock mechanism.
- **Maximum efficacy architecture (Report 94):** Reduced from 5 phase gates to 3 for the Fat Core architecture (trusted core agent needs fewer interruptions).
- **Master synthesis (Report 32):** Gates as "safety net for the fat core, not a control mechanism over a thin builder."

---

## File 5: gate-registry.js

**Location:** `design-system/compositional-core/validation/gate-registry.js`
**Size:** ~120 lines
**What it is in plain language:** The settings file that tells gate-runner.js what to look for.

### What It Does

This is a configuration file. It defines, in one central place, all the thresholds, selectors, and pass criteria for the 15 gates. gate-runner.js reads this file to know what to check. Think of it as the building code that the inspector (gate-runner.js) enforces.

Here is what it contains:

```javascript
// Thresholds -- the numeric boundaries
const THRESHOLDS = {
  containerWidth: { min: 940, max: 960 },
  bgDelta: { min: 15 },            // RGB points between adjacent zones
  stackedGap: { max: 108 },        // px total at section boundaries
  displayBodyDelta: { min: 10 },   // px between h1 and body text
  bodyDetailDelta: { min: 2 },     // px between body and detail text
  letterSpacingMin: 0.02,          // em -- below this is sub-perceptual
  channelsPerBoundary: { min: 3 }, // CSS channels that must shift
  zoneCount: { min: 2, max: 5 },
  landmarkCount: { min: 3 },
  fontFamilyCount: { min: 2 },
  componentClassCount: { min: 3 },
};

// Selectors -- how to find elements in the page
const SELECTORS = {
  zones: '[data-zone], main > section',
  container: 'main, [role="main"], .container',
  landmarks: 'header, main, footer, nav, [role="complementary"]',
  skipLink: 'a[href="#main"], a.skip-link',
  displayText: 'h1, h2',
  bodyText: 'p',
  detailText: 'figcaption, caption, small, .meta',
  // ... etc.
};

// Phase gate groups -- which gates run when
const PHASE_GATES = {
  phase1: ['SC-06', 'SC-07', 'SC-08', 'SC-12'],
  phase3: ['SC-04', 'SC-05', 'SC-09'],
  phase4: ['SC-01', 'SC-02', 'SC-15'],
  phase5: ['SC-03', 'SC-11'],
};
```

### Why It Must Exist Separately From gate-runner.js

Two reasons:

1. **Single source of truth.** If the background delta threshold changes from 15 to 20 after experimentation, you change ONE number in gate-registry.js instead of hunting through 400 lines of gate-runner.js. The threshold appears in one place.

2. **Readable by non-JavaScript agents.** The conventions brief, the PA skill, and the TC skill all reference these thresholds. Having them in a clean config file means any agent can `Read` the registry and know the current thresholds without parsing function bodies.

### Source Evidence

- **Gate runner architecture (Report 73), Section 10.1:** Defines the file structure with gate-runner.js (~400 lines) and gate-registry.js (~120 lines) as separate files.
- **Pipeline v2 architecture doc, Section 3:** Confirms 2-file gate structure in the file tree.

---

## File 6: experiment-protocol.md

**Location:** `ephemeral/compositional-intelligence/experiment-protocol.md`
**Size:** ~80 lines
**What it is in plain language:** The testing plan -- what experiments we run before committing to this architecture.

### What It Does

This file describes 3 experiments in strict sequence. Each experiment has exact inputs, a procedure, success criteria, and a decision gate that determines what happens next.

**Experiment A: The $5 Experiment (run first, always)**
- **What:** Same content as the Flagship (RESEARCH-SYNTHESIS). One Opus agent. Receives ONLY: content + conventions brief (~100 lines) + tokens.css + prohibitions. No pipeline. No orchestrator. No verification shell.
- **Cost:** ~$5-10 in API. ~30 minutes.
- **Purpose:** Establishes the baseline. If a single agent with minimal input produces PA-05 >= 3.0, then the entire Fat Core architecture is unnecessary overhead and we should celebrate the simplicity.
- **Decision gate:**
  - PA-05 >= 3.0 --> Pipeline v2 is JUST the conventions brief. No orchestrator needed.
  - PA-05 2.0-2.9 --> Proceed to Experiment B (the verification shell adds value).
  - PA-05 < 2.0 --> Something is wrong with the conventions brief. Investigate.

**Experiment B: Fat Core (run second, only if Experiment A < 3.0)**
- **What:** Same content. Full Fat Core architecture (12 agents). Orchestrator produces content brief. Core agent plans + builds. 9 PA auditors verify. Weaver synthesizes. Fix cycle if needed.
- **Cost:** ~$30-50 in API. ~90 minutes.
- **Purpose:** Tests whether the verification shell and fix cycle add value over the single-agent baseline.
- **Decision gate:**
  - PA-05 improvement >= 0.5 over Experiment A --> Shell adds value. Adopt Fat Core.
  - PA-05 improvement < 0.5 --> Shell is overhead. Simplify to single agent + PA.

**Experiment C: Recipe Comparison (run third, only if scientifically curious)**
- **What:** Same content. Fat Core architecture but Core agent receives the full 650-line recipe instead of the 100-line conventions brief.
- **Cost:** ~$30-50. ~90 minutes.
- **Purpose:** Directly tests the recipe ceiling hypothesis. If the recipe produces LOWER scores than the conventions brief, the ceiling is confirmed empirically.
- **Decision gate:**
  - Recipe PA-05 < Conventions PA-05 --> Recipe ceiling confirmed. Never build a recipe again.
  - Recipe PA-05 >= Conventions PA-05 --> Ceiling hypothesis rejected. Investigate why.

### Why It Must Exist

This file exists because the project has a documented pattern of building infrastructure before validating it. The flagship experiment spent 660:1 meta-to-output ratio (47,944 lines of planning for 2,034 lines of HTML). The master synthesis explicitly warns: "Codifying more architecture before running experiments reproduces the exact failure pattern that created the Flagship disaster."

The experiment protocol forces validation before commitment. It starts with the cheapest, most radical test (does ANY pipeline help?) and only adds complexity when data demands it.

### Why It Lives in ephemeral/

This file is in `ephemeral/` (not the permanent design system) because it describes experiments, not architecture. Once the experiments are run and the results are in, the protocol is historical record, not living specification. The architecture that survives experimentation gets codified permanently; the protocol that tested it stays ephemeral.

### The Measurement Standard

All three experiments get identical Mode 4 perceptual audits:
- Screenshot pre-capture at 1440px + 768px (team lead)
- 9 independent Opus auditors (no context about which experiment)
- 1 Opus weaver synthesizing all 9 reports
- **Blind scoring:** Auditors do NOT know which experiment produced the artifact

This eliminates bias. An auditor cannot favor the conventions brief approach if they don't know they're looking at the conventions brief approach.

### Source Evidence

- **Master synthesis (Report 32), Decision 4:** Defines the 3-experiment sequence with exact inputs, costs, and decision gates.
- **Q20 experiment protocol:** Earlier proposal for a thresholds-only test (now subsumed into Experiment A).
- **Anti-reproduction protocol:** 7 binary gates preventing the project from reproducing past failures -- Gate 6 (meta:output <= 10:1) demands experimentation before more infrastructure.

---

## How These Files Relate to Each Other

```
User types: /build-page research-synthesis.md
                    |
                    v
        [1] build-page SKILL.md
              reads content, classifies tier
              spawns core agent with:
                    |
                    +---> [2] conventions-brief.md (100 lines)
                    |         references:
                    |              +---> [3] perception-thresholds.md
                    |
                    +---> tokens.css + prohibitions.md (existing files)
                    |
                    v
              Core agent builds HTML
                    |
                    v
        [4] gate-runner.js
              reads thresholds from:
                    +---> [5] gate-registry.js
              checks the HTML against:
                    +---> [3] perception-thresholds.md (encoded as code)
                    |
                    v
              PA auditors verify (existing PA skill)
                    |
                    v
              Output: designed HTML page
```

The perception thresholds are the lynchpin. They appear in three places:
1. In the conventions brief (for the builder to know during building)
2. In the gate runner (for programmatic enforcement after building)
3. In the PA skill (for perceptual verification by auditors)

This triple redundancy ensures that even if one layer fails, the others catch it.

---

## What We Are NOT Creating

Just as important as what we create is what we deliberately omit:

- **No 650-line operational recipe.** The recipe ceiling hypothesis (backed by 4 experiments showing inverse correlation between input volume and quality) means recipes cap quality at their own specificity level. We give the builder conventions instead.

- **No transition table.** The core agent discovers transitions from the content. A prescribed transition table removes the creative judgment that makes transitions feel intentional rather than mechanical.

- **No fractal echo table.** Same reasoning. The agent discovers fractal patterns organically. Prescribing them produces compliance, not composition.

- **No per-agent memory files.** The Fat Core architecture merges planner and builder into one agent. There is no handoff boundary where per-agent memory would help.

- **No 1,800-line page-building skill.** This was proposed by one architecture agent and rejected. It would reproduce the same over-specification problem that created the flagship failure.

Each of these omissions is deliberate and evidence-based. The research proved that LESS specification (not more) produces BETTER output. These 6 files are the minimum necessary structure. Everything else is space for the agent's compositional intelligence to operate.

---

## Before vs After: The Specification Stack

**Before (Flagship):**
- 963-line master execution prompt
- 1,878-line TC skill
- 774-line PA skill
- 530 lines delivered to builder
- Result: PA-05 1.5/4 (FLAT)

**After (Pipeline v2):**
- ~350-line orchestrator (routing only)
- ~100-line conventions brief (to builder)
- ~80-line perception thresholds (referenced everywhere)
- ~520-line gate runner (automated checks)
- TC skill (unchanged, for planner only)
- PA skill (unchanged, for auditors only)
- ~230 total lines delivered to builder
- Target: PA-05 >= 3.0/4 (COMPOSED or DESIGNED)

The builder receives LESS input (230 vs 530 lines) but BETTER input (conventions with creative authority vs compressed recipe without). The verification is STRONGER (15 programmatic gates + 9 PA auditors vs ad-hoc checks). The architecture has FEWER destructive boundaries (7 with 0 destructive vs 11 with 4 destructive).

This is the entire thesis of Pipeline v2: trust the agent more, specify less, verify harder.
