# OPTIMAL AGENT TEAM DESIGN: KortAI Middle-Tier Experiment

**Date:** 2026-02-16
**Designer:** team-design-planner
**For:** Middle-tier experiment execution
**Total Budget:** 3.5-4.5 hours

---

## EXECUTIVE SUMMARY

This team design applies 8 critical lessons from memory:
1. **Two-Instance Pattern** (PLANNING → BUILDING separation prevents self-revision)
2. **Per-file builder ownership** = zero contention
3. **File-writing emphasis in ALL worker prompts**
4. **Fresh-eyes perceptual audit** (zero design system context)
5. **Sequential Playwright scheduling** (max 2 concurrent)
6. **Sonnet cost-effective for all roles except creative composition**
7. **Content-before-mechanisms** prevents reverse-fitting
8. **Recovery agents more reliable than captain→worker hierarchies**

**Team size:** 8 agents (1 Opus, 7 Sonnet)
**Critical path:** 5 sequential phases, 2 parallelization opportunities
**Total estimated time:** 3.75-4.5 hours

---

## 1. AGENT ROSTER

| # | Agent Name | Model | Role | Reads | Writes | Time |
|---|-----------|-------|------|-------|--------|------|
| 1 | **content-selector** | Sonnet | Select 800-1,200 word mixed-type content in new domain | NOTHING from design system (contamination prevention) | `01-content-selection.md` | 20-30 min |
| 2 | **planner** | **Opus** | Create complete build specification with concrete CSS values | Master prompt (1,761 lines) + 8 Tier 1 files (~4,000 lines) + content selection | `02-build-plan.md` (HANDOFF to builder) | 60-90 min |
| 3 | **builder** | Sonnet | Execute plan to single-file HTML | Build plan + Tier 1 mandatory blocks (prohibitions.md, tokens.css, mechanism catalog) | `middle-tier-page.html` | 70-100 min |
| 4 | **programmatic-auditor** | Sonnet | Automated validation via Playwright | HTML file | `03-programmatic-audit.md` | 5-10 min |
| 5 | **perceptual-auditor** | Sonnet | Fresh-eyes PA audit (PA-01 to PA-20 + SEM) | HTML file ONLY (zero design system context) | `04-perceptual-audit.md` | 30-40 min |
| 6 | **comparative-auditor** | Sonnet | Side-by-side comparison with Variant B | Middle HTML + Variant B HTML (both files) | `05-comparison-report.md` | 20-30 min |
| 7 | **novelty-evaluator** | Sonnet | Gaussian blur + CSS overlap + combination analysis | Middle HTML + showcase pages (DD-006, OD-004) | `06-novelty-assessment.md` | 15-20 min |
| 8 | **verdict-synthesizer** | Sonnet | Final SUCCESS/PARTIAL/FAILURE determination | All 6 audit/comparison reports + decision matrix | `07-VERDICT.md` | 15-20 min |

**CRITICAL OWNERSHIP PRINCIPLE:** Each agent writes to EXACTLY ONE output file. Zero file contention.

---

## 2. EXECUTION TIMELINE

```
PHASE 0: Content Selection (ISOLATED)
├─ Agent 1: content-selector [20-30 min]
│  ├─ MUST NOT read Section 3 (Mechanism Vocabulary)
│  ├─ MUST NOT read case studies
│  ├─ Output: 800-1,200 words, A2.1-A2.10 verified
│  └─ Writes: 01-content-selection.md
└─ HANDOFF → planner receives content

PHASE 1: Planning (TWO-INSTANCE PATTERN)
├─ Agent 2: planner [60-90 min] ★ OPUS MODEL ★
│  ├─ Reads: Master prompt (1,761 lines)
│  ├─ Reads: 8 Tier 1 files (~4,000 lines total)
│  ├─ Reads: 01-content-selection.md (from Phase 0)
│  ├─ Creates CONCRETE specification (not abstract)
│  ├─ Includes: section map, mechanism table, transition table, reinforcing pairs, fractal table, builder blocks
│  └─ Writes: 02-build-plan.md
└─ HANDOFF → builder receives plan

PHASE 2: Build Execution
├─ Agent 3: builder [70-100 min]
│  ├─ Reads: 02-build-plan.md (ONLY the plan, NOT the master prompt)
│  ├─ Reads: prohibitions.md (353 lines) -- MANDATORY
│  ├─ Reads: tokens.css (174 lines) -- MANDATORY
│  ├─ Reads: mechanism-catalog.md (1,011 lines) -- MANDATORY
│  ├─ File-writing enforcement: "You MUST write the HTML file using Write tool"
│  ├─ Container width enforcement: "940-960px NON-NEGOTIABLE"
│  └─ Writes: middle-tier-page.html (self-contained, all CSS inline)
└─ HANDOFF → auditors receive HTML

PHASE 3: Parallel Auditing (2 CONCURRENT STREAMS)
├─ Stream A: Programmatic [5-10 min]
│  └─ Agent 4: programmatic-auditor (Playwright MCP)
│     ├─ Automated checks via browser
│     ├─ Container width (computed max-width)
│     ├─ CPL at 1440px, 768px rendering
│     ├─ Font loading, contrast ratios
│     └─ Writes: 03-programmatic-audit.md
│
└─ Stream B: Perceptual [30-40 min] ★ FRESH-EYES ★
   └─ Agent 5: perceptual-auditor (ZERO context)
      ├─ Reads: HTML file ONLY
      ├─ Does NOT read design system files
      ├─ Does NOT read master prompt
      ├─ PA-01 to PA-20 + SEM questions
      └─ Writes: 04-perceptual-audit.md

PHASE 4: Evaluation (SEQUENTIAL -- each depends on previous)
├─ Agent 6: comparative-auditor [20-30 min]
│  ├─ Reads: middle-tier-page.html
│  ├─ Reads: variant-b-weak-perm.html
│  ├─ Side-by-side at 1440px (Playwright screenshots)
│  ├─ E2.2 assessment (better than Variant B?)
│  └─ Writes: 05-comparison-report.md
│
├─ Agent 7: novelty-evaluator [15-20 min]
│  ├─ Reads: middle-tier-page.html
│  ├─ Reads: DD-006-fractal.html, OD-004 (showcase pages)
│  ├─ D3.1: Gaussian blur structural fingerprint
│  ├─ D3.2: CSS value overlap analysis
│  ├─ D3.3: Mechanism combination comparison
│  └─ Writes: 06-novelty-assessment.md
│
└─ Agent 8: verdict-synthesizer [15-20 min]
   ├─ Reads: 03-programmatic-audit.md
   ├─ Reads: 04-perceptual-audit.md
   ├─ Reads: 05-comparison-report.md
   ├─ Reads: 06-novelty-assessment.md
   ├─ Applies decision matrix (Section 10.1)
   ├─ Determines: SUCCESS / PARTIAL / FAILURE
   └─ Writes: 07-VERDICT.md

TOTAL TIME: 235-330 minutes (3.92-5.5 hours)
REALISTIC RANGE: 3.75-4.5 hours
```

