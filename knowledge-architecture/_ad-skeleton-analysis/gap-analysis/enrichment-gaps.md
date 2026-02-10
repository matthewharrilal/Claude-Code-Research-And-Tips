# Enrichment Validation Architecture: Gap Analysis

**Author:** enrichment-architect
**Date:** 2026-02-09
**Sources Analyzed:**
- ad-skeleton-synthesis.md (729 lines) -- Section 4 (Enrichment Strategy)
- ad-skeleton-enrichment.md (605 lines) -- Raw enrichment analyst analysis
- OD-CONVENTION-SPEC.md (468 lines) -- The actual specification
- HANDOFF-OD-TO-AD.md (352 lines) -- Transition gate
- OD-001-conversational.html (first 120 lines) -- How enrichment manifests in practice
- _od-reenrichment/ directory (62 files) -- What re-enrichment actually did
- verification-wave1.md -- Per-wave gate verification
- before-after-comparison.md -- Quantitative before/after
- scribe-report.md -- What scribes actually wrote
- identity-delta-wave1.md -- How identity evolution actually works
- dark-matter-index-a.md -- Dark matter catalog format

---

## EXECUTIVE SUMMARY

The AD skeleton's enrichment strategy (Section 4) is architecturally sound in its top-level claim: "convention-first eliminates the 43-agent re-enrichment." But the skeleton treats enrichment as a PIPELINE DESIGN problem (research -> build -> verify) when it is actually a DOCUMENT ENGINEERING problem. The gap is not in the sequence of operations but in the specification of what EACH operation produces at the file level.

I identify **7 critical gaps**, **5 high gaps**, and **6 medium gaps** across three domains: convention authoring, document-level enrichment layers, and validation infrastructure.

---

## 1. CONVENTION WRITING: WHO, FROM WHAT, AND HOW

### 1.1 GAP-E01 [CRITICAL]: Convention Agent Input Specification Is Empty

**What the skeleton says:** "Convention Agent writes AD-CONVENTION-SPEC.md" (Section 4.1). It must be 300-500 lines, inherit OD conventions, add axis-specific conventions, and label every value T1 or T2.

**What the skeleton DOESN'T say:** What does the Convention Agent READ to produce these conventions? The skeleton lists outputs but not inputs.

**What actually happened in OD:** The OD convention spec was written AFTER the audit -- after 89 findings had been cataloged, after 3 quality dialects had been identified, after Polished/Functional/Editorial gaps had been documented in the audit synthesis. The convention agent read:
- OD-AUDIT-SYNTHESIS.md (the 89 findings)
- Per-dialect analysis (which ODs had what traits)
- Anti-patterns/registry.md (what to avoid)
- ACCUMULATED-IDENTITY-v1.md (what the system IS)
- All 6 OD HTML files (to extract the common denominator)

**The problem for AD:** AD writes conventions BEFORE building. There are no audit findings yet. There are no dialect gaps to resolve. The convention agent must produce conventions from:
1. OD-CONVENTION-SPEC.md (inherited -- this part is clear)
2. R-4 Axis Innovations research (192 findings -- but which ones inform CONVENTIONS vs CONTENT?)
3. Soul compliance requirements (well-documented)
4. AD-specific needs (CSS Grid patterns, zone tokens, responsive breakpoints)

**Gap:** Items 2 and 4 require the Convention Agent to make DESIGN DECISIONS about axis geometry without any prior exploration to validate them. This is the authority laundering problem the skeleton mentions (GAP-P01) but does not solve.

**Recommendation:** The Convention Agent's prompt must include:
- EXPLICIT list of input files (not just "inherits OD")
- For axis-specific additions: distinguish between STRUCTURAL conventions (Grid vs Flexbox -- these ARE design decisions, mark them T2) and INHERITED conventions (soul, palette, borders -- mark T1 with source finding IDs)
- A CONSTRAINT: axis-specific CSS values must cite either an R-4 finding (T1) or state "T2: CONVENTION -- untested assumption, to be validated by first builder"
- An ESCAPE HATCH: if Wave 1A builders discover a T2 convention is wrong, the protocol for updating the spec DURING build (not frozen forever)

