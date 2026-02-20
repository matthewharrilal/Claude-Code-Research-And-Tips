# Section 6: The Build Flow

## What Happens When You Type `/build-page`

You type `/build-page content.md`. Here is what happens next.

---

## The Flow at a Glance

```
/build-page content.md
       |
       v
 ORCHESTRATOR (thin, ~250 lines)
       |
       |-- Reads content.md
       |-- Determines: Track 1 or Track 2
       |-- Assembles input package for the core agent
       |
       v
 CORE AGENT (single Opus, plans AND builds)
       |
       |-- Phase A: Read content, discover tensions (10-20 min)
       |-- Phase B: Derive metaphor, plan layout (10-20 min)
       |
       |-- >>> G1 gate fires (structure checks) <<<
       |       |-- FAIL? Fix recipe -> core agent fixes -> re-check
       |       |-- PASS? Continue
       |
       |-- Phase C: Write HTML skeleton + CSS (60-120 min)
       |
       |-- >>> G2 gate fires (styling checks) <<<
       |       |-- FAIL? Fix recipe -> core agent fixes -> re-check
       |       |-- PASS? Continue
       |
       |-- Phase D: Refinement pass + cascade table (10-15 min)
       |
       |-- >>> G3 gate fires (ALL 15 gates) <<<
       |       |-- FAIL? Fix recipe -> core agent fixes -> re-check (max 3 cycles)
       |       |-- PASS? Continue
       |
       v
 SCREENSHOT CAPTURE (orchestrator does this, not the core agent)
       |
       |-- 1440px viewport (desktop canonical)
       |-- 768px viewport (tablet)
       |-- Cold look (top of page) + full scroll-through at each viewport
       |-- Saves PNGs to temp directory
       |
       v
 PERCEPTUAL AUDIT (9 fresh-eyes Opus agents in parallel)
       |
       |-- Each agent gets: screenshots + 5-6 assigned PA questions
       |-- They have NEVER seen the content, the plan, or the build process
       |-- They write independent reports
       |
       v
 PA WEAVER (1 Opus agent)
       |
       |-- Reads all 9 audit reports
       |-- Synthesizes verdict: SHIP / SHIP WITH FIXES / DO NOT SHIP
       |-- If fixes needed: produces specific fix list with top-3 issues
       |
       v
 FIX CYCLE (if needed, max 3 rounds)
       |
       |-- Core agent (SAME agent, preserved context) receives fix list
       |-- Applies fixes -> G3 re-runs
       |-- If major changes: optionally new PA round (2-PA spot check)
       |
       v
 OUTPUT
       |
       |-- output.html (the designed page)
       |-- _pa-report.md (perceptual audit verdict + all 9 reports)
       |-- _build-log.md (gate results, fix history, timing)
```

---

## Step by Step

### Step 1: The Orchestrator Wakes Up

The orchestrator is deliberately thin -- about 250 lines of coordination logic. It does not understand compositional intelligence. It understands routing.

When it receives `/build-page content.md`, it:

1. **Reads `content.md`** and classifies it:
   - Prose-dominant (<30% code/tables)? **Track 2** (our focus -- tension-composition)
   - Mixed or data-heavy? **Track 1** (component assembly, different pipeline)
   - Self-referential (content describes the design system)? **Abort** -- the pipeline cannot derive tension between content and system when the content IS the system

2. **Assembles the core agent's input package** (see Step 2)

3. **Spawns a single Opus core agent** with that package

The orchestrator is a traffic cop. It routes artifacts between stages but never interprets them. This prevents the orchestrator from becoming a compression bottleneck -- which is exactly what happened with the flagship's 963-line master prompt.

### Step 2: Core Agent Input Assembly

The orchestrator loads these files for the core agent:

| File | Lines | Purpose |
|------|-------|---------|
| `content.md` | variable (500-2000) | The raw content to transform |
| `conventions-brief.md` | ~100 | Perception thresholds, soul constraints, spatial rules, quality floor, creative authority |
| `tokens.css` | ~65 | Exact CSS values (colors, fonts, spacing) |
| `prohibitions.md` | ~35 (summary) | The 8 absolute prohibitions |
| Reference: `mechanism-catalog.md` | ~869 | Lookup per mechanism (consulted, not held in active attention) |
| Reference: `merged-components.css` | ~500 | Component library classes (consulted, not held in active attention) |