---

## 3. PROMPT TEMPLATES (Outlines)

### 3.1 Agent 1: content-selector

```markdown
# ROLE: Content Selector

## CRITICAL CONTAMINATION PREVENTION
You MUST NOT read ANY of the following:
- Section 3 (Mechanism Vocabulary) of the master prompt
- design-system/compositional-core/grammar/mechanism-catalog.md
- design-system/compositional-core/case-studies/

Reading these files before content selection would allow subconscious reverse-fitting.

## YOUR TASK
Select or create content meeting these criteria:
1. 800-1,200 words (A2.1)
2. Mixed content types: >= 3 prose paragraphs, >= 2 code blocks, >= 2 callouts, >= 1 table, >= 1 step sequence
3. 2+ heading levels (H2 + H3 minimum)
4. Domain: technical topic DIFFERENT from scientific calibration
5. Maps to exactly ONE density pattern: CRESCENDO / F-PATTERN / BENTO / PULSE

## SUGGESTED DOMAINS
- Setting up development environments
- API versioning strategies
- Database query optimization
- Authentication flow design
- Container orchestration
- Performance profiling

## OUTPUT FORMAT
File: ephemeral/middle-tier-plan/01-content-selection.md

```
# CONTENT SELECTION

## Metadata
- Domain: [topic]
- Word count: [actual count]
- Pattern match: [CRESCENDO/F-PATTERN/BENTO/PULSE]

## Verification Checklist
- [ ] A2.1: 800-1,200 words
- [ ] A2.2: >= 3 prose paragraphs
- [ ] A2.3: >= 2 code blocks
- [ ] A2.4: >= 2 callouts
- [ ] A2.5: 2+ heading levels
- [ ] A2.6: >= 1 table
- [ ] A2.7: >= 1 step sequence
- [ ] A2.8: NOT scientific calibration
- [ ] A2.9: NOT self-referential (not about design system)
- [ ] A2.10: Maps to density pattern

## Full Content
[800-1,200 word content here with section breaks marked]
```

## FILE-WRITING ENFORCEMENT
You MUST write the file using the Write tool. Text output is NOT sufficient.
```

### 3.2 Agent 2: planner (OPUS)

```markdown
# ROLE: Build Planner (OPUS MODEL)

## CONTEXT
You are the PLANNING instance in a Two-Instance Pattern. Your plan will be handed to a BUILDING instance that will NOT re-read the master prompt. Continuation bias will anchor the builder to your plan structure.

## CRITICAL READING SEQUENCE
1. Read: ephemeral/middle-tier-plan/01-content-selection.md (content)
2. Read: design-system/compositional-core/identity/prohibitions.md (353 lines) -- FIRST
3. Read: design-system/compositional-core/vocabulary/tokens.css (174 lines) -- SECOND
4. Read: design-system/compositional-core/grammar/mechanism-catalog.md (1,011 lines) -- ALL 18 mechanisms
5. Read: design-system/compositional-core/guidelines/semantic-rules.md (286 lines)
6. Read: design-system/compositional-core/guidelines/usage-criteria.md (298 lines)
7. Read: ~/.claude/skills/tension-composition/SKILL.md (~1,582 lines) -- BUT APPLY M1 OVERRIDE
8. Read: design-system/compositional-core/components/merged-components.css (1,195 lines) -- optional reference

Total read load: ~4,900 lines

## M1 OVERRIDE (CRITICAL)
The skill STILL says "sample 2-4 mechanisms." IGNORE THIS.
Use per-category minimum instead:
- Deploy AT LEAST 1 mechanism from EACH of 5 categories
- Spatial: #5, #6, #15
- Hierarchy: #1, #4, #11
- Component: #2, #9, #10, #17
- Depth/Emphasis: #3, #7, #16
- Structure/Nav: #8, #12, #13, #14, #18

Natural landing zone: 8-10 mechanisms (acceptable range: 7-12)

## YOUR DELIVERABLE
File: ephemeral/middle-tier-plan/02-build-plan.md

Must include (in this order):
1. PATTERN SELECTION (which of 4 patterns + justification)
2. SECTION MAP (for each section: padding value, background token, border, mechanisms)
3. MECHANISM TABLE (each deployed: location, CSS property, exact values)
4. TRANSITION TABLE (each transition: type, location, CSS values)
5. REINFORCING PAIRS (2+ pairs with shared semantic + CSS evidence)
6. FRACTAL TABLE (Page + Component scales with CSS evidence)
7. BUILDER BLOCKS (copy Appendix B blocks 1-4 verbatim)
8. REJECTION RATIONALE (3+ mechanisms evaluated but NOT deployed)

## CONCRETENESS REQUIREMENT
WRONG: "Deploy mechanism #5 for rhythm in intro"
CORRECT: "Section 1 (Intro): padding var(--space-16) [64px], background var(--color-zone-sparse) [#FEF9F5], no border. Mechanism #5 (Dense/Sparse Alternation) creates sparse opening."

All CSS values must be SPECIFIC. No abstract descriptions.

## CONTAINER WIDTH (NON-NEGOTIABLE)
Document: "Container width 940-960px is HIGHEST priority. Express narrowing via internal padding, NEVER external width reduction."

## FILE-WRITING ENFORCEMENT
You MUST write the plan file using the Write tool. The builder will read this file, not the master prompt.
```

