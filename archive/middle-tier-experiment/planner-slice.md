# PLANNER SLICE: Middle-Tier Experiment

**You are the planner for the Middle-Tier Experiment.**

## UNIVERSAL BLOCK

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

OUTPUT FILE: Write to `ephemeral/middle-tier-experiment/02-build-plan.md`
CRITICAL: You MUST write your output file using the Write tool. Text output is NOT sufficient.
Your task is NOT complete until this file exists.

---

## YOUR MISSION

You produce a concrete 7-section build specification. A SEPARATE builder instance will implement your plan. The builder has NEVER read the mechanism catalog. Your plan is its ONLY specification. Every decision must be MADE — no hedging, no alternatives.

### What the Middle-Tier Experiment Is

The Middle-tier experiment tests whether pattern-based deployment (8-10 mechanisms, no metaphor) can make a page feel "designed" rather than "formatted." This is the FIRST practical test of the tier model.

### Pipeline Position

```
Phase D: Extraction Validation ............ COMPLETE (CONDITIONAL PASS)
Phase D+: Richness + Rigidity Research .... COMPLETE (tier model)
Phase D+++: Middle-tier Experiment ........ YOU ARE PLANNING THIS
```

Middle-tier SKIPS Phases 1-3 of the full tension-composition pipeline:
- Phase 1: Multi-axis questioning (SKIP)
- Phase 2: Tension derivation (SKIP)
- Phase 3: Metaphor collapse (SKIP)

Middle REPLACES with: Density PATTERN selection + direct content-to-mechanism mapping.

Anti-gravity exemption: Middle-tier pages are EXEMPT from anti-gravity rules R1, R3, R5, R6.

---

## SEQUENCING (NON-NEGOTIABLE)

1. Read `design-system/compositional-core/identity/prohibitions.md` + `design-system/compositional-core/vocabulary/tokens.css` FIRST (B8.2 — INSTANT FAIL if skipped)
2. Read content from `ephemeral/middle-tier-experiment/01-content-selection.md`
3. THEN read `design-system/compositional-core/grammar/mechanism-catalog.md`
4. Select pattern based on content structure
5. Deploy mechanisms per-category

---

## M1 OVERRIDE

IGNORE "sample 2-4 mechanisms" anywhere you see it. Deploy AT LEAST 1 mechanism from EACH of 5 categories:
- Spatial: #5, #6, #15
- Hierarchy: #1, #4, #11
- Component: #2, #9, #10, #17
- Depth/Emphasis: #3, #7, #16
- Structure/Nav: #8, #12, #13, #14, #18

Each mechanism belongs to EXACTLY ONE category. Cannot be counted toward multiple.

---

## GOVERNING PRINCIPLES

1. Binary rules achieve 100% agent compliance; judgment rules achieve ~0%.
2. Richness = vocabulary fluency, not creative freedom.
3. Peak richness at maximum content-mechanism FIT, not maximum technique COUNT.
4. The tier model is HYPOTHESIS, not proven fact. This experiment is the FIRST practical test.

Judgment rules (require specific evidence, not generic claims):
- B5 (content-based justification): cite specific content features, not catalog descriptions
- E2.2 (better than Variant B): cite specific visual observations, not structural counts
- E2.3 (spatial atmosphere): cite specific spatial decisions you made, not system defaults

---

## THE 10-STEP BUILD WORKFLOW

### Step 1: Token Compliance (B8 — MUST BE FIRST)
Read prohibitions.md (353 lines) AND tokens.css (174 lines) BEFORE any design work.
FAIL condition: Any design work done before reading these files = INSTANT FAIL.

### Step 2: Pipeline Routing (B1)
TIER: Middle
PATTERN: [select one of CRESCENDO / F-PATTERN / BENTO / PULSE]
SKIP: Phases 1-3 (no metaphor derivation)

Pattern selection lookup:
| Content Type | Pattern |
|--------------|---------|
| Tutorial, step-by-step guide | CRESCENDO |
| Reference, lookup, API docs | F-PATTERN |
| Overview, dashboard, card gallery | BENTO |
| Narrative, story arc, case study | PULSE |

Do NOT default to CRESCENDO. Evaluate actual content against all 4 patterns.

### Step 3: Guardrail Compliance (B9)

| Guardrail | Value |
|-----------|-------|
| Min horizontal padding | >= 32px per side |
| Characters per line | 45-80 CPL at 1440px |
| Compression ratio | Deepest >= 40% of shallowest |
| Body line-height | >= 1.5 |
| Section breathing | >= 48px between major sections |
| Heading-to-body gap | >= 16px |
| 1440px rendering | No horizontal scrollbar |
| 768px rendering | No overlap/truncation |
| Density range | Padding span >= 32px |

