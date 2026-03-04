# Cross-Reference Integrity Audit: /falls-in-love SKILL.md

**Auditor:** Claude Opus 4.6
**Date:** 2026-03-03
**File:** `~/.claude/skills/falls-in-love/SKILL.md` (1,166 lines)
**Focus:** Internal links, forward/back references, orphaned concepts, circular references, implicit prerequisites, terminology consistency

---

## 1. EXPLICIT CROSS-REFERENCES (Every "see X" / "as described in Y" / "above/below")

### 1.1 "See the universal protocol in the Primacy Rotation section"

This is the most frequently repeated cross-reference in the file (4 occurrences).

| # | Source Line | Context |
|---|------------|---------|
| 1 | 535 | Wave 1 diagnostic override |
| 2 | 714 | Wave 3 diagnostic override |
| 3 | 757 | Wave 4 diagnostic override |
| 4 | 787 | Wave 5 diagnostic override |

**TARGET:** Section header at line 399: `## Primacy Rotation -- Why Reading Order Matters`
**Specific target within:** Line 425: `**Diagnostic override (universal -- applies to all waves with rotation schedules):**`

- **SEVERITY: MEDIUM**
- **ISSUE:** The cross-reference says "the universal protocol in the Primacy Rotation section" but the section header is "Primacy Rotation -- Why Reading Order Matters" and the actual protocol is under a bold paragraph heading, not a subsection header. An agent searching for "universal protocol" would need to scan a long section to find the bolded paragraph at line 425. The phrase "universal protocol" does not appear in any heading.
- **FIX:** Either (a) promote the diagnostic override to its own `###` subsection: `### Diagnostic Override -- Universal Protocol` and update the 4 references to say "See the Diagnostic Override subsection under Primacy Rotation"; or (b) keep as-is but change the 4 references to be more specific: "See **Diagnostic override (universal)** in the Primacy Rotation section (line ~425)." Option (a) is better for searchability.

### 1.2 "the four lenses above" (line 507)

- **SOURCE:** Line 507 (Wave 0): "The agent reads the content 3-4 times through the four lenses above."
- **TARGET:** Lines 321-327 in section "How to Read Content for Spatial Form" -- First reading (Comprehension), Second reading (Spatial Listening), Third reading (Structural Anatomy), Fourth reading (Hypothesis Formation).
- **SEVERITY: LOW**
- **ISSUE:** The reference is valid but the target section does not use the word "lenses." It uses "First reading," "Second reading," "Third reading," "Fourth reading." An agent could find the content, but the terminology mismatch ("lenses" vs. "readings") could cause a moment of confusion. Additionally, "above" is ambiguous given the file length -- the target is approximately 180 lines earlier.
- **FIX:** Change line 507 to: "The agent reads the content 3-4 times through the four readings described in 'How to Read Content for Spatial Form' above (Comprehension, Spatial Listening, Structural Anatomy, Hypothesis Formation)."

### 1.3 "See the loss-detection table above" (line 368)

- **SOURCE:** Line 368 (Seven Cognitive Moves, item 2): "(See the loss-detection table above -- this is the PRIMARY move.)"
- **TARGET:** Lines 351-360 in section "Loss Detection -- The Primary Cognitive Move" -- the table with columns "Content Feature | What is Lost in Single Column | Spatial Form That Preserves It".
- **SEVERITY: LOW (VALID)**
- **ISSUE:** This reference is correct. The target is only ~17 lines above and is easily findable. The target section is explicitly named "Loss Detection" and the table is prominent within it.
- **FIX:** None needed.

### 1.4 "Apply the 10 falsifiable criteria (see Measurement below)" (line 854)

- **SOURCE:** Line 854 (Wave 7, Pass 3-4)
- **TARGET:** Line 993: `## Measurement`, specifically line 995: `### The 10 Falsifiable Criteria`
- **SEVERITY: LOW (VALID)**
- **ISSUE:** This reference is correct. "Measurement" matches the section header exactly. "Below" is directionally accurate (line 854 to line 993). The "10 falsifiable criteria" matches the subsection title "The 10 Falsifiable Criteria."
- **FIX:** None needed.

### 1.5 "Apply the false convergence signals checklist above" (line 1080)

- **SOURCE:** Line 1080 (Anti-Patterns, item 11)
- **TARGET:** Lines 207-215: `### False Convergence Signals`
- **SEVERITY: MEDIUM**
- **ISSUE:** The reference says "checklist" but the target section is titled "False Convergence Signals" and presents 5 numbered warning signs. It is not labeled a "checklist." The word "checklist" is loaded in this document -- the skill explicitly REJECTS checklists as a cognitive pattern (lines 11, 87, 98, 1068). Calling these 5 signals a "checklist" contradicts the skill's own anti-checklist philosophy.
- **FIX:** Change line 1080 from "Apply the false convergence signals checklist above" to "Apply the false convergence signals above (see False Convergence Signals section)."

