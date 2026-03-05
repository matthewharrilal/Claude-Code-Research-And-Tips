# Pre-Ceiling Readiness Checklist

**Date:** 2026-02-16
**Purpose:** Comprehensive checklist of everything that must happen before launching the Ceiling experiment
**Synthesized from:** 10 retrospective reports (09-MASTER-RETROSPECTIVE.md + 8 dimension reports + adversarial reviews) + 07-VERDICT.md
**Total source lines:** ~12,800 lines across 11 files

---

## Executive Summary

**Total items:** 35 (11 MUST DO, 11 SHOULD DO, 8 COULD DO, 5 OPEN QUESTIONS)

**Top 3 most critical MUST DO items:**
1. **Add inter-agent communication protocol** — Missing footer defect directly traced to file-only isolation (no way for builder to ask "what does Footer Mirror look like?")
2. **Apply M1 permanently to skill** — Validated by 11 research agents + Middle experiment, raises universal floor
3. **Add landmark completeness gate** — Prevents WOULD-NOT-SHIP footer bugs at Phase 2→3 boundary

**Philosophy:** This is NOT a "fix everything" list. Items are tiered by necessity. MUST DO items are blocking — Ceiling cannot launch without them. SHOULD DO items significantly improve quality but aren't blocking. COULD DO items are polish opportunities. OPEN QUESTIONS must be answered before or during Ceiling, not deferred indefinitely.

---

## TIER 1: MUST DO (Ceiling Cannot Launch Without These)

### 1. Add Inter-Agent Communication Protocol
**Description:** Ceiling agents must use SendMessage for clarifying questions, issue flagging, and iteration requests. File-bus remains primary output mechanism, but agents must not be isolated.

**Acceptance criteria (binary DONE/NOT DONE):**
- [ ] Master execution prompt includes SendMessage capability section
- [ ] Builder prompt includes "Ask planner clarifying questions if plan specifications are ambiguous"
- [ ] Auditor prompt includes "Flag issues mid-process to team-lead before proceeding"
- [ ] Team-lead prompt includes "Request targeted fixes from builder if gaps detected"
- [ ] Test run confirms agents successfully send/receive messages

