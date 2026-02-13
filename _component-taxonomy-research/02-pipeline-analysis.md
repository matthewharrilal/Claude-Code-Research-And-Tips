# Pipeline Analysis: POST-CD-PIPELINE Against New Skills

**Date:** 2026-02-13
**Analyst:** pipeline-analyst
**Sources:** 14 POST-CD-PIPELINE files + 2 skill files + tension analysis research
**Scope:** What's obsolete, what needs updating, and what's the new pipeline shape

---

## EXECUTIVE SUMMARY

**MAJOR FINDINGS:**

1. **Component extraction (Phase B) is COMPROMISED** — Pipeline assumes extractable components exist. Skills prove 95% of visual variety is Tier 3 (compositional, non-extractable). Extraction can only capture ~400 lines of CSS.

2. **Content Analysis (Phase F) needs REORDERING** — Must run BEFORE extraction, not after. Classification drives what gets built, not vice versa.

3. **Tension-Composition fundamentally changes Phase 3 ("Composition Design")** — Pipeline currently describes it as "mechanical component selection". Skill proves it's a creative protocol requiring genuine tension identification.

4. **The 6-phase per-page pipeline is PARTIALLY CORRECT** — Phases 1-2-4-5-6 are sound. Phase 3 needs complete reconception as tension protocol execution.

5. **Migration Playbook (Phase E) underspecifies Track 2 (compositional pages)** — Current spec describes uniform process. Skill proves Track 2 requires fundamentally different cognitive demands.

---

## 1. CURRENT PIPELINE SUMMARY (What Exists Now)

### Post-CD Phase Sequence

```
PHASE A: CD (Combination Dimension) — 6 explorations, ~4-5 hours
   ↓
PHASE B+D: Component Extraction + Pattern Library — 6-10 hours
   Extracts reusable layout primitives from 30 explorations
   ↓
PHASE F: Content Analysis — 2-4 hours
   Inventory all 75+ pages, classify by content type, assign patterns
   ↓
PHASE E: Migration Playbook v2 — 3-4 hours
   Comprehensive migration manual + lightweight ingestion spec
   ↓
PHASE G: Pilot Migration — 3-5 hours
   2-3 pages spanning different content types
   ↓
PHASE H: Playbook Refinement — 1-2 hours
   Incorporate pilot learnings
   ↓
═══════════════ FREEZE LINE ═══════════════
   ↓
PHASE I+J: Full Migration + Verification — 15-40 hours
   All 75+ pages migrated
```

### Per-Page 6-Phase Pipeline (from 03-MIGRATION-PIPELINE.md)

```
Phase 1: PAGE ANALYSIS ------> "What IS this content?"
Phase 2: PATTERN SELECTION --> "Which patterns fit?"
Phase 3: COMPOSITION DESIGN -> "How do pieces combine?"
Phase 4: BUILD --------------> "Construct the page"
Phase 5: PERCEPTUAL AUDIT ---> "Does it look/feel right?"
Phase 6: DISCOVERY DOCS -----> "What was learned?"
```

---

## 2. WHAT THE TENSION-COMPOSITION SKILL CHANGES

### The Skill's Core Discovery

**Compositions emerge from TENSION, not intersection.**

The tension-composition skill proves:

1. **Content-facing questions produce magical compositions** (OD-004: geological strata)
2. **System-facing questions produce correct assembly** (CD-001: patterns compose correctly)
3. **Tension = gap between reader need and system constraint**
4. **Metaphor = bridge resolving tension using system vocabulary**
5. **Most pages are Track 1 (assembly) — minority are Track 2 (composition)**

### What This Invalidates

**FROM 03-MIGRATION-PIPELINE.md (Phase 3 description):**

> "Composition Design: Select component sequence based on content inventory. Apply velocity/temperature/weight rules. Verify transition grammar."

**PROBLEM:** This describes Track 1 (mechanical assembly), NOT Track 2 (creative composition). The pipeline spec treats ALL pages as Track 1.

**FROM 02-POST-CD-PHASES.md (Component Extraction):**

> "Extract reusable layout primitives from 30 explorations. Build pattern picker decision tree."