### 1.2 GAP-E02 [CRITICAL]: Convention Freezing Is Too Rigid

**What the skeleton says:** "AD-CONVENTION-SPEC.md... frozen after Phase 0" (Section 3.5, File Ownership Matrix). "Lead (Phase 0 only, frozen after). All read; nobody modifies."

**What actually happened in OD:** OD conventions were written post-hoc and thus were empirically grounded. The freeze was justified because the spec codified OBSERVED behavior.

**The problem for AD:** AD conventions are written BEFORE any exploration exists. Freezing untested axis-geometry conventions (e.g., "Bento Grid uses CSS Grid with named areas and fr units") risks locking in wrong decisions.

**Evidence from OD-001 header (lines 61-65):** Five "spirit violations" were fixed in v3 -- semi-transparent offsets, type scale corrections, code block color corrections, header background changes, border eliminations. These are CONVENTION-LEVEL fixes discovered during enrichment, not just content fixes. If AD freezes its convention spec, equivalent discoveries cannot be incorporated.

**Recommendation:** Implement a TWO-PHASE convention lifecycle:
- Phase 0: DRAFT convention spec. Labeled "PROVISIONAL" in header.
- After Wave 1A completion: VALIDATE draft against built artifacts. Convention Agent (or Lead) reviews Wave 1A output and promotes DRAFT to FROZEN for validated values. Untested values remain DRAFT.
- After Wave 1B: Final freeze. All remaining DRAFT values either validated or removed.
- This adds one review step per wave but prevents the "frozen wrong decision" failure mode.

### 1.3 GAP-E03 [HIGH]: Convention Validation Protocol Is Absent

**What the skeleton says:** Gate 0-06 checks "AD-CONVENTION-SPEC.md exists, >= 300 lines." Gate 0-07 checks "all values labeled T1/T2."

**What the skeleton DOESN'T say:** Who validates that the convention values are CORRECT? Existence and T1/T2 labeling prove the file was written and labeled, not that its contents are right.

**What actually happened in OD:** The OD convention spec's correctness was validated by the re-enrichment process itself -- builders applied it to all 6 ODs, and the adversarial audit caught remaining issues. The spec was correct because it was extracted from working artifacts.

**Recommendation:** Add a Gate 0-06b: "AD-SOUL-TEMPLATE.html renders with correct :root values (Playwright verification of computed styles against convention spec values)." This is a PROGRAMMATIC validation that the template embeds the convention correctly. The skeleton mentions this in Section 1.4 ("renders correctly at localhost:8080") but does not specify WHAT "correctly" means. Define: all --type-* values match, all --color-* values match, all --space-* values match, border-radius === 0, box-shadow === "none".

---

## 2. CONVENTION ENFORCEMENT: HOW THE SOUL TEMPLATE ACTUALLY WORKS

### 2.1 GAP-E04 [CRITICAL]: The Template-as-Enforcement Mechanism Has a Structural Weakness

**What the skeleton says:** "AD-SOUL-TEMPLATE.html: Skeleton HTML file every builder copies. Embeds ALL convention CSS. Builders add CONTENT only -- cannot accidentally create dialect divergence because the styling is pre-baked" (enrichment analysis, Section 1.2).

