# Plumbing/Freedom Boundary Audit

**Auditor:** boundary-auditor (Opus)
**Date:** 2026-02-27
**Source:** 30-IMPLEMENTATION-PLAN.md (1,272 lines), cross-referenced against 20-contamination-audit.md (337 lines)
**Method:** Every step, sub-step, prompt section, and gate classified as PLUMBING or FREEDOM. Violations flagged by type.

---

## FRAMEWORK

```
PLUMBING (orchestrator controls, no interpretation)          FREEDOM (inside each window)
-------------------------------------------------------     --------------------------------
Which files load into which agent prompt                     What the agent DOES with those files
What ORDER the files appear in the prompt                    How the agent PROCESSES them
Which model runs each agent (Opus mandate)                   What creative decisions the agent makes
Screenshots captured at which viewports                      How auditors EXPERIENCE the screenshots
Gate runner JavaScript (deterministic pass/fail)             What the builder creates within gate floors
Routing decision (SHIP/REFINE/RETHINK)                       What the REFINE builder chooses to change
That a conviction brief EXISTS (structural check)            What the conviction brief SAYS
That a reflection EXISTS (structural check)                  What the reflection CONTAINS
That HTML was produced                                       What HTML was produced
```

**Violation types:**
- **PLUMBING CREEP:** A plumbing step that evaluates creative quality
- **FREEDOM EROSION:** A prompt instruction that disguises a constraint as a suggestion
- **BOUNDARY BLUR:** Genuinely unclear whether plumbing or freedom
- **MISSING PLUMBING:** Structural validation should exist but doesn't
- **EXCESSIVE PLUMBING:** Structural validation is overkill / wastes context

---

## SECTION 1: PLUMBING SPECIFICATION (Steps 0-9)

### STEP 0: Parse Input and Create Output Directory

| Sub-step | Classification | Violation? | Details |
|----------|---------------|------------|---------|
| 0.1 Parse command argument | PLUMBING | NONE | Pure argument parsing. Deterministic. |
| 0.2 Read content file, verify exists | PLUMBING | NONE | Existence check. Structural. |
| 0.3 Compute slug + date + output_dir | PLUMBING | NONE | String manipulation. Deterministic. |
| 0.4 mkdir -p for directory tree | PLUMBING | NONE | File system operation. |
| 0.5 cp content to _content.md | PLUMBING | NONE | File copy. |
| 0.6 Glob to verify copy | PLUMBING | NONE | Artifact chain verification. |

**Step 0 verdict:** Clean plumbing. All 6 sub-steps are structural, deterministic, and produce verifiable artifacts. No freedom territory touched.

---

### STEP 1: Spawn Window 1 Agent (DERIVE + BUILD)

#### 1A: Prompt Construction (Plumbing)

| Section | Classification | Violation? | Details |
|---------|---------------|------------|---------|
| [A] Receiving Principle (5 lines) | PLUMBING (routing) | NONE | Plumbing decides THAT the receiving principle appears first. The TEXT of the principle is freedom-enabling infrastructure. Correct boundary. |
| [B] TC Skill (841 lines) | PLUMBING (routing) | NONE | Plumbing decides this file loads. What the builder does with TC phases is freedom. |
| [C] Raw content | PLUMBING (routing) | NONE | Content routing. |
| [CHECKPOINT] "STOP. Complete TC derivation..." | PLUMBING (sequencing) | **BOUNDARY BLUR** | The checkpoint INSTRUCTION is plumbing (ordering). But the text "Run Phase 0... Run Phase 1... Run Phase 2... Run Phase 3..." (lines 312-316) prescribes a specific creative process sequence. The TC skill already contains these phases. Repeating them in the checkpoint is either (a) redundant plumbing reinforcement or (b) the orchestrator directing the creative process. The TC skill should own the process sequence; the checkpoint should own only "write the brief before continuing." |
| [D] Prohibitions (419 lines) | PLUMBING (routing) | NONE | File routing after checkpoint. |
| [E] Tokens (183 lines) | PLUMBING (routing) | NONE | File routing. |
| [F] Mechanism catalog (751 lines) | PLUMBING (routing) | NONE | File routing. |
| [G] Components CSS (944 lines) | PLUMBING (routing) | NONE | File routing. |
| [H] Conventions brief (~40 lines) | PLUMBING (routing) | See detailed analysis below | The ROUTING of this text is plumbing. The CONTENT is analyzed in the Conventions section. |

#### 1B: Output Instructions

| Instruction | Classification | Violation? | Details |
|-------------|---------------|------------|---------|
| "You MUST write these 3 files" | PLUMBING | NONE | Structural requirement. Plumbing controls THAT files are produced. |
| output.html specification | PLUMBING | NONE | Format requirement (self-contained HTML, all CSS embedded). |
| _tc-brief.md "~50 lines, 5 sections: WORLD-DESCRIPTION, CALIBRATION, OPPOSITION, ARC, CONTENT MAP" | PLUMBING (format) | **FREEDOM EROSION** | The section NAMES are plumbing (BV-01 through BV-04 check for them). But "~50 lines" and "~10 lines" per section SIZE targets are creative constraints disguised as format specs. A conviction brief that runs 80 lines because the world demands more description is not a format failure. The builder should own the brief's length. Fix: remove line count targets. Keep section names (they are structurally verified). |
| _reflection.md "3-dimension reflection, ~15-20 sentences: CONVICTION, ALTERNATIVES, UNRESOLVED" | PLUMBING (format) | **MINOR FREEDOM EROSION** | Section names are structural (the Weaver and REFINE builder reference them). But "~15-20 sentences" is a length target on creative output. Less consequential than the brief targets because the reflection is less central. |

#### 1C: Artifact Verification

| Verify | Classification | Violation? | Details |
|--------|---------------|------------|---------|
| 1.4 Glob output.html | PLUMBING | NONE | Existence check. |
| 1.5 Read output.html: >10 lines, contains `<html` | PLUMBING | NONE | Structural validity. Not evaluating quality. |
| 1.6 Glob _tc-brief.md | PLUMBING | NONE | Existence check. Non-blocking (warn). |
| 1.7 Glob _reflection.md | PLUMBING | NONE | Existence check. Non-blocking (warn). |

**Step 1 verdict:** Mostly clean. Two violations: (1) checkpoint redundantly prescribes TC phases that the TC skill already owns, (2) line count targets on brief/reflection sections are creative constraints wearing format clothes.

---

### STEP 2: Serve HTML and Capture Screenshots

| Sub-step | Classification | Violation? | Details |
|----------|---------------|------------|---------|
| 2.1 Start HTTP server | PLUMBING | NONE | Infrastructure. |
| 2.2 Navigate to page | PLUMBING | NONE | Infrastructure. |
| 2.3 Capture screenshots at 3 viewports | PLUMBING | NONE | Deterministic image capture. |
| 2.4 GR-62 screenshot quality check | PLUMBING | NONE | Checks for blank/corrupt screenshots, not creative quality. |
| 2.5 Orchestrator scrolls page, checks for illegibility | **BOUNDARY BLUR** | **PLUMBING CREEP** | The plan says: "Orchestrator scrolls page in Playwright, checks for illegibility. SET blocking_usability = true/false." This requires the orchestrator (an LLM) to make a JUDGMENT about legibility. "Is this text illegible?" is not a deterministic check. The contamination audit flagged this (C-12) and recommended constraining to "broken rendering only." The plan did NOT fix this -- it carries the usability scan as written. The orchestrator is plumbing; it should not make perceptual judgments. **Contamination audit fix NOT applied.** |
| 2.6 Glob screenshots/1440 | PLUMBING | NONE | Artifact verification. |
| 2.7 Glob screenshots/768 | PLUMBING | NONE | Artifact verification. |
| 2.8 Sum counts, stop if zero | PLUMBING | NONE | Deterministic threshold. |