### 1.6 "the protocol above" (line 941)

- **SOURCE:** Line 941 (How Looking Evolves With Depth): "The protocol above is a minimum."
- **TARGET:** Lines 929-937: `### The Base Protocol (always do these)` -- the 7-item list.
- **SEVERITY: LOW (VALID)**
- **ISSUE:** This reference is valid and the target is only ~12 lines above. "Protocol" matches the subsection title "The Base Protocol."
- **FIX:** None needed.

### 1.7 "the order above" (line 1137)

- **SOURCE:** Line 1137 (Context Window Transition Protocol): "the agent reads in the order above (notebook -> retrospective -> HTML -> research -> content)."
- **TARGET:** Lines 1112-1116: Reading order for new context windows (5-item numbered list).
- **SEVERITY: LOW (VALID)**
- **ISSUE:** Valid reference. The parenthetical summary accurately reproduces the order from lines 1112-1116. Only ~21 lines above.
- **FIX:** None needed.

### 1.8 "Of the seven cognitive moves below" (line 345)

- **SOURCE:** Line 345 (Loss Detection section): "Of the seven cognitive moves below"
- **TARGET:** Lines 365-373: `### Seven Cognitive Moves That Produce Spatial Invention`
- **SEVERITY: LOW (VALID)**
- **ISSUE:** Valid reference. "Seven cognitive moves" matches "Seven Cognitive Moves That Produce Spatial Invention." Directionally correct ("below," ~20 lines ahead).
- **FIX:** None needed.

---

## 2. ORPHANED CONCEPTS (Introduced, referenced elsewhere, never fully defined)

### 2.1 "Grade coupling" (line 816) -- COUPLING GRADES NOT DEFINED UNTIL LATER

- **SEVERITY: MEDIUM**
- **SOURCE:** Line 816 (Wave 6, Passes 1-5 Taste Audit): "Grade coupling."
- **TARGET DEFINITION:** Lines 1015-1025: `### Content-Form Coupling Grades` with INEVITABLE/STRONG/ADEQUATE/GENERIC/ABSENT scale.
- **ISSUE:** The agent is told to "Grade coupling" at Wave 6 (line 816) but the grading scale is defined ~200 lines later in the Measurement section (line 1015). At this point in the build, the agent is at pass 70+. The coupling grading scale has never been introduced before line 816 -- the term "coupling" is used descriptively throughout (e.g., "content-form coupling" at lines 822, 839), but the formal 5-level grading scale appears only in Measurement. An agent reading sequentially through waves would encounter the instruction to "grade coupling" without yet knowing the grading vocabulary.
- **FIX:** Add a forward reference at line 816: "Grade coupling (see Content-Form Coupling Grades under Measurement: INEVITABLE / STRONG / ADEQUATE / GENERIC / ABSENT)."

### 2.2 "The swap test" -- first used descriptively before formal definition

- **SEVERITY: LOW**
- **SOURCE:** Line 114 (Layer 4 of Five Layers): "The swap test. The fresh-eyes question. The adversarial self-question. The pride question."
- **FORMAL DEFINITION:** Line 339 (How to Read Content for Spatial Form): "**The Swap Test:** Take any spatial decision and mentally transplant it to different content. If it survives, it is GENERIC -- push deeper. If it breaks, it is CONTENT-DERIVED -- keep it."
- **ISSUE:** The swap test is first mentioned at line 114 as one of four "blindspot detectors" but is not defined until line 339. The agent encounters the concept 225 lines before the definition. At line 114, the term is presented in a list alongside "the fresh-eyes question," "the adversarial self-question," and "the pride question" -- three concepts that are NEVER formally defined anywhere in the document (see finding 2.3).
- **FIX:** Acceptable as-is for the swap test specifically (it is fully defined at line 339 and referenced correctly elsewhere). However, see finding 2.3 for the other three.

### 2.3 "The fresh-eyes question," "the adversarial self-question," "the pride question" -- NEVER DEFINED