**What actually happened in OD:** Even though OD-001 started from a well-defined base, the v1 -> v3 re-enrichment changed:
- `:root` variable values (--type-meta from 0.625rem to 0.75rem)
- Code block background (#1E1E1E to #1A1A1A)
- Header background (light to dark)
- Pseudo-element opacity values
- Border widths (2px to 3px or 1px)

These are ALL CSS changes -- exactly what the template was supposed to prevent.

**The structural weakness:** Builders DO need to add CSS. Axis layouts (Grid named areas, Flexbox configurations, responsive breakpoints) are inherently CSS-heavy. The claim "builders add CONTENT only" is false for axis explorations. A Z-Pattern exploration NEEDS different CSS from a Bento Grid exploration.

**Recommendation:** Split the template into TWO layers:
1. **LOCKED layer** (in the template): Soul compliance, locked palette, font trio, border system, spacing tokens, base styles. Builders MUST NOT modify this layer.
2. **AXIS layer** (builder-authored): Grid/Flexbox layouts, axis-specific zone definitions, responsive breakpoints. Builders MUST modify this layer.

The binary gate becomes: "LOCKED layer CSS matches template exactly (diff = 0 lines in locked section). AXIS layer CSS follows convention spec patterns."

The Weaver's compliance check (Section 4.3) should diff the LOCKED layer specifically, not just check "header structure or :root block."

### 2.2 GAP-E05 [HIGH]: Builder Deviation Protocol Is Missing

**What the skeleton says:** Nothing about what happens when a builder NEEDS to deviate from convention.

**What actually happened in OD:** OD-006 had 5 intentional divergences (3rem title, no code blocks, all 5 modes, drop caps, larger meta text). These were documented in OD-CONVENTION-SPEC.md Section 9 as "INTENTIONAL and MUST NOT be unified." But the documentation happened AFTER the fact.

**The problem for AD:** AD-006 (Compound) will need intentional divergences (it uses ALL 5 prior axis patterns). AD-004 (Spiral) may need divergences if the spiral pattern requires techniques not in the convention spec. The skeleton's GAP-SC02 acknowledges this for AD-004 specifically but provides no general protocol.

**Recommendation:** Add a DEVIATION PROTOCOL to AD-BINARY-GATES.md:
```
If builder needs to deviate from convention:
1. STOP building
2. Document deviation in HTML comment: <!-- DEVIATION: [what] REASON: [why] CONVENTION: [what spec says] -->
3. Classify: INTENTIONAL (editorial choice) or NECESSARY (technical constraint)
4. If INTENTIONAL: requires Lead approval via SendMessage before proceeding
5. If NECESSARY: proceed, document in completion report, Weaver flags for review
```

---

## 3. WHAT RE-ENRICHMENT ACTUALLY DID: OPERATION-LEVEL MAPPING

### 3.1 GAP-E06 [CRITICAL]: The Skeleton Doesn't Enumerate Document-Level Enrichment Layers

The skeleton says "enrichment DURING build" but doesn't specify the COMPLETE list of enrichment operations a builder must perform for each HTML file. By examining OD-001's header (75 lines), I can reconstruct EVERY enrichment layer that exists in a fully-enriched exploration file:

**Layer 1: Research Application Record (RAR)**
The HTML header comment block (lines 1-75 in OD-001) contains:
- Score breakdown (Innovation/Utility/Soul/Execution)
- Hypothesis statement
- Identity statement (OD-F-005 mapping)
- Density pairing declaration
- DD source references
- Research applied (original, with finding IDs per citation)
- Research applied (v2 enrichments, with EXT-* IDs per citation)
- Research applied (v3 re-enrichments, with EXT-* IDs)
- Anti-patterns avoided (with finding IDs)
- Spirit violations fixed (specific CSS changes)
- DD-F-006 fractal compliance evidence (4 scale descriptions)
- OD-F-005 identity compliance statement

**Layer 2: Inline Threading Header**
Separate HTML comment block (lines 77-120+) containing:
- File path, Tier, Stage, Date
- WHY THIS EXISTS (paragraph)
- THE QUESTION THIS ANSWERS (hypothesis)
- STATUS (with version, audit results, soul compliance)
- SOUL ALIGNMENT (5-row table)
- BUILT ON (dependency table with paths)
- CONSUMED BY (consumer table)

**Layer 3: :root CSS Block**
Unified convention tokens -- must match AD-CONVENTION-SPEC.md exactly

**Layer 4: Base Styles**
Selection, focus-visible, skip-link, reduced-motion, print -- per convention spec Section 12

**Layer 5: Research Citation Inline Comments**
Within the HTML body, comments like `<!-- Applying R1-001: Density Rhythm -->` or `<!-- EXT-CONV-006 applied here -->` at the point of application

**Layer 6: Finding ID Citations in Content**
HTML comments citing finding IDs where design decisions apply: `<!-- OD-F-AP-001: 3px structural border applied -->`

**Layer 7: Version Badge**
Visual element in the header showing "v1 enriched" or "v3 re-enriched"

**Layer 8: Fractal Compliance Evidence**
Comments or visual structure demonstrating DD-F-006 at 4 scales

**The gap:** The skeleton mentions layers 1, 2, 3, 5, and 7 but does not enumerate them as a COMPLETE CHECKLIST. Layers 4 (base styles), 6 (finding ID citations in body), and 8 (fractal compliance evidence) are implied but not explicitly required.

**Recommendation:** Create an AD ENRICHMENT LAYER CHECKLIST (embed in every builder prompt):
```
AD ENRICHMENT LAYERS (ALL REQUIRED):
[ ] L1: Research Application Record in header comment (score, hypothesis, identity, citations)
[ ] L2: Inline Threading Header (9-section format: WHY/QUESTION/STATUS/SOUL/BUILT-ON/CONSUMED-BY)
[ ] L3: :root block matches AD-CONVENTION-SPEC.md (diff = 0 for locked values)
[ ] L4: Base styles present (selection, focus-visible, skip-link, reduced-motion, print)
[ ] L5: Research citations at point of application (HTML comments with finding IDs)
[ ] L6: Finding ID citations for design decisions (AD-F-NNN at point of implementation)
[ ] L7: Version badge in visual header ("v1 enriched")
[ ] L8: DD-F-006 fractal compliance evidence (4 scale descriptions in header + visible in structure)
```

### 3.2 GAP-E07 [CRITICAL]: Scribe Operations Are Under-Specified

**What the skeleton says:** "Scribes update SECONDARY chain documents (EXT-RESEARCH-REGISTRY, RESEARCH-ACTIVE, PIPELINE-MANIFEST) after builder completion" (Section 9.1 contradiction resolution).

**What scribes actually did in OD (from scribe-report.md):**

The Wave 5 scribe read 14 files and updated 4 categories of files:

1. **OD-AUDIT-SYNTHESIS.md** -- Added findings summary table, per-OD soul compliance matrix, calibration test results, standards compliance, fresh-eyes verdict, audit method note, updated compaction-safe summary
2. **OD-outbound-findings.md** -- Added Wave 5 post-re-enrichment audit section with OD-AP-003 confirmation, soul violation status, calibration methodology, standards baseline, fresh-eyes verdict
3. **RE-ENRICHMENT-STATE.md** -- Updated wave status from NOT STARTED to COMPLETE, added 12 agent log entries
4. **6 OD HTML files** -- Updated STATUS lines in inline threading headers

**The gap:** The skeleton only specifies EXT-RESEARCH-REGISTRY, RESEARCH-ACTIVE, and PIPELINE-MANIFEST as scribe targets. But OD scribes also updated:
- AUDIT-SYNTHESIS (audit-specific)
- Outbound-findings (chain document)
- State tracking file
- THE EXPLORATION FILES THEMSELVES (status lines)

For AD, the scribe's complete operation list should be:

| Scribe Operation | Target File | What Changes |
|-----------------|-------------|--------------|
| Register EXT-AXIS-* findings | EXT-RESEARCH-REGISTRY.md | New category + findings table |
| Update research tracking | RESEARCH-ACTIVE.md | Application rates, new citations |
| Update pipeline manifest | PIPELINE-MANIFEST.md | AD-F entries, R-4/R-2 status |
| Update state tracking | AD-BUILD-STATE.md | Wave status, agent completion |
| Update exploration status | AD-NNN.html (STATUS line) | "v1 enriched" + audit results |
| Update outbound findings | AD-outbound-findings.md | New AD-F entries if builder discovered any |

**Recommendation:** The skeleton's scribe specification must enumerate ALL target files, not just the three mentioned.

---

## 4. DARK MATTER: THE SKELETON'S BIGGEST BLIND SPOT

### 4.1 GAP-E08 [HIGH]: Dark Matter Prevention vs Dark Matter Indexing

**What the skeleton says:** "Dark matter is prevented, not remediated" (enrichment analysis, Section 2.2). "Every new .md file born WITH inline threading header."

**What actually happened in OD:** Despite the prevention claim, OD re-enrichment STILL needed 4 dark matter indexers (dm-a through dm-d) to catalog ~100 files across 4 underscore directories. The dark-matter-index-a.md file (161 lines) catalogs 29 files in _od-audit-scratchpad/ totaling 9,275 lines and ~540KB.

**Why prevention alone is insufficient:**
1. Working artifact directories (_ad-execution/) accumulate files that NO formal chain document references
2. Agent reports (updater-a-report.md, synthesizer-report.md) contain insights compressed out of formal synthesis
3. Screenshots don't have inline headers (they're PNGs)
4. State tracking files (RE-ENRICHMENT-STATE.md) are operational, not provenance