### 3.3 Agent 3: builder

```markdown
# ROLE: HTML Builder

## CONTEXT
You are the BUILDING instance in a Two-Instance Pattern. You receive a complete build plan. Do NOT re-read the master prompt. Execute the plan EXACTLY.

## MANDATORY READING (BEFORE ANY CSS)
1. Read: design-system/compositional-core/identity/prohibitions.md (353 lines)
2. Read: design-system/compositional-core/vocabulary/tokens.css (174 lines)
3. Read: design-system/compositional-core/grammar/mechanism-catalog.md (1,011 lines)
4. Read: ephemeral/middle-tier-plan/02-build-plan.md (the plan)

## SOUL CHECKLIST (verify EVERY element)
- [ ] border-radius: 0 on ALL elements
- [ ] box-shadow: none on ALL elements
- [ ] No filter: drop-shadow()
- [ ] No opacity < 1 on visual elements
- [ ] No gradient backgrounds
- [ ] No pure black (#000000) or pure white (#FFFFFF)
- [ ] Instrument Serif for DISPLAY HEADINGS only (never body)
- [ ] Inter for body text
- [ ] JetBrains Mono for code
- [ ] All h3 elements: font-style: italic (set globally)
- [ ] All colors from tokens.css palette
- [ ] Border widths: 4px/3px/1px only (NEVER 2px)

## CONTAINER WIDTH ENFORCEMENT
CONTAINER WIDTH: 940-960px at 1440px viewport.
This is NON-NEGOTIABLE. 4/5 Phase D pages violated this.

If ANY narrowing is needed, use INTERNAL PADDING:
- CORRECT: max-width: 960px + padding: 0 120px = 720px content width
- WRONG: max-width: 700px (INSTANT FAIL)

## FILE-WRITING ENFORCEMENT (CRITICAL)
OUTPUT FILE: ephemeral/middle-tier-experiment/middle-tier-page.html
Create directory if it doesn't exist.
You MUST write the HTML file using Write tool.
Text output is NOT sufficient. File must exist on disk.

## OUTPUT STRUCTURE
Single self-contained HTML file:
- All CSS in <style> block
- Fonts via CDN (Google Fonts)
- No external CSS/JS files
- Semantic HTML landmarks (>=3 of: header, main, footer, nav, section, article)
- Skip-link for accessibility
- Responsive @media (max-width: 768px)

## EXECUTION CHECKLIST
- [ ] Read prohibitions.md BEFORE any CSS
- [ ] Read tokens.css BEFORE any CSS
- [ ] Read build plan
- [ ] Container width 940-960px
- [ ] All soul constraints verified
- [ ] File written to disk
- [ ] >= 3 semantic landmarks
- [ ] Accessibility triple (skip-link, focus-visible, prefers-reduced-motion)
```

### 3.4 Agent 4: programmatic-auditor

```markdown
# ROLE: Programmatic Auditor (Playwright MCP)

## YOUR TASK
Automated validation of middle-tier-page.html using Playwright browser automation.

## SETUP
1. Start HTTP server: `python3 -m http.server 8000 --directory /Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/middle-tier-experiment`
2. Navigate to: http://localhost:8000/middle-tier-page.html

## VALIDATION CHECKS

### Viewport: 1440px
- [ ] B2.1: Container max-width = 940-960px (measure computed style)
- [ ] B9.2: Characters per line = 45-80 CPL (measure rendered text width)
- [ ] B9.7: No horizontal scrollbar
- [ ] Font loading: wait for document.fonts.ready, verify --font-display, --font-body, --font-mono loaded
- [ ] B10.9: WCAG AA contrast >= 4.5:1 (body text on backgrounds)

### Viewport: 768px
- [ ] B9.8: No overlapping, no truncation, all content accessible
- [ ] Responsive grid collapse (grids to 1-2 columns)

### Soul Compliance (Regex Scans)
- [ ] B7.1: No border-radius > 0
- [ ] B7.2: No box-shadow declarations
- [ ] B7.3: No gradients (linear-gradient, radial-gradient, conic-gradient)
- [ ] B7.4: No pure black (#000000, #000, rgb(0,0,0))
- [ ] B7.5: No pure white (#FFFFFF, #FFF, rgb(255,255,255))

### Token Compliance
- [ ] B8.1: >= 80% of CSS values reference tokens.css custom properties

## OUTPUT
File: ephemeral/middle-tier-plan/03-programmatic-audit.md

```
# PROGRAMMATIC AUDIT REPORT

## Viewport: 1440px
- Container width: [measured px] (PASS/FAIL)
- CPL: [measured] (PASS/FAIL)
- Horizontal scroll: [present/absent] (PASS/FAIL)

## Viewport: 768px
- Rendering: [observations] (PASS/FAIL)