**Step 2 verdict:** One violation. Step 2.5 is plumbing creep -- the orchestrator makes a perceptual judgment that belongs in freedom territory (the auditors' domain). Contamination audit C-12 identified this; the plan did not resolve it.

---

### STEP 3: Run Gate Runner

| Sub-step | Classification | Violation? | Details |
|----------|---------------|------------|---------|
| 3.0 BV gates: string-search brief for "WORLD", "CALIBRATION", "OPPOSITION", "ARC" | PLUMBING | **MINOR BOUNDARY BLUR** | String-searching for section NAMES is structural. But what if the builder writes "THE WORLD THIS PAGE INHABITS" instead of "WORLD-DESCRIPTION"? The gate checks for substrings, not exact headers. "WORLD" would match "WORLD-DESCRIPTION" or "THE WORLD" -- this is fine. "CALIBRATION" is more specific and might not appear if the builder used "TUNING" or "RANGES." The BV gates assume the brief uses the exact vocabulary from the output instructions, which is plumbing reinforcing plumbing. Acceptable but brittle. |
| 3.1 Read gate-runner-core.js | PLUMBING | NONE | File loading. |
| 3.2 browser_evaluate runs ALL 28 gates | PLUMBING | NONE | Deterministic JavaScript execution. The gates themselves measure CSS properties, pixel values, and structural HTML patterns. No creative judgment. |
| 3.3 Write gate results JSON | PLUMBING | NONE | File output. |
| 3.4 Read + validate JSON | PLUMBING | NONE | Artifact verification. |

**Step 3 verdict:** Clean. The gate runner is pure plumbing. The BV gates are structurally sound (checking section headers the builder was instructed to use). One minor brittleness flag on section name matching.

---

### STEP 4: Spawn PA Auditors

| Sub-step | Classification | Violation? | Details |
|----------|---------------|------------|---------|
| 4.1 Read PA skill, extract questions | PLUMBING | NONE | File routing. |
| 4.2 Read _tc-brief.md, extract Sections 1+4 | **CONTRADICTION** | **PLUMBING CREEP / RESOLVED CONTRADICTION** | The plan's Section 1 Step 4.2 says "IF has_brief: Read _tc-brief.md. Extract Sections 1 (WORLD-DESCRIPTION) + 4 (ARC) only." But Section 6 Reconciliation #5 resolves this: "No brief excerpt for auditors." And the Appendix A note on line 1174 says "per Reconciliation #5, this is NOT sent to auditors." **The step contradicts the reconciliation.** The plumbing spec includes a step (4.2) that the reconciliation says should not exist. The contamination audit flagged this as C-11/C-21/C-27 (HIGH). **STATUS: Reconciliation CORRECTLY resolves this as "no brief." But Step 4.2 still exists in the plumbing specification. The implementation will be ambiguous -- an implementer might follow Section 1 (which includes 4.2) or Section 6 (which removes it). This must be cleaned up: remove Step 4.2 from Section 1, remove brief_excerpt from auditor prompt construction.** |
| 4.3 Glob screenshot paths | PLUMBING | NONE | File collection. |
| 4.4 Construct 5 auditor prompts | PLUMBING (routing) | See prompt template analysis below | The ACT of constructing prompts is plumbing. The CONTENT of the prompts is analyzed in Section 2. Note: this sub-step lists "[D] Brief excerpt (sections 1+4 only)" in the prompt components. Per Reconciliation #5, this should not be present. **Another artifact of the unresolved contradiction.** |
| 4.5 Launch 5 Task calls in parallel | PLUMBING | NONE | Agent spawning. |
| 4.6 Glob auditor reports, check count == 5 | PLUMBING | NONE | Structural verification. |
| 4.7 Read each report (limit=30), check for Section 0 content | PLUMBING | **PLUMBING CREEP** | Checking that a report "contains 'cold look' or 'gut' or 'first impression'" is checking the CONTENT of creative output. The auditor's perception is sovereign. An auditor who uses different vocabulary for their first impression ("initial reaction," "opening feeling") would trigger a false warning. This is the orchestrator evaluating whether the auditor followed instructions by scanning their creative language. The STRUCTURAL check should be: "file exists and has > N lines." The CONTENT of the auditor's experience belongs to the auditor. |
| 4.8 String-search reports for CSS vocabulary | PLUMBING | **PLUMBING CREEP** | The contamination audit flagged this as C-13/C-22. The plan retains it. Searching auditor reports for "px", "rem", "font-size", "margin", "padding", "border-radius" is policing the LANGUAGE of creative agents. An auditor who says "the padding between sections feels too tight" has used a banned word to describe a perception. The language constraint belongs in the auditor's PROMPT (which is plumbing -- you control what instructions the agent receives). Scanning the OUTPUT for banned words is compliance enforcement on creative output. **Contamination audit fix NOT applied.** Note: this is WARN-only, which reduces severity. But even a warning signal from the orchestrator about an auditor's word choice is an evaluation of creative output. |

**Step 4 verdict:** Three violations. (1) Step 4.2 contradicts Reconciliation #5 -- brief excerpt should not be extracted for auditors. (2) Step 4.7 checks creative output content (Section 0 vocabulary). (3) Step 4.8 polices auditor language. Both C-13/C-22 flagged in contamination audit, neither resolved.

---

### STEP 5: Spawn Weaver

| Sub-step | Classification | Violation? | Details |
|----------|---------------|------------|---------|
| 5.1 Construct Weaver prompt | PLUMBING (routing) | NONE | The Weaver receives: screenshots, 5 auditor reports, full brief, reflection. All are routing decisions (which files go to which agent). |
| 5.2 Task call, Opus agent | PLUMBING | NONE | Agent spawning. |
| 5.3 Wait for completion | PLUMBING | NONE | |
| 5.4 Glob weaver-synthesis.md | PLUMBING | NONE | Existence check. |
| 5.5 Read weaver synthesis, check for "RETHINK" or "SHIP" or "REFINE" | PLUMBING | **MINOR BOUNDARY BLUR** | String-searching the Weaver's output for a verdict keyword is borderline. The Weaver is INSTRUCTED to include a verdict (SHIP/REFINE/RETHINK) -- so checking for it is structural validation that the output follows the instructed format. This is acceptable plumbing: checking THAT a structural element exists, not evaluating its quality. The Weaver chooses the verdict; the orchestrator only checks that one was provided. |

**Step 5 verdict:** Clean. The minor boundary blur on 5.5 resolves correctly as plumbing (structural format check, not content evaluation).

---

### STEP 6: Routing Decision

| Sub-step | Classification | Violation? | Details |
|----------|---------------|------------|---------|
| 6.1 Read gate results JSON, extract summary | PLUMBING | NONE | Deterministic data extraction. |
| 6.2 Extract creative_verdict from Weaver (or keyword scan fallback) | PLUMBING | NONE | String search for verdict keyword. The Weaver's CREATIVE JUDGMENT (which verdict to issue) is freedom. The orchestrator's EXTRACTION of that judgment (string matching) is plumbing. Correct boundary. |
| 6.3 Routing matrix (deterministic if/else) | PLUMBING | NONE | Pure conditional logic. Five branches, no interpretation. The routing matrix is the cleanest plumbing in the plan. |
| 6.4 Mechanical patching (Edit tool for failed gates) | **BOUNDARY BLUR** | **PLUMBING CREEP (JUSTIFIED)** | The orchestrator uses the Edit tool to fix specific CSS values (e.g., max-width:960px for GR-03, increase RGB delta for GR-11). This is the orchestrator MODIFYING CREATIVE OUTPUT. However: the modifications are strictly mechanical (changing a number to meet a threshold), not creative (restructuring layout or changing design intent). The gate provides the exact fix. This is closer to a spell-checker than a creative editor. **Verdict: acceptable plumbing because the fixes are deterministic and value-based.** But note: "GR-05→adjust B channel" and "GR-11→increase RGB delta" require the orchestrator to compute corrected hex values. If the orchestrator is a capable LLM, it can do hex math. If it makes an error, the re-run (repeat 3.2-3.3) catches it. Acceptable. |
| 6.5 RETHINK protocol: re-run from Step 1, or ship better artifact | PLUMBING | NONE | Process control. The "ship the better artifact (larger HTML)" rule is a deterministic tie-breaker. |
| 6.6 Write routing log | PLUMBING | NONE | Logging. |

**Step 6 verdict:** Clean. The mechanical patching is a justified boundary violation -- the orchestrator modifies creative output, but only in deterministic, gate-prescribed ways. The routing matrix is exemplary plumbing.

---

### STEP 7: Spawn Window 3 Agent (REFINE)

| Sub-step | Classification | Violation? | Details |
|----------|---------------|------------|---------|
| 7.0 Backup output.html | PLUMBING | NONE | Safety mechanism. |
| 7.0v Verify backup | PLUMBING | NONE | Artifact chain. |
| 7.1 Read files for prompt construction | PLUMBING (routing) | NONE | See REFINE prompt analysis in Section 2. |
| 7.2 Task call, Opus agent | PLUMBING | NONE | Agent spawning. Different Opus instance (plumbing ensures continuation bias is broken). |
| 7.3 Wait for completion | PLUMBING | NONE | |
| 7.4 Read output.html: >10 lines, contains `<html` | PLUMBING | NONE | Structural verification. |
| 7.5 Glob _reflection-v2.md | PLUMBING | NONE | Existence check. |

**"What REFINE Builder MAY Do / MAY NOT Do" (line 243-244):**

| Instruction | Classification | Violation? | Details |
|-------------|---------------|------------|---------|
| "May restructure HTML, rewrite CSS, change layouts, introduce new mechanisms, extend metaphor expression" | FREEDOM | NONE | Correctly scoped creative territory. |
| "May NOT: replace the metaphor, violate world-description, ignore opposition map" | **FREEDOM EROSION** | **FREEDOM EROSION** | "Replace the metaphor" and "violate the world-description" are identity constraints -- these are the physics of the world, not creative preferences. They belong here. But "ignore opposition map" is a creative judgment. The opposition map is a creative analysis tool; whether the REFINE builder uses it is a creative decision. If the REFINE builder sees the page differently than the original builder and identifies a different opposition, requiring them to honor the original opposition map constrains their creative sovereignty. **Fix: remove "ignore opposition map." Keep "replace the metaphor" and "violate world-description" as identity constraints.** |

**Step 7 verdict:** One violation. The MAY NOT list includes "ignore opposition map" which constrains creative judgment beyond identity physics.

---

### STEP 8: Post-REFINE Gate Check and Ship

| Sub-step | Classification | Violation? | Details |
|----------|---------------|------------|---------|
| 8.1 Re-capture screenshots | PLUMBING | NONE | |
| 8.2 Re-run gate runner | PLUMBING | NONE | |
| 8.3 Write post-REFINE gate results | PLUMBING | NONE | |
| 8.4 Patch mechanical failures / log structural | PLUMBING | NONE | Same justified boundary use as 6.4. |
| 8.5 Kill HTTP server | PLUMBING | NONE | Cleanup. |
| 8.6 Final file inventory | PLUMBING | NONE | |
| 8.7 Read gate results + routing log for report | PLUMBING | NONE | |
| 8.8 Print ship report: file path, gate summary, route taken, cold-look excerpts, Weaver verdict | **BOUNDARY BLUR** | **MINOR PLUMBING CREEP** | Printing "cold-look excerpts from each auditor" means the orchestrator extracts and presents CREATIVE content. This is not evaluating it -- it is passing it through to the user. Acceptable: the orchestrator acts as a conduit, not a judge. But the SELECTION of "cold-look excerpts" (rather than, say, full reports or Weaver synthesis) is a curatorial decision. Minor. |

**Step 8 verdict:** Clean. The ship report excerpting is a minor curatorial act, not an evaluation.

---

### STEP 9: Second REFINE (User Escalation Only)

| Sub-step | Classification | Violation? | Details |
|----------|---------------|------------|---------|
| 9 (entire) | PLUMBING | NONE | "Not automatic. Only if user explicitly requests." The plumbing correctly defers this decision to the user. Process control respects creative sovereignty. |

---

## SECTION 2: WINDOW SPECIFICATIONS

### Window 1 Prompt Template (lines 281-386)

| Prompt Element | Classification | Violation? | Details |
|---------------|---------------|------------|---------|
| "You are building a page from raw content." | FREEDOM (context-setting) | NONE | Neutral framing. |
| Receiving Principle items 1-5 | FREEDOM (enabling) | NONE | These are anti-compliance mechanisms: "The metaphor is yours," "your perception is the tiebreaker." They create creative space, not constraints. |
| "You must produce 3 files" | PLUMBING (format) | NONE | Structural output requirements. |
| TC Skill insertion (841 lines) | FREEDOM (process guide) | NONE | The TC skill is a creative methodology, not a compliance checklist. The builder uses it to derive meaning. |
| "STOP. Before reading the files below, complete your TC derivation" | PLUMBING (sequencing) | See Step 1A analysis above | |
| "Run Phase 0... Run Phase 1... Run Phase 2... Run Phase 3..." | **FREEDOM EROSION** | **FREEDOM EROSION** | This tells the builder WHICH creative phases to run and in WHAT ORDER. The TC skill already defines these phases. Repeating them here converts a creative methodology into an instruction checklist. The checkpoint should say only: "Write your conviction brief before reading the vocabulary files below." How the builder arrives at the brief is their creative process, governed by the TC skill they already received, not by a checkpoint checklist. |
| Identity files (prohibitions + tokens) after checkpoint | PLUMBING (routing) | NONE | Reading order is plumbing. |
| "MECHANISMS -- YOUR TOOLS:" framing | FREEDOM (enabling) | NONE | "Your tools" -- invitational, not prescriptive. |
| "COMPONENT LIBRARY -- YOUR STARTING POINTS:" | FREEDOM (enabling) | NONE | "Starting points" -- explicitly non-prescriptive. |
| Conventions brief: "absorb these, do not checklist them" | **BOUNDARY BLUR** | **BOUNDARY BLUR** | The instruction to "absorb, do not checklist" is META-PLUMBING: the orchestrator telling the builder HOW to process plumbing constraints. This is the right instinct (prevent checklist compliance behavior) but is itself a cognitive instruction about creative processing. Is it plumbing or freedom? It is plumbing about the builder's RELATIONSHIP to plumbing. Novel category. Acceptable because it prevents a known failure mode (checklist compliance), but note the irony: an instruction about how not to follow instructions. |
| Conventions items (940-960px, warm palette, etc.) | PLUMBING (physics) | See Conventions analysis below | |
| "Include an EXPERIENTIAL-CHECK comment (>= 100 chars)" | PLUMBING (format) | **EXCESSIVE PLUMBING** | Requiring a specific HTML comment format is plumbing. But requiring the builder to SELF-CERTIFY that they scrolled their page is process ceremony. The builder either scrolled or didn't. A >=100 char comment requirement produces compliance text ("I scrolled through the page and verified that all text is legible and visual clarity is maintained throughout the composition"), not genuine experiential verification. The gate (GR-63) checks for this comment, making it a plumbing-gate pair. But the underlying behavior (self-scrolling) is creative process, not structural output. **This is ceremony disguised as plumbing.** |
| "Include a SELF-EVALUATION comment noting what you would improve" | PLUMBING (format) | **EXCESSIVE PLUMBING** | Same issue. The builder's self-evaluation is creative meta-cognition. Requiring it as an HTML comment (checked by GR-43) is process ceremony. The reflection file already serves this purpose better (free-form creative meta-cognition in its own document). The HTML comment version is a vestige of the old pipeline's builder narration gates (Category H in the gate list). |
| "Build from your conviction brief. Work boundary-by-boundary" | **BOUNDARY BLUR** | **FREEDOM EROSION** | "Build from your conviction brief" is freedom-enabling (build from YOUR conviction). "Work boundary-by-boundary" is a creative process instruction. It tells the builder HOW to build (zone-by-zone compositional approach). Some builders might work top-down, others might work from the most important section outward, others might build the overall grid first and fill in zones. Prescribing boundary-by-boundary is a methodology preference, not a physics constraint. |
| "at each zone transition, set background, typography, spacing, and borders together" | **FREEDOM EROSION** | **FREEDOM EROSION** | This is a specific compositional instruction embedded in a process spec. It tells the builder which CSS properties to coordinate at zone boundaries. While this is GOOD ADVICE (and reflects the multi-coherence principle), it is creative methodology disguised as a build instruction. The mechanism catalog contains this information as a tool; repeating it here converts it from a resource to a directive. |
| "The reader should feel they enter a different room at each boundary" | FREEDOM (aspiration) | NONE | This is creative direction, not a constraint. It describes a DESIRED EXPERIENCE without prescribing how to achieve it. Correct use of freedom language. |
| "Adapt components from the library. Do not invent from scratch when a component serves your purpose." | **FREEDOM EROSION** | **FREEDOM EROSION** | "Do not invent from scratch when a component serves your purpose" tells the builder when to use the component library vs. original CSS. This is a creative judgment call that the builder should own. Some compositions need components that don't exist in the library. Some metaphors demand visual language that the library doesn't provide. This instruction biases toward library adoption over original creation. |
| "Do not copy when your metaphor demands something different." | FREEDOM (enabling) | NONE | This COUNTERBALANCES the previous instruction. "Your metaphor demands" gives the builder creative override authority. Together with the previous line, the pair says "prefer library, but your metaphor wins." This is still mildly directive but gives the builder final say. |
| Reflection instructions: "CONVICTION... ALTERNATIVES... UNRESOLVED..." | PLUMBING (format) | NONE | The section names are structural (consumed by Weaver and REFINE builder). The CONTENT of each section is creative. |

### Window 1 Reading Order Rationale (lines 388-398)

| Item | Classification | Violation? | Details |
|------|---------------|------------|---------|
| "Receiving Principle first (creative activation)" | PLUMBING | NONE | |
| "TC Skill second (creative process guide)" | PLUMBING | NONE | |
| "Content third (the material)" | PLUMBING | NONE | |
| "[CHECKPOINT] conviction brief MUST be written before vocabulary enters context" | PLUMBING | NONE | Sequencing. This is correct plumbing: controlling the ORDER of information delivery, not the creative processing of it. |
| "Identity files -- world physics, processed as properties of the world already imagined" | **BOUNDARY BLUR** | **FREEDOM EROSION** | The phrase "processed as properties of the world already imagined" tells the builder HOW to cognitively process the identity files. This is not routing (plumbing) -- it is cognitive framing (freedom territory). The routing decision (identity files come after the checkpoint) is plumbing. The instruction about how to THINK about them crosses into creative process territory. |
| "Mechanism catalog -- techniques for implementing decisions already made" | **FREEDOM EROSION** | **FREEDOM EROSION** | "Decisions already made" tells the builder that their brief decisions are final by the time they see the mechanism catalog. But a builder reading the mechanism catalog might discover a technique that reshapes their approach. Locking "decisions already made" before the builder has seen all their tools is pre-emptive creative foreclosure. |
| "Components CSS -- starting points, not templates" | FREEDOM (enabling) | NONE | Correct anti-compliance framing. |
| "Conventions brief -- mechanical constraints absorbed as parameters, not primary frame" | **BOUNDARY BLUR** | **FREEDOM EROSION** | Same "absorb" instruction as analyzed above. Plus: "not primary frame" is a cognitive instruction about hierarchical processing. The plumbing controls WHEN the builder sees this (last). Telling them it's "not primary" is controlling how they RANK it cognitively. |

---

### Window 2 Auditor Prompt Template (lines 420-482)

| Prompt Element | Classification | Violation? | Details |
|---------------|---------------|------------|---------|
| "You are a perceptual auditor. You are seeing a web page for the first time." | FREEDOM (context-setting) | NONE | Role framing. |
| "You know nothing about who made it, why, or what it's supposed to look like." | FREEDOM (enabling) | NONE | Fresh-eyes activation. Anti-contamination. |
| Receiving Principle items 1-5 | FREEDOM (enabling) | NONE | "Your perception is sovereign" -- creates creative authority. |
| Section 0: Cold Look protocol | **BOUNDARY BLUR** | **FREEDOM EROSION** | The cold look protocol prescribes a specific perceptual process: "Do NOT read text. Absorb shape, color, weight. Spend 5 seconds." This is a creative methodology for perception. It is GOOD methodology (proven to surface honest first impressions). But it IS methodology, not plumbing. The plumbing equivalent would be: "describe your first impression." The detailed protocol (5 seconds, no text reading, four specific responses, LOCKED forever) is a creative process guide wearing plumbing clothes. **Partial defense:** The PA skill already contains this protocol. The auditor prompt quotes it. The plumbing decision is "include the PA skill's Section 0 in the prompt" (routing). The content of Section 0 is the PA skill's creative methodology. This is similar to loading the TC skill for builders -- plumbing routes it, the content is freedom-enabling. **Verdict: acceptable because the methodology comes from the PA skill, not from the orchestrator inventing process controls.** |
| "LOCKED forever" on cold look responses | PLUMBING (integrity) | NONE | Prevents the auditor from revising their first impression after reading questions. This is an information integrity mechanism (anti-anchoring). Correct plumbing. |
| Screenshot paths | PLUMBING (routing) | NONE | File references. |
| BLOCKING-USABILITY note | PLUMBING (routing) | **PLUMBING CREEP** | Pre-seeding a usability finding into the auditor's prompt BEFORE they experience the page is contamination. It tells the auditor "something is wrong" before they look. This biases perception. However: the note comes from Step 2.5 (the orchestrator's own usability scan), which is already flagged as plumbing creep. If Step 2.5 is removed (as the contamination audit recommends), this pre-seeding disappears too. **Dependent violation: resolves if Step 2.5 is fixed.** |
| Question assignment (4 questions each, tier-spanning) | PLUMBING (routing) | NONE | Correct: the orchestrator decides WHICH questions each auditor gets. What the auditor writes in response is freedom. |
| Language constraint (banned words list) | **BOUNDARY BLUR** | **BOUNDARY BLUR** | The language constraint bans CSS property names from auditor reports. Two perspectives: (1) PLUMBING: this is a format constraint ensuring the auditor's output is in perceptual language, not technical language. Like requiring a certain file format. (2) FREEDOM EROSION: this constrains the auditor's vocabulary, which constrains their expressive range. An auditor who naturally thinks in CSS terms must translate, which adds cognitive load and may distort perception. **Verdict: acceptable plumbing with a known cost.** The constraint serves a real purpose (prevents technical analysis from displacing perceptual experience). The cost (vocabulary translation) is acknowledged. The "Use instead" list provides alternative vocabulary, which is enabling. Note: Step 4.8's post-hoc word scan is SEPARATE from this in-prompt constraint. The in-prompt constraint is acceptable; the post-hoc scan is plumbing creep (see Step 4 analysis). |
| "Write your report to: {path}" | PLUMBING (format) | NONE | Output routing. |
| "Structure: Section 0... then each question response (3-8 sentences of prose)" | PLUMBING (format) | **MINOR FREEDOM EROSION** | "3-8 sentences of prose" is a length target on creative output. An auditor who needs 2 sentences for one question and 12 for another is being range-limited. Minor. |

