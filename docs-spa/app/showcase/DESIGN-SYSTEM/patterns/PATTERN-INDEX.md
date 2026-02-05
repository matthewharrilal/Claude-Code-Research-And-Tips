---
backbone_ref: DESIGN-SYSTEM/BACKBONE.md
manifest_ref: DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md
last_updated: 2026-02-05
---

# PATTERN INDEX
## The Migration Entry Point

═══════════════════════════════════════════════════════════════════════════════
## HOW TO USE THIS INDEX
═══════════════════════════════════════════════════════════════════════════════

This is NOT a menu to pick from casually.

When you select a pattern, you're selecting the accumulated research behind it.
Every pattern has:
- Research that justified it
- Explorations that validated it
- Constraints it must honor
- Downstream dependencies

**ALWAYS read the "Research Provenance" section before applying a pattern.**

═══════════════════════════════════════════════════════════════════════════════
## THE CHAIN REQUIREMENT
═══════════════════════════════════════════════════════════════════════════════

**Do not apply a pattern without understanding its chain.**

The chain tells you:
1. What research justified this pattern's existence
2. What exploration validated it (with score)
3. What soul pieces it must honor
4. What constraints from prior stages apply

If you skip the chain, you might:
- Apply a pattern that doesn't fit your content
- Violate soul pieces without realizing
- Create work that doesn't connect to the body

═══════════════════════════════════════════════════════════════════════════════
## PATTERN SELECTION GUIDE
═══════════════════════════════════════════════════════════════════════════════

Follow these 5 steps:

### Step 1: Choose Your Organizational Pattern (OD)

| Content Type | Organizational Pattern | Status |
|--------------|----------------------|--------|
| Q&A / Conversational | OD-001 Conversational | ⏳ Pending |
| Story / Tutorial | OD-002 Narrative Arc | ⏳ Pending |
| "How do I..." / Goals | OD-003 Task-Based | ⏳ Pending |
| Reference with confidence levels | OD-004 Confidence-Based | ⏳ Pending |
| Navigation / Overview | OD-005 Spatial/Map | ⏳ Pending |

### Step 2: Apply the Paired Density Pattern (DD)

| Organizational Pattern | Paired Density | Why |
|------------------------|----------------|-----|
| OD-001 Conversational | PULSE, TIDAL | Alternating Q&A pairs with alternating density |
| OD-002 Narrative Arc | CRESCENDO | Story builds; density builds with it |
| OD-003 Task-Based | ISLANDS | Tasks are clusters in sparse navigation |
| OD-004 Confidence-Based | GEOLOGICAL | Certainty layers = depth layers |
| OD-005 Spatial/Map | Custom | May need new density pattern |

### Step 3: Apply FRACTAL Self-Similarity (MANDATORY)

Regardless of your primary density pattern, apply DD-F-006:

The same dense/sparse rhythm should appear at:
- **Page level** (dense/sparse sections)
- **Section level** (dense/sparse paragraphs)
- **Component level** (dense/sparse zones within components)
- **Character level** (dense code / sparse comments)

### Step 4: Choose Axis Layout (AD) ⏳ Pending

| Content Type | Suggested Axis | Status |
|--------------|---------------|--------|
| Hero / Landing | Z-Pattern | ⏳ |
| Text-heavy / Reference | F-Pattern | ⏳ |
| Component catalog | Bento Grid | ⏳ |
| Non-linear exploration | Spiral | ⏳ |

### Step 5: Verify Soul Compliance (ALWAYS)

Before finalizing, verify:

| Soul Piece | Check |
|------------|-------|
| #1 Sharp Edges | border-radius: 0 everywhere? |
| #2 Archivist Serif | Wisdom content in serif italic? |
| #3 Family DNA | Callouts 2-zone + 4px left? |
| #4 No Shadows | box-shadow: none everywhere? |
| #5 Squares Signal | Procedures use squares? |

═══════════════════════════════════════════════════════════════════════════════
## DENSITY PATTERNS (Validated)
═══════════════════════════════════════════════════════════════════════════════

### PULSE — Rhythmic High-Low Cycles

**When to Use:** Tutorials, step-by-step guides, alternating content

**Research Provenance:**
- R3-035: "PULSE pattern: High-Low-High-Low cycles for tutorials"
- R1-001: "Density Rhythm Principle"
- DD-F-001: Generated finding

**Validated By:** DD-001 Breathing (33/40 INCLUDE)

**Soul Pieces Verified:** #1 ✅, #2 ✅, #3 ✅, #4 ✅

**Constraints from Prior Stages:**
- Must honor 5 soul pieces (Stage 1)
- Must apply fractal self-similarity (DD-F-006)

**Implementation:**
```css
.pulse-inhale { padding: 24px; }  /* Dense */
.pulse-exhale { padding: 64-80px; }  /* Sparse */
```

---

### CRESCENDO — Sparse to Dense Build

**When to Use:** Onboarding, progressive learning, narrative content

**Research Provenance:**
- R3-036: "CRESCENDO pattern: Sparse to dense for onboarding"
- R3-007: "Progressive disclosure creates density gradients"
- DD-F-002: Generated finding

**Validated By:** DD-002 Gradient (35/40 INCLUDE)

**Soul Pieces Verified:** #1 ✅, #2 ✅, #3 ✅, #4 ✅, #5 ✅

**Constraints from Prior Stages:**
- Remove density indicators after section 2 (DD-002 learning)
- Must honor 5 soul pieces
- Must apply fractal self-similarity

**Implementation:**
```css
.crescendo-1 { padding: 80px; }  /* Very sparse */
.crescendo-2 { padding: 64px; }  /* Sparse */
.crescendo-3 { padding: 48px; }  /* Medium */
.crescendo-4 { padding: 24px; }  /* Dense */
.crescendo-5 { padding: 16px; }  /* Very dense */
```

