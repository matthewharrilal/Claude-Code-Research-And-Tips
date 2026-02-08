<!-- ═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/app/showcase/FINDINGS-INDEX.md
Tier: A | Batch: 5 | Generated: 2026-02-06

1. WHY THIS EXISTS
Master index of all research findings, component definitions, CSS tokens, and
density patterns discovered during the showcase project. Structured for future
infrastructure, deriving pipelines, migrations, and onboarding. This is the
single lookup point for "what did we find and where is it documented?"

2. THE QUESTION THIS ANSWERS
"What findings, patterns, components, and concrete examples exist across all
research phases, and where is the source documentation for each?"

3. STATUS
ACTIVE

4. SOUL ALIGNMENT
Soul-adjacent — Indexes all soul-implementing findings (token values, density
patterns, component definitions) without implementing soul values directly.
The research findings cataloged here are the evidence base that validates soul
decisions in T1 synthesis files.

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| R1-001 through R1-010                   | Documentation pattern findings         |
| R2-001 through R2-010                   | Premium site analysis findings         |
| R4 key findings                         | Component pattern findings             |
| R5 key findings                         | Advanced pattern findings              |
| COMPONENTS-REGISTRY.md (design-extraction) | 11 component definitions           |
| DESIGN-TOKEN-SUMMARY.md (design-extraction) | CSS token block                   |

6. MUST HONOR
- All finding IDs (R1-001, R2-003, etc.) are canonical — do not renumber
- Component definitions must match COMPONENTS-REGISTRY.md
- CSS token values must match DESIGN-TOKEN-SUMMARY.md locked values
- Density patterns must match validated explorations (DD-001 through DD-006)

7. WHAT BREAKS IF THIS CHANGES
LOW blast radius (standalone index, 0 direct inbound path references). However:
- Renumbering finding IDs would break any file that references R-X-NNN IDs
- Changing component definitions would create divergence with COMPONENTS-REGISTRY.md
- Modifying CSS token values would contradict DESIGN-TOKEN-SUMMARY.md

8. CONSUMED BY
LEAF NODE — Consumed during research lookup but not referenced by path from other
files. Standalone master index.

9. RESEARCH DEBT
- R3 (density research) findings are cataloged but some lack implementation status
- Component registry section may not reflect components added after initial catalog
- CSS token block should be cross-verified against DESIGN-TOKEN-SUMMARY.md for drift

10. DIAGNOSTIC QUESTIONS
Q1: Do the CSS token values in this index exactly match the locked values in
    DESIGN-TOKEN-SUMMARY.md?
Q2: Are all 11 component definitions consistent with COMPONENTS-REGISTRY.md?
Q3: Do the density pattern descriptions match the actual implementations in
    DD-001 through DD-006 HTML files?
Q4: Are there any research findings referenced elsewhere in the repository that
    are NOT cataloged in this index?
Q5: Has the "When to Apply" guidance for each finding been validated against
    actual usage in exploration files?

END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════ -->

# FINDINGS-INDEX — Complete Knowledge Architecture
## Structured for Future Infrastructure, Deriving Pipelines, and Migrations

═══════════════════════════════════════════════════════════════════════════════
## PURPOSE
═══════════════════════════════════════════════════════════════════════════════

This document is the **MASTER INDEX** for all findings, patterns, components, and
concrete examples discovered during the showcase project. It's structured for:

1. **Future Infrastructure** — When building new systems, know what patterns exist
2. **Deriving Pipelines** — When automating design decisions, reference these rules
3. **Migrations** — When moving to new frameworks, preserve these principles
4. **Onboarding** — When new contributors join, start here

**Navigation:** Each section links to source documents with full details.

═══════════════════════════════════════════════════════════════════════════════
## QUICK REFERENCE — What to Use When
═══════════════════════════════════════════════════════════════════════════════

### By Content Type

