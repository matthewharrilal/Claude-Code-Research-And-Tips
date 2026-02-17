# Prompt Slicing Strategy: Agent-Specific Views of the Master Prompt

**Source:** `ephemeral/session-insights/24-FINAL-MASTER-MIDDLE-TIER-EXECUTION-PROMPT.md` (1,760 lines, ~25K tokens)
**Purpose:** No single agent should read ALL 1,760 lines. Each agent receives ONLY the sections relevant to its role.
**Governing principle:** Binary rules achieve 100% agent compliance. Each slice is self-contained.

---

## UNIVERSAL BLOCK (Include in EVERY agent slice)

**~30 lines. Appears verbatim at the top of every agent prompt.**

```
CONTAINER WIDTH: 940-960px. ALWAYS. NO EXCEPTIONS.
This is THE #1 Phase D failure mode. 4/5 validation pages violated it.
If narrowing needed, use INTERNAL PADDING, never reduce max-width.

SOUL CONSTRAINTS (8 absolutes):
1. border-radius: 0 on ALL elements
2. box-shadow: none on ALL elements
3. No filter: drop-shadow()
4. No opacity < 1 on visual elements
5. No gradient backgrounds
6. No pure black (#000000) or pure white (#FFFFFF)
7. Instrument Serif for DISPLAY HEADINGS only (never body)
8. All h3: font-style: italic

TYPOGRAPHY TRINITY: Instrument Serif (headings) / Inter (body) / JetBrains Mono (code)
BORDER WIDTHS: 4px structural / 3px accent / 1px separator. NEVER 2px.
ALL COLORS from tokens.css palette. No raw hex outside token set.

OUTPUT FILE: Write to `ephemeral/middle-tier-experiment/[your-output-file]`
CRITICAL: You MUST write your output file using the Write tool. Text output is NOT sufficient.
```

**Token estimate:** ~200 tokens

---

## SLICE 1: CONTENT-SELECTOR (~200 lines, ~3K tokens)

### What This Agent Does
Selects or creates 800-1,200 words of mixed technical content BEFORE anyone reads the mechanism catalog. Prevents reverse-fitting.

### Sections INCLUDED

| Section | Lines | What to Include | Why |
|---------|-------|-----------------|-----|
| Universal Block | -- | Verbatim (above) | Every agent needs soul constraints |
| Section 0 (partial) | 29-68 | Mission statement paragraph + pipeline position ONLY | Context orientation |
| Section 9 | 1403-1454 | FULL (Content Requirements) | Primary job description |

### Sections EXCLUDED (and why)

| Section | Lines | Why Excluded |
|---------|-------|-------------|
| Section 1 (Identity) | 110-163 | Already summarized in Universal Block |
| Section 2 (Vocabulary) | 166-293 | Content-selector doesn't write CSS |
| **Section 3 (Mechanisms)** | **295-570** | **ANTI-LEAKAGE: Content-selector must NEVER see mechanism names or descriptions. Seeing mechanisms enables reverse-fitting (writing content that "happens to" need pre-selected mechanisms).** |
| Section 4 (Pipeline) | 574-983 | Build pipeline irrelevant to content selection |
| Section 5 (Validation) | 987-1134 | Validation happens after build |
| Section 6 (Context) | 1138-1229 | Historical context not needed for content selection |
| Section 7 (References) | 1233-1332 | CSS examples irrelevant |
| Section 8 (Anti-Patterns) | 1336-1399 | Build anti-patterns not applicable |
| Section 10 (Success) | 1457-1571 | Evaluation criteria not applicable |
| All Appendices | 1575-1760 | Builder/evaluator material |

### Anti-Leakage Rules for Content-Selector

