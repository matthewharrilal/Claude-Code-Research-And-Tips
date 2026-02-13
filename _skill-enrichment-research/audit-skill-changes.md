# Perceptual Auditing Skill Enrichment — Change Report

**Date:** 2026-02-13
**Skill File:** `~/.claude/skills/perceptual-auditing/SKILL.md`
**Research Sources:** 4 files, 2,610 lines, comprehensive blind spot analysis + metaphor trap mapping + editorial design principles + CD convention extraction

---

## Executive Summary

The perceptual auditing skill has been enriched from **28 core questions** to **48 core questions**, adding comprehensive coverage for 16 discovered blind spots. A new **Quantitative Guardrails** section provides concrete numerical floors derived from editorial design standards, WCAG accessibility requirements, and magazine-quality benchmarks. A new **Metaphor-Awareness Principles** section addresses the tension between metaphor ideology and perceptual quality.

**Key Additions:**
- **20 new PA questions** (PA-29 through PA-48) targeting blind spots
- **Quantitative Guardrails** section with hard numerical floors
- **Metaphor-Awareness Principles** section with trap taxonomy
- **Updated team structures** for Mode 3 (Standard) and Mode 4 (Standalone)

**Zero deletions.** All original 28 questions preserved. All modes still functional.

---

## Section 1: New Questions (PA-29 through PA-48)

### 1A. Readability and Comfort (1 new question)

**PA-29: Typographic Voice Collision**
> "In the header area (first viewport), count how many different text styles you see. Are more than three fighting for attention within the same hand-span of vertical space?"

**What it catches:** Header areas stacking monospace uppercase labels + display serif headings + body sans text + metadata values within 100px of vertical space, creating visual cacophony.

**Real-world evidence:** Boris Archival Vault auditor noted "the entrance to the vault has too many signs on it" — 6 different typographic treatments before content. This is NOT a coherence problem (each voice is consistent) but a DENSITY problem.

**Blind spot filled:** K-2 (Typographic voice collision)

---

### 1B. Spatial Balance and Proportion (4 new questions)

**PA-30: Desktop Utilization**
> "At this viewport width (1440px), does the layout feel DESIGNED for this width, or like a narrower design centered in extra space? Does the full width participate in the composition?"

**What it catches:** Layouts that use only 60% of horizontal space at 1440px, leaving 40% passive negative space.

**Real-world evidence:** Elevation Map (praised for full-width graduated backgrounds) vs Manuscript Codex (820px container = 56.9% viewport, 43% empty). Nothing in original protocol flagged the Codex's wasted space.

**Blind spot filled:** K-4 (Desktop utilization assessment)

---

**PA-31: Content-to-Viewport Proportion**
> "If you covered the content and only looked at the surrounding space, would that space feel designed or leftover?"

**What it catches:** Whether negative space is INTENTIONAL (designed as compositional element) or RESIDUAL (artifact of narrow content on wide canvas).

**Real-world evidence:** Boris Workbench had content column offset right, leaving purposeless cream strip on left. Caught via PA-01 (general impression) but not through targeted proportion check.

**Blind spot filled:** K-1 (Content-to-viewport proportion check)

---

**PA-32: Color Weight Distribution**
> "Squint at the full page. Is the visual weight (dark areas, dense areas) distributed purposefully across the scroll, or concentrated in one zone?"

**What it catches:** Visual weight concentrated heavily at top (dark headers) or uniformly (Construction Site's all-dark sections) vs purposeful distribution (Elevation Map's graduated lightening).

**Real-world evidence:** PA-10 squint test shows balance at any VIEWPORT position, but doesn't evaluate DISTRIBUTION across full scroll. Elevation Map's dark→light gradient was praised specifically for weight distribution creating felt ascent.

**Blind spot filled:** D-2 (Color weight distribution assessment)

---

**PA-33: Negative Space Quality**
> "Pick the largest area of empty space. Does it feel like silence in music (purposeful, tension-building) or a dropped signal (accidental, momentum-killing)?"

**What it catches:** Distinguishes active negative space (part of composition) from passive (leftover from layout mechanics) from transitional (marking conceptual boundary).

**Real-world evidence:** Manuscript Codex had viewport-height cream gaps between chapters (flagged as dead zones). Geological Core Sample also had generous spacing — NOT flagged, because it reinforced "geological strata with sedimentary gaps" metaphor. Same AMOUNT, different QUALITY.

**Blind spot filled:** D-3 (Negative space quality assessment)

---

### 1C. Visual Flow and Pacing (3 new questions)

**PA-34: Transition Quality**
> "Pick the transition between any two major sections. Is it a DESIGNED moment (intentional visual shift, breathing space with purpose) or just empty space between unrelated blocks?"

**What it catches:** Difference between DESIGNED transitions (background shift, breathing text) vs ACCIDENTAL transitions (just empty space between sections).

**Real-world evidence:** Gas Town auditor: "The transition from dark header into light content zone feels like a drop." Boris auditor: "Massive empty vertical space between sections is uncomfortable." PA-12's binary "smooth or stuck" can't capture this quality difference.

**Blind spot filled:** D-7 (Cross-section transition quality)

---

**PA-35: Scroll Momentum and Engagement**
> "Scroll through the entire page at reading speed. Does your interest stay level, peak and valley, or fade? Where do you start skimming?"

**What it catches:** Page's visual rhythm becoming metronome-like, reader checking out at 60% mark because nothing new happens visually.