| Content Type | Pattern to Use | Research Source | Example File |
|--------------|----------------|-----------------|--------------|
| **Tutorial/Learning** | Density Breathing (PULSE) | R-3 | DD-001-breathing.html |
| **Onboarding/Progressive** | Density Gradient (CRESCENDO) | R-3 | DD-002-gradient.html |
| **Reference/Lookup** | Density Islands | R-3 | DD-003-islands.html |
| **Long-form docs** | WAVE pattern | R-3 | (pending) |
| **Component catalog** | Bento Grid | R-2, R-4 | (Phase 3) |
| **Decision guides** | F-Pattern + Matrix | R-4, R-5 | (pending) |

### By User Goal

| User Goal | Density Level | Spacing | Pattern |
|-----------|---------------|---------|---------|
| "I want to learn" | Start sparse, build dense | 80px → 24px | CRESCENDO |
| "I need to reference" | Dense islands in sparse | 96px ocean, 24px islands | Islands |
| "I'm scanning" | Rhythmic variation | 48px EXHALE, 24px INHALE | Breathing |
| "I'm comparing options" | Medium uniform | 32px consistent | Matrix/Grid |

═══════════════════════════════════════════════════════════════════════════════
## 1. RESEARCH FINDINGS — Full Catalog
═══════════════════════════════════════════════════════════════════════════════

### R-1: Documentation Patterns (24 findings)
**Source:** `research/R1-DOCUMENTATION-PATTERNS.md`
**Focus:** Premium docs analysis (Stripe, Vercel, Linear, Notion)

| ID | Finding | When to Apply | Implementation |
|----|---------|---------------|----------------|
| R1-001 | Density Rhythm Principle | All sections | HIGH→LOW→MEDIUM waves |
| R1-002 | 38% Retention Rule | Whitespace decisions | 24-48px between sections |
| R1-003 | Viewport Principle | All pages | One concept per viewport |
| R1-004 | Three-Column Doctrine | Reference pages | nav\|content\|code layout |
| R1-007 | Callout Positioning Doctrine | All callouts | After explanation, before code |
| R1-008 | Callout Scarcity Principle | All pages | Max 1-2 callouts per viewport |
| R1-010 | Grouping Proximity Law | Component spacing | 8-16px related, 24-48px unrelated |

**Key Principle:** Typography creates hierarchy, not decoration.

---

### R-2: Creative Layouts (25 findings)
**Source:** `research/R2-CREATIVE-LAYOUTS.md`
**Focus:** Magazine layouts, dashboards, design system showcases

| ID | Finding | When to Apply | Implementation |
|----|---------|---------------|----------------|
| R2-001 | Breaking the Grid | Section 7, creative | Content positioning, not decoration |
| R2-002 | Pull Quotes as Structure | Essence Callouts | Serif italic, margin offset |
| R2-005 | White Space as Content | All sections | 38% retention improvement |
| R2-007 | Card-Based Composition | Component catalogs | Bento grid layout |
| R2-009 | Bento Grid Layout | Visual variety | Varied cell sizes |
| R2-010 | Asymmetric/Broken Grid | Creative sections | +20% engagement |

**Key Principle:** Layout is content, not container.

---

### R-3: Density Dimensions (30 findings)
**Source:** `research/R3-DENSITY-DIMENSIONS.md`
**Focus:** 6 density dimensions beyond spatial

#### The 6 Density Dimensions

| Dimension | Definition | Manipulation |
|-----------|------------|--------------|
| **Temporal** | Information over scroll | PULSE, CRESCENDO, WAVE patterns |
| **Depth** | Z-axis layering | Surface/Sediment/Bedrock model |
| **Semantic** | Meaning per area | Jargon vs expansion |
| **Cognitive** | Processing required | Novelty, decision points |
| **Interaction** | Clickables per viewport | Zones: exploration/action/reading |
| **Spatial** | Elements per area | Components per viewport |

#### Density Patterns (CRITICAL)

