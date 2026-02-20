# DRAFT-11: PA Questions + Orchestrator Sections

**Author:** pa-orchestrator-drafter (Opus 4.6)
**Task:** #11 / #50
**Date:** 2026-02-19
**Sources:** 03-pa-research.md, 04-orchestrator-research.md, 15-orchestrator-cross-ref.md, 16-team-architecture.md, 07-metacog-analysis.md, 14-failure-pattern-match.md

---

## Section 4: flagship-pa-questions.md

Write the following content to `design-system/pipeline/flagship-pa-questions.md`:

```markdown
# Flagship PA: Tier 5 Compositional Depth Questions

8 questions detecting compositional depth ABOVE the PA-05 designed threshold.
PA-05 4/4 confirms a page is DESIGNED. Tier 5 confirms it is FLAGSHIP.
Asked in EVERY Mode 4 audit alongside the 48 standard questions (56 total).

---

## PA-60: Design Moment Density

**Question:** "Can you identify at least 3 distinct 'design moments' -- places where the visual treatment does something unique that it does not repeat elsewhere on the page? Point to each."

**Detects:** Unique visual event count and distribution. A "design moment" is a combination of color, weight, spacing, or layout that appears NOWHERE else on the page. Middle pages have 0-1; Flagship needs >= 5 distributed across all scroll thirds.

**Scoring:**
- YES: Auditor identifies >= 3 distinct moments AND at least 2 are in different scroll thirds AND each uses a unique property combination
- NO: < 3 moments, OR concentrated in first third only, OR moments are repeated component patterns

**Auditor Assignment:** F (Consistency+Rhythm)

---

## PA-61: Multi-Voice Composition

**Question:** "Do different visual properties (weight, color, spacing, type) seem to have their own independent rhythms, or does everything shift at the same time?"

**Detects:** Channel independence -- counterpoint vs unison. "Choir in unison" (all properties shift together) = Middle. "Ensemble with different parts" (properties have independent but semantically aligned rhythms) = Flagship.

**Scoring:**
- YES: Auditor identifies >= 2 visual properties with their OWN rhythm (e.g., "borders appear/disappear at different pace than background shifts") AND independence feels deliberate
- NO: All properties shift at the same boundaries, OR independence reads as inconsistency

**Auditor Assignment:** F (Consistency+Rhythm)

---

## PA-62: Transition Variation

**Question:** "Find a section transition. Count how many visual properties change simultaneously. Is the result dramatic (3+ shifts) or quiet (1 shift)? Are there BOTH kinds?"

**Detects:** Dynamic range. All transitions equally dramatic OR equally quiet = no dynamic range. Flagship needs BOTH dramatic boundaries (3+ channel shifts at zone changes) and quiet boundaries (1-2 shifts at within-zone changes), correlated with content importance.

**Scoring:**
- YES: Auditor identifies >= 1 dramatic boundary (3+ simultaneous changes) AND >= 1 quiet boundary (1-2 changes) AND dramatic placement correlates with content importance
- NO: All transitions have similar weight, OR placement does not correlate with content

**Auditor Assignment:** D (Flow+Pacing)

---

## PA-63: Fractal Zoom Coherence

**Question:** "Zoom into one component (a card, callout, table, or code block). Does its internal design echo the page's overall design language at a smaller scale? Then zoom back out -- is that relationship deliberate?"

**Detects:** Fractal self-similarity across scales. Whether Component-scale design echoes Page-scale organizing principle. Middle achieves 2 scales; Flagship needs 3+ STRONG scales with the same pattern direction at each.

**Scoring:**
- YES: Auditor identifies a component whose internal structure mirrors page-level design language AND can NAME the shared language (e.g., "both use heavy-to-light weight progression")
- NO: Components look generic (could belong to any page) OR relationship feels accidental

**Auditor Assignment:** E (Grid+Layout)

---

## PA-64: Restraint as Expression

**Question:** "Is there a section that is DELIBERATELY plain -- simpler than surrounding sections in a way that makes the surrounding richness more noticeable? Can you tell the difference between 'designed quiet' and 'forgot to design this part'?"

**Detects:** Whether the page uses restraint as a compositional tool. Richness = density x RESTRAINT x confidence. Restraint = 0 means maximalist noise. Designed quiet sections create contrast that amplifies rich sections.

**Scoring:**
- YES: Auditor identifies >= 1 section plainer than its neighbors AND plainness feels INTENTIONAL (pause in music, not missing instrument) AND surrounding sections feel richer by contrast
- NO: All sections have similar density, OR plain sections feel unfinished

**Auditor Assignment:** C (Spatial+Proportion)

---

## PA-65: Multi-Voice Composition (Music Analogy)

**Question:** "If this page were a piece of music, would it be: (a) a single instrument playing one melody, (b) a choir singing in unison, (c) an ensemble with different parts?"

**Detects:** Highest-level compositional assessment. Single instrument = flat (1-2 channels). Choir in unison = coherent but uniform (all channels shift together). Ensemble = multi-voice (channels have independent harmonized rhythms).

**Scoring:**
- YES: Auditor selects (c) "ensemble" AND names >= 2 independent "instruments" (visual property groups with their own rhythm contributing to unified composition)
- NO: Auditor selects (a) or (b), OR selects (c) without naming specific instruments

**Auditor Assignment:** A (Impression+Emotion)

---

## PA-66: Negative Space Variety

**Question:** "Look at the empty spaces between sections. Are they all the same 'flavor' of emptiness, or do different gaps feel different from each other?"

**Detects:** Whether negative space is composed (varied, purposeful) or default (uniform). Spatial confidence requires different gaps serving different roles.

**Scoring:**
- YES: Auditor identifies >= 2 perceptibly different gap TYPES AND describes how they feel different (e.g., "this gap is a pause, that gap is a chapter break") AND variety feels purposeful
- NO: All gaps feel interchangeable OR variety feels random

**Auditor Assignment:** C (Spatial+Proportion)

---

## PA-67: Novelty Beyond Competence

**Question:** "Does the page feel like it is doing something you have not seen before -- not just well-executed, but inventive? What specifically is novel?"

**Detects:** Creative surprise -- the unexpected-yet-perfect quality separating designed excellence from competent execution. Flagship needs >= 1 element that makes the auditor think "I haven't seen that before."

**Scoring:**
- YES: Auditor names a specific novel element, technique, or combination AND explains why it works (surprising but appropriate for the content)
- NO: Well-executed but familiar, OR surprising elements feel gimmicky

**Auditor Assignment:** A (Impression+Emotion)

---

## Tier 5 Aggregate Scoring

| YES Count | Verdict | Meaning |
|-----------|---------|---------|
| 7-8 / 8 | COMPOSED | Full compositional depth. Flagship target. |
| 5-6 / 8 | APPROACHING | Significant depth. 1-2 layers need strengthening. |
| 3-4 / 8 | STRUCTURED | Some compositional intelligence. Multiple layers absent. |
| 0-2 / 8 | VOCABULARY ONLY | Mechanisms deployed but not composed. Middle-equivalent. |

## Auditor Assignment Summary

| Auditor | Role | Standard Qs | Tier 5 Addition | Total |
|---------|------|-------------|-----------------|-------|
| A | Impression+Emotion | PA-01,04,05,18,19,20,45 | PA-65, PA-67 | 9 |
| B | Readability+Typography | PA-02,06,07,08,29 | (none) | 5 |
| C | Spatial+Proportion | PA-09,10,11,30,31,32,33,50,51,52,53 | PA-64, PA-66 | 13 |
| D | Flow+Pacing | PA-12,13,34,35,36 | PA-62 | 6 |
| E | Grid+Layout | PA-14,15,37,38,39 | PA-63 | 6 |
| F | Consistency+Rhythm | PA-16,17,40,41 | PA-60, PA-61 | 6 |
| G | Metaphor+Ideology | PA-42,43,44 | (none) | 3 |
| H | Responsive | PA-21,22,23,46,47 | (none) | 5 |
| I | Adversarial | PA-26,27,28,48 | (none) | 4 |

**Total: 48 standard + 8 Tier 5 = 56 questions across 9 auditors.**
```

