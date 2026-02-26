# Middle Experiment Extraction — Reference Template for Ceiling Execution

**Purpose:** Extract everything about how the Middle-tier experiment was EXECUTED to serve as the structural template for the Ceiling experiment prompt.

**Files analyzed:** 9 files, ~42,300 lines
**Extraction date:** 2026-02-16
**Role:** middle-experiment-extractor

---

## 1. MIDDLE EXECUTION PROMPT STRUCTURE

The Middle-tier experiment used a **MASTER EXECUTION PROMPT** to provide complete self-contained instructions to the planner agent.

### Document discovered at:
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/session-insights/24-FINAL-MASTER-MIDDLE-TIER-EXECUTION-PROMPT.md`
- **1,760 lines total** (~25K tokens)
- Labeled as "FINAL (post-adversarial integration)"
- Synthesized from: 5 research extractions (~5,300 lines), 4 adversarial reviews (~2,300 lines), 2 format references (~2,260 lines), 290 files

### Structure: 10 sections

| Section | Purpose | What Ceiling Should Keep/Change |
|---------|---------|----------------------------------|
| **0: Mission Statement** | What the experiment is, what to produce, pipeline position | KEEP structure. CHANGE: update to Ceiling tier definition, add metaphor derivation requirement |
| **1: Identity and Constraints** | 22 prohibitions (8 absolute + 12 conditional + 2 meta), 5 soul pieces | KEEP verbatim (identity is universal) |
| **2: Vocabulary** | Complete token set (65 tokens), font loading, compliance requirement | KEEP verbatim (vocabulary is universal) |
| **3: Mechanism Vocabulary** | All 18 mechanisms with CSS patterns, categorization | KEEP but ADD mechanism interaction requirements for Ceiling |
| **4: Build Pipeline** | 10-step workflow from token compliance through build quality | KEEP structure. CHANGE: insert metaphor derivation between steps 2-3, raise mechanism counts |
| **5: Validation Framework** | Quick Check (15 items), full checklist (138 items), decision matrix | KEEP structure. ADD dual PA protocol, blind novelty evaluation |
| **6: Context and Lessons** | Phase D findings, Variant B baseline, tier model table | KEEP but UPDATE tier positioning (Middle = validated, Ceiling = current test) |
| **7: Reference Examples** | CSS reference blocks for callouts, zones, tables, code | KEEP and ADD Ceiling-specific examples (fractal, geological density) |
| **8: Anti-Patterns and Failure Modes** | Common failures, preventions | KEEP and ADD Middle-tier known defects as lessons |
| **9: Content Requirements** | A2 criteria (10 items), A3 criteria (3 items) | KEEP structure. CHANGE: raise complexity requirements for Ceiling |
| **10: Success Criteria** | Decision matrix, SUCCESS/PARTIAL/FAILURE conditions | KEEP structure. CHANGE: thresholds (PA-05 4/4 → must exceed, novelty 3/3 required) |

### Key organizational principle discovered:

**"Binary rules achieve 100% agent compliance. Judgment rules achieve ~0%."**

Every instruction is either:
- **BINARY** (PASS/FAIL with measurable threshold) — agent can verify independently
- **JUDGMENT** (requires interpretation) — explicitly labeled, err toward specific evidence

This principle runs through the ENTIRE Middle prompt. The Ceiling prompt MUST maintain this.

---

## 2. PLANNER SLICE (What the Planner Actually Received)

**File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/middle-tier-experiment/planner-slice.md` (430 lines)

### What it included:

1. **Universal Block (23 lines):**
   - Container width 940-960px (NON-NEGOTIABLE, in caps, first thing)
   - 8 soul constraints (numbered list, absolute)
   - Typography trinity (3 fonts)
   - Border widths (4px/3px/1px, NEVER 2px)
   - Output file path (must use Write tool, emphasized)

2. **Mission (65 lines):**
   - What Middle-tier is (pattern-based deployment, no metaphor)
   - Pipeline position (Phase D+++)
   - What Middle REPLACES (skips Phases 1-3 of tension-composition)
   - Anti-gravity exemption (R1/R3/R5/R6 exempt for Middle)

3. **Sequencing (15 lines):**
   - NON-NEGOTIABLE reading order:
     1. prohibitions.md + tokens.css FIRST (B8.2 — INSTANT FAIL if skipped)
     2. Content selection (BEFORE mechanisms)
     3. mechanism-catalog.md
     4. Pattern selection
     5. Per-category deployment

4. **M1 Override (10 lines):**
   - "IGNORE 'sample 2-4 mechanisms' wherever you see it"
   - Deploy AT LEAST 1 from each of 5 categories (explicit list)
   - Each mechanism counts toward EXACTLY ONE category

5. **Governing Principles (25 lines):**
   - Binary vs judgment rules
   - Richness = vocabulary fluency
   - Peak richness at content-mechanism FIT
   - Tier model = hypothesis, not fact
   - How to handle judgment rules (cite specific evidence)

6. **10-Step Build Workflow (340 lines):**
   - Step 1: Token Compliance (B8 — read prohibitions + tokens FIRST)
   - Step 2: Pipeline Routing (tier, pattern, skip phases)
   - Step 3: Guardrail Compliance (9 guardrails with exact values)
   - Step 4: Container Width (960px CSS block + priority order documentation)
   - Step 5: Mechanism Breadth (1+ per category)
   - Step 6: Mechanism Count Verification (7-12 range, 2+ reinforcing pairs)
   - Step 7: Mechanism Justification ("I deploy X BECAUSE [content feature]")
   - Step 8: Fractal Coherence (2 scales for Middle, table format)
   - Step 9: Soul Compliance (automated)
   - Step 10: Build Quality (landmarks, zone backgrounds, WCAG, borders)