**Total: ~2,200-4,000 lines maximum**, depending on content length.

**The critical tension worth understanding:** The master synthesis (Report 32) recommends ~230 lines of builder input. But the Fat Core architecture is different. The core agent IS both the planner and the builder. It does not receive compressed instructions about content it has never read. It reads the content directly and plans from it. The reference files (mechanism catalog, components) are consulted per-phase, not held in active attention throughout.

This is why the total input can be higher without the quality degradation seen in the flagship. The flagship builder received 530 lines of instructions ABOUT content it never read. The core agent reads 100 lines of constraints plus the actual content. Instructions about content compress intelligence. The content itself IS the intelligence.

### Step 3: The Core Agent Builds

The core agent runs through four phases. It has full compositional authority -- it plans AND builds in one continuous session.

#### Phase A: Understand (10-20 min)

The agent reads the content deeply. It determines:

- **Zone count** (2-5): which sections of the content map to which visual zones
- **The emotional/intellectual arc**: what the reader FEELS at each stage of reading
- **The semantic direction**: one sentence capturing the compositional intent
  - Example: "Deepening revelation -- surface accessibility gives way to analytical density"
- **The metaphor** (if one emerges naturally). If forced, skip it and use flat mode.

This is the TC skill's Phase 0-1, but performed by the same agent that will write the CSS.

#### Phase B: Plan (10-20 min)

For each zone, the agent plans:

- Background color (>= 15 RGB delta between adjacent zones)
- Typography treatment (display / body / detail zones)
- Mechanisms to deploy (one from EACH category: Spatial, Temporal, Material, Behavioral, Relational)
- Transition type to the next zone (SMOOTH / BRIDGE / BREATHING)

The plan is written as an HTML comment at the top of the output file.

This corresponds to TC skill Phases 2-3.

#### Phase C: Build (60-120 min)

The agent writes the actual HTML + CSS. The conventions brief suggests a build sequence (not a mandate):

1. HTML skeleton (semantic markup, component library classes, ARIA landmarks, skip link)
2. Soul CSS (border-radius: 0, box-shadow: none, container 960px)
3. Zone backgrounds
4. Borders + transitions between zones
5. Typography zones (display/body/detail hierarchy)
6. Element-level richness (mechanisms, hover states, details)
7. Accessibility (focus styles, reduced motion, responsive breakpoints, print)

At each step, the agent asks itself: "Can I SEE this? Does this serve my semantic direction?"

**Between build sub-phases, gates fire:**

**G1 fires after the HTML skeleton is saved:**

```
G1 checks (4 gates):
  SC-06: ARIA landmarks >= 3?
  SC-07: Skip link present?
  SC-08: Component library classes >= 3?
  SC-12: Zone count 2-5?

PASS -> "Gate 1 passed. Continue to backgrounds and soul CSS."
FAIL -> "Gate 1 failed. Fix: [measured values + specific CSS recipe]. Re-save."
```

**G2 fires after backgrounds, soul, typography, and borders are complete:**

```
G2 checks (8 gates):
  SC-01: Container width 940-960px?
  SC-02: Soul properties (border-radius: 0, box-shadow: none)?
  SC-03: Font trinity (only 3 allowed families)?
  SC-04: Warm palette (R >= G >= B)?
  SC-05: No pure extremes (no #000, no #FFF)?
  SC-09: Background delta >= 15 RGB between adjacent zones?
  SC-11: Typography zones >= 10px display-body delta, >= 2px body-detail?
  SC-15: Border presence (>= 1 structural border or >= 2 dividers)?

PASS -> "Gate 2 passed. Continue to element richness."
FAIL -> "Gate 2 failed at zones 2-3. Background delta = 8 RGB. Need >= 15.
         Fix: Change .zone-2 background from #FAF5ED to #F0EBE3."
```

The fix recipes are specific. Not "fix the backgrounds" but "Zone 2 background rgb(250,245,237) differs from Zone 1 rgb(254,252,243) by only 5 RGB points. Change Zone 2 to #f0ebe3 (delta becomes 17)." Measured values, suggested CSS, concrete alternatives.

**Max 2 re-runs per phase gate.** If still failing after 2 fixes, the orchestrator escalates.

