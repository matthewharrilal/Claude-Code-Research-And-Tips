# PA Question Quality and Coverage: Comprehensive Audit

**Agent:** pa-question-analyst (Opus 4.6)
**Date:** 2026-02-24
**Sources:** artifact-pa-protocol.md (1,004 lines), SKILL.md (993 lines), 5 PA enrichment files, 4 info-loss analysis files, audit-pa-protocol.md (94/100 compliance)
**Scope:** All 65 PA questions across 9 auditors, evaluated for quality, coverage, load balance, execution verification, and architectural fitness

---

## EXECUTIVE SUMMARY

The 65-question PA inventory is broadly well-designed, with 90.8% of answers rated STRONG in the Gas Town execution. However, this audit identifies:

- **12 questions rated below 4/5 on at least one quality dimension** (clarity, actionability, uniqueness, effectiveness, fresh-eyes compatibility)
- **7 coverage gaps** where quality dimensions are invisible to PA
- **1 severely overloaded auditor** (Auditor C at 14 questions, 2.3x the median)
- **3 structural execution verification gaps** (no answer completeness check, no evidence requirement enforcement, no PA-05 sub-criteria independence verification)
- **5 questions recommended for rewriting**, 3 for removal, and 4 new questions proposed
- **A splitting architecture** that would decompose the 1,004-line artifact into 4 focused files with a manifest

---

## PART 1: QUESTION-LEVEL QUALITY AUDIT (65 Questions)

### Scoring Methodology

Each question rated 1-5 on five dimensions:

| Dimension | 1 | 3 | 5 |
|-----------|---|---|---|
| CLARITY | Ambiguous, multiple interpretations | Mostly clear, minor edge cases | Crystal clear, one possible interpretation |
| ACTIONABILITY | Yes/no answer, drives no decision | Answer partially informs decisions | Answer directly determines a fix or ship decision |
| UNIQUENESS | Fully redundant with another question | Partial overlap, adds minor value | No overlap, covers a unique dimension |
| EFFECTIVENESS | Never caught a real defect (N=0 evidence) | Caught defects in some runs | Consistently catches defects across runs |
| FRESH-EYES | Requires code inspection or build context | Partially answerable from screenshots | Fully answerable from screenshots alone |

Evidence base: Gas Town v3 PA execution (9 auditors, 65 questions, 94/100 compliance), plus historical data from ceiling experiment, flagship experiment, middle experiment, and remediation PA.

---

### Tier 1: The Mandatory Five

#### PA-01: "What's the first thing that bothers you?"
| Dimension | Score | Evidence |
|-----------|-------|----------|
| CLARITY | 5/5 | Unambiguous. Every auditor understands "first thing that bothers you." |
| ACTIONABILITY | 5/5 | Gas Town: Auditor A identified trailing void as first bother, which became the #1 fix. |
| UNIQUENESS | 5/5 | No other question captures unrestricted first impression. |
| EFFECTIVENESS | 5/5 | Caught trailing void (Gas Town), whitespace catastrophe (ceiling), flat composition (flagship). |
| FRESH-EYES | 5/5 | Pure perceptual reaction. |
| **AVERAGE** | **5.0** | **No changes needed.** |

#### PA-02: "Is any text uncomfortable to read? Point to the worst spot."
| Dimension | Score | Evidence |
|-----------|-------|----------|
| CLARITY | 5/5 | "Uncomfortable to read" + "point to worst spot" is precise. |
| ACTIONABILITY | 4/5 | Identifies specific locations but does not always distinguish severity (mild discomfort vs unreadable). |
| UNIQUENESS | 4/5 | Partial overlap with PA-07 (longest paragraph) and PA-08 (squint to read). |
| EFFECTIVENESS | 4/5 | Gas Town: caught Zone 4 label stacking at 768px, code block overflow. |
| FRESH-EYES | 5/5 | Pure readability check from screenshots. |
| **AVERAGE** | **4.4** | Minor overlap with PA-07/PA-08. Acceptable because PA-02 is broader. |

#### PA-03: "Does this feel like one designer made it, or three?"
| Dimension | Score | Evidence |
|-----------|-------|----------|
| CLARITY | 5/5 | Binary framing ("one or three") is vivid and unambiguous. |
| ACTIONABILITY | 5/5 | Directly informs COHERENT sub-criterion of PA-05. |
| UNIQUENESS | 4/5 | Overlaps with PA-05 COHERENT sub-criterion, but PA-03 captures the gut reaction while PA-05 requires structured evaluation. |
| EFFECTIVENESS | 5/5 | Gas Town: Auditor A cited 6 consistency elements. Flagship: detected "three designers." |
| FRESH-EYES | 5/5 | Pure perceptual assessment. |
| **AVERAGE** | **4.8** | **No changes needed.** |

#### PA-04: "Where does your eye go first? Is that where it SHOULD go?"
| Dimension | Score | Evidence |
|-----------|-------|----------|
| CLARITY | 5/5 | Two-part question is clear: describe eye path, then evaluate appropriateness. |
| ACTIONABILITY | 4/5 | Identifies hierarchy problems but "should" requires judgment the auditor may not have (content intent unknown in fresh-eyes). |
| UNIQUENESS | 5/5 | Only question about focal point hierarchy. |
| EFFECTIVENESS | 4/5 | Gas Town: identified 3 fixation points. Less decisive when hierarchy is correct (nothing to flag). |
| FRESH-EYES | 4/5 | "Where does your eye go" is pure perception. "Where it SHOULD go" requires inferring content importance, which partially breaks fresh-eyes (auditor must read some text to judge priority). |
| **AVERAGE** | **4.4** | Minor tension in "should" component. Acceptable. |

#### PA-05: "Would you put your name on this? What would you fix first?"
| Dimension | Score | Evidence |
|-----------|-------|----------|
| CLARITY | 5/5 | Top-level question is visceral. 4 sub-criteria are well-defined with PASS/FAIL descriptions. |
| ACTIONABILITY | 5/5 | PRIMARY success metric. Directly determines SHIP/REFINE/REBUILD. |
| UNIQUENESS | 5/5 | Synthesizes all other questions into a ship decision. |
| EFFECTIVENESS | 5/5 | Consistently produces actionable verdicts across all observed runs. |
| FRESH-EYES | 5/5 | "Would you put your name on this" is the ultimate fresh-eyes question. |
| **AVERAGE** | **5.0** | **No changes needed.** |

**PA-05 Protocol Gap Identified:** The compliance audit found that Auditor A scored PA-05 as 3/4 despite technically passing all 4 sub-criteria, because the trailing void made POLISHED a "pass with critical defect." The protocol has no guidance for this case. **RECOMMENDATION:** Add explicit guidance: "If a sub-criterion technically passes but contains a shipping-blocking defect, treat it as CONDITIONAL PASS. Score PA-05 based on the number of clean passes, not conditional passes."

---

### Tier 2: Standard Fifteen

#### PA-06: "Are any words stacking vertically, one per line, in any column?"
| Dimension | Score | Evidence |
|-----------|-------|----------|
| CLARITY | 5/5 | Unambiguous. |
| ACTIONABILITY | 5/5 | Binary: yes/no with location. Directly fixable. |
| UNIQUENESS | 5/5 | Only question about word stacking (the "bento grid failure mode"). |
| EFFECTIVENESS | 4/5 | Gas Town: no stacking found at 1440px or 1024px. Found at 768px in some columns. |
| FRESH-EYES | 5/5 | Visually obvious. |
| **AVERAGE** | **4.8** | |

#### PA-07: "Can you read the longest paragraph without losing your place?"
| Dimension | Score | Evidence |
|-----------|-------|----------|
| CLARITY | 4/5 | "Losing your place" is slightly subjective but well-understood. |
| ACTIONABILITY | 4/5 | Identifies line-length and leading problems but diagnosis requires measurement. |
| UNIQUENESS | 3/5 | Overlaps with PA-02 (uncomfortable to read) and partially with PA-08 (squint to read). All three address readability from slightly different angles. |
| EFFECTIVENESS | 4/5 | Gas Town: identified 3 longest paragraphs, all readable. More valuable when it finds problems. |
| FRESH-EYES | 5/5 | Reading a paragraph is inherently perceptual. |
| **AVERAGE** | **4.0** | Moderate overlap with PA-02/PA-08 cluster. Consider consolidation (see Part 7). |

#### PA-08: "Is there any text you have to lean in or squint to read?"
| Dimension | Score | Evidence |
|-----------|-------|----------|
| CLARITY | 5/5 | Physical action (lean in/squint) makes it concrete. |
| ACTIONABILITY | 5/5 | Directly identifies sub-minimum font sizes and contrast issues. |
| UNIQUENESS | 3/5 | Overlaps with PA-02 and PA-07 readability cluster. |
| EFFECTIVENESS | 4/5 | Gas Town: caught small label text and code overflow. |
| FRESH-EYES | 5/5 | Pure physical reaction. |
| **AVERAGE** | **4.4** | |