### Information Isolation (line 484-492)

| Isolation Rule | Classification | Violation? | Details |
|---------------|---------------|------------|---------|
| No gate results | PLUMBING | NONE | Correct: gates are plumbing, auditors are freedom. |
| No builder's reflection | PLUMBING | NONE | Prevents intent-anchoring. |
| No other auditor reports | PLUMBING | NONE | Prevents consensus-biasing. |
| No full TC brief (only sections 1+4) | **CONTRADICTION** | **UNRESOLVED** | Per Reconciliation #5, auditors get NO brief. This line says "No full TC brief (only sections 1+4)," implying they get a partial brief. This contradicts the reconciliation. The isolation list should say "No TC brief" with no qualifier. **Same unresolved contradiction as Step 4.2.** |
| No mechanism catalog, components CSS, content markdown | PLUMBING | NONE | Correct: building materials are not perception inputs. |
| No numerical targets or thresholds | PLUMBING | NONE | Prevents threshold-anchoring in perception. |

---

### Window 2 Weaver Prompt Template (lines 496-538)

| Prompt Element | Classification | Violation? | Details |
|---------------|---------------|------------|---------|
| "You are a creative synthesizer" | FREEDOM (role) | NONE | |
| "Transform five independent experiential accounts into creative direction" | FREEDOM (purpose) | NONE | |
| "that makes a refinement builder want to CREATE, not FIX" | FREEDOM (framing) | NONE | Anti-compliance framing. Correct. |
| Receiving Principle items 1-5 | FREEDOM (enabling) | NONE | "Your verdict is a creative judgment, not a calculation" -- strong freedom. |
| "Notice where 3+ agree (convergence) and where 1 disagrees (divergence)" | FREEDOM (methodology) | **MINOR FREEDOM EROSION** | This tells the Weaver HOW to analyze the reports (convergence/divergence counting). The Weaver might have a different analytical approach (e.g., thematic clustering, emotional arc tracking). Prescribing the convergence/divergence frame is a methodological preference. Minor because it's guidance, not mandate ("Notice" not "You must count"). |
| Weaver output structure (5 sections) | PLUMBING (format) | NONE | The section names (EXPERIENTIAL ANCHOR, WHAT IS WORKING, etc.) are structural requirements consumed by the REFINE builder and routing logic. |
| "AMPLIFY / RELEASE / DEEPEN / THE GAP" sub-sections | **BOUNDARY BLUR** | **FREEDOM EROSION** | These four sub-categories within "WHERE TO GO" prescribe the Weaver's creative framework. A Weaver who sees the page differently might frame direction as "EXPAND / CONTRACT / INTENSIFY" or use entirely different conceptual territory. The four categories are a specific creative vocabulary for synthesis. They may produce better results than unconstrained synthesis (the framework has been proven). But they are creative constraints, not structural format. **Partial defense:** The REFINE builder's prompt references these territories by name ("The Weaver's direction has territories: AMPLIFY... RELEASE... DEEPEN"). If the Weaver used different categories, the REFINE prompt's references would be meaningless. The four categories are an INTERFACE specification between the Weaver and the REFINE builder. This is plumbing (interface compatibility). **Revised verdict: acceptable as interface spec, not creative constraint.** |
| "VERDICT: SHIP / REFINE / RETHINK + one-sentence reason" | PLUMBING (format) | NONE | The verdict is consumed by routing (Step 6.2). The Weaver CHOOSES the verdict; the format is structural. |