## Soul Compliance
- border-radius: [scan result] (PASS/FAIL)
- box-shadow: [scan result] (PASS/FAIL)
- gradients: [scan result] (PASS/FAIL)
- pure black: [scan result] (PASS/FAIL)
- pure white: [scan result] (PASS/FAIL)

## Token Compliance
- Percentage: [calculated %] (PASS/FAIL threshold: >= 80%)

## CRITICAL FAILURES
[List any INSTANT FAIL conditions]

## VERDICT
[PASS / CONDITIONAL PASS / FAIL]
```
```

### 3.5 Agent 5: perceptual-auditor (FRESH-EYES)

```markdown
# ROLE: Perceptual Auditor (FRESH-EYES -- ZERO CONTEXT)

## CRITICAL CONSTRAINT
You are a FRESH-EYES auditor. You have ZERO context about the design system.

DO NOT READ:
- Master prompt
- Design system files
- Build plan
- Prohibitions or tokens

ONLY READ:
- ephemeral/middle-tier-experiment/middle-tier-page.html

## YOUR TASK
Answer PA-01 through PA-20 + SEM (Spatial/Engagement/Meaning) questions based ONLY on visual observation.

## SETUP
1. Serve HTML via HTTP
2. View at 1440px viewport
3. Disable scroll animations: add to page CSS: `* { animation: none !important; opacity: 1 !important; }`

## PA QUESTION SUBSETS

**PA-05 (CRITICAL -- 4 sub-criteria):**
- PA-05a: >= 2 non-default layout elements? (grid, flex, position tricks)
- PA-05b: Padding ratio >= 2.0x? (shallowest / deepest)
- PA-05c: Identifiable visual hierarchy?
- PA-05d: >= 15% compositional CSS? (spatial/depth mechanisms vs default typography)

**PA-01 to PA-04:** Layout topology, spatial variety, density rhythm
**PA-06 to PA-10:** Visual depth, zone differentiation, component organization
**PA-11 to PA-15:** Typography, readability, semantic clarity
**PA-16 to PA-20:** Responsive behavior, accessibility signals

## OUTPUT
File: ephemeral/middle-tier-plan/04-perceptual-audit.md

```
# PERCEPTUAL AUDIT REPORT

## PA-05 Assessment (CRITICAL)
- PA-05a (>= 2 layout elements): [YES/NO] — [observations]
- PA-05b (padding ratio >= 2.0x): [YES/NO] — [measured ratio]
- PA-05c (visual hierarchy): [YES/NO] — [observations]
- PA-05d (>= 15% compositional): [YES/NO] — [estimate]

**PA-05 VERDICT:** [4/4 = YES, 2-3/4 = SOMEWHAT, 0-1/4 = NO]

## PA-01 to PA-20 Responses
[Answer each question]

## SEM Assessment
- Spatial atmosphere: [YES/SOMEWHAT/NO] — Does page feel "designed" vs "formatted"?
- Engagement: [observations]
- Meaning: [observations]

## OVERALL IMPRESSION
[Fresh-eyes assessment of whether page crosses "designed" threshold]
```
```

### 3.6 Agent 6: comparative-auditor

```markdown
# ROLE: Comparative Auditor

## YOUR TASK
Side-by-side comparison of Middle-tier page vs Variant B baseline.

## FILES TO READ
1. ephemeral/middle-tier-experiment/middle-tier-page.html
2. ephemeral/phase-d-execution/builds/variant-b-weak-perm.html

## COMPARISON DIMENSIONS

### E2.2: Better Than Variant B?
Must include AT LEAST 1 PERCEPTUAL observation (not just procedural):
- PERCEPTUAL (required): "Zone differentiation creates visual sections that Variant B lacks"
- PROCEDURAL (expected): "More mechanism categories deployed"

Procedural differences are expected BY CONSTRUCTION (Middle uses 8-10 mechanisms, Variant B used 5).
Success requires perceptual improvement, not just structural.

### Comparison Checklist
- Spatial variety (layout topology differences)
- Visual depth (layering, zone differentiation)
- Density rhythm (breathing zones)
- Component richness (callouts, code blocks, tables)
- Typography hierarchy
- Overall "designed" feeling

## SETUP
Playwright side-by-side screenshots at 1440px.

## OUTPUT
File: ephemeral/middle-tier-plan/05-comparison-report.md

```
# COMPARISON REPORT: Middle vs Variant B

## Perceptual Observations (REQUIRED)
[At least 1 observation about visual/spatial differences, NOT structural counts]

## Procedural Observations
[Mechanism categories, technique count, etc.]

## Side-by-Side Analysis
| Dimension | Middle | Variant B | Better? |
|-----------|--------|-----------|---------|
| Spatial variety | [obs] | [obs] | [YES/NO/EQUAL] |
| Visual depth | [obs] | [obs] | [YES/NO/EQUAL] |
| Density rhythm | [obs] | [obs] | [YES/NO/EQUAL] |
| Component richness | [obs] | [obs] | [YES/NO/EQUAL] |
| Typography | [obs] | [obs] | [YES/NO/EQUAL] |

## E2.2 Verdict
Better than Variant B? [YES (clear improvement) / MARGINAL / NO (equal or worse)]

## Supporting Evidence
[Screenshots, specific observations]
```
```

### 3.7 Agent 7: novelty-evaluator

