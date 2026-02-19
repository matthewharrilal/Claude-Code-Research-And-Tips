# Pipeline v2 User Experience: `/build-page` to Finished HTML

**Agent:** ux-designer (Opus 4.6)
**Date:** 2026-02-18
**Sources:** tension-composition SKILL.md, perceptual-auditing SKILL.md, 42-OPERATIONAL-RECIPE.md (1,746 lines), anti-reproduction-protocol.md (7 gates + 5 meta-gates), pipeline-implications.md, MEMORY.md (process history)
**Purpose:** Concrete UX specification for the `/build-page` command — every prompt, every branch, every gate, every recovery path

---

## DESIGN PRINCIPLES

Three principles govern this UX, derived from the corpus:

1. **Frictionless entry, progressive depth.** The user types one command. The system asks the minimum questions to classify the job. Everything else is autonomous unless a gate fails.
2. **Transparency without noise.** The user sees phase transitions and gate results. They do NOT see internal agent communication, CSS line counts, or per-property checks.
3. **Gate failures are conversations, not dead ends.** When a gate fails, the system presents what failed, why, and the cheapest fix — then asks the user whether to fix automatically, fix manually, or ship anyway.

---

## THE COMMAND

```
/build-page
```

**Trigger phrases that also invoke this skill:**
- "build a page"
- "run the pipeline"
- "turn this into a designed page"
- "create a design system page"
- "pipeline v2"

---

## PHASE 0: INTAKE (10-30 seconds of user interaction)

### Step 0.1: Content Source

Immediately after invocation, the system displays:

```
BUILD-PAGE: Pipeline v2
==============================

What content should this page present?

  [1] Paste markdown below
  [2] File path (e.g., design-system/research/RESEARCH-SYNTHESIS.md)
  [3] URL to fetch
  [4] Use current conversation context

Choice:
```

**Behavior by choice:**

| Choice | System Action |
|--------|---------------|
| **1 — Paste** | Waits for user to paste. Captures everything until the user sends the message. |
| **2 — File path** | Reads the file immediately. If the file doesn't exist, prompts: `File not found: [path]. Did you mean one of these? [glob suggestions]` |
| **3 — URL** | Fetches the URL via WebFetch, converts to markdown. Displays: `Fetched [N] words from [URL]. Proceed?` |
| **4 — Conversation** | Extracts the most recent substantive content from the conversation (ignoring meta-discussion). Displays: `I'll use the content starting from "[first 50 chars]..." ([N] words). Correct?` |

**If the user provides content IN the same message as `/build-page`:**
Skip this prompt entirely. Detect the content and proceed. Examples:
- `/build-page design-system/research/RESEARCH-SYNTHESIS.md` — treats argument as file path
- `/build-page` followed by a markdown block — treats the block as pasted content

### Step 0.2: Tier Selection

After content is loaded, the system auto-classifies the tier and presents its recommendation:

```
CONTENT ANALYZED
==============================

  Words:       2,847
  Type:        Prose-dominant (82% prose, 12% tables, 6% code)
  Arc:         Problem → Analysis → Solution
  Sections:    ~8 natural breaks

TIER RECOMMENDATION: Middle
  Reason: Tutorial/narrative content with clear structure.
  Middle produces PA-05 3-4/4 for this content type.
  Build time: ~15-25 min (single Opus builder)

  [Enter] Accept Middle tier
  [c]     Override to Ceiling (adds metaphor derivation, ~45-60 min)
  [f]     Override to Floor (component assembly only, ~5 min)
  [F]     Override to Flagship (multi-pass, multi-agent, ~90-180 min)
```

**Auto-classification logic (from tension-composition SKILL.md Step 0D):**

| Content Signal | Auto-Tier |
|----------------|-----------|
| <200 words, API reference, config table, changelog | **Floor** |
| Tutorial, guide, overview, comparison, narrative | **Middle** |
| Addition Test = NO (genuine structural tension) | **Ceiling** |
| Anchor content, design system showcase, deep-dive | **Flagship** |

**If the user overrides to a HIGHER tier:** Proceed without question. The user knows their quality requirements.

**If the user overrides to a LOWER tier:** Proceed without question. The user knows their time constraints.

