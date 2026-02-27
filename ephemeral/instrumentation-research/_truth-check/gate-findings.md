# Gate System — Independent Truth Check

Date: 2026-02-27 | Evaluator: Fresh Opus agent with zero prior context on this project's analysis history

---

## A. EXECUTION: Are gates running as designed code?

**MIXED.** The JS code is real, executable, and well-engineered. However, the two actual build results reveal the code is NOT being executed as-is in production.

**Evidence — Yegge build (gas-town):** Gate results use DIFFERENT gate names/numbers than the JS code. The JSON says `GR-13: "Letter Spacing"` but the JS code's GR-13 is `"Stacked Gap <= 120px (CSS sum)"`. The JSON says `GR-43: "Min Page Height"` but the JS has GR-43 as `"Self-Evaluation Comment Existence"`. GR-44 in JSON is `"Container Count"` but in JS it's `"Trailing Whitespace Void"`. Gate names and semantics don't match between code and results.

**Evidence — Molly build (panopticon):** Same pattern. `GR-06: "heading hierarchy"` in JSON, but JS GR-06 is `"Font Trinity (Rendered)"`. `GR-07: "section count >= 3"` in JSON, but JS GR-07 is `"No Pure Black / White"`. `GR-09: "CONVICTION comment"` vs JS `"Border Weight Hierarchy"`. The gate IDs are reused with completely different semantics.

**Conclusion:** The orchestrator is performing ad-hoc JS evaluations against the page that check similar concepts, but it is NOT calling `runGateRunner(page)` or any of the named functions in gate-runner-core.js. The gate results are hand-assembled JSON where the orchestrator ran individual `page.evaluate()` calls and mapped them to gate IDs loosely. The `source: 'code'` field that the spec requires is absent from both result files.

**The JS code exists as a specification, not as executed software.** No result entry contains the structured `{ gate, name, status, source, measured, threshold }` schema the code produces. Both builds output simplified objects like `{ gate, name, status, detail }` or `{ gate, name, status, measured }`.

---

## B. VALUE: Do gates catch real problems?

**YES — with caveats.** Even executed informally, the gates catch genuine issues:

- **Yegge:** GR-60 caught 48 WCAG contrast failures (real defect). GR-08/border hierarchy caught non-standard widths. GR-50/multi-coherence caught a weak Z3-Z4 boundary (1 channel shift). These are legitimate findings.
- **Molly:** S-09 caught a 144px stacked gap (real). BV-02 caught weak color deltas before build (caught AND fixed via revision loop). The two-pass build structure worked.
- **False positive handling works:** GR-15 auto-centering margins flagged correctly in Yegge, annotated as false positive. GR-19 boundary divs correctly triaged as intentional.

**The gates that run provide genuine signal.** The problem is coverage, not accuracy.

---

## C. ARCHITECTURE: Is the system well-designed?

**The code architecture is STRONG.** Specific strengths:

1. **Clean function decomposition:** 4 phase functions + unified wrapper. Each gate is self-contained with consistent output schema.
2. **Perceptibility thresholds are smart:** GR-55 multi-coherence doesn't just count CSS differences — it requires perceptible deltas (>=15 RGB, >=2px font-size, >=0.5px letter-spacing). This solves the "technically compliant, visually blank" problem.
3. **Ghost mechanism detection (GR-18):** Catches sub-perceptual CSS (borders <0.5px, opacity <0.1, letter-spacing <0.025em). This is a genuinely novel check I haven't seen in other design systems.
4. **Threshold gaming detection (GR-19):** Checks if >50% of deltas cluster at the minimum threshold floor (15-17 RGB). Clever anti-gaming measure.
5. **Mechanical exception classification:** Identity gate failures auto-classified as mechanical vs structural prevents unnecessary RETHINK verdicts.
6. **BV gates catch problems BEFORE building:** BV-02 delta verification, BV-03 recipe format, BV-04 suppressor scan — these prevent known failure modes upstream. BV-06 anti-regression scan is especially smart.

**The architecture is over-complex for current execution reality.** 57 gates across 8 tiers with 3 verdict pathways is a lot for a system where the orchestrator runs ~20 manual checks per build. The manifest, spec, preconditions, and provenance files total ~1,200 lines of documentation for infrastructure that doesn't execute as described.

