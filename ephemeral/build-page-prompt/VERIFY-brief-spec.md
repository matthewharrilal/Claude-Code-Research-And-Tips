# Conventions-Brief Spec Verification

**Verifier:** spec-verifier (Opus 4.6)
**Date:** 2026-02-19
**Source:** DRAFT-09-conventions-brief-section.md
**Specification:** User's 10-section conventions-brief description

---

## Section-by-Section Verification

### 1. Identity (5 non-negotiable soul constraints)

- **[PRESENT]:** YES -- Section 1 "IDENTITY (Soul)" at line 44
- **[ACCURATE]:** YES -- Describes soul constraints as non-negotiable physics
- **[COMPLETE]:** PARTIAL -- Lists 6 constraints, not 5. User said "container width, warm palette, no pure black, etc." implying 5. Draft has: border-radius 0, box-shadow none, drop-shadow never, solid backgrounds only, no #000/#FFF, opacity 1 on containers. Container width is mentioned separately below the constraint block. The count discrepancy (5 vs 6+) is not a problem -- the user said "the 5 non-negotiable soul constraints" with "etc." suggesting approximate count, and draft covers ALL examples the user mentioned plus more.
- **[TONE]:** WORLD DESCRIPTION -- "They are the physics of this world" -- excellent framing

**Soul constraints check:** Container width (YES, line 59: "940-960px wide, centered"), warm palette (YES, lines 63-80), no pure black (YES, line 53: "no #000 or #FFF"), border-radius 0 (YES, line 49), no shadows (YES, lines 50-51), solid backgrounds only (YES, line 52). All present.

**Verdict: PASS**

---

### 2. Perception Thresholds (the FLOOR)

- **[PRESENT]:** YES -- Section 2 "PERCEPTION (The Physics of Visibility)" at line 84
- **[ACCURATE]:** YES -- Describes thresholds as physics of perception, references Flagship 1.5/4 failure
- **[COMPLETE]:** CHECK EXACT VALUES:
  - Backgrounds >= 15 RGB: YES (line 90: "at least one RGB channel differs by 15 or more points")
  - Font sizes >= 2px: YES (line 92: "2px font-size delta")
  - Letter-spacing >= 0.03em: YES (line 92: "0.03em letter-spacing delta")
  - Stacked gaps <= 108px: YES (line 94: "Stacked gaps above 108px create voids")
- **[TONE]:** WORLD DESCRIPTION -- "These are not rules to comply with. They are the physics of human perception." -- excellent

**All 4 exact thresholds present: >=15 RGB, >=2px, >=0.03em, <=108px.**

**Verdict: PASS**

---

### 3. Transition Grammar (3 types of zone transitions)

- **[PRESENT]:** YES -- Section 7 "TRANSITION GRAMMAR (Three Kinds of Boundary)" at line 199
- **[ACCURATE]:** PARTIAL -- The user specified 3 types named "hard cut, spacing shift, checkpoint." The draft names them "SMOOTH, BRIDGE, BREATHING" instead.
- **[COMPLETE]:** The 3 types are fully described with CSS specifics. The NAMES differ from the user's specification:
  - User: "hard cut" -- Draft: not present by this name. "BREATHING" (full rest, structural border 3-4px) is closest
  - User: "spacing shift" -- Draft: "SMOOTH" (quiet modulation, 15-25 RGB shift, 1px rule) is closest
  - User: "checkpoint" -- Draft: "BRIDGE" (deliberate pause, 25+ RGB, tinted breathing band) is closest
- **[TONE]:** WORLD DESCRIPTION -- describes character of each boundary type

**The 3 transition types are present but renamed. The user said "hard cut, spacing shift, checkpoint" and the draft says "SMOOTH, BRIDGE, BREATHING." This is a NAME MISMATCH. The concepts map loosely but not exactly.**

**Verdict: PARTIAL PASS -- names differ from spec**

---

### 4. Multi-Coherence Binding (>=3 CSS channels shift together)

- **[PRESENT]:** YES -- Section 4 "MULTI-COHERENCE (The Binding Rule)" at line 124
- **[ACCURATE]:** YES -- "at least 3 of 6 CSS channels shift simultaneously, all pointing the same semantic direction"
- **[COMPLETE]:** CHECK 6 CHANNELS:
  1. Color: YES (line 129: "Chromatic -- background-color shift")
  2. Type: YES (line 130: "Typographic -- font-size, font-weight, letter-spacing, or line-height shift")
  3. Spacing: YES (line 131: "Spatial -- padding, margin, or content density shift")
  4. Structure: YES (line 132: "Structural -- border-left weight, horizontal rules, or divider presence change")
  5. Behavior: YES (line 133: "Behavioral -- hover states, transition timing change")
  6. Material: YES (line 134: "Material -- surface treatment or component density change")