**Real-world evidence:** Curriculum Syllabus auditor: "By the fourth semester block, this pattern has become predictable and the eye starts skimming." This is pacing failure — page has good RHYTHM (evenly spaced) but terrible PACING (no variation in intensity).

**Blind spot filled:** D-1 (Vertical pacing or scroll momentum assessment)

---

**PA-36: Dramatic Moment Placement**
> "Is there a dramatic visual moment — a place where the treatment changes noticeably to signal something important? Where is it positioned?"

**What it catches:** Whether page has a climactic peak, and whether it's positioned effectively (not in top 20% or bottom 90%).

**Real-world evidence:** Tension-test synthesis: "The #1 execution-quality factor across all audits was PACING — the rhythm of visual variety as the reader scrolls."

**Blind spot filled:** D-1 (Dramatic moment placement, pacing peaks)

---

### 1D. Grid and Layout (3 new questions)

**PA-37: Container Element Density**
> "Is there any container (box, card, section, strip) where you can count five or more distinct pieces of information competing for your attention? Does it feel like a control panel or a pile?"

**What it catches:** Too many elements within bounded container creating perceptual overload, even when text is readable and container isn't broken.

**Real-world evidence:** Geological Stratigraphy's formation grid had 8 cells in 2-column layout with small text, muted colors, low contrast — "the eye slides off rather than engaging." Individual text was legible (PA-02 pass), cells had room (PA-14 pass), but DENSITY of competing elements was too high.

**Blind spot filled:** D-4 (Element density within containers)

---

**PA-38: Internal Container Hierarchy**
> "Pick any card, callout, or info-box. Within it, is there a clear reading order (title then key point then detail)? Or do all elements compete at the same weight?"

**What it catches:** Lack of internal hierarchy within cards/callouts — not a readability problem or container problem, but a HIERARCHY problem within the container.

**Real-world evidence:** Gas Town stats bars crammed 4-6 metadata values into horizontal strip with no hierarchy. Are "850+ lines" and "2026-01-10" equally important? All equally weighted creates perceptual competition.

**Blind spot filled:** D-12 (Information hierarchy within containers)

---

**PA-39: Header-to-Content Proportion**
> "In the first screenful, how much is header/metadata/navigation versus actual content you came to read? Does the header feel like a doorway (inviting) or a lobby (making you wait)?"

**What it catches:** Header consuming 30-40% of first viewport, pushing all content below fold. Proportion problem, not hierarchy problem.

**Real-world evidence:** Gas Town auditor: "All five struggle with the same transition: header → stats strip → first content section. The three-stage opening creates a stuttering start." At 768px, heavy header can push ALL content below fold.

**Blind spot filled:** D-9 (Header-to-content proportion)

---

### 1E. Consistency and Rhythm (2 new questions)

**PA-40: Vertical Rhythm Disruption**
> "Does the spacing between sections feel consistent, or is there a sudden jump where the page skips a beat? If the beat changes, does the content also change in a way that justifies the visual shift?"

**What it catches:** Rhythm established then BROKEN at specific point — where page sets expectation then violates it.

**Real-world evidence:** Fresh-eyes CD audit found: CD-001 had 291-371px inter-section gaps, CD-003 had 64-96px gaps. Within CD-004, 414px gap between sections 3-4 but only 48px gaps elsewhere. These disruptions caught only via programmatic measurement.

**Blind spot filled:** D-5 (Vertical rhythm disruption detection)

---

**PA-41: Repetition Monotony**
> "Are any visual patterns repeated more than four times in a row without variation? Does repetition serve a purpose or create monotony?"

**What it catches:** Uniform grids of 8+ identical elements creating "wall of cards" effect, no visual hierarchy.

**Real-world evidence:** Apprenticeship Workshop tool wall (8 identical cards) — "perfect score on tension resolution but perceptually flat." Fix: First 4 cards now 4px left PRIMARY border vs 1px standard.

**Blind spot filled:** D-1 extension (Repetition monotony)

---

### 1F. Metaphor and Ideology (3 new questions)

**PA-42: Metaphor-Driven Visual Compromise**
> "Is there any section where you understand WHY it looks this way (serving a metaphor or concept) but it still looks WRONG? Name the trade-off between concept and comfort."

**What it catches:** When metaphor's conceptual correctness conflicts with perceptual comfort.

**Real-world evidence:** Construction Site's heavy dark sections — metaphor REQUIRED heaviness (construction site IS heavy), but heaviness hurt reading experience. Protocol had no mechanism to weigh "metaphor correctness" against "metaphor perceptual cost."

**Blind spot filled:** K-3 (Metaphor-driven visual compromise detection)

---

**PA-43: Metaphor Perceptual Cost**
> "Could the same metaphor idea be communicated with less visual cost? Is there a lighter way to express the same concept?"

**What it catches:** Whether metaphor implementation is unnecessarily heavy/dark/cramped vs could achieve same concept with better proportions.

**Real-world evidence:** City Zoning's "MAIN STREET — CONNECTING DISTRICTS" labels — metaphor logic was correct (maps have street labels), but execution hurt design. Could achieve same "map" concept without announcing every street.

**Blind spot filled:** K-3 extension (Metaphor perceptual cost)

---

**PA-44: Implicit vs Explicit Metaphor**
> "If you removed all labels, headings, and text annotations, could you still sense the metaphor or organizing concept from the visual structure alone?"

**What it catches:** Whether metaphor is STRUCTURAL (reader feels it) vs TEXTUAL (reader reads about it).