### Step 0.3: Output Configuration (Optional, shown only if user lingers)

If the user doesn't immediately press Enter, after 3 seconds display:

```
OPTIONS (all optional, press Enter to skip):

  Output path:    [default: ephemeral/pages/[slug].html]
  Page title:     [default: extracted from content H1]
  Custom slug:    [default: derived from title]
```

Most users will skip this. Power users can customize.

### WHAT THE USER SEES AFTER INTAKE

```
BUILDING: "Research Synthesis: Cross-Research Insights"
==============================
  Tier: Middle | Content: 2,847 words | Sections: 8
  Builder: Opus (single-agent) | Est. time: ~15-25 min

  Phase 0/8: Content Analysis .................. [ACTIVE]
```

---

## PHASE 1-8: BUILD EXECUTION

### What the user sees during the build

A live progress display that updates as each phase completes:

```
BUILDING: "Research Synthesis: Cross-Research Insights"
==============================
  Tier: Middle | Content: 2,847 words | Sections: 8

  Phase 0/8: Content Analysis ............... DONE (3 zones, 8 sections)
  Phase 1/8: HTML Skeleton .................. DONE (8 sections, 2 grids, 6 ARIA landmarks)
  Phase 2/8: Base CSS + Soul ................ DONE (960px container, 3 fonts loaded)
  Phase 3/8: Zone Backgrounds ............... DONE (3 zones, min delta 18 RGB)
  Phase 4/8: Borders + Components ........... [ACTIVE]
  Phase 5/8: Typography Zones ............... pending
  Phase 6/8: Element Richness ............... pending
  Phase 7/8: Accessibility + Responsive ..... pending
  Phase 8/8: Verification ................... pending
```

**Key UX decisions for the progress display:**

1. **Show concrete results, not abstract status.** "DONE (3 zones, 8 sections)" not just "DONE." This gives the user confidence that real work happened.
2. **Show blocking issues inline.** If Phase 3 finds a warm palette violation, the display shows: `Phase 3/8: Zone Backgrounds ............... FIX (2 cool grays → replaced with warm equivalents)`
3. **No user interaction required during Phases 1-7.** The recipe is self-contained. The builder executes autonomously.

### What happens behind the scenes (by tier)

#### Floor Tier
- Skip Phases 1-5 of the TC pipeline
- Use Track 1 component assembly
- Apply design system defaults from tokens.css
- Single Sonnet agent
- No PA audit
- **Total time: ~5 min**

#### Middle Tier (DEFAULT)
- Single Opus builder executes Phases 0-8 of File 42's recipe
- Pattern selection (CRESCENDO/F-PATTERN/BENTO/PULSE) instead of metaphor derivation
- Per-category mechanism deployment (S:1+, H:1+, C:1+, D:1+, N:1+)
- Phase 8 self-verification (builder checks its own perception)
- **Total time: ~15-25 min**

#### Ceiling Tier
- Full tension-composition pipeline (Phases 0-5 of TC skill)
- Metaphor derivation through multi-axis questioning
- 4-wave architecture:
  - Wave 0: Content analysis (1 Opus)
  - Wave 1: Building (1 Opus, complete recipe + TC output)
  - Wave 2: Verification (1 Sonnet programmatic + 1 Opus PA)
  - Wave 3: Fix integration (1 Opus)
- Mode 2 PA (5 core questions)
- **Total time: ~45-60 min**

#### Flagship Tier
- Full TC pipeline with multi-pass
- 4-wave architecture with expanded Wave 2:
  - Wave 2: Mode 4 PA (9 Opus auditors, screenshot pre-capture pattern)
  - Wave 2 also includes: programmatic gate runner + soul compliance check
- Potential Wave 3 + Wave 4 cycles (fix → re-verify)
- **Total time: ~90-180 min**

---

## PHASE 9: GATE RESULTS (user interaction required)

After the build completes, the system runs verification and presents results.

### For Middle Tier (self-verified)