---

### Window 3 REFINE Prompt Template (lines 560-658)

| Prompt Element | Classification | Violation? | Details |
|---------------|---------------|------------|---------|
| "You are building the second version of a page." | FREEDOM (context) | NONE | |
| "Your job is not to fix problems. Your job is to make the page more of what it already is." | FREEDOM (framing) | NONE | Strong anti-compliance framing. "More of what it already is" prevents the REFINE builder from treating the Weaver synthesis as a fix list. |
| "You may restructure HTML, rewrite CSS, change layouts, introduce new mechanisms, extend metaphor expression." | FREEDOM (permissions) | NONE | Expansive creative authority. |
| "You may NOT replace the metaphor, violate world-description, ignore opposition map." | See Step 7 analysis | **FREEDOM EROSION** on opposition map | |
| Receiving Principle: "Scroll through the page first. Write 2 sentences about what you experience." | FREEDOM (methodology) | **MINOR FREEDOM EROSION** | Prescribes a specific perceptual onboarding process (scroll first, write impressions, THEN read external inputs). This is proven methodology. But it IS methodology. The plumbing equivalent would be just routing: "Here is the page. Here are the reports." The prescribed sequence (scroll→write→read Weaver→read reflection→read brief→ONE THING) is a creative process guide. **Partial defense:** Like the TC skill for builders and Section 0 for auditors, this is proven creative methodology delivered via plumbing routing. The methodology enables freedom by preventing premature anchoring. **Verdict: acceptable freedom erosion in service of freedom enablement.** |
| "Follow this sequence exactly. Write each checkpoint response before proceeding." | **FREEDOM EROSION** | **FREEDOM EROSION** | "Follow this sequence exactly" is an explicit instruction to obey a creative process sequence. This is the most directive language in any prompt template. Combined with the checkpoint requirements, it converts the REFINE builder's creative process into a mandated sequence. Compare to Window 1 where the receiving principle says "Read the content as a reader first" (suggestive) -- Window 3 says "Follow this sequence exactly" (mandatory). |
| STEP 1: "CHECKPOINT: Write 2 sentences. Do not proceed until you have written them." | PLUMBING (sequencing) | NONE | Impression-locking before external input. Prevents anchoring. The checkpoint is correct plumbing (ordering). |
| "These are territories to enter, not instructions to follow. What you do in each territory is yours." | FREEDOM (enabling) | NONE | Excellent freedom language for the Weaver synthesis framing. |
| STEP 5: "Vocabulary files (these are tools, not instructions)" | FREEDOM (enabling) | NONE | Anti-compliance framing on reference files. |
| "What is the ONE THING you want to do with this page?" | FREEDOM (enabling) | NONE | Forces creative commitment. "Not three things. Not 'address the Weaver's feedback.'" Actively prevents checklist behavior. |
| "BUILD" instruction | FREEDOM | NONE | |
| Reflection instructions (same 3-dimension format) | PLUMBING (format) | NONE | Interface compatibility with the process log. |
| "What would you tell a third builder?" | FREEDOM (continuation) | NONE | Positions the REFINE builder as part of a creative lineage, not a fixer. |