#### Phase D: Prove (10-15 min)

The agent writes the cascade value table -- computed CSS at every section boundary. It then self-verifies:

- >= 3 channels shift at every zone boundary
- Perception thresholds met: >= 15 RGB bg delta, >= 2px font-size delta, <= 108px stacked gap
- No sub-perceptual waste (no letter-spacing < 0.02em)

**G3 fires -- the comprehensive gate (ALL 15 checks):**

```
G3 checks (all 15 gates):
  SC-01 through SC-12 (original gates)
  SC-13: Multi-coherence (>= 3 channels shift at every zone boundary)
  SC-14: Sub-perceptual prevention (no imperceptible CSS values)
  SC-15: Border presence

This is the final regression check. It catches issues introduced
in later phases that may have broken earlier compliance.

PASS -> Proceed to screenshot capture.
FAIL -> Fix recipe with top-3 failures. Max 3 cycles at G3.
```

**Total gate runtime: ~5-15 seconds for all 15 gates.** Negligible compared to the 90-150 min build time.

### Step 4: Screenshot Capture

The orchestrator -- not the core agent -- handles screenshot capture. This is a mechanical operation:

1. **Serve the HTML** via a local HTTP server (Playwright blocks `file://` protocol)
2. **Set viewport to 1440px** (desktop canonical)
3. **Wait for `document.fonts.ready`** (critical: font metrics depend on loaded fonts)
4. **Disable animations**: `animation: none !important; opacity: 1 !important`
5. **Take cold look** (top of page, no scrolling)
6. **Scroll through the full page**, capturing screenshots at regular intervals
7. **Repeat at 768px** (tablet viewport)
8. **Save all PNGs** to a temporary directory

**Why the orchestrator does this, not the core agent:** Separation of concerns. The core agent's job is compositional. Screenshot capture is mechanical. More importantly, this prevents Playwright contention -- a single browser session under orchestrator control is reliable. Multiple agents fighting for Playwright access causes severe contention (confirmed across 6+ teams).

**Why screenshots and not the HTML file:** The PA auditors must judge what the page LOOKS like, not what the code says. A CSS property can be present in code but invisible to a reader. The flagship had backgrounds differing by 1-8 RGB points -- technically different in code, identical to human eyes. Screenshots capture the perceptual reality.

### Step 5: Perceptual Audit (9 Fresh-Eyes Agents)

This is the verification shell. Nine independent Opus agents are spawned in parallel. Each receives:

- **Screenshots** from Step 4 (both viewports)
- **5-6 assigned PA questions** from the 48-question perceptual audit protocol
- **Nothing else.** No content. No build plan. No gate results. No metaphor description.

The fresh-eyes principle is non-negotiable. These agents have NEVER seen the content, the plan, or the build process. They judge the output purely on what it looks like. This is why the Mode 4 standalone PA caught the catastrophic whitespace void (9/9 auditors flagged it) that earlier 2-PA audits missed entirely.

**Question assignment (48 questions across 9 auditors):**

| Auditors 1-2 | PA-01 through PA-06 | First impressions, gestalt, metaphor presence |
|---|---|---|
| Auditors 3-4 | PA-07 through PA-16 | Zone architecture, transitions, spatial rhythm |
| Auditors 5-6 | PA-17 through PA-24 | Channel variety, multi-coherence, border system |
| Auditors 7-8 | PA-25 through PA-36 | Typography, content-form fit, accessibility |
| Auditor 9 | PA-37 through PA-48 | Visual rhythm, transition grammar, overall verdict |

Each auditor writes an independent report. No auditor sees another's report.

### Step 6: The Weaver Synthesizes

A single Opus agent (the PA weaver) reads all 9 audit reports and synthesizes them into a verdict:

- **SHIP** (PA-05 >= 3/4, no blocking issues): The page is ready.
- **SHIP WITH FIXES** (PA-05 >= 2.5/4, specific fixable issues): Apply the top-3 fixes, then deliver.
- **DO NOT SHIP** (PA-05 < 2.5/4 or fundamental structural problems): Major rework needed.

The weaver uses convergence-based synthesis:
- **7/9 auditors agree** on a finding = real defect, must fix
- **4-6/9 agree** = likely defect, should fix
- **2-3/9 agree** = possible noise, document but don't block

