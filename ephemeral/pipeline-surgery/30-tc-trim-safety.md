# TC Trim Regression Safety Audit

**Auditor role:** Regression Safety Auditor
**Files analyzed:**
- `~/.claude/skills/build-page/SKILL.md` (482 lines, full read)
- `~/.claude/skills/tension-composition/SKILL.md` (2,007 lines, full read)
- `design-system/pipeline/conventions-brief.md` (547 lines, full read)
- `design-system/pipeline/gate-runner.md` (1,159 lines, relevant sections read)

**Methodology:** For each proposed trim, I traced every reference in /build-page's spawn prompts, gate definitions, builder instructions, and downstream files. I evaluated whether the TC agent (running Phases 0-4 in sub-skill mode) actually executes the trimmed content, and whether any downstream consumer depends on it.

---

## TRIM-1: Phase 5+ Content (~318 lines, lines ~1674-2006)

### Proposed removal:
- Phase 5 Output (conventions brief + HTML generation)
- Phase 5 Divergence Verification (case study comparison)
- Edge Cases & Failure Modes
- Stale/Artificial Tension detection
- Test Content Recommendations
- Invocation section
- Appendix: Builder Instruction Warnings (W-DEADZONE etc. full text)
- Appendix: Test Results Summary

### 1. Is it truly orphaned/duplicated/mis-routed?

**PARTIALLY YES, with one critical exception.**

Evidence for orphaned:
- `/build-page` line 37: TC agent prompt says "Follow Phases 0-4 exactly."
- `/build-page` line 49: "Run through Phase 4 (Mechanism Selection). DO NOT proceed to Phase 5 (Compositional Layout)."
- TC SKILL.md line 72: "Exception: Sub-skill mode. When invoked as a sub-skill by /build-page, the TC agent runs Phases 0 through 4 and outputs via Phase 4.5."
- TC SKILL.md line 1629: Phase 4.5 explicitly says "Stop here. Do NOT proceed to Phase 5."

The sub-skill mode gate is explicit and clear. Phase 5+ content is never executed in /build-page mode.

**CRITICAL EXCEPTION: The Builder Warning Appendix (W-DEADZONE through W-IMPLICIT, lines ~1901-1989).**

The warning selection protocol (lines 1978-1989) is referenced by Phase 3.5E (Perceptual Risk Assessment, line 573: "Proceed with builder warnings (see R6)") and Phase 3.5F (Perceptual Cost Assessment, line 598: "Add specific builder warnings for flagged risks"). These references are in Phase 3.5, which IS executed in sub-skill mode. The TC agent reads the warning appendix to determine which warnings to include.

HOWEVER, tracing the full flow:
- TC agent selects warnings during Phase 3.5E/F (executed)
- TC brief output format (Phase 4.5, lines 1631-1670) has 5 sections: STRUCTURAL METAPHOR, ZONE ARCHITECTURE, CONTENT TENSIONS, SELECTED MECHANISMS, METAPHOR-IMPLIED CSS DIRECTIONS
- **The TC brief format has NO section for "Builder Warnings"**
- /build-page's builder spawn prompt (lines 79-122) does NOT mention warnings
- The conventions brief (`conventions-brief.md`) does NOT contain W-DEADZONE, W-OVERLABEL, etc.

**Finding:** The warning content is referenced in executed phases (3.5E/F) but has NO output path. The TC agent may mentally consider warnings during metaphor scoring, but there is no mechanism to pass them to the builder. This is a pre-existing gap, not a regression risk from trimming.

### 2. Does anything in /build-page reference or depend on this content?

| Content | Referenced by /build-page? | Evidence |
|---------|---------------------------|----------|
| Phase 5 Output A/B | NO | /build-page lines 49, 58: "DO NOT proceed to Phase 5" |
| Phase 5 Divergence | NO | TC agent stops at 4.5, divergence is Phase 5 |
| Edge Cases | NO | Not referenced anywhere in /build-page |
| Stale/Artificial Tension | NO | Useful TC-internal guidance, no external reference |
| Test Content Recs | NO | Historical reference only |
| Invocation section | NO | /build-page has its own invocation pattern |
| Builder Warnings (W-*) | **INDIRECT** | Referenced by Phase 3.5E/F (executed), but no output path in TC brief |
| Test Results Summary | NO | Historical reference only |