| Pattern | Shape | Best For | Implementation |
|---------|-------|----------|----------------|
| **PULSE** | ████░░░░████░░░░ | Tutorials | Rhythmic high-low cycles |
| **CRESCENDO** | ░░░░████████████ | Onboarding | Sparse→dense build |
| **BOOKENDS** | ████░░░░░░░░████ | Context-Action-Summary | Dense ends, sparse middle |
| **WAVE** | ░░██████░░░░████ | Long-form docs | Irregular rhythm |

#### Novel Frameworks

| Framework | Concept | Application |
|-----------|---------|-------------|
| **Breathing** | Inhale/exhale rhythm | Page pacing |
| **Tidal** | Information waves | Section transitions |
| **Musical** | Dynamics (forte/piano) | Content intensity |
| **Geological** | Strata layers | Progressive disclosure |
| **Fractal** | Self-similar at scales | Consistent rhythm |

#### Key Insights for Implementation

| Insight | ID | Rule |
|---------|----|----- |
| Density Debt | #30 | Dense elements require recovery space |
| Density Contrast | #29 | Sparse context makes dense feel denser |
| Density Inheritance | #28 | Children inherit parent density |
| Expansion Moment | #25 | Anticipate density shock on click |
| 10-Second Test | #26 | User should know: IS, CAN DO, GO DEEPER |

---

### R-4: Axis Innovations (25 findings)
**Source:** `research/R4-AXIS-INNOVATIONS.md`
**Focus:** Z, F, Gutenberg, bento, spiral patterns

#### Eye Movement Patterns

| Pattern | Movement | Best For | Key Placement |
|---------|----------|----------|---------------|
| **Z-Pattern** | Diagonal sweep | Hero sections | Top-left logo, top-right CTA, bottom-right next |
| **F-Pattern** | Horizontal scans + vertical | Text-heavy | Left alignment, strong first words |
| **Gutenberg** | 4 quadrants | Simple pages | Primary optical (top-left), terminal (bottom-right) |

#### Grid Innovations

| Grid Type | Feature | When to Use |
|-----------|---------|-------------|
| **Bento** | Varied cell sizes | Component catalogs, visual variety |
| **Masonry** | CSS grid-lanes | Gallery layouts |
| **Broken/Asymmetric** | Intentional rule-breaking | Creative sections |

#### Implementation Patterns

| Pattern | Structure | Example |
|---------|-----------|---------|
| **Orchestrated Axis** | Z-hero + Bento features + F-details | Landing pages |
| **Rhythm-Based** | Verse/chorus/bridge structure | Tutorial sections |
| **Cinematic** | Wide→close→wide | Story-based docs |

---

### R-5: Combination Theory (20 findings)
**Source:** `research/R5-COMBINATION-THEORY.md`
**Focus:** Component harmony, tension, sequence, grouping

#### Component Properties Model

| Component | Velocity | Temperature | Weight |
|-----------|----------|-------------|--------|
| Code Snippet | SLOW | Neutral | Heavy |
| Info Callout | FAST | Neutral | Light |
| Tip Callout | FAST | Warm | Light |
| Gotcha Callout | FAST | Cold | Medium |
| Essence Callout | SLOW | Warm/Reverent | Medium |
| Challenge Callout | FAST | Warm | Medium |
| File Tree | MEDIUM | Neutral | Heavy |
| Decision Matrix | MEDIUM | Neutral | Heavy |
| Core Abstraction | SLOW | Reverent | Heavy |
| Task Component | FAST | Utilitarian | Medium |
| Reasoning | SLOW | Deliberate | Heavy |

#### Combination Rules

| Rule | Description | Implementation |
|------|-------------|----------------|
| **Never stack same-velocity** | SLOW + SLOW = monotonous | Buffer with different velocity |
| **Temperature flow** | Warm→Neutral→Cold is jarring | Smooth temperature transitions |
| **Weight balance** | Heavy + Heavy overwhelms | Intersperse light elements |
| **Semantic proximity** | 8-16px tight, 24-32px moderate, 48-64px loose | Spacing by relationship |

