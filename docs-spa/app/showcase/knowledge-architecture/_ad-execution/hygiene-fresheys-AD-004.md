# Fresh-Eyes Hygiene Audit: AD-004 (Spiral Layout)

**Auditor:** Hygiene-Auditor-C (Fresh Eyes)
**Page:** AD-004 — Spiral Layout
**Date:** 2026-02-10
**Perspective:** Senior frontend dev, never seen this project before
**Screenshots reviewed:** AD-004-1440.png, AD-004-768.png
**OD comparison:** OD-004-1440.png not available (skipped)

---

## Test 1: Squint Test

**Method:** Blur eyes/squint at both screenshots to assess visual hierarchy without reading.

**Findings at 1440px:**
- The page header area (title + subtitle) reads clearly as the primary element
- Four confidence-tier sections (Established, Probable, Speculative, Open) are distinguishable through their colored label badges
- Code blocks with dark backgrounds create strong visual anchoring points — almost TOO strong. They dominate the visual field when squinting
- The "Probable" section's table is visually lightweight compared to surrounding elements
- Right-aligned metadata sidebar boxes (with light backgrounds) are subtle and appropriately secondary

**Findings at 768px:**
- Layout compresses well — single column, no horizontal overflow visible
- Same dominance of dark code blocks persists
- The metadata sidebar boxes stack below content, maintaining readability

**FINDING F-C-004-1 (UNIQUE): Dark code block visual weight dominance.** When squinting, the 3-4 dark-background code blocks are the loudest elements on the page — louder than the title, louder than the section headers. In a page about "Spiral Layout" patterns, the code examples visually overpower the conceptual content. The code blocks feel like they belong to a different page (a developer IDE) pasted into an editorial document. This creates a visual hierarchy inversion where supporting evidence (code) screams louder than primary content (the pattern descriptions).

**Pass/Fail:** CONDITIONAL PASS — hierarchy is present but inverted at the code block level.

---

## Test 2: Shipping Test

**Method:** Would I ship this to a paying client tomorrow?

**Assessment:**
- The page is well-structured with clear confidence tiers (Established/Probable/Speculative/Open)
- Content is substantive and well-written
- Typography feels professional — serif headings convey authority
- The warm cream background is easy on the eyes and feels intentional

**Concerns for shipping:**
- The breadcrumb trail at the very top (ESTABLISHED, PROBABLE, etc.) is extremely small and low-contrast — a client might miss navigation entirely
- The "Open" section at the bottom feels unresolved — "There are questions we cannot yet answer" is intellectually honest but might leave a client feeling the work is incomplete
- Some of the metadata sidebar content (file counts, finding references) is very inside-baseball — a client would not understand "EXT-0018" or "AD-F-018"

**Pass/Fail:** PASS with reservations — professional enough to ship, but the internal jargon in metadata boxes would confuse external audiences.

---

## Test 3: OD Comparison

**Status:** SKIPPED — OD-004-1440.png does not exist in the screenshot directory.

---

## Test 4: Breathing Room

**Method:** Assess whitespace, density, and whether elements feel cramped or comfortable.

**Findings at 1440px:**
- Body text line-height appears generous (approximately 1.6-1.7) — comfortable reading
- Padding inside the confidence-tier boxes is adequate
- Margin between major sections is sufficient — clear separation
- The data table in the "Probable" section has tight row spacing but remains readable
- Code blocks have comfortable internal padding

**FINDING F-C-004-2 (UNIQUE): Inconsistent vertical rhythm between section types.** The spacing between the "Established" section's prose and its code block examples is noticeably tighter than the spacing between the "Probable" section's prose and its table. The "Speculative" section has yet another spacing rhythm between its introductory text and its paired code block screenshots. There is no consistent vertical gap between "section header" -> "section body" -> "section evidence" across the four tiers. Each tier seems to have its own internal spacing language. This creates a subtle but perceptible sense of inconsistency when scrolling through the full page.

**Findings at 768px:**
- Breathing room is maintained at mobile width
- No elements appear to be fighting for space
- The stacked sidebar metadata has appropriate spacing

**Pass/Fail:** PASS — generous whitespace overall, but vertical rhythm inconsistency noted.

---

## Test 5: Container Integrity

**Method:** Check for alignment issues, container edge consistency, and content overflow.

**Findings at 1440px:**
- Main content column is well-contained within a centered max-width container
- Sidebar metadata boxes align to a right column — consistent placement
- Code blocks respect container boundaries — no horizontal overflow
- The colored confidence badges (green for Established, amber for Probable, etc.) are consistently positioned relative to their section headers
- Table in the "Probable" section has proper column alignment

**FINDING F-C-004-3 (UNIQUE): The paired code block screenshots in the "Speculative" section break the page's content model.** Every other section uses either inline code blocks OR prose descriptions. The "Speculative" section introduces side-by-side code block screenshots (two dark panels placed next to each other) which creates a different layout paradigm mid-page. These paired panels appear to be actual screenshots rather than rendered code, which means they have a fixed aspect ratio that does not adapt to the container the same way other content does. At 768px, these paired screenshots stack vertically, but their visual treatment (rounded? bordered? — hard to tell at this resolution) may differ from the rendered code blocks above.

**Findings at 768px:**
- Container integrity holds at mobile width
- The paired screenshot panels stack appropriately
- No content bleeds outside containers

