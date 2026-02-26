# FLAGSHIP EXECUTION PROMPT -- Research Synthesis Page

---

# LAYER 1: CONVICTION

You are building a page that embodies confident, unhurried editorial authority.

The page explains how 337 research findings became 5 design principles. Its form must DEMONSTRATE the principles it describes -- density as rhythm visible in its own density flow, layout as choreography visible in its own reading path, whitespace as design element visible in its own spatial choices.

This self-referential quality is the page's soul. When a reader finishes, they should feel they EXPERIENCED the principles, not just read about them.

## What Beauty Means Here

Walking four resolved tensions: Temperature (warm not soft), Weight (heavy not oppressive), Density (rich not cluttered), Decoration (intentional not decorative). Every mechanism you deploy must serve the CONTENT'S needs, not demonstrate vocabulary breadth. If you cannot articulate why a mechanism belongs in a specific location, it does not belong there.

Perceptual sequence: 0-1s Arrival (orientation), 1-2s Recognition (navigation), 2-3s First delight (unexpected density), 3-5s Pattern detection (mechanisms become visible system).

## What "Designed" Means

Designed has two dimensions: vocabulary fluency (knowing mechanisms) and compositional fluency (choosing mechanisms that EXPRESS a coherent concept). Both are necessary. Neither is sufficient alone. Twelve mechanisms deployed independently is "formatted." Eight mechanisms encoding the same semantic through different channels is "designed."

## The Builder's Creed

You are CONSTRUCTING a composition, not discovering one. Multiple valid layouts exist for this content. Your metaphor is chosen, not found. The tension you identify is constructed through your questioning. Restraint is a richness driver: richness follows a concave curve -- it increases with complexity up to a point, then DECREASES as complexity overwhelms spatial confidence. The crown jewel signal: content DEMANDED the structure. Zero components feel forced.

5 scales is the mathematical ceiling -- beyond 5, add channels (color, border, type) not levels. PA-05 has absolute priority over scale depth: 2 scales scored 4/4; 4 scales scored 1.5/4. WARNING: Concept quality does NOT predict product quality. The ceiling experiment scored 12/12 concept, 9/9 novelty, and produced a 1.5/4 product. Execution discipline matters more than creative ambition.

## NON-NEGOTIABLE KILL RULES

Violation of ANY rule below = entire build rejected. No exceptions. No "close enough."

| ID | Rule | Test |
|----|------|------|
| K1 | Container width: 940-960px | Measure computed max-width of .container or main content wrapper |
| K2 | Content-to-void: >= 70% of total scroll height must be content | Scroll through page in viewport-height increments at 1440px. Content = text, tables, code, diagrams. Void = bare background. |
| K3 | Max contiguous void: no 2+ consecutive viewport-height positions below 30% content | Same scroll-through test. 1 position below 30% = acceptable breathing zone. 2+ consecutive = FAIL. |
| K4 | Header: <= 20% of first viewport height (<=288px at 1440px) | Measure header element total height including padding |
| K5 | Designed moment past 50%: at least 1 section using 3+ mechanisms at high intensity must appear in the second half of the page | Identify all visual peak sections. Map their scroll positions. At least 1 must be below 50%. |
| K6 | Soul: border-radius: 0 on every element, box-shadow: none on every element, no gradients, no pure #000/#FFF | Grep CSS for violations |
| K7 | Max spacing per property: no margin or padding value exceeds 96px (--space-max-zone) | Grep CSS for pixel values > 96 |
| K8 | Footer present with meaningful content | Check for footer/closing section with text content. Missing footer = FAIL. |

**K1-K8 are your FIRST check after every pass. If any fail, FIX before proceeding.**

---

# LAYER 2: EXECUTION SPEC

REMEMBER: Your mission is beauty, not compliance. The rules below are guardrails -- they prevent failure but do not define success. Success is a page where form and content are inseparable.

## Content

**Source:** `design-system/research/RESEARCH-SYNTHESIS.md` (384 lines). Expand to ~2,700 words using R1-R5 headers, research/CLAUDE.md (intro), 05-COMPLETE-ROADMAP.md (closing). All expansion from EXISTING files.

## Density Map (3 Zones, CRESCENDO with EXHALE)

**TOP:** Intro + Master Insight pullquote + Principles 1-2 (tables + code block). Sparse -> building. 4-5 mechanisms.
**MIDDLE:** Principles 3-5 + 3 Conflict Resolutions + Architecture Matrix. PEAK density. 11-row component table is visual climax. 5-6 mechanisms.
**BOTTOM:** Top 10 Findings + Anti-Patterns + Sequences + Hypotheses + Closing. Exhale. 4-5 mechanisms.

## Mechanism Deployment

**Target:** 12-14 mechanisms. **Hard cap:** 14.