#### Recommended Sequences

**Opening Sequence:**
```
Hero Section (LOW density)
↓
Overview Callout (Info or Essence)
↓
Navigation/Map (File Tree or Contents)
```

**Teaching Sequence:**
```
Essence Callout (principle)
↓
Core Abstraction (principle + code)
↓
Code Snippet (full example)
↓
Tip Callout (practical advice)
```

**Decision Sequence:**
```
Decision Matrix (options)
↓
Reasoning Component (analysis)
↓
Gotcha Callout (what to avoid)
```

**Closing Sequence:**
```
Challenge Callout (next steps)
↓
Task Component (action items)
↓
Essence Callout (key takeaway)
```

---

### Research Synthesis
**Source:** `research/RESEARCH-SYNTHESIS.md`

#### 5 Unified Design Principles

1. **Density as Rhythm** — Use PULSE/WAVE patterns, vary density intentionally
2. **Layout as Choreography** — Z→F→Bento flow, axis transitions as dance
3. **Components as Characters** — Velocity/temperature/weight determine chemistry
4. **Whitespace as Design Element** — 24px related, 48px sections, 92px+ hero
5. **Typography Creates Hierarchy** — No decoration, type does the work

═══════════════════════════════════════════════════════════════════════════════
## 2. EXPLORATION FINDINGS — Concrete Examples
═══════════════════════════════════════════════════════════════════════════════

### Density Explorations (DD-001 through DD-006)

| ID | Name | Score | Status | Pattern | Key Learning |
|----|------|-------|--------|---------|--------------|
| DD-001 | Breathing | 30.5/40 | DOCUMENT | PULSE | EXHALE/INHALE rhythm works, needs consistent borders |
| DD-002 | Gradient | 34/40 | INCLUDE ★ | CRESCENDO | Sparse→dense guides learning, recovery breathing essential |
| DD-003 | Islands | 30.5/40 | DOCUMENT | Tidal Pools | Dense clusters in sparse ocean, needs stronger inter-island connections |
| DD-004 | Layers | - | PENDING | Geological | Foreground/background density differentiation |
| DD-005 | Rivers | - | PENDING | WAVE | Variable density channels |
| DD-006 | Creative | - | PENDING | TBD | Density Manifold visualization? |

### Organizational Explorations (OD-001 through OD-006)

| ID | Name | Score | Status | Pattern | Key Learning |
|----|------|-------|--------|---------|--------------|
| OD-001 | Conversational | ~35/40 | INCLUDE | PULSE + TIDAL | Q&A pairs are inherent PULSE generators; width variation creates TIDAL secondary rhythm |
| OD-002 | Narrative | ~33/40 | INCLUDE | CRESCENDO | Story arc NATURALLY creates CRESCENDO -- exposition sparse, climax dense |
| OD-003 | Task-Based | ~33/40 | INCLUDE | ISLANDS + BOOKENDS | Procedural clusters are dense islands; BOOKENDS for orientation/verification |
| OD-004 | Confidence | INCLUDE | INCLUDE | GEOLOGICAL + CRESCENDO | Certainty stratification IS geological density |
| OD-005 | Spatial | INCLUDE | INCLUDE | WAVE + ISLANDS | Hub-and-spoke creates WAVE oscillation |
| OD-006 | Creative | INCLUDE (crown) | INCLUDE | ALL (FRACTAL primary) | Organization IS Density (OD-F-005) |

### OD-F Findings (Pattern Findings)