---

## SECTION 3: GATE RUNNER (28 Gates)

### Gate Classification

| Gate | Classification | Violation? | Details |
|------|---------------|------------|---------|
| **Category A: Physics** | | | |
| GR-60 WCAG Contrast | PLUMBING | NONE | Accessibility standard. Binary. Deterministic. |
| GR-67 Footer Text Size | PLUMBING | NONE | Minimum legibility. Binary. |
| **Category B: Identity** | | | |
| GR-03 Container Width | PLUMBING | NONE | 940-960px. Physics. |
| GR-05 Warm Palette | PLUMBING | NONE | R>=G>=B. Deterministic arithmetic. |
| GR-06 Font Trinity | PLUMBING | NONE | Font family presence check. |
| GR-08 No Decorative | PLUMBING | **MINOR BOUNDARY BLUR** | "No standalone HRs, empty spacers, icon-only elements." The first two (HRs, empty spacers) are detectable by DOM inspection (plumbing). "Icon-only elements" might require judgment about what counts as "icon-only." If the gate uses a structural check (element has no text content and contains an SVG/image), it is plumbing. If it requires understanding the element's purpose, it is creep. |
| GR-09 Border Hierarchy | PLUMBING | NONE | 4px/3px/1px presence check. |
| GR-10 Cross-Page DNA | PLUMBING | NONE | Checks for specific structural elements (skip link, heading hierarchy, etc.). All are DOM-inspectable. |
| **Category C: Perception** | | | |
| GR-11 Background Delta | PLUMBING | NONE | RGB arithmetic (>=15 delta). Deterministic. |
| GR-13 Stacked Gap (CSS) | PLUMBING | NONE | Computed style arithmetic (<=120px). |
| GR-14 Stacked Gap (Visual) | PLUMBING | NONE | getBoundingClientRect arithmetic (<=150px). |
| GR-15 Single Margin | PLUMBING | NONE | Single value check (<=96px). |
| GR-18 Ghost Mechanisms | PLUMBING | NONE | Sub-perceptual detection (<0.5px, <0.1 opacity). |
| GR-44 Trailing Void | PLUMBING | NONE | Pixel distance arithmetic (<=300px). |
| **Category D: Anti-Pattern** | | | |
| GR-45 Typography Variation | PLUMBING | NONE | Counts distinct H2 font-size bands (>=2). |
| **Category E: Experiential** | | | |
| GR-61 DPR Validation | PLUMBING | NONE | window.devicePixelRatio === 1. |
| GR-62 Screenshot Quality | PLUMBING | NONE | File count, blank detection. |
| GR-63 Builder Experiential Marker | PLUMBING | **EXCESSIVE PLUMBING** | See analysis under Window 1 prompt template. The GATE is plumbing (string search for comment). The REQUIREMENT it enforces is ceremony. |
| **Category F: Meta** | | | |
| GR-48 Gate Coverage | PLUMBING | NONE | Meta-gate: all required gates produced results. |
| GR-64 Usability Priority | **PLUMBING CREEP** | **PLUMBING CREEP** | "If >= 3/5 auditors flag usability, Weaver Fix #1 contains usability." This gate checks the Weaver's creative output for specific content. The contamination audit flagged this as C-05/C-28. The plan retains it. The Weaver's synthesis is sovereign creative judgment. A gate that checks whether the Weaver's #1 fix recommendation mentions "usability" is compliance enforcement on creative output. **Contamination audit fix NOT applied.** |
| **Category G: Brief Verification** | | | |
| BV-01 World Section | PLUMBING | NONE | String search for section header. |
| BV-02 Calibration Section | PLUMBING | NONE | String search. |
| BV-03 Opposition Section | PLUMBING | NONE | String search. Note: the contamination audit's C-03 was about the OLD BV-03 (forbidden spec language). The NEW BV-03 in the plan is a section header check, not a vocabulary police. The plan resolved this correctly. |
| BV-04 Content Map Section | PLUMBING | NONE | String search. But note: the gate checks for "ARC" per the output instructions, while the section name in the output instructions is "ARC" but the gate name says "Content Map Section." The plan says the brief has 5 sections: WORLD-DESCRIPTION, CALIBRATION, OPPOSITION, ARC, CONTENT MAP. BV-04 checks for "ARC." There is no gate for CONTENT MAP. Minor gap. |
| **Category H: Builder Narration** | | | |
| BV-08 Brief-Output Diff | **PLUMBING CREEP** | **PLUMBING CREEP** | ">=80% coverage across 6 dimensions comparing brief spec to HTML/CSS output." This is the most egregious plumbing creep in the entire plan. The contamination audit flagged it as C-04 (HIGH). The plan retains it as RECOMMENDED. Even as RECOMMENDED (non-blocking), it sends a signal that the builder's output should "match" their brief. The brief is a creative commitment written by the SAME AGENT. If they deviated, they deviated for creative reasons. Coverage checking is compliance verification on a generative process. **Contamination audit fix NOT applied.** |
| GR-43 Self-Evaluation Comment | PLUMBING | **EXCESSIVE PLUMBING** | See analysis under GR-63. Same issue: process ceremony disguised as structural validation. |
| GR-83 INTENT Comment Count | PLUMBING | **EXCESSIVE PLUMBING** | ">=15 INTENT comments with disposition coverage." Requiring 15 specific HTML comments is heavy process ceremony. The builder writes INTENT comments to document their creative decisions. Requiring a minimum COUNT converts self-documentation from a creative tool into a compliance checkbox. The builder who has 10 highly intentional decisions should not be pressured to invent 5 more to hit a count threshold. |
| GR-84 IMPROVEMENTS Comment | PLUMBING | **EXCESSIVE PLUMBING** | "HTML contains IMPROVEMENTS with >=5 items." Same issue as GR-83 and GR-43. Process ceremony. |