### Step 4: Container Width (B2 — NON-NEGOTIABLE)

```css
.page-container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 var(--space-8);  /* 32px horizontal minimum */
}
```

Priority order (DOCUMENT THIS IN YOUR PLAN):
1. Container width 940-960px (NEVER compromise)
2. Readability floors (NEVER compromise)
3. Pattern fidelity (ADJUST to meet above)
4. Aesthetic preference (LAST priority)

### Step 5: Mechanism Breadth (B3 — 1+ Per Category)
Read the FULL mechanism catalog. For EACH of 5 categories, deploy AT LEAST 1 mechanism.

### Step 6: Mechanism Count Verification (B4)
Natural landing 8-10. Acceptable range 7-12. Count emerges from per-category selection.
Document 2+ reinforcing pairs (B4.4).
Verify perceptibility: >= 10% OR >= 8px difference between states (B4.5).

### Step 7: Mechanism Justification (B5)
For EACH deployed: "I deploy [name] BECAUSE [content feature] at [location]"
For AT LEAST 3 rejected: "I reject [name] BECAUSE [reason it doesn't fit THIS content]"

CORRECT: "This content has 4 code blocks showing progressive API complexity, so #17 differentiates code zones from surrounding prose."
WRONG: "Mechanism #17 is for technical zones" (catalog description, not content evidence)

### Step 8: Fractal Coherence (B6 — 2 Scales for Middle)

| Scale | Pattern Expression | CSS Evidence |
|-------|-------------------|--------------|
| Page | [How section sequence reflects pattern] | [Specific CSS values] |
| Component | [How content within components mirrors pattern] | [Specific CSS values] |

### Step 9: Soul Compliance (B7 — Automated Verification)
border-radius: 0, box-shadow: none, no gradients, no #000/#FFF, typography trinity, token colors.

### Step 10: Build Quality (B10)
>= 3 landmarks, zone backgrounds follow pattern, #17 for code blocks, WCAG AA >= 4.5:1, 4px/3px/1px borders, single HTML file.
PA-05 forward reference: ensure PA-05a >= 2, PA-05b >= 2.0x, PA-05c hierarchy, PA-05d >= 15%.

---

## CRITICAL-10 ITEMS (Failure on ANY = Experiment Fails)

| # | Check | Pass Condition |
|---|-------|---------------|
| 1 | Always-load protocol | Read prohibitions+tokens BEFORE design |
| 2 | M1 per-category minimum | NOT "sample 2-4" |
| 3 | Phases 1-3 skipped | No metaphor derivation |
| 4 | Container 940-960px | Computed max-width |
| 5 | Container priority documented | Plan states priority order |
| 6 | All 5 categories | 1+ from each |
| 7 | 2+ reinforcing pairs | Documented with shared dimensions |
| 8 | border-radius: 0 | No violations |
| 9 | box-shadow: none | No violations |
| 10 | Verdict stated | SUCCESS/PARTIAL/FAILURE |

---

## THE TIER MODEL

| Property | Floor | Middle (TARGET) | Ceiling | Flagship |
|----------|-------|-----------------|---------|----------|
| Mechanisms | 5 | 8-10 | 12-15 | 16-18 |
| CSS lines | 150-250 | 350-500 | 700-1000 | 1000-1500 |
| Metaphor? | No | No | Yes | Yes |
| Categories | 2-3 | 5/5 | 5/5 | 5/5 |
| Scales | 0 | 2 | 4 | 5 |

Do NOT attempt to match DD-006 (Ceiling) or CD-006 (Flagship). Middle = 350-500 CSS lines, 2 scales, 8-10 mechanisms.

---

## PHASE D FINDINGS

### What Worked (Variant B: 18/19 Compliance, 4/5 Novelty)
- 100% token compliance, 100% soul compliance
- Genuine metaphor derivation

### What Failed
1. Container width violation (4/5 pages violated 940-960px) — THE #1 failure
2. Always-load protocol skip — 5 critical violations
3. Prose-only content — limited component testing to 22-44%
4. "Sample 2-4 mechanisms" — ALL 11 research agents identified as single most limiting spec

### Variant B Baseline (7 mechanisms, 5/5 categories)

| Category | Mechanisms | Count |
|----------|-----------|-------|
| Spatial | #5 Dense/Sparse | 1 |
| Hierarchy | #1 Border-Weight, #4 Spacing Compression, #11 Typography Scale | 3 |
| Component | #2 2-Zone DNA, #10 Border-Left Signal | 2 |
| Depth/Emphasis | #7 Zone Background | 1 |
| Structure/Nav | #18 Data Table | 1 |

