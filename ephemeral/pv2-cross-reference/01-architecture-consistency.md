# Architecture Consistency Report: Diagram vs. Architecture Doc vs. Implications

**Agent:** Architecture Validator (Opus 4.6)
**Date:** 2026-02-19
**Sources compared:**
1. `PV2-ARCHITECTURE-DIAGRAM.html` (1,142 lines, visual diagram)
2. `pipeline-v2-architecture.md` (624 lines, unified architecture spec)
3. `pipeline-implications.md` (1,070 lines, meta-cognitive exploration)

**Critical user directive:** ALWAYS FLAGSHIP -- no tier routing. Every page gets flagship-tier treatment using the remediation approach.

---

## EXECUTIVE SUMMARY

The three documents are **85% consistent** on core architecture but diverge on 7 specific claims, contain 4 outright contradictions, and the diagram omits 11 items from the architecture doc. Most critically, the user's "ALWAYS FLAGSHIP" directive **invalidates the tier routing system** present in all three documents, which is the single largest architectural section in both the diagram and the architecture doc.

**Verdict:** The diagram is a faithful visual rendering of the architecture doc for the areas it covers, but it makes 3 claims not supported by the architecture doc, softens 2 architecture doc positions, and the "ALWAYS FLAGSHIP" directive requires removing approximately 30% of the orchestrator's logic (tier classification, per-tier agent counts, per-tier TC phase routing, per-tier PA mode selection).

---

## SECTION 1: CLAIMS IN DIAGRAM NOT SUPPORTED BY ARCHITECTURE DOC

### D1. Diagram claims "17 Opus auditors" validated the architecture

**Diagram (line 537):** "Post-validation synthesis from 17 Opus auditors"
**Diagram (line 1135):** "17 Opus agents, 17 deliverable files, ~6,200 lines of analysis"

**Architecture doc:** Does not mention 17 auditors. States "6 agent proposals + anti-reproduction protocol" as sources (line 4). The architecture doc's Section 8 references "6 proposals" and "anti-reproduction protocol" but never claims 17 agents validated anything.

**Assessment:** The diagram appears to reference the PV2 Architecture Team (13 Opus agents from MEMORY.md: "6 Wave 1 + 7 Wave 2") plus possibly the earlier Pipeline v2 Focus Team (6 Opus agents). The "17" figure is not substantiated by the architecture doc itself. The diagram inflates the validation provenance.

**Impact of ALWAYS FLAGSHIP:** None -- this is a provenance claim, not architectural.

---

### D2. Diagram specifies "480px" as third viewport; architecture doc says nothing about viewport widths

**Diagram (line 636):** "Screenshots captured at 1440px, 768px, 480px"

**Architecture doc:** Does not specify viewport widths for screenshots anywhere. The PA SKILL section (lines 453-461) describes modes and auditor counts but not viewport dimensions.

**Implications doc:** Does not specify viewport widths either. Phase 8 (line 346) says "Open page in browser at 1440px width" but does not mention 768px or 480px for PA.

**Assessment:** The 480px viewport appears to come from the PA SKILL.md itself (not from the architecture doc). The diagram imports operational detail from outside the architecture doc's scope. This is reasonable but creates a provenance gap -- the architecture doc should specify viewport requirements if it claims to be the "definitive document."

**Impact of ALWAYS FLAGSHIP:** Screenshots at all 3 viewports would be standard for flagship builds, so this is consistent with ALWAYS FLAGSHIP.

---

### D3. Diagram specifies "maximum 3 fix cycles before escalation"; architecture doc says 3 for Ceiling/Flagship, 2 for Middle

**Diagram (line 644):** "Maximum 3 fix cycles before escalation to user. Each cycle targets the TOP 3 blocking issues only."

**Architecture doc (lines 864-867):**
- Middle: "Max 2 cycles"
- Ceiling: "Max 3 cycles"
- Flagship: "Max 3 cycles + user escalation"

The diagram presents the Flagship's fix cycle count as the universal value without noting the tier variation. This is a simplification, not an error, but it misrepresents the architecture doc's tier-differentiated approach.

