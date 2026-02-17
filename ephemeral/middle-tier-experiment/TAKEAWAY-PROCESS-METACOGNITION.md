# Process Metacognition — Middle-Tier Experiment Takeaways

**Date:** 2026-02-16
**Analyst:** meta-analyst
**Mission:** Extract process patterns, identify what to carry forward, what to change, what anti-patterns to avoid, and what meta-lessons emerged
**Scope:** NOT about HTML quality — about HOW WE RUN EXPERIMENTS

---

## Executive Summary

The Middle-Tier experiment validated flat file-bus topology (~35 min, 8 agents, zero contention) and per-category mechanism minimums (12 mechanisms → DESIGNED 4/4). BUT it exposed CRITICAL gaps: missing footer (WOULD-NOT-SHIP), no builder self-check, zero agent messaging, single novelty evaluator knowing the hypothesis, and 8-11x timing discrepancy revealing planning model error.

**THE SINGLE MOST IMPORTANT META-LESSON:**
Binary rules achieve 100% agent compliance (7/7 soul constraints PASS), judgment rules achieve 0% compliance (0/3 quality thresholds met). This is THE architectural principle for agent-based systems: if a constraint matters, make it binary. There is no middle ground.

**THE PATTERN I'M LEAST CONFIDENT CARRYING FORWARD:**
Two-Instance pattern (separate planner/builder). It's SUPPOSED to exploit continuation bias, but the missing footer suggests information loss between instances can REDUCE quality. We have no counterfactual — would a single agent have done better?

---

## 1. CARRY FORWARD (Validated Patterns to Repeat)

### 1.1 Flat File-Bus Topology (VERY HIGH Confidence)

**What it is:**
- 1 team-lead (Opus, coordination only)
- 8 workers (7 Sonnet, 1 Opus planner)
- NO captains, NO hierarchies
- Communication: 100% file-based (zero SendMessage calls)
- Per-file ownership: 1 agent = 1 output file = zero contention