```
BUILD COMPLETE
==============================

  Output: ephemeral/pages/research-synthesis.html
  CSS:    437 lines across 8 phases
  HTML:   312 lines, 8 sections, 2 grid layouts

  VERIFICATION SUMMARY:
  Soul compliance ........... PASS (0 violations)
  Warm palette .............. PASS (all backgrounds R >= G >= B)
  Container width ........... PASS (960px)
  Void prevention ........... PASS (max gap: 108px < 120px)
  Scale coverage ............ PASS (5/5 scales with designed moments)
  Zone differentiation ...... PASS (3 zones, 6 channels shifting)
  Accessibility ............. PASS (skip link, ARIA, focus, responsive)

  Self-assessed PA-05: ~3/4 (COMPOSED)

  [Enter] Open in browser
  [a]     Run full PA audit (Mode 4, ~20 min, recommended for important pages)
  [s]     Ship as-is
```

### For Ceiling/Flagship (externally verified)

```
BUILD COMPLETE
==============================

  Output: ephemeral/pages/research-synthesis.html
  CSS:    847 lines across 8 phases
  HTML:   496 lines, 12 sections, 4 grid layouts

  PROGRAMMATIC VERIFICATION:
  Soul compliance ........... PASS (0 violations)
  Warm palette .............. PASS
  Container width ........... PASS (960px)
  Void prevention ........... PASS (max gap: 104px)
  Scale coverage ............ PASS (5/5)
  Zone coherence ............ PASS (4 zones, 6+ channels at each boundary)
  Accessibility ............. PASS (8/8 WCAG checks)

  PERCEPTUAL AUDIT (Mode 4 -- 9 auditors):
  PA-01 (First bother) ...... Minor: S7 table feels crowded
  PA-02 (Readability) ....... PASS: No uncomfortable text
  PA-03 (Design unity) ...... PASS: "One designer, clearly"
  PA-04 (Eye tracking) ...... PASS: Header draws correctly
  PA-05 (Would you ship?) ... 3.2/4 COMPOSED
    - DESIGNED: 3/4 (intentional, not emergent)
    - COHERENT: 4/4 (unified dialect)
    - PROPORTIONATE: 3/4 (S7 slightly cramped)
    - ENGAGED: 3/4 (grids break monotony effectively)

  VERDICT: SHIP (meets 3/4 threshold)

  [Enter] Open in browser
  [f]     Apply recommended fixes (S7 table spacing, ~5 min)
  [s]     Ship as-is
  [r]     Request manual review before shipping
```

---

## GATE FAILURE PROTOCOL

When a gate fails, the system does NOT silently fix or silently skip. It presents the failure as a conversation.

### Programmatic Gate Failure

```
GATE FAILURE: Void Prevention
==============================

  WHAT FAILED: Gap between S4 and S5 is 142px (max allowed: 120px)

  WHY: S4 padding-bottom (48px) + divider margin (32px) + divider (3px)
       + divider margin (32px) + S5 padding-top (27px) = 142px

  CHEAPEST FIX: Reduce divider margins from 32px to 16px (gap → 110px)

  ALTERNATIVE: Remove the breathing divider between S4-S5,
               replace with smooth (1px, 16px margins, gap → 92px)

  [1] Apply cheapest fix automatically
  [2] Apply alternative fix
  [3] Show me the page first, I'll decide
  [4] Ship anyway (override gate)
```

### PA Gate Failure (Ceiling/Flagship only)

```
PA GATE CONCERN: PA-05 scored 2.4/4 (below 3/4 threshold)
==============================

  AUDITOR CONSENSUS (7/9 flagged):
  "Sections 5-8 feel monotonous — same background, same typography,
   same single-column layout for 4 consecutive sections."

  ROOT CAUSE: Zone 2 has 4 sections with identical treatment.

  RECOMMENDED FIXES (ranked by impact):
  1. Add a grid layout to S6 (paired callouts) — est. +0.3 PA-05
  2. Vary S7 background by 15+ RGB from S5-S6 — est. +0.2 PA-05
  3. Add a pullquote in S8 to break text monotony — est. +0.1 PA-05

  Projected PA-05 after all 3 fixes: ~3.0/4 (COMPOSED)

  [1] Apply all 3 fixes automatically (~10 min)
  [2] Apply fix #1 only (highest impact)
  [3] Show me the page first, I'll decide
  [4] Ship at 2.4/4 (below threshold)
```