```markdown
# ROLE: Novelty Evaluator

## YOUR TASK
Assess whether Middle-tier page is NOVEL (new grammar usage) or DERIVATIVE (copy of showcase pages).

## FILES TO READ
1. ephemeral/middle-tier-experiment/middle-tier-page.html
2. design-system/validated-explorations/density/DD-006-fractal.html
3. ephemeral/phase-d-execution/builds/variant-b-weak-perm.html
4. (Optional) design-system/validated-explorations/combination/CD-006-pilot-migration.html

## THREE NOVELTY TESTS

### D3.1: Structural Fingerprint (Gaussian Blur)
1. Take screenshot of Middle at 1440px
2. Take screenshot of DD-006 at 1440px
3. Apply 20px Gaussian blur to both
4. Compare shape distribution

NOVEL = distinct sectioning patterns
DERIVATIVE = same sectioning structure

### D3.2: CSS Value Overlap
For mechanisms SHARED between Middle and showcase pages:
1. Extract CSS values (padding, margins, backgrounds, borders)
2. Calculate overlap percentage

NOVEL = < 30% overlap
DERIVATIVE = > 60% overlap

### D3.3: Mechanism Combination
Compare mechanism PAIRS/TRIPLES:
- Does Middle use same combinations as showcases?
- Or different pairs?

NOVEL = different combination patterns
DERIVATIVE = same pairs as DD-006/OD-004

## VERDICT CRITERIA
- 2+ tests = NOVEL → novelty signal PASS
- 2+ tests = DERIVATIVE → novelty signal FAIL

## OUTPUT
File: ephemeral/middle-tier-plan/06-novelty-assessment.md

```
# NOVELTY ASSESSMENT REPORT

## D3.1: Structural Fingerprint
- Method: 20px Gaussian blur comparison
- Middle shape: [description]
- DD-006 shape: [description]
- Verdict: [DISTINCT / SAME]

## D3.2: CSS Value Overlap
- Shared mechanisms: [list]
- Overlap percentage: [calculated %]
- Verdict: [< 30% NOVEL / 30-60% MIXED / > 60% DERIVATIVE]

## D3.3: Mechanism Combination
- Middle pairs: [list combinations]
- Showcase pairs: [list from DD-006/OD-004]
- Verdict: [DIFFERENT / SAME]

## OVERALL NOVELTY VERDICT
Tests passing NOVEL: [count]/3
Tests passing DERIVATIVE: [count]/3

**NOVELTY SIGNAL:** [>= 2 NOVEL = PASS / >= 2 DERIVATIVE = FAIL]
```
```

### 3.8 Agent 8: verdict-synthesizer

```markdown
# ROLE: Verdict Synthesizer

## YOUR TASK
Integrate all audit reports and determine final SUCCESS / PARTIAL / FAILURE verdict.

## FILES TO READ
1. ephemeral/middle-tier-plan/03-programmatic-audit.md
2. ephemeral/middle-tier-plan/04-perceptual-audit.md
3. ephemeral/middle-tier-plan/05-comparison-report.md
4. ephemeral/middle-tier-plan/06-novelty-assessment.md

## DECISION MATRIX (Section 10.1)

| Engagement (PA-05) | Novelty | Verdict | Interpretation |
|-------------------|---------|---------|----------------|
| Designed (YES) | Novel (>= 2/3) | **SUCCESS** | Tier model validated. Proceed to Wave 2. |
| Designed (YES) | Derivative (< 2/3) | **PARTIAL** | Richness achieved, but feels like showcase copy. |
| Under-designed (NO/SOMEWHAT) | Novel | **PARTIAL** | Tier boundary wrong. Vocabulary works but 8-10 insufficient. |
| Under-designed | Derivative | **PARTIAL** | Convergence detectable (expected). Proceed to Wave 2. |

## SUCCESS CRITERIA (ALL must be true -- Section 10.2)
- [ ] E2.1: PA-05 at 1440px = YES (4/4 sub-criteria PASS)
- [ ] E2.2: Better than Variant B = YES (clear, NOT marginal, >= 1 perceptual observation)
- [ ] E2.3: Spatial atmosphere = YES or SOMEWHAT
- [ ] E2.4: 5-category coverage = PASS (from build plan)
- [ ] E2.5: Novelty >= 2 of 3 signals
- [ ] E2.6: Container width = 940-960px
- [ ] E2.7: Soul compliance = 7/7

## FAILURE CRITERIA (any 1 true -- Section 10.3)
- [ ] E4.1: PA-05 = NO (0-1 sub-criteria PASS)
- [ ] E4.2: Better than Variant B = NO (equal or worse)
- [ ] E4.3: All 3 novelty signals = DERIVATIVE
- [ ] E4.4: Container width violated
- [ ] E4.5: 5-category coverage failed

## OUTPUT
File: ephemeral/middle-tier-plan/07-VERDICT.md

```
# MIDDLE-TIER EXPERIMENT VERDICT

## Success Criteria Evaluation
- E2.1 (PA-05 = YES): [PASS/FAIL] — [evidence]
- E2.2 (Better than Variant B): [PASS/FAIL] — [evidence]
- E2.3 (Spatial atmosphere): [PASS/FAIL] — [evidence]
- E2.4 (5-category coverage): [PASS/FAIL] — [evidence]
- E2.5 (Novelty >= 2/3): [PASS/FAIL] — [evidence]
- E2.6 (Container width): [PASS/FAIL] — [evidence]
- E2.7 (Soul compliance): [PASS/FAIL] — [evidence]

SUCCESS met: [count]/7

## Failure Criteria Evaluation
- E4.1 (PA-05 = NO): [triggered? YES/NO]
- E4.2 (Not better than Variant B): [triggered? YES/NO]
- E4.3 (All derivative): [triggered? YES/NO]
- E4.4 (Container violated): [triggered? YES/NO]
- E4.5 (Categories failed): [triggered? YES/NO]

FAILURE met: [count]/5

## Decision Matrix Application
- Engagement: [Designed / Under-designed]
- Novelty: [Novel / Derivative]
- Matrix cell: [which quadrant]

## FINAL VERDICT
[SUCCESS / PARTIAL / FAILURE]

## Rationale
[2-3 paragraph explanation with specific evidence]