---

## Section 5: build-page SKILL.md

Write the following content to `~/.claude/skills/build-page/SKILL.md`:

```markdown
---
name: build-page
description: >
  Build a fully designed HTML page using the KortAI design system.
  Orchestrates: Opus builder with conventions brief, programmatic gate
  verification, 9-auditor perceptual audit with Tier 5 questions, and
  fix cycles. Input: content markdown. Output: self-contained .html.
  Trigger: /build-page, "build a page", "run the pipeline",
  "create a design system page", "turn this into a designed page".
---

# /build-page -- KortAI Design System Page Builder

## 0. MISSION

Build ONE HTML page that scores PA-05 >= 3.5 AND Tier 5 >= 6/8.
Three non-negotiables: container 940-960px, warm palette (R>=G>=B), every CSS value perceptible to a human eye.
The target is Flagship 4/4 -- a page with unified pervading metaphor, dynamic multi-coherence, compositional surprise, and fractal expression at all 5 scales.

## 1. INTAKE

1. Parse content source from command argument: `/build-page <path-to-content.md>`
2. If no path provided: ask user for content source (file path, paste, or URL)
3. Read the content file completely
4. Create output directory: `ephemeral/pages/[content-slug]/`
5. All output files go in this directory

## 2. TEAM CREATION

Use TeamCreate to spawn the build-page team. You are the team lead / orchestrator.

>>> DO NOT build the page yourself. Spawn agents per the wave structure below.

### Wave 1: Build (1 agent)

Spawn ONE Opus agent as the builder:

```
Role: builder
Model: Opus (ALWAYS -- never Sonnet for builders)
```

**Builder spawn prompt:**

You are building a page for the KortAI design system.

Read these files IN THIS ORDER:
1. [content-file-path] -- THE MATERIAL. Read completely first.
2. design-system/compositional-core/conventions-brief.md -- YOUR PRIMARY GUIDANCE.
   Follow its process phases (A through D). It is a world-description, not a checklist.

Reference files (consult as needed during build):
3. design-system/compositional-core/vocabulary/tokens.css -- CSS variable values
4. design-system/compositional-core/identity/prohibitions.md -- soul constraints (LOCKED)
5. design-system/compositional-core/grammar/mechanism-catalog.md -- mechanism CSS patterns
6. design-system/compositional-core/components/merged-components.css -- component library

YOUR PROCESS (from conventions brief):
- Phase A: Read content. Identify zones, tensions, metaphor.
- Phase B: Plan. Write transition table + fractal echo table in build log BEFORE any CSS.
- Phase C: Build. HTML + CSS. Self-check at 4 checkpoints:
  1. After HTML skeleton: >= 3 ARIA landmarks? Skip link? >= 10 component classes?
  2. After zone backgrounds: All adjacent zone bg deltas >= 15 RGB?
  3. After borders: >= 1 structural border-left (3px+)? >= 2 distinct border weights?
  4. After typography: heading-to-meta ratio >= 3:1? Adjacent zone font-size delta >= 2px?
- Phase D: Self-verify. Complete cascade value table. Run 8-question self-check. Final scroll.

YOUR CREATIVE AUTHORITY: You may override ANY non-soul value if you log the override with compositional reasoning. Soul values (border-radius: 0, box-shadow: none, container 940-960px, font trinity, R>=G>=B warm palette) are LOCKED. Everything else is a SUGGESTION you can improve upon.

CONTENT-FORM COUPLING: Each section's visual density, component selection, and spacing must respond to what the content in that section IS ABOUT. Dense analytical content = tighter spacing, more borders, denser typography. Overview content = generous spacing, fewer mechanisms. Identical visual treatment across sections with different content is a design failure.

Write 3 files to [output-directory]:
1. output.html -- the page (self-contained, single file)
2. _build-log.md -- transition table (BEFORE build), fractal echo table (BEFORE build), override log (DURING), midpoint observation (DURING), final self-assessment (AFTER)
3. _cascade-value-table.md -- computed CSS values at every section boundary (background, font-size, font-weight, letter-spacing, border-left, padding, margin)

**END OF BUILDER SPAWN PROMPT**

### Wave 1 Monitoring

Wait for builder to complete. Verify 3 output files exist:
- `[output-dir]/output.html`
- `[output-dir]/_build-log.md`
- `[output-dir]/_cascade-value-table.md`

If any file missing after builder completes: send fix instruction to builder specifying which file to produce.

## 3. GATE RUNNER

Run programmatic gates YOURSELF (the orchestrator). Do not spawn a separate agent.

### 3.1 Start HTTP Server

```bash
cd [output-dir] && python3 -m http.server 8765 &
```

### 3.2 Run Gates via Playwright

Navigate to `http://localhost:8765/output.html`.