### 3. Could removing it break an edge case?

**Edge case 1: TC agent invoked directly (not via /build-page).** If a user runs `/tension-composition` directly, the agent needs Phase 5 to produce full output. BUT: direct invocation is documented as a fallback only when /build-page is unavailable. The trim specifically targets /build-page sub-skill mode optimization. If trimming, the direct invocation path breaks.

**Risk assessment:** MODERATE. Direct TC invocation is rare but documented as a valid path. If trimmed, the TC SKILL.md becomes sub-skill-only.

**Edge case 2: Perceptual Risk scoring quality degrades.** Phase 3.5E references builder warnings as an action item ("Proceed with builder warnings"). Without the warning definitions in the file, the TC agent cannot reference them for metaphor scoring. However, the risk scoring criteria (the actual 4-question table at lines 560-567) are in Phase 3.5E itself, NOT in the warning appendix. The warning appendix provides remediation text, not scoring criteria.

**Risk assessment:** LOW. Scoring criteria are in Phase 3.5 (retained). Warning text is remediation guidance (has no output path anyway).

**Edge case 3: Edge Cases & Failure Modes section provides defensive guidance.** The edge cases (lines 1727-1755) cover structureless content, already-visual content, emotionally flat content, zero-tension content, scale problems, and multi-metaphor content. These scenarios ARE handled by Phase 0 (content assessment) and Phase 2 (tension threshold gate), which are both in the retained portion. The edge cases section is a summary/reference, not the implementation.

**Risk assessment:** LOW. Phase 0 and Phase 2 contain the actual routing logic.

### 4. VERDICT: SAFE TO TRIM -- WITH MODIFICATIONS

**Conditions:**
1. **KEEP the Warning Selection Table** (lines 1978-1989, ~12 lines) -- the mapping from risk conditions to warning codes. Move it to the end of Phase 3.5F or Phase 4.5 as a "Warnings to Note" subsection. Without the table, Phase 3.5E/F lose their action reference.
2. **KEEP a 3-line summary of builder warning codes** (W-DEADZONE = dead zone risk, W-OVERLABEL = over-labeling risk, etc.) so the TC agent can include warning codes in the TC brief if it chooses. Alternatively, add a 6th section to the TC brief output format: "BUILDER WARNINGS: [list of applicable W-codes with 1-line descriptions]".
3. **Accept that direct `/tension-composition` invocation will lose Phase 5 capability.** If this is acceptable, trim. If not, the Phase 5 content must be preserved (or moved to a separate file for direct invocation only).
4. The Edge Cases, Stale/Artificial Tension, Test Content Recs, Invocation section, and Test Results Summary are SAFE to remove with zero regression risk.

**Net safe trim (with modifications):** ~280 lines (of 318 proposed). The ~38 lines of warning table + code definitions should be relocated, not deleted.

---

## TRIM-2: Builder Verification Phases (~148 lines)

### Proposed removal:
- Phase 4.7B: Landmark Completeness Gate (lines ~1471-1535)
- Phase 4.8: Section-Aware Composition (lines ~1539-1548)
- Phase 4.9: Tokenization Self-Check (lines ~1550-1624)

### 1. Is it truly orphaned/duplicated/mis-routed?

**Phase 4.7B (Landmark Completeness):**
- This checks header/main/footer HTML presence
- DG-3 in gate-runner.md checks the exact same thing: `header, [role="banner"]` + `main, [role="main"]` + `footer, [role="contentinfo"]`
- DG-3 is part of MG-1 (micro-gate after HTML skeleton) AND GROUP 2 (full gate run)
- /build-page line 204: "DG-3: Landmark completeness -- at least 1 `<header>`..."
- /build-page builder checkpoint 1 (line 98): "header + main + footer present?"
- **TRIPLICATED:** TC SKILL Phase 4.7B, /build-page builder checkpoint 1, AND DG-3 gate runner all check the same thing.