## Next Actions (Section 10.5)
[F1.1-F1.5 if SUCCESS, F2.1-F2.5 if PARTIAL, F3.1-F3.5 if FAILURE]
```
```

---

## 4. HANDOFF PROTOCOL

### Phase 0 → Phase 1
**Deliverable:** `01-content-selection.md` (content + verification checklist)
**Verification before handoff:**
- Word count in 800-1,200 range?
- All A2.1-A2.10 criteria met?
- Pattern mapping unambiguous?

### Phase 1 → Phase 2
**Deliverable:** `02-build-plan.md` (complete build specification)
**Verification before handoff:**
- All 8 sections present (pattern selection through rejection rationale)?
- CSS values CONCRETE (not abstract)?
- Container width priority documented?
- Builder blocks copied verbatim from Appendix B?

### Phase 2 → Phase 3
**Deliverable:** `middle-tier-page.html` (self-contained HTML)
**Verification before handoff:**
- File exists at `ephemeral/middle-tier-experiment/middle-tier-page.html`?
- Self-contained (all CSS inline, fonts via CDN)?
- >= 3 semantic landmarks?
- Soul checklist verified?

### Phase 3 → Phase 4
**Deliverables:** `03-programmatic-audit.md` + `04-perceptual-audit.md`
**Verification before handoff:**
- Both audits complete?
- PA-05 verdict determined (YES/SOMEWHAT/NO)?
- Programmatic checks report container width?

### Phase 4 → Verdict
**Deliverables:** `05-comparison-report.md` + `06-novelty-assessment.md`
**Verification before handoff:**
- Comparison includes >= 1 perceptual observation?
- Novelty tested all 3 methods (D3.1, D3.2, D3.3)?

---

## 5. PARALLELIZATION OPPORTUNITIES

### Opportunity 1: Phase 3 Auditing
**Agents:** programmatic-auditor + perceptual-auditor
**Safe to run concurrently:** YES
**Reason:** Different tools (Playwright vs visual observation), different output files, read-only HTML access

**Timing:**
- programmatic-auditor: 5-10 min
- perceptual-auditor: 30-40 min
- Wall time: 30-40 min (vs 35-50 min sequential)
- **Savings: ~15 minutes**

### Opportunity 2: Phase 4 Evaluation (CONDITIONAL)
**Agents:** comparative-auditor + novelty-evaluator
**Safe to run concurrently:** YES (if Playwright scheduling permits)
**Reason:** Both read-only access to HTML files, different output files

**Constraint:** Memory guidance says "Sequential Playwright scheduling. 2 concurrent usually safe; 4+ causes severe contention."
- Phase 3 already has 1 Playwright agent (programmatic-auditor)
- Phase 4 has 2 potential Playwright agents (comparative + novelty)

**Decision:** Run Phase 4 agents SEQUENTIALLY to avoid Playwright contention. Phase 3 completes before Phase 4 starts, so only 1 Playwright agent active at once.

**Recommendation:** Do NOT parallelize Phase 4. Sequential execution safer.

---

## 6. ERROR RECOVERY STRATEGIES

### Scenario 1: content-selector fails to write file
**Symptom:** No `01-content-selection.md` in output directory
**Recovery:** planner creates content inline (but loses contamination prevention benefit)
**Mitigation:** Emphatic file-writing instruction: "You MUST write 01-content-selection.md using Write tool. Text output is NOT sufficient."

### Scenario 2: planner exceeds context window
**Symptom:** /compact or context overflow during Tier 1 file reading
**Root cause:** 1,761-line master prompt + 4,000 lines Tier 1 files = ~5,761 lines input
**Recovery:**
- Option A: planner reads in chunks (prohibitions → tokens → mechanism catalog → plan)
- Option B: Switch planner to Sonnet with focused reading (skip deep context, focus on critical rules)
**Mitigation:** Opus has larger context. Monitor token usage. If approaching limit, use chunk-based reading.

### Scenario 3: builder deviates from plan
**Symptom:** HTML violates container width, skips mechanisms, or ignores pattern
**Root cause:** Builder reads master prompt in addition to plan (continuation bias diluted)
**Recovery:** N/A (experiment result contaminated)
**Mitigation:** EXPLICIT in builder prompt: "Do NOT re-read master prompt. Execute plan EXACTLY."

### Scenario 4: builder fails to write HTML file
**Symptom:** No `middle-tier-page.html` exists
**Recovery:** Recovery builder agent (direct execution, not captain→worker)
**Mitigation:** File-writing enforcement block in builder prompt (Appendix B Block 2)

### Scenario 5: programmatic-auditor cannot access HTML (Playwright MCP)
**Symptom:** `file://` protocol blocked
**Root cause:** Playwright MCP blocks local file access
**Recovery:** Start HTTP server manually: `python3 -m http.server 8000 --directory [path]`
**Mitigation:** Include HTTP server setup in programmatic-auditor prompt

### Scenario 6: perceptual-auditor reads design system files (fresh-eyes contamination)
**Symptom:** PA report references design system knowledge
**Root cause:** Agent reads files beyond HTML
**Recovery:** Re-run with fresh instance, stricter prompt
**Mitigation:** EMPHATIC constraint list in prompt: "DO NOT READ: Master prompt, design system files, build plan..."

### Scenario 7: verdict-synthesizer cannot determine clear verdict
**Symptom:** Ambiguous PARTIAL vs FAILURE determination
**Root cause:** Edge case in decision matrix
**Recovery:** User review and manual determination
**Mitigation:** Verdict prompt includes "if ambiguous, document BOTH possible interpretations with evidence"

---

## 7. RISK MATRIX

