# Case Studies -- Creative Orchestration Across Windows

How 9 case studies create calibration without templates, and why each
belongs in specific windows with specific framing.

**Total Corpus:** 9 case studies from `design-system/compositional-core/case-studies/`
**Philosophy:** Case studies are calibration instruments, not pattern libraries.
Each one teaches a builder what compositional DEPTH feels like for a specific
content type. The orchestration must enable that calibration while preventing
the copying reflex.

---

## The Orchestration Logic

Case studies are the most dangerous files in the corpus. They demonstrate
excellence so specifically that the natural response is to copy the
implementation. DD-004 shows geological strata with 4px/3px/2px/1px borders
encoding confidence -- a builder who reads it will be tempted to use those
exact values for any hierarchical content.

But case studies are also the most VALUABLE files. A builder who has never
seen a thoughtfully composed page will produce flat output regardless of how
many mechanisms they know. The case studies provide the FELT SENSE of what
"designed" means.

The orchestration solves this tension through three mechanisms:

1. **Content-type matching:** Load the case study that matches the builder's
   content, not all 9. A builder working with heavy code components gets
   CD-001, not the full catalog.

2. **Window-specific framing:** Each window reads the same case study for
   a DIFFERENT purpose. W1 reads for derivation process. W2 reads for
   mechanism vocabulary. W4 reads for quality calibration.

3. **Anti-copying structure:** The case studies contain their own safeguards
   (Section 5: reusable vs non-reusable, Section 6: divergence verification).
   These structural mechanisms must be PRESERVED in the handoff, not
   summarized away.

---

## The Crown Jewels -- Multi-Window Constants

These case studies appear in EVERY active window because they carry
compositional intelligence that transcends any single window's purpose.

### CD-006 Pilot Migration (39/40) -- Always Present

This case study belongs everywhere because it IS the design system's proof
of concept. A meta-tutorial where each section uses the pattern it teaches.
5 axis patterns, 11 component types, 7 transitions, fractal density at 5
scales.

**In Window 1:** TC reads CD-006 to understand what full compositional
integration looks like. The processing state is ASPIRATION: "This level of
integration is achievable. My derivation should be ambitious enough to
approach it."

**In Window 2:** The builder reads CD-006 to understand how all patterns
work together in CSS. The processing state is CONSTRUCTION: "I can see how
transitions between axis patterns are implemented. I can see how fractal
density echoes across 5 scales."

**In Window 4:** The refiner reads CD-006 as the quality standard. The
processing state is CALIBRATION: "This is what CEILING looks like. What in
the current build approaches this? What falls short? What can be pushed
closer?"

**Divergence risk: HIGH.** The meta-tutorial structure is very specific.
Framing must state: "You're not building a meta-tutorial. You're calibrating
on compound compositional depth."

### DD-006 Fractal (36/40) -- Architectural Anchor

This case study is the fractal constraint carrier. It appears in every window
because DD-F-006 (self-similarity at all scales) is the one finding that
every page must honor.

**In Window 1:** TC reads DD-006 as a non-negotiable output requirement.
TC's handoff MUST include "Apply DD-F-006 at all scales."

**In Window 2:** The builder reads DD-006 (late, after metaphor locks) to
understand WHY fractal matters: dense/sparse rhythm must manifest at page,
section, component, AND character levels simultaneously. This is a CSS
architecture constraint.

**In Window 4:** The refiner uses DD-006 as the primary validation grid:
"Does the page show the same rhythm at all 4+ scales?"

---

## Content-Type Routing -- Which Case Study for Which Content

The orchestrator selects case studies based on the builder's content type.
Each selection creates a specific creative processing state in the builder.

### Heavy Code Components --> CD-001 (38/40)

CD-001's velocity interleaving discovery creates the processing state of
RHYTHM AWARENESS. The builder who reads this understands that code blocks,
reasoning sections, and core abstractions all have the same reading velocity
(SLOW) -- and that stacking slow-velocity components creates cognitive
drowning. The fix (Heavy->FAST->Heavy interleaving) is not a rule but a
physical sensation the builder can verify by reading their own page.

The divergence verification in Section 6 prevents copying the F-to-BRIDGE-to-Bento
axis sequence. The builder extracts the VELOCITY PRINCIPLE, not the layout.

### Multi-Axis Pages --> CD-005 (38/40)

CD-005's transition grammar creates the processing state of JOINT AWARENESS.
The builder who reads this understands that transitions between axis patterns
are compositional joints -- they can be SMOOTH (shared component bridging),
BRIDGE (prose paragraph resetting), or BREATHING (maximum gap + divider).
Without this awareness, multi-axis pages feel like separate documents
stapled together.