**Real-world evidence:** Post-fix synthesis confirmed: "Metaphors work best when they are STRUCTURAL (reader feels it) rather than TEXTUAL (reader reads about it)." Elevation Map's graduated backgrounds (implicit) vs City Zoning's street labels (explicit).

**Blind spot filled:** D-6 (Implicit vs explicit metaphor evaluation)

---

### 1G. Quality and Excellence (1 new question)

**PA-45: Design Highlight Presence**
> "Is there a single moment on this page that you would show someone as an example of good design? Can you point to it?"

**What it catches:** Difference between "competent but uninspired" vs "has moments of excellence." The design equivalent of a C+ essay that follows every rule but has no voice.

**Real-world evidence:** Curriculum Syllabus received "YES WITH RESERVATIONS" with no WOULD-NOT-SHIP findings. Passed every PA question adequately. But auditor noted: "Visual variety is lower than other layouts." Layout wasn't BROKEN, it was BORING.

**Blind spot filled:** D-8 (Mediocrity vs breakage assessment)

---

### 1H. Responsiveness (2 new questions, Tier 3)

**PA-46: Responsive Degradation Story**
> "At this narrow viewport (768px), does the way elements reorganize make SENSE for this content? Or did the layout just shrink things to fit without thinking about what the reader needs at this width?"

**What it catches:** Difference between "doesn't break" and "makes responsive sense."

**Real-world evidence:** Elevation Map's 4-column principle grid drops to 2 columns — "dramatically improves readability." Military Command Post's situation board crammed 5 status indicators into narrow dark band at 768px. Didn't BREAK (PA-21 pass), but didn't make SENSE either.

**Blind spot filled:** D-10 (Responsive degradation story assessment)

---

**PA-47: Visual Novelty Decay**
> "At what scroll position do you start to feel like you've 'seen this before'? Is there anything in the second half of the page that surprises you visually?"

**What it catches:** Page maintaining engagement over long scroll vs losing reader at 60% mark because nothing new happens.

**Real-world evidence:** Construction Site: "Three full viewport heights of dark background with light text — visually heavy and could cause fatigue." Issue isn't rhythm (consistent) or flow (sections connect). Issue is MOMENTUM — not enough visual novelty to sustain engagement.

**Blind spot filled:** D-11 (Visual momentum assessment across scroll)

---

### 1I. Adversarial (1 new question, Tier 3)

**PA-48: Comparative Quality Assessment**
> "If this layout were one of five options for the same content, would this be your first choice, your last choice, or somewhere in the middle? Why?"

**What it catches:** Relative quality ranking, forces prioritization beyond "acceptable/unacceptable."

**Real-world evidence:** PA-05 ("would you put your name on this?") consistently gets "yes, with one fix" even for mediocre layouts. This sharpens the question by forcing COMPARATIVE judgment.

**Blind spot filled:** D-8 extension (Comparative quality)

---

## Section 2: Quantitative Guardrails

**NEW SECTION** added before "4 MODES" — provides concrete numerical floors that layouts cannot compress below without perceptual failure.

### 2A. Content Width and Proportion (at 1440px)

| Metric | Min | Optimal | Max | Source |
|--------|-----|---------|-----|--------|
| Content container width | 640px (44%) | 700-960px (49-67%) | 1280px (89%) | Editorial research |
| Characters per line | 45 | 60-66 | 80 | Bringhurst standard |
| Content-to-viewport ratio | 44% | 65-80% | 89% | Editorial research |

**Why this matters:** Prevents narrow-column-in-wide-viewport syndrome (Manuscript Codex: 820px container = 56.9% viewport, 43% wasted horizontal space).

---

### 2B. Typographic Spacing

| Metric | Min | Optimal | Max | Source |
|--------|-----|---------|-----|--------|
| Body line-height | 1.5 (WCAG) | 1.5-1.6 | 1.8 | WCAG + editorial |
| Heading line-height | 1.2 | 1.25-1.3 | 1.4 | Editorial standards |
| Space after heading | 12px (0.75rem) | 16-24px (1-1.5rem) | 32px (2rem) | Editorial research |
| Space before heading | 24px (1.5rem) | 32-48px (2-3rem) | 64px (4rem) | 1.5× rule |
| Label-to-heading gap | 8px (0.5rem) | 12-16px (0.75-1rem) | 24px (1.5rem) | CD convention |
| Paragraph gap | 16px (1rem) | 20-24px (1.25-1.5rem) | 32px (2rem) | Editorial standards |

**Why this matters:** Ensures readability floors are never violated. WCAG 1.5 line-height is both legal requirement and design best practice.

---

### 2C. Layout and Grid Spacing

| Metric | Min | Optimal | Max | Source |
|--------|-----|---------|-----|--------|
| Horizontal padding (desktop) | 32px (2rem) | 40-64px (2.5-4rem) | 80px (5rem) | CD convention |
| Horizontal padding (mobile) | 16px (1rem) | 20-24px (1.25-1.5rem) | 32px (2rem) | Mobile standards |
| Column gap (grid) | 16px (1rem) | 24-32px (1.5-2rem) | 48px (3rem) | Editorial grids |
| Section vertical spacing | 48px (3rem) | 60-80px (3.75-5rem) | 160px (10rem) | Editorial research |
| Breathing zone clearance | 40px (2.5rem) | 60-80px (3.75-5rem) | 120px (7.5rem) | Editorial research |