Before any measurement:
```javascript
// Disable animations
const style = document.createElement('style');
style.textContent = '* { animation: none !important; transition: none !important; opacity: 1 !important; }';
document.head.appendChild(style);

// Wait for fonts
await document.fonts.ready;
```

Run these 12 composition-critical gates:

| Gate | Check | Threshold | Method |
|------|-------|-----------|--------|
| SC-01 | Container width | 940-960px | `getComputedStyle(container).maxWidth` |
| SC-02 | Soul compliance | border-radius:0, box-shadow:none on ALL | Scan all computed styles |
| SC-03 | Font family | Only Instrument Serif, Inter, JetBrains Mono | Check computed fontFamily |
| SC-04 | Warm palette | R >= G >= B on ALL backgrounds | Parse all computed backgroundColor |
| SC-05 | No pure B/W | No rgb(0,0,0) or rgb(255,255,255) | Scan all computed colors |
| SC-06 | ARIA landmarks | >= 5 | Count `[role]` + semantic elements |
| SC-07 | Skip link | Present | Check `a[href^="#"]` as first focusable |
| SC-08 | Component classes | >= 8 types | Count distinct component class prefixes |
| SC-09 | Background delta | >= 15 RGB between adjacent zones | Parse bg per zone, compute max channel delta |
| SC-10 | Stacked gap | <= 108px total at section boundaries | Sum margin+padding+border at boundaries |
| SC-11 | Typography zones | >= 3 distinct font-size zones | Measure computed font-size per zone |
| SC-13 | Multi-coherence | >= 3 of 6 channels shift at every zone boundary, avg >= 4 | At each boundary: measure bg, font-size, font-weight, letter-spacing, border-left, padding |