BUT: Phase 4.7B is in the TC skill, which runs BEFORE the builder. The TC agent derives a compositional brief -- it does NOT check HTML output. The TC agent has no HTML to check landmarks on. This phase is **categorically misplaced** -- it instructs the TC agent to verify HTML landmarks that don't exist yet.

**VERDICT on 4.7B:** ORPHANED AND MIS-ROUTED. The TC agent cannot check HTML it hasn't built. The builder has its own checkpoint (line 98), and DG-3 programmatically verifies the output.

**Phase 4.8 (Section-Aware Composition):**
- 10 lines of guidance for handling multi-section content
- References Phase 0C (section identification), which IS executed by TC agent
- This is builder execution guidance ("Preserve structure, apply styling only" for CODE sections)
- The TC agent does NOT build HTML -- it writes a brief

**VERDICT on 4.8:** MIS-ROUTED. This is builder guidance, not TC guidance. The conventions brief already covers this in Section 9 (CREATIVE AUTHORITY) and the process section. The TC agent would only need to note section types in the TC brief's Zone Architecture section, which it already does.

**Phase 4.9 (Tokenization Self-Check):**
- 75 lines of CSS token compliance checking
- Requires counting `var()` references vs raw hex/px values in CSS
- The TC agent writes NO CSS. It outputs a 50-line brief in markdown.
- The builder is the CSS-writing agent

**VERDICT on 4.9:** COMPLETELY MIS-ROUTED. The TC agent has zero CSS to tokenize. This is exclusively builder territory.

### 2. Does anything in /build-page reference or depend on this content?

| Content | Referenced by /build-page? | Evidence |
|---------|---------------------------|----------|
| Phase 4.7B Landmarks | **NO directly.** DG-3 covers this independently. | /build-page line 204 defines DG-3. Builder checkpoint covers it at line 98. |
| Phase 4.8 Section-Aware | **NO.** Not referenced in any /build-page prompt. | Conventions brief handles this guidance for builders. |
| Phase 4.9 Tokenization | **NO.** Not referenced in any /build-page prompt. | Builder has no explicit tokenization gate in /build-page. |

**Hidden dependency check:** Does the TC brief output format (Phase 4.5) reference any output from 4.7B, 4.8, or 4.9?

- Phase 4.5 section 1 (STRUCTURAL METAPHOR): No dependency
- Phase 4.5 section 2 (ZONE ARCHITECTURE): No dependency
- Phase 4.5 section 3 (CONTENT TENSIONS): No dependency
- Phase 4.5 section 4 (SELECTED MECHANISMS): No dependency
- Phase 4.5 section 5 (METAPHOR-IMPLIED CSS DIRECTIONS): No dependency

**ZERO dependencies on Phases 4.7B, 4.8, or 4.9 from the TC brief output format.**

### 3. Could removing it break an edge case?

**Edge case 1: TC agent quality degrades without tokenization awareness.** The TC agent derives metaphors, not CSS. Token awareness is irrelevant to metaphor quality. The TC agent recommends "background color shifts of >=15 RGB" (perceptual direction), not `var(--color-zone-sparse)` (specific token). The builder handles tokenization.

**Risk assessment:** ZERO. TC agent does not write CSS.

**Edge case 2: Phase 4.7B's "WHY THIS MATTERS" rationale (lines 1513-1527) provides useful context.** The explanation about footer importance and narrative closure is genuinely valuable -- but for the BUILDER, not the TC agent. The conventions brief Section 5 (FRACTAL ECHO) and Section 7 (TRANSITION GRAMMAR) cover footer treatment. The builder checkpoint at line 98 explicitly checks "header + main + footer present?"

**Risk assessment:** ZERO for TC agent. The rationale is already available to the builder through other channels.

**Edge case 3: Direct TC invocation.** Same as TRIM-1. If TC is invoked directly to produce full HTML output (Phase 5), then Phase 4.7B might be relevant as a pre-build check. But in sub-skill mode, it is categorically inapplicable.

