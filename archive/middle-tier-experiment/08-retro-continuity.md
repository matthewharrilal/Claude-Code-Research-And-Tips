# Middle-Tier Retrospective: Knowledge Transfer Document

**Purpose:** Wisdom transfer for future Claude instances running Ceiling and Flagship experiments
**Audience:** A brilliant but zero-context Claude instance, 6 months from now
**Date:** 2026-02-16
**Author:** continuity-architect (Middle-Tier retrospective team)

---

## START HERE: The Five Things You MUST Know First

Before diving into files, process details, or experiment design, internalize these five conceptual anchors:

### 1. This Is Not About Freedom — It's About Vocabulary Fluency

**The core misunderstanding to avoid:** You might think the Middle-tier experiment tested whether "loosening constraints produces richer output." This is backwards.

**The actual finding:** Showcase pages (DD-006, CD-006) were MORE rigid than pipeline output, not less. At CD stage, vocabulary-type rigidity outnumbered constraint-type rigidity 62 to 16 — a 4:1 ratio. Their richness came FROM rigidity (having 18 expressive mechanisms to compose with), not despite it.

**The Middle-tier question:** Can an agent produce "designed" (not just "formatted") output by deploying 8-10 mechanisms across 5 categories WITHOUT metaphor derivation? Does breadth of vocabulary (per-category coverage) create perceptual richness even without multi-channel coherence?

**Why this matters for Ceiling:** The Ceiling tier adds metaphor derivation. If Middle produces "designed" output without metaphor, then Ceiling's metaphor should produce DERIVATIVE output (mechanisms chosen to match metaphor, creating showcase-adjacent structure). If Ceiling is ALSO novel, it suggests metaphor derivation creates genuine divergence rather than forcing pattern-matching.

### 2. "Designed vs Formatted" Is a Perceptual Category, Not a Mechanism Count

**The distinction that matters:**
- **Formatted:** Specifications applied correctly. Passes all binary checks. Looks professional. Feels like "a competent person followed the rules."
- **Designed:** Has spatial atmosphere. Feels like somewhere you want to spend time. Looks like "a designer made compositional choices for THIS content."

**The Middle-tier test:** PA-05 operationalized this with 4 binary sub-criteria:
- PA-05a: >= 2 non-default layout elements at 1440px
- PA-05b: >= 2.0x padding range ratio
- PA-05c: Visual hierarchy visible under 20px Gaussian blur
- PA-05d: >= 15% non-framework CSS

**The result:** Middle scored 4/4 at BOTH viewports. It crossed the threshold from formatted to designed.

**The critical insight:** The perceptual auditor called the red accent line "the most designed element" — not the 12 mechanisms, not the F-pattern structure, but a 3px border. Compositional intent shows up in SMALL decisions made for THIS content, not just in mechanism deployment counts.

### 3. The Gap Between Variant B and Showcases Is Saturation, Not Absence

**Variant B (Phase D baseline):** 7 mechanisms, 18/19 compliance, 4/5 novelty, genuine metaphor derivation ("scientific calibration laboratory")

**Showcase pages (DD-006, CD-006):** 16-18 mechanisms, 39/40 score, multi-channel coherence

**The critical finding from 11 research agents:** The gap is technique DENSITY (mechanisms per page), not technique ABSENCE (missing capabilities). Variant B derives genuine identity through the pipeline — it just deploys 5/44 CSS techniques vs showcases' 23-44/44.

**The compression problem:** The skill says "sample 2-4 mechanisms." The pipeline compresses 337 research findings into that instruction — a 50:1 information loss. The real gap is ITERATIVE DISCOVERY (showcase pages accumulated techniques across 4-6 stages) vs SINGLE-PASS APPLICATION (pipeline runs once).

**Why this matters for Ceiling:** Middle tested whether raising the mechanism floor (8-10 across 5 categories) produces perceptually richer output. It does. Ceiling tests whether adding metaphor derivation MAINTAINS that richness or creates derivative pattern-matching.

### 4. Container Width 940-960px Is THE Primary Failure Mode

**Phase D evidence:** 4/5 validation pages violated container width. This was a MORE damaging defect than soul violations (border-radius, box-shadow), token compliance, or mechanism counts.

**Why it matters so much:** Container width determines characters per line (CPL), which determines readability. Metaphor-driven width collapse (narrowing for "intimacy" or "focus") breaks the fundamental contract between design and reader experience.

**The guardrail:** 940-960px at 1440px viewport. Express narrowing through INTERNAL padding (32px horizontal minimum), never external width reduction.

**Middle-tier compliance:** 960px exactly. Passed.

**For Ceiling:** Metaphor derivation creates pressure to violate this. "Geological core" might want narrow columns for "compression." "Manuscript margins" might want wider for "breathing room." The answer is NO. Guardrails override metaphor every time.

### 5. The Two-Instance Pattern Exploits Continuation Bias

**The core LLM property:** Once a Claude instance generates text, continuation bias makes it VERY difficult to self-revise. An instance that writes "this will be good" has strong bias toward later concluding "this is good."

**The two-instance solution:**
- **Instance 1 (Planner):** Reads full context, makes compositional decisions, writes the plan
- **Instance 2 (Builder):** Reads ONLY the plan (plus copy-paste CSS blocks), implements without seeing master prompt

**Why this works:** The builder has no context EXCEPT the plan. It can't pattern-match against showcase pages it hasn't seen. It can't anchor to master prompt framing it hasn't read. The plan IS the builder's entire world.

**Middle-tier validation:** The builder agent never saw the mechanism catalog, case studies, or master prompt. It read the 7-section plan from the planner and implemented. Result: novel composition (3/3 novelty signals), not template copying.

**For Ceiling:** The planner will derive a metaphor, specify mechanisms to encode that metaphor, and hand the builder a plan. The builder still never sees showcase pages. This isolation is CRITICAL.

---

## Decision Rationale Archive

Every key decision in the Middle-tier experiment was made for a reason. Understanding WHY prevents cargo-culting the process without understanding the principles.

### Why Flat File-Bus (Not Captain→Worker)?

**The decision:** 8 agents, each writing ONE output file. No captain coordinating workers. No hierarchical messaging. Each agent receives its prompt, writes its file, exits.

**The rationale:**
- **Zero contention:** Per-file ownership eliminates all coordination overhead. No agents waiting for others' outputs.
- **Simple failure recovery:** If agent 3 fails to write its file, the plan specifies a backup agent to run the same prompt. No cascade failures.
- **Transparent debugging:** Each output file is independent. You can read any file to understand what that agent saw and did.

**The alternative (captain→worker):** Recovery agents (captains doing work directly) are MORE reliable than captain→worker hierarchies (confirmed across 6+ teams in project history). When a worker fails, the captain often fails to detect it or retries the same broken approach.

**Middle-tier result:** 8 agents executed sequentially. 7 files written. Zero failures. Total execution time ~35 minutes (vs 3-5 hour estimate in early planning — see timing discrepancy below).

**For Ceiling:** Use the same flat file-bus topology. The Ceiling planner will need MORE context (metaphor derivation adds Phases 1-3), but the builder/auditors can use identical prompts with different thresholds.

### Why Opus for Planner, Sonnet for Everything Else?

**The decision:**
- Planner: Opus 4.6 (most capable model)
- Content-selector, builder, all auditors, verdict synthesizer: Sonnet 4.5

**The rationale:**
- **Planner needs creative composition:** Selecting mechanisms, justifying content-mechanism fits, designing section flows, specifying exact CSS values. This is the HIGHEST creative load in the entire pipeline.
- **Builder needs execution fidelity:** Following the plan exactly. Sonnet excels at "read spec, implement spec."
- **Auditors need fresh-eyes reactions:** The perceptual auditor especially benefits from NOT being too clever. Sonnet's straightforward analysis produces genuine first-impression reactions.

**Cost analysis:** 1 Opus planner + 7 Sonnet workers is FAR cheaper than 8 Opus agents. The planner is ~30% of total compute; making it Opus adds ~10% to total cost while capturing ~80% of quality improvement.