### Soul Violation (BLOCKING — cannot be overridden)

```
BLOCKING: Soul Violation Detected
==============================

  border-radius: 8px found on .callout elements (3 instances)

  This is a non-negotiable identity constraint.
  The system will fix this automatically.

  Fixing... border-radius: 0 !important applied.
  Re-verifying... PASS.
```

Soul violations are the ONE case where the system fixes without asking. They are identity-level, non-negotiable, and the fix is always the same (set to 0 or none).

---

## POST-BUILD: WHAT THE USER GETS

### The HTML File

A single self-contained `.html` file at the specified output path (default: `ephemeral/pages/[slug].html`). The file includes:
- All CSS inline in a `<style>` block (no external dependencies except Google Fonts)
- Complete semantic HTML with ARIA landmarks
- Responsive breakpoints (768px, 480px)
- Print styles
- Accessibility (skip link, focus states, reduced motion)

### The Build Report (optional, generated on request)

If the user types `[r]` at the completion prompt, or runs `/build-report`:

```
BUILD REPORT: research-synthesis.html
==============================

  CONTENT
  Source:     design-system/research/RESEARCH-SYNTHESIS.md
  Words:      2,847
  Type:       Prose-dominant
  Arc:        Problem → Analysis → Solution

  ARCHITECTURE
  Tier:       Middle
  Zones:      3 (Warm → Cool → Warm)
  Sections:   8 (S1-S3 opening, S4-S6 core, S7-S8 resolution)
  Pattern:    CRESCENDO (density builds from S1 to S5, resolves S6-S8)
  Grids:      2 (S3: content-pair, S6: content-grid 2x2)

  MECHANISMS DEPLOYED (12 total)
  Spatial:     Zone backgrounds (3 zones), section padding cascade
  Hierarchy:   Border-weight alternation (3px/4px), heading weight shift
  Component:   4 callout variants, table-compact, pullquote
  Depth:       Typography zone cascade (17px/15px/16px)
  Navigation:  Section indicators, transition grammar (smooth/bridge/breathing)

  VERIFICATION
  Soul:       0 violations
  PA-05:      Self-assessed 3/4 (COMPOSED)
  Voids:      0 (max gap 108px)
  Scales:     5/5
  WCAG:       AA compliant

  BUILD STATS
  Agent:      Opus 4.6 (single builder)
  Phases:     9 (0-8)
  CSS lines:  437
  HTML lines: 312
  Duration:   18 min
```

---

## TIER-SPECIFIC UX FLOWS

### Floor: The 5-Minute Page

```
User: /build-page design-system/api/auth-endpoints.md

System: CONTENT ANALYZED
  Words: 187 | Type: API reference (94% code/tables)
  TIER RECOMMENDATION: Floor
  Reason: Short reference content. Component assembly, no composition needed.
  Build time: ~5 min (single Sonnet builder)
  [Enter] Accept

User: [Enter]

System: BUILDING: "Auth Endpoints"
  Applying design system defaults... DONE
  Wrapping in page shell........... DONE
  Styling tables + code blocks..... DONE

  BUILD COMPLETE
  Output: ephemeral/pages/auth-endpoints.html
  [Enter] Open in browser
```

No gates. No PA. No zones. Just design system defaults applied to structured content.

### Middle: The Default Page (Detailed Flow)

```
User: /build-page

System: What content should this page present?
  [1] Paste  [2] File path  [3] URL  [4] Conversation context

User: 2

System: File path:

User: design-system/research/RESEARCH-SYNTHESIS.md

System: CONTENT ANALYZED
  Words: 2,847 | Type: Prose-dominant | Arc: Problem → Analysis → Solution
  TIER RECOMMENDATION: Middle
  [Enter] Accept  [c] Ceiling  [f] Floor  [F] Flagship

User: [Enter]

System: BUILDING: "Research Synthesis: Cross-Research Insights"
  Tier: Middle | Content: 2,847 words | Sections: 8
  Builder: Opus (single-agent) | Est. time: ~15-25 min

  Phase 0/8: Content Analysis ............... DONE (3 zones, 8 sections, CRESCENDO)
  Phase 1/8: HTML Skeleton .................. DONE (8 sections, 2 grids)
  Phase 2/8: Base CSS + Soul ................ DONE (960px, soul locked)
  Phase 3/8: Zone Backgrounds ............... DONE (3 zones, min delta 18 RGB)
  Phase 4/8: Borders + Components ........... DONE (5 bordered sections, 4 callout types)
  Phase 5/8: Typography Zones ............... DONE (17px/15px/16px cascade)
  Phase 6/8: Element Richness ............... DONE (selection, hover, code, links)
  Phase 7/8: Accessibility + Responsive ..... DONE (WCAG AA, 768px+480px)
  Phase 8/8: Verification ................... DONE (all gates PASS)

  BUILD COMPLETE
  Output: ephemeral/pages/research-synthesis.html
  [Enter] Open  [a] PA audit  [s] Ship

User: [Enter]

[Browser opens with the rendered page]
```