7. **Critical-10 Checklist (12 lines table):**
   - 10 items that = INSTANT FAIL if violated
   - Always-load protocol, M1 per-category, phases skipped, container width, priority documented, 5 categories, 2+ pairs, border-radius: 0, box-shadow: none, verdict stated

8. **Tier Model Table (6 lines):**
   - Floor/Middle/Ceiling/Flagship with mechanism counts, CSS lines, metaphor Y/N, categories, scales

9. **Phase D Findings (30 lines):**
   - What worked (Variant B 18/19, 4/5 novelty)
   - What failed (container width #1, always-load skip, prose-only content, "sample 2-4")
   - Variant B baseline (7 mechanisms across 5 categories)

10. **Middle-Tier Selection Logic (25 lines):**
    - Content feature → mechanism mapping table
    - 5 most universal mechanisms (should be included)

11. **Example Reinforcing Pairs (12 lines):**
    - Zone Pair (#7 + #10), Component Pair (#2 + #11), Emphasis Pair (#10 + #3)

12. **Transition Types (8 lines):**
    - SMOOTH (48px + 1px separator)
    - BRIDGE (64px + breathing zone background)
    - BREATHING (80px + 3px structural border)

13. **Component Sequencing Rules (10 lines):**
    - Never stack same-velocity
    - Temperature flow (Warm → Neutral → Cold, NEVER Warm → Cold)
    - Max per viewport (2 callouts, 2 code blocks, 3 heavy total)

14. **Concrete CSS Reference Blocks (25 lines):**
    - Callouts (full CSS with label + body structure)
    - Section zones (sparse/dense/breathing padding + backgrounds)

15. **Common Build Failures Table (8 lines):**
    - Failure → Prevention mapping

16. **Compositional Rules Summary (35 lines):**
    - 41 rules collapsed into 10 categories (Zone Nesting, Spacing Rhythm, Background Zones, etc.)

17. **Appendix B: Builder Blocks (60 lines):**
    - Block 1: Soul Checklist (12-item checklist to copy)
    - Block 2: File-Write Enforcement (3 lines: MUST use Write tool)
    - Block 3: Container Width Enforcement (4 lines: 940-960px NON-NEGOTIABLE)
    - Block 4: M1 Override (8 lines: IGNORE "sample 2-4", use per-category)

18. **Anti-Satisficing Note (15 lines):**
    - Goal is NOT minimum thresholds (floors, not targets)
    - Push toward 9-10 mechanisms with genuine justification

19. **Plan Output Format (15 lines):**
    - 7 required sections (CONTENT, SECTION MAP, MECHANISM TABLE, TRANSITION TABLE, REINFORCING PAIRS, FRACTAL TABLE, BUILDER BLOCKS)
    - Example of WRONG vs CORRECT specificity

20. **Type Scale Conflict Resolution (5 lines):**
    - Use prompt values, NOT tokens.css (explicit override table)

21. **Zone Dense Color Conflict Resolution (3 lines):**
    - Use #FEFEFE, NOT #FFFFFF (prohibition violation fix)

22. **Template vs Vocabulary Note (6 lines):**
    - CSS blocks are MECHANISM-LEVEL vocabulary
    - Reuse patterns, create YOUR class names
    - Novelty assessment compares against showcase pages, not prompt examples

### What Ceiling planner slice MUST change:

1. **Mission:** Add metaphor derivation requirement (Phase 1, NEW)
2. **M1 Override:** Raise per-category minimums (S:2+, H:2+, C:3+, D:2+, N:2+)
3. **Step 8 Fractal:** Raise to 3+ scales (Page, Section, Component minimum)
4. **Step 7 Justification:** Add mechanism INTERACTION requirement (for 3+ pairs, document how they reinforce)
5. **Critical-10:** Update for Ceiling gates (metaphor derivation, 3+ scales, interaction pairs)
6. **Tier Model:** Position Middle as validated baseline, Ceiling as current test

---

## 3. BUILD PLAN (What the Plan Looked Like)

**File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/middle-tier-experiment/02-build-plan.md` (676 lines)

### Structure (9 sections + appendices):

**Header (8 lines):**
- Pattern, Tier, Mechanisms (12 deployed), Fractal Scales (2), Target CSS Lines (350-500)

**Section B8.2: Always-Load Protocol Confirmation (15 lines):**
- Files read in exact sequence (4 files)
- Line counts noted for each

**Section B2.5: Container Priority Documentation (25 lines):**
- Priority order (numbered 1-4, NON-NEGOTIABLE in caps)
- CSS block with max-width: 960px and padding

**Section 1: CONTENT (115 lines):**
- Full content text with section breaks marked
- === SECTION A: Page Header === format
- 6 sections total (A: Dark Header, B: Overview, C: Architecture, D: Installation, E: Security, F: Footer Mirror)

**Section 2: SECTION MAP (145 lines):**
- Per-section breakdown:
  - Summary (what it contains)
  - Mechanisms (which ones, by number)
  - Padding (exact CSS values with var() tokens)
  - Background (token + hex for reference)
  - Border (if any, exact CSS)
  - Typography (h3/h4 treatments)
  - Special component CSS (callouts, diagrams, tables with full CSS blocks)

**Section 3: MECHANISM TABLE (80 lines):**
- Table format: # | Mechanism | Section | CSS Property | Exact Values
- 12 rows (one per deployed mechanism)
- Category breakdown at bottom (S:1, H:3, C:4, D:2, N:3)

**Section 4: TRANSITION TABLE (25 lines):**
- Location | From → To | Type | CSS Values
- 5 transitions (A→B, B→C, C→D, D→E, E→F)
- Types used: SMOOTH x2, BRIDGE x2, BREATHING x1
- Meets 3+ minimum

**Section 5: REINFORCING PAIRS (95 lines):**
- 3 pairs documented (#1+#9, #5+#7, #11+#4)
- Each pair has:
  - Pair name
  - Table showing mechanism values + shared semantic
  - CSS evidence (exact selectors + values)
  - Explanation paragraph

**Section 6: FRACTAL TABLE (35 lines):**
- Scale | Pattern Expression | CSS Evidence
- 2 rows (Page, Component)
- F-pattern expressed at both scales with concrete examples

**Section 7: BUILDER BLOCKS (45 lines):**
- Block 1: Soul Checklist (12 items verbatim)
- Block 2: File-Write Enforcement (3 lines: MUST use Write tool)
- Block 3: Container Width Enforcement (4 lines: 940-960px)
- Block 4: M1 Override (redundant at this point, but included)

**MECHANISM JUSTIFICATION (B5) (140 lines):**
- Deployed (12 mechanisms): Each has "I deploy [name] BECAUSE [content feature] at [location]"
- Rejected (5 mechanisms): Each has "I reject [name] BECAUSE [reason it doesn't fit THIS content]"

**MECHANISM INTERACTIONS (B4.4) (10 lines):**
- Reference to Section 5 (REINFORCING PAIRS)

**MECHANISM PERCEPTIBILITY (B4.5) (25 lines):**
- Table format: Mechanism | State A | State B | Difference | Pass?
- 7 checks verifying >= 10% OR >= 8px

**GUARDRAIL VERIFICATION (20 lines):**
- Table format: Guardrail | Required | Planned Value | Status
- 9 guardrails checked

**PA-05 VERIFICATION (20 lines):**
- Table format: ID | Requirement | Evidence | Status
- 4 sub-criteria (PA-05a/b/c/d) with detailed evidence

**COMPONENT SEQUENCING (R5) (15 lines):**
- Section velocity mapping table (A-F with FAST/SLOW)
- Sequence check (no FAST+FAST adjacency except E→F footer)

**RESPONSIVE STRATEGY (768px) (15 lines):**
- Container, tables, code blocks, header/footer adjustments

**:root BLOCK (for builder to copy) (80 lines):**
- Complete CSS custom property definitions
- Colors, typography, spacing, borders, syntax highlighting

**CRITICAL-10 CHECKLIST (15 lines):**
- Table format: # | Item | Status | Evidence
- 10 checks

**ANTI-SATISFICING NOTE (20 lines):**
- Explains why 12 mechanisms (exceeding 8-10 target) is justified
- Content-based reasoning for each, not padding for count

### What Ceiling build plan MUST add:

1. **Metaphor Derivation Section** (between B8.2 and Section 1):
   - Multi-axis questioning results (4+ axes explored)
   - Tension identification (2-3 tensions)
   - Metaphor collapse (the chosen metaphor + why)
   - Pattern selection (justified by metaphor)

2. **Mechanism Selection Rationale** (in Section 3):
   - Not just content feature → mechanism
   - But METAPHOR + content feature → mechanism
   - "I deploy [mechanism] BECAUSE [metaphor dimension] + [content feature]"

3. **Fractal Table** (Section 6):
   - 3+ scales (Page, Section, Component minimum)
   - Pattern expression at each scale with metaphor connection

4. **Interaction Depth** (Section 5):
   - Not just 2-mechanism pairs
   - But 3+ mechanisms reinforcing same semantic dimension
   - Document how ALL mechanisms in the set work together

---

## 4. WHAT WORKED (Successes to Replicate)

### From VERDICT (07-VERDICT.md):

**PA-05: DESIGNED (4/4 sub-criteria)**
- PA-05a: 4 non-default layout elements (dark header, orange callout, black diagram, styled tables)
- PA-05b: 2.0x padding range ratio (64px/32px = exactly at threshold)
- PA-05c: Visual hierarchy under blur (dark header primary, diagram secondary)
- PA-05d: >= 15% compositional CSS (estimated from visual evidence)

**Novelty: 3/3 STRONGLY NOVEL**
- D3.1 Structural fingerprint: distinct 6-block simple arc vs DD-006 uniform vs CD-006 complex
- D3.2 CSS value overlap: ~20% (below 30% threshold)
- D3.3 Mechanism combination: unique triple (callout + diagram + benefits), border-weight gradient 4px→1px

**Better than Variant B: YES**
- Dark header creates product identity (vs blog-post feel)
- 8 code blocks create visual anchors (vs zero)
- 6 zone backgrounds create spatial sections (vs uniform white)

**Container width: 960px (PASS)**
**Soul compliance: 7/7 (PASS)**

**Per-category coverage: S:1, H:3, C:4, D:2, N:3** (all 5 categories represented)

### Design highlights (per novelty evaluator):

**Border-weight gradient (4px → 3px → 3px → 1px) for security layer criticality encoding**
- Functional (encodes importance hierarchy)
- Novel (not in reference pages)
- Elegant (uses border weight as primary differentiator, not color or size)
- "The design highlight" — demonstrates mechanism fluency beyond template copying

### Execution efficiency:

**Team: 8 agents, flat file-bus topology, zero SendMessage**
**Wall-clock time: ~35 minutes** (vs 70-100 min predicted for Middle tier)

Why so fast:
- Per-file ownership = zero contention
- Parallel execution (Phases 3 and 4 ran 2 agents concurrently)
- No hierarchical coordination overhead

### What Ceiling should keep:

1. **Per-category mechanism selection** — produces breadth across all 5 property categories
2. **Reinforcing pairs documentation** — forces planner to think about mechanism interaction
3. **Fractal table format** — concrete CSS evidence at each scale
4. **Builder blocks in plan** — direct copy-paste reduces builder interpretation errors
5. **:root block in plan** — complete token definitions for builder to copy
6. **Flat file-bus topology** — fast, no contention, works for 8 agents

---

## 5. WHAT FAILED (Defects to Fix)

### From VERDICT (07-VERDICT.md) + Perceptual Audit:

**1. Missing Footer (CRITICAL — WOULD-NOT-SHIP)**
- **Specified:** Build plan Section F documented #14 Footer Mirror (dark background, 3px border-top, 48px padding)
- **Delivered:** Perceptual audit reports NO FOOTER VISIBLE
- **Root cause:** Flat file-bus — builder had NO mechanism to confirm deliverables with planner or ask clarification
- **Impact:** "The page just stops" — screens of blank space after content
- **Status:** REQUIRES INVESTIGATION (either builder failed to write footer HTML or CSS rendering issue)

**Fix for Ceiling:**
- Add **landmark completeness gate** at Phase 2→3 boundary
- Builder MUST confirm: "Sections A-F present. Header line X, footer line Y."
- Add **builder self-check**: "Before submission, verify all planned landmarks exist in HTML"

**2. Token Compliance (MAJOR — Cleanup Required)**
- **Measured:** 66.5% token usage (145 var refs / 218 total values)
- **Required:** >= 80%
- **Deviation:** -13.5 percentage points (73 raw hex/px values)
- **Root cause:** Builder capability gap — didn't replace hardcoded values
- **Impact:** Maintainability issue, invisible to users

**Fix for Ceiling:**
- Add **token compliance self-check** in builder prompt
- "Before submission, scan CSS for raw hex values (#...) and raw px values not in spacing scale. Replace with tokens."
- Add to Critical-10: "Token compliance >= 80% (automated scan)"

**3. CPL +2 chars (MINOR — Acceptable)**
- **Measured:** ~82 characters per line at 1440px
- **Required:** 45-80 CPL
- **Deviation:** +2 chars (2.5% over spec)
- **Root cause:** Paragraph font-size 18px instead of expected 16px
- **Impact:** MINIMAL (perceptual audit noted no readability issues)

**Fix for Ceiling:**
- Add **CPL verification formula** in builder prompt
- "CPL = (container width - horizontal padding) / (font-size * 0.5). Target 45-80 chars. At 960px container, 32px padding each side, 16px font: (960-64)/(16*0.5) = 112 chars / word ≈ 56 chars. Use formula to verify BEFORE building."

### From Perceptual Audit (04-perceptual-audit.md):

**WOULD-NOT-SHIP:**
- Missing footer (above)

**LOOKS-WRONG:**
- **Heading spacing ratio < 1.5:1** — space above headings appears equal to space below, violating minimum for clear content association (PA-SEM-01)
  - **Fix:** Add as BINARY rule: "Space above heading MUST be >= 1.5x space below. h3 with 16px below → 24px+ above."

- **Top-heavy weight distribution** — visual weight concentrates in header, dissipates through rest of page (PA-10, PA-32)
  - **Fix:** Add as requirement: ">= 2 visual focal points in bottom 50% of page scroll"

**COULD-BE-BETTER:**
- **Monotonous rhythm** — spacing patterns repeat without variation, creating mechanical rather than musical flow (PA-17, PA-41)
  - **Fix:** Add as requirement: ">= 2 spacing deviations from base pattern (intentional variations)"

- **Limited visual drama** — only 2 moments create visual interest (orange callout, black diagram)
  - **Fix:** Ceiling naturally addresses this through richer mechanism deployment (12-15 mechanisms vs 12)

- **Table compression** — description column text feels cramped (PA-02, PA-14)
  - **Fix:** Document in anti-patterns: "Tables with long prose descriptions (>50 chars) need extra column padding"

- **Metadata text size** — header metadata line feels like fine print (PA-08)
  - **Fix:** Add to typography guidelines: "Metadata should be readable (12px minimum), not hidden (10px or below)"

### Perceptual quality ceiling:

**From perceptual auditor:**
> "One designer, but a designer following rules rather than feeling the page. Everything is consistent but there's no spark — it reads like 'I applied the specifications correctly not composition felt through.'"

**Ship verdict:** YES WITH RESERVATIONS (functional, readable, professional) but not PROUDLY (lacks memorable moments)

**Translation:** Middle achieves **vocabulary fluency** (knows mechanisms, deploys them correctly) but NOT **compositional fluency** (using mechanisms to express a coherent concept).

**Ceiling's task:** Cross from "professionally stiff" to "compositionally confident" through metaphor-driven mechanism selection that creates unified spatial atmosphere.

---

## 6. PA RESULTS (How Perceptual Audit Was Structured)

**File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/middle-tier-experiment/04-perceptual-audit.md` (380 lines)

### Method: Zero-context fresh-eyes auditor

- Agent has NEVER read:
  - Build plan
  - Content selection
  - Mechanism catalog
  - Case studies
  - Any context files

- Agent views ONLY screenshots at 1440px and 768px

- Applies 48 PA questions from perceptual-auditing skill

### Structure (6 sections):

**1. Cold Look — 1440px (12 lines)**
- Gut reaction (one sentence)
- Worst thing (one sentence)
- Best thing (one sentence)
- Ship verdict (YES / YES WITH RESERVATIONS / NO)

**2. Cold Look — 768px (12 lines)**
- Same 4 questions at mobile viewport

**3. Scroll-Through Observations — 1440px (60 lines)**
- Position 0 (Top): 4 observations
- Position 720: 4 observations
- Position 1440: 4 observations
- Position 2160: 4 observations
- Positions 2880-7200: observations on blank space

**4. Scroll-Through Observations — 768px (15 lines)**
- Compression observations
- What breaks at 568px

**5. PA Questions — 1440px (200 lines)**
- 48 questions applied
- Format: **PA-XX (Question name):** Answer with specific observations

**6. PA-05 Sub-Criteria (60 lines)**
- PA-05a: Non-default layout elements (4 found, >= 2 required, PASS)
- PA-05b: Padding range ratio (2.0x, >= 2.0x required, PASS)
- PA-05c: Visual hierarchy under blur (PASS)
- PA-05d: Non-framework CSS (estimated >= 15%, PASS)
- Composite: DESIGNED (4/4 criteria)

**7. Quantitative Guardrails (40 lines)**
- Content width, typographic spacing, layout tables
- Pass/Fail for each measured value

**8. Critical Findings (80 lines)**
- Successes (5 items)
- Failures (5 items)
- Moderate Concerns (4 items)

**9. Summary Assessment (15 lines)**
- PA-05 verdict, Ship verdict, paragraph summary

### Key PA observations quoted:

**PA-01 (First thing that bothers):**
> "The page just ends. There's no designed conclusion — content stops and you scroll through screens of cream-colored emptiness. It feels unfinished."

**PA-03 (One designer or three):**
> "One designer, but a designer following rules rather than feeling the page. Everything is consistent but there's no spark — it reads like 'I applied the specifications correctly.'"

**PA-13 (Visual ending):**
> "The page just stops. Content ends mid-scroll and you're left with blank screens. No conclusion, no footer as ending marker, nothing."

**PA-45 (Single moment of good design):**
> "The red accent line under the header. It's a small detail but it does real work — creates separation, adds a moment of color confidence, and breaks the monotony of dark-to-cream transition."

**PA-SEM-03 (Why this pattern fits this content):**
> "The overall pattern — structured tables, consistent spacing, dark header establishing authority — fits because technical documentation benefits from predictability and clear information hierarchy... However, the specific choices (why 960px? why this exact spacing?) don't have clear content-driven justification. They feel like defaults applied competently rather than choices made specifically for this content."

### What Ceiling PA protocol should add:

1. **Dual PA evaluation** — Two independent fresh-eyes auditors, reconcile disagreements, identify where they diverge
2. **PA-05 must EXCEED threshold** — Not just meet 4/4, but show MARGIN (e.g., PA-05b >= 2.5x, not 2.0x exactly)
3. **Spatial atmosphere as PRIMARY question** — Not just "does it have atmosphere" but "describe the atmosphere in 3 adjectives + explain why"
4. **Metaphor detection test** — "Without reading labels, can you sense the organizing concept from visual structure alone?" (PA-44 repurposed for Ceiling)

---

## 7. NOVELTY RESULTS (How Blind Evaluation Worked)

**File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/middle-tier-experiment/06-novelty-assessment.md` (154 lines)

### Method: Visual comparison against references

- Reference pages: DD-006 (fractal exploration), CD-006 (pilot migration)
- Evaluator sees screenshots of Middle + 2 references
- Applies 3 novelty signals (D3.1, D3.2, D3.3)

### D3.1 Structural Fingerprint: NOVEL

**Comparison:**
- Middle: 6-block structure, simple sparse→dense→sparse arc, ONE featured diagram
- DD-006: 5-6 uniform demonstration blocks, REPETITIVE internal rhythm
- CD-006: 10-section structure, COMPLEX multi-pattern sequencing, MULTIPLE focal points

**Verdict:** Distinct sectioning pattern from both references.

### D3.2 CSS Value Overlap: NOVEL (~20%, below 30%)

**Overlap with DD-006:** ~15%
- Callout left border: Both 4px (shared token, expected)
- Callout padding: Middle 20px 24px, DD-006 24px (DIFFERENT)
- Code blocks: Middle dark, DD-006 light (NO OVERLAP)
- Container: Middle 960px, DD-006 1000px (DIFFERENT)

**Overlap with CD-006:** ~25%
- Callout left border: Both 4px (shared token)
- Callout padding: Middle 20px 24px, CD-006 24px 32px (DIFFERENT)
- Code block padding: Middle 24px 32px, CD-006 24px 32px (IDENTICAL — ONLY MATCH)
- Container: Middle 960px, CD-006 1100px (DIFFERENT)

**Overall:** ~20% overlap (below 30% threshold)

### D3.3 Mechanism Combination: NOVEL

**Middle's unique pairs:**
1. Triple combination: 2-zone callout + Solid Offset diagram + benefit subsections (not in either reference)
2. Border-weight gradient: 4px→3px→3px→1px across security layers (neither reference uses graduated borders)
3. Progressive disclosure: 2 installation options with padding gradient (CD-006 doesn't have progressive disclosure)

**Verdict:** While individual mechanisms overlap, SPECIFIC PAIRINGS are distinct.

### Composite Score: 3/3 NOVEL = STRONGLY NOVEL

### Perceptual Confirmation Questions (4 additional):

**PA-25 (Identify design system without header):** YES
- Flat aesthetic (border-radius: 0), sharp borders, #E83025 accents, Instrument Serif italics, cream background, 2-zone DNA — all recognizable

**PA-27 (Would you design it this way from scratch):** MOSTLY YES (70/30)
- Sparse→dense arc feels intention-shaped
- Border-weight gradient is creative
- BUT solid offset diagram feels slightly constraint-shaped (applying mechanism because available, not optimal)

**PA-44 (Organizing concept visible without labels):** PARTIALLY (60/40)
- Sparse→dense arc perceptible from whitespace
- Security border gradient reads as "layers of decreasing importance"
- BUT tables and installation steps rely on labels

**PA-45 (Single moment of good design):** YES
- **Border-weight gradient (4px → 3px → 1px)** is the standout
- Functional, novel, elegant — demonstrates mechanism fluency beyond template copying

### What Ceiling novelty protocol should add:

1. **Blind evaluation** — Evaluator receives 3 UNLABELED pages (Middle, Ceiling, 1 showcase), identifies which is which
2. **Provenance test** — Can evaluator trace visual decisions back to metaphor (not just pattern)?
3. **Metaphor detection** — Without labels, can evaluator articulate the organizing concept?
4. **Cross-tier comparison** — Compare Ceiling to Middle (same content) AND to CD-006 (Flagship reference)

---

## 8. VERDICT RECOMMENDATIONS (What Synthesizer Found)

**File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/middle-tier-experiment/07-VERDICT.md` (228 lines)

### Decision Matrix: SUCCESS

| Engagement | Novelty | Verdict |
|-----------|---------|---------|
| Designed (PA-05 = 4/4) | Novel (D3 = 3/3) | **SUCCESS** |

### SUCCESS Criteria: 7/7 PASS

| ID | Criterion | Result |
|----|-----------|--------|
| E2.1 | PA-05 at 1440px = YES | 4/4 ✅ |
| E2.2 | Better than Variant B = YES | Clear improvement ✅ |
| E2.3 | Spatial atmosphere = YES or SOMEWHAT | "YES, more than Variant B" ✅ |
| E2.4 | 5-category coverage = PASS | S:1, H:3, C:4, D:2, N:3 ✅ |
| E2.5 | Novelty >= 2 of 3 signals | D3.1/D3.2/D3.3 all NOVEL (3/3) ✅ |
| E2.6 | Container width = 940-960px | 960px exactly ✅ |
| E2.7 | Soul compliance = 7/7 | All verified ✅ |

### Post-Experiment Recommendations (F1 Sequence):

**F1.1: Apply M1 permanently**
- Update skill to replace "sample 2-4" with per-category minimums
- Validated by 11 research agents + Middle experiment

**F1.2: Proceed to Wave 2 (M6, M7)**
- M6: Semantic justification (cite content features, not catalog)
- M7: Documented combinations (3+ mechanism interactions)

**F1.3: Plan Ceiling experiment with SAME content**
- Build SYSTEM documentation at Ceiling tier
- Isolate tier-boundary effects
- Test whether metaphor derivation creates genuine divergence or derivative pattern-matching

**F1.4: Document strongest content-mechanism fits**
- Border-weight gradient for security criticality (the design highlight)
- Code blocks for technical anchors (8 instances as waypoints)
- Dark header/footer for product identity (editorial authority)

**F1.5: Document gaps for Wave 2**
- Missing footer rendering (implementation bug)
- Heading spacing ratio < 1.5:1 (weakens association)
- Top-heavy weight distribution (no bottom-half anchors)
- Monotonous rhythm (spacing without variation)

### What Ceiling verdict should change:

1. **SUCCESS threshold must be HIGHER:**
   - PA-05: Not just 4/4, but 4/4 with MARGIN (e.g., PA-05b >= 2.5x, not 2.0x)
   - Novelty: 3/3 REQUIRED (not 2/3)
   - Better than Middle: Must show CLEAR qualitative improvement (not just more mechanisms)
   - Spatial atmosphere: Must be YES (not SOMEWHAT)

2. **Add PARTIAL verdict condition:**
   - If PA-05 = 3/4 OR novelty = 2/3 → PARTIAL
   - Requires iteration, not rejection

3. **Add meta-checks (Section G):**
   - G1: Mechanism counts DESCRIPTIVE not prescriptive
   - G2: "Sample 2-4" labeled as PROBLEM not design
   - G3: Patterns vs mechanisms distinguished
   - G4: Middle = lookup, Ceiling = derivation
   - G5: Fractal coherence with concrete examples
   - G6: Scales and mechanisms = separate dimensions
   - G7: M1 sequencing documented
   - G8: Verdict framework existed BEFORE build

---

## 9. TEAM TOPOLOGY USED (8 Agents, Flat File-Bus)

### From READER-EXPERIMENT-SYNTHESIS.md:

**8 agents, 1-layer hierarchy, 100% file-based communication, zero SendMessage:**

1. **content-selector** (Phase 0): Extract 800-1,200 words mixed technical content
2. **planner** (Phase 1): Pattern + mechanism deployment plan
3. **builder** (Phase 2): Implement HTML page
4. **programmatic-auditor** (Phase 3a): Automated CSS/HTML verification at 1440px and 768px
5. **perceptual-auditor** (Phase 3b): Fresh-eyes zero-context perceptual evaluation
6. **comparative-auditor** (Phase 4a): Side-by-side comparison with Variant B
7. **novelty-evaluator** (Phase 4b): Structural fingerprint, CSS overlap, mechanism combination
8. **verdict-synthesizer** (Phase 5): Apply decision matrix, state SUCCESS/PARTIAL/FAILURE

**Parallelization:**
- Phases 3 and 4 ran 2 agents concurrently (programmatic + perceptual, comparative + novelty)
- Sequential Playwright scheduling prevented contention

**Timing:** ~35 minutes wall-clock (vs 70-100 min predicted for Middle tier)

**Why it worked:**
- Per-file ownership = zero contention
- Parallel execution where independent
- No hierarchical coordination overhead
- Each agent reads input files, writes output file, exits

**Why quality suffered:**
- No verification mechanism between planner and builder
- Builder couldn't ask clarification questions
- Planner never saw final HTML to verify implementation
- Result: missing footer (planner specified, builder didn't build)

### What Ceiling topology should keep:

1. **Flat structure** — no captain/worker hierarchies (recovery agents more reliable)
2. **Per-file ownership** — each agent writes one deliverable, zero file contention
3. **Parallel execution** — run independent phases concurrently (audits, evaluations)

### What Ceiling topology should ADD:

1. **Landmark completeness gate** at Phase 2→3 boundary:
   - Builder confirms: "Sections present: [list]. Header line X, footer line Y."
   - Planner (or simple verification agent) spot-checks: "Confirmed: all landmarks present."

2. **Builder self-checks** before submission:
   - CPL formula verification
   - Token compliance scan (count var() vs raw values)
   - Landmark checklist (all planned sections exist in HTML)

3. **Dual PA evaluation** (Phase 3b):
   - Two independent perceptual auditors
   - Reconciliation agent identifies disagreements, resolves

4. **Metaphor derivation agent** (Phase 1, NEW):
   - Multi-axis questioning
   - Tension identification
   - Metaphor collapse
   - Outputs: metaphor + pattern selection + mechanism affinity map

---

## 10. CONTEXT SYNTHESIS (Key Cross-Cutting Insights)

### From READER-CONTEXT-SYNTHESIS.md (422 lines):

**I. The Project Arc (Stage 6: Middle-Tier Experiment)**

> The experiment asked: **Can an agent produce "designed" (not just "formatted") output by deploying 8-10+ mechanisms across 5 categories WITHOUT metaphor derivation?**
>
> The answer: **YES.** PA-05 DESIGNED (4/4), novelty 3/3 STRONGLY NOVEL, better than Variant B in 3 perceptual dimensions.
>
> The caveat: "specifications applied correctly, not composition felt through" — professionally stiff, not compositionally confident.

**II. The Tier Model (Four Levels)**

| Tier | Mechanisms | Build Time | CSS Lines | What It's For |
|------|-----------|------------|-----------|---------------|
| Floor | 5 | 30-45 min | 150-250 | API refs, changelogs |
| **Middle (VALIDATED)** | 8-10 | 70-100 min | 350-500 | Tutorials, guides, overviews |
| Ceiling | 12-15 | 150-220 min | 700-1000 | Conceptual docs, deep explanations |
| Flagship | 16-18 | 240-400 min | 1000-1500 | Anchor content, crown jewels |

**Middle tier is the recommended universal floor.** Floor-to-Middle transition = highest ROI (3-4x richness for +45 min).

**III. The Two Dimensions of "Designed"**

**1. Vocabulary Fluency (Middle achieves this):**
- Deploy mechanisms from all 5 categories
- Each mechanism serves DIFFERENT content need independently
- Selection logic: content feature → mechanism capability (direct mapping)
- Result: "professionally stiff"
- Perceptual ceiling: B+ quality

**2. Compositional Fluency (Ceiling adds this):**
- Derive metaphor that gives page coherent REASON for choices
- Select mechanisms that REINFORCE each other (multi-channel encoding)
- Selection logic: metaphor → shared semantic dimension → multiple mechanisms encoding that dimension simultaneously
- Result: "composed through" — atmosphere, spatial presence
- Perceptual ceiling: A quality

Middle = lookup ("This has code blocks → I need mechanism #17").
Ceiling = creative derivation ("Geological strata have pressure gradients → spacing compression + border-weight + zone backgrounds ALL encode depth").

**IV. The M1 Decision (Why Wave 2 Was Arguably a Mistake)**

Per-category minimums are THE highest-leverage change to the tension-composition skill. They should have been Wave 1, not Wave 2. When something has unanimous multi-agent convergence (11 research agents) and clear theoretical grounding, sequencing it for "validation" is over-caution.

**V. The "Why" Documentation Gap**

Existing documentation states WHAT without explaining WHY:
- Tier model lists mechanism counts without explaining they're backward-engineered from existing pages
- "Sample 2-4 mechanisms" appears without noting it's the IDENTIFIED PROBLEM
- Density patterns mentioned without explaining they're SPATIAL ORGANIZATION STRATEGIES (skeleton), not mechanisms (flesh)

**Every specification should include provenance:**
- WHERE did this number come from?
- WHAT happens if we change it?
- IS this validated or hypothetical?
- WHAT alternative was considered?

**VI. Critical Evidence: Agent Communication Matters for Quality**

Middle-tier (flat file-bus, zero SendMessage): 35 min, B+ quality, missing footer
CD-006 (agent communication + iteration): 39/40, A quality

**The hypothesis:** Quality gap PARTIALLY explained by agents being unable to collaborate, catch mistakes, or iterate.

**The trade-off:**
- Flat file-bus: 35 min, B+ quality, zero coordination overhead
- Hierarchical messaging: 60-90 min, A quality, coordination complexity

For Ceiling (where quality matters more than speed), consider **hybrid topology**: flat file-bus for Phases 0-2 (content, planning, build), then hierarchical messaging for Phases 3-5 (validation, evaluation, iteration).

**VII. What Comes Next (F1 Sequence)**

1. Apply M1 permanently (NOW)
2. Wave 2: M6 semantic justification, M7 documented combinations
3. Ceiling experiment with SAME content (SYSTEM documentation)
4. Document strongest content-mechanism fits
5. Document gaps for iteration

**VIII. The Open Question**

Middle achieves vocabulary fluency. Ceiling adds compositional fluency through metaphor.

**Is "felt through" the Ceiling/Flagship differentiator?**

The perceptual auditor distinguished "specifications applied correctly" (Middle) from "composition felt through" (Ceiling should achieve).

The Ceiling experiment will test whether metaphor — giving the page a REASON for its choices — is the ingredient that transforms vocabulary fluency into compositional fluency.

---

## SUMMARY: WHAT THE CEILING PROMPT MUST CHANGE

### 1. STRUCTURE (KEEP)
- 10 sections (Mission, Identity, Vocabulary, Mechanisms, Pipeline, Validation, Context, Reference, Anti-Patterns, Content, Success)
- Binary rules emphasis ("100% compliance")
- Self-contained (receiving instance reads ONLY this prompt)
- Planner slice format (430 lines, compressed for builder)

### 2. MISSION (CHANGE)
- Update to Ceiling tier definition
- Add metaphor derivation requirement (Phase 1, NEW)
- Raise mechanism target (12-15 vs 8-10)
- Add metaphor → mechanism selection logic

### 3. PIPELINE (CHANGE — Insert Metaphor Phase)
- Step 2.5: Metaphor Derivation (NEW)
  - Multi-axis questioning (4+ axes)
  - Tension identification (2-3 tensions)
  - Metaphor collapse (the chosen metaphor)
  - Pattern selection (justified by metaphor)
- Step 5: Mechanism Breadth (CHANGE)
  - Raise per-category minimums: S:2+, H:2+, C:3+, D:2+, N:2+ (natural landing 11-15)
- Step 7: Mechanism Justification (CHANGE)
  - Add metaphor connection: "I deploy [mechanism] BECAUSE [metaphor dimension] + [content feature]"
  - Reject mechanisms that don't fit metaphor
- Step 8: Fractal Coherence (CHANGE)
  - Raise to 3+ scales (Page, Section, Component minimum)
  - Document pattern expression at each scale WITH metaphor connection

### 4. VALIDATION (ADD)
- Landmark completeness gate (Phase 2→3 boundary)
- Builder self-checks (CPL formula, token scan, landmark checklist)
- Dual PA evaluation (2 independent auditors + reconciliation)
- Blind novelty evaluation (3 unlabeled pages)
- Metaphor detection test (PA-44 repurposed)

### 5. SUCCESS CRITERIA (RAISE THRESHOLDS)
- PA-05: Must EXCEED 4/4 with margin (e.g., PA-05b >= 2.5x, not 2.0x)
- Novelty: 3/3 REQUIRED (not 2/3)
- Better than Middle: Clear qualitative improvement (not just more mechanisms)
- Spatial atmosphere: Must be YES (not SOMEWHAT)
- Add meta-checks (8 items, Section G)

### 6. ANTI-PATTERNS (ADD MIDDLE DEFECTS)
- Missing footer (caused by no verification between planner/builder)
- Heading spacing ratio < 1.5:1 (BINARY rule now)
- Top-heavy weight (require >= 2 focal points in bottom 50%)
- Monotonous rhythm (require >= 2 spacing deviations)
- Token compliance < 80% (add builder self-check)

### 7. BUILD PLAN FORMAT (ADD METAPHOR SECTIONS)
- Section 0.5: Metaphor Derivation (before Section 1 CONTENT)
  - Multi-axis questioning results
  - Tension identification
  - Metaphor collapse explanation
  - Pattern selection justification
- Section 5: Reinforcing Pairs (EXPAND)
  - Not just 2-mechanism pairs
  - But 3+ mechanisms reinforcing same semantic dimension
  - Document how ALL mechanisms in set work together
- Section 6: Fractal Table (EXPAND)
  - 3+ scales (add to Page/Component)
  - Pattern expression at each WITH metaphor connection

### 8. TEAM TOPOLOGY (HYBRID)
- KEEP: Flat file-bus for Phases 0-2 (content, planning, build)
- ADD: Metaphor derivation agent (Phase 1, NEW)
- ADD: Landmark verification at Phase 2→3 boundary
- ADD: Dual PA evaluation (Phase 3b, 2 auditors + reconciliation)
- ADD: Blind novelty evaluation (Phase 4b, 3 unlabeled pages)
- KEEP: Parallel execution where independent
- KEEP: Per-file ownership

### 9. TIMING EXPECTATION
- Middle: 35 minutes (8 agents, flat file-bus)
- Ceiling predicted: 150-220 minutes (11+ agents, metaphor derivation, iteration)
- BUT agent parallelization may reduce: ~60-90 minutes wall-clock?

### 10. THE CORE QUESTION CEILING MUST ANSWER
> **Does metaphor derivation transform vocabulary fluency (Middle: "professionally stiff") into compositional fluency (Ceiling: "felt through")? Or does it just produce derivative pattern-matching?**

Middle experiment proves: per-category mechanism selection reaches "designed" threshold.

Ceiling experiment must prove: metaphor-driven selection creates "compositionally confident" spatial atmosphere.

---

## FILES READ

1. `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/middle-tier-experiment/02-build-plan.md` (676 lines)
2. `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/middle-tier-experiment/planner-slice.md` (430 lines)
3. `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/middle-tier-experiment/07-VERDICT.md` (228 lines)
4. `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/middle-tier-experiment/04-perceptual-audit.md` (380 lines)
5. `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/middle-tier-experiment/06-novelty-assessment.md` (154 lines)
6. `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/middle-tier-experiment/READER-EXPERIMENT-SYNTHESIS.md` (730 lines)
7. `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/middle-tier-experiment/READER-CONTEXT-SYNTHESIS.md` (422 lines)
8. `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/session-insights/24-FINAL-MASTER-MIDDLE-TIER-EXECUTION-PROMPT.md` (first 500 lines of 1,760 total)

**Total analyzed:** ~3,520 lines direct reading + summary knowledge of 1,260 additional lines

---

**EXTRACTION COMPLETE**

The Middle-tier experiment provides a COMPLETE STRUCTURAL TEMPLATE for the Ceiling prompt. The 10-section format, binary rule emphasis, planner slice compression, build plan structure, validation protocol, and team topology are all proven patterns. The Ceiling prompt needs to INSERT metaphor derivation, RAISE mechanism thresholds, ADD verification gates, and EXPAND interaction requirements — but the SKELETON is validated and ready to reuse.
