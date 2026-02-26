# Wave 2 PA Question Surgery — Change Log
## FIX-043 through FIX-060 (18 fixes)
**Target file:** `ephemeral/va-extraction/artifact-pa-protocol.md`
**Date:** 2026-02-24
**Agent:** pa-question-editor

---

## Summary

| Category | Count | Details |
|----------|-------|---------|
| REMOVALS | 3 | PA-07, PA-10, PA-21 |
| REWRITES | 9 | PA-20, PA-23, PA-24, PA-25, PA-26, PA-28, PA-51, PA-63, PA-67 |
| NEW QUESTIONS | 6 | PA-72, PA-73, PA-74, PA-75, PA-76, PA-77 |
| **Net question count** | **+3** | 66 → 69 questions |

---

## REMOVALS (3)

### FIX-043: PA-07 REMOVED
- **Location:** Part 3, Section 3.2, Readability and Comfort table
- **Old text:** "Can you read the longest paragraph without losing your place?"
- **Reason:** Fully covered by PA-02 (uncomfortable text) + PA-08 (squint to read)
- **Collateral changes:**
  - Section header updated: "PA-06 through PA-08, PA-29" → "PA-06, PA-08, PA-29"
  - Auditor B assignment table: PA-07 removed from Core Questions, total 6 → 6 (offset by PA-77 addition)

### FIX-044: PA-21 REMOVED
- **Location:** Part 3, Section 3.3, Responsiveness table
- **Old text:** "Does everything look designed for this width, or squeezed?"
- **Reason:** Fully covered by PA-30 (1440px design) + PA-46 (768px reorganization)
- **Collateral changes:**
  - Section header updated: "PA-21 through PA-23, PA-46 through PA-47" → "PA-22, PA-23, PA-46 through PA-47"
  - Auditor H assignment table: PA-21 removed, total 5 → 5 (offset by PA-73 addition)

### FIX-045: PA-10 REMOVED
- **Location:** Part 3, Section 3.2, Spatial Balance and Proportion table
- **Old text:** "If you squint until you can't read text, does the layout look balanced?"
- **Reason:** Fully covered by PA-32 (visual weight distribution with scroll specificity)
- **Collateral changes:**
  - Section header updated: "PA-09 through PA-11, PA-30 through PA-33" → "PA-09, PA-11, PA-30 through PA-33"
  - Auditor C assignment table: PA-10 removed, total 14 → 13

---

## REWRITES (9)

### FIX-046: PA-20 REWRITTEN
- **Location:** Part 3, Section 3.2, Color and Emotion table (line ~243)
- **Old text:** "Describe this page's personality in three words. Does it match intent?"
- **New text:** "Describe this page's personality in three words. Now read one paragraph of content. Does the page's visual personality match the content's verbal personality?"
- **Reason:** "Intent" is unknown in fresh-eyes context; "content's verbal personality" is inferrable from screenshots

### FIX-047: PA-23 REWRITTEN
- **Location:** Part 3, Section 3.3, Responsiveness table (line ~252)
- **Old text:** "What breaks if you resize 200px narrower?"
- **New text:** "Comparing the 1024px and 768px screenshots, what changed for the worse? Is there anything that looks squeezed, broken, or lost between these widths?"
- **Reason:** Original requires interactive viewport resizing which screenshot-only auditors cannot do
- **Conflict resolution:** CONFLICT-001 resolved per File 14 version (more specific than File 14b)

### FIX-048: PA-28 REWRITTEN
- **Location:** Part 3, Section 3.3, Adversarial table (line ~274)
- **Old text:** "How could someone make this look terrible while passing every rule?"
- **New text:** "If you wanted to make this page look terrible while keeping its basic structure and color scheme, what 3 changes would do the most damage? What is this design most FRAGILE about?"
- **Reason:** "Passing every rule" requires rule knowledge that fresh-eyes auditors don't have

### FIX-049: PA-63 REWRITTEN (Tier 5)
- **Location:** Part 2, Section 2.2 (line ~124)
- **Old text:** "Zoom into one component (card, callout, table, code block). Does its internal design echo the page's overall design language at a smaller scale? Then find the SAME component type in a different section — does it adapt to its surroundings, or look identical?"
- **New text:** "Zoom into one component. Does its design echo the page's language? Then zoom OUT to section level — does this section's internal structure also echo the same language? Then find the SAME component type in a different section — does it adapt?"
- **Scoring criteria updated:** Added "at BOTH component and section scale" to YES criterion; added "OR section-level structure does not echo page language" to NO criterion
- **Reason:** Expands from 2-scale (component, page) to 3-scale (component, section, page) zoom test per Finding 17