**Evidence it works:**
- 8 agents executed sequentially, 7 files written, zero failures
- Total execution time ~35 minutes (vs 70-100 min predicted)
- Zero file contention (no agent waited for another's output)
- Team-lead context stayed under 25K tokens (well below limits)
- Scales to ~12-15 agents before cognitive load becomes unmanageable

**Confidence: VERY HIGH**
Confirmed across 6+ teams in project history. Recovery agents doing work directly are MORE reliable than captain→worker hierarchies.

**When it breaks:**
- Team size > 15 agents (cognitive load on single lead)
- Unknown task scope (exploration where files aren't predefined)
- Complex coordination (agents need to negotiate, not just execute)

**For Ceiling:**
Use same topology. Ceiling adds metaphor derivation (3-5 agents) but same flat structure. Estimated 12-15 agents total = still within flat-bus capacity.

---

### 1.2 Per-Category Mechanism Minimums (HIGH Confidence)

**What it is:**
Deploy AT LEAST 1 mechanism from EACH of 5 categories:
- Spatial: #5, #6, #15
- Hierarchy: #1, #4, #11
- Component: #2, #9, #10, #17
- Depth/Emphasis: #3, #7, #16
- Structure/Nav: #8, #12, #13, #14, #18

**Evidence it works:**
- Planner deployed 12 mechanisms (S:1, H:3, C:4, D:2, N:3)
- All 5 categories covered (breadth guaranteed)
- Distribution is content-driven (technical docs use more Component, less Spatial)
- Result: PA-05 DESIGNED (4/4), novelty 3/3, better than Variant B

**Confidence: HIGH**
The distribution (1-4 per category) is exactly what theory predicted. Content-appropriate variance with guaranteed breadth.

**Why it works:**
Per-category minimums ensure VOCABULARY DIVERSITY, not just VOCABULARY VOLUME. An agent can't deploy 8 hierarchy mechanisms and zero spatial mechanisms.

**For Ceiling:**
Raise thresholds: Spatial: 2+, Hierarchy: 2+, Component: 3+, Depth: 2+, Structure: 2+. Natural landing = 11-15 mechanisms.

---

### 1.3 Opus Planner + Sonnet Workers (HIGH Confidence)

**What it is:**
- Planner: Opus 4.6 (most capable model)
- Content-selector, builder, all auditors, verdict synthesizer: Sonnet 4.5

**Evidence it works:**
- Opus planner produced 1,011-line plan with 12 mechanisms, per-category justifications, exact CSS values
- Sonnet builder implemented with 4/4 PA-05, 3/3 novelty
- Sonnet perceptual auditor gave genuine fresh-eyes reactions
- Cost: 1 Opus + 7 Sonnet is FAR cheaper than 8 Opus agents

**Confidence: HIGH**
Planner needs creative composition (highest creative load). Builder needs execution fidelity (Sonnet excels). Cost-benefit is clear.

**For Ceiling:**
Keep Opus for planner. Metaphor derivation phases (1-3) require even MORE creative capability. Consider Opus for novelty evaluator (needs to detect subtle structural fingerprints).

---

### 1.4 Fresh-Eyes Zero-Context Perceptual Audit (VERY HIGH Confidence)

**What it is:**
- Perceptual auditor receives ZERO design context
- Takes screenshots, reacts to what it SEES
- Does not know: mechanism names, tier model, pattern names, expected richness

**Evidence it works:**
- Fresh-eyes found 4 issues context-loaded agents would miss:
  1. Missing footer (WOULD-NOT-SHIP)
  2. Heading spacing ratio violation (perceptual issue)
  3. Top-heavy weight distribution (unbalanced composition)
  4. Monotonous rhythm (mechanical spacing)
- Zero overlap with programmatic audit findings
- Found the BLOCKING issue (missing footer) vs maintainability issues (token compliance)

**Confidence: VERY HIGH**
Complete separation of findings (zero overlap) and severity difference (WOULD-NOT-SHIP vs CONVENTION BUG) provide strong evidence.

**Why it works:**
Research-loaded agents see what they KNOW. Fresh-eyes agents see what's THERE. The perceptual auditor said "this page just ends" because it has no context about what SHOULD be there.

**For Ceiling:**
Use same fresh-eyes protocol. Ceiling PA should not know: metaphor, mechanisms, tier, expected richness.

---

### 1.5 Binary Rules Achieve 100% Compliance (VERY HIGH Confidence)

**What it is:**
Constraints must be binary ("MUST" / "MUST NOT") or agents ignore them. Judgment calls ("consider", "prefer", "balance") have near-zero compliance.

**Evidence it works:**
- Binary rules: 7/7 compliance (100%)
  - Container width 940-960px (M3): 960px exact ✓
  - border-radius: 0 ✓
  - box-shadow: none ✓
  - No pure black/white ✓
  - Typography trinity ✓
  - All h3 italic ✓
  - No gradients ✓
- Judgment rules: 0/3 compliance (0%)
  - Token compliance "should be >= 80%": 66.5% (FAIL)
  - CPL "should be 45-80": 82 chars (MARGINAL FAIL)
  - Heading spacing "should be 1.5:1": equal spacing (FAIL)

**Confidence: VERY HIGH**
The 7/7 vs 0/3 split is perfect experimental evidence. This is THE most important architectural principle.

**For Ceiling:**
Convert ALL critical constraints to binary. If it matters, make it MUST/MUST NOT. No "should", no "prefer", no "consider".

Examples to convert:
- Token compliance: "MUST be >= 80%" (not "should be")
- CPL: "MUST be 45-80 at 1440px" with formula for verification
- Heading spacing: "margin-top MUST be >= 1.5x margin-bottom"

---

### 1.6 Content-Mechanism Fit Drives Selection (MEDIUM Confidence)

**What it is:**
Let content structure drive mechanism selection, not prescriptive counts. Technical docs use more Component mechanisms, narrative content uses more Spatial.

**Evidence it works:**
- Middle-tier distribution: S:1, H:3, C:4, D:2, N:3
- Technical documentation naturally component-dense (code blocks, tables, callouts)
- Build plan Section 3 shows content-driven reasoning for each mechanism
- Result: mechanisms feel appropriate, not forced

**Confidence: MEDIUM**
Sample size = 1. We need 3-5 Middle builds on different content types to confirm content-mechanism distributions vary appropriately.

**For Ceiling:**
Maintain principle. Planner should justify each mechanism based on content structure, not fill a quota.

---

### 1.7 Pre-Baked CSS Blocks (HIGH Confidence)

**What it is:**
Builder receives copy-paste ready CSS blocks (85% context reduction):
- `:root` block (53 custom properties, 55 lines)
- Base typography (35 lines)
- Accessibility patterns (25 lines)
- Responsive strategy (10 lines)

**Evidence it works:**
- Builder context: 6K tokens (vs 40K if reading all source files)
- Zero interpretation errors (builder copies verbatim)
- 7/7 soul constraints PASS (typography trinity, no gradients, etc.)
- Token compliance attempted (66.5% — failed but unrelated to CSS blocks)

**Confidence: HIGH**
Massive context savings (85%) with zero quality loss on pre-baked elements.

**For Ceiling:**
Expand CSS blocks for metaphor-specific patterns. Pre-compile from tokens.css + metaphor derivatives.

---

### 1.8 Phase Sequencing (Content → Plan → Build → Audit → Evaluate → Verdict)

**What it is:**
Linear phase structure with clear handoffs:
- Phase 0: Content selection
- Phase 1: Planning (mechanism selection, pattern choice)
- Phase 2: Build (HTML implementation)
- Phase 3: Validation (programmatic + perceptual audits)
- Phase 4: Evaluation (comparison + novelty)
- Phase 5: Verdict synthesis

**Evidence it works:**
- Clear dependency chain (Phase N reads Phase N-1 outputs)
- Zero circular dependencies
- Easy to understand, easy to debug
- Agents know their exact inputs and expected outputs

**Confidence: HIGH**
Standard pipeline architecture. Confirmed across all previous experiments.

**For Ceiling:**
Add metaphor derivation as Phases 1-3 (multi-axis questioning, tension derivation, metaphor collapse), then shift existing phases to 4-9.

---

### 1.9 Thin Team-Lead (Verification, Not Reading)

**What it is:**
Team-lead verifies file existence and structure markers, does NOT read full intermediate outputs.

**Evidence it works:**
- Team-lead context stayed under 25K tokens (vs 70K if reading all outputs)
- 94% token savings (verification vs full reads)
- Zero context compaction events
- Avoided context wall that crashed previous 50+ file sessions

**Confidence: MEDIUM**
Worked for Middle-tier, but missed the footer bug. Thin team-lead optimized for context preservation, not quality assurance.

**Trade-off:**
Speed/simplicity vs quality. Missing footer likely preventable if team-lead had read build plan fully and cross-checked against HTML.

**For Ceiling:**
Keep thin team-lead for context management. Add explicit STRUCTURAL COMPLETENESS gate to catch missing landmarks.

---

### 1.10 Information Isolation Firewalls (MEDIUM Confidence)

**What it is:**
Agents see ONLY what they need:
- Content-selector: Never sees mechanism catalog
- Builder: Never sees master prompt, only the plan
- Perceptual auditor: Never sees mechanism counts, pattern names, tier model
- Novelty evaluator: Never sees perceptual audit results

**Evidence it works:**
- Content-selector showed NO mechanism vocabulary in output (mechanism-blind worked)
- Builder implemented plan literally (didn't anchor to master prompt framing)
- Perceptual auditor gave genuine first-impression reactions (no rationalization bias)
- Prevented 4/4 intended contamination risks

**Confidence: MEDIUM**
Worked as intended, BUT the missing footer suggests information isolation can HARM quality (builder missed emphasis in plan). We don't have counterfactual — would contaminated agents do better or worse?

**For Ceiling:**
Maintain isolation but add CLARIFICATION PROTOCOL. If builder sees ambiguity in plan, it should flag for clarification, not silently skip.

---

## 2. CHANGE (Patterns That Need Modification)

### 2.1 File-Only Communication → Add SendMessage (HIGH Priority)

**What's wrong:**
Zero SendMessage calls prevented builder from asking planner clarification questions. Missing footer (WOULD-NOT-SHIP) likely preventable with: "Footer specified in Section 2 but no CSS in Builder Blocks — should I implement from Section 2 description?"

**Evidence:**
CD-006 (39/40 WITH messaging) achieved higher quality than Middle-tier (B+ WITHOUT messaging). Builder-to-planner questions resolve ambiguities before implementation bugs emerge.

**The fix:**
Add SendMessage for CLARIFICATION ONLY (not status updates):
- Builder → Planner: "Plan Section 2 specifies footer but Builder Blocks don't include footer CSS. Should I implement based on Section 2 description?"
- Perceptual auditor → Builder: "I see no footer. Was this intentional?"
- Any agent → Team-lead: "File X is missing dependency Y. Should I wait or fail?"

**For Ceiling:**
Enable SendMessage for all agents. Distinguish:
- **Clarification messages:** Questions about ambiguities (ENCOURAGED)
- **Status messages:** "Task complete, moving on" (DISCOURAGED — file existence is the status signal)

---

### 2.2 No Builder Self-Check → Add CPL Formula + Token Scan (HIGH Priority)

**What's wrong:**
Builder wrote file with 3 defects (CPL +2, token compliance 66.5%, missing footer) and declared "done" without self-verification.

**Evidence:**
0/3 judgment rules met. Builder had no FORMULA to verify CPL, no SCAN to verify token compliance, no CHECKLIST to verify landmarks.

**The fix:**
Add builder self-check phase (Phase 2b) BEFORE writing file:

```
BUILDER SELF-CHECK (complete ALL before writing file):

[ ] Container width = 960px (measure computed max-width)
[ ] CPL = 45-80 at 1440px (formula: content-width / font-size / 0.6)
[ ] Token compliance >= 80% (count var() vs raw hex/px)
[ ] Landmark completeness (header exists? footer exists? all sections exist?)
[ ] Soul constraints (border-radius: 0, box-shadow: none, no #000/#FFF, h3 italic)
[ ] Heading spacing ratio >= 1.5:1 (margin-top / margin-bottom for h3)
[ ] Rhythm variation >= 2 distinct gap sizes between sections
[ ] All mechanisms from plan are implemented (cross-check plan Section 3 vs CSS)

IF ANY CHECK FAILS: Revise before writing file. DO NOT write until ALL pass.
```

**Cost:** ~5 min builder time
**Benefit:** Eliminates 3/5 defects BEFORE audit phase

**For Ceiling:**
Make self-check mandatory. Builder cannot write file until checklist passes.

---

### 2.3 No Landmark Gate → Add Completeness Check (HIGH Priority)

**What's wrong:**
Phase 2 → 3 boundary has NO gate. Builder writes file, immediately proceeds to audit. Missing footer was caught by perceptual audit (Phase 3b), not by a gate at Phase 2→3.

**Evidence:**
Perceptual audit: "The page just stops. No conclusion, no footer as ending marker." This is a STRUCTURAL DEFECT that should be caught by programmatic gate, not perceptual reaction.

**The fix:**
Add Gate 2.75 (Landmark Completeness) at Phase 2 → 3:

```
LANDMARK COMPLETENESS CHECK:

INPUT: Build plan Section 2 (SECTION MAP)
EXTRACT: All section identifiers (A, B, C, D, E, F, etc.)

For EACH section:
- If section is labeled "header" → verify <header> element exists
- If section is labeled "footer" → verify <footer> element exists
- If section is content → verify <section> element exists

METHOD:
1. Open HTML in Playwright
2. Run document.querySelectorAll('header, footer, section')
3. Count: header (0 or 1), footer (0 or 1), sections (>= content section count)

PASS: All landmarks exist
FAIL: Missing header/footer/section → block audit, return to builder
```

**Cost:** ~30 seconds (Playwright query)
**Benefit:** Would have caught missing footer immediately

**For Ceiling:**
Make landmark gate mandatory. NO HTML proceeds to audit without passing structural completeness.

---

### 2.4 Single Novelty Evaluator → Dual with Blind Protocol (MEDIUM Priority)

**What's wrong:**
Single novelty evaluator knew the hypothesis ("Middle should be novel compared to showcases"). This creates confirmation bias.

**Evidence:**
Adversarial review flagged: "Who evaluates the evaluators?" Internal evaluation (PA-05 operationalized by project team) vs external validation (blind designers rating screenshots).

**The fix:**
Use TWO novelty evaluators:
- **Evaluator A (hypothesis-blind):** "Compare these 3 pages. Which structural fingerprints are unique? What CSS values overlap?"
- **Evaluator B (hypothesis-aware):** "The hypothesis is Middle should be novel. Does the evidence support this?"

**Cross-check:** If A finds novelty signals AND B confirms hypothesis support, novelty is robust. If A finds convergence but B claims novelty, hypothesis bias is present.

**For Ceiling:**
Use dual evaluator protocol. Cost: +5 min. Benefit: Eliminates confirmation bias in novelty assessment.

---

### 2.5 Sequential Human Timing Model → Parallel Agent Timing Model (MEDIUM Priority)

**What's wrong:**
Tier model predicted Middle = 70-100 min. Actual = ~35 min (2-3x faster). The 8-11x discrepancy reveals planning model error.

**Evidence:**
Tier model's build times are BACKWARD-ENGINEERED from showcase pages with extensive iteration. Middle-tier was SINGLE-PASS (each agent ran once).

**The fix:**
Distinguish:
- **Wall-clock time:** Actual execution time with parallel agents (~35 min)
- **Serial effort:** If one human did all phases sequentially (~90 min)
- **Iterative effort:** If multi-pass audits and refinement (~150 min)

Tier model should predict WALL-CLOCK TIME for flat file-bus topology, not serial effort.

**For Ceiling:**
Predict: Ceiling wall-clock = 60-90 min (not 150-220). Metaphor derivation +20-30 min, builder +15-20 min, auditing +15-20 min.

---

### 2.6 Prompt Slicing at 60% Exclusion → Investigate Safer Threshold (LOW Priority)

**What's wrong:**
Builder saw 40% of master prompt, EXCLUDED 60%. The missing footer suggests excluded content may have contained critical dependencies.

**Evidence:**
Adversarial review flagged: "Builder missed footer despite plan specifying it. Did excluded 60% contain 'footer is non-negotiable' emphasis?"

**The fix:**
Test prompt slicing thresholds:
- 40% exclusion (builder sees 60%): Does quality improve?
- 60% exclusion (builder sees 40%): Current approach
- 80% exclusion (builder sees 20%): Does quality degrade?

Find threshold where information savings outweigh quality loss.

**For Ceiling:**
Investigate integrated builder (sees full master prompt). Compare quality vs context cost.

---

### 2.7 PA-05b at 2.0x Threshold → Consider Margins (LOW Priority)

**What's wrong:**
PA-05b threshold is EXACTLY 2.0x padding range ratio. Middle-tier measured EXACTLY 2.0x (64px/32px). This is suspiciously exact.

**Evidence:**
Adversarial review flagged: "Was 2.0x back-calculated from our showcase pages (circular reasoning) or empirically derived?"

**The fix:**
Add safety margins:
- **Floor threshold:** 1.8x (allows some headroom)
- **Target threshold:** 2.0x (current)
- **Ceiling threshold:** 2.5x+ (aspirational)

Middle at 2.0x is MARGINAL PASS, not clear pass.

**For Ceiling:**
Aim for 2.5x+ to demonstrate clear spatial variety.

---

### 2.8 Judgment Rules (Heading Spacing, Rhythm) → Convert to Binary (HIGH Priority)

**What's wrong:**
Heading spacing ratio and rhythm variation are currently JUDGMENT CALLS ("should be 1.5:1", "should vary"). Both failed.

**Evidence:**
Binary rules 7/7 compliance, judgment rules 0/3 compliance. If it matters, make it binary.

**The fix:**
Convert to binary programmatic checks:

```
HEADING SPACING RATIO (binary):
For each h3, measure:
- Computed margin-top
- Computed margin-bottom
Ratio = margin-top / margin-bottom
PASS: >= 1.5:1 for ALL h3 elements
FAIL: < 1.5:1 for ANY h3

RHYTHM VARIATION (binary):
Count unique gap sizes between sections
PASS: >= 2 distinct gap sizes
FAIL: All gaps identical
```

**For Ceiling:**
Make ALL critical constraints binary. No judgment calls.

---

## 3. INVESTIGATE (Untested Hypotheses)

### 3.1 Is Information Isolation Firewall Necessary?

**The hypothesis:**
Preventing content-selector from seeing mechanisms prevents reverse-fitting.

**Why it's untested:**
We never ran a control where content-selector DOES see mechanisms. The firewall may be solving a theoretical problem that doesn't occur in practice.

**How to test:**
- **Test D (Contaminated Content-Selector):** Run content-selector WITH mechanism catalog access
- Same source file, same extraction criteria
- Compare: Does contaminated selector extract different sections?
- If outputs are 80%+ identical, firewall is unnecessary overhead

**Expected cost:** 1 hour
**Confidence level:** MEDIUM that firewall is unnecessary (content structure constrains extraction regardless of mechanism awareness)

---

### 3.2 Does Full-Context Builder Outperform Sliced Builder?

**The hypothesis:**
Builder seeing 40% of master prompt is optimal. Seeing 100% might cause cognitive overload. Seeing 20% might cause information loss.

**Why it's untested:**
We only tested ONE slicing threshold (60% exclusion). Missing footer suggests builder needed MORE context.

**How to test:**
- **Test A (Integrated Builder):** Builder receives FULL master prompt (1,760 lines)
- Same content, same plan, different builder prompt (full context)
- Compare: Does footer ship? Does quality improve or degrade?
- If footer ships AND quality doesn't degrade, slicing is harmful

**Expected cost:** 2 hours
**Confidence level:** LOW (could go either way)

---

### 3.3 Can Content-Selector Merge with Planner?

**The hypothesis:**
Separating content selection (Phase 0) from planning (Phase 1) prevents reverse-fitting. But maybe they SHOULD be merged — planner could select content WHILE considering mechanism opportunities.

**Why it's untested:**
We assumed firewall is necessary. But if content-selector doesn't reverse-fit (see 3.1), merging might improve content-mechanism fit.

**How to test:**
- **Test E (Merged Content-Planner):** Single agent selects content + chooses mechanisms + writes plan
- Compare: Does it reverse-fit? Or does it produce BETTER content-mechanism alignment?

**Expected cost:** 1.5 hours
**Confidence level:** MEDIUM that merged is better (reduces handoff complexity, allows content selection to consider compositional opportunities)

---

### 3.4 Is Opus/Sonnet Split Model-Capability or Process-Architecture?

**The hypothesis:**
Using Opus for planner and Sonnet for builder is optimal because Opus is more creative and Sonnet is more cost-effective.

**Why it's untested:**
We don't know if the quality split (excellent plan, defective implementation) is because:
- A. Opus is better than Sonnet (model capability)
- B. Two-instance pattern loses information (process architecture)
- C. Both

**How to test:**
- **Test I (Sonnet-Sonnet):** Use Sonnet for BOTH planner and builder
- **Test J (Opus-Opus):** Use Opus for BOTH planner and builder
- Compare: Does Opus builder avoid footer bug? Does Sonnet planner produce comparable plan?

**Expected cost:** 3 hours (2 full builds)
**Confidence level:** MEDIUM that Opus builder fixes footer (more thorough), but cost may not justify benefit

---

### 3.5 What's the Actual Middle Mechanism Landing Zone?

**The hypothesis:**
Per-category minimums naturally produce 8-12 mechanisms. Middle-tier deployed 12 (upper end).

**Why it's untested:**
Sample size = 1. We don't know if 12 is typical or an outlier.

**How to test:**
Build 5 Middle-tier pages on different content types:
- Tutorial content
- Reference documentation
- Conceptual content
- Narrative content
- Mixed content

Measure mechanism count for each. Calculate median.

**Expected cost:** 10 hours (5 full builds)
**Confidence level:** HIGH that median is 10-12, but variance could be wide (8-14 range)

---

### 3.6 Is Per-Category the Driver, or Just Higher Count?

**The hypothesis:**
Per-category minimums ensure breadth. But maybe "deploy 10 mechanisms total" (without per-category requirement) would naturally cover all 5 categories anyway.

**Why it's untested:**
We didn't run a control with aggregate count only.

**How to test:**
- **Page A:** "Deploy 8-10 mechanisms total" (no per-category requirement)
- **Page B:** "Deploy 1+ per category" (natural landing zone)
- Compare: Does A show poor category coverage (e.g., S:0, H:5, C:3, D:0, N:2)?

If A naturally covers all 5 categories, raising the count is sufficient. If A clusters in 2-3 categories, per-category structure is necessary.

**Expected cost:** 2 hours (2 full builds)
**Confidence level:** MEDIUM that per-category is necessary (prevents clustering)

---

## 4. ANTI-PATTERNS (What to Explicitly Avoid)

### 4.1 Treating Marginal Passes as Clear Passes

**What happened:**
PA-05b padding range ratio = 2.0x EXACTLY. Threshold is >= 2.0x. This is MARGINAL PASS, not clear pass.

**Why it's a problem:**
Marginal passes are fragile. Rounding errors, measurement differences, or slight variations push them to FAIL. Clear passes have headroom (2.5x would be clear).

**The lesson:**
If threshold is 2.0x, aim for 2.3-2.5x. If threshold is 80%, aim for 85-90%. Margins prevent false confidence.

**For Ceiling:**
Never celebrate hitting a threshold exactly. Build margins into targets.

---

### 4.2 Single Evaluator Knowing the Hypothesis

**What happened:**
Novelty evaluator knew "Middle should be novel compared to showcases." This creates confirmation bias.

**Why it's a problem:**
Evaluator sees what it EXPECTS to see. If hypothesis is "this should be novel," evaluator looks for novelty signals and finds them (even if weak).

**The lesson:**
Use BLIND evaluation protocols. Evaluator shouldn't know what the "correct" answer is.

**For Ceiling:**
Dual evaluator protocol (one blind, one hypothesis-aware). Cross-check results.

---

### 4.3 Zero Margin on Thresholds

**What happened:**
CPL threshold is 45-80. Middle measured 82 (+2 over). This is treated as minor fail, but it's still FAIL.

**Why it's a problem:**
Zero margins mean EVERY threshold violation triggers a fail. Real-world systems need headroom for measurement variance, rounding errors, font scaling.

**The lesson:**
Thresholds should be CONSERVATIVE. If readability breaks at 85 CPL, set threshold at 80. Leave margin.

**For Ceiling:**
Add 10% safety margins to all thresholds.

---

### 4.4 Builder Without Self-Check

**What happened:**
Builder wrote file with 3 defects and declared "done" without self-verification.

**Why it's a problem:**
Shifts quality detection to audit phase (Phase 3). Audit finds issues AFTER implementation is complete. Fixing requires separate repair agent or manual editing.

**The lesson:**
Shift quality LEFT. Builder should self-check BEFORE writing file. Catching defects at build phase is 10x cheaper than catching at audit phase.

**For Ceiling:**
Mandatory builder self-check. Cannot write file until checklist passes.

---

### 4.5 Normalizing "Acceptable Compromises"

**What happened:**
Verdict classified defects as "acceptable compromises" (CPL +2, token compliance 66.5%). But perceptual audit found WOULD-NOT-SHIP issue (missing footer).

**Why it's a problem:**
"Acceptable compromise" mentality creeps. CPL +2 becomes CPL +5. Token compliance 66% becomes 50%. Missing footer becomes "intentional minimalism."

**The lesson:**
NO COMPROMISES on binary constraints. If it's non-negotiable, it's non-negotiable. If it's negotiable, document the exception criteria explicitly.

**For Ceiling:**
Zero tolerance for binary constraint violations. Judgment rules can have margins, binary rules cannot.

---

### 4.6 Conflating Speed (35 min) with Quality (B+)

**What happened:**
Middle-tier executed fast (~35 min vs 70-100 predicted). But quality was B+ (3 defects, 1 WOULD-NOT-SHIP).

**Why it's a problem:**
Fast execution doesn't mean correct execution. Flat file-bus proved SPEED is independent of QUALITY. Zero contention ≠ zero defects.

**The lesson:**
Speed and quality are independent dimensions. Optimize separately. File-bus eliminates COORDINATION overhead, not IMPLEMENTATION bugs.

**For Ceiling:**
Don't extrapolate "fast = good." Ceiling may take 90 min (faster than 150-220 predicted) but still need quality gates.

---

### 4.7 Celebrating Zero Messaging as Zero Problems

**What happened:**
Zero SendMessage calls was treated as efficiency win. But missing footer suggests builder SHOULD have messaged planner: "Footer specified but no CSS in Builder Blocks — clarify?"

**Why it's a problem:**
Zero messages = zero communication overhead. But also = zero clarification opportunities. CD-006 WITH messaging (39/40) beat Middle WITHOUT messaging (B+).

**The lesson:**
Messaging is TOOL, not OVERHEAD. Clarification messages improve quality. Status messages create overhead. Distinguish them.

**For Ceiling:**
Enable clarification messages. Discourage status messages.

---

### 4.8 Extrapolating from n=1 to Permanent Rules

**What happened:**
Middle-tier deployed 12 mechanisms → "Middle tier = 8-12 mechanisms" rule. But sample size = 1. We don't know if 12 is typical or outlier.

**Why it's a problem:**
One experiment can't establish a pattern. Confirmation bias: we see evidence that supports the tier model (Middle deployed more than Floor) and declare the model validated.

**The lesson:**
Single experiments provide SIGNALS, not RULES. Patterns require 3-5+ confirmations across different content domains, agents, timestamps.

**For Ceiling:**
Never declare a finding "confirmed" from n=1. Use language: "SIGNAL" (n=1), "PATTERN" (n=3-5), "RULE" (n=10+).

---

## 5. META-LESSONS (Broader Insights About Running Agent Experiments)

### 5.1 Binary Rules Achieve 100% Compliance, Judgment Rules ~0%

**The finding:**
7/7 binary rules passed. 0/3 judgment rules passed. Perfect separation.

**Why this is THE most important principle:**
Agent systems are LITERAL. "MUST be 960px" achieves 100% compliance. "Should be 80%" achieves 0%. There is NO middle ground.

**Implications for all future agent work:**
- If a constraint matters, make it binary
- Convert ALL critical constraints from judgment to binary
- Provide FORMULAS for verification (CPL = content-width / font-size / 0.6)
- No "prefer", "consider", "balance" language in agent prompts

**This is architectural bedrock.**

---

### 5.2 8-11x Timing Discrepancy Reveals Planning Model Error

**The finding:**
Tier model predicted 70-100 min. Actual was ~35 min (2-3x faster). Early plan estimates were 4.5-6.5 hours (8-11x slower).

**Why this matters:**
Planning models conflate SERIAL HUMAN TIME (one person doing all phases sequentially) with PARALLEL AGENT TIME (8 agents with separate context windows).

**The lesson:**
When estimating agent work:
- Don't use human time estimates
- Account for parallelization (2-3x speedup for flat file-bus)
- Single-pass execution is 3-5x faster than iterative refinement
- Wall-clock time ≠ effort time

**For Ceiling:**
Predict wall-clock (60-90 min), not effort (150-220 min).

---

### 5.3 Fresh-Eyes > Context-Loaded for Finding Defects

**The finding:**
Fresh-eyes perceptual auditor found missing footer (WOULD-NOT-SHIP). Context-loaded programmatic auditor found token compliance issues (maintainability).

**Why this matters:**
Research-loaded agents see what they KNOW. Fresh-eyes agents see what's THERE. Complete separation of findings (zero overlap).

**The lesson:**
Use BOTH audit types:
- Fresh-eyes for USER-FACING issues (flow, atmosphere, endings)
- Context-loaded for MAINTAINABILITY issues (token compliance, CPL, soul constraints)

Neither replaces the other.

**For Ceiling:**
Maintain fresh-eyes protocol. Context starvation is FEATURE, not bug.

---

### 5.4 Two-Instance Pattern Exploits Continuation Bias (Unproven)

**The claim:**
Separate planner/builder improves quality because builder has no continuation bias.

**The finding:**
Builder missed footer specified in plan. This could be:
- A. Information loss between instances (process flaw)
- B. Builder capability gap (model flaw)
- C. Prompt specification gap (instruction flaw)

**The lesson:**
Two-Instance pattern is ASSUMED beneficial but NOT PROVEN beneficial. Missing footer is evidence it can HARM quality through information loss.

**For Ceiling:**
Test single-agent control (planner-builder hybrid) before committing to two-instance.

---

### 5.5 Prophylactic Paradox: Designing for Failure Prevents Failure

**The finding:**
Extensive gate design, adversarial reviews, prompt slicing strategy. Result: zero catastrophic failures (context wall, circular dependencies, file explosions).

**Why this matters:**
We designed for failure modes that DIDN'T HAPPEN. The experiment succeeded BECAUSE we anticipated failures and prevented them.

**The lesson:**
Over-engineering IS appropriate for complex agent systems. Better to design 10 gates and use 6 than design 4 gates and hit breakage.

**For Ceiling:**
Maintain prophylactic approach. Add more gates (landmark completeness, builder self-check), not fewer.

---

### 5.6 The "Professionally Stiff" Boundary

**The finding:**
Perceptual audit: "Feels like specifications applied correctly, not composition felt through."

**What this reveals:**
There's a QUALITATIVE BOUNDARY between:
- **Designed (Middle):** Pattern-based, mechanism-deployed, spatially varied
- **Composed (Ceiling):** Metaphor-driven, conceptually coherent, "place" quality

**The lesson:**
Mechanism deployment crosses "formatted → designed" threshold. Metaphor derivation crosses "designed → composed" threshold. These are SEPARATE dimensions.

**For Ceiling:**
Test whether metaphor adds enough value to justify cost. If Middle is "good enough," metaphor may be optional for Middle-tier work.

---

### 5.7 Speed and Quality Are Independent Dimensions

**The finding:**
File-bus achieved FAST execution (35 min). But quality was B+ (3 defects, 1 WOULD-NOT-SHIP).

**Why this matters:**
Zero contention (file-bus benefit) ≠ zero defects (implementation quality). Fast doesn't mean good.

**The lesson:**
Optimize speed and quality SEPARATELY:
- Speed: flat file-bus, parallel agents, thin team-lead
- Quality: builder self-check, landmark gates, clarification messages

Don't conflate them.

**For Ceiling:**
Expect faster execution (60-90 min vs 150-220) but SAME quality gates. Speed improvements don't reduce quality needs.

---

### 5.8 Vocabulary Rigidity Outpaces Constraint Rigidity 4:1

**The finding:**
At CD stage, vocabulary-type rigidity (mechanism count, category coverage) outnumbered constraint-type rigidity (soul prohibitions) 62 to 16.

**What this means:**
Richness comes from KNOWING MANY MECHANISMS, not from having fewer constraints. Heavy constraint + high vocabulary = designed output.

**The lesson:**
Don't conflate "rigidity" with "constraint." Vocabulary rigidity (having 18 mechanisms to choose from) is ENABLING. Constraint rigidity (22 prohibitions) is IDENTITY.

**For Ceiling:**
Add mechanisms, don't remove constraints. Vocabulary expansion is the path to richness.

---

### 5.9 Compression Ratio >5:1 = Information Loss Signal

**The finding:**
Master prompt → content-selector slice: 1,760 → 200 lines (8.8:1 compression). Builder slice: 1,760 → 400 lines (4.4:1).

**Why this matters:**
Extreme compression (8.8:1) risks critical information loss. Missing footer may have occurred because builder's slice excluded footer emphasis.

**The lesson:**
Compression ratios above 5:1 deserve scrutiny. What's in the excluded 80%? Are there implicit dependencies?

**For Ceiling:**
Map prompt slicing dependencies. Document what each slice ASSUMES the agent already knows.

---

### 5.10 Real Gap Is Iterative Discovery, Not Freedom

**The finding:**
Pipeline compresses 337 research findings into "sample 2-4 mechanisms" — 50:1 information loss. Showcase pages accumulated techniques across 4-6 stages (iterative discovery).

**What this means:**
The richness gap between pipeline and showcases is NOT constraint rigidity (pipeline has 22 prohibitions, same as showcases). It's ITERATIVE REFINEMENT (showcases iterated, pipeline is single-pass).

**The lesson:**
Single-pass execution (Middle-tier: each agent runs once) is fast but limited. Multi-pass execution (showcases: 4-6 audit-revise cycles) is slow but richer.

**Trade-off:**
- Single-pass: 35 min, B+ quality
- Multi-pass: 150-220 min, A quality

**For Ceiling:**
Decide: Single-pass (fast) or multi-pass (rich)? Tier model assumes Ceiling is single-pass. If Ceiling needs multi-pass, adjust time estimates to 3-4 hours.

---

## Conclusion: The Pattern I'm Least Confident Carrying Forward

**Two-Instance Pattern (Separate Planner/Builder).**

**Why low confidence:**
- Missing footer suggests information loss between instances
- No counterfactual (would single agent do better?)
- Confounded with model choice (Opus planner, Sonnet builder)
- Theoretical benefit (continuation bias mitigation) is unproven

**What would raise confidence:**
- Test H (single-agent control): Opus planner-builder hybrid on same content
- Compare: Does single agent ship with footer? Are there OTHER quality gaps?
- If single agent quality >= two-instance quality, the two-instance pattern is unnecessary complexity

**For now:**
Carry forward two-instance pattern for Ceiling, but ADD clarification protocol (SendMessage) to mitigate information loss. And TEST single-agent control before declaring two-instance validated.

---

## The Single Most Important Meta-Lesson

**Binary rules achieve 100% agent compliance. Judgment rules achieve 0% compliance.**

This is THE architectural principle for all agent-based systems. If a constraint matters, make it binary. There is no middle ground.

Every other lesson flows from this: gates are binary, checklists are binary, thresholds need formulas (which makes them binary). Agent systems are LITERAL. Work with that property, not against it.