### 4. VERDICT: SAFE TO TRIM

All three phases (4.7B, 4.8, 4.9) are builder concerns that are misplaced in the TC skill file. They are covered by:
- DG-3 gate (landmark completeness) -- programmatic verification
- /build-page builder checkpoint 1 (line 98) -- builder self-check
- Conventions brief -- builder guidance

**No modifications needed.** Full 148-line trim is safe.

**Recommendation:** If Phase 4.8's section-type awareness (CODE/DATA/NARRATIVE distinction) adds value to the TC brief, consider adding a one-line note to Phase 4.5's Zone Architecture section: "For each zone, note section types (NARRATIVE/CODE/DATA) from Phase 0C." This is ~2 lines, not 148.

---

## TRIM-3: Duplicate Soul Constraints (~120 lines)

### Proposed removal:
- Full color palette hex values repeated from tokens.css
- Border-radius, box-shadow rules repeated from prohibitions.md
- Spacing scale pixel values repeated from tokens.css
- Font family lists repeated from tokens.css

### 1. Is it truly orphaned/duplicated/mis-routed?

**DUPLICATED -- but with a critical dependency question.**

The content in question is in Phase 2, Side B: "KortAI Design System Constraints (LOCKED)" (lines 215-264). This includes:
- Geometry: border-radius: 0, box-shadow: none, filter: drop-shadow() NEVER
- Palette: 6 color hex values
- Typography: 3 font family declarations
- Borders: 3 categories with px values
- Spacing: mathematical scale
- Personality Profile: 8-axis spectrum
- Soul Test: 5 questions

These values ARE duplicated from:
- `compositional-core/identity/prohibitions.md` (geometry, soul test)
- `compositional-core/vocabulary/tokens.css` (palette, typography, spacing)

### 2. Does anything in /build-page reference or depend on this content?

**CRITICAL FINDING:** The /build-page TC agent spawn prompt (lines 37-39) specifies:

```
Read these files IN ORDER:
1. ~/.claude/skills/tension-composition/SKILL.md -- YOUR PROCESS
2. [content-file-path] -- THE CONTENT
3. design-system/compositional-core/grammar/mechanism-catalog.md -- MECHANISM VOCABULARY
```

**The TC agent spawn prompt does NOT tell the TC agent to read prohibitions.md or tokens.css.**

This means:
- The TC agent's ONLY source of soul constraints is SKILL.md itself
- If you remove the constraint values from SKILL.md, the TC agent loses ALL constraint awareness
- The TC agent cannot score metaphor feasibility (Phase 3.5D) without knowing border-radius: 0
- The TC agent cannot assess incompatible metaphor families (Phase 3.5) without knowing constraint values
- The TC agent cannot apply the Perceptual Cost Assessment (Phase 3.5F) without knowing guardrail values

### 3. Could removing it break an edge case?

**This is NOT an edge case -- it is the primary case.** Removing constraint values from the TC skill would cause:

1. **Phase 3.5D Mechanism Feasibility failure:** "Can EVERY metaphor property be expressed using ONLY the system's CSS tools?" cannot be evaluated without knowing what tools exist (border-radius: 0, box-shadow: none, 3 fonts, etc.)

2. **Phase 3.5F Perceptual Cost Assessment failure:** "Does this mapping encourage container width below 940px?" requires knowing the 940px constraint. "Does this mapping encourage padding below 32px?" requires knowing the padding floor.

3. **Incompatible Metaphor Families (lines 496-504) become groundless:** "Organic/Biological: Requires curves, growth patterns. Violates border-radius: 0." Without knowing border-radius: 0, this rejection logic has no basis.

4. **The Addition Test (lines 266-271) weakens:** "Can you fulfill the reader's need by selecting and placing existing design system components?" requires knowing what the design system provides.

5. **Phase 2 tension derivation becomes impossible:** Side B (lines 215-264) IS the design system's "voice" in the tension dialogue. Remove it, and there is no Side B. The entire tension derivation collapses because tension is defined as the opposition between reader needs (Side A) and system constraints (Side B).