---

## D. OBSERVER: Does it provide genuine oversight?

**YES — the Observer is the most honest component.** The Molly observer report is rigorous:

- **Caught the gate count shortfall:** OBS-25 flagged only 20/47 gates ran. Correct finding.
- **Caught GR-48 self-assessment:** OBS-26 noted the meta-gate was self-assessed, not programmatically verified. Correct.
- **Caught DPR screenshot contamination:** OBS-13 flagged it as WARNING, correctly decided not to STOP.
- **Made a principled non-STOP decision:** "20 gates cover highest-priority checks. Shortfall is gate runner scope decision, not runtime failure." This is sound judgment.
- **File-based communication prevents manipulation:** The observer writes to disk, doesn't message the orchestrator. Good isolation design.

**Limitation:** The observer cannot verify model identity (OBS-22 DEFERRED). It also cannot verify whether gate results came from the JS code or manual evaluation — it just checks the file exists and has enough entries.

---

## E. WHAT WORKS

1. **The gate concepts are sound.** Identity gates (border-radius, box-shadow, container width, warm palette, font trinity) enforce a clear design identity. These are binary, unambiguous, and valuable.
2. **BV revision loop delivers.** Molly build: BV-02 caught weak color deltas, brief was revised, problem solved before builder ever saw it. This is prevention > detection.
3. **Two-pass build architecture.** Pass A structure (1029 CSS) + Pass B enrichment (1407 CSS) + IMPROVE (1591 CSS) is a sound escalation pattern. Each pass has clear scope.
4. **IMPROVE isolation.** "Builder receives artistic impression, not gate scores" is correctly enforced per tracker evidence. Generative vs diagnostic vocabulary distinction is real.
5. **PA contamination recovery.** In Molly, 9/9 auditors got corrupted screenshots. The weaver recalibrated. The system recovered gracefully despite a serious input failure.
6. **False positive triaging.** Both builds correctly identified and annotated false positives rather than blindly failing.

---

## F. WHAT DOESN'T WORK

1. **The JS code is not executed as code.** This is the central finding. 1,654 lines of well-written JavaScript exist but the orchestrator runs manual evaluations instead. The code is aspirational documentation, not production infrastructure.
2. **Gate ID mapping is broken between builds.** Yegge uses one set of gate-to-concept mappings, Molly uses a completely different set. There is no stable gate registry in practice.
3. **Coverage is 35-43% of spec.** 20/57 gates in Molly. ~30/57 in Yegge. The missing gates include multi-coherence (GR-55), mechanism detection, responsive checks, and all D2 crack gates (BV-08, GR-83, GR-84). These are non-trivial omissions.
4. **No `source: 'code'` field in results.** The spec requires every result to include `source: 'code' | 'manual' | 'skip'`. Neither build's JSON includes this field. This makes it impossible to distinguish programmatic from manual results.
5. **GR-48 meta-gate is self-referential theater.** It's designed to verify all other gates ran, but the orchestrator self-assesses it as PASS. The observer caught this.
6. **Execution tracker has unfilled fields.** 82 fields, ~88% filled. The "Derived Phase Completion" section is entirely blank. Some Phase 2A auto-fields unfilled.

---

## G. OVERALL ASSESSMENT

**Rating: MIXED**

The gate system is a well-designed specification (STRONG as architecture) that is partially executed (WEAK as enforcement). The ~20 gates that DO run catch real problems. The BV revision loop, IMPROVE isolation, observer independence, and false-positive handling all work well. But the gap between spec (57 programmatic gates with structured output) and reality (20 manual checks with ad-hoc JSON) is the dominant finding.

**What this system actually is:** A 57-gate quality specification that an Opus orchestrator agent consults as a checklist, executing ~35% of it via manual Playwright evaluations, producing results that share gate IDs but not gate semantics with the specification.

**What it claims to be:** An executable JavaScript gate runner that produces structured, machine-readable verification results.

**The value is real. The automation claim is not.** The system would be rated SOLID if the documentation accurately described manual execution with structured output, rather than claiming programmatic code execution that doesn't happen.