- **SEVERITY: HIGH**
- **SOURCE:** Line 114: "The swap test. The fresh-eyes question. The adversarial self-question. The pride question. These are not evaluation tools -- they are blindspot detectors."
- **PARTIAL DEFINITION OF "the pride question":** Line 816: "The pride question: 'If this were the only page I ever built, would I be proud of it?'"
- **ISSUE:** Three blindspot detectors are introduced at line 114 as if they are known concepts with standard definitions:
  - **"The fresh-eyes question"** -- Never defined anywhere. The concept of "fresh eyes" appears in various places (line 833 "adversarial test: what would someone encountering this page for the first time notice that I cannot?") but "the fresh-eyes question" is never formalized.
  - **"The adversarial self-question"** -- Never formally defined. An "adversarial pass" is described at line 853-854 ("What would someone who disagrees with my approach say?"), and "adversarial test" is mentioned at line 833. But "the adversarial self-question" is not defined as a specific question.
  - **"The pride question"** -- Used at line 816 with its definition ("If this were the only page I ever built, would I be proud of it?") and at line 844. But it is introduced at line 114 without definition, 702 lines before its only definition.
- **FIX:** Define all four blindspot detectors at line 114 when they are first introduced. After line 114, add:
  ```
  - **The swap test:** "If I transplant this spatial decision to different content, does it survive?" If yes, it is generic.
  - **The fresh-eyes question:** "What would someone encountering this page for the first time notice that I cannot?"
  - **The adversarial self-question:** "What would someone who disagrees with my approach say? What would break if I removed my cleverest spatial invention?"
  - **The pride question:** "If this were the only page I ever built, would I be proud of it?"
  ```

### 2.4 "Mechanism catalog" (line 722) -- file name ambiguity

- **SEVERITY: MEDIUM**
- **SOURCE:** Line 722 (Wave 3 exhaustion signal): "Mechanism catalog re-read reveals no un-applied mechanisms that serve this content."
- **PRESUMED TARGET:** The file `mechanisms.md` listed at line 237 and 644.
- **ISSUE:** The document refers to `mechanisms.md` (lines 237, 644, 706, 710) and to `grammar.md` (lines 237, 644, 777, 783) as two separate files. But line 722 says "Mechanism catalog" -- a term that does not appear anywhere else in the skill file. The actual design system file is `design-system/compositional-core/grammar/mechanism-catalog.md` (per CLAUDE.md memory), but the skill consistently calls it `mechanisms.md`. The agent receiving this file might not know that "Mechanism catalog" and `mechanisms.md` are the same thing.
- **FIX:** Change line 722 from "Mechanism catalog re-read" to "`mechanisms.md` re-read" for consistency with the file name used everywhere else in the document.

### 2.5 "5-dimension table" (lines 655, 728) -- reference to case study internals

- **SEVERITY: LOW**
- **SOURCE:** Line 655: "The 5-dimension table is your pattern-matching detector." Also line 728.
- **ISSUE:** The "5-dimension table" is described as being in Section 6 of each case study file (line 655: "Section 6 (Divergence Assignment): Complete the divergence verification for any case study whose spatial approach resembles your own. The 5-dimension table is your pattern-matching detector."). This is a reference to content INSIDE the case study files, not to something defined in the skill file itself. This is acceptable -- the agent will encounter the table when it reads the case studies. However, the skill never defines what the 5 dimensions ARE, creating a forward dependency on external files.
- **FIX:** No change needed for cross-reference integrity, but could add a brief parenthetical: "(the table compares your approach against the case study's across 5 spatial dimensions)" for orientation.

---

## 3. CIRCULAR REFERENCES

### 3.1 No true circular references found.

The document has a consistent forward flow: foundational concepts (Cognitive State, Metacognitive Evaluation) are defined first, then referenced by later sections (Wave descriptions, Looking Protocol, Measurement). No case where Section A says "see Section B" and Section B says "see Section A."

There is one quasi-circular pattern worth noting:

- **The Deepening Test** (line 119) describes checking whether the agent's definition of "good" has deepened.
- **The Definition Journal** (line 133) operationalizes the same concept.
- **Wave-specific staleness signatures** (lines 182-191) reference wave-specific instantiations.
- Each wave's **L5 (Evaluation evolving)** layer (lines 518, 546, 603, 729, 766, 796, 835, 864, 889) re-engages with the deepening test.

This is intentionally recursive, not pathologically circular. The concept deepens at each wave rather than creating an infinite loop.

---

## 4. IMPLICIT PREREQUISITES (Section assumes knowledge defined elsewhere without referencing it)

### 4.1 Wave 5 assumes DD/OD/AD/CD terminology without definition