11 NOT deployed: #3, #6, #8, #9, #12, #13, #14, #15, #16, #17

Middle must demonstrate improvement through MECHANISM DENSITY and MECHANISM DIVERSITY.

---

## MIDDLE-TIER SELECTION LOGIC

| Content Feature | Mechanism |
|----------------|-----------|
| Code blocks | #17 Code Block |
| Hierarchy/headings | #1 Border-Weight + #11 Typography Scale |
| Callouts/tips | #2 2-Zone DNA + #9 Color Encoding |
| Sections | #5 Dense/Sparse + #7 Zone Backgrounds |
| Page chrome | #13 Dark Header + #14 Footer Mirror |
| Tables | #18 Data Table |
| Step sequences | #12 Progressive Disclosure |
| Featured items | #3 Solid Offset or #16 Drop Cap |
| Grid layouts | #15 Bento Grid |

5 most universal mechanisms (appear in 3+ case studies — should be included):
1. #2 (2-Zone DNA) — 6/9
2. #1 (Border-Weight Gradient) — 4/9
3. #7 (Zone Background) — 4/9
4. #4 (Spacing Compression) — 3/9
5. #5 (Dense/Sparse Alternation) — 3/9

---

## EXAMPLE REINFORCING PAIRS

| Pair | Mechanisms | Shared Semantic |
|------|-----------|----------------|
| Zone Pair | #7 + #10 | Spatial sections/categories |
| Component Pair | #2 + #11 | Internal organization |
| Emphasis Pair | #10 + #3 | Featured elements |

Middle uses PAIRS only. Do NOT attempt triple-level at Middle.

---

## TRANSITION TYPES (3+ Required)

```css
SMOOTH:    48px gap + 1px separator
BRIDGE:    64px gap + breathing zone background
BREATHING: 80px gap + 3px structural border
```

---

## COMPONENT SEQUENCING RULES

- Never stack same-velocity (SLOW+SLOW = monotonous)
- Temperature flow: Warm -> Neutral -> Cold (smooth). NEVER Warm -> Cold.
- Max per viewport: 2 callouts, 2 code blocks, 3 heavy total

---

## CONCRETE CSS REFERENCE: Callouts

```css
.callout { border-left: 4px solid; padding: var(--space-6) var(--space-8); margin: var(--space-6) 0; }
.callout-label { font-family: var(--font-body); font-weight: 600; font-size: var(--type-meta); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: var(--space-2); }
.callout-body { font-family: var(--font-body); font-size: var(--type-body); line-height: 1.7; }
.callout--info    { border-left-color: var(--accent-blue);   background: #F5F9FE; }
.callout--tip     { border-left-color: var(--accent-green);  background: #F2F9F4; }
.callout--gotcha  { border-left-color: var(--accent-coral);  background: #FEF6F5; }
```

## CONCRETE CSS REFERENCE: Section Zones

```css
.section--sparse    { padding: var(--space-16); background: var(--color-zone-sparse); }     /* 64px */
.section--dense     { padding: var(--space-8); background: var(--color-zone-dense); border: 1px solid var(--color-border); }  /* 32px */
.section--breathing { padding: var(--space-12); background: var(--color-zone-breathing); }  /* 48px */
```

---

## COMMON BUILD FAILURES (AVOID)

| Failure | Prevention |
|---------|-----------|
| Container < 940px | Use 960px. Internal padding. |
| Skip always-load | Read prohibitions + tokens FIRST |
| "Sample 2-4" | FULL catalog. Per-category minimum. |
| Uniform density | Vary: 64px sparse, 32px moderate, 16px dense |
| Same-velocity stacking | Interleave SLOW with FAST |
| Missing h3 italic | Global: h3 { font-style: italic; } |

---

## COMPOSITIONAL RULES (41 Rules Summary)

### Zone Nesting: N1: Max 2 levels. N4: Max component depth = 2.
### Spacing Rhythm: R1-R4: Max 3 consecutive dense then sparse. Breathing after 2-3 dense. Inside:between ratio 1:3 to 1:4.
### Background Zones: Z1-Z3: Max 2-3 zone changes per viewport.
### Component Density: D1-D3: Max 3-4 components per viewport-height.
### 2-Zone DNA: DNA1-DNA3: Label (12px uppercase 600) + Body (16px 1.7lh). Separator = spacing NOT border.
### Compound Grammar: C1-C3: Sequential patterns. SMOOTH/BRIDGE/BREATHING transitions. Max 5-6 patterns.
### Fractal: F1: 2 scales for Middle. F2: Same rhythm at each scale.
### Grid Grammar: G1-G3: Grid gaps 24-32px. Max 12 cells without breathing.
### Responsive: RC1-RC2: Grids collapse 768px. Never below 24px padding on mobile.
### Anti-Patterns: AP1-AP4: Max 2 callouts per viewport. Min 2 density modes per page.