### Ceiling: The Composed Page

```
User: /build-page
  Content: [pastes 4,200-word philosophical essay]

System: CONTENT ANALYZED
  Words: 4,200 | Type: Prose-dominant | Arc: Theory → Evidence → Application
  TIER RECOMMENDATION: Ceiling
  Reason: Addition Test = NO (genuine structural tension detected).
  Build time: ~45-60 min (4-wave, multi-agent)
  [Enter] Accept  [m] Downgrade to Middle

User: [Enter]

System: BUILDING: "On the Nature of Compositional Fluency"
  Tier: Ceiling | Content: 4,200 words | Sections: 11
  Architecture: 4-wave (analysis → build → verify → fix)

  WAVE 0: Content Analysis
    Tension-Composition Pipeline Phases 0-3 ...... [ACTIVE]
    Multi-axis questioning (FEEL/UNDERSTAND/DO/BECOME)
    Deriving metaphor...

  [~10 min later]

    Metaphor locked: "RIVER DELTA" — branching complexity that
    converges to clear channels. Theory sections branch; evidence
    sections channel; application sections merge.

  WAVE 1: Building
    Phase 0/8: Architecture (4 zones, 11 sections) . DONE
    Phase 1/8: HTML Skeleton .................... DONE (11 sections, 3 grids)
    Phase 2/8: CSS + Soul ....................... DONE
    Phase 3/8: Zone Backgrounds ................. DONE (4 zones)
    Phase 4/8: Borders + Components ............. DONE
    Phase 5/8: Typography ....................... DONE
    Phase 6/8: Element Richness ................. DONE
    Phase 7/8: Accessibility .................... DONE
    Phase 8/8: Self-Verification ................ DONE

  WAVE 2: External Verification
    Programmatic gates .......................... PASS (all 8)
    PA audit (Mode 2, 5 core questions) ......... [ACTIVE]

  [~5 min later]

    PA-01: Minor (S8 heading competes with S7 pullquote)
    PA-02: PASS
    PA-03: PASS ("one confident hand throughout")
    PA-04: PASS (header draws, then S1 drop cap)
    PA-05: 3.4/4 COMPOSED

  VERDICT: SHIP

  [Enter] Open  [f] Apply S8 heading fix  [s] Ship

User: f

System: WAVE 3: Fix Integration
  Adjusting S8 heading weight: 600 → 400 (reduce competition with pullquote)
  Re-verifying... PASS.

  BUILD COMPLETE
  Output: ephemeral/pages/compositional-fluency.html
  PA-05: 3.4/4 → 3.5/4 COMPOSED

  [Enter] Open  [s] Ship
```

### Flagship: The Full Treatment