#### PA-29: "In the header area, count text styles. Are more than three fighting for attention?"
| Dimension | Score | Evidence |
|-----------|-------|----------|
| CLARITY | 5/5 | Specific location (header) + specific threshold (>3) + specific action (count). |
| ACTIONABILITY | 5/5 | Count + threshold = binary actionable result. |
| UNIQUENESS | 5/5 | Only question specifically about header typographic density. |
| EFFECTIVENESS | 4/5 | Gas Town: 5 styles found, hierarchy analyzed. |
| FRESH-EYES | 5/5 | Counting visual styles is purely perceptual. |
| **AVERAGE** | **4.8** | |

#### PA-09: "Is there dead space that serves no purpose?"
| Dimension | Score | Evidence |
|-----------|-------|----------|
| CLARITY | 4/5 | "Serves no purpose" requires judgment. Severity calibration helps but adds complexity. |
| ACTIONABILITY | 5/5 | With severity calibration (LOOKS-WRONG/WOULD-NOT-SHIP/CATASTROPHIC), directly determines fix priority. |
| UNIQUENESS | 4/5 | Overlaps with PA-50 (consecutive blank viewports), PA-51 (content percentage), PA-33 (largest empty space). PA-09 is the general question; PA-50/51/33 are specific measurements. |
| EFFECTIVENESS | 5/5 | Gas Town: identified trailing void (the dominant defect). Ceiling: identified catastrophic void. |
| FRESH-EYES | 5/5 | Dead space is visually obvious. |
| **AVERAGE** | **4.6** | Overlap with Tier 4 void questions is intentional (PA-09 = general, PA-50/51 = specific). |

#### PA-10: "If you squint until you can't read text, does the layout look balanced?"
| Dimension | Score | Evidence |
|-----------|-------|----------|
| CLARITY | 5/5 | Physical instruction (squint) + clear target (balanced). |
| ACTIONABILITY | 4/5 | Identifies macro imbalance but diagnosis requires interpretation. |
| UNIQUENESS | 4/5 | Overlaps with PA-32 (visual weight distribution). PA-10 is the squint test; PA-32 asks about purposeful distribution. |
| EFFECTIVENESS | 4/5 | Gas Town: identified top-heavy weight concentration. |
| FRESH-EYES | 5/5 | Squinting is a classic perceptual technique. |
| **AVERAGE** | **4.4** | |

#### PA-11: "Are the margins generous (confident) or anxious (clutching)?"
| Dimension | Score | Evidence |
|-----------|-------|----------|
| CLARITY | 5/5 | Emotional vocabulary (confident/anxious) is vivid and accessible. |
| ACTIONABILITY | 3/5 | Descriptive rather than prescriptive. "Anxious margins" does not directly specify a fix. |
| UNIQUENESS | 5/5 | Only question about spacing psychology. |
| EFFECTIVENESS | 4/5 | Gas Town: margins rated "confident." More diagnostic when margins are problematic. |
| FRESH-EYES | 5/5 | Pure emotional reaction to spacing. |
| **AVERAGE** | **4.4** | |

#### PA-30: "At 1440px, does the layout feel DESIGNED for this width, or centered in extra space?"
| Dimension | Score | Evidence |
|-----------|-------|----------|
| CLARITY | 5/5 | Binary framing with specific viewport. |
| ACTIONABILITY | 5/5 | Directly identifies container width violations. |
| UNIQUENESS | 4/5 | Overlaps with PA-53 (container uses 65-80% of horizontal space). PA-30 is perceptual; PA-53 is measurement. |
| EFFECTIVENESS | 5/5 | Gas Town: correctly identified ~48% body width + ~68% full-width zones. Caught the container width issue in multiple experiments. |
| FRESH-EYES | 5/5 | "Centered in extra space" is visually obvious. |
| **AVERAGE** | **4.8** | |

#### PA-31: "If you covered the content and only looked at the surrounding space, would that space feel designed or leftover?"
| Dimension | Score | Evidence |
|-----------|-------|----------|
| CLARITY | 4/5 | Mental exercise (cover content) is slightly abstract. |
| ACTIONABILITY | 4/5 | Identifies negative space quality but fix path is indirect. |
| UNIQUENESS | 4/5 | Overlaps with PA-33 (largest empty space) and PA-66 (negative space variety). PA-31 is about ALL surrounding space; others are specific. |
| EFFECTIVENESS | 4/5 | Gas Town: positive assessment citing background shifts, borders, dividers. |
| FRESH-EYES | 5/5 | Mental content removal is a perceptual exercise. |
| **AVERAGE** | **4.2** | |

#### PA-32: "Squint at the full page. Is visual weight distributed purposefully across the scroll?"
| Dimension | Score | Evidence |
|-----------|-------|----------|
| CLARITY | 5/5 | Physical instruction (squint) + specific target (weight distribution). |
| ACTIONABILITY | 4/5 | Identifies distribution problems but "purposefully" requires judgment. |
| UNIQUENESS | 4/5 | Overlaps with PA-10 (squint balance) and PA-52 (thirds). PA-32 specifically asks about SCROLL distribution. |
| EFFECTIVENESS | 4/5 | Gas Town: percentage-by-scroll analysis provided. |
| FRESH-EYES | 5/5 | Squint + scroll is purely visual. |
| **AVERAGE** | **4.4** | |

#### PA-33: "Pick the largest area of empty space. Does it feel like silence in music or a dropped signal?"
| Dimension | Score | Evidence |
|-----------|-------|----------|
| CLARITY | 5/5 | Music metaphor (silence vs dropped signal) is vivid and unambiguous. |
| ACTIONABILITY | 5/5 | Binary: purposeful (silence) vs accidental (dropped signal). Directly determines fix need. |
| UNIQUENESS | 4/5 | Overlaps with PA-09 (dead space) and PA-66 (negative space variety). PA-33 is about the LARGEST area specifically. |
| EFFECTIVENESS | 5/5 | Gas Town: correctly identified trailing void as "dropped signal." |
| FRESH-EYES | 5/5 | Music metaphor is accessible to non-designers. |
| **AVERAGE** | **4.8** | |

#### PA-12 through PA-36 (Visual Flow and Pacing)

| ID | Question Summary | CLR | ACT | UNQ | EFF | FE | AVG | Notes |
|----|-----------------|-----|-----|-----|-----|----|-----|-------|
| PA-12 | Smooth eye flow | 5 | 4 | 4 | 4 | 5 | 4.4 | Overlaps with PA-17 (rhythm) |
| PA-13 | Clear visual ending | 5 | 5 | 5 | 5 | 5 | 5.0 | Catches missing footers, abrupt endings |
| PA-34 | Designed transition moment | 5 | 5 | 4 | 5 | 5 | 4.8 | Overlaps with PA-69 (transition counting) |
| PA-35 | Interest curve during scroll | 5 | 5 | 5 | 5 | 5 | 5.0 | Uniquely captures engagement arc |
| PA-36 | Dramatic visual moment | 5 | 5 | 5 | 5 | 5 | 5.0 | Catches front-loading and monotony |

#### PA-14 through PA-39 (Grid and Layout)

| ID | Question Summary | CLR | ACT | UNQ | EFF | FE | AVG | Notes |
|----|-----------------|-----|-----|-----|-----|----|-----|-------|
| PA-14 | Column breathing room | 5 | 5 | 5 | 4 | 5 | 4.8 | |
| PA-15 | Left-edge positions | 5 | 5 | 5 | 4 | 5 | 4.8 | Excellent alignment scatter detector |
| PA-37 | 5+ info competing | 5 | 5 | 5 | 4 | 5 | 4.8 | |
| PA-38 | Card reading order | 5 | 5 | 5 | 4 | 5 | 4.8 | |
| PA-39 | Header vs content ratio | 5 | 5 | 5 | 4 | 5 | 4.8 | "Doorway or lobby" is excellent |

#### PA-16 through PA-41 (Consistency and Rhythm)

| ID | Question Summary | CLR | ACT | UNQ | EFF | FE | AVG | Notes |
|----|-----------------|-----|-----|-----|-----|----|-----|-------|
| PA-16 | Twin elements identical | 5 | 5 | 5 | 4 | 5 | 4.8 | |
| PA-17 | Visual rhythm (T1 EQ) | 5 | 5 | 5 | 5 | 5 | 5.0 | T1 equivalent is correct |
| PA-40 | Spacing jumps justified | 5 | 5 | 5 | 4 | 5 | 4.8 | |
| PA-41 | 4+ repetition monotony (T1 EQ) | 5 | 5 | 5 | 5 | 5 | 5.0 | Caught Zone 4 monotony in Gas Town |

#### PA-18 through PA-20 (Color and Emotion)

| ID | Question Summary | CLR | ACT | UNQ | EFF | FE | AVG | Notes |
|----|-----------------|-----|-----|-----|-----|----|-----|-------|
| PA-18 | Gray family consistency | 5 | 4 | 5 | 4 | 5 | 4.6 | |
| PA-19 | Foreign element | 5 | 5 | 5 | 5 | 5 | 5.0 | Catches design system violations |
| PA-20 | 3-word personality | 4 | 3 | 5 | 3 | 5 | 4.0 | See note below |

