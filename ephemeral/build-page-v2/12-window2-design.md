# Window 2 Design: EVALUATE (Gates + PA Auditors + Weaver)

**Author:** window2-spec (Task #18)
**Date:** 2026-02-27
**Status:** COMPLETE

---

## What Window 2 Does

Window 2 answers one question: **Is this page ready to ship, or does it need creative refinement?**

Two independent systems evaluate the artifact simultaneously:
- **Gates** (plumbing): programmatic, binary, deterministic. Catches mechanical failures the builder cannot perceive (sub-perceptual CSS, accessibility violations, identity drift).
- **PA auditors** (freedom): experiential, prose, subjective. Catches compositional failures the gates cannot measure (flatness, monotony, disconnection, unrealized potential).

Neither system sees the other's results. The orchestrator reads both and makes a routing decision.

---

## The Plumbing/Freedom Split

This is the fundamental architectural principle of Window 2. Every action is either PLUMBING (deterministic, orchestrator-controlled, no creative judgment) or FREEDOM (experiential, agent-driven, creative judgment sovereign).

| Action | Category | Who Does It | Creative Judgment? |
|--------|----------|-------------|-------------------|
| Serve HTML via HTTP | Plumbing | Orchestrator | No |
| Take screenshots | Plumbing | Orchestrator | No |
| Run gate JS functions | Plumbing | Orchestrator (Playwright) | No |
| Write gate results JSON | Plumbing | Orchestrator | No |
| Orchestrator experiential scan | Plumbing-ish | Orchestrator | Minimal (illegibility detection only) |
| Auditor cold look | Freedom | PA auditor agent | Yes -- locked first impression |
| Auditor scroll-through | Freedom | PA auditor agent | Yes -- experiential narrative |
| Auditor question responses | Freedom | PA auditor agent | Yes -- perceptual prose |
| Weaver experiential anchor | Freedom | Weaver agent | Yes -- independent first impression |
| Weaver synthesis | Freedom | Weaver agent | Yes -- convergence/divergence reading |
| Weaver verdict | Freedom | Weaver agent | Yes -- creative judgment call |
| Routing decision | Plumbing | Orchestrator | No -- deterministic algorithm on inputs |

**The bright line:** Plumbing never evaluates quality. Freedom never checks compliance. The gate runner says "GR-11 FAIL: background delta 8 RGB." The auditor says "the zones blur into one undifferentiated space." Both describe the same reality. Neither contaminates the other.

---

## Phase 1: Screenshot Capture (Plumbing)

### Sequence

1. **Serve HTML.** `npx http-server {OUTPUT_DIR} -p 8888 --cors -c-1 &`
2. **Navigate Playwright.** `http://localhost:8888/output.html`
3. **Wait for fonts.** `document.fonts.ready` -- prevents missing-font artifacts that corrupt the cold look.
4. **Disable animations.** Inject: `* { animation: none !important; transition: none !important; opacity: 1 !important; }`
5. **Capture at 3 viewports.** 1440px, 1024px, 768px. For each:
   - Cold-look screenshot (full page capture)
   - Scroll-through screenshots at 80% viewport-height steps
6. **Validate screenshots.** `checkScreenshotQuality()` -- no all-black, no all-white. If FAIL, re-capture once with element-level fallback strategy.

### DPR Handling

The gate runner's `captureScreenshots()` function handles DPR automatically with 3 fallback strategies:
- **Strategy A:** `browser.newContext({ deviceScaleFactor: 1 })` -- best quality
- **Strategy B:** CDP `Emulation.setDeviceMetricsOverride` -- works when `browser()` returns null (common in Playwright MCP)
- **Strategy C:** Element-level screenshots -- last resort, always works

The orchestrator calls `captureScreenshots(page, htmlUrl, screenshotDir)` and does NOT manually implement DPR logic. The function handles it.

### Output

```
{OUTPUT_DIR}/_screenshots/
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

### Why Screenshots Before Everything Else

Screenshots are needed by both the orchestrator's experiential scan and all PA auditors. Taking them first eliminates Playwright contention -- auditors read saved PNGs via the Read tool, never touching the browser.

---

## Phase 2: Orchestrator Experiential Scan (Plumbing-ish)

### What It Is

The orchestrator scrolls through the page at the 1440px viewport and checks for ONE thing: **illegibility or broken usability.** Not quality. Not composition. Just: can you READ this page?

### What It Checks

- Text that cannot be read (too small, insufficient contrast, overlapping elements)
- Charts or tables that cannot be decoded
- Navigation that fails or is missing
- Interactive elements that do not function

### What It Produces

If ANYTHING is illegible or broken: a `BLOCKING-USABILITY` flag with a one-line description. Example: "Pull-quote text at scroll position ~60% is illegible against dark background."

If nothing is illegible: no output. The absence of a flag means usability passed.

### Why This Exists

The Gas Town incident: illegible chart text was ranked Fix #5 behind 4 imperceptible CSS issues. Usability failures must be detected BEFORE the PA auditors see the page, because usability outranks composition. If the page is illegible, the PA's experiential questions are answering the wrong thing -- they should be evaluating a readable page, not describing what an unreadable page feels like.

### Why This Is "Plumbing-ish" Not Pure Plumbing

The orchestrator makes a minimal judgment call: "is this text readable?" This is closer to a gate (binary) than an audit (prose), but it requires visual inspection that the gate runner's programmatic checks cannot fully cover. GR-60 (WCAG contrast) catches contrast ratios below thresholds, but overlapping elements, clipped text, or broken layouts that create illegibility are visual problems.

### How BLOCKING-USABILITY Propagates

If flagged:
1. The `BLOCKING-USABILITY` finding is pre-seeded into each auditor's prompt as a one-line note: "The orchestrator has flagged a usability issue: {description}. If you encounter it, it has already been noted. Focus your attention on the rest of the page."
2. The routing decision treats any BLOCKING-USABILITY as a mandatory fix BEFORE creative evaluation matters.

### Whether This Is Necessary

**The adversarial case against it:** 5 auditors will see the page. If text is illegible, all 5 will mention it. Why does the orchestrator need to check?

**The case for it:** Because the ROUTING DECISION needs to distinguish between "illegible page that needs mechanical fixing" and "readable page that needs creative refinement." If the orchestrator skips the usability scan and both auditors say "I couldn't read the bottom section," the orchestrator doesn't know if that's a CSS fix (illegible text) or a creative problem (text is readable but the density makes it hard to process). The usability scan provides the orchestrator with its own ground truth.

**Verdict:** Keep for now. It costs ~2 minutes of orchestrator time and provides a clean signal for routing. If the first 3 runs never trigger it, consider stripping it.

---

## Phase 3: Gate Runner Execution (Plumbing)

### When

**PARALLEL with PA auditor spawning.** Gates and auditors run simultaneously. The orchestrator spawns auditors and runs gates at the same time. They never see each other's results.

### How

The orchestrator loads gate runner functions from `ephemeral/va-extraction/gate-runner-core.js` via Playwright `browser_run_code` or `browser_evaluate`. The gate runner is pure JavaScript -- no LLM agent needed.

### Execution Sequence

```
1. Brief verification (text parsing, no Playwright needed):
   runBriefVerification(briefText) → BV-01 through BV-04

2. DOM gates (Playwright, page must be loaded):
   runPhase3Gates(page) → GR-01 through GR-66 (subset of ~28 essential + ~7 advisory)

3. Meta gates (post-execution):
   runMetaGates(allResults) → GR-48 (gate coverage)
```

### Which Gates Run

**ESSENTIAL (must all pass for SHIP):**

| ID | What | Why It Exists |
|----|------|--------------|
| GR-03 | Container width 940-960px | THE primary Phase D failure mode (4/5 pages violated) |
| GR-06 | Font trinity (Inter, Instrument Serif, JetBrains Mono) | Non-obvious -- builder can inhabit world and still use 4 fonts |
| GR-08 | No decorative elements | Enforces flat-surface identity |
| GR-09 | Border weight hierarchy (1px, 3px, 4px) | Non-obvious structural pattern |
| GR-10 | Cross-page DNA | Ensures system membership |
| GR-11 | Background delta >= 15 RGB between adjacent zones | THE Flagship failure -- imperceptible backgrounds |
| GR-13 | Stacked gap CSS <= 120px | Stacking loophole -- individual values pass, totals create voids |
| GR-14 | Stacked gap visual <= 150px | Same loophole, visual measurement |
| GR-15 | Single margin/padding <= 96px | Individual value ceiling |
| GR-18 | Ghost mechanisms (sub-perceptual CSS declared as techniques) | Flagship: 22% CSS was imperceptible |
| GR-44 | Trailing void check | Page-end whitespace void |
| GR-45 | Typography variation | Flagship: all 16px/400 throughout |
| GR-48 | Gate coverage (did all gates produce results?) | Process integrity |
| GR-60 | WCAG 2.1 AA contrast | Accessibility law |
| GR-63 | Builder experiential marker | Builder self-checked their own work |
| GR-67 | Footer text size | Legibility |
| BV-01 | Brief has world-description section | Brief well-formed |
| BV-02 | Brief has calibration section | Brief well-formed |
| BV-03 | Brief has arc section | Brief well-formed |
| BV-04 | Brief has content map section | Brief well-formed |

**ADVISORY (reported, don't block SHIP):**

| ID | What | Why Advisory |
|----|------|-------------|
| GR-01 | Border-radius = 0 | World-description prevents this; gate is diagnostic |
| GR-02 | Box-shadow = none | World-description prevents this |
| GR-04 | No gradients | World-description prevents this |
| GR-17 | Density stacking | Useful diagnostic, not a proven failure mode |
| GR-20 | Structural echo (<3 consecutive similar sections) | Conviction brief prevents this |
| GR-51 | Background delta distribution | Aspirational quality gate |
| GR-55 | Multi-coherence channel count | Aspirational quality gate |

### Gate Results Output

`{OUTPUT_DIR}/_gate-results.json` -- structured JSON:

```json
{
  "summary": {
    "essential_passed": 18,
    "essential_failed": 2,
    "essential_total": 20,
    "advisory_passed": 5,
    "advisory_flagged": 2,
    "advisory_total": 7
  },
  "essential_failures": [
    {
      "gateId": "GR-11",
      "status": "FAIL",
      "details": "Zones 3-4 background delta: 8 RGB (threshold: 15)",
      "fix_type": "MECHANICAL"
    }
  ],
  "advisory_flags": [
    {
      "gateId": "GR-51",
      "status": "FLAG",
      "details": "Background deltas cluster: 15, 16, 17 (low variation)"
    }
  ],
  "all_results": [ /* full array of all gate results */ ]
}
```

### Fix-Type Classification

Every essential gate failure is classified as one of:

| Fix Type | Definition | Examples | How Fixed |
|----------|-----------|----------|-----------|
| MECHANICAL | Wrong CSS value. Binary fix. | Wrong hex, padding too large, missing ARIA | Orchestrator patches CSS directly (Edit tool) |
| STRUCTURAL | Layout or zone issue requiring judgment. | Missing sections, broken grid, layout conflicts | REFINE builder handles as part of creative pass |

The gate runner code already provides enough detail in its `details` field for the orchestrator to make this classification. MECHANICAL failures have specific CSS values to change. STRUCTURAL failures describe layout-level problems.

---

## Phase 4: PA Auditors (Freedom)

### Tiered Deployment

| Mode | Auditors | Questions/Auditor | Weaver | Trigger |
|------|----------|-------------------|--------|---------|
| Standard | 2 | 10 each | No | Default |
| High-stakes | 5 | 4 each | Yes | User says "high-stakes" at Section 0 prompt |

### Standard Mode: 2 Auditors

Both spawned in parallel via `Task` tool, `subagent_type: "code"`. They run simultaneously with the gate runner. Neither auditor sees the other's work.

#### Question Assignment (Standard Mode)

**Auditor A:** E-01 through E-10 (Tiers 1-2 + first half of Tier 3)
**Auditor B:** E-11 through E-20 (second half of Tier 3 + Tiers 4-5)

This split is sequential (A gets early questions, B gets later questions) rather than tier-spanning. This is intentional for 2-auditor mode:
- With only 2 auditors, tier-spanning creates 10-question prompts where each question is from a different tier. Sequential grouping keeps the auditor's attention coherent -- A starts with first encounter and moves through spatial experience; B starts with content-form relationship and moves through coherence and potential.
- Both auditors perform Section 0 (cold look + scroll-through) independently, providing the tier-spanning convergence data that the question split does not.

#### What Each Auditor Receives

**In their prompt (constructed by orchestrator):**

1. **Receiving principle (5 lines, embedded directly):**
```
RECEIVING PRINCIPLE:
1. You are seeing this page for the first time. You know nothing about it.
2. Describe what you SEE and FEEL. No design vocabulary. No CSS terms.
3. Your perception is sovereign -- what you experience IS the truth of this page.
4. If text is illegible or something is broken, that outranks everything else.
5. React to what you see before you check what you know.
```

2. **Section 0 protocol (embedded, ~20 lines):**
   - Cold Look instructions: 5 seconds per viewport, gut reaction, worst thing, best thing, ship-it verdict. LOCKED forever.
   - Scroll-through instructions: read screenshots in sequence, note where you speed up/slow down/stop, 2-3 sentence narrative. LOCKED.
   - Visual verification reminder: you are reading PIXELS, not decoding text from context.
   - Priority override: comprehension failures ALWAYS outrank aesthetic observations.

3. **Screenshot file paths (listed explicitly):**
   - All 1440px screenshots: `{OUTPUT_DIR}/_screenshots/1440/cold-look.png`, `scroll-01.png`, `scroll-02.png`, ...
   - All 768px screenshots: `{OUTPUT_DIR}/_screenshots/768/cold-look.png`, `scroll-01.png`, ...
   - 1024px screenshots are available but NOT listed by default (reduces auditor load). Include only if user requested multi-viewport audit.

4. **Their 10 assigned questions (embedded, text extracted from PA skill):**
   - Full question text including the narrative framing and "What this surfaces" guidance stripped. Auditors get the QUESTION only, not the diagnostic metadata.
   - Example: Auditor A gets E-01 as: `"What do you notice first? Describe it without using any design vocabulary."`
   - The "What this surfaces" text is NOT included -- that would pre-load analytical frames.

5. **Language constraint (embedded, 5 lines):**
```
LANGUAGE CONSTRAINT:
Your answers may NOT contain: px, rem, em, %, hex, rgb, rgba, border-radius,
box-shadow, padding, margin, font-size, font-family, line-height, max-width,
min-width, flex, grid, gap, opacity, z-index, overflow, display, position,
or ANY CSS property name.

Use instead: heavy, light, cramped, spacious, jarring, smooth, floating,
grounded, warm, cold, sharp, soft, cluttered, breathing, deliberate,
abandoned, earned, forced, musical, monotone, alive, flat.
```

6. **BLOCKING-USABILITY note (if flagged by orchestrator scan):**
   One line only. Example: "Note: the orchestrator has flagged potentially illegible text in the lower section. If you encounter it, it's already noted."

#### What Each Auditor Does NOT Receive

- Gate results (no contamination between plumbing and freedom)
- Builder's reflection (auditor should not know builder's intent)
- Other auditor's report (independent perspectives)
- Conviction brief calibration, opposition, or content map sections (build context)
- Mechanism counts, pattern names, pipeline vocabulary
- The PA skill file itself (auditors get extracted questions, not the 518-line skill)
- "What this surfaces" annotations (pre-loads analytical frames, defeats fresh-eyes)
- Any numerical targets or thresholds

#### What Each Auditor Produces

A markdown file: `{OUTPUT_DIR}/_pa/auditor-A.md` (or `auditor-B.md`)

**Required structure:**

```markdown
# Section 0: First Encounter

## Cold Look (1440px)
Gut reaction: [one sentence]
Worst thing: [one element/area]
Best thing: [one element/area]
Ship it?: [YES / REFINE / NO]

## Cold Look (768px)
Gut reaction: [one sentence]
Worst thing: [one element/area]
Best thing: [one element/area]
Ship it?: [YES / REFINE / NO]

## Scroll-Through
[2-3 sentence narrative]

---

# Question Responses

## E-01: [question text]
[Prose response, 3-8 sentences, with screenshot references]

## E-02: [question text]
[Prose response]

...
```

#### The Actual Auditor Prompt (Standard Mode, Auditor A)

This is what the orchestrator constructs and passes to the Task tool:

```
You are a perceptual auditor. You are seeing a web page for the first time.
You know nothing about who made it, why, or what it's supposed to look like.

RECEIVING PRINCIPLE:
1. You are seeing this page for the first time. You know nothing about it.
2. Describe what you SEE and FEEL. No design vocabulary. No CSS terms.
3. Your perception is sovereign -- what you experience IS the truth of this page.
4. If text is illegible or something is broken, that outranks everything else.
5. React to what you see before you check what you know.

SECTION 0: THE EXPERIENTIAL PASS

Before answering any question, inhabit the page.

THE COLD LOOK (do this for EACH viewport):
Read the cold-look screenshot. Do NOT read text. Absorb shape, color, weight.
Spend 5 seconds. Then write these four responses -- they are LOCKED forever:

COLD LOOK ({WIDTH}px):
Gut reaction: [one sentence -- what did you FEEL?]
Worst thing: [one element or area]
Best thing: [one element or area]
Ship it?: [YES / REFINE / NO]

THE SCROLL-THROUGH:
After the cold look, read the scroll-through screenshots in sequence
(scroll-01, scroll-02, scroll-03...). Experience the page as a journey.
Where did you speed up? Where did you slow down? Where did you stop?
Write 2-3 sentences. This narrative has permanent priority.

PRIORITY: If text is illegible or something is broken, report that FIRST
regardless of everything else.

SCREENSHOTS:
1440px cold look: {OUTPUT_DIR}/_screenshots/1440/cold-look.png
1440px scroll: {OUTPUT_DIR}/_screenshots/1440/scroll-01.png, scroll-02.png, ...
768px cold look: {OUTPUT_DIR}/_screenshots/768/cold-look.png
768px scroll: {OUTPUT_DIR}/_screenshots/768/scroll-01.png, ...

YOUR 10 QUESTIONS:

E-01: "What do you notice first? Describe it without using any design
vocabulary."
[Not "the hero section" or "the typographic hierarchy" -- what do you
actually see?]

E-02: "Scroll through the entire page at reading speed. Where did you speed
up? Where did you slow down? Where did you stop?"

E-03: "If you had to describe this page's personality to someone who hasn't
seen it, what three words would you use?"

E-04: "Find the most generous area of empty space on the page. Does it feel
like a pause in a conversation, or like the other person stopped talking?"

E-05: "Find the tightest, densest area. Can you still breathe? Does the
density serve the content there, or does it feel like the page ran out
of room?"

E-06: "At the widest point of the page, does the content feel like it owns
the viewport, or like it's been placed in the middle and told to stay there?"

E-07: "Pick any two adjacent sections. What changes between them? Not what
SHOULD change -- what DO you actually notice shifting?"

E-08: "Divide the page into thirds by scroll depth. Does each third feel
like it got the same amount of attention from the designer, or did someone
get tired?"

E-09: "Is there a moment on this page where the visual treatment changes
and the content ALSO changes? Does the visual shift match the content shift,
or do they feel unrelated?"

E-10: "Imagine this content on a plain white page with default styling. What
does the current design ADD to your understanding or experience of the
content that plain text wouldn't?"

LANGUAGE CONSTRAINT:
Your answers may NOT contain: px, rem, em, %, hex, rgb, rgba, border-radius,
box-shadow, padding, margin, font-size, font-family, line-height, max-width,
min-width, flex, grid, gap, opacity, z-index, overflow, display, position,
or ANY CSS property name.

Use instead: heavy, light, cramped, spacious, jarring, smooth, floating,
grounded, warm, cold, sharp, soft, cluttered, breathing, deliberate,
abandoned, earned, forced, musical, monotone, alive, flat.

OUTPUT:
Write your report to: {OUTPUT_DIR}/_pa/auditor-A.md
Structure: Section 0 (cold look + scroll-through), then each question response.
Each response: 3-8 sentences of prose with specific screenshot references.
```

### High-Stakes Mode: 5 Auditors

Same principles, different question split. The 5-auditor split spans tiers so each auditor engages with the full experiential range:

| Auditor | Questions | Engagement Focus |
|---------|-----------|-----------------|
| A | E-01, E-05, E-11, E-17 | First encounter + density + register + persistence |
| B | E-02, E-06, E-14, E-18 | Scroll journey + spatial confidence + organizing idea + novelty |
| C | E-03, E-07, E-12, E-19 | Personality + transitions + strongest moment + aspiration |
| D | E-04, E-08, E-13, E-20 | Empty space + thirds + weakest moment + one change |
| E | E-09, E-10, E-15, E-16 | Content-form shifts + design value + one mind + music |

Each auditor writes `{OUTPUT_DIR}/_pa/auditor-[A-E].md`.

The prompt structure is identical to standard mode except:
- 4 questions instead of 10
- Tier-spanning assignment instead of sequential

---

## Phase 5: Weaver (Freedom -- High-Stakes Only)

### When

AFTER all auditors complete. Standard mode: SKIP entirely.

### What the Weaver Does

The Weaver is a creative synthesizer, not a QA aggregator. Their job is to transform 5 independent experiential accounts into creative direction that makes a refinement builder want to CREATE, not FIX.

### What the Weaver Receives

1. **Receiving principle (5 lines, embedded):**
```
RECEIVING PRINCIPLE:
1. View the screenshots yourself first. Write 3 sentences about what YOU experience.
2. Read all auditor reports. Notice where 3+ agree (convergence) and where 1 disagrees (divergence).
3. Convergence confirms truth. Divergence surfaces subtlety. Both matter.
4. Write creative direction FOR a creator, not corrections FOR a manager.
5. Your verdict is a creative judgment, not a calculation.
```

2. **1440px screenshots** (cold-look + scroll-through) -- Weaver does their own experiential pass

3. **All 5 auditor reports** (`{OUTPUT_DIR}/_pa/auditor-A.md` through `auditor-E.md`)

4. **Full conviction brief** (`{OUTPUT_DIR}/_tc-brief.md`) -- the Weaver needs to understand what the page was trying to achieve

5. **Builder's reflection** (`{OUTPUT_DIR}/_reflection.md`) -- the Weaver needs to understand the builder's creative state

### What the Weaver Does NOT Receive

- **Gate results** -- mechanical compliance is separate. The Weaver never knows which gates passed or failed.
- **Components CSS, mechanism catalog, identity files** -- the Weaver is not building.
- **Any numerical targets** -- the Weaver makes creative judgments, not measurements.

### What the Weaver Produces

`{OUTPUT_DIR}/_pa/weaver-synthesis.md` with 4 sections:

**Section 1: THE EXPERIENTIAL ANCHOR (~5-8 sentences)**
The Weaver's own first impression, written BEFORE reading any auditor report. Unrevised. This anchors the synthesis against summarizer collapse.

**Section 2: WHAT IS WORKING (~10-15 sentences)**
The page's genuine qualities, identified by convergence across auditors. Written so the REFINE builder understands WHY these qualities work and avoids accidentally destroying them.

**Section 3: WHAT IS ALMOST THERE (~10-15 sentences)**
Where multiple auditors sense unrealized potential. Near-misses framed as creative invitations: the setup exists, the payoff needs work.

**Section 4: WHERE TO GO (~10-15 sentences)**
Creative direction using the AMPLIFY / RELEASE / DEEPEN / THE GAP structure:
- **AMPLIFY:** The composition's best moment. Extend it, echo it elsewhere.
- **RELEASE:** Where tension should resolve. Give room where the page is tight.
- **DEEPEN:** The near-miss. Shortest distance to significant improvement.
- **THE GAP:** Distance between the page's personality and its best self.

**Section 5: VERDICT (3 lines)**

| Verdict | Meaning |
|---------|---------|
| SHIP | The page achieves its creative intent. Composition is complete. |
| REFINE | Compositional foundation exists but needs another creative pass. |
| RETHINK | Compositional foundation is not working. Different approach needed. |

For REFINE and RETHINK: one sentence explaining why.

### The Contamination Question

**Should the Weaver see gate results?**

No. The adversarial review (15-process-adversarial.md, Part 2, Section 6) correctly identifies that gate results contaminate creative synthesis. If the Weaver knows "GR-11 FAIL: background delta 8 RGB," they will frame their creative direction around fixing that specific value. The creative direction should emerge from experiential perception, not from compliance data.

The gate results travel separately to the routing decision and (if needed) to the mechanical fix step. They never enter the Weaver's context.

---

## Phase 6: Routing Decision (Plumbing)

### How the Orchestrator Decides

The orchestrator reads gate results and PA output, then applies a deterministic algorithm. No creative judgment. No "I think the page feels..." -- the orchestrator follows the decision tree.

### Standard Mode (2 auditors, no Weaver)

The orchestrator reads both auditor reports directly.

**Inputs to the routing decision:**
1. Gate results: count of essential failures, classified as MECHANICAL or STRUCTURAL
2. Both auditors' Section 0 cold-look "Ship it?" verdicts
3. Both auditors' prose (scanned for convergent signals)
4. BLOCKING-USABILITY flag (if any)

**Decision tree:**

```
IF BLOCKING-USABILITY flagged:
  → Fix usability issue in-window (CSS patch)
  → Re-capture screenshots at affected viewport
  → Re-evaluate (restart routing from the top)

IF both auditors Ship-it = "YES" AND 0 essential gate failures:
  → SHIP

IF both auditors Ship-it = "YES" AND only MECHANICAL gate failures:
  → Patch CSS values in-window (orchestrator Edit tool)
  → Re-run only the failed gates
  → IF pass → SHIP
  → IF still fail → report to user, ship with advisory

IF either auditor Ship-it = "REFINE" AND 0 or MECHANICAL-only gate failures:
  → Patch MECHANICAL failures first (if any)
  → REFINE (Window 3)

IF either auditor Ship-it = "REFINE" AND STRUCTURAL gate failures:
  → REFINE (Window 3 -- REFINE builder handles structural issues alongside compositional work)

IF either auditor Ship-it = "NO":
  → Scan prose for convergent "fundamental" signals: wrong feel, fighting content, incoherent
  → IF convergent fundamental problems → RETHINK (Window 1 re-entry with different agent)
  → IF only one auditor says NO → REFINE (give benefit of doubt, let REFINE builder address)

IF auditors disagree (one YES, one REFINE):
  → REFINE (conservative -- the REFINE auditor saw something the YES auditor didn't)
```

### High-Stakes Mode (5 auditors + Weaver)

Simpler -- the Weaver has already synthesized:

```
IF Weaver verdict = SHIP AND 0 essential gate failures:
  → SHIP

IF Weaver verdict = SHIP AND MECHANICAL gate failures only:
  → Patch CSS in-window → re-run gates → SHIP

IF Weaver verdict = REFINE:
  → Patch MECHANICAL gate failures first (if any)
  → REFINE (Window 3)

IF Weaver verdict = RETHINK:
  → RETHINK (Window 1 re-entry with different agent)
```

### Mechanical CSS Patching (In-Window)

For MECHANICAL gate failures, the orchestrator patches CSS directly using the Edit tool. No agent needed. This is value correction, not creative work.

**Examples of mechanical patches:**
- GR-03 FAIL (container 1020px) → change `max-width` value to 960px
- GR-11 FAIL (bg delta 8 RGB between zones 3-4) → increase difference by adjusting one zone's hex
- GR-15 FAIL (padding 104px) → reduce to 96px
- GR-60 FAIL (contrast 3.8:1 on body text) → darken text or lighten background

The orchestrator reads the gate failure `details` field, identifies the specific CSS property and element, and makes the edit. After patching, it re-runs ONLY the failed gates to confirm the fix.

**What the orchestrator does NOT patch:** STRUCTURAL gate failures (layout issues, missing sections, fundamental zone architecture problems). These require creative judgment and go to the REFINE builder.

### RETHINK Protocol

If routing to RETHINK:
1. Log the failed metaphor and auditor signals in `{OUTPUT_DIR}/_rethink-log.md`
2. Spawn a NEW Window 1 agent with one additional constraint: "Do NOT use the metaphor '{FAILED_METAPHOR}'. The previous attempt used it and it did not serve the content."
3. Maximum 1 RETHINK. If the second attempt also routes to RETHINK, ship the better of the two artifacts (orchestrator compares auditor cold-look verdicts).

---

## Timing and Parallelism

### What Runs in Parallel

```
                                    ┌─ Gate runner (Playwright JS)  ~5 min
Screenshot capture (~5 min) ───────┤
                                    ├─ PA Auditor A (Task agent)    ~10-15 min
                                    └─ PA Auditor B (Task agent)    ~10-15 min
```

Screenshots MUST complete before gates and auditors begin (both need the page loaded / screenshots saved). Once screenshots are done, gates and auditors launch simultaneously.

### What Runs Sequentially

```
Window 1 output ──→ Screenshot capture ──→ [parallel: gates + auditors] ──→ [Weaver if high-stakes] ──→ Routing decision
```

The Weaver (if used) must wait for all auditors to complete. The routing decision must wait for both gates and PA (standard: auditors; high-stakes: Weaver).

### Total Window 2 Duration

| Step | Standard | High-Stakes |
|------|----------|-------------|
| Screenshot capture | ~5 min | ~5 min |
| Gates (parallel) | ~5 min | ~5 min |
| PA auditors (parallel) | ~12 min | ~12 min |
| Weaver | -- | ~10 min |
| Orchestrator routing | ~2 min | ~2 min |
| Mechanical patching (if needed) | ~5 min | ~5 min |
| **Total** | **~15-25 min** | **~25-35 min** |

---

## Open Design Questions

### 1. Should the orchestrator provide conviction brief excerpts to auditors?

**The skill architecture (03-skill-architecture.md) says:** Yes -- sections 1 (world-description) and 4 (compositional arc) are provided.

**The PA skill says:** No -- auditors receive ONLY screenshots and questions. Zero context = genuine first impressions.

**The process adversarial says:** Fresh-eyes is more valuable than context-aware evaluation.

**My recommendation:** NO conviction brief for auditors. The PA skill's fresh-eyes principle is correct. If the auditor knows "this page uses a geological descent metaphor," they will see geological descent everywhere. The auditor should describe what they see without knowing what they're supposed to see. If the metaphor is working, auditors will describe it without being told. If they don't, the metaphor is announced, not structural.

**Exception:** If the orchestrator's experiential scan flagged a BLOCKING-USABILITY issue, that one-line note IS provided (it's about usability, not composition).

### 2. Which 20 questions vs 22 questions?

**The PA skill (current canonical):** 20 questions (E-01 through E-20) plus responsive supplements E-R1 through E-R3.

**The PA design spec (08-pa-design-spec.md):** 22 questions (E-01 through E-22) with slightly different wording and no responsive supplements.

**My recommendation:** Use the 20-question set from the PA skill file. It has been used in multiple live runs. The 22-question set is a design proposal that hasn't been battle-tested. The PA skill can be updated to the 22-question set later if the team decides, but the orchestrator should extract questions from whatever the PA skill currently contains.

**The orchestrator extracts questions dynamically.** It reads the PA skill file, parses out the question text, and embeds the appropriate questions in each auditor's prompt. If the PA skill is updated to 22 questions, the orchestrator automatically uses 22. No skill file changes needed.

### 3. 1024px screenshots -- include or exclude from auditor prompts?

**Currently:** 3 viewports captured (1440, 1024, 768) but only 1440 + 768 listed in auditor prompts.

**My recommendation:** Capture 1024px but don't list it for auditors by default. It's there if needed (manual review, debugging), but 2 viewports per auditor is enough visual data without overwhelming. The responsive supplement questions (E-R1 through E-R3) are answered from 768px screenshots.

### 4. Auditor model: Opus or Sonnet?

**The skill architecture says:** Not specified for auditors (only Opus for builder, REFINE, Weaver).

**My recommendation:** Opus for auditors. The auditors are doing the most experientially demanding work in the pipeline -- perceiving visual quality from screenshots and describing it in prose. This is the task where model capability matters most. The cost difference is small (2 agents in standard mode, 5 in high-stakes) relative to the quality of perceptual reporting.

---

## Summary: Window 2 Complete Sequence

```
1. SCREENSHOT CAPTURE (Plumbing, ~5 min)
   Orchestrator serves HTML, captures at 3 viewports, validates quality.

2. ORCHESTRATOR EXPERIENTIAL SCAN (Plumbing-ish, ~2 min)
   Quick scroll for illegibility/broken usability. Flags BLOCKING-USABILITY if found.

3. PARALLEL LAUNCH:
   ├── GATE RUNNER (Plumbing, ~5 min)
   │   Runs ~20 essential + ~7 advisory gates via Playwright JS.
   │   Writes _gate-results.json.
   │
   └── PA AUDITORS (Freedom, ~12 min)
       Standard: 2 auditors, 10 questions each
       High-stakes: 5 auditors, 4 questions each
       Each writes _pa/auditor-{X}.md

4. WEAVER (Freedom, ~10 min, high-stakes only)
   Reads all auditor reports. Writes experiential anchor + synthesis + verdict.
   Writes _pa/weaver-synthesis.md.

5. ROUTING DECISION (Plumbing, ~2 min)
   Orchestrator reads gates + PA. Applies deterministic tree.
   Routes to SHIP / REFINE / RETHINK.

6. MECHANICAL PATCHING (Plumbing, ~5 min if needed)
   Orchestrator patches MECHANICAL gate failures directly.
   Re-runs only failed gates.
```

**Total agents spawned in Window 2:**
- Standard: 2 (auditors A + B)
- High-stakes: 6 (auditors A-E + Weaver)

**Files produced by Window 2:**
- `_screenshots/` directory (3 viewports, cold-look + scroll-through each)
- `_gate-results.json`
- `_pa/auditor-A.md`
- `_pa/auditor-B.md`
- `_pa/auditor-C.md` through `auditor-E.md` (high-stakes only)
- `_pa/weaver-synthesis.md` (high-stakes only)

---

## What Window 2 Sends Forward

### To Window 3 (REFINE) -- if routed:

**Standard mode:**
- Both auditor reports (raw -- REFINE builder reads them directly)
- Gate failures classified as STRUCTURAL (if any) -- as a separate mechanical note, NOT mixed into creative direction
- BLOCKING-USABILITY finding (if any, and not yet fixed)

**High-stakes mode:**
- Weaver synthesis ONLY (NOT individual auditor reports -- Weaver has synthesized)
- Gate failures classified as STRUCTURAL (if any)
- BLOCKING-USABILITY finding (if any, and not yet fixed)

### To the user -- if SHIP:
- File path to `output.html`
- Gate results summary: X/Y essential passed, Z advisory flagged
- Auditor cold-look verdicts
- Weaver verdict (if high-stakes)

---

**END OF WINDOW 2 DESIGN**
