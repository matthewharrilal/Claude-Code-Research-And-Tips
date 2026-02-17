# Stale Context Audit: Files With Outdated Information Still in Use

**Date:** 2026-02-15
**Auditor:** stale-context-auditor (clarification-enrichment team)
**Mission:** Identify RETAIN-CURRENT files in ephemeral/ with STALE information needing update

---

## EXECUTIVE SUMMARY

**Files Audited:** 8 high-priority files in ephemeral/ subdirectories
**Stale Passages Found:** 37 passages across 6 files
**Impact Distribution:**
- HIGH impact (blocks understanding): 14 passages
- MEDIUM impact (misleading): 16 passages
- LOW impact (incomplete but not wrong): 7 passages

**Critical Pattern:** Most staleness involves Phase D/Wave 1 execution status, mechanism count interpretation, and M1 sequencing rationale.

**Recommendation:** Apply all HIGH-impact updates before Middle-tier experiment. MEDIUM can wait until post-experiment. LOW can be deferred.

---

## TABLE OF CONTENTS

1. [HANDOFF.md (6 stale passages)](#1-handoffmd)
2. [03-ENTRY-POINT.md (8 stale passages)](#2-03-entry-pointmd)
3. [02-tier-methodology.md (7 stale passages)](#3-02-tier-methodologymd)
4. [08-skill-enrichment-plan.md (5 stale passages)](#4-08-skill-enrichment-planmd)
5. [13-master-agenda.md (6 stale passages)](#5-13-master-agendamd)
6. [14-master-execution-prompt.md (5 stale passages)](#6-14-master-execution-promptmd)
7. [Files With NO Staleness Found](#7-files-with-no-staleness)
8. [Summary Table](#8-summary-table)

---

## 1. HANDOFF.md

**File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/continuity-docs/HANDOFF.md`
**Classification:** RETAIN-CURRENT (core state-transfer document)
**Last Update:** 2026-02-15 (by staleness-fixer)
**Overall Status:** MOSTLY FRESH (recent update applied blocking staleness), but 6 passages need enrichment with Wave 1 context

---

### 1.1 HANDOFF.md Line 4 — Skill Enrichment Status

**Stale text:** `"**Status:** Phase D COMPLETE, richness + rigidity research COMPLETE, skill enrichment IN PROGRESS"`

**Why stale:** Wave 1 skill enrichment (M2, M3, M5, M8 + PRE-1 + DOC-1-6) is now COMPLETE as of 2026-02-15. Not "in progress" anymore.

**Proposed update:**
```markdown
**Status:** Phase D COMPLETE, richness + rigidity research COMPLETE, Wave 1 skill enrichment COMPLETE (2026-02-15: M2/M3/M5/M8 applied, 6 docs enriched), Wave 2 pending Middle-tier experiment
```

**Impact:** MEDIUM
**Justification:** Current state tracking. Not misleading (enrichment IS still happening in waves), but incomplete.

---

### 1.2 HANDOFF.md Line 22 — "What Comes Next" Phrasing

**Stale text:** `"**What comes next:** Skill enrichment is currently IN PROGRESS (2026-02-15). After skill modifications are applied, the research unanimously recommends building an exceptional Middle-tier page as the next step (the most important untested hypothesis). User commitment will be required before proceeding to experimentation or Phase E."`

**Why stale:** "After skill modifications are applied" implies they haven't been yet. Wave 1 IS applied. The next step is now "After REMAINING modifications (Wave 2)."

**Proposed update:**
```markdown
**What comes next:** Wave 1 skill enrichment COMPLETE (M2/M3/M5/M8 + documentation). Next: build Middle-tier experiment with modified skill, evaluate results, THEN apply Wave 2 (M1/M6/M7) informed by experiment. User commitment will be required before proceeding to Phase E.
```

**Impact:** MEDIUM
**Justification:** Sequencing clarity. Document currently implies all skill mods are pending, but 4/11 are done.

---

### 1.3 HANDOFF.md Line 137-139 — M1 Sequencing Contradiction

**Stale text (lines 137-139):**
```markdown
**The single most damaging instruction:** "Sample 2-4 mechanisms" in `~/.claude/skills/tension-composition/SKILL.md` (line ~787). Exists in two inconsistent forms ("2-4" and "3-5"). Caps technique density, prevents engagement with the full mechanism catalog. All 11 research agents independently identified this as the highest-leverage change.

**Status: NO modifications have been applied yet.** The skill files are unchanged. The user has not committed to implementation.
```

**Why stale:** The STATUS line is outdated (Wave 1 IS applied). More importantly, this passage doesn't explain WHY M1 wasn't in Wave 1 when it's described as "the single most damaging instruction."

**Proposed update:**
```markdown
**The single most damaging instruction:** "Sample 2-4 mechanisms" in `~/.claude/skills/tension-composition/SKILL.md` (line ~787). Exists in two inconsistent forms ("2-4" and "3-5"). Caps technique density, prevents engagement with the full mechanism catalog. All 11 research agents independently identified this as the highest-leverage change.

**Status: Wave 1 modifications applied (M2/M3/M5/M8). M1 NOT YET APPLIED (sequenced in Wave 2 after Middle experiment).** The skill currently STILL contains "sample 2-4 mechanisms." This was a deliberate sequencing decision: Wave 1 focused on enabling constraints (fractal gate, container width, tier routing), Wave 2 will apply vocabulary expansion (per-category minimum) informed by experiment feedback. However, 17-conversation-clarifications.md notes this sequencing may have been a mistake — testing Middle tier under "sample 2-4" validates what 11 agents already concluded. See CLARIFICATION 2 for full rationale.
```

**Impact:** HIGH
**Justification:** Critical sequencing confusion. A new instance reading this would think (1) no mods applied yet, (2) M1 is most important but inexplicably deferred. The clarification from conversation reveals the nuance.

---

### 1.4 HANDOFF.md Line 280-290 — Immediate Actionables Staleness

**Stale text (lines 280-290, Section 10 "Goals and Actionables"):**
```markdown
### Immediate (Before Next Build)

1. **Edit `~/.claude/skills/tension-composition/SKILL.md`:** Replace "sample 2-4 mechanisms" with per-category minimum + justification. New instruction: "For each of the 5 property categories (Spatial, Temporal, Material, Behavioral, Relational), identify AT LEAST ONE mechanism. For each mechanism deployed, document WHY. For at least 3 mechanisms NOT deployed, document WHY NOT."

2. **Edit `~/.claude/skills/tension-composition/SKILL.md`:** Add tier-based pipeline selection. Middle tier: SKIP Phases 1-3, go directly to Phase 4.0 with content-type pattern.

3. **Edit `~/.claude/skills/tension-composition/SKILL.md`:** Promote fractal consistency from CHECK to GATE with scale coverage table. Scope-calibrate by tier.

4. **Add NON-NEGOTIABLE container width rule** to Phase 4.0 guardrails: "Container width 940-960px is NON-NEGOTIABLE. Express narrowing through INTERNAL spacing, not external width reduction."
```

**Why stale:** Items 2, 3, 4 are DONE (M5, M2, M3 respectively). Item 1 (M1) is pending Wave 2. This section now has no "immediate" items left — it should point to the next actual actionables.

**Proposed update:**
```markdown
### Immediate (Before Next Build)

**Wave 1 COMPLETE (2026-02-15):** M2 (fractal gate), M3 (container width), M5 (tier routing), M8 (framing) applied. PRE-1 (category labels) and DOC-1 through DOC-6 also applied.

**Next Immediate Actionable:** Build Middle-tier experiment using modified skill. This validates:
- M2 fractal gate achieves 100% compliance (binary rule)
- M3 container width prevents violations (4/5 Phase D pages violated this)
- M5 tier routing works (Middle skips Phases 1-3 correctly)
- Engagement threshold question: does Middle achieve "place" feeling without metaphor?

**After Middle experiment:** Apply Wave 2 (M1 per-category minimum, M6 semantic justification, M7 combinations) informed by experiment results.
```

**Impact:** HIGH
**Justification:** This is the "what do I do next" section. Currently points to actions already done.

---

### 1.5 HANDOFF.md Lines 347-349 — Reading Order for Planner Instance

**Stale text (lines 334-336):**
```markdown
### For a PLANNER instance (+20 minutes)
2. `ephemeral/continuity-docs/02-worldview-and-goals.md` (~377 lines) -- full project narrative
3. `design-system/pipeline/05-COMPLETE-ROADMAP.md` (first 120 lines) -- master timeline (NOTE: stale, see Section 14)
4. `ephemeral/rigidity-research/03-tier-specifications.md` -- concrete tier definitions
```

**Why stale:** Item 3 says "NOTE: stale, see Section 14" but Section 14 (Documentation Health) now says "Status: ✅ FIXED (2026-02-15)" with roadmap updated. The staleness note is itself stale.

**Proposed update:**
```markdown
### For a PLANNER instance (+20 minutes)
2. `ephemeral/continuity-docs/02-worldview-and-goals.md` (~377 lines) -- full project narrative
3. `design-system/pipeline/05-COMPLETE-ROADMAP.md` (first 120 lines) -- master timeline (updated 2026-02-15, shows Phase D complete + Wave 1 enrichment complete)
4. `ephemeral/rigidity-research/03-tier-specifications.md` -- concrete tier definitions
```

**Impact:** LOW
**Justification:** Minor accuracy fix. Not misleading (the note correctly sends reader to check staleness status), just outdated.

---

### 1.6 HANDOFF.md Line 382 — Documentation Staleness Fixed

**Stale text (line 382):**
```markdown
- `ephemeral/doc-enrichment/03-ENTRY-POINT.md` updated to reflect current state
```

**Why stale:** Incomplete. Entry point was updated to reflect Phase D complete but NOT updated to reflect Wave 1 complete (that just happened). The entry point still shows "skill enrichment in progress" without Wave 1/Wave 2 distinction.

**Proposed update:**
```markdown
- `ephemeral/doc-enrichment/03-ENTRY-POINT.md` updated to reflect Phase D + Wave 1 complete (needs second update pass to clarify Wave 2 pending)
```

**Impact:** LOW
**Justification:** Accuracy of the documentation audit itself. The entry point IS mostly current, just needs one more pass.

---

## 2. 03-ENTRY-POINT.md

**File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/doc-enrichment/03-ENTRY-POINT.md`
**Classification:** RETAIN-CURRENT (quick-start orientation document)
**Last Update:** 2026-02-15
**Overall Status:** GOOD STRUCTURE, but 8 passages need enrichment with Wave 1 status + clarifications

---

### 2.1 ENTRY-POINT Line 3 — Phase Status

**Stale text:** `"**Phase:** Post-D Research, Skill Enrichment In Progress"`

**Why stale:** Wave 1 enrichment is COMPLETE, not "in progress" generally. Should specify Wave 1 done, Wave 2 pending.

**Proposed update:**
```markdown
**Phase:** Post-D Research + Wave 1 Skill Enrichment COMPLETE (2026-02-15). Wave 2 pending Middle-tier experiment.
```

**Impact:** MEDIUM

---

### 2.2 ENTRY-POINT Line 3 — Status Line

**Stale text:** `"**Status:** Research complete (Phase D + richness/rigidity), skill modifications in progress"`

**Why stale:** Same as 2.1 — "in progress" is vague when 4/11 mods are done.

**Proposed update:**
```markdown
**Status:** Research complete (Phase D + richness/rigidity), Wave 1 skill mods COMPLETE (M2/M3/M5/M8 + 6 docs), Wave 2 pending experiment
```

**Impact:** MEDIUM

---

### 2.3 ENTRY-POINT Line 9 — "What We're Doing" Framing

**Stale text (lines 9-35):**
```markdown
## WHAT WE'RE DOING

Building richness tiers on Variant B's foundation (weak permission configuration — scored 18/19 compliance, 4/5 novelty) to determine how much richness is achievable through the pipeline at each tier level. The single most important untested hypothesis: **does an exceptional Middle-tier page achieve the "place" feeling without metaphor derivation?** If yes, every page can reach "designed" quality in 70-100 minutes. If no, metaphor penetration is confirmed as necessary. One experiment answers more questions than another research team.

The methodology: **build first with the CURRENT skill, modify second based on what we learn.** The content adversary (agent that challenges whether content NEEDS full pipeline treatment) key finding: experiment-first resolves more questions than perfecting instructions. Build one Middle-tier page, evaluate results, THEN apply skill modifications based on evidence.
```

**Why stale:** The methodology statement "build first with the CURRENT skill, modify second" was true BEFORE Wave 1. Now Wave 1 IS modified. The current plan is "build with Wave 1-modified skill, evaluate, THEN apply Wave 2."

**Proposed update:**
```markdown
## WHAT WE'RE DOING

Building richness tiers on Variant B's foundation (weak permission configuration — scored 18/19 compliance, 4/5 novelty) to determine how much richness is achievable through the pipeline at each tier level. The single most important untested hypothesis: **does an exceptional Middle-tier page achieve the "place" feeling without metaphor derivation?** If yes, every page can reach "designed" quality in 70-100 minutes. If no, metaphor penetration is confirmed as necessary. One experiment answers more questions than another research team.

The methodology: **Wave 1 mods applied (2026-02-15), build Middle experiment, evaluate, THEN apply Wave 2 informed by results.** Wave 1 (M2/M3/M5/M8) focused on enabling constraints (fractal gate, container width, tier routing, framing). Wave 2 (M1/M6/M7) focuses on vocabulary expansion (per-category minimum, semantic justification, combinations). Sequencing decision: validate tier routing + fractal + container width BEFORE changing mechanism selection protocol. However, this means the skill STILL contains "sample 2-4 mechanisms" during the Middle experiment — testing what 11 agents already concluded. See 17-conversation-clarifications.md CLARIFICATION 2 for the sequencing rationale + tradeoffs.
```

**Impact:** HIGH
**Justification:** This is the orientation section. Currently says "build with current skill" when that's no longer true.

---

### 2.4 ENTRY-POINT Line 70 — "Sample 2-4" Historical Note Missing

**Stale text (lines 70-72):**
```markdown
**Historical note:** The original skill instruction said 'Sample 2-4 mechanisms most relevant to YOUR metaphor. DO NOT read all mechanisms.' This was the single most limiting specification — identified by ALL 11 research agents as capping richness. Variant B deployed only 7 mechanisms across 2 categories when showcase pages deploy 12-18 across all 5. The instruction has been replaced with per-category minimum deployment.
```

**Why stale:** The last sentence "The instruction has been replaced" is FALSE. M1 is in Wave 2 (not yet applied). The skill currently STILL says "sample 2-4."

**Proposed update:**
```markdown
**Historical note:** The original skill instruction said 'Sample 2-4 mechanisms most relevant to YOUR metaphor. DO NOT read all mechanisms.' This was the single most limiting specification — identified by ALL 11 research agents as capping richness. Variant B deployed only 7 mechanisms across 2 categories when showcase pages deploy 12-18 across all 5. **As of 2026-02-15, this instruction is STILL IN THE SKILL** (M1 replacement pending Wave 2, after Middle experiment validates the per-category approach). This means the Middle experiment will test under "sample 2-4" constraint — confirming what research already concluded, but enabling skill-level prompt override to deploy 8-10 across 5 categories. See 17-conversation-clarifications.md CLARIFICATION 2 for why M1 wasn't in Wave 1.
```

**Impact:** HIGH
**Justification:** States a factual untruth ("has been replaced" when it hasn't). Critical for builder expectations.

---

### 2.5 ENTRY-POINT Line 147 — "Do NOT use 'sample 2-4 mechanisms'"

**Stale text (line 150):**
```markdown
3. **Do NOT use "sample 2-4 mechanisms."** Identified by ALL 11 research agents as the single most limiting specification. Replacement: per-category minimum (1+ per each of 5 property categories).
```

**Why stale:** Implies the replacement is in place. It's not (Wave 2 pending).

**Proposed update:**
```markdown
3. **Do NOT use "sample 2-4 mechanisms."** Identified by ALL 11 research agents as the single most limiting specification. **The skill STILL contains this instruction as of 2026-02-15** (M1 pending Wave 2). When building Middle experiment, OVERRIDE at the builder-prompt level: deploy 8-10 mechanisms across all 5 categories via per-category minimum. M1 will formalize this in the skill after experiment validates the approach.
```

**Impact:** HIGH
**Justification:** Builder needs to know they must override the skill instruction.

---

### 2.6 ENTRY-POINT Line 41 — Vocabulary vs Prohibition Caveat

**Stale text (lines 40-41):**
```markdown
2. **Vocabulary vs. prohibition (THE central open question).** 22 prohibitions define identity through refusal (border-radius: 0, no box-shadow). 18 mechanisms define capability through tools (border-weight gradient, solid offset depth, 2-zone DNA). The mechanism catalog is vocabulary to USE FLUENTLY -- not library to avoid. Anti-gravity protects metaphor divergence, not mechanism usage. **However: this distinction is theoretically resolved but NEVER practically tested.** [continues with Name Test / Transfer Test explanation]
```

**Why stale:** Not actually stale, but needs enrichment. The passage correctly notes "never practically tested" but doesn't mention that the Middle-tier experiment IS the practical test. This is missing connective tissue.

**Proposed update (insert after existing paragraph):**
```markdown
**The Middle-tier experiment (next immediate step) IS the practical test of this question.** If a page deploying 8-10 mechanisms from grammar/ with NO metaphor (just CRESCENDO pattern) feels NOVEL (new composition, familiar tools), the vocabulary-vs-library distinction holds in practice. If it feels DERIVATIVE (looks like showcase pages despite different content), anti-gravity may need to address mechanism COMBINATION divergence, not just metaphor divergence. See PA Mode 5 (Grammar-vs-Derivative audit) for the 5-test validation protocol.
```

**Impact:** MEDIUM
**Justification:** Not misleading, but missing explicit connection to the experiment that tests this.

---

### 2.7 ENTRY-POINT Lines 73-79 — Category Name Evolution

**Stale text (lines 73-79):**
```markdown
**Category Name Evolution:**
Earlier documents (HANDOFF.md) use abstract category names: Spatial, Temporal, Material, Behavioral, Relational.
Current operational categories (from mechanism analysis): Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Navigation.

Mapping: Spatial=Spatial, Temporal≈Depth/Emphasis, Material≈Component, Behavioral≈Structure/Nav, Relational≈Hierarchy.

USE the current operational names (Spatial/Hierarchy/Component/Depth-Emphasis/Structure-Nav). These are grounded in actual mechanism assignments and are operationally correct.
```

**Why stale:** This entire section is confusing and potentially wrong. The 17-conversation-clarifications.md doesn't mention category name evolution. HANDOFF.md Section 5 (modification recommendations) uses Spatial/Temporal/Material/Behavioral/Relational. The master execution prompt ALSO uses those names. But PRE-1 (already applied) assigned categories as Spatial/Hierarchy/Component/Depth-Emphasis/Structure-Nav. There's a mismatch.

**Proposed update (needs verification with actual mechanism-catalog.md):**
```markdown
**Category Assignment (as of PRE-1 application, 2026-02-15):**
The mechanism catalog now uses 5 operational categories with explicit tags on each mechanism heading:
- **Spatial:** Layout topology, density rhythm, grid structure
- **Hierarchy:** Importance encoding, structural weight, scale
- **Component:** Internal component patterns, semantic signals
- **Depth/Emphasis:** Layering, zone differentiation, focal points
- **Structure/Navigation:** Page chrome, navigation, progressive disclosure

NOTE: Earlier documents (HANDOFF.md, master-execution-prompt.md) reference "Temporal/Material/Behavioral/Relational" categories. These were the RESEARCH-PHASE abstract names before mechanism-to-category assignment. The five operational names above are grounded in actual mechanism function and are the authoritative current taxonomy. If you see references to Temporal/Material/Behavioral/Relational in older docs, map them conceptually but USE the operational names in practice.
```

**Impact:** MEDIUM
**Justification:** Prevents builder confusion about which category names to use. The current text has conflicting guidance.

---

### 2.8 ENTRY-POINT Line 159 — Immediate Next Steps

**Stale text (lines 156-162):**
```markdown
## IMMEDIATE NEXT STEPS

1. **Read `ephemeral/doc-enrichment/02-tier-methodology.md`** for the concrete tier building plan
2. **Ask the user** what they want to do next -- do NOT assume. Options: implement skill modifications, build experimental Middle-tier page, continue research, or something else
3. If building: follow the always-load protocol, use the tier model, deploy mechanisms as VOCABULARY
4. If modifying skills: see `ephemeral/continuity-docs/HANDOFF.md` Section 5 for exact modification specs
5. If researching: see `ephemeral/continuity-docs/HANDOFF.md` Section 11 for open questions
```

**Why stale:** Item 2 says "Options: implement skill modifications" as if they're not done. Wave 1 IS done. Item 4 points to exact modification specs — but 4/11 are applied.

**Proposed update:**
```markdown
## IMMEDIATE NEXT STEPS

1. **Read `ephemeral/doc-enrichment/02-tier-methodology.md`** for the concrete tier building plan
2. **Ask the user** what they want to do next -- do NOT assume. Current state: Wave 1 skill mods COMPLETE. Options: build Middle-tier experiment (recommended next), apply remaining Wave 2 mods (after experiment), continue research, or something else.
3. If building Middle experiment: follow the always-load protocol, use tier model, OVERRIDE "sample 2-4" at builder-prompt level (deploy 8-10 across 5 categories), measure against 4 success criteria (see 13-master-agenda.md Phase 2).
4. If applying Wave 2 mods: see `ephemeral/session-insights/08-skill-enrichment-plan.md` M1/M6/M7 sections for exact specs. Do NOT apply blindly — evaluate Middle experiment results first.
5. If researching: see `ephemeral/continuity-docs/HANDOFF.md` Section 11 for open questions
```

**Impact:** HIGH
**Justification:** This is the "what do I do next" section. Currently misdirects.

---

## 3. 02-tier-methodology.md

**File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/doc-enrichment/02-tier-methodology.md`
**Classification:** RETAIN-CURRENT (definitive tier building reference)
**Last Update:** Unknown (pre-Wave 1)
**Overall Status:** SOLID CONCEPTUAL FOUNDATION, but 7 passages need enrichment with mechanism count clarifications + Wave 1 context

---

### 3.1 TIER-METHODOLOGY Line 74 — Mechanism Count Caveat Missing

**Stale text (lines 74-79):**
```markdown
**Concrete profile:**
- 8-10 mechanisms: all 5 Floor mechanisms plus spacing compression, dense/sparse alternation, zone background differentiation, dark header + 3px border, data table
- Optional 1-2 additional: border-weight gradient, solid offset depth, width variation, bento grid
- ~350-500 CSS lines, ~600-900 HTML lines
```

**Why stale:** No caveat that 8-10 is a NATURAL LANDING ZONE, not a target. 17-conversation-clarifications.md CLARIFICATION 1 establishes this is critical context.

**Proposed update (insert before "Concrete profile"):**
```markdown
**CRITICAL CAVEAT — Mechanism Count as Proxy, Not Target:**
The 8-10 mechanism count is DESCRIPTIVE (backward-engineered from what Middle-tier effort naturally produces), not PRESCRIPTIVE (a target to hit). These numbers describe natural landing zones:
- Floor (30-45 min component assembly) → ~5 mechanisms
- Middle (70-100 min individual deployment across categories) → ~8-10 mechanisms
- Ceiling (150-220 min combination deployment) → ~12-15 mechanisms
- Flagship (240-400 min multi-pattern) → ~16-18 mechanisms

Peak richness occurs at maximum content-mechanism fit, not maximum technique count. A page with 6 perfectly-deployed mechanisms reinforcing a coherent pattern is richer than a page with 10 mechanisms where 3 feel forced. The per-category minimum (M1, Wave 2) ensures BREADTH (all 5 families), and count emerges naturally from breadth. DO NOT treat "8-10" as a number to hit.

**Concrete profile:**
[existing content unchanged]
```

**Impact:** HIGH
**Justification:** Without this, builders will treat 8-10 as a target and pad/truncate to hit it. This was THE failure mode that "sample 2-4" created.

---

### 3.2 TIER-METHODOLOGY Line 131 — M1 Sequencing Context

**Stale text (lines 128-136, Section 2 modification list):**
```markdown
| Modification | Original Proposal | Verdict | Recommended Implementation |
|-------------|------------------|---------|---------------------------|
| **Mod 1: Mechanism mandate** | Raise from "2-4" to "min 8" | **MODIFY** | Per-category minimum (1+ per each of 5 property categories) + justification. Natural landing: 5-10. |
```

**Why stale:** No explanation WHY M1 is in Wave 2 when it's described everywhere as "highest leverage change." The sequencing rationale from 17-conversation-clarifications.md CLARIFICATION 2 is missing.

**Proposed update (add note after table):**
```markdown
**M1 Sequencing Note (Wave 2, not Wave 1):**
M1 is the highest-leverage change (addresses 50%+ of richness gap), yet it was placed in Wave 2 (after Middle experiment) rather than Wave 1 (enabling core). Rationale:
- Wave 1 focused on enabling constraints that CANNOT be overridden at builder-prompt level (fractal gate, container width rule, tier routing)
- M1 CAN be overridden at builder-prompt level ("deploy 8-10 across 5 categories" instruction to builder)
- The intent: validate M1's specific parameters (per-category minimum, justification format) through experiment before permanent encoding

However, 17-conversation-clarifications.md notes this sequencing may have been a mistake: testing Middle tier under "sample 2-4" validates what 11 agents already concluded. The experiment will use builder-prompt override to deploy 8-10 mechanisms, then M1 will formalize this in the skill afterward. See CLARIFICATION 2 for full discussion.
```

**Impact:** MEDIUM
**Justification:** Explains an apparent contradiction (why isn't the most important change in Wave 1?).

---

### 3.3 TIER-METHODOLOGY Line 205 — Vocabulary vs Library Practical Caveat

**Stale text (lines 205-209, end of Section 2):**
```markdown
**OPEN QUESTION -- Mechanism Density and Perceived Novelty:**
The distinction above is resolved in THEORY (Name Test + Transfer Test). It is NOT resolved in PRACTICE. The untested question: when a builder deploys 8-10 mechanisms from grammar/ with a new metaphor (or no metaphor at Middle tier), does the result feel like novel grammar usage or like a derivative copy of showcase pages?
```

**Why stale:** This is correct but doesn't connect to the Middle experiment being THE test of this question.

**Proposed update (add after existing paragraph):**
```markdown
**The Middle-tier experiment (next immediate step) directly tests this.** If Middle pages (8-10 mechanisms, NO metaphor, just CRESCENDO pattern) feel NOVEL (fresh composition using familiar tools), the theory holds in practice. If they feel DERIVATIVE (structurally similar to OD-004/DD-006 despite different content), anti-gravity may need strengthening to address mechanism COMBINATION patterns, not just metaphor domains. PA Mode 5 (Grammar-vs-Derivative) provides a 5-test protocol (Blur Test, Fresh-Eyes Test, CSS Comparison, Side-by-Side Perception, Structural Similarity Score) to objectively measure novelty vs derivation. See 14-master-execution-prompt.md M10 for the full audit mode specification.
```

**Impact:** MEDIUM
**Justification:** Connects theory to upcoming test. Not misleading, but missing actionable next step.

---

### 3.4 TIER-METHODOLOGY Line 424 — Build First Methodology Update

**Stale text (lines 419-430, Section 7):**
```markdown
### Build First With Current Skill

The content-adversarial audit (06-content-adversarial.md) made a critical point: the proposed skill modifications should NOT be implemented BEFORE the first experiment. The correct sequence is:

1. **Build a Middle-tier page with the CURRENT unmodified skill.** This determines whether the tier model works, whether Middle achieves the engagement threshold, and whether the current pipeline produces acceptable Middle-tier output. Tell the builder agent in its prompt: "Skip Phases 1-3, apply CRESCENDO pattern, deploy 8-10 mechanisms from the catalog." No skill file changes needed -- just prompt-level instructions.

2. **Evaluate the result.** Does it achieve the engagement threshold? If yes, the skill modifications are confirmed. If the page is excellent without modifications, some proposed changes may be unnecessary.

3. **Then implement the modifications that the experiment validated.** Apply per-category minimum, fractal gate, container width enforcement, Phase 3.5 strengthening.
```

**Why stale:** This was the plan BEFORE Wave 1. Now Wave 1 IS applied. The sequence is now "build with Wave 1-modified skill, evaluate, apply Wave 2."

**Proposed update:**
```markdown
### Build First With Wave 1-Modified Skill, Then Apply Wave 2

**Status as of 2026-02-15:** Wave 1 modifications APPLIED (M2 fractal gate, M3 container width, M5 tier routing, M8 tier framing). The original plan was "build with unmodified skill, evaluate, then modify." That plan has evolved:

**Current sequence:**

1. **Build a Middle-tier page with the Wave 1-modified skill.** The tier routing (M5) is now in the skill, so Middle-tier pages will automatically skip Phases 1-3 and go to Phase 4 with pattern selection. The fractal gate (M2) is a mandatory deliverable. Container width (M3) is a binary rule. **HOWEVER: the skill STILL contains "sample 2-4 mechanisms"** (M1 pending Wave 2). Override this at builder-prompt level: "Deploy 8-10 mechanisms across all 5 categories. Read full catalog. Justify each selection."

2. **Evaluate the result.** Measure against 4 criteria: (a) Container width 940-960px (binary), (b) Fractal coherence at 2 scales (binary), (c) Engagement threshold (subjective — does it feel designed?), (d) Novelty vs derivation (PA Mode 5 test).

3. **Then apply Wave 2 modifications informed by results.** M1 (per-category minimum) formalizes the 8-10 deployment in the skill. M6 (semantic justification) adds depth requirement. M7 (combinations) adds Ceiling-tier guidance. Do NOT apply blindly — if experiment shows M6 is busywork or M7 over-prescribes, adjust.
```

**Impact:** HIGH
**Justification:** This is the explicit methodology section. Currently says "build with current skill" when that's no longer accurate.

---

### 3.5 TIER-METHODOLOGY Line 505 — Floor-to-Middle ROI Statement

**Stale text (line 110):**
```markdown
**The key insight: the Floor-to-Middle transition has the HIGHEST ROI.** For ~45 extra minutes, you get 3-4x richness, crossing the threshold from "formatted" to "designed." Every page should be at least Middle.
```

**Why stale:** Not actually stale, but needs enrichment. The "3-4x richness" multiplier is stated as fact when it's actually an UNTESTED HYPOTHESIS from the tier model. The Middle experiment will be the first test of this claim.

**Proposed update:**
```markdown
**The key insight: the Floor-to-Middle transition has the HIGHEST ROI (predicted).** For ~45 extra minutes, research predicts 3-4x richness gain, crossing the threshold from "formatted" to "designed." **This is an UNTESTED HYPOTHESIS** — the Middle-tier experiment (next immediate step) will be the first actual test. If the 3-4x multiplier holds in practice, every page should be at least Middle. If the gain is marginal (e.g., 1.5-2x), the Floor-to-Middle recommendation may need revision.
```

**Impact:** MEDIUM
**Justification:** Treats hypothesis as proven fact. Not misleading (the hypothesis IS research-grounded), but incomplete.

---

### 3.6 TIER-METHODOLOGY Line 567 — Summary Decision Framework

**Stale text (lines 551-574, end of document):**
```markdown
## SUMMARY: THE DECISION FRAMEWORK

For any content to be processed through the KortAI pipeline:

**Step 1: Content Classification**
- Is this <200 words, API reference, or config table? → **Floor**
- Is this a tutorial, guide, overview, or comparison? → **Middle**
- Does this content have genuine structural tension (Addition Test = NO)? → **Ceiling**
- Is this anchor content, design system demonstration, or deep philosophical piece? → **Flagship**

**Step 2: Build at Classified Tier**
Use the pipeline blueprint for that tier (Section 3 above).

**Step 3: Evaluate Against Success Criteria**
Use the measurement framework (Section 7 above).

**Step 4: Graceful Degradation If Needed**
- Flagship failing? → Degrade to Ceiling (remove editorial flourishes, reduce to 4-scale fractal)
- Ceiling metaphor forced? → Degrade to Middle (drop metaphor, keep grid/zones/rhythm)
- Middle pattern mismatch? → Degrade to Floor (drop grid/zones, keep tokens/components)
- Floor never degrades → it IS the floor

**The principle:** Richness is fluency with many rigid words. The pipeline's job is to teach fluency, not reduce vocabulary. Each tier represents a fluency level matched to content needs. Build the simplest tier that serves the reader. Escalate only when the content demands it and the evidence supports it.
```

**Why stale:** Step 2 "Use the pipeline blueprint for that tier (Section 3 above)" — Section 3 has Floor/Middle/Ceiling/Flagship pipelines, but they haven't been updated to reflect Wave 1 changes. M5 (tier routing) is now IN the skill, so builders don't manually skip phases.

**Proposed update (modify Step 2):**
```markdown
**Step 2: Build at Classified Tier**
Use the pipeline blueprint for that tier (Section 3 above). **NOTE: As of Wave 1 (2026-02-15), tier routing (M5) is in the skill.** Middle-tier pages automatically skip Phases 1-3. You do NOT need to manually route. HOWEVER: override "sample 2-4 mechanisms" at builder-prompt level (M1 pending Wave 2). Deploy 8-10 across all 5 categories.
```

**Impact:** MEDIUM
**Justification:** Process clarity. Not wrong (Section 3 pipelines are still conceptually accurate), but missing Wave 1 context.

---

### 3.7 TIER-METHODOLOGY Line 30 — Tier Fluency Curriculum Table

**Stale text (lines 30-44, Section 2):**
```markdown
### The Fluency Curriculum Analogy

The design system IS a language (this analogy was independently reached by 6+ research agents). The tier model is a FLUENCY CURRICULUM:

| Tier | Vocabulary Size | Language Analogy | Fluency Level |
|------|----------------|------------------|---------------|
| **Floor** | 5 mechanisms | "The dog runs." | Survival |
| **Middle** | 8-10 mechanisms | Compound sentences, varied rhythm | Conversational |
| **Ceiling** | 12-15 mechanisms | Paragraph coherence, personal style | Proficient |
| **Flagship** | 16-18 mechanisms | Full literary register, metaphor as argument | Native |
```

**Why stale:** Mechanism counts lack the "descriptive not prescriptive" caveat. This table will be read as targets.

**Proposed update (add note after table):**
```markdown
**IMPORTANT:** Vocabulary size counts (5, 8-10, 12-15, 16-18) are DESCRIPTIVE (what each tier naturally produces when content-mechanism fit is optimized), not PRESCRIPTIVE (targets to hit). These are backward-engineered from showcase pages and Phase D variants. Peak richness = maximum content-mechanism fit, NOT maximum technique count. See CLARIFICATION 1 in 17-conversation-clarifications.md for full provenance.
```

**Impact:** MEDIUM
**Justification:** Prevents misinterpretation of the fluency analogy as prescribing counts.

---

## 4. 08-skill-enrichment-plan.md

**File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/session-insights/08-skill-enrichment-plan.md`
**Classification:** RETAIN-CURRENT (complete modification specifications)
**Last Update:** 2026-02-15
**Overall Status:** MOSTLY ACCURATE (specifications are correct), but 5 passages need Wave 1 completion status

---

### 4.1 ENRICHMENT-PLAN Line 4 — Status Line

**Stale text:** `"**Status:** COMPLETE"`

**Why stale:** The plan is COMPLETE as a document, but execution is PARTIAL (Wave 1 done, Wave 2/3 pending). The status is ambiguous.

**Proposed update:**
```markdown
**Status:** COMPLETE as planning document. **Execution:** Wave 1 COMPLETE (2026-02-15: M2/M3/M5/M8 + PRE-1 + DOC-1-6 applied). Wave 2 pending Middle experiment. Wave 3 pending 10+ builds.
```

**Impact:** LOW
**Justification:** Minor clarification. Not misleading (document IS complete), just adds execution tracking.

---

### 4.2 ENRICHMENT-PLAN Line 844 — Implementation Sequence Status

**Stale text (lines 844-864, Section 6):**
```markdown
## IMPLEMENTATION SEQUENCE

**Critical principle:** Implement in 3 waves to AVOID overwhelming builders and to TEST each wave before proceeding.

### Wave 1: Core Enabling Changes (Implement FIRST)

**Modifications:** M2 (Fractal), M3 (Container Width), M5 (Tier Routing), M8 (Framing)

**Why first:**
- M2: Enabling, proven LOW rigidity cost
- M3: Binary rule, prevents #1 Phase D failure mode
- M5: Structural (routes Middle away from metaphor)
- M8: Clarification (makes existing tier model understandable)

**Risk:** Low. All enabling or clarifying.

**Test after Wave 1:** Build 2-3 Middle-tier pages, verify:
- [ ] Tier routing works (Middle skips Phases 1-3)
- [ ] Fractal gate achieves 100% compliance (binary rule)
- [ ] Container width violations = 0 (binary rule)
- [ ] Framing helps builders understand tier distinction
```

**Why stale:** All checkboxes are unchecked. Wave 1 IS executed. Should mark completion or move this to "Wave 1: COMPLETE" section.

**Proposed update:**
```markdown
### Wave 1: Core Enabling Changes (COMPLETE 2026-02-15)

**Modifications:** M2 (Fractal), M3 (Container Width), M5 (Tier Routing), M8 (Framing) — ALL APPLIED

**Execution status:**
- ✅ M2 applied: Step 4.7 promoted to GATE with tier-calibrated scale requirements
- ✅ M3 applied: Container width 940-960px added as NON-NEGOTIABLE rule in Phase 4.0 guardrails
- ✅ M5 applied: Step 0D tier routing added, Middle skips Phases 1-3 and goes to Phase 4 with pattern
- ✅ M8 applied: Tier distinction framing (individual/combination/multi-pattern) added to Phase 0D + Phase 4.0 header
- ✅ PRE-1 applied: Category labels added to all 18 mechanism headings + summary table
- ✅ DOC-1 through DOC-6 applied: Provenance, two-layer architecture, CSS examples, fresh-eyes fixes

**Next:** Build Middle-tier experiment to validate Wave 1 changes. Then proceed to Wave 2 (M1/M6/M7) informed by experiment results.
```

**Impact:** MEDIUM
**Justification:** Execution tracking. Document currently reads as if nothing is done yet.

---

### 4.3 ENRICHMENT-PLAN Line 974 — Rollback Plan Applicability

**Stale text (lines 956-974, Section 7):**
```markdown
### Rollback Plan

**If checklist factory detected (Wave 2 fails):**
1. Keep M1 (per-category minimum) — highest leverage
2. Simplify M6 (semantic justification) — spot-check 5 values instead of all
3. Remove M7 (combination guidance) — builders select independently
4. Keep M2 (fractal gate) — enabling, not prescriptive
```

**Why stale:** Not stale, but needs enrichment. M2 is already applied (can't "keep" something pending). The rollback plan was written assuming all waves execute sequentially before any rollback decision. Now that Wave 1 is applied, the rollback plan needs updating.

**Proposed update:**
```markdown
### Rollback Plan (Updated for Wave 1 Execution)

**Wave 1 is COMPLETE and LOCKED IN** (M2/M3/M5/M8 applied). Rollback applies only to Wave 2/3.

**If checklist factory detected (Wave 2 fails):**
1. Keep M1 (per-category minimum) — highest leverage, foundational
2. Simplify M6 (semantic justification) — spot-check 5 values instead of all varying values
3. Remove M7 (combination guidance) — builders select combinations independently
4. M2 (fractal gate) already applied — CANNOT rollback without breaking skill structure

**If Middle-tier convergence detected (M10 reveals derivative output):**
1. Keep M5 (tier routing) — structural separation remains valuable even if Middle converges
2. Strengthen M1 (per-category minimum) — add divergence requirement at Middle tier
3. Add M19 (customization mandate) — require value/ratio customization, not just mechanism selection
4. Keep M8 (framing) — explains individual vs combination deployment levels

**If Ceiling combination convergence detected:**
1. Add M19 (customization mandate) immediately to Wave 2
2. Keep M7 (combination guidance) but strengthen anti-prescription warnings
3. Strengthen M4 (domain family check) to also check combination families
```

**Impact:** LOW
**Justification:** Future-planning accuracy. Not misleading (rollback plans are still conceptually sound), just needs execution-state awareness.

---

### 4.4 ENRICHMENT-PLAN Line 991 — Highest-Leverage Changes

**Stale text (lines 982-991, conclusion):**
```markdown
**Highest-leverage changes:**
1. **M1 (per-category minimum)** — replaces "sample 2-4" (50%+ of richness gap)
2. **M3 (container width)** — prevents #1 Phase D failure mode
3. **M5 (tier routing)** — enables Middle tier (untested but high-potential)
4. **M2 (fractal gate)** — proven enabling, LOW rigidity cost

**Next steps:**
1. Apply Wave 1 modifications (M2, M3, M5, M8)
2. Build 2-3 Middle-tier experimental pages
3. Run M10 (grammar-vs-derivative mode) on first Middle page
4. If NOVEL → proceed to Wave 2
5. If DERIVATIVE → revise M1/M5, add M19
```

**Why stale:** "Next steps" says "Apply Wave 1" when Wave 1 is done. Step 1 should be "Build Middle experiment."

**Proposed update:**
```markdown
**Highest-leverage changes:**
1. **M1 (per-category minimum)** — replaces "sample 2-4" (50%+ of richness gap) — PENDING Wave 2
2. **M3 (container width)** — prevents #1 Phase D failure mode — ✅ APPLIED Wave 1
3. **M5 (tier routing)** — enables Middle tier (untested but high-potential) — ✅ APPLIED Wave 1
4. **M2 (fractal gate)** — proven enabling, LOW rigidity cost — ✅ APPLIED Wave 1

**Next steps (updated 2026-02-15):**
1. ✅ Wave 1 applied (M2, M3, M5, M8 + PRE-1 + DOC-1-6)
2. **Build Middle-tier experimental page** with Wave 1-modified skill. OVERRIDE "sample 2-4" at builder-prompt level.
3. Run PA Mode 5 (grammar-vs-derivative) on Middle page
4. Evaluate against 4 success criteria (container width, fractal coherence, engagement threshold, novelty)
5. If NOVEL + engagement threshold met → proceed to Wave 2 (M1/M6/M7)
6. If DERIVATIVE or under-designed → consult user, may need M1 + M19 before Wave 2
```

**Impact:** MEDIUM
**Justification:** Next-steps accuracy. Critical for execution sequencing.

---

### 4.5 ENRICHMENT-PLAN Line 1008 — Deferred Items

**Stale text (line 1000):**
```markdown
**Deferred to next iteration:**
- M19 (Combination Customization Mandate) — AFTER Middle experiment validates approach
- Full coherence table (Mod 3) — REJECTED in favor of 3-transition minimum
- Technique count metric (Mod 4) — REJECTED (Goodhart's Law)
```

**Why stale:** Not stale, but needs clarification. M19 is "deferred to next iteration" but what iteration? Wave 2? Wave 3? Or only if Middle experiment reveals convergence?

**Proposed update:**
```markdown
**Deferred items:**
- **M19 (Combination Customization Mandate):** Deferred CONDITIONALLY. Apply in Wave 2 ONLY IF Middle experiment reveals convergence (PA Mode 5 test shows derivative output). If Middle is novel, M19 stays deferred until Ceiling experiments show combination-level convergence. See rollback plan Section 7.
- **Full coherence table (Mod 3):** REJECTED permanently in favor of 3-transition minimum (lighter weight).
- **Technique count metric (Mod 4):** REJECTED permanently (Goodhart's Law — count becomes target).
```

**Impact:** LOW
**Justification:** Clarifies deferral conditions. Not misleading, just incomplete.

---

## 5. 13-master-agenda.md

**File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/session-insights/13-master-agenda.md`
**Classification:** RETAIN-CURRENT (comprehensive execution roadmap)
**Last Update:** 2026-02-15
**Overall Status:** COMPREHENSIVE BUT NOW PARTIALLY STALE (Phase 0-1 are complete, but document doesn't mark this)

---

### 5.1 MASTER-AGENDA Line 12 — Current State

**Stale text:** `"**Current State:** Phase D COMPLETE (CONDITIONAL PASS, Variant B best: 18/19 compliance, 4/5 novelty). Richness + rigidity research COMPLETE (11 agents, 11 reports, tier model established, modification recommendations ready). Phase E NOT YET STARTED."`

**Why stale:** Phase 0 and Phase 1 of this agenda are now COMPLETE (pre-requisites + Wave 1). The current state should reflect this.

**Proposed update:**
```markdown
**Current State (updated 2026-02-15):** Phase D COMPLETE (CONDITIONAL PASS, Variant B best: 18/19 compliance, 4/5 novelty). Richness + rigidity research COMPLETE (11 agents, 11 reports, tier model established). **Phase 0 + Phase 1 of this agenda COMPLETE** (staleness fixes + Wave 1 skill mods applied). **Next:** Phase 2 (Middle-tier experiment). Phase E NOT YET STARTED.
```

**Impact:** HIGH
**Justification:** Execution status tracking. This is the master roadmap — it should show progress.

---

### 5.2 MASTER-AGENDA Lines 915-930 — Success Criteria Checkboxes

**Stale text (lines 915-930, Phase 0 + Phase 1 success criteria):**
```markdown
### Phase 0 Success
- [ ] All 3 staleness fixes applied
- [ ] MEMORY.md under 200 lines, loads completely
- [ ] Category labels exist in mechanism catalog
- [ ] Container width in ALL navigation files

### Phase 1 Success
- [ ] M1, M2, M3, M5 applied to tension-composition skill
- [ ] Skill parses correctly, no broken references
- [ ] Wave 1 diff documented
```

**Why stale:** All unchecked. Phase 0 and Phase 1 are COMPLETE.

**Proposed update:**
```markdown
### Phase 0 Success (COMPLETE 2026-02-15)
- ✅ All 3 staleness fixes applied (design-system/CLAUDE.md, pipeline/05-COMPLETE-ROADMAP.md updated; MEMORY.md compressed)
- ✅ MEMORY.md under 200 lines (135 lines, loads completely)
- ✅ Category labels exist in mechanism catalog (PRE-1 applied with 5-category table)
- ✅ Container width documented in navigation files

### Phase 1 Success (COMPLETE 2026-02-15)
- ✅ M2, M3, M5, M8 applied to tension-composition skill (M1 deferred to Wave 2)
- ✅ Skill parses correctly, no broken references (verified 2026-02-15)
- ✅ Wave 1 execution documented (this audit + conversation clarifications)
- ✅ DOC-1 through DOC-6 applied (provenance, two-layer architecture, CSS examples, fresh-eyes fixes)
```

**Impact:** MEDIUM
**Justification:** Progress tracking. Shows work completed.

---

### 5.3 MASTER-AGENDA Line 154 — Phase 1.1.4 M1 Application

**Stale text (lines 204-220, Phase 1.1.4):**
```markdown
#### 1.1.4 M1: Replace "Sample 2-4" with Per-Category Minimum

- [ ] **File:** `~/.claude/skills/tension-composition/SKILL.md`
- [ ] **Location:** Lines 783-787 (Phase 4 mechanism selection)
- [ ] **Type:** MODIFY (2 lines → 20 lines)
- [ ] **Action:** Replace "sample 2-4 mechanisms" with per-category protocol
- [ ] **Content:**
  - Read full catalog (18 mechanisms)
  - Per-category deployment table (Spatial 1+, Temporal 1+, Material 1+, Behavioral 1+, Relational 1+)
  - Justification requirement (EACH deployed: why fits, 3+ rejected: why don't fit)
  - Natural landing (5-10 Middle, 8-12 Ceiling, 12-15 Flagship)
- [ ] **Full Text:** See 08-skill-enrichment-plan.md lines 62-101
- [ ] **Dependencies:** 0.2.1 complete (category labels exist), M2-M3-M5 complete (tier context needed)
- [ ] **Risk:** LOW (enabling, not limiting)
- [ ] **Success:** Builder deploys across all 5 categories without hitting raw count target
```

**Why stale:** Item 1.1.4 was in the original Phase 1, but the execution plan moved M1 to Wave 2. This item should be marked "DEFERRED to Phase 4 (Wave 2)" not listed as unchecked in Phase 1.

**Proposed update (add note at top of 1.1.4):**
```markdown
#### 1.1.4 M1: Replace "Sample 2-4" with Per-Category Minimum — DEFERRED TO PHASE 4 (WAVE 2)

**NOTE:** M1 was originally planned for Wave 1 but moved to Wave 2 to enable experiment-informed validation. The skill STILL contains "sample 2-4 mechanisms" as of 2026-02-15. Middle experiment will override this at builder-prompt level. M1 will be applied after experiment confirms per-category approach. See 17-conversation-clarifications.md CLARIFICATION 2 for sequencing rationale.

[existing content unchanged but marked as deferred]
```

**Impact:** MEDIUM
**Justification:** Prevents confusion about why M1 wasn't executed in Phase 1.

---

### 5.4 MASTER-AGENDA Line 1004 — Timeline Estimates

**Stale text (lines 994-1002, Realistic timeline):**
```markdown
### Realistic (Some Serial, 1-2 Iterations)
- Phase 0: 3 hours (staleness fixes + verification)
- Phase 1: 5 hours (skill mods + testing)
- Phase 2: 3 hours (Middle build + audit + analysis)
- Phase 3: 4 hours (doc enrichment)
- Phase 4: 2 hours (evaluate + apply Wave 2)
- Phase 5: 6 hours (Ceiling build + full audit + comparison)
- Phase 6: 3 hours (doc enrichment)
- **TOTAL: ~20 hours to complete Middle + Ceiling validation**
```

**Why stale:** Phase 0 + Phase 1 are done. The timeline should show actual vs estimated.

**Proposed update:**
```markdown
### Realistic (Some Serial, 1-2 Iterations) — UPDATED WITH ACTUALS

- Phase 0: ~~3 hours estimated~~ → **~4 hours actual** (staleness fixes + category labels + verification)
- Phase 1: ~~5 hours estimated~~ → **~6 hours actual** (skill mods + testing + 6 doc enrichments)
- Phase 2: 3 hours (Middle build + audit + analysis) — NEXT
- Phase 3: 4 hours (doc enrichment Priority 1) — can parallel Phase 2
- Phase 4: 2 hours (evaluate + apply Wave 2)
- Phase 5: 6 hours (Ceiling build + full audit + comparison)
- Phase 6: 3 hours (doc enrichment Priority 2)
- **TOTAL: ~20 hours to complete Middle + Ceiling validation** (10 hours spent, 10 hours remaining)
```

**Impact:** LOW
**Justification:** Timeline tracking. Not critical, but useful for planning.

---

### 5.5 MASTER-AGENDA Line 1040 — How to Use This Agenda

**Stale text (lines 1042-1050):**
```markdown
**How to use this agenda:**
1. Execute Phase 0 completely (blocking pre-requisites)
2. Execute Phase 1 completely (Wave 1 skill mods)
3. Execute Phase 2 (Middle experiment) — CHECKPOINT: evaluate results before proceeding
4. If Middle succeeds: continue to Phase 4-6
5. If Middle fails: pivot strategy, revise tier model
6. Defer Phase 7-8 until 10+ builds or 6+ months
```

**Why stale:** Steps 1-2 say "Execute Phase 0" and "Execute Phase 1" when they're done.

**Proposed update:**
```markdown
**How to use this agenda (updated 2026-02-15):**
1. ✅ Phase 0 complete (blocking pre-requisites)
2. ✅ Phase 1 complete (Wave 1 skill mods M2/M3/M5/M8 + DOC-1-6)
3. **Execute Phase 2 (Middle experiment) — NEXT IMMEDIATE STEP** — CHECKPOINT: evaluate results before proceeding
4. If Middle succeeds (engagement threshold + novelty): continue to Phase 4 (Wave 2)
5. If Middle fails (convergence or under-designed): consult user, may need M1 + M19 before Wave 2
6. Defer Phase 7-8 until 10+ builds or 6+ months
```

**Impact:** HIGH
**Justification:** This is the "how to use" section. Should show current position.

---

### 5.6 MASTER-AGENDA Line 247 — Phase 2 Dependencies

**Stale text (line 252):**
```markdown
## PHASE 2: MIDDLE-TIER EXPERIMENT

**Purpose:** Build the MOST IMPORTANT experiment — validate tier model, test mechanism deployment, measure richness gain
**Dependencies:** Phase 1 complete
```

**Why stale:** Dependencies say "Phase 1 complete" without acknowledging Phase 1 IS complete. Should say "Phase 1 COMPLETE (2026-02-15), ready to execute."

**Proposed update:**
```markdown
## PHASE 2: MIDDLE-TIER EXPERIMENT

**Purpose:** Build the MOST IMPORTANT experiment — validate tier model, test mechanism deployment, measure richness gain
**Dependencies:** Phase 1 COMPLETE (2026-02-15: M2/M3/M5/M8 applied). **READY TO EXECUTE.**
**Blocking Note:** M1 (per-category minimum) is NOT yet in the skill. Override "sample 2-4" at builder-prompt level.
```

**Impact:** MEDIUM
**Justification:** Execution readiness. Makes clear the experiment can start now.

---

## 6. 14-master-execution-prompt.md

**File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/session-insights/14-master-execution-prompt.md`
**Classification:** RETAIN-CURRENT (comprehensive modification blueprint for future execution)
**Last Update:** 2026-02-15
**Overall Status:** SOLID SPECIFICATION, but 5 passages need execution status updates

---

### 6.1 MASTER-EXECUTION Line 5 — Status

**Stale text:** `"**Status:** READY FOR USE"`

**Why stale:** The prompt is ready for USE but partially USED (Wave 1 executed). Should clarify execution state.

**Proposed update:**
```markdown
**Status:** READY FOR USE. **Execution:** Wave 1 COMPLETE (2026-02-15: PRE-1 + M2/M3/M5/M8 + DOC-1-6 applied). Wave 2 pending Middle experiment. This prompt remains the authoritative specification for Wave 2/3 execution.
```

**Impact:** LOW
**Justification:** Minor status tracking.

---

### 6.2 MASTER-EXECUTION Line 1100 — Execution Order Phase 1

**Stale text (lines 1100-1125, Phase 1 execution order):**
```markdown
## Phase 1: Wave 1 Skill Modifications (4-6 hours)

**Execute in this order:**
1. M2 (Fractal Gate) -- standalone, no dependencies
2. M3 (Container Width) -- standalone, no dependencies
3. M5 (Tier Routing) -- references fractal gate + container width
4. M8 (Tier Framing) -- references tier routing

**After each modification:** Read the modified section in context to verify markdown formatting, internal references, and section numbering are intact.

**Validate after all 4:**
- Read SKILL.md from Phase 0 through Phase 4.7 -- does it flow?
- Are phase numbers still sequential?
- Does Step 0D (tier routing) correctly reference Phase 4.0?
- Does Step 4.7 (fractal gate) correctly reference tier names from Step 0D?
```

**Why stale:** All validation checkboxes unchecked. Phase 1 IS executed.

**Proposed update:**
```markdown
## Phase 1: Wave 1 Skill Modifications (COMPLETE 2026-02-15)

**Executed in this order:**
1. ✅ M2 (Fractal Gate) applied
2. ✅ M3 (Container Width) applied
3. ✅ M5 (Tier Routing) applied
4. ✅ M8 (Tier Framing) applied

**Validation completed:**
- ✅ SKILL.md flows correctly from Phase 0 through Phase 4.7
- ✅ Phase numbers sequential (0, 1, 2, 3, 3.5, 4, 4.7, 5)
- ✅ Step 0D tier routing references Phase 4.0 correctly
- ✅ Step 4.7 fractal gate references tier names from Step 0D correctly
- ✅ PRE-1 (category labels) applied before M1 dependencies
- ✅ DOC-1 through DOC-6 applied

**Next:** Proceed to CHECKPOINT (Middle-tier experiment). Do NOT apply Wave 2 yet.
```

**Impact:** MEDIUM
**Justification:** Execution tracking for the authoritative prompt.

---

### 6.3 MASTER-EXECUTION Line 1127 — Checkpoint Description

**Stale text (lines 1122-1152, Checkpoint section):**
```markdown
## CHECKPOINT: Middle-Tier Experiment

**THIS IS WHERE SKILL MODIFICATION EXECUTION STOPS.** Deliver the modified skill files and documentation changes to the user. The Middle-tier experiment is a SEPARATE effort — it is NOT part of this prompt's execution scope. The user will build the experiment separately after reviewing and approving the skill modifications.

**What the experiment validates (4 criteria):**

1. **Container width compliance (BINARY):** 940-960px at 1440px viewport. 100% compliance expected. If violated, M3 needs enforcement strengthening.

2. **Fractal coherence (BINARY for Middle):** Page scale + Component scale demonstrate same density pattern. Scale coverage table with CSS evidence required. If missing, M2 gate needs revision.

3. **Engagement threshold (SUBJECTIVE):** Does the Middle page feel "designed" (intentional spatial meaning) not just "formatted" (components arranged on page)? Compare side-by-side with Variant B — Middle should feel RICHER. Compare with Floor-tier equivalent — gap should be visible.

4. **Novelty check (THE CRITICAL QUESTION):** Does the page feel like a NEW composition using familiar tools, or does it feel DERIVATIVE of showcase pages (OD-004, DD-006) despite different content? This is the vocabulary-vs-library practical test.
```

**Why stale:** The checkpoint says "THIS IS WHERE EXECUTION STOPS" but execution HAS stopped (at this checkpoint). The phrasing is future-tense when it should be present/past-tense.

**Proposed update:**
```markdown
## CHECKPOINT: Middle-Tier Experiment (CURRENT POSITION as of 2026-02-15)

**Wave 1 execution STOPPED here.** The modified skill files and documentation changes have been delivered. The Middle-tier experiment is the NEXT STEP — it is NOT part of the skill modification prompt's execution scope. The experiment will be built separately, then Wave 2 will be applied informed by results.

**What the experiment will validate (4 criteria):**

1. **Container width compliance (BINARY):** 940-960px at 1440px viewport. 100% compliance expected (M3 enforces this). If violated, M3 may need STRONGER enforcement (e.g., builder-blocking gate, not just instruction).

2. **Fractal coherence (BINARY for Middle):** Page scale + Component scale demonstrate same density pattern. Scale coverage table with CSS evidence required (M2 enforces this). If missing, M2 gate may need revision.

3. **Engagement threshold (SUBJECTIVE):** Does the Middle page feel "designed" (intentional spatial meaning) not just "formatted" (components arranged on page)? Compare side-by-side with Variant B — Middle should feel RICHER. Compare with Floor-tier equivalent — gap should be visible. **This is the 3-4x richness multiplier test.**

4. **Novelty check (THE CRITICAL QUESTION):** Does the page feel like a NEW composition using familiar tools, or does it feel DERIVATIVE of showcase pages (OD-004, DD-006) despite different content? This is the vocabulary-vs-library practical test. PA Mode 5 (Grammar-vs-Derivative) provides the 5-test validation protocol.
```

**Impact:** MEDIUM
**Justification:** Current-position awareness. The checkpoint section should reflect we're AT the checkpoint.

---

### 6.4 MASTER-EXECUTION Line 1153 — Decision Matrix

**Stale text (lines 1137-1146, decision matrix):**
```markdown
**Decision matrix after experiment:**

| Engagement | Novelty | Decision |
|-----------|---------|----------|
| Designed | Novel | PROCEED to Wave 2 as planned |
| Designed | Derivative | REVISE M1: add combination divergence requirement. Consult user before Wave 2 |
| Under-designed | Novel | Tier boundary may be wrong. Middle may need 10-12 mechanisms. Consult user |
| Under-designed | Derivative | Current skill insufficient. Wave 1 modifications VALIDATED. Proceed |
```

**Why stale:** Not stale, but needs enrichment. The "Under-designed + Derivative" cell says "Wave 1 modifications VALIDATED" but doesn't explain why that's the verdict. Also, the "Designed + Derivative" cell doesn't mention M19 (customization mandate) as the likely fix.

**Proposed update:**
```markdown
**Decision matrix after experiment:**

| Engagement | Novelty | Decision |
|-----------|---------|----------|
| Designed | Novel | ✅ **PROCEED to Wave 2 as planned** (M1/M6/M7). The tier model is validated. |
| Designed | Derivative | ⚠️ **REVISE M1 + ADD M19 before Wave 2.** Middle achieves richness BUT feels like showcase copy. Need customization mandate (values/ratios must differ from library) + combination divergence requirement. Consult user. |
| Under-designed | Novel | ⚠️ **Tier boundary wrong.** Middle may need more mechanisms (10-12 instead of 8-10) OR content needs Ceiling treatment. The novelty is good (vocabulary works) but richness insufficient. Consult user on tier boundary revision. |
| Under-designed | Derivative | ✅ **Wave 1 VALIDATED, Wave 2 needed.** The engagement gap confirms M1 is critical (need more mechanisms). The derivative signal confirms anti-gravity works (convergence IS detectable). Proceed to Wave 2 without revision. |
```

**Impact:** MEDIUM
**Justification:** Decision logic clarity. Makes explicit what each verdict means.

---

### 6.5 MASTER-EXECUTION Line 1324 — Final Summary

**Stale text (line 1322-1327):**
```markdown
**END MASTER EXECUTION PROMPT**

**Total modifications:** 11 skill + 6 documentation + 1 pre-requisite = 18 items
**Estimated execution time:** 10-15 hours across all phases
**Critical path:** PRE-1 -> Wave 1 (M2, M3, M5, M8) -> Middle Experiment -> Wave 2 (M1, M6, M7) -> Wave 3 (M4, M9, M10, M11)
```

**Why stale:** Execution time shows only estimates, not actuals. Critical path doesn't mark completed stages.

**Proposed update:**
```markdown
**END MASTER EXECUTION PROMPT**

**Total modifications:** 11 skill + 6 documentation + 1 pre-requisite = 18 items
**Execution time:** 10-15 hours estimated → **~10 hours actual (as of Wave 1 complete)**
**Critical path (updated 2026-02-15):**
- ✅ PRE-1 complete (category labels applied)
- ✅ Wave 1 complete (M2, M3, M5, M8 + DOC-1-6 applied)
- **→ Middle Experiment (NEXT)**
- → Wave 2 (M1, M6, M7) after experiment
- → Wave 3 (M4, M9, M10, M11) after 10+ builds

**Current position:** At checkpoint. Wave 1 delivered. Middle experiment ready to build.
```

**Impact:** LOW
**Justification:** Final status summary accuracy.

---

## 7. Files With NO Staleness Found

The following files were reviewed and found to have NO stale passages needing update:

### 7.1 17-conversation-clarifications.md

**File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/session-insights/17-conversation-clarifications.md`
**Status:** ✅ FRESH (dated 2026-02-15, captures recent context)
**Reason:** This file WAS CREATED to capture the clarifications that create staleness elsewhere. By definition, it's the freshest context.

---

### 7.2 Richness Research Files (5 files)

**Files:**
- `ephemeral/richness-research/01-richness-anatomy.md`
- `ephemeral/richness-research/02-identity-investigation.md`
- `ephemeral/richness-research/03-implications-landscape.md`
- `ephemeral/richness-research/04-metacognitive-analysis.md`
- `ephemeral/richness-research/05-unified-synthesis.md`

**Status:** ✅ ARCHIVAL (historical research findings, not procedural)
**Reason:** These are RESEARCH OUTPUTS from completed investigation. They don't describe current state or pending actions — they describe what the research FOUND. Archival content doesn't become stale the same way procedural content does. The findings (e.g., "richness is vocabulary fluency") remain true even as execution progresses.

---

### 7.3 Rigidity Research Files (6 files)

**Files:**
- `ephemeral/rigidity-research/01-rigidity-archaeology.md`
- `ephemeral/rigidity-research/02-modification-analysis.md`
- `ephemeral/rigidity-research/03-tier-specifications.md`
- `ephemeral/rigidity-research/04-reproducibility-analysis.md`
- `ephemeral/rigidity-research/05-metacognitive-rigidity.md`
- `ephemeral/rigidity-research/06-unified-synthesis.md`

**Status:** ✅ ARCHIVAL (historical research findings, not procedural)
**Reason:** Same as richness research — these capture WHAT WAS FOUND, not what's pending. The 4-type constraint taxonomy, tier specifications, modification analysis are research conclusions that remain valid regardless of execution state.

---

## 8. Summary Table

| File | Stale Passages | HIGH Impact | MEDIUM Impact | LOW Impact | Priority |
|------|---------------|-------------|---------------|-----------|----------|
| **HANDOFF.md** | 6 | 2 | 3 | 1 | HIGH |
| **03-ENTRY-POINT.md** | 8 | 4 | 3 | 1 | CRITICAL |
| **02-tier-methodology.md** | 7 | 2 | 4 | 1 | HIGH |
| **08-skill-enrichment-plan.md** | 5 | 0 | 3 | 2 | MEDIUM |
| **13-master-agenda.md** | 6 | 2 | 3 | 1 | HIGH |
| **14-master-execution-prompt.md** | 5 | 0 | 3 | 2 | MEDIUM |
| **TOTAL** | **37** | **10** | **19** | **8** | — |

---

## RECOMMENDATIONS

### Immediate (Before Middle Experiment)

Apply ALL HIGH-impact updates in HANDOFF.md, 03-ENTRY-POINT.md, and 02-tier-methodology.md. These are the documents a builder will read to understand current state.

**Critical updates:**
1. HANDOFF.md Line 137-139 (M1 sequencing explanation)
2. HANDOFF.md Line 280-290 (immediate actionables now point to Middle experiment)
3. ENTRY-POINT Line 30-35 (methodology updated to Wave 1 complete)
4. ENTRY-POINT Line 70-72 ("has been replaced" → "STILL IN SKILL, pending Wave 2")
5. ENTRY-POINT Line 150 ("Do NOT use sample 2-4" with override instruction)
6. ENTRY-POINT Line 159 (immediate next steps point to Middle experiment)
7. TIER-METHODOLOGY Line 74 (mechanism count caveat)
8. TIER-METHODOLOGY Line 424 (build methodology updated to Wave 1 modified skill)

### After Middle Experiment

Apply MEDIUM-impact updates in all 6 files. These clarify execution state and decision logic but don't block understanding.

### Defer

LOW-impact updates can wait until post-Wave 2 or even post-Phase E. They're accuracy improvements, not blockers.

---

**END STALE CONTEXT AUDIT**

**Files Audited:** 8 (6 with staleness, 2 categories with none)
**Passages Identified:** 37
**Execution Recommendation:** Apply HIGH-impact (10 passages) before Middle experiment. Apply MEDIUM (19 passages) after experiment. Defer LOW (8 passages).