```
User: /build-page design-system/research/RESEARCH-SYNTHESIS.md
  Tier: flagship

System: BUILDING: "Research Synthesis"
  Tier: Flagship | Multi-pass | Mode 4 PA
  Architecture: 4-wave with expanded verification
  Est. time: ~90-180 min

  WAVE 0: Deep Content Analysis
    TC Pipeline: Full 6-phase execution ......... [ACTIVE]
    Multi-axis questioning ...
    Tension derivation ...
    Metaphor collapse ...
    Compositional layout planning ...

  [~20 min later]

    Metaphor: "ARCHAEOLOGICAL DIG" — layers of evidence uncovered
    progressively, each layer recontextualizing the one above.
    Pattern: CRESCENDO with reversal at synthesis.

  WAVE 1: Building (single Opus builder, complete recipe)
    Phases 0-8 executing sequentially ...

  [~40 min later]

    Build complete. 847 CSS lines. 496 HTML lines. 12 sections.

  WAVE 2: Full Verification Suite
    Programmatic gates .......................... [parallel]
    Soul compliance ............................. [parallel]

    Mode 4 PA (capturing screenshots) ........... [ACTIVE]
      1440px cold look .......................... captured
      1440px scroll (12 positions) .............. captured
      768px full page ........................... captured
      375px full page ........................... captured
      Total: 16 screenshots

    Spawning 9 PA auditors ...................... [parallel]
      Auditor 1 (PA-01 to PA-05) ............... [ACTIVE]
      Auditor 2 (PA-06 to PA-10) ............... [ACTIVE]
      ...
      Auditor 9 (PA-44 to PA-48) ............... [ACTIVE]

  [~20 min later]

    PA RESULTS (9 auditors, 48 questions):
    PA-05 Consensus: 3.2/4 COMPOSED
    BLOCKING issues: 0
    SIGNIFICANT issues: 2
      - S7 table needs more padding (5/9 flagged)
      - Zone 2→3 transition needs stronger bridge (4/9 flagged)

  VERDICT: SHIP WITH FIXES

  [1] Apply both fixes automatically (~10 min)
  [2] Show me the issues first
  [3] Ship at 3.2/4

User: 1

System: WAVE 3: Fix Integration
    S7 table padding: 12px → 16px, cell padding added .... DONE
    Zone 2→3 bridge: Added bridge prose + breathing divider .. DONE
    Re-running programmatic gates ........................ PASS

    Spot-checking PA-05 (2 fresh auditors) ............... 3.4/4

  BUILD COMPLETE
  Output: ephemeral/pages/research-synthesis.html
  Final PA-05: 3.4/4 COMPOSED

  [Enter] Open  [r] Full report  [s] Ship
```

---

## CONTENT INGESTION: THE FUTURE PIPELINE

The user's vision includes a content ingestion pipeline that feeds content FROM various sources INTO Pipeline v2. Here is how `/build-page` extends to support that.

### Ingestion Sources (Phase 2 of the user's vision)

```
/build-page --source notion://workspace/page-id
/build-page --source gdocs://document-id
/build-page --source confluence://space/page
/build-page --source github://org/repo/docs/page.md
/build-page --source rss://feed-url --latest 3
```

Each source adapter:
1. Fetches content from the external source
2. Normalizes to markdown
3. Feeds into the standard `/build-page` intake at Step 0.1 (as if the user had pasted markdown)

The adapters are SEPARATE from the pipeline. The pipeline is content-agnostic. Adapters are source-specific. This separation means:
- New sources can be added without changing the pipeline
- The pipeline never sees source-specific metadata (Notion block IDs, Confluence macros)
- Content normalization happens BEFORE tier classification

### Batch Mode

```
/build-page --batch design-system/research/R1-R5/
```

Processes multiple files, each as an independent page:
1. Lists all markdown files in the directory
2. For each file, runs tier classification
3. Displays the batch plan:
   ```
   BATCH BUILD: 5 files
     R1-information-density.md .... Middle (2,100 words)
     R2-hierarchy-patterns.md ..... Middle (1,800 words)
     R3-spatial-reasoning.md ...... Middle (3,200 words)
     R4-material-honesty.md ....... Middle (2,400 words)
     R5-behavioral-dynamics.md .... Ceiling (4,600 words, tension detected)

   [Enter] Build all  [e] Edit tiers  [1-5] Build one
   ```
4. Builds pages in parallel (up to 3 concurrent for Middle, 1 at a time for Ceiling/Flagship)

---

## ERROR STATES AND RECOVERY

### Content Too Short (<100 words)

```
CONTENT TOO SHORT: 47 words
This content doesn't need a full page. Options:
  [1] Build as a component (callout block with styled wrapper)
  [2] Proceed anyway (Floor tier, minimal page)
  [3] Cancel
```

### Content Too Long (>10,000 words)