### FIX-050: PA-67 REWRITTEN (Tier 5)
- **Location:** Part 2, Section 2.2 (line ~143)
- **Old text:** "Does the page feel like it is doing something you have not seen before — not just well-executed, but inventive? What specifically is novel?"
- **New text:** "Does the page do something visually that you would not have predicted from its content type? Name the specific surprise. Does the surprise serve the content or distract from it?"
- **Scoring criteria updated:** YES criterion changed from "names specific novel element/technique AND explains why it works" to "names specific unpredictable visual element AND it serves the content (not decorative distraction)"; NO criterion updated correspondingly
- **Reason:** Lowest-rated question (3.8/5), never produced clean YES. Shifts from experience-dependent "novel" to perception-grounded "predictable vs surprising"

### FIX-051: PA-24 REWRITTEN
- **Location:** Part 3, Section 3.3, Cross-Page table (line ~260)
- **Old text:** "Does this page feel like it belongs with its siblings?"
- **New text:** "Looking at the design language (borders, colors, spacing, typography), does this feel like it belongs to a SYSTEM, or is it one-off custom work?"
- **Collateral changes:**
  - Part 9 (Cross-Page Coherence): Updated PA-24 description from old text to new text
  - Part 8 (Anti-Patterns): AP-13 reference updated from "PA-24 (siblings)" to "PA-24 (system coherence)"
- **Conflict resolution:** CONFLICT-002 resolved per File 14 version for PA-24
- **Reason:** "Siblings" structurally unanswerable for single-page audits (score 3.4/5)

### FIX-052: PA-25 REWRITTEN
- **Location:** Part 3, Section 3.3, Cross-Page table (line ~261)
- **Old text:** "If you covered the header, could you identify the design system?"
- **New text:** "If you covered the header, does the rest of the page still feel like a cohesive design? Does the identity persist throughout, or only in the header?"
- **Collateral changes:**
  - Part 9 (Cross-Page Coherence): Updated PA-25 description from old text to new text
- **Conflict resolution:** CONFLICT-002 resolved per File 14b version for PA-25
- **Reason:** "Identify the design system" requires system knowledge (score 3.6/5)

### FIX-053: PA-26 REWRITTEN
- **Location:** Part 3, Section 3.3, Architectural Challenge table (line ~267)
- **Old text:** "Is any convention CAUSING a visual problem?"
- **New text:** "Is there any element that looks wrong but seems intentional — as if a rule is forcing a bad outcome? Point to it."
- **Reason:** Removes convention knowledge requirement. Flagged in File 14b only.

### FIX-054: PA-51 REWRITTEN
- **Location:** Part 3, Section 3.6, Void Prevention table (line ~296)
- **Old text:** "What percentage of total page height is content vs empty? 80%+/60-80%/40-60%/<40%?"
- **New text:** "Does the page feel content-dense, balanced, sparse, or void-dominated?"
- **Reason:** Percentage estimation is imprecise from screenshots — different auditors estimate 60% vs 75% for same page. Qualitative assessment is more reliable.

---

## NEW QUESTIONS (6)

### FIX-055: PA-72 ADDED (Content-Form Specificity)
- **Location:** Part 3, new Section 3.10 (Extended Assessment)
- **Question:** "If you replaced this page's content with completely different content (say, a cooking recipe instead of whatever this is), would the visual design need to change? Or would it work for anything?"
- **Tier:** 2
- **Auditor:** A
- **Fills gap:** GAP-2 (content-form fit quality — no previous question tested content-specificity of design)
- **Number note:** Originally specified as PA-71 in fix checklist, renumbered to PA-72 per CONFLICT resolution (existing PA-71 = transition quality from Wave 1)

### FIX-056: PA-73 ADDED (Accessibility Quick Check)
- **Location:** Part 3, Section 3.10 (Extended Assessment)
- **Question:** "Is there any text, button, or interactive element that you think would be invisible, unreachable, or confusing to someone using only a keyboard or screen reader? Point to the most likely problem."
- **Tier:** 3
- **Auditor:** H
- **Fills gap:** GAP-6 (zero accessibility questions in previous PA inventory)
- **Conflict resolution:** CONFLICT-003 resolved — Auditor H (not E) per checklist directive. H has lightest load after PA-21 removal.

### FIX-057: PA-74 ADDED (Coherence Direction Agreement)
- **Location:** Part 3, Section 3.10 (Extended Assessment)
- **Question:** "Pick a boundary where the page changes. Do ALL the changes point in the same direction? For example, if background gets darker, does text get heavier, spacing tighter, borders thicker — all saying 'denser'? Or do some changes contradict others?"
- **Tier:** 2
- **Auditor:** D
- **Fills gap:** GAP-5 (multi-coherence at boundaries — no previous question asked whether boundary changes AGREE)