**Gate section verdict:** The 28 gates split into: 21 clean plumbing, 1 plumbing creep (GR-64), 4 excessive plumbing (GR-43, GR-63, GR-83, GR-84), 1 plumbing creep retained from old pipeline (BV-08), 1 minor boundary blur (GR-08).

---

## SECTION 4: CONVENTIONS BRIEF ANALYSIS

The conventions brief (Appendix B, lines 1209-1227) contains 16 items. Each classified:

| Convention | Classification | Violation? | Details |
|-----------|---------------|------------|---------|
| Container: 940-960px | PLUMBING (physics) | NONE | Enforced by GR-03. Binary. |
| Font trinity | PLUMBING (physics) | NONE | Enforced by GR-06. Binary. |
| Border hierarchy | PLUMBING (physics) | NONE | Enforced by GR-09. Binary. |
| Prohibited decorations | PLUMBING (physics) | NONE | Enforced by GR-01/02/04. Binary. |
| Warm palette (R>=G>=B) | PLUMBING (physics) | NONE | Enforced by GR-05. Binary. |
| Background delta >=15 RGB | PLUMBING (physics) | NONE | Enforced by GR-11. Binary. |
| Stacked gap <=120px | PLUMBING (physics) | NONE | Enforced by GR-13. Binary. |
| Single margin/padding <=96px | PLUMBING (physics) | NONE | Enforced by GR-15. Binary. |
| Characters per line 45-80 | PLUMBING (physics) | **MISSING PLUMBING** | No gate enforces this. The convention exists in the builder's prompt but is not verified programmatically. If this is important enough to be a convention, it should be a gate. If it's a suggestion, it shouldn't be in the conventions brief (which is framed as "mechanical constraints"). **Fix: either add a gate for CPL 45-80 or move this to the mechanism catalog as a best practice.** |
| WCAG 2.1 AA contrast | PLUMBING (physics) | NONE | Enforced by GR-60. Binary. |
| ARIA landmarks | PLUMBING (accessibility) | **MISSING PLUMBING** | No gate checks for ARIA landmarks (header, main, footer). Same issue as CPL: convention without enforcement. |
| Responsive 768px breakpoint | PLUMBING (physics) | **MISSING PLUMBING** | No gate checks for responsive behavior. The screenshots capture 768px, but no gate verifies that the CSS includes a @media query or that the layout changes at 768px. |
| Self-contained HTML | PLUMBING (physics) | NONE | Implicitly enforced (if external deps are referenced, the page breaks on localhost). |
| "At each zone boundary, multiple channels should reinforce the same direction" | **FREEDOM** | **FREEDOM EROSION** | This is compositional methodology, not a mechanical constraint. "Multiple channels should reinforce" is a creative principle about multi-coherence. It belongs in the mechanism catalog, not in a list framed as "mechanical constraints (absorb these)." Its presence in the conventions brief gives it the weight of a physics constraint when it is actually a compositional aspiration. |
| "Vary transition types: some smooth, some bridges, some resets" | **FREEDOM** | **FREEDOM EROSION** | Same issue. This is compositional guidance, not a mechanical constraint. The builder's creative judgment about transition types should come from the mechanism catalog and their own conviction, not from a conventions list. |
| "Name CSS classes from your metaphor, not generic" | **FREEDOM** | **FREEDOM EROSION** | This prescribes a naming convention (metaphor-derived class names). While it serves the identity system (metaphor-named classes reinforce creative ownership), it is a creative methodology preference, not a mechanical constraint like "container width 940px." |

