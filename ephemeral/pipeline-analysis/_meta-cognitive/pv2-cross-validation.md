# Pipeline v2 Cross-Validation: Adversarial Review of 6 Architecture Proposals

**Author:** adversarial-reviewer (Opus 4.6)
**Date:** 2026-02-18
**Task:** Cross-validate 6 proposals for contradictions, gaps, and unresolved decisions
**Sources read:** All 6 proposals + anti-reproduction protocol (7 documents, ~5,800 lines total)

---

## A. AGREEMENT MAP — Where All 6 Proposals Agree

These are high-confidence decisions. Every proposal either explicitly states or implicitly assumes each point.

### A-1: TC and File 42 Serve Different Functions (THINKING vs BUILDING)

- **form-proposal (Doc 1):** "TC = WHAT to build ... Page-builder = HOW to build" (line 225-226)
- **relationship-map (Doc 2):** "TC SKILL.md is a THINKING pipeline ... File 42 is a BUILDING pipeline" (line 96-97)
- **ux-designer (Doc 3):** "Existing skills are preserved. TC and PA skills are invoked, not duplicated" (line 869)
- **file42-integrator (Doc 4):** "TC SKILL.md is a THINKING pipeline ... File 42 is a BUILDING pipeline" (line 96-97)
- **verification-prompt (Doc 5):** Implicitly agrees -- tests building phases separately from verification (Gate 7)
- **file-structure (Doc 6):** "tension-composition handles metaphor derivation; operational-recipe handles CSS execution" (line 397)

**Confidence: UNANIMOUS (6/6)**

### A-2: File 42 Should Become a SEPARATE Skill/Artifact, Not Be Merged Into TC

- **form-proposal (Doc 1):** "Pipeline v2 is two skills + the 8 codification edits" (line 59)
- **relationship-map (Doc 2):** "The 3-Document Model" -- derivation, building recipe, router (line 355-359)
- **ux-designer (Doc 3):** "`/build-page` skill wraps and orchestrates existing skills. It does NOT replace them" (line 756)
- **file42-integrator (Doc 4):** "Option B (SEPARATE SKILL) is the best integration path" (line 246)
- **verification-prompt (Doc 5):** N/A -- tests artifacts, doesn't specify architecture
- **file-structure (Doc 6):** "operational-recipe.md" as a new file in grammar/ (line 54)

**Confidence: 5/6 (Doc 5 is neutral by design)**

### A-3: Recipe Format Is Non-Negotiable for Builder-Facing Content

- **form-proposal (Doc 1):** "RECIPE format -- every step starts with an action verb and a specific value" (line 94)
- **relationship-map (Doc 2):** "File 42's recipe format is the proven success pattern" (line 189)
- **ux-designer (Doc 3):** "File 42 IS the builder's brain. The operational recipe becomes the literal execution spec" (line 871)
- **file42-integrator (Doc 4):** "The recipe format means: sequenced steps, exact values, action verbs" (line 329-333)
- **verification-prompt (Doc 5):** Gate 7 is entirely dedicated to enforcing recipe format (lines 325-362)
- **file-structure (Doc 6):** "PURE RECIPE: sequenced steps with specific CSS values" (line 180)

**Confidence: UNANIMOUS (6/6)**

### A-4: Perception Thresholds Must Be Embedded in Every Phase

- **form-proposal (Doc 1):** "PERCEPTION-AWARE -- minimum perceptual deltas embedded in every phase, not just Phase 8" (line 97)
- **relationship-map (Doc 2):** "Perception thresholds: One authoritative source (PA skill), referenced by TC and F42" (line 341)
- **ux-designer (Doc 3):** Build progress shows specific perception results: "DONE (3 zones, min delta 18 RGB)" (line 147)
- **file42-integrator (Doc 4):** Phase 3 has ">= 10 RGB between zones", Phase 8 has final audit (line 257)
- **verification-prompt (Doc 5):** Gate 5 requires 8 specific thresholds present (lines 218-287)
- **file-structure (Doc 6):** perception-thresholds.md as a new permanent file (lines 248-315)