**The real dark matter problem:** It's not files without headers. It's files with headers that NO formal chain document references. The dark matter index serves as the BRIDGE between working artifacts and the formal chain.

**Recommendation:** AD should:
1. Accept that dark matter WILL accumulate in _ad-execution/
2. Plan for a lightweight dark matter indexing pass AFTER each build wave (not a separate 4-agent operation, but a Weaver responsibility: "After each wave, verify every file in _ad-execution/ is referenced by at least one formal chain document OR cataloged in the dark matter index")
3. The CLAUDE.md file manifest (maintained by Weaver) serves as the de facto dark matter index if kept current -- formalize this role

### 4.2 GAP-E09 [MEDIUM]: Screenshot Provenance Is Unaddressed

The skeleton mentions "~132 screenshots (6 pages x 2 viewports x ~10 slices + full-page)" in Section 5.1 but doesn't address how these are tracked. OD's solution was before-measurements.md and after-measurements.md files that catalog screenshots with metadata. AD needs the same.

---

## 5. CONVENTION INHERITANCE: THE CROSS-STAGE PROBLEM

### 5.1 GAP-E10 [HIGH]: Inheritance Semantics Are Ambiguous

**What the skeleton says:** "AD-CONVENTION-SPEC.md inherits ALL OD conventions + adds axis-specific" and "starts with 'INHERITS: OD-CONVENTION-SPEC.md' and only adds axis-specific conventions" (Section 9.5 resolution).