```
CONTENT LENGTH: 14,200 words
Recommend splitting into multiple pages. Suggested splits:
  Page 1: "Introduction and Framework" (S1-S4, ~3,800 words)
  Page 2: "Evidence and Analysis" (S5-S10, ~5,200 words)
  Page 3: "Synthesis and Application" (S11-S14, ~5,200 words)

  [Enter] Build as 3 pages (with shared navigation)
  [1]     Build as single long page (5 zones, Flagship recommended)
  [2]     Let me split manually
```

### Builder Agent Timeout (>2x expected time)

```
BUILD TIMEOUT: Phase 4 has been running for 12 min (expected: ~5 min)

The builder may be stuck on a complex layout decision.
  [1] Wait 5 more minutes
  [2] Restart from Phase 4 with a fresh builder
  [3] Ship what we have (Phases 0-3 complete, basic styling applied)
  [4] Cancel build
```

### Model Availability Issues

```
BUILDER UNAVAILABLE: Opus is currently overloaded.

  [1] Wait and retry in 60 seconds
  [2] Use Sonnet instead (faster, may score ~0.3 lower on PA-05)
  [3] Cancel build
```

---

## POWER USER FEATURES

### Flags

| Flag | Effect |
|------|--------|
| `--tier floor/middle/ceiling/flagship` | Skip tier selection prompt |
| `--output path/to/file.html` | Set output path |
| `--no-pa` | Skip PA audit (for rapid iteration) |
| `--pa-mode 1/2/3/4` | Force a specific PA mode |
| `--dry-run` | Run through Phase 0 only, show the plan without building |
| `--recipe path/to/recipe.md` | Use a custom recipe instead of File 42 |
| `--remediate path/to/existing.html` | Remediation mode (deallocation-first) |
| `--batch path/to/directory/` | Batch mode |
| `--verbose` | Show per-phase CSS line counts and perception check details |
| `--metaphor "geological strata"` | Pre-seed metaphor for Ceiling/Flagship (skip TC Phases 1-3) |

### Examples

```
# Quick floor page, no prompts
/build-page --tier floor design-system/api/auth.md

# Ceiling with pre-seeded metaphor
/build-page --tier ceiling --metaphor "river delta" content.md

# Remediate an existing failed page
/build-page --remediate ephemeral/flagship-experiment/07-intentionality.html

# Dry run to see the plan
/build-page --dry-run design-system/research/RESEARCH-SYNTHESIS.md

# Batch process a directory
/build-page --batch design-system/research/R1-R5/ --tier middle
```

---

## SKILL FILE STRUCTURE

The `/build-page` skill wraps and orchestrates existing skills. It does NOT replace them.

```
~/.claude/skills/build-page/SKILL.md
  ├── INTAKE: Content source + tier selection (this document's Phase 0)
  ├── ROUTING: Tier → agent architecture → recipe selection
  ├── EXECUTION: Orchestrates File 42's 9 phases
  ├── VERIFICATION: Runs gates, orchestrates PA by mode
  ├── PRESENTATION: Formats results for user
  └── RECOVERY: Gate failure protocols

DEPENDENCIES (invoked, not duplicated):
  ~/.claude/skills/tension-composition/SKILL.md  — invoked for Ceiling/Flagship TC phases
  ~/.claude/skills/perceptual-auditing/SKILL.md  — invoked for PA verification
  42-OPERATIONAL-RECIPE.md                        — the builder's complete recipe
  anti-reproduction-protocol.md                   — the 7 binary gates
```

### Key Principle: Wrap, Don't Duplicate

`/build-page` is an ORCHESTRATOR. It:
- Reads content and classifies tier (NEW logic)
- Selects agent architecture by tier (NEW logic)
- Invokes `/tension-composition` for Ceiling/Flagship (EXISTING skill)
- Hands the builder File 42's recipe (EXISTING artifact)
- Invokes `/perceptual-auditing` for verification (EXISTING skill)
- Presents results to the user (NEW logic)
- Handles gate failures (NEW logic)

The NEW code is ~200-300 lines of orchestration. The EXISTING skills do the heavy lifting.

---

## PA INTEGRATION BY TIER