**Confidence: UNANIMOUS (6/6)**

### A-5: The 8 Codification Edits Are Necessary

- **form-proposal (Doc 1):** Lists all 8 as "Artifact 3" (lines 105-112)
- **relationship-map (Doc 2):** "Apply 8 new changes to target files" (line 313)
- **ux-designer (Doc 3):** Implicitly assumed -- UX references agent communication protocol and model selection
- **file42-integrator (Doc 4):** "Neither covers: Agent communication protocol, model selection, information routing" -- cites codification map (line 267)
- **verification-prompt (Doc 5):** N/A
- **file-structure (Doc 6):** Changes 1-10 explicitly mapped to files (lines 376-520)

**Confidence: 5/6 (Doc 5 neutral)**

### A-6: Tier-Based Routing (Floor/Middle/Ceiling/Flagship) Is Essential

- **form-proposal (Doc 1):** Full invocation model per tier (lines 142-182)
- **relationship-map (Doc 2):** Tier-specific file usage table (lines 331-338)
- **ux-designer (Doc 3):** Detailed UX flow per tier (lines 161-195)
- **file42-integrator (Doc 4):** "TC UNIQUE -- File 42 has no tier routing" (line 237)
- **verification-prompt (Doc 5):** N/A
- **file-structure (Doc 6):** build-page SKILL.md routes by tier (lines 118-145)

**Confidence: 5/6**

### A-7: TC Phases 0-3.5 (Metaphor Derivation) Are Untouched

- All 6 proposals agree: TC's content analysis and metaphor derivation pipeline (Phases 0-3.5) is the intellectual core and should not be modified beyond minimal edits (Change 1 recipe framing).

**Confidence: UNANIMOUS (6/6)**

### A-8: PA Skill Remains Separate for Post-Build Verification

- All 6 proposals agree: the perceptual-auditing skill stays independent, used for external verification after the build. Fresh-eyes principle is non-negotiable.

**Confidence: UNANIMOUS (6/6)**

---

## B. CONTRADICTION MAP — Where Proposals Disagree

### B-1: CRITICAL — Is `/build-page` an Orchestrator Skill or Not?

**form-proposal (Doc 1) says NO:**
> "An orchestrator would be a 4th layer that calls the other 3. This creates a meta-to-output ratio problem... The USER is the orchestrator." (lines 29-34)
> "NOT a new orchestrator." (line 188)

**ux-designer (Doc 3) says YES:**
> "/build-page ... Trigger phrases: 'build a page'... 'run the pipeline'" (lines 22-31)
> "The `/build-page` skill wraps and orchestrates existing skills." (line 756)
> "The NEW code is ~200-300 lines of orchestration." (line 785)

**file-structure (Doc 6) says YES:**
> "The `/build-page` skill is the PRIMARY entry point for Pipeline v2." (line 92)
> Defines a new SKILL.md at `~/.claude/skills/build-page/SKILL.md` (line 31)

**Why they differ:** Doc 1 rejects an orchestrator as violating Gate 6 (meta-to-output ratio) and adding a complexity layer. Docs 3 and 6 see an orchestrator as the natural UX entry point that reduces user friction.

**Which is more supported by corpus evidence:** The corpus's M-1 (cheapest experiment) and the user's stated preference for simplicity both support the orchestrator. The Gate 6 concern is valid but mitigated -- 350 lines of orchestration producing output is NOT the 660:1 ratio problem. The 660:1 was analysis-without-codification. An orchestrator that triggers builds IS output.

**Recommended resolution:** Doc 3/6 are correct. The orchestrator IS the answer. Doc 1's concern is addressed by keeping it thin (~350 lines) and ensuring it ONLY routes and dispatches -- zero analysis, zero planning, zero meta-work. Rename the concern: "orchestrator-as-analysis" is rejected; "orchestrator-as-router" is accepted.

---

### B-2: CRITICAL — Skill Naming: `/build-page` vs `/page-builder` vs Separate Recipe File

**form-proposal (Doc 1):** `~/.claude/skills/page-builder/SKILL.md` -- the builder skill itself (~1,000-1,200 lines) (line 78)

