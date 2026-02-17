# Middle-Tier Experiment: Master Retrospective

**Date:** 2026-02-16
**Synthesis of:** 10 dimension retrospective reports + original verdict
**Teams:** 8 experiment agents (Phases 0-5), 10 retrospective agents (8 dimensions + 2 adversarial)
**Synthesizer:** master-synthesizer (v2)

---

## I. Executive Summary

The Middle-Tier Experiment asked: **Can an agent produce "designed" (not just "formatted") output by deploying 8-10+ mechanisms across 5 categories WITHOUT metaphor derivation?**

**Answer: YES, with caveats.** The experiment achieved PA-05 DESIGNED (4/4), novelty 3/3 STRONGLY NOVEL, and clear perceptual improvement over the Phase D Variant B baseline. A flat file-bus topology with 8 agents executed in ~35 minutes (8-11x faster than projected), producing a technically compliant, structurally novel HTML page for SYSTEM remote Mac documentation.

**Single most important finding:** Per-category mechanism minimums (M1) produce vocabulary BREADTH that creates perceptual richness. Replacing "sample 2-4 mechanisms" with "1+ per each of 5 categories" unlocked 12 mechanisms, all 5 categories covered, and novel composition -- confirming what all 11 prior research agents predicted. (Source: theory-validation, skill-improvements)

**What must change next:** Apply M1 permanently to the tension-composition skill. Add landmark completeness gates (footer was missing despite being planned). Add builder self-check for CPL and token compliance. Then run Ceiling experiment with SAME content to isolate tier-boundary effects. (Source: methodology, skill-improvements, verdict)

---

## II. Experiment At A Glance

| Dimension | Value |
|-----------|-------|
| **Experiment agents** | 8 (1 Opus planner + 7 Sonnet workers) |
| **Retrospective agents** | 10 (8 dimensions + 2 adversarial) |
| **Wall-clock time** | ~35 minutes (vs 70-100 min estimated for Middle tier) |
| **Projected time** | 4.5-6.5 hours (from early planning documents) |
| **Topology** | Flat file-bus, 1-layer hierarchy (team-lead -> worker) |
| **Input files** | 11 files, ~9,180 lines, ~146K tokens |
| **Output files** | 9 files, 3,504 lines, ~52.5K tokens |
| **Content** | SYSTEM -- Remote Mac Control documentation |
| **Tier** | Middle (12 mechanisms, F-PATTERN, 2 scales) |
| **PA-05 (Designed)** | 4/4 PASS |
| **D3 (Novelty)** | 3/3 STRONGLY NOVEL |
| **Better than Variant B** | YES (3 specific perceptual improvements) |
| **Container width** | 960px (PASS) |
| **Soul compliance** | 7/7 (PASS) |
| **Known defects** | 3: CPL +2, token compliance 66.5%, missing footer |
| **Verdict** | **SUCCESS** |

(Source: verdict, file-architecture, process)

---

## III. Cross-Cutting Findings

These themes emerged across MULTIPLE retrospective reports. They represent the experiment's deepest insights.

### Finding 1: Per-Category Minimums Are Validated But Mechanism-Mechanism Interaction Is Unexplored

**What it is:** M1 (per-category minimums) produced 12 mechanisms across all 5 categories. The page achieved DESIGNED status. But no report examined whether the 12 mechanisms INTERACT coherently or merely coexist independently.

