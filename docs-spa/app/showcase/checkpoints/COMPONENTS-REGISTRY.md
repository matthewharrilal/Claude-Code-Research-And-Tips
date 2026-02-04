# COMPONENTS-REGISTRY — All 11 KortAI Components
## Showcase Status, Structural Profiles, Soul Scores

═══════════════════════════════════════════════════════════════════════════════
## REGISTRY OVERVIEW
═══════════════════════════════════════════════════════════════════════════════

**Total Components:** 11
**Showcased:** 0/11
**In Progress:** 0/11
**Not Started:** 11/11

### Quick Status Matrix

| # | Component | Character | Soul | Catalog | Family | Density | Axis | Stress |
|---|-----------|-----------|------|---------|--------|---------|------|--------|
| 1 | Code Snippet | Precise Transcriptionist | 82% | ░ | ░ | ░ | ░ | ░ |
| 2 | Info Callout | Senior Concierge | 88% | ░ | ░ | ░ | ░ | ░ |
| 3 | Tip Callout | Seasoned Colleague | 82% | ░ | ░ | ░ | ░ | ░ |
| 4 | Gotcha Callout | Vigilant Sentinel | 85% | ░ | ░ | ░ | ░ | ░ |
| 5 | Essence Callout | Archivist of Axioms | 90% | ░ | ░ | ░ | ░ | ░ |
| 6 | Challenge Callout | Spirited Catalyst | 86% | ░ | ░ | ░ | ░ | ░ |
| 7 | File Tree | Methodical Surveyor | 87% | ░ | ░ | ░ | ░ | ░ |
| 8 | Decision Matrix | Impartial Cartographer | 81% | ░ | ░ | ░ | ░ | ░ |
| 9 | Core Abstraction | Sagacious Mentor | 84% | ░ | ░ | ░ | ░ | ░ |
| 10 | Task Component | Diligent Scribe | 85% | ░ | ░ | ░ | ░ | ░ |
| 11 | Reasoning | Deliberative Counselor | 90% | ░ | ░ | ░ | ░ | ░ |

**Legend:** ░ = Not started | ▓ = In progress | █ = Complete

═══════════════════════════════════════════════════════════════════════════════
## COMPONENT 1: CODE SNIPPET
═══════════════════════════════════════════════════════════════════════════════

### Identity
- **Character:** The Precise Transcriptionist
- **Soul Score:** 49/60 (82%)
- **Archetype:** Scholarly transcription

### Soul Truth
> "Code Snippet feels like a scholar's precise transcription — dark slate for focus, syntax colors as semantic marginalia, generous breathing room for contemplation, and a single silent gesture (copy) that says 'take this knowledge with you.' It presents code without commentary, trusts the reader's intelligence, and achieves authority through accuracy rather than decoration."

### Structural Profile

| Property | Value |
|----------|-------|
| Zone Structure | 2-zone (header + code body) |
| Structural Role | Creates FOCUS ZONE — technical island |
| Density Contribution | MEDIUM-HIGH (dense code, generous padding) |
| Zone Separation | Implicit internal (whitespace), explicit external (color mass) |
| Axis Behavior | Simple H+V, content-driven sizing |

### CSS Tokens
```css
--code-bg: #1E1E1E;
--code-text: #F5F0EB;
--code-header-bg: rgba(255,255,255,0.05);
--code-border-separator: rgba(255,255,255,0.1);
--code-line-number-color: #666666;
```