**ux-designer (Doc 3):** `~/.claude/skills/build-page/SKILL.md` -- an orchestrator skill (~200-300 lines) (line 759)

**file42-integrator (Doc 4):** `~/.claude/skills/page-building/SKILL.md` -- the builder skill as standalone (line 156)

**file-structure (Doc 6):** `~/.claude/skills/build-page/SKILL.md` (~350 lines, orchestrator) + `design-system/compositional-core/grammar/operational-recipe.md` (~650 lines, recipe) (lines 31, 54)

**Why they differ:** The fundamental disagreement is whether the recipe lives IN a skill file (Doc 1, 4) or as a design-system file referenced BY a skill (Doc 6).

**Which is more supported:** Doc 6's separation is strongest. Reasons:
1. Skills are ~/.claude/skills/ -- user-facing invocation points. The recipe is infrastructure, not invocation.
2. A 1,200-line skill file (Doc 1) is the same bloat problem that plagued the original prompt.
3. Separating orchestration (~350 lines) from recipe (~650 lines) means each file has one purpose.
4. The recipe in grammar/ sits alongside mechanism-catalog.md -- the two files builders need most are co-located.

**Recommended resolution:** Adopt Doc 6's architecture. `/build-page` is the thin orchestrator skill (~350 lines). The recipe lives at `compositional-core/grammar/operational-recipe.md` (~650 lines). This is NOT what Doc 1 proposes (Doc 1 wants the recipe to BE the skill).

---

### B-3: SIGNIFICANT — Recipe Line Count: ~650 vs ~1,000-1,200 vs ~1,800

**form-proposal (Doc 1):** "~1,000-1,200 lines, adapted from File 42" (line 80)

**file42-integrator (Doc 4):** "page-building SKILL.md (~1,800 lines) = File 42, promoted to skill" (line 275)

**file-structure (Doc 6):** "~650 lines ... strips all analysis, provenance, evidence chains, and risk assessments" (line 180)

**Why they differ:** Different opinions on how much of File 42's 1,746 lines to keep. Doc 6 strips aggressively (recipe only). Doc 1 keeps provenance as inline comments. Doc 4 keeps almost everything.

**Which is more supported:** The anti-reproduction protocol's Gate 1 REQUIRES provenance ("From [file/experiment]"), which argues against Doc 6's aggressive stripping. But Gate 4 requires self-containment, which argues against Doc 4's 1,800 lines (too much for a builder to absorb). Doc 1's inline-comment approach balances both gates.

**Recommended resolution:** ~800-1,000 lines. Keep recipe steps (Doc 6), add 1-line provenance per section (satisfying Gate 1), and include the Quick Reference Card. Strip multi-paragraph evidence sections (they stay in ephemeral File 42).

---

### B-4: SIGNIFICANT — Background Color Delta: >= 10 RGB vs >= 15 RGB

**file42-integrator (Doc 4):** "F42 says >= 10 RGB" (line 291) and "codification map says >= 15 RGB" (line 291)

**relationship-map (Doc 2):** "recommend >= 15 RGB -- researched value" (line 344)

**file-structure (Doc 6):** ">= 15 RGB points (any channel)" in the threshold table (line 271)

**verification-prompt (Doc 5):** ">= 15 RGB points per channel between adjacent zones" (line 241)

**Why they differ:** File 42 was written with a stricter 10 RGB minimum. The codification map research settled on 15 RGB as the researched value.

**Recommended resolution:** 15 RGB. The codification map's value is the more researched number. 10 RGB is stricter than needed and constrains palette flexibility unnecessarily. All permanent files should use 15 RGB consistently.

---

### B-5: SIGNIFICANT — Stacked Gap Maximum: 120px vs 192px

**relationship-map (Doc 2):** "F42's 120px is per-boundary arithmetic; codification map's 192px is the binary gate" (line 278). Also: "One number (recommend 192px from codification map)" (line 342)

**file-structure (Doc 6):** "192px" in tokens.css and perception-thresholds.md (lines 288, 494)