- **SEVERITY: HIGH**
- **SOURCE:** Line 781: "How DD, OD, and AD mechanisms operate SIMULTANEOUSLY."
- **ISSUE:** The abbreviations DD (Density Dimension), OD (Organization Dimension), AD (Axis Dimension), and CD (Combination Dimension) are used extensively throughout the skill (first appearance: line 138) but are NEVER formally defined/expanded. Their meanings must be inferred from context:
  - DD = Density Dimension (inferred from line 194: "DD staleness" + line 658: "DD case studies")
  - OD = Organization Dimension (inferred from line 195: "OD staleness" + line 659: "OD case studies")
  - AD = Axis Dimension (inferred from line 197: "AD (Axis) staleness" + line 646: "AD case studies")
  - CD = Combination Dimension (inferred from line 196: "CD staleness" + line 660: "CD case studies")

  Line 197 is the ONLY place where AD is parenthetically expanded: "AD (Axis) staleness." The other three abbreviations are never expanded anywhere. An agent encountering "DD+OD+AD" at line 138 (Wave 5 definition of good) has no formal definition to work from.
- **FIX:** Add a brief definitions block near the first usage (after line 138 or at the start of Wave 2). For example, after line 138:
  ```
  *DD = Density Dimension, OD = Organization Dimension, AD = Axis Dimension, CD = Combination Dimension. These are the four spatial quality dimensions explored across R3 (density), R4 (axis), R1+R2 (organization), and R5 (combination), and embodied in the case studies.*
  ```

### 4.2 Wave 3 references "Section 1-6" of case studies without explaining the anti-prescription architecture

- **SEVERITY: LOW**
- **SOURCE:** Lines 651-655: "Section 1 ('NOT A TEMPLATE')," "Section 3 (Tension Derivation)," "Section 4 (The Search in Action)," "Section 5 (Mechanisms vs. Metaphor)," "Section 6 (Divergence Assignment)."
- **ISSUE:** These numbered sections refer to the internal structure of the case study files. The skill mentions "each case study is a complete spatial exploration with anti-prescription architecture" (line 648) but never explains what sections 1-6 actually are in full. Sections 2 is skipped entirely (never mentioned). The agent must discover the structure upon reading the case studies. This is acceptable since the instruction is "read Section 3 first" -- i.e., navigation guidance for external files. But Section 2's omission creates a gap: why is it skipped?
- **FIX:** Add after line 655: "Section 2 (Content-Specific Context) is unique to each case study and provides background. Not listed here because it does not transfer across content."

### 4.3 "4-phase evaluation progression" used in Wave 2 without forward reference to formal definition

- **SEVERITY: MEDIUM**
- **SOURCE:** Lines 619-623: Wave 2 "Pass-level deepening" uses phase labels (STRUCTURAL, INTEGRATION, DEPTH, MASTERY) that are ALSO used in the "4-Phase Evaluation Progression" section at lines 951-960.
- **ISSUE:** There are TWO related but distinct 4-phase systems in the document:
  1. **Per-wave research phases** (first appearing in Wave 2, lines 619-623): STRUCTURAL / INTEGRATION / DEPTH / MASTERY -- describes the agent's relationship with research files.
  2. **4-Phase Evaluation Progression** (lines 951-960): STRUCTURAL / RELATIONAL / COUPLING / POTENTIAL -- describes evaluation depth within any wave.

  Both use "STRUCTURAL" as their first phase, but they are different concepts. Line 962 explicitly addresses this overlap: "How the two phase systems relate" -- but this explanation appears at line 962, which is ~340 lines AFTER Wave 2 first introduces the per-wave phases (line 619). The agent reading Wave 2 encounters STRUCTURAL/INTEGRATION/DEPTH/MASTERY labels without knowing that a DIFFERENT 4-phase system (STRUCTURAL/RELATIONAL/COUPLING/POTENTIAL) exists later.
- **FIX:** Add a note at line 619 or line 623: "Note: these per-wave research phases (STRUCTURAL/INTEGRATION/DEPTH/MASTERY) are distinct from the 4-Phase Evaluation Progression (STRUCTURAL/RELATIONAL/COUPLING/POTENTIAL) described in the Looking Protocol section. The research phases govern HOW you engage with input; the evaluation phases govern WHAT you notice in output. Both operate simultaneously."

### 4.4 Wave 1 assumes agent knows "Wave 0 HTML" exists as a named artifact