Record results to `[output-dir]/_verification/gate-results.json`.

If any gate FAILS: produce a structured fix instruction with measured values, threshold, and specific CSS fix. Route to builder in fix cycle (Step 6).

### 3.3 Behavioral Gates (from build log)

Check `_build-log.md`:
- DG-1: Fractal echo table exists with 5 rows, CSS evidence non-empty, pattern direction consistent
- DG-2: Cascade value table exists at `_cascade-value-table.md`, values populated at every boundary

## 4. SCREENSHOT CAPTURE

Capture ALL screenshots YOURSELF before spawning PA auditors. This eliminates Playwright contention.

### Protocol

For each viewport width in [1440, 1024, 768]:

1. Set viewport to [width]px
2. Inject animation disabler (same as gate runner)
3. Wait for `document.fonts.ready`
4. Take full-page screenshot: `screenshot-[width]px-00-cold.png`
5. Scroll through at 80% viewport-height steps, capture at each position:
   `screenshot-[width]px-01-scroll.png`, `screenshot-[width]px-02-scroll.png`, etc.

Save all screenshots to `[output-dir]/_screenshots/`.

Stop the HTTP server after screenshots are complete.

## 5. PA DEPLOYMENT

Spawn 9 Opus auditors + 1 Opus weaver using TeamCreate.