**Pass/Fail:** PASS — containers are intact, but the mixed content model (rendered code vs screenshot images) is a design consistency concern.

---

## Test 6: Newspaper Test

**Method:** Read only the headlines/headers — does the story make sense?

**Headers in order:**
1. "AD-004: Spiral Layout" (page title)
2. "Established" (with green confidence badge)
3. "Core API Surface" (subheading)
4. "Probable" (with amber confidence badge)
5. "Recommended Patterns" (subheading)
6. "Implementation Guideline" (subheading)
7. "Speculative" (with orange/red confidence badge)
8. "Open" (with red/dark confidence badge)

**Assessment:**
- The headline hierarchy tells a clear story: here is a layout pattern, here is what we know for certain, here is what is likely, here is what is speculative, here is what is unknown
- The confidence-tier progression (Established -> Probable -> Speculative -> Open) is an excellent editorial device — it communicates intellectual honesty about certainty levels
- "Core API Surface" is a strong subheading for the Established section
- "Recommended Patterns" and "Implementation Guideline" are clear subheadings

**FINDING F-C-004-4: The "Speculative" section lacks a descriptive subheading equivalent to "Core API Surface" or "Recommended Patterns."** The Established section has "Core API Surface," the Probable section has "Recommended Patterns" and "Implementation Guideline," but the Speculative section jumps directly into prose without a named sub-topic. This breaks the subheading pattern established by the first two sections. A reader scanning headlines would get orientation in Established and Probable but lose it in Speculative.

**Pass/Fail:** PASS — the confidence-tier headline structure is genuinely strong editorial design.

---

## Test 7: Micro-Macro Test

**Method:** Check if small details and large-scale composition tell the same story.

**Macro level (full page at 1440px):**
- The page reads as a structured research document with graduated confidence levels
- Visual weight flows from dense (Established) to sparse (Open) — appropriate, as more certain content gets more detail
- The overall composition communicates "authoritative reference document"

**Micro level (individual elements):**
- Typography: Serif headings on sans-serif body — consistent with editorial identity
- Colors: Warm cream background, muted section borders, colored confidence badges — palette is restrained and consistent
- Borders: Appear to be sharp (no rounded corners visible) — consistent with what the Soul document describes
- Shadows: No visible box-shadows or drop-shadows on any element — consistent with flat/grounded philosophy

**FINDING F-C-004-5 (UNIQUE): The confidence badge color semantics create a traffic-light metaphor.** The badges use green (Established), amber/yellow (Probable), orange (Speculative), and red (Open). This is a green-to-red spectrum that directly maps to traffic light / stoplight semantics: green = go/safe, yellow = caution, red = stop/danger. According to the identity document I reviewed, "traffic-light color semantics" are specifically called out as a soul FAIL under the "ANTI-PHYSICAL Identity" section (the table lists "Red/amber/green material signals" as "Implies physical signal devices" with a count of 2 previous failures). If this page uses a green-amber-red gradient for its confidence tiers, it may be repeating a known soul violation pattern.

**Micro-Macro Coherence:** The micro details (sharp edges, no shadows, serif headings, limited palette) align with the macro story (authoritative editorial reference). The traffic-light concern is the exception.

**Pass/Fail:** CONDITIONAL PASS — micro-macro alignment is strong, but the badge color scheme may conflict with documented soul rules.

---

## Summary

| Test | Result | Findings |
|------|--------|----------|
| 1. Squint | CONDITIONAL PASS | F-C-004-1: Code block visual weight dominance |
| 2. Shipping | PASS | Internal jargon in metadata boxes |
| 3. OD Comparison | SKIPPED | No OD-004 screenshot available |
| 4. Breathing Room | PASS | F-C-004-2: Inconsistent vertical rhythm between tiers |
| 5. Container Integrity | PASS | F-C-004-3: Mixed content model (code vs screenshots) |
| 6. Newspaper | PASS | F-C-004-4: Missing subheading in Speculative section |
| 7. Micro-Macro | CONDITIONAL PASS | F-C-004-5: Traffic-light badge color semantics |

### Unique Findings (Target: >= 3)

| ID | Finding | Severity | Category |
|----|---------|----------|----------|
| F-C-004-1 | Dark code blocks visually overpower conceptual content, creating hierarchy inversion | Medium | Visual Hierarchy |
| F-C-004-2 | Vertical spacing rhythm differs between each confidence tier section | Low | Consistency |
| F-C-004-3 | Speculative section uses paired screenshot images alongside rendered code blocks — mixed content model | Low | Content Model |
| F-C-004-4 | Speculative section lacks descriptive subheading, breaking the pattern set by Established and Probable | Low | Editorial Structure |
| F-C-004-5 | Confidence badge colors follow green-amber-red traffic-light spectrum, which is flagged as anti-physical soul violation in identity docs | High | Soul Compliance |

**Total unique findings: 5** (exceeds target of 3)

### Overall Assessment

AD-004 is a well-structured, professionally presented page. The confidence-tier editorial model (Established/Probable/Speculative/Open) is genuinely excellent design thinking — it communicates intellectual honesty and lets readers calibrate their trust in each claim. The typography, spacing, and flat/grounded aesthetic are strong.

The most significant finding is F-C-004-5 (traffic-light badge colors), which appears to directly conflict with a documented soul rule. The code block visual dominance (F-C-004-1) is the second most impactful issue, as it inverts the intended reading hierarchy. The remaining findings are polish-level concerns about consistency.