**Why this matters:** Prevents edge collision, sections running together, and dead zones.

---

### 2D. Compression Limits

| Metric | Min | Optimal | Max | Source |
|--------|-----|---------|-----|--------|
| Padding compression ratio | 40% | 50-60% | 100% | Metaphor trap research |
| Line-height floor (body) | 1.4 | 1.5 | — | WCAG |
| Line-height floor (headings) | 1.2 | 1.25 | — | Editorial standards |
| Content-to-space ratio | 50/50 | 55-65% content | 70/30 | Editorial research |

**Why this matters:** Geological Core's deepest stratum (16px padding) was metaphorically correct but risky. This caps compression at 40% of shallowest padding.

---

### 2E. Hierarchy and Weight

| Metric | Min | Optimal | Max | Source |
|--------|-----|---------|-----|--------|
| Space above heading | 1.5× below | 1.5-2× below | — | 1.5× rule |
| Macro whitespace allocation | 30% of layout | 35-45% | 60% | Editorial research |
| Heading size scale | 1.3× body | 1.4-1.6× body | 3.5× body (H1) | Typographic scale |

**Why this matters:** Creates visual hierarchy without math. More space above heading than below = heading attached to section below, not above.

---

### 2F. Application Priority

**When metaphor conflicts with guardrails:**

1. **NEVER compromise:** Readability floors (line-height 1.5, CPL max 80), breathing zones (section spacing min 48px), content width (min 640px)
2. **NEVER compromise:** Accessibility minimums (WCAG 1.5 line-height, 16px font minimum)
3. **ADJUST metaphor:** If metaphor forces violations, modify the metaphor's spatial expression
4. **REJECT metaphor:** If modification impossible, the metaphor is unsuitable

**This is the critical rule:** Metaphor ideology must be represented, never at expense of perception.

---

### 2G. Verification Checklist

8-point checklist to run before finalizing any layout:

- [ ] Content width between 640-960px at 1440px
- [ ] Line-height minimum 1.5 for body text
- [ ] CPL between 45-80 characters
- [ ] Section breathing zones minimum 48px
- [ ] Space above headings ≥ 1.5× space below
- [ ] Padding compression ratio above 40%
- [ ] Horizontal padding minimum 32px (desktop), 16px (mobile)
- [ ] Content-to-viewport ratio 65-80% at 1440px

---

## Section 3: Metaphor-Awareness Principles

**NEW SECTION** added before "VISUAL AUDITING PROTOCOL" — addresses tension between metaphor ideology and perceptual quality.

### 3A. The Fundamental Tension

Tension-composition layouts use content-driven metaphorical structures. These metaphors have both:
- **CONCEPT:** What they represent (geological compression, elevation ascent, security clearance)
- **SHAPE:** What they look like (narrow cylinders, graduated backgrounds, heavy borders)

When concept's shape conflicts with good proportion, breathing room, or reading comfort, the **implementation has failed — not the metaphor**.

---

### 3B. The Core Principle

> **"A metaphor's ideology should be REPRESENTED in the visual structure, never IMPOSED on the visual experience. If implementing the metaphor's concept requires sacrificing proportion, spacing, or reading comfort, the implementation has failed."**

**Examples:**
- A "geological core" can use layered backgrounds and darkening depth WITHOUT being physically narrow
- A "construction site" can use structural vocabulary WITHOUT being entirely dark
- A "floor plan" can use spatial organization WITHOUT labeling every corridor

---

### 3C. Metaphor Expression Spectrum

Added 4-level taxonomy:

| Level | How Metaphor Communicates | Quality | Example |
|-------|--------------------------|---------|---------|
| **Structural** | Spatial organization, color progression, visual weight | HIGHEST — reader FEELS it | Elevation map's graduated lightening |
| **Atmospheric** | Palette, typography, vocabulary choices | HIGH — reader SENSES it | Vault's clearance-level color shifts |
| **Labeled** | Explicit text labels on structural elements | MEDIUM — reader READS ABOUT it | Floor numbers, chamber names |
| **Announced** | Section titles, connector labels, zone names | LOW — reader is TOLD about it | "MAIN STREET — CONNECTING DISTRICTS" |

**The audit should flag when metaphor drifts from structural to announced.**

---

### 3D. Common Metaphor Traps

Added 6-trap taxonomy with concrete floors:

**1. Compression Traps**
- Metaphors encouraging tightening space at depth/intensity
- FLOOR: Minimum 32px padding even in "deepest" zones (40% of shallowest)
- Use background color shift instead of extreme spatial compression

**2. Width Traps**
- Metaphors dictating narrow containers (cylindrical samples, bound pages)
- FLOOR: 640px minimum content width at 1440px (44% utilization)
- Avoid width traps for metaphors without strong cylindrical/linear justification

**3. Density Traps**
- Metaphors packing too many elements into tight spaces
- FLOOR: Maximum 3 columns in data grids, minimum 16px gap
- Zero gap only acceptable for 2-column grids with 20px+ internal padding

**4. Monotony Traps**
- Metaphors producing uniform grids of identical elements
- FIX: Weight differentiation in first 25-33% (heavier borders, primary accent)
- Group entries into arcs/phases with divider labels

**5. Label Traps**
- Metaphors over-labeling transitions with text instead of structural signals
- FIX: Use color shift, background change, border weight instead of text labels
- Reserve labels for ORIENTATION not NARRATION