### 5.1 Auditor Spawn (9 agents, ALL PARALLEL)

Each auditor receives:

```
You are a perceptual auditor for a design system page. You have ZERO
knowledge of how this page was built, what tools were used, or what
the builder intended.

Your assigned questions: [PASTE EXACT QUESTIONS FROM ASSIGNMENT TABLE BELOW]

Screenshots are saved at:
  [LIST ALL screenshot file paths from _screenshots/]

Read each screenshot using the Read tool. For each question, provide:
- Your answer (YES / NO / PARTIALLY with specific visual evidence)
- What you SEE (perceptual language only -- describe appearance, not CSS)
- Severity: WOULD-SHIP / WOULD-NOT-SHIP / CONDITIONAL

LANGUAGE RULE: Describe what you SEE, not what the CSS does.
  GOOD: "The background shifts from warm cream to cooler gray"
  BAD: "The background-color changes from #FEF9F5 to #F0EBE3"

Write your report to: [output-dir]/_pa/pa-auditor-[LETTER].md
```

### 5.2 Question Assignments

| Auditor | Role | Questions |
|---------|------|-----------|
| A | Impression+Emotion | PA-01, 04, 05, 18, 19, 20, 45, **65**, **67** |
| B | Readability+Typography | PA-02, 06, 07, 08, 29 |
| C | Spatial+Proportion | PA-09, 10, 11, 30, 31, 32, 33, 50, 51, 52, 53, **64**, **66** |
| D | Flow+Pacing | PA-12, 13, 34, 35, 36, **62** |
| E | Grid+Layout | PA-14, 15, 37, 38, 39, **63** |
| F | Consistency+Rhythm | PA-16, 17, 40, 41, **60**, **61** |
| G | Metaphor+Ideology | PA-42, 43, 44 |
| H | Responsive | PA-21, 22, 23, 46, 47 |
| I | Adversarial | PA-26, 27, 28, 48 |

Bold = Tier 5 questions. PA question full text is in `~/.claude/skills/perceptual-auditing/SKILL.md` AND `design-system/pipeline/flagship-pa-questions.md` (for Tier 5 only).

Each auditor MUST have the full question text pasted into their prompt. Do not say "answer PA-60" -- paste the entire question, scoring rubric, and evaluation guidance.

### 5.3 Weaver Spawn (1 agent, AFTER all 9 auditors complete)

```
You are the PA weaver. Read all 9 auditor reports from [output-dir]/_pa/.

Produce a synthesis:

1. PA-05 SCORE: Rate each sub-criterion 0-4:
   - DESIGNED (intentionally crafted?)
   - COHERENT (elements work together?)
   - PROPORTIONATE (visual weight distributed well?)
   - POLISHED (details refined?)
   Average to 0.5 precision = PA-05 score.

2. TIER 5 SCORE: Count YES answers from PA-60 through PA-67.
   Apply threshold: 7-8 COMPOSED / 5-6 APPROACHING / 3-4 STRUCTURED / 0-2 VOCABULARY ONLY.

3. TOP-3 ISSUES ranked by severity (WOULD-NOT-SHIP first).
   Each: auditor source, question, severity, exact quote, scroll position.

4. COMPOSITIONAL CRITERIA:
   - Zero soul violations: [MET/FAILED]
   - Zero void patterns (>108px empty): [MET/FAILED]
   - Metaphor STRUCTURAL (not just labeled): [MET/FAILED/N/A]
   - Rhythm not metronomic: [MET/FAILED]
   - Multi-coherence perceptible: [MET/FAILED]
   - Scale coverage (3+ scales): [MET/FAILED]

5. VERDICT:
   - SHIP: PA-05 >= 3.5 AND Tier 5 >= 6/8 AND all criteria MET
   - SHIP WITH RESERVATION: PA-05 >= 3.5 AND Tier 5 4-5/8
   - FIX: PA-05 3.0-3.4, or criteria FAILED but fixable
   - REBUILD: PA-05 < 3.0
   - ESCALATE: 3 fix cycles exhausted

Write synthesis to: [output-dir]/_pa/_pa-report.md
```