### 4. VERDICT: DO NOT TRIM (in current form)

**The TC agent spawn prompt does NOT instruct it to read prohibitions.md or tokens.css.** The constraint values embedded in SKILL.md are the TC agent's ONLY source of constraint awareness. Removing them would break Phases 2, 3, and 3.5 entirely.

**SAFE ALTERNATIVE (if pursued):**

1. **First:** Modify the /build-page TC agent spawn prompt to include prohibitions.md and tokens.css in the read list:
   ```
   Read these files IN ORDER:
   1. ~/.claude/skills/tension-composition/SKILL.md
   2. design-system/compositional-core/identity/prohibitions.md
   3. design-system/compositional-core/vocabulary/tokens.css
   4. [content-file-path]
   5. design-system/compositional-core/grammar/mechanism-catalog.md
   ```

2. **Then:** Replace the ~120 lines of duplicated values in SKILL.md with a ~15-line reference block:
   ```
   ### Side B: KortAI Design System Constraints (read from prohibitions.md + tokens.css)

   Key constraints for tension derivation (full values in prohibitions.md):
   - Geometry: border-radius: 0, box-shadow: none (sharp, flat, angular)
   - Palette: warm cream, near-black, limited accent (narrow temperature range)
   - Typography: 3 fonts only (serif display, sans body, mono code)
   - Borders: 3 weights only (1px, 3px, 4px -- never 2px)
   - Spacing: quantized scale (4px base unit)

   Personality: 75% austere, 95% angular, 85% serious, 100% geometric,
   70% sparse, 80% rigid, 80% formal, 90% restrained

   Soul Test: Magazine yes, Bootstrap no, accent-swap no, serves hierarchy yes, decoration no
   ```

3. **This preserves:** structural descriptions for tension derivation while removing duplicated hex values, px values, and font family strings that may drift from the canonical source.

**UNTIL the /build-page spawn prompt is updated, this trim is UNSAFE.**

---

## TRIM-4: Builder Warning Text (~60 lines)

### Proposed removal:
- Full text of W-DEADZONE, W-OVERLABEL, W-MONOTONY, W-RESPONSIVE, W-STATS, W-IMPLICIT (lines ~1918-1989)
- KEEP: 12-line selection table mapping metaphor risk to warning codes

### 1. Is it truly orphaned/duplicated/mis-routed?

**PARTIALLY -- the warning text has no output path, but it serves as scoring context.**

Flow analysis:
1. TC agent runs Phase 3.5E (Perceptual Risk Assessment) -- references "builder warnings (see R6)"
2. TC agent runs Phase 3.5F (Perceptual Cost Assessment) -- references "Add specific builder warnings for flagged risks"
3. TC agent selects applicable warnings using the selection table (line 1978-1989)
4. TC agent writes TC brief via Phase 4.5 -- **TC brief has NO warnings section**
5. Builder reads TC brief, conventions brief, content -- **conventions brief has NO W-codes**
6. **Warning text is never transmitted to the builder**

The warning CONCEPTS are embedded throughout the conventions brief:
- Dead zone prevention: conventions-brief.md Section 2 (PERCEPTION, stacked gaps > 120px = voids) + Section 7 (TRANSITION GRAMMAR, breathing zones max 48px) + Section 11 (The Scroll, stretches > 120px are voids)
- Over-labeling prevention: conventions-brief.md Section 6 (UNIFIED METAPHOR, "felt, not labeled" + the test: "Remove all text labels")
- Grid monotony: conventions-brief.md Section 3 (RICHNESS, "no single component type > 35%") + Section 5 (FRACTAL ECHO, parametric echo)
- Responsive: conventions-brief.md Section 14 (RESPONSIVE BEHAVIOR)
- Stats bar: NOT in conventions brief (gap)
- Implicit metaphor: conventions-brief.md Section 6 (UNIFIED METAPHOR)

### 2. Does anything in /build-page reference or depend on this content?