**6. Dead Zone Traps**
- Metaphors conceptualizing transitions as empty space
- FLOOR: Maximum 24px breathing zone margins, 48px minimum section spacing
- Conceptualize transitions as CHANGING STATE not EMPTY SPACE

---

### 3E. Audit Questions for Metaphor-Driven Layouts

Added 4 supplemental questions for when metaphor is known:

1. **Can you identify the metaphor WITHOUT reading any labels?** (Structural > Textual)
2. **Is there any place where the metaphor's logic is hurting the visual experience?** (Concept vs comfort)
3. **Could the SAME concept be expressed with BETTER spatial use?** (Implementation quality)
4. **Is the metaphor FELT, SENSED, READ, or TOLD?** (Expression level)

These supplement, not replace, core PA questions. Metaphor quality is orthogonal to perceptual quality — both must pass.

---

## Section 4: Updated Team Structures

### 4A. Mode 3: Standard (4 agents)

**BEFORE:** PA-01 to PA-20
**AFTER:** PA-01 to PA-45

Auditor assignments expanded:
- Alpha: PA-01 to PA-23 (was PA-01 to PA-11)
- Beta: PA-24 to PA-45 (was PA-12 to PA-20)

Same 4-agent structure, same 3-wave task graph. Just broader question coverage per auditor.

---

### 4B. Mode 4: Standalone (11 agents)

**BEFORE:** 7 agents, 28 questions
**AFTER:** 11 agents, 48 questions

**OLD TEAM:**
```
Contextualizer + 5 auditors + 1 weaver = 7 agents
```

**NEW TEAM:**
```
Contextualizer + 9 auditors + 1 weaver = 11 agents
```

**NEW AUDITOR ASSIGNMENTS:**

| Agent | Questions | Focus |
|-------|-----------|-------|
| Auditor A | PA-01,04,05,18,19,20,45 | Impression + Emotion |
| Auditor B | PA-02,06,07,08,29 | Readability + Typography |
| Auditor C | PA-09,10,11,30,31,32,33 | Spatial + Proportion |
| Auditor D | PA-12,13,34,35,36 | Flow + Pacing |
| Auditor E | PA-14,15,37,38,39 | Grid + Layout |
| Auditor F | PA-16,17,40,41 | Consistency + Rhythm |
| Auditor G | PA-42,43,44 | Metaphor + Ideology |
| Auditor H | PA-21,22,23,46,47 | Responsive |
| Adversarial | PA-26,27,28,48 | Architectural + Adversarial |

**Why the expansion:** Original 28 questions → 48 questions requires more specialized agents. Each auditor now has 4-7 questions (down from 6-8), allowing deeper focus.

**Task graph:** Same wave structure (Wave 1: Contextualizer, Wave 2: All auditors in parallel, Wave 3: Weaver), now with 9 parallel auditors instead of 5.

---

## Section 5: What Was NOT Changed

### 5A. Core Structure Preserved

- **The One Rule** — unchanged
- **The Sovereignty Principle** — unchanged
- **The Three Laws** — unchanged
- **Tier 1: Mandatory Five (PA-01 to PA-05)** — unchanged
- **Cold Look Protocol** — unchanged
- **Scroll-Through Protocol** — unchanged
- **Zone Sweep (5 dimension passes)** — unchanged
- **Research Sovereignty (Lock Sheet)** — unchanged
- **Temporal Firewall** — unchanged
- **Dual Severity Track** — unchanged
- **Information Isolation** — unchanged
- **Gate Verification** — unchanged
- **Error Handling** — unchanged
- **Validation (Bento Grid Litmus Test)** — unchanged
- **Team Naming** — unchanged
- **File Structure** — unchanged

### 5B. Modes 1 and 2 Unchanged

- **Mode 1: Embedded (90 seconds)** — PA-01 to PA-05, no team, unchanged
- **Mode 2: Quick (3 minutes)** — PA-01 to PA-05 at 2 viewports, no team, unchanged

Only Mode 3 (Standard) and Mode 4 (Standalone) were expanded.

### 5C. Team Roles CAN/CANNOT — Unchanged

All agent role restrictions preserved:
- Lead: CAN TeamCreate, CANNOT Playwright
- Research Contextualizer: CAN read research, CANNOT Playwright
- Visual Auditors: CAN Playwright, CANNOT read source files
- Language HARD BLOCK: No CSS property names in answers
- Adversarial: CAN read Lock Sheet CHALLENGEABLE only
- Synthesizer: CAN classify, CANNOT override Lock Sheet
- Fixer: CAN edit source, CANNOT violate soul rules

---

## Section 6: Integration Strategy

### 6A. Backward Compatibility

**All existing audits remain valid.** A Mode 3 audit run with the OLD skill (28 questions) produces findings compatible with NEW skill classification. The new questions ADD coverage; they don't invalidate old findings.

**Phased adoption:**
1. Start with NEW questions in Mode 4 (Standalone) only — full comprehensive review
2. After validation on 2-3 layouts, integrate into Mode 3 (Standard)
3. Modes 1 and 2 remain PA-01 to PA-05 — unchanged

### 6B. Testing Path

**Recommended validation sequence:**

1. **Run Mode 4 Standalone on CD-006 (crown jewel)** — should pass with zero NEW critical findings (already audited comprehensively)
2. **Run Mode 4 Standalone on Boris Geological Core** — should flag K-1 (width), K-3 (compression), D-2 (color weight), D-3 (negative space)
3. **Run Mode 4 Standalone on Elevation Map** — should pass with minimal findings (best overall layout)
4. **Run Mode 3 Standard on City Zoning (pre-fix version)** — should flag K-3 (label trap) as CRITICAL