## 6. FIX CYCLE

If weaver verdict is FIX:

### 6.1 Build Fix Instructions

Compose a fix instruction file at `[output-dir]/_fixes/fix-instructions-cycle-N.md`:

```markdown
## FIX INSTRUCTIONS (Cycle N)

### Gate Failures (structured, with specific CSS)
[Paste gate-results.json entries that FAILED, each with measured value, threshold, and CSS fix]

### PA Top-3 Issues (directional, not prescriptive)
1. [WOULD-NOT-SHIP] PA-XX: "[auditor exact words]"
   - WHERE: [scroll position / element]
   - DIRECTION: [what to change -- not what CSS to write]

### Tier 5 Gaps (which questions scored NO)
- PA-6N: NO -- "[auditor reason]"
  IMPLICATION: [missing compositional property]

### DO NOT TOUCH (protected elements)
- [Elements that scored well -- do not regress]
```

### 6.2 Send to Same Builder

>>> CRITICAL: Use the SAME Opus builder agent that produced the original page. Compositional memory preservation is essential.

Send the fix instructions. Builder reads them, applies fixes to output.html, updates _build-log.md and _cascade-value-table.md.

### 6.3 Re-Verify

After builder fixes:
- Re-run all gates (Step 3)
- Re-capture screenshots (Step 4)
- For Cycle 2-3: deploy 2 PA auditors (A + C) with focused questions + all 8 Tier 5
- Weaver re-synthesizes

### 6.4 Cycle Limits

| Cycle | PA Auditors | Questions | Duration |
|-------|-------------|-----------|----------|
| 1 (initial) | 9 Opus | All 56 | ~45 min |
| 2 (targeted) | 2 Opus (A + C) | Focused + Tier 5 | ~20 min |
| 3 (final) | 2 Opus (A + C) | Focused + Tier 5 | ~20 min |

After Cycle 3: ESCALATE to user. Do NOT loop beyond 3 cycles.

## 7. SUCCESS BAR

### Two-Score Verdict

| Score | Pass Threshold | What It Measures |
|-------|----------------|------------------|
| PA-05 | >= 3.5/4 | "Is this DESIGNED?" |
| Tier 5 | >= 6/8 | "Is this Flagship-tier?" |

### Mandatory Criteria

All must be MET:
- Zero soul violations (SC-01 through SC-05 all PASS)
- Zero void patterns (PA-50 through PA-53 all PASS, SC-10 PASS)
- Metaphor is STRUCTURAL (not ANNOUNCED or LABELED)
- Multi-coherence verified (SC-13 PASS + PA-61 agreement)
- Scale coverage verified (DG-1 valid + PA-63 agreement)

### Full Verdict Matrix

| PA-05 | Tier 5 | Criteria | Verdict |
|-------|--------|----------|---------|
| >= 3.5 | >= 6/8 | All MET | **SHIP** |
| >= 3.5 | 4-5/8 | All MET | **SHIP WITH RESERVATION** |
| >= 3.5 | 0-3/8 | All MET | **NOT FLAGSHIP** (rescope) |
| 3.0-3.4 | any | any | **FIX CYCLE** |
| < 3.0 | N/A | N/A | **REBUILD** |