The weaver produces:
1. PA-05 score (1-4 scale: FLAT / STYLED / COMPOSED / DESIGNED)
2. Top-3 actionable issues with specific descriptions
3. Soul compliance summary (any violations = automatic BLOCKING)
4. Per-question consensus matrix (48 questions x 9 auditors)

### Step 7: Fix Cycle (If Needed)

If the verdict is SHIP WITH FIXES, the fix list goes back to the **same core agent** that built the page. This is a critical architectural decision.

**Why the same agent?** The core agent has full compositional memory:

- It remembers WHY it chose those zone backgrounds
- It knows WHICH channels shifted at each boundary and WHY
- It understands the metaphor and can evaluate whether the PA's concern is a genuine defect or a misunderstanding of intentional design

In the flagship pipeline, the fix-cycle builder was sometimes a DIFFERENT agent. That agent received perceptual symptoms ("whitespace void") without compositional context ("the stacked gaps at zones 3-4 encode a breathing pause before the conclusion"). It could fix the symptom while breaking the intent.

**The fix cycle runs like this:**

1. Core agent receives the top-3 issues from the weaver
2. Core agent applies fixes (targeted CSS/HTML changes, not a rebuild)
3. G3 re-runs (comprehensive gate check -- did the fix break anything?)
4. If major changes were made: 2-PA spot check (not full 9-auditor round)
5. If PA-05 still < 3/4 and cycle count <= 3: loop
6. After 3 cycles without reaching 3/4: escalate to user

**The orchestrator keeps the core agent alive during PA processing.** While the 9 auditors run (30-45 min), the core agent is idle but its context is preserved. When PA results arrive, the orchestrator sends them to the same agent. This is the compute cost of compositional memory preservation -- one Opus agent held alive for ~30-45 min of idle time.

### Step 8: Output

Three files at deterministic paths:

```
path/to/output.html        -- The designed HTML page
path/to/_pa-report.md      -- PA verdict + all 9 audit reports + consensus matrix
path/to/_build-log.md      -- Gate results per phase, fix history, timing breakdown
```

The user gets the page plus a complete audit trail. They can see exactly what the PA found, what was fixed, and what the gates measured.

---

## Timing

```
TIME     STAGE                            AGENTS ACTIVE
──────   ──────────────────────────────   ─────────────
0:00     Orchestrator reads content        1 (orchestrator)
0:01     Core agent spawned                2 (orchestrator + core)
0:01     Phase A: Content understanding    2
0:20     Phase B: Zone + mechanism plan    2
0:40     G1 (structure). PASS.             2
0:50     Phase C: HTML skeleton + CSS      2
1:30     G2 (styling). PASS.               2
1:30     Phase C continues (richness)      2
2:00     Phase D: Verification + G3        2
2:05     G3 PASS. Screenshots.             2
2:10     PA auditors spawned               11-12 (core idle, 9 PA + weaver staging)
2:30     PA complete. Weaver synthesizes   3 (core + weaver + orchestrator)
2:35     PA-05 >= 3/4? SHIP.              1 (orchestrator outputs)
         PA-05 < 3/4? Fix cycle.          2 (orchestrator + core)

TYPICAL TOTAL: 150-180 min (2.5-3 hours)
TOTAL AGENTS: 12-13 across the full run
```

Compare to the linear pipeline's 160-270 min with 12-14 agents. The Fat Core is faster because there is no TC-to-builder handoff latency (30-60 min planning saved by merging), and fewer boundary crossings mean less time spent on coordination.

---

## What Makes This Different from the Flagship

The flagship pipeline had 19 agents, 11 boundary crossings (4 destructive), and produced PA-05 1.5/4. This architecture has 12 agents, 7 boundary crossings (0 destructive), and targets PA-05 >= 3/4.

The three structural differences:

1. **One agent plans AND builds.** The flagship separated understanding (TC planner) from execution (builder). The planner understood the content deeply. The builder received a compressed artifact. That compression destroyed 65% of compositional intelligence at Boundary 3. The Fat Core eliminates Boundary 3 entirely.

2. **Conventions, not recipes.** The flagship builder got a 530-line recipe telling it HOW to execute step by step. The core agent gets a 100-line conventions brief telling it WHAT NOT TO VIOLATE. Recipes cap quality at their own specificity level. Conventions allow quality to reach the agent's native capability.

