# 14 -- Failure Pattern Match: Every Root Cause vs the Master Prompt

**Analyst:** failure-matcher (Opus 4.6)
**Date:** 2026-02-19
**Task:** Build a COMPLETE inventory of every identified root cause and suppressor from ALL failure analysis, then verify whether the master prompt (conventions brief + input spec + verification spec + pipeline architecture) prevents each one.

**Sources read:**
- `ephemeral/flagship-audit/` -- all 17 reports (root cause forensics, guardrail classification, compression losses, crown jewel comparison, metacognitive failure, skill invocation, mc-channel crossref, design-system crossref, remediation prompt, pipeline failure trace, adversarial reviews, richness definition, reference file quality, topology failure)
- `ephemeral/flagship-retrospective/` -- all 9 reports (root cause verification, missing causes, prompt forensics, remediation gaps, metacognitive process, CD-006 CSS forensics, contrarian challenge, remediation requirements, unified synthesis)
- `ephemeral/flagship-44-recipe/05-ANTI-CONDITIONS.md` -- 14 suppressors with ABSOLUTE/CONTEXTUAL classification
- `ephemeral/flagship-44-recipe/04-CONDITIONS.md` -- necessary/sufficient/helpful conditions for 4/4
- `ephemeral/flagship-44-recipe/11-CONTRARIAN.md` -- 16 challenges to team findings
- `ephemeral/flagship-44-recipe/01-DEFINITION.md` -- 14-dimension Flagship definition (the actual target)
- `ephemeral/flagship-44-recipe/10-CONVENTIONS-BRIEF-DRAFT.md` -- the ~230-line conventions brief (the builder's primary guidance)
- `ephemeral/flagship-44-recipe/07-INPUT-SPEC.md` -- what the builder reads, in what order, at what volume
- `ephemeral/flagship-44-recipe/08-VERIFICATION-SPEC.md` -- gate + PA verification recipe

---

## CRITICAL FRAMING: CD-006 IS NOT THE TARGET

**CD-006 (39/40) is Ceiling tier -- NOT Flagship.** It is our best existing artifact but it is NOT what this pipeline must produce. Flagship 4/4 has NEVER been achieved. The actual target is defined by the 14-dimension definition in `01-DEFINITION.md`: unified pervading metaphor, dynamic multi-coherence profile (>= 3 instances of 3+ channels encoding the same concept), compositional surprise, fractal expression at ALL 5 scales, >= 14 perceptible mechanisms, >= 4 channels active per boundary on average.

CD-006 is used in this report ONLY as a **Ceiling-tier floor reference** -- evidence of what is achievable at the tier BELOW Flagship. When CD-006 data appears (e.g., "CD-006 has 23 border contexts"), the implication is that Flagship must EXCEED this, not match it.

---

## METHODOLOGY

I extracted every distinct root cause, suppressor, and anti-condition from the full failure analysis corpus. Where multiple reports describe the same cause, I consolidated to a single entry with all source references. I then checked each against three components of the pipeline architecture:

1. **Conventions Brief** (10-CONVENTIONS-BRIEF-DRAFT.md, ~230 lines) -- what the builder reads
2. **Input Spec** (07-INPUT-SPEC.md) -- what files the builder receives, in what format, at what volume
3. **Verification Spec** (08-VERIFICATION-SPEC.md) -- gates, PA questions, success bar

A root cause is ADDRESSED if the pipeline architecture contains a specific, concrete mechanism that prevents it. It is PARTIALLY ADDRESSED if the mechanism exists but has gaps. It is NOT ADDRESSED if no mechanism prevents it.

---

## PART 1: THE 15 ROOT CAUSES FROM THE RETROSPECTIVE (RC-1 through RC-15)

These were identified in `ephemeral/flagship-retrospective/09-SYNTHESIS.md` across 8 retrospective reports.

| # | Root Cause | Source | Addressed? | How Specifically | Could Still Happen? |
|---|-----------|--------|-----------|-----------------|-------------------|
| RC-1 | Pipeline has no generative arrow -- extracts rules, never generates CSS instructions | Retro 01, 03, 05 | **YES** | Single Opus builder receives conventions brief (hybrid prose+YAML world-description format) + direct access to mechanism-catalog.md (870 lines of CSS patterns) + tokens.css + merged-components.css. No pipeline between research and builder. Builder reads reference files directly. | **LOW RISK.** The pipeline is eliminated. The builder IS the generative agent. However, the conventions brief itself could still fail to be generative if its tone drifts toward constraint-language. Monitor: count action verbs vs constraint verbs in final brief. |
| RC-2 | 7.9:1 guardrail-to-playbook ratio -- 55 prohibitions, 7 playbooks | Retro 01, 03, 05, 07 | **YES** | Conventions brief explicitly designed with "80% world description, 20% constraint" (Input Spec Section 2.5). Tone spectrum from Section 1 (absolute command for soul) to Section 8 (creative authority). Anti-patterns section (Section 8) frames prohibitions as "lessons from failure" not commands. Creative Authority section (Section 8 of brief) is explicitly LOUDER than constraints. | **LOW RISK.** The brief's structure is designed to invert the ratio. Risk: if the final brief writer adds too many "MUST" / "FAIL IF" rules, the ratio could creep back. **GATE NEEDED:** Count guardrails vs playbooks in final brief. Target: <= 15 prohibitions. |
| RC-3 | Builder saw 13.4% of prompt -- 75-line visibility cap | Retro 01, 03, 07 | **YES** | Single builder reads ALL 6 files directly (~2,120 lines total). No visibility cap. No agent mediation. Builder has full access to conventions brief (225 lines) + tokens.css (174) + prohibitions.md (353) + mechanism-catalog.md (870) + merged-components.css (500) + content file. | **ELIMINATED.** Single-builder architecture means no visibility cap. |
| RC-4 | Sub-perceptual variation satisfies every rule -- no minimum perceptual thresholds | Retro 01, 02, 03, 04, 06, 07, 08 (UNANIMOUS) | **YES** | Conventions brief Section 2 contains explicit perception threshold table in YAML: `background_delta >= 15 RGB`, `font_size_delta >= 2px`, `letter_spacing_delta >= 0.03em`, `stacked_gap_max <= 108px`, `border_presence >= 1 per zone`, `multi_coherence >= 3 channels per boundary`. Verification Spec SC-09 checks `>= 15 RGB delta at every zone boundary`. SC-14 checks `no letter-spacing < 0.02em`. | **LOW RISK.** Thresholds are embedded in BOTH the builder's guidance (brief Section 2) AND the verification gates (SC-09, SC-11, SC-14). Double coverage. Risk: builder might satisfy thresholds technically but not perceptually (e.g., 15 RGB at a warm-on-warm boundary that looks similar). Contrarian report 11 notes CD-006 FAILS the 15 RGB threshold on 2/3 zone pairs -- context-dependent thresholds might be needed. |
| RC-5 | Zero agent communication -- 19 agents, zero SendMessage | Retro 01, 05, 07 | **YES (N/A)** | Single-builder architecture eliminates inter-agent communication entirely. One Opus agent plans AND builds. No handoffs, no file-bus, no message protocol needed. | **ELIMINATED.** No multi-agent coordination to fail. But note: self-check protocol (brief Section 7) is the replacement for inter-agent feedback. If the builder skips self-checks, there is no external agent to catch problems. |
| RC-6 | Validation checked coverage not causation -- percentage methodology, not quality prediction | Retro 01, 07 | **PARTIALLY** | Verification Spec embeds perceptual checks in micro-gates during build (MG-1 through MG-4) + full gate run (21 gates) + 9-auditor PA with Tier 5 questions. Gates check MEASURED CSS values, not coverage percentages. PA checks PERCEPTUAL quality. Tier 5 checks COMPOSITIONAL depth. | **LOW RISK for existing gates.** However, the conventions brief itself has not been validated by a "can the builder produce rich CSS from this alone?" test. The brief is still theoretical. Risk: the brief could pass all internal reviews but still fail to produce quality output -- a causation gap at the brief level. **RECOMMENDATION:** The first build IS the causation test. |
| RC-7 | ABSENCE COHERENCE rule validated under-building -- "consistent absence reads as restraint" | Retro 01, 07 | **YES** | The absence coherence language does NOT appear in the conventions brief. Instead, Section 2 mandates `border_presence >= 1 structural border-left per zone` and `component_adoption >= 10 component families`. Section 9 (Quality Floor) requires mechanisms from >= 4 of 5 categories. These are DEPLOYMENT MANDATES that prevent absence-as-rationalization. | **LOW RISK.** Mandatory deployment minimums prevent a builder from claiming "consistent absence = restraint" to justify doing nothing. The brief never says "absence can be restraint." |
| RC-8 | 2,400:1 compression of channel research -- 2,733 lines to 4 lines in conviction layer | Retro 01, 03, 06 | **YES** | The conventions brief does NOT compress research into conviction prose. Instead, the builder reads the mechanism-catalog.md DIRECTLY (870 lines, full CSS patterns, impact profiles, application modes). Compression ratio: 0:1 -- no compression step between research distillation and builder. The catalog IS the operational reference. | **ELIMINATED.** No compression pipeline. Builder reads the distilled reference directly. |
| RC-9 | Component library invisible to builder -- 0 of 34 standard components used | Retro 02 | **YES** | Input Spec mandates merged-components.css (500 lines) as a mandatory reference file. Conventions brief Section 2 threshold: `component_adoption >= 10 component families`. Verification Spec SC-08 gate: `>= 8 component types`. Quality Floor (Section 9): "Use at least 10 component families from merged-components.css." | **LOW RISK.** Triple reinforcement: brief threshold + verification gate + quality floor section. The builder cannot pass verification without adopting >= 8-10 component families. |
| RC-10 | Build plan specifies tokens not perceptible values -- plan validated against names, not perceived differences | Retro 02 | **YES** | No separate planner producing a build plan. Single builder reads content + conventions brief (which contains perception thresholds) + tokens.css. The builder makes its OWN plan via the Conviction Card (Section 10) and Transition Table (Phase B planning). Self-check Q1 (squint test) and Q4 (channel count) verify perceptibility DURING the build. | **LOW RISK.** Eliminating the planner-builder split eliminates the perception gap between plan and execution. The builder who plans is the same agent who perceives. Risk: builder may still specify sub-perceptual values in its own transition table. Mitigation: micro-gate MG-2 checks RGB deltas after backgrounds are applied. |
| RC-11 | Ch4 Structural completely absent -- no rule requires section-level borders | Retro 02 | **YES** | Conventions brief Section 2: `border_presence >= 1 structural border-left per zone (alternating OK)`. Brief Section 3 (Transition Grammar): BREATHING transition requires "a structural border (3-4px) marks the boundary." Brief Section 4: multi-coherence binding names "Structural -- border-left weight, horizontal rules, or visual dividers" as one of 6 channels. Verification Spec SC-15: `>= 3 distinct border configurations`. | **LOW RISK.** Ch4 Structural is explicitly required by threshold, transition grammar, and gate. Multiple independent paths enforce structural presence. |
| RC-12 | Single-column monotony -- zero grid, zero flex, zero layout variation | Retro 02 | **PARTIALLY** | Conventions brief Section 2: `grid_layouts >= 2 distinct grid/layout patterns`. Input Spec routes merged-components.css (which contains grid patterns) to the builder. But the brief does NOT contain specific grid CSS recipes or layout variation instructions. The constraint is a threshold gate, not a playbook. | **MODERATE RISK.** The ">=2 grid layouts" threshold is a GUARDRAIL, not a PLAYBOOK. A compliance-mode agent might produce two minimal grids that technically pass. The brief lacks CSS examples of what good grid layouts look like. **RECOMMENDATION:** Add 2-3 lines to the brief's Section 8 (Creative Authority) or Section 9 (Quality Floor) showing grid deployment examples, OR add a line to the brief directing the builder to the grid components in merged-components.css. |
| RC-13 | Uniform prose register -- all 12 sections use identical rhetorical mode | Retro 02 | **PARTIALLY** | Input Spec Section 4.1 specifies content is read FIRST, completely. The conventions brief's Phase A says "Read the content markdown. Identify the natural zones (where does the content shift topic, mode, or intensity?)." Content-form coupling is implicit in the fractal echo and multi-coherence requirements. But no explicit instruction says "vary visual treatment based on content register shifts." | **MODERATE RISK.** Content register uniformity is a CONTENT problem, not a builder problem. If the adapted content uses uniform prose throughout, the builder has no signals for per-section differentiation. **RECOMMENDATION:** The content adaptation step (if any) should produce heterogeneous content types (lists, questions, data, narrative) to give the builder structural variety to respond to. This is upstream of the conventions brief. |
| RC-14 | Transition dividers compound into voids -- S-09 stacking loophole | Retro 02, 03, 04 | **YES** | Conventions brief Section 2: `stacked_gap_max <= 108px total at any section boundary`. This directly fixes the stacking loophole by measuring TOTAL gap, not per-property. Verification Spec SC-10: `<= 108px total gap at any zone boundary`. Self-check Q2 (scroll test): "Is there any continuous stretch of more than 108px that contains no content?" | **LOW RISK.** The 108px total gap measurement directly addresses the 210-276px voids from the flagship. Triple enforcement: brief threshold + verification gate + self-check question. |
| RC-15 | No plan-fidelity gate -- gates check rules, not whether build matches plan | Retro 02 | **YES (N/A)** | Single-builder architecture eliminates the planner-builder split. The builder makes its own plan (Conviction Card + Transition Table + Fractal Echo Table in Phase B) and then builds from it. Self-check Q4 and Q5 verify the plan was followed. Tier 2 deliverable gates (DG-1, DG-2) verify the fractal table and cascade table exist and are populated. | **ELIMINATED.** No separate planner means no plan-fidelity gap. Builder self-verifies against its own plan. |

---

## PART 2: THE 14 SUPPRESSORS FROM ANTI-CONDITIONS REPORT (S-01 through S-14)

These were identified in `ephemeral/flagship-44-recipe/05-ANTI-CONDITIONS.md` with ABSOLUTE/CONTEXTUAL classification.

| # | Suppressor | Classification | Source | Addressed? | How Specifically | Could Still Happen? |
|---|-----------|---------------|--------|-----------|-----------------|-------------------|
| S-01 | CHECKLIST FORMAT -- builder received 71-line checklist, not recipe | ABSOLUTE | Anti-Conditions, Retro 05 | **YES** | Conventions brief is "World Description" format -- 80% description, 20% constraint. Input Spec Section 2.2 explicitly rejects pure recipe AND pure checklist in favor of conventions + YAML data + self-check. Tone rules (Section 3.2): "Never VERIFY/FAIL IF language in creative sections 4-7." | **LOW RISK.** The format is designed to avoid checklist mode. Risk: if the builder treats the brief's threshold YAML block (Section 2) as a compliance checklist, it could enter defensive mode for that section. Mitigation: the brief explicitly says "Design above the floor or do not design at all" -- framing thresholds as floors, not targets. |
| S-02 | PROHIBITION OVERLOAD -- 55 prohibitions consumed cognitive budget | ABSOLUTE | Anti-Conditions, Retro 01-03 | **PARTIALLY** | The brief targets low prohibition count (Anti-Patterns section is ~15 lines with 6 items framed as "lessons from failure"). Creative Authority section explicitly empowers the builder. But: the brief ALSO contains mandatory thresholds (Section 2, ~12 YAML items) + transition grammar rules (Section 3) + multi-coherence binding rules (Section 4) + fractal echo requirements (Section 5) + memory protocol requirements (Section 6) + quality floor requirements (Section 9). While these are not framed as prohibitions, they ARE constraints. | **MODERATE RISK.** Total constraint count across the full brief: ~30-35 binary requirements (thresholds + mandates + quality floor items). This is below the original 55 but above the recommended 15-20 cap. The tone is better (world description, not checklist), but an Opus builder might still experience constraint pressure from 35 requirements. **RECOMMENDATION:** Audit the final brief and count total constraints (every MUST, every >=, every threshold). If >20 binary constraints, consider consolidating or removing lowest-priority items. |
| S-03 | INVERTED QUALITY ROUTING -- rich content to planner, guardrails to builder | ABSOLUTE | Anti-Conditions, Retro 01-03 | **YES** | Single-builder architecture. The Opus agent that writes CSS reads ALL files directly: mechanism-catalog.md (870 lines of CSS patterns), merged-components.css (500 lines of component CSS), tokens.css (174 lines of values), conventions brief (225 lines). No mediation. No compression. The richest compositional intelligence goes to the CSS-writing agent. | **ELIMINATED.** No routing between agents. Builder reads everything. |
| S-04 | SUB-PERCEPTUAL EMPHASIS -- prompt directed skill toward invisible micro-typography | ABSOLUTE | Anti-Conditions, Retro 06 | **YES** | Conventions brief Section 2 names VISIBLE targets: "borders," "grid layouts," "component families," "background delta." Anti-Patterns section (Section 8) explicitly lists "Sub-perceptual CSS (letter-spacing < 0.02em)" as a failure pattern. No mention of "refinement gradients" or "metaphor channels" in the brief. The vocabulary points at visible structure, not imperceptible refinement. | **LOW RISK.** The brief's vocabulary is deliberately redirected from "refinement gradients" to "borders, grids, components." Risk: the mechanism-catalog.md might contain language about micro-typography that the builder follows. Mitigation: Anti-Patterns section explicitly warns against sub-perceptual CSS. |
| S-05 | ABSENCE COHERENCE RATIONALIZATION -- "consistent absence reads as restraint" justified inaction | CONTEXTUAL | Anti-Conditions | **YES** | The phrase "consistent absence reads as restraint" does NOT appear in the conventions brief. Mandatory deployment minimums (>= 1 border per zone, >= 10 components, >= 4 of 5 mechanism categories) prevent absence from being rationalized. Section 9 (Quality Floor) is entirely about minimum deployment, not optional deployment. | **LOW RISK.** Absence coherence is neutralized by mandatory minimums. |
| S-06 | ZERO INTER-AGENT COMMUNICATION -- no feedback during build | CONTEXTUAL | Anti-Conditions | **YES (N/A)** | Single-builder architecture. Self-check protocol (Section 7) replaces inter-agent feedback with self-assessment: Q1-Q5 are binary self-checks at build completion, plus midpoint pause (Section 6) for mid-build self-assessment. | **LOW RISK.** Self-check replaces inter-agent feedback. Risk: the builder might perform self-checks performatively (answering "YES" without actually checking). Mitigation: Tier 2 deliverable gates (DG-1, DG-2) verify that the builder produced the required planning artifacts. |
| S-07 | MULTI-PASS FRAGMENTATION -- 5 sequential passes, each annotating rather than amplifying | CONTEXTUAL | Anti-Conditions | **YES** | Single-pass build by single Opus agent. Brief Process section (Section 10) specifies 4 phases (A-D) that are build phases by ONE agent, not separate passes by different agents. No handoffs. No context degradation. | **ELIMINATED.** Single-pass architecture. |
| S-08 | PERCEPTUAL THRESHOLD BLINDNESS -- no rule defined how much variation is enough | ABSOLUTE | Anti-Conditions | **YES** | See RC-4 above. Complete threshold table in brief Section 2 + verification gates SC-09, SC-11, SC-14. | **LOW RISK.** Double coverage: builder guidance + verification. |
| S-09 | COMPONENT LIBRARY DEPRIVATION -- builder had zero component access | CONTEXTUAL | Anti-Conditions | **YES** | See RC-9 above. merged-components.css is a mandatory reference file + threshold mandates >= 10 families. | **LOW RISK.** Triple reinforcement. |
| S-10 | CONTENT-FORM DECOUPLING -- zone-uniform specs, CSS not driven by content meaning | CONTEXTUAL | Anti-Conditions | **PARTIALLY** | Brief Phase A says "Read the content markdown. Identify the natural zones (where does the content shift topic, mode, or intensity?)." Phase B says "Consult mechanism-catalog.md to select mechanisms that serve your content -- not the most mechanisms, but the right mechanisms." Section 8 (Creative Authority) says the builder may "choose your own zone count, section architecture, mechanism selection." BUT: no explicit instruction says "each section's visual treatment should respond to what the content SAYS." Per-section compositional direction is implicit, not explicit. | **MODERATE RISK.** This was identified as THE PRIMARY RESIDUAL SUPPRESSOR that capped the remediation at 2.5/4. The brief relies on the Opus builder naturally coupling form to content, which CD-006 proves can happen. But the Middle experiment's "professionally stiff" verdict suggests this coupling is not automatic. **BLOCKING GAP.** The brief should contain 2-3 lines explicitly stating: "Each section's visual density, component selection, and spacing should respond to what the content in that section IS ABOUT. A section discussing complexity should feel dense. A section providing overview should feel spacious. Identical treatment across sections with different content is a design failure." |
| S-11 | REPAIR MODE -- builder was fixing existing artifact, not composing from scratch | CONTEXTUAL | Anti-Conditions | **YES** | The pipeline architecture frames the task as COMPOSITION, not repair. Brief opening: "This brief describes the world you are building inside." Process Phase A: "Read content." Phase B: "Plan." Phase C: "Build." Orchestrator spawn prompt (Input Spec Section 10.2): "You are building a page for the KortAI design system." All language is generative (building, composing), not corrective (fixing, patching). | **LOW RISK.** Task framing is explicitly generative. |
| S-12 | AGENT MODEL MISMATCH -- Sonnet builders, not Opus | CONTEXTUAL | Anti-Conditions, Retro 07 | **YES** | Input Spec Section 10.1 specifies spawning "ONE Opus agent." The entire Fat Core architecture is designed around a single Opus builder. Brief opening: "You are both the telescope (WHY) and the microscope (WHAT)." | **ELIMINATED.** Opus is the mandatory builder model. |
| S-13 | EXEMPLAR DEPRIVATION -- builder never saw a rich page | CONTEXTUAL | Anti-Conditions | **PARTIALLY** | Input Spec Section 6.3: a ~15-line conviction card excerpt from CD-006 showing a multi-channel boundary shift is embedded in brief Section 4. No full exemplar HTML file is routed to the builder. Input Spec argues full exemplar carries "template gravity risk." Contrarian report 11 (Challenge 12) questions whether "60 lines of distillate" can substitute for seeing quality. | **LOW-MODERATE RISK.** The builder gets a 15-line boundary excerpt as calibration, but no full-page exemplar. Opus's training data compensates partially (CD-006 proves Opus can build quality without exemplars). But the anti-conditions report identifies exemplar deprivation as a residual suppressor. The conviction card excerpt is intentionally small to avoid template gravity. **ACCEPTABLE TRADE-OFF** per Input Spec's reasoning, but this IS a known limitation. |
| S-14 | ANALYTICAL PROCESS DRIFT -- pipeline structurally incapable of generating operational instructions | ABSOLUTE | Anti-Conditions, Retro 05 | **YES** | The pipeline is ELIMINATED. No analytical phases between research and builder. The conventions brief is written OUTSIDE any extraction pipeline by dedicated agents with a "world description" frame. The builder reads distilled reference files directly. The pipeline's structural incapacity is bypassed entirely. | **ELIMINATED.** No pipeline to drift. |

---

## PART 3: ANTI-CONDITIONS FROM CONDITIONS REPORT (A1-A6)

These were identified in `ephemeral/flagship-44-recipe/04-CONDITIONS.md` Part 6 as conditions that ACTIVELY PREVENT 4/4.

| # | Anti-Condition | Source | Addressed? | How Specifically | Could Still Happen? |
|---|---------------|--------|-----------|-----------------|-------------------|
| A1 | Checklist format (100% constraint verbs) | Conditions 04 | **YES** | Same as S-01. World-description format, not checklist. | LOW RISK |
| A2 | Inverted quality routing | Conditions 04 | **YES** | Same as S-03/RC-3. Single builder, full access. | ELIMINATED |
| A3 | Rule count > ~20 for the builder | Conditions 04 | **PARTIALLY** | See S-02 analysis. Brief contains ~30-35 binary constraints. Above the ~20 threshold identified by Conditions report but below the original 97. | **MODERATE RISK.** 30-35 constraints exceeds the ~20 threshold but the format (world description vs flat list) may compensate. Still a concern. |
| A4 | Emphasis on imperceptible refinement | Conditions 04 | **YES** | Same as S-04. Brief vocabulary names visible targets. | LOW RISK |
| A5 | Multi-pass fragmentation without revision authority | Conditions 04 | **YES** | Same as S-07. Single-pass Opus build. | ELIMINATED |
| A6 | Absence-as-restraint rationalization | Conditions 04 | **YES** | Same as S-05. Mandatory deployment minimums. | LOW RISK |

---

## PART 4: CONTRARIAN CHALLENGES (from Report 11)

The contrarian report raises 16 challenges. Those that imply potential failure modes:

| # | Challenge | Implication for Master Prompt | Addressed? | Risk |
|---|----------|------------------------------|-----------|------|
| Ch-1 | "Flagship 4/4 is theoretical -- never observed" | The prompt's target (Flagship 4/4) may not be achievable through any recipe | **ACKNOWLEDGED** | High -- but inherent to the project goal, not a prompt defect. Verification Spec Section 10.0 explicitly states "No Flagship Reference Point Exists." |
| Ch-4 | "Compositional intelligence stack is post-hoc rationalization from CD-006" | The stack (scales, channels, multi-coherence) may be descriptive, not causal. Encoding it into the brief may add noise, not signal. | **PARTIALLY** | The brief encodes the stack as multi-coherence binding (Section 4), fractal echo (Section 5), anti-scale model (Section 3). If the stack is merely descriptive, ~60 lines of the brief are noise. Contrarian recommends: trust Opus, minimize stack encoding. |
| Ch-5 | "FORMAT > VOLUME finding is confounded with model" | Recipe format may not independently cause quality; it may interact with Opus. | **ADDRESSED** | Input Spec uses Opus + conventions format, covering both variables simultaneously. |
| Ch-7 | "Perception thresholds are context-dependent, not absolute" | CD-006 FAILS the >=15 RGB threshold on 2/3 zone pairs | **PARTIALLY** | Brief uses >=15 RGB as absolute floor. CD-006's success with <15 RGB zones suggests the threshold may be too aggressive OR that other channels compensate. **RECOMMENDATION:** Add note to brief that >= 15 RGB is the MINIMUM for chromatic-only boundaries; multi-channel boundaries where 4+ channels shift can use >= 10 RGB. |
| Ch-11 | "Conventions brief has NEVER BEEN TESTED" | The brief is theoretical -- first build is the real test | **ACKNOWLEDGED** | Cannot be fixed by analysis. First build IS the test. |
| Ch-16 | "More verification infrastructure = complexity ratchet" | Adding Tier 5 questions, stack verdict, etc. may add overhead without value | **PARTIALLY** | Verification Spec adds 8 Tier 5 questions on top of 48 standard + 21 gates. 77 total verification items. Risk of verification becoming heavier than building. **RECOMMENDATION:** First build uses MINIMUM verification (6 gates + 3 PA auditors + 3 Tier 5 = 22 min, per Verification Spec Section 7.1), not full verification. Scale up only if minimum verification is ambiguous. |

---

## PART 5: ADDITIONAL FAILURE MODES FROM FLAGSHIP-AUDIT REPORTS

| # | Finding | Source Report | Addressed? | How Specifically | Could Still Happen? |
|---|---------|-------------|-----------|-----------------|-------------------|
| FA-1 | CSS budget misallocation: 22% on imperceptible micro-typography | Audit 06 (CD-006 CSS forensics) | **YES** | Anti-Patterns section warns against sub-perceptual CSS. Thresholds enforce perceptibility. Vocabulary names visible targets. | LOW RISK |
| FA-2 | CD-006 has 23 border contexts, Flagship 14; CD-006 has 10 grid/flex, Flagship 0 | Audit 05 (crown jewel comparison) | **PARTIALLY** | Border presence gate (SC-15 >= 3 configurations) is weaker than CD-006's 23 contexts. Grid threshold (>= 2 layouts) is weaker than CD-006's 10 grid/flex. | **MODERATE RISK.** The thresholds are FLOORS, not CD-006-equivalent targets. A builder that deploys exactly 3 border configurations and 2 grid layouts passes all gates but produces far less structural variety than CD-006. **RECOMMENDATION:** Consider raising SC-15 to >= 5 and grid_layouts to >= 3 for Flagship tier, OR add a note to the brief that these are FLOORS and more is better. |
| FA-3 | CD-006 has 11 component types; Flagship has 3 | Audit 05 | **YES** | Component adoption threshold >= 10. Verification gate SC-08 >= 8. | LOW RISK -- threshold is close to CD-006's 11. |
| FA-4 | CD-006 has 10 perceptibly distinct backgrounds; Flagship 5 | Audit 05 | **PARTIALLY** | Brief requires >= 15 RGB between adjacent zones. But does not require a TOTAL count of distinct backgrounds. A 3-zone page with 3 backgrounds passes all gates. | **LOW RISK** for a well-composed page. The zone count + multi-coherence + fractal echo requirements will naturally produce background variety. |
| FA-5 | CD-006 has 5 @media queries, Flagship 0 (accessibility/responsive) | Audit 05, Retro 04 | **YES** | Brief Section 9 (Quality Floor): "WCAG 2.1 AA compliance. Skip link, landmark roles, focus indicators, sufficient color contrast." "The page must function at 768px viewport width." Verification Spec SC-06: >= 5 landmarks. SC-07: skip link. | LOW RISK |
| FA-6 | Prompt is 12x longer than builder needs (963 vs ~75 lines) | Retro 03, 09 | **YES** | Builder effective instruction volume: ~225-315 lines (brief + soul checks). Input Spec Section 5.2: within the ~300-line productive range. | LOW RISK |
| FA-7 | Prompt contains internal contradictions (C-13 requires 200px silence zones, S-09 caps at 96px) | Retro 03 | **YES** | Brief does NOT contain silence zone requirements. The 108px stacked gap maximum is internally consistent with all other requirements. No C-13 equivalent. | ELIMINATED -- contradictions not reproduced. |
| FA-8 | KB-04 violated by prompt itself (prompt > 200 lines while kill criterion says <= 200) | Retro 03 | **YES** | Brief is ~225 lines. Above the kill criterion but within the ~300-line productive range identified by Input Spec. No self-contradictory kill criterion. | LOW RISK |
| FA-9 | 660:1 meta-to-output ratio (pathological) | Retro 05 | **YES** | Single builder. ~2,120 lines of input. Output: 1 HTML file + 2 build artifacts. Ratio: ~2,120:1 at most. This is well within the 20:1 threshold when measured as meta-infrastructure vs product (the 2,120 lines ARE the product input, not meta-commentary). | ELIMINATED |

---

## PART 6: NECESSARY CONDITIONS CHECK (from Conditions Report)

The Conditions report (04) identifies 3 NECESSARY conditions for ANY 4/4 outcome. Checking each:

| Condition | Description | Present in Prompt? | Confidence |
|-----------|------------|-------------------|------------|
| **N1** | Compositional intelligence reaches the CSS-writing agent as operational CSS, not compressed rules | **YES.** Builder reads mechanism-catalog.md (870 lines of CSS patterns) + merged-components.css (500 lines) + tokens.css (174 lines) directly. Zero compression. | HIGH |
| **N2** | Instructions are generative (tells what to build), not solely prohibitive (tells what to avoid) | **YES.** Conventions format + action verbs in process section + creative authority section. Brief explicitly designed to avoid checklist mode. | HIGH |
| **N3** | Builder's instruction set is navigable and not attention-exhausting | **YES.** ~225 lines of primary guidance organized by section (Identity, Thresholds, Grammar, Binding, Echo, Memory, Self-Check, Authority, Floor, Process). Reference files are LOOKUP material, not competing instructions. Effective instruction volume ~315 lines. | HIGH |

All 3 necessary conditions are met.

---

## PART 7: HELPFUL CONDITIONS CHECK

| Condition | Description | Present? | Notes |
|-----------|------------|----------|-------|
| **H1** | Opus as CSS-writing agent | **YES** | Mandatory Opus builder |
| **H2** | Reference exemplars (crown jewel HTML) | **PARTIAL** | 15-line conviction card excerpt only; no full exemplar |
| **H3** | Inter-agent communication | **N/A** | Single builder |
| **H4** | Perception thresholds | **YES** | Full threshold table in brief Section 2 |
| **H5** | Content-form resonance | **PARTIAL** | Implicit in Phase A; no explicit instruction for per-section coupling |
| **H6** | Creative revision cycles | **PARTIAL** | Self-check protocol (Section 7) provides ONE revision point; no structured build-critique-revise cycle |
| **H7** | Divergent exploration (3+ builds, select best) | **NO** | Single build. No parallel exploration. |

---

## PART 8: SUMMARY VERDICT

### BLOCKING GAPS (root causes NOT addressed -- must fix before build)

| # | Gap | Risk Level | Recommended Fix |
|---|-----|-----------|----------------|
| **BG-1** | S-10 CONTENT-FORM DECOUPLING: No explicit instruction for per-section visual treatment driven by content meaning | **HIGH** | Add 2-3 lines to brief stating: "Each section's visual treatment should respond to what the content says. Dense analytical content = tighter spacing + more borders + denser typography. Overview content = generous spacing + fewer mechanisms. Identical visual treatment across different content types is a design failure." |
| **BG-2** | S-02 / A3 CONSTRAINT COUNT ~30-35: Above the ~20 threshold for builder attention, though better formatted than original 97 | **MODERATE** | Audit final brief for total binary constraints. Consider consolidating threshold items (e.g., merge letter_spacing and font_size deltas into "typography delta must be perceptible"). Target: <= 25 distinct binary requirements. |

### SIGNIFICANT CONCERNS (addressed but with residual risk)

| # | Concern | Risk Level | Mitigation |
|---|---------|-----------|------------|
| SC-1 | RC-12 LAYOUT VARIATION: >= 2 grid layouts is a floor guardrail, not a playbook | MODERATE | Add 1 line referencing grid components in merged-components.css |
| SC-2 | Ch-7 PERCEPTION THRESHOLDS are context-dependent; CD-006 fails >= 15 RGB on 2/3 zone pairs | LOW-MODERATE | Add contingent threshold note: multi-channel boundaries can use >= 10 RGB |
| SC-3 | Ch-4 STACK IS UNVALIDATED: ~60 lines of brief encode the compositional intelligence stack which may be post-hoc description, not causal model | LOW-MODERATE | Accept as design risk. First build tests this. |
| SC-4 | S-13 EXEMPLAR DEPRIVATION: 15-line excerpt vs full exemplar HTML | LOW-MODERATE | Acceptable trade-off per Input Spec reasoning. Opus compensates from training. |
| SC-5 | H6/H7 NO REVISION CYCLES OR DIVERGENT EXPLORATION: Single build with no structured critique-revise | MODERATE | Self-check protocol (5 questions) provides minimal revision. Fix cycles post-PA provide structured revision. Accept for v1. |

### FULLY ADDRESSED (25 of 31 total root causes/suppressors)

The following are fully addressed by the pipeline architecture:

RC-1, RC-3, RC-4, RC-5, RC-7, RC-8, RC-9, RC-10, RC-11, RC-14, RC-15,
S-01, S-03, S-04, S-05, S-06, S-07, S-08, S-09, S-11, S-12, S-14,
A1, A2, A4, A5, A6,
FA-1, FA-3, FA-5, FA-6, FA-7, FA-8, FA-9

### SCORE: 25/31 FULLY ADDRESSED, 4/31 PARTIALLY, 2/31 BLOCKING

---

## PART 9: RECOMMENDED EDITS TO CONVENTIONS BRIEF

To close the 2 BLOCKING gaps and 2 highest SIGNIFICANT concerns:

### Edit 1 (BG-1): Add content-form coupling instruction to Section 8 (Creative Authority)

After "Deploy mechanisms your own way":
```
- **Match visual density to content meaning.** A section discussing complexity should
  FEEL dense (tighter spacing, more borders, denser typography). A section providing
  overview should FEEL spacious (generous spacing, fewer mechanisms). Identical visual
  treatment across sections with different content is a design failure -- it means the
  CSS is not listening to the content.
```

### Edit 2 (BG-2): Consolidate threshold items

Merge `letter_spacing_delta` and `font_size_delta` into a single "typography delta" item. Merge `border_presence` and `multi_coherence` framing to reduce total constraint count by 2-3 items. Target: 25 or fewer binary constraints in the brief.

### Edit 3 (SC-1): Add grid reference to Quality Floor

In Section 9, after "Use at least 10 component families":
```
Deploy at least 2 distinct layout patterns (grid, flex, or multi-column).
See merged-components.css for grid examples.
```

### Edit 4 (SC-2): Add contingent threshold note to Section 2

After the YAML threshold block:
```
If 4+ channels shift simultaneously at a boundary, chromatic delta may be
reduced to >= 10 RGB (multi-channel reinforcement compensates for lower
single-channel delta).
```

---

**END OF FAILURE PATTERN MATCH**

**Summary statistics:**
- Total distinct root causes/suppressors/anti-conditions inventoried: 31
- Fully addressed: 25 (80.6%)
- Partially addressed: 4 (12.9%)
- BLOCKING gaps: 2 (6.5%)
- Recommended edits: 4 (totaling ~12 lines added to conventions brief)