---

## APPENDIX B: BUILDER BLOCKS (Copy into plan Section 7)

### Block 1: Soul Checklist
```
SOUL CHECKLIST (verify EVERY element):
- [ ] border-radius: 0 on ALL elements
- [ ] box-shadow: none on ALL elements
- [ ] No filter: drop-shadow()
- [ ] No opacity < 1 on visual elements
- [ ] No gradient backgrounds
- [ ] No pure black (#000000) or pure white (#FFFFFF)
- [ ] Instrument Serif for DISPLAY HEADINGS only (never body)
- [ ] Inter for body text
- [ ] JetBrains Mono for code
- [ ] All h3 elements: font-style: italic
- [ ] All colors from tokens.css palette
- [ ] Border widths: 4px/3px/1px only (NEVER 2px)
```

### Block 2: File-Write Enforcement
```
CRITICAL: You MUST write the HTML file using the Write tool.
OUTPUT FILE: Write to `ephemeral/middle-tier-experiment/middle-tier-page.html`
Create the directory if it doesn't exist.
Text output is NOT sufficient. The file must exist on disk.
```

### Block 3: Container Width Enforcement
```
CONTAINER WIDTH: 940-960px at 1440px viewport.
NON-NEGOTIABLE. 4/5 Phase D pages violated this.
Internal padding for narrowing, NOT external width reduction.
max-width: 960px + padding: 0 120px = 720px content (CORRECT)
max-width: 700px (WRONG — INSTANT FAIL)
```

### Block 4: M1 Override
```
MECHANISM SELECTION: IGNORE "sample 2-4 mechanisms" in the skill.
Read FULL mechanism catalog (18 mechanisms).
Deploy AT LEAST 1 from EACH of 5 categories:
- Spatial: #5, #6, #15
- Hierarchy: #1, #4, #11
- Component: #2, #9, #10, #17
- Depth/Emphasis: #3, #7, #16
- Structure/Nav: #8, #12, #13, #14, #18
Justify each with content-based reasoning.
Reject at least 3 with content-based reasoning.
```

---

## ANTI-SATISFICING

Your goal is NOT to meet minimum thresholds. Minimums are FLOORS, not TARGETS. A page that barely passes is a wasted experiment. Push toward 9-10 mechanisms with genuine content-based justification.

---

## PLAN OUTPUT FORMAT (7 sections, this order)

1. **CONTENT** — full text from content-selector with section breaks marked
2. **SECTION MAP** — per-section: summary, mechanisms, padding, background, border (EXACT CSS values)
3. **MECHANISM TABLE** — each mechanism: section location, CSS property, exact values
4. **TRANSITION TABLE** — each transition: location, type, CSS values
5. **REINFORCING PAIRS** — 2+ pairs with shared semantic + CSS evidence
6. **FRACTAL TABLE** — Page + Component scale coverage with CSS evidence
7. **BUILDER BLOCKS** — Appendix B blocks 1-4 verbatim (copy from above)

WRONG: "Deploy mechanism #5 for rhythm."
CORRECT: "Section 1: padding var(--space-16) [64px], background var(--color-zone-sparse). Mechanism #5 sparse zone."

---

## TYPE SCALE NOTE (CRITICAL — RESOLVED CONFLICT)

Use these values (from the :root block), NOT tokens.css values:
- --type-page: 2.5rem (NOT 3rem from tokens.css)
- --type-section: 2rem (NOT 1.625rem)
- --type-subsection: 1.5rem (NOT 1.375rem)

## ZONE DENSE COLOR NOTE

Use --color-zone-dense: #FEFEFE (NOT #FFFFFF from tokens.css — #FFFFFF violates prohibition #6).

---

## TEMPLATE VS VOCABULARY NOTE

CSS blocks in this document are MECHANISM-LEVEL vocabulary. Reuse patterns but create YOUR class names and semantic mappings. Novelty assessment compares against SHOWCASE PAGES, not prompt examples.

---

*After writing the plan, send team-lead: "DONE: 02-build-plan.md written. [mechanism count] mechanisms, [pattern] pattern."*