- **SEVERITY: LOW**
- **SOURCE:** Line 529: "The content. The Wave 0 HTML."
- **ISSUE:** Wave 0 (lines 503-524) describes building "a rough first draft -- HTML and CSS" (line 507) but never tells the agent to save it as a specific file. The Invocation section (line 53) specifies `_build-final.html` as the output filename. But "Wave 0 HTML" is not a named file -- it is the state of whatever HTML file the agent is building. The implicit assumption is that the agent has been continuously building a single HTML file since Wave 0 and that "Wave 0 HTML" just means "the current state of the build." This is reasonable but could be clearer.
- **FIX:** No change strictly necessary, but for clarity add at the end of Wave 0 (line 524): "Save the current HTML to `{OUTPUT_DIR}/_build.html`. This file will be continuously refined through all subsequent waves."

### 4.5 Screenshot protocol assumes familiarity with Playwright MCP tools

- **SEVERITY: LOW**
- **SOURCE:** Lines 966-989 (Screenshot Protocol): References `browser_resize`, `browser_navigate`, `browser_evaluate`, `browser_take_screenshot`.
- **ISSUE:** The code block uses Playwright MCP tool names that are only available if the agent has access to the Playwright MCP server. The skill does not explicitly state this prerequisite. The Invocation section (line 50) specifies the agent should have `subagent_type: "general-purpose"` but does not mention Playwright access.
- **FIX:** Add before the code block: "Prerequisite: Playwright MCP tools must be available. The spawned agent needs `browser_resize`, `browser_navigate`, `browser_evaluate`, and `browser_take_screenshot` capabilities."

---

## 5. TERMINOLOGY INCONSISTENCIES

### 5.1 CRITICAL: "8 waves" vs. 9 waves (Wave 0 through Wave 8)

- **SEVERITY: CRITICAL**
- **SOURCE:** Line 1146: "100-200 passes across 8 waves."
- **ACTUAL:** The file defines 9 waves: Wave 0, Wave 1, Wave 2, Wave 3, Wave 4, Wave 5, Wave 6, Wave 7, Wave 8 (lines 503, 527, 555, 642, 747, 775, 809, 846, 872).
- **ISSUE:** The Cost section says "8 waves" but the schedule defines 9 waves (0-8). This is a counting discrepancy. The description in the YAML frontmatter (line 4) correctly says "9 waves."
- **FIX:** Change line 1146 from "100-200 passes across 8 waves" to "100-200 passes across 9 waves (Wave 0 through Wave 8)."

### 5.2 HIGH: "slice" vs. "file" vs. "research file" vs. "research slice"

- **SEVERITY: HIGH**
- **SOURCE:** Lines 280, 285, 293, 299, 632.
- **ISSUE:** The section "What '10+ Passes Per Slice' Actually Means" (line 278) introduces the term "slice" to mean a single research file treated as the active lens during a pass cycle. But throughout the rest of the document, the same concept is referred to as:
  - "research slice" (lines 280, 285)
  - "research file" (lines 126, 403, 411, 575)
  - "file" (passim)
  - "primacy file" (lines 413, 458, 593, 594, 602, 1115, 1128)

  The term "slice" appears only in the section that defines it (lines 278-299) and once later at line 632 ("10+ passes per slice"). Everywhere else, "file" or "research file" is used. An agent might not recognize that "slice" and "file" are synonymous without re-reading the section at line 278.
- **FIX:** Either (a) standardize on "file" throughout and rename the section to "What '10+ Passes Per File' Actually Means" with a parenthetical "(also called a 'research slice')"; or (b) add a note at line 280: "A 'slice' is any single research file used as the active lens during a pass cycle. The terms 'slice,' 'file,' and 'primacy file' are used interchangeably."

### 5.3 HIGH: "primacy position" vs. "primacy slot" vs. "primacy turn" vs. "primacy visit"

- **SEVERITY: HIGH**
- **SOURCE:** Multiple lines throughout Primacy Rotation and Wave sections.
- **ISSUE:** Four closely related terms are used for the concept of a file being read first in a pass:
  - **"primacy position"** (lines 403, 406): "every research file gets at least two turns at the primacy position"
  - **"primacy slot"** (nowhere explicitly, but "slot" appears at line 636: "the next 2 primacy slots")
  - **"primacy turn"** (lines 299, 535, 636, 699, 706, 708, 712): "2-3 primacy turns each"
  - **"primacy visit"** (lines 416-418, 626-628): "1st primacy visit: STRUCTURAL"

  Additionally, "at primacy" is used as a state/adjective (lines 421, 428, 429, 432, 559, 576, 577, 593, 594, etc.): "has that file been at primacy."

  These terms overlap but are not quite identical:
  - "Primacy position" = the position in reading order (structural)
  - "Primacy turn" = one instance of a file being at primacy (countable event)
  - "Primacy visit" = the per-file engagement depth tracking concept (carries phase information: 1st/2nd/3rd visit)

  The distinction between "turn" and "visit" is especially confusing. Are they the same? Line 416 defines phases by "primacy visit" (1st, 2nd, 3rd+). Line 699 counts "primacy turns." These appear to be the same thing described with different words.