**The ambiguity:** Does "inherits" mean:
(a) COPY all OD values into AD spec (AD spec is standalone, 600+ lines), or
(b) REFERENCE OD spec (AD spec says "see OD-CONVENTION-SPEC.md for base values" and only lists additions, ~200 lines)?

**Why it matters:** If (a), the AD spec might drift from OD spec if either is updated later. If (b), every reader needs to open TWO files to get complete convention values.

**OD evidence:** OD-CONVENTION-SPEC.md is 468 lines and is STANDALONE -- it doesn't reference any prior spec. It IS the complete spec.

**Recommendation:** Option (a) with safeguards. AD-CONVENTION-SPEC.md should be STANDALONE (all values present) with:
- An explicit "INHERITED FROM OD" label on each OD value (not just T1/T2 but also provenance: "OD-CONVENTION-SPEC.md Section 2")
- An explicit "AD-SPECIFIC" label on each new axis value
- A diff section at the end: "VALUES CHANGED FROM OD" (if any OD values are modified for axis needs)

This is more verbose but eliminates the two-file problem and makes drift detectable.

### 5.2 GAP-E11 [MEDIUM]: OD Convention Updates Post-Comprehensive-Audit Are Not Reflected

**What happened:** The comprehensive hierarchical audit (commit 71dc02c) made 10 Critical/High fixes including:
- rgba opacity cleanup
- R-2 count correction (78 to 27)
- EXT-* count correction (69 to 94)
- DD code block palette alignment
- Skip-link/focus-visible fixes
- Inline code font-size changes
- Off-palette background removal
- Stale metadata correction