The structural metaphor discovery ("the content ITSELF is about testing
transitions") teaches the builder that sometimes the most powerful metaphor
is structural, not external.

### Q&A / Reader-Driven Content --> OD-001 (37/40)

OD-001 creates the processing state of FORMAT-AS-MECHANISM. The builder who
reads this understands that Q&A format doesn't just ORGANIZE content into
questions and answers -- it GENERATES PULSE rhythm automatically. Width
variation (60% questions, 100% answers) creates tidal breathing. Serif
questions / sans-serif answers create typographic respiratory rhythm.

Low divergence risk: if the content genuinely has Q&A structure, convergence
with OD-001 is defensible.

### Confidence Gradient Content --> OD-004 (34/40)

OD-004 creates the processing state of FLAT ENCODING. The builder who reads
this understands that geological depth (confidence strata) can be encoded
entirely through 2D CSS: border-weight gradient (4px/3px/2px/1px), spacing
compression, background progression. No shadows, no transforms, no z-axis.

HIGH divergence risk: the geological metaphor is visually distinctive. The
builder must state specific certainty levels BEFORE reading and complete the
divergence verification.

### Meta-Documentation --> OD-006 (37/40) -- W4 ONLY

OD-006 is the most dangerous case study for copying because the meta-
documentation concept (a page that proves its thesis by BEING the proof) is
inescapable once encountered. It creates the processing state of META-
AWARENESS, which is valuable for refinement but destructive for building
(the builder starts trying to make their page prove something about itself
instead of serving its content).

**Load ONLY in Window 4** with framing: "You're reading for proof that
multi-pattern integration is possible. Do NOT adopt the 6-section structure."

### Self-Contained Topics --> DD-003 (32/40)

DD-003 creates the processing state of ISOLATION AWARENESS. The builder
who reads this understands that self-contained content modules want visual
independence: sparse ocean between dense islands, horizontal offset rhythm,
archipelago grouping. The 32/40 score (lowest DD) itself carries calibration
value: moderate-tension content warrants simpler spatial solutions.

Skip if content richness < 65% (islands serves moderate tension only).

### Multi-Audience Documentation --> DD-004 (35/40)

DD-004 creates the processing state of DEPTH THINKING. The builder who reads
this understands that content serving radically different audiences
(expert/novice) can use geological stratification: same structure, different
traversal paths. The spacing compression gradient (80px->40px->32px->20px->16px)
maps to geological pressure AND information density AND expertise level
simultaneously.

HIGH divergence risk: the 5-layer structure is very specific. Load ONLY
after TC has identified specific audience types.

---

## Mimicry Prevention -- Three Structural Safeguards

These safeguards are built INTO the case studies and must be PRESERVED
(not summarized) in the handoff.

### 1. Section 5: Reusable vs Non-Reusable

Every case study separates mechanisms that transfer (border-weight gradient,
spacing compression, 2-zone DNA) from metaphor-specific decisions (geological
vocabulary, island counts, specific padding values). The builder reads
Section 5 and knows exactly which techniques to extract and which to ignore.

### 2. Section 6: Divergence Verification

If the builder's metaphor converges with a case study on 3+ dimensions, they
must provide Phase 1-2 evidence of independent derivation or regenerate with
a constraint. This is not optional verification -- it is a structural
mechanism that prevents the most common composition failure: pattern-matching
disguised as derivation.

### 3. Window-Specific Framing

The same case study means different things in different windows:
- **W1:** "Proof that depth is possible" (aspiration)
- **W2:** "Mechanisms to extract, not architecture to copy" (vocabulary)
- **W4:** "Reference for calibration, not structure" (quality standard)

---

## Distribution Summary

| Case Study | Score | W1 | W2 | W4 | Primary Value |
|-----------|-------|----|----|-----|--------------|
| CD-006 | 39/40 | aspiration | construction | calibration | Always present |
| DD-006 | 36/40 | constraint | late load | validation | Always present |
| CD-001 | 38/40 | if heavy code | if heavy code | debug stacking | Velocity interleaving |
| CD-005 | 38/40 | if multi-axis | if multi-axis | debug transitions | Transition grammar |
| OD-001 | 37/40 | if Q&A | if Q&A | PULSE calibration | Format-as-mechanism |
| OD-004 | 34/40 | if confidence | if confidence | encoding check | Flat depth encoding |
| DD-004 | 35/40 | -- | if multi-audience | multi-path clarity | Geological stratification |
| DD-003 | 32/40 | -- | if isolated topics | isolation check | Archipelago pattern |
| OD-006 | 37/40 | DO NOT LOAD | DO NOT LOAD | meta-integration | W4 only (copying risk) |

The builder never receives all 9 case studies. They receive the 2 constants
(CD-006, DD-006) plus 1-2 matching their content type. Total case study
load per window: 3-4 files, 1,200-1,600 lines.