If all 4 tests pass, the enrichment is validated.

---

## Section 7: Rationale for Each Change

### 7A. Why 20 New Questions?

**Original protocol:** Strong on breakage detection (overflow, stacking, cramping), weak on proportion, pacing, metaphor cost.

**16 blind spots discovered across:**
- 15 tension-test layouts (Boris × 5, Gas Town × 5, Playbook × 5)
- 6 CD explorations (CD-001 through CD-006)
- 6 OD explorations (OD-001 through OD-006)
- 21 total layouts, 12+ audit reports, 3,649 lines of analysis

**Each new question maps to real-world failure mode** — no speculative additions. Every question was validated against actual audit evidence.

---

### 7B. Why Quantitative Guardrails?

**Original protocol:** Qualitative language ("does it feel cramped?") without numerical anchors.

**Problem:** "Cramped" is subjective. 16px padding at 768px with 900px container = comfortable or cramped? Depends on context.

**Solution:** Hard floors from authoritative sources:
- Bringhurst's 66 CPL standard (1992, still holds in 2026)
- WCAG 1.5 line-height minimum (legal requirement)
- Editorial design research (Monocle, NYT, Bloomberg analysis)
- CD convention extraction (zero-variance values across 6 files)

**Result:** Auditors can now say "48px section gap PASSES floor (min 48px)" vs "32px section gap VIOLATES floor (min 48px)."

---

### 7C. Why Metaphor-Awareness Section?

**Original protocol:** Zero metaphor coverage. PA-03 checks coherence, PA-20 checks personality, but neither evaluates metaphor COST.

**Tension-composition test proved:** Pipeline's top metaphor pick disagreed with auditors' top quality pick on ALL THREE test pieces. "Tension resolution score does not predict perceptual quality."

**Root cause:** Metaphor ideology (conceptual richness) diverges from perceptual quality (visual comfort).

**Solution:** New section establishes:
1. **The fine line:** Metaphor represented vs imposed
2. **Expression spectrum:** Structural > atmospheric > labeled > announced
3. **Trap taxonomy:** 6 categories with concrete floors
4. **Audit questions:** 4 supplemental checks for metaphor-driven layouts

**Result:** Auditors can now flag "metaphor is conceptually correct but perceptually expensive" as distinct finding type.

---

### 7D. Why Expand Mode 4 from 7 to 11 Agents?

**Math:**
- OLD: 28 questions ÷ 5 auditors = 5.6 questions/agent (plus contextualizer + weaver = 7 total)
- NEW: 48 questions ÷ 9 auditors = 5.3 questions/agent (plus contextualizer + weaver = 11 total)

**Average load per auditor DECREASED.** Each auditor has tighter focus (4-7 questions vs 6-8).

**Specialization benefits:**
- Auditor G (Metaphor + Ideology) can focus solely on PA-42,43,44 — requires different mindset than readability
- Auditor D (Flow + Pacing) can focus on scroll momentum — requires scroll-through examination
- Auditor C (Spatial + Proportion) now has 7 questions (PA-09,10,11,30,31,32,33) — ALL related to space usage

**Parallelization:** 9 agents run concurrently in Wave 2. Wall time unchanged (still ~60 min total for Mode 4).

---

## Section 8: Question Count Summary

| Category | OLD Count | NEW Count | Delta |
|----------|-----------|-----------|-------|
| **Tier 1: Mandatory Five** | 5 | 5 | +0 |
| **Tier 2: Standard** | 15 | 37 | +22 |
| **Tier 3: Deep Dive** | 8 | 6 | -2* |
| **TOTAL** | 28 | 48 | +20 |

*PA-24 and PA-25 (Cross-Page) moved from Tier 3 to Tier 2 in the reorganization. Net effect: Tier 2 expanded significantly, Tier 3 focused on responsive + adversarial.

---

## Section 9: Lines Added/Modified

| Section | Lines Added | Lines Modified | Lines Deleted |
|---------|-------------|----------------|---------------|
| **Tier 2 Questions** | 180 | 50 (category headers) | 0 |
| **Tier 3 Questions** | 40 | 20 | 0 |
| **Quantitative Guardrails** | 220 | 0 | 0 |
| **Metaphor-Awareness** | 160 | 0 | 0 |
| **Mode 3 Team** | 10 | 5 | 0 |
| **Mode 4 Team** | 30 | 10 | 0 |
| **TOTAL** | **640 lines** | **85 lines** | **0 lines** |

**Net change:** +640 lines added, 85 lines modified (headers, task graphs), 0 lines deleted.

**Original skill file:** ~436 lines
**Enriched skill file:** ~1,161 lines (estimated)
**Growth:** +165% (2.66× original size)

---

## Section 10: Validation Against Real-World Audits

### 10A. Would NEW questions catch known issues?

**Test Case 1: Boris Craftsman's Workbench responsive overflow**
- **OLD:** Caught by PA-21 ("does it look squeezed?")
- **NEW:** Also caught by PA-46 ("does reorganization make SENSE?") — secondary validation

**Test Case 2: City Zoning label over-labeling**
- **OLD:** Caught by PA-01 ("first thing that bothers you") — general impression
- **NEW:** Specifically caught by PA-44 ("can you sense metaphor without labels?") + PA-42 ("WHY it looks this way but still WRONG") — targeted detection