**Conventions brief verdict:** 10 of 16 items are clean plumbing-physics with gate enforcement. 3 items are plumbing-physics WITHOUT gate enforcement (missing plumbing). 3 items are creative methodology wrongly placed in a mechanical constraints list (freedom erosion).

---

## SECTION 5: CONTAMINATION AUDIT CROSS-REFERENCE

| Contamination Finding | Severity | Fixed in Plan? | Details |
|-----------------------|----------|---------------|---------|
| C-01: "Pipeline" terminology | LOW | PARTIALLY | Plan uses "process" in most places but title says "Implementation Plan" not "Process Plan." Some "pipeline" references remain in Section 4 (line 888: "pipeline used"). |
| C-02: "ALWAYS FLAGSHIP" | MEDIUM | PARTIALLY | Plan removes tier routing but line 888 says "ALWAYS FLAGSHIP, no routing." The tier vocabulary persists in the explanation of what was removed. |
| C-03: BV-03 forbidden spec language | MEDIUM | **FIXED** | The new BV-03 is "Opposition Section" (section header check), not the old "forbidden spec language" gate. Contamination correctly removed. |
| C-04: BV-08 brief-output diff | HIGH | **NOT FIXED** | BV-08 retained as RECOMMENDED (line 745). Still checks creative output coverage against brief specification. |
| C-05: GR-64 usability priority | MEDIUM | **NOT FIXED** | GR-64 retained as REQUIRED (line 730). Still checks Weaver's creative output for keyword. |
| C-06: Category H naming | LOW | PARTIALLY | Category H is still called "Builder Narration Gates." The gates (GR-43, GR-83, GR-84) are all RECOMMENDED, reducing impact. |
| C-07: "Pipeline" terminology in gates | LOW | N/A | Minor. No action needed per contamination audit. |
| C-08: "Pre-Pipeline Setup" header | LOW | **FIXED** | Plan uses "STEP 0: Parse Input and Create Output Directory." |
| C-09: Checklist format | LOW | PARTIALLY | Plan uses table format throughout, not checkbox format. But the tables function similarly. |
| C-10: Tier-numbered questions | MEDIUM | **NOT FIXED** | Plan uses E-01 through E-20 numbering with tier-spanning assignment (line 142-147). The contamination audit recommended Q-01 through Q-20 with no tier metadata. |
| C-11: Brief excerpt for auditors | HIGH | **CONTRADICTED** | Reconciliation #5 says "no brief." Step 4.2 implements brief extraction. Information Isolation list says "No full TC brief (only sections 1+4)." Three different positions in one document. |
| C-12: Orchestrator experiential scan | MEDIUM | **NOT FIXED** | Step 2.5 retains the orchestrator scrolling and judging legibility. Not constrained to "broken rendering only." |
| C-13: Contamination check scans for CSS vocab | MEDIUM | **NOT FIXED** | Step 4.8 retains CSS vocabulary scanning of auditor reports. |
| C-14: "Non-Negotiables" format | LOW | **FIXED** | Plan uses "USER DECISIONS" section, properly separated from process constraints. |
| C-17: "ALWAYS FLAGSHIP" in routing | MEDIUM | See C-02. |
| C-21: Step 4.2 brief extraction | HIGH | See C-11. |
| C-22: Step 4.9 contamination check | MEDIUM | See C-13. |
| C-24: "MAXIMUM COMPLIANCE" framing | MEDIUM | **NOT CHECKED** | The plan's Section 1 opens with "Every programmatic step the orchestrator takes" -- neutral framing. The "MAXIMUM COMPLIANCE" language from 10-orchestrator-plumbing.md does not appear in the plan. Likely fixed. |
| C-26: "Phase gate" framing | MEDIUM | PARTIALLY | Plan uses "[CHECKPOINT]" not "phase gate." But line 66 says "Phase gate" in the reading order position column. Mixed. |
| C-27: Brief-to-auditor contradiction | HIGH | See C-11. |
| C-28: GR-64 in gate list | MEDIUM | See C-05. |
| C-33: REFINE conventions timing | MEDIUM | **ADDRESSED** | Conventions appear in STEP 5 of the REFINE prompt, AFTER the creative commitment (STEP 4). This matches the contamination audit's recommendation to place conventions after creative anchor is established. |

**Contamination cross-reference verdict:**
- **FIXED:** 4 (C-03, C-08, C-14, C-33)
- **PARTIALLY FIXED:** 4 (C-01, C-02, C-06, C-26)
- **NOT FIXED:** 5 (C-04, C-05, C-10, C-12, C-13)
- **CONTRADICTED:** 1 (C-11/C-21/C-27 -- the plan contains BOTH positions)
- **UNCERTAIN:** 1 (C-24)