- **FIX:** Standardize. Proposed terminology:
  - **"primacy turn"** for the countable event (a file getting read first). Use everywhere.
  - **"at primacy"** for the state (a file currently being the primacy file). Keep as-is.
  - Replace all instances of "primacy visit" (lines 416-418, 626-628) with "primacy turn."
  - Replace "primacy position" (line 403, 406) with "primacy turn" or "primacy slot."
  - Define the standard term once in the Primacy Rotation section (line 399 area): "A **primacy turn** is one pass in which a file is read first and receives the highest attention."

### 5.4 MEDIUM: "4-pass neglect threshold" vs. "4-pass neglect rule"

- **SEVERITY: MEDIUM**
- **SOURCE:** Line 409: "The 4-pass neglect rule prevents any file from going unread too long." Line 432: "**The 4-pass neglect threshold:**"
- **ISSUE:** The same concept is called "the 4-pass neglect rule" at line 409 and "The 4-pass neglect threshold" at line 432. These are the same concept with different names.
- **FIX:** Standardize on "4-pass neglect threshold" (the term used at its formal definition point, line 432) and change line 409 from "The 4-pass neglect rule" to "The 4-pass neglect threshold."

### 5.5 MEDIUM: "Definition Journal" vs. "Deepening test journal"

- **SEVERITY: MEDIUM**
- **SOURCE:** Line 133: "**The Definition Journal:**" -- Line 1097: "**Deepening test journal (NEVER prune):**"
- **ISSUE:** The same concept -- writing the one-sentence "definition of good" at the start and end of each wave -- is called "The Definition Journal" at line 133 (in the Metacognitive Evaluation section) and "Deepening test journal" at line 1097 (in the Context Window Management section). These refer to the exact same artifact.
- **FIX:** Standardize on one name. "Definition Journal" is introduced first and is more descriptive. Change line 1097 from "**Deepening test journal (NEVER prune):**" to "**Definition Journal (NEVER prune):**"

### 5.6 MEDIUM: Per-wave research phase labels inconsistency

- **SEVERITY: MEDIUM**
- **SOURCE:** Wave 2 (lines 619-623) uses: STRUCTURAL / INTEGRATION / DEPTH / MASTERY. Wave 3 (lines 739-743) uses: EXTRACTION / TRANSLATION / CONTENT-DEEPENING / COMPOUND VISION / INTERNALIZATION (5 phases, not 4).
- **ISSUE:** Wave 2 has a 4-phase research depth progression. Wave 3 has a 5-phase progression with completely different names. These are NOT the same system extended -- they are different phase models for different waves. This is potentially intentional (different waves have different cognitive demands), but the lack of explicit acknowledgment that these are DIFFERENT models creates confusion. The per-file phase tracking at line 625-628 uses yet another set: STRUCTURAL / INTEGRATION / DEPTH/MASTERY (matching Wave 2), and then line 718 introduces: EXTRACTION / TRANSLATION / CONTENT-DEEPENING (matching Wave 3 but with only 3 phases).
- **FIX:** Add a clarifying note at the start of Wave 3's pass-level deepening (line 738): "Wave 3 uses a different phase model than Wave 2 because case study absorption follows a different cognitive arc (extraction from exemplars vs. application from findings)."

### 5.7 LOW: "cycle" vs. "pass"

- **SEVERITY: LOW**
- **SOURCE:** Passim.
- **ISSUE:** The document carefully defines "one pass = one full cycle" at line 282 and reinforces this equivalence throughout ("each pass is a full build-look-refine cycle"). The terms are used as explicit synonyms. This is GOOD -- the document is consistent about their relationship. However, the description at line 4 says "100-200 passes" while also saying "wave after wave of research absorption, each wave deepening..." -- the term "cycle" in the description refers to the build-look-refine cycle, while in the body, "cycle" and "pass" are interchangeable. No fix needed; noting for completeness.
- **FIX:** None needed. The equivalence is established clearly and maintained.

### 5.8 LOW: "re-enrich" vs. "re-engage"