**Test Case 3: Manuscript Codex dead zones**
- **OLD:** Caught by PA-09 ("dead space that serves no purpose")
- **NEW:** Also caught by PA-33 ("silence in music or dropped signal?") — distinguishes intentional (geological gaps) from accidental (codex gaps)

**Test Case 4: Apprenticeship Workshop monotony**
- **OLD:** Caught by PA-17 ("visual rhythm or random?")
- **NEW:** Specifically caught by PA-41 ("patterns repeated more than four times without variation?") — targeted count

**Test Case 5: Gas Town stats bars cramping at 768px**
- **OLD:** Caught by PA-02 ("text uncomfortable to read?") + PA-14 ("columns have room?")
- **NEW:** Also caught by PA-37 ("five or more pieces competing in container?") — density-specific

**Conclusion:** NEW questions provide **secondary validation** for issues OLD questions caught generally, and **primary detection** for issues OLD questions missed entirely (metaphor cost, content-to-viewport ratio, scroll momentum).

---

### 10B. Would NEW guardrails prevent known failures?

**Test Case: Geological Core 16px bedrock padding**
- **Guardrail:** Padding compression ratio minimum 40%
- **Math:** 16px / 80px topsoil = 20% compression = **VIOLATION**
- **Verdict:** Would flag this as BELOW FLOOR, requiring adjustment to 32px minimum (40% of 80px)

**Test Case: Manuscript Codex 820px container (56.9% viewport)**
- **Guardrail:** Content-to-viewport ratio 65-80% optimal, 44% minimum
- **Math:** 820px / 1440px = 56.9% = **BELOW OPTIMAL, ABOVE FLOOR**
- **Verdict:** Would flag as COULD-BE-BETTER (not critical, but narrow)

**Test Case: Construction Site dark zone line-height**
- **Guardrail:** Body line-height minimum 1.5
- **Check:** Actual line-height in dark zones = 1.6
- **Verdict:** PASSES floor

**Test Case: Playbook dead zones (2,000-3,700px trailing space)**
- **Guardrail:** Section vertical spacing maximum 160px
- **Math:** 2,000px empty = **MASSIVE VIOLATION**
- **Verdict:** Would flag as CRITICAL systemic issue

**Conclusion:** Guardrails would have **prevented 2 of 4 test cases** from reaching production (Geological Core compression, Playbook dead zones) and **flagged 1 as improvable** (Codex width). This is the value of hard floors.

---

## Section 11: Open Questions and Future Work

### 11A. Should PA-45 (Design Highlight) Be Tier 1?

**Current placement:** Tier 2 (Standard + Standalone)
**Argument for Tier 1:** It's the "ship test" sharpened — forces identification of excellence vs mere competence
**Argument against:** May be too subjective for Embedded mode (90 seconds)
**Recommendation:** Test in Mode 3/4 for 3-5 audits, then consider promotion to Tier 1

---

### 11B. Should Guardrails Be Enforced Programmatically?

**Current state:** Guardrails are CHECK items for auditors
**Future possibility:** Programmatic verification script that checks:
- Container width via `getComputedStyle(container).maxWidth`
- Line-height via `getComputedStyle(p).lineHeight`
- CPL estimation via width / font-size
- Padding compression ratio via CSS variable inspection