---

### ISLANDS — Dense Clusters in Sparse Space

**When to Use:** Reference documentation, task groups, knowledge clusters

**Research Provenance:**
- R3-005: "Information stratifies like geological layers" (partial)
- DD-F-003: Generated finding

**Validated By:** DD-003 Islands (32/40 INCLUDE)

**Soul Pieces Verified:** #1 ✅, #2 ✅, #3 ✅, #4 ✅

**Constraints from Prior Stages:**
- Use horizontal offsets for visual rhythm
- Archipelago (multiple islands) better than single islands
- Must honor 5 soul pieces
- Must apply fractal self-similarity

---

### GEOLOGICAL — Stacked Depth Layers

**When to Use:** Hierarchical content, expert/novice paths, deep-dive reference

**Research Provenance:**
- R3-005: "Information stratifies like geological layers"
- R3-024: "Atmosphere to bedrock" strata model
- R3-044-046: Surface/Sediment/Bedrock definitions
- DD-F-004: Generated finding

**Validated By:** DD-004 Layers (35/40 INCLUDE)

**Soul Pieces Verified:** #1 ✅, #2 ✅, #3 ✅, #4 ✅

**Constraints from Prior Stages:**
- 5-bar depth indicator recommended
- Expert can skip (Surface → Bedrock)
- Novice traverses all layers
- Must honor 5 soul pieces
- Must apply fractal self-similarity

**Layer Names:**
1. Atmosphere (minimal density)
2. Surface (low density)
3. Topsoil (medium density)
4. Subsoil (high density)
5. Bedrock (maximum density)

---

### TIDAL/RIVERS — Width as Inverse Density

**When to Use:** Comparison content, decision flows, multi-path content

**Research Provenance:**
- R3-029: "Density contrast: relative perception creates emphasis"
- R4-VR*: Visual Rhythm findings
- DD-F-005: Generated finding

**Validated By:** DD-005 Rivers (36/40 INCLUDE)

**Soul Pieces Verified:** #1 ✅, #2 ✅, #3 ✅, #4 ✅

**Constraints from Prior Stages:**
- Narrow = dense (focused code)
- Wide = sparse (relaxed context)
- Parallel rivers for comparison
- Confluence points for decisions
- Delta for choices (1→3 split)
- Must honor 5 soul pieces
- Must apply fractal self-similarity

---

### FRACTAL — Self-Similar at All Scales ★★★

**When to Use:** ALWAYS. This is the META-PATTERN.

**Research Provenance:**
- R3-023: "Good density patterns are fractal (self-similar at scales)"
- DD-F-006: Generated finding (highest importance)

**Validated By:** DD-006 Fractal (36/40 INCLUDE — HIGHEST)

**Soul Pieces Verified:** #1 ✅, #2 ✅, #3 ✅, #4 ✅

**Constraints from Prior Stages:**
- Apply to ALL other patterns
- Same rhythm at page, section, component, character levels
- Consistency beats variety

**Visual Pattern:** █░░█░░█░░ at every scale

═══════════════════════════════════════════════════════════════════════════════
## ORGANIZATIONAL PATTERNS ⏳ PENDING
═══════════════════════════════════════════════════════════════════════════════

OD explorations not yet complete. Patterns will be added after validation.

| Pattern | Status | Expected Primary Density |
|---------|--------|-------------------------|
| OD-001 Conversational | ⏳ | PULSE, TIDAL |
| OD-002 Narrative Arc | ⏳ | CRESCENDO |
| OD-003 Task-Based | ⏳ | ISLANDS |
| OD-004 Confidence-Based | ⏳ | GEOLOGICAL |
| OD-005 Spatial/Map | ⏳ | Custom |
| OD-006 Creative | ⏳ | FRACTAL (always) |

═══════════════════════════════════════════════════════════════════════════════
## AXIS PATTERNS ⏳ PENDING
═══════════════════════════════════════════════════════════════════════════════

AD explorations not yet started.

═══════════════════════════════════════════════════════════════════════════════
## COMBINATION PATTERNS ⏳ PENDING
═══════════════════════════════════════════════════════════════════════════════

CD explorations not yet started.

═══════════════════════════════════════════════════════════════════════════════
## MIGRATION WORKFLOW
═══════════════════════════════════════════════════════════════════════════════

When migrating a page to KortAI design system:

```
1. Identify content type
   └── What is this page trying to do?

2. Select organizational pattern
   └── How should information be structured?

3. Apply paired density pattern
   └── What rhythm should the page have?

4. Apply FRACTAL at all scales
   └── Does the rhythm repeat at every level?

5. Select axis layout
   └── How are components positioned?

6. Apply combination rules
   └── How do components work together?

7. Verify soul compliance
   └── Do all 5 soul pieces pass?

8. Document provenance
   └── What findings were applied? (cite IDs)
```

═══════════════════════════════════════════════════════════════════════════════
## QUICK REFERENCE: FINDING IDs
═══════════════════════════════════════════════════════════════════════════════

| When Applying | Cite |
|---------------|------|
| Sharp edges | COMP-F-001 |
| Serif italic | COMP-F-002 |
| 2-zone callouts | COMP-F-003 |
| No shadows | COMP-F-004 |
| Square shapes | COMP-F-005 |
| PULSE density | DD-F-001 |
| CRESCENDO density | DD-F-002 |
| ISLANDS density | DD-F-003 |
| GEOLOGICAL density | DD-F-004 |
| TIDAL/RIVERS density | DD-F-005 |
| FRACTAL meta-pattern | DD-F-006 |
| Traffic-light avoidance | DD-F-015 |

═══════════════════════════════════════════════════════════════════════════════