**Middle-tier validation:** The Opus planner produced a 1,011-line plan with 12 mechanisms, per-category justifications, and exact CSS values. The Sonnet builder implemented it with 4/4 PA-05, 3/3 novelty. The Sonnet perceptual auditor gave genuine fresh-eyes reactions ("the red accent line is the most designed element").

**For Ceiling:** Keep Opus for planner. The metaphor derivation phases (1-3) require even MORE creative capability than Middle's content-structure mapping. Consider Opus for the novelty evaluator as well (it needs to detect subtle structural fingerprints).

### Why Per-Category Minimums (Not Aggregate Count)?

**The decision:** Deploy AT LEAST 1 mechanism from EACH of 5 categories:
- Spatial: #5, #6, #15
- Hierarchy: #1, #4, #11
- Component: #2, #9, #10, #17
- Depth/Emphasis: #3, #7, #16
- Structure/Nav: #8, #12, #13, #14, #18

**The problem with "sample 8-10 mechanisms total":** An agent could deploy 8 hierarchy mechanisms and zero spatial mechanisms. Result: hierarchically rich but spatially flat. No guaranteed breadth.

**The per-category logic:** Each category addresses a DIFFERENT perceptual dimension:
- Spatial = information density flow across the page
- Hierarchy = importance encoding within sections
- Component = internal structure of callouts/cards/tables
- Depth/Emphasis = layering and focal points
- Structure/Nav = page chrome (header/footer/nav)

**The breadth requirement:** Ensuring 1+ from each category guarantees the page has VOCABULARY DIVERSITY, not just VOCABULARY VOLUME.

**Middle-tier result:** S:1, H:3, C:4, D:2, N:3 = all 5 categories covered. The distribution was uneven (Component had 4, Spatial had 1), but breadth was guaranteed. The perceptual audit noted spatial atmosphere ("zone backgrounds create spatial sections") despite only 1 spatial mechanism.

**The natural landing:** With per-category minimums, the TOTAL naturally lands at 8-12 for Middle tier. You don't count to 8 — you ensure 1+ per category, and the total emerges.

**For Ceiling:** Use the same per-category minimums, but raise the thresholds: Spatial: 2+, Hierarchy: 2+, Component: 3+, Depth: 2+, Structure: 2+. This produces 11-15 naturally, which is the Ceiling range.

### Why F-PATTERN (Not CRESCENDO or Other Patterns)?

**The decision:** Use F-PATTERN density rhythm for the Middle-tier page.

**The content analysis:** SYSTEM remote Mac documentation has:
- Dense technical reference sections (security layers, threat model tables)
- Sparse introductory prose (what it is, why it matters)
- Top-heavy information architecture (most critical info in first 2 sections)

**The F-PATTERN fit:** Dense-sparse alternation following natural eye scanning. Dense left column (table of contents, key features), sparse right (explanations). Best for reference and documentation.

**The alternatives:**
- CRESCENDO: Sparse intro → dense peak → sparse resolution. Better for tutorials with gradual intensification.
- BENTO: Grid-based modular sections of varying density. Better for dashboards with independent blocks.
- PULSE: Rhythmic dense-sparse-dense alternation creating heartbeat pattern. Better for narrative content.

**The critical distinction:** Patterns are the SKELETON (overall information density flow). Mechanisms are the FLESH (CSS techniques deployed WITHIN the pattern).

**Middle-tier validation:** The F-pattern created a 6-block simple arc (sparse→dense→moderate→dense), distinct from DD-006's uniform demonstration rhythm and CD-006's complex multi-pattern sequencing. Novelty evaluator confirmed: structural fingerprint is NOVEL.

**For Ceiling with SAME content:** Use F-PATTERN again. This isolates the metaphor variable. If Ceiling uses a different pattern, you can't tell whether differences come from metaphor or pattern.

### Why Information Isolation Between Agents?

**The decision:** Each agent sees ONLY what it needs:
- Content-selector: Never sees mechanism catalog
- Builder: Never sees master prompt, only the plan
- Perceptual auditor: Never sees mechanism counts, pattern names, or tier model
- Novelty evaluator: Never sees perceptual audit results

**The anti-leakage principle:** Context contamination is the #1 source of derivative output.

**The specific risks:**
- Content-selector seeing mechanisms → reverse-fitting (selecting content that "happens to" need pre-selected mechanisms)
- Builder seeing master prompt → anchoring to prompt framing instead of plan specifics
- Perceptual auditor knowing "this should have 12 mechanisms" → confirmation bias ("I see 12 distinct visual treatments")
- Novelty evaluator seeing "PA-05 = 4/4" → concluding novelty from quality score

**The prompt slicing strategy:** Master prompt is 1,760 lines (~25K tokens). No agent gets all 1,760 lines:
- Content-selector: ~200 lines (12%)
- Planner: ~1,000 lines (56%)
- Builder: ~400 lines (24%)
- Perceptual auditor: ~150 lines (8%)
- Novelty evaluator: ~150 lines (8%)

**The perceptual auditor's 8%:** By design, the PA must be context-starved to provide genuine "fresh eyes" reactions. If it knows the page "should feel designed," it will see design intent everywhere.