**Reports that surfaced it:** theory-validation (PARTIALLY CONFIRMED -- can't isolate per-category vs higher count), output-quality (mechanisms "correctly applied" but not "felt through"), adversarial-findings (trivially novel combinations), skill-improvements (validated M1 but noted metronomic rhythm)

**Why it matters:** The perceptual audit's verdict -- "specifications applied correctly, not composition felt through" -- suggests vocabulary BREADTH (covering 5 categories) creates "designed" but not "compelling." The gap between "designed" and "felt through" may require mechanism INTERACTION, not just mechanism PRESENCE.

**What to do:** For Ceiling tier, add an explicit mechanism interaction requirement: "For at least 3 mechanism pairs, document how they REINFORCE each other (multi-channel encoding of same dimension)." The border-weight gradient + color encoding pair is the Middle-tier exemplar. (Source: output-quality, theory-validation)

**Confidence:** HIGH that M1 works for Middle tier. MEDIUM that interaction requirements would close the "felt through" gap.

---

### Finding 2: Prompt Slicing Trades Context for Quality -- And the Trade-off May Not Be Worth It

**What it is:** The master prompt (1,760 lines) was sliced into agent-specific views (150-1,000 lines each). This kept agents under 70% token budget and prevented context contamination. But the builder missed the footer despite the plan specifying it, suggesting information loss in slicing.

**Reports that surfaced it:** methodology (footer root cause), adversarial-methodology (SMOKING GUN -- prompt slicing structural flaws), file-architecture (50:1 compression ratio), continuity (two-instance pattern rationale), process (prompt slicing reduced context by 75-92%)

**Why it matters:** The footer bug is a severity-1 defect (WOULD-NOT-SHIP) in an otherwise SUCCESS experiment. The adversarial-methodology report argues this is not an isolated incident but a STRUCTURAL vulnerability: builder saw 40% of master prompt, and the 60% it missed contained implementation guidance, anti-patterns, and reference examples that might have prevented the bug.

**What to do:** Before Ceiling tier, add a landmark completeness gate at Phase 2->3 boundary. The team-lead verifies that ALL planned structural elements (header, footer, all named sections) exist in the HTML before launching auditors. This costs ~2 minutes and catches the most damaging class of prompt-slicing failures. (Source: methodology, adversarial-methodology)

**Confidence:** HIGH that the gate would catch this specific bug. MEDIUM on whether prompt slicing has other hidden failure modes.

---

### Finding 3: The Timing Discrepancy Reveals a Planning Model Error

**What it is:** The experiment took ~35 minutes. The tier model predicted 70-100 minutes for Middle tier. Early planning documents estimated 4.5-6.5 hours. This 8-11x gap is not random -- it reflects a systematic error in how we estimate agent team execution time.

**Reports that surfaced it:** process (8-11x timing discrepancy), methodology (cost-benefit for Ceiling), continuity (timing expectation calibration)

**Why it matters:** The planning model estimates SEQUENTIAL human time (one person doing all phases back-to-back). Agent teams execute PARALLEL phases with separate context windows. The 8-11x factor suggests Ceiling tier (predicted 150-220 minutes) might actually take 30-60 minutes with the same topology, dramatically changing the cost-benefit calculation.

**What to do:** Re-estimate Ceiling tier timing using the PARALLEL AGENT model, not the sequential human model. Factor: ~4-5 minutes per agent (Middle average), 10-12 agents for Ceiling, 3-4 wave parallelism = ~15-25 minutes per wave x 3-4 waves = 45-100 minutes total. (Source: process, methodology)

**Confidence:** MEDIUM. Single data point. Ceiling's metaphor derivation phases may not parallelize as cleanly.

---

### Finding 4: "Designed" Has Two Dimensions -- Vocabulary Fluency AND Compositional Fluency

**What it is:** The Middle-tier page crossed the DESIGNED threshold (PA-05 4/4) through vocabulary fluency (knowing many mechanisms). But the perceptual audit noted it "feels like specifications applied correctly, not composition felt through." This suggests DESIGNED is a binary gate, not a quality spectrum, and the perceptual richness ceiling for vocabulary-alone is "professionally stiff."

**Reports that surfaced it:** theory-validation (vocabulary fluency confirmed, compositional fluency caveat), output-quality ("mechanical rhythm," "limited visual drama"), adversarial-findings (barely passes PA-05b at exactly 2.0x threshold), continuity (Ceiling must add metaphor for compositional fluency)

**Why it matters:** This reframes the tier model. Middle tier achieves vocabulary fluency (breadth across 5 categories). Ceiling tier should achieve compositional fluency (mechanisms chosen to EXPRESS a coherent concept/metaphor). These are qualitatively different capabilities, not just quantitative mechanism counts.

**What to do:** Document this two-dimension model in the tier methodology. Middle = vocabulary fluency (lookup: content -> mechanism). Ceiling = compositional fluency (derivation: metaphor -> mechanism -> expression). Flagship = multi-pattern composition (multiple metaphors interleaved). (Source: theory-validation, output-quality, continuity)

**Confidence:** HIGH. The perceptual audit's "applied correctly vs felt through" distinction maps cleanly to this two-dimension model.

---

### Finding 5: Fresh-Eyes Zero-Context Auditing Finds What Loaded Agents Miss

**What it is:** The perceptual auditor operated with ZERO design system context (no mechanism catalog, no case studies, no master prompt). It found: missing footer, heading spacing violations, top-heavy weight distribution, metronomic rhythm, weak transitions. A context-loaded agent would likely have rationalized these as "acceptable given constraints."

**Reports that surfaced it:** process (fresh-eyes protocol), methodology (perceptual audit surfaced WOULD-NOT-SHIP finding), continuity (perceptual auditor benefits from NOT being clever), adversarial-findings (single-evaluator bias concern)

**Why it matters:** Fresh-eyes auditing exploits a fundamental asymmetry: context-loaded agents develop CONFIRMATION BIAS (they know why decisions were made, so they accept the results). Zero-context agents only see WHAT EXISTS, not WHY it exists.

**What to do:** Maintain zero-context perceptual auditing for ALL tiers. Never give the perceptual auditor the build plan, mechanism catalog, or master prompt. The adversarial review correctly notes single-evaluator bias -- consider adding a SECOND fresh-eyes auditor for Ceiling tier with independent evaluation and majority-vote reconciliation. (Source: process, adversarial-findings, continuity)

**Confidence:** HIGH. Confirmed across 6+ teams in project history.

---

### Finding 6: The Flat File-Bus Topology Has a Sweet Spot at 8-12 Agents

**What it is:** The experiment used flat file-bus topology (team-lead -> 8 workers, zero intermediate captains, 100% file-based communication, zero SendMessage calls). This eliminated coordination overhead entirely.

**Reports that surfaced it:** process (detailed topology analysis, failure modes), file-architecture (information flow diagram), continuity (topology rationale), methodology (cost-benefit)

**Why it matters:** Previous experiments used hierarchical topologies (Phase C: 3-layer, Phase D: 2-layer) with captain -> worker structures that created information bottlenecks, message accumulation, and delayed error detection. Flat file-bus eliminates ALL of these. But it has cognitive load limits: 8 agents comfortable, 12 manageable, 15 approaching limit, 20+ exceeds flat capacity.

**What to do:** Use flat file-bus for Ceiling (expected 10-12 agents). Only introduce hierarchical structure if team size exceeds 15 (Flagship with multi-pass might need this). Gate discipline (verify file existence before launching dependent agents) is the critical mechanism. (Source: process, file-architecture)

**Confidence:** HIGH for 8-agent teams. MEDIUM for 12+.

---

### Finding 7: Evaluation Methodology Has Reproducibility Gaps

**What it is:** The adversarial reviews identified multiple measurement weaknesses: PA-05b passed at exactly 2.0x threshold (zero margin), PA-05d was estimated not measured, D3.1 used "mental blur" (subjective), D3.2 had undefined exclusion criteria, novelty was assessed by a single evaluator who knew the hypothesis.

**Reports that surfaced it:** adversarial-findings (5 challenges to verdict rigor), adversarial-methodology (internal evaluation circularity, Opus vs Sonnet confound)

**Why it matters:** If different evaluators can't reproduce the same results with the same methodology, the experiment's external validity is weak. The adversarial review makes a strong case that "3/3 NOVEL" may reflect confirmation bias as much as actual novelty, and "barely passes" may be treated as equivalent to "clearly passes."

**What to do:** For Ceiling tier: (1) Use automated CSS comparison for D3.2 instead of manual estimation. (2) Use blind evaluation for novelty -- evaluator should not know which page is the experiment. (3) Document pass MARGINS, not just pass/fail. (4) Consider dual-evaluator protocol with reconciliation. (Source: adversarial-findings, adversarial-methodology)

**Confidence:** HIGH that methodology improvements are needed. The current approach is sufficient for directional findings but insufficient for rigorous validation.

---

### Finding 8: Information Isolation May Be Solving a Theoretical Problem

**What it is:** The content-selector was firewalled from the mechanism catalog to prevent "reverse-fitting" (writing content that happens to need pre-selected mechanisms). But the adversarial review argues: (a) we never tested whether reverse-fitting actually happens without the firewall, and (b) the content-selector extracts from EXISTING real content, so mechanism awareness might not change which sections get selected.

**Reports that surfaced it:** adversarial-methodology (firewall untested assumption), process (anti-leakage firewall design), file-architecture (content-selector saw only 8% of master prompt)

**Why it matters:** The firewall adds an extra agent (content-selector), a sequential dependency (must finish before planner starts), and complexity. If reverse-fitting doesn't occur with real content sources, this overhead is waste. The adversarial review predicts 80%+ output similarity between firewalled and non-firewalled content-selectors.

**What to do:** Run Test D (from adversarial-methodology): give a content-selector full mechanism catalog access and compare extraction to the firewalled version. If outputs are 80%+ identical, merge content-selector and planner into a single agent for Ceiling. (Source: adversarial-methodology)

**Confidence:** LOW. Untested hypothesis. Could go either way.

---

### Finding 9: Agent Communication Is Essential For Quality, Not Just Coordination

**What it is:** The Middle-tier experiment used zero inter-agent messaging (flat file-bus, communication only through files). Previous experiments (CD-006, Phase C, Phase D) all used agent messaging. The quality gap is striking: CD-006 scored 39/40, Phase C met ALL 11 criteria, Phase D Variant B hit 18/19 compliance — all WITH messaging. Middle-tier achieved B+ with 3 defects WITHOUT messaging.

**Reports that surfaced it:** process (celebrates zero messaging as efficiency win), output-quality (identifies 'specifications applied correctly not composition felt through'), adversarial-methodology (identifies prompt slicing + isolation as structural vulnerability), experiment-reader synthesis (missing footer smoking gun)

**Why it matters:** The missing footer is the smoking gun. The builder had a plan specifying '#14 Footer Mirror' with full CSS details. But in file-bus isolation, the builder worked alone with no ability to: (a) ask the planner what Footer Mirror should look like, (b) verify completeness against the plan with any teammate, (c) flag uncertainty and get clarification. In a messaging-enabled team, ANY agent could have caught this gap during execution. The quality difference between 'specifications applied correctly' (Middle, no messaging) and 'compositionally confident' (CD-006, with messaging) is partially explained by collaborative refinement — agents catching each other's blind spots, asking clarifying questions, and iterating.

**What to do:** For Ceiling tier and beyond, agents MUST communicate via SendMessage. The flat topology (team-lead → agents directly, no intermediate captains) should be preserved — it's validated for speed and simplicity. But the communication protocol must change from file-only to file + messaging. Minimum required capabilities: (1) builder → planner: ask clarifying questions about plan specifications, (2) auditor → team-lead: flag issues mid-process before proceeding, (3) team-lead → builder: request targeted fixes before declaring phase complete.

**Confidence:** HIGH. The evidence is consistent across multiple experiments and multiple retrospective dimensions. The missing footer is a concrete, traceable consequence of communication isolation.

---

## IV. What Went Right (Ranked by Importance)

### 1. Per-category mechanism minimums produced DESIGNED output
M1 override worked as predicted. 12 mechanisms, all 5 categories covered, PA-05 4/4, novelty 3/3. THE experiment's primary hypothesis was validated. (Source: theory-validation, verdict)

### 2. Flat topology with per-file ownership achieved zero contention
8 agents, zero file conflicts, zero failures, ~35 minutes total. Per-file ownership (1 agent = 1 output file) is the key mechanism. The flat team-lead → worker topology eliminated intermediate captain bottlenecks. (Source: process, file-architecture)

### 3. Two-instance pattern prevented template copying
Builder never saw mechanism catalog, case studies, or master prompt. Result: novel composition (border-weight gradient for security layers), not showcase page copying. (Source: continuity, theory-validation)

### 4. Fresh-eyes perceptual auditing found the critical bug
Zero-context auditor identified missing footer (WOULD-NOT-SHIP) that context-loaded agents would have rationalized. Also found heading spacing violation, metronomic rhythm, top-heavy weight distribution. (Source: methodology, process)

### 5. Pre-baked CSS blocks reduced builder context from 40K to 6K tokens
Copy-paste ready :root, typography, accessibility, and responsive CSS blocks eliminated 85% of builder context while maintaining 100% specification fidelity. (Source: file-architecture)

### 6. Vocabulary fluency theory confirmed with HIGH confidence
Heavy constraint + high mechanism vocabulary = richer output. The constraints (22 prohibitions, 960px container, 7/7 soul) did NOT prevent richness. Vocabulary additions (dark header, code blocks, zone backgrounds) drove every perceptual improvement over Variant B. (Source: theory-validation)

### 7. Content-mechanism fit produced the design highlight
Border-weight gradient (4px -> 3px -> 3px -> 1px) for security criticality encoding was novel, functional, and elegant. Content drove mechanism selection, not the reverse. (Source: output-quality, extrapolations)

### 8. Opus-for-planner, Sonnet-for-everything-else is cost-effective
1 Opus + 7 Sonnet costs ~10% more than all-Sonnet while capturing ~80% of quality improvement. Planner needs creative composition; builder/auditors need execution fidelity. (Source: continuity)

---

## V. What Went Wrong (Ranked by Severity)

### 1. Missing footer (WOULD-NOT-SHIP)
Build plan specified #14 Footer Mirror with full CSS. Perceptual audit saw "no visual ending." Either builder didn't implement it or CSS rendering failed. This is a severity-1 defect that nearly invalidates SUCCESS. Root cause: prompt slicing blind spot -- builder lacked context to prioritize ALL planned elements. (Source: methodology, adversarial-methodology, verdict)

### 2. Token compliance at 66.5% (13.5 points below 80% threshold)
73 raw hex/px values not replaced with CSS custom properties. Systemic builder capability gap: plan specified tokens, builder used raw values. Invisible to users but undermines design system coherence. (Source: methodology, verdict)

### 3. PA-05b passed at exactly 2.0x threshold (zero margin)
Padding range ratio was 64px/32px = 2.0x, the MINIMUM required. A rounding error or measurement variance would flip this to FAIL. The verdict treats "technically passes" as equivalent to "clearly passes." (Source: adversarial-findings)

### 4. CPL at 82 chars (+2 over spec)
Paragraph font-size was 18px instead of 16px. Marginal violation that doesn't affect readability, but the builder had no formula to verify CPL before declaring "done." (Source: methodology, verdict)

### 5. Metronomic rhythm (no spacing variation)
Consistent 48-80px section gaps with NO deliberate variation. Perceptual audit: "spacing patterns repeat without variation, creating mechanical rather than musical flow." The skill has no rhythm variation requirement. (Source: output-quality, skill-improvements)

### 6. Top-heavy weight distribution
Visual weight concentrates in dark header and dissipates through rest of page. Architecture diagram is the only non-header focal point. Page needed 1-2 more "visual moments" in the lower half. (Source: output-quality, verdict)

### 7. Single-evaluator novelty assessment
ALL three novelty tests (D3.1, D3.2, D3.3) run by one evaluator who knew the hypothesis and which page was the experiment. No blind evaluation, no inter-rater reliability. (Source: adversarial-findings)

### 8. Heading spacing ratio violated
Space above headings appeared equal to space below, violating the 1.5:1 minimum for clear content association. This is a binary rule that should have been caught by programmatic audit. (Source: methodology, verdict)

### 9. Zero inter-agent communication (quality cost of file-bus isolation)
Agents communicated ONLY through files — zero SendMessage calls. No agent could ask another agent a question, flag an issue, or request clarification. This directly contributed to the missing footer: the builder had a plan specifying '#14 Footer Mirror' but couldn't ask the planner 'what does Footer Mirror look like?' or verify completeness with any teammate. Compare with previous experiments that used agent messaging: CD-006 scored 39/40 WITH agent communication and iteration; Phase C met ALL 11 criteria WITH hierarchical messaging; Phase D Variant B achieved 18/19 WITH messaging. The Middle-tier WITHOUT messaging: B+ quality, 3 defects, 'professionally stiff.' The flat TOPOLOGY (team-lead → agents directly) is validated and should be kept. The COMMUNICATION PROTOCOL (file-only, zero messaging) must change: agents need the ability to ask clarifying questions, flag issues mid-process, and request iteration. (Source: process, output-quality, adversarial-methodology)

---

## VI. What Surprised Us

### 1. The 8-11x timing discrepancy
Planning documents estimated 4.5-6.5 hours. Experiment took ~35 minutes. This is NOT "we were faster than expected" -- it reveals a fundamental model error (sequential human time vs parallel agent time). Implication: ALL tier timing estimates need recalibration. (Source: process)

### 2. The planner deployed 12 mechanisms, exceeding the 8-10 target
The tier model predicted Middle at 8-10. With per-category minimums, the planner naturally landed at 12 (S:1, H:3, C:4, D:2, N:3). This suggests the Middle natural landing zone is 8-12, not 8-10. (Source: theory-validation)

### 3. "Designed" doesn't feel like "designed"
The page passed all 4 PA-05 sub-criteria and achieved 3/3 novelty signals. Yet the perceptual auditor called it "professionally stiff" rather than "compositionally confident." Passing the DESIGNED gate and FEELING designed are different things. (Source: output-quality, theory-validation)

### 4. The border-weight gradient was the design highlight, not any high-concept element
The novelty evaluator identified a 4px -> 3px -> 1px border progression as the page's strongest compositional choice. Not the dark header, not the architecture diagram, but a BORDER-WIDTH. Small, content-driven decisions create more perceptual impact than large structural ones. (Source: output-quality, extrapolations)

### 5. Zero SendMessage calls achieved fast execution but not quality coordination
Previous experiments relied on agent messaging for coordination. This experiment used only file existence as the communication protocol. Result: faster execution (~35 min) and zero coordination overhead, but the missing footer and 'professionally stiff' quality suggest that 'coordination' should not be conflated with 'zero failures.' Fast execution ≠ quality output. (Source: process, file-architecture, output-quality)

### 6. The adversarial review's strongest challenge is to novelty measurement, not to the success verdict
The red-team agents found the SUCCESS verdict defensible but the NOVELTY assessment methodologically weak. D3.3 (mechanism combination) may measure content uniqueness, not compositional novelty. Only the border-weight gradient is "convincingly unique." (Source: adversarial-findings)

---

## VII. Theory Update Table

| Theory | Pre-Experiment | Post-Experiment | Confidence | Action |
|--------|---------------|-----------------|------------|--------|
| "Sample 2-4 is THE most limiting spec" | All 11 research agents agreed | PARTIALLY CONFIRMED. Per-category minimums work, but can't isolate per-category vs higher count as the driver. | MEDIUM | Apply M1. Design ablation study (count-only vs per-category). |
| "Richness = vocabulary fluency" | Tested in theory only (Name Test + Transfer Test) | CONFIRMED. Heavy constraint + high vocabulary = designed output. Constraints did not prevent richness. | HIGH | Document as established principle. |
| "Middle tier target = 8-10 mechanisms" | Backward-engineered estimate | PARTIALLY UNCONFIRMED. Planner deployed 12. Natural landing zone may be 8-12. | LOW | Widen range to 8-12. Need 5+ Middle builds to confirm. |
| "Per-category minimums produce 8-12 mechanisms" | Predicted from category structure | CONFIRMED. S:1, H:3, C:4, D:2, N:3 = 12 total, within predicted range. | MEDIUM | Adopt as planning assumption. |
| "Two-instance pattern prevents template copying" | Theoretical (continuation bias property) | CONFIRMED. Builder never saw showcases; produced novel composition. | HIGH | Maintain for all tiers. |
| "Container width 940-960px is non-negotiable" | Phase D failure mode analysis | CONFIRMED. 960px passed. Guardrail held. | HIGH | Keep as binary rule. |
| "Flat file-bus works for 8 agents" | New topology, untested at build scale | CONFIRMED. Zero contention, ~35 min, no failures. | HIGH | Adopt for Ceiling (10-12 agents). |
| "Fresh-eyes auditing finds what loaded agents miss" | Historical pattern (6+ teams) | CONFIRMED. Found footer bug, heading spacing, weight distribution. | HIGH | Maintain zero-context auditing protocol. |

(Source: theory-validation for all entries)

---

## VIII. Adversarial Challenges and Responses

### Challenge 1: "4/4 DESIGNED is barely a pass"
**Strength:** STRONG. PA-05b at exactly 2.0x threshold, PA-05d estimated not measured, ship verdict was "YES WITH RESERVATIONS."
**Does it change the verdict?** NO. All 4 criteria met at both viewports. Marginal passes are still passes. But it reveals the need for pass MARGINS in future reporting.
**What would resolve it:** Measure PA-05d programmatically (actual CSS percentage, not estimate). Report margin above threshold for all criteria. (Source: adversarial-findings)

### Challenge 2: "Known defects undermine quality claims"
**Strength:** MODERATE. Valid point about quality drift and accumulated acceptable compromises.
**Does it change the verdict?** NO. The defects are implementation hygiene (token compliance, CPL) and an implementation bug (footer). None reflect design quality failures. But the adversarial review correctly warns against normalizing marginal passes.
**What would resolve it:** Gate defects BEFORE declaring success. Token compliance and CPL should be builder self-checks, not post-hoc audit findings. (Source: adversarial-findings, methodology)

### Challenge 3: "Novelty measurement is subjective and unreproducible"
**Strength:** STRONG. Single evaluator, no blind protocol, D3.2 exclusion criteria undefined, D3.3 may measure content difference not compositional novelty.
**Does it change the verdict?** PARTIALLY. The 3/3 NOVEL score should be interpreted as DIRECTIONALLY NOVEL rather than RIGOROUSLY NOVEL. The border-weight gradient is genuinely novel; other signals are weaker.
**What would resolve it:** Automated CSS comparison for D3.2. Blind evaluation protocol (evaluator doesn't know which page is the experiment). Dual-evaluator with reconciliation. (Source: adversarial-findings, adversarial-methodology)

### Challenge 4: "Prompt slicing caused the footer bug"
**Strength:** STRONG. The builder saw 40% of master prompt. The missing 60% contained implementation guidance and anti-patterns. The footer was specified in the plan but not built.
**Does it change the verdict?** NO for this experiment (footer is implementation bug, plan was correct). YES for process confidence (slicing may have structural flaws).
**What would resolve it:** Test A from adversarial-methodology: run integrated builder (full master prompt) on same content and compare. If footer ships AND quality doesn't degrade, slicing is harmful. (Source: adversarial-methodology)

### Challenge 5: "Opus vs Sonnet confound"
**Strength:** MODERATE. Can't separate two-instance pattern effect from model capability gap. The Opus planner produced an excellent plan; the Sonnet builder had defects.
**Does it change the verdict?** NO. The experiment tested the SYSTEM (topology + slicing + M1), not individual model capability. But it's a valid confound for attributing credit.
**What would resolve it:** Run same experiment with Sonnet planner. If plan quality drops significantly, the effect is model capability. If similar, the effect is the two-instance pattern. (Source: adversarial-methodology)

---

## IX. Skill Modification Priority List

### MUST DO NOW (Before Any Next Experiment)

0. **Require inter-agent communication protocol** for all multi-agent experiments. Agents must use SendMessage for clarifying questions, issue flagging, and iteration requests. File-bus file writing remains the primary output mechanism, but agents must not be isolated from each other. The missing footer defect is direct evidence that file-only communication creates quality gaps. (Source: process, output-quality, adversarial-methodology, Finding 9)

1. **M1: Replace "sample 2-4 mechanisms" with per-category minimums** in tension-composition skill. Three locations: Phase 0D Tier Classification, Phase 4.0 Mechanism Extraction, and any remaining "sample 2-4" language. Validated by 11 research agents + Middle experiment. (Source: skill-improvements, Section 1.1)

2. **Add landmark completeness gate** to building protocol. Binary check: header exists, footer exists, all named sections from plan exist in HTML. Phase 2->3 boundary. (Source: methodology, Defect 3)

3. **Add CPL formula to builder prompt.** Formula: `(container-content-width) / (font-size-px) / 0.6 = CPL`. Builder must verify 45-80 CPL before writing file. (Source: methodology, Defect 1)

### SHOULD DO BEFORE CEILING

4. **Add token compliance self-check to builder prompt.** Builder scans own CSS for raw hex/px values before writing file. Target: >= 80% var() references. Include approved raw value contexts (border-width: 1px|3px|4px). (Source: methodology, Defect 2)

5. **Add rhythm variation requirement (3-transition minimum).** Skill currently has no minimum. Add to Phase 4.2B: "Page must have >= 3 DIFFERENT section transition treatments (spacing change, zone background change, visual break element)." (Source: skill-improvements, Section 1.2)

6. **Add heading spacing ratio as BINARY rule.** 1.5:1 above/below ratio for h2/h3. Currently judgment-based, which means ~0% agent compliance. (Source: skill-improvements, methodology)

7. **Refine PA-05 sub-criteria.** PA-05b threshold 2.0x is too tight (passed with zero margin). Consider 1.8x or add ">= 2.0x with 0.2x margin." PA-05d should be measured programmatically, not estimated. (Source: adversarial-findings, skill-improvements)

### COULD DO LATER

8. **Add mechanism impact profiles to catalog.** HIGH/MEDIUM/LOW visual salience for each mechanism. Helps builders select mechanisms for desired perceptual balance. (Source: extrapolations, Section 1.2)

9. **Add content affinity documentation to catalog.** Which content structures favor which mechanisms. (Source: extrapolations, Section 1.3)

10. **Add discrete vs progressive application modes to border-weight documentation.** The Middle experiment used progressive mode (gradient encoding continuous security dimension). Catalog doesn't distinguish modes. (Source: extrapolations, Section 1.1)

11. **Correct CPL classification.** CPL is currently in Critical-10 but is actually a B9.2 guardrail, not a soul constraint. Move to separate "Guardrails" checklist. (Source: methodology, Defect 1)

---

## X. Methodology Changes for Ceiling Tier

### HIGHEST PRIORITY: Enable Inter-Agent Communication

**NON-NEGOTIABLE for Ceiling tier.** The flat file-bus topology proved that file-only communication sacrifices quality for speed. Agents MUST be able to communicate via SendMessage while preserving the flat topology structure.

**Required communication capabilities:**
- **Builder → Planner:** Ask clarifying questions ('What does Footer Mirror look like? Is the border-top red or using --clr-accent?')
- **Auditor → Team-Lead:** Flag issues mid-process ('I see a missing section — should I continue or wait for a fix?')
- **Team-Lead → Builder:** Request targeted iteration ('Footer is missing from the HTML — add it before we proceed to evaluation')
- **Planner → Builder:** Proactive guidance ('The metaphor requires spacing compression in the lower third — prioritize mechanisms #4 and #5 there')

**What NOT to change:** The flat topology (team-lead launches agents directly, no intermediate captains) is validated. Per-file ownership (1 agent = 1 output file) is validated. The change is ONLY to the communication protocol: from file-only to file + messaging.

**Evidence:** CD-006 (39/40) and Phase C (11/11 criteria) both used agent messaging. Middle-tier (B+ with defects) did not. The quality gap is partially explained by collaborative refinement that messaging enables.

---

### Phase -1: Planning & Setup
- **Re-estimate timing** using parallel agent model (4-5 min/agent x waves), not sequential human model.
- **Design ablation**: consider running Test A (integrated builder) and Test D (contaminated content-selector) as cheap controls.
- **Pre-define pass MARGINS** for all criteria (report actual values, not just pass/fail).
(Source: process, adversarial-methodology)

### Phase 0: Content Selection
- **Evaluate merging content-selector + planner** if Test D shows firewall is unnecessary overhead.
- **Keep F-PATTERN or derive new pattern** based on Ceiling metaphor requirements.
(Source: adversarial-methodology)

### Phase 1: Planning
- **Planner stays Opus.** Metaphor derivation requires highest creative capability.
- **Add mechanism INTERACTION requirement**: "For 3+ mechanism pairs, document how they reinforce each other."
- **Raise per-category minimums** for Ceiling: S:2+, H:2+, C:3+, D:2+, N:2+ (natural landing 11-15).
(Source: continuity, output-quality)

### Phase 2: Build
- **Add builder self-check gate** before file write: CPL formula, token compliance scan, landmark completeness.
- **Include CPL verification formula** in builder prompt.
- **Builder MUST see metaphor** (not just mechanism names) to implement metaphor-driven spatial layouts.
(Source: methodology, continuity)

### Phase 3: Validation
- **Keep dual-audit** (programmatic + perceptual in parallel). Zero contention confirmed.
- **Perceptual auditor stays zero-context.** Never sees plan, catalog, or master prompt.
- **Consider adding SECOND perceptual auditor** for Ceiling (dual evaluation with reconciliation).
- **Programmatic audit generated FROM build plan** (checks what was planned, not generic list).
(Source: methodology, adversarial-findings)

### Phase 4: Evaluation
- **Blind novelty evaluation.** Evaluator receives 3 pages without labels (Middle, reference A, reference B). Identifies which is newest.
- **Automated D3.2** (CSS value extraction + comparison) before human judgment.
- **Consider Opus for novelty evaluator** (detecting subtle structural fingerprints).
(Source: adversarial-findings, continuity)

### Phase 5: Verdict
- **Report pass margins** for all criteria.
- **Distinguish "clearly passes" from "technically passes."**
- **Include adversarial self-check** in verdict (3 strongest challenges to the verdict, with responses).
(Source: adversarial-findings)

---

## XI. File Architecture for Next Experiment

### Required Input Files
| File | Purpose | Status |
|------|---------|--------|
| Master execution prompt | Domain knowledge source-of-truth | MUST CREATE for Ceiling (different from Middle's) |
| Prompt slicing strategy | Agent-specific views | UPDATE from Middle version |
| Execution plan (THE PLAN) | Phase choreography | MUST CREATE for Ceiling |
| Content selection output | From Middle experiment | REUSE (same content for tier comparison) |
| Mechanism catalog | 18 mechanisms + rules | UPDATE with impact profiles if ready |
| Prohibitions | 22 soul constraints | REUSE unchanged |
| Tokens.css | 65 design tokens | REUSE unchanged |
| Perceptual auditing skill | 48 PA questions | UPDATE with PA-05 refinements |

### Expected Output Files (Ceiling)
| File | Created By | Phase |
|------|-----------|-------|
| 01-metaphor-derivation.md | metaphor-agent (NEW) | Phase 1 |
| 02-build-plan.md | planner | Phase 2 |
| ceiling-page.html | builder | Phase 3 |
| 03-programmatic-audit.md | programmatic-auditor | Phase 4a |
| 04a-perceptual-audit.md | perceptual-auditor-1 | Phase 4b |
| 04b-perceptual-audit.md | perceptual-auditor-2 (NEW) | Phase 4b |
| 05-comparison-report.md | comparative-auditor | Phase 5a |
| 06-novelty-assessment.md | novelty-evaluator | Phase 5b |
| 07-VERDICT.md | verdict-synthesizer | Phase 6 |

### Naming Convention
- Prefix: 2-digit phase number
- Suffix: agent role descriptor
- HTML: tier-name + `-page.html`
- Directory: `ephemeral/ceiling-experiment/`

(Source: file-architecture)

---

## XII. Open Questions

### High Priority (Must Answer Before Ceiling)

1. **Is per-category the driver, or just higher count?** The experiment can't isolate which factor drove improvement. An ablation study (8-10 total vs 1+ per category on same content) would resolve this. (Source: theory-validation, Theory 1)

2. **Does the builder need the FULL mechanism catalog entry, or just the name?** The builder saw only mechanism names from the plan. Did this cause the footer bug (builder didn't know what "Footer Mirror" entails)? (Source: adversarial-methodology)

3. **What's the actual CSS composition percentage (PA-05d)?** The perceptual audit estimated >=15%. The programmatic audit could have measured it. This must be measured, not estimated. (Source: adversarial-findings)

### Medium Priority (Should Answer Eventually)

4. **What's the natural Middle-tier mechanism landing zone?** One experiment produced 12. Need 5+ experiments to establish the actual distribution. (Source: theory-validation, Theory 3)

5. **Does the information isolation firewall matter for real content sources?** Test D would answer this cheaply. (Source: adversarial-methodology)

6. **Is the Opus/Sonnet split necessary, or would all-Sonnet produce similar results?** Cost optimization question. (Source: adversarial-methodology, Challenge 5)

### Low Priority (Interesting But Not Blocking)

7. **Can "felt through" be operationalized?** The perceptual audit distinguishes "applied correctly" from "felt through" but there's no metric for it. Is this the Ceiling/Flagship differentiator? (Source: output-quality, theory-validation)

8. **What's the cognitive load ceiling for flat file-bus?** Process report estimates 15 agents. Needs empirical testing. (Source: process)

---

## XIII. The Narrative Arc

### Where We've Been

The project started with showcase pages (DD-006, CD-006) that scored 39-40/40 -- beautiful, richly composed, but built through iterative multi-pass exploration that takes 4-6 hours. The question became: can we SYSTEMATIZE this quality through a reproducible pipeline?

Phase D tested the pipeline at FLOOR level. Result: Variant B achieved 18/19 compliance and 4/5 novelty, proving the pipeline works but revealing "sample 2-4 mechanisms" as the critical bottleneck. Eleven research agents independently identified this as THE limiting specification, and proposed per-category minimums as the fix.

### Where We Are Now

The Middle-Tier Experiment tested that fix. Per-category minimums (M1) produced DESIGNED output (PA-05 4/4) with NOVEL composition (D3 3/3) in 35 minutes using 8 agents. The flat file-bus topology proved faster, simpler, and more reliable than any previous team architecture.

**But the experiment also revealed the CEILING of vocabulary-alone richness.** "Specifications applied correctly, not composition felt through" -- this is the Middle-tier perceptual boundary. To cross it, pages need not just vocabulary breadth but compositional PURPOSE: mechanisms chosen to EXPRESS something, not just to COVER categories.

**The experiment also revealed a second critical insight: agent isolation costs quality.** The flat file-bus topology — zero SendMessage calls, communication only through files — produced fast execution (35 minutes) but contributed to the missing footer, token compliance gaps, and the overall 'professionally stiff' feeling. Compare this with CD-006 (39/40 score), built with agent messaging and collaborative iteration. The quality gap between 'specifications applied correctly' (Middle, no messaging) and 'compositionally confident' (CD-006, with messaging) is not fully explained by tier difference — it's partially explained by agents being able to catch each other's mistakes, ask clarifying questions, and iterate on implementation. The Ceiling experiment must combine the DESIGN improvements (M1 per-category minimums, landmark gates, rhythm variation) with COMMUNICATION improvements (inter-agent messaging). Neither alone is sufficient.

### Where We're Going

**Immediate next: Apply M1 permanently.** The skill modification is the experiment's most concrete output. Change three lines, permanently raise the universal floor.

**Then: Ceiling experiment with SAME content.** Using identical SYSTEM documentation eliminates content variables and allows direct tier comparison. Ceiling adds metaphor derivation -- the question is whether metaphor creates genuine compositional divergence or derivative pattern-matching.

**Equally important: Ceiling agents must COMMUNICATE.** The experiment proved that design methodology improvements (M1, pattern-based deployment) and team communication improvements (SendMessage, collaborative refinement) are INDEPENDENT quality drivers. Middle validated the design improvements in isolation. Ceiling must validate both together. If Ceiling with messaging produces 'felt through' quality while Middle without messaging produced 'professionally stiff,' we'll have strong evidence that BOTH ingredients — metaphor AND collaboration — are required for compositional fluency.

**The deeper question:** Is the gap between "designed" and "felt through" bridgeable by PROCESS (more mechanisms, better interaction requirements, metaphor derivation)? Or is it an emergent property that can't be engineered -- only enabled by providing vocabulary and constraints, then trusting the compositional act itself?

The Middle-Tier Experiment suggests the former: process improvements (M1, landmark gates, rhythm variation) demonstrably move output up the quality spectrum. But the perceptual auditor's "professionally stiff" verdict is a reminder that compositional quality has a dimension that checklists can't fully capture. The Ceiling experiment will test whether metaphor -- giving the page a REASON for its choices -- is the missing ingredient.

---

*This retrospective synthesizes findings from 10 dimension reports totaling ~12,800 lines across process, output quality, theory validation, methodology, continuity, skill improvements, extrapolations, adversarial findings, adversarial methodology, and file architecture analyses. All claims cite their source reports.*

---

## Changelog

### v2 (2026-02-16) — Critical Communication Priority Update
- **Moved** 'zero SendMessage' from What Went Right (Section IV) to What Went Wrong (Section V, item #9)
- **Reframed** Section VI surprise #5 from celebrating zero messaging to noting the speed-vs-quality trade-off
- **Added** Finding 9: Agent Communication Is Essential For Quality (Section III)
- **Added** HIGHEST PRIORITY methodology change for Ceiling: inter-agent messaging (Section X)
- **Added** item #0 to Skill Modification Priority List: require communication protocol (Section IX)
- **Updated** Narrative Arc with agent isolation insight and Ceiling communication requirement (Section XIII)
- **Evidence basis:** CD-006 (39/40 with messaging) vs Middle-tier (B+ without messaging); missing footer as smoking gun for communication isolation; process/output-quality/adversarial reports identifying quality cost of file-bus isolation
- **Trigger:** User identified that the retrospective incorrectly conflated process efficiency (zero failures) with output quality (compositional confidence), and that previous high-scoring experiments all used agent messaging