### Verification Checklist
- [ ] Dark background (#1E1E1E)
- [ ] No header bar/window chrome (no traffic light dots)
- [ ] Syntax highlighting 2-3 colors max
- [ ] Copy button hover-reveal only
- [ ] Sharp corners (border-radius: 0)
- [ ] Flat design (box-shadow: none)

### Showcase Status
| Section | Status | Iteration | Notes |
|---------|--------|-----------|-------|
| Catalog (1) | NOT STARTED | - | - |
| Families (2) | NOT STARTED | - | Part of Technical Family |
| Density (3) | NOT STARTED | - | - |
| Axis (4) | NOT STARTED | - | - |
| Stress (6) | NOT STARTED | - | Kitchen sink test |

═══════════════════════════════════════════════════════════════════════════════
## COMPONENT 2: INFO CALLOUT
═══════════════════════════════════════════════════════════════════════════════

### Identity
- **Character:** The Senior Concierge
- **Soul Score:** 53/60 (88%)
- **Archetype:** Helpful aside prioritizing function over personality

### Soul Truth
> "The Info Callout is a helpful aside that prioritizes function over personality — it whispers 'read this' without making a statement about who it is. Competent utility elevated through editorial typography."

### Structural Profile

| Property | Value |
|----------|-------|
| Zone Structure | 2-zone (label + body) + left accent flag |
| Structural Role | Creates MARGIN ANNOTATION — polite aside |
| Density Contribution | LOW-MEDIUM (breathing point) |
| Zone Separation | Implicit internal (whitespace), left border flag |
| Axis Behavior | Simple V-stack with fixed left anchor |

### CSS Tokens
```css
--callout-border-width: 4px;
--callout-padding-top: 24px;
--callout-padding-bottom: 28px;  /* Asymmetric! */
--accent-blue: #4A90D9;
--bg-info: #F5F8FA;
```

### Verification Checklist
- [ ] Left border 4px blue (#4A90D9)
- [ ] Background light blue tint (#F5F8FA or transparent)
- [ ] Label uppercase (10-11px, medium weight)
- [ ] Body sans-serif (Inter)
- [ ] No info icon (typography only)
- [ ] Asymmetric padding (24px top, 28px bottom)
- [ ] Sharp corners (border-radius: 0)

### Showcase Status
| Section | Status | Iteration | Notes |
|---------|--------|-----------|-------|
| Catalog (1) | NOT STARTED | - | - |
| Families (2) | NOT STARTED | - | Part of Callout Family |
| Density (3) | NOT STARTED | - | LOW-MEDIUM density |
| Axis (4) | NOT STARTED | - | - |
| Stress (6) | NOT STARTED | - | Kitchen sink test |

═══════════════════════════════════════════════════════════════════════════════
## COMPONENT 3: TIP CALLOUT
═══════════════════════════════════════════════════════════════════════════════

### Identity
- **Character:** The Seasoned Colleague
- **Soul Score:** 49/60 (82%)
- **Archetype:** Calm sidebar whisper

### Soul Truth
> "Tip Callout feels like a calm sidebar whisper — visually present enough to catch attention, restrained enough to not interrupt the reading flow, anchored firmly on the left like a trusted guide pointing gently at something useful."

### Structural Profile

| Property | Value |
|----------|-------|
| Zone Structure | 2-zone (label + body) + green flag — IDENTICAL to Info |
| Structural Role | Creates MARGIN ANNOTATION — friendly suggestion |
| Density Contribution | LOW-MEDIUM (family DNA) |
| Zone Separation | Same as Info Callout (family DNA) |
| Axis Behavior | Same as Info Callout (family DNA) |

### CSS Tokens
```css
--accent-green: #4A9D6B;
--bg-tip: #F5FAF5;
```

### Verification Checklist
- [ ] Left border 4px green (#4A9D6B)
- [ ] Background light green tint (#F5FAF5 or transparent)
- [ ] Structural DNA matches Info (same spacing, structure)
- [ ] No lightbulb icon (typography only)
- [ ] Sharp corners (border-radius: 0)

### Showcase Status
| Section | Status | Iteration | Notes |
|---------|--------|-----------|-------|
| Catalog (1) | NOT STARTED | - | - |
| Families (2) | NOT STARTED | - | Part of Callout Family |
| Density (3) | NOT STARTED | - | - |
| Axis (4) | NOT STARTED | - | - |
| Stress (6) | NOT STARTED | - | Kitchen sink test |

═══════════════════════════════════════════════════════════════════════════════
## COMPONENT 4: GOTCHA CALLOUT
═══════════════════════════════════════════════════════════════════════════════

### Identity
- **Character:** The Vigilant Sentinel
- **Soul Score:** 51/60 (85%)
- **Archetype:** Red-flagged margin annotation

### Soul Truth
> "Gotcha Callout functions as a velocity gate rather than a warning box — it briefly interrupts reading momentum, injects critical information, and releases the reader back to their original flow. The red border is a speed bump, not a stop sign."

### Structural Profile

| Property | Value |
|----------|-------|
| Zone Structure | 2-zone (label + body) + red/coral flag + optional pink tint |
| Structural Role | Creates VELOCITY GATE — brief interruption |
| Density Contribution | MEDIUM (attention spike) |
| Zone Separation | Same as Info + optional tinted background |
| Axis Behavior | Same as Info Callout (family DNA) |

### CSS Tokens
```css
--accent-coral: #C97065;
--color-primary: #E83025;  /* Alternative red */
--bg-gotcha: #FEF6F5;
```

### Verification Checklist
- [ ] Left border 4px red/coral (#E83025 or #C97065)
- [ ] Background pink tint optional (#FEF6F5 or transparent)
- [ ] Structural DNA matches Info (same spacing pattern)
- [ ] No warning triangle (typography only)
- [ ] Not yellow background (never #fff3cd)
- [ ] Sharp corners (border-radius: 0)

### Showcase Status
| Section | Status | Iteration | Notes |
|---------|--------|-----------|-------|
| Catalog (1) | NOT STARTED | - | - |
| Families (2) | NOT STARTED | - | Part of Callout Family |
| Density (3) | NOT STARTED | - | - |
| Axis (4) | NOT STARTED | - | - |
| Stress (6) | NOT STARTED | - | Kitchen sink test |

═══════════════════════════════════════════════════════════════════════════════
## COMPONENT 5: ESSENCE CALLOUT
═══════════════════════════════════════════════════════════════════════════════

### Identity
- **Character:** The Archivist of Axioms
- **Soul Score:** 54/60 (90%) — **HIGHEST IN FAMILY**
- **Archetype:** Marginalia note in a first-edition book

### Soul Truth
> "Essence Callout composition feels like a marginalia note in a first-edition book — the red bar is the careful underline of a previous reader marking 'THIS is the important part,' the italic text leans forward with quiet conviction, and the surrounding whitespace creates reverent space around wisdom worth preserving."

### Structural Profile

| Property | Value |
|----------|-------|
| Zone Structure | 3-zone (label + SERIF ITALIC quote + attribution) ★ UNIQUE |
| Structural Role | Creates REVERENT SPACE — editorial pull-quote |
| Density Contribution | LOW (reverent breathing room) |
| Zone Separation | Same as Info + SERIF ITALIC body typography |
| Axis Behavior | Same as Info (family DNA) |

### CSS Tokens
```css
--accent-amber: #D97706;
--bg-warm: #FEF9F0;
/* UNIQUE: Body uses Instrument Serif italic */
```

### Verification Checklist
- [ ] Left border 4px amber (#D97706 or red)
- [ ] Background warm amber tint (#FEF9F0)
- [ ] **Body font SERIF ITALIC** (Instrument Serif italic) ★ UNIQUE
- [ ] Optional attribution (em-dash + source name)
- [ ] No decorative quote marks (typography only)
- [ ] Sharp corners (border-radius: 0)

### Showcase Status
| Section | Status | Iteration | Notes |
|---------|--------|-----------|-------|
| Catalog (1) | NOT STARTED | - | - |
| Families (2) | NOT STARTED | - | Part of Callout Family — UNIQUE |
| Density (3) | NOT STARTED | - | LOW density |
| Axis (4) | NOT STARTED | - | - |
| Stress (6) | NOT STARTED | - | Kitchen sink test |

═══════════════════════════════════════════════════════════════════════════════
## COMPONENT 6: CHALLENGE CALLOUT
═══════════════════════════════════════════════════════════════════════════════

### Identity
- **Character:** The Spirited Catalyst
- **Soul Score:** 52/60 (86%)
- **Archetype:** Friendly mentor tapping your shoulder

### Soul Truth
> "Challenge Callout feels like a friendly mentor tapping your shoulder with an interesting exercise — noticeable but not interruptive, actionable but not urgent. The purple accent invites exploration while the italic serif title leans forward with enthusiasm, not demand."

### Structural Profile

| Property | Value |
|----------|-------|
| Zone Structure | 2-zone (label + body) + purple flag — IDENTICAL to Info |
| Structural Role | Creates ACTION ZONE — exploratory prompt |
| Density Contribution | MEDIUM (action prompt) |
| Zone Separation | Same as Info Callout (family DNA) |
| Axis Behavior | Same as Info Callout (family DNA) |

### CSS Tokens
```css
--accent-purple: #7C3AED;
--bg-challenge: #F5F0FF;
```

### Verification Checklist
- [ ] Left border 4px purple (#7C3AED)
- [ ] Background light purple tint (#F5F0FF or transparent)
- [ ] Structural DNA matches Info (same spacing pattern)
- [ ] No danger indicators (purple invites, not warns)
- [ ] Sharp corners (border-radius: 0)

### Showcase Status
| Section | Status | Iteration | Notes |
|---------|--------|-----------|-------|
| Catalog (1) | NOT STARTED | - | - |
| Families (2) | NOT STARTED | - | Part of Callout Family |
| Density (3) | NOT STARTED | - | - |
| Axis (4) | NOT STARTED | - | - |
| Stress (6) | NOT STARTED | - | Kitchen sink test |

═══════════════════════════════════════════════════════════════════════════════
## COMPONENT 7: FILE TREE
═══════════════════════════════════════════════════════════════════════════════

### Identity
- **Character:** The Methodical Surveyor
- **Soul Score:** 52/60 (87%)
- **Archetype:** Well-organized library card catalog

### Soul Truth
> "File Tree feels like a well-organized library card catalog — every item has one exact location, the path to any resource is immediately traceable, and the system trusts you to navigate without hand-holding. It's a reference tool, not a discovery interface."

### Structural Profile

| Property | Value |
|----------|-------|
| Zone Structure | 2-zone (optional label + tree content) |
| Structural Role | Creates REFERENCE MAP — complete structure at a glance |
| Density Contribution | HIGH (dense but structured) |
| Zone Separation | Indentation = hierarchy, ASCII = relationships |
| Axis Behavior | V-dominant with indentation-based H organization |

### CSS Tokens
```css
font-family: var(--font-mono); /* JetBrains Mono */
font-size: 13-14px;
line-height: 1.4;
--accent-blue: #4A90D9; /* Folder landmarks */
color: #888888; /* Comments */
```

### Verification Checklist
- [ ] Monospace font (JetBrains Mono)
- [ ] Warm background (#FEFCF3 cream)
- [ ] Left border accent (4px red)
- [ ] Blue folder names (#4A90D9 landmarks)
- [ ] Gray comments (annotations recede)
- [ ] Line height 1.4-1.5 (dense but readable)
- [ ] No dark terminal bg (not #1e1e1e)
- [ ] Sharp corners (border-radius: 0)

### Showcase Status
| Section | Status | Iteration | Notes |
|---------|--------|-----------|-------|
| Catalog (1) | NOT STARTED | - | - |
| Families (2) | NOT STARTED | - | Part of Technical Family |
| Density (3) | NOT STARTED | - | HIGH density |
| Axis (4) | NOT STARTED | - | - |
| Stress (6) | NOT STARTED | - | Kitchen sink test |

═══════════════════════════════════════════════════════════════════════════════
## COMPONENT 8: DECISION MATRIX
═══════════════════════════════════════════════════════════════════════════════

### Identity
- **Character:** The Impartial Cartographer
- **Soul Score:** 48.5/60 (81%)
- **Archetype:** Well-organized reference index

### Soul Truth
> "Decision Matrix feels like a well-organized reference index in a design annual — typography and whitespace do all the structural work, the red accent marks chapter divisions, and the content trusts readers to navigate without decorative hand-holding."

### Structural Profile

| Property | Value |
|----------|-------|
| Zone Structure | 3-zone (title + header + body) + left accent |
| Structural Role | Creates COMPARISON SURFACE — structured decision aid |
| Density Contribution | MEDIUM (comfortable, scannable) |
| Zone Separation | Horizontal rules (sections), whitespace (columns) — NO vertical lines |
| Axis Behavior | TRUE GRID — most multi-axis component alongside Reasoning |

### CSS Tokens
```css
--matrix-left-border: 4px solid var(--color-primary);
--matrix-row-padding: 16px;
--matrix-column-gap: 24px;
--matrix-rule-color: #E5E5E5;
/* NO vertical borders */
```

### Verification Checklist
- [ ] Left border 4px red (#E83025)
- [ ] Width auto (content-driven, not forced 100%)
- [ ] No header background (transparent headers)
- [ ] Bottom borders only (no vertical lines)
- [ ] No zebra striping (uniform background)
- [ ] No hover row highlight (content, not app)
- [ ] No ✓/✗ icons (typography only)
- [ ] Sharp corners (border-radius: 0)

### Showcase Status
| Section | Status | Iteration | Notes |
|---------|--------|-----------|-------|
| Catalog (1) | NOT STARTED | - | - |
| Families (2) | NOT STARTED | - | Part of Structural Family |
| Density (3) | NOT STARTED | - | - |
| Axis (4) | NOT STARTED | - | True grid component |
| Stress (6) | NOT STARTED | - | Kitchen sink test |

═══════════════════════════════════════════════════════════════════════════════
## COMPONENT 9: CORE ABSTRACTION
═══════════════════════════════════════════════════════════════════════════════

### Identity
- **Character:** The Sagacious Mentor
- **Soul Score:** 50.5/60 (84%)
- **Archetype:** Programming textbook chapter on fundamentals

### Soul Truth
> "Core Abstraction feels like a well-designed programming textbook opened to a chapter on fundamental principles — the philosophy quote is a pull-quote in a cream inset box, the code block is a specimen listing in dark contrast, and the reader is guided from 'why' to 'how' in a single unified teaching moment."

### Structural Profile

| Property | Value |
|----------|-------|
| Zone Structure | 5-zone (label + quote + label + code + commentary) in 1px frame |
| Structural Role | Creates TEACHING UNIT — principle + proof as one |
| Density Contribution | MEDIUM-HIGH (with internal rhythm LOW→HIGH→MEDIUM) |
| Zone Separation | Frame boundary (1px), embedded dark code |
| Axis Behavior | Complex V-stack with embedded code block |

### CSS Tokens
```css
border: 1px solid var(--color-border);
/* Philosophy zone uses Serif italic */
/* Code zone uses dark background */
```

### Verification Checklist
- [ ] Frame 1px border all sides (bounded unit)
- [ ] Philosophy above code (stacked layout)
- [ ] Philosophy serif italic (Instrument Serif)
- [ ] Code section dark bg (#1E1E1E)
- [ ] Red labels (#E83025)
- [ ] Sharp corners (border-radius: 0)

### Showcase Status
| Section | Status | Iteration | Notes |
|---------|--------|-----------|-------|
| Catalog (1) | NOT STARTED | - | - |
| Families (2) | NOT STARTED | - | Part of Structural Family |
| Density (3) | NOT STARTED | - | MEDIUM-HIGH (composite) |
| Axis (4) | NOT STARTED | - | Complex V-stack |
| Stress (6) | NOT STARTED | - | Kitchen sink test |

═══════════════════════════════════════════════════════════════════════════════
## COMPONENT 10: TASK COMPONENT
═══════════════════════════════════════════════════════════════════════════════

### Identity
- **Character:** The Diligent Scribe
- **Soul Score:** 51/60 (85%)
- **Archetype:** Scholarly margin checklist

### Soul Truth
> "Task Component feels like a scholarly margin checklist in a project notebook — the red checkbox is a satisfying mark of completion without gamified dopamine, the strikethrough signals 'finished' without removing visibility, and the grouped lists create manageable chunks of work without overwhelming."

### Structural Profile

| Property | Value |
|----------|-------|
| Zone Structure | 3-4 zones per task (checkbox + title + description + metadata) |
| Structural Role | Creates WORK QUEUE — scannable, actionable items |
| Density Contribution | MEDIUM-HIGH (lists dense, individual tasks moderate) |
| Zone Separation | Tasks TOUCH (0px gap = continuity), checkbox registration line |
| Axis Behavior | Hybrid V-stack with H-split for checkbox/content |

### CSS Tokens
```css
.task-list .task + .task { margin-top: 0; } /* Tasks touch */
/* Checkbox: 18px square, 0 radius */
/* Completed: strikethrough, color: #666666 */
```

### Verification Checklist
- [ ] Tasks touch (0px gap) — workflow continuity
- [ ] Checkbox sharp square (border-radius: 0)
- [ ] Completed = strikethrough (not removed)
- [ ] Checkbox red when checked (#E83025 fill)
- [ ] No gamification colors (no green/confetti)
- [ ] Header underline red (section marker)

### Showcase Status
| Section | Status | Iteration | Notes |
|---------|--------|-----------|-------|
| Catalog (1) | NOT STARTED | - | - |
| Families (2) | NOT STARTED | - | Part of Structural Family |
| Density (3) | NOT STARTED | - | - |
| Axis (4) | NOT STARTED | - | Hybrid axis |
| Stress (6) | NOT STARTED | - | Kitchen sink test |

═══════════════════════════════════════════════════════════════════════════════
## COMPONENT 11: REASONING COMPONENT
═══════════════════════════════════════════════════════════════════════════════

### Identity
- **Character:** The Deliberative Counselor
- **Soul Score:** 54/60 (90%) — **TIED FOR HIGHEST**
- **Archetype:** Structured analyst's comparison brief

### Soul Truth
> "Reasoning Component feels like a structured analyst's comparison brief in a premium financial publication — two options presented with equal visual weight, no color-coded judgment, culminating in an amber-bordered recommendation that offers wisdom without coercion."

### Structural Profile

| Property | Value |
|----------|-------|
| Zone Structure | 3-zone (title + 2-column comparison + amber summary) in 1px frame |
| Structural Role | Creates DECISION SURFACE — balanced comparison + guidance |
| Density Contribution | MEDIUM (with high-density comparison zone) |
| Zone Separation | Frame boundary, subtle column divider, summary bg change |
| Axis Behavior | V-dominant with H-split in comparison zone |

### CSS Tokens
```css
--reasoning-frame: 1px solid #E5E5E5;
--reasoning-divider: 1px solid #E5E5E5;
--reasoning-summary-bg: #FEF9F0;
--reasoning-amber: #D97706;
```

### Verification Checklist
- [ ] Frame 1px border all sides (bounded analysis)
- [ ] Two columns only (binary comparison)
- [ ] Equal column heights (no visual bias)
- [ ] Subtle column divider (1px, barely visible)
- [ ] Summary amber background (#FEF9F0)
- [ ] No color-coded columns (equal weight)
- [ ] Title serif italic (frames the question)
- [ ] Sharp corners (border-radius: 0)

### Showcase Status
| Section | Status | Iteration | Notes |
|---------|--------|-----------|-------|
| Catalog (1) | NOT STARTED | - | - |
| Families (2) | NOT STARTED | - | Part of Structural Family |
| Density (3) | NOT STARTED | - | MEDIUM (composite) |
| Axis (4) | NOT STARTED | - | V with H-split |
| Stress (6) | NOT STARTED | - | Kitchen sink test |

═══════════════════════════════════════════════════════════════════════════════
## COMPONENT FAMILIES
═══════════════════════════════════════════════════════════════════════════════

### Callout Family (5 components)
- Info Callout — blue (#4A90D9)
- Tip Callout — green (#4A9D6B)
- Gotcha Callout — red/coral (#E83025/#C97065)
- Essence Callout — amber (#D97706) **★ UNIQUE: serif italic body**
- Challenge Callout — purple (#7C3AED)

**Family DNA:** All share 2-zone structure (label + body) with left accent border

### Technical Family (2 components)
- Code Snippet — dark inverted focus
- File Tree — cream with monospace typography

**Family DNA:** Both use monospace fonts, create technical reference zones

### Structural Family (4 components)
- Decision Matrix — multi-column grid
- Core Abstraction — philosophy + code composite
- Task Component — checklist workflow
- Reasoning Component — dual-column comparison

**Family DNA:** All have complex zone structures (3+), framed or bounded containers

═══════════════════════════════════════════════════════════════════════════════
## DOCUMENT METADATA
═══════════════════════════════════════════════════════════════════════════════

**Created:** 2026-02-04
**Purpose:** Track all 11 components + showcase status per section
**Update Frequency:** After each component is showcased in any section
**Source:** CHARACTER-FAMILY-COMPLETE.md, DESIGN-TOKEN-SUMMARY.md, CONSISTENCY-VERIFICATION.md