- **[TONE]:** WORLD DESCRIPTION with concrete example (lines 148-149)

**All 6 channels named: color, type, spacing, structure, behavior, material. CHECK.**

**Note:** User used simplified names (color, type, spacing, structure, behavior, material). Draft uses (Chromatic, Typographic, Spatial, Structural, Behavioral, Material). These map 1:1. PASS.

**Verdict: PASS**

---

### 5. Fractal Echo (same pattern at 5 zoom levels)

- **[PRESENT]:** YES -- Section 5 "FRACTAL ECHO (Pattern at Every Scale)" at line 159
- **[ACCURATE]:** YES -- "echoes its organizing principle at multiple architectural scales"
- **[COMPLETE]:** CHECK 5 ZOOM LEVELS:
  1. Navigation: YES (line 167)
  2. Page: YES (line 168)
  3. Section: YES (line 169)
  4. Component: YES (line 170)
  5. Character: YES (line 171)
- **[TONE]:** WORLD DESCRIPTION -- "one idea expressed at 5 scales" concept present, with practical table

**All 5 zoom levels named: Navigation, Page, Section, Component, Character. CHECK.**

**Verdict: PASS**

---

### 6. Compositional Memory (protocol to prevent drift)

- **[PRESENT]:** YES -- Section 10 "COMPOSITIONAL MEMORY (Preventing Drift)" at line 261
- **[ACCURATE]:** YES -- "Long builds drift... the coherence direction established at Section 1 may have faded"
- **[COMPLETE]:** YES -- Three habits described: boundary naming, midpoint reflection, category awareness. Includes periodic check concept: "am I still expressing the same metaphor I started with?" is captured by the midpoint reflection and conviction card reference.
- **[TONE]:** WORLD DESCRIPTION -- "habits prevent drift" framing, not checklist

**Verdict: PASS**

---

### 7. Self-Check (5 questions builder asks mid-build)

- **[PRESENT]:** YES -- Section 11 "FIVE QUESTIONS (Before You Submit)" at line 275
- **[ACCURATE]:** YES -- 5 questions presented
- **[COMPLETE]:** CHECK SPECIFIC QUESTIONS from user spec:
  - "Can I see zone transitions from 3 feet away?": YES -- "The Squint" (line 279: "Lean back and squint... If you can identify every zone boundary from blur alone")
  - "Do >=3 channels shift at each boundary?": YES -- "The Boundary" (line 285: "Count the CSS channels that shift there. If 3 or more shift in the same direction")
  - 3 additional questions present: The Scroll (void detection), The Second Half (below-midpoint moment), The Skeleton (structural integrity)
- **[TONE]:** WORLD DESCRIPTION -- "These questions have no 'pass' state. They are compositional mirrors."

**Both specifically named user questions are present. 5 total questions. CHECK.**

**Verdict: PASS**

---

### 8. Creative Authority (builder owns 80% of decisions)

- **[PRESENT]:** YES -- Section 9 "CREATIVE AUTHORITY (What You Are Free To Do)" at line 244
- **[ACCURATE]:** YES -- Explicit about builder's freedom
- **[COMPLETE]:** CHECK 80% NUMBER:
  - Line 246: "You are the composer."
  - Line 255: "The constraint-to-freedom ratio of this brief is intentionally low. You have far more freedom than restriction."
  - **MISSING:** The exact "80%" number is NOT stated in Section 9. The drafter's notes (line 25) mention "80% freedom / 20% constraint" but this is in the DRAFTER'S NOTES, not in the actual brief content that the builder reads.
- **[TONE]:** WORLD DESCRIPTION -- "You are the composer. The soul constraints are your instrument's range"

**The user explicitly said "explicit statement that the builder owns 80% of decisions -- grid layouts, component styling, mechanism selection, metaphor choice." The 80% number is ABSENT from the actual brief content. The specific examples (grid layouts, component styling, mechanism selection, metaphor choice) ARE present in the bullet list (lines 248-254).**

**Verdict: PARTIAL PASS -- missing explicit "80%" number**

---

### 9. Quality Floor (minimum 14 mechanisms, 800+ CSS lines, >=3 channel shifts)

- **[PRESENT]:** ABSENT AS STANDALONE SECTION -- There is no dedicated "Quality Floor" section.
- **[ACCURATE]:** N/A
- **[COMPLETE]:** CHECK SPECIFIC VALUES:
  - Minimum 14 mechanisms: NOT FOUND in the brief content. Searched all sections -- no "14" appears in the brief body.
  - 800+ CSS lines: NOT FOUND in the brief content.
  - >=3 channel shifts at every boundary: YES (Section 4, line 126: "at least 3 of 6 CSS channels shift simultaneously")
- **[TONE]:** N/A -- section not present