| Tier | PA Mode | Auditors | Questions | When |
|------|---------|----------|-----------|------|
| **Floor** | None | 0 | 0 | Never |
| **Middle** | Self-check | 1 (the builder) | PA-01 to PA-05 only | Phase 8G of the recipe |
| **Ceiling** | Mode 2 | 1 Opus (fresh-eyes) | PA-01 to PA-05 + PA-06 to PA-10 | After build, Wave 2 |
| **Flagship** | Mode 4 | 9 Opus (fresh-eyes) | All 48 questions | After build, Wave 2 |

**Critical: Fresh-eyes principle is NON-NEGOTIABLE for Modes 2-4.** PA auditors receive ONLY screenshots and PA questions. Zero context about the build plan, metaphor, mechanism count, or tier. This prevents confirmation bias.

**Screenshot pre-capture for Mode 4:** The orchestrator (not the auditors) captures all screenshots before spawning the 9 auditors. This eliminates Playwright contention and enables all 9 to run in parallel.

---

## SUMMARY: THE COMPLETE USER JOURNEY

```
USER TYPES: /build-page

    ┌─────────────────────────────┐
    │  INTAKE (10-30 sec)         │
    │  1. Content source          │
    │  2. Tier selection          │
    │  3. Output config (opt.)    │
    └─────────────┬───────────────┘
                  │
    ┌─────────────▼───────────────┐
    │  ROUTING (automatic)        │
    │  Tier → agents → recipe     │
    │  Floor: 1 Sonnet            │
    │  Middle: 1 Opus             │
    │  Ceiling: 4-wave, 4-6 agents│
    │  Flagship: 4-wave, 10+ agts │
    └─────────────┬───────────────┘
                  │
    ┌─────────────▼───────────────┐
    │  BUILD (autonomous)         │
    │  9 phases, live progress    │
    │  User sees phase completion │
    │  No interaction needed      │
    └─────────────┬───────────────┘
                  │
    ┌─────────────▼───────────────┐
    │  VERIFY (autonomous/PA)     │
    │  Programmatic gates         │
    │  PA audit (by tier)         │
    │  Results displayed          │
    └─────────────┬───────────────┘
                  │
          ┌───────┴───────┐
          │               │
    ┌─────▼─────┐   ┌─────▼─────┐
    │ ALL PASS  │   │ GATE FAIL │
    │           │   │           │
    │ SHIP      │   │ Present   │
    │ prompt    │   │ failure + │
    │           │   │ fix opts  │
    └─────┬─────┘   └─────┬─────┘
          │               │
          │         ┌─────▼─────┐
          │         │ Auto-fix  │
          │         │ or manual │
          │         │ or ship   │
          │         └─────┬─────┘
          │               │
    ┌─────▼───────────────▼─────┐
    │  OUTPUT                    │
    │  .html file               │
    │  Build report (optional)  │
    │  Open in browser          │
    └───────────────────────────┘
```

---

## WHAT THIS DESIGN ACHIEVES

1. **One command to rule them all.** The user types `/build-page` and gets a designed HTML page. Period.
2. **Smart defaults, easy overrides.** Auto-tier-classification handles 90% of cases. Flags handle the other 10%.
3. **Existing skills are preserved.** TC and PA skills are invoked, not duplicated or replaced.
4. **File 42 IS the builder's brain.** The operational recipe becomes the literal execution spec.
5. **Quality scales with effort.** Floor (5 min, no PA) → Middle (20 min, self-check) → Ceiling (60 min, Mode 2) → Flagship (120+ min, Mode 4).
6. **Gate failures are conversations.** The user is always in control of ship/fix/override decisions.
7. **Future-proof for ingestion.** Source adapters plug into the same intake step. The pipeline doesn't care where content comes from.

---

**END OF UX SPECIFICATION**

**Statistics:**
- User interaction points: 3 (content source, tier selection, ship decision)
- Autonomous phases: 9 (File 42's recipe)
- Gate types: 3 (programmatic, PA, soul)
- Recovery paths: 4 (auto-fix, manual fix, ship anyway, cancel)
- Power user flags: 10
- New code needed: ~200-300 lines of orchestration
- Existing code reused: ~2,700+ lines (TC skill + PA skill + File 42)