**PA-20 Note:** "Does it match intent?" is problematic under fresh-eyes. The auditor does not know the designer's intent. In Gas Town, Auditor G answered "Grizzled, Systematic, Unflinching" and assessed intent match by inferring from the content. This works when content is visible in screenshots but requires reading text, which partially breaks the perceptual-only principle. **RECOMMENDATION:** Rewrite to "Describe this page's personality in three words. Does it match the CONTENT's personality?"

---

### Tier 3: Deep Dive + Metaphor + Quality

#### PA-21 through PA-47 (Responsiveness)

| ID | Question Summary | CLR | ACT | UNQ | EFF | FE | AVG | Notes |
|----|-----------------|-----|-----|-----|-----|----|-----|-------|
| PA-21 | Designed for this width | 5 | 4 | 4 | 4 | 5 | 4.4 | Overlaps with PA-30 at 1440px |
| PA-22 | Served or punished | 5 | 4 | 5 | 4 | 5 | 4.6 | Excellent emotional framing |
| PA-23 | What breaks at -200px | 5 | 5 | 5 | 4 | 4 | 4.6 | Requires viewport resizing (not just screenshot) |
| PA-46 | 768px reorganization sense | 5 | 5 | 5 | 4 | 5 | 4.8 | |
| PA-47 | Repetition onset / 2nd half surprise | 5 | 5 | 5 | 5 | 5 | 5.0 | Catches front-loading |

**PA-23 Note:** "What breaks if you resize 200px narrower?" requires interactive viewport resizing. In the screenshot-reading protocol, auditors see static captures at 1440/1024/768. They cannot resize. The auditor must INFER breakage from the width differences between captures, which is a different cognitive task. **RECOMMENDATION:** Rewrite for screenshot context: "Comparing the 1024px and 768px screenshots, what changed for the worse? What looks squeezed or broken?"

#### PA-24 through PA-25 (Cross-Page)

| ID | Question Summary | CLR | ACT | UNQ | EFF | FE | AVG | Notes |
|----|-----------------|-----|-----|-----|-----|----|-----|-------|
| PA-24 | Belongs with siblings | 4 | 3 | 5 | 2 | 3 | 3.4 | See note below |
| PA-25 | Identify design system | 4 | 3 | 5 | 2 | 4 | 3.6 | See note below |

**PA-24/PA-25 Structural Problem:** These questions are STRUCTURALLY UNANSWERABLE when only one page exists (the common case for new content). The compliance audit confirmed this: Auditor I explicitly noted "I cannot compare to sibling pages" and improvised from the single page. This is a STRUCTURAL MISMATCH (SM-05 in the loss taxonomy).

**RECOMMENDATION:** Two options:
1. **REMOVE** from standard Mode 4 deployment. Add to a "Multi-Page Mode" variant that activates only when 2+ pages are being audited simultaneously.
2. **REWRITE** for single-page context: "PA-24: Looking at the design language (borders, colors, spacing, typography), does this feel like it belongs to a SYSTEM, or is it one-off custom work?" and "PA-25: If you saw this page without its header, could you identify what design system it belongs to based on the visual language alone?"

#### PA-26 through PA-28, PA-48 (Architectural/Adversarial)

| ID | Question Summary | CLR | ACT | UNQ | EFF | FE | AVG | Notes |
|----|-----------------|-----|-----|-----|-----|----|-----|-------|
| PA-26 | Convention causing problem | 5 | 5 | 5 | 4 | 4 | 4.6 | Requires some system knowledge |
| PA-27 | From scratch, same way? | 5 | 4 | 5 | 3 | 5 | 4.4 | Hypothetical, less actionable |
| PA-28 | Make it terrible while passing rules | 5 | 4 | 5 | 3 | 3 | 4.0 | Requires rule knowledge (partial fresh-eyes violation) |
| PA-48 | First or last of five options | 5 | 5 | 5 | 4 | 5 | 4.8 | Excellent comparative framing |

**PA-28 Note:** "Passing every rule" requires the auditor to know what rules exist. In fresh-eyes mode, the auditor does not know the rules. In Gas Town, Auditor I identified 7 loopholes by reasoning about general design rules, not pipeline-specific ones. This works but is weaker than intended. **RECOMMENDATION:** Rewrite: "If you wanted to make this page look terrible while keeping its basic structure (colors, layout, components), what 3 changes would do the most damage?"

#### PA-42 through PA-44 (Metaphor)

| ID | Question Summary | CLR | ACT | UNQ | EFF | FE | AVG | Notes |
|----|-----------------|-----|-----|-----|-----|----|-----|-------|
| PA-42 | Metaphor looks wrong | 5 | 5 | 5 | 4 | 5 | 4.8 | |
| PA-43 | Less visual cost | 5 | 5 | 5 | 4 | 5 | 4.8 | |
| PA-44 | Metaphor without labels | 5 | 5 | 5 | 5 | 5 | 5.0 | Critical question for metaphor quality |

#### PA-45 (Quality/Excellence)

| ID | Question Summary | CLR | ACT | UNQ | EFF | FE | AVG | Notes |
|----|-----------------|-----|-----|-----|-----|----|-----|-------|
| PA-45 | Best design moment | 5 | 4 | 5 | 5 | 5 | 4.8 | |

---

### Tier 4: Void Prevention

| ID | Question Summary | CLR | ACT | UNQ | EFF | FE | AVG | Notes |
|----|-----------------|-----|-----|-----|-----|----|-----|-------|
| PA-50 | Consecutive blank viewports | 5 | 5 | 5 | 5 | 5 | 5.0 | Directly catches the #1 historical failure |
| PA-51 | Content percentage | 5 | 5 | 4 | 4 | 4 | 4.4 | Estimation from screenshots is imprecise |
| PA-52 | Thirds have designed moments | 5 | 5 | 4 | 5 | 5 | 4.8 | Overlaps with PA-32 but more specific |
| PA-53 | Container horizontal use | 5 | 5 | 4 | 5 | 5 | 4.8 | Overlaps with PA-30 but more specific |

**PA-51 Note:** Asking auditors to estimate "what percentage of total scroll height is content" from screenshots is imprecise. Different auditors may estimate 60% vs 75% for the same page. The Gas Town compliance audit showed Auditor C estimating ~75%, which is plausible but not verifiable from screenshots alone. **RECOMMENDATION:** Change from percentage estimation to qualitative assessment: "Does the page feel content-dense, balanced, sparse, or void-dominated?"

---

### Sub-Perceptual CSS Detection

| ID | Question Summary | CLR | ACT | UNQ | EFF | FE | AVG | Notes |
|----|-----------------|-----|-----|-----|-----|----|-----|-------|
| PA-55 | Adjacent sections differ visually | 5 | 5 | 5 | 5 | 5 | 5.0 | Critical -- catches flagship failure mode |
| PA-56 | Feel tracking difference | 5 | 5 | 5 | 4 | 5 | 4.8 | |

---

### Pipeline Integration

| ID | Question Summary | CLR | ACT | UNQ | EFF | FE | AVG | Notes |
|----|-----------------|-----|-----|-----|-----|----|-----|-------|
| PA-69 | Transition intensity variety | 4 | 5 | 4 | 4 | 5 | 4.4 | See note |
| PA-70 | Visual treatment responds to content density | 5 | 5 | 5 | 5 | 5 | 5.0 | |

**PA-69 Note:** "Count how many visual properties change" requires counting at the moment of looking, which some auditors may interpret differently. PA-62 (Tier 5) also asks about transition variation with a "dramatic vs quiet" framing. The overlap is moderate. PA-69 adds the UNIFORMITY check ("are all transition intensities similar?") which PA-62 does not explicitly ask.

---

### Tier 5: Compositional Depth

| ID | Question Summary | CLR | ACT | UNQ | EFF | FE | AVG | Notes |
|----|-----------------|-----|-----|-----|-----|----|-----|-------|
| PA-60 | Design moment density | 5 | 5 | 5 | 5 | 5 | 5.0 | |
| PA-61 | Multi-voice composition | 4 | 4 | 5 | 4 | 5 | 4.4 | "Independent rhythms" is abstract |
| PA-62 | Transition variation | 5 | 5 | 4 | 5 | 5 | 4.8 | Moderate overlap with PA-69 |
| PA-63 | Fractal zoom coherence | 4 | 4 | 5 | 4 | 4 | 4.2 | See note |
| PA-64 | Restraint as expression | 4 | 4 | 5 | 3 | 5 | 4.2 | See note |
| PA-65 | Compositional voice / music | 5 | 5 | 5 | 5 | 5 | 5.0 | Best Tier 5 question |
| PA-66 | Negative space variety | 5 | 5 | 4 | 4 | 5 | 4.6 | Overlaps PA-33, PA-40 |
| PA-67 | Novelty beyond competence | 3 | 3 | 5 | 3 | 5 | 3.8 | See note |
| PA-68 | Metaphor spatial coverage | 5 | 5 | 5 | 5 | 5 | 5.0 | |