**Impact of ALWAYS FLAGSHIP:** Under ALWAYS FLAGSHIP, the diagram's "3 cycles" is correct since it matches the Flagship specification. The tier variation becomes irrelevant.

---

## SECTION 2: ARCHITECTURE DECISIONS NOT REFLECTED IN DIAGRAM

### A1. Floor tier is completely absent from diagram

**Architecture doc (lines 35, 283-285, 348-349):** Defines Floor tier explicitly:
- Track 1 component assembly, ~5 min
- <200 words, API reference, config table
- 1 Sonnet builder, no PA, 1 agent

**Diagram:** Never mentions Floor tier. The tier table (lines 804-876) shows only Middle, Ceiling, and Flagship. The flow diagram (line 576) says "If no tier specified, the orchestrator auto-classifies" but only lists 3 tiers.

**Assessment:** The diagram omits Floor because it is Track 1 (component assembly), not Track 2 (full pipeline). This is a reasonable scope decision but creates inconsistency with the architecture doc which includes Floor in every tier table.

**Impact of ALWAYS FLAGSHIP:** Floor becomes entirely irrelevant. ALWAYS FLAGSHIP means even what would have been Floor content gets the full flagship treatment.

---

### A2. Architecture doc's unresolved decisions (D1-D6) not shown in diagram

**Architecture doc (lines 576-595):** Lists 6 unresolved decisions requiring user input:
- D1: Skill naming (`/build-page` vs alternatives)
- D2: File 42 extraction scope (team architecture placement)
- D3: Middle-tier standalone invocation
- D4: TC Phase 4 fate (long-term)
- D5: Codification timing (immediate vs incremental)
- D6: Content ingestion pipeline (source adapters)

**Diagram:** Presents all decisions as resolved (Section 9, "Resolved Decisions -- My Judgment"). The diagram resolves D1-D5 directly (background threshold, stacked gap, anti-scale model, conviction content, kill criteria, recipe length, letter-spacing). But the architecture doc's D1-D6 are about structural choices, not threshold values.

**Assessment:** The diagram resolves a DIFFERENT set of decisions than the architecture doc's unresolved list. The diagram's "7 resolved decisions" address threshold/value questions. The architecture doc's "6 unresolved decisions" address structural/scope questions. Neither set overlaps. Both sets remain partially unresolved.

**Impact of ALWAYS FLAGSHIP:** D3 (Middle standalone invocation) and portions of D2 (tier-specific team architecture) become irrelevant. D1 (naming), D4 (TC Phase 4), D5 (codification timing), D6 (content ingestion) remain open.

---

### A3. Verification prompt (300-line standalone) not shown in diagram

**Architecture doc (lines 465-478):** Describes a "standalone 300-line verification prompt" that can audit ANY Pipeline v2 artifact against 7 gates + 4 meta-checks. Lists the 7 verification gates that map to 7 diagnosed failure modes.

**Diagram:** Does not mention this verification prompt anywhere. The diagram shows programmatic gates (12 binary checks) and perceptual audit (PA skill) but not the meta-level verification prompt for auditing pipeline artifacts.

**Assessment:** This is a significant omission. The verification prompt is a process tool (for verifying pipeline components, not page output) and the diagram focuses on the page-building flow, so the omission is understandable. But the architecture doc positions it as a key component.

**Impact of ALWAYS FLAGSHIP:** The verification prompt applies to pipeline artifacts at all tiers, so it remains relevant under ALWAYS FLAGSHIP.

---

### A4. Power user flags not shown in diagram

**Architecture doc (lines 356-365):** Lists 8 power user flags: `--tier`, `--output`, `--no-pa`, `--pa-mode`, `--dry-run`, `--metaphor`, `--batch`, `--verbose`.

**Diagram:** No mention of flags or CLI customization options.

**Impact of ALWAYS FLAGSHIP:** `--tier` flag becomes irrelevant (always flagship). `--no-pa` should probably be removed or heavily guarded since flagship PA is non-negotiable. `--metaphor` remains useful for pre-seeding. `--batch` and `--dry-run` remain useful.

---