**PROBLEM:** Component-evolution-synthesis.md proves only ~400 lines of CSS is extractable (Tier 1+2). The remaining 30-40% of any file is Tier 3 (compositional fragments bound to metaphors). Extraction cannot produce the "printing press" the pipeline assumes.

**FROM 03-MIGRATION-PIPELINE.md (Pattern Selection):**

> "The selection process is approximately 60% deterministic and 40% judgment-based."

**CORRECT** — but understates the gap. Deterministic = Track 1. Judgment-based = Track 2. These are categorically different operations, not a spectrum.

---

## 3. PER-STEP ANALYSIS

### Phase A: CD (Combination Dimension)

**Status:** KEEP with modifications
**Changes needed:**

1. **CD-006 as pilot migration** — Already recommended. VALIDATED by tension protocol. Real content creates genuine tension; synthetic content does not.

2. **Completeness Gate must include Track 1 vs Track 2 validation** — CD must prove the system handles BOTH:
   - Track 1: Pages with clean pattern mappings (assembly)
   - Track 2: Pages with genuine tension requiring metaphor (composition)

**FROM 01-CD-EVOLVED-VISION.md:**

> "CD-006 uses REAL content (not synthetic), processed through full pattern vocabulary. Target: 39-40/40 without design system updates = completeness proven."

**VERDICT:** This is correct AND validated by tension analysis. CD-006 at 39/40 was the ONLY CD exploration with a reader-facing question ("Can someone actually build a page using this system?"). This tension elevated it above siblings.

---

### Phase B+D: Component Extraction + Pattern Library

**Status:** MODIFY HEAVILY
**Current assumption:**

> "Extract reusable layout primitives from 30 explorations. Produces: Layout components (CrescendoSection, PulseSection, IslandsSection), Transition components, Combination recipe templates, Pattern picker decision tree."

**PROBLEM:** Component-evolution-synthesis.md proves:

- **Tier 1 (Atoms):** ~80 lines CSS — 100% extractable
- **Tier 2 (Molecules):** ~175 lines CSS — 90%+ extractable
- **Tier 2.5 (Reusable Patterns):** ~145 lines CSS — 70% extractable
- **Tier 3 (Organisms):** 30-40% of any file — 0-30% extractable, metaphor-dependent

**Total extractable:** ~400 lines covers 60-70% of any file.

**What changes:**

1. **Rename to "Component + Pattern Base Extraction"** — More honest about scope
2. **Output:** ~400 lines of shared CSS, NOT full layout templates for every pattern combination
3. **Accept limitation:** The remaining 30-40% (Tier 3 compositions) CANNOT be extracted. These must be composed fresh per page from tension.
4. **Document Tier 3 as PATTERNS (prose), not components (CSS)** — OD-004's geological strata is a pattern to understand, not a component to copy-paste.

**NEW DELIVERABLE:** Pattern recognition guide showing:
- What OD-004's geological metaphor IS (tension between warmth and austerity resolved through layered strata)
- What mechanisms it used (border-weight gradient, background darkening, spatial compression)
- When a similar tension appears in new content, what resolution strategies exist

This is STRATEGY, not TEMPLATE.

---

### Phase F: Content Analysis

**Status:** REORDER + EXPAND
**Current position:** After Component Extraction
**NEW position:** BEFORE Component Extraction (becomes Phase B)

**WHY:**

Classification determines what gets built. Tension-composition pipeline starts with content assessment (Phase 0):

```
CONTENT → ASSESSMENT → QUESTIONING → TENSION → METAPHOR → LAYOUT
```

Content Analysis IS "Phase 0" of the tension pipeline. It must happen FIRST, not third.

**What changes:**

1. **Move to Phase B** (before extraction)
2. **Add Track 1 vs Track 2 classification:**
   - Track 1: Tutorial, reference, Q&A, task-based (clean mappings exist)
   - Track 2: Onboarding, conceptual, philosophy, troubleshooting (high-tension candidates)

3. **Add tension pre-screening:**
   - For each page: "Does this content have a genuine tension with the system?"
   - FEEL tension: warmth vs austerity
   - RECONCILE tension: challenge vs verdict
   - NAVIGATE tension: free choice vs decisive ranking

4. **Output includes tentative metaphor candidates** (for Track 2 pages)