**Per-category minimum (GATE -- all 5 must be met):**
- Spatial (S): 1+ from {#5 dense/sparse, #6 width variation, #15 bento grid}
- Hierarchy (H): 1+ from {#1 border-weight, #4 spacing compression, #11 type scale}
- Component (C): 1+ from {#2 two-zone DNA, #9 color encoding, #10 border-left, #17 code block}
- Depth/Emphasis (D): 1+ from {#3 solid offset, #7 zone backgrounds, #16 drop cap}
- Structure/Nav (N): 1+ from {#8 scroll witness, #12 progressive disclosure, #13 dark header, #14 footer, #18 data table}

**Distribution (SELF-CHECK):**
- Max 4 mechanisms per viewport section
- Every third of the page has >= 2 distinct mechanisms
- Document 5+ mechanisms you CONSIDERED and REJECTED (with reasoning per rejection)

## Transition Grammar (GATE)

Every zone boundary MUST use exactly one transition type:
1. **HARD CUT** (3px primary border): content changes DOMAIN
2. **SPACING SHIFT** (padding change only): content changes INTENSITY
3. **CHECKPOINT** (labeled structural element): content changes PHASE

"No transition" (just empty space) is NOT valid. List all boundaries and their assigned type.

## Table Treatments (SELF-CHECK)

10 tables. MUST vary: Character table (11-row, Principle 3) = FEATURED, full-width, 4px border. Dimension/pattern tables = compact, 1px. Reference tables (Top 10, Anti-Patterns) = full-width, 3px header. Hypothesis tables (3x5) = compact, de-emphasized. Architecture matrix = moderate.

## 5-Pass Build

### Pass 1: SKELETON (spatial structure, zero mechanisms)
Produce TWO competing skeleton variants. Lead selects the one with better spatial confidence (K1-K4 + content-to-void). Write full HTML with all content placed. Use ONLY tokens.css values for spacing. No mechanism CSS. Skeleton must be readable as plain document.

**Artifact:** skeleton-a.html + skeleton-b.html. Lead selects one → skeleton.html. Both must pass K1-K4, K6-K8.

### Pass 2: MECHANISMS (deploy to skeleton)
Apply 12-14 mechanisms to the skeleton. Each deployment must answer: "Why THIS mechanism at THIS location for THIS content?" Use transition grammar at all zone boundaries.

**Artifact:** mechanisms.html. Must pass K1-K8 including K5 (designed moment past 50%).

### Pass 3: REFINEMENT (distribution, restraint, polish)
Review mechanism distribution. Redistribute any concentrated mechanisms. Verify table treatment variation. Apply restraint: for each mechanism, ask "Would removing this make the page worse?" If no, remove it.

**Artifact:** refined.html (or final.html if passes 4-5 are skipped).

### Pass 4 (OPTIONAL): INTENTIONALITY
Add cross-references between principles. Ensure the self-referential quality is STRUCTURAL not TEXTUAL (backgrounds, borders, spacing encode principles -- not labels saying "notice the density rhythm here").

### Pass 5 (OPTIONAL): FINAL POLISH
Self-audit using PA-01 through PA-05. Fix anything that bothers you on first glance.

**Artifact:** flagship.html (final deliverable).

## Pre-Submission Self-Check (GATE)

- [ ] K1-K8 all pass | [ ] 12-14 mechanisms, hard cap 14 | [ ] All 5 categories represented
- [ ] Zone boundaries have transition types | [ ] Each page third >= 2 mechanisms | [ ] No viewport > 4 mechanisms
- [ ] 5+ rejected mechanisms documented | [ ] Content from existing files | [ ] Table treatments varied
- [ ] Visual structure communicates without text labels
- [ ] Self-scroll: Scrolled full page top-to-bottom at 1440px. No viewport-height of empty space. Density arc matches CRESCENDO-with-EXHALE plan.

**Before submitting, re-read Layer 1. Would you put your name on this?**

---

# LAYER 3: COORDINATION

## Agent Roles

| Agent | Role | Deliverable |
|-------|------|-------------|
| **Planner** | Content expansion + density map + mechanism plan | `plan.md` with expanded content, zone assignments, mechanism selections |
| **Builder** | 5-pass HTML construction | `flagship.html` (final page) |
| **Lead** | Checkpoint reviews, pass-by-pass GO/REVISE decisions | Review notes after each pass |
| **PA Auditors** (9+) | Mode 4 perceptual audit (fresh-eyes, screenshot-based) | Individual audit reports |

## Communication Protocol

**ALL communication instructions are MUST, not MAY.**

1. Builder MUST send a message to lead after completing each pass. Message MUST include: which pass completed, page height in px, content-to-void percentage, mechanism count, K1-K8 status (PASS/FAIL with measured values), any concerns.
2. Lead MUST respond with GO (proceed to next pass) or REVISE (specific items to fix before proceeding).
3. Builder MUST NOT proceed to the next pass without GO from lead.
4. If builder encounters a spatial concern at any point, builder MUST message lead immediately (do not defer to later pass).
5. If zero SendMessage messages received from builder by Gate 1: lead MUST PAUSE build and prompt builder.
6. Before ANY fix: classify root cause as CSS / CONTENT / ARCHITECTURE. CSS fixes for ARCHITECTURE problems are PROHIBITED.
7. Max 2 fix cycles per gate. If still failing after 2 cycles: ABORT and document as known defect.

## File Ownership

| File | Owner | Others May |
|------|-------|-----------|
| `plan.md` | Planner | Read only |
| `flagship.html` | Builder | Read only |
| `audit-*.md` | Each PA auditor | Read only |
| `review-notes.md` | Lead | Read only |

## Checkpoint Gates

| Gate | When | Artifact Required | Pass Criteria |
|------|------|-------------------|---------------|
| G0 | Before build | `plan.md` with content inventory + zone map + height estimates | Content volume verified: ~2,700 words across 3 zones. Each zone >= 3 paragraphs or 2+ components. Planner MUST estimate total page height and per-zone heights (words x density factor: sparse=1.5px/word, dense=1.0px/word). Structural overhead < 35%. |
| G1 | After Pass 1 | `skeleton.html` | K1-K4 pass. Content-to-void >= 60% (pre-mechanism threshold). Skeleton readable as plain document. |
| G2 | After Pass 3 | `refined.html` | K1-K8 all pass. 12-14 mechanisms deployed. All 5 categories. Distribution verified. |
| G3 | Pre-audit | Builder self-check (full checklist above) | All self-check items marked. Builder genuinely uncertain about audit outcome (not hoping it passes). |

## Post-Audit Fix Protocol

1. PA weaver categorizes findings: STRUCTURAL (rebuild section) / COSMETIC (CSS tweak) / SKIP.
2. Builder fixes ALL STRUCTURAL, TOP-3 COSMETIC. Max 2 fix cycles.
3. Lead verifies fixes pass K1-K8 after each cycle.
4. If STRUCTURAL findings remain after 2 cycles: document as known defects, do NOT force-fix.

---

# LAYER 4: REFERENCE LIBRARY

## Design System File Paths

| File | Purpose | Lines |
|------|---------|-------|
| `design-system/compositional-core/identity/prohibitions.md` | 24 prohibitions (MUST READ FIRST) | 420 |
| `design-system/compositional-core/vocabulary/tokens.css` | 65 tokens, :root block | 184 |
| `design-system/compositional-core/grammar/mechanism-catalog.md` | 18 mechanisms + transition grammar + restraint protocol | 1,219 |
| `design-system/compositional-core/guidelines/semantic-rules.md` | 7 semantic gaps + content density floors | 530 |
| `design-system/compositional-core/components/merged-components.css` | Component CSS | ~1,196 |
| `design-system/research/RESEARCH-SYNTHESIS.md` | Content source | 384 |

## Key Tokens (full reference in tokens.css)

Colors: --color-primary #E83025, --color-background #FEF9F5, --color-text #1A1A1A. Fonts: --font-display Instrument Serif (headings ONLY), --font-body Inter, --font-mono JetBrains Mono. Spacing: --space-4 16px, --space-8 32px, --space-12 48px, --space-16 64px (max within-zone), --space-24 96px (absolute max). Borders: 4px structural, 3px accent, 1px micro. Zones: sparse #FEF9F5, dense #FFFFFF, breathing #FAF5ED, bedrock #1A1A1A.

## 18 Mechanisms (full reference in mechanism-catalog.md)

**S** (Spatial): #5 dense/sparse alternation, #6 width variation, #15 bento grid
**H** (Hierarchy): #1 border-weight gradient (4px/3px/1px), #4 spacing compression, #11 type scale (~1.5x)
**C** (Component): #2 two-zone DNA, #9 color encoding, #10 border-left signal, #17 code block
**D** (Depth): #3 solid offset (::after), #7 zone backgrounds, #16 drop cap (::first-letter)
**N** (Structure): #8 scroll witness, #12 progressive disclosure, #13 dark header, #14 footer mirror, #18 data table

## Gate Runner + Builder Calibration

| File | Purpose |
|------|---------|
| `spatial-gate-runner.js` | Programmatic K1-K8 enforcement. Lead runs after each pass: `await runSpatialGate(page)`. Outputs structured PASS/FAIL with measured values. |
| `crown-jewel-exemplars.md` | 6 CSS snippets from CD-006 (39/40) + DD-006 showing multi-mechanism encoding in practice. Builder reads before Pass 2. |

## Content Sources (full map in content-selector-report.md)

Primary: RESEARCH-SYNTHESIS.md (lines 125-384). Expansion: research/CLAUDE.md for intro (300-400 words), R1-R5 headers for principle depth (varying), 05-COMPLETE-ROADMAP.md for closing (200-300 words). Verbatim: Master Insight pullquote (line 134), all tables, sequence diagrams, hypotheses.

---

**END FLAGSHIP EXECUTION PROMPT**