| ID | Name | Type | Source Stage | Discovery Context | Status |
|----|------|------|-------------|-------------------|--------|
| OD-F-001 | Conversational Width Variation | Pattern | Stage 3 (OD) | OD-001: Q&A width difference (60%/100%) creates natural TIDAL rhythm | APPLIED |
| OD-F-002 | Fractal Nesting via Follow-ups | Pattern | Stage 3 (OD) | OD-001: Follow-up questions create fractal nesting satisfying DD-F-006 | APPLIED |
| OD-F-003 | Q&A as Natural PULSE Generator | Pattern | Stage 3 (OD) | OD-001: Q&A pairs inherently generate PULSE density | APPLIED |
| OD-F-004 | Chapter Dividers as Breathing Zones | Pattern | Stage 3 (OD) | OD-001: Dense answer sections need recovery whitespace (R3-048) | APPLIED |
| OD-F-005 | Organization IS Density | Meta-Pattern | Stage 3 (OD) | OD-006: Organizational pattern IS the density pattern -- same phenomenon, two perspectives | APPLIED |
| OD-F-006 | Meta-Documentation as Purest Density Test | Pattern | Stage 3 (OD) | OD-006: Content about density principles creates the most natural density rhythm | APPLIED |
| OD-F-007 | Mode-Transition Breathing | Pattern | Stage 3 (OD) | OD-006: Switching organizational modes requires breathing zones | APPLIED |
| OD-F-008 | Compound Creative Techniques | Pattern | Stage 3 (OD) | OD-006: Multiple EXT-CREATIVE techniques compound when layered | APPLIED |
| OD-F-009 | Narrative Arc as Natural CRESCENDO | Pattern | Stage 3 (OD) | OD-002: Story progression mirrors sparse-to-dense (renumbered from builder-log) | APPLIED |
| OD-F-010 | Task Clusters as Natural ISLANDS | Pattern | Stage 3 (OD) | OD-003: Procedural task blocks form inherent dense islands | APPLIED |
| OD-F-011 | Confidence as Natural GEOLOGICAL | Pattern | Stage 3 (OD) | OD-004: Certainty stratification maps to geological density layers | APPLIED |
| OD-F-012 | Spatial as Natural WAVE | Pattern | Stage 3 (OD) | OD-005: Hub-and-spoke creates WAVE oscillation pattern | APPLIED |
| OD-F-013 | OD-006 Mode Cycling Proof | Pattern | Stage 3 (OD) | OD-006: Cycling through all 5 organizational modes with zero density manipulation | APPLIED |

### OD-F Special Findings

| ID | Name | Type | Source Stage | Discovery Context | Status |
|----|------|------|-------------|-------------------|--------|
| OD-F-AP-001 | 2px Border Epidemic | Anti-Pattern | Stage 3 (OD) | OD audit: 108 CSS declarations, 1000+ computed instances of 2px borders | DOCUMENTED |
| OD-F-MP-001 | Organization IS Density (Meta) | Meta-Pattern | Stage 3 (OD) | OD-006: The meta-pattern connecting all 6 org patterns to their density identities | APPLIED |
| OD-F-PR-001 | Process Finding | Process | Stage 3 (OD) | OD process methodology finding | DOCUMENTED |
| OD-F-FL-001 | Org Patterns Imply Axis Preferences | Forward-Looking | Stage 3 (OD) | Transitive chain: org->density->axis. AD must honor. | PENDING (AD) |

### Concrete Example Files

| File | Pattern | Use Case | Components Used |
|------|---------|----------|-----------------|
| `DD-001-breathing.html` | PULSE | Tutorials | Essence, Code, Tip, Gotcha, Info, File Tree, Matrix |
| `DD-002-gradient.html` | CRESCENDO | Onboarding | Essence, Code, Tip, Challenge, File Tree, Matrix, Task |
| `DD-003-islands.html` | Tidal Pools | Reference | Essence, Code, Tip, Info, File Tree, Matrix |

### Lessons Learned (Apply to All Future Work)

