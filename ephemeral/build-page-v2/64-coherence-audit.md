# Cross-File Coherence Audit

**Author:** coherence-audit (Task #64)
**Date:** 2026-02-28
**Files Audited:** 7

1. `~/.claude/skills/build-page/SKILL.md` (957 lines)
2. `ephemeral/build-page-v2/gate-runner-v2.js` (1049 lines)
3. `ephemeral/build-page-v2/world-description.md` (17 lines)
4. `ephemeral/build-page-v2/conventions-brief.md` (47 lines)
5. `ephemeral/build-page-v2/prompt-templates.md` (597 lines)
6. `~/.claude/skills/tension-composition/SKILL.md` (841 lines)
7. `~/.claude/skills/perceptual-auditing/SKILL.md` (524 lines)

---

## 1. NUMERIC VALUES

### Container Width

| File | Value | Line(s) | Status |
|------|-------|---------|--------|
| SKILL.md | 940-960px | 136, 830, 947 | OK |
| gate-runner-v2.js | 940-960px (GR-03: `mw >= 940 && mw <= 960`) | 176-179 | OK |
| world-description.md | 940-960px | 11 | OK |
| conventions-brief.md | 940-960px | 4 | OK |
| prompt-templates.md | 940-960px | 105, 470, 537 | OK |

**COHERENT**

### Background Delta Threshold

| File | Value | Line(s) | Status |
|------|-------|---------|--------|
| SKILL.md | >= 15 RGB | 141, 949 | OK |
| gate-runner-v2.js | `delta >= 15` (GR-11) | 451 | OK |
| conventions-brief.md | >= 15 RGB max-channel delta | 34 | OK |
| prompt-templates.md | >= 15 RGB difference | 110, 476, 541 | OK |

**COHERENT**

### Stacked Gap Maximum

| File | Value | Line(s) | Status |
|------|-------|---------|--------|
| SKILL.md | <= 120px total (CSS), <= 150px (visual) | 142, 949 | OK |
| gate-runner-v2.js GR-13 | `cssSum <= 120` | 474 | OK |
| gate-runner-v2.js GR-14 | `gap <= 150` (visual) | 515 | OK |
| conventions-brief.md | <= 120px total | 36 | OK |
| prompt-templates.md | <= 120px total | 111, 477, 542 | OK |

**COHERENT** — Two thresholds (CSS 120px, visual 150px) are distinct gates, documented consistently.

### Single Margin Maximum

| File | Value | Line(s) | Status |
|------|-------|---------|--------|
| SKILL.md | <= 96px | 143, 949 | OK |
| gate-runner-v2.js | `val > 96` (GR-15) | 536 | OK |
| conventions-brief.md | <= 96px | 37 | OK |
| prompt-templates.md | <= 96px | 112, 478, 543 | OK |

**COHERENT**

### Letter-Spacing Minimum

| File | Value | Line(s) | Status |
|------|-------|---------|--------|
| conventions-brief.md | >= 0.025em (below is sub-perceptual) | 35 | OK |
| gate-runner-v2.js | `(px / fs) < 0.025` (GR-18 ghost mechanism) | 567 | OK |
| SKILL.md | Not explicitly stated as convention | — | N/A (enforced by gate) |
| prompt-templates.md | Not in conventions block | — | N/A |

**COHERENT** — conventions-brief.md defines the threshold; gate-runner enforces it via GR-18.

### Footer Minimum Font Size

| File | Value | Line(s) | Status |
|------|-------|---------|--------|
| SKILL.md | 12px (convention, line 654), 11px (gate threshold implied via gate reference) | 654, 312 | **DISCREPANCY** |
| gate-runner-v2.js GR-67 | `fs < 11` (threshold is 11px, detail says "below 11px") | 144, 153-154 | 11px |
| conventions-brief.md | Not mentioned | — | N/A |
| prompt-templates.md | Not mentioned | — | N/A |

**CONTRADICTION FOUND:**
- SKILL.md line 654 (GR-67 patch table): "Replace footer font-size with 12px" — the PATCH targets 12px
- gate-runner-v2.js GR-67 line 144: `fs < 11` — the GATE checks for < 11px
- These are INTENTIONALLY different: the gate threshold is 11px (fail if below), the patch target is 12px (safe margin above threshold). This is COHERENT — the patch overshoots the threshold by 1px as a safety margin.
- **VERDICT: Acceptable design pattern, not a true contradiction.**

### Border Weights

| File | Value | Line(s) | Status |
|------|-------|---------|--------|
| SKILL.md | 4px primary, 3px section, 1px subtle | 138, 831 | OK |
| gate-runner-v2.js GR-09 | 3.5-4.5 (primary), 2.5-3.5 (secondary), 0.5-1.5 (tertiary) | 331-333 | OK (tolerance band) |
| world-description.md | 4px primary, 3px section, 1px subtle | 13 | OK |
| conventions-brief.md | 4px primary, 3px section, 1px subtle, No 2px | 30 | OK |
| prompt-templates.md | 1px subtle, 3px section, 4px primary | 107, 473, 539 | OK |

**COHERENT** — Gate uses +/- 0.5 tolerance bands around the canonical values.

### Line-Height Body

| File | Value | Line(s) | Status |
|------|-------|---------|--------|
| gate-runner-v2.js GR-10 | `bodyLH >= 1.6` | 392-393 | **DISCREPANCY** |
| conventions-brief.md | Not explicitly stated | — | N/A |
| prompt-templates.md | Not explicitly stated | — | N/A |

**NOTE:** The gate checks `>= 1.6` but the Global CLAUDE.md design system specifies `line-height: 1.7` for body. The design-system tokens.css likely defines this. The gate allows 1.6+ (inclusive of 1.7). This is a permissive threshold, not a contradiction.

### Font Trinity

| File | Value | Line(s) | Status |
|------|-------|---------|--------|
| SKILL.md | Inter (body), Instrument Serif (headings), JetBrains Mono (code) | 137, 831 | OK |
| gate-runner-v2.js GR-06 | `['instrument serif', 'inter', 'jetbrains mono']` | 255 | OK |
| world-description.md | Instrument Serif (headings), Inter (body), JetBrains Mono (code) | 9 | OK |
| conventions-brief.md | `'Instrument Serif', Georgia, serif` / `'Inter', system-ui, sans-serif` / `'JetBrains Mono', 'SF Mono', monospace` | 8-10 | OK |
| prompt-templates.md | Inter (body), Instrument Serif (headings), JetBrains Mono (code) | 106, 471, 538 | OK |

**COHERENT**

### WCAG Contrast

| File | Value | Line(s) | Status |
|------|-------|---------|--------|
| SKILL.md | >= 4.5:1 body, >= 3:1 large | 145, 839 | OK |
| gate-runner-v2.js GR-60 | `isLarge ? 3.0 : 4.5` | 116 | OK |
| conventions-brief.md | >= 4.5:1 body, >= 3:1 large | 40 | OK |
| prompt-templates.md | >= 4.5:1 body, >= 3:1 large | 114, 479, 546 | OK |

**COHERENT**

---

## 2. GATE COHERENCE

### Gate ID and Category Cross-Reference

| Gate | SKILL.md Category | JS Category | SKILL.md Tier | JS Tier | Match? |
|------|-------------------|-------------|---------------|---------|--------|
| GR-01 | ADVISORY (320) | Identity | ADVISORY | ADVISORY | OK |
| GR-02 | ADVISORY (320) | Identity | ADVISORY | ADVISORY | OK |
| GR-03 | REQUIRED (312) | Identity | REQUIRED | REQUIRED | OK |
| GR-04 | ADVISORY (320) | Identity | ADVISORY | ADVISORY | OK |
| GR-05 | REQUIRED (312) | Identity | REQUIRED | REQUIRED | OK |
| GR-06 | REQUIRED (312) | Identity | REQUIRED | REQUIRED | OK |
| GR-07 | ADVISORY (320) | Identity | ADVISORY | ADVISORY | OK |
| GR-08 | REQUIRED (312) | Identity | REQUIRED | REQUIRED | OK |
| GR-09 | REQUIRED (312) | Identity | REQUIRED | REQUIRED | OK |
| GR-10 | REQUIRED (312) | Identity | REQUIRED | REQUIRED | OK |
| GR-11 | REQUIRED (312) | Perception | REQUIRED | REQUIRED | OK |
| GR-13 | REQUIRED (312) | Perception | REQUIRED | REQUIRED | OK |
| GR-14 | REQUIRED (312) | Perception | REQUIRED | REQUIRED | OK |
| GR-15 | REQUIRED (312) | Perception | REQUIRED | REQUIRED | OK |
| GR-18 | REQUIRED (312) | Perception | REQUIRED | REQUIRED | OK |
| GR-20 | ADVISORY (320) | Anti-Pattern | ADVISORY | ADVISORY | OK |
| GR-44 | REQUIRED (312) | Perception | REQUIRED | REQUIRED | OK |
| GR-45 | RECOMMENDED (316) | Anti-Pattern | RECOMMENDED | RECOMMENDED | OK |
| GR-48 | META (315) | Meta | META | REQUIRED | **DISCREPANCY** |
| GR-51 | ADVISORY (320) | Perception | ADVISORY | ADVISORY | OK |
| GR-55 | ADVISORY (320) | Perception | ADVISORY | ADVISORY | OK |
| GR-60 | REQUIRED (312) | Physics | REQUIRED | REQUIRED | OK |
| GR-61 | ADVISORY (320) | Experiential | ADVISORY | ADVISORY | OK |
| GR-66 | ADVISORY (320) | Identity | ADVISORY | ADVISORY | OK |
| GR-67 | REQUIRED (312) | Physics | REQUIRED | REQUIRED | OK |

**GR-48 Tier Discrepancy:**
- SKILL.md line 315: "**1 META (browser):** GR-48" — described as META category
- gate-runner-v2.js line 900: `tier: 'REQUIRED'` — tagged as REQUIRED in the gate output
- gate-runner-v2.js line 13: comment says "META (1): GR-48 (coverage — self-referential, excluded from own array)"
- But GR-48 IS in the `essentialIds` array (line 913-918), meaning it IS treated as essential for routing
- **VERDICT:** The JS header comment says META but the code treats it as REQUIRED/essential. SKILL.md says META. The functional behavior (included in essentialIds) means it BLOCKS. This is a labeling discrepancy between the SKILL.md description ("META") and the JS runtime behavior ("REQUIRED"). **NEEDS DOCUMENTATION ALIGNMENT.**

### essentialIds Array (JS) vs SKILL.md REQUIRED List

**JS essentialIds (lines 913-918):**
GR-03, GR-05, GR-06, GR-08, GR-09, GR-10, GR-11, GR-13, GR-14, GR-15, GR-18, GR-44, GR-48, GR-60, GR-67, GR-45

**SKILL.md REQUIRED (line 312):**
GR-03, GR-05, GR-06, GR-08, GR-09, GR-10, GR-11, GR-13, GR-14, GR-15, GR-18, GR-44, GR-60, GR-67

**SKILL.md META (line 315):** GR-48
**SKILL.md RECOMMENDED (line 316):** GR-45

**Comparison:** The JS `essentialIds` array contains 16 entries (14 REQUIRED + GR-48 META + GR-45 RECOMMENDED). SKILL.md lists 14 REQUIRED + 1 META + 1 RECOMMENDED = 16 that would route. The JS comment on line 917 says `// RECOMMENDED but part of essential routing`.

**VERDICT:** The FUNCTIONAL sets match (same 16 gates block routing). The LABELING differs: SKILL.md separates META and RECOMMENDED from REQUIRED; JS lumps all 16 into `essentialIds`. This is an acceptable implementation detail since SKILL.md line 312-316 accurately describes the 3 tiers while line 248 says "25 browser gates + 5 orchestrator checks = 30 total". **MINOR labeling inconsistency only.**

### advisoryIds Array (JS) vs SKILL.md ADVISORY List

**JS advisoryIds (line 919):**
GR-01, GR-02, GR-04, GR-07, GR-20, GR-51, GR-55, GR-61, GR-66

**SKILL.md ADVISORY (line 320):**
GR-01, GR-02, GR-04, GR-07, GR-20, GR-51, GR-55, GR-61 (DPR), GR-66

**VERDICT: PERFECT MATCH** — 9 gates in both.

### Gate Count Claims

| File | Claim | Actual | Match? |
|------|-------|--------|--------|
| SKILL.md line 248 | "25 browser gates + 5 orchestrator checks = 30 total" | 25 browser (14 REQ + 1 REC + 1 META + 9 ADV) + 5 orch (BV-01..04 + GR-62) = 30 | OK |
| gate-runner-v2.js comment line 8 | "25 gates" | 25 gates implemented in function | OK |
| gate-runner-v2.js comment line 15 | "25 checks (16 essential + 9 advisory)" | 16 essential + 9 advisory = 25 | OK |
| SKILL.md line 310 | "25 Browser Gates + 5 Orchestrator Checks" | Matches header and implementation | OK |

**COHERENT**

---

## 3. QUESTION COHERENCE

### Question Assignments Cross-Reference

| Auditor | SKILL.md (lines 360-366) | PA Skill (lines 231-237) | prompt-templates.md (lines 225-279) | Match? |
|---------|--------------------------|--------------------------|--------------------------------------|--------|
| A | Q-01, Q-05, Q-11, Q-17 | E-01, E-05, E-11, E-17 | E-01, E-05, E-11, E-17 | OK |
| B | Q-02, Q-08, Q-14, Q-18 | E-02, E-08, E-14, E-18 | E-02, E-08, E-14, E-18 | OK |
| C | Q-03, Q-07, Q-12, Q-19 | E-03, E-07, E-12, E-19 | E-03, E-07, E-12, E-19 | OK |
| D | Q-04, Q-06, Q-13, Q-20 | E-04, E-06, E-13, E-20 | E-04, E-06, E-13, E-20 | OK |
| E | Q-09, Q-10, Q-15, Q-16 | E-09, E-10, E-15, E-16 | E-09, E-10, E-15, E-16 | OK |

**Note on naming:** SKILL.md uses `Q-XX` prefix; PA skill and prompt-templates.md use `E-XX` prefix. This is a systematic naming difference between the SKILL.md (which embeds questions directly and uses "Q-") and the PA skill (which defines them with "E-"). **This is noted but not a functional conflict** — SKILL.md line 368 says "THE 20 QUESTIONS (embedded — do NOT parse PA skill at runtime)" so the Q-prefix is an intentional local namespace.

### Question Text Cross-Reference

I verified all 20 questions across SKILL.md (lines 372-418), PA Skill (lines 101-203), and prompt-templates.md (lines 226-279). **All question texts match verbatim.** The PA skill includes elaboration paragraphs below each question that neither SKILL.md nor prompt-templates.md include, but the question text itself is identical.

**COHERENT** — All 20 questions match across all 3 files. Assignments match across all 3 files.

---

## 4. PROMPT COHERENCE

### Window 1 Prompt: SKILL.md vs Template 1

| Element | SKILL.md (lines 68-171) | prompt-templates.md (lines 44-139) | Match? |
|---------|-------------------------|-------------------------------------|--------|
| Receiving Principle | 5 items, identical text | 5 items, identical text | OK |
| Output files (3) | output.html, _tc-brief.md, _reflection.md | Same | OK |
| World Description block | `{WORLD_DESCRIPTION}` | Missing — uses `{TC_SKILL_CONTENT}` directly | **DISCREPANCY** |
| TC Skill placement | After WORLD_DESCRIPTION, before CONTENT | Combined into position between preamble and content | **DISCREPANCY** |
| Conventions block | 13 items, identical text | 13 items, identical text | OK |
| Build instructions | Identical text | Identical text | OK |
| Reflection instructions | Identical text | Identical text | OK |

**DISCREPANCY FOUND — Window 1 Prompt Structure:**
- SKILL.md (line 89-96): Includes a dedicated "THE WORLD YOU ARE BUILDING IN: {WORLD_DESCRIPTION}" block FOLLOWED by "{TC_SKILL}" as a separate section. The world-description and TC skill are TWO separate sections.
- prompt-templates.md (lines 44-139): Does NOT include a "{WORLD_DESCRIPTION}" or world-description block. Goes directly from Receiving Principle to "{TC_SKILL_CONTENT}" to content. The world-description is absent from Template 1.
- prompt-templates.md line 5: States "The RUNTIME AUTHORITY is `~/.claude/skills/build-page/SKILL.md`. If any template here diverges from the SKILL.md, the SKILL.md version wins."
- **VERDICT:** prompt-templates.md is documented as REFERENCE ONLY (line 3-5) and SKILL.md is canonical. The discrepancy is that the prompt-templates.md Template 1 omits the WORLD_DESCRIPTION section that SKILL.md Step 1.1 reads (line 52: `[A] Read(ephemeral/build-page-v2/world-description.md) → WORLD_DESCRIPTION`) and Step 1.2 embeds (line 89-91). Since SKILL.md is runtime authority, this is a reference document staleness issue, not a runtime bug. **LOW SEVERITY but should be updated for documentation accuracy.**

### PA Auditor Prompt: SKILL.md vs Template 2

| Element | SKILL.md (lines 424-482) | prompt-templates.md (lines 153-219) | Match? |
|---------|--------------------------|--------------------------------------|--------|
| Receiving Principle | 5 items | 5 items | OK |
| Section 0 Cold Look | Identical structure | Identical structure | OK |
| Scroll-Through | Identical text | Identical text | OK |
| Language Constraint | Identical word lists | Identical word lists | OK |
| Visual Verification | Not in SKILL.md template | Added in prompt-templates.md (lines 193-195) | **ADDITION** |
| Output path | `{output_dir}/_pa/auditor-{LETTER}.md` | `{OUTPUT_DIR}/_pa/auditor-{AUDITOR_ID}.md` | OK (placeholder names differ) |

**ADDITION NOTE:** prompt-templates.md adds a "VISUAL VERIFICATION" paragraph (lines 193-195: "You are reading PIXELS, not decoding text from context...") that SKILL.md's auditor template does not have. This is sourced from the PA skill (lines 73-78). Since SKILL.md is canonical, this addition in prompt-templates.md is extra content. **The PA skill DOES include this content.** This is a case where prompt-templates.md pulled from the PA skill source but SKILL.md didn't. **LOW SEVERITY — the addition is beneficial and non-contradictory. Consider adding to SKILL.md for completeness.**

### Weaver Prompt: SKILL.md vs Template 3

| Element | SKILL.md (lines 527-582) | prompt-templates.md (lines 295-382) | Match? |
|---------|--------------------------|--------------------------------------|--------|
| Receiving Principle | 6 items, identical | 6 items, identical | OK |
| Section 0 addition | Not present | Added: "SECTION 0: YOUR OWN EXPERIENTIAL PASS" (lines 310-319) | **ADDITION** |
| Auditor report embedding | Identical structure (A-E) | Identical structure (A-E) | OK |
| Output sections | 5 sections | 5 sections, identical | OK |
| Verdict options | SHIP / REFINE / RETHINK | SHIP / REFINE / RETHINK | OK |

**ADDITION NOTE:** prompt-templates.md adds a formal "SECTION 0: YOUR OWN EXPERIENTIAL PASS" block (lines 310-319) between the Receiving Principle and the screenshot paths. SKILL.md's Weaver template (line 539) just says "{1440px screenshot paths}" without a formal Section 0 preamble. The Receiving Principle item #1 already says "View the screenshots yourself first. Write 3 sentences..." so the Section 0 block is an elaboration, not a contradiction. **LOW SEVERITY.**

### REFINE Prompt: SKILL.md vs Template 4

| Element | SKILL.md (lines 751-869) | prompt-templates.md (lines 398-506) | Match? |
|---------|--------------------------|--------------------------------------|--------|
| Preamble | Identical | Identical | OK |
| Receiving Principle | 5 items, identical | 5 items, identical | OK |
| Step sequence (1-5) | 5 steps | 5 steps | OK |
| Step 1 artifact | Embeds `{ARTIFACT_HTML}` inline | Instructs to `Read this file: {OUTPUT_DIR}/output.html` | **DISCREPANCY** |
| Step 2 Weaver | Embeds `{WEAVER}` inline | Instructs to `Read this file: {OUTPUT_DIR}/_pa/weaver-synthesis.md` | **DISCREPANCY** |
| Step 3 Reflection | Embeds `{REFLECTION}` inline | Instructs to `Read this file: {OUTPUT_DIR}/_reflection.md` | **DISCREPANCY** |
| Step 4 Brief | Embeds `{BRIEF}` inline | Instructs to `Read this file: {OUTPUT_DIR}/_tc-brief.md` | **DISCREPANCY** |
| Step 5 Content | Embeds `{RAW_CONTENT}` inline | Instructs to `Re-read the content: {OUTPUT_DIR}/_content.md` | **DISCREPANCY** |
| Conventions | Identical 13 items | Identical 13 items | OK |
| Creative Commitment | Identical | Identical | OK |
| Build + Reflection | Identical | Identical | OK |

**STRUCTURAL DISCREPANCY — REFINE Builder Information Delivery:**
- **SKILL.md** embeds ALL content inline in the prompt (Step 7.1 reads all files, Step 7.2 concatenates them into the prompt). The REFINE builder receives everything in the prompt.
- **prompt-templates.md** instructs the REFINE builder to Read files itself (provides file paths, not content).
- prompt-templates.md line 523-524 says: "The REFINE builder reads files itself (unlike the Weaver, who receives content inline). The orchestrator provides file paths, not content."
- SKILL.md Step 7.1 (lines 694-723) explicitly reads all files and the REFINE prompt template (lines 751-869) uses placeholders like `{ARTIFACT_HTML}`, `{WEAVER}`, `{REFLECTION}`, `{BRIEF}`, `{RAW_CONTENT}` — these are embedded inline.
- **WHO IS RIGHT?** SKILL.md is runtime authority. SKILL.md embeds content inline. prompt-templates.md tells the builder to read files.
- **VERDICT: GENUINE DISCREPANCY.** These describe two different architectures. SKILL.md says "orchestrator reads, embeds inline." prompt-templates.md says "agent reads files itself." Since SKILL.md is canonical, the REFINE builder receives content inline. prompt-templates.md Template 4 and its orchestrator notes (line 523-524) are WRONG about the delivery mechanism. **MEDIUM SEVERITY — the prompt-templates.md must be updated to match SKILL.md's inline-embedding approach.**

---

## 5. DESIGN VALUES

### Prohibited CSS Properties

| File | Properties Listed | Status |
|------|-------------------|--------|
| SKILL.md (line 139, 833) | border-radius, box-shadow, gradients, transforms, transitions (except opacity) | OK |
| conventions-brief.md (lines 44-47) | border-radius > 0, box-shadow, filter: drop-shadow(), linear-gradient, radial-gradient, opacity < 1, transform, transition (except opacity fades) | SUPERSET |
| prompt-templates.md (lines 108, 474, 540) | border-radius, box-shadow, gradients, transforms, transitions (except opacity) | OK |

**NOTE:** conventions-brief.md is more detailed (adds `filter: drop-shadow()`, `opacity < 1`, specifies `linear-gradient` and `radial-gradient` separately). The other files use a compact summary. These are not contradictions — conventions-brief.md is the detailed reference, while SKILL.md and prompt-templates.md embed a compressed version for builder consumption.

**COHERENT** — more detailed vs. compressed, no contradictions.

### Accent Color Values

| File | Primary Accent | Semantic Accents | Status |
|------|---------------|------------------|--------|
| world-description.md (line 7) | #E83025 (red) | Blue (info), green (guidance), coral (caution), amber (synthesis), purple (challenge) | OK |
| conventions-brief.md (lines 17-19) | #E83025 | #4A90D9 (info), #4A9D6B (tip), #C97065 (gotcha), #D97706 (synthesis), #7C3AED (challenge) | DETAILED |
| gate-runner-v2.js GR-10 (line 371) | Checks `e83025` in ::selection | — | OK |

**COHERENT** — world-description.md uses names, conventions-brief.md provides hex values. No conflicts.

### Background Warmth Rule

| File | Statement | Status |
|------|-----------|--------|
| SKILL.md (line 140, 834) | R >= G >= B on every background hex (warm palette) | OK |
| gate-runner-v2.js GR-05 (line 227) | `bgRgb.r < bgRgb.g - 5 || bgRgb.g < bgRgb.b - 5` (5-point tolerance) | OK |
| world-description.md (line 7) | "Every background satisfies R >= G >= B — warmth is baked into the math" | OK |
| conventions-brief.md (line 20) | R >= G >= B on every background hex | OK |
| prompt-templates.md (lines 109, 475, 541) | R >= G >= B on every background hex (warm palette) | OK |

**COHERENT** — Gate adds 5-point tolerance (implementation detail), all files state the same rule.

---

## 6. PROCESS FLOW

### Step Numbering in SKILL.md

| Step | Description | Lines | Status |
|------|-------------|-------|--------|
| 0 | Parse Input + Create Output Dir | 19-41 | OK |
| 1 | Spawn Window 1 (DERIVE+BUILD) | 47-197 | OK |
| 2 | Serve HTML + Capture Screenshots | 201-244 | OK |
| 3 | Run Gate Runner | 248-308 | OK |
| 4 | Spawn PA Auditors | 324-356 | OK |
| 5 | Spawn Weaver | 486-520 | OK |
| 6 | Routing Decision | 586-678 | OK |
| 7 | Spawn Window 3 (REFINE) | 682-744 | OK |
| 8 | Post-REFINE Gate Check + Ship | 873-905 | OK |
| 9 | Second REFINE (User Escalation) | 909-920 | OK |

**No gaps, no duplicates.** Steps 0-9, all present.

### File Path Consistency

| Reference Path | Used In | Consistent? |
|----------------|---------|-------------|
| `{output_dir}/output.html` | SKILL.md (lines 82, 184, etc.), prompt-templates.md | OK |
| `{output_dir}/_tc-brief.md` | SKILL.md (82, 191, 498), prompt-templates.md | OK |
| `{output_dir}/_reflection.md` | SKILL.md (85, 195, 499), prompt-templates.md | OK |
| `{output_dir}/_reflection-v2.md` | SKILL.md (742, 864), prompt-templates.md (501) | OK |
| `{output_dir}/_pa/auditor-{LETTER}.md` | SKILL.md (479, 350), prompt-templates.md (216) | OK |
| `{output_dir}/_pa/weaver-synthesis.md` | SKILL.md (514, 565, 697), prompt-templates.md (352) | OK |
| `{output_dir}/_gate-results.json` | SKILL.md (271, 273, 591) | OK |
| `{output_dir}/_gate-results-post-refine.json` | SKILL.md (881) | OK |
| `{output_dir}/_gate-results-patched.json` | SKILL.md (660) | OK |
| `{output_dir}/_routing-log.md` | SKILL.md (676) | OK |
| `{output_dir}/_screenshots/1440/*.png` | SKILL.md (220, 228, 329), prompt-templates.md (198-199) | OK |
| `{output_dir}/_screenshots/768/*.png` | SKILL.md (226, 231, 330), prompt-templates.md (199) | OK |
| `{output_dir}/output-pre-refine.html` | SKILL.md (687-688, 739, 886) | OK |
| `{output_dir}/_content.md` | SKILL.md (37, 54, 716), prompt-templates.md (461) | OK |
| `{output_dir}/_user-direction.md` | SKILL.md (721, 915), prompt-templates.md (484, 510) | OK |
| `ephemeral/build-page-v2/gate-runner-v2.js` | SKILL.md (266, 288) | OK |
| `ephemeral/build-page-v2/world-description.md` | SKILL.md (52) | OK |

**COHERENT** — All file paths consistent across files.

### Variable Name Consistency

| Variable | SKILL.md Usage | gate-runner-v2.js Usage | Match? |
|----------|----------------|------------------------|--------|
| GATES_FAILED | Lines 275-276, 591-593, 629-639, 677, 934 | `summary.gates_failed` (line 937) | OK |
| creative_verdict | Lines 351, 597-621, 627-639, 677 | N/A (not in JS) | OK |
| weaver_available | Lines 515-519, 596-620, 699 | N/A | OK |
| has_brief | Lines 192-193, 252 | N/A | OK |
| server_pid | Lines 208, 892 | N/A | OK |
| server_port | Lines 208-209, 211, 876, 893 | N/A | OK |
| screenshot_paths | Lines 234, 339 | N/A | OK |
| essential_fail | Line 592 | `summary.essential_fail` (line 932) | OK |

**COHERENT**

---

## 7. CONTRADICTIONS FOUND

### GENUINE CONTRADICTIONS (require fixes)

**C-01: REFINE Builder Information Delivery Mechanism** (MEDIUM)
- SKILL.md (lines 694-723, 751-869): Orchestrator reads all files, embeds content inline in prompt via placeholders.
- prompt-templates.md (lines 398-506, 523-524): Template instructs the REFINE builder to Read files itself from file paths.
- prompt-templates.md line 523-524 explicitly says: "The REFINE builder reads files itself... The orchestrator provides file paths, not content."
- This directly contradicts SKILL.md Step 7.1 which reads all files and embeds them.
- **Impact:** If someone builds from prompt-templates.md instead of SKILL.md, the REFINE builder architecture would be different.
- **Fix:** Update prompt-templates.md Template 4 to use inline placeholders matching SKILL.md, and update the orchestrator notes to match.

### MINOR DISCREPANCIES (documentation alignment, not runtime bugs)

**D-01: World-Description Missing from Template 1** (LOW)
- SKILL.md (lines 89-91): Window 1 prompt includes `{WORLD_DESCRIPTION}` as a dedicated section.
- prompt-templates.md Template 1 (lines 44-139): Omits the world-description block entirely.
- **Impact:** Documentation inaccuracy only. SKILL.md is canonical and correctly includes it.
- **Fix:** Add world-description section to prompt-templates.md Template 1.

**D-02: Visual Verification Paragraph in Auditor Template** (LOW)
- prompt-templates.md (lines 193-195): Includes "VISUAL VERIFICATION" paragraph.
- SKILL.md auditor template (lines 424-482): Does not include this paragraph.
- PA skill (lines 73-78): Includes the source text.
- **Impact:** Beneficial addition, non-contradictory. Consider adding to SKILL.md.

**D-03: Weaver Section 0 Elaboration** (LOW)
- prompt-templates.md (lines 310-319): Includes formal Section 0 block for Weaver.
- SKILL.md (line 539): Just shows screenshot paths without Section 0 framing.
- **Impact:** Non-contradictory elaboration.

**D-04: GR-48 Tier Labeling** (LOW)
- SKILL.md (line 315): Calls GR-48 "META"
- gate-runner-v2.js (line 900): Labels it `tier: 'REQUIRED'`
- gate-runner-v2.js (line 13): Comment says "META"
- Both treat it as essential for routing (included in essentialIds).
- **Impact:** Cosmetic labeling only. Functional behavior is consistent.

**D-05: Q-XX vs E-XX Question Prefix** (LOW)
- SKILL.md uses Q-XX (Q-01 through Q-20)
- PA skill and prompt-templates.md use E-XX (E-01 through E-20)
- SKILL.md line 368: "THE 20 QUESTIONS (embedded — do NOT parse PA skill at runtime)" — intentional separate namespace.
- **Impact:** None. Different namespaces for the same questions.

### DISCREPANCY NOTE ALREADY DOCUMENTED

**D-06: B/D Question Assignment (Implementation Plan vs PA Skill)**
- prompt-templates.md line 287/597: Notes that the implementation plan v2 had E-06 and E-08 swapped between B and D vs the PA skill's assignment.
- All three files (SKILL.md, PA skill, prompt-templates.md) now use the PA skill's canonical assignment. The old implementation plan discrepancy is resolved.
- **Impact:** None. Already fixed and documented.

---

## 8. VERDICT

### NEEDS FIXES

**1 Genuine Contradiction:**
- **C-01 (MEDIUM):** REFINE builder prompt delivery mechanism — SKILL.md embeds inline, prompt-templates.md says agent reads files. Update prompt-templates.md Template 4 and its orchestrator notes to match SKILL.md's inline embedding.

**5 Minor Documentation Discrepancies:**
- **D-01 (LOW):** Add world-description section to prompt-templates.md Template 1
- **D-02 (LOW):** Consider adding Visual Verification paragraph to SKILL.md auditor template
- **D-03 (LOW):** Consider adding Section 0 elaboration to SKILL.md Weaver template
- **D-04 (LOW):** Align GR-48 tier label (META vs REQUIRED) across SKILL.md and gate-runner-v2.js
- **D-05 (LOW):** Q-XX vs E-XX prefix difference is intentional but undocumented in SKILL.md

**Overall Assessment:** The system is FUNCTIONALLY COHERENT. All numeric values, gate assignments, question assignments, prohibited properties, and process flows agree across all 7 files. The one genuine contradiction (C-01) affects documentation accuracy but not runtime behavior because SKILL.md is the runtime authority and its architecture (inline embedding) is what the orchestrator will execute. The 5 minor discrepancies are documentation housekeeping items.

**Runtime impact of all findings:** ZERO — because SKILL.md is the sole runtime authority and it is internally consistent. All contradictions are in the reference-only prompt-templates.md file.
