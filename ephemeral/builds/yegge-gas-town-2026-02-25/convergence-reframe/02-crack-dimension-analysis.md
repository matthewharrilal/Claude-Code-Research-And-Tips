# Crack Dimension Analysis of 28 Convergence Autopsy Fixes

**Author:** Opus crack-lens-analyst agent
**Date:** 2026-02-25
**Scope:** Each of the 28 convergence autopsy fixes (from 08-MASTER-FIX-CHECKLIST.md) analyzed through the 14 crack dimensions lens (from crack-dimensions.md and 01-crack-taxonomy.md)
**Governing principles:** 8 research context findings from MASTER-CHECKLIST-v2.md

---

## Methodology

For each fix:
- **Cracks ADDRESSED:** Which of the 14 dimensions does this fix help close?
- **Cracks RISKED:** Which dimensions might this fix trigger or worsen?
- **Enforcement type:** INSTRUCTIONAL (prose/spec text) or STRUCTURAL (code/gate/template/auto-fill)
- **Convertible to structural?** Can an instructional fix be made structural?
- **Net spec impact:** Lines added/removed, partitioned by audience (builder-facing / orchestrator-facing / code)
- **Crack dimension score:** +X addressed, -Y risked, net

### Governing Constraints (from v2 Research Context)

Every analysis below is constrained by these 8 findings:

1. **Compliance degrades with spec volume** (~95% at <500 lines, ~72% at ~4,650 lines)
2. **94% of specs have no enforcement** (62 enforced out of 885)
3. **Gate count up 35%, coverage DOWN 3%** (31->42 gates, 74%->71%)
4. **Middle-tier paradox** (100-line recipe -> PA-05 4/4; 10,061-line pipeline -> 2.0/4)
5. **REFINE is the only consistently positive quality intervention** (+1.0 to +1.5 PA-05)
6. **Fixes stick when structural, fail when instructional** (container width 100% durable; hover behavior 0%)
7. **Tracker at 375 items achieves 67% fill** (more items = more gaps)
8. **The spec is eating itself** (every line added reduces compliance with other lines)

---

## FILE 1: MANIFEST.md

### FIX-01: Replace "pipeline terminates" with iteration-aware language

- **Cracks ADDRESSED:**
  - **D3 (Voluntary Non-Execution):** Removing the word "terminates" removes the primary semantic permission slip for stopping after REFINE verdict. The current language directly enables non-execution of the REFINE loop.
  - **D8 (Spec Ambiguity / Soft Language):** "Pipeline terminates" is unambiguous -- but it's unambiguously WRONG. Replacing it with "pipeline is NOT complete until verdict is SHIP" converts the REFINE loop from opt-in to opt-out.
  - **D13 (Feedback Loop Absence):** By explicitly naming the REFINE protocol and directing the orchestrator back to Phase 3, this creates the textual foundation for the feedback loop.

- **Cracks RISKED:**
  - **D5 (Position Effect / Attention Decay):** Adding ~3 lines to an already-long document -- minimal risk at this scale, and the replacement is at a high-salience position (Step 11, which the orchestrator reads during execution).
  - **D14 (Complexity-Induced Invisibility):** Negligible -- this is a replacement, not an addition.

- **Enforcement type:** INSTRUCTIONAL (prose change)
- **Could be converted to structural?** PARTIALLY. FIX-19 (post-REFINE completion gate in tracker) is the structural companion. FIX-01 alone is prose; paired with FIX-19, the skip becomes detectable. But the language change itself cannot be made structural -- it changes the orchestrator's mental model.
- **Net spec impact:** +0 lines net (replacement, ~3 lines changed) on orchestrator-facing spec
- **Crack dimension score:** +3 addressed (D3, D8, D13), -0.5 risked (D5 trivial), **net +2.5**

---

### FIX-02: Replace hard iteration cap with convergence-based budget

- **Cracks ADDRESSED:**
  - **D3 (Voluntary Non-Execution):** The "Maximum iterations: 1 REBUILD + 1 REFINE" cap functions as a permission floor that's also a ceiling. Replacing with convergence criteria (delta >= 0.3) makes stopping a MEASURED decision rather than a default.
  - **D8 (Spec Ambiguity / Soft Language):** "Maximum iterations" is a hard constraint that inadvertently suppresses iteration. The new "up to 1 REBUILD + 2 REFINE passes" with explicit stopping criteria converts ambiguity to binary decision points.
  - **D13 (Feedback Loop Absence):** The convergence criterion (PA-05 delta >= 0.3) is itself a feedback mechanism -- it uses downstream quality measurement to control upstream iteration.

- **Cracks RISKED:**
  - **D5 (Position Effect):** Minimal -- replacement at same position.
  - **D7 (Defense Paradox):** The convergence criterion adds a decision point the orchestrator must evaluate. If the orchestrator is already overloaded, this is one more judgment call. Mitigated by FIX-13 which provides the explicit decision function.