**FROM 02-POST-CD-PHASES.md:**

> "Content analysis serves a safety function... If this phase discovers a content type that no validated pattern covers, this is the LAST CHANCE to resolve it."

**VERDICT:** Correct, but INCOMPLETE. It's not just "does a pattern exist?" — it's "does this content create genuine tension requiring metaphor, or is assembly sufficient?"

---

### Phase E: Migration Playbook v2

**Status:** KEEP but EXPAND Track 2 specification
**Current spec:** Describes a uniform 6-phase process for all pages.

**PROBLEM:** From implications-and-questions.md:

> "Track 1 Composition Design: 'Select component sequence. Apply rules. Verify grammar.' This is mechanical.
>
> Track 2 Composition Design: 'Identify tension. Find metaphor. Compose resolution. Evaluate with taste.' This is creative."

The playbook describes Track 1 perfectly. Track 2 is underspecified.

**What changes:**

1. **Split into TWO execution paths:**
   - **Track 1 (Assembly):** Follows existing spec — deterministic pattern selection, mechanical composition
   - **Track 2 (Composition):** NEW spec invoking tension-composition skill

2. **Track 2 process includes:**
   - Multi-axis questioning (FEEL/UNDERSTAND/DO/BECOME + extended axes)
   - Tension derivation (Addition Test, BECAUSE test, richness scoring)
   - Metaphor collapse (constrained search, composite scoring)
   - Perceptual risk assessment (CRITICAL — richness ≠ quality)
   - Compositional layout generation with guardrails

3. **Escalation protocol must handle metaphor failure modes:**
   - Monopoly (only 1 candidate) → relax constraints, search again
   - Inflation (8+ candidates) → apply isomorphism count filter
   - Forcing (no candidate resolves all tensions) → accept partial resolution
   - Decay (metaphor weakens during build) → select next-best candidate

**NEW DELIVERABLE:** "Track 2 Compositional Migration Supplement" (~200-300 lines) describing:
- When to invoke tension-composition skill (Track 1 vs Track 2 decision tree)
- How to execute the 6-phase tension pipeline
- How to integrate perceptual guardrails (940px min container, 16px label-to-heading gap, 32px padding floor, 40% compression ratio)
- Builder warnings (W-DEADZONE, W-OVERLABEL, W-MONOTONY, W-RESPONSIVE, W-STATS, W-IMPLICIT)

---

### Phase C (NEW): Extraction Validation Pass

**Status:** ADD NEW PHASE
**Position:** After initial extraction (old Phase B), before Playbook

**WHY:**

The component-evolution-synthesis asks: "What exactly are we extracting?"

Current plan: Extract components, write playbook assuming components work.

**PROBLEM:** No validation that extracted components actually compose correctly.

**NEW PHASE (1-2 hours):**

1. Build 2-3 test pages using ONLY extracted Tier 1+2 CSS
2. One Track 1 page (tutorial) — should work perfectly
3. One Track 2 page (conceptual) — will expose Tier 3 gaps
4. Document what Tier 3 compositions are needed that extraction didn't capture
5. Feed findings into Playbook phase

**Output:** Extraction validation report showing:
- What Tier 1+2 CSS handles successfully
- What Tier 3 gaps exist
- Which metaphor families work with extracted base
- Which require fresh composition

This prevents playbook from assuming extraction is complete when it's only 60-70%.

---

### Phase G: Pilot Migration

**Status:** KEEP + validate both tracks
**Current:** 2-3 pages spanning different content types

**Change:**

1. **MUST include at least 1 Track 2 page** (not just Track 1 variety)
2. **Pilot must test tension-composition skill invocation**
3. **Pilot validates perceptual guardrails under real content**

**FROM 02-POST-CD-PHASES.md:**

> "The pilot answers questions theory cannot: Does the playbook work end-to-end? How long does migration take? What breaks that theory didn't predict?"

**VERDICT:** Correct. Add: "Does Track 2 tension-composition produce beauty or just correct compliance?"

---

### Phase H: Playbook Refinement

**Status:** KEEP
**No changes needed** — this already captures pilot learnings regardless of Track 1 vs Track 2 discoveries.

---

### FREEZE LINE