| Content | Referenced by /build-page? | Evidence |
|---------|---------------------------|----------|
| W-DEADZONE full text | NO | Not in any /build-page prompt |
| W-OVERLABEL full text | NO | Not in any /build-page prompt |
| W-MONOTONY full text | NO | Not in any /build-page prompt |
| W-RESPONSIVE full text | NO | Not in any /build-page prompt |
| W-STATS full text | NO | Not in any /build-page prompt |
| W-IMPLICIT full text | NO | Not in any /build-page prompt |
| Warning selection table | **INDIRECT** | Referenced by Phase 3.5E/F (executed by TC agent) |

### 3. Could removing it break an edge case?

**Edge case 1: TC agent uses warning text to calibrate metaphor scoring.** When the TC agent reads "This metaphor risks dead zones," it may mentally assess whether the metaphor DOES risk dead zones and factor that into its composite score. Without the warning text, the TC agent still has the Perceptual Risk Assessment table (Phase 3.5E, lines 560-567) which asks "Does this metaphor conceptualize section transitions as CHANGING STATE or EMPTY SPACE?" -- this IS the dead zone detection, independent of the W-DEADZONE text.

**Risk assessment:** LOW. The scoring criteria are in Phase 3.5 (retained). The warning text is remediation guidance for builders, not scoring criteria for TC.

**Edge case 2: Warning text anchors the "Perceptual Cost Assessment" specificity.** Phase 3.5F's cost questions (lines 586-592) are self-contained: "Does this mapping encourage padding below 32px?" does not depend on reading W-DEADZONE. The questions ARE the detection mechanism.

**Risk assessment:** LOW.

**Edge case 3: Core Principle "IMPLICIT > EXPLICIT" (lines 1905-1915) provides valuable TC context.** The principle "Structural embodiment beats textual announcement" is genuinely important for metaphor quality. However, this is already captured in:
- Phase 3.5E risk question 2: "Does this metaphor rely on STRUCTURAL GRADIENTS or TEXTUAL LABELS?"
- Phase 3.5G criterion 3 (Structural Survival): "Remove all labels: metaphor is fully embodied in visual structure alone"
- 6 Binary Rejection Checks R2: "Does the metaphor require visible text labels to communicate?"

**Risk assessment:** ZERO for TC agent. The principle is encoded in scoring criteria.

### 4. VERDICT: SAFE TO TRIM

**Conditions:**
1. **KEEP the Warning Selection Table** (lines 1978-1989, ~12 lines) as proposed. Relocate to end of Phase 3.5F.
2. **KEEP the "IMPLICIT > EXPLICIT" core principle as a 2-line note** in Phase 3.5 (if not already captured by the R2 rejection check and Structural Survival criterion, which it is).
3. The full warning text (W-DEADZONE through W-IMPLICIT definitions, ~48 lines) can be safely removed because:
   - The TC agent has no output path for warning text
   - The builder never receives warning codes from the TC brief
   - The conventions brief covers the same concepts in builder-appropriate language
   - The scoring criteria that detect the underlying risks are all in Phase 3.5 (retained)

**Net safe trim:** ~48 lines of warning definitions. The 12-line selection table is relocated, not deleted.

**Future consideration:** If a 6th TC brief section ("BUILDER WARNINGS") is ever added, the warning definitions would need to exist somewhere the TC agent can reference. Options: (a) add them back to SKILL.md, (b) put them in a separate reference file loaded by the TC agent, (c) rely on the conventions brief's equivalent coverage.

---

## HIDDEN DEPENDENCY MAP