**The gap:** Were these fixes reflected back into OD-CONVENTION-SPEC.md? The skeleton says AD inherits OD conventions. If the convention spec wasn't updated after the comprehensive audit fixes, AD inherits stale conventions.

**Recommendation:** Before AD Phase 0, verify OD-CONVENTION-SPEC.md reflects ALL post-audit fixes. This is a 15-minute pre-AD housekeeping item (the skeleton mentions housekeeping in Section 12 but doesn't include this specific check).

---

## 6. THE GENERATIVE IDENTITY LOOP: UNDER-SPECIFIED MECHANICS

### 6.1 GAP-E12 [HIGH]: Identity Delta Quality Gate Is Missing

**What the skeleton says:** "Each delta MUST contain >= 1 specific new question referencing THIS wave's findings and targeting a SPECIFIC aspect of the next wave's ADs."

**What actually happened (identity-delta-wave1.md):** The Wave 1 delta contained:
- 4 surprises (semi-transparent offsets, type scale provenance, zone token naming, progressive disclosure)
- 3 identity refinements (quantitative opacity gate, density-function token naming, Freytag falling action)
- SOUL FAIL summary (6/6 FAILs are depth/motion/ornamentation -- ANTI-PHYSICAL pattern)
- 3 questions for Wave 2 (each citing specific findings AND targeting specific OD aspects)

**The gap:** The skeleton's quality gate (">=1 question") is absurdly low. The OD delta had 4 surprises + 3 refinements + 3 questions = 10 substantive elements. A delta with only 1 generic question would be nearly worthless.

**Recommendation:** Raise the identity delta quality gate:
```
IDENTITY DELTA GATE:
[ ] >= 2 surprises (specific, citing finding IDs)
[ ] >= 1 identity refinement (rule change or rule addition)
[ ] >= 1 SOUL FAIL pattern summary (from researcher SOUL FAILs)
[ ] >= 2 questions for next wave (each citing THIS wave's findings + targeting SPECIFIC next-wave AD aspects)
[ ] Total delta: 10-20 lines (not 3-line stub)
```

### 6.2 GAP-E13 [MEDIUM]: Cross-Wave SOUL FAIL Accumulation Is Not Tracked

**What happened in OD:** Identity-delta-wave1.md tracked SOUL FAIL patterns across researchers. By Wave 3, the accumulated SOUL FAIL pattern (ANTI-PHYSICAL) became a significant identity discovery. But this accumulation happened organically, not systematically.

**Recommendation:** The Weaver should maintain a SOUL FAIL ACCUMULATOR in AD-BUILD-STATE.md. After each wave:
```
SOUL FAIL ACCUMULATOR:
Wave 1: 6 FAILs — depth/motion/ornamentation
Wave 2: N FAILs — [pattern]
Wave 3: N FAILs — [pattern]
CUMULATIVE PATTERN: [synthesis]
THRESHOLD: If >= 15 accumulated SOUL FAILs share a pattern, elevate to identity finding
```

---

## 7. VERIFICATION TOPOLOGY: WHAT THE SKELETON MISSES ABOUT PER-WAVE VERIFICATION

### 7.1 GAP-E14 [MEDIUM]: Verification Report Format Is Not Standardized

**What actually happened (verification-wave1.md):** The verification report had:
- 9 binary checks per OD file (exists, score, soul violations, research rate, convention, OD-F findings, borders, spirit violations, score improvement)
- 5 shared provenance checks (outbound-findings updated, EXT entries, RESEARCH-ACTIVE updated, RESEARCH-GATE updated, no dark matter)
- Notes section with specific items requiring attention
- GATE VERDICT: PASS/FAIL

**The gap:** The skeleton lists Gates W-01 through W-13 (Section 2.3) but doesn't provide the REPORT FORMAT. Without a format, each verifier writes differently, making cross-wave comparison difficult.

**Recommendation:** Include the verification report template (from enrichment analysis Section 7.1) in the verifier's prompt, not just the gate list.

### 7.2 GAP-E15 [MEDIUM]: Convention Notes From Verification Are Lost

**Evidence from verification-wave1.md lines 50-51:** Three "Notes" identified issues:
- Note 1: Code block bg #1E1E1E vs spec #1A1A1A (4 units off)
- Note 2: Header bg white vs spec dark
- Note 3: --type-meta 0.625rem vs spec 0.75rem

These notes were KNOWN ISSUES that would be fixed in subsequent waves. But the skeleton has no mechanism for carrying verification notes forward. The next wave's verifier doesn't know what was deferred.

**Recommendation:** AD-BUILD-STATE.md should include a DEFERRED ISSUES section:
```
DEFERRED ISSUES (carry forward):
| Wave | Note | Issue | Deferred To | Status |
|------|------|-------|-------------|--------|
| 1A | N1 | Code bg #1E1E1E vs #1A1A1A | Wave 1B | OPEN |
```

Weaver maintains this. Next wave's verifier reads it and checks whether deferred issues were resolved.

---

## 8. THE ANTI-CITATION-THEATER PROBLEM: DEEPER THAN THE SKELETON REALIZES

### 8.1 GAP-E16 [MEDIUM]: Citation Verification Is One-Directional

**What the skeleton says (Section 4.4):** "Each citation must point to a specific HTML/CSS element" and "Weaver cross-checks: citation ID exists in source + cited element exists in HTML."

**What the skeleton misses:** This checks that citations are VALID (the cited thing exists) but not that they are GENUINE (the cited research actually influenced the design). A builder can read the research package, build whatever they want, then sprinkle citation comments throughout the HTML. The citations would all be valid (IDs exist, elements exist) but meaningless.

**Evidence from OD:** The fresh-eyes agent protocol (Section 5.3) addresses this: observe axis patterns WITHOUT reading research, then cross-reference. But this is a Phase 2 (audit) check, not a Phase 1 (build) check. By Phase 2, citation theater is already baked into the file.

**Recommendation:** Add a Phase 1 anti-theater measure:
- Each research package includes 2-3 "SIGNATURE ELEMENTS" -- specific CSS/HTML patterns that would ONLY exist if the research finding was genuinely applied
- Verifier checks for signature elements, not just comment strings
- Example: If EXT-AXIS-Z-001 says "Z-pattern requires diagonal emphasis through asymmetric padding," the signature element is `padding-left != padding-right on primary content sections`

---

## 9. SYNTHESIS: WHAT THE SKELETON GETS RIGHT

To be fair, the skeleton gets several things RIGHT that OD got wrong:

1. **Reserved finding ID ranges** (Section 3.3) -- Eliminates the OD-F-005 collision problem entirely. Each builder has a non-overlapping range. This is a clean engineering solution.

2. **Research-as-build-input** (Section 4.2) -- The sequencing (research -> build, not build -> research) is correct and was the single most important lesson from OD.

3. **T1/T2 labeling** (enrichment analysis Section 5) -- Making authority provenance explicit prevents the most subtle form of dark matter. The OD convention spec mixed T1 and T2 silently.

4. **Per-wave identity deltas** (Section 4.6) -- The generative loop architecture is sound. The execution quality just needs higher gates.

5. **Wave-accumulated soul compliance** (Gate W-04/05/06/07/08) -- Checking ALL accumulated files at each wave gate, not just the new ones, prevents the rgba() epidemic from spreading undetected.

---

## 10. PRIORITIZED RECOMMENDATION SUMMARY

### MUST FIX (Before Phase 0 starts)

| # | Gap | Fix | Effort |
|---|-----|-----|--------|
| 1 | GAP-E01 | Enumerate Convention Agent input files explicitly | 15 min |
| 2 | GAP-E02 | Implement DRAFT/FROZEN two-phase convention lifecycle | 30 min |
| 3 | GAP-E04 | Split template into LOCKED layer + AXIS layer | 30 min |
| 4 | GAP-E06 | Create AD ENRICHMENT LAYER CHECKLIST (8 layers) | 20 min |
| 5 | GAP-E07 | Enumerate all scribe target files (6 categories, not 3) | 10 min |

### SHOULD FIX (During Phase 0)

| # | Gap | Fix | Effort |
|---|-----|-----|--------|
| 6 | GAP-E03 | Add programmatic convention validation gate (0-06b) | 15 min |
| 7 | GAP-E05 | Add DEVIATION PROTOCOL to AD-BINARY-GATES.md | 15 min |
| 8 | GAP-E08 | Formalize Weaver as dark matter indexer | 10 min |
| 9 | GAP-E10 | Make AD-CONVENTION-SPEC.md standalone with inheritance labels | In convention writing |
| 10 | GAP-E12 | Raise identity delta quality gate (2 surprises, 2 questions min) | 5 min |

### CAN FIX (During Build)

| # | Gap | Fix | Effort |
|---|-----|-----|--------|
| 11 | GAP-E09 | Add screenshot provenance template | 10 min |
| 12 | GAP-E11 | Verify OD-CONVENTION-SPEC.md reflects post-audit fixes | 15 min |
| 13 | GAP-E13 | Add SOUL FAIL ACCUMULATOR to AD-BUILD-STATE.md | 10 min |
| 14 | GAP-E14 | Include verification report template in verifier prompt | 10 min |
| 15 | GAP-E15 | Add DEFERRED ISSUES section to AD-BUILD-STATE.md | 5 min |
| 16 | GAP-E16 | Add signature element checks to research packages | 15 min |

---

## 11. THE META-GAP: ENRICHMENT IS DOCUMENT ENGINEERING

The deepest gap in the skeleton is conceptual: it treats enrichment as a pipeline problem (sequence operations correctly) when it is a document engineering problem (specify what a complete document contains).

**OD-001's header is 75 lines of structured metadata.** That's not "enrichment" in the traditional sense -- it's a PROTOCOL for what a complete exploration file looks like. The skeleton needs to define this protocol explicitly:

```
A COMPLETE AD EXPLORATION FILE CONTAINS:
1. Research Application Record (header comment, 30-50 lines)
2. Inline Threading Header (header comment, 30-50 lines)
3. DOCTYPE + html + head with:
   a. Google Fonts loading
   b. LOCKED CSS layer (from template, unchanged)
   c. AXIS CSS layer (builder-authored, convention-compliant)
4. body with:
   a. Skip-link
   b. Full-bleed dark header (meta line + title + subtitle)
   c. main#main-content with content sections
   d. Research citation comments at application points
   e. Finding ID citations at decision points
   f. Version badge
5. Fractal compliance at 4 scales (documented in RAR)
6. All R-4/R-2/EXT-AXIS-* citations from research package applied
7. 10-item binary gate self-check PASS
```

This is the SPECIFICATION that the skeleton is missing. Everything else -- convention writing, research packaging, verification gates -- serves this specification.

---

## COMPACTION-SAFE SUMMARY

- **7 critical gaps:** Convention Agent inputs unspecified (E01), convention freezing too rigid (E02), template enforcement has structural weakness (E04), enrichment layers not enumerated (E06), scribe operations under-specified (E07)
- **5 high gaps:** Convention validation absent (E03), deviation protocol missing (E05), dark matter prevention insufficient (E08), inheritance semantics ambiguous (E10), identity delta quality gate too low (E12)
- **6 medium gaps:** Screenshot provenance (E09), post-audit convention staleness (E11), SOUL FAIL accumulation (E13), verification format (E14), deferred issues tracking (E15), citation theater (E16)
- **Core insight:** Enrichment is a DOCUMENT ENGINEERING problem. The skeleton must define what a complete AD exploration file contains (11-element specification), not just the pipeline that produces it.
- **Top 5 fixes by impact:** Enrichment layer checklist (E06), two-phase convention lifecycle (E02), split template (E04), enumerate Convention Agent inputs (E01), complete scribe target list (E07)