**Status:** KEEP
**No changes needed** — Freeze line logic is sound. Skills don't change when system freezes, only how agents USE the system to compose.

---

### Phase I+J: Full Migration

**Status:** KEEP + recognize two-track reality
**Current:** Describes uniform team topology scaling with page count.

**Add:**

1. **Track 1 pages can be parallelized** (6 agents, 6 pages, no creative bottleneck)
2. **Track 2 pages require creative capacity** (tension identification + metaphor selection is THE bottleneck)
3. **Weaver role is CRITICAL for Track 2** — cross-page metaphor reuse detection, tension pattern recognition

**Estimated split:**
- Track 1: ~80-85% of pages (60-65 pages)
- Track 2: ~15-20% of pages (10-15 pages)

Track 2 takes disproportionate time (3-5 hours per page vs 45-90 minutes for Track 1).

---

## 4. COMPONENT EXTRACTION RECONCEIVED

**Old model:**

> "Component Extraction builds the printing press. Extract layout primitives from 30 explorations. Migration agents apply pre-built components."

**New model:**

**"Component Extraction builds the ALPHABET and VOCABULARY. Migration agents compose PROSE."**

### What Gets Extracted

**Tier 1 (Atoms) — ~80 lines:**
- `:root` token block
- Global soul reset (`border-radius: 0`, `box-shadow: none`)

**Tier 2 (Molecules) — ~175 lines:**
- Callout family (5-6 variants)
- Code block (dark theme + syntax highlighting)
- Page header/footer
- Tables
- Inline code
- Accessibility infrastructure

**Tier 2.5 (Reusable Patterns) — ~145 lines:**
- Bento grid (multi-col with span variants)
- Hub-spoke layout
- Confidence gradient (border-weight encoding)
- File tree
- Task/Reasoning/Core Abstraction components
- Transition grammar (smooth/bridge/breathing)

**Total: ~400 lines of CSS**

### What Does NOT Get Extracted

**Tier 3 (Compositional Fragments) — 30-40% of any file:**

These are metaphor-dependent and cannot exist outside their context:

- OD-004 geological strata (meaningless outside confidence metaphor)
- DD-006 fractal nesting (meaningless outside self-similarity metaphor)
- AD-005 diagonal transitions (meaningless outside choreography metaphor)

**What happens to Tier 3?**

NOT extracted as CSS. DOCUMENTED as compositional strategies:

```markdown
## Compositional Strategy: Geological Strata

**Tension resolved:** Warmth/safety vs. austerity/sharpness

**Metaphor:** Geological layering — angular strata communicate depth while feeling reassuring

**Mechanisms used:**
- Border-weight gradient (4px/3px/1px) encodes confidence
- Background darkening with depth
- Spatial compression (padding decreases from 80px → 32px)
- Stratigraphic vocabulary (topsoil, subsoil, bedrock)

**When to use:**
- Content has layered confidence levels
- Reader needs to feel safe navigating uncertainty
- System's austerity can be CHANNELED into geological safety

**Isomorphism count:** 6 independent mappings
**Perceptual risk:** LOW (structural gradients, not textual labels)
**Responsive story:** Narrower core sample at 768px (natural degradation)
```

This is a PATTERN LIBRARY, not a component library. It teaches agents HOW TO THINK, not WHAT TO COPY.

---

## 5. PROPOSED NEW PIPELINE SHAPE

### POST-CD PHASE SEQUENCE (UPDATED)