**verification-prompt (Doc 5):** "<= 120px stacked" (line 245)

**form-proposal (Doc 1):** "Stacking arithmetic built into Phase 6 of page-builder skill" (line 207) -- does not specify which number

**Why they differ:** File 42's recipe targets 120px maximum for optimal spacing. The codification map's gate runner uses 192px as the binary FAIL threshold. These are different measurements: 120px is the RECIPE TARGET (what you aim for), 192px is the GATE THRESHOLD (when you fail).

**Recommended resolution:** BOTH numbers are correct at different levels. The recipe should say "target <= 120px total gap at boundaries." The gate runner should FAIL at > 192px (hard ceiling). The verification prompt (Doc 5) should be updated from 120px to specify both: "target 120px, gate fail 192px." This is the same pattern as speed limits -- the RECIPE says "drive 60 mph" and the GATE says "fail at 80 mph."

---

### B-6: MINOR — Phase Numbering: TC Phases 0-5 vs File 42 Phases 0-8

**relationship-map (Doc 2):** Flags this as Hard Conflict C1: "Phase numbering collision (TC 0-5 vs F42 0-8) ... confuses agents about which phase they're in" (line 288)

**form-proposal (Doc 1):** Uses TC Phases 0-5 and page-builder Phases 0-8 as SEPARATE numbering (lines 62-91)

**file-structure (Doc 6):** Uses "operational-recipe Phases 0-8" consistently (line 191-214)

**ux-designer (Doc 3):** Uses "Phase 0/8 through Phase 8/8" for the build progress display (lines 143-153)

**Why they differ:** Doc 2 sees this as a conflict; Docs 1, 3, 6 treat them as separate namespaces (TC phases vs recipe phases).

**Recommended resolution:** Separate namespaces is correct. TC has "TC Phase 0" through "TC Phase 5." The recipe has "Build Phase 0" through "Build Phase 8." The UX display already handles this (Doc 3 shows "Phase 0/8" during building). Doc 2's concern is resolved by prefixing -- no renumbering needed.

---

### B-7: MINOR — Transition Type System: 3 Types vs 5x5 Matrix

**relationship-map (Doc 2):** "Tier-gated: Middle uses 3-type, Ceiling+ uses full grammar" (line 297)

**file42-integrator (Doc 4):** "F42's 3-type system is simpler and more actionable. TC's 5x5 matrix is more nuanced" (line 141-142)

**form-proposal (Doc 1):** Does not address this specifically

**Recommended resolution:** Doc 2's tier-gating is correct. Middle tier uses File 42's 3-type system (Smooth/Bridge/Breathing). Ceiling+ uses TC's full grammar. The recipe should include both with a tier gate.

---

### B-8: MINOR — Where Does the Anti-Reproduction Protocol Live?

**file-structure (Doc 6):** "Already embedded... it is a behavioral rule enforced by the skill's phase-gated architecture" (line 631). No separate file.

**verification-prompt (Doc 5):** Exists as a standalone verification artifact (~537 lines) with 7 binary gates

**anti-reproduction protocol (Doc 7):** Exists as its own document with 7 gates + 5 meta-gates + sunset protocol (~457 lines)

**Why they differ:** Doc 6 says the protocol's CONTENT is embedded in existing files and doesn't need a permanent home. Docs 5 and 7 treat it as a standalone reference.