| Risk | Probability | Impact | Mitigation | Owner |
|------|-------------|--------|------------|-------|
| **Container width violation** (4/5 Phase D pages failed) | HIGH | CRITICAL (instant fail) | Container width enforcement in builder prompt + programmatic verification | builder + programmatic-auditor |
| **"Sample 2-4" instruction not overridden** | MEDIUM | CRITICAL (experiment invalid) | M1 override block in planner prompt + explicit in builder prompt | planner |
| **Builder fails to write HTML file** (~20-30% failure rate) | MEDIUM | HIGH (blocks all downstream) | File-writing enforcement block + recovery builder protocol | builder |
| **Fresh-eyes contamination** (perceptual auditor reads system) | MEDIUM | MEDIUM (audit validity) | Explicit DO NOT READ list in prompt | perceptual-auditor |
| **Planner context overflow** (5,761 lines input) | MEDIUM | HIGH (incomplete plan) | Chunk-based reading + Opus model with large context | planner |
| **Playwright contention** (>2 concurrent = severe) | LOW (if sequential) | MEDIUM (audit failures) | Sequential Playwright scheduling in Phase 3→4 | programmatic/comparative/novelty |
| **Content reverse-fitting** (contamination) | LOW | MEDIUM (experiment validity) | content-selector reads ZERO design system files | content-selector |
| **Builder re-reads master prompt** (dilutes Two-Instance) | LOW | MEDIUM (continuation bias broken) | Explicit "do NOT re-read" in builder prompt | builder |
| **Verdict ambiguity** (edge case) | LOW | LOW (requires user review) | "Document both interpretations" fallback | verdict-synthesizer |

---

## 8. CONTEXT MANAGEMENT

### Agent Token Budgets

| Agent | Input Load | Estimated Tokens | Risk | Strategy |
|-------|-----------|-----------------|------|----------|
| content-selector | Master prompt sections (selective) | ~3,000 | LOW | Reads only content criteria sections |
| **planner** | Master prompt (1,761 lines) + Tier 1 (4,000 lines) | **~25,000** | **MEDIUM** | Opus model. Chunk reading if needed. |
| builder | Build plan + Tier 1 mandatory (1,538 lines) | ~8,000 | LOW | Focused execution, no master prompt |
| programmatic-auditor | HTML file + prompt | ~5,000 | LOW | Automated checks only |
| perceptual-auditor | HTML file only | ~4,000 | LOW | Fresh-eyes, minimal input |
| comparative-auditor | 2 HTML files + prompt | ~6,000 | LOW | Side-by-side comparison |
| novelty-evaluator | 3-4 HTML files + prompt | ~8,000 | LOW | Structural analysis |
| verdict-synthesizer | 4 audit reports + prompt | ~6,000 | LOW | Synthesis only |

**Highest risk: planner (25,000 tokens input)**
**Mitigation:** Opus model has ~200k context window. Monitor usage. If approaching limit, switch to chunk-based reading.

---

## 9. PROMPT SIZE BUDGETS

### Estimated Prompt Sizes

| Agent | Core Prompt | File Reads | Total |
|-------|-------------|------------|-------|
| content-selector | 500 lines | 0 lines | ~500 lines |
| planner | 800 lines | 5,761 lines (master + Tier 1) | ~6,561 lines |
| builder | 600 lines | 1,538 lines (plan + Tier 1 mandatory) | ~2,138 lines |
| programmatic-auditor | 400 lines | HTML file | ~800 lines |
| perceptual-auditor | 500 lines | HTML file | ~900 lines |
| comparative-auditor | 400 lines | 2 HTML files | ~900 lines |
| novelty-evaluator | 400 lines | 3 HTML files | ~1,200 lines |
| verdict-synthesizer | 500 lines | 4 audit reports | ~1,500 lines |

**Largest: planner at ~6,561 lines input**

---

## 10. CRITICAL SUCCESS FACTORS

### From Memory Patterns

1. **Two-Instance Pattern enforcement**
   - Planner creates CONCRETE spec (not abstract)
   - Builder does NOT re-read master prompt
   - Continuation bias anchors to plan structure