3. **Same agent fixes.** The flagship's fix cycle sometimes used a different agent, which received perceptual symptoms without compositional context. The Fat Core routes fixes to the same agent that built the page. Full memory. No re-derivation.

---

## The 7 Boundary Crossings

Every handoff between agents or between an agent and a tool is a boundary where intelligence can degrade. The Fat Core architecture has 7 boundaries, none destructive:

| # | Boundary | From -> To | Loss | Type |
|---|----------|-----------|------|------|
| B1 | Content -> Core agent | content.md -> agent context | LOW | Constructive |
| B2 | Core internal (plan -> build) | Phase A/B -> Phase C | ZERO | Internal (same agent) |
| B3 | Core output -> Gate runner | output.html -> Playwright | ZERO | Measurement |
| B4 | Core output -> Screenshots | output.html -> PNG | TOTAL (intentional) | Necessary |
| B5 | 9 PA reports -> Weaver | 9 reports -> synthesis | LOW | Constructive |
| B6 | PA report -> Core agent (fix) | Symptoms -> same builder | LOW | Constructive |
| B7 | Fix cycle -> Final output | Revised HTML -> done | ZERO | Revision |

**What was eliminated from the linear pipeline's 11 boundaries:**
- B3 (old): TC output -> build plan (the CRITICAL DESTRUCTIVE boundary, ~20:1 compression, ~35% intelligence survival). **GONE** -- the core agent plans AND builds.
- B4 (old): Handoff gate. **ABSORBED** into Gate G1.
- B5 (old): Multi-file -> builder (builder mental merge of 8 files). **SIMPLIFIED** -- core agent reads content directly.
- B10 (old): PA -> fix cycle builder (lost compositional context). **GONE** -- same core agent handles fixes.

The linear pipeline had 4 destructive boundaries. The Fat Core has zero.

---

## The Gate System at Each Phase

A more detailed look at exactly which of the 15 gates fire when:

```
Phase A-B complete (plan + skeleton saved)
  |
  v
G1: STRUCTURAL GATES
  SC-06  ARIA landmarks >= 3?
  SC-07  Skip link present?
  SC-08  Component library classes >= 3?
  SC-12  Zone count 2-5?
  Runtime: ~2 seconds
  |
  v  (PASS)
Phase C: Backgrounds + Soul + Typography + Borders
  |
  v
G2: PERCEPTION + SOUL GATES
  SC-01  Container width 940-960px?
  SC-02  Soul properties (border-radius: 0, box-shadow: none)?
  SC-03  Font trinity (3 families only)?
  SC-04  Warm palette (R >= G >= B)?
  SC-05  No pure extremes (no #000, #FFF)?
  SC-09  Background delta >= 15 RGB?
  SC-11  Typography zones (display-body >= 10px)?
  SC-15  Border presence?
  Runtime: ~3 seconds
  |
  v  (PASS)
Phase C continues: Element richness
Phase D: Cascade table + self-verification
  |
  v
G3: COMPREHENSIVE (ALL 15 GATES)
  SC-01 through SC-15
  Including:
    SC-10  Stacked gap <= 108px (catches whitespace voids)
    SC-13  Multi-coherence >= 3 channels per boundary
    SC-14  Sub-perceptual prevention (no imperceptible CSS)
  Runtime: ~5-15 seconds
  |
  v  (PASS)
Screenshot capture -> PA audit -> Fix cycle (if needed)
```

**Why only 3 gates, not more?** Each gate interrupts the core agent's creative flow. CD-006 scored 39/40 with ZERO gates. The Middle scored 4/4 with ZERO intermediate gates. Gates are a safety net for the fat core, not a control mechanism over a thin builder. The core agent is trusted to compose; the gates verify it did not make mechanical errors.

---

## Summary

The build flow is: one capable agent composes the page, mechanical gates catch structural errors, nine fresh eyes verify the result looks designed, and the same agent fixes any issues with full compositional memory.

The orchestrator routes. The core agent creates. The gates measure. The PA judges. The weaver synthesizes. The core agent fixes. Each role is narrow, and the most important role -- creation -- stays in one agent's hands from start to finish.