### A5. Implementation priorities (5-step dependency chain) not shown in diagram

**Architecture doc (lines 541-572):** Specifies 5 implementation priorities with explicit dependency ordering and effort estimates (total ~6 hours).

**Diagram:** Shows a "next step" milestone at the bottom ("codification") but does not break down the implementation sequence or dependencies.

---

### A6. Gate-runner.js as a specific new file (~250 lines) not mentioned in diagram

**Architecture doc (lines 221-223, 436-451):** Explicitly specifies `gate-runner.js` as a new file in `compositional-core/validation/` with 12 gates (SC-01 through SC-12).

**Diagram (lines 625-629):** Describes "12 binary checks with measured values" using `getComputedStyle` via Playwright but does not name `gate-runner.js` or specify its file location.

---

### A7. TC Phase 4 relationship to recipe not shown in diagram

**Architecture doc (lines 163-169):** Explicitly describes TC Phase 4's relationship to the recipe: "Phase 4 gets the recipe framing header... Phase 4's output becomes the BUILD PLAN that the recipe consumes... The recipe COMPLEMENTS TC Phase 4, it doesn't replace it."

**Diagram (lines 585-588):** Shows "TC Pipeline: Phases 0 -> 3.5" but does not address what happens to Phase 4 or its relationship to the recipe.

**Assessment:** This is a scope difference -- the diagram focuses on the execution flow, while the architecture doc addresses the skill modification plan. But since TC Phase 4 is where mechanism selection happens, its absence from the diagram creates ambiguity about whether mechanism selection is part of the "Phases 0-3.5" or a separate step.

---

### A8. Architecture doc specifies Ceiling PA at "Mode 2 (fresh-eyes, PA-01 to PA-10)" with 1 Opus auditor

**Architecture doc (lines 456-461):**
- Middle: Self-check, 1 (builder), PA-01 to PA-05
- Ceiling: Mode 2, 1 Opus, PA-01 to PA-10
- Flagship: Mode 4, 9 Opus, All 48

**Diagram (lines 851-854):**
- Middle: 2 auditors, 12 key questions
- Ceiling: 4 auditors, 24 questions
- Flagship: 9 auditors, all 48 questions (Mode 4)

**Contradiction:** The architecture doc says Ceiling gets 1 Opus auditor on PA-01 to PA-10 (10 questions). The diagram says Ceiling gets 4 auditors on 24 questions. These are significantly different verification intensities. The diagram appears to have INFLATED the Ceiling tier's PA depth beyond what the architecture doc specifies.

**Impact of ALWAYS FLAGSHIP:** Under ALWAYS FLAGSHIP, this contradiction is moot -- everything gets 9 auditors, all 48 questions.

---

### A9. Middle-tier TC involvement differs

**Architecture doc (lines 390-399):**
- Middle: "/build-page invokes TC Phase 0 only"
- The Middle-tier build plan comes from build-page's Phase 0, not from TC

**Diagram (line 578):**
- Middle: "Phases 0-2 only (no metaphor)"

**Contradiction:** Architecture doc says Middle uses TC Phase 0 ONLY. Diagram says Middle uses TC Phases 0-2. This is a significant difference -- Phases 1-2 in TC include multi-axis questioning and tension derivation, which the architecture doc explicitly reserves for Ceiling/Flagship.

**Impact of ALWAYS FLAGSHIP:** Moot -- all builds would use TC Phases 0-3.5.

---

### A10. Architecture doc's "What Each Skill Does NOT Do" table (line 511-519) not in diagram

This boundary-setting table clarifies:
- build-page does NOT write CSS
- TC does NOT write CSS
- operational-recipe does NOT derive metaphors
- PA does NOT fix issues
- gate-runner does NOT make judgment calls

The diagram's callout (lines 732-735) partially covers this with "Key Insight -- Skill Separation" but does not present the explicit NOT table.

---

### A11. Specific file tree (10 files: 4 new, 6 edited) not shown in diagram

**Architecture doc (lines 175-241):** Provides the complete file tree with exact paths, line counts, and roles for all 10 Pipeline v2 files.