| Trimmed Content | Hidden Dependency | Risk |
|-----------------|-------------------|------|
| Builder Warning Appendix (W-*) | Referenced by Phase 3.5E/F "see R6" pointers | LOW -- scoring criteria are self-contained in 3.5E/F |
| Soul constraints (Side B) | TC agent spawn prompt does NOT load prohibitions.md/tokens.css | **CRITICAL** -- SKILL.md is TC agent's ONLY constraint source |
| Phase 4.7B Landmark Gate | /build-page DG-3 + builder checkpoint 1 | ZERO -- triple-covered |
| Phase 4.9 Tokenization | Builder responsibility, no TC involvement | ZERO -- categorically misplaced |
| Edge Cases section | Phase 0 + Phase 2 contain actual routing logic | LOW -- summary only |
| Phase 5 full output | Direct /tension-composition invocation path | MODERATE -- breaks standalone use |
| Warning Selection Table | Phase 3.5E/F reference it for action items | LOW -- relocate, don't delete |

## EDGE CASES THAT COULD BREAK

1. **CRITICAL: Removing constraint values (TRIM-3) without updating /build-page spawn prompt breaks tension derivation.** The TC agent has no other source of constraint awareness. Phase 2 tension derivation requires Side B (system constraints). Without it, the TC agent cannot identify genuine tension.

2. **MODERATE: Removing Phase 5+ (TRIM-1) breaks standalone `/tension-composition` invocation.** If any user or workflow invokes the TC skill directly (not via /build-page), the skill loses its complete output mode. This may be acceptable if standalone use is deprecated.

3. **LOW: Removing "see R6" references in Phase 3.5E/F without updating the text creates dangling pointers.** After trimming the warning appendix, update line 573 from "Proceed with builder warnings (see R6)" to "Proceed with warnings for flagged risks" or similar.

4. **LOW: Phase 3.5E Responsive Degradation Check (lines 474-494) references "builder warnings (see Appendix R6)".** After trimming, this reference becomes dangling. Update to reference the warning selection table directly or note the risk inline.

---

## OVERALL VERDICT: SAFE WITH MODIFICATIONS

### Summary Table

| Trim | Lines | Verdict | Conditions |
|------|-------|---------|------------|
| TRIM-1 (Phase 5+) | ~318 | **SAFE TO TRIM** | Keep ~38 lines (warning table + code defs), accept standalone TC breakage, update dangling "see R6" refs |
| TRIM-2 (Builder verifications) | ~148 | **SAFE TO TRIM** | No conditions. Full trim is safe. Consider 2-line note about section types. |
| TRIM-3 (Constraint values) | ~120 | **DO NOT TRIM** | UNSAFE until /build-page spawn prompt is updated to load prohibitions.md + tokens.css for TC agent |
| TRIM-4 (Warning text) | ~60 | **SAFE TO TRIM** | Relocate 12-line selection table. Keep or relocate IMPLICIT > EXPLICIT principle (2 lines). |

### Net Reduction

| If all safe trims applied | Lines removed |
|---------------------------|---------------|
| TRIM-1 (with modifications) | ~280 |
| TRIM-2 (full) | ~148 |
| TRIM-3 | 0 (BLOCKED) |
| TRIM-4 (with modifications) | ~48 |
| **Total** | **~476 lines** |

### Remaining TC SKILL.md size: ~1,531 lines (down from ~2,007)

### Pre-requisites Before Trimming

1. **Update dangling references:** Lines 494, 573, 598 reference "R6" or "Appendix R6" or "builder warnings." After TRIM-1 removes the appendix, update these references to point at the relocated warning selection table or inline the relevant guidance.

2. **Relocate warning selection table** (~12 lines) to end of Phase 3.5F.

3. **Decision on standalone TC invocation:** If standalone `/tension-composition` is still supported, Phase 5 content must be preserved or moved to a separate file. If deprecated, TRIM-1 proceeds fully.

4. **TRIM-3 BLOCKER:** Do NOT remove constraint values until the /build-page TC agent spawn prompt is updated to include `prohibitions.md` and `tokens.css` in its read list. This is a /build-page edit, not a TC skill edit. The correct sequence is:
   - Edit /build-page spawn prompt to add prohibitions.md + tokens.css
   - Then replace ~120 lines of constraint values in TC SKILL.md with ~15-line reference block
   - Net additional savings after unblocking: ~105 lines
   - **Revised total with TRIM-3 unblocked: ~581 lines removed, ~1,426 lines remaining**
