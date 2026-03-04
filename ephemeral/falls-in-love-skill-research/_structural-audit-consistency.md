# Structural Audit: Wave Consistency in /falls-in-love SKILL.md

**File:** `~/.claude/skills/falls-in-love/SKILL.md` (1,166 lines)
**Audit date:** 2026-03-03
**Focus:** Do all 9 waves (0-8) use consistent structure?

---

## 1. Structural Template Comparison

### 1A. Master Comparison Table

| Sub-section | W0 | W1 | W2 | W3 | W4 | W5 | W6 | W7 | W8 |
|---|---|---|---|---|---|---|---|---|---|
| **Wave header** | YES `### Wave 0: Content Immersion (8-12 passes)` | YES, same format | YES, same format | YES, same format | YES, same format | YES, same format | YES, same format | YES, same format | YES, same format |
| **Input files** | YES, descriptive | YES, filenames | YES, filenames | YES, filenames (detailed) | YES, filenames | YES, filenames | NO | NO | NO |
| **Pass count spec** | YES, range `(8-12 passes)` in header + inline | YES, range `(10-14 passes)` in header + inline | YES, range `(12-18 passes)` in header + inline | YES, range `(12-18 passes)` in header + inline | YES, range `(8-12 passes)` in header + inline | YES, range `(8-12 passes)` in header + inline | YES, range `(15-25 passes)` in header + inline | YES, range `(8-12 passes)` in header + inline | YES, range `(5-10 passes)` in header + inline |
| **Rotation schedule** | NO | YES, explicit sequence | YES, explicit sequence | YES, tiered system with explicit sequence | YES, explicit sequence | YES, explicit sequence | NO | NO | NO |
| **Metacognitive questions** | YES, 5 layers | YES, 5 layers | YES, 5 layers + dimension-specific | YES, 5 layers + dimension-specific | YES, 5 layers | YES, 5 layers | YES, 5 layers | YES, 5 layers | YES, 5 layers |
| **Evaluation criteria** | NO (criteria are at global level) | NO | NO | NO | NO | NO | NO | YES (references 10 falsifiable criteria) | NO |
| **Staleness signatures** | In global section only | In global section only | In global section only | In global section only | In global section only | In global section only | In global section only | In global section only | In global section only |
| **Diagnostic override ref** | NO | YES, explicit | YES, explicit + full protocol | YES, explicit | YES, one-line ref | YES, one-line ref | NO | NO | NO |
| **Transition condition** | YES, inline with exhaustion signal | YES, inline | YES, inline | YES, inline | YES, inline | YES, inline | YES, inline | Implicit (enters Wave 8 conditionally) | YES, inline (final) |
| **Expected outputs** | Implicit (spatial skeleton) | Implicit (token-compliant HTML) | Implicit (research-enriched HTML) | Implicit (case-study-enriched HTML) | Implicit (consistent HTML) | Implicit (architecturally sound HTML) | Implicit (taste-approved HTML) | Implicit (audited HTML) | Implicit (final HTML) |
| **Pass-level deepening** | YES, 3 stages | YES, 3 stages | YES, 4 stages | YES, 5 stages | YES, 3 stages | YES, 3 stages | YES, 5 named sub-phases | YES, 4 stages | YES, 3 stages |
| **Per-pass activity descriptions** | NO | NO | NO | NO | NO | NO | YES (Passes 1-5, 6-10, 11-15, 16-20, 21-25) | YES (Passes 1-12 individually) | YES (Passes 1-3, 4-6, 7-10) |
| **Cycle reminder** | YES, explicit | YES, explicit | YES, explicit | YES, explicit | YES, explicit | YES, explicit | YES, explicit | YES, explicit | YES, explicit |
| **File-specific guidance** | NO (only content) | NO | YES, per-file contribution summaries | YES, per-dimension extraction guidance | NO | NO | NO | NO | NO |
| **Cross-dimension prompts** | NO | NO | NO | YES | NO | NO | NO | NO | NO |
| **Findings triage** | NO | NO | YES | NO | NO | NO | NO | NO | NO |
| **Attention trough guidance** | NO | NO | NO | YES | NO | NO | NO | NO | NO |
| **"Look before reading"** | NO | NO | YES (says "and every subsequent wave") | NO | NO | NO | NO | NO | NO |

### 1B. Wave Header Format

All 9 waves use identical header format:

```
### Wave N: {Title} ({min}-{max} passes)
```

This is perfectly consistent. The headers are:

| Wave | Header (Line #) |
|---|---|
| 0 | `### Wave 0: Content Immersion (8-12 passes)` (L503) |
| 1 | `### Wave 1: Design System Soul (10-14 passes)` (L527) |
| 2 | `### Wave 2: Research R1-R5 (12-18 passes)` (L555) |
| 3 | `### Wave 3: Case Studies (12-18 passes)` (L642) |
| 4 | `### Wave 4: Synthesis + Provenance (8-12 passes)` (L747) |
| 5 | `### Wave 5: Combination Mastery (8-12 passes)` (L775) |
| 6 | `### Wave 6: Integration (15-25 passes)` (L809) |
| 7 | `### Wave 7: Self-Audit Cycle (8-12 passes)` (L846) |
| 8 | `### Wave 8: Final Enrichment (5-10 passes)` (L872) |

**Note:** Waves 0-5 are under `## The Wave Schedule` (L475). Waves 6-8 are under `## Post-Wave Enrichment and Audit` (L805). This creates a structural break between Waves 5 and 6 -- Waves 6-8 are at a LOWER heading level (`###`) but under a DIFFERENT parent (`##`). This is a meaningful organizational decision (research waves vs. post-research waves) but it means someone scanning the document's heading hierarchy sees two different groupings when all 9 are functionally equivalent wave definitions.

### 1C. Input Files Format

| Wave | Format | Example |
|---|---|---|
| 0 | Descriptive, no paths | "The content source file ONLY. No design system. No research. No vocabulary." |
| 1 | Filenames only (no paths) | "identity.md, vocabulary.md, tokens.css, components.css. The content. The Wave 0 HTML." |
| 2 | Filenames only (no paths) | "R1-DOCUMENTATION-PATTERNS.md, R2-CREATIVE-LAYOUTS.md, ..." |
| 3 | Filenames only (no paths) | "DD-003-islands.md, DD-004-layers.md, ..." (extensive list) |
| 4 | Filenames + descriptive | "RESEARCH-SYNTHESIS.md, semantic-rules.md, selected provenance documents." |
| 5 | Filenames + descriptive | "CD-006 (re-read with deep integration focus), grammar.md, the HTML file as primary artifact." |
| 6 | ABSENT | No input section at all |
| 7 | ABSENT | No input section at all |
| 8 | ABSENT | No input section at all |

**Inconsistency type:** FORMAT DRIFT. Waves 0-5 use `**Input:**` as a bold inline label. Waves 6-8 omit input specification entirely.

### 1D. Pass Count Specification

All waves specify pass counts in two locations:
1. In the header: `(min-max passes)`
2. Inline as `**Minimum passes:** N.`

| Wave | Header Range | Inline Minimum | Format Match? |
|---|---|---|---|
| 0 | 8-12 | 8 | YES |
| 1 | 10-14 | 10 | YES |
| 2 | 12-18 | 12 (extend to 18 if files remain under-engaged) | YES, with conditional extension |
| 3 | 12-18 | 12 (extend to 18 if dimensions remain under-engaged) | YES, with conditional extension |
| 4 | 8-12 | 8 | YES |
| 5 | 8-12 | 8 | YES |
| 6 | 15-25 | 15 | YES |
| 7 | 8-12 | ABSENT | NO -- Wave 7 has no inline `**Minimum passes:**` statement |
| 8 | 5-10 | ABSENT | NO -- Wave 8 has no inline `**Minimum passes:**` statement |

**Inconsistency:** Waves 7 and 8 lack the inline `**Minimum passes:** N. **Exhaustion signal:**` pattern that Waves 0-6 all use. The pass counts appear only in the header.

### 1E. Rotation Schedule

| Wave | Has Rotation? | Format |
|---|---|---|
| 0 | NO | N/A -- only one input (content) |
| 1 | YES | Arrow sequence: `identity.md -> tokens.css -> ... -> agent's choice` |
| 2 | YES | Arrow sequence with numbered notes: `R1 -> R4 -> R3 -> ... -> depth passes` |
| 3 | YES | Tiered system (Tier 1/2/3) with arrow sequence: `[Crown jewel 1] -> [Crown jewel 2] -> ...` |
| 4 | YES | Arrow sequence: `RESEARCH-SYNTHESIS -> semantic-rules -> provenance -> ...` |
| 5 | YES | Arrow sequence with parenthetical focus notes |
| 6 | NO | No external research; internal integration only |
| 7 | NO | No external research; self-audit only |
| 8 | NO | No external research; surgery only |

**Consistency assessment:** The presence/absence of rotation schedules is INTENTIONAL and structurally motivated. Waves 0, 6, 7, 8 do not have rotation schedules because they either have a single input (Wave 0) or no new research inputs (Waves 6-8). The arrow-sequence format is consistent across Waves 1-5.

### 1F. Metacognitive Questions (5 Layers)

All 9 waves include the 5-layer metacognitive evaluation. However, their DEPTH and SPECIFICITY vary:

| Wave | 5 Layers Present? | Line Count (approx) | Dimension-Specific Qs? | Annotation Style |
|---|---|---|---|---|
| 0 | YES | ~6 lines | NO | "The 5 layers at Wave 0 depth:" |
| 1 | YES | ~6 lines | NO | "The 5 layers at Wave 1 depth:" |
| 2 | YES | ~8 lines | YES (R3, R4, R5 specific) | "The 5 layers at Wave 2 depth:" |
| 3 | YES | ~8 lines | YES (DD, OD, CD, Axis) | "The 5 layers at Wave 3 depth:" |
| 4 | YES | ~8 lines | NO | "The 5 layers at Wave 4 depth:" |
| 5 | YES | ~8 lines | NO | "The 5 layers at Wave 5 depth:" |
| 6 | YES | ~8 lines | NO | "The 5 layers at Wave 6 depth -- the evaluation ITSELF has changed shape:" |
| 7 | YES | ~8 lines | NO | "The 5 layers at Wave 7 depth -- perception has INVERTED:" |
| 8 | YES | ~8 lines | NO | "The 5 layers at Wave 8 depth -- the evaluation reaches its final form:" |

**Consistency assessment:** HIGH. All 9 waves use the same 5-layer format. The annotation style is consistent (L1-L5 labeled) with thematic subtitles for Waves 6-8 that mark the evaluation's evolution. Waves 2-3 have additional dimension-specific questions as addenda, which is appropriate given they are the research-heavy waves.

### 1G. Exhaustion Signal

| Wave | Has `**Exhaustion signal:**`? | Content |
|---|---|---|
| 0 | YES | "The agent has a spatial hypothesis it believes in. The HTML has all content placed. The skeleton is stable." |
| 1 | YES | "All soul constraints satisfied. All CSS values from tokens. The spatial hypothesis survived the translation." |
| 2 | YES | "The agent can annotate every finding... Research re-read produces no new spatial ideas..." |
| 3 | YES | "Specific spatial ideas absorbed AND TRANSLATED from each case study dimension..." |
| 4 | YES | "Conflicts between earlier wave applications resolved. Page is internally consistent." |
| 5 | YES | "Zero inline styles. All zone transitions typed. CSS architecture sound." |
| 6 | YES | "The taste audit produces genuine satisfaction. The pride question produces 'yes' without qualification..." |
| 7 | ABSENT | No exhaustion signal |
| 8 | ABSENT | No exhaustion signal |

**Inconsistency:** Waves 7 and 8 lack explicit exhaustion signals. Wave 7's exit is implicit in its activity structure (passes 9-12 are "final surgery"). Wave 8's exit is "The agent writes 'I am done' and means it" (L882) -- which is a valid signal but not formatted as `**Exhaustion signal:**`.

### 1H. Diagnostic Override Reference

| Wave | Has Diagnostic Override? | Format |
|---|---|---|
| 0 | NO | N/A -- no rotation to override |
| 1 | YES | "Diagnostic override: See the universal protocol in the Primacy Rotation section. With 4 files across 8 slots..." |
| 2 | YES | Full 4-step protocol restated (lines 573-579) |
| 3 | YES | "Diagnostic override: See the universal protocol in the Primacy Rotation section." |
| 4 | YES | "Diagnostic override: See the universal protocol in the Primacy Rotation section. Per-file phase tracking: 1st primacy = conflict detection. 2nd primacy = resolution verification." |
| 5 | YES | "Diagnostic override: See the universal protocol in the Primacy Rotation section." |
| 6 | NO | No rotation -- no override needed |
| 7 | NO | No rotation -- no override needed |
| 8 | NO | No rotation -- no override needed |

**Inconsistency:** Wave 2 restates the full 4-step diagnostic override protocol inline (7 lines), while Waves 1, 3, 4, 5 reference it via pointer to the global section. This is a redundancy issue -- the full protocol is already in the Primacy Rotation section (lines 425-430). Wave 2's restatement is nearly identical to the global version, creating a maintenance burden where changes to one would need to propagate to the other.

### 1I. Transition Condition to Next Wave

No wave has an explicit `**Transition:**` or `**Exit to next wave:**` section. Instead, transition is implied by the exhaustion signal. However, there are two anomalies:

1. **Wave 7 -> Wave 8 is CONDITIONAL.** Line 873-874: "Only if Wave 7 revealed substantive issues. If Wave 7 produced genuine satisfaction, this wave is a brief verification." This is the ONLY conditional wave entry in the entire skill. No other wave's entry depends on the outcome of the previous wave.

2. **Wave 5 -> Wave 6 has a structural break.** Wave 5 ends at line 802. Line 805 introduces `## Post-Wave Enrichment and Audit` as a new parent section before Wave 6. This section header (lines 805-808) serves as a meta-transition but is not formatted as a wave-level transition condition.

### 1J. Expected Outputs/Artifacts

No wave explicitly states `**Output:**` or `**Expected artifacts:**`. Outputs are implicit:

| Wave | Implicit Output |
|---|---|
| 0 | Rough HTML with spatial skeleton |
| 1 | Token-compliant HTML |
| 2 | Research-enriched HTML |
| 3 | Case-study-enriched HTML |
| 4 | Conflict-resolved HTML |
| 5 | Architecturally clean HTML |
| 6 | Taste-approved HTML |
| 7 | Audited HTML |
| 8 | Final HTML + retrospective |

The lack of explicit outputs is CONSISTENT across all waves -- this appears intentional because the output is always the same: the evolving HTML file plus notebook entries.

---

## 2. Format Inconsistencies

### 2A. Section Length Disparity

| Wave | Approximate Line Count | Notes |
|---|---|---|
| 0 | 23 lines (503-525) | Compact |
| 1 | 27 lines (527-553) | Compact |
| 2 | 84 lines (555-638) | Very long -- includes full file-contribution guide, restated diagnostic override, findings triage protocol, 4-phase cycle evolution, per-file engagement depth, "10+ passes per slice" clarification |
| 3 | 103 lines (642-744) | Longest wave -- includes tiered rotation, AD derivation protocol, cross-dimension prompts, per-dimension phase tracking, 5-phase cycle evolution |
| 4 | 27 lines (747-772) | Compact |
| 5 | 28 lines (775-802) | Compact |
| 6 | 36 lines (809-844) | Medium -- 5 named sub-phases |
| 7 | 26 lines (846-870) | Compact |
| 8 | 24 lines (872-895) | Compact |

**Core finding:** Waves 2 and 3 are 3-4x longer than other waves. This is partly justified (they absorb the most research and have the most complex rotation needs), but it also means they contain guidance that SHOULD be universal but is only stated once:

- **"Look before reading"** (L581) -- stated only in Wave 2 with the note "and every subsequent wave," but never restated in Waves 3-5
- **Findings triage protocol** (L583-588) -- stated only in Wave 2, never referenced in Wave 3 despite Wave 3 having even more files to triage
- **Per-file engagement depth tracking** (L634-636) -- stated in Wave 2, partially restated differently in Wave 3 (L718-720 as "per-dimension phase tracking")
- **"10+ passes per slice" clarification** (L632-636) -- stated in Wave 2, restated in Wave 3 (L720-721) with slightly different framing ("per dimension" vs "per slice")

### 2B. Cycle Reminder Formatting

Every wave includes a reminder that "each pass is a full build-look-refine cycle." But the formatting varies:

| Wave | Format |
|---|---|
| 0 | `**Each pass is a full cycle:**` followed by 6-step definition |
| 1 | `**Each pass is a full cycle:**` followed by prose |
| 2 | `**Each pass is a full build-look-refine cycle.**` (just the statement, no steps) |
| 3 | `**Each pass is a full build-look-refine cycle**` (same as Wave 2, plus reference "this is always true") |
| 4 | `**Each pass is a full cycle:**` followed by detailed prose |
| 5 | `**Each pass is a full cycle:**` followed by prose about subtractive cycles |
| 6 | `**Every pass in Wave 6 is still a full build-look-refine cycle.**` (different emphasis word: "still") |
| 7 | `**Every pass in Wave 7 is still a full build-look-refine cycle.**` (same as Wave 6) |
| 8 | `**Each pass is still a full cycle**` (hybrid of early and late formats) |

**Pattern:** Waves 0-5 use `**Each pass is a full cycle:**` while Waves 6-8 shift to `**Every pass in Wave N is still a full build-look-refine cycle.**` The "still" in Waves 6-8 addresses the concern that post-research waves might abbreviate the cycle. This is a deliberate rhetorical shift but creates inconsistent formatting.

### 2C. Pass-Level Deepening Format

All waves have pass-level deepening, but the number of stages varies:

| Wave | Stages | Labels |
|---|---|---|
| 0 | 3 | Passes 1-3 / 4-6 / 7-8 (comprehension / projection / interrogation) |
| 1 | 3 | Passes 1-3 / 4-7 / 8-10 (compliance / vocabulary as argument / internalization) |
| 2 | 4 | Passes 1-3 / 4-6 / 7-9 / 10+ (STRUCTURAL / INTEGRATION / DEPTH / MASTERY) |
| 3 | 5 | Passes 1-3 / 4-6 / 7-9 / 10-12 / 13+ (EXTRACTION / TRANSLATION / CONTENT-DEEPENING / COMPOUND VISION / INTERNALIZATION) |
| 4 | 3 | Passes 1-3 / 4-6 / 7-10 (conflict detection / meta-principle application / framework revision) |
| 5 | 3 | Passes 1-3 / 4-6 / 7-8 (identification / system thinking / architecture as creative enabler) |
| 6 | 5 | Passes 1-5 / 6-10 / 11-15 / 16-20 / 21-25 (Taste Audit / Surgical Refinement / Responsive Deepening / Architecture Audit / Deep Re-evaluation) |
| 7 | 4 | Passes 1-2 / 3-6 / 7-8 / 9-12 (Experiential+Adversarial / Criteria+Comprehensive / Content-Coupling / Surgery) |
| 8 | 3 | Passes 1-3 / 4-6 / 7-10 (purposeful surgery / function serving meaning / deep-build proof) |

**Observation:** The variation in stage count (3-5) is INTENTIONAL -- longer waves have more stages. The formatting is consistent (bold `Passes X-Y:` followed by the evaluation question). The CAPITALIZATION of stage names varies: Waves 2-3 use ALL-CAPS labels (STRUCTURAL, INTEGRATION), Waves 0-1 and 4-8 use lowercase or title-case descriptive phrases. This is a minor inconsistency.

### 2D. Exhaustion Signal and Minimum Passes -- Combined Pattern

Waves 0-6 all use the pattern: `**Minimum passes:** N. **Exhaustion signal:** {description}` on a single line (or nearby lines). This is a recognizable structural pattern that Wave 7 and Wave 8 break by omitting both.

Wave 7's implicit exhaustion is the end of pass 9-12 ("Final surgery based on everything the audit revealed"). Wave 8's implicit exhaustion is "The agent writes 'I am done' and means it" (L882). Both could be formalized without changing meaning.

---

## 3. Missing Sections by Wave

### 3A. Input Files

| Wave | Present? | Assessment |
|---|---|---|
| 0 | YES | |
| 1 | YES | |
| 2 | YES | |
| 3 | YES | |
| 4 | YES | |
| 5 | YES | |
| 6 | NO | **INTENTIONAL.** Wave 6 explicitly states "No new research. The agent works ONLY with what it already knows." The absence of input specification IS the specification. |
| 7 | NO | **INTENTIONAL.** Self-audit wave -- inputs are the agent's own HTML and notebook. Implied but could be stated for consistency. |
| 8 | NO | **INTENTIONAL.** Final surgery -- inputs are Wave 7 findings and the HTML. Implied but could be stated for consistency. |

**Recommendation:** Even where the input is "no new files," stating `**Input:** The HTML file, the builder's notebook, and Wave 7 retrospective.` would improve scanability and make the intentional absence of new research explicit within the wave's own section.

### 3B. Rotation Schedule

| Wave | Present? | Assessment |
|---|---|---|
| 0 | NO | **INTENTIONAL.** Only one input file. |
| 1 | YES | |
| 2 | YES | |
| 3 | YES | |
| 4 | YES | |
| 5 | YES | |
| 6 | NO | **INTENTIONAL.** No research files to rotate. However, Wave 6 has 5 named sub-phases (Taste Audit, Surgical Refinement, Responsive Deepening, Architecture Audit, Deep Re-evaluation) that function as a rotation of EVALUATION LENSES. This is structurally analogous to a file rotation but is described differently. |
| 7 | NO | **INTENTIONAL.** Wave 7 has per-pass activities (passes 1-12 with named modes: adversarial, criteria, comprehensive, content-coupling, surgery) that function similarly to a rotation schedule but are framed as pass descriptions. |
| 8 | NO | **INTENTIONAL.** Three sub-phases (surgery, responsive/accessibility, retrospective) serve the same function but are not formatted as a rotation. |

### 3C. Minimum Passes + Exhaustion Signal

| Wave | Min Passes Present? | Exhaustion Signal Present? | Assessment |
|---|---|---|---|
| 0 | YES | YES | |
| 1 | YES | YES | |
| 2 | YES | YES | |
| 3 | YES | YES | |
| 4 | YES | YES | |
| 5 | YES | YES | |
| 6 | YES | YES | |
| 7 | NO (header only) | NO | **OMISSION.** Should have `**Minimum passes:** 8. **Exhaustion signal:** The audit has produced specific, actionable findings AND the surgery passes have addressed them. No new issues emerge from mode-switching evaluation.` |
| 8 | NO (header only) | NO (prose only) | **OMISSION.** Should have `**Minimum passes:** 5. **Exhaustion signal:** The agent writes "I am done" with specific justification. The page satisfies the pride question. The "infinite time" answer is invisible-grain.` |

### 3D. Diagnostic Override Reference

| Wave | Present? | Assessment |
|---|---|---|
| 0 | NO | **INTENTIONAL.** No rotation to override. |
| 1 | YES | |
| 2 | YES | |
| 3 | YES | |
| 4 | YES | |
| 5 | YES | |
| 6 | NO | **INTENTIONAL.** No rotation to override. |
| 7 | NO | **INTENTIONAL.** No rotation to override. |
| 8 | NO | **INTENTIONAL.** No rotation to override. |

### 3E. Findings Triage

| Wave | Present? | Assessment |
|---|---|---|
| 0 | NO | **INTENTIONAL.** No research to triage. |
| 1 | NO | **BORDERLINE.** Wave 1 absorbs 4 design-system files. A triage of which tokens/components to focus on could be useful, but the file count is small enough that full absorption is reasonable. |
| 2 | YES | |
| 3 | NO | **OMISSION.** Wave 3 absorbs 16 files (more than Wave 2's 6). The tiered system (Tier 1/2/3) partially serves this function but is about PRIMACY ALLOCATION, not about triaging individual findings within each file. The agent could benefit from explicit guidance to triage findings within each case study the same way Wave 2 triages R1-R5 findings. |
| 4 | NO | **BORDERLINE.** Fewer files, and the focus is synthesis rather than new findings. |
| 5 | NO | **INTENTIONAL.** Subtractive wave -- no new findings to triage. |
| 6-8 | NO | **INTENTIONAL.** No new research. |

### 3F. "Look Before Reading" Protocol

| Wave | Present? | Assessment |
|---|---|---|
| 0 | NO | **INTENTIONAL.** Nothing to look at before Wave 0 begins. |
| 1 | NO | **OMISSION.** The protocol at L581 says "at the START of Wave 2 (and every subsequent wave)." Wave 1 is a subsequent wave from nothing, but the HTML exists from Wave 0. Looking at it before loading design-system files would be valuable. |
| 2 | YES | "Look before reading" stated with note "(and every subsequent wave)" |
| 3 | NO | **OMISSION.** Should be stated or referenced per Wave 2's own instruction. |
| 4 | NO | **OMISSION.** Same. |
| 5 | NO | **OMISSION.** Same. |
| 6 | Implicit | Wave 6 Passes 1-5 begin with "Full-page screenshots" which serves the same function. |
| 7 | YES (Pass 1) | "Full-page screenshots at all 3 viewports. One complete scroll-through WITHOUT analyzing -- just experiencing." |
| 8 | NO | **OMISSION** or **BORDERLINE.** Wave 8 is surgery from Wave 7 findings -- the agent already has fresh screenshots. |

### 3G. Cross-Dimension Evolution Prompts

| Wave | Present? | Assessment |
|---|---|---|
| 0-2 | NO | **INTENTIONAL.** Only one active dimension at a time. |
| 3 | YES | Three transition prompts (before OD, before CD, before Axis) |
| 4 | NO | **BORDERLINE.** Could benefit from a prompt like "Before reading synthesis, you now have DD+OD+CD+AD. The synthesis will show you how they ALL relate." |
| 5-8 | NO | **INTENTIONAL.** All dimensions are active; cross-dimension prompts are no longer needed. |

---

## 4. Structural Template Recommendation

### 4A. Canonical Wave Template

Based on the analysis, here is the canonical template that every wave SHOULD follow. Legitimate deviations are noted.

```markdown
### Wave N: {Title} ({min}-{max} passes)

**Input:** {List of files or "No new research. The agent works with the HTML file,
builder's notebook, and accumulated understanding from Waves 0-{N-1}."}

{1-3 paragraphs describing the wave's purpose, cognitive stance, and what it contributes.}

{IF wave has research files:}
**What each file contributes:** {Per-file or per-dimension guidance.}

{IF wave has research files with rotation:}
**Rotation:** {Arrow-sequence rotation schedule.}

**Diagnostic override:** See the universal protocol in the Primacy Rotation section.
{Wave-specific notes if any, e.g., per-file phase tracking.}

{IF wave has research files:}
**Findings triage:** {On first read, classify as HIGH/MEDIUM/LOW. Re-evaluate at pass 8+.}

**Look before building:** {Screenshot and evaluate the page BEFORE reading new material for this wave.}

**Each pass is a full build-look-refine cycle.** {Wave-specific clarification of how the cycle manifests.}

{IF wave has complex cycle evolution:}
**How the cycle evolves across passes:**
- Passes 1-3 ({LABEL}): {description}
- Passes 4-6 ({LABEL}): {description}
- ...

**The 5 layers at Wave N depth{optional thematic subtitle}:**
- **L1 (Seeing):** {question}
- **L2 (Why now):** {question}
- **L3 (Not seeing):** {question}
- **L4 (How to know):** {question}
- **L5 (Evaluation evolving):** {question}

{IF wave has dimension-specific questions:}
**Dimension-specific metacognitive questions:**
{Per-dimension questions.}

**Pass-level deepening within Wave N:**
- Passes 1-{X}: Evaluation asks "{question}" ({label})
- Passes {X+1}-{Y}: Evaluation asks "{question}" ({label})
- ...

**Minimum passes:** {N}. **Exhaustion signal:** {Specific, falsifiable conditions.}
```

### 4B. What Each Wave Would Look Like Under Canonical Template

**Wave 0:** Nearly canonical already. ADDITIONS NEEDED:
- Add `**Look before building:**` -- "N/A for Wave 0 (no prior HTML exists)."
- Move the `**Each pass is a full cycle:**` block (currently placed mid-wave) to after the purpose paragraphs for consistent ordering.

**Wave 1:** Nearly canonical. ADDITIONS NEEDED:
- Add `**Input:**` -- already present, correctly formatted.
- Add `**Look before building:**` -- "Screenshot the Wave 0 HTML and evaluate its spatial skeleton before loading design-system files. What does the page need vs. what will the design system provide?"
- The diagnostic override section is well-placed.

**Wave 2:** ALREADY the most canonical wave. It has every section from the template. CHANGES NEEDED:
- Remove the inline restatement of the diagnostic override protocol (lines 573-579). Replace with: "**Diagnostic override:** See the universal protocol in the Primacy Rotation section."
- The "Look before reading" protocol should be stated as a wave-local instruction without the "(and every subsequent wave)" parenthetical -- that universal applicability should be in the canonical template itself, not in Wave 2's local text.

**Wave 3:** Nearly canonical but has unique tiered-rotation structure. CHANGES NEEDED:
- Add explicit `**Findings triage:**` section for case study findings (currently absent despite having 16 files).
- Add explicit `**Look before building:**` reference (currently absent despite Wave 2's instruction that it applies to "every subsequent wave").
- The tiered rotation is a LEGITIMATE DEVIATION from the simple arrow-sequence format, driven by 16 files vs. 12-18 passes making per-file 2-turn guarantee impossible.

**Wave 4:** Nearly canonical. ADDITIONS NEEDED:
- Add `**Look before building:**` reference.
- Exhaustion signal and minimum passes are correctly formatted.

**Wave 5:** Nearly canonical. ADDITIONS NEEDED:
- Add `**Look before building:**` reference.
- Exhaustion signal and minimum passes are correctly formatted.

**Wave 6:** Needs the most reformatting to match template. ADDITIONS NEEDED:
- Add `**Input:** No new research. The agent works with the HTML file, builder's notebook, and accumulated understanding from Waves 0-5.`
- Add `**Look before building:** Screenshot and evaluate the page before beginning the taste audit.` (Currently implied in Passes 1-5 description but not explicitly stated.)
- Add `**Minimum passes:** 15. **Exhaustion signal:** The taste audit produces genuine satisfaction. The pride question produces "yes" without qualification. The "infinite time" answer is invisible-grain.` (Currently present at line 844 -- this is correctly formatted. I was wrong in the comparison table above. Let me correct: Wave 6 DOES have the minimum passes / exhaustion signal pattern.)

**CORRECTION:** Re-reading line 844: `**Minimum passes:** 15. **Exhaustion signal:** The taste audit produces genuine satisfaction.` -- Wave 6 DOES have this pattern. My earlier comparison table entry for Wave 6 was correct (YES).

**Wave 7:** Needs structural additions. ADDITIONS NEEDED:
- Add `**Input:** The HTML file, builder's notebook, and all wave retrospectives. No new research.`
- Add `**Minimum passes:** 8. **Exhaustion signal:** The audit has produced specific findings, all findings have been addressed in surgery passes, and mode-switching evaluation produces no new issues.`
- The per-pass activity descriptions (Pass 1, Pass 2, etc.) are a LEGITIMATE DEVIATION from the pass-level deepening format used by other waves, because Wave 7's passes are more prescriptive (specific audit activities per pass) than other waves' general phase descriptions.

**Wave 8:** Needs structural additions. ADDITIONS NEEDED:
- Add `**Input:** The HTML file, Wave 7 audit findings, builder's notebook.`
- Add `**Minimum passes:** 5. **Exhaustion signal:** The agent can articulate in specific terms what the page achieves that could NOT have been achieved in fewer passes. The pride question produces genuine satisfaction, not process fatigue.`
- The conditional entry ("Only if Wave 7 revealed substantive issues") is a LEGITIMATE DEVIATION -- it is the only wave that may be partially or fully skipped.

---

## 5. Naming/Numbering Consistency

### 5A. Wave Numbering

All 9 waves are numbered 0-8 consecutively. No gaps, no renumbering.

### 5B. Case Consistency: "Wave" vs. "wave"

The document uses BOTH capitalizations:

- **"Wave N" (capitalized):** Used in headers (`### Wave 0:`), inline references (`Wave 0 HTML`, `Wave 2 depth`, `Wave 7 findings`), and most prose. This is the dominant form -- approximately 95% of references.

- **"wave N" (lowercase):** Used in a few prose passages:
  - Line 133: "At the START of each wave"
  - Line 917: "wave 2" (in a retrospective question: "Is that understanding VISIBLE in the page?" referencing "what I couldn't have understood at wave 2")
  - Various uses of "wave" as a common noun ("each wave", "every wave", "a wave")

**Assessment:** When "wave" is used as a proper name with a number, it is ALMOST always capitalized ("Wave 2"). The one exception at line 917 ("at wave 2") is a minor inconsistency. When "wave" is used as a generic noun ("each wave", "per wave"), lowercase is appropriate and consistent. This is GOOD practice -- treat it as a proper noun when numbered, common noun when generic.

### 5C. Alternative Terms

The document NEVER uses "Phase N" or "Step N" to refer to waves. "Step" is used only for the cognitive state mechanism (Step 1: Semantic Saturation, Step 2: Spatial Projection, Step 3: Topology Persistence -- lines 63-67), which is a completely different concept and causes no confusion.

"Phase" appears in two contexts:
1. "Per-file phase tracking" -- refers to a file's personal depth progression (STRUCTURAL/INTEGRATION/DEPTH/MASTERY), NOT to waves.
2. "4-phase evaluation progression" -- refers to the within-wave evaluation stages (STRUCTURAL/RELATIONAL/COUPLING/POTENTIAL), NOT to waves.

Both uses of "Phase" are carefully distinguished from "Wave" and cause no confusion. The terminology discipline is strong.

### 5D. Cross-References to Waves From Other Sections

Waves are referenced from several sections outside the wave definitions:

- **The Metacognitive Evaluation (lines 96-220):** References Waves 0-8 by name for staleness signatures. Correct numbering, consistent "Wave N" capitalization.
- **Retrospectives (lines 898-921):** References all 9 waves by number for wave-specific questions. Consistent "Wave N" format except the one lowercase "wave 2" at line 917.
- **The Looking Protocol (lines 925-964):** References waves by number for depth progression. Consistent formatting.
- **Measurement (lines 993-1034):** References "Wave 3", "Wave 5+", "Wave 6+" for criteria milestones. Consistent.
- **Context Window Management (lines 1084-1141):** References "Wave 0", "Waves 1-2", "Waves 3+" for content handoff. Consistent.
- **Cost (lines 1144-1159):** References "8 waves" generically. Consistent.

**Overall naming assessment:** STRONG. The document maintains clean separation between "Wave" (the 9 build phases), "Step" (the 3-step cognitive mechanism), and "Phase" (within-wave evaluation stages and per-file depth tracking). One lowercase "wave 2" at line 917 is the only slip.

---

## 6. Summary of Findings

### Consistent Elements (No Action Needed)

1. **Wave headers** -- identical format across all 9 waves
2. **5-layer metacognitive questions** -- present in all 9 waves with appropriate depth scaling
3. **Naming/numbering** -- "Wave N" used consistently, no confusion with Phase/Step terminology
4. **Cycle reminder** -- present in all 9 waves (minor formatting variation is rhetorical, not structural)
5. **Pass-level deepening** -- present in all 9 waves (stage count variation is content-driven)
6. **Staleness signatures** -- present for all 9 waves in the global Metacognitive Evaluation section
7. **Retrospective questions** -- present for all 9 waves in the Retrospectives section
8. **Wave numbering** -- 0-8, consecutive, no gaps

### Omissions to Address

| # | Finding | Waves Affected | Severity |
|---|---|---|---|
| O-1 | Missing `**Input:**` statement | Waves 6, 7, 8 | LOW -- absence is intentional but stating it explicitly improves scanability |
| O-2 | Missing `**Minimum passes:**` + `**Exhaustion signal:**` inline pattern | Waves 7, 8 | MEDIUM -- breaks a pattern established by Waves 0-6, makes these waves harder to scan for operational parameters |
| O-3 | Missing "look before building" reference | Waves 1, 3, 4, 5 | MEDIUM -- Wave 2 declares this universal but it is never restated or referenced in subsequent waves |
| O-4 | Missing findings triage for case studies | Wave 3 | LOW -- the tiered system partially serves this function, but per-finding triage within case studies is not addressed |

### Inconsistencies to Resolve

| # | Finding | Waves Affected | Severity |
|---|---|---|---|
| I-1 | Diagnostic override protocol restated inline in Wave 2 vs. referenced by pointer in all other waves | Wave 2 | LOW -- creates maintenance burden but does not cause confusion |
| I-2 | Cycle reminder uses "Each pass" (W0-5) vs. "Every pass in Wave N is still" (W6-8) | W6, W7, W8 | LOW -- rhetorical variation, not structural |
| I-3 | Stage labels in pass-level deepening use ALL CAPS (W2-3) vs. lowercase (W0-1, W4-8) | W0-1, W4-8 vs. W2-3 | LOW -- visual inconsistency only |
| I-4 | Section break between Wave 5 and Wave 6 (new `##` parent) without corresponding structural differentiation in the wave definitions themselves | W6-8 | LOW-MEDIUM -- could confuse an agent about whether Waves 6-8 follow the same structural template as Waves 0-5 |

### Legitimate Deviations (No Action Needed)

| # | Deviation | Wave | Why It Is Legitimate |
|---|---|---|---|
| D-1 | No rotation schedule | W0, W6, W7, W8 | Single input (W0) or no new research (W6-8) |
| D-2 | Tiered rotation instead of simple arrow sequence | W3 | 16 files > 12-18 passes; per-file 2-turn guarantee impossible |
| D-3 | Per-pass activity descriptions instead of phase-range descriptions | W7 | Audit wave has prescriptive per-pass activities (adversarial, criteria, comprehensive, etc.) |
| D-4 | Conditional entry | W8 | Only wave that may be abbreviated or skipped based on prior wave's outcome |
| D-5 | Dimension-specific metacognitive questions as addenda | W2, W3 | Research-heavy waves need per-dimension guidance; other waves do not |
| D-6 | Section length disparity (W2-3 at ~90-100 lines vs. others at ~25 lines) | W2, W3 | More files, more complex rotation, more dimension-specific guidance needed |
| D-7 | 5 named sub-phases instead of 3 pass-range stages | W6 | 15-25 passes require finer-grained phase structure |

---

## 7. Prioritized Action Items

If reformatting for consistency:

1. **Add `**Minimum passes:**` + `**Exhaustion signal:**` to Waves 7 and 8** (O-2). This is the highest-value fix because these are OPERATIONAL parameters that the agent needs to locate quickly during execution. Every other wave has them in a scannable, predictable location.

2. **Add `**Input:**` statements to Waves 6, 7, 8** (O-1). Even if the input is "no new research," stating it explicitly makes the wave self-contained and scannable.

3. **Add `**Look before building:**` to Waves 1, 3, 4, 5** (O-3). This is a universal protocol that should appear in every wave's body, not just Wave 2's.

4. **Remove the inline diagnostic override restatement from Wave 2** (I-1). Replace with the same pointer format used by Waves 1, 3, 4, 5. The full protocol already exists in the Primacy Rotation section.

5. **Consider unifying the `##` parent structure** (I-4). Either promote Waves 6-8 headers to the same level as Waves 0-5, or add a brief note in the `## Post-Wave Enrichment and Audit` header explaining that Waves 6-8 follow the same structural template as Waves 0-5 but operate without new research input.