**Files to modify:**
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/ceiling-experiment/MASTER-EXECUTION-PROMPT.md` (create new)
- Planner/Builder/Auditor prompt slices (when created)

**Source reports:**
- Master Retrospective Section III Finding 9: "Agent Communication Is Essential For Quality"
- Master Retrospective Section X: "HIGHEST PRIORITY: Enable Inter-Agent Communication"
- Methodology Section 1 Defect 3: Missing footer root cause (no way to ask)
- Adversarial Methodology Section 1: Prompt slicing blind spots

**Evidence:** CD-006 (39/40) and Phase C (11/11) both used agent messaging. Middle-tier (B+ with defects) did not. Quality gap partially explained by collaborative refinement that messaging enables.

---

### 2. Apply M1 Permanently to Skill
**Description:** Replace "sample 2-4 mechanisms" with per-category minimums (S:1+, H:1+, C:1+, D:1+, N:1+) in tension-composition skill.

**Acceptance criteria:**
- [ ] Search `~/.claude/skills/tension-composition/SKILL.md` for "sample 2-4" → zero instances remaining
- [ ] Phase 0D Tier Classification section includes per-category minimum table
- [ ] Phase 4.0 Mechanism Extraction section includes per-category deployment mandate
- [ ] Skill version incremented to indicate M1 integration
- [ ] Test read confirms all three locations updated

**Files to modify:**
- `~/.claude/skills/tension-composition/SKILL.md` (3 locations: lines ~81-98, ~909-930, and any remaining "sample 2-4" mentions)

**Source reports:**
- Master Retrospective Section IX item #1: "MUST DO NOW"
- Skill Improvements Section 1.1: "VALIDATED — Apply Permanently"
- Theory Validation: All 11 research agents identified "sample 2-4" as THE limiting specification
- Verdict F1.1: "Apply M1 to skill permanently"

**Evidence:** Middle-tier deployed 12 mechanisms (S:1, H:3, C:4, D:2, N:3), achieved PA-05 4/4 DESIGNED, D3 3/3 NOVEL. Natural landing 5-10 for Middle tier when per-category minimums enforced.

---

### 3. Add Landmark Completeness Gate
**Description:** Binary check at Phase 2→3 boundary verifying all planned structural elements (header, footer, all named sections) exist in HTML before launching auditors.

**Acceptance criteria:**
- [ ] Team-lead prompt includes landmark verification step after builder completes
- [ ] Verification checks: `<header>` exists if plan specifies it, `<footer>` exists if plan specifies it, number of `<section>` elements >= plan's content section count
- [ ] Gate is blocking (team-lead does not proceed to audit phase until verification passes)
- [ ] If gate fails, team-lead requests builder to add missing landmarks

**Files to modify:**
- Ceiling execution plan (THE PLAN) — add Phase 2.5 Landmark Gate
- Team-lead prompt slice — add post-build verification protocol

**Source reports:**
- Master Retrospective Section III Finding 2: "Prompt Slicing Trades Context for Quality"
- Methodology Section 1 Defect 3: "Missing Footer" root cause analysis
- Skill Improvements Section 1.3: "Landmark Completeness (NEW)"
- Adversarial Methodology Section 1: "Footer bug is SMOKING GUN"

**Evidence:** Middle-tier build plan specified "#14 Footer Mirror" with CSS. Perceptual audit saw no footer. WOULD-NOT-SHIP finding. Gate costs ~2 minutes, catches most damaging class of prompt-slicing failures.

---

### 4. Add Builder Self-Check for CPL and Token Compliance
**Description:** Builder must verify CPL (45-80) and token compliance (>= 80%) before declaring "done" and writing output file.

**Acceptance criteria:**
- [ ] Builder prompt includes CPL verification formula: `(container-content-width) / (font-size-px) / 0.6 = CPL`
- [ ] Builder prompt includes token compliance self-scan: count `var()` references, count raw hex/px, calculate ratio >= 80%
- [ ] Builder prompt lists approved raw value contexts (border-width: 1px|3px|4px, line-height unitless)
- [ ] Builder self-check is BEFORE file write (if fails, builder adjusts and recalculates)

**Files to modify:**
- Builder prompt slice (when created for Ceiling)
- Appendix B Block 2 (File-Write Enforcement) in master prompt

**Source reports:**
- Methodology Section 1 Defect 1: "CPL at 82 chars" — no formula to verify
- Methodology Section 1 Defect 2: "Token Compliance at 66.5%" — no self-check before file write
- Skill Improvements item #3: "Add CPL formula to builder prompt"
- Skill Improvements item #4: "Add token compliance self-check"

**Evidence:** Middle-tier CPL at 82 chars (+2 over spec), token compliance 66.5% vs 80% target. Both are systemic builder capability gaps — builder didn't verify before finishing.

---

### 5. Establish Ceiling-Specific Per-Category Minimums
**Description:** Define higher per-category thresholds for Ceiling tier than Middle tier (Middle: 1+ per category, Ceiling: S:2+, H:2+, C:3+, D:2+, N:2+).

**Acceptance criteria:**
- [ ] Ceiling execution plan includes per-category minimum table with S:2+, H:2+, C:3+, D:2+, N:2+
- [ ] Planner prompt for Ceiling includes these minimums in mechanism selection criteria
- [ ] Expected natural landing documented: 11-15 mechanisms total
- [ ] Rationale documented: Ceiling requires richer vocabulary coverage than Middle

**Files to modify:**
- Ceiling execution plan (THE PLAN) — Phase 1 Planning section
- Planner prompt slice — mechanism selection requirements

**Source reports:**
- Master Retrospective Section III Finding 1: "Per-Category Minimums Are Validated"
- Master Retrospective Section X Methodology Changes: "Raise per-category minimums for Ceiling"
- Continuity Section "Why Per-Category Minimums": Natural landing emerges from category coverage

**Evidence:** Middle-tier S:1, H:3, C:4, D:2, N:3 produced 12 total (within 8-12 predicted range). Ceiling needs higher minimums to naturally produce 11-15 range.

---

### 6. Add Mechanism Interaction Requirement
**Description:** For Ceiling tier, require that at least 3 mechanism pairs REINFORCE each other (multi-channel encoding of same dimension).

**Acceptance criteria:**
- [ ] Planner prompt includes: "For at least 3 mechanism pairs, document how they REINFORCE each other"
- [ ] Build plan template includes Section: MECHANISM INTERACTIONS with pair table
- [ ] Example documented: border-weight gradient + color encoding both express security criticality
- [ ] Interaction requirement is SEPARATE from deployment requirement (can deploy 12 mechanisms but only 3 pairs interact)

**Files to modify:**
- Planner prompt slice (when created for Ceiling)
- Build plan template structure

**Source reports:**
- Master Retrospective Section III Finding 1: "Mechanism-Mechanism Interaction Is Unexplored"
- Master Retrospective Section X Methodology Changes: "Add mechanism INTERACTION requirement"
- Output Quality: "Specifications applied correctly, not composition felt through"

**Evidence:** Middle-tier deployed 12 mechanisms that coexist independently. No analysis of whether they INTERACT coherently. Gap between "designed" and "felt through" may require interaction, not just presence.

---

### 7. Define Blind Novelty Evaluation Protocol
**Description:** Evaluator should not know which page is the experiment when assessing novelty. Prevents confirmation bias.

**Acceptance criteria:**
- [ ] Novelty evaluator prompt includes: "You will receive 3 unlabeled pages (A, B, C). Identify which is structurally newest."
- [ ] Pages presented without labels (Middle experiment, Reference 1, Reference 2) → randomized order
- [ ] Evaluator does not see build plan, mechanism catalog, or tier model before evaluation
- [ ] Only after blind assessment complete, evaluator receives labels and context

**Files to modify:**
- Novelty evaluator prompt slice (when created for Ceiling)
- Novelty evaluation procedure in execution plan

**Source reports:**
- Master Retrospective Section VII Finding 7: "Evaluation Methodology Has Reproducibility Gaps"
- Adversarial Findings Section 2: "Single-Evaluator Bias"
- Adversarial Methodology: "Novelty measurement validity concerns"

**Evidence:** Middle-tier novelty (3/3) assessed by evaluator who KNEW which page was experiment, KNEW the hypothesis, had just read build plan. Confirmation bias risk. External validity weak.

---

### 8. Add Dual Perceptual Auditor Protocol
**Description:** Two independent fresh-eyes auditors evaluate separately, then reconcile findings via majority-vote or discussion.

**Acceptance criteria:**
- [ ] Execution plan includes TWO perceptual auditor agents (perceptual-auditor-1 and perceptual-auditor-2)
- [ ] Both receive identical zero-context prompts
- [ ] Both audit in parallel (no communication until both complete)
- [ ] Team-lead reconciles: findings present in BOTH audits = HIGH CONFIDENCE, findings in only ONE = MEDIUM CONFIDENCE
- [ ] Reconciliation protocol documented for disagreements

**Files to modify:**
- Ceiling execution plan — Phase 4 Validation with dual auditors
- Team-lead prompt slice — reconciliation protocol

**Source reports:**
- Master Retrospective Section VII Finding 7: "Single-evaluator bias concern"
- Adversarial Findings: "Where's the inter-rater reliability test?"
- Methodology Section X: "Consider adding SECOND perceptual auditor for Ceiling"

**Evidence:** Single-evaluator perceptual audit creates false confidence. If different evaluators can't reproduce findings, methodology is unreliable. Dual evaluation with reconciliation improves rigor.

---

### 9. Re-Estimate Ceiling Timing Using Parallel Agent Model
**Description:** Update tier model timing predictions from sequential human model (150-220 min) to parallel agent model (~45-100 min).

**Acceptance criteria:**
- [ ] New timing estimate documented: ~4-5 min per agent x 10-12 agents x 3-4 waves = 45-100 min total
- [ ] Estimate includes metaphor derivation phases (Phases 1-3) which may not parallelize cleanly
- [ ] Buffer added for inter-agent communication overhead (SendMessage time)
- [ ] Cost-benefit recalculated: Ceiling at ~60-90 min vs Middle at ~35 min = 2-3x time for 12-15 mechanisms vs 8-10

**Files to modify:**
- Tier model documentation (if exists in compositional-core or pipeline)
- Ceiling execution plan — expected timeline section

**Source reports:**
- Master Retrospective Section III Finding 3: "The Timing Discrepancy Reveals Planning Model Error"
- Process: "8-11x timing discrepancy" (35 min actual vs 4.5-6.5 hours estimated)
- Methodology: "Cost-benefit trade-off" section

**Evidence:** Middle-tier took ~35 min vs 70-100 min predicted (8-11x gap). Planning model estimates SEQUENTIAL human time, but agent teams execute PARALLEL. Factor confirmed: ~4-5 min per agent average.

---

### 10. Generate Programmatic Audit Checklist FROM Build Plan
**Description:** Programmatic auditor should check what was PLANNED, not a generic list. Dynamically generate checklist from planner's output.

**Acceptance criteria:**
- [ ] Programmatic auditor prompt includes: "Extract all mechanism names from build plan Section 3"
- [ ] Auditor generates verification checklist: "Mechanism #1 Border-Weight: Check computed border-width values"
- [ ] Auditor verifies ALL planned landmarks exist (header, footer, sections A-F)
- [ ] Auditor reports: PLANNED vs DEPLOYED vs MISSING

**Files to modify:**
- Programmatic auditor prompt slice (when created for Ceiling)
- Programmatic audit procedure in execution plan

**Source reports:**
- Methodology Section 1 Defect 3: "Build plan specified footer, audit didn't catch missing footer"
- Master Retrospective Section II: "Programmatic audit generated FROM build plan (checks what was planned, not generic list)"

**Evidence:** Middle-tier programmatic audit checked generic criteria (container width, soul constraints) but didn't verify ALL 12 planned mechanisms were deployed or that footer existed. Plan-derived checklist catches implementation gaps.

---

### 11. Answer Open Question 2: Does Builder Need Full Catalog Entry or Just Name?
**Description:** Test whether footer bug was caused by builder seeing only mechanism NAME ("Footer Mirror") without seeing catalog entry's implementation guidance.

**Acceptance criteria:**
- [ ] Decision documented: Builder sees (A) only mechanism names from plan, OR (B) full catalog entries for deployed mechanisms
- [ ] If (B), mechanism catalog excerpt block added to builder prompt slice
- [ ] Rationale documented: Does "Footer Mirror" convey enough information to implement, or does builder need full catalog description?
- [ ] If (A), add to builder prompt: "If mechanism name is unclear, ask planner via SendMessage"

**Files to modify:**
- Builder prompt slice (when created for Ceiling)
- Prompt slicing strategy document (how much catalog context builder receives)

**Source reports:**
- Master Retrospective Section XII Open Question 2: "Does builder need FULL catalog entry or just name?"
- Adversarial Methodology Section 1: "Builder lacked context to prioritize footer — mechanism catalog entry #14 likely contained implementation guidance"

**Evidence:** Middle-tier builder saw plan saying "Footer Mirror" but didn't implement footer. Hypothesis: builder didn't know what "mirroring" means without seeing catalog entry or reference examples.

---

## TIER 2: SHOULD DO (High Value, Strongly Recommended)

### 12. Add Rhythm Variation Requirement (3-Transition Minimum)
**Description:** Page must include at least 3 DIFFERENT transition types (SMOOTH/BRIDGE/BREATHING) between major sections.

**Acceptance criteria:**
- [ ] Skill Phase 4.2B Pacing Prediction includes rhythm variation requirement
- [ ] Minimum: >= 3 distinct transition types across full-page sequence
- [ ] Binary rule documented with pass/fail examples
- [ ] Planner must document transition types in build plan Section 3 (TRANSITION TABLE)

**Files to modify:**
- `~/.claude/skills/tension-composition/SKILL.md` — Phase 4.2B
- Build plan template — add TRANSITION TABLE section

**Source reports:**
- Master Retrospective Section V Defect 5: "Metronomic rhythm"
- Skill Improvements Section 1.2: "Rhythm Variation Requirement (NEW)"
- Methodology: "Mechanical rather than musical flow"

**Evidence:** Middle-tier had consistent 48-80px gaps but NO deliberate variation. Perceptual audit: "Spacing patterns repeat without variation." Skill has no minimum rhythm requirement.

---

### 13. Make Heading Spacing Ratio a Binary Rule (1.5:1)
**Description:** Convert heading spacing (space above vs below) from judgment call to BINARY programmatic check.

**Acceptance criteria:**
- [ ] Guardrails table in skill includes: "Heading spacing ratio: >= 1.5:1 above/below for h2/h3"
- [ ] Programmatic audit measures COMPUTED margin-top and margin-bottom for each heading
- [ ] Formula documented: margin-top / margin-bottom >= 1.5 for ALL h2/h3
- [ ] Builder prompt includes margin-collapse awareness (how to achieve VISUAL 2:1 ratio)

**Files to modify:**
- `~/.claude/skills/tension-composition/SKILL.md` — Phase 4.0 Guardrails table
- Programmatic auditor checklist template
- Builder prompt slice — heading spacing anti-pattern section

**Source reports:**
- Master Retrospective Section V Defect 4: "Heading spacing ratio violated"
- Methodology Section 1 Defect 4: "Make heading spacing ratio BINARY measurement"
- Skill Improvements Section 1.4: "Heading Spacing Ratio Enforcement (NEW)"

**Evidence:** Middle-tier CSS declared 2:1 ratio (32px top / 16px bottom) but perceptual audit saw "appears equal." Margin collapse issue. Currently judgment-based (PA-SEM-01), should be programmatic.

---

### 14. Refine PA-05 Sub-Criteria Thresholds
**Description:** PA-05b threshold 2.0x is too tight (Middle passed with zero margin). Consider 1.8x or require ">= 2.0x with 0.2x margin."

**Acceptance criteria:**
- [ ] PA-05b threshold decision documented: keep 2.0x OR lower to 1.8x OR add margin requirement
- [ ] PA-05d measurement method changed from "estimated" to PROGRAMMATIC (extract CSS, count compositional lines)
- [ ] Perceptual auditing skill updated with new thresholds
- [ ] All 4 sub-criteria documented with pass MARGINS, not just pass/fail

**Files to modify:**
- `~/.claude/skills/perceptual-auditing/SKILL.md` — PA-05 criteria
- Master execution prompt — PA-05 operationalization section

**Source reports:**
- Master Retrospective Section VII Finding 7: "PA-05b passed at exactly 2.0x threshold (zero margin)"
- Adversarial Findings Section 1: "4/4 DESIGNED is barely a pass"
- Skill Improvements Section 2: "PA-05 Operationalization"

**Evidence:** Middle-tier PA-05b = 64px/32px = 2.0x exactly. A rounding error flips to FAIL. PA-05d was ESTIMATED (>= 15%) not measured. Verdict treats "technically passes" as equivalent to "clearly passes."

---

### 15. Implement Builder Self-Check GATE (Phase 2 Internal)
**Description:** Builder must run internal checklist (CPL, token compliance, landmark completeness) BEFORE writing file. If any check fails, builder revises and recalculates.

**Acceptance criteria:**
- [ ] Builder prompt includes PRE-FILE-WRITE CHECKLIST section
- [ ] Checklist includes: CPL 45-80? Token compliance >= 80%? All landmarks present? Heading ratio >= 1.5:1?
- [ ] Builder cannot proceed to file write until all checks PASS
- [ ] If check fails, builder must adjust (font-size for CPL, replace raw values for tokens, add missing landmarks)

**Files to modify:**
- Builder prompt slice — add pre-write verification protocol
- Appendix B Block 2 in master prompt

**Source reports:**
- Methodology Section 1: Root cause analysis for all 3 defects traces to "no self-verification"
- Master Retrospective Section IX: "Add builder self-check phase between build and audit"
- Adversarial Findings: "At what point do accumulated 'acceptable compromises' add up to FAILURE?"

**Evidence:** Middle-tier had 3 defects (CPL +2, token 66.5%, missing footer) that builder self-check could have caught before declaring "done." Currently builder writes file then audit finds issues.

---

### 16. Design Ablation Study (Test A: Integrated Builder)
**Description:** Before Ceiling launch, run control experiment: same content, same plan, builder receives FULL master prompt (1,760 lines) instead of sliced view.

**Acceptance criteria:**
- [ ] Test A execution plan created
- [ ] Integrated builder receives: full master prompt + build plan + all reference materials
- [ ] Compare output: Does footer ship? Does quality improve or degrade vs Middle-tier sliced builder?
- [ ] Decision documented: If footer ships AND quality doesn't degrade, slicing is harmful. If footer ships BUT quality degrades, slicing is validated.

**Files to modify:**
- Create new test plan: `ephemeral/test-a-integrated-builder/PLAN.md`
- Document results in methodology folder

**Source reports:**
- Adversarial Methodology Section 1: "Test A: Integrated Builder"
- Master Retrospective Section III Finding 2: "Prompt slicing may have structural flaws"
- Methodology: "Footer bug is SMOKING GUN that slicing has hidden failure modes"

**Evidence:** Builder saw 40% of master prompt, missed 60% containing implementation guidance, anti-patterns, reference examples. Footer specified in plan but not built. Test would resolve whether slicing caused bug.

---

### 17. Establish Measurement Precision Standards
**Description:** All threshold comparisons must report actual values and margins, not just pass/fail. "Passes at 2.0x" should be "Passes at 2.0x (exact, zero margin)" or "Passes at 2.3x (0.3x above threshold)."

**Acceptance criteria:**
- [ ] Verdict template includes MARGIN column for all criteria
- [ ] Format: "PA-05b: PASS at 2.3x (threshold 2.0x, margin +0.3x)"
- [ ] Programmatic audit reports exact measured values, not approximate
- [ ] Perceptual audit distinguishes "clearly passes" from "technically passes" from "barely passes"

**Files to modify:**
- Verdict template structure (when created for Ceiling)
- Programmatic audit output format
- Perceptual audit rating guidance

**Source reports:**
- Master Retrospective Section VII Finding 7: "Report pass MARGINS, not just pass/fail"
- Adversarial Findings: "~20% overlap is vague. Is that 19.8% or 21.5%?"
- Methodology: "Precision matters when comparing to thresholds"

**Evidence:** Middle-tier PA-05b passed at EXACTLY 2.0x. No margin documented. D3.2 reported "~20%" overlap (imprecise). Verdict treats marginal passes as equivalent to clear passes.

---

### 18. Add Weight Distribution Requirement
**Description:** Require at least 2 focal points in bottom 50% of page to prevent top-heavy weight distribution.

**Acceptance criteria:**
- [ ] Perceptual audit includes question: "Are there >= 2 visual focal points in bottom 50% of page?"
- [ ] Planner must document focal point distribution in build plan
- [ ] Ceiling pages should have more balanced weight distribution than Middle-tier

**Files to modify:**
- Perceptual auditing skill — add weight distribution question
- Planner prompt — add focal point planning requirement

**Source reports:**
- Master Retrospective Section V Defect 6: "Top-heavy weight distribution"
- Verdict Perception Track: "Visual weight concentrates in header and dissipates"
- Output Quality: "Only two moments create visual interest across entire page"

**Evidence:** Middle-tier had dark header and diagram as focal points (both in top half). Bottom half had no visual anchors. Perceptual audit noted "limited visual drama."

---

### 19. Test Contaminated Content-Selector (Test D)
**Description:** Run control: content-selector reads mechanism catalog BEFORE selecting content. Compare extraction to firewalled version.

**Acceptance criteria:**
- [ ] Test D execution plan created
- [ ] Contaminated content-selector receives: source file + mechanism catalog + extraction criteria
- [ ] Compare output: Does contaminated selector extract different sections? Does it "happen to" select mechanism-rich content?
- [ ] Decision documented: If outputs 80%+ identical, firewall is unnecessary overhead. If outputs diverge, firewall is validated.

**Files to modify:**
- Create test plan: `ephemeral/test-d-firewall/PLAN.md`
- Document results in methodology folder

**Source reports:**
- Master Retrospective Section III Finding 8: "Information Isolation May Be Solving Theoretical Problem"
- Adversarial Methodology Section 2: "Firewall untested assumption"
- Adversarial Methodology: "Expected result: 80%+ identical because source file structure constrains extraction"

**Evidence:** Firewall adds workload (content-selector is separate agent) and serializes work. Never tested whether reverse-fitting ACTUALLY happens when extracting from real content sources.

---

### 20. Document Two-Dimension Designed Model
**Description:** Vocabulary fluency (Middle tier) vs Compositional fluency (Ceiling tier). Add to tier methodology.

**Acceptance criteria:**
- [ ] Tier model documentation includes two-dimension table
- [ ] Middle tier = vocabulary fluency (lookup: content → mechanism)
- [ ] Ceiling tier = compositional fluency (derivation: metaphor → mechanism → expression)
- [ ] Flagship tier = multi-pattern composition (multiple metaphors interleaved)
- [ ] "Designed" reframed as vocabulary threshold, not quality spectrum

**Files to modify:**
- `design-system/compositional-core/CLAUDE.md` or tier methodology doc
- Tier model definition (if exists separately)

**Source reports:**
- Master Retrospective Section III Finding 4: "'Designed' Has Two Dimensions"
- Theory Validation: "Vocabulary fluency confirmed, compositional fluency caveat"
- Output Quality: "Specifications applied correctly, not composition felt through"

**Evidence:** Middle-tier crossed DESIGNED threshold (PA-05 4/4) through vocabulary fluency but perceptual audit noted "professionally stiff." Suggests DESIGNED is binary gate, not quality spectrum. Richness ceiling for vocabulary-alone is "professionally competent."

---

### 21. Maintain Fresh-Eyes Zero-Context Auditing
**Description:** Perceptual auditors must NEVER see build plan, mechanism catalog, master prompt, or tier model before evaluation.

**Acceptance criteria:**
- [ ] Perceptual auditor prompt slice includes ZERO design system context
- [ ] Auditor receives: screenshots only (1440px + 768px), PA question list, rating scale
- [ ] Auditor does NOT receive: what mechanisms were deployed, what pattern was used, what tier this is, what the expected richness level is
- [ ] Confirmation: auditor prompt < 300 lines, mostly PA question definitions

**Files to modify:**
- Perceptual auditor prompt slice (when created for Ceiling)
- Prompt slicing strategy — maintain 8% context level for PA

**Source reports:**
- Master Retrospective Section III Finding 5: "Fresh-Eyes Zero-Context Auditing Finds What Loaded Agents Miss"
- Continuity: "Perceptual auditor benefits from NOT being clever"
- Process: "Fresh-eyes protocol confirmed across 6+ teams"

**Evidence:** Middle-tier perceptual auditor saw no footer and said "major flow issue." Context-loaded agent would have rationalized missing footer as intentional. Fresh eyes caught implementation bug.

---

### 22. Consider Merging Content-Selector + Planner
**Description:** If Test D shows firewall is unnecessary, merge content-selector and planner into single agent to reduce sequencing dependencies.

**Acceptance criteria:**
- [ ] Decision documented: Merge content-selector + planner OR keep separate
- [ ] If merge: planner prompt includes content selection criteria (A2.1-A2.10) as Phase 0
- [ ] If merge: total agent count reduces from 10-12 to 9-11 for Ceiling
- [ ] If keep separate: document rationale (firewall validated by Test D)

**Files to modify:**
- Ceiling execution plan — agent topology section
- Planner prompt slice (if merged, add content selection phase)

**Source reports:**
- Master Retrospective Section III Finding 8: "Information isolation may be solving theoretical problem"
- Adversarial Methodology Section 2: "23K tokens across 3 agents vs 18K for 2 agents if merged"
- Methodology: "Evaluate merging content-selector + planner"

**Evidence:** Content-selector + planner separation creates sequencing dependency (must wait for content-selector before launching planner). If firewall doesn't prevent reverse-fitting, separation is overhead.

---

## TIER 3: COULD DO (Nice to Have, Can Defer)

### 23. Add Mechanism Impact Profiles to Catalog
**Description:** Document HIGH/MEDIUM/LOW visual salience for each mechanism. Helps builders select mechanisms for desired perceptual balance.

**Acceptance criteria:**
- [ ] Mechanism catalog includes Impact Profile column: HIGH (dark header, solid offset) / MEDIUM (zone backgrounds, code blocks) / LOW (border-left signal, width variation)
- [ ] Planner can use impact profiles to balance visual weight distribution
- [ ] Builder understands relative salience when deploying multiple mechanisms

**Files to modify:**
- `design-system/compositional-core/grammar/mechanism-catalog.md` — add Impact Profile column

**Source reports:**
- Master Retrospective Section IX item #8: "COULD DO LATER"
- Skill Improvements: "Add mechanism impact profiles to catalog"
- Extrapolations: "Helps builders select mechanisms for perceptual balance"

---

### 24. Add Content Affinity Documentation to Catalog
**Description:** Document which content structures favor which mechanisms (code blocks → #17 Code Blocks, layered concepts → #1 Border-Weight, step sequences → #5 Dense/Sparse).

**Acceptance criteria:**
- [ ] Mechanism catalog includes Content Affinity column or section
- [ ] Examples: "#17 Code Blocks: Best for technical docs with 5+ examples" or "#1 Border-Weight: Best for layered/tiered concepts"
- [ ] Planner can use affinity guidance for content-mechanism fit reasoning

**Files to modify:**
- `design-system/compositional-core/grammar/mechanism-catalog.md` — add Content Affinity section

**Source reports:**
- Master Retrospective Section IX item #9: "COULD DO LATER"
- Extrapolations Section 1.3: "Content affinity documentation"

---

### 25. Add Discrete vs Progressive Application Modes to Catalog
**Description:** Border-weight can be discrete (4px vs 1px, binary) or progressive (4px → 3px → 1px, gradient). Document modes for each mechanism.

**Acceptance criteria:**
- [ ] Border-weight entry includes: "Application modes: Discrete (binary critical vs normal) OR Progressive (gradient encoding continuous dimension)"
- [ ] Example: Middle-tier used progressive mode (4px→3px→1px for security layers)
- [ ] Catalog documents which mechanisms have discrete vs progressive modes

**Files to modify:**
- `design-system/compositional-core/grammar/mechanism-catalog.md` — Border-Weight entry

**Source reports:**
- Master Retrospective Section IX item #10: "COULD DO LATER"
- Extrapolations Section 1.1: "Discrete vs progressive application modes"

---

### 26. Correct CPL Classification
**Description:** CPL is currently in Critical-10 but is actually a B9.2 guardrail (readability floor), not a soul constraint. Move to separate "Guardrails" checklist.

**Acceptance criteria:**
- [ ] Critical-10 list contains ONLY 7 soul constraints (border-radius, box-shadow, no pure black/white, typography trinity, h3 italic, no gradients)
- [ ] CPL moved to separate "Guardrails" checklist alongside horizontal padding, compression ratio, section breathing, heading-body gap, density range
- [ ] Documentation clarifies: Critical-10 = identity constraints, Guardrails = readability/usability floors

**Files to modify:**
- Master execution prompt — Critical-10 list
- Guardrails checklist (create if doesn't exist)

**Source reports:**
- Master Retrospective Section IX item #11: "COULD DO LATER"
- Methodology Section 1 Defect 1: "Correct CPL classification"

---

### 27. Extract Strongest Content-Mechanism Fits for Case Studies
**Description:** Document border-weight gradient, code block anchors, dark header identity as exemplar content-mechanism fits.

**Acceptance criteria:**
- [ ] Case study file created: `design-system/compositional-core/case-studies/middle-tier-fits.md`
- [ ] Includes: border-weight gradient (4px→3px→1px for security), code blocks (8 instances as scanning waypoints), dark header (editorial authority)
- [ ] Each fit includes: before/after comparison, CSS excerpts, perceptual impact description
- [ ] Screenshots embedded showing visual result

**Files to modify:**
- Create: `design-system/compositional-core/case-studies/middle-tier-fits.md`

**Source reports:**
- Verdict F1.4: "Document strongest content-mechanism fits"
- Output Quality: "Border-weight gradient was the design highlight"
- Comparison Report: "Code blocks create visual anchors vs zero in Variant B"

---

### 28. Run Test B: Dependency Mapping
**Description:** Map implicit dependencies between prompt slices. What knowledge in builder slice assumes content from excluded slices?

**Acceptance criteria:**
- [ ] For each exclusion in builder slice, document what excluded content ASSUMES builder knows
- [ ] Example: "Section 7 Reference Examples assumes builder knows what '2-zone DNA' means — does :root CSS alone provide this?"
- [ ] Dependency map created showing: slice A assumes knowledge from slice B, potential blind spots
- [ ] Results inform whether integrated builder (Test A) is necessary

**Files to modify:**
- Create analysis: `ephemeral/test-b-dependency-mapping/ANALYSIS.md`

**Source reports:**
- Adversarial Methodology Section 1: "Test B: Dependency Mapping"
- Adversarial Methodology: "Map IMPLICIT dependencies (knowledge in slice A only makes sense if you've read slice B)"

---

### 29. Run Test C: Failure Mode Analysis
**Description:** Check whether programmatic audit verified ALL 12 mechanisms were deployed, not just generic criteria.

**Acceptance criteria:**
- [ ] Review Middle-tier programmatic audit output
- [ ] Check: Did audit verify mechanism #1 Border-Weight? #2 2-Zone DNA? ... #14 Footer Mirror?
- [ ] Document: Which mechanisms were NOT verified? Which planned elements were NOT checked?
- [ ] Results inform programmatic audit improvement (item #10: generate checklist FROM plan)

**Files to modify:**
- Create analysis: `ephemeral/test-c-failure-modes/ANALYSIS.md`

**Source reports:**
- Adversarial Methodology Section 1: "Test C: Failure Mode Analysis"
- Adversarial Methodology: "Programmatic audit checked container width, soul constraints — but did it verify ALL 12 mechanisms?"

---

### 30. Test Opus vs Sonnet for Planner (Ablation)
**Description:** Run same experiment with Sonnet planner instead of Opus. Compare plan quality to isolate model capability from two-instance pattern effect.

**Acceptance criteria:**
- [ ] Run Middle-tier with Sonnet planner (same content, same per-category minimums)
- [ ] Compare: Does plan quality drop? Does output quality drop?
- [ ] Decision: If plan quality significantly worse, effect is model capability. If similar, effect is two-instance pattern.
- [ ] Cost analysis: All-Sonnet team vs mixed Opus/Sonnet team

**Files to modify:**
- Create test plan: `ephemeral/test-opus-sonnet/PLAN.md`

**Source reports:**
- Master Retrospective Section VIII Challenge 5: "Opus vs Sonnet confound"
- Adversarial Methodology: "Can't separate two-instance pattern effect from model capability gap"

---

## TIER 4: OPEN QUESTIONS (Must Be Answered Before or During Ceiling)

### Q1: Is Per-Category the Real Driver, or Just Higher Count?
**Description:** Middle experiment can't isolate which factor drove improvement. An ablation study (8-10 total vs 1+ per category on same content) would resolve this.

**Answer needed before:** Ceiling launch (informs whether to use per-category minimums or aggregate count)

**How to answer:**
- Run two variants: (A) "Deploy 8-10 mechanisms total, any categories" vs (B) "Deploy 1+ per category (produces 8-12 total)"
- Same content, same pattern, same planner
- Compare: Does (B) produce richer output? Does (B) produce more novel output?

**Source reports:**
- Master Retrospective Section XII Open Question 1: "HIGH PRIORITY"
- Theory Validation Theory 1: "PARTIALLY CONFIRMED — can't isolate per-category vs higher count"

---

### Q2: Full Catalog Entry or Just Name for Builder?
**Description:** Does builder need mechanism catalog full entry or just mechanism name from plan? Footer bug suggests builder didn't know what "Footer Mirror" means without catalog entry.

**Answer needed before:** Ceiling launch (informs builder prompt design)

**How to answer:**
- Already listed as MUST DO item #11 (binary decision)
- If builder sees only names, add SendMessage capability to ask planner
- If builder sees full entries, add mechanism catalog excerpts to builder prompt slice

**Source reports:**
- Master Retrospective Section XII Open Question 2: "HIGH PRIORITY"
- Adversarial Methodology: "Builder might not have understood 'mirroring' without catalog entry"

---

### Q3: What's the Actual PA-05d CSS Composition Percentage?
**Description:** Perceptual audit ESTIMATED >= 15% compositional CSS. Programmatic audit could have measured it. Must be measured, not estimated.

**Answer needed before:** Ceiling launch (informs PA-05d threshold validity)

**How to answer:**
- Extract CSS from Middle-tier HTML
- Count lines: total CSS lines, framework/reset lines (body, html, universal selectors), compositional lines (mechanism-specific)
- Calculate: compositional / total = actual percentage
- Compare to 15% threshold

**Source reports:**
- Master Retrospective Section XII Open Question 3: "HIGH PRIORITY"
- Adversarial Findings: "PA-05d was ESTIMATED, not measured"

---

### Q4: What's the Natural Middle-Tier Mechanism Landing Zone?
**Description:** One experiment produced 12. Need 5+ experiments to establish actual distribution. Is it 8-12? 10-14? Variance?

**Answer needed:** EVENTUALLY (not blocking Ceiling, but needed for tier model calibration)

**How to answer:**
- Run Middle-tier on 5 different content domains (tutorial, reference, conceptual explanation, API docs, narrative)
- Record mechanism counts: S, H, C, D, N, Total
- Calculate: median, range, standard deviation
- Refine tier model prediction from "8-10" to actual observed range

**Source reports:**
- Master Retrospective Section XII Open Question 4: "MEDIUM PRIORITY"
- Theory Validation Theory 3: "PARTIALLY UNCONFIRMED — need 5+ Middle builds to confirm"

---

### Q5: Is Opus/Sonnet Split Necessary?
**Description:** Cost optimization question. Would all-Sonnet produce similar results? Or is Opus planner critical?

**Answer needed:** EVENTUALLY (cost optimization, not blocking)

**How to answer:**
- Already listed as COULD DO item #30 (Test Opus vs Sonnet ablation)
- Compare plan quality and output quality
- Calculate cost difference: 1 Opus + 7 Sonnet vs 8 Sonnet

**Source reports:**
- Master Retrospective Section XII Open Question 6: "MEDIUM PRIORITY"
- Adversarial Methodology Challenge 5: "Opus/Sonnet confound"

---

## Execution Priority

**IMMEDIATE (before starting Ceiling planning):**
1. Apply M1 permanently to skill (MUST DO #2) — 15 minutes
2. Document inter-agent communication protocol requirements (MUST DO #1) — 30 minutes
3. Answer Q2: Builder receives catalog entries or just names? (MUST DO #11) — 10 minutes decision

**DURING CEILING PLANNING (creating execution plan):**
4. Add landmark completeness gate to execution plan (MUST DO #3)
5. Add builder self-check requirements (MUST DO #4)
6. Define Ceiling per-category minimums (MUST DO #5)
7. Add mechanism interaction requirement (MUST DO #6)
8. Design blind novelty protocol (MUST DO #7)
9. Add dual perceptual auditor (MUST DO #8)
10. Re-estimate timing (MUST DO #9)
11. Design plan-derived programmatic audit (MUST DO #10)

**DURING CEILING EXECUTION:**
12. All SHOULD DO items (rhythm variation, heading ratio, PA-05 refinement, etc.) implemented in prompts
13. Monitor whether inter-agent communication actually happens (agents use SendMessage)
14. Measure Q3: actual PA-05d percentage from Ceiling output

**AFTER CEILING (if time permits):**
15. Run Test A, Test D (ablation studies)
16. All COULD DO items (impact profiles, content affinity, case studies)

---

## Success Criteria for "Checklist Complete"

This checklist is COMPLETE when:
- [ ] All 11 MUST DO items marked DONE (binary acceptance criteria met)
- [ ] At least 8 of 11 SHOULD DO items marked DONE or DEFERRED WITH RATIONALE
- [ ] All 5 OPEN QUESTIONS marked ANSWERED or DECISION DOCUMENTED
- [ ] Ceiling execution plan exists and references this checklist
- [ ] Team-lead for Ceiling experiment confirms checklist reviewed

**Minimum bar for Ceiling launch:** All 11 MUST DO items complete. SHOULD DO items improve quality but aren't blocking.

---

## Change Log

**v1 (2026-02-16):** Initial synthesis from 11 retrospective reports (09-MASTER-RETROSPECTIVE.md + 10 dimension reports). 35 items across 4 tiers. Top 3 MUST DO: inter-agent communication, M1 permanent, landmark gate.