| Lesson | Source | Rule |
|--------|--------|------|
| Standardize borders | DD-001 | All left borders must be 4px |
| Avoid traffic-light | DD-001 | Never stack green (Tip) + red (Gotcha) adjacent |
| Recovery breathing | DD-001, DD-002 | 64-80px whitespace after dense sections |
| h3 needs italic | DD-002 | All h3 should be `font-style: italic` |
| Density indicators | DD-002 | Remove after section 2 (users understand pattern) |
| Inter-island connection | DD-003 | Add thematic headers above island clusters |
| Callout visibility | DD-003 | Ensure callouts have visible backgrounds |

═══════════════════════════════════════════════════════════════════════════════
## 3. DESIGN TOKENS — Locked Values
═══════════════════════════════════════════════════════════════════════════════

**Source:** `design-extraction/component-system/perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md`

### Colors (LOCKED)

```css
--color-primary: #E83025;           /* Sanrok red */
--color-background: #FEF9F5;        /* Warm cream */
--color-text: #1A1A1A;              /* Near-black */
--color-text-secondary: #666666;
--color-border: #E0D5C5;
--color-border-subtle: #F0EBE3;

/* Callout Accents */
--accent-blue: #4A90D9;             /* Info */
--accent-green: #4A9D6B;            /* Tip */
--accent-amber: #D97706;            /* Essence, Reasoning */
--accent-purple: #7C3AED;           /* Challenge */
```

### Typography (LOCKED)

```css
--font-display: 'Instrument Serif', Georgia, serif;
--font-body: 'Inter', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', 'SF Mono', monospace;
```

### Geometry (LOCKED)

```css
--border-radius: 0;                 /* ALWAYS sharp edges */
--box-shadow: none;                 /* ALWAYS flat design */
--border-left-width: 4px;           /* Standardized callout borders */
```

### Spacing Scale

```css
--space-2: 8px;    /* Within element */
--space-3: 12px;   /* Related items */
--space-4: 16px;   /* Standard separation */
--space-6: 24px;   /* Component padding */
--space-8: 32px;   /* Section breaks */
--space-12: 48px;  /* Page margins */
--space-16: 64px;  /* Major sections */
--space-20: 80px;  /* EXHALE breathing */
--space-24: 96px;  /* Sparse ocean */
```

═══════════════════════════════════════════════════════════════════════════════
## 4. COMPONENT CATALOG — The 11 Characters
═══════════════════════════════════════════════════════════════════════════════

**Source:** `checkpoints/COMPONENTS-REGISTRY.md`

| # | Component | Character | Soul Score | Velocity | Temperature | Weight |
|---|-----------|-----------|------------|----------|-------------|--------|
| 1 | Code Snippet | Precise Transcriptionist | 82% | SLOW | Neutral | Heavy |
| 2 | Info Callout | Senior Concierge | 88% | FAST | Neutral | Light |
| 3 | Tip Callout | Seasoned Colleague | 82% | FAST | Warm | Light |
| 4 | Gotcha Callout | Vigilant Sentinel | 85% | FAST | Cold | Medium |
| 5 | Essence Callout | Archivist of Axioms | 90% | SLOW | Warm | Medium |
| 6 | Challenge Callout | Spirited Catalyst | 86% | FAST | Warm | Medium |
| 7 | File Tree | Methodical Surveyor | 87% | MEDIUM | Neutral | Heavy |
| 8 | Decision Matrix | Impartial Cartographer | 81% | MEDIUM | Neutral | Heavy |
| 9 | Core Abstraction | Sagacious Mentor | 84% | SLOW | Reverent | Heavy |
| 10 | Task Component | Diligent Scribe | 85% | FAST | Utilitarian | Medium |
| 11 | Reasoning | Deliberative Counselor | 90% | SLOW | Deliberate | Heavy |

═══════════════════════════════════════════════════════════════════════════════
## 5. ANTI-PATTERNS — What NOT to Do
═══════════════════════════════════════════════════════════════════════════════

**Source:** `design-extraction/component-system/perceptual-audit-v2/synthesis/ANTI-PATTERNS-REGISTRY.md`