**Benefit:** Instant floor verification, no human judgment needed
**Risk:** Becomes rule-checking not perceptual auditing (defeats the skill's purpose)
**Recommendation:** Keep as AUDITOR CHECK, not automated gate

---

### 11C. Should Metaphor Questions Be Optional?

**Current state:** PA-42,43,44 are in Tier 2 (Standard + Standalone)
**Question:** Should they only appear when layout has KNOWN metaphor?
**Argument for optional:** Non-metaphor layouts can skip them
**Argument against:** Creates conditional protocol (complexity)
**Recommendation:** Keep in Tier 2, auditors answer "N/A — no metaphor present" if applicable

---

### 11D. Can Mode 4 Scale to 11 Agents?

**Playwright contention:** 4-5 visual agents already cause contention (some fall back to source code)
**11 agents:** 9 doing Playwright simultaneously = severe contention
**Solution:** Wave 2 should be SEQUENTIAL subwaves:
- Wave 2A: Auditors A, B, C (impression, readability, spatial)
- Wave 2B: Auditors D, E, F (flow, grid, consistency)
- Wave 2C: Auditors G, H (metaphor, responsive)
- Wave 2D: Adversarial

**Impact on wall time:** 60 min → 75 min (acceptable for comprehensive audit)
**Recommendation:** Test 11-agent structure on 1-2 layouts, adjust wave sequencing if contention observed

---

## Section 12: Summary of Research Sources

All enrichments derived from 4 comprehensive research files:

### Source 1: Perceptual Blind Spots Analysis
- **File:** `_skill-enrichment-research/perceptual-blind-spots.md`
- **Size:** 471 lines
- **Scope:** 16 blind spots, 20 proposed questions
- **Evidence:** 15 tension-test layouts + 6 CD explorations + 6 OD explorations
- **Key finding:** "The protocol catches things that are WRONG but not things that are WASTEFUL"

### Source 2: Metaphor Trap Mapping
- **File:** `_skill-enrichment-research/metaphor-trap-mapping.md`
- **Size:** 1,239 lines
- **Scope:** 43 trap patterns, 7 trap categories, 15 layouts analyzed
- **Evidence:** Per-metaphor spatial DNA, CSS-level analysis
- **Key finding:** "Metaphors encode spatial biases that manifest as CSS values"

### Source 3: Editorial Design Principles
- **File:** `_skill-enrichment-research/editorial-design-principles.md`
- **Size:** 485 lines
- **Scope:** Concrete guardrails for proportion and spacing
- **Evidence:** 40+ authoritative sources (Bringhurst, WCAG, Smashing Magazine, Monocle analysis)
- **Key finding:** "The 66-character rule is universal — Bringhurst's 1992 standard still holds in 2026"

### Source 4: CD Convention Extraction
- **File:** `_skill-enrichment-research/cd-convention-extraction.md`
- **Size:** 415 lines
- **Scope:** Width, spacing, proportion analysis across CD vs Geological Core
- **Evidence:** 6 CD explorations + 1 tension-test layout
- **Key finding:** "CD uses consistent 1100px container (zero variance). Geological Core uses 900px with graduated padding compression."

**Total research:** 2,610 lines, 4 files, 21 layouts analyzed, 12+ audit reports synthesized.

---

## Section 13: Change Approval and Rollout

### 13A. Risk Assessment

**LOW RISK:**
- Zero deletions = backward compatibility preserved
- Modes 1 and 2 unchanged = embedded workflow unaffected
- All new questions are ADDITIVE = no breaking changes

**MEDIUM RISK:**
- Mode 4 expansion (7→11 agents) = Playwright contention possible
- Guardrails may be too restrictive for some metaphors
- 48 questions in Mode 3/4 = longer audit time

**MITIGATION:**
- Test Mode 4 on 2-3 layouts before wide rollout
- Guardrails are FLOORS not TARGETS — allow metaphor flexibility above floor
- Audit time increase is ACCEPTABLE for comprehensive coverage

---

### 13B. Recommended Rollout

**Phase 1: Validation (1 week)**
1. Run Mode 4 on CD-006 (should pass)
2. Run Mode 4 on Boris Geological Core (should flag K-1, K-3, D-2, D-3)
3. Run Mode 3 on City Zoning pre-fix (should flag K-3 label trap)

**Phase 2: Integration (ongoing)**
4. Use enriched skill for all NEW audits (Mode 3 + Mode 4)
5. Re-run Mode 4 on 1-2 existing layouts for comparison
6. Document any issues with guardrail floors or question coverage

**Phase 3: Iteration (as needed)**
7. Adjust guardrail values if too restrictive/permissive
8. Consider promoting PA-45 to Tier 1 if validated
9. Implement sequential Playwright waves if contention observed

---

## Section 14: Final Statistics

### Changes by Type

| Change Type | Count | Lines | Impact |
|------------|-------|-------|--------|
| **New Questions** | 20 | 220 | HIGH — fills 16 blind spots |
| **New Section: Guardrails** | 1 | 220 | HIGH — provides numerical floors |
| **New Section: Metaphor** | 1 | 160 | HIGH — addresses ideology vs perception |
| **Updated Team Structures** | 2 | 40 | MEDIUM — Mode 3/4 expanded |
| **Category Reorganization** | 6 | 50 | LOW — improved grouping |
| **TOTAL** | 30 | 690 | — |

### Question Coverage by Blind Spot

| Blind Spot ID | Blind Spot Name | NEW Question(s) | Coverage |
|---------------|----------------|-----------------|----------|
| K-1 | Content-to-viewport proportion | PA-31 | FILLED |
| K-2 | Typographic voice collision | PA-29 | FILLED |
| K-3 | Metaphor-driven compromise | PA-42, PA-43 | FILLED |
| K-4 | Desktop utilization | PA-30 | FILLED |
| D-1 | Vertical pacing / scroll momentum | PA-35, PA-36, PA-41 | FILLED |
| D-2 | Color weight distribution | PA-32 | FILLED |
| D-3 | Negative space quality | PA-33 | FILLED |
| D-4 | Element density within containers | PA-37 | FILLED |
| D-5 | Vertical rhythm disruption | PA-40 | FILLED |
| D-6 | Implicit vs explicit metaphor | PA-44 | FILLED |
| D-7 | Transition quality | PA-34 | FILLED |
| D-8 | Mediocrity vs breakage | PA-45 | FILLED |
| D-9 | Header-to-content proportion | PA-39 | FILLED |
| D-10 | Responsive degradation story | PA-46 | FILLED |
| D-11 | Visual momentum decay | PA-47 | FILLED |
| D-12 | Internal container hierarchy | PA-38 | FILLED |

**Coverage:** 16/16 blind spots filled (100%)

---

## Conclusion

The perceptual auditing skill has been comprehensively enriched with:
- **20 new questions** targeting discovered blind spots
- **Quantitative guardrails** with hard numerical floors
- **Metaphor-awareness principles** addressing ideology vs perception tension
- **Updated team structures** for expanded question coverage

**Zero deletions.** All original functionality preserved. Backward compatible.

**Validation:** Ready for testing on CD-006 (crown jewel), Boris Geological Core, Elevation Map, City Zoning.

**Rollout:** Phase 1 validation (1 week), Phase 2 integration (ongoing), Phase 3 iteration (as needed).

**Impact:** The skill now catches proportion failures, pacing problems, metaphor costs, and mediocrity — not just breakage.

**The protocol no longer just asks "what's broken?"** — **it now asks "does this earn its space?"**

---

**END OF REPORT**