```
PHASE A: CD (Combination Dimension) — 4-5 hours
   Validate both Track 1 (assembly) and Track 2 (composition)
   CD-006 = real content pilot
   ↓
PHASE B: Content Analysis + Track Classification — 2-4 hours
   Inventory all pages
   Classify: Track 1 (assembly) vs Track 2 (composition)
   Pre-screen for genuine tension
   Output: tentative metaphor candidates for Track 2
   ↓
PHASE C: Component + Pattern Base Extraction — 6-10 hours
   Extract ~400 lines Tier 1+2+2.5 CSS
   Document Tier 3 compositional strategies (NOT extract CSS)
   Produce: alphabet/vocabulary (extractable) + pattern library (prose)
   ↓
PHASE D: Extraction Validation Pass — 1-2 hours [NEW]
   Build 2-3 test pages using extracted base
   Validate Track 1 assembly works
   Identify Track 2 gaps requiring fresh composition
   ↓
PHASE E: Migration Playbook v2 — 4-5 hours
   Track 1 execution path (existing spec, mechanical)
   Track 2 execution path (tension-composition skill invocation) [NEW]
   Escalation protocols for metaphor failure modes
   Perceptual guardrails integration
   Builder warnings (W-DEADZONE, W-OVERLABEL, etc.)
   ↓
PHASE F: Pilot Migration — 3-5 hours
   MUST include 1+ Track 2 page [UPDATED]
   Test tension-composition skill invocation
   Validate perceptual guardrails
   ↓
PHASE G: Playbook Refinement — 1-2 hours
   Incorporate pilot learnings (Track 1 + Track 2)
   ↓
═══════════════ FREEZE LINE ═══════════════
   ↓
PHASE H+I: Full Migration — 15-40 hours
   Track 1: 60-65 pages, parallelizable (45-90 min each)
   Track 2: 10-15 pages, creative bottleneck (3-5 hours each)
   Weaver critical for Track 2 cross-page synthesis
```

### PER-PAGE 6-PHASE PIPELINE (UPDATED)

```
Phase 1: PAGE ANALYSIS
   Unchanged — "What IS this content?"
   Output: Page Analysis Card

Phase 2: PATTERN SELECTION
   Track 1: Deterministic lookup (content type → pattern triple)
   Track 2: Invoke tension-composition Phase 1 (Multi-Axis Questioning)
   Output: Pattern Selection Record OR Tension Table

Phase 3: COMPOSITION DESIGN [MAJOR CHANGE]
   Track 1: Mechanical component selection + velocity/temp/weight rules
   Track 2: Invoke tension-composition Phases 2-4:
            - Tension Derivation (Addition Test, richness scoring)
            - Metaphor Collapse (constrained search, composite scoring)
            - Compositional Layout (property extraction, translation grammar)
   Output: Composition Blueprint

Phase 4: BUILD
   Track 1: Apply extracted Tier 1+2 CSS
   Track 2: Compose Tier 3 fresh using metaphor mechanisms
   Output: Migrated page

Phase 5: PERCEPTUAL AUDIT
   Invoke perceptual-auditing skill (48 questions, guardrails verification)
   Track 2 pages: additional metaphor-awareness questions (PA-42, PA-43, PA-44)
   Output: Audit report

Phase 6: DISCOVERY DOCS
   Track 1: Standard Consumption Receipt
   Track 2: Enhanced with metaphor documentation, tension record, isomorphism table
   Output: Consumption Receipt + MIG-F findings
```

---

## 6. DOES COMPONENT EXTRACTION STILL MAKE SENSE AS STEP 1?

**ANSWER: NO. Content Analysis must come first.**

**OLD ORDER:**

```
CD → Component Extraction → Content Analysis → Playbook
```

**Problem:** You extract components before knowing what content needs. Extraction is blind.

**NEW ORDER:**

```
CD → Content Analysis → Component Extraction → Validation → Playbook
```

**WHY:**

1. **Content Analysis classifies Track 1 vs Track 2** — This tells extraction what's needed:
   - Track 1 pages need Tier 1+2 CSS (extractable)
   - Track 2 pages need Tier 3 compositional strategies (prose, not CSS)

2. **Content Analysis identifies tension types** — Pre-screening for FEEL/RECONCILE/NAVIGATE tensions informs what compositional strategies to document.

3. **Component extraction can target what's actually used** — If Content Analysis shows 60 tutorial pages and 3 confidence-layering pages, extraction prioritizes tutorial mechanisms.

4. **Validation pass prevents playbook assumptions** — Testing extracted base against real content BEFORE writing playbook exposes gaps early.

---

## 7. OPEN QUESTIONS

### Q1: Can the tension-composition skill be invoked BY an agent, or must it be invoked BY the user?

**Current state:** Skill exists at `~/.claude/skills/tension-composition/`

**Migration context:** Phase 3 (Composition Design) needs to invoke the skill for Track 2 pages.

**Question:** Can a migration agent in the middle of processing a page call:

```
/tension-composition [content]
```

...and receive the 6-phase tension pipeline output?

**If YES:** Phase 3 becomes a skill invocation gate. Simple.

**If NO:** Phase 3 spec must INLINE the entire tension-composition protocol. Complex but feasible.

---

### Q2: How do we decide Track 1 vs Track 2 at Content Analysis?

**Proposed heuristic:**

```
TRACK 1 (Assembly) if:
- Content type has clean pattern mapping (tutorial → CRESCENDO + F-Pattern)
- Addition Test = YES (existing components fulfill reader need)
- All axis tensions are COSMETIC

TRACK 2 (Composition) if:
- Content type resists clean mapping
- Addition Test = NO (reader need cannot be met by selecting/placing components)
- At least 1 axis produces GENUINE tension (richness score >= 8)
```

**Gray zone:** Hybrid pages (tutorial with conceptual tail). Default to Track 1 with Track 2 spot-treatment for tension sections.

---

### Q3: What if pilot migration reveals extracted base is insufficient for Track 1?

**Current plan:** Extraction → Playbook → Pilot

**Risk:** Pilot discovers Track 1 assembly doesn't work because extraction missed critical Tier 2 components.

**Mitigation:** Extraction Validation Pass (new Phase D) catches this BEFORE playbook.

**If pilot STILL finds gaps:** Freeze line hasn't activated yet. Return to extraction, add missing Tier 2, re-validate, update playbook, re-pilot.

---

### Q4: Do we document all 30 explorations as compositional strategies, or only the Track 2 ones?

**Component-evolution-synthesis shows:**

- DD had 32 Tier 3 components across 6 files (density metaphors)
- OD had 46 Tier 3 components across 6 files (organizational metaphors)
- AD had 57 Tier 3 components across 6 files (axis metaphors)
- CD had 2 genuine + 5 layout mechanisms (combination grammar)

**Total: 137 metaphor-dependent components across 24 files**

**Proposal:** Document the ~15-20 HIGHEST-RICHNESS compositional strategies:

- OD-004 Geological Strata (richness: 18, FEEL tension)
- OD-006 Fractal Self-Documentation (richness: 27, meta-recursion)
- DD-006 Fractal Self-Similarity (unifying principle)
- AD-004 Spiral Confidence (GEOLOGICAL + radial)
- AD-005 Choreography (hub-spoke with transitions)
- AD-006 Compound (multi-pattern sequencing)

Not all 137 Tier 3 components. Only the ones rich enough to serve as resolution templates for future tensions.

---

### Q5: How do we train agents to recognize genuine vs cosmetic tension?

**The Addition Test:**

> "Can you fulfill the reader's need by selecting and placing existing design system components without transforming their meaning?"
> - YES = COSMETIC (no tension, assembly sufficient)
> - NO = GENUINE (tension exists, metaphor required)

**The BECAUSE Test:**

> "The reader needs X BECAUSE [specific content property]."
> - Cannot complete sentence = manufactured need, reject
> - Can complete sentence = content-driven need, proceed

**Training approach:**

1. **Document 10 worked examples** (5 genuine, 5 cosmetic) in Playbook
2. **Provide decision tree** in Track 1 vs Track 2 classification
3. **Weaver validates** — if Track 2 classifications are weak, Weaver downgrades to Track 1

---

### Q6: What's the new timeline?

**OLD (from 05-COMPLETE-ROADMAP.md):**

```
CD:          4-5 hours
Extraction:  6-10 hours
Analysis:    2-4 hours
Playbook:    3-4 hours
Pilot:       3-5 hours
Refinement:  1-2 hours
─────────────────────────
Subtotal:    19-30 hours (pre-freeze)
Migration:   15-40 hours
─────────────────────────
TOTAL:       34-70 hours
```

**NEW:**

```
CD:                4-5 hours
Analysis:          2-4 hours  [moved earlier]
Extraction:        6-10 hours
Validation:        1-2 hours  [NEW]
Playbook:          4-5 hours  [+1 for Track 2 spec]
Pilot:             3-5 hours
Refinement:        1-2 hours
────────────────────────────
Subtotal:          21-33 hours (pre-freeze)
Migration Track 1: 10-15 hours (60 pages @ 10-15 min each)
Migration Track 2: 30-75 hours (10-15 pages @ 3-5 hours each)
────────────────────────────
TOTAL:             61-123 hours
```