| Anti-Pattern | Why It Fails | Alternative |
|--------------|--------------|-------------|
| Rounded corners | Signals "safe/generic" | Sharp edges (border-radius: 0) |
| Shadows | Fake 3D, dishonest | Flat design (box-shadow: none) |
| Traffic-light colors | Kindergarten-level | Semantic colors (blue info, amber essence) |
| Callout cacophony (3+) | Alarm fatigue | Max 1-2 per viewport |
| Code wall (no breaks) | Reader loses context | Buffer with callouts/explanation |
| Same density throughout | Monotonous, no rhythm | Use PULSE/CRESCENDO patterns |
| Hover reveals for important content | Touch devices excluded | Click to expand |
| Decorative grid breaking | Violates flat design | Break with content, not decoration |

═══════════════════════════════════════════════════════════════════════════════
## 6. FILE STRUCTURE — Where Everything Lives
═══════════════════════════════════════════════════════════════════════════════

```
docs-spa/app/showcase/
├── FINDINGS-INDEX.md              ← THIS FILE (master reference)
├── checkpoints/
│   ├── MASTER-STATE.md            ← Current position, next action
│   ├── RESEARCH-ACTIVE.md         ← Research application tracking
│   ├── COMPONENTS-REGISTRY.md     ← 11 components, structural profiles
│   ├── SECTIONS-PROGRESS.md       ← 7 sections, iteration status
│   └── DISCOVERIES-LOG.md         ← 24 explorations, scores, decisions
├── research/
│   ├── R1-DOCUMENTATION-PATTERNS.md
│   ├── R2-CREATIVE-LAYOUTS.md
│   ├── R3-DENSITY-DIMENSIONS.md
│   ├── R4-AXIS-INNOVATIONS.md
│   ├── R5-COMBINATION-THEORY.md
│   └── RESEARCH-SYNTHESIS.md
├── explorations/
│   ├── density/
│   │   ├── DD-001-breathing.html
│   │   ├── DD-002-gradient.html
│   │   └── DD-003-islands.html
│   ├── organizational/
│   ├── axis/
│   └── combination/
└── screenshots/
    └── explorations/
        ├── DD-001-breathing-full.png
        ├── DD-002-gradient-full.png
        └── DD-003-islands-full.png
```

═══════════════════════════════════════════════════════════════════════════════
## 7. MIGRATION GUIDE — Preserving Findings
═══════════════════════════════════════════════════════════════════════════════

### When Moving to New Framework

1. **Preserve Design Tokens** — Copy `:root` variables exactly
2. **Preserve Component Properties** — Velocity/Temperature/Weight model
3. **Preserve Density Patterns** — PULSE/CRESCENDO/WAVE implementations
4. **Preserve Combination Rules** — Sequence recommendations
5. **Preserve Anti-Patterns** — Explicit "do not" list

### When Building Automation/Pipelines

1. **Input:** Content type → **Output:** Recommended density pattern
2. **Input:** Component sequence → **Output:** Spacing calculations
3. **Input:** Section purpose → **Output:** Axis pattern recommendation
4. **Input:** Component pairing → **Output:** Valid/invalid + why

### Deriving Rules for AI Systems

```yaml
density_pattern_selection:
  tutorial: PULSE
  onboarding: CRESCENDO
  reference: Islands
  long_form: WAVE

spacing_calculation:
  related_components: 24px
  section_break: 48px
  region_break: 80px+
  density_recovery: 64-80px after dense

component_pairing_rules:
  - never_stack: [same_velocity, same_velocity]
  - always_buffer: [heavy, heavy] with light
  - avoid_adjacent: [Tip, Gotcha]  # traffic-light
```

═══════════════════════════════════════════════════════════════════════════════
## DOCUMENT METADATA
═══════════════════════════════════════════════════════════════════════════════

**Created:** 2026-02-04
**Purpose:** Master index for all findings, structured for future use
**Update Frequency:** After each exploration completes
**Critical:** This is the GO-TO document for "what exists and when to use it"