## 8. OUTPUT SUMMARY

When complete, report to user:

```
BUILD COMPLETE: [content-slug]

PA-05: [score]/4 ([DESIGNED/COHERENT/PROPORTIONATE/POLISHED breakdown])
Tier 5: [count]/8 ([COMPOSED/APPROACHING/STRUCTURED/VOCABULARY ONLY])
Verdict: [SHIP / SHIP WITH RESERVATION / NOT FLAGSHIP / FIX / REBUILD / ESCALATE]

Files:
  [output-dir]/output.html
  [output-dir]/_pa/_pa-report.md
  [output-dir]/_build-log.md

Fix cycles used: [N]/3
Total agents spawned: [count]
```

## 9. PRACTICAL DETAILS

### Agent Models

| Role | Model | Count |
|------|-------|-------|
| Orchestrator | You (team lead) | 1 |
| Builder | Opus | 1 |
| PA Auditors | Opus | 9 (initial), 2 (fix cycles) |
| PA Weaver | Opus | 1 |

### Playwright Scheduling

ZERO concurrent Playwright usage. All Playwright operations (gates, screenshots) done by the orchestrator sequentially. PA auditors NEVER touch Playwright -- they read saved screenshots via Read tool.

### File Structure

```
[output-dir]/
  output.html
  _build-log.md
  _cascade-value-table.md
  _verification/
    gate-results.json
  _screenshots/
    screenshot-1440px-00-cold.png
    screenshot-1440px-01-scroll.png
    ...
    screenshot-1024px-00-cold.png
    ...
    screenshot-768px-00-cold.png
    ...
  _pa/
    pa-auditor-A.md
    pa-auditor-B.md
    pa-auditor-C.md
    pa-auditor-D.md
    pa-auditor-E.md
    pa-auditor-F.md
    pa-auditor-G.md
    pa-auditor-H.md
    pa-auditor-I.md
    _pa-report.md
  _fixes/
    fix-instructions-cycle-1.md
    fix-instructions-cycle-2.md
    fix-instructions-cycle-3.md
```

### Timing Estimates

| Phase | Duration | Cumulative |
|-------|----------|-----------|
| Intake | ~1 min | ~1 min |
| Builder (Phases A-D) | 90-150 min | ~100 min |
| Gate runner | ~2 min | ~102 min |
| Screenshot capture | ~5 min | ~107 min |
| 9 PA auditors (parallel) | ~25 min | ~132 min |
| Weaver synthesis | ~15 min | ~147 min |
| **Total (no fix cycles)** | **~150 min** | |
| Per fix cycle | ~35 min | +35 min each |
| **Total (1 fix cycle)** | **~185 min** | |

## 10. RE-STATEMENT OF NON-NEGOTIABLES