- **Enforcement type:** INSTRUCTIONAL (prose change)
- **Could be converted to structural?** YES -- FIX-25 (GR-75 Iteration Counter gate) is exactly this. FIX-02 changes the prose; FIX-25 enforces it in code. Without FIX-25, this is a judgment rule (~0-65% compliance per research context #1).
- **Net spec impact:** +0 lines net (replacement, ~3 lines changed) on orchestrator-facing spec
- **Crack dimension score:** +3 addressed (D3, D8, D13), -0.5 risked (D7 mild), **net +2.5**

---

### FIX-03: Remove "SINGLE-PASS" as default architecture label

- **Cracks ADDRESSED:**
  - **D3 (Voluntary Non-Execution):** "SINGLE-PASS" is the most compressed permission to not iterate. Removing it removes a 2-word stop signal that overrides any amount of iteration instruction elsewhere.
  - **D8 (Spec Ambiguity / Soft Language):** "Single-pass" is unambiguous -- one pass. Replacing with "ITERATIVE-TO-CONVERGENCE" is equally unambiguous but points in the opposite direction.

- **Cracks RISKED:**
  - **D11 (Mode / Context Sensitivity):** The distinction between standard REFINE and experimental 3-pass architecture must remain clear. The new text handles this ("standard REFINE iteration is NOT the same as the 3-pass architecture") but any future reader might conflate them.

- **Enforcement type:** INSTRUCTIONAL (prose change)
- **Could be converted to structural?** NO -- this is a label/framing change. The structural enforcement comes from FIX-13 (decision function) and FIX-19 (completion gate).
- **Net spec impact:** +0 lines net (replacement, ~2 lines changed) on orchestrator-facing spec
- **Crack dimension score:** +2 addressed (D3, D8), -0.5 risked (D11 mild), **net +1.5**

---

### FIX-04: Rewrite dependency graph to include feedback loop

- **Cracks ADDRESSED:**
  - **D13 (Feedback Loop Absence):** The ASCII dependency graph is a DAG with no cycles. Adding the VERDICT -> Phase 3A arrow is the most literal possible representation of the feedback loop. Agents who scan the graph get visual confirmation that iteration exists.
  - **D3 (Voluntary Non-Execution):** "There are NO feedback loops" is an explicit instruction to not loop. Removing this statement and adding the loop arrow removes a direct enabler of non-execution.
  - **D8 (Spec Ambiguity):** "NO feedback loops" is the clearest stop signal in the entire spec. Replacing with an explicit loop description eliminates this.

- **Cracks RISKED:**
  - **D6 (Cross-File Reference Rot):** The dependency graph is a reference that other sections may describe. Changing it without updating all references creates stale descriptions elsewhere. Minimal risk if FIX-01, FIX-05, FIX-09 are applied in the same wave.

- **Enforcement type:** INSTRUCTIONAL (diagram + prose change)
- **Could be converted to structural?** NO -- dependency graphs are documentation, not enforcement. The structural companions are FIX-13 and FIX-19.
- **Net spec impact:** +0 lines net (replacement, ~3 lines + graph arrow) on orchestrator-facing spec
- **Crack dimension score:** +3 addressed (D3, D8, D13), -0.5 risked (D6 if applied in isolation), **net +2.5**

---

### FIX-05: Rewrite "OUTPUT LABELS" to "ACTION TRIGGERS"

- **Cracks ADDRESSED:**
  - **D3 (Voluntary Non-Execution):** "REFINE and REBUILD are OUTPUT LABELS" is identified as the single most destructive framing. It converts verbs to nouns, actions to classifications. Reversing this is the highest-value single word change.
  - **D8 (Spec Ambiguity):** "Output labels" is precise language that precisely enables non-iteration. "Action triggers" is equally precise but triggers execution.
  - **D13 (Feedback Loop Absence):** By declaring that REFINE triggers REFINE protocol execution and RETURN to Phase 3, this explicitly creates the loop description.

- **Cracks RISKED:**
  - None significant. This is a replacement of 4 lines with 4 lines at the same position.

- **Enforcement type:** INSTRUCTIONAL (prose change)
- **Could be converted to structural?** PARTIALLY -- FIX-13 (decision function) operationalizes the "action trigger" concept. But the framing change itself is inherently instructional.
- **Net spec impact:** +0 lines net (replacement, ~4 lines changed) on orchestrator-facing spec
- **Crack dimension score:** +3 addressed (D3, D8, D13), -0 risked, **net +3.0**

---

### FIX-06: Add REFINE builder prompt template to Appendix E

- **Cracks ADDRESSED:**
  - **D1 (Template Slot Absence):** This IS a template slot fix. The REFINE builder has no template in Appendix E -- the orchestrator must improvise. Adding the template closes the template-slot crack for REFINE execution.
  - **D3 (Voluntary Non-Execution):** The absence of a REFINE template is an implicit signal that REFINE doesn't happen. Having a concrete template makes REFINE execution as mechanically straightforward as initial builder spawn.
  - **D2 (Compression Loss at Junctions):** The template specifies exactly what the REFINE builder receives and does NOT receive, preventing ad-hoc compression at the orchestrator-to-REFINE-builder junction.
  - **D10 (Orchestrator Opacity):** With a template, the orchestrator's REFINE builder inputs become auditable -- did the orchestrator follow the template?

- **Cracks RISKED:**
  - **D5 (Position Effect / Attention Decay):** +25 lines added to Appendix E (end of MANIFEST). Items in appendices have inherently low salience. Mitigated by the fact that Appendix E is WHERE the orchestrator goes to get prompt templates.
  - **D14 (Complexity-Induced Invisibility):** One more template in a document with multiple templates. Marginal risk.
  - **D7 (Defense Paradox):** +25 lines to a long spec. Per research context #8, every line reduces compliance with other lines. But this is MANIFEST Appendix E (used at spawn time, not throughout), so attention competition is lower.

- **Enforcement type:** STRUCTURAL (template -- the orchestrator copy-pastes it)
- **Could be converted to structural?** Already structural. Templates are one of the strongest enforcement patterns because agents use them as starting points rather than reading instructions.
- **Net spec impact:** +25 lines on orchestrator-facing spec (MANIFEST Appendix E)
- **Crack dimension score:** +4 addressed (D1, D2, D3, D10), -1.5 risked (D5, D7, D14), **net +2.5**

---

### FIX-07: Add iteration-aware file naming convention

- **Cracks ADDRESSED:**
  - **D3 (Voluntary Non-Execution):** Single-indexed file naming (`p3b-pa-auditor-A.md`) is an implicit stop signal -- there's no `-refine` suffix, so there's no expected iteration output. Adding `-refine` suffixes makes iteration artifacts structurally expected.
  - **D4 (Execution-Recording Divergence):** With a naming convention, the existence of `-refine.md` files is proof that iteration happened. Their absence is proof it didn't. No manual recording needed.
  - **D14 (Complexity-Induced Invisibility):** Paradoxically helps -- iteration artifacts become VISIBLE in directory listings. Without naming convention, iteration output either overwrites originals (losing comparison baseline) or gets named ad-hoc (invisible to automated checks).

- **Cracks RISKED:**
  - **D6 (Cross-File Reference Rot):** Any spec that references `p3b-pa-auditor-A.md` must now account for `-refine` variants. Moderate risk -- but the naming convention prevents worse rot (ad-hoc naming).
  - **D5 (Position Effect):** +12 lines. Moderate for a MANIFEST addition.

- **Enforcement type:** INSTRUCTIONAL (naming convention described in prose)
- **Could be converted to structural?** YES -- a shell script or gate that checks for `-refine` suffix files could enforce this. FIX-19's completion gate partially does this (checks for `*-refine.md` existence).
- **Net spec impact:** +12 lines on orchestrator-facing spec (MANIFEST)
- **Crack dimension score:** +3 addressed (D3, D4, D14), -1.0 risked (D5, D6), **net +2.0**

---

## FILE 2: artifact-orchestrator.md

### FIX-08: Restructure REFINE protocol from list to BEFORE/DURING/AFTER

- **Cracks ADDRESSED:**
  - **D3 (Voluntary Non-Execution):** The current 5-step list buries "return to Phase 3" at position 5 of 5, preceded by 11 stop signals. The BEFORE/DURING/AFTER structure with ">>> YOU MUST RETURN TO PHASE 3 FOR FULL RE-AUDIT. <<<" in a NON-NEGOTIABLE block makes the loop impossible to miss.
  - **D5 (Position Effect / Attention Decay):** The AFTER section gets its own heading with shouting-case emphasis. This is a deliberate anti-position-effect design -- the most important instruction (re-audit) gets the most salient presentation.
  - **D4 (Execution-Recording Divergence):** "Record pre-REFINE PA-05 score in the Iteration Log" in BEFORE creates a recording obligation at the point of execution, not after-the-fact.
  - **D13 (Feedback Loop Absence):** The AFTER section IS the feedback loop specification -- it explicitly says to return to Phase 3.

- **Cracks RISKED:**
  - **D5 (Position Effect -- different vector):** +24 net lines to orchestrator spec. Per research context #1, the orchestrator at ~4,650 lines has ~72% compliance. 24 more lines marginally worsen this.
  - **D7 (Defense Paradox):** The "Re-read this section now. Do not execute from memory." instruction is itself subject to non-execution. Meta-instruction compliance is lower than base-instruction compliance.
  - **D14 (Complexity-Induced Invisibility):** A longer orchestrator spec means any individual section is less likely to be found and read.

- **Enforcement type:** INSTRUCTIONAL (restructured prose, but with strong salience features: shouting case, triple brackets, "NON-NEGOTIABLE" label)
- **Could be converted to structural?** PARTIALLY -- FIX-19 (completion gate) structurally enforces the AFTER. FIX-24 (GR-70 non-regression gate) structurally enforces measurement. The BEFORE/DURING are inherently instructional.
- **Net spec impact:** +24 lines on orchestrator-facing spec (~30 lines replacing ~6)
- **Crack dimension score:** +4 addressed (D3, D4, D5 mitigation, D13), -1.5 risked (D5 volume, D7, D14), **net +2.5**

---

### FIX-09: Remove "Single-pass = DEFAULT" from Council Mandates (3 locations)

- **Cracks ADDRESSED:**
  - **D3 (Voluntary Non-Execution):** "Single-pass = DEFAULT" appears 3 times in the first 65 lines. These are in the HIGHEST-SALIENCE positions -- Council Mandates are the first thing the orchestrator reads. Removing all 3 eliminates the most damaging stop signals.
  - **D8 (Spec Ambiguity):** Replaces unambiguous stop language with unambiguous iteration language at 3 high-traffic locations.
  - **D5 (Position Effect -- positive):** By placing "ITERATIVE-TO-CONVERGENCE = DEFAULT" in the first 65 lines, iteration gets the position advantage that stopping currently has.

- **Cracks RISKED:**
  - **D11 (Mode / Context Sensitivity):** Must carefully distinguish standard REFINE from experimental 3-pass. The new text does this but the distinction is subtle and could be lost in future edits.

- **Enforcement type:** INSTRUCTIONAL (prose changes at 3 locations)
- **Could be converted to structural?** NO -- this is a framing change. Structural enforcement comes from FIX-13/19/24/25.
- **Net spec impact:** +0 lines net (replacement, ~6 lines changed across 3 locations) on orchestrator-facing spec
- **Crack dimension score:** +3 addressed (D3, D5 positive, D8), -0.5 risked (D11), **net +2.5**

---

### FIX-10: Reframe cost estimates from overhead to investment

- **Cracks ADDRESSED:**
  - **D3 (Voluntary Non-Execution):** "Adds ~60-75 min" frames REFINE as cost. "Historically improves PA-05 by +0.5 to +1.5 points -- the highest-ROI activity" frames it as investment. The ROI framing makes non-execution seem wasteful rather than efficient.
  - **D8 (Spec Ambiguity):** The word "adds" is soft language that permits the interpretation "optional cost." The reframe makes the value proposition explicit.

- **Cracks RISKED:**
  - **D4 (Execution-Recording Divergence):** The "+0.5 to +1.5 points" claim is based on N=1 evidence (Yegge). If future runs don't match, this framing becomes misleading. FIX-12 (evidence table) mitigates by providing updatable data.

- **Enforcement type:** INSTRUCTIONAL (prose change)
- **Could be converted to structural?** NO -- this is a motivational framing change. Not enforceable.
- **Net spec impact:** +0 lines net (replacement, ~3 lines) on orchestrator-facing spec
- **Crack dimension score:** +2 addressed (D3, D8), -0.5 risked (D4 if evidence becomes stale), **net +1.5**

---

### FIX-11: Add post-REFINE "verification theater" warning

- **Cracks ADDRESSED:**
  - **D3 (Voluntary Non-Execution):** The warning explicitly says "ALL-PASS gates after REFINE do NOT mean the page is ready to ship." This blocks the verified shortcut path where the orchestrator substitutes gate signals for perceptual re-audit.
  - **D4 (Execution-Recording Divergence):** By distinguishing what gates verify (identity, perception physics) from what they don't (PA-05, emotional arc, compositional quality), the warning prevents false recording of "verification complete."
  - **D10 (Orchestrator Opacity):** The "display this message to yourself" instruction creates a self-check moment. The orchestrator must explicitly acknowledge what gates don't cover.

- **Cracks RISKED:**
  - **D5 (Position Effect):** +8 lines added. Moderate for orchestrator spec.
  - **D7 (Defense Paradox):** A warning about verification theater is itself subject to being ignored. Warnings have diminishing returns when the orchestrator is under time pressure.
  - **D14 (Complexity-Induced Invisibility):** One more warning section in a spec full of warnings.

- **Enforcement type:** INSTRUCTIONAL (warning message)
- **Could be converted to structural?** YES -- the gate runner could output this message automatically after any post-REFINE gate run. Moving it from spec prose to code output (printed to console after gates) would make it unavoidable. ~5 lines of code.
- **Net spec impact:** +8 lines on orchestrator-facing spec
- **Crack dimension score:** +3 addressed (D3, D4, D10), -1.5 risked (D5, D7, D14), **net +1.5**

---

### FIX-12: Add "Known REFINE Outcomes" evidence section

- **Cracks ADDRESSED:**
  - **D13 (Feedback Loop Absence):** This is a cross-run learning mechanism. The evidence table persists across builds, creating the pipeline's first concrete feedback from run N to run N+1.
  - **D3 (Voluntary Non-Execution):** Empirical evidence of REFINE success (+1.5 PA-05) makes non-execution seem irrational. "The evidence says REFINE works, and you're choosing not to do it" is a powerful framing.

- **Cracks RISKED:**
  - **D4 (Execution-Recording Divergence):** The table requires manual updating ("UPDATE THIS TABLE after each run"). Per research context #7 (67% fill rate), this table has a ~33% chance of becoming stale after any given run.
  - **D5 (Position Effect):** +12 lines added to orchestrator spec. Moderate.
  - **D7 (Defense Paradox):** A manually-maintained evidence table is itself a tracking burden.

- **Enforcement type:** INSTRUCTIONAL (manually-maintained table)
- **Could be converted to structural?** YES -- D-10 (run-summary.json) already captures PA-05 data. An auto-generated "historical outcomes" section in run-summary.json would make this entirely code-driven. The orchestrator reads the JSON at pipeline start instead of maintaining a markdown table.
- **Net spec impact:** +12 lines on orchestrator-facing spec
- **Crack dimension score:** +2 addressed (D3, D13), -1.5 risked (D4, D5, D7), **net +0.5**

---

### FIX-13: Add iteration decision function after verdict

- **Cracks ADDRESSED:**
  - **D3 (Voluntary Non-Execution):** The decision function makes the iteration decision EXPLICIT and UNAVOIDABLE. Instead of hoping the orchestrator remembers to iterate, the function says "execute this function. Do NOT skip." Every path through the function either proceeds to REFINE/REBUILD or produces an explicit HALT with justification.
  - **D8 (Spec Ambiguity):** Every branch in the decision function has binary criteria (PA-05 delta >= 0.3? iteration budget exhausted?). Zero judgment language.
  - **D10 (Orchestrator Opacity):** The decision function's output (SHIP / REFINE / HALT) is auditable. Post-hoc, anyone can check whether the orchestrator followed the function.
  - **D13 (Feedback Loop Absence):** The function IS the feedback loop control mechanism -- it uses PA-05 measurements to drive iteration decisions.

- **Cracks RISKED:**
  - **D3 (recursive risk):** "Do NOT skip this function" is itself an instruction that can be skipped. The instruction-to-not-skip-instructions paradox.
  - **D5 (Position Effect):** +18 lines in the orchestrator spec. Significant.
  - **D7 (Defense Paradox):** The decision function adds cognitive load. The orchestrator must evaluate 4 conditions and 3 sub-conditions.
  - **D14 (Complexity-Induced Invisibility):** Another section in an already-long spec.

- **Enforcement type:** INSTRUCTIONAL (decision tree in prose)
- **Could be converted to structural?** YES -- a code function in the gate runner that takes (verdict, cycle_number, pa05_current, pa05_previous) and outputs (PROCEED_REFINE | PROCEED_REBUILD | HALT | COMPLETE) would be fully structural. ~15 lines of code. FIX-24 (GR-70) and FIX-25 (GR-75) partially implement this.
- **Net spec impact:** +18 lines on orchestrator-facing spec
- **Crack dimension score:** +4 addressed (D3, D8, D10, D13), -2.0 risked (D3 recursive, D5, D7, D14), **net +2.0**

---

### FIX-14: Define REFINE EXIT ARTIFACT (Builder Residual)

- **Cracks ADDRESSED:**
  - **D2 (Compression Loss at Junctions):** The residual artifact captures builder knowledge that would otherwise be lost at the builder-termination junction. This is a NEW anti-loss mechanism specifically for the iteration boundary.
  - **D1 (Template Slot Absence):** The residual comment template (`<!-- RESIDUAL: ... -->`) creates a template slot IN the HTML output for iteration intelligence.
  - **D13 (Feedback Loop Absence):** The residual is routed to subsequent REFINE builders, creating a builder-to-builder feedback channel that doesn't exist today.
  - **D12 (Downstream Propagation Failure):** The residual ensures that builder knowledge propagates across iteration boundaries instead of dying with the agent.

- **Cracks RISKED:**
  - **D3 (Voluntary Non-Execution):** "Builder MUST include a RESIDUAL comment" -- the builder might not. Mitigated by FIX-26 (GR-78 gate that checks for the comment).
  - **D5 (Position Effect):** +14 lines added to orchestrator spec.
  - **D7 (Defense Paradox):** One more thing the builder must do. One more thing to track.

- **Enforcement type:** STRUCTURAL (template comment in HTML + gate verification via FIX-26)
- **Could be converted to structural?** Already mostly structural -- the HTML comment is a structural artifact, and GR-78 provides gate enforcement. The only instructional part is telling the builder to write it, which the REFINE builder prompt template (FIX-06) handles.
- **Net spec impact:** +14 lines on orchestrator-facing spec
- **Crack dimension score:** +4 addressed (D1, D2, D12, D13), -1.5 risked (D3, D5, D7), **net +2.5**

---

### FIX-15: Move REFINE protocol from Section 7 (Verdict) to execution sections

- **Cracks ADDRESSED:**
  - **D5 (Position Effect / Attention Decay):** This is the most direct position-effect fix. The REFINE protocol currently lives in Section 7 (classification). Moving it to Section 6.5 (execution) means the orchestrator encounters it during execution flow, not after.
  - **D3 (Voluntary Non-Execution):** The orchestrator executing Sections 2-6 reaches Section 6, gets the verdict, and considers execution complete. Placing REFINE protocol at 6.5 means the orchestrator hits it BEFORE declaring done.

- **Cracks RISKED:**
  - **D6 (Cross-File Reference Rot):** Moving content from Section 7 to Section 6.5 means any reference to "Section 7 REFINE protocol" is now stale. Must update ALL cross-references.
  - **D14 (Complexity-Induced Invisibility):** If done as a cross-reference header (~5 lines) rather than full content move (~50 lines), the actual protocol is still in Section 7 and the reference could be missed. If done as full move, it adds to Section 6's length.

- **Enforcement type:** INSTRUCTIONAL (document restructuring)
- **Could be converted to structural?** NO -- document organization is inherently instructional. But the position change is itself a form of structural attention management.
- **Net spec impact:** +5 lines (cross-reference) or +0 lines (content move) on orchestrator-facing spec
- **Crack dimension score:** +2 addressed (D3, D5), -1.0 risked (D6, D14), **net +1.0**

---

### FIX-16: Reframe "cannot fix your way to Flagship"

- **Cracks ADDRESSED:**
  - **D3 (Voluntary Non-Execution):** The original phrase correctly distinguishes fixing from composing but is incorrectly generalized to suppress all iteration. The reframe preserves the distinction while explicitly endorsing compositional REFINE passes.
  - **D8 (Spec Ambiguity):** "You cannot fix your way to Flagship" is ambiguous -- does "fix" include REFINE? The reframe clarifies: "you can COMPOSE your way through successive REFINE passes."

- **Cracks RISKED:**
  - **D11 (Mode / Context Sensitivity):** The FIX-vs-COMPOSE distinction is subtle. Future orchestrators may conflate mechanical fixes with compositional REFINE. The longer explanation helps but nuance degrades under attention pressure.

- **Enforcement type:** INSTRUCTIONAL (prose change)
- **Could be converted to structural?** NO -- this is a philosophical framing change. The structural enforcement of the distinction is FIX-06 (REFINE builder prompt template specifies COMPOSITIONAL mode, not corrective).
- **Net spec impact:** +0 lines net (replacement, ~2 lines changed) on orchestrator-facing spec
- **Crack dimension score:** +2 addressed (D3, D8), -0.5 risked (D11), **net +1.5**

---

## FILE 3: EXECUTION-TRACKER-TEMPLATE.md

### FIX-17: Add Iteration Log section to tracker

- **Cracks ADDRESSED:**
  - **D4 (Execution-Recording Divergence):** The tracker currently has NO place to record iteration data. Any iteration that occurs is unrecordable in the existing structure. The Iteration Log creates a recording surface for PA-05 trajectory, Tier 5, gate pass rates, and verdicts across cycles.
  - **D13 (Feedback Loop Absence):** The Iteration Log IS the feedback mechanism's data store. Without it, iteration decisions have no data.
  - **D3 (Voluntary Non-Execution):** The existence of an Iteration Log section structurally expects iteration. A blank single-slot tracker says "one pass." A multi-row table says "multiple passes."
  - **D14 (Complexity-Induced Invisibility):** Paradoxically helps -- iteration data becomes VISIBLE in the tracker rather than being scattered across ad-hoc notes.

- **Cracks RISKED:**
  - **D7 (Defense Paradox):** +18 lines to a tracker that already achieves 67% fill. Per research context #7, adding items increases gaps. CRITICAL RISK -- unless paired with D-01 (tracker reduction to 50 fields), this worsens the defense paradox.
  - **D5 (Position Effect):** If placed at the end of the tracker, the Iteration Log has the worst position. Should be placed early or made salient.

- **Enforcement type:** STRUCTURAL (template with fill-in fields)
- **Could be converted to structural?** PARTIALLY already structural (template). Could be MORE structural if PA-05 scores auto-populate from gate results JSON (per B-01). The "Orchestrator Observations" free-text section is inherently manual.
- **Net spec impact:** +18 lines on tracker template. **MUST be paired with D-01 (-250 lines) to avoid net increase.**
- **Crack dimension score:** +4 addressed (D3, D4, D13, D14 paradoxical), -1.5 risked (D5, D7), **net +2.5** (only if paired with D-01; without D-01, net drops to +1.0 due to D7)

---

### FIX-18: Update Circuit Breaker field to support multiple iterations

- **Cracks ADDRESSED:**
  - **D4 (Execution-Recording Divergence):** The current Circuit Breaker enum has no "REFINE-2" state. If a second REFINE occurs, it's unrecordable. Adding the full state space (REFINE-1, REFINE-2, REBUILD-1, BUDGET EXHAUSTED) makes every possible state recordable.
  - **D8 (Spec Ambiguity):** The existing enum implicitly caps at 1 REFINE by offering no higher states.

- **Cracks RISKED:**
  - None significant. This is a 1-line replacement.

- **Enforcement type:** STRUCTURAL (enum definition in template)
- **Could be converted to structural?** Already structural -- it's an enum.
- **Net spec impact:** +0 lines net (1-line replacement) on tracker template
- **Crack dimension score:** +2 addressed (D4, D8), -0 risked, **net +2.0**

---

### FIX-19: Add post-REFINE completion gate to Post-Run Verification

- **Cracks ADDRESSED:**
  - **D3 (Voluntary Non-Execution):** This is THE structural enforcement that makes REFINE non-execution DETECTABLE. "If Weaver verdict was REFINE: do post-REFINE PA reports exist? NO: PIPELINE IS NOT COMPLETE." This is a binary check with a binary outcome.
  - **D4 (Execution-Recording Divergence):** The check derives completeness from FILE EXISTENCE, not from manual recording. Files either exist or they don't. This is 100% reliable.
  - **D10 (Orchestrator Opacity):** The completion gate is in the Post-Run Verification section -- the one section designed to be checked by external reviewers. The orchestrator cannot hide REFINE non-execution.

- **Cracks RISKED:**
  - **D3 (recursive):** The Post-Run Verification section is itself subject to non-execution. If the orchestrator skips verification entirely, this gate is never checked. But the section is designed to be the LAST thing before sign-off.
  - **D7 (Defense Paradox):** +8 lines to verification section.

- **Enforcement type:** STRUCTURAL (binary check based on file existence)
- **Could be converted to structural?** Already the most structural possible for a tracker-based check. Could be made MORE structural by running it as a code check in D-04 (preflight script adapted for post-run).
- **Net spec impact:** +8 lines on tracker template
- **Crack dimension score:** +3 addressed (D3, D4, D10), -1.0 risked (D3 recursive, D7), **net +2.0**

---

## FILE 4: pa-weaver.md

### FIX-20: Add "Revision Enhancement Opportunities" section

- **Cracks ADDRESSED:**
  - **D3 (Voluntary Non-Execution):** The current 5:0 ratio of degradation warnings to enhancement opportunities creates a self-fulfilling prophecy. Adding 4 enhancement opportunities gives the Weaver (and through it, the orchestrator) reasons TO iterate rather than reasons NOT to.
  - **D13 (Feedback Loop Absence):** "Feedback incorporation," "Compositional discovery," and "Error-as-signal" are explicit descriptions of feedback mechanisms that the Weaver should endorse.

- **Cracks RISKED:**
  - **D5 (Position Effect):** +15 lines added to pa-weaver.md. Moderate.
  - **D7 (Defense Paradox):** 15 more lines for the Weaver to process. But the Weaver is one of the pipeline's least-overloaded agents (single-purpose, receives focused inputs).
  - **D11 (Mode / Context Sensitivity):** The distinction between "fix cycle" (degrades) and "compositional REFINE" (enhances) is context-dependent. In practice, REFINE builders may do both. The clean distinction may not hold.

- **Enforcement type:** INSTRUCTIONAL (weaver guidance)
- **Could be converted to structural?** NO -- this is about the Weaver's assessment framing. Cannot be gated.
- **Net spec impact:** +15 lines on weaver-facing spec
- **Crack dimension score:** +2 addressed (D3, D13), -1.5 risked (D5, D7, D11), **net +0.5**

---

### FIX-21: Remove or qualify Weaver predictions

- **Cracks ADDRESSED:**
  - **D3 (Voluntary Non-Execution):** The Weaver's prediction ("would likely elevate to PA-05 3.5/4") gave the orchestrator a number to trust instead of a measurement to take. Banning predictions forces the orchestrator to MEASURE post-REFINE quality.
  - **D4 (Execution-Recording Divergence):** Predictions substitute claimed state for real state. Without predictions, the only way to know post-REFINE PA-05 is to run the PA.
  - **D10 (Orchestrator Opacity):** By removing the prediction, the orchestrator loses an excuse for skipping re-audit. The decision to skip becomes more obviously the orchestrator's, not the Weaver's.

- **Cracks RISKED:**
  - **D2 (Compression Loss):** The Weaver's prediction, while dangerous as an excuse, also contained useful information (expected improvement trajectory). Banning it entirely loses signal. The constraint ("ASSESSMENT of current page, not PREDICTION of next page") is the correct balance.
  - **D8 (Spec Ambiguity):** "MUST NOT predict" is clear, but what counts as a prediction? "Three fixes would help" is description. "Three fixes would raise PA-05 to 3.5" is prediction. The boundary is a judgment call.

- **Enforcement type:** INSTRUCTIONAL (constraint on Weaver output)
- **Could be converted to structural?** PARTIALLY -- a post-processing check on the Weaver's output could scan for numeric PA-05 predictions. But distinguishing "current PA-05 is 2.0" (assessment) from "would be 3.5" (prediction) requires natural language understanding beyond regex.
- **Net spec impact:** +10 lines on weaver-facing spec
- **Crack dimension score:** +3 addressed (D3, D4, D10), -1.0 risked (D2, D8), **net +2.0**

---

### FIX-22: Add Finding Status Map to Weaver output protocol

- **Cracks ADDRESSED:**
  - **D13 (Feedback Loop Absence):** The Finding Status Map is a cross-cycle feedback mechanism. Previous findings get tracked through lifecycle states (NEW / FIXED / IMPROVED / UNCHANGED / REGRESSED). This is the pipeline's first structured feedback channel.
  - **D2 (Compression Loss at Junctions):** Without the map, the Pass 2 Weaver must re-derive all finding context from scratch. The map carries finding provenance across the iteration boundary.
  - **D12 (Downstream Propagation Failure):** The map explicitly tracks whether fixes propagated to actual improvements. "Expected: FIXED. Actual: UNCHANGED." is a propagation failure detector.

- **Cracks RISKED:**
  - **D7 (Defense Paradox):** +12 lines to the Weaver spec. The Weaver must now produce an additional output artifact. More to write, more to fail.
  - **D3 (Voluntary Non-Execution):** The Weaver must actually produce the Finding Status Map. If the Weaver skips it, no cross-cycle tracking exists.
  - **D10 (Orchestrator Opacity):** The map is routed to the orchestrator. If the orchestrator ignores it, the feedback loop is broken.
  - **D14 (Complexity-Induced Invisibility):** Another artifact in the pipeline's already-complex artifact landscape.

- **Enforcement type:** STRUCTURAL (defined output format with mandatory fields)
- **Could be converted to structural?** PARTIALLY -- a gate could check for Finding Status Map existence in cycle >= 2 Weaver output. But the MAP CONTENT is inherently a Weaver judgment (was the finding actually fixed?).
- **Net spec impact:** +12 lines on weaver-facing spec
- **Crack dimension score:** +3 addressed (D2, D12, D13), -2.0 risked (D3, D7, D10, D14), **net +1.0**

---

## FILE 5: SKILL.md

### FIX-23: Add iteration awareness to SKILL.md entry point

- **Cracks ADDRESSED:**
  - **D3 (Voluntary Non-Execution):** SKILL.md is the orchestrator's FIRST document -- the mission brief. It currently has "zero mention of iteration." Adding iteration awareness here means the orchestrator's very first instruction includes convergence as a core behavior.
  - **D5 (Position Effect -- positive):** Placing iteration language in the FIRST document the orchestrator reads gives it maximum attention. This is the opposite of the current problem where iteration is buried in Section 7 of the second document.

- **Cracks RISKED:**
  - **D6 (Cross-File Reference Rot):** References "artifact-orchestrator.md Section 6.5" which only exists after FIX-15 is applied. Creates a cross-file dependency.
  - **D7 (Defense Paradox):** +8 lines. But SKILL.md is very short (~50 lines), so 8 lines is significant relative size.

- **Enforcement type:** INSTRUCTIONAL (prose addition to SKILL.md)
- **Could be converted to structural?** NO -- SKILL.md is inherently a prose entry point. But its position (first document) gives it structural-like salience.
- **Net spec impact:** +8 lines on orchestrator-facing spec (SKILL.md)
- **Crack dimension score:** +2 addressed (D3, D5 positive), -1.0 risked (D6, D7), **net +1.0**

---

## FILE 6: Gate Runner System

### FIX-24: Add GR-70 (PA-05 Non-Regression Gate)

- **Cracks ADDRESSED:**
  - **D4 (Execution-Recording Divergence):** GR-70 compares actual PA-05 scores from the Iteration Log. If the orchestrator hand-constructed a score, the gate catches it (the measured score differs from the claimed improvement).
  - **D12 (Downstream Propagation Failure):** REFINE is supposed to improve quality. GR-70 detects when it doesn't -- a direct propagation failure check.
  - **D13 (Feedback Loop Absence):** GR-70 is a feedback mechanism: downstream quality measurement controls upstream iteration decisions (FAIL = HALT).

- **Cracks RISKED:**
  - **D7 (Defense Paradox):** Gate #43 (or higher) in a system where 31->42 gates saw coverage DROP. Per research context #3, adding gates without fixing coverage is negative leverage. CRITICAL: this gate only has value if B-01 (GR-48 as verdict precondition) ensures it actually runs.
  - **D3 (Voluntary Non-Execution):** Like all gates, GR-70 can be skipped. Mitigated by making it a REQUIRED gate AND a verdict precondition.
  - **D14 (Complexity-Induced Invisibility):** One more gate in a 42+ gate system. Marginal invisibility increase.

- **Enforcement type:** STRUCTURAL (code gate -- the most structural possible)
- **Could be converted to structural?** Already structural. This IS the structural enforcement.
- **Net spec impact:** +15 lines spec + ~10 lines code
- **Crack dimension score:** +3 addressed (D4, D12, D13), -1.5 risked (D3, D7, D14), **net +1.5** (rises to +2.5 if B-01 ensures execution)

---

### FIX-25: Add GR-75 (Iteration Counter Gate)

- **Cracks ADDRESSED:**
  - **D3 (Voluntary Non-Execution):** Converts the prose iteration budget ("up to 1 REBUILD + 2 REFINE") into a binary code check. Agents can ignore prose; they cannot ignore gate failures.
  - **D8 (Spec Ambiguity):** The current prose budget is ambiguous ("maximum" could mean "you should try to reach" or "hard cap"). A code gate is perfectly unambiguous.

- **Cracks RISKED:**
  - **D7 (Defense Paradox):** Another gate in a declining-coverage system. Same concern as FIX-24.
  - **D14 (Complexity-Induced Invisibility):** Gate #44.

- **Enforcement type:** STRUCTURAL (code gate)
- **Could be converted to structural?** Already structural. "5 lines of code. Makes the prose rule enforceable."
- **Net spec impact:** +8 lines spec + ~5 lines code
- **Crack dimension score:** +2 addressed (D3, D8), -1.0 risked (D7, D14), **net +1.0** (rises to +1.5 with B-01)

---

### FIX-26: Add GR-78 (Builder Residual Artifact Gate)

- **Cracks ADDRESSED:**
  - **D3 (Voluntary Non-Execution):** The builder "MUST include a RESIDUAL comment" -- GR-78 is the enforcement. Without the gate, the residual is a voluntary instruction (~0% compliance for builder-facing judgment rules per research context #6).
  - **D2 (Compression Loss at Junctions):** The gate ensures the residual artifact (anti-loss mechanism for iteration boundaries) actually exists. Without enforcement, the mechanism is dead spec.
  - **D1 (Template Slot Absence):** GR-78 verifies the residual template slot was actually filled.

- **Cracks RISKED:**
  - **D7 (Defense Paradox):** Gate #45 in a declining-coverage system.
  - **D8 (Spec Ambiguity):** ">= 50 characters of content" is a minimum that can be satisfied with junk text ("This is filler text to meet the fifty character requirement for the residual"). The gate checks length, not quality.
  - **D14 (Complexity-Induced Invisibility):** Another gate.

- **Enforcement type:** STRUCTURAL (code gate with regex check)
- **Could be converted to structural?** Already structural.
- **Net spec impact:** +8 lines spec + ~5 lines code
- **Crack dimension score:** +3 addressed (D1, D2, D3), -1.5 risked (D7, D8, D14), **net +1.5** (with B-01: +2.0)

---

## FILE 7: pa-deployment.md

### FIX-27: Add iteration-aware Weaver routing for REFINE cycles

- **Cracks ADDRESSED:**
  - **D13 (Feedback Loop Absence):** This routes the Finding Status Map to the Weaver, creating a cross-cycle information channel. The Weaver becomes the designated boundary-crossing agent with cross-cycle visibility.
  - **D2 (Compression Loss at Junctions):** Without routing, the Weaver receives only current-cycle PA reports and must re-derive all context. The finding map carries compressed cross-cycle intelligence.
  - **D12 (Downstream Propagation Failure):** The Weaver can now detect whether REFINE findings propagated to actual improvements.

- **Cracks RISKED:**
  - **D11 (Mode / Context Sensitivity):** The routing is conditional on "cycle >= 2." If the orchestrator miscounts cycles, or if the Finding Status Map doesn't exist yet, the routing fails silently.
  - **D7 (Defense Paradox):** +10 lines to deployment spec. One more routing rule.
  - **D6 (Cross-File Reference Rot):** References "pa-weaver.md Finding Status Map" which only exists after FIX-22.

- **Enforcement type:** INSTRUCTIONAL (routing specification)
- **Could be converted to structural?** YES -- the orchestrator could auto-attach the Finding Status Map to Weaver inputs based on cycle number. A code check: `if (cycle >= 2) { weaverInputs.push(findingStatusMap) }`. But the routing decision is currently manual.
- **Net spec impact:** +10 lines on orchestrator-facing spec (pa-deployment.md)
- **Crack dimension score:** +3 addressed (D2, D12, D13), -1.5 risked (D6, D7, D11), **net +1.5**

---

## FILE 8: experiment-protocol.md

### FIX-28: Reclassify REFINE iteration from "experimental" to "validated"

- **Cracks ADDRESSED:**
  - **D3 (Voluntary Non-Execution):** The experiment protocol creates a categorical boundary that puts basic REFINE iteration in the "experimental" bucket. Reclassifying it as "validated operational procedure with N=2 evidence" removes this permission to treat REFINE as experimental.
  - **D8 (Spec Ambiguity):** The current framing is ambiguous about what's experimental (REFINE iteration? the 3-pass Compositional Critic? both?). The clarification disambiguates.
  - **D11 (Mode / Context Sensitivity):** Explicitly distinguishes standard REFINE (validated) from 3-pass Compositional Critic (experimental). This prevents future mode confusion.

- **Cracks RISKED:**
  - **D4 (Execution-Recording Divergence):** "N=2 evidence" is technically N=1 for fully-measured REFINE (Yegge). Claiming "validated" based on thin evidence might create false confidence. Mitigated by FIX-12 which maintains the evidence table.

- **Enforcement type:** INSTRUCTIONAL (prose clarification)
- **Could be converted to structural?** NO -- this is a classification/labeling change.
- **Net spec impact:** +4 lines on experiment protocol
- **Crack dimension score:** +3 addressed (D3, D8, D11), -0.5 risked (D4), **net +2.5**

---

## Summary Table

| Fix | Cracks Addressed | Cracks Risked | Enforcement | Convertible? | Net Spec Lines | Score |
|-----|-----------------|---------------|-------------|-------------|---------------|-------|
| FIX-01 | D3, D8, D13 | D5 (trivial) | INSTRUCTIONAL | Partially (needs FIX-19) | +0 orch | +2.5 |
| FIX-02 | D3, D8, D13 | D5, D7 (mild) | INSTRUCTIONAL | YES (FIX-25) | +0 orch | +2.5 |
| FIX-03 | D3, D8 | D11 (mild) | INSTRUCTIONAL | NO | +0 orch | +1.5 |
| FIX-04 | D3, D8, D13 | D6 (if isolated) | INSTRUCTIONAL | NO | +0 orch | +2.5 |
| FIX-05 | D3, D8, D13 | None | INSTRUCTIONAL | Partially (FIX-13) | +0 orch | +3.0 |
| FIX-06 | D1, D2, D3, D10 | D5, D7, D14 | STRUCTURAL | Already | +25 orch | +2.5 |
| FIX-07 | D3, D4, D14 | D5, D6 | INSTRUCTIONAL | YES (FIX-19) | +12 orch | +2.0 |
| FIX-08 | D3, D4, D5, D13 | D5 vol, D7, D14 | INSTRUCTIONAL* | Partially (FIX-19, 24) | +24 orch | +2.5 |
| FIX-09 | D3, D5+, D8 | D11 (mild) | INSTRUCTIONAL | NO | +0 orch | +2.5 |
| FIX-10 | D3, D8 | D4 (stale data) | INSTRUCTIONAL | NO | +0 orch | +1.5 |
| FIX-11 | D3, D4, D10 | D5, D7, D14 | INSTRUCTIONAL | YES (code output) | +8 orch | +1.5 |
| FIX-12 | D3, D13 | D4, D5, D7 | INSTRUCTIONAL | YES (JSON auto) | +12 orch | +0.5 |
| FIX-13 | D3, D8, D10, D13 | D3 recur, D5, D7, D14 | INSTRUCTIONAL | YES (code fn) | +18 orch | +2.0 |
| FIX-14 | D1, D2, D12, D13 | D3, D5, D7 | STRUCTURAL | Already (w/ FIX-26) | +14 orch | +2.5 |
| FIX-15 | D3, D5 | D6, D14 | INSTRUCTIONAL | NO | +5 orch | +1.0 |
| FIX-16 | D3, D8 | D11 (mild) | INSTRUCTIONAL | NO | +0 orch | +1.5 |
| FIX-17 | D3, D4, D13, D14+ | D5, D7 | STRUCTURAL | Partially (auto-fill) | +18 tracker | +2.5* |
| FIX-18 | D4, D8 | None | STRUCTURAL | Already | +0 tracker | +2.0 |
| FIX-19 | D3, D4, D10 | D3 recur, D7 | STRUCTURAL | Already (binary check) | +8 tracker | +2.0 |
| FIX-20 | D3, D13 | D5, D7, D11 | INSTRUCTIONAL | NO | +15 weaver | +0.5 |
| FIX-21 | D3, D4, D10 | D2, D8 | INSTRUCTIONAL | Partially | +10 weaver | +2.0 |
| FIX-22 | D2, D12, D13 | D3, D7, D10, D14 | STRUCTURAL | Partially | +12 weaver | +1.0 |
| FIX-23 | D3, D5+ | D6, D7 | INSTRUCTIONAL | NO | +8 skill | +1.0 |
| FIX-24 | D4, D12, D13 | D3, D7, D14 | STRUCTURAL | Already | +15 spec +10 code | +1.5** |
| FIX-25 | D3, D8 | D7, D14 | STRUCTURAL | Already | +8 spec +5 code | +1.0** |
| FIX-26 | D1, D2, D3 | D7, D8, D14 | STRUCTURAL | Already | +8 spec +5 code | +1.5** |
| FIX-27 | D2, D12, D13 | D6, D7, D11 | INSTRUCTIONAL | YES (code attach) | +10 deploy | +1.5 |
| FIX-28 | D3, D8, D11 | D4 (thin evidence) | INSTRUCTIONAL | NO | +4 experiment | +2.5 |

\* FIX-17 score conditional on pairing with D-01 (tracker reduction)
\** FIX-24/25/26 scores rise by ~1.0 if B-01 ensures gate execution

---

## Aggregate Analysis

### Crack Dimensions Most Frequently ADDRESSED

| Dimension | Times Addressed | Fixes |
|-----------|----------------|-------|
| D3 (Voluntary Non-Execution) | **25 of 28** | All except FIX-18, FIX-24, FIX-27 |
| D13 (Feedback Loop Absence) | 13 | FIX-01,02,04,05,08,12,14,17,20,22,24,27 + FIX-13 |
| D8 (Spec Ambiguity / Soft Language) | 12 | FIX-01,02,03,05,09,10,13,16,18,21,25,28 |
| D4 (Execution-Recording Divergence) | 8 | FIX-07,08,10,17,18,19,21,24 |
| D3 is the dominant target. This is coherent -- the convergence autopsy is fundamentally about WHY the pipeline doesn't iterate, and D3 (voluntary non-execution of the REFINE loop) is that root cause.

### Crack Dimensions Most Frequently RISKED

| Dimension | Times Risked | Fixes |
|-----------|-------------|-------|
| D7 (Defense Paradox) | **17 of 28** | Nearly universal |
| D5 (Position Effect / Attention Decay) | 13 | Most additions |
| D14 (Complexity-Induced Invisibility) | 10 | Structural additions |
| D7 is the universal tax. Every fix that adds lines, adds gates, or adds tracking mechanisms triggers D7. This is the "spec eating itself" problem (research context #8).

### Enforcement Type Distribution

| Type | Count | Avg Score |
|------|-------|-----------|
| INSTRUCTIONAL | 18 (64%) | +1.7 |
| STRUCTURAL | 10 (36%) | +1.8 |

Per research context #6: "Fixes stick when structural, fail when instructional." 64% of fixes are instructional. This is a significant risk -- nearly two-thirds of the convergence fixes may not stick.

However, 8 of the 18 instructional fixes CAN be converted to structural (marked "YES" in the table). If converted, the ratio shifts to 18/28 structural (64%) -- a much healthier distribution.

### The D7 Problem: Every Fix Triggers the Defense Paradox

The 28 fixes add approximately:
- **+199 lines** of spec across all files
- **+35 lines** of code (gates only)
- Net with replacements: roughly +150 lines of new orchestrator/weaver/tracker prose

Per research context #1 (compliance degrades with volume), adding ~150 lines to a ~4,650-line spec moves compliance from ~72% to ~71%. This is marginal -- but it means approximately 1-2 of the NEW fixes will themselves not be complied with.

Per research context #8 (the spec is eating itself), each of these 150 lines reduces compliance with the existing 4,650. The net effect: the convergence fixes improve REFINE behavior but slightly worsen INITIAL BUILD behavior.

**Mitigation:** The v2 checklist's pairing of these fixes with D-01 (-250 lines tracker reduction), A-10 (-40 lines content map), A-12 (-15 lines S(x) removal), and NEW-01 (-200 lines builder input) is essential. Without the reductions, the convergence fixes NET INCREASE spec volume and trigger D7 across the board.

### Structural Conversion Opportunities

The 8 instructional fixes that could become structural, ranked by conversion value:

1. **FIX-13 (decision function) -> code function:** Highest value. A 15-line code function replaces an 18-line prose decision tree. Input: verdict, cycle, PA-05 current/previous. Output: PROCEED/HALT/COMPLETE. Removes 18 spec lines, adds 15 code lines. Net spec: -18.
2. **FIX-11 (gate warning) -> gate-runner console output:** The warning auto-prints after post-REFINE gates. Removes 8 spec lines, adds 5 code lines. Net spec: -8.
3. **FIX-12 (evidence table) -> run-summary.json historical section:** Auto-generated from D-10 data. Removes 12 spec lines, adds 10 code lines. Net spec: -12.
4. **FIX-27 (weaver routing) -> auto-attach code:** 3-line code check auto-attaches finding map. Removes 10 spec lines, adds 3 code lines. Net spec: -10.
5. **FIX-07 (file naming) -> completion gate check:** FIX-19 already partially covers this.
6. **FIX-21 (weaver predictions) -> output post-processing:** Regex scan for PA-05 predictions. Difficult to implement cleanly.
7. **FIX-02 (iteration budget) -> FIX-25 gate:** Already covered by GR-75.
8. **FIX-11 (verification theater) -> code output:** Already listed.

If the top 4 conversions are applied: **-48 lines spec, +33 lines code**. This significantly improves the D7 profile of the entire fix set.

### Crack Dimensions NOT Addressed by Any Fix

| Dimension | Status | Explanation |
|-----------|--------|-------------|
| D9 (Environmental / Platform Variance) | NOT ADDRESSED | The convergence fixes are about iteration behavior, not platform variance. DPR issues are addressed in v2 checklist B-07 but not in the convergence autopsy fixes. |
| D6 (Cross-File Reference Rot) | ONLY RISKED, never addressed | Several fixes create new cross-references but none fix existing rot. The convergence fixes assume stable file references. |

D9 is appropriately out of scope (convergence is not a platform issue). D6 is a concern -- the fixes CREATE new cross-file references (FIX-15 references "Section 6.5," FIX-23 references "artifact-orchestrator.md Section 6.5," FIX-27 references "pa-weaver.md Finding Status Map") without any defense against those references rotting.

### Compound Interactions

The crack taxonomy identifies 5 compound interactions. How do the convergence fixes affect them?

1. **Compound 1 (D1 + D2 + D5: Template Slot + Compression + Attention):** FIX-06 and FIX-14 address D1. FIX-14 addresses D2. FIX-08 and FIX-15 address D5. This compound is partially addressed but only for ITERATION artifacts, not for the original hover/signal loss.

2. **Compound 2 (D3 + D7 + D14: Non-Execution + Defense Paradox + Invisibility):** 25 fixes address D3. But 17 fixes trigger D7 and 10 trigger D14. The convergence fixes REDUCE D3 while INCREASING D7 and D14. The net effect on this compound depends on whether the D3 reduction outweighs the D7/D14 increase. Given that 10 of 28 fixes are structural (immune to D7/D14 by definition), the compound is likely improved but not eliminated.

3. **Compound 3 (D4 + D10: Recording Divergence + Orchestrator Opacity):** FIX-19 and FIX-21 directly address this compound. FIX-19 (file-existence check) is the strongest possible defense -- it derives completeness from reality, not from the orchestrator's claims.

4. **Compound 4 (D5 + D11 + D12: Position + Mode + Propagation):** FIX-15 addresses D5. FIX-28 addresses D11. FIX-24 addresses D12. This compound is only lightly addressed by the convergence fixes.

5. **Compound 5 (D6 + D14: Reference Rot + Invisibility):** NOT addressed. Multiple fixes risk D6 (new cross-references) without defense.

---

## Recommendations

### 1. Convert the top 4 instructional fixes to structural (-48 spec lines, +33 code lines)

FIX-13, FIX-11, FIX-12, FIX-27 can all become code. This flips the enforcement distribution from 64% instructional to 50% structural and reduces net spec impact.

### 2. Pair convergence fixes with v2 checklist spec reductions

Without D-01 (-250), A-10 (-40), A-12 (-15), NEW-01 (-200), the convergence fixes are a net +150 spec lines -- feeding the D7 defense paradox. With reductions, net is approximately -355 lines. Always implement reductions BEFORE additions.

### 3. Add a cross-reference check for new references created by these fixes

FIX-15, FIX-23, FIX-27 create cross-file references that are immediately vulnerable to D6 (reference rot). The Auxiliary Prompt's reference integrity scan (if implemented) should cover these.

### 4. Accept that D7 is the unavoidable tax

17/28 fixes trigger D7. This is structural -- ANY defense against D3 (non-execution) adds something to the spec, which triggers D7 (defense paradox). The solution is not to avoid D7 but to ensure the D3 benefit outweighs the D7 cost. For structural fixes, D7 cost is near-zero (code doesn't compete for attention budget). For instructional fixes, D7 cost is real.

### 5. FIX-05 is the single highest-leverage fix

+3.0 crack dimension score with zero cracks risked. It's a 4-line replacement that removes the single most destructive framing in the entire pipeline. If only one fix is applied, it should be FIX-05.

### 6. FIX-12 is the lowest-leverage fix

+0.5 crack dimension score. It adds a manually-maintained table (D7 risk) that provides evidence the orchestrator may not read (D5 risk). Converting to auto-generated historical data (recommendation #1) would raise its score to +2.0.

---

*Analysis complete. 28 fixes analyzed across 14 crack dimensions. 25/28 address D3 (voluntary non-execution). 17/28 risk D7 (defense paradox). 64% are instructional; 36% structural. 8 instructional fixes convertible to structural. Net crack dimension score across all fixes: +49.5 addressed, -26.5 risked, net +23.0.*