**Recommended resolution:** The protocol stays in ephemeral as a DESIGN artifact (like File 42's analysis sections). Its OPERATIONAL content -- the 7 gates -- should be embedded in two places: (1) the verification prompt (Doc 5) as a standalone audit tool, and (2) the build-page SKILL.md as a post-build gate checklist. No new permanent file needed.

---

## C. GAP MAP — What No Agent Addressed

### C-1: CRITICAL — No Concrete `/build-page` SKILL.md Content Was Written

All 6 proposals DESCRIBE what the build-page skill should contain. None WROTE it. Doc 6 has the most detailed spec (~70 lines of structure), but it is a description OF a file, not the file itself. The operational recipe extraction from File 42 has not been done. Zero permanent output exists.

**This is Gate 6 in action.** The meta-to-output ratio for Pipeline v2 architecture alone is now ~5,800 lines of analysis / 0 lines of output = infinity:1.

### C-2: SIGNIFICANT — No TC Trimming Plan

Multiple proposals mention trimming TC SKILL.md:
- Doc 1: "TC remains the content-analysis pipeline" (unchanged)
- Doc 4: "TC SKILL.md (~1,200 lines) = Phases 0-3.5" (trim Phase 4-5)

But NO proposal provides the specific cut plan: which lines of TC Phase 4 are deleted, which are relocated to the recipe, which survive. Doc 4 lists "TC Content That File 42 SUPERSEDES" (8 items) and "TC Content That Should ENRICH File 42" (4 items), but does not provide line-by-line edit instructions.

### C-3: SIGNIFICANT — No Error Recovery During Build

Doc 3 covers error recovery beautifully at the USER level (gate failures, timeouts, model unavailability). But no proposal covers what happens when the BUILDER encounters an error MID-PHASE:
- What if Phase 3 backgrounds fail the warm palette check?
- What if Phase 4 creates borders that visually conflict with zone backgrounds?
- What if Phase 5 typography doesn't produce the minimum 2px delta?

File 42 has per-phase perception checks, but these are PASS/FAIL gates, not recovery procedures. If a phase's check fails, what does the builder DO? Roll back? Try alternative values? Skip to the next phase?

### C-4: SIGNIFICANT — Content-Specific Adaptation Is Underspecified

File 42's Phase 0 uses word count and content type to determine zones. But the proposals don't address how the recipe adapts to DIFFERENT content types:
- API reference (table-heavy, code-heavy)
- Tutorial (step-by-step, code + prose)
- Philosophical essay (prose-dominant)
- Comparison document (grid-heavy)
- Design system showcase (self-referential)

Doc 6 mentions File 42's "Content Decision Guide" (line 222), but no proposal elaborates on how the 9-phase recipe changes for different content structures.

### C-5: MINOR — No Migration Path for Existing Pages

The design system has existing built pages (CD-006, DD-006, remediation output). No proposal addresses:
- Do existing pages get rebuilt with Pipeline v2?
- How does `/build-page --remediate` differ from a fresh build?
- Are existing pages grandfathered or held to Pipeline v2 standards?

### C-6: MINOR — No Version Control Strategy

If the recipe's CSS values are "starting points, not universal answers" (Doc 2, line 204), how do they evolve? After build N reveals that 15 RGB is too low for certain content types, who updates the recipe? No proposal addresses the recipe's evolution lifecycle.

### C-7: MINOR — No Batch Mode Implementation Detail

Doc 3 describes batch mode conceptually (lines 645-662) but no proposal addresses the implementation: parallel agent management, shared tokens.css loading, cross-page consistency when building multiple pages from the same content set.

---

## D. ANTI-REPRODUCTION GATE CHECK — Does the Proposed Architecture Pass?

Running each of the 7 binary gates from the anti-reproduction protocol against the PROPOSED Pipeline v2 architecture (not an artifact, but the design itself).

### Gate 1: Compression — Do proposed rules have concrete value + provenance + violation example?

**ASSESSMENT: PARTIAL PASS**

The operational recipe (derived from File 42) will inherit File 42's concrete values and provenance. But the orchestrator skill (build-page SKILL.md) as described by Docs 3 and 6 contains ROUTING rules without violation examples:

- "Skip Phases 1-3 of tension-composition" -- no violation example of what happens if you DON'T skip
- "Read: prohibitions.md + tokens.css + mechanism-catalog.md" -- no violation example

These are routing instructions, not building instructions, so the violation-example requirement may be too strict here. But Gate 1 makes no exception for routing.

**VERDICT: CONDITIONAL PASS -- routing instructions should carry lightweight provenance ("From Phase D: 4/5 pages violated container width when builders skipped prohibitions.md") but do NOT need full VIOLATION LOOKS LIKE examples.**

### Gate 2: Judgment Rules — Are all rules binary?

**ASSESSMENT: PASS**

All proposals specify binary rules for building phases. The only judgment check is PA-05 ("Does this feel DESIGNED?"), which is the permitted exception (administered by fresh-eyes agents, not the builder).

No proposal introduces new judgment rules. The architecture is clean.

**VERDICT: PASS**

### Gate 3: Guardrail-to-Playbook Ratio — Is ratio <= 1:1 in execution sections?

**ASSESSMENT: PASS (by design)**

The entire architecture is designed around the recipe (playbook) format. File 42's measured ratio is 0.32:1 (actions dominate). No proposal adds guardrails to execution sections. Soul constraints are explicitly separated as identity-level READ-ONCE content.

**VERDICT: PASS**

### Gate 4: Builder Visibility — Is the builder's spec self-contained?

**ASSESSMENT: PASS (with caveat)**

Doc 6's architecture routes ALL of these to the builder:
- prohibitions.md (soul constraints)
- tokens.css (vocabulary)
- mechanism-catalog.md (FULL, not truncated)
- operational-recipe.md (the recipe)
- build plan from planner (metaphor + zone architecture)

The builder receives everything needed. The caveat: perception thresholds live in a SEPARATE file (perception-thresholds.md) referenced by the recipe. If the builder doesn't read it, thresholds are missing. Doc 6 mitigates this by embedding a copy in the recipe's Quick Reference Card.

**VERDICT: PASS (thresholds must be embedded inline, not just referenced)**

### Gate 5: Quality Routing — Are CSS-rich files routed to CSS-writing agents?

**ASSESSMENT: PASS**

The architecture explicitly routes the mechanism catalog (CSS-rich) and operational recipe (CSS-rich) to the builder agent. The planner receives the TC skill (thinking-rich). This is the direct fix for the diagnosed failure.

**VERDICT: PASS**

### Gate 6: Meta-to-Output Ratio — Is ratio <= 10:1?

**ASSESSMENT: FAIL**

Current state: ~5,800 lines of architecture proposals + ~4,000+ lines of meta-cognitive documents + ~23,000+ lines of analysis corpus = ~33,000 lines META. Output: 0 lines of permanent file changes.

**Current ratio: INFINITY:1**

This is the SAME gate violation the anti-reproduction protocol flagged at the start. The 6 proposals are themselves analysis, not output. The architecture is sound, but it has produced zero permanent files.

**VERDICT: FAIL -- the next action MUST be codification, not more architecture**

### Gate 7: Recipe Format — Are building phases recipe format?

**ASSESSMENT: PASS (by inheritance)**

The operational recipe inherits File 42's recipe format. All proposals explicitly require recipe format for builder-facing content. The verification prompt (Doc 5) has a dedicated gate for this.

**VERDICT: PASS**

### GATE CHECK SUMMARY

| Gate | Verdict | Evidence |
|------|---------|----------|
| 1. Compression | CONDITIONAL PASS | Recipe has values+provenance; orchestrator routing needs lightweight provenance |
| 2. Judgment | PASS | Zero new judgment rules; PA-05 is the permitted exception |
| 3. Guardrail ratio | PASS | Recipe format = playbook-dominant by design |
| 4. Builder visibility | PASS | All CSS-rich files routed to builder; thresholds embedded inline |
| 5. Quality routing | PASS | Mechanism catalog + recipe to builder; TC to planner |
| 6. Meta ratio | FAIL | 33,000+ lines meta, 0 lines output |
| 7. Recipe format | PASS | Inherited from File 42 |

**Score: 6/7 (with 1 conditional). The one FAILING gate (Gate 6) is the most urgent.**

---

## E. UNRESOLVED DECISIONS — Requires User Input

### E-1: Does `/build-page` Exist as an Orchestrator?

**Options:**
- **Option A (Doc 1):** No orchestrator. User manually invokes TC, then builder, then PA.
- **Option B (Docs 3, 6):** `/build-page` orchestrator that routes and dispatches.

**Evidence for A:** Simpler. No new skill. No meta-layer. Respects Gate 6 purity.
**Evidence for B:** Single-command UX. Reduces user friction from 3 invocations to 1. The orchestrator is ~350 lines of routing, not analysis.
**Stakes:** This determines whether Pipeline v2 has a single entry point or requires manual multi-step invocation. User experience vs architectural purity.

### E-2: Where Does the Recipe File Live?

**Options:**
- **Option A (Docs 1, 4):** `~/.claude/skills/page-builder/SKILL.md` (skill file, 1,000-1,800 lines)
- **Option B (Doc 6):** `design-system/compositional-core/grammar/operational-recipe.md` (design system file, ~650 lines)

**Evidence for A:** Self-contained. Builder reads ONE file. Skill invocation pattern.
**Evidence for B:** Separates orchestration from recipe. Co-locates with mechanism catalog. Smaller files. Recipe is infrastructure, not invocation.
**Stakes:** Architecture cleanliness vs builder simplicity. If the recipe is a design-system file, the builder must be told to read it (via build-page SKILL.md routing). If it's a skill, the builder reads the skill directly.

### E-3: How Aggressively to Strip File 42?

**Options:**
- **Option A (Doc 6):** Strip to ~650 lines (recipe only, no provenance)
- **Option B (Doc 1):** Strip to ~1,000-1,200 lines (recipe + inline provenance)
- **Option C (Doc 4):** Minimal stripping (~1,800 lines)

**Evidence for A:** Follows "execution spec < 100 lines per section" principle. Builders don't need provenance.
**Evidence for B:** Satisfies Gate 1 (compression gate requires provenance). 1-line citations are low-cost.
**Evidence for C:** Preserves all context. But violates the "builder doesn't need theory" principle.
**Stakes:** Gate 1 compliance vs builder cognitive load. The more provenance, the more context; but also more noise in the recipe.

### E-4: Should TC Phase 4 Be Trimmed?

**Options:**
- **Option A (Doc 4):** Trim TC from ~1,878 to ~1,200 lines by removing Phase 4 content superseded by File 42
- **Option B (Docs 1, 6):** Minimal TC edits (+72 lines for recipe framing, verify existing changes)

**Evidence for A:** TC Phase 4 is a checklist that the recipe supersedes. Removing it prevents confusion.
**Evidence for B:** Phase 4 still has unique content (mechanism selection logic, 5-category deployment, divergence verification). Don't break what works.
**Stakes:** Deduplication vs stability. Trimming TC is a larger change with higher risk of breaking the metaphor derivation pipeline.

### E-5: Should Codification Happen NOW or After More Discussion?

**Options:**
- **Option A:** Codify immediately. Gate 6 is violated. Every additional analysis document makes it worse.
- **Option B:** One more discussion round with the user, then codify.

**Evidence for A:** Anti-reproduction protocol explicitly says "the next action MUST be codification." Gate 6 is at infinity:1.
**Evidence for B:** M-4 (discussion-before-codification gate) says "No permanent file change is made without a user-approved discussion."
**Stakes:** These two meta-gates are in TENSION. Gate 6 says stop analyzing. M-4 says don't codify without approval. The resolution: present the architecture to the user for approval, then codify in the SAME session. No additional analysis documents.

---

## F. SELF-REFERENTIAL CHECK — Is This Architecture a Recipe or a Checklist?

Applying the corpus's own standards to the corpus's output.

### F-1: The 6 Proposals Collectively Are a THINKING Document, Not an Execution Spec

The 6 proposals explain WHY and WHAT. They do not tell you step-by-step HOW to codify Pipeline v2. There is no:
- "Step 1: Open tokens.css. Add this line at line 174."
- "Step 2: Open semantic-rules.md. Insert this block after Rule 2."
- "Step 3: Create operational-recipe.md. Write these 650 lines."

The proposals are EXACTLY what the corpus warned against: a checklist of properties ("the skill should contain X, Y, Z") rather than a recipe of actions ("write X, then Y, then Z").

**Verdict: The architecture proposals are CHECKLISTS. The codification step must convert them to RECIPES.**

### F-2: Meta-to-Output Ratio of the Architecture Phase Itself

- Architecture proposals: ~5,800 lines across 7 documents
- Permanent output produced: 0 lines
- Ratio: INFINITY:1

This is the recursive irony the anti-reproduction protocol (Doc 7) warned about: "the process of FIXING the pipeline is subject to the same failure modes." The architecture phase has reproduced Gate 6's failure.

### F-3: The Architecture's Guardrail-to-Playbook Ratio

Counting across all 6 proposals:
- Statements of the form "X must Y" or "X should Y" (guardrails/requirements): ~120
- Statements of the form "Write X" or "Add Y" with specific content: ~15
- Ratio: ~8:1

This is WORSE than the original prompt's 7.9:1. The architecture documents tell you what the output SHOULD BE without showing you what to WRITE.

**Verdict: The architecture phase has reproduced Gate 3's failure mode. The codification step must invert this ratio.**

### F-4: Does the Architecture Pass Its Own Verification Prompt?

Running Doc 5's 7 gates against the proposed architecture:
- Gate 1 (Compression): PARTIAL FAIL -- many rules lack violation examples
- Gate 2 (Judgment): PASS -- rules are binary
- Gate 3 (Guardrail ratio): FAIL -- 8:1
- Gate 4 (Builder visibility): PASS -- routing is explicit
- Gate 5 (Perception): PASS -- thresholds embedded
- Gate 6 (Meta ratio): FAIL -- infinity:1
- Gate 7 (Recipe format): FAIL -- proposals are checklists, not recipes

**Score: 3/7 -- the architecture documents would score "SIGNIFICANT REVISION NEEDED" on their own verification prompt.**

This is NOT a criticism of the proposals' quality. It is a structural observation: architecture documents are THINKING artifacts, and the verification prompt is designed for EXECUTION artifacts. The mismatch is expected. But it reinforces: **the next step must be execution, not more architecture.**

---

## SUMMARY OF CROSS-VALIDATION

### What Is Settled (High Confidence)
1. TC = THINKING, Recipe = BUILDING, PA = VERIFYING (separate concerns)
2. Recipe format is non-negotiable for builder content
3. Perception thresholds embedded in every phase
4. Tier-based routing (Floor/Middle/Ceiling/Flagship)
5. TC Phases 0-3.5 untouched
6. PA skill remains independent
7. Background delta: 15 RGB (not 10)
8. Stacked gap: recipe targets 120px, gate fails at 192px

### What Needs User Decision (5 unresolved)
1. `/build-page` orchestrator: yes or no?
2. Recipe location: skill file or design-system file?
3. File 42 stripping level: 650 / 1,000 / 1,800 lines?
4. TC Phase 4 trimming: aggressive or minimal?
5. Codify now or discuss first?

### What the Architecture Phase Got Wrong (Self-Referential)
1. Produced 5,800 lines of analysis and 0 lines of output (Gate 6 violation)
2. Guardrail-to-playbook ratio of 8:1 (Gate 3 violation)
3. Proposals are checklists, not recipes (Gate 7 violation)
4. Would score 3/7 on its own verification prompt

### The Single Most Important Next Step
**STOP ANALYZING. START CODIFYING.**

The architecture is sound. The 8 agreed-upon points provide enough foundation. The 5 unresolved decisions can be made by the user in 10 minutes. Every additional architecture document worsens Gate 6. The anti-reproduction protocol's own recommendation (line 437): "Pick the 5 highest-confidence findings, write the permanent edits, verify, discuss, merge, build a test page."

---

**END OF CROSS-VALIDATION**

**Statistics:**
- Agreements found: 8 (all high-confidence)
- Contradictions found: 8 (2 critical, 3 significant, 3 minor)
- Gaps found: 7 (1 critical, 3 significant, 3 minor)
- Anti-reproduction gates: 6/7 PASS (Gate 6 FAIL)
- Unresolved decisions: 5
- Self-referential score: 3/7 (architecture docs fail their own verification)
- Recommended next action: CODIFY (not more analysis)