2. **Container width protection** (THE #1 failure mode)
   - Enforcement in builder prompt
   - Programmatic verification via computed style
   - 940-960px NON-NEGOTIABLE

3. **File-writing emphasis**
   - EVERY worker prompt includes: "You MUST write [file] using Write tool"
   - ~20-30% failure rate without this
   - Recovery builder on standby

4. **Fresh-eyes perceptual audit**
   - ZERO design system context
   - Explicit DO NOT READ list
   - Only observes rendered HTML

5. **Sequential Playwright scheduling**
   - Phase 3: 1 Playwright agent (programmatic-auditor)
   - Phase 4: agents run sequentially (avoid contention)
   - Max 1-2 concurrent Playwright operations

6. **Content-before-mechanisms**
   - content-selector reads ZERO mechanism vocabulary
   - Prevents subconscious reverse-fitting
   - Contamination prevention is experiment integrity

7. **M1 override enforcement**
   - Skill STILL says "sample 2-4"
   - Planner and builder MUST override
   - Per-category minimum protocol

8. **Per-file ownership**
   - 8 agents, 8 output files
   - Zero file contention
   - Clear dependency chain

---

## 11. TEAM COMMUNICATION PROTOCOL

Since this is an agent team (not sub-agents):

### SendMessage Usage
- **Team lead ↔ agents:** Via SendMessage tool
- **Agent status updates:** Via SendMessage with summary
- **Handoff notifications:** "Phase N complete, deliverable ready at [path]"
- **Error escalation:** "BLOCKING: [issue], need guidance"

### File-Based Handoffs
- Agent writes output file
- Sends message: "Deliverable ready: [file path]"
- Next agent reads file, proceeds
- No inter-agent file sharing (each reads from disk)

### User Checkpoints
Recommended user review points:
1. After Phase 0 (content selection) — verify A2.1-A2.10
2. After Phase 1 (build plan) — verify concreteness, container width priority
3. After Phase 2 (HTML build) — spot-check container width, soul compliance
4. After Phase 4 (verdict) — review decision matrix application

---

## 12. TIMELINE GANTT VISUALIZATION

```
Hour 0                    1                    2                    3                    4
├─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤

PHASE 0 (Content Selection)
├──────────► [30 min]

PHASE 1 (Planning -- OPUS)
         ├──────────────────────────────────────────────────────────────► [90 min]

PHASE 2 (Build Execution)
                                                                       ├──────────────────────────────────────────────────────────────────────────────────────► [100 min]

PHASE 3 (Parallel Auditing)
                                                                                                                                                                ├─ programmatic [10 min] ─►
                                                                                                                                                                ├─ perceptual [40 min] ───────────────────────────►

PHASE 4 (Sequential Evaluation)
                                                                                                                                                                                                          ├─ comparative [30 min] ─────────►
                                                                                                                                                                                                                                         ├─ novelty [20 min] ──►
                                                                                                                                                                                                                                                               ├─ verdict [20 min] ──►

TOTAL ELAPSED: ~4.5 hours (with parallelization in Phase 3)
```

---

## 13. FINAL CHECKLIST (Pre-Execution)

**Before launching team:**
- [ ] All 8 agent prompts prepared
- [ ] Output directory created: `ephemeral/middle-tier-plan/`
- [ ] Experiment directory created: `ephemeral/middle-tier-experiment/`
- [ ] HTTP server ready for Playwright (port 8000)
- [ ] Variant B file location verified: `ephemeral/phase-d-execution/builds/variant-b-weak-perm.html`
- [ ] Showcase files location verified: `design-system/validated-explorations/density/DD-006-fractal.html`
- [ ] M1 override status confirmed (skill STILL says "sample 2-4" as of 2026-02-15)
- [ ] Two-Instance Pattern understood (planner OPUS, builder Sonnet, NO re-reading)
- [ ] Container width priority communicated (940-960px NON-NEGOTIABLE)
- [ ] Recovery protocols ready (if builder fails to write file)

**User commitment required:**
- [ ] 4.5-hour time budget confirmed
- [ ] Experiment objective understood (test whether 8-10 mechanisms produce "designed" feeling)
- [ ] Decision matrix reviewed (SUCCESS/PARTIAL/FAILURE criteria)
- [ ] Post-experiment actions planned (F1/F2/F3 sections)

---

## APPENDIX A: AGENT DEPENDENCIES (Graph)

```
content-selector
    ↓
    └──→ 01-content-selection.md
            ↓
planner (OPUS)
    ↓
    └──→ 02-build-plan.md
            ↓
builder
    ↓
    └──→ middle-tier-page.html
            ↓
            ├──→ programmatic-auditor ──→ 03-programmatic-audit.md ──┐
            │                                                          │
            └──→ perceptual-auditor ────→ 04-perceptual-audit.md ────┤
                                                                       │
                                                                       ├──→ verdict-synthesizer
                                                                       │         ↓
            ┌──────────────────────────────────────────────────────────┘    07-VERDICT.md
            │
            ├──→ comparative-auditor ───→ 05-comparison-report.md ────┐
            │                                                          │
            └──→ novelty-evaluator ─────→ 06-novelty-assessment.md ───┘
```

---

## APPENDIX B: AGENT COST ESTIMATES

Assuming:
- Opus: $15/1M input tokens, $75/1M output tokens
- Sonnet: $3/1M input tokens, $15/1M output tokens

| Agent | Model | Input Tokens | Output Tokens | Cost |
|-------|-------|--------------|---------------|------|
| content-selector | Sonnet | 3,000 | 2,500 | $0.05 |
| planner | **Opus** | 25,000 | 5,000 | **$0.75** |
| builder | Sonnet | 8,000 | 4,000 | $0.08 |
| programmatic-auditor | Sonnet | 5,000 | 1,500 | $0.04 |
| perceptual-auditor | Sonnet | 4,000 | 2,000 | $0.04 |
| comparative-auditor | Sonnet | 6,000 | 1,500 | $0.04 |
| novelty-evaluator | Sonnet | 8,000 | 1,500 | $0.05 |
| verdict-synthesizer | Sonnet | 6,000 | 2,000 | $0.05 |

**Total estimated cost: ~$1.10** (Opus planner dominates at $0.75)

**Cost optimization:** Opus only for planner (creative composition). All execution/audit roles use Sonnet (cost-effective, per memory).

---

## APPENDIX C: FAILURE MODES FROM PHASE D

Learning from Phase D failures to avoid repetition:

| Phase D Issue | Frequency | Mitigation in This Design |
|--------------|-----------|---------------------------|
| **Container width violation** | 4/5 pages | Container width enforcement (builder) + programmatic verification |
| **Always-load protocol skipped** | 1/5 (Track 1) | Mandatory reading list in builder prompt (prohibitions + tokens BEFORE any CSS) |
| **Weak permission had zero effect** | Variant B | No permission framing needed -- direct M1 override instead |
| **Prose-only limited mechanisms** | All variants | Mixed content requirement (content-selector enforces A2.3-A2.7) |
| **Mechanism ceiling (6 vs 8)** | Variant A | Per-category minimum ensures 5+ deployment, natural landing 8-10 |
| **CPL violations** | Variant A | Programmatic check at 1440px viewport |

---

*End of Team Design Document. This structure applies all critical lessons from memory, enforces the Two-Instance Pattern, protects container width (THE #1 failure mode), and provides clear recovery protocols. Total execution time: 3.75-4.5 hours with 8 agents (1 Opus, 7 Sonnet). Estimated cost: ~$1.10.*