**Track 2 is the bottleneck.** If we have 15 Track 2 pages at 5 hours each = 75 hours just for compositional work.

**Mitigation:** Weaver cross-references metaphors. If page 8 and page 12 have SIMILAR tensions, metaphor from page 8 can inform page 12 (not copy-paste, but strategy reuse).

---

## 8. SUMMARY: WHAT CHANGES

### Components That Need Rewriting

1. **02-POST-CD-PHASES.md, Section on Phase B (Component Extraction):**
   - Current: "Extract reusable layout primitives"
   - NEW: "Extract Tier 1+2 CSS (~400 lines) + document Tier 3 compositional strategies (prose)"

2. **02-POST-CD-PHASES.md, Phase sequence:**
   - Current: B (Extraction) → F (Analysis) → E (Playbook)
   - NEW: B (Analysis) → C (Extraction) → D (Validation) → E (Playbook)

3. **03-MIGRATION-PIPELINE.md, Phase 3 (Composition Design):**
   - Current: "Select components, apply rules, verify grammar"
   - NEW: "Track 1: mechanical selection. Track 2: invoke tension-composition skill (Phases 1-4)"

4. **03-MIGRATION-PIPELINE.md, The Classification Table:**
   - ADD: "Track classification" column (Track 1 vs Track 2)

5. **04-CONTENT-INGESTION.md, Two-Track Model section:**
   - Current: Mentioned briefly
   - NEW: Fully specified with cognitive demand differences

6. **05-COMPLETE-ROADMAP.md, Timeline:**
   - Update hours to reflect Track 2 bottleneck
   - Split Migration into Track 1 + Track 2 estimates

### New Documents Needed

1. **TRACK-2-COMPOSITIONAL-SUPPLEMENT.md** (~300 lines):
   - When to invoke tension-composition skill
   - How to execute 6-phase tension pipeline
   - Perceptual guardrails integration
   - Builder warnings reference
   - Worked examples of genuine vs cosmetic tension

2. **COMPOSITIONAL-STRATEGY-LIBRARY.md** (~800-1200 lines):
   - 15-20 documented strategies from high-richness explorations
   - Each entry: Tension resolved, Metaphor used, Mechanisms, Isomorphism table, When to use, Perceptual risk, Responsive story

3. **EXTRACTION-VALIDATION-PROTOCOL.md** (~200 lines):
   - How to run Phase D validation pass
   - What to test (1 Track 1 page, 1 Track 2 page)
   - What to document (gaps, Tier 3 needs)

### Documents That Are Still Valid

1. **06-KEY-INSIGHTS.md** — Language analogy, sameness impossibility, attention topology
   - NO CHANGES. Skills validate these insights.

2. **TENSION-PROTOCOL.md** — Already exists, validated by skills

3. **Freeze line logic** — Unchanged

4. **Phase G (Pilot), Phase H (Refinement), Phase I+J structure** — Unchanged, just add Track 2 recognition

---

## 9. THE ANSWER TO "DOES EXTRACTION STILL MAKE SENSE AS STEP 1?"

**NO.**

**New order:**

1. **CD** — Validate both tracks
2. **Content Analysis** — Classify Track 1 vs Track 2, pre-screen tension
3. **Extraction** — Informed by what content actually needs
4. **Validation** — Test extracted base against real content
5. **Playbook** — Specify both tracks with validated extraction
6. **Pilot** — Test both tracks
7. **Refinement** — Incorporate learnings
8. **FREEZE**
9. **Migration** — Execute with Track 1 parallelization + Track 2 creative capacity

**Extraction is Step 3, not Step 1.**

---

**END ANALYSIS**
**Files analyzed:** 14
**Skills cross-referenced:** 2
**Key finding:** Pipeline is 70% correct. Component extraction needs reconception from "printing press" to "alphabet + vocabulary". Content analysis must precede extraction. Phase 3 needs Track 2 specification invoking tension-composition skill. Timeline increases 2-3x due to Track 2 bottleneck.