**Middle-tier validation:** The PA saw no footer and said "this is a major flow issue — no visual ending." If it had seen the build plan (which specified #14 Footer Mirror), it might have rationalized the missing footer as intentional negative space. Fresh eyes caught the implementation bug.

**For Ceiling:** Maintain strict information isolation. The Ceiling perceptual auditor should not know:
- What metaphor was derived
- What mechanisms were deployed
- Whether this is Middle, Ceiling, or Flagship tier
- What the expected richness level is

### Why Fresh-Eyes Perceptual Audit (Not Context-Loaded)?

**The decision:** The perceptual auditor is a zero-context agent. It takes screenshots, reacts to what it SEES, then answers PA questions. It does not know:
- The design system philosophy
- What mechanisms exist
- What the tier model is
- What Variant B looks like

**The research finding (confirmed 6+ teams):** Fresh-eyes agents find issues context-loaded agents miss entirely.

**The specific failure mode:** A context-loaded auditor reads "mechanism #5 creates sparse/dense alternation" and then LOOKS FOR sparse/dense alternation. It finds it even when the alternation is imperceptible or mechanical.

**The fresh-eyes protocol:**
1. Take screenshot at 1440px BEFORE reading any questions
2. Answer PA-01 through PA-05 from FIRST IMPRESSION
3. Then answer PA-06 through PA-20 (standard checks)
4. Then answer PA-SEM-01 through PA-SEM-03 (semantic checks)
5. Repeat at 768px

**The "react to what you see before you check what you know" rule:** The PA's first 5 answers must come from the screenshot, not from specifications.

**Middle-tier evidence:** The PA's first impression gut reaction (1440px): "Professional but stiff — feels like a technical manual that wants to be approachable but hasn't quite relaxed."

This is NOT what you'd say if you knew "this page deploys 12 mechanisms across 5 categories with F-pattern density rhythm." You'd say something about visual richness or compositional sophistication.

The PA saw what was ACTUALLY there: competent execution that reads as "specifications applied correctly" rather than "composition felt through."

**For Ceiling:** Use the same fresh-eyes protocol. The Ceiling PA should give you an INDEPENDENT assessment of whether metaphor derivation produces richer atmosphere or just more mechanisms.

### Why Two-Instance Pattern (Separate Planner and Builder)?

**The decision:** The planner writes a plan. The builder reads ONLY the plan and implements. The planner and builder are DIFFERENT Claude instances with ZERO shared context.

**The LLM property being exploited:** Continuation bias. Once an instance generates "this section will have sparse breathing with 64px padding," it has strong bias toward later implementing 64px padding exactly as specified. Self-revision is very difficult.

**The two-instance benefit:** The builder has NO continuation bias because it didn't write the plan. It reads the plan as external specification and implements.

**The alternative (single-instance):** The same Claude instance that reads the master prompt, analyzes content, selects mechanisms, writes the plan, AND implements the HTML. Result: the instance anchors to its early framing and implements what it INTENDED, not what the plan SAYS.

**The specific failure mode:** Single-instance builders often skip details in the plan ("I already know what I meant here") or rationalize implementation shortcuts ("this is close enough to my intent").

**Middle-tier validation:** The builder agent's output file contained 960px container width, 12 mechanisms deployed, F-pattern structure, and 7/7 soul compliance. It followed the plan exactly because the plan was its ONLY context.

**For Ceiling:** Use the same two-instance pattern. The planner derives the metaphor, specifies mechanisms to encode it, writes the plan. The builder reads ONLY the plan and implements. This prevents the planner's metaphor framing from contaminating implementation.

---

## Non-Obvious Lessons (Things You'd Only Know From DOING It)

These are the findings that seem obvious in retrospect but weren't predicted.

### The 8-11x Timing Discrepancy

**The prediction:** Middle-tier build time: 70-100 minutes (from tier model)

**The reality:** Total execution time: ~35 minutes (8 agents sequential)

**The discrepancy:** Predicted 70-100 min, actual ~35 min = 2-3x FASTER than expected, or looking at it another way, the tier model's Floor estimate (30-45 min) was MORE accurate for Middle tier than the Middle estimate.

**Why this happened:**
1. **The tier model's build times were BACKWARD-ENGINEERED** from showcase pages that included extensive iteration, multi-pass audits, and research integration. OD-004 took 150-220 min with 12-15 mechanisms, but that included provenance threading, adversarial audits, and iterative refinement.

2. **The Middle-tier experiment was SINGLE-PASS.** No iteration. No multi-pass audits. Each agent ran once, wrote one file, exited.

3. **Sonnet 4.5 is FAST.** Opus 4.6 (the planner) took ~15 minutes. The 7 Sonnet agents took ~3-5 minutes each. Sequential execution: 15 + (7 × 4) = ~43 minutes theoretical max. Actual was ~35 minutes.

4. **The tier model's "build time" conflates PLANNING + BUILDING + AUDITING + ITERATION.** The experiment separated these into discrete agents, exposing where time actually goes.

**What this means for Ceiling:** The tier model predicts Ceiling at 150-220 minutes. But if Ceiling uses the same agent topology (flat file-bus, single-pass execution), expect ~60-90 minutes actual. The metaphor derivation phases (1-3) add ~20-30 minutes. The builder adds ~15-20 minutes (more mechanisms = more CSS). Auditing adds ~15-20 minutes.

**The implication:** The tier model's time estimates are UPPER BOUNDS (worst-case with iteration), not TYPICAL CASES (single-pass execution).

### The Missing Footer Despite Plan Specification

**The plan specification (Section 2, Section F):** "Page Footer (Dark Mirror) — Footer mirroring header: dark background, 3px primary border-top."

**The implementation:** No footer visible. Perceptual auditor saw screens of blank space after content ended.

**The investigation needed:** Either:
1. Builder failed to implement footer HTML entirely
2. Builder wrote footer HTML but CSS rendering issue (height: 0, off-screen positioning, z-index bug)
3. Footer exists but isn't visible due to page structure (content ends, footer is below viewport)

**Why this matters:** This is a WOULD-NOT-SHIP finding. The page has "no visual ending" (PA-13), creating the "dropped signal" effect noted throughout the perceptual audit.

**The non-obvious part:** The build plan specified #14 Footer Mirror with CSS. The planner INTENDED it. But somewhere between plan and implementation, it disappeared.

**The lesson:** Even with explicit specifications, implementation bugs happen. The perceptual audit caught it because the PA has zero context about what SHOULD be there — it only sees what IS there.

**Communication protocol factor:** The missing footer demonstrates a gap that agent messaging could have prevented. If the builder had been able to SendMessage to the planner: "Footer specified in Section 2 but no CSS in Builder Blocks — should I implement from Section 2 description?" the issue would have been caught before PA audit.

This is NOT a topology failure (flat file-bus is fine). It's a COMMUNICATION PROTOCOL failure (zero SendMessage prevented clarification questions). CD-006 builders WITH messaging could iterate on ambiguities; Middle-tier builder WITHOUT messaging implemented only what was unambiguous.

**For Ceiling:** Add a post-build verification step: "Does the page have header AND footer as specified?" This is a binary check the programmatic auditor can run.

### The Red Accent Line as "Most Designed" Element

**The perceptual finding (PA-45):** "The red accent line under the header — it's the most designed element rather than specified element."

**What this reveals:** Compositional intent shows up in SMALL decisions made for THIS content, not just in mechanism deployment counts.

**The mechanism analysis:**
- 12 mechanisms deployed across 5 categories
- F-pattern density rhythm (sophisticated spatial organization)
- 2-zone callouts, solid offset diagrams, border-weight gradients (complex techniques)

**Yet the PA called a 3px border "the most designed element."**

**Why this happened:** The red accent line is POSITIONED (under the header), WEIGHTED (3px structural border), and COLORED (#E83025 primary). It does real work:
- Creates separation between dark header and cream content
- Adds a moment of color confidence
- Breaks the monotony of dark-to-cream transition

It's a DESIGN DECISION for THIS page, not a mechanism applied mechanically.

**The broader lesson:** "Designed vs formatted" is about INTENTIONALITY visible in small choices, not just mechanism counts. You can deploy 18 mechanisms and still feel "formatted" if they're applied mechanically. You can deploy 5 mechanisms and feel "designed" if they're chosen for THIS content.

**For Ceiling:** The metaphor derivation should produce MORE of these intentional small choices. The accent line should encode the metaphor. The padding ratios should map to metaphor properties. The section backgrounds should progress according to metaphor logic.

### Token Compliance as the MAJOR Defect

**The programmatic finding:** 66.5% token usage (145 var() refs / 218 total values). Required: >= 80%.

**The deviation:** -13.5 percentage points. This is the LARGEST measured defect by margin.

**The impact categories:**
- **Design quality:** ZERO impact. Users don't see whether you used `var(--space-8)` or `32px`.
- **Maintainability:** SIGNIFICANT impact. Raw hex values (`#FEF9F5`) can't be updated globally. Raw px values (`32px`) don't respond to token changes.
- **Design system coherence:** SIGNIFICANT impact. Token usage is the contract between design system and implementation.

**Why this happened:** The builder prioritized CSS correctness over token compliance. It used raw values when the exact match wasn't obvious (`#FEF9F5` background vs `var(--color-zone-sparse)`).

**The perceptual auditor's reaction:** Made no observations related to token compliance because it's invisible to end users.

**The verdict synthesizer's decision:** "Requires cleanup pass to replace raw values with tokens. However, this doesn't invalidate the SUCCESS verdict because the defect is in implementation hygiene, not design effectiveness."

**The lesson:** Separate VISUAL SUCCESS (PA-05, novelty, spatial atmosphere) from IMPLEMENTATION SUCCESS (token compliance, semantic HTML, accessibility). You can pass visual and fail implementation.

**For Ceiling:** Add a binary enforcement: "If token compliance < 80%, builder MUST revise before final output." Make this a BLOCKING gate, not a finding to fix later.

### CPL +2 Over Spec (Marginal But Measurable)

**The spec:** 45-80 characters per line at 1440px viewport.

**The measurement:** ~82 characters per line.

**The deviation:** +2 chars (2.5% over spec).

**The root cause:** Paragraph font-size is 18px instead of expected 16px. At 18px, 960px container produces 82 CPL. At 16px, 960px container would produce ~72 CPL.

**The perceptual auditor's assessment (PA-07):** "Yes. Line length is comfortable, spacing is adequate."

**The verdict:** ACCEPT AS SHIPPED. The 18px font size may actually IMPROVE readability despite exceeding CPL spec by 2 chars.

**The non-obvious insight:** Guardrails can conflict. Container width 940-960px is NON-NEGOTIABLE. Font size 16-18px is RECOMMENDED. CPL 45-80 is DERIVED from container + font. When they conflict, which takes priority?

**The priority order (documented in plan):**
1. Container width 940-960px (NEVER compromise)
2. Readability floors (line-height >= 1.5, min 32px padding)
3. Pattern fidelity (adjust pattern to meet above)
4. Aesthetic preference (LAST priority)

**The decision:** Container width (960px) is fixed. Font size (18px) improves readability. CPL exceeds spec by 2 chars. The container width wins.

**For Ceiling:** Document this priority order explicitly in the plan. When guardrails conflict, container width > readability > pattern > aesthetics.

### The "Mechanical Rhythm" Criticism Despite 12 Mechanisms

**The perceptual finding (PA-17):** "There's rhythm but it's metronomic rather than musical. Section spacing is consistent, heading sizes follow a pattern, but there's no syncopation or variation to create interest."

**The mechanism deployment:** 12 mechanisms across 5 categories. F-pattern density rhythm. Zone backgrounds. Border-weight gradients. This should produce visual variety, right?

**Why rhythm felt mechanical:**
- Section spacing repeated without variation (every section→section gap felt identical)
- Heading spacing ratio appears equal above/below (violates 1.5:1 minimum for content association)
- No visual drama after the architecture diagram (PA-36: "Only two moments create visual interest across entire page")

**The insight:** Mechanism DEPLOYMENT is not the same as mechanism VARIATION. You can deploy 12 mechanisms and still create monotonous rhythm if you deploy them UNIFORMLY.

**The contrast with showcase pages:** DD-006 has fractal self-similarity (same pattern at every scale), but each scale has DIFFERENT density. CD-006 has 8 sequential sections, but each section uses a DIFFERENT axis pattern. Variation creates rhythm.

**For Ceiling:** The metaphor derivation should produce SEMANTIC variation (different encoding at different content scales), not just mechanism deployment. If "geological depth" is the metaphor, the opening should feel "surface" and the conclusion should feel "bedrock" — with different spacing ratios, different border weights, different backgrounds encoding this progression.

### Context Compaction Avoidance Worked Perfectly

**The strategy:** Prevent the team-lead Claude instance from reading full intermediate files. Instead, read ONLY audit summaries and verdict documents.

**The risk:** The Middle-tier experiment produced 6 intermediate files (content selection, build plan, programmatic audit, perceptual audit, comparison report, novelty assessment) totaling ~15K+ tokens. If the team-lead read all 6 fully, context would explode.

**The implementation:** The verdict synthesizer read all 6 files. The team-lead read ONLY the verdict synthesizer's output (07-VERDICT.md, ~500 lines).

**The result:** The team-lead remained under 50% context throughout the experiment. Zero compaction needed. The verdict synthesizer compressed 6 files × ~2,500 lines each = ~15K lines down to ~500 lines, a 30:1 compression ratio.

**The lesson:** Hierarchical summarization WORKS. Let specialist agents read full context. Let coordinator agents read summaries only.

**For Ceiling:** Use the same pattern. The team-lead orchestrates, but NEVER reads full intermediate files. Each phase has a synthesizer agent that reads all phase outputs and writes ONE summary file for the team-lead.

### The Page Feeling "Specifications Applied Correctly" Despite Passing Design Criteria

**The perceptual finding (PA-03):** "One designer, but a designer following rules rather than feeling the page. Everything is consistent but there's no spark — it reads like 'I applied the specifications correctly.'"

**The objective measures:**
- PA-05: 4/4 (DESIGNED)
- Novelty: 3/3 (STRONGLY NOVEL)
- Better than Variant B: YES (with perceptual evidence)
- Soul compliance: 7/7
- Container width: 960px exactly

**The apparent contradiction:** How can a page pass all "designed" criteria yet feel "specified"?

**The resolution:** PA-05 measures PRESENCE of design decisions (non-default layouts, padding variation, visual hierarchy, compositional CSS). It doesn't measure QUALITY of design decisions (whether choices feel inevitable for this content vs mechanically applied).

**The comparison:**
- **Middle tier:** "I need spatial variety → deploy #7 zone backgrounds → 6 zones alternating FEF9F5/FEFEFE"
- **Showcase tier (OD-004):** "Geological confidence progression → topsoil is uncertain → lighter background. Bedrock is established → darker background. Background ENCODES confidence."

Both deploy mechanism #7 (zone backgrounds). Middle uses it for spatial variety (structural goal). Showcase uses it to encode content meaning (semantic goal).

**The perceptual difference:** Middle feels like "good technique application." Showcase feels like "technique and meaning are the same thing."

**For Ceiling:** Metaphor derivation should create semantic encoding (mechanism choices that MEAN something about the content), not just structural variety (mechanism choices that look different).

---

## What the Ceiling Experiment MUST Do Differently

Based on Middle-tier results, here's what MUST change for Ceiling tier (not suggestions — requirements):

### 1. Metaphor Derivation Adds Phases 1-3

**Middle tier:** Content-selector extracts content → Planner reads content + mechanism catalog → Builder implements.

**Ceiling tier:** Content-selector extracts content → Planner runs tension-composition Phases 1-3 (Content Assessment, Multi-Axis Questioning, Tension Derivation, Metaphor Collapse) → Planner locks metaphor at Phase 3.5 gate → Planner reads mechanism catalog THROUGH THE METAPHOR → Builder implements.

**The Phase 1-3 addition:**
- Phase 1: Multi-axis questioning (FEEL/UNDERSTAND/DO/BECOME)
- Phase 2: Tension derivation (authority vs accessibility, warmth vs precision, etc.)
- Phase 3: Metaphor collapse (structural overlaps → search query → ranked candidates)
- Phase 3.5: Gate (divergence check against case-studies/_INDEX.md)

**Time estimate:** +20-30 minutes for metaphor derivation phases.

**Critical requirement:** The planner must COMPLETE Phase 3.5 (metaphor lock-in) BEFORE reading the mechanism catalog. If it reads mechanisms before locking the metaphor, it will pattern-match ("this content is about security → geological depth metaphor from OD-004 encoded security with border-weight gradient → I'll use that").

### 2. Mechanism Selection THROUGH Metaphor (Multi-Channel Coherence)

**Middle tier logic:** "This content has code blocks → I need mechanism #17. This content has hierarchy → I need mechanism #1."

**Ceiling tier logic:** "My metaphor is 'geological strata.' Strata have pressure gradients → spacing compression (#4). Strata have consolidation levels → border-weight (#1). Strata have distinct layers → zone backgrounds (#7). ALL THREE encode geological depth in different CSS channels."

**The difference:**
- Middle: Each mechanism serves a DIFFERENT content need independently
- Ceiling: Multiple mechanisms encode the SAME metaphor dimension simultaneously

**Example (geological strata metaphor):**
- Border-weight: 4px (bedrock) → 3px (sediment) → 2px (topsoil) → 1px (surface)
- Zone backgrounds: #1A1A1A (bedrock) → #3D3D3D (sediment) → #E8E8E8 (topsoil) → #FEFEFE (surface)
- Spacing compression: 32px (bedrock) → 48px (sediment) → 64px (topsoil) → 96px (surface)

As you scroll down, borders get lighter AND backgrounds get lighter AND spacing gets looser, all saying "moving toward surface" in three channels at once.

**The critical distinction from Middle:** In Middle, border-weight handles hierarchy, zone backgrounds handle section breaks, spacing handles rhythm — each INDEPENDENTLY solving different problems. In Ceiling, all three encode DEPTH together.

**This is what creates the "atmosphere" Middle lacks.**

**Build plan format change:** Section 3 (Mechanism Justification) must document:
- **Which mechanisms encode the SAME metaphor dimension** (border-weight + zone backgrounds + spacing all encode "depth")
- **How they coordinate** (values progress in parallel: heavy→light borders, dark→light backgrounds, tight→loose spacing)

### 3. Fractal Scale Coverage (3+ Scales Required)

**Middle tier:** 2 scales (Page + Component). F-pattern expressed at Page scale (section density progression) and Component scale (2-zone DNA structure).

**Ceiling tier:** 3+ scales minimum:
- **Page scale:** Overall density arc (sparse → dense → sparse)
- **Section scale:** Within-section rhythm (intro paragraph sparse, technical details dense)
- **Component scale:** Internal component structure (callout label sparse, callout body dense)
- **Inline scale (optional but recommended):** Text-level rhythm (long sentences in exposition, short sentences in definitions)

**Why this matters:** Fractal coherence is the #2 modification (M2, ADOPT with high confidence). Showcase pages (DD-006 especially) have 4-5 scales all expressing the same design logic.

**The Phase 3.5F gate (from rigidity research):** Per-category mechanism minimums PLUS per-scale coverage requirements.

**Build plan format change:** Section 6 (Fractal Table) must document AT LEAST 3 scales:
```
| Scale | Pattern Expression | Mechanisms Used | CSS Evidence |
|-------|-------------------|----------------|--------------|
| Page | Sparse → dense arc | #5, #7 | Section padding 96px → 64px → 32px |
| Section | Intro sparse, details dense | #4, #11 | First paragraph 24px gap, list items 8px gap |
| Component | Label sparse, body dense | #2 | Label 12px padding, body 24px padding |
```

**Auditing addition:** The programmatic auditor must verify scale coverage (not just mechanism count).

### 4. New Evaluation Criteria

**Middle tier SUCCESS criteria (E2.1–E2.7):**
- PA-05 at 1440px = YES (4/4)
- Better than Variant B = YES (perceptual evidence)
- Spatial atmosphere = YES or SOMEWHAT
- 5-category coverage = PASS
- Novelty >= 2 of 3 signals
- Container width = 940-960px
- Soul compliance = 7/7

**Ceiling tier ADDITIONS (E2.8–E2.11):**
- **E2.8: Metaphor-mechanism coherence** = Does the plan document how >= 3 mechanisms encode the same metaphor dimension?
- **E2.9: Fractal scale coverage** = Are 3+ scales documented with CSS evidence?
- **E2.10: Semantic encoding** = Does the perceptual auditor observe meaning-driven choices (not just variety)?
- **E2.11: Better than Middle** = Perceptual comparison with Middle-tier page on SAME content

**Why E2.10 matters:** This catches the "specifications applied correctly" vs "composition felt through" distinction. If the PA sees "zone backgrounds create spatial variety" (structural observation), that's Middle-level. If the PA sees "zone backgrounds encode confidence progression from uncertain to established" (semantic observation), that's Ceiling-level.

**Why E2.11 matters:** Ceiling uses SAME content as Middle. Direct comparison isolates the metaphor variable. If Ceiling is NOT better than Middle, metaphor derivation added complexity without perceptual value.

### 5. Derivative Risk Measurement

**Middle tier:** Tested whether per-category minimums produce novel output. Result: 3/3 novelty signals (structural fingerprint, CSS value overlap, mechanism combination all NOVEL).

**Ceiling tier prediction (from theory):** Metaphor derivation creates pressure to copy showcase pages. If the metaphor is "geological strata" and OD-004 used "geological strata," the builder will pattern-match.

**The derivative risk tests (D3.1–D3.3) stay the same:**
- D3.1: Structural fingerprint (shape distribution under 20px blur)
- D3.2: CSS value overlap (< 30% = novel, > 60% = derivative)
- D3.3: Mechanism combination (different reinforcing pairs)

**The NEW test (D3.4):**
- **D3.4: Metaphor encoding divergence** — Does the page encode the metaphor with DIFFERENT values than showcase pages using similar metaphors?

Example:
- OD-004 (geological): Bedrock = 4px border, 32px padding, #1A1A1A background
- Ceiling (geological): Bedrock = 4px border, 48px padding, #2A2A2A background

Same metaphor (geological), same mechanism (#1 border-weight), DIFFERENT specific encoding (48px padding vs 32px, #2A2A2A vs #1A1A1A).

**Verdict:**
- If D3.4 = DIFFERENT encoding → metaphor fluency (applying vocabulary to same domain differently)
- If D3.4 = SAME encoding → template copying (borrowed showcase values)

**This test distinguishes "geological metaphor from showcase pages" (derivative) from "geological metaphor independently derived" (novel use of vocabulary).**

### 6. Comparison Protocol Changes

**Middle tier:** Compared against Variant B (Phase D baseline, 7 mechanisms).

**Ceiling tier:** Compared against THREE references:
1. **Variant B** (Phase D baseline, 7 mechanisms) — shows Floor→Ceiling gap
2. **Middle-tier page** (SAME content, 12 mechanisms, no metaphor) — isolates metaphor variable
3. **Showcase pages** (DD-006, CD-006) — shows Ceiling→Flagship gap

**The critical comparison is #2 (Middle vs Ceiling).** Using SAME content eliminates content-selection variables and allows direct tier comparison.

**Expected findings:**
- **If Ceiling is BETTER than Middle:** Metaphor derivation adds perceptual value. The multi-channel coherence creates richer atmosphere.
- **If Ceiling is NOT better than Middle:** Metaphor derivation added complexity without perceptual benefit. The Middle tier (content-structure mapping without metaphor) may be sufficient for most pages.

**The measurement:** Comparative auditor runs side-by-side at 1440px and 768px. Must provide PERCEPTUAL observations (not just "Ceiling has more mechanisms"). Example: "Ceiling's spacing compression creates a tangible sense of descending through layers, while Middle's spacing just creates visual variety."

---

## The Accumulated Wisdom That Lives Nowhere Else

These insights exist only in conversation context, not in any committed file. This section preserves them.

### The CPL Misclassification Catch

**The finding:** During plan review, a cross-reference check discovered that the :root block in the master prompt had DIFFERENT type scale values than tokens.css.

**The values:**
- **Master prompt (Section 4.3):** `--type-page: 2.5rem`, `--type-section: 2rem`, `--type-subsection: 1.5rem`
- **tokens.css:** `--type-page: 3rem`, `--type-section: 1.625rem`, `--type-subsection: 1.375rem`

**The discovery process:** The adversarial reviewer (part of plan validation) read BOTH the master prompt's :root block and tokens.css, noticed the discrepancy, flagged it as a potential source of CPL violations.

**The resolution:** The master prompt values are AUTHORITATIVE for Middle-tier experiment. The :root block in Section 4.3 (which the builder copies verbatim) uses the correct values.

**Why this matters:** If the builder had used tokens.css values instead of the master prompt's :root block, it would have produced:
- 3rem (48px) page headings instead of 2.5rem (40px) → larger headings → fewer characters per line → WIDER container needed to hit 45-80 CPL
- This would create pressure to violate the 940-960px container constraint

**The lesson:** When multiple files define the same tokens, DOCUMENT which is authoritative. The plan explicitly stated "Use master prompt values (Section 4.3), NOT tokens.css values."

**For Ceiling:** Add a token source verification step. The planner must document: "Color values from tokens.css. Type scale from master prompt Section 4.3. Spacing scale from tokens.css."

### The Gate Verification Staying "Thin"

**The design choice:** Phase 3.5 gate (metaphor lock-in) asks 3 questions:
1. Did I derive independently? (Check: ran Phases 1-3 WITHOUT reading case-studies)
2. Can I justify without library? (Check: explain WHY this metaphor for THIS content)
3. Does this appear in case-studies/_INDEX.md? (Check: read titles, compare)

**The alternative:** A "thick" gate with 10+ questions checking metaphor quality, structural isomorphism score, semantic richness, etc.

**Why thin won:** Binary rules achieve 100% agent compliance. Judgment rules achieve ~0%. Each question added reduces compliance exponentially.

**The 3-question gate:**
- Q1: Binary check (YES/NO — did you read case-studies before Phase 3.5?)
- Q2: Generative check (write justification — forces articulation)
- Q3: Lookup check (read _INDEX.md titles — mechanical comparison)

All three are VERIFIABLE. An auditor can check whether the planner read case-studies in Phases 1-3 (check file access logs). An auditor can check whether justification exists (search for "JUSTIFICATION:" in plan). An auditor can check whether metaphor appears in _INDEX.md (exact string match).

**The Middle-tier implementation:** The planner ran Phases 1-3 blind (content-selector never sees mechanisms, planner doesn't read case-studies until Phase 5). Phase 3.5 was implicitly PASS (no metaphor derivation in Middle tier, so gate not triggered).

**For Ceiling:** The Phase 3.5 gate becomes ACTIVE. The planner must:
1. Complete Phases 1-3 without reading case-studies
2. Write metaphor justification ("THIS metaphor for THIS content because...")
3. Read case-studies/_INDEX.md and check for matches
4. If match found, complete 5-dimension divergence table

**Gate thickness:** Keep it at 3-4 checks maximum. More checks = more judgment = less compliance.

### The Playwright Scheduling Pattern

**The finding:** Only 1-2 agents should use Playwright concurrently. 4+ causes severe contention.

**The evidence (project history):** When 4 Playwright agents ran in parallel, all 4 failed with timeout errors. When 2 ran in parallel, both succeeded. Sequential execution: 100% success rate.

**The root cause:** Browser automation has resource constraints (memory, CPU, file handles). Each Playwright session opens a full browser instance. 4 concurrent browsers exceed available resources on typical hardware.

**The Middle-tier topology:** 4 agents needed Playwright:
- Programmatic auditor (measures computed styles at 1440px + 768px)
- Perceptual auditor (takes screenshots at 1440px + 768px)
- Comparative auditor (screenshots Middle + Variant B side-by-side)
- Novelty evaluator (screenshots Middle + DD-006 + CD-006 for blur comparison)

**The execution plan:**
- Phase 3: Programmatic + Perceptual in parallel (2 concurrent sessions)
- Phase 4: Comparative + Novelty in parallel (2 concurrent sessions)

**The result:** All 4 agents succeeded. Zero timeout errors.

**For Ceiling:** Use the same pattern. Never run 4+ Playwright sessions concurrently. If you have 6 agents needing browser automation, run them in 3 waves of 2.

### The HTTP Server Setup for Playwright

**The requirement:** Playwright MCP blocks `file://` protocol. You MUST serve pages via HTTP.

**The setup (documented in every Playwright agent prompt):**
```bash
# Start HTTP server from project root
python3 -m http.server 8080

# Navigate to page
http://localhost:8080/ephemeral/middle-tier-experiment/middle-tier-page.html
```

**The failure mode:** If you try `file:///Users/.../middle-tier-page.html`, Playwright refuses to load it with a security error.

**The Middle-tier implementation:** All 4 Playwright agents included this in their prompts:
```
AUDIT PROTOCOL:
1. Start HTTP server: python3 -m http.server 8080 (from project root)
2. Navigate to http://localhost:8080/ephemeral/middle-tier-experiment/middle-tier-page.html
3. Set viewport to 1440x900
4. Disable animations: inject `* { animation: none !important; opacity: 1 !important; }`
5. Wait for document.fonts.ready
6. Measure computed styles
```

**The result:** All 4 agents successfully loaded the page, took screenshots, measured styles.

**For Ceiling:** Copy-paste this protocol verbatim into every Playwright agent prompt. The HTTP server step is NON-NEGOTIABLE.

### Agent Shutdown Lifecycle Management

**The challenge:** With 8 agents in a flat file-bus topology, how do you know when they're all done?

**The manual approach:** The team-lead checks each agent's status after execution, confirms file written, moves to next agent.

**The automated approach (not used in Middle-tier):** Each agent sends a shutdown notification when done. The team-lead tracks completion counts.

**Middle-tier implementation:** Manual orchestration. The team-lead ran agents sequentially:
1. content-selector → file written → NEXT
2. planner → file written → NEXT
3. builder → file written → NEXT
4. programmatic-auditor + perceptual-auditor (parallel) → both files written → NEXT
5. comparative-auditor + novelty-evaluator (parallel) → both files written → NEXT
6. verdict-synthesizer → file written → DONE

**The advantage:** Simple. No coordination protocol needed. Each agent writes ONE file, team-lead confirms, next agent runs.

**The disadvantage:** Sequential execution is slower than maximum parallelization.

**For Ceiling:** Keep manual orchestration unless you have 15+ agents. The overhead of automated coordination exceeds the benefit until team size reaches ~15 agents.

### How to Read 25K+ Token Files (Chunk Reads)

**The challenge:** The master prompt is 1,760 lines (~25K tokens). Reading it in one Read call might hit the tool's implicit limits.

**The chunk strategy:**
1. First read: lines 1-500 (orientation + identity + vocabulary)
2. Second read: lines 500-1000 (mechanisms + early pipeline)
3. Third read: lines 1000-1500 (validation + context + references)
4. Fourth read: lines 1500-1760 (success criteria + appendices)

**The Middle-tier implementation:** The verdict synthesizer needed to read the decision matrix (Section 10.1, lines 1459-1467) and success criteria (Section 10.2, lines 1468-1478). Instead of reading all 1,760 lines, it read:
- Lines 1-100 (orientation)
- Lines 1450-1550 (decision matrix + success/failure criteria)

Total: 200 lines read instead of 1,760.

**The lesson:** Never read full files when you only need specific sections. Use offset + limit parameters.

**For Ceiling:** The planner will need MORE of the master prompt than Middle (metaphor derivation phases add ~300 lines). But it still doesn't need ALL 1,760 lines. Read in sections:
- Lines 1-300 (mission + identity + vocabulary)
- Lines 300-600 (mechanisms)
- Lines 600-1000 (pipeline Phases 1-3.5 for metaphor derivation)
- Lines 1200-1400 (CSS examples for plan concreteness)

---

## File Map for Next Experiment

What files from the Middle-Tier Experiment should be used as references for Ceiling?

### High-Quality Files Worth Reading

**ephemeral/middle-tier-experiment/02-build-plan.md (1,011 lines)**
- Read: Full file (especially Section 3 Mechanism Justification, Section 6 Fractal Table)
- Why: Shows how to document content-mechanism fits with concrete CSS evidence
- Quality: Excellent. Per-category minimums applied correctly, fractal table has CSS evidence
- Use for: Template for Ceiling build plan (add metaphor encoding to Section 3)

**ephemeral/middle-tier-experiment/04-perceptual-audit.md (380 lines)**
- Read: Full file (especially PA-01 through PA-05, PA-45)
- Why: Fresh-eyes perceptual reactions to a Middle-tier page
- Quality: Excellent. Genuine first-impression gut reactions, caught missing footer
- Use for: Baseline for "what does Middle-level designed feel like?"

**ephemeral/middle-tier-experiment/07-VERDICT.md (228 lines)**
- Read: Full file
- Why: Complete evaluation framework (SUCCESS criteria, FAILURE criteria, meta-checks)
- Quality: Excellent. Documents all 7 SUCCESS checks with evidence
- Use for: Extend with Ceiling-specific criteria (E2.8–E2.11)

**ephemeral/middle-tier-experiment/06-novelty-assessment.md (154 lines)**
- Read: Full file (especially D3.1 structural fingerprint, D3.3 mechanism combination)
- Why: Shows how to detect novelty vs derivative output
- Quality: Excellent. Concrete CSS evidence for each novelty signal
- Use for: Add D3.4 (metaphor encoding divergence) for Ceiling

### Mechanical Files (Skim, Don't Deep-Read)

**ephemeral/middle-tier-experiment/03-programmatic-audit.md (198 lines)**
- Skim: Critical-10 checklist, token compliance calculation
- Why: Mechanical binary checks (border-radius: 0? box-shadow: none?)
- Quality: Adequate. Found CPL +2 violation, token compliance fail
- Use for: Copy programmatic checks verbatim (add scale coverage check for Ceiling)

**ephemeral/middle-tier-experiment/01-content-selection.md (313 lines)**
- Skim: Structural verification table (A2.1–A2.10, A3.1–A3.3)
- Why: Verification that content meets requirements
- Quality: Adequate. Confirmed 1,184 words, 7 element types, no single type > 60%
- Use for: Use SAME content for Ceiling (isolates metaphor variable)

### Comparison Files (Use for Baseline Reference)

**ephemeral/middle-tier-experiment/05-comparison-report.md (162 lines)**
- Read: Section "Perceptual Observations (MINIMUM 2)" + "Spatial Atmosphere"
- Why: Shows how to document perceptual improvements vs Variant B
- Quality: Good. 3 specific perceptual observations (dark header authority, code block anchors, zone background sections)
- Use for: Template for Middle vs Ceiling comparison (expect 2+ perceptual observations showing metaphor value)

### Minimum Reading List for Ceiling Executor

If you're a future Claude instance running the Ceiling experiment and have limited context budget, read THESE FILES ONLY:

1. **ephemeral/continuity-docs/HANDOFF.md** (509 lines) — Current project state, tier model, modification recommendations
2. **ephemeral/middle-tier-experiment/07-VERDICT.md** (228 lines) — SUCCESS/FAILURE criteria, meta-checks
3. **ephemeral/middle-tier-experiment/02-build-plan.md** (Section 3 only, ~200 lines) — How to document mechanism justifications
4. **This file** (08-retro-continuity.md) — The wisdom transfer you're reading now

**Total:** ~1,000 lines (30 minutes reading)

That gives you:
- Where the project is (HANDOFF)
- What success looks like (VERDICT)
- How to write a plan (BUILD-PLAN Section 3)
- Why decisions were made this way (THIS FILE)

Everything else is supplementary.

---

## Anti-Patterns to Avoid

What should a future instance explicitly NOT do? Based on Middle-tier experiment and broader project history.

### Don't Read Full Intermediate Files as Team-Lead

**The mistake:** Team-lead reads all 6 agent outputs fully (content selection, build plan, programmatic audit, perceptual audit, comparison report, novelty assessment) = ~15K lines.

**The consequence:** Context explosion. Team-lead hits 80%+ context usage, needs compaction mid-experiment.

**The correct approach:** Team-lead reads ONLY the verdict synthesizer's summary (07-VERDICT.md, ~500 lines). The verdict synthesizer reads all 6 files and compresses to 30:1 ratio.

**The principle:** Hierarchical summarization. Specialists read full context. Coordinators read summaries.

**For Ceiling:** The team-lead orchestrates but NEVER reads full intermediate files. Each phase has a synthesizer that compresses phase outputs to ONE summary file.

### Don't Run 4+ Concurrent Playwright Sessions

**The mistake:** Running programmatic auditor, perceptual auditor, comparative auditor, and novelty evaluator ALL in parallel (4 concurrent Playwright sessions).

**The consequence:** All 4 timeout with resource exhaustion errors.

**The correct approach:** Phase 3 (programmatic + perceptual) in parallel. Wait. Phase 4 (comparative + novelty) in parallel. Maximum 2 concurrent sessions at any time.

**The principle:** Browser automation has resource constraints. Respect them.

**For Ceiling:** If you have 6 agents needing Playwright, run them in 3 waves of 2. Sequential waves, parallel pairs.

### Don't Include Mechanism Vocabulary in Content-Selector Prompts

**The mistake:** Letting the content-selector see mechanism names (#1 border-weight, #17 code blocks, etc.) or pattern names (CRESCENDO, F-PATTERN).

**The consequence:** Reverse-fitting. The selector chooses content that "happens to" need pre-selected mechanisms. "This content has tables → mechanism #18. This content has code → mechanism #17."

**The correct approach:** The content-selector sees ONLY content requirements (800-1,200 words, >= 2 code blocks, >= 1 table). It never sees mechanism vocabulary.

**The principle:** Anti-leakage. Vocabulary awareness creates bias.

**For Ceiling:** The content-selector's prompt slice (Slice 1) excludes Section 3 (Mechanism Vocabulary) entirely. It reads Section 9 (Content Requirements) but NOT mechanism catalog.

### Don't Let Builder See the Full Master Prompt

**The mistake:** Builder reads all 1,760 lines of the master prompt, including mission statement, philosophical context, tier model rationale, etc.

**The consequence:** Information overload. The builder anchors to master prompt framing instead of plan specifics. It implements what it THINKS the plan intended based on master prompt context, not what the plan SAYS.

**The correct approach:** Builder receives:
- The planner's 7-section plan output
- Copy-paste CSS blocks (:root, base typography, accessibility, responsive)
- Enforcement blocks (Appendix B: soul checklist, file-write, container width, M1 override)

**Total:** ~400 lines (24% of master prompt).

**The principle:** Two-instance pattern. The builder's world is the plan. Nothing else.

**For Ceiling:** Builder prompt slice (Slice 3) is identical to Middle. The plan changes (adds metaphor encoding documentation), but the builder's context stays the same.

### Don't Skip Perceptual Audit Fresh-Eyes Protocol

**The mistake:** Running perceptual audit with a context-loaded agent that knows the tier model, mechanism counts, pattern selection, etc.

**The consequence:** Confirmation bias. The PA sees what it EXPECTS ("this should have 12 mechanisms → I see 12 distinct visual treatments") instead of what's ACTUALLY there.

**The correct approach:** Fresh-eyes protocol. The PA:
1. Takes screenshot BEFORE reading any questions
2. Answers PA-01 through PA-05 from first impression
3. Has ZERO context about tier model, mechanisms, patterns, or Variant B

**The principle:** Fresh-eyes agents find issues context-loaded agents miss entirely.

**For Ceiling:** The perceptual auditor's prompt slice (Slice 4B) is 8% of the master prompt — the SMALLEST slice by design. It knows PA questions and PA-05 sub-criteria, nothing else.

### Don't Use --no-edit with Git Rebase

**The mistake:** `git rebase -i --no-edit` (from general best practices).

**The consequence:** Git error. `--no-edit` is not a valid flag for `git rebase`.

**The correct approach:** For non-interactive rebase: `git rebase <branch>`. For interactive rebase: `git rebase -i <branch>` (opens editor, no --no-edit flag).

**The principle:** Not all git best practices apply to all commands. Verify flags before using.

**For Ceiling:** No git rebase needed. Standard commit workflow.

### Don't Skip the Always-Load Protocol

**The mistake:** Building without reading prohibitions.md + tokens.css first.

**The consequence:** Soul violations. Phase D Track 1 scored 11/19 compliance (INSTANT FAIL) because it skipped always-load and violated border-radius: 0, box-shadow: none, wrong fonts, wrong palette.

**The correct approach:** EVERY building agent reads prohibitions.md (353 lines) + tokens.css (174 lines) BEFORE any other action. Total mandatory overhead: 527 lines (2 files).

**The principle:** Soul constraints define identity through REFUSAL. Violating them = not KortAI.

**For Ceiling:** The builder's prompt includes this at the top:
```
CRITICAL: You MUST read these files FIRST, before any other action:
1. compositional-core/identity/prohibitions.md (353 lines)
2. compositional-core/vocabulary/tokens.css (174 lines)
Violating prohibitions = INVALID work. No exceptions.
```

### Don't Assume Thick Gates Improve Compliance

**The mistake:** Adding 10+ questions to Phase 3.5 gate to "ensure metaphor quality."

**The consequence:** Judgment overload. Each question added reduces compliance. Thick gates achieve ~0% compliance in practice.

**The correct approach:** Keep gates thin (3-4 binary checks maximum). Each check should be VERIFIABLE (can an auditor check YES/NO?).

**The principle:** Binary rules achieve 100% agent compliance. Judgment rules achieve ~0%.

**For Ceiling:** Phase 3.5 gate stays at 3 checks: independent derivation, justification exists, divergence verified. Add a 4th check: "Metaphor isomorphism score >= 4" (binary threshold, not judgment).

---

## The Meta-Narrative

### Where This Experiment Fits

The KortAI design system has been evolving through 5 stages:

**Stage 1-4 (Exploration):** DD (density), OD (organization), AD (axis), CD (combination). Built 30 showcase pages exploring the full design space. Outcome: 337 research findings, 78 constraints, 44 CSS technique families.

**Stage 5 (Extraction):** Phase C extracted showcase knowledge into a 6-layer ontology (compositional-core). 42 files, 18 mechanisms, 22 prohibitions, 65 tokens. Outcome: Operational vocabulary for building.

**Phase D (Validation):** Tested whether the extracted system could produce showcase-quality pages. 5 variants, 14 agents. Outcome: CONDITIONAL PASS. Variant B (weak permission) scored 18/19 compliance, 4/5 novelty. Gap identified: technique DENSITY (5/44 techniques vs 23-44/44).

**Post-D Research:** Two investigations (richness + rigidity, 11 agents) answered:
- **What IS the gap?** Technique saturation (density of mechanism deployment), not technique absence. ~60-85% addressable.
- **Can we close it without limiting rigidity?** Yes. Showcase pages were MORE rigid, not less. Their richness came FROM rigidity (vocabulary type 4:1 over constraint type).

**Tier Model Established:** Floor (5 mechanisms) / Middle (8-10) / Ceiling (12-15) / Flagship (16-18). Middle recommended as universal floor. Floor-to-Middle transition has highest ROI (3-4x richness for +45 min).

**Middle-Tier Experiment:** THE FIRST PRACTICAL TEST of the tier model. Built an 8-10 mechanism page WITHOUT metaphor derivation. Tested whether per-category minimums produce "designed" (not just "formatted") output.

**Result:** SUCCESS. PA-05 = 4/4 (designed), Novelty = 3/3 (strongly novel), Better than Variant B = YES (with perceptual evidence). The page has spatial atmosphere. It feels like somewhere you want to spend time.

**Known limitations:**
- Feels "specifications applied correctly" rather than "composition felt through"
- Rhythm is mechanical (metronomic rather than musical)
- Only 2 visual drama moments across entire page
- Missing footer (implementation bug)

### What Question Does Ceiling Answer That Middle Couldn't?

**Middle tested:** Can per-category minimums (vocabulary breadth) produce perceptually rich output WITHOUT metaphor derivation?

**Answer:** YES. Middle crossed the threshold from "formatted" to "designed."

**The new question:** Does adding metaphor derivation (multi-channel coherence) produce RICHER output, or does it create DERIVATIVE output (pattern-matching showcase pages)?

**The hypothesis split:**

**Hypothesis A (Richness):** Ceiling will be perceptually BETTER than Middle. The metaphor will create semantic encoding (mechanisms chosen to MEAN something about content, not just look different). The multi-channel coherence (border-weight + zone backgrounds + spacing all encoding "depth") will create atmosphere Middle lacks. Result: Ceiling > Middle in spatial atmosphere, visual drama, compositional intent.

**Hypothesis B (Derivative):** Ceiling will COPY showcase pages. The metaphor derivation will trigger pattern-matching ("geological strata → OD-004 used geological strata → I'll use the same border-weight progression"). Result: Ceiling novelty = 0-1/3 (structural fingerprint matches OD-004, CSS values match, mechanism combinations match).

**The experiment design isolates this:** SAME content (SYSTEM remote Mac), SAME tier model parameters (12-15 mechanisms, 3+ scales), ONLY difference is metaphor derivation (Middle has none, Ceiling has full Phases 1-3.5).

**What we learn:**
- If Hypothesis A → Metaphor derivation adds perceptual value. Use Ceiling as standard tier for conceptual content.
- If Hypothesis B → Metaphor derivation creates derivative risk. Middle (content-structure mapping) may be sufficient. Metaphor should be reserved for Flagship tier only.
- If BOTH → Metaphor derivation is high-risk, high-reward. Use sparingly, with strong divergence enforcement.

### The Story Arc

**2025-2026: The Exploration Era**
Building showcase pages to understand "what is possible?" 30 pages across 4 dimensions (DD, OD, AD, CD). Crown jewels emerge: DD-006 (fractal), OD-004 (confidence), CD-006 (pilot migration, 39/40).

**February 2026: The Extraction**
Phase C compresses 337 findings → 6-layer ontology. compositional-core/ becomes operational. 22 prohibitions, 65 tokens, 18 mechanisms. Anti-gravity mechanisms (R1-R6) prevent template copying.

**February 2026: The Validation Crisis**
Phase D tests the extraction. 5 variants, all FAIL to match showcases. Variant B (best) scores 4/5 novelty but only 5/44 techniques. Container width violated by 4/5 pages. The question: "What IS the gap?"

**February 2026: The Research Answer**
Richness investigation (5 agents): Gap is saturation, not absence. Pipeline produces genuine identity but deploys fewer techniques per page. Rigidity investigation (6 agents): Showcase pages were MORE rigid, not less. Vocabulary rigidity (having 18 mechanisms) enables richness.

**February 2026: The Tier Model**
Four tiers established. Middle (8-10 mechanisms) recommended as universal floor. Floor-to-Middle has highest ROI. The question shifts: "Can we operationalize Middle tier?"

**February 2026: The Middle-Tier Experiment**
FIRST practical test of tier model. 8 agents, flat file-bus topology. Per-category minimums (1+ from each of 5 categories). F-PATTERN density rhythm. NO metaphor derivation.

**Result:** SUCCESS. Designed (4/4), Novel (3/3), Better than Variant B (YES). But feels "specifications applied correctly" rather than "composition felt through."

**Now: The Ceiling Question**
Does metaphor derivation add richness, or create derivative copying? SAME content, add Phases 1-3.5 (metaphor derivation), measure novelty + perceptual improvement.

**This is the hinge point.** If Ceiling succeeds without derivative output, the tier model is validated. If Ceiling copies showcases, the tier model needs revision (Middle as ceiling, Flagship reserved for crown jewels only).

---

## Closing Reflection: What This Document Is For

You are a Claude instance 6 months from now. You have zero context about this project. Someone hands you this document and says "Run the Ceiling tier experiment."

This document gives you:

**1. The five conceptual anchors** — vocabulary fluency, designed vs formatted, saturation gap, container width failure mode, two-instance pattern

**2. The decision rationale** — why flat file-bus, why Opus for planner, why per-category minimums, why F-pattern, why information isolation, why fresh-eyes perceptual audit, why two-instance pattern

**3. The non-obvious lessons** — timing discrepancy, missing footer, red accent line as "most designed," token compliance as major defect, CPL +2 marginal, mechanical rhythm despite 12 mechanisms, "specifications applied correctly" feeling

**4. What Ceiling must do differently** — metaphor derivation adds Phases 1-3.5, mechanism selection through metaphor (multi-channel coherence), 3+ fractal scales, new evaluation criteria (E2.8-E2.11), derivative risk measurement (D3.4), comparison against Middle

**5. The accumulated wisdom** — CPL misclassification catch, gate verification staying thin, Playwright scheduling, HTTP server setup, agent shutdown lifecycle, chunk reads for large files

**6. File map** — what to read (build plan Section 3, perceptual audit, verdict), what to skim (programmatic audit, content selection), minimum reading list (~1,000 lines)

**7. Anti-patterns** — don't read full files as team-lead, don't run 4+ Playwright sessions, don't leak mechanism vocabulary to content-selector, don't let builder see master prompt, don't skip fresh-eyes protocol, don't assume thick gates improve compliance

**8. The meta-narrative** — where this fits in project history, what question Ceiling answers, the story arc from exploration through extraction to validation to tier model to Middle experiment to Ceiling question

**This is not a recipe.** It's a WORLDVIEW TRANSFER.

You understand WHY each decision was made. You understand WHAT non-obvious properties emerged. You understand WHERE the risks are.

When you run the Ceiling experiment and encounter "the metaphor derivation creates derivative pressure" — you'll remember the two-instance pattern (planner derives, builder implements without seeing showcase pages). When the perceptual auditor says "this feels like OD-004" — you'll remember D3.4 (metaphor encoding divergence check). When the Playwright agent times out — you'll remember "2 concurrent sessions maximum."

**The goal:** You run the Ceiling experiment with the accumulated wisdom of the Middle-tier experiment, not just the mechanical process.

**The test:** If this document enables you to run Ceiling WITHOUT making the same mistakes Middle made, it succeeds.

**The hope:** The Flagship experiment inherits YOUR wisdom the same way you inherited Middle's.

This is knowledge transfer.

---

**END RETROSPECTIVE**

*Date: 2026-02-16*
*Author: continuity-architect*
*For: Future Claude instances running Ceiling and Flagship tier experiments*