1. **NEVER include Section 3 (Mechanism Vocabulary)** -- the content-selector must not know what CSS mechanisms exist. Content must be selected on structural merit, not mechanism compatibility.
2. **NEVER include mechanism names** (#1 through #18) -- even casual references like "dark header" or "bento grid" leak mechanism awareness.
3. **NEVER include pattern names** (CRESCENDO/F-PATTERN/BENTO/PULSE) -- the content-selector picks content, not patterns. Pattern selection happens in the planner.
4. **NEVER include Section 7 CSS examples** -- seeing callout CSS or zone CSS reveals the component vocabulary.
5. The content-selector's ONLY job is: extract content from the pre-selected source file (`extractions/infrastructure/004-system-remote-mac.md`), trim to 800-1,200 words meeting A2.1-A2.10, verify structural requirements A3.1-A3.3.

### Content-Selector Prompt Skeleton

```
You are the content-selector for the Middle-Tier Experiment.

[UNIVERSAL BLOCK]

YOUR MISSION: Extract 800-1,200 words of mixed technical content from a REAL project file for a page layout experiment. You are NOT generating content from scratch — you are extracting and lightly editing from a pre-selected source.

SOURCE FILE (read this FIRST): extractions/infrastructure/004-system-remote-mac.md
BACKUP SOURCE (only if primary fails criteria): extractions/tooling/007-claude-agent-sdk-tutorial-dabit3.md

EXTRACTION INSTRUCTIONS:
1. Read the PRIMARY SOURCE file fully
2. Extract content covering these sections (in approximate order):
   - What it is: Core concept + feature table + key differentiators (~200 words)
   - Architecture: Brain/Tunnel/Body pattern + architecture diagram + why it matters (~250 words)
   - Setup: CLI installation steps + config commands (~200 words)
   - Security: Threat/mitigation table + security code examples (~300 words)
3. Preserve the original prose voice — do NOT rewrite
4. Include structural elements AS-IS from the source (code blocks, tables, etc.)
5. Trim to 800-1,200 words total. Cut sections proportionally if needed.

CONTENT CRITERIA (ALL must pass):
| A2.1 | 800-1,200 words |
| A2.2 | >= 3 paragraphs of prose |
| A2.3 | >= 2 code blocks |
| A2.4 | >= 2 callout/tip/warning elements |
| A2.5 | 2+ heading levels |
| A2.6 | >= 1 data table |
| A2.7 | >= 1 step sequence (3+ steps) |
| A2.8 | Domain NOT scientific calibration |
| A2.9 | NOT about the design system itself |
| A2.10 | Content should be a recognizable genre (tutorial, reference, narrative, or overview) |

STRUCTURAL VERIFICATION:
| A3.1 | >= 4 of: prose, code, callouts, tables, step sequences, headings, lists |
| A3.2 | No single type > 60% of content |
| A3.3 | Document verification in your output |

DO NOT read mechanism-catalog.md, case-studies, or any design system mechanism vocabulary.

OUTPUT: Write to `ephemeral/middle-tier-experiment/01-content-selection.md`
Include: full extracted content text with section breaks marked, verification table showing each criterion PASS/FAIL, word count, source file attribution.
```

### Token Budget: ~5,000 tokens (Universal Block 200 + Mission 500 + Source file ~4,000 + Section 9 criteria 300)

---

## SLICE 2: PLANNER (~1,000 lines, ~14K tokens)

### What This Agent Does
The heaviest slice. Reads content-selector output, reads constraints + mechanism catalog, produces a concrete 7-section build specification with exact CSS values.

### Sections INCLUDED

| Section | Lines | What to Include | Why |
|---------|-------|-----------------|-----|
| Universal Block | -- | Verbatim | Every agent |
| Section 0 | 29-107 | FULL (Mission Statement) | Complete context for planning |
| Section 1 | 110-163 | FULL (Identity and Constraints) | Must know all 22 prohibitions |
| Section 2 | 166-293 | FULL (Vocabulary) | Must know all 65 tokens for CSS values |
| Section 3 | 295-570 | FULL (Mechanism Vocabulary) | Must read ALL 18 mechanisms |
| Section 4 | 574-983 | FULL (Build Pipeline) | 10-step workflow + output format |
| Section 5 | 987-1036 | PARTIAL: Critical-10 + Quick Check 15 ONLY | Knows what will be checked, not full 138 items |
| Section 6 | 1138-1229 | PARTIAL: 6.1 Tier Model + 6.2 Phase D Findings (what worked/failed) + 6.5 Variant B Recount | Key context only |
| Section 7 | 1233-1332 | PARTIAL: 7.4 Callout CSS + 7.5 Section Zones + 7.6 Universal Mechanisms | CSS snippets for plan concreteness |
| Section 8 | 1336-1399 | PARTIAL: 8.2 Common Build Failures + 8.3 Compositional Rules (summary) | What to avoid |
| Section 9 | -- | NOT included -- receives content-selector's output file instead | Content already committed |
| Appendix B | 1622-1679 | FULL (Builder Blocks 1-4) | Must copy these into plan output |
| Appendix C | 1683-1736 | FULL (41 Compositional Rules) | Structural constraints |

### Sections EXCLUDED (and why)

| Section | Lines | Why Excluded |
|---------|-------|-------------|
| Section 5 (5.3-5.6) | 1038-1134 | PA-05 operationalization, audit protocols -- auditor's job, not planner's |
| Section 6.3 | 1185-1195 | Modification history -- planner doesn't need the change log, just the result |
| Section 6.4 | 1197-1213 | Research findings narrative -- already distilled into the mechanism catalog |
| Section 7.1-7.3 | 1233-1280 | Variant B anatomy + crown jewel summaries -- comparison is evaluator's job |
| Section 8.1 | 1338-1355 | Gaming vulnerabilities -- relevant to checklist design, not building |
| Section 10 | 1457-1571 | Success/Failure criteria -- evaluator's job |
| Appendix A | 1575-1618 | File reference map -- planner reads files directly |
| Appendix D | 1739-1760 | Time estimates -- process management |

### Planner Receives From Content-Selector
- The full content file at `ephemeral/middle-tier-experiment/01-content-selection.md`

### Critical Instructions for Planner

```
SEQUENCING:
1. Read prohibitions.md + tokens.css FIRST (B8.2 -- INSTANT FAIL if skipped)
2. Receive content from content-selector
3. THEN read mechanism catalog
4. Select pattern based on content structure
5. Deploy mechanisms per-category

M1 OVERRIDE: IGNORE "sample 2-4 mechanisms" anywhere you see it.
Deploy AT LEAST 1 mechanism from EACH of 5 categories:
- Spatial: #5, #6, #15
- Hierarchy: #1, #4, #11
- Component: #2, #9, #10, #17
- Depth/Emphasis: #3, #7, #16
- Structure/Nav: #8, #12, #13, #14, #18

OUTPUT FORMAT (7 sections, in this order):
1. CONTENT (received from content-selector, with section breaks)
2. SECTION MAP (per-section: summary, mechanisms, padding, background, border)
3. MECHANISM TABLE (each mechanism: location, CSS property, exact values)
4. TRANSITION TABLE (location, type SMOOTH/BRIDGE/BREATHING, CSS values)
5. REINFORCING PAIRS (2+ pairs, shared dimension, CSS evidence)
6. FRACTAL TABLE (Page + Component scale coverage, CSS evidence)
7. BUILDER BLOCKS (Appendix B blocks 1-4 verbatim)

CONCRETE, NOT ABSTRACT:
WRONG: "Deploy mechanism #5 for rhythm."
CORRECT: "Section 1: padding var(--space-16) [64px], background var(--color-zone-sparse). Mechanism #5 sparse zone."
```

### Token Budget: ~14,000 tokens
- Universal Block: 200
- Section 0: 500
- Section 1: 400
- Section 2: 900
- Section 3: 2,000
- Section 4: 3,000
- Section 5 (partial): 700
- Section 6 (partial): 700
- Section 7 (partial): 600
- Section 8 (partial): 500
- Appendix B: 500
- Appendix C: 400
- Content-selector file: ~3,500 (passed as input, not part of slice itself)

---

## SLICE 3: BUILDER (~400 lines, ~6K tokens)

### What This Agent Does
Implements a single HTML file from the planner's specification. Follows the PLAN, not the master prompt.

### Builder Isolation Principle

**THE BUILDER DOES NOT READ THE MASTER PROMPT AT ALL.**

The builder receives:
1. The planner's 7-section output (from `ephemeral/middle-tier-experiment/02-build-plan.md`)
2. Universal Block (soul constraints, container width)
3. Appendix B Blocks 1-4 (soul checklist, file-write, container enforcement, M1 override)
4. The :root block (Section 4.3, lines 767-821) -- copy-paste ready CSS
5. Base typography (Section 4.4, lines 825-860) -- copy-paste ready CSS
6. Accessibility patterns (Section 4.5, lines 864-890) -- copy-paste ready CSS
7. Responsive strategy (Section 4.6, lines 894-904) -- copy-paste ready CSS
8. Font CDN link (Section 2.2, line 286)

### Sections INCLUDED (embedded in builder prompt, not read from master)

| Content | Source | Why |
|---------|--------|-----|
| Universal Block | -- | Soul constraints |
| Appendix B Blocks 1-4 | Lines 1622-1679 | Enforcement blocks |
| :root block | Lines 767-821 | CSS custom properties |
| Base typography | Lines 825-860 | Typography CSS |
| Accessibility | Lines 864-890 | Skip link, focus, selection, reduced motion |
| Responsive | Lines 894-904 | 768px breakpoint |
| Font CDN | Line 286 | Google Fonts link |

### ALL Other Sections EXCLUDED

The builder's ONLY input is the planner's plan + the blocks above. The builder:
- Does NOT read the mechanism catalog (mechanisms are specified in the plan)
- Does NOT read Section 9 (content is in the plan)
- Does NOT read Section 10 (evaluation is someone else's job)
- Does NOT read case studies or crown jewels
- Does NOT read the checklist

### Builder Prompt Skeleton

```
You are the builder for the Middle-Tier Experiment.

[UNIVERSAL BLOCK]

YOUR MISSION: Implement a single self-contained HTML page from the plan below.

[APPENDIX B BLOCK 1: Soul Checklist]
[APPENDIX B BLOCK 2: File-Write Enforcement]
[APPENDIX B BLOCK 3: Container Width Enforcement]
[APPENDIX B BLOCK 4: M1 Override]

COPY-PASTE CSS BLOCKS (use these verbatim as your starting CSS):

:root { [Section 4.3 :root block] }
body, h1, h2, h3, p, code { [Section 4.4 base typography] }
.skip-link, *:focus-visible, ::selection, @media prefers-reduced-motion { [Section 4.5 accessibility] }
@media (max-width: 768px) { [Section 4.6 responsive] }

FONT: <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">

=== THE PLAN (follow this exactly) ===
[Contents of ephemeral/middle-tier-experiment/02-build-plan.md]

OUTPUT: Write to `ephemeral/middle-tier-experiment/middle-tier-page.html`
Single self-contained HTML file. All CSS in <style>. Fonts via CDN. No external dependencies.

SELF-VERIFY before finishing:
- [ ] Container max-width = 960px
- [ ] border-radius: 0 everywhere
- [ ] box-shadow: none everywhere
- [ ] No #000000 or #FFFFFF
- [ ] All h3 italic
- [ ] File written to disk
```

### Token Budget: ~6,000 tokens
- Universal Block: 200
- Appendix B Blocks: 500
- :root block: 400
- Base typography: 250
- Accessibility: 200
- Responsive: 100
- Font link: 50
- Plan file: ~4,000 (passed as input)

---

## SLICE 4A: PROGRAMMATIC AUDITOR (~150 lines, ~2K tokens)

### What This Agent Does
Automated CSS/HTML verification using Playwright. Measures computed styles at 1440px and 768px. Zero design context needed.

### Sections INCLUDED

| Content | Source Lines | Why |
|---------|-------------|-----|
| Universal Block | -- | Knows what to check against |
| Critical-10 items | 989-1002 | Primary checklist |
| Quick Check items 1-10 | 1010-1021 | Instant-fail subset |
| B9 Guardrails | 640-652 | Quantitative thresholds |
| Programmatic Audit Protocol | 1095-1105 | How to run the audit |
| Token regex patterns | (derived) | What to scan for |
| Key Thresholds | 1545-1571 | Quick reference for pass/fail values |

### Sections EXCLUDED

| Section | Why Excluded |
|---------|-------------|
| Section 0 (Mission) | Doesn't need project context |
| Section 2 (Vocabulary) | Doesn't need to understand tokens, just detect them |
| Section 3 (Mechanisms) | Doesn't evaluate mechanism SELECTION, only CSS compliance |
| Section 4 (Pipeline) | Build is done; auditor checks results |
| Section 5.3+ (PA-05, Perceptual) | Perceptual auditor's job |
| Section 6 (Context) | Historical context irrelevant to measurement |
| Section 7 (References) | Not comparing, just measuring |
| Section 8 (Anti-Patterns) | Checks outputs, not process |
| Section 9 (Content) | Content irrelevant to CSS measurement |
| Section 10 (Success) | Evaluator's job |

### Programmatic Auditor Prompt Skeleton

```
You are the programmatic auditor for the Middle-Tier Experiment.

[UNIVERSAL BLOCK]

YOUR MISSION: Verify the built HTML page passes all automated checks.

INPUT FILE: `ephemeral/middle-tier-experiment/middle-tier-page.html`

AUDIT PROTOCOL:
1. Start HTTP server: python3 -m http.server 8080 (from project root)
2. Navigate Playwright to http://localhost:8080/ephemeral/middle-tier-experiment/middle-tier-page.html
3. Set viewport to 1440x900
4. Disable animations: inject `* { animation: none !important; opacity: 1 !important; }`
5. Wait for document.fonts.ready
6. Measure COMPUTED styles (not CSS source)

CRITICAL-10 CHECKS:
| # | Check | Pass Condition |
|---|-------|---------------|
| 1 | Container width | Computed max-width on .page-container = 940-960px |
| 2 | border-radius | No element has computed border-radius > 0 |
| 3 | box-shadow | No element has computed box-shadow != none |
| 4 | No #000000 | Regex: no #000000, #000, rgb(0,0,0) in CSS source |
| 5 | No #FFFFFF | Regex: no #FFFFFF, #FFF, rgb(255,255,255) in CSS source |
| 6 | Typography trinity | h1/h2 computed font-family contains "Instrument Serif"; body contains "Inter"; code contains "JetBrains Mono" |
| 7 | All h3 italic | Every h3 computed font-style = italic |
| 8 | No gradients | Regex: no linear-gradient, radial-gradient, conic-gradient in CSS source |
| 9 | Line-height | body computed line-height >= 1.5 (typically 1.7) |
| 10 | CPL | Measure a body <p> element's character count per line at 1440px: 45-80 |

GUARDRAIL CHECKS (B9):
| Check | Threshold |
|-------|-----------|
| Horizontal padding | >= 32px per side on containers |
| Compression ratio | Deepest section padding >= 40% of shallowest |
| Section breathing | >= 48px between major sections |
| Heading-body gap | >= 16px |
| Density range | Section padding span >= 32px |
| 768px rendering | No horizontal scrollbar, no overlap |

TOKEN COMPLIANCE:
Count CSS values referencing var(--*) properties vs raw hex/px values.
Pass: >= 80% use custom properties.

MECHANISM COUNT:
Count unique mechanisms deployed. Pass: 7-12 inclusive.
Count mechanism categories covered. Pass: 5/5.

SEMANTIC HTML:
Count landmark elements (<header>, <main>, <footer>, <nav>, <section>, <article>).
Pass: >= 3 unique landmarks.

RUN AT BOTH VIEWPORTS: 1440px AND 768px.

OUTPUT: Write to `ephemeral/middle-tier-experiment/03-programmatic-audit.md`
Format: table with Check | Result | PASS/FAIL for each item.
```

### Token Budget: ~2,000 tokens

---

## SLICE 4B: PERCEPTUAL AUDITOR (~150 lines, ~2K tokens)

### What This Agent Does
Fresh-eyes perceptual evaluation. ZERO design context. Reacts to what it SEES before checking what it knows.

### The Fresh-Eyes Principle

**This agent must have THE LEAST context of any agent.** It does not know:
- What mechanisms were deployed
- What pattern was selected
- What the design system is
- What Variant B looks like
- What the tier model is

It knows ONLY:
- How to take a screenshot and react to it
- The PA questions to answer
- The PA-05 sub-criteria for binary measurement

### Sections INCLUDED

| Content | Source Lines | Why |
|---------|-------------|-----|
| Universal Block | -- | Knows basic quality constraints |
| PA-01 through PA-05 | 1112-1120 | Mandatory Five questions |
| PA-06 through PA-20 | (from skill) | Standard Fifteen questions |
| PA-SEM-01 to PA-SEM-03 | 1129-1134 | Middle-tier semantic checks |
| PA-05 sub-criteria | 1038-1077 | 4 binary measurements |

### Sections EXCLUDED

| Section | Why Excluded |
|---------|-------------|
| ALL of Sections 0-4 | Zero design context required |
| ALL of Section 6 | No historical context |
| ALL of Section 7 | No reference pages |
| ALL of Section 8 | No anti-pattern knowledge |
| ALL of Section 9 | No content knowledge |
| ALL of Section 10 | Not the evaluator |
| ALL Appendices | Not building or evaluating |

### Perceptual Auditor Prompt Skeleton

```
You are the perceptual auditor. You are a FRESH-EYES reviewer.

CRITICAL: You have ZERO context about how this page was designed or what system produced it.
Your job is to REACT TO WHAT YOU SEE, then measure specific criteria.

INPUT FILE: `ephemeral/middle-tier-experiment/middle-tier-page.html`

PROTOCOL:
1. Start HTTP server: python3 -m http.server 8080
2. Navigate to the page in Playwright at 1440x900
3. Take a screenshot BEFORE reading any questions
4. Answer PA-01 through PA-05 based on your FIRST IMPRESSION
5. Then answer PA-06 through PA-20
6. Then answer PA-SEM-01 through PA-SEM-03
7. Repeat at 768px viewport

THE ONE RULE: "React to what you see before you check what you know."

MANDATORY FIVE (answer from screenshot, before any analysis):
| PA-01 | What's the first thing that bothers you? |
| PA-02 | Is any text uncomfortable to read? Point to the worst spot. |
| PA-03 | Does this feel like one designer made it, or three? |
| PA-04 | Where does your eye go first? Is that where it SHOULD go? |
| PA-05 | Would you put your name on this? What would you fix first? |

STANDARD FIFTEEN (PA-06 through PA-20):
Read the full question set from: `~/.claude/skills/perceptual-auditing/SKILL.md`
(Read this file for PA-06 through PA-20 questions.)

MIDDLE-TIER SEMANTIC CHECKS:
| PA-SEM-01 | For 3 most prominent spacing variations, justify each against adjacent values using pattern logic |
| PA-SEM-02 | Do spacing progressions use clear ratios (2:1, 3:1) or arbitrary gradations? |
| PA-SEM-03 | Can you explain WHY this pattern fits this content without referencing a catalog? |

PA-05 OPERATIONALIZED (4 binary sub-criteria -- measure these):

PA-05a: Non-Default Layout Elements >= 2 at 1440px (>= 1 at 768px)
  Qualifying: asymmetric columns, bento grids with spans, width-constrained blocks,
  full-bleed backgrounds, solid-offset depth, sections with different padding structures.
  NOT qualifying: equal-width columns, single-column centered, uniform card grids.

PA-05b: Padding Range Ratio >= 2.0x at 1440px (>= 1.5x at 768px)
  Measure: largest section padding / smallest section padding.
  80px / 32px = 2.5x -- PASS. 48px / 40px = 1.2x -- FAIL.

PA-05c: Visual Hierarchy Test
  Apply 20px Gaussian blur to screenshot. Can you identify PRIMARY and SECONDARY zones
  within 3 seconds? Both match apparent intent = PASS.

PA-05d: Non-Framework CSS >= 15%
  Count compositional CSS (calc(), pseudo-elements, grid-template, transform, nth-child,
  semantic selectors, different values for same element type) / total CSS.

PA-05 COMPOSITE: 4/4 = DESIGNED. 2-3/4 = MARGINAL. 0-1/4 = NO.

OUTPUT: Write to `ephemeral/middle-tier-experiment/04-perceptual-audit.md`
Format: Each PA question with answer. PA-05 sub-criteria with PASS/FAIL. Both viewports.
```

### Token Budget: ~2,000 tokens (questions + sub-criteria + protocol)

---

## SLICE 5A: COMPARATIVE AUDITOR (~200 lines, ~3K tokens)

### What This Agent Does
Side-by-side comparison with Variant B. Determines whether Middle is an improvement.

### Sections INCLUDED

| Content | Source Lines | Why |
|---------|-------------|-----|
| Universal Block | -- | Basic constraints |
| Section 6.5 (Variant B Recount) | 1215-1229 | Baseline mechanism data |
| Section 7.1 (Variant B Anatomy) | 1236-1259 | What Variant B looked like |
| Section 10.2 E2.2 | 1473 | "Better than Variant B" criteria |
| Key instruction | -- | Perceptual vs procedural distinction |

### Sections EXCLUDED

| Section | Why Excluded |
|---------|-------------|
| Sections 0-4 | Not building or planning |
| Section 3 (Mechanisms) | Doesn't need full catalog -- uses Variant B's mechanism list |
| Section 5 (Validation) | Not running validation |
| Section 8 (Anti-Patterns) | Not checking for anti-patterns |
| Section 9 (Content) | Not evaluating content selection |
| Section 10 (except E2.2) | Not doing final verdict |

### Comparative Auditor Prompt Skeleton

```
You are the comparative auditor. Compare the Middle-tier page against the Variant B baseline.

INPUT FILES:
- Middle-tier: `ephemeral/middle-tier-experiment/middle-tier-page.html`
- Variant B: `ephemeral/phase-d-execution/builds/variant-b-weak-perm.html`

PROTOCOL:
1. Serve both via HTTP
2. Screenshot both at 1440px and 768px
3. Side-by-side visual comparison

VARIANT B BASELINE (7 mechanisms, 5/5 categories):
| Category | Mechanisms |
|----------|-----------|
| Spatial | #5 Dense/Sparse (1) |
| Hierarchy | #1 Border-Weight, #4 Spacing Compression, #11 Typography Scale (3) |
| Component | #2 2-Zone DNA, #10 Border-Left Signal (2) |
| Depth/Emphasis | #7 Zone Background (1) |
| Structure/Nav | #18 Data Table (1) |

11 mechanisms Variant B LACKED: #3, #6, #8, #9, #12, #13, #14, #15, #16, #17

WHAT TO COMPARE:
1. Mechanism DENSITY: Does Middle deploy MORE mechanisms per category?
2. Mechanism DIVERSITY: Does Middle deploy mechanisms Variant B lacked (especially #17 code blocks, #13/#14 header/footer, #9 color encoding)?
3. PERCEPTUAL improvement: At least 1 observation must be PERCEPTUAL ("zone differentiation creates visual sections Variant B lacks"), NOT just PROCEDURAL ("more mechanisms").
4. Spatial atmosphere: Does Middle feel like somewhere you want to spend time?

CRITICAL DISTINCTION:
- PROCEDURAL differences ("Middle has 10 mechanisms, Variant B has 7") are expected BY CONSTRUCTION and prove nothing.
- PERCEPTUAL differences ("the header creates an editorial authority that Variant B's plain start lacks") demonstrate ACTUAL visual improvement.
- You MUST provide at least 1 PERCEPTUAL observation.

VERDICT: Better than Variant B = YES / NO / MARGINAL
With 2+ specific observations, at least 1 perceptual.

OUTPUT: Write to `ephemeral/middle-tier-experiment/05-comparison-report.md`
```

### Token Budget: ~3,000 tokens

---

## SLICE 5B: NOVELTY EVALUATOR (~150 lines, ~2K tokens)

### What This Agent Does
Determines whether the Middle-tier page is NOVEL (original composition) or DERIVATIVE (structural copy of showcase pages).

### Sections INCLUDED

| Content | Source Lines | Why |
|---------|-------------|-----|
| Universal Block | -- | Basic constraints |
| Section 10.4 (Novelty Assessment) | 1490-1498 | 3 novelty tests |
| Crown jewel file paths | 1601-1607 | Files to compare against |

### Sections EXCLUDED

Everything except novelty test methodology and reference file paths.

### Novelty Evaluator Prompt Skeleton

```
You are the novelty evaluator. Determine whether the Middle-tier page is NOVEL or DERIVATIVE.

INPUT FILES:
- Middle-tier: `ephemeral/middle-tier-experiment/middle-tier-page.html`
- Ceiling reference: `design-system/validated-explorations/density/DD-006-fractal.html`
- Flagship reference: `design-system/validated-explorations/combination/CD-006-pilot-migration.html`

3 NOVELTY TESTS:

D3.1 STRUCTURAL FINGERPRINT:
- Apply 20px Gaussian blur to screenshots of Middle, DD-006, and CD-006
- Compare shape distributions
- NOVEL: distinct sectioning pattern from both references
- DERIVATIVE: same sectioning pattern as either reference

D3.2 CSS VALUE OVERLAP:
- For mechanisms deployed in BOTH Middle and a reference page, extract CSS values
- Compare the concrete values (padding, colors, widths)
- NOVEL: < 30% overlap in values
- DERIVATIVE: > 60% overlap

D3.3 MECHANISM COMBINATION:
- List the mechanism PAIRS in Middle (which mechanisms reinforce each other)
- Compare against pairs in reference pages
- NOVEL: different reinforcing pairs
- DERIVATIVE: same reinforcing pairs

COMPOSITE:
| Score | Verdict |
|-------|---------|
| 3/3 Novel | STRONGLY NOVEL |
| 2/3 Novel | NOVEL (pass) |
| 1/3 Novel | MARGINALLY DERIVATIVE |
| 0/3 Novel | DERIVATIVE (fail) |

OUTPUT: Write to `ephemeral/middle-tier-experiment/06-novelty-assessment.md`
Each test with method, evidence, and NOVEL/DERIVATIVE verdict.
```

### Token Budget: ~2,000 tokens

---

## SLICE 6: VERDICT SYNTHESIZER (~300 lines, ~4K tokens)

### What This Agent Does
Reads ALL audit and evaluation outputs. Applies the decision matrix. States the final verdict: SUCCESS / PARTIAL / FAILURE.

### Sections INCLUDED

| Content | Source Lines | Why |
|---------|-------------|-----|
| Universal Block | -- | Basic constraints |
| Section 10.1 (Decision Matrix) | 1459-1467 | The 2x2 matrix |
| Section 10.2 (SUCCESS criteria) | 1468-1478 | All 7 must be true |
| Section 10.3 (FAILURE criteria) | 1480-1488 | Any 1 = failure |
| Section 10.5 (Post-Experiment) | 1500-1530 | What to do based on verdict |
| Section 10.6 (Meta-Checks) | 1532-1543 | 8 meta-checks |
| Section 6.5 (Variant B Recount) | 1215-1229 | Baseline data for comparison |

### Sections EXCLUDED

| Section | Why Excluded |
|---------|-------------|
| Sections 0-4 | Build and planning are done |
| Section 3 (Mechanisms) | Mechanism details in audit reports |
| Section 5 | Validation is done; synthesizer reads results |
| Section 7-8 | References and anti-patterns not needed |
| Section 9 | Content requirements already verified |

### Input Files (reads outputs from all prior agents)

```
READ ALL OF THESE:
1. ephemeral/middle-tier-experiment/01-content-selection.md (content-selector output)
2. ephemeral/middle-tier-experiment/02-build-plan.md (planner output)
3. ephemeral/middle-tier-experiment/03-programmatic-audit.md (programmatic auditor output)
4. ephemeral/middle-tier-experiment/04-perceptual-audit.md (perceptual auditor output)
5. ephemeral/middle-tier-experiment/05-comparison-report.md (comparative auditor output)
6. ephemeral/middle-tier-experiment/06-novelty-assessment.md (novelty evaluator output)
```

### Verdict Synthesizer Prompt Skeleton

```
You are the verdict synthesizer for the Middle-Tier Experiment.

[UNIVERSAL BLOCK]

YOUR MISSION: Read all audit and evaluation reports. Apply the decision matrix. State the verdict.

INPUT FILES (read ALL):
[list of 6 files above]

DECISION MATRIX:
| Engagement | Novelty | Verdict | Action |
|-----------|---------|---------|--------|
| Designed | Novel | SUCCESS | Proceed to Wave 2 (M1/M6/M7). Tier model validated. |
| Designed | Derivative | PARTIAL | Middle achieves richness but copies showcases. Revise M1. |
| Under-designed | Novel | PARTIAL | Tier boundary wrong. May need 10-12 mechanisms. |
| Under-designed | Derivative | PARTIAL | Wave 1 validated. Proceed to Wave 2. |

SUCCESS CRITERIA (ALL 7 must be true):
| E2.1 | PA-05 at 1440px = YES (4/4 sub-criteria) |
| E2.2 | Better than Variant B = YES (with perceptual evidence) |
| E2.3 | Spatial atmosphere = YES or SOMEWHAT |
| E2.4 | 5-category coverage = PASS |
| E2.5 | Novelty >= 2 of 3 signals |
| E2.6 | Container width = 940-960px |
| E2.7 | Soul compliance = 7/7 |

FAILURE CRITERIA (any 1 true):
| E4.1 | PA-05 = NO (0-1/4) |
| E4.2 | Not better than Variant B |
| E4.3 | All 3 novelty signals = DERIVATIVE |
| E4.4 | Container width violated |
| E4.5 | 5-category coverage failed |

META-CHECKS:
| G1 | Mechanism counts described as DESCRIPTIVE, not prescriptive |
| G2 | "Sample 2-4" labeled as PROBLEM, not design |
| G3 | Patterns distinguished from mechanisms |
| G4 | Middle = lookup. Ceiling = derivation. |
| G5 | Fractal with CONCRETE examples |
| G6 | Scales and mechanisms = SEPARATE dimensions |
| G7 | M1 sequencing documented |
| G8 | Verdict framework existed BEFORE build |

POST-EXPERIMENT (include in output):

If SUCCESS:
- F1.1: Apply M1 to skill permanently
- F1.2: Proceed to Wave 2 (M6, M7)
- F1.3: Plan Ceiling experiment with SAME content
- F1.4: Document strongest content-mechanism fits
- F1.5: Document gaps for Wave 2

If PARTIAL:
- F2.1: Analyze WHICH dimension is missing
- F2.2: Consider adjusting per-category parameters
- F2.3: Consider 2nd build with adjustments
- F2.4: Evaluate content choice impact
- F2.5: Do NOT proceed to Ceiling

If FAILURE:
- F3.1: Distinguish content-specific vs fundamental failure
- F3.2: Analyze M1-specific vs tier-model failure
- F3.3: Consider Floor/Ceiling binary (dropping Middle)
- F3.4: Re-examine "no metaphor" as root cause
- F3.5: Do NOT proceed to Wave 2

VARIANT B BASELINE DATA:
7 mechanisms across 5 categories (100% coverage)
Spatial: #5 (1) | Hierarchy: #1,#4,#11 (3) | Component: #2,#10 (2)
Depth/Emphasis: #7 (1) | Structure/Nav: #18 (1)
11 NOT deployed: #3, #6, #8, #9, #12, #13, #14, #15, #16, #17

OUTPUT: Write to `ephemeral/middle-tier-experiment/07-VERDICT.md`
Format: Engagement verdict, Novelty verdict, Decision matrix cell, Final verdict,
Each SUCCESS criterion with PASS/FAIL, Post-experiment recommendations.
```

### Token Budget: ~4,000 tokens

---

## TOKEN BUDGET SUMMARY

| Agent | Slice Lines | Est. Tokens | % of Master Prompt |
|-------|------------|-------------|-------------------|
| Content-Selector | ~200 | ~3,000 | 12% |
| Planner | ~1,000 | ~14,000 | 56% |
| Builder | ~400 | ~6,000 | 24% |
| Programmatic Auditor | ~150 | ~2,000 | 8% |
| Perceptual Auditor | ~150 | ~2,000 | 8% |
| Comparative Auditor | ~200 | ~3,000 | 12% |
| Novelty Evaluator | ~150 | ~2,000 | 8% |
| Verdict Synthesizer | ~300 | ~4,000 | 16% |
| **Master Prompt (full)** | **1,760** | **~25,000** | **100%** |

**Key insight:** Only the planner needs >50% of the master prompt. Every other agent operates on <25%. The perceptual auditor needs only 8% -- by design, it must be context-starved to provide genuine "fresh eyes" reactions.

---

## ANTI-LEAKAGE RULES

### Rule 1: Content-Selector Mechanism Firewall
The content-selector MUST NEVER see:
- Section 3 (Mechanism Vocabulary) -- all 18 mechanism names and descriptions
- Section 3.4 (content-mechanism mapping table) -- directly reveals what content features trigger what mechanisms
- Section 7 (Reference Examples) -- CSS snippets reveal component vocabulary
- Appendix C (Compositional Rules) -- rule names leak mechanism awareness
- The plan's Phase 3 (Mechanism Selection) -- the planner's work product

**Rationale:** The content-selector extracts from a pre-selected real source file, so structural choices are already made by the original author. The firewall still matters: if the selector knows that "code blocks trigger mechanism #17" and "tables trigger #18," it might bias which sections to include/exclude based on mechanism compatibility rather than content coherence.

### Rule 2: Builder Prompt Isolation
The builder MUST NEVER receive the master prompt directly. It receives ONLY:
- The planner's plan output
- Copy-paste CSS blocks
- Enforcement blocks (Appendix B)

**Rationale:** The Two-Instance pattern (Section 4.9) exploits continuation bias. If the builder reads the master prompt, it anchors to the prompt's framing rather than the plan's specifics. The plan IS the builder's entire world.

### Rule 3: Perceptual Auditor Context Starvation
The perceptual auditor MUST NEVER see:
- What mechanisms were deployed (Section 3 or the plan)
- What pattern was selected (CRESCENDO/F-PATTERN/BENTO/PULSE)
- What the tier model is or what "Middle-tier" means
- Any reference to Variant B, DD-006, or CD-006
- Any historical context (Section 6)

**Rationale:** Fresh-eyes agents find issues that research-loaded agents miss entirely (confirmed across 6+ teams). If the PA knows "mechanism #5 creates sparse/dense alternation," it will see alternation even when it's imperceptible. The PA must react to WHAT IT SEES, not WHAT IT KNOWS.

### Rule 4: Evaluator Independence
The verdict synthesizer MUST NOT have participated in building or planning. It reads outputs only.

**Rationale:** Self-assessment bias. An agent that planned "this will be good" has continuation bias toward concluding "this is good."

---

## CROSS-REFERENCE: PLAN vs. SLICES

The plan (`wiggly-sprouting-ember.md`) specifies 8 agents across 5 phases. This slicing strategy maps to:

| Plan Agent | Slice | Phase |
|------------|-------|-------|
| content-selector | Slice 1 | Phase 0 |
| planner | Slice 2 | Phase 1 |
| builder | Slice 3 | Phase 2 |
| programmatic-auditor | Slice 4A | Phase 3a |
| perceptual-auditor | Slice 4B | Phase 3b |
| comparative-auditor | Slice 5A | Phase 4a |
| novelty-evaluator | Slice 5B | Phase 4b |
| verdict-synthesizer | Slice 6 | Phase 5 |

**Parallelization compatibility:**
- Phase 3 (Slices 4A + 4B) can run in parallel -- different concerns, same input file
- Phase 4 (Slices 5A + 5B) can run in parallel -- different evaluation dimensions
- All other phases are sequential (output of one feeds input of next)

**Playwright contention:** Slices 4A, 4B, 5A, and 5B all need Playwright. Per established protocol, max 2 concurrent browser sessions. Phase 3 (programmatic + perceptual) and Phase 4 (comparative + novelty) can each run 2 in parallel. Do NOT run all 4 simultaneously.

---

## CRITICAL FINDINGS FROM MASTER PROMPT TO PRESERVE IN ALL SLICES

These items from the plan's cross-reference findings MUST be embedded in the relevant slices:

### Finding 1: Type Scale Conflict (Planner + Builder slices)
tokens.css has different type scale values than master prompt. Use master prompt values:
- `--type-page: 2.5rem` (NOT 3rem from tokens.css)
- `--type-section: 2rem` (NOT 1.625rem)
- `--type-subsection: 1.5rem` (NOT 1.375rem)
These are set correctly in the :root block (Section 4.3) that the builder copies verbatim.

### Finding 2: Zone Dense Color (Builder slice)
Use `--color-zone-dense: #FEFEFE` from master prompt, NOT `#FFFFFF` from tokens.css.
`#FFFFFF` violates prohibition #6 (no pure white). Already correct in :root block.

---

*End of prompt slicing strategy. Each agent sees only what it needs, and critical anti-leakage rules prevent context contamination between phases.*