**PA-63 Note:** Currently tests only 2 scales (page + component). The Progressive Zoom Test protocol covers 5 scales but is separate from the question. The skill-interaction analysis (Finding 17) recommends adding section-level scale. Additionally, "does it adapt to its surroundings" requires comparing the same component in two zones, which may not be possible if the page only has one instance of a component type. **RECOMMENDATION:** Expand to 3 scales: "Zoom into one component. Does its design echo the page's language? Then zoom OUT to section level -- does this section's internal structure also echo the same language? Then find the SAME component type in a different section -- does it adapt?"

**PA-64 Note:** "Restraint as expression" is the hardest Tier 5 question for auditors. In Gas Town, Auditor C gave a "weak pass" -- honest but less decisive. The scoring rubric says "plainness feels INTENTIONAL," but distinguishing intentional plainness from absence is inherently subjective. The Restraint Evaluation Guidance (in SKILL.md) helps but is not part of the question text itself. Auditors may not read the extended guidance.

**PA-67 Note:** This is the lowest-scoring question. Problems:
1. "Something you have not seen before" is subjective and depends on the auditor's experience
2. Binary YES/NO criteria do not accommodate "partially novel" -- Gas Town's auditor answered "Partially" which the weaver had to resolve
3. "Inventive" vs "gimmicky" distinction requires design expertise that fresh-eyes auditors may lack
4. Has never produced a clean YES in any observed run (always partial or no)

**RECOMMENDATION:** Rewrite PA-67: "Does the page do something visually that you would not have predicted from its content? Name the specific surprise. Does the surprise serve the content or distract from it?" This shifts from "novel vs competent" (which requires comparative expertise) to "predictable vs surprising" (which is perceptually grounded).

---

## PART 2: COVERAGE GAP ANALYSIS

### What quality dimensions are NOT covered by any PA question?

#### GAP-1: Information Loss Type Detection

The 81 identified loss instances (from 04-loss-mechanism-taxonomy.md) fall into 7 types. PA's detection capability per type:

| Loss Type | Instances | PA Detection? | Coverage |
|-----------|-----------|---------------|----------|
| COMPRESSION | 10 | NO -- PA cannot detect what was lost from the brief | 0% |
| ESTIMATION | 18 | PARTIAL -- PA-55/PA-56 catch sub-perceptual results of estimation errors | ~30% |
| OVERRIDE | 9 | PARTIAL -- PA-19 catches "foreign elements" from overrides | ~20% |
| OMISSION | 21 | PARTIAL -- PA-13 catches missing footer, PA-50 catches voids | ~25% |
| DILUTION | 6 | NO -- PA cannot detect which instructions were implemented vs skipped | 0% |
| DRIFT | 7 | PARTIAL -- PA-55 catches the RESULT of drift (imperceptible variation) | ~40% |
| STRUCTURAL MISMATCH | 10 | NO -- PA cannot detect pipeline architecture problems | 0% |

**COMPRESSION, DILUTION, and STRUCTURAL MISMATCH are invisible to PA.** This is correct by design -- PA assesses perceptual quality, not pipeline fidelity. But it means 26 of 81 loss instances (32%) are undetectable by PA regardless of question count.

#### GAP-2: Content-Form Fit Quality

**Question:** Does the visual treatment serve THIS content specifically, or could the same design wrap any content?

PA-70 partially addresses this ("does visual treatment RESPOND to content density?"), and PA-05a ("intentional composition or assembled components?") touches it. But no question specifically asks: "If you replaced this content with completely different content, would the design need to change? Or would it work for anything?"

**Proposed new question (see Part 7).**

#### GAP-3: Recipe Execution Quality

**Question:** Did the builder actually follow the recipe/brief?

PA cannot assess this at all. PA sees the result, not the process. A page built from a completely improvised approach that happens to look good would pass PA. A page that meticulously followed the recipe but has a bad recipe would fail PA. This is correct behavior -- PA measures output quality, not process fidelity -- but it means the gate runner must handle recipe compliance.

**No PA question needed. This is a gate runner responsibility.**

#### GAP-4: Brief Accuracy

**Question:** Does the brief accurately represent the content?

PA cannot check this. The fresh-eyes principle prevents auditors from reading the brief. The adversarial review (file 09) identifies this as GAP-1: "Nobody Measured the Content Map's Fidelity to the Source Content." The content map and brief are treated as ground truth.

**No PA question possible under fresh-eyes. Requires a separate brief verification gate.**

#### GAP-5: Multi-Coherence at Boundaries (Specificity)

PA-69 asks about transition intensity variety, and PA-62 asks about dramatic vs quiet transitions. But no question specifically asks: "At this boundary, do the changes AGREE with each other? Do they all say the same thing (denser/lighter/more intense)?"

The multi-coherence evaluation guidance in SKILL.md describes this ("do the shifts agree?") but no PA question directly asks it. The guidance is a lens, not a question.

**Proposed: Incorporate into PA-69 (see Part 7).**

#### GAP-6: Accessibility

PA has zero accessibility questions. No question asks about:
- Keyboard navigation
- Focus states
- Screen reader experience
- Color contrast ratios (except implicit in PA-08)
- Touch targets at mobile widths

This is intentional (PA is perceptual, not technical), but WCAG compliance is a shipping requirement that PA should at minimum flag.

**Proposed new question (see Part 7).**

#### GAP-7: Interaction States

PA auditors see static screenshots. No question addresses:
- Hover state quality
- Collapsible/expandable behavior
- Animation quality or purpose
- Scroll behavior (smooth scrolling, sticky headers)

This is a fundamental limitation of the screenshot-based audit. **No PA question possible in current architecture. Would require video capture or interactive audit mode.**

---

## PART 3: QUESTION LOAD BALANCING

### Current Distribution

| Auditor | Role | Questions | Load Ratio |
|---------|------|-----------|------------|
| **C** | Spatial + Proportion | **14** | **2.33x median** |
| D | Flow + Pacing | 8 | 1.33x median |
| A | Impression + Emotion | 7 | 1.17x median |
| G | Metaphor + Ideology | 7 | 1.17x median |
| B | Readability + Typography | 6 | 1.00x (median) |
| E | Grid + Layout | 6 | 1.00x |
| F | Consistency + Rhythm | 6 | 1.00x |
| I | Cross-Page + Adversarial | 6 | 1.00x |
| **H** | Responsiveness | **5** | **0.83x median** |

**Statistics:**
- Mean: 7.2 questions/auditor
- Median: 6 questions/auditor
- Max: 14 (Auditor C) = 2.33x median
- Min: 5 (Auditor H) = 0.83x median
- Standard deviation: 2.7

### Analysis: Is Auditor C's Load Too Heavy?

**YES, with qualifications.**

**Evidence of quality degradation:**
- Gas Town compliance: Auditor C's answer quality was STRONG for all 14 questions (no degradation observed)
- But: Many of C's questions are measurement-heavy (PA-50: count viewports, PA-51: estimate percentage, PA-53: estimate width). These are cognitively distinct from perceptual questions and create fatigue through mode-switching between "feel" questions (PA-09, PA-11, PA-33) and "measure" questions (PA-50, PA-51, PA-53)

**The case for splitting:**
- 14 questions at ~3-5 minutes each = 42-70 minutes of focused evaluation. This approaches the attention limit of a single agent context.
- The spatial domain is genuinely broad: it covers negative space quality, void detection, proportion assessment, sub-perceptual detection, restraint evaluation, and width measurement. These are related but distinct cognitive tasks.
- PA-52 (designed moments per third) is fundamentally a PACING question, not a spatial one. It overlaps with D's PA-35 (interest curve during scroll).

**The case against splitting:**
- Spatial questions are interconnected. Moving PA-52 to Auditor D would separate "thirds have designed moments" from "visual weight distributed across scroll" (PA-32), which inform each other.
- Opus agents handle 14 questions without observed degradation (N=1 evidence).
- Breaking domain coherence may cause worse results than overload.

### Proposed Redistribution

| Change | From | To | Rationale |
|--------|------|----|-----------|
| PA-52 | C (14->13) | D (8->9) | PA-52 (designed moments per third) is a pacing question. Aligns with D's PA-35 (interest curve). |
| PA-55 | C (13->12) | B (6->7) | PA-55 (adjacent sections differ visually) is a perception question that B (typography) can handle -- it asks "can you DESCRIBE how they differ" which is description, not measurement. |

**Post-redistribution:**

| Auditor | Before | After | Delta |
|---------|--------|-------|-------|
| A | 7 | 7 | 0 |
| B | 6 | 7 | +1 |
| C | 14 | 12 | -2 |
| D | 8 | 9 | +1 |
| E | 6 | 6 | 0 |
| F | 6 | 6 | 0 |
| G | 7 | 7 | 0 |
| H | 5 | 5 | 0 |
| I | 6 | 6 | 0 |

**New max: 12 (C), 2.0x median.** New std dev: 1.9 (down from 2.7).

### Optimal Question Count Per Auditor

Based on the observed Gas Town execution and attention budget theory:

- **Minimum:** 5 (below this, the auditor does not build enough page familiarity to make compositional judgments)
- **Optimal:** 6-8 (sufficient depth without fatigue)
- **Maximum:** 10 (beyond this, later questions receive diminished attention)
- **Hard ceiling:** 12 (beyond this, quality degradation is likely even for Opus)

---

## PART 4: EXECUTION VERIFICATION GAP

### Gap 1: No verification that each question was actually answered

**Current state:** The weaver reads 9 auditor reports and produces a verdict. There is no automated or structural check that every assigned question received an answer.

**Observed evidence:** Gas Town compliance was 65/65 (100%). But this was verified by a separate compliance audit AFTER the PA, not during it. If Auditor C had skipped PA-55 (question #12 of 14), the weaver might not notice the absence among 10 reports.

**Proposed fix: PA Completion Manifest**

Each auditor's report MUST include a completion table as its FINAL section:

```markdown
## COMPLETION MANIFEST
| Question | Answered | Evidence Screenshot |
|----------|----------|-------------------|
| PA-09 | YES | 1440-scroll-03 |
| PA-10 | YES | 1440-cold-look |
| PA-11 | YES | 1440-scroll-01 |
| ... | ... | ... |
```

The weaver's FIRST action is to verify all 9 manifests are complete (65 YES entries total). Any missing answer = INCOMPLETE, weaver requests re-evaluation from that auditor.

### Gap 2: No verification that answers are evidence-based

**Current state:** The protocol requires answers to include specific evidence ("point to it," "where?"), and the Three Laws require screenshot-based answers. But there is no structural enforcement. An auditor could write "YES" without citing a screenshot.

**Observed evidence:** Gas Town auditors consistently cited specific screenshots (e.g., "1440-scroll-04"). 90.8% rated STRONG. But this quality is auditor-dependent, not protocol-enforced.

**Proposed fix: Evidence Requirement in Question Format**

For each question, add an explicit evidence format requirement:

```
PA-60: "Can you identify at least 3 distinct 'design moments'?"
ANSWER FORMAT: YES/NO + for each moment: [screenshot reference] + [1-sentence description]
```

This makes evidence a STRUCTURAL part of the answer, not an optional addition.

### Gap 3: PA-05 sub-criteria not independently verified

**Current state:** Auditor A rates all 4 sub-criteria. The weaver trusts these ratings. But there is no cross-validation -- no other auditor independently assesses DESIGNED, COHERENT, PROPORTIONATE, POLISHED.

**Observed evidence:** Gas Town's Auditor A scored PROPORTIONATE as PASS, but Auditor C's void analysis and Auditor D's pacing analysis contained evidence that PROPORTIONATE 3c (breathing) was arguably FAIL (trailing void = "dropped signal" not "silence in music"). The weaver did not synthesize these conflicting signals into the PA-05 sub-criteria.

**Proposed fix: PA-05 Distributed Evaluation**

Instead of Auditor A rating all 4 sub-criteria alone, distribute:

| Sub-criterion | Primary Evaluator | Cross-validator |
|---------------|------------------|-----------------|
| DESIGNED | A (Impression) | F (Consistency -- rhythm is core to "designed") |
| COHERENT | A (Impression) | G (Metaphor -- metaphor coherence is core) |
| PROPORTIONATE | A (Impression) | C (Spatial -- proportion is C's domain) |
| POLISHED | A (Impression) | B (Readability -- polish includes readability) |

The weaver receives both primary and cross-validation scores. If they disagree, the weaver must resolve and document the disagreement. This adds 4 questions (1 per cross-validator) but dramatically improves PA-05 reliability.

---

## PART 5: PA QUESTION SPLITTING ARCHITECTURE

### Current State

The PA protocol is a single 1,004-line file (`artifact-pa-protocol.md`). The PA skill is a separate 993-line file (`SKILL.md`). These two files overlap substantially and have diverged in enrichment history, creating:

- Dual-source ambiguity (which is authoritative?)
- Maintenance burden (edits must be made in 2 places)
- Orchestrator confusion about which file to route to which agent

### Proposed Architecture: 4 Files + 1 Manifest

#### File 1: `pa-questions.md` (~350 lines)
**Contents:** All 65 questions with ID, text, scoring criteria, evidence format requirement. Organized by tier.
**Audience:** Auditors (each receives the full file but is told which questions are theirs)
**Why separate:** Questions are the stable core that rarely change.

#### File 2: `pa-deployment.md` (~250 lines)
**Contents:** Auditor assignments, team topology, screenshot protocol, cold look protocol, zone sweep, progressive zoom test, completion manifest template.
**Audience:** Orchestrator (for spawning auditors) and auditors (for workflow)
**Why separate:** Deployment details change when auditors are added/removed or questions redistributed.

#### File 3: `pa-weaver.md` (~200 lines)
**Contents:** Weaver protocol (6 sections), calibration references, fix-type classification, metaphor failure diagnosis, emotional arc framework, verdict matrix, ship thresholds.
**Audience:** Weaver ONLY
**Why separate:** Weaver receives information that auditors must NOT see (calibration tables, tier definitions). Keeping it separate enforces information isolation.

#### File 4: `pa-guardrails.md` (~200 lines)
**Contents:** Quantitative guardrails (content width, typography, layout, compression, hierarchy), perception thresholds, void guardrails, S-09 stacking check.
**Audience:** Builders (for self-check) and auditors (for reference)
**Why separate:** Guardrails are numerical specifications that apply to both building and auditing.

#### Manifest: `pa-manifest.md` (~50 lines)
**Contents:**
```markdown
# PA MANIFEST — Question Assignment and Completion Tracking

## Total: 65 questions across 9 auditors

| Auditor | Questions Assigned | Count |
|---------|-------------------|-------|
| A | PA-01, PA-03, PA-04, PA-05, PA-45, PA-65, PA-67 | 7 |
| B | PA-02, PA-06, PA-07, PA-08, PA-29, PA-56, PA-55 | 7 |
| C | PA-09, PA-10, PA-11, PA-30, PA-31, PA-32, PA-33, PA-50, PA-51, PA-53, PA-64, PA-66 | 12 |
| D | PA-12, PA-13, PA-34, PA-35, PA-36, PA-52, PA-69, PA-70, PA-62 | 9 |
| E | PA-14, PA-15, PA-37, PA-38, PA-39, PA-63 | 6 |
| F | PA-16, PA-17, PA-40, PA-41, PA-60, PA-61 | 6 |
| G | PA-18, PA-19, PA-20, PA-42, PA-43, PA-44, PA-68 | 7 |
| H | PA-21, PA-22, PA-23, PA-46, PA-47 | 5 |
| I | PA-24, PA-25, PA-26, PA-27, PA-28, PA-48 | 6 |

## Completion Tracking (filled by weaver)

| Auditor | Report Received | Manifest Complete | Missing Questions |
|---------|----------------|-------------------|-------------------|
| A | [ ] | [ ] | |
| B | [ ] | [ ] | |
| ... | | | |

## Cross-Validation Assignments (PA-05 distributed)

| Sub-criterion | Primary (A) | Cross-validator |
|---------------|-------------|-----------------|
| DESIGNED | A | F |
| COHERENT | A | G |
| PROPORTIONATE | A | C |
| POLISHED | A | B |
```

**Why a manifest:** It is the single source of truth for "what questions exist, who answers them, and were they all answered." The weaver checks it before synthesizing. The orchestrator uses it for spawning. Question additions/removals are made HERE, and deployment/question files are updated to match.

### Does the Integrative Auditor Need Its Own File?

**No.** The integrative auditor receives the same screenshot paths as all other auditors. Their instruction is simple: "Write a free-form gestalt impression. No assigned questions. Identify cross-cutting patterns that section-focused auditors miss." This instruction can be embedded in the orchestrator's spawn prompt (3-5 lines) without a dedicated file.

---

## PART 6: QUESTION QUALITY SCORING SUMMARY

### All 65 Questions Ranked by Average Score

| Rank | ID | Average | Lowest Dimension | Notes |
|------|------|---------|------------------|-------|
| 1 | PA-01 | 5.0 | -- | Perfect |
| 1 | PA-05 | 5.0 | -- | Perfect |
| 1 | PA-13 | 5.0 | -- | Perfect |
| 1 | PA-17 | 5.0 | -- | Perfect |
| 1 | PA-35 | 5.0 | -- | Perfect |
| 1 | PA-36 | 5.0 | -- | Perfect |
| 1 | PA-41 | 5.0 | -- | Perfect |
| 1 | PA-44 | 5.0 | -- | Perfect |
| 1 | PA-47 | 5.0 | -- | Perfect |
| 1 | PA-50 | 5.0 | -- | Perfect |
| 1 | PA-55 | 5.0 | -- | Perfect |
| 1 | PA-60 | 5.0 | -- | Perfect |
| 1 | PA-65 | 5.0 | -- | Perfect |
| 1 | PA-68 | 5.0 | -- | Perfect |
| 1 | PA-70 | 5.0 | -- | Perfect |
| 1 | PA-19 | 5.0 | -- | Perfect |
| 17 | PA-03 | 4.8 | UNIQUENESS (4) | Minor PA-05 overlap |
| 17 | PA-06 | 4.8 | EFFECTIVENESS (4) | |
| 17 | PA-14 | 4.8 | EFFECTIVENESS (4) | |
| 17 | PA-15 | 4.8 | EFFECTIVENESS (4) | |
| 17 | PA-16 | 4.8 | EFFECTIVENESS (4) | |
| 17 | PA-29 | 4.8 | EFFECTIVENESS (4) | |
| 17 | PA-30 | 4.8 | EFFECTIVENESS (4) | |
| 17 | PA-33 | 4.8 | UNIQUENESS (4) | PA-09 overlap |
| 17 | PA-34 | 4.8 | UNIQUENESS (4) | PA-69 overlap |
| 17 | PA-37 | 4.8 | EFFECTIVENESS (4) | |
| 17 | PA-38 | 4.8 | EFFECTIVENESS (4) | |
| 17 | PA-39 | 4.8 | EFFECTIVENESS (4) | |
| 17 | PA-40 | 4.8 | EFFECTIVENESS (4) | |
| 17 | PA-42 | 4.8 | EFFECTIVENESS (4) | |
| 17 | PA-43 | 4.8 | EFFECTIVENESS (4) | |
| 17 | PA-45 | 4.8 | ACTIONABILITY (4) | |
| 17 | PA-46 | 4.8 | EFFECTIVENESS (4) | |
| 17 | PA-48 | 4.8 | EFFECTIVENESS (4) | |
| 17 | PA-52 | 4.8 | UNIQUENESS (4) | PA-32 overlap |
| 17 | PA-53 | 4.8 | UNIQUENESS (4) | PA-30 overlap |
| 17 | PA-56 | 4.8 | EFFECTIVENESS (4) | |
| 17 | PA-62 | 4.8 | UNIQUENESS (4) | PA-69 overlap |
| 39 | PA-09 | 4.6 | CLARITY (4) | "Serves no purpose" is judgment |
| 39 | PA-18 | 4.6 | ACTIONABILITY (4) | |
| 39 | PA-22 | 4.6 | ACTIONABILITY (4) | |
| 39 | PA-23 | 4.6 | FRESH-EYES (4) | Requires viewport resizing |
| 39 | PA-26 | 4.6 | FRESH-EYES (4) | Requires system knowledge |
| 39 | PA-66 | 4.6 | UNIQUENESS (4) | |
| 45 | PA-02 | 4.4 | UNIQUENESS (4) | PA-07/PA-08 overlap |
| 45 | PA-04 | 4.4 | FRESH-EYES (4) | "Should" requires content knowledge |
| 45 | PA-07 | 4.0 | UNIQUENESS (3) | PA-02/PA-08 overlap |
| 45 | PA-08 | 4.4 | UNIQUENESS (3) | PA-02/PA-07 overlap |
| 45 | PA-10 | 4.4 | UNIQUENESS (4) | PA-32 overlap |
| 45 | PA-11 | 4.4 | ACTIONABILITY (3) | Descriptive not prescriptive |
| 45 | PA-12 | 4.4 | UNIQUENESS (4) | PA-17 overlap |
| 45 | PA-21 | 4.4 | UNIQUENESS (4) | PA-30 overlap |
| 45 | PA-32 | 4.4 | UNIQUENESS (4) | PA-10 overlap |
| 45 | PA-51 | 4.4 | FRESH-EYES (4) | Percentage estimation imprecise |
| 45 | PA-61 | 4.4 | CLARITY (4) | "Independent rhythms" abstract |
| 45 | PA-69 | 4.4 | CLARITY (4) | Counting properties is ambiguous |
| 45 | PA-27 | 4.4 | EFFECTIVENESS (3) | Hypothetical |
| 59 | PA-31 | 4.2 | CLARITY (4) | Mental exercise abstract |
| 59 | PA-63 | 4.2 | CLARITY (4) | Only 2 scales tested |
| 59 | PA-64 | 4.2 | EFFECTIVENESS (3) | Hardest to assess |
| 62 | PA-20 | 4.0 | ACTIONABILITY (3) | "Match intent" breaks fresh-eyes |
| 62 | PA-28 | 4.0 | FRESH-EYES (3) | "Passing rules" requires rule knowledge |
| 64 | PA-67 | 3.8 | ACTIONABILITY (3), EFFECTIVENESS (3) | Lowest-rated question |
| 65 | PA-24 | 3.4 | EFFECTIVENESS (2) | Structurally unanswerable |
| 66 | PA-25 | 3.6 | EFFECTIVENESS (2) | Structurally unanswerable |

### Score Distribution

| Score Range | Count | % |
|-------------|-------|---|
| 5.0 (perfect) | 16 | 24.6% |
| 4.6-4.8 (excellent) | 22 | 33.8% |
| 4.0-4.4 (good) | 22 | 33.8% |
| 3.4-3.8 (needs work) | 5 | 7.7% |
| Below 3.4 | 0 | 0% |

**Overall inventory quality: STRONG.** 58.4% of questions score 4.6 or above. Only 7.7% score below 4.0.

---

## PART 7: PROPOSED IMPROVEMENTS

### Questions to REMOVE (3)

#### REMOVE PA-07: "Can you read the longest paragraph without losing your place?"
**Rationale:** Fully covered by PA-02 (uncomfortable text) + PA-08 (squint to read). PA-07 adds marginal value over the PA-02/PA-08 combination. Removing it simplifies Auditor B's load from 6 to 5 (or 7 to 6 after redistribution).
**Replacement:** None needed. PA-02 and PA-08 cover the same ground.

#### REMOVE PA-21: "Does everything look designed for this width, or squeezed?"
**Rationale:** Fully covered by PA-30 at 1440px and PA-46 at 768px. PA-21 is a less specific version of both. Its removal reduces Auditor H's load from 5 to 4, which could absorb a new question.
**Replacement:** Replace with a new accessibility question (see below).

#### REMOVE PA-10: "If you squint until you can't read text, does the layout look balanced?"
**Rationale:** Fully covered by PA-32 (visual weight distribution, also uses squint). PA-10 is the general version; PA-32 is the specific version with scroll distribution. Removing it reduces Auditor C's overload.
**Replacement:** None needed. PA-32 covers the same ground with more specificity.

### Questions to REWRITE (5)

#### REWRITE PA-20 (current: "Describe personality in three words. Does it match intent?")
**New text:** "Describe this page's personality in three words. Now read one paragraph of content. Does the page's visual personality match the content's verbal personality?"
**Rationale:** Shifts from "intent" (unknown in fresh-eyes) to "content personality" (inferrable from reading text in screenshots).

#### REWRITE PA-23 (current: "What breaks if you resize 200px narrower?")
**New text:** "Comparing the 1024px and 768px screenshots, what changed for the worse? Is there anything that looks squeezed, broken, or lost between these widths?"
**Rationale:** Screenshot-based auditors cannot resize. The rewrite grounds the question in available evidence.

#### REWRITE PA-28 (current: "How could someone make this look terrible while passing every rule?")
**New text:** "If you wanted to make this page look terrible while keeping its basic structure and color scheme, what 3 changes would do the most damage? What is this design most FRAGILE about?"
**Rationale:** Removes "passing every rule" (requires rule knowledge) and replaces with "keeping basic structure" (inferable from screenshots).

#### REWRITE PA-63 (current: 2-scale zoom test)
**New text:** "Zoom into one component (card, callout, table). Does its design echo the page's overall language? Then zoom OUT to section level -- pick one viewport-height screenful. Does this section's internal structure also echo the same language? Then find the SAME component type in a different section -- does it adapt to its surroundings, or look identical?"
**Rationale:** Adds section-level (3rd scale) per Finding 17 in the enrichment audit. Minimal text change, significant coverage improvement.

#### REWRITE PA-67 (current: "Does the page feel like it is doing something you have not seen before?")
**New text:** "Does the page do something visually that you would not have predicted from its content type? Name the specific surprise. Does the surprise serve the content or distract from it?"
**Rationale:** Shifts from experience-dependent "novel" to perception-grounded "predictable vs surprising." Adds content-relevance check. Makes binary scoring clearer (surprise that serves content = YES, no surprise or distracting surprise = NO).

### NEW Questions to ADD (4)

#### NEW PA-71: Content-Form Specificity
**Text:** "If you replaced this page's content with completely different content (say, a cooking recipe instead of whatever this is), would the visual design need to change? Or would it work for anything?"
**Tier:** 2 (Standard)
**Auditor:** A (Impression + Emotion) -- A has capacity (7 questions, below C's 12)
**Rationale:** Fills GAP-2. No current question tests whether the design is content-specific or generic. A design that "works for anything" is by definition not content-form coupled. This is the perceptual version of PA-70's content-form coupling check.
**Scoring:** YES (design serves THIS content): Design would need significant changes for different content. NO (generic): Design could wrap any content without changes.

#### NEW PA-72: Accessibility Quick Check
**Text:** "Is there any text, button, or interactive element that you think would be invisible, unreachable, or confusing to someone using only a keyboard or screen reader? Point to the most likely problem."
**Tier:** 3 (Deep Dive)
**Auditor:** H (Responsiveness -- H has the lightest load at 5 questions, now 4 after PA-21 removal; accessibility is a responsiveness-adjacent concern)
**Rationale:** Fills GAP-6. Current PA has zero accessibility questions. This is not a comprehensive WCAG audit, but it catches obvious accessibility problems (missing alt text visible as broken images, low contrast, tiny touch targets) from screenshots.
**Scoring:** PASS: No obvious accessibility barriers visible. FAIL: Specific barriers identified.

#### NEW PA-73: Coherence Direction Agreement
**Text:** "Pick a boundary where the page changes. Do ALL the changes point in the same direction? For example, if the background gets darker, does the text also get heavier, the spacing tighter, the borders thicker -- all saying 'denser'? Or do some changes contradict others?"
**Tier:** 2 (Standard)
**Auditor:** D (Flow + Pacing -- D already handles PA-69 on transition intensity)
**Rationale:** Fills GAP-5 (multi-coherence direction agreement). Currently, PA-69 counts property changes and PA-62 classifies as dramatic/quiet, but neither asks whether changes AGREE. This question directly tests multi-coherence quality.
**Scoring:** YES: Changes agree (all saying the same thing). NO: Changes contradict (some say denser while others say lighter).

#### NEW PA-74: Completion and Polish Check
**Text:** "Scroll to the very bottom of the page. Does the page end with a DESIGNED conclusion (footer, closing statement, visual bookend), or does it just stop? Is there any area that looks like the designer ran out of time?"
**Tier:** 2 (Standard)
**Auditor:** D (Flow + Pacing -- overlaps with PA-13 on visual ending)
**Rationale:** PA-13 asks "is there a clear visual ending?" which is about the ending's PRESENCE. PA-74 asks about the ending's QUALITY and specifically checks for "ran out of time" signals. The trailing void in Gas Town was caught by PA-01 (first bother) and PA-50 (blank viewports) but would have been more precisely diagnosed by a question specifically about completion quality.
**Note:** This may have sufficient overlap with PA-13 to be unnecessary. Include as OPTIONAL.

### Question REDISTRIBUTION (after all changes)

**Net effect: 65 - 3 removed + 3-4 added = 65-66 questions**

| Auditor | Before (65) | After (65-66) | Delta | Notes |
|---------|-------------|---------------|-------|-------|
| A | 7 | 8 | +1 | +PA-71 (content-form specificity) |
| B | 6 | 6 | 0 | -PA-07 (removed), +PA-55 (from C) |
| C | 14 | 11 | -3 | -PA-10 (removed), -PA-52 (to D), -PA-55 (to B) |
| D | 8 | 10-11 | +2-3 | +PA-52 (from C), +PA-73, +PA-74 (optional) |
| E | 6 | 6 | 0 | |
| F | 6 | 6 | 0 | |
| G | 7 | 7 | 0 | |
| H | 5 | 5 | 0 | -PA-21 (removed), +PA-72 (accessibility) |
| I | 6 | 6 | 0 | |

**Post-redistribution statistics:**
- Max: 11 (D or C, depending on PA-74 inclusion)
- Min: 5 (H)
- Mean: 7.2
- Std dev: 1.9 (down from 2.7)

### PA Execution Manifest Template

```markdown
# PA EXECUTION MANIFEST
## Run: [page-name] — [date]

### Pre-Flight
- [ ] Screenshots captured at 1440px, 1024px, 768px
- [ ] Animations disabled before capture
- [ ] document.fonts.ready confirmed before capture
- [ ] Screenshot file naming convention followed

### Auditor Reports

| Auditor | Role | Questions | Report Received | Manifest Complete | Missing |
|---------|------|-----------|----------------|-------------------|---------|
| A | Impression | PA-01,03,04,05,45,65,67,71 | [ ] | [ ] | |
| B | Readability | PA-02,06,08,29,55,56 | [ ] | [ ] | |
| C | Spatial | PA-09,11,30,31,32,33,50,51,53,64,66 | [ ] | [ ] | |
| D | Flow | PA-12,13,34,35,36,52,62,69,70,73 | [ ] | [ ] | |
| E | Grid | PA-14,15,37,38,39,63 | [ ] | [ ] | |
| F | Consistency | PA-16,17,40,41,60,61 | [ ] | [ ] | |
| G | Metaphor | PA-18,19,20,42,43,44,68 | [ ] | [ ] | |
| H | Responsive | PA-22,23,46,47,72 | [ ] | [ ] | |
| I | Adversarial | PA-24,25,26,27,28,48 | [ ] | [ ] | |
| INT | Integrative | (none - gestalt) | [ ] | N/A | |

### PA-05 Cross-Validation

| Sub-criterion | Primary (A) Score | Cross-validator | Cross Score | Agreement? |
|---------------|------------------|-----------------|-------------|------------|
| DESIGNED | | F | | |
| COHERENT | | G | | |
| PROPORTIONATE | | C | | |
| POLISHED | | B | | |

### Weaver Verification
- [ ] All 9 auditor manifests complete (65 YES entries)
- [ ] PA-05 cross-validation reviewed
- [ ] Tier 5 scores compiled (9 binary answers)
- [ ] Fix-type classification applied (MECHANICAL/STRUCTURAL/COMPOSITIONAL)
- [ ] Emotional arc 4-register assessment included
- [ ] Ship decision rendered

### Final Counts
- Questions assigned: 65
- Questions answered: ___
- Questions with STRONG evidence: ___
- Questions with ADEQUATE evidence: ___
- Questions MISSING: ___
```

---

## PART 8: CROSS-CUTTING FINDINGS

### Finding 1: The readability cluster (PA-02, PA-07, PA-08) has 3 questions covering similar ground
All three ask about text readability from slightly different angles. PA-02 (uncomfortable), PA-07 (longest paragraph), PA-08 (squint). Removing PA-07 preserves 90%+ of the diagnostic value. The remaining PA-02/PA-08 pair covers "general discomfort" and "size/contrast problems" respectively, which are complementary.

### Finding 2: The spatial/void cluster (PA-09, PA-30, PA-31, PA-32, PA-33, PA-50, PA-51, PA-52, PA-53) has 9 questions on one auditor
This is the root cause of Auditor C's overload. The cluster subdivides into:
- **Void detection:** PA-09, PA-50, PA-51 (3 questions)
- **Proportion assessment:** PA-30, PA-31, PA-53 (3 questions)
- **Weight distribution:** PA-32, PA-52 (2 questions -- PA-10 removed)
- **Negative space quality:** PA-33 (1 question)

These are genuinely distinct sub-domains, but they ALL live on one auditor because they all involve "spatial" reasoning. The redistribution (PA-52 to D, PA-55 to B) helps but does not fully address the clustering.

### Finding 3: PA-05's 4 sub-criteria carry the entire verdict but are evaluated by a single auditor
PA-05 is the PRIMARY success metric. Its 4 sub-criteria (DESIGNED, COHERENT, PROPORTIONATE, POLISHED) determine the ship decision. Yet all 4 are evaluated by Auditor A alone. The proposed PA-05 distributed evaluation (Part 4) adds cross-validation without adding questions -- each cross-validator rates the sub-criterion that falls in their domain as a SECONDARY assessment alongside their assigned questions.

### Finding 4: Tier 5 questions are hypothetical, not empirically validated
All 9 Tier 5 questions carry the epistemic status warning: "INITIAL HYPOTHESES -- derived from compositional intelligence stack, not from observed Flagship artifacts." After the Gas Town execution, we have N=1 data: 6/9 YES = APPROACHING. This data point does not validate or invalidate the questions -- it provides one observation. The Tier 5 scoring thresholds (8-9 = COMPOSED, 6-7 = APPROACHING, etc.) remain unvalidated. They should be treated as provisional until at least N=3 data points exist.

### Finding 5: The PA protocol's 94/100 compliance score masks structural gaps
The compliance audit correctly rated PA execution at 94/100, with deviations in:
- Verdict missing fix-type classification (-3)
- Verdict missing emotional arc synthesis (-2)
- PA-67 binary scoring ambiguity (-0.5)
- "SHIP WITH FIXES" not a protocol-defined category (-0.5)

These are PROTOCOL gaps, not auditor gaps. The auditors performed excellently. The protocol needs the fixes proposed in Part 4 (completion manifest, evidence requirement, distributed PA-05 evaluation) plus the verdict format additions (fix-type classification, emotional arc section, "SHIP WITH FIXES" as a defined category).

---

## APPENDIX: COMPLETE QUESTION INVENTORY WITH SCORES

| ID | Tier | Auditor | CLR | ACT | UNQ | EFF | FE | AVG | Action |
|----|------|---------|-----|-----|-----|-----|----|-----|--------|
| PA-01 | 1 | A | 5 | 5 | 5 | 5 | 5 | 5.0 | KEEP |
| PA-02 | 1 | B | 5 | 4 | 4 | 4 | 5 | 4.4 | KEEP |
| PA-03 | 1 | A | 5 | 5 | 4 | 5 | 5 | 4.8 | KEEP |
| PA-04 | 1 | A | 5 | 4 | 5 | 4 | 4 | 4.4 | KEEP |
| PA-05 | 1 | A | 5 | 5 | 5 | 5 | 5 | 5.0 | KEEP + add cross-validation |
| PA-06 | 2 | B | 5 | 5 | 5 | 4 | 5 | 4.8 | KEEP |
| PA-07 | 2 | B | 4 | 4 | 3 | 4 | 5 | 4.0 | **REMOVE** |
| PA-08 | 2 | B | 5 | 5 | 3 | 4 | 5 | 4.4 | KEEP |
| PA-09 | 2 | C | 4 | 5 | 4 | 5 | 5 | 4.6 | KEEP |
| PA-10 | 2 | C | 5 | 4 | 4 | 4 | 5 | 4.4 | **REMOVE** |
| PA-11 | 2 | C | 5 | 3 | 5 | 4 | 5 | 4.4 | KEEP |
| PA-12 | 2 | D | 5 | 4 | 4 | 4 | 5 | 4.4 | KEEP |
| PA-13 | 2 | D | 5 | 5 | 5 | 5 | 5 | 5.0 | KEEP |
| PA-14 | 2 | E | 5 | 5 | 5 | 4 | 5 | 4.8 | KEEP |
| PA-15 | 2 | E | 5 | 5 | 5 | 4 | 5 | 4.8 | KEEP |
| PA-16 | 2 | F | 5 | 5 | 5 | 4 | 5 | 4.8 | KEEP |
| PA-17 | 2 | F | 5 | 5 | 5 | 5 | 5 | 5.0 | KEEP (T1 EQ) |
| PA-18 | 2 | G | 5 | 4 | 5 | 4 | 5 | 4.6 | KEEP |
| PA-19 | 2 | G | 5 | 5 | 5 | 5 | 5 | 5.0 | KEEP |
| PA-20 | 2 | G | 4 | 3 | 5 | 3 | 5 | 4.0 | **REWRITE** |
| PA-21 | 3 | H | 5 | 4 | 4 | 4 | 5 | 4.4 | **REMOVE** |
| PA-22 | 3 | H | 5 | 4 | 5 | 4 | 5 | 4.6 | KEEP |
| PA-23 | 3 | H | 5 | 5 | 5 | 4 | 4 | 4.6 | **REWRITE** |
| PA-24 | 3 | I | 4 | 3 | 5 | 2 | 3 | 3.4 | REWRITE (see Part 7) |
| PA-25 | 3 | I | 4 | 3 | 5 | 2 | 4 | 3.6 | REWRITE (see Part 7) |
| PA-26 | 3 | I | 5 | 5 | 5 | 4 | 4 | 4.6 | KEEP |
| PA-27 | 3 | I | 5 | 4 | 5 | 3 | 5 | 4.4 | KEEP |
| PA-28 | 3 | I | 5 | 4 | 5 | 3 | 3 | 4.0 | **REWRITE** |
| PA-29 | 2 | B | 5 | 5 | 5 | 4 | 5 | 4.8 | KEEP |
| PA-30 | 2 | C | 5 | 5 | 4 | 5 | 5 | 4.8 | KEEP |
| PA-31 | 2 | C | 4 | 4 | 4 | 4 | 5 | 4.2 | KEEP |
| PA-32 | 2 | C | 5 | 4 | 4 | 4 | 5 | 4.4 | KEEP |
| PA-33 | 2 | C | 5 | 5 | 4 | 5 | 5 | 4.8 | KEEP |
| PA-34 | 2 | D | 5 | 5 | 4 | 5 | 5 | 4.8 | KEEP |
| PA-35 | 2 | D | 5 | 5 | 5 | 5 | 5 | 5.0 | KEEP |
| PA-36 | 2 | D | 5 | 5 | 5 | 5 | 5 | 5.0 | KEEP |
| PA-37 | 2 | E | 5 | 5 | 5 | 4 | 5 | 4.8 | KEEP |
| PA-38 | 2 | E | 5 | 5 | 5 | 4 | 5 | 4.8 | KEEP |
| PA-39 | 2 | E | 5 | 5 | 5 | 4 | 5 | 4.8 | KEEP |
| PA-40 | 2 | F | 5 | 5 | 5 | 4 | 5 | 4.8 | KEEP |
| PA-41 | 2 | F | 5 | 5 | 5 | 5 | 5 | 5.0 | KEEP (T1 EQ) |
| PA-42 | M | G | 5 | 5 | 5 | 4 | 5 | 4.8 | KEEP |
| PA-43 | M | G | 5 | 5 | 5 | 4 | 5 | 4.8 | KEEP |
| PA-44 | M | G | 5 | 5 | 5 | 5 | 5 | 5.0 | KEEP |
| PA-45 | Q | A | 5 | 4 | 5 | 5 | 5 | 4.8 | KEEP |
| PA-46 | 3 | H | 5 | 5 | 5 | 4 | 5 | 4.8 | KEEP |
| PA-47 | 3 | H | 5 | 5 | 5 | 5 | 5 | 5.0 | KEEP |
| PA-48 | 3 | I | 5 | 5 | 5 | 4 | 5 | 4.8 | KEEP |
| PA-50 | 4 | C | 5 | 5 | 5 | 5 | 5 | 5.0 | KEEP |
| PA-51 | 4 | C | 5 | 5 | 4 | 4 | 4 | 4.4 | Reword to qualitative |
| PA-52 | 4 | C->D | 5 | 5 | 4 | 5 | 5 | 4.8 | MOVE to Auditor D |
| PA-53 | 4 | C | 5 | 5 | 4 | 5 | 5 | 4.8 | KEEP |
| PA-55 | SP | C->B | 5 | 5 | 5 | 5 | 5 | 5.0 | MOVE to Auditor B |
| PA-56 | SP | B | 5 | 5 | 5 | 4 | 5 | 4.8 | KEEP |
| PA-60 | 5 | F | 5 | 5 | 5 | 5 | 5 | 5.0 | KEEP |
| PA-61 | 5 | F | 4 | 4 | 5 | 4 | 5 | 4.4 | KEEP |
| PA-62 | 5 | D | 5 | 5 | 4 | 5 | 5 | 4.8 | KEEP |
| PA-63 | 5 | E | 4 | 4 | 5 | 4 | 4 | 4.2 | **REWRITE** (3 scales) |
| PA-64 | 5 | C | 4 | 4 | 5 | 3 | 5 | 4.2 | KEEP (hardest question) |
| PA-65 | 5 | A | 5 | 5 | 5 | 5 | 5 | 5.0 | KEEP |
| PA-66 | 5 | C | 5 | 5 | 4 | 4 | 5 | 4.6 | KEEP |
| PA-67 | 5 | A | 3 | 3 | 5 | 3 | 5 | 3.8 | **REWRITE** |
| PA-68 | 5 | G | 5 | 5 | 5 | 5 | 5 | 5.0 | KEEP |
| PA-69 | PI | D | 4 | 5 | 4 | 4 | 5 | 4.4 | KEEP |
| PA-70 | PI | D | 5 | 5 | 5 | 5 | 5 | 5.0 | KEEP |

*Tier codes: 1=Tier 1, 2=Tier 2, 3=Tier 3, 4=Tier 4, 5=Tier 5, M=Metaphor, Q=Quality, SP=Sub-Perceptual, PI=Pipeline Integration*

---

## CONCLUSION

The 65-question PA inventory is fundamentally sound. The average score across all questions is 4.6/5.0. The top 16 questions (24.6%) score a perfect 5.0. Only 5 questions (7.7%) score below 4.0, and even the lowest-rated question (PA-67 at 3.8) has genuine diagnostic value.

The most impactful improvements are:
1. **Reduce Auditor C's load** from 14 to 11-12 questions (move PA-52 to D, PA-55 to B, remove PA-10)
2. **Add a PA Execution Manifest** to ensure all questions are answered and evidence-based
3. **Distribute PA-05 cross-validation** across 4 auditors to prevent single-evaluator risk
4. **Rewrite 5 questions** (PA-20, PA-23, PA-28, PA-63, PA-67) for clarity and fresh-eyes compatibility
5. **Add 3 new questions** (PA-71 content-form specificity, PA-72 accessibility, PA-73 coherence direction)
6. **Split the 1,004-line artifact** into 4 focused files + 1 manifest

Total net effect: 65 - 3 removed + 3 added = 65 questions (stable count), redistributed for more even coverage and addressing 5 of 7 identified gaps.

---

*End of PA question quality and coverage audit. 65 questions evaluated on 5 dimensions each (325 individual ratings). 7 coverage gaps identified. 5 rewrites, 3 removals, 3-4 additions proposed. Load rebalancing reduces max from 14 to 11. Three execution verification fixes proposed. Splitting architecture designed.*