**This is a SIGNIFICANT OMISSION. The user specified "Quality floor: minimum 14 mechanisms, 800+ CSS lines, >=3 channel shifts at every boundary" as Section 9. The draft has NO dedicated quality floor section, and the specific values of 14 mechanisms and 800+ CSS lines are absent from the brief entirely. Only the >=3 channel shifts value appears (in Section 4).**

**Verdict: FAIL -- section missing, 2 of 3 specific values absent**

---

### 10. Conviction Card (builder writes "this page is about ___" before starting)

- **[PRESENT]:** YES -- "CONVICTION CARD (Your Commitment)" at line 372
- **[ACCURATE]:** YES -- builder writes commitment before starting
- **[COMPLETE]:** YES -- Template includes "Organizing principle: [one sentence]" which is the "this page is about ___" concept. Also includes checking it at the end: line 393 "When you are deep in CSS at Section 9... scroll back to your conviction statement."
- **[TONE]:** WORLD DESCRIPTION + recipe (template is necessarily prescriptive, but framing is about anchoring compositional memory)

**Verdict: PASS**

---

## Specific Value Checks Summary

| Check | Status |
|-------|--------|
| 5 soul constraints listed? | YES (6+ listed, all user examples present) |
| Exact thresholds (>=15 RGB, >=2px, >=0.03em, <=108px)? | YES (all 4 present with exact values) |
| 3 transition types named (hard cut, spacing shift, checkpoint)? | NO -- renamed to SMOOTH, BRIDGE, BREATHING |
| 6 channels named (color, type, spacing, structure, behavior, material)? | YES (Chromatic, Typographic, Spatial, Structural, Behavioral, Material) |
| 5 zoom levels (Navigation, Page, Section, Component, Character)? | YES (all 5 in table) |
| 5 self-check questions present? | YES (5 questions: Squint, Scroll, Second Half, Boundary, Skeleton) |
| 80% creative authority number stated? | NO -- only in drafter notes, not in brief body |
| Quality floors (14 mechanisms, 800+ CSS lines, >=3 channel shifts)? | PARTIAL -- only >=3 shifts present; 14 mechanisms and 800+ CSS absent |
| Conviction card protocol included? | YES (full template + end-of-build check) |
| Overall tone WORLD DESCRIPTION (not checklist)? | YES -- strong world-description framing throughout |

---

## Overall Tone Assessment

The brief is overwhelmingly written as a WORLD DESCRIPTION. Key phrases:
- "This brief describes the world you are building inside"
- "They are the physics of this world"
- "These are not rules to comply with. They are the physics of human perception"
- "You are the composer. The soul constraints are your instrument's range"
- "These questions have no 'pass' state. They are compositional mirrors"

The format analysis (55% conventions / 25% recipe / 20% checklist) matches the user's intent of "world description, not checklist." **PASS on tone.**

---

## Issues Found

### BLOCKING (must fix before shipping)

1. **Quality Floor section MISSING.** User specified Section 9 as "Quality floor: minimum 14 mechanisms, 800+ CSS lines, >=3 channel shifts at every boundary." No dedicated section exists. The values "14 mechanisms" and "800+ CSS lines" appear NOWHERE in the brief content. These are specific numeric floors the user explicitly requested.

2. **80% creative authority number MISSING from brief body.** User said "explicit statement that the builder owns 80% of decisions." The 80% figure appears only in drafter's notes (metadata), not in the brief content the builder would read.

### SIGNIFICANT (should fix)

3. **Transition type names don't match user spec.** User said "hard cut, spacing shift, checkpoint." Draft says "SMOOTH, BRIDGE, BREATHING." The concepts loosely map but the names are different, and the semantic mapping isn't exact ("hard cut" suggests the most dramatic boundary but maps most closely to "BREATHING" which suggests gentleness).

### MINOR (informational)

4. **Section numbering differs from user spec.** User's Section 9 (Quality Floor) is absent, and the draft has 14 sections vs user's 10. Extra sections (Restraint List, Accessibility, Responsive Behavior, CSS Vocabulary, Richness, Unified Metaphor) are valuable additions but change the structure. This is acceptable if the 10 core sections are all present -- which they aren't (Quality Floor is missing).

5. **Draft is 232 lines vs target ~230 lines.** This is within tolerance. PASS.

---

## Verdict

**7/10 sections PASS, 2/10 PARTIAL PASS, 1/10 FAIL.**

The FAIL (Quality Floor) is the most critical issue: the user explicitly asked for "minimum 14 mechanisms, 800+ CSS lines, >=3 channel shifts at every boundary" and two of those three values are entirely absent from the brief. This is a concrete, measurable specification gap.

The two PARTIAL PASS items (transition names, 80% number) are fixable with small edits.

**Recommendation:** Add a "Quality Floor" subsection (can be embedded within Creative Authority or as its own section) stating the three minimum values. Add "80%" to Creative Authority. Consider aligning transition names to user's specification or documenting the rename rationale.