- **SEVERITY: LOW**
- **SOURCE:** Line 15 uses "Re-enriches." Line 17 uses "Re-enriching." Line 131 uses "enrichment passes." Lines 805/807 use "enrichment and evaluation" / "enrichment and audit."
- **ISSUE:** "Re-enrich" is used in the philosophical introduction (lines 15-17) to describe absorbing new research after building. "Enrichment" appears in section headers (Wave 8: "Final Enrichment"). But Wave 6's header says "Integration" not "Enrichment," and the broader section header says "Post-Wave Enrichment and Audit." The terms "enrich/enrichment/re-enrich" and "integrate/integration" are used somewhat interchangeably for the same concept of deepening the page through additional research or review cycles.
- **FIX:** No fix strictly needed; the terms are close enough. But for pure consistency, the section at line 805 ("Post-Wave Enrichment and Audit") could be renamed "Post-Research Waves" since Waves 6-8 are not all enrichment -- Wave 7 is audit and Wave 6 is integration.

### 5.9 LOW: "decompression zones" vs. "breathing room"

- **SEVERITY: LOW**
- **SOURCE:** Line 564: "decompression zones." Line 610: "Does the page have decompression zones?" Line 601 (in L3 example): "This changes WHERE I put decompression zones." Line 311: Read 2 describes "breathing room" concept.
- **ISSUE:** The concept of sparse, low-density areas in the page is called "decompression zones" (technical term from R3) and informally described as "breathing" or "breathes" (lines 194, 667). These are consistent enough -- "decompression zone" is the formal name, "breathing" is the colloquial description.
- **FIX:** None needed.

### 5.10 LOW: File naming: `_build.html` vs. `_build-final.html`

- **SEVERITY: HIGH**
- **SOURCE:** Line 53: "Output: `{OUTPUT_DIR}/_build-final.html`" -- Line 976: "`browser_navigate to http://localhost:8080/_build.html`"
- **ISSUE:** The output file is defined as `_build-final.html` at line 53 (Invocation section) but the screenshot protocol at line 976 navigates to `_build.html`. These are different filenames. The agent will either save to `_build-final.html` (per line 53) and then fail to screenshot it (because it navigates to `_build.html`), or save to `_build.html` (to match the screenshot protocol) and produce a differently-named final output than specified. This is a functional bug -- the executing agent will encounter a file-not-found situation.
- **FIX:** Standardize. Two options:
  - (a) The build-in-progress file is `_build.html` (used during all waves) and at the very end it is copied/renamed to `_build-final.html`. Add a note at Wave 8 completion: "Copy `_build.html` to `_build-final.html` as the final deliverable."
  - (b) Use `_build.html` everywhere and rename line 53's output to `_build.html`. Simpler. The "final" suffix adds nothing since there is only one HTML file.

  **Recommended:** Option (a) -- the agent works on `_build.html` throughout the build; the final deliverable is `_build-final.html`. Add an instruction to copy at completion. Update line 976 to match or update line 53 to match, and add the copy step.

---

## 6. STRUCTURAL ORGANIZATION ISSUES AFFECTING CROSS-REFERENCE INTEGRITY

### 6.1 "Genuine Exhaustion" defined under "The Wave Schedule" but applies to all waves

- **SEVERITY: MEDIUM**
- **SOURCE:** Lines 477-485: `### Genuine Exhaustion (All 3 Must Be Present)` is a subsection under `## The Wave Schedule`.
- **ISSUE:** This subsection defines the universal exhaustion criteria but is placed as the first subsection of "The Wave Schedule" -- before any specific wave. Individual waves then define their own "Exhaustion signal" (lines 509, 537, 638, 722, 759, 789, 844). The relationship between the universal 3-condition test and the per-wave exhaustion signals is never explicitly stated. Are the per-wave signals ADDITIONAL to the universal 3 conditions, or are they specific instantiations of the universal test? The wave-level signals appear to be instantiations (e.g., "All soul constraints satisfied" for Wave 1 is a form of "the delta profile has stabilized"). But this is implicit.
- **FIX:** Add after line 485: "Each wave's 'Exhaustion signal' below is a wave-specific instantiation of these 3 universal conditions. Both the universal conditions AND the wave-specific signal must hold before moving on."

### 6.2 "Minimum Engagement Per Wave" table says "Passes: 8" but individual waves vary

- **SEVERITY: MEDIUM**
- **SOURCE:** Line 493: "Passes | 8 (varies by wave, see schedule)"
- **ISSUE:** The parenthetical "(varies by wave, see schedule)" is correct, but the "8" default is misleading as a universal minimum. Individual wave minimums are: Wave 0: 8, Wave 1: 10, Wave 2: 12, Wave 3: 12, Wave 4: 8, Wave 5: 8, Wave 6: 15, Wave 7: 8, Wave 8: 5. Wave 8 has a minimum of 5, which is BELOW the "universal minimum" of 8. Wave 6 has 15, nearly double.
- **FIX:** Change line 493 to: "Passes | Varies by wave (5-15, see wave schedule)" or remove the "8" number entirely: "Passes | See individual wave schedules below (Wave 0: 8, Wave 1: 10, Wave 2: 12, etc.)"

