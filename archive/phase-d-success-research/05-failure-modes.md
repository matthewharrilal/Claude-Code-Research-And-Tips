# Phase D Failure Mode Analysis

**Author:** Failure Mode Analyst
**Date:** 2026-02-14
**Context:** Phase D Extraction Validation — First test of compositional-core/ sufficiency
**Status:** COMPREHENSIVE RISK MAP

---

## EXECUTIVE SUMMARY

Phase D tests whether compositional-core/ is sufficient for building KortAI pages WITHOUT pattern-matching to prior explorations. This is THE critical validation before writing the playbook for 75 production pages.

**Five failure mode categories analyzed:**

1. **FALSE PASS** — Test says "works" when extraction is insufficient (12 scenarios)
2. **FALSE FAIL** — Test says "broken" when extraction is fine (8 scenarios)
3. **AMBIGUOUS** — Results don't clearly indicate pass/fail (9 scenarios)
4. **EXECUTION FAILURES** — Agent team coordination issues (8 scenarios from 14 teams)
5. **MINIMUM VIABLE PHASE D** — What's absolutely required (4 dimensions)

**Highest-risk failure modes:**
- **Test content too simple** (doesn't exercise enough extraction)
- **Agent bypasses library** (writes custom CSS, page looks good, test passes)
- **Agent pattern-matches to DD-006** (but divergence check not enforced)
- **Agents don't write output files** (THE critical failure mode, seen in 6/14 teams)
- **Playwright contention** (max 2 concurrent, contention causes fallback to source-code analysis)

**Core insight:** Phase D can APPEAR to pass while extraction is insufficient. Detection mechanisms must be STRUCTURAL (programmatic checks) not subjective ("would ship" evaluation).

---

## 1. FALSE PASS — Test Says "Works" When It Doesn't

**Scenario:** Phase D appears to succeed, but compositional-core/ is actually insufficient for migration. Extraction gaps exist but weren't exposed by test content or caught by evaluation.

### 1.1 Test Content Too Simple

**Problem:**
- Test page uses only basic components (header, paragraph, callout, code block)
- Never exercises complex patterns (CRESCENDO density, border-weight gradient, fractal compression)
- Agent builds successfully using 10% of extraction → Phase D passes
- Migration to 75 pages discovers extraction gaps (missing patterns for bento grids, stats bars, conversational flows)

**Why this is FALSE PASS:**
Phase D validated library sufficiency for SIMPLE pages, not REPRESENTATIVE pages. Test content didn't exercise enough extraction surface area.

**Detection mechanism:**
- **STRUCTURAL CHECK:** Content complexity score BEFORE building
  - Count section types (narrative prose, data tables, code examples, Q&A pairs, multi-column layouts)
  - Require minimum diversity (5+ section types, 3+ density zones, 2+ organizational patterns)
  - If content score < threshold → SELECT DIFFERENT CONTENT

- **PROGRAMMATIC CHECK:** Extraction coverage measurement
  - Count components used from library (actual usage)
  - Count mechanisms applied (border-weight, 2-zone DNA, compression)
  - Require minimum coverage (8+ components, 5+ mechanisms)
  - If coverage < 60% → content too simple, FAIL VALIDATION

**Mitigation:**
- Use content selection criteria from 09-EXTRACTION-VALIDATION-PROTOCOL.md
- Playbook content = high complexity (multi-pattern, metaphor-driven)
- Boris content = medium complexity (technical, structured)
- AVOID tutorial content (too uniform, repetitive structure)

---

### 1.2 Agent Bypasses Library (Custom CSS)

**Problem:**
- Agent reads compositional-core/, understands vocabulary
- Ignores components.css, writes custom CSS from scratch
- Uses correct token values (var(--color-primary), var(--space-8))
- Page looks good, soul check passes (border-radius: 0, correct colors)
- Phase D PASSES but library was never used

**Why this is FALSE PASS:**
Library sufficiency was never tested. Agent proved tokens work, not that components/mechanisms work. Migration playbook assumes library use; agents will bypass and write custom CSS.

**Detection mechanism:**
- **PROGRAMMATIC CHECK:** CSS source analysis
  - Count lines of custom CSS (agent-written, not from components.css)
  - Count lines from library CSS (directly imported or copied)
  - Calculate library utilization ratio: library_lines / total_lines
  - Require MINIMUM 55% library utilization
  - If library_ratio < 0.55 → FAIL VALIDATION (agent bypassed library)

- **STRUCTURAL CHECK:** Prompt enforcement
  - Phase 4 MUST load components.css (verify via tool call log)
  - Phase 6 implementation prompt MUST say "USE components from library"
  - Verification: Did agent call Read tool on components.css?
  - If NO → library wasn't consulted, FAIL VALIDATION

**Mitigation:**
- Execution spec MUST include binary rule: "REQUIRED: Use components from components.css. Custom CSS permitted ONLY for metaphor-specific vocabulary (e.g., .geological-stratum). Do NOT rewrite callouts, code blocks, or tables from scratch."
- Add library utilization check to verification gate (programmatic, not subjective)

---

### 1.3 Agent Pattern-Matches to DD-006 (Divergence Not Enforced)

**Problem:**
- Agent reads case-studies/ during Phase 5 (permitted)
- Metaphor is "geological layers" (similar to DD-006 fractal/stratigraphy)
- Agent doesn't complete divergence table (skips Phase 3.5 justification)
- Copies CSS patterns from DD-006 (6 strata, border-weight gradient, fractal rhythm)
- Page looks excellent (DD-006 is crown jewel, 20+ refs)
- Phase D PASSES, agent followed process, used library correctly

**Why this is FALSE PASS:**
Anti-gravity mechanisms failed. Agent pattern-matched despite warnings. Phase D validated that copying DD-006 works (true but unhelpful). Doesn't prove extraction enables NOVEL metaphors.

**Detection mechanism:**
- **STRUCTURAL CHECK:** Divergence verification gate
  - If metaphor matches case-studies/_INDEX.md → 5-dimension divergence table REQUIRED
  - Check: Does agent's metaphor appear in _INDEX.md?
  - If YES and no divergence table → FAIL VALIDATION
  - Metaphor lock-in (Phase 3.5) MUST happen BEFORE reading case-studies/

- **PROGRAMMATIC CHECK:** Metaphor vocabulary analysis
  - Extract CSS class names from agent output (e.g., .stratum, .bedrock, .geological)
  - Compare to case study CSS class names (from DD-006, OD-004, CD-006)
  - Calculate vocabulary overlap: shared_terms / total_terms
  - If overlap > 40% and no divergence justification → pattern-matching detected, FAIL VALIDATION

**Mitigation:**
- Execution spec MUST enforce Phase 3.5 gate BEFORE Phase 5 (binary sequence)
- Lead agent verifies divergence table existence (structural check, not content quality)
- If convergence detected: require STRONG justification (independent convergence is rare but valid)

---

### 1.4 "Would Ship" Evaluation Biased by Familiarity

**Problem:**
- Agent builds page using extraction
- Perceptual audit: 46/48 PA (excellent score)
- Evaluator checks page: "Looks like KortAI, feels coherent, I'd ship this"
- Phase D PASSES based on subjective "would ship" judgment
- But: Evaluator has seen DD-006, OD-004, CD-006 dozens of times
- Familiarity bias: Page "looks right" because it echoes known patterns
- Doesn't prove extraction works for UNFAMILIAR metaphors

**Why this is FALSE PASS:**
Evaluation criteria is contaminated by evaluator's library exposure. "Looks like KortAI" might mean "looks like DD-006" not "successfully applies KortAI identity to novel metaphor."

**Detection mechanism:**
- **ELIMINATE SUBJECTIVE CRITERIA:** Replace "would ship" with programmatic checks
  - Soul compliance: 0 violations (border-radius, box-shadow, palette) — BINARY
  - Guardrails: 940px container, 16px spacing, 32px padding, 40% compression — MEASURABLE
  - PA score: ≥45/48 (Tier 1+2 mandatory+standard) — QUANTITATIVE
  - Coverage: ≥60% library utilization — PROGRAMMATIC
  - No "feels right" or "looks good" evaluation

- **FRESH-EYES VALIDATION:** Zero-context auditor
  - Spawn auditor agent with NO library exposure (hasn't read DD/OD/CD)
  - Provide ONLY prohibitions.md + tokens.css + PA skill
  - Auditor checks soul compliance + guardrails without reference to library aesthetics
  - If zero-context auditor finds violations → fresh perspective caught bias

**Mitigation:**
- Validation criteria MUST be programmatic (measurable, binary, quantitative)
- "Would ship" is NOT a valid Phase D criterion
- Use fresh-eyes auditor pattern from 4th team (Comprehensive Hierarchical Audit)

---

### 1.5 Guardrails Baked Into Library CSS Mask Gaps

**Problem:**
- compositional-core/components/components.css has guardrails baked in:
  ```css
  .page-container { max-width: 940px; } /* Baked */
  .callout { padding: 32px; } /* Baked */
  .section { margin-bottom: 48px; } /* Baked */
  ```
- Agent uses components.css as-is
- Guardrails automatically satisfied (940px container, 32px padding)
- Perceptual audit PASSES (guardrails met)
- But: Agent didn't APPLY guardrails, library enforced them
- Migration playbook assumes agents understand WHY guardrails exist
- If agents bypass library (write custom CSS), guardrails will be violated

**Why this is FALSE PASS:**
Phase D validated that using library CSS satisfies guardrails (true). Doesn't validate that agents UNDERSTAND guardrails or can APPLY them to custom CSS.

**Detection mechanism:**
- **SPLIT VALIDATION:** Test library usage AND guardrail understanding separately
  - **Test 1 (Track 1):** Use library CSS as-is → validates library correctness
  - **Test 2 (Track 2):** Derive metaphor + custom CSS → validates guardrail internalization
  - Both tests MUST pass

- **PROGRAMMATIC CHECK:** Guardrail measurement on custom CSS
  - Identify agent-written CSS (not from library)
  - Measure guardrails on custom sections:
    - Container width ≥ 940px?
    - Padding ≥ 32px?
    - Compression ratio ≤ 40%?
  - If custom CSS violates guardrails → agent didn't internalize, FAIL VALIDATION

**Mitigation:**
- Phase D MUST include Track 2 test (custom CSS, not just library use)
- Track 2 test validates guardrail application (agent must measure and enforce)
- Both Track 1 (library) and Track 2 (custom) MUST pass

---

### 1.6 Agent Uses Tier 3 CSS to Cover Tier 2 Gaps

**Problem:**
- Library lacks Tier 2 component (e.g., blockquote)
- Agent writes custom blockquote CSS (Tier 3 metaphor-specific)
- Uses correct tokens, applies mechanisms, looks good
- Phase D PASSES (agent worked around gap successfully)
- But: Every Track 2 page will rewrite blockquote from scratch
- Library gap wasn't exposed because Track 2 workflow allows custom CSS

**Why this is FALSE PASS:**
Gap exists but was masked by Track 2 flexibility. Phase D should detect MISSING components, not validate that agents can write them from scratch.

**Detection mechanism:**
- **COMPONENT INVENTORY CHECK:** Cross-reference used components vs library
  - Before build: List components needed (header, callout, code, quote, table, stats)
  - After build: List components used (from CSS class analysis)
  - Compare to library inventory (component-inventory.md)
  - If agent used component NOT in library → gap detected
  - Document gap for Phase C remediation (add to library)

- **TRACK 1 CONSTRAINT:** Test Track 1 build (library-only, no custom CSS)
  - Force agent to use ONLY components.css
  - If agent can't complete page → gap exposed
  - This is the TRUE sufficiency test (library completeness)

**Mitigation:**
- Phase D MUST include Track 1 test (library-only, no custom CSS allowed)
- Track 1 failure = library gap (add missing component before playbook)
- Track 2 success doesn't prove library sufficiency (agents improvise)

---

### 1.7 Evaluation Standard Applied Inconsistently

**Problem:**
- Day 1: Evaluator strict (finds 12 PA violations, fails page)
- Day 2: Same page, different evaluator relaxed (finds 3 violations, passes page)
- Or: Same evaluator on different days (morning vs afternoon, energy level)
- Phase D result depends on evaluator mood/strictness, not extraction quality

**Why this is FALSE PASS:**
Evaluation is non-deterministic. Phase D might pass on Tuesday, fail on Wednesday.

**Detection mechanism:**
- **ELIMINATE EVALUATOR VARIANCE:** Use programmatic checks only
  - Replace human "squint test" with pixel-diff comparison (vs reference page)
  - Replace "feels coherent" with PA score threshold (≥45/48)
  - Replace "would ship" with soul compliance (0 violations)
  - Binary/quantitative criteria are deterministic

- **MULTI-AUDITOR CONSENSUS:** If subjective criteria required
  - Spawn 3 auditor agents (independent, parallel)
  - Each runs full PA + soul check
  - Require 2/3 consensus (majority vote)
  - If split decision (1 pass, 2 fail) → extraction has edge case issue

**Mitigation:**
- Validation criteria MUST be deterministic (programmatic, binary, quantitative)
- Minimize subjective evaluation (no "feels good" or "looks right")
- If subjective required: multi-auditor consensus (reduce variance)

---

### 1.8 Test Content Doesn't Exercise Responsive Breakpoints

**Problem:**
- Test content built for 1440px viewport (looks perfect)
- Guardrails met: 940px container, 32px padding, 16px spacing
- Perceptual audit at 1440px: 48/48 PA (flawless)
- Phase D PASSES
- Migration to production: pages tested at 768px
- Discovery: stats bars collapse to 1px height, labels smash headings, dead zones emerge
- All 14th team findings (skill enrichment) apply but weren't caught in Phase D

**Why this is FALSE PASS:**
Phase D tested ONE viewport (1440px). Guardrails work at desktop, fail at tablet. Responsive gaps weren't exposed.

**Detection mechanism:**
- **MULTI-VIEWPORT TESTING:** Mandatory 1440px AND 768px audits
  - Build at 1440px (primary viewport)
  - Audit at 1440px: soul + guardrails + PA
  - Resize to 768px (tablet breakpoint)
  - Audit at 768px: soul + guardrails + PA (SAME criteria)
  - If EITHER viewport fails → FAIL VALIDATION

- **RESPONSIVE CHECKLIST:** Specific 768px checks (from skill enrichment findings)
  - Stats bar height ≥ 8px at 768px (not 1px)
  - Label-to-heading gap ≥ 16px at 768px (not smashing)
  - Container ≥ 90% viewport width at 768px (not dead zones)
  - Compression ratio ≤ 40% at 768px (not cognitive overload)

**Mitigation:**
- 09-EXTRACTION-VALIDATION-PROTOCOL.md MUST require 2-viewport testing
- Both 1440px AND 768px MUST pass (not just desktop)
- Playwright auditor MUST resize and re-check (not assume responsive works)

---

### 1.9 Component CSS Needs Context-Specific Tweaks (Masked as Success)

**Problem:**
- Library component: `.callout { padding: 24px; border-left: 4px solid; }`
- Agent uses callout in narrow sidebar context (300px width)
- 24px padding = 48px total horizontal → 252px content width
- Looks cramped, but not a violation (guardrails say 32px MIN, this is 24px)
- Agent tweaks: `.sidebar .callout { padding: 16px; }` (context override)
- Page looks good, Phase D PASSES
- But: Library component needed context-aware adaptation
- Is this a gap (library incomplete) or expected flexibility (Tier 3 allowed)?

**Why this is AMBIGUOUS (leans FALSE PASS):
Library components worked, but needed context-specific overrides. If EVERY page needs overrides, library isn't "sufficient" — it's a starting point requiring customization.

**Detection mechanism:**
- **OVERRIDE TRACKING:** Count context-specific CSS overrides
  - Identify override selectors (`.context .component`, media queries)
  - Count override rules vs base library rules
  - Calculate override ratio: overrides / base_rules
  - If override_ratio > 20% → library needs more context variants

- **SEMANTIC GAP ANALYSIS:** Why were overrides needed?
  - Responsive behavior (media queries)? → Expected, not a gap
  - Narrow container adaptation? → Library should provide `.callout--compact`
  - Metaphor-specific styling? → Expected (Tier 3), not a gap
  - Workaround for library bug? → Gap, needs fix

**Mitigation:**
- Track overrides as separate metric (not just "library utilization")
- If overrides > 20% → investigate WHY (gap vs expected flexibility)
- Distinguish: responsive overrides (ok), component variants (missing), metaphor styling (ok)

---

### 1.10 PA Score Passes But Page Has Systemic Issue

**Problem:**
- Perceptual audit: 46/48 PA (96%, excellent)
- 2 failures: PA-18 (dead zone at footer), PA-32 (label smashing at 768px)
- Score exceeds threshold (≥45/48), Phase D PASSES
- But: Both failures are SYSTEMIC (seen in playbook epidemic, stats bar weakness)
- Library extraction didn't address known systemic issues
- Migration to 75 pages will reproduce same 2 failures everywhere

**Why this is FALSE PASS:**
PA score is high, but failures are RECURRING PATTERNS from prior work. Extraction should have FIXED systemic issues (via guardrails, mechanisms, guidelines).

**Detection mechanism:**
- **SYSTEMIC PATTERN DETECTION:** Cross-reference PA failures to known issues
  - Maintain registry of systemic issues (playbook dead zones, stats bar weakness, label smashing)
  - If PA failure matches systemic pattern → ESCALATE (not just log)
  - Systemic failures count 3x normal failures (weight adjustment)
  - Adjusted PA score: 46 - (2 systemic × 3) = 40/48 → FAIL

- **ROOT CAUSE REQUIREMENT:** If systemic failure detected
  - Don't just document failure
  - Require root cause analysis (WHY did library not prevent this?)
  - Trace to extraction gap (missing guardrail, missing mechanism)
  - Phase D output: extraction remediation plan (add to library)

**Mitigation:**
- Validation criteria MUST distinguish systemic vs isolated failures
- Known systemic issues (from 14 teams of history) MUST be explicitly checked
- If systemic issue reproduced → extraction gap, not agent error

---

### 1.11 Library Provides 50% of CSS But It's the RIGHT 50%

**Problem:**
- Library utilization: 50% (below 55% threshold)
- Other 50% is metaphor-specific vocabulary (`.geological-stratum`, `.bedrock-foundation`)
- Agent applied mechanisms correctly (border-weight, 2-zone DNA, compression)
- Page quality high, soul compliant, guardrails met
- But: 50% < 55% threshold → FAIL VALIDATION?

**Why this is AMBIGUOUS (leans FALSE PASS):
Threshold is arbitrary (55% chosen in protocol). If library provided the RIGHT 50% (identity, guardrails, mechanisms) and agent added metaphor creativity (other 50%), that's SUCCESSFUL composition. Failing on threshold alone misses nuance.

**Detection mechanism:**
- **QUALITATIVE LIBRARY ANALYSIS:** What 50% came from library?
  - Identity CSS (soul constraints, palette, typography) → library
  - Guardrail CSS (940px container, 32px padding) → library
  - Mechanism CSS (border-weight gradient, 2-zone DNA) → library
  - Metaphor CSS (class names, semantic structure) → custom
  - If library provided identity+guardrails+mechanisms → SUFFICIENT (even if 50%)

- **SEMANTIC CLASSIFICATION:** Not just line count, but CSS purpose
  - Count identity lines (tokens, soul constraints)
  - Count mechanism lines (border-weight, compression, DNA)
  - Count metaphor lines (custom vocabulary)
  - Require: identity+mechanisms ≥ 40% from library (not total 55%)

**Mitigation:**
- Replace rigid 55% threshold with semantic breakdown
- REQUIRE: Identity CSS ≥80% library, Mechanism CSS ≥60% library
- ALLOW: Metaphor CSS 0% library (Track 2 encourages custom vocabulary)

---

### 1.12 Divergence Check Passes But Metaphor is Shallow

**Problem:**
- Agent derives metaphor: "Modular building blocks"
- Divergence check: Not in case-studies/_INDEX.md → PASS
- Agent builds page using "block" vocabulary (`.block`, `.module`, `.component`)
- Page works, looks fine, soul compliant
- But: Metaphor is GENERIC (no structural isomorphism, no tension resolution)
- Extraction enabled shallow metaphors, not RICH ones
- Migration to 75 pages: 40 pages use "blocks," 30 use "layers," 5 use "grids"
- Diversity collapses to 3 generic metaphors

**Why this is FALSE PASS:**
Anti-gravity checked divergence from LIBRARY, not depth of derivation. Shallow metaphors pass divergence (technically novel) but fail richness.

**Detection mechanism:**
- **METAPHOR RICHNESS SCORING:** From tension-composition skill Phase 2
  - Structural isomorphisms: ≥3 mappings (content structure → metaphor structure)
  - Tension resolution: Does metaphor address content tension?
  - Vocabulary depth: ≥8 metaphor-specific terms (not generic "section," "block")
  - Perceptual coherence: Metaphor survives squint test
  - Require richness score ≥ 60% (from Phase 2 derivation)

- **GENERIC METAPHOR FILTER:** Flag overly generic domains
  - Blocks, layers, grids, modules, cards → GENERIC (weak isomorphism)
  - Geological strata, botanical growth, theatrical acts → SPECIFIC (strong isomorphism)
  - If metaphor domain is generic → REQUIRE strong justification

**Mitigation:**
- Divergence check is NECESSARY but not SUFFICIENT
- Add metaphor richness requirement (from tension-composition Phase 2)
- Generic metaphors (blocks, layers) require 2x justification burden

---

## 2. FALSE FAIL — Test Says "Broken" When It's Fine

**Scenario:** Phase D appears to fail, but compositional-core/ is actually sufficient. Test exposed agent errors, content edge cases, or overly strict evaluation — not extraction gaps.

### 2.1 Test Content is Pathological Edge Case

**Problem:**
- Test content: Nested 8-level hierarchy (uncommon structure)
- Library designed for 3-4 levels (normal documentation)
- Agent struggles to apply mechanisms at depth 8
- Border-weight gradient unclear (4px, 3px, 2px, 1px, 0.5px, 0.25px?)
- Spacing compression breaks at level 7 (padding → 2px, unreadable)
- Phase D FAILS
- But: No KortAI page has 8-level nesting (real content is 3-4 levels)

**Why this is FALSE FAIL:**
Library is sufficient for REPRESENTATIVE content. Test content was pathological (extreme edge case). Failing edge case doesn't mean extraction is broken.

**Distinction mechanism:**
- **CONTENT REPRESENTATIVENESS CHECK:** Before testing
  - Compare test content structure to production content samples
  - Measure: hierarchy depth, section count, density variance, pattern complexity
  - If test content exceeds 95th percentile → EDGE CASE (not representative)
  - Use 50th-75th percentile content (typical, not extreme)

- **GRACEFUL DEGRADATION ACCEPTANCE:** If edge case tested
  - Library doesn't need to handle 8-level nesting perfectly
  - Require: graceful degradation (readable, not beautiful)
  - If agent produces readable output at depth 8 → ACCEPTABLE
  - Library optimized for common cases (3-4 levels), not all cases

**Resolution:**
- If Phase D fails on edge case → SELECT DIFFERENT CONTENT (representative)
- Edge case failure ≠ library insufficiency (design for common case, accept degradation for rare)

---

### 2.2 Agent Makes CSS Error (Not Library Gap)

**Problem:**
- Agent uses library component: `.callout { border-left: 4px solid var(--color-border); }`
- Agent writes: `.callout { border-left: var(--color-border); }` (missing width)
- CSS renders as `border-left: #888` (color only, no width → invisible)
- Perceptual audit: PA-12 FAIL (callout border missing)
- Phase D FAILS
- But: Library CSS was correct, agent made TYPO (not extraction gap)

**Why this is FALSE FAIL:**
Agent error, not library error. CSS typo could happen with ANY library. Phase D should test LIBRARY sufficiency, not AGENT competence.

**Distinction mechanism:**
- **CSS VALIDATION:** Programmatic syntax check
  - Run CSS linter on agent output (validate property completeness)
  - Detect: missing values, invalid syntax, malformed rules
  - If linter flags errors → AGENT ERROR (not library gap)

- **LIBRARY REFERENCE CHECK:** Compare agent CSS to library CSS
  - Agent wrote: `border-left: var(--color-border);`
  - Library has: `border-left: 4px solid var(--color-border);`
  - Agent OMITTED values (library was correct)
  - Classify as AGENT ERROR (copy-paste mistake)

- **RETRY PROTOCOL:** If agent error detected
  - Don't fail Phase D immediately
  - Respawn agent or provide correction prompt
  - Retry build with same content
  - If retry succeeds → agent error confirmed (not library gap)

**Resolution:**
- Distinguish library gaps (missing components) from agent errors (CSS typos)
- Agent errors should trigger retry, not Phase D failure
- If retry succeeds → PASS (library was sufficient, agent made mistake)

---

### 2.3 Perceptual Audit Overly Strict on First Build

**Problem:**
- Agent builds page (first attempt)
- Perceptual auditor flags: PA-42 (IMPLICIT metaphor check) — FAIL
- "Metaphor is too explicit, needs more subtlety"
- Agent rebuilds with adjustments
- Second attempt: PA-42 PASS
- But: First attempt was acceptable (subjective criteria)

**Why this is FALSE FAIL:**
PA-42 is subjective (implicit vs explicit). First-build strictness creates false negatives. Library was sufficient; auditor was overcritical.

**Distinction mechanism:**
- **ELIMINATE SUBJECTIVE PA QUESTIONS FROM GATE:** Phase D validation uses ONLY objective PA
  - Tier 1 mandatory (5 questions) → all objective (soul compliance, guardrails)
  - Tier 2 standard (15 questions) → mostly objective (spacing, contrast, alignment)
  - Tier 3 depth (28 questions) → includes subjective (PA-42 implicit check)
  - Phase D gate: Tier 1+2 only (20 questions, objective)
  - Tier 3 as advisory (log findings, don't fail on them)

- **MULTI-BUILD COMPARISON:** Allow iteration
  - First build: Tier 1+2 audit (objective)
  - If fails: Document specific violations (16px spacing not met, etc.)
  - Allow agent to fix and resubmit
  - If second build passes → library sufficient (agent needed iteration)

**Resolution:**
- Phase D gate uses ONLY objective PA criteria (Tier 1+2, not Tier 3)
- Subjective criteria (PA-42 implicit) logged but don't fail validation
- Allow agent iteration (1-2 rebuild attempts before declaring library gap)

---

### 2.4 Responsive Breakpoint Fails Due to Agent CSS Error (Not Library)

**Problem:**
- Agent builds page, desktop looks perfect (1440px)
- Resize to 768px: stats bar collapses to 1px height (FAIL)
- Investigation: Agent wrote custom stats CSS, forgot responsive rules
- Library has `.stats-bar` with correct 768px behavior
- Agent reinvented stats bar, introduced bug
- Phase D FAILS on responsive
- But: Library was correct, agent BYPASSED library (user error)

**Why this is FALSE FAIL:**
Agent bypassed library component. Responsive failure is agent's fault (wrote custom CSS), not library gap.

**Distinction mechanism:**
- **LIBRARY USAGE VERIFICATION:** Did agent use library component?
  - Check: Does agent CSS import `.stats-bar` from components.css?
  - Or: Agent wrote `.custom-stats` from scratch?
  - If custom CSS → agent bypassed library (not library gap)

- **COMPONENT AVAILABILITY CHECK:** Was library component adequate?
  - Library has `.stats-bar` with 768px responsive rules
  - Agent CHOSE not to use it (wrote custom instead)
  - Failure is AGENT DECISION (not library insufficiency)

- **ENFORCEMENT MECHANISM:** Prevent bypass
  - Phase D spec MUST say: "Use library components. Custom CSS ONLY for metaphor vocabulary."
  - If agent writes custom component CSS → VIOLATION (not library test)

**Resolution:**
- If responsive failure caused by custom CSS (not library CSS) → AGENT ERROR
- Phase D tests LIBRARY sufficiency (using components.css)
- Agent bypassing library invalidates test (not measuring library quality)

---

### 2.5 "Would Ship" Standard Applied Inconsistently (Strict Evaluator)

**Problem:**
- Agent builds page, objectively excellent:
  - Soul: 0 violations
  - Guardrails: all met (940px, 32px, 16px, 40%)
  - PA: 47/48 (1 minor: PA-28 dead zone 4px, threshold is 8px)
- Evaluator: "I wouldn't ship this, the 4px dead zone bothers me"
- Phase D FAILS on subjective "wouldn't ship"
- Different evaluator: "4px is minor, I'd ship this"

**Why this is FALSE FAIL:**
Evaluator applied personal preference, not objective criteria. Page objectively passes (47/48 PA, all guardrails met). Subjective "wouldn't ship" rejected valid output.

**Distinction mechanism:**
- **ELIMINATE "WOULD SHIP" CRITERION:** Use ONLY objective gates
  - Soul compliance: 0 violations (binary)
  - Guardrails: all 4 met (measurable)
  - PA score: ≥45/48 (quantitative)
  - Library utilization: ≥55% (programmatic)
  - No "would I ship this?" evaluation

- **THRESHOLD CLARITY:** Distinguish minor vs major violations
  - PA-28 (dead zone): threshold 8px, actual 4px → MINOR (within tolerance)
  - PA-12 (border missing): threshold 4px, actual 0px → MAJOR (outside tolerance)
  - Minor violations (within 50% of threshold) → don't fail validation
  - Major violations (outside threshold) → fail validation

**Resolution:**
- Replace "would ship" with objective thresholds
- Minor violations (close to threshold) → PASS with notes
- Major violations (far from threshold) → FAIL
- Evaluator preference is NOT valid Phase D criterion

---

### 2.6 Agent Needs Minor Tweaks (Iteration, Not Failure)

**Problem:**
- First build: PA score 42/48 (below 45 threshold)
- Violations: 3 spacing issues, 2 contrast issues, 1 dead zone
- Agent receives feedback, makes 6 CSS adjustments
- Second build: PA score 48/48 (perfect)
- But: Should first build have failed Phase D?

**Why this is FALSE FAIL (if no iteration allowed):
Library was sufficient; agent needed to apply it correctly. Iteration is normal (seen in 12th team post-fix synthesis: 27/30 fixes resolved on first try, 3 needed iteration).

**Distinction mechanism:**
- **ALLOW LIMITED ITERATION:** Phase D is validation, not one-shot test
  - First build: Full audit, document violations
  - If violations ≤ 6 and all FIXABLE (not library gaps) → allow rebuild
  - Agent fixes violations, resubmits
  - Second build: Re-audit
  - If second build passes → PASS (library sufficient, agent needed iteration)

- **ITERATION BUDGET:** Prevent infinite loops
  - Maximum 2 rebuild attempts
  - If first build: 12 violations → too many, likely library gap (FAIL)
  - If first build: 4 violations → reasonable, allow rebuild
  - If second build fails → FAIL (library or agent insufficient)

**Resolution:**
- Phase D allows 1-2 iterations (agent fixes violations)
- Library sufficiency = agent CAN fix violations using library (not need NEW components)
- Distinguish: fixable violations (iteration ok) vs unfixable (library gap, fail)

---

### 2.7 Library Provides Component But Missing ONE Variant

**Problem:**
- Library has `.callout` (standard) and `.callout--warning` (warning)
- Content needs success callout (green, positive message)
- Agent writes `.callout--success` from scratch (custom variant)
- Uses correct structure (border-left, padding), correct token (var(--color-accent-green))
- Page looks good, but library_utilization drops to 52% (below 55%)
- Phase D FAILS on library threshold
- But: Agent successfully EXTENDED library (added variant using library pattern)

**Why this is FALSE FAIL:
Library provided BASE pattern (`.callout` structure). Agent added VARIANT (success color). This is EXPECTED flexibility (Tier 3 composition). Failing on utilization threshold misses successful extension.

**Distinction mechanism:**
- **VARIANT CLASSIFICATION:** Distinguish base vs variant
  - Base component: `.callout` structure, mechanisms, tokens
  - Variant: `.callout--success` (extends base, changes color only)
  - If agent used base + added variant → EXTENSION (not bypass)

- **EXTENSION ACCEPTANCE CRITERIA:** When is extension valid?
  - Uses base structure (border-left, padding from library)
  - Uses token values (var(--color-*), not hardcoded colors)
  - Adds semantic variant (success, error, info) not arbitrary customization
  - If all 3 → VALID EXTENSION (not library gap)

- **LIBRARY UTILIZATION ADJUSTMENT:** Count extensions as library use
  - Base CSS: 100% library (`.callout` copied)
  - Variant CSS: 80% library (structure copied, color changed)
  - Adjusted utilization: (base + 0.8×variant) / total
  - If adjusted ≥ 55% → PASS

**Resolution:**
- Distinguish library gaps (missing base) from missing variants (expected extensions)
- Variants using library structure + tokens = VALID (not gaps)
- Adjust utilization calculation to credit extensions

---

### 2.8 PA Failure is Subjective Preference (Not Design System Violation)

**Problem:**
- Agent builds page
- Perceptual auditor: PA-35 FAIL — "Section spacing feels too tight"
- Actual spacing: 48px (var(--space-12))
- Threshold: ≥48px → MET
- Auditor: "48px is technically correct but feels cramped in this context"
- Phase D FAILS on PA-35
- But: Guideline was followed, token used correctly

**Why this is FALSE FAIL:**
Auditor applied subjective preference ("feels cramped") over objective criteria (48px met). Design system was followed; auditor wanted MORE than system requires.

**Distinction mechanism:**
- **OBJECTIVE THRESHOLD ENFORCEMENT:** Separate measurement from preference
  - PA-35 criterion: Section spacing ≥48px (measurable)
  - Measured value: 48px → PASS (meets threshold)
  - Auditor feeling: "feels cramped" → IRRELEVANT (subjective)
  - If threshold met → PASS (regardless of auditor preference)

- **PROGRAMMATIC OVERRIDE:** Use computed style measurement (not visual judgment)
  - Spawn programmatic auditor (no Playwright, file-only)
  - Measure computed `margin-bottom` on `.section` elements
  - If ≥48px → PASS (objective)
  - Visual auditor preference doesn't override programmatic measurement

**Resolution:**
- PA criteria with measurable thresholds use PROGRAMMATIC checks (not subjective)
- Auditor "feels cramped" is not valid failure reason if threshold met
- Subjective preferences logged as notes, don't fail validation

---

## 3. AMBIGUOUS — Results Don't Clearly Indicate Pass/Fail

**Scenario:** Phase D results are borderline, unclear, or contested. Metrics near thresholds, judgment calls required, or multiple interpretations possible.

### 3.1 Track 2 Page "Good" But Not "Great" (PA Score 42/48)

**Problem:**
- Track 2 build (metaphor-driven composition)
- Perceptual audit: 42/48 (87.5%)
- Threshold: ≥45/48 (93.75%)
- 3 failures: PA-18 (dead zone 6px, threshold 8px), PA-32 (label gap 14px, threshold 16px), PA-42 (metaphor borderline explicit)
- All failures are CLOSE to threshold (within 20%)
- Page looks decent, usable, ships in current state at most companies
- But: Below KortAI threshold (45/48)

**Ambiguity:**
Is this FAIL (below threshold) or ACCEPTABLE (close enough, minor violations)?

**Resolution protocol:**
- **STRICT INTERPRETATION:** Threshold is threshold
  - 42 < 45 → FAIL (no exceptions)
  - Library needs improvement OR content selection was too complex
  - Remediation: Fix library gaps, retry with same content

- **CONTEXT-AWARE INTERPRETATION:** Evaluate violation severity
  - All 3 violations are MINOR (within 20% of threshold)
  - No MAJOR violations (soul, guardrails all pass)
  - Metaphor quality high (just borderline explicit, not egregiously explicit)
  - Verdict: CONDITIONAL PASS (ship as-is, document minor violations for future improvement)

- **RECOMMENDED APPROACH:** Use tiered thresholds
  - ≥48/48 (100%) → EXCELLENT (crown jewel quality)
  - ≥45/48 (93.75%) → PASS (migration ready)
  - ≥42/48 (87.5%) → CONDITIONAL PASS (acceptable, document improvements)
  - <42/48 (87.5%) → FAIL (library gaps or content too complex)

**Decision:** If 42/48 with all MINOR violations → CONDITIONAL PASS (proceed to Phase E, document violations)

---

### 3.2 Metaphor Quality Borderline Implicit/Explicit (PA-42 Judgment Call)

**Problem:**
- Agent derives metaphor: "Layered information architecture"
- Uses vocabulary: `.layer`, `.foundation`, `.surface`
- Perceptual auditor: "Borderline. 'Layer' is explicit (visible metaphor) but 'foundation/surface' are subtle."
- PA-42 criteria: "Metaphor should be IMPLICIT (structural, not decorative)"
- Is "layers" too explicit? Or is it implicit-enough?

**Ambiguity:**
PA-42 is SUBJECTIVE (implicit vs explicit on spectrum). No binary threshold.

**Resolution protocol:**
- **MULTI-AUDITOR VOTE:** Spawn 3 auditors (independent)
  - Auditor A: "Explicit, fails PA-42"
  - Auditor B: "Borderline, leans implicit"
  - Auditor C: "Implicit, passes PA-42"
  - Vote: 1 fail, 2 pass → PASS (majority)

- **REFERENCE COMPARISON:** Compare to known examples
  - DD-006 fractal: Implicit (structural isomorphism, not decorative)
  - Playbook Elevation Map: Implicit (spatial metaphor, structural)
  - Hypothetical "shiny badge buttons": Explicit (decorative, surface-level)
  - Agent's "layers": More similar to fractal/elevation (structural) → IMPLICIT

- **ELIMINATE PA-42 FROM PHASE D GATE:** Too subjective
  - Use PA-42 as ADVISORY (log finding, don't fail on it)
  - Phase D gate uses only OBJECTIVE criteria (Tier 1+2 PA)
  - Metaphor quality evaluated in Phase 3.5 (divergence check, richness score)

**Decision:** PA-42 judgment calls should NOT fail Phase D. Log as note, proceed.

---

### 3.3 Library Provides 50% CSS But It's the RIGHT 50%

**Problem:**
- Library utilization: 50% (threshold 55%)
- Breakdown:
  - Identity CSS (tokens, soul): 100% library
  - Mechanism CSS (border-weight, 2-zone): 80% library
  - Metaphor CSS (vocabulary, structure): 0% library
- Agent applied mechanisms correctly, used tokens correctly, added custom metaphor vocabulary
- Page quality high, soul compliant, guardrails met
- But: 50% < 55% → FAIL?

**Ambiguity:**
Rigid threshold (55%) vs semantic success (right 50% came from library).

**Resolution protocol:**
- **SEMANTIC BREAKDOWN:** Not just total percentage
  - Identity CSS (tokens, soul): REQUIRE 80%+ library (non-negotiable)
  - Mechanism CSS (patterns, rules): REQUIRE 60%+ library (core extraction)
  - Metaphor CSS (vocabulary): ALLOW 0% library (Track 2 creativity)
  - If identity+mechanisms meet thresholds → PASS (even if total 50%)

- **TRACK-SPECIFIC THRESHOLDS:**
  - Track 1 (assembly): ≥70% library (mostly library, minimal custom)
  - Track 2 (composition): ≥50% library (identity+mechanisms, custom metaphor ok)
  - Apply different thresholds based on track type

**Decision:** If Track 2 build with 50% utilization, but identity+mechanisms from library → PASS (50% threshold too rigid for Track 2)

---

### 3.4 Agent Uses Library Correctly But Adds Unnecessary Custom CSS

**Problem:**
- Agent uses library components (`.callout`, `.code-block`, `.stats-bar`)
- Also writes custom CSS: `.custom-wrapper { display: flex; gap: 24px; }`
- Custom wrapper is functionally unnecessary (layout works without it)
- But: Agent wanted semantic clarity (wrapper for visual grouping)
- Library utilization: 58% (above 55%, passes)
- Custom CSS inflates total, reduces utilization percentage
- Is custom CSS "unnecessary" (inflating denominator) or "valid" (semantic choice)?

**Ambiguity:**
What counts as "unnecessary" custom CSS? Is semantic clarity valid?

**Resolution protocol:**
- **FUNCTIONAL NECESSITY TEST:** Would page break without custom CSS?
  - Remove custom wrapper CSS → page still renders correctly
  - Functional necessity: NO (wrapper not required)
  - But: Semantic clarity improved (grouping visible in DOM/CSS)

- **SEMANTIC VALUE JUDGMENT:** Is clarity worth CSS overhead?
  - Custom CSS adds 12 lines (minimal overhead)
  - Improves maintainability (wrapper groups related elements)
  - Doesn't violate soul (uses tokens, correct structure)
  - Verdict: ACCEPTABLE (semantic clarity is valid, even if not functionally necessary)

- **UTILIZATION ADJUSTMENT:** Exclude semantic wrappers from denominator
  - Total CSS: 500 lines
  - Library CSS: 290 lines
  - Custom wrappers: 12 lines (semantic, not functional)
  - Adjusted total: 500 - 12 = 488 lines
  - Adjusted utilization: 290 / 488 = 59.4% (above threshold)

**Decision:** Semantic wrappers (non-functional but clarifying) are ACCEPTABLE. Adjust utilization to exclude them.

---

### 3.5 Component CSS Needs Minor Context Tweaks (Gap or Flexibility?)

**Problem:**
- Library component: `.callout { padding: 24px; }`
- Agent uses in narrow sidebar (300px width)
- 24px padding feels too large (48px total horizontal)
- Agent adds: `.sidebar .callout { padding: 16px; }`
- Override works, page looks good
- But: Is this a LIBRARY GAP (should have `.callout--compact` variant) or EXPECTED FLEXIBILITY (context overrides ok)?

**Ambiguity:**
When are overrides "expected flexibility" vs "library gaps"?

**Resolution protocol:**
- **OVERRIDE CLASSIFICATION:** Why was override needed?
  - Responsive behavior (media query 768px) → EXPECTED (not gap)
  - Container width adaptation (narrow sidebar) → BORDERLINE (variant might help)
  - Metaphor-specific styling (color, border) → EXPECTED (Tier 3, not gap)
  - Workaround for library bug (fix broken behavior) → GAP (needs fix)

- **FREQUENCY THRESHOLD:** How often is this override needed?
  - If override appears 1x (specific context) → ACCEPTABLE (flexibility)
  - If override appears 5+ times (common need) → GAP (library should provide variant)

- **VARIANT CANDIDATE EVALUATION:** Should library have this?
  - Is narrow callout common use case? (Check: How many pages have sidebars?)
  - If ≥20% of pages need narrow callout → GAP (add `.callout--compact`)
  - If <10% of pages need it → ACCEPTABLE (context override ok)

**Decision:** Overrides needed 1-2x = FLEXIBILITY (ok). Overrides needed 5+ times = GAP (add variant).

---

### 3.6 PA Score ≥45 But ONE Violation is Severe

**Problem:**
- Perceptual audit: 45/48 (passes threshold)
- 3 failures: PA-12 (border missing — SEVERE), PA-28 (dead zone 6px — minor), PA-35 (spacing 46px — minor)
- PA-12 failure: Callout has NO border (should be 4px left border)
- This is IDENTITY violation (callout structure requires border)
- Other 2 failures are MINOR (close to threshold)
- Overall score passes (45/48) but contains 1 SEVERE violation

**Ambiguity:**
Should SEVERE violations override passing score?

**Resolution protocol:**
- **VIOLATION SEVERITY WEIGHTING:** Not all PA failures equal
  - CRITICAL violations (soul, identity): Auto-fail (even if score ≥45)
  - MAJOR violations (guardrails): Weighted 2x
  - MINOR violations (close to threshold): Weighted 1x
  - Adjusted score: 48 - (1 CRITICAL × 5) - (2 MINOR × 1) = 41/48 → FAIL

- **SOUL COMPLIANCE GATE:** Separate from PA score
  - Soul check runs FIRST (border-radius, box-shadow, palette, structure)
  - PA-12 (border missing) is SOUL violation (callout structure identity)
  - If soul fails → FAIL immediately (don't check PA score)

**Decision:** Separate soul compliance (CRITICAL, auto-fail) from PA score (QUALITY, threshold-based). CRITICAL violations override passing score.

---

### 3.7 Track 1 Passes, Track 2 Fails (Which Result Matters?)

**Problem:**
- Track 1 build: Library-only assembly, PA 48/48 (perfect)
- Track 2 build: Metaphor composition, PA 42/48 (below threshold)
- Both tests required in Phase D (per 09-EXTRACTION-VALIDATION-PROTOCOL)
- Track 1 proves library completeness (all components present)
- Track 2 proves guardrail understanding (agent applies to custom CSS)
- But: Track 2 failed (below 45/48)

**Ambiguity:**
Is Phase D PASS (Track 1 succeeded) or FAIL (Track 2 failed)?

**Resolution protocol:**
- **DUAL-GATE MODEL:** Both MUST pass
  - Track 1 validates library (components exist, are usable)
  - Track 2 validates guardrails (agent can apply to custom CSS)
  - BOTH are required for migration (Track 1 pages AND Track 2 pages)
  - If either fails → Phase D FAILS

- **PARTIAL PASS OPTION:** Conditional proceed
  - Track 1 PASS → migration can start on Track 1 pages (30-40 pages)
  - Track 2 FAIL → defer Track 2 pages (35-45 pages)
  - Phase D verdict: CONDITIONAL PASS (Track 1 ready, Track 2 needs remediation)
  - Allows partial migration (Track 1 first, Track 2 later)

**Decision:** RECOMMENDED approach is dual-gate (both MUST pass). If timeline critical, CONDITIONAL PASS allows Track 1 migration while fixing Track 2.

---

### 3.8 Library Efficiency High But Quality Borderline

**Problem:**
- Library utilization: 62% (above 55%, passes)
- PA score: 43/48 (below 45%, fails)
- Agent used library correctly (high utilization)
- But: Library components themselves are borderline quality
- Example: Library callout has 20px padding (below 32px guardrail floor)
- Agent used library as-is → violated guardrails
- Is this AGENT FAILURE (should have overridden) or LIBRARY FAILURE (components don't meet guardrails)?

**Ambiguity:**
When library components violate guardrails, whose fault is it?

**Resolution protocol:**
- **LIBRARY AUDIT FIRST:** Before Phase D, audit library CSS
  - Run programmatic checks on components.css (soul, guardrails)
  - If library components violate guardrails → FIX LIBRARY (before Phase D)
  - Library MUST be guardrail-compliant (no 20px padding if 32px required)

- **BLAME ASSIGNMENT:** If violation occurs during Phase D
  - Check: Does library CSS violate guardrail? (`.callout { padding: 20px; }`)
  - If YES → LIBRARY FAILURE (fix library, not agent fault)
  - If NO → AGENT FAILURE (agent wrote custom CSS incorrectly)

**Decision:** Library MUST be pre-audited (guardrail compliance) BEFORE Phase D. If library violates guardrails → fix library, rerun Phase D.

---

### 3.9 Metaphor Matches Library But Justification is Borderline

**Problem:**
- Agent derives metaphor: "Stratigraphic layers"
- Divergence check: Matches DD-006 (geological strata)
- Agent provides 5-dimension divergence table:
  - Domain: Geological (SAME)
  - Isomorphisms: Bedrock→foundation, strata→sections (SAME)
  - Architecture: 6 layers (SAME as DD-006)
  - Vocabulary: Stratum, bedrock, sediment (80% SAME)
  - Mechanisms: Border-weight gradient (SAME)
- Agent justification: "Independent convergence. Content naturally maps to geological structure."
- Is justification STRONG (valid convergence) or WEAK (pattern-matching)?

**Ambiguity:**
When is convergence "independent" vs "influenced by library exposure"?

**Resolution protocol:**
- **STRONG JUSTIFICATION CRITERIA:** What proves independent convergence?
  - Content structural analysis (explicit reasoning: why geology?)
  - Tension mapping (how does geology resolve content tension?)
  - Alternative metaphors considered (what else was evaluated?)
  - Timeline evidence (metaphor committed BEFORE reading case-studies/)
  - If 3/4 present → STRONG justification (convergence valid)

- **WEAK JUSTIFICATION REJECTION:** Red flags for pattern-matching
  - No alternative metaphors considered (went straight to geology)
  - Vocabulary 80%+ overlap (copied terms, not derived)
  - No content-specific reasoning (generic "naturally maps")
  - Metaphor committed AFTER reading case-studies/ (timeline violation)
  - If 2+ red flags → WEAK justification (regenerate required)

**Decision:** Convergence ACCEPTABLE only with STRONG justification (3/4 criteria). Weak justification = pattern-matching (FAIL, regenerate).

---

## 4. EXECUTION FAILURES — Agent Team Coordination Issues

**Scenario:** Phase D fails due to agent team mechanics, not extraction quality. Known failure modes from 14 prior teams.

### 4.1 Agents Don't Write Output Files (THE Critical Failure Mode)

**Problem:**
- Builder agent completes build (generates CSS, writes HTML)
- Returns to lead: "Build complete, page looks good"
- Lead checks output directory: NO FILES (agent didn't write)
- Agent output exists in conversation (CSS in code blocks)
- But: No files on disk → work lost

**Historical evidence:**
- Seen in 6/14 teams (42% occurrence rate)
- Hierarchical audit (4th team): Visual/Structural workers (Playwright) didn't write files
- Skill enrichment (13th team): 4/4 researchers failed to write files
- Pattern: File-only agents (no Playwright) write reliably. Playwright agents DON'T.

**Why this happens:**
- Playwright agents focus on browser interaction (screenshot, click, measure)
- Writing files feels secondary (agents forget or deprioritize)
- No structural enforcement (file existence not checked until end)

**Mitigation:**
- **BINARY RULE IN PROMPT:** "CRITICAL: You MUST write your output file using the Write tool. Your work does NOT exist until the file is written. Return ONLY after file write confirmed."
  - From 4th team lesson: "File-writing emphasis must be in ALL worker prompts"
  - Binary language achieves 100% compliance (vs ~0% for judgment rules)

- **STRUCTURAL VERIFICATION:** Lead checks file existence BEFORE accepting completion
  - Agent says "complete" → Lead calls Bash to check file exists
  - If file missing → nudge agent: "CRITICAL: Output file not found. You MUST write [filename] before returning."
  - Don't accept completion without file verification

- **FILE-ONLY AGENTS PREFERRED:** For Phase D, minimize Playwright agents
  - Builders write CSS/HTML → file-only (Read, Write, Edit tools)
  - Auditors measure DOM → Playwright (necessary)
  - Scribes document findings → file-only (Write tool)
  - Minimize Playwright roles to ONLY when browser required

**Detection:**
- Lead maintains TASK LIST (file manifest)
- After each agent completion: Check file exists (`ls` or `find`)
- If file missing → IMMEDIATE nudge (don't wait for wave completion)

**Recovery:**
- If agent returns without writing file:
  - Nudge: "Output file missing, MUST write before completion"
  - If nudge fails (agent terminates): Spawn recovery agent
  - Recovery agent: Read conversation history, write file from agent output
  - From 13th team: "Recovery agents required" (pattern across 6 teams)

---

### 4.2 Playwright Contention (Max 2 Concurrent)

**Problem:**
- Phase D spawns 4 auditors (visual check at 1440px + 768px + soul + PA)
- All 4 need Playwright (browser automation)
- Playwright MCP supports max 2 concurrent
- Agents 3+4 can't access browser → fall back to source-code analysis
- Source-code analysis misses visual issues (dead zones, label smashing, spacing)

**Historical evidence:**
- Seen in EVERY team with 3+ Playwright agents
- 4th team (Hierarchical Audit): "Only 2/13 visual workers got actual Playwright access; rest fell back to source-code analysis"
- 9th team (CD Audit): "Playwright contention severe with 4+ visual agents"
- Pattern: ≤2 concurrent = zero contention. ≥3 concurrent = severe contention.

**Why this happens:**
- Playwright MCP has resource limits (1 browser instance, max 2 tabs)
- Agents 1-2 grab browser → Agents 3-4 blocked
- Agents adapt gracefully (fall back to source analysis) but quality degrades

**Mitigation:**
- **SEQUENTIAL PLAYWRIGHT WAVES:** Never spawn 3+ Playwright agents concurrently
  - Wave 1: Visual auditor (1440px) — 1 agent, Playwright
  - Wave 2: Visual auditor (768px) — 1 agent, Playwright (Wave 1 terminates first)
  - Wave 3: Programmatic auditor — 1 agent, file-only (no Playwright)
  - Wave 4: PA auditor — 1 agent, Playwright (Wave 2 terminates)
  - Sequential execution eliminates contention

- **MAX 2 CONCURRENT PLAYWRIGHT:** If parallelization required
  - Spawn 2 Playwright agents max (e.g., 1440px + 768px auditors)
  - Other agents file-only (programmatic checks, documentation)
  - From 14th team (Phase C): "Two Playwright agents concurrent worked without contention"

- **HTTP SERVER REQUIRED:** Before spawning Playwright agents
  - Playwright blocks `file://` protocol (security restriction)
  - MUST serve via HTTP (Python server, port 8000)
  - From 3rd team: "HTTP server MUST be started before spawning agents that need Playwright"
  - Lead starts server in Wave 0 (setup phase)

**Detection:**
- Lead monitors agent tool calls (SendMessage, Playwright logs)
- If 3+ agents call Playwright concurrently → contention detected
- If agent says "couldn't access browser, using source analysis" → contention occurred

**Recovery:**
- If contention detected:
  - Terminate excess agents (keep 2 max)
  - Respawn in sequential waves (wait for Wave N to finish before Wave N+1)
  - Or: Accept source-code fallback (agents work around contention, quality lower but acceptable)

---

### 4.3 Agents Pattern-Match to Prior Explorations (DD-006 Bias)

**Problem:**
- Builder agent reads compositional-core/case-studies/
- DD-006 fractal is crown jewel (20+ references, highest visibility)
- Agent derives metaphor similar to DD-006 (geological, stratigraphic, fractal)
- Divergence check technically passes (different vocabulary) but structural similarity high
- Migration to 75 pages: 30 pages use geological metaphors
- Diversity collapses (pattern-matching to most-visible example)

**Historical evidence:**
- Seen in skill enrichment (13th team): "Agent pattern-matched to prior explorations"
- CD audit (9th team): "Fresh-eyes zero-context agent found 8 cross-page issues research-loaded auditors missed"
- Pattern: Agents with library exposure converge to high-visibility examples

**Why this happens:**
- DD-006 is most-referenced (20+ inbound refs)
- High visibility = high retrieval (RAG surfaces it frequently)
- Continuation bias: First-read material becomes anchor

**Mitigation:**
- **TWO-PHASE BOUNDARY ENFORCEMENT:** Metaphor lock-in BEFORE library access
  - Phase 3.5 gate: Agent writes metaphor commitment (document file)
  - BEFORE reading case-studies/ (Phase 5)
  - From gap-check.md: "M11: Two-Phase Prompting — library read AFTER derivation"
  - Timestamp metaphor commitment (proves it predates library read)

- **DIVERGENCE VERIFICATION:** If metaphor matches library
  - Compare agent metaphor to case-studies/_INDEX.md
  - If match detected: 5-dimension divergence table REQUIRED
  - Strong justification (3/4 criteria) → convergence accepted
  - Weak justification → regenerate with constraint ("avoid geological metaphors")

- **DIVERSITY TRACKING:** Weaver maintains metaphor registry
  - METAPHOR-REGISTRY.md (hypothetical, not built)
  - Tracks metaphor usage across Phase D builds
  - If geological metaphor attempted 3+ times → flag repetition
  - From gap-check.md: "M10: Diversity Tracking Dashboard"

**Detection:**
- After agent completes build: Extract metaphor vocabulary (CSS class names)
- Compare to case-studies/ vocabulary (DD-006, OD-004, CD-006)
- If overlap > 40% → pattern-matching suspected
- Check: Does metaphor commitment timestamp predate case-studies/ read?

**Recovery:**
- If pattern-matching detected:
  - Don't automatically fail (independent convergence possible)
  - Require divergence justification (strong evidence)
  - If justification weak → regenerate with explicit constraint

---

### 4.4 Context Compaction Mid-Build (Agent Loses Track)

**Problem:**
- Builder agent processes complex content (50+ sections)
- Context window fills (180k+ tokens)
- Compaction triggered mid-build
- Agent loses track of prior decisions (which components used, token values)
- Second half of page inconsistent with first half (different spacing, wrong tokens)
- Phase D produces MIXED quality output (first half good, second half broken)

**Historical evidence:**
- From MEMORY.md: "Sessions processing 50+ files in serial hit context wall"
- Solution: "Use parallel agents" (chunking, not serial)
- Pattern: Large serial tasks → context exhaustion → quality degradation

**Why this happens:**
- Phase D test content is COMPLEX (multi-pattern, metaphor-driven)
- Single agent builds entire page (50+ sections, 500+ lines CSS)
- Context fills with HTML, CSS, PA checks, token references
- Compaction loses working memory (agent forgets decisions)

**Mitigation:**
- **CHUNK COMPLEX BUILDS:** Split large pages across multiple agents
  - Agent A: Sections 1-10 (header, intro, core content)
  - Agent B: Sections 11-20 (examples, code blocks)
  - Agent C: Sections 21-30 (Q&A, conclusion, footer)
  - Merger agent: Combine outputs, check consistency
  - Prevents context exhaustion (each agent processes subset)

- **REFERENCE FILE STRATEGY:** Agent writes decisions to file
  - Phase 4: Agent writes DECISIONS.md (tokens used, components selected)
  - Phase 6: Agent reads DECISIONS.md (refresh working memory)
  - File persists across compaction (doesn't lose memory)

- **LIMIT TEST CONTENT SIZE:** Phase D uses REPRESENTATIVE not MAXIMAL
  - Test page: 20-30 sections (typical, not extreme)
  - Avoid pathological content (50+ sections, 8-level nesting)
  - From 2.1 FALSE FAIL: "Use 50th-75th percentile content"

**Detection:**
- Lead monitors agent context usage (token count)
- If approaching limit (>150k tokens) → intervention
- Or: Check output consistency (first vs second half token usage)

**Recovery:**
- If compaction occurs mid-build:
  - Agent writes checkpoint file (progress so far)
  - Respawn agent with checkpoint (fresh context)
  - Agent resumes from checkpoint (not from scratch)

---

### 4.5 HTTP Server Not Started (Playwright Fails)

**Problem:**
- Lead spawns visual auditor (needs Playwright)
- Auditor calls `mcp__playwright__browser_navigate` with `file:///path/to/page.html`
- Playwright MCP rejects: "file:// protocol blocked, use HTTP"
- Auditor can't access page → falls back to source-code analysis
- Visual issues missed (dead zones, spacing, alignment)

**Historical evidence:**
- From 3rd team: "HTTP server MUST be started before spawning agents that need Playwright (started in Phase A)"
- Pattern: Playwright requires HTTP serving (security restriction)

**Why this happens:**
- Playwright MCP blocks `file://` URLs (browser security)
- HTML files must be served via HTTP (Python server, port 8000)
- Lead must start server BEFORE spawning Playwright agents

**Mitigation:**
- **WAVE 0 SETUP:** Lead starts HTTP server before builder
  - Run: `python3 -m http.server 8000 --directory /path/to/output`
  - Verify: `curl http://localhost:8000/page.html` (returns HTML)
  - Then spawn builder + auditors (know server is running)

- **AGENT PROMPT INCLUDES URL:** Agents use `http://localhost:8000/` URLs
  - NOT: `file:///Users/.../page.html`
  - YES: `http://localhost:8000/page.html`
  - Builder writes file to HTTP-served directory

**Detection:**
- If Playwright agent fails to navigate → check server running
- Lead verifies: `curl http://localhost:8000/` (should return directory listing)
- If server not running → start it, respawn agent

**Recovery:**
- Start HTTP server (Wave 0 setup)
- Respawn failed agent with correct URL

---

### 4.6 Agents Don't Follow Binary Rules (Judgment Rules Fail)

**Problem:**
- Execution spec says: "Prefer library components when possible"
- Builder agent interprets "when possible" as judgment call
- Decides custom CSS is "better" for this context (bypasses library)
- Phase D fails library utilization (agent didn't use library)
- But: Agent followed spec literally ("when possible" → judgment)

**Historical evidence:**
- From MEMORY.md: "Binary rules achieve 100% agent compliance; judgment rules achieve ~0%"
- THE most important architectural principle
- Pattern: Judgment language ("prefer," "consider," "when appropriate") → agents ignore

**Why this happens:**
- LLMs interpret judgment rules as suggestions (not requirements)
- "Prefer" → "I prefer something else, so I won't"
- Binary rules ("MUST," "NEVER," "REQUIRED") → agents follow 100%

**Mitigation:**
- **BINARY LANGUAGE ONLY:** Execution spec uses MUST/NEVER (not prefer/consider)
  - ❌ WRONG: "Prefer library components when possible"
  - ✅ CORRECT: "REQUIRED: Use components from components.css. Custom CSS permitted ONLY for metaphor-specific vocabulary."
  - ❌ WRONG: "Consider using border-weight gradient"
  - ✅ CORRECT: "MUST use border-weight gradient (4px/3px/1px) for hierarchy encoding."

- **ZERO JUDGMENT CALLS:** If rule allows exceptions, make exceptions EXPLICIT
  - NOT: "Use library components when appropriate" (judgment)
  - YES: "Use library components. Exceptions: metaphor vocabulary (e.g., .geological-stratum), responsive overrides (media queries)." (explicit)

**Detection:**
- Review execution spec for judgment language:
  - Prefer, consider, when possible, as needed, generally, usually → RED FLAGS
  - MUST, NEVER, REQUIRED, ALWAYS, PROHIBITED → CORRECT

**Recovery:**
- Rewrite execution spec (eliminate judgment language)
- Respawn agents with binary-language spec

---

### 4.7 Lead Agent Coordination Overhead (Orchestrator Trap)

**Problem:**
- Phase D requires 6+ agents (builder, auditors, scribes)
- Lead orchestrates: spawns agents, monitors progress, verifies files, synthesizes results
- Lead context fills with coordination overhead (task tracking, SendMessage, verification)
- Lead can't also DO work (build, audit, document)
- From MEMORY.md: "The orchestrator trap: user is single point of failure with zero bus factor"

**Historical evidence:**
- 4th team (Hierarchical Audit): "Lead managed 7 direct reports vs prior flat 43. Zero Lead compactions."
- Hierarchical topology VALIDATED (lead orchestrates, doesn't build)
- Pattern: Lead THIN rule (zero building, zero Playwright, orchestrate only)

**Why this happens:**
- Coordination scales with team size (6 agents = 6 spawn + 6 monitor + 6 verify)
- Lead role is COORDINATION not EXECUTION
- Violating THIN rule (lead tries to build) → context overflow

**Mitigation:**
- **LEAD THIN RULE:** Lead orchestrates ONLY (no building, no auditing)
  - Lead spawns agents (Task tool)
  - Lead monitors progress (SendMessage, file existence checks)
  - Lead synthesizes results (final verdict, merge reports)
  - Lead does NOT build pages, audit CSS, or write scratchpads

- **HIERARCHICAL TOPOLOGY:** If team >10 agents
  - Lead → Captains (3-4 captains)
  - Captains → Workers (2-3 workers per captain)
  - Lead coordinates captains (not 10+ workers directly)
  - From 4th team: Reduces lead coordination from 43 to 7

- **WEAVER ROLE:** Dedicated progress tracker
  - Weaver maintains TASK LIST (updated as agents complete)
  - Weaver cross-references findings (multi-agent consistency)
  - Weaver writes synthesis (frees lead from documentation)
  - From 2nd team: "Weaver role proven — keep for any phase with shared state"

**Detection:**
- Lead context approaching limit (>150k tokens) → coordination overhead
- Lead attempting to build/audit (violates THIN rule)

**Recovery:**
- Delegate work to agents (lead coordinates only)
- Add Weaver role (progress tracking + synthesis)
- If team >10: Hierarchical topology (captains layer)

---

### 4.8 Agents Terminate Without Calling TaskUpdate (Progress Tracking Lost)

**Problem:**
- Builder agent completes build
- Writes output file (CSS, HTML)
- Terminates (conversation ends)
- Never calls TaskUpdate (status: "completed")
- Lead checks task list: status still "in_progress"
- Lead doesn't know agent finished (waits indefinitely)

**Historical evidence:**
- From 2nd team (OD Audit): "Agents sometimes don't call TaskUpdate on completion — lead verifies via file existence"
- Pattern: Agents forget TaskUpdate (write file, terminate, forget status update)

**Why this happens:**
- Agents focus on primary work (building page)
- TaskUpdate feels like administrative overhead (agents skip)
- No structural enforcement (task status not checked)

**Mitigation:**
- **FILE EXISTENCE AS COMPLETION SIGNAL:** Lead infers completion from file write
  - Don't wait for TaskUpdate (unreliable)
  - Check: Does output file exist? (file write = completion)
  - If file exists + agent idle → mark complete (lead updates TaskList)

- **BINARY RULE IN PROMPT:** "REQUIRED: Call TaskUpdate with status='completed' before terminating."
  - Binary language improves compliance (vs judgment)
  - But: Still unreliable (agents forget)

- **WEAVER TRACKS PROGRESS:** Dedicated progress monitor
  - Weaver checks file existence (every 2 min)
  - If file exists + agent idle → update TaskList
  - Lead reads TaskList (Weaver-maintained, always current)

**Detection:**
- Lead checks file existence (don't rely on TaskUpdate)
- If file exists but task status "in_progress" → agent forgot update

**Recovery:**
- Lead manually updates TaskList (mark complete)
- Or: Weaver auto-updates (file existence = completion)

---

## 5. MINIMUM VIABLE PHASE D

**Scenario:** Constraints force minimal validation (time, budget, complexity). What's the ABSOLUTE minimum that proves extraction sufficiency?

### 5.1 Minimum Test Scope

**Question:** What's the fewest tests that prove sufficiency?

**ABSOLUTE MINIMUM:**

1. **ONE Track 2 page (metaphor-driven composition)**
   - Why Track 2 (not Track 1): Track 2 exercises FULL extraction (identity, vocabulary, mechanisms, guidelines)
   - Track 1 only tests components (subset of extraction)
   - Track 2 proves: Metaphor derivation works, guardrails apply to custom CSS, mechanisms transfer to novel metaphors

2. **Test content requirements:**
   - Medium complexity (20-30 sections, 3+ density zones, 2+ organizational patterns)
   - Prose-dominant (≥70% narrative, not tables/code)
   - From fortress content (playbook, boris, gastown — known high quality)
   - NOT tutorial content (too uniform, repetitive)

**RECOMMENDED MINIMUM (better validation):**

1. **ONE Track 1 page (library assembly)**
   - Tests: Library completeness (all components present, usable)
   - Content: Structured, multi-pattern (tables, stats, code, Q&A)

2. **ONE Track 2 page (metaphor composition)**
   - Tests: Guardrail internalization, mechanism transfer, metaphor derivation
   - Content: Prose-dominant, metaphor-driven (playbook or boris)

**WHY TWO TESTS:**
- Track 1 validates library (components.css sufficient)
- Track 2 validates guardrails (agent can apply to custom CSS)
- BOTH are required for migration (Track 1 + Track 2 pages)

**Verdict:** ABSOLUTE MINIMUM = 1 Track 2 page. RECOMMENDED = 1 Track 1 + 1 Track 2.

---

### 5.2 Minimum Criteria (What CAN'T Be Dropped)

**Question:** What criteria are NON-NEGOTIABLE for Phase D pass?

**TIER 1 (ABSOLUTE — CAN'T drop):**

1. **Soul compliance: 0 violations**
   - border-radius: 0 (ALWAYS)
   - box-shadow: none (ALWAYS)
   - No drop-shadow filter
   - Colors from tokens.css (no hardcoded)
   - Fonts correct (Instrument Serif display, Inter body, JetBrains Mono code)
   - Why: Soul constraints are IDENTITY (violating = not KortAI)

2. **Guardrails: All 4 met**
   - 940px minimum container (65% viewport at 1440px)
   - 32px minimum padding floor
   - 16px minimum label-to-heading gap
   - 40% maximum compression ratio (densest ÷ sparsest)
   - Why: Guardrails prevent perceptual cost (from skill enrichment research)

3. **Library utilization ≥ 50% (Track 2) or ≥ 60% (Track 1)**
   - Track 2: Identity+mechanisms from library (custom metaphor ok)
   - Track 1: Mostly library (minimal custom)
   - Why: Phase D tests library SUFFICIENCY (if agent bypasses, test invalid)

**TIER 2 (IMPORTANT — can reduce threshold, not eliminate):**

4. **PA score ≥ 42/48 (relaxed from 45/48)**
   - Use Tier 1+2 PA only (objective criteria, 20 questions)
   - Eliminate Tier 3 (subjective, PA-42 implicit check)
   - Why: Quality gate, but rigid threshold (45) too strict for first test

5. **Multi-viewport testing (1440px + 768px)**
   - Both viewports MUST pass soul + guardrails
   - Why: Responsive gaps caught early (14th team findings)

**Verdict:** Tier 1 (soul, guardrails, library) = NON-NEGOTIABLE. Tier 2 (PA, viewports) = reduce threshold, don't eliminate.

---

### 5.3 Minimum Criteria That CAN Be Deferred

**Question:** What can Phase D skip if time/budget constrained?

**DEFERRABLE (validate later, not critical for Phase D):**

1. **4-variant metaphor test**
   - Original plan: Test 4 metaphors for same content (diversity check)
   - Minimum: 1 metaphor (proves mechanics work)
   - Why: Diversity important but not SUFFICIENCY test
   - Defer to: Phase E (playbook), Phase F (pilot migration)

2. **Efficiency measurement (time per page)**
   - Original plan: Measure Track 1 (45-90 min) vs Track 2 (3-5 hrs)
   - Minimum: Build works (don't measure time)
   - Why: Timeline planning, not sufficiency test
   - Defer to: Phase F (pilot migration with real timelines)

3. **Downstream deliverables (convergence report, gap remediation plan)**
   - Original plan: Formal reports, extraction updates, provenance docs
   - Minimum: Simple pass/fail verdict + notes
   - Why: Documentation important but not TEST itself
   - Defer to: Phase E (formal playbook writing)

4. **Fresh-eyes validation (zero-context auditor)**
   - Original plan: Auditor with no library exposure (catch bias)
   - Minimum: Standard auditor (with library context)
   - Why: Bias detection valuable but adds complexity
   - Defer to: Phase F (pilot migration audit)

**Verdict:** Defer diversity test, efficiency measurement, formal deliverables, fresh-eyes validation. Keep: soul, guardrails, library utilization, PA score, multi-viewport.

---

### 5.4 Minimum Output for Phase E to Proceed

**Question:** What MUST Phase D produce for Phase E (playbook) to proceed?

**MINIMUM DELIVERABLES:**

1. **Pass/Fail Verdict (binary)**
   - PASS: Extraction sufficient, proceed to playbook
   - CONDITIONAL PASS: Track 1 ready, Track 2 needs remediation
   - FAIL: Extraction gaps, fix before playbook
   - Why: Phase E can't start without go/no-go decision

2. **Gap List (if FAIL or CONDITIONAL)**
   - Missing components (e.g., blockquote, success callout)
   - Missing mechanisms (e.g., CRESCENDO density pattern)
   - Guardrail violations (e.g., library callout padding 20px, below 32px floor)
   - Why: Phase C remediation needs specifics (what to add)

3. **Test Artifacts (HTML + CSS files)**
   - Track 1 page: `test-track-1.html` + CSS
   - Track 2 page: `test-track-2.html` + CSS
   - Why: Phase E playbook can reference actual examples (not hypothetical)

4. **Validation Checklist (completed)**
   - Soul compliance: 0 violations ✓
   - Guardrails: 4/4 met ✓
   - PA score: 45/48 ✓
   - Library utilization: 58% ✓
   - Multi-viewport: 1440px + 768px both pass ✓
   - Why: Phase E needs proof of validation (not just "it passed")

**OPTIONAL (nice-to-have, not required):**

5. **Lessons learned (agent execution notes)**
   - What worked (e.g., sequential Playwright waves)
   - What failed (e.g., agents didn't write files)
   - Mitigations applied (e.g., binary rules in prompts)
   - Why: Improves Phase F (pilot migration team design)

6. **Extraction enrichments (if gaps found)**
   - New components added to library
   - New mechanisms documented
   - Updated tokens.css
   - Why: Closes feedback loop (Phase D → Phase C updates)

**Verdict:** MINIMUM = verdict + gap list + test artifacts + checklist. OPTIONAL = lessons learned + enrichments.

---

## CONCLUSION

Phase D validation is HIGH-RISK for false positives (appears to pass when extraction is insufficient). Detection mechanisms MUST be STRUCTURAL (programmatic checks, binary gates) not subjective ("looks good," "would ship").

**Top 5 risks ranked by severity:**

1. **Agents don't write files** (42% occurrence rate across 14 teams)
   - Mitigation: Binary rule in prompts + file existence verification

2. **Test content too simple** (doesn't exercise extraction)
   - Mitigation: Content complexity scoring + coverage measurement

3. **Agent bypasses library** (writes custom CSS, page looks good)
   - Mitigation: Library utilization check (≥55%) + prompt enforcement

4. **Playwright contention** (max 2 concurrent, contention degrades quality)
   - Mitigation: Sequential waves + HTTP server setup

5. **Agent pattern-matches to DD-006** (divergence check not enforced)
   - Mitigation: Two-phase boundary + divergence verification gate

**Minimum viable Phase D:**
- 1 Track 2 page (metaphor-driven composition)
- Soul + guardrails + library utilization (non-negotiable)
- PA score ≥42/48 (relaxed threshold acceptable)
- Multi-viewport testing (1440px + 768px)
- Output: verdict + gap list + test artifacts + checklist

**Recommended Phase D (higher confidence):**
- 1 Track 1 + 1 Track 2 page
- All Tier 1+2 criteria
- Fresh-eyes validation
- Formal deliverables (convergence report, lessons learned)

Phase D is THE critical gate. Better to FAIL Phase D (discover gaps on 2 test pages) than PASS Phase D (discover gaps on 75 production pages). Validation criteria must be STRICT, STRUCTURAL, and DETERMINISTIC.

---

**END FAILURE MODE ANALYSIS**