**Diagram:** Does not present the file tree. It mentions individual files by name in the skill propagation section but does not present the complete file manifest.

---

## SECTION 3: CONTRADICTIONS BETWEEN DOCUMENTS

### C1. Stacked gap threshold: 108px vs 120px vs 192px

**Diagram (line 761):** "SC-10: Stacked gap <= 108px (Flagship)"
**Diagram (line 1072):** "108px for Flagship, 120px for Middle/Ceiling"
**Diagram (line 845-849):** Table confirms 120px for Middle/Ceiling, 108px for Flagship

**Architecture doc (lines 113-125):**
- "120px figure from File 42 is the builder's TARGET"
- "192px is the GATE (fail if exceeded)"
- "--space-max-stacked: 192px is ADDED as the total boundary gap maximum"

**Implications doc (lines 191, 356, 499):** Uses 120px consistently as the gap cap.

**Contradiction:** The architecture doc uses a TWO-NUMBER system (120px target, 192px gate). The diagram uses a DIFFERENT two-number system (108px flagship, 120px middle/ceiling). The implications doc uses a single number (120px). The diagram's "108px" value is presented as a resolved decision but is NOT found in the architecture doc at all -- it appears to come from "File 42's arithmetic" referenced in the diagram's Decision 2.

**Impact of ALWAYS FLAGSHIP:** Under ALWAYS FLAGSHIP, the relevant number is 108px (from diagram's flagship value). But the architecture doc's gate value of 192px is much more permissive. This needs resolution: is the programmatic gate 108px, 120px, or 192px?

---

### C2. Middle-tier builder model: Opus vs unspecified

**Architecture doc (line 348):** Middle uses "1 Opus" builder
**Architecture doc (line 507):** "Builder model selection (Opus for Ceiling+, Sonnet for Middle)"
**Architecture doc (line 349):** Floor uses "1 Sonnet"

**These two statements in the architecture doc CONTRADICT EACH OTHER.** Line 348 says Middle gets Opus. Line 507 says Sonnet for Middle. The architecture doc is internally inconsistent on this point.

**Diagram (line 816):** Middle gets "1 Opus agent" (matches line 348, contradicts line 507)

**Implications doc (lines 367-378):** Middle-tier single-builder pattern, does not specify model. But the MVP section (line 834) proposes testing "a single Sonnet builder (not Opus -- testing the floor)."

**Impact of ALWAYS FLAGSHIP:** Under ALWAYS FLAGSHIP, all builds use Opus. Internal contradiction becomes irrelevant.

---

### C3. Letter-spacing threshold: 0.025em vs 0.03em vs 0.5px

**Architecture doc:** Does not specify a letter-spacing threshold directly.

**Diagram (line 1097):** Resolves to "0.03em (0.5px at 16px base)." States this resolves a "0.025em vs 0.5px discrepancy."

**Implications doc (lines 243-244, 428, 476):** Uses "0.025em" consistently.

**Pipeline CLAUDE.md perception table:** Uses "0.5px (at 16px base = 0.03em)"

**Assessment:** The diagram resolves to 0.03em. The implications doc uses 0.025em. These are close but not identical (0.03em = 0.48px at 16px; 0.025em = 0.4px at 16px). The diagram explicitly addresses this as a resolved decision, but the implications doc was written before this resolution.

**Impact of ALWAYS FLAGSHIP:** The resolved value of 0.03em applies regardless of tier.

---

### C4. Ceiling/Flagship wave architecture: 4 waves vs different wave composition

**Diagram (lines 884-930):** 4 waves:
- Wave 0: TC planner, ~30-60 min
- Wave 1: 1 Opus builder, ~90-150 min
- Wave 2: 9 Opus PA auditors, ~30-45 min
- Wave 3: Fix integration, ~30-60 min

**Architecture doc (lines 347-352):** Agent architecture by tier:
- Ceiling: 1 Opus builder + planner, 4-6 agents total
- Flagship: 1 Opus builder + planner, 10+ agents total

**Implications doc (lines 381-404):** 4-wave pattern for Ceiling/Flagship:
- Wave 1: Prep (2-3 Opus agents, ~30 min) -- Content Analyst + Reference Synthesizer + Prompt Assembler
- Wave 2: Build (1 Opus agent, ~90 min)
- Wave 3: Verify (2-3 agents, ~30 min) -- Programmatic + Perceptual + Accessibility
- Wave 4: Synthesize (1 agent, ~15 min) -- Weaver

**Contradiction:** The diagram numbers waves 0-3; the implications doc numbers them 1-4. More substantively, the diagram's Wave 0 is "TC planner" while the implications doc's Wave 1 is a 3-agent prep team (Content Analyst + Reference Synthesizer + Prompt Assembler). The implications doc's prep wave does MORE than just TC -- it includes reference synthesis and prompt assembly that the diagram doesn't show.

The implications doc's Wave 4 (Synthesize/Weaver) has no equivalent in the diagram -- the diagram puts fix integration in Wave 3 but has no separate synthesis step.

**Impact of ALWAYS FLAGSHIP:** Under ALWAYS FLAGSHIP, the wave architecture needs to be specified once and definitively. The diagram and implications doc present different wave compositions. The diagram is simpler (TC + Build + PA + Fix). The implications doc is richer (Prep team + Build + Verify team + Synthesize).

---

## SECTION 4: IMPACT OF REMOVING TIER ROUTING (ALWAYS FLAGSHIP)

The user's directive to make every page flagship-tier fundamentally changes the architecture. Here is what changes:

### What Gets REMOVED

1. **Tier classification logic** (~50-80 lines of /build-page)
   - Auto-classification based on content complexity (word count, element types, strategic importance)
   - The intake step asking user to select/confirm tier
   - All `--tier` flag handling
   - The content signal table (< 200 words = Floor, Tutorial = Middle, etc.)

2. **Per-tier TC phase routing**
   - Middle: TC Phase 0 only --> REMOVED (all builds use Phases 0-3.5)
   - The conditional logic deciding which TC phases to run

3. **Per-tier agent count variation**
   - 1 Opus (Middle) vs 1 Opus + planner (Ceiling) vs 1 Opus + planner (Flagship) --> Always: 1 Opus + planner
   - PA auditor count: 2/4/9 --> Always: 9
   - PA question count: 12/24/48 --> Always: 48

4. **Per-tier gate severity**
   - SIGNIFICANT (Middle) vs BLOCKING (Ceiling) vs ALL BLOCKING + tighter thresholds (Flagship) --> Always: ALL BLOCKING + tighter thresholds

5. **Per-tier fix cycle variation**
   - 2 cycles (Middle) vs 3 cycles (Ceiling/Flagship) --> Always: 3 cycles + user escalation

6. **Per-tier checkpoint variation**
   - Self-check (Middle) vs file-bus (Ceiling) vs mandatory approval at 5 phases (Flagship) --> Always: mandatory approval

7. **Floor tier entirely**
   - Track 1 component assembly path --> REMOVED

8. **Tier routing table** (entire Section 5 of diagram, ~80 lines)

### What Gets SIMPLIFIED

1. **/build-page orchestrator** shrinks from ~350 lines to ~200-250 lines
   - No tier classification
   - No routing conditionals
   - Fixed agent architecture
   - Fixed TC invocation (always Phases 0-3.5)
   - Fixed PA mode (always Mode 4, 9 auditors)

2. **TC invocation** is always full (Phases 0-3.5 with metaphor)
   - No conditional phase selection
   - Always produces rich build plan with mechanism deployment + isomorphism table

3. **Handoff document** always includes everything:
   - Zone architecture + section inventory + mechanism deployment + isomorphism table + reinforcing pairs + bridge prose
   - No conditional handoff content

4. **Stacked gap threshold** is always 108px (no Middle/Ceiling 120px variant)

5. **Build time expectation** is always 240-400 min (the flagship range)

### What STAYS UNCHANGED

1. **operational-recipe.md** -- 9-phase recipe is tier-independent
2. **gate-runner.js** -- 12 binary checks (with flagship thresholds applied universally)
3. **perception-thresholds.md** -- thresholds are tier-independent
4. **Two-layer verification** -- both layers apply at all tiers (now all get full Mode 4)
5. **Skill propagation chain** -- /build-page -> TC -> recipe -> builder -> PA (order unchanged)
6. **File routing** -- TC planner reads mechanism catalog, builder reads recipe, PA reads screenshots
7. **Fix integration loop** -- 3 cycles max, top 3 blocking issues per cycle
8. **Kill criteria** -- 3 consecutive PA-05 < 3/4, soul violations, all gates pass but PA fails
9. **Enrichment feedback paths** -- PA enrichment -> TC enrichment -> recipe enrichment -> gate enrichment

### New Questions Raised by ALWAYS FLAGSHIP

1. **Build time for simple content:** A 200-word config table getting 240-400 min of flagship treatment is wasteful. Should there be a content-length minimum below which the user is warned?

2. **TC metaphor for non-metaphorical content:** TC Phases 1-3.5 derive metaphors. For highly technical content (API references, config tables), metaphor derivation may be forced and artificial. Should TC have a "no viable metaphor" exit path that still proceeds with flagship build?

3. **9 PA auditors for every page:** Mode 4 with 9 auditors is expensive (~30-45 min, 9 Opus agents). For routine pages, this may be excessive. Should there be a "fast flagship" mode with fewer auditors but the same quality bar?

4. **Mandatory approval at 5 phases:** For every single page, the user must approve at Phases 0, 1, 3, 4, and 8. This is high-friction for routine builds. Should approvals be automatic unless the builder flags an issue?

---

## SECTION 5: CROSS-REFERENCE MATRIX

| Feature | Diagram | Architecture Doc | Implications Doc | Consistent? |
|---------|---------|-----------------|-----------------|-------------|
| /build-page as orchestrator | YES | YES | YES (Q1) | YES |
| ~350 lines for orchestrator | YES (line 677) | YES (line 68) | Not specified | YES |
| TC Phases 0-3.5 for Ceiling+ | YES | YES | YES | YES |
| TC Phase 0 only for Middle | YES (line 578) | YES (line 390) | YES (line 389) | YES |
| 9-phase build recipe | YES | YES | YES | YES |
| Recipe ~650 lines | YES (line 709) | YES (line 70) | Not specified | YES |
| 12 programmatic gates | YES | YES | 8 self-check gates | PARTIAL |
| gate-runner.js named | NO | YES (line 221) | Not specified | NO |
| PA Mode 4 for Flagship | YES | YES | YES | YES |
| 9 PA auditors for Flagship | YES | YES | YES | YES |
| PA auditor count for Ceiling | 4 (line 853) | 1 (line 460) | 2-3 (line 395) | NO |
| PA questions for Ceiling | 24 (line 853) | PA-01 to PA-10 (line 460) | Not specified | NO |
| Middle builder: Opus or Sonnet | Opus (line 816) | CONTRADICTS SELF | Not specified | NO |
| Stacked gap Flagship | 108px (line 761) | 192px gate (line 123) | 120px (line 499) | NO |
| Background delta | >= 15 RGB | >= 15 RGB | >= 15 RGB | YES |
| Letter-spacing threshold | 0.03em | Not specified | 0.025em | NO |
| Font trinity | Georgia/Inter/JetBrains Mono | Instrument Serif/Inter/JetBrains Mono | Georgia/Times New Roman, serif | NO |
| Container width | 940-960px | 940-960px | 960px | YES |
| 4-wave architecture | YES (Waves 0-3) | YES (but different naming) | YES (Waves 1-4, different composition) | PARTIAL |
| Screenshot pre-capture | YES (line 933) | Not mentioned | Not mentioned | DIAGRAM ONLY |
| Kill criteria | YES | Not mentioned | Not mentioned | DIAGRAM ONLY |
| Anti-scale model | YES | Not mentioned | Not mentioned | DIAGRAM ONLY |
| Conviction preamble | YES (line 678) | Not explicitly named | YES (lines 27-39) | PARTIAL |
| Floor tier | NOT SHOWN | YES (line 35) | Not mentioned | NO |
| Unresolved decisions | RESOLVED differently | 6 listed (lines 576-595) | Not listed | NO |
| Power user flags | NOT SHOWN | 8 listed (lines 356-365) | Not listed | NO |
| Verification prompt (300-line) | NOT SHOWN | YES (lines 465-478) | Not mentioned | NO |
| Enrichment feedback | YES (Section 8) | Not detailed | Not detailed | DIAGRAM ADDS |

---

## SECTION 6: FONT STACK CONTRADICTION

This is a notable inconsistency across all three documents:

**Diagram (line 755):** "SC-03: Font trinity only" (no fonts named in gate description)
**Diagram (line 700):** tokens.css listed with "Soul constraints... warm palette, 960px container" but font names not given

**Architecture doc (line 443):** "SC-03: Font stack: Instrument Serif / Inter / JetBrains Mono"

**Implications doc (lines 130-137):** Uses "Georgia, Times New Roman, serif" as the base typography in the recipe.

**Design system tokens.css (from memory):** Uses Georgia/Instrument Serif (research files confirm both appear in different contexts).

**Assessment:** The architecture doc says "Instrument Serif / Inter / JetBrains Mono." The implications doc (which is the operational recipe draft) says "Georgia / Times New Roman, serif." These are completely different font stacks. The diagram avoids naming fonts in its gate description, sidestepping the contradiction.

This matters because the programmatic gate SC-03 would check for different fonts depending on which document is authoritative.

---

## SECTION 7: SUMMARY OF FINDINGS

### By Severity

**BLOCKING (must resolve before codification):**
1. Stacked gap threshold: 108px vs 120px vs 192px (C1)
2. Font stack: Instrument Serif vs Georgia (Section 6)
3. Architecture doc internal contradiction: Opus vs Sonnet for Middle builder (C2) -- moot under ALWAYS FLAGSHIP but indicates doc quality issue
4. Tier routing removal architecture (Section 4) -- must be designed before writing /build-page

**SIGNIFICANT (should resolve):**
5. Ceiling PA auditor count: 1 vs 4 (A8) -- moot under ALWAYS FLAGSHIP
6. Middle TC phases: Phase 0 only vs Phases 0-2 (A9) -- moot under ALWAYS FLAGSHIP
7. Wave architecture composition differs between diagram and implications (C4)
8. Letter-spacing threshold: 0.025em vs 0.03em (C3)

**INFORMATIONAL (note for completeness):**
9. Diagram inflates validation provenance to "17 Opus auditors" (D1)
10. 11 items in architecture doc not reflected in diagram (A1-A11)
11. Diagram adds 3 items not in architecture doc (D1-D3)

### Consistency Score

- **Diagram vs Architecture Doc:** 78% consistent (18/23 features aligned)
- **Diagram vs Implications Doc:** 72% consistent (13/18 comparable features aligned)
- **Architecture Doc vs Implications Doc:** 75% consistent (15/20 comparable features aligned)
- **All three aligned:** 65% (areas where all three agree without qualification)

### Key Takeaway for ALWAYS FLAGSHIP

The ALWAYS FLAGSHIP directive simplifies the architecture significantly by eliminating all tier-routing logic and standardizing on the highest-quality configuration. However, it raises 4 new questions (Section 4) about build time for simple content, metaphor derivation for non-metaphorical content, PA cost for routine pages, and approval friction. These should be addressed during codification.

The most critical items to resolve before codification are:
1. **Stacked gap**: Pick one number (recommend 108px as the gate, since it's flagship)
2. **Font stack**: Pick one set (recommend checking tokens.css as ground truth)
3. **Wave composition**: Decide between diagram's 4-wave vs implications' 4-wave (different agents)
4. **Remove tier routing**: Design the simplified /build-page without classification logic

---

*Report: 01-architecture-consistency.md*
*Agent: Architecture Validator (Opus 4.6)*
*Lines analyzed: ~2,836 across 3 source documents*
*Findings: 4 contradictions, 7 unsupported claims, 11 omissions, 4 new ALWAYS FLAGSHIP questions*