---

## 7. SUMMARY TABLE

| # | Finding | Severity | Category |
|---|---------|----------|----------|
| 5.1 | "8 waves" should be "9 waves" | CRITICAL | Terminology |
| 5.10 | `_build.html` vs `_build-final.html` filename mismatch | HIGH | Cross-reference |
| 2.3 | "fresh-eyes question," "adversarial self-question," "pride question" never defined | HIGH | Orphaned concept |
| 4.1 | DD/OD/AD/CD abbreviations never formally expanded | HIGH | Implicit prerequisite |
| 5.2 | "slice" vs "file" vs "research file" inconsistency | HIGH | Terminology |
| 5.3 | "primacy position" / "primacy slot" / "primacy turn" / "primacy visit" inconsistency | HIGH | Terminology |
| 1.1 | "universal protocol in Primacy Rotation section" -- target not easily searchable | MEDIUM | Cross-reference |
| 1.5 | "false convergence signals checklist above" -- uses word "checklist" contradicting skill philosophy | MEDIUM | Cross-reference |
| 2.1 | "Grade coupling" at Wave 6 without forward ref to grading scale | MEDIUM | Orphaned concept |
| 2.4 | "Mechanism catalog" vs `mechanisms.md` name mismatch | MEDIUM | Orphaned concept |
| 4.3 | Two distinct 4-phase systems (research phases vs evaluation phases) share "STRUCTURAL" label without early disambiguation | MEDIUM | Implicit prerequisite |
| 5.4 | "4-pass neglect rule" vs "4-pass neglect threshold" | MEDIUM | Terminology |
| 5.5 | "Definition Journal" vs "Deepening test journal" | MEDIUM | Terminology |
| 5.6 | Wave 2 and Wave 3 have different phase models with no acknowledgment | MEDIUM | Terminology |
| 6.1 | Universal exhaustion vs per-wave exhaustion relationship unstated | MEDIUM | Structural |
| 6.2 | "Minimum passes: 8" in universal table contradicted by Wave 8 (min 5) and Wave 6 (min 15) | MEDIUM | Cross-reference |
| 1.2 | "four lenses above" uses "lenses" but target uses "readings" | LOW | Cross-reference |
| 2.2 | "Swap test" used 225 lines before formal definition | LOW | Orphaned concept |
| 2.5 | "5-dimension table" references case study internals without explaining | LOW | Orphaned concept |
| 4.2 | Case study Section 2 skipped in reading guide without explanation | LOW | Implicit prerequisite |
| 4.4 | "Wave 0 HTML" is not a named file | LOW | Implicit prerequisite |
| 4.5 | Screenshot protocol assumes Playwright MCP without stating prerequisite | LOW | Implicit prerequisite |
| 5.7 | "cycle" vs "pass" (intentionally synonymous, well-maintained) | LOW | Terminology (OK) |
| 5.8 | "re-enrich" vs "integrate" vs "enrichment" (close enough) | LOW | Terminology |
| 5.9 | "decompression zones" vs "breathing" (formal vs informal, consistent) | LOW | Terminology (OK) |

**Totals:** 1 CRITICAL, 5 HIGH, 11 MEDIUM, 8 LOW (25 findings)

---

## 8. CRITICAL PATH FINDINGS (The 3 that most impact execution)

### Priority 1: File name mismatch `_build.html` vs `_build-final.html` (Finding 5.10)

This is the only finding that will cause a RUNTIME FAILURE. The agent will either navigate to a nonexistent file during screenshots or produce output with the wrong filename. Fix immediately.

### Priority 2: "8 waves" count error (Finding 5.1)

The cost section tells the agent to expect 8 waves. The schedule defines 9. An agent that takes the cost section literally might consider itself done after Wave 7, skipping Wave 8 entirely. The description YAML frontmatter correctly says "9 waves" (line 4), creating an internal contradiction within the document itself.

### Priority 3: DD/OD/AD/CD never formally expanded (Finding 4.1)

These abbreviations are used as primary organizational vocabulary throughout the entire 650-line wave schedule (lines 432-894) and in the staleness detectors (lines 194-197) without ever being formally defined. An agent that does not already know what DD/OD/AD/CD stand for will struggle to execute Wave 2 onwards. The implicit assumption is that the agent has access to the design system files where these terms originate, but the skill should be self-contained enough that abbreviations are expanded at least once.