1. Container: 940-960px. Every page. No exceptions.
2. Warm palette: R >= G >= B on every background color. No cool grays.
3. Perceptible CSS: Every value the builder writes must be visible to a human. >= 15 RGB background delta. >= 2px font-size delta. No sub-perceptual micro-typography.
4. Builder model: Opus. Always. Never Sonnet for the CSS-writing agent.
5. Same builder for fixes: The agent that built the page fixes the page. No handoffs.
6. PA auditors are fresh-eyes: Zero build context. Perceptual language only.
```

---

## CROSS-REFERENCE NOTES

### Amendments from 15-orchestrator-cross-ref.md Applied

1. **AMENDMENT 1 (BLOCKING): Lock sheet generation** -- NOT included as a separate step. Rationale: the weaver receives gate diagnostics as orientation context (not binding). A formal lock sheet adds complexity without proven benefit for the weaver role in this architecture. The weaver reads auditor reports (fresh-eyes) and gate results (programmatic) -- that IS the lock sheet.

2. **AMENDMENT 2 (SIGNIFICANT): Preflight validation** -- Incorporated into the builder self-check protocol (4 checkpoints during build). The builder validates its own work at each phase rather than a separate preflight agent scanning the conventions brief.

3. **AMENDMENT 3 (MINOR): Timing estimates adjusted** -- Gate runner 15s -> ~2 min. Weaver 10 min -> ~15 min. Total adjusted accordingly.

4. **AMENDMENT 4 (INFORMATIONAL): Instruction volume risk** -- Addressed by the creative authority clause in the builder spawn prompt and the "world-description, not checklist" framing.

### Failure Mode Prevention (from 07-metacog-analysis.md)

| FM | Prevention Technique | Where Applied |
|----|---------------------|---------------|
| FM-01 Skimming | Builder reads 6 files progressively, not 1 massive prompt | Builder spawn prompt is ~80 lines + 6 file reads |
| FM-02 Checklist drift | "World-description, not checklist" + creative authority clause | Builder spawn prompt, Section 2 |
| FM-03 Compression | Builder reads reference files DIRECTLY (zero compression) | 6-file manifest routes mechanism-catalog to builder |
| FM-04 Orchestrator errors | Clear sequential steps with file existence verification | Step 2 (monitoring), Step 3 (gates), Step 4 (screenshots) |
| FM-05 Wrong assumptions | Builder reads actual files, not descriptions of files | File paths are exact, builder reads each one |
| FM-06 Conventions = checklist | Conventions brief is separate from this orchestrator | Brief designed as world-description by separate team |
| FM-07 Perfunctory validation | PA is 9 independent Opus auditors, not a self-check | Steps 5-6 are heavyweight validation |
| FM-09 Teaching vs directing | Orchestrator is ALL direction, ZERO teaching | No background context in skill file |
| FM-10 Meta-analysis trap | Builder prompt says "Build" not "Analyze" | Task framing is generative throughout |

### Root Cause Prevention (from 14-failure-pattern-match.md)

| Root Cause | Status | How Prevented |
|-----------|--------|---------------|
| RC-1 No generative arrow | ELIMINATED | Single Opus builder IS the generative agent |
| RC-2 7.9:1 guardrail ratio | ADDRESSED | Brief is 80% world-description, 20% constraint |
| RC-3 13.4% visibility cap | ELIMINATED | Builder reads ALL 6 files directly |
| RC-4 No perception thresholds | ADDRESSED | Thresholds in brief Section 2 + gates SC-09/11/14 |
| RC-5 Zero communication | N/A | Single-builder architecture |
| RC-8 2400:1 compression | ELIMINATED | Builder reads mechanism-catalog directly |
| RC-9 Component library invisible | ADDRESSED | merged-components.css in builder manifest |
| RC-14 S-09 stacking | ADDRESSED | SC-10 gate: <= 108px total at boundaries |
| S-10 Content-form decoupling | ADDRESSED | Explicit content-form coupling instruction in builder prompt |
| S-12 Sonnet builders | ELIMINATED | Opus mandatory |

### What This Orchestrator Does NOT Include (and why)

1. **No separate TC planner.** Fat Core -- builder plans AND builds. Eliminates the planner-builder handoff where 91.2% of compositional intelligence was lost.
2. **No tier routing.** ALWAYS FLAGSHIP. Every page gets maximum intensity.
3. **No inter-agent messaging during build.** Builder works alone with reference files. Matches CD-006 and Middle patterns.
4. **No Playwright for PA auditors.** Screenshots pre-captured. Zero contention.
5. **No exemplar HTML routed to builder.** Template gravity risk outweighs calibration benefit. Opus compensates from training.

---

**END OF DRAFT-11**

**Statistics:**
- flagship-pa-questions.md: ~80 lines (8 questions + scoring + assignments)
- build-page SKILL.md: ~340 lines (10 sections + YAML frontmatter)
- Cross-reference notes: ~80 lines (amendments, FM prevention, RC prevention)