### FIX-058: PA-75 ADDED (Completion and Polish Check)
- **Location:** Part 3, Section 3.10 (Extended Assessment)
- **Question:** "Scroll to the very bottom. Does the page end with a DESIGNED conclusion (footer, closing statement, visual bookend), or does it just stop? Is there any area that looks like the designer ran out of time?"
- **Tier:** 2
- **Auditor:** D
- **Note:** OPTIONAL per original spec (may overlap PA-13) but implemented per scope decision
- **Number note:** Originally PA-74 in checklist, renumbered to PA-75 per conflict resolution shift

### FIX-059: PA-76 ADDED (Emotional Arc Direct Assessment)
- **Location:** Part 3, Section 3.10 (Extended Assessment)
- **Question:** "Scroll from top to bottom at reading speed. Does the visual journey have a shape — building, peaking, resolving — or does it feel like the same room repeated? Where is the peak? Does the ending feel earned?"
- **Tier:** 2
- **Auditor:** A
- **Fills gap:** Emotional arc is PA-primary (CF-02) but no previous question directly assessed it — was inferred from 5 tangential questions

### FIX-060: PA-77 ADDED (Typographic Hierarchy as Composition)
- **Location:** Part 3, Section 3.10 (Extended Assessment)
- **Question:** "Looking only at text sizes and weights (ignore color and spacing), can you identify 3 or more levels of importance? Does the hierarchy guide your reading order?"
- **Tier:** 2
- **Auditor:** B
- **Fills gap:** Existing typography questions focus on readability/comfort, not hierarchy as compositional tool

---

## STRUCTURAL CHANGES

### Section Headers Updated
1. "FULL PA QUESTION INVENTORY (66 Questions)" → "(69 Questions)"
2. "Tier 2: Standard Fifteen" → "Tier 2: Standard Twelve"
3. Readability sub-header: "PA-06 through PA-08" → "PA-06, PA-08"
4. Spatial sub-header: "PA-09 through PA-11" → "PA-09, PA-11"
5. Responsiveness sub-header: "PA-21 through PA-23" → "PA-22, PA-23"

### New Section Created
- **Section 3.10: Extended Assessment (PA-72 through PA-77)** — 6 new questions with Tier and Auditor columns

### Auditor Assignment Table Updated (Part 4, Section 4.2)
- Added "Extended" column to assignment table
- **Auditor A:** +PA-72, +PA-76 (total 7 → 9)
- **Auditor B:** -PA-07, +PA-77 (total 6 → 6, net zero)
- **Auditor C:** -PA-10 (total 14 → 13)
- **Auditor D:** +PA-74, +PA-75 (total 9 → 11)
- **Auditor H:** -PA-21, +PA-73 (total 5 → 5, net zero)
- Total line updated: "66 questions" → "69 questions"

### Cross-Reference Updates
1. Part 9 (Cross-Page Coherence): PA-24 and PA-25 descriptions updated to match rewritten question text
2. Part 8 (Anti-Patterns): AP-13 reference updated from "PA-24 (siblings)" to "PA-24 (system coherence)"

---

## VERIFICATION CHECKLIST

- [x] No duplicate question numbers (PA-72 through PA-77 are all new, no conflicts with existing)
- [x] No references to removed questions (PA-07, PA-10, PA-21) remain in the file
- [x] All new questions have auditor assignments
- [x] All new questions have tier assignments
- [x] Auditor assignment table totals are correct
- [x] Question count totals updated throughout (69, not 66)
- [x] Cross-references to rewritten questions updated (PA-24, PA-25 in Parts 8 and 9)
- [x] Number conflict resolved: existing PA-71 (transition quality) preserved, new questions start at PA-72
- [x] All 3 CONFLICT resolutions applied per checklist directives (CONFLICT-001, -002, -003)

---

## QUESTION NUMBER MAPPING (Fix → Final)

| Fix | Original Spec Number | Final Number | Reason |
|-----|---------------------|--------------|--------|
| FIX-055 | PA-71 | PA-72 | Existing PA-71 (transition quality) preserved from Wave 1 |
| FIX-056 | PA-72 | PA-73 | Shifted +1 |
| FIX-057 | PA-73 | PA-74 | Shifted +1 |
| FIX-058 | PA-74 | PA-75 | Shifted +1 |
| FIX-059 | PA-76 | PA-76 | No change (number gap at PA-75 absorbed the shift) |
| FIX-060 | PA-77 | PA-77 | No change |