---

## SUMMARY: ALL VIOLATIONS

### PLUMBING CREEP (plumbing evaluating creative quality) -- 5 findings

| ID | Location | Severity | Description |
|----|----------|----------|-------------|
| PC-1 | Step 2.5 | HIGH | Orchestrator makes perceptual judgment about legibility (the usability scan). Should be constrained to broken rendering or eliminated. |
| PC-2 | Step 4.7 | MEDIUM | Orchestrator checks auditor reports for Section 0 vocabulary ("cold look", "gut", "first impression"). Evaluating creative content. |
| PC-3 | Step 4.8 | MEDIUM | Orchestrator scans auditor reports for CSS vocabulary. Policing creative language. |
| PC-4 | GR-64 | HIGH | Gate checks Weaver's creative output for keyword. Compliance enforcement on creative synthesis. |
| PC-5 | BV-08 | HIGH | Brief-output diff checks coverage of brief specs in HTML. Compliance checking a generative process. |

### FREEDOM EROSION (constraints disguised as suggestions) -- 11 findings

| ID | Location | Severity | Description |
|----|----------|----------|-------------|
| FE-1 | Step 1, output instructions | LOW | Brief section line count targets (~50 lines, ~10 lines per section). Should keep section names, remove size targets. |
| FE-2 | Step 1, checkpoint | LOW | Checkpoint repeats TC phases (Run Phase 0-3). TC skill already owns this. Checkpoint should only say "write brief before continuing." |
| FE-3 | Window 1 prompt, "Work boundary-by-boundary" | LOW | Prescribes compositional process. Builder should choose approach. |
| FE-4 | Window 1 prompt, "set background, typography, spacing, and borders together" | MEDIUM | Specific compositional instruction. Should be in mechanism catalog, not build directive. |
| FE-5 | Window 1 prompt, "Do not invent from scratch when a component serves" | LOW | Biases toward library adoption. Partially counterbalanced by next line. |
| FE-6 | Window 1 reading order rationale, "decisions already made" | LOW | Prematurely forecloses creative revision after seeing mechanism catalog. |
| FE-7 | Window 1 reading order, "not primary frame" | LOW | Cognitive processing instruction about constraint ranking. |
| FE-8 | Step 7, MAY NOT list: "ignore opposition map" | MEDIUM | Creative judgment constraint beyond identity physics. |
| FE-9 | Conventions brief: "multiple channels should reinforce" | MEDIUM | Compositional methodology in a mechanical constraints list. |
| FE-10 | Conventions brief: "vary transition types" | MEDIUM | Creative guidance in mechanical constraints. |
| FE-11 | Conventions brief: "name CSS classes from your metaphor" | LOW | Naming preference in mechanical constraints. |

### BOUNDARY BLUR (genuinely unclear) -- 6 findings

| ID | Location | Severity | Description |
|----|----------|----------|-------------|
| BB-1 | Step 1A, checkpoint TC phase listing | LOW | Redundant process prescription vs. reinforcement of TC skill sequence. |
| BB-2 | Window 1, "absorb these, do not checklist them" | LOW | Meta-plumbing: instruction about how to process plumbing. Novel category. |
| BB-3 | Auditor prompt, Section 0 protocol | LOW | Creative methodology delivered via plumbing routing. Acceptable because it comes from PA skill. |
| BB-4 | Auditor prompt, language constraint | MEDIUM | Format constraint vs. vocabulary restriction. Serves real purpose but has cognitive cost. |
| BB-5 | Step 3.0, BV string search | LOW | Section header check is structural, but brittle if builder uses different vocabulary. |
| BB-6 | Window 3, "Follow this sequence exactly" | MEDIUM | Most directive language in any prompt. Mandates creative process order. |

### MISSING PLUMBING (structural validation that should exist) -- 3 findings

| ID | Location | Severity | Description |
|----|----------|----------|-------------|
| MP-1 | Conventions brief: CPL 45-80 | MEDIUM | Convention without gate enforcement. Either add gate or move to mechanism catalog. |
| MP-2 | Conventions brief: ARIA landmarks | MEDIUM | Convention without gate enforcement. |
| MP-3 | Conventions brief: Responsive 768px breakpoint | MEDIUM | Convention without gate enforcement. Screenshots capture but no gate verifies responsive CSS. |

### EXCESSIVE PLUMBING (overkill validation) -- 4 findings

| ID | Location | Severity | Description |
|----|----------|----------|-------------|
| EP-1 | GR-63 Experiential Marker | LOW | >=100 char HTML comment is ceremony. Builder either scrolled or didn't. |
| EP-2 | GR-43 Self-Evaluation Comment | LOW | Reflection file already captures this. HTML comment version is redundant ceremony. |
| EP-3 | GR-83 INTENT Comment Count | MEDIUM | >=15 INTENT comments converts self-documentation into compliance. |
| EP-4 | GR-84 IMPROVEMENTS Comment | LOW | >=5 items requirement is arbitrary minimum on creative meta-cognition. |

### UNRESOLVED CONTRADICTION -- 1 finding

| ID | Location | Severity | Description |
|----|----------|----------|-------------|
| UC-1 | Step 4.2 vs. Reconciliation #5 vs. Info Isolation list | **CRITICAL** | Three positions on brief-to-auditor flow in one document. Step 4.2 extracts sections 1+4. Reconciliation #5 says "no brief." Info isolation says "no full brief (only 1+4)." Must be resolved to ONE position before implementation. |

---

## VERDICT

The implementation plan has a **solid plumbing foundation** -- Steps 0, 3, 6, 8, and 9 are clean infrastructure with correct boundary placement. The gate runner (Section 3) is mostly well-classified with 21/28 gates as clean plumbing.

**Critical fix needed:** UC-1 (brief-to-auditor contradiction). An implementer reading Section 1 will extract brief sections for auditors. An implementer reading Section 6 will not. This must be resolved (recommendation: follow Reconciliation #5, remove Step 4.2 and update information isolation list).

**High-priority fixes (5):**
- PC-1: Constrain or remove Step 2.5 orchestrator usability scan
- PC-4: Remove GR-64 (gate checks Weaver's creative output)
- PC-5: Remove BV-08 (brief-output diff is compliance on generative process)
- FE-4: Move "set background, typography, spacing, and borders together" to mechanism catalog
- FE-9 + FE-10 + FE-11: Move 3 compositional guidelines out of conventions brief

**Medium-priority fixes (7):**
- PC-2 + PC-3: Remove or reduce Steps 4.7/4.8 content scanning of auditor reports
- FE-8: Remove "ignore opposition map" from REFINE MAY NOT list
- BB-6: Soften "Follow this sequence exactly" to "Follow this sequence"
- MP-1 + MP-2 + MP-3: Either add gates for CPL/ARIA/responsive or move conventions to mechanism catalog
- EP-3: Reduce GR-83 INTENT count requirement or make it advisory-only

**Pattern observation:** The plan's plumbing is STRONGEST in infrastructure steps (file routing, directory creation, gate execution, routing matrix) and WEAKEST at agent interfaces (what auditors receive, what builders are told, what the Weaver's output is checked for). The boundary violations cluster at the seams between plumbing and freedom -- which is exactly where you would expect them.

---

**END OF PLUMBING/FREEDOM BOUNDARY AUDIT**
