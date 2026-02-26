# Pre-Ceiling Metacognitive Audit
**Date:** 2026-02-16
**Analyst:** meta-auditor (ceiling-preparation team)
**Mission:** Identify unarticulated work that would trip up a fresh instance building Ceiling

---

## EXECUTIVE SUMMARY

**Total items found: 34**
**Critical damage if missed: 12**
**High priority: 15**
**Medium priority: 7**

**Top 3 that would cause most damage if missed:**

1. **BUILDER PROMPT SLICING BLIND SPOT (CRITICAL)** — The builder implemented 6 content sections but MISSED the footer despite explicit plan specification. Root cause: builder never received a "structural completeness checklist" showing that Section A (header) + Sections B-E (content) + Section F (footer) = 6 total landmarks required. Adding Phases 1-3 (metaphor derivation) to Ceiling will make prompts 60% LONGER, increasing slicing complexity. Without a structural verification gate, Ceiling builder could miss 2-3 planned sections entirely.

2. **MECHANISM CATALOG LACKS APPLICATION MODE DOCUMENTATION (CRITICAL)** — Border-weight gradient's success came from PROGRESSIVE mode (4px→3px→1px encoding security criticality), but catalog only documents DISCRETE mode (4px callouts, 3px headers, 1px separators). A Ceiling builder using border-weight in discrete mode when content needs progressive encoding would produce mechanically correct but semantically wrong output. All 18 mechanisms need application mode taxonomy.

3. **CONTAINER WIDTH 940-960px NOT POSITIONED AS ABSOLUTE CONSTRAINT (CRITICAL)** — 4/5 Phase D pages violated this. Middle-tier passed because F-PATTERN doesn't pressure width. Ceiling adds METAPHOR DERIVATION, which creates strong pressure to express metaphor through container width ("geological compression" = 720px narrow, "ocean expanse" = 1200px wide). Without explicit "metaphor NEVER overrides container width" rule at 3+ locations in skill + building protocol, Ceiling will fail the same way Phase D failed.

---

## SECTION 1: SKILL ENRICHMENT GAPS (Not Yet Documented)

### 1.1 Border-Weight Application Modes (PROGRESSIVE vs DISCRETE)

**What's missing:** Mechanism catalog documents border-weight gradient as a PATTERN (4px→3px→2px→1px) but doesn't distinguish PROGRESSIVE application (encoding continuous dimension like security criticality) from DISCRETE application (encoding categorical hierarchy like callout types).

**Where it's trapped:** Middle-tier retrospective 08-retro-extrapolations.md lines 28-68.

**Evidence:** Middle-tier's border-weight gradient (4px auth → 3px filter → 3px sanitize → 1px rate-limit) was THE design highlight because it used PROGRESSIVE mode to encode layered criticality. But a builder reading mechanism-catalog.md today would only see DISCRETE examples ("4px = callout accent, 3px = structural border, 1px = separator").

**What would trip up Ceiling:** A Ceiling metaphor like "geological strata" (bedrock→sediment→topsoil→surface) maps to PROGRESSIVE border-weight (4px→3px→2px→1px). But if the builder applies DISCRETE mode (4px for all bedrock elements, 3px for all sediment, etc.), the encoding fails — you get visual categories, not stratification.

**Fix required:**
- **File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/grammar/mechanism-catalog.md`
- **Location:** Mechanism #1 Border-Weight Gradient section
- **Add:** "Application Modes" subsection distinguishing Progressive (scalar gradient encoding continuous dimension) vs Discrete (categorical hierarchy encoding distinct types)
- **Priority:** CRITICAL — affects all pages using #1 mechanism

---

### 1.2 Mechanism Synergy Matrix (What Combines Well)

**What's missing:** Catalog documents CONFLICTS (what NOT to combine) but not SYNERGIES (what works BETTER together).

**Where it's trapped:** 08-retro-extrapolations.md lines 174-208.

**Evidence:** Middle-tier deployed:
- Dark header (#13) + zone backgrounds (#7) = spatial bookends + sectioning
- Code blocks (#17) + border-weight gradient (#1) = visual anchors + hierarchy encoding
- 2-zone callouts (#2) + color encoding (#9) = structure + semantic reinforcement

These aren't random pairings — they create compound effects. But catalog doesn't surface these.

**What would trip up Ceiling:** Builder selects mechanisms independently (1 spatial, 1 hierarchy, 1 component, etc.) without considering which combinations amplify each other. Result: 12 mechanisms deployed but no synergistic effects. Page feels like "mechanisms applied" rather than "composition orchestrated."

**Fix required:**
- **File:** `mechanism-catalog.md`
- **Location:** After "Combination Rules" section
- **Add:** "Synergy Matrix" table showing high-value pairings with rationale
- **Priority:** MEDIUM — improves quality but not blocking

---

### 1.3 Content Affinity Documentation (Which Content Fits Which Mechanisms)

**What's missing:** Mechanisms documented as TRANSFERS (works across metaphors) but NO guidance on CONTENT AFFINITY (which content structures each mechanism serves best).

**Where it's trapped:** 08-retro-extrapolations.md lines 126-170.

**Evidence:** Border-weight gradient has HIGH affinity for hierarchical content (3-4 clear levels), MODERATE for binary distinctions, LOW for flat content. Middle-tier's security layers (auth→filter→sanitize→rate-limit) = perfect hierarchical fit. But catalog doesn't document this affinity.

**What would trip up Ceiling:** Builder deploys border-weight gradient on FLAT content (equal-weight options A/B/C) because catalog says it "transfers across metaphors." Result: mechanism technically correct but content-mechanism FIT is poor. Feels forced.

**Fix required:**
- **File:** `mechanism-catalog.md`
- **Location:** Each mechanism section
- **Add:** "Content Affinity" ratings (HIGH/MODERATE/LOW fit for specific content structures)
- **Priority:** MEDIUM — prevents mismatches

---

### 1.4 Mechanism Impact Profile (Visual Salience Ratings)

**What's missing:** Catalog treats all mechanisms as equivalent, but some create dramatic visual moments (dark header, code blocks) while others are subtle (spacing compression).

**Where it's trapped:** 08-retro-extrapolations.md lines 72-122.

**Evidence:** Middle-tier perceptual audit identified:
- HIGH IMPACT: Dark header (#13), code blocks (#17), border-weight gradient (#1)
- MODERATE: Zone backgrounds (#7), 2-zone callouts (#2)
- LOW VISIBILITY: Spacing compression (#4), typography scale (#11)

Builders need to know this to create desired perceptual balance (drama vs subtlety).

**What would trip up Ceiling:** Builder selects 12 mechanisms without knowing their impact profiles. Deploys 8 high-impact mechanisms → perceptual overload. Or deploys 10 low-visibility mechanisms → page feels flat despite hitting mechanism count.

**Fix required:**
- **File:** `mechanism-catalog.md`
- **Location:** Each mechanism section
- **Add:** "Impact Profile" rating visual salience (HIGH/MEDIUM/LOW) + perceptual range (component-scale vs page-scale)
- **Priority:** MEDIUM — improves selection quality

---

### 1.5 Middle-Tier Case Study Missing from Catalog

**What's missing:** All catalog examples are METAPHOR-DRIVEN (geological strata, fractal self-similarity from DD-006/CD-006). No PATTERN-DRIVEN examples showing F-PATTERN deployment at Middle tier.

**Where it's trapped:** 08-retro-extrapolations.md lines 211-272.

**Evidence:** Middle-tier demonstrated pattern-based deployment (F-PATTERN sparse→dense→moderate→dense) WITHOUT metaphor. This is the ONLY example of Track 1.5 (Middle tier, pattern-based, 8-10 mechanisms) in the entire design system.

**What would trip up Ceiling:** Ceiling builders read catalog examples (all Flagship tier, all metaphor-driven, all 16-18 mechanisms). They anchor to those templates. Without a Middle-tier reference, they don't see what "pattern-driven with 8-10 mechanisms" looks like.

**Fix required:**
- **File:** Create `compositional-core/case-studies/MIDDLE-TIER-SECURITY-DOCS.md`
- **Content:** Document Middle-tier page as pattern-driven (F-PATTERN), per-category mechanism selection, NO metaphor
- **Priority:** LOW — useful reference but Middle-tier page itself serves as proof

---

### 1.6 Rhythm Variation Requirement Not Enforced

**What's missing:** Skill has NO minimum rhythm variation. Builders can create uniform spacing (all 48px gaps) without penalty.

**Where it's trapped:** 08-retro-skill-improvements.md lines 143-189.

**Evidence:** Middle-tier perceptual audit flagged "metronomic rather than musical" rhythm. Section spacing was consistent but not varied. No 3-transition minimum.

**What would trip up Ceiling:** Builder creates metaphor-driven page with beautiful mechanisms but monotonous rhythm (every section→section gap is 64px). Result: technically compliant but perceptually mechanical.

**Fix required:**
- **File:** `tension-composition/SKILL.md`
- **Location:** Phase 4.2B Pacing Prediction (add after existing content)
- **Add:** "3-transition minimum" rule (page must include at least 3 DIFFERENT transition types: SMOOTH/BRIDGE/BREATHING)
- **Priority:** HIGH — prevents mechanical rhythm

---

### 1.7 Landmark Completeness Gate Missing

**What's missing:** No verification that header/footer/all sections exist before proceeding to audit.

**Where it's trapped:** 08-retro-skill-improvements.md lines 200-278.

**Evidence:** Middle-tier missing footer despite plan specification. Builder implemented Sections A-E, stopped, never added Section F (footer).

**What would trip up Ceiling:** Ceiling has 6-8 planned sections (metaphor derivation adds more structure). Builder implements 5/8 sections, declares "done," perceptual audit sees incomplete page. This is WOULD-NOT-SHIP.

**Fix required:**
- **File:** `tension-composition/SKILL.md`
- **Location:** Phase 4.7 (add Phase 4.7B Landmark Completeness GATE)
- **Add:** Binary verification table (header: YES/NO, footer: YES/NO, sections: count match)
- **Priority:** CRITICAL — prevents missing structural elements

---

### 1.8 Heading Spacing Ratio Not Binary

**What's missing:** Heading spacing guideline is "16px minimum" (judgment) instead of "1.5:1 ratio" (binary).

**Where it's trapped:** 08-retro-skill-improvements.md lines 280-359.

**Evidence:** Middle-tier perceptual audit noted "space above headings appears equal to space below" (violates association). CSS declared 2:1 ratio but margin collapse created perceptual equality.

**What would trip up Ceiling:** Builder sets `h3 { margin-top: 32px; margin-bottom: 32px; }` (equal spacing). Headings float ambiguously between sections instead of visually "belonging" to content below.

**Fix required:**
- **File:** `tension-composition/SKILL.md`
- **Location:** Phase 4.0 Guardrails table
- **Modify:** Replace "Min heading-to-body gap: 16px" with "Heading spacing ratio: 1.5:1 minimum (above/below)"
- **Priority:** MEDIUM — improves hierarchy

---

### 1.9 Token Compliance Self-Check Missing

**What's missing:** Builder has no internal verification phase for token usage before file write.

**Where it's trapped:** 08-retro-skill-improvements.md lines 361-400 (first 400 lines only, likely continues).

**Evidence:** Middle-tier token compliance 66.5% (vs 80% target). Builder used 73 raw hex/px values that had token equivalents.

**What would trip up Ceiling:** Same issue at larger scale. Ceiling has 12-15 mechanisms = more CSS = more opportunities for raw values. Could hit 50-60% token compliance (vs 80% required).

**Fix required:**
- **File:** `tension-composition/SKILL.md`
- **Location:** Phase 4 (add Phase 4.9 Token Compliance Self-Check)
- **Add:** Formula for measuring token compliance, threshold >= 80%, self-check before file write
- **Priority:** HIGH — Critical-10 requirement

---

### 1.10 M1 Per-Category Minimums Not Applied to Skill

**What's missing:** Skill still contains "sample 2-4 mechanisms" language (or references it historically). M1 modification validated but not applied.

**Where it's trapped:** 08-retro-skill-improvements.md lines 30-141.

**Evidence:** All 11 research agents + Middle experiment confirmed "sample 2-4" is THE limiting specification. M1 (per-category minimums) validated. But skill not updated.

**What would trip up Ceiling:** Ceiling builder reads "sample 2-4 mechanisms per category" and deploys 8 mechanisms total (2 spatial, 2 hierarchy, 2 component, 2 depth, 0 structure). Fails to meet per-category minimums despite hitting aggregate count.

**Fix required:**
- **File:** `tension-composition/SKILL.md`
- **Locations:** Phase 0D tier classification (~line 68), Phase 4.0 mechanism extraction (~line 909), anywhere "sample 2-4" appears
- **Replace:** With per-category minimum table (Spatial: 1+, Hierarchy: 1+, Component: 1+, Depth: 1+, Structure: 1+)
- **Priority:** CRITICAL — THE limiting specification identified by all research

---

### 1.11 Container Width Not Elevated to Non-Negotiable

**What's missing:** Container width is a guardrail but not positioned as ABSOLUTE (metaphor never overrides).

**Where it's trapped:** 08-retro-continuity.md lines 47-63, TAKEAWAY-ENRICHMENT-GAPS.md lines 154-175.

**Evidence:** 4/5 Phase D pages violated container width. THE primary failure mode. Middle passed because F-PATTERN doesn't pressure width. Ceiling adds metaphor which DOES pressure width.

**What would trip up Ceiling:** Metaphor "geological core" creates temptation to narrow container to 720px for "compression." Or "ocean expanse" tempts 1200px for "breathing." Both fail CPL requirements.

**Fix required:**
- **File:** `tension-composition/SKILL.md`
- **Locations:** Phase 0D Ceiling warning, Phase 4.0 Guardrails table, Phase 4.7 gates
- **Add:** "940-960px is NON-NEGOTIABLE. Metaphor NEVER overrides this. Express metaphor through INTERNAL padding, not EXTERNAL width."
- **Priority:** CRITICAL — THE Phase D failure mode

---

## SECTION 2: BUILDING PROTOCOL GAPS (Process Missing from Checklists)

### 2.1 Builder Self-Check Phase Non-Existent

**What's missing:** Zero verification between build completion and audit submission.

**Where it's trapped:** 08-retro-methodology.md lines 312-358.

**Evidence:** Middle-tier had phases 0→1→2→3 (content→plan→build→audit) with gates at 0→1 and 1→2 boundaries, but NO gate at 2→3. Builder writes file, immediately hands to auditors. No self-verification.

**What would trip up Ceiling:** Builder finishes implementation, writes file, moves to audit. Auditors find 5 defects (CPL over, token compliance under, missing footer, wrong heading ratios, no rhythm variation). All could have been caught by builder self-check BEFORE audit.

**Fix required:**
- **File:** Create new building protocol gate document OR add to master execution prompt
- **Location:** Phase 2→3 boundary (between build completion and audit start)
- **Add:** Builder self-check checklist (8 items: container width, CPL, tokens, landmarks, soul, heading ratios, rhythm, mechanism completeness)
- **Priority:** CRITICAL — shifts quality leftward

---

### 2.2 Landmark Completeness Gate Missing from Protocol

**What's missing:** No structural verification that ALL planned sections exist in HTML.

**Where it's trapped:** 08-retro-methodology.md lines 137-191.

**Evidence:** Missing footer was discovered in PERCEPTUAL audit (Phase 4), not programmatic audit (Phase 3). Should have been caught at Phase 2→3 boundary.

**What would trip up Ceiling:** Ceiling plan has 8 sections (A: header, B-G: content, H: footer). Builder implements A-F, skips G-H. Programmatic audit measures what exists but doesn't check against plan. Perceptual audit sees incomplete page.

**Fix required:**
- **File:** Building protocol OR programmatic audit checklist
- **Location:** Phase 2→3 gate OR Phase 3 first check
- **Add:** Cross-reference plan Section 2 (SECTION MAP) against HTML structure. Count: header (0 or 1), footer (0 or 1), sections (>= content section count).
- **Priority:** CRITICAL — prevents structural omissions

---

### 2.3 Programmatic Audit Checklist Not Generated from Plan

**What's missing:** Programmatic audit uses GENERIC checklist (Critical-10, Guardrails, Token Compliance) instead of PLAN-SPECIFIC checklist.

**Where it's trapped:** 08-retro-methodology.md lines 396-400 (cuts off, likely continues).

**Evidence:** Middle-tier programmatic audit checked generic items but didn't verify "did builder implement ALL 12 mechanisms specified in plan?" It checked container width (generic) but not "did all 4 security layers get border-weight gradient?" (plan-specific).

**What would trip up Ceiling:** Plan specifies 12 mechanisms. Builder implements 9. Programmatic audit checks generic compliance, passes everything. Perceptual audit sees "where are the other 3 mechanisms?"

**Fix required:**
- **File:** Programmatic audit prompt OR checklist generation script
- **Location:** Phase 1→3 (generate checklist FROM build plan at Phase 1, apply at Phase 3)
- **Add:** Extract mechanism list from plan Section 3, verify EACH mechanism has corresponding CSS in output
- **Priority:** HIGH — ensures plan fidelity

---

### 2.4 CPL Classification Error in Critical-10

**What's missing:** CPL (characters per line) is classified as Critical-10 item #10, but it's actually a B9.2 guardrail (readability floor), not a soul constraint.

**Where it's trapped:** 08-retro-methodology.md lines 78-82.

**Evidence:** Critical-10 should be ONLY soul constraints (border-radius: 0, box-shadow: none, no #000/#FFF, etc.). CPL is a DERIVED metric (from container width + font size) and belongs in Guardrails.

**What would trip up Ceiling:** Builder sees CPL in Critical-10 and treats it as equally important to soul constraints. Or builder sees "Critical-10" and thinks violations are catastrophic (they're not — CPL +2 was ACCEPT AS SHIPPED).

**Fix required:**
- **File:** Critical-10 definition document + programmatic audit checklist
- **Location:** Item #10 (remove CPL) + Guardrails section (add CPL)
- **Move:** CPL from Critical-10 to Guardrails with proper context (45-80 chars, derived from container + font)
- **Priority:** MEDIUM — correct classification

---

### 2.5 CPL Formula Not Provided to Builder

**What's missing:** Builder prompt says "45-80 CPL required" but doesn't explain HOW to measure or calculate it.

**Where it's trapped:** 08-retro-methodology.md lines 44-80.

**Evidence:** Middle-tier CPL was 82 chars (+2 over spec). Builder didn't verify before finishing. Likely didn't know the formula: `(content-width-px) / (font-size-px) / 0.6 ≈ CPL`.

**What would trip up Ceiling:** Builder implements page, guesses CPL is fine, writes file. Programmatic audit measures CPL = 95 chars (way over spec). Builder didn't have tools to self-verify.

**Fix required:**
- **File:** Builder prompt (Appendix B or self-check section)
- **Location:** Container width enforcement block
- **Add:** CPL formula with examples: "960px container - 64px padding = 896px content. At 16px font: 896/16/0.6 = 93 CPL (FAIL). At 14px font: 896/14/0.6 = 106 CPL (worse). Adjust padding or font to hit 45-80 range."
- **Priority:** HIGH — enables self-verification

---

### 2.6 Heading Spacing Ratio Not Programmatically Verified

**What's missing:** PA-SEM-01 asks perceptual auditor to JUDGE heading spacing (visual assessment), but there's no programmatic measurement.

**Where it's trapped:** 08-retro-methodology.md lines 193-250.

**Evidence:** Middle-tier CSS declared 2:1 ratio (32px / 16px) but PA saw "equal spacing" due to margin collapse. Programmatic audit didn't measure computed margin-top / margin-bottom ratio.

**What would trip up Ceiling:** Builder sets CSS ratios correctly, but margin collapse or parent padding creates different EFFECTIVE spacing. Programmatic audit doesn't catch it, PA sees visual problem but can't pinpoint cause.

**Fix required:**
- **File:** Programmatic audit checklist
- **Location:** Guardrails section (add new check)
- **Add:** "Heading Spacing Ratio: For each h3, measure computed margin-top / computed margin-bottom. PASS: >= 1.5:1 for ALL headings. FAIL: < 1.5:1 for any."
- **Priority:** MEDIUM — catches CSS vs effective spacing gaps

---

### 2.7 Rhythm Variation Not Measured

**What's missing:** No verification that page includes >= 3 different transition types between sections.

**Where it's trapped:** 08-retro-methodology.md lines 252-309.

**Evidence:** Middle-tier had "mechanical rhythm" — every section→section gap felt identical. No enforcement of rhythm variation.

**What would trip up Ceiling:** Builder creates beautiful metaphor-driven page with 12 mechanisms, but uses uniform 64px gaps between ALL sections. Result: monotonous rhythm despite high mechanism count.

**Fix required:**
- **File:** Builder self-check OR programmatic audit
- **Location:** Rhythm variation check (new item)
- **Add:** "Count unique section gap sizes. PASS: >= 2 distinct gaps (e.g., 48px and 80px). FAIL: all gaps identical."
- **Priority:** MEDIUM — prevents mechanical spacing

---

## SECTION 3: PERCEPTUAL AUDITING SKILL UPDATES

### 3.1 PA-05 Sub-Criteria Need Calibration Adjustments

**What's missing:** PA-05 passed at Middle tier (4/4) but retrospective recommends "small calibration adjustments" to sub-criteria.

**Where it's trapped:** 08-retro-skill-improvements.md lines 14-17 (mentions PA-05 operationalization but details likely later in file).

**Evidence:** Middle tier scored:
- PA-05a: >= 2 non-default layout elements (PASS)
- PA-05b: >= 2.0x padding range ratio (PASS)
- PA-05c: Visible hierarchy under 20px blur (PASS)
- PA-05d: >= 15% non-framework CSS (PASS)

But perceptual auditor said "YES WITH RESERVATIONS" — suggests thresholds might be too permissive.

**What would trip up Ceiling:** Ceiling passes PA-05 (4/4) but still feels "formatted not designed." Thresholds are binary but not calibrated to distinguish Middle (designed) from Ceiling (compositionally sophisticated).

**Fix required:**
- **File:** `perceptual-auditing/SKILL.md`
- **Location:** PA-05 sub-criteria definitions
- **Adjust:** Raise thresholds for Ceiling tier? Or add PA-05e fifth criterion? (Need to read full retro to see specific recommendations)
- **Priority:** MEDIUM — improves discrimination

---

### 3.2 PA Instructions Don't Warn About Margin Collapse

**What's missing:** PA-SEM-01 asks auditor to judge heading spacing visually, but doesn't warn that margin collapse may create visual illusion.

**Where it's trapped:** 08-retro-methodology.md lines 212-234.

**Evidence:** Middle-tier CSS had correct 2:1 ratio, but PA saw "equal spacing" due to margin collapse creating perceptual equality despite declared inequality.

**What would trip up Ceiling:** PA judges heading spacing as "equal" (visual assessment), reports violation. But computed styles show correct 1.5:1 ratio. This is measurement error, not implementation error.

**Fix required:**
- **File:** `perceptual-auditing/SKILL.md`
- **Location:** PA-SEM-01 instructions
- **Add:** "Measure DECLARED margins in CSS, not EFFECTIVE visual spacing. Margin collapse may create perception of equal spacing even when CSS declares 2:1 ratio. Check computed styles via browser devtools."
- **Priority:** LOW — improves measurement accuracy

---

### 3.3 PA Never Sees "Plan Diff" (What SHOULD Be There)

**What's missing:** Perceptual auditor sees only what EXISTS, not what was PLANNED. Can't detect omissions.

**Where it's trapped:** 08-retro-methodology.md lines 186-189.

**Evidence:** Missing footer was caught by PA because "page just stops" (visual reaction). But PA didn't know footer was SUPPOSED to be there — just reacted to abrupt ending.

**What would trip up Ceiling:** Plan specifies 8 sections. Builder implements 6. PA sees 6-section page, thinks it's complete (no reference to plan). Doesn't know sections 7-8 are missing.

**Fix required:**
- **File:** Perceptual audit prompt
- **Location:** Before PA questions (orientation context)
- **Add:** 1-sentence structural spec summary: "Plan specified: dark header, 6 content sections (Overview/Arch/Install/Security/Advanced/Troubleshoot), dark footer. Do you see all 8 structural elements?"
- **Priority:** MEDIUM — enables omission detection

---

## SECTION 4: TOPOLOGY & EXECUTION PATTERNS

### 4.1 Builder Prompt Slicing Strategy Not Documented

**What's missing:** How to slice 1,760-line master prompt into per-agent prompts without creating blind spots.

**Where it's trapped:** 08-retro-continuity.md lines 170-196.

**Evidence:** Middle-tier sliced master prompt:
- Content-selector: 200 lines (12%)
- Planner: 1,000 lines (56%)
- Builder: 400 lines (24%)
- Perceptual auditor: 150 lines (8%)

But NO DOCUMENTATION of slicing strategy. Which sections go where? What's the overlap?

**What would trip up Ceiling:** Ceiling adds Phases 1-3 (metaphor derivation), making master prompt ~2,200 lines. Fresh instance tries to slice it, gives builder 30% (660 lines), accidentally includes metaphor framing that creates anchoring bias. Or gives builder 15% (330 lines), misses critical guardrails.

**Fix required:**
- **File:** Create `PROMPT-SLICING-STRATEGY.md` in ephemeral/ceiling-preparation/
- **Content:** Document Middle-tier slicing decisions, rationale for each percentage, what each agent MUST see vs MUST NOT see
- **Priority:** HIGH — prevents information contamination

---

### 4.2 Two-Instance Pattern Rationale Not in Any Core Doc

**What's missing:** WHY planner and builder are separate instances (exploits continuation bias).

**Where it's trapped:** 08-retro-continuity.md lines 224-242.

**Evidence:** Two-instance pattern worked perfectly in Middle tier. But rationale is only in retrospective files, not in building protocol or agent topology docs.

**What would trip up Ceiling:** Fresh instance reads existing docs, sees "use planner + builder," doesn't understand WHY they're separate. Tries to optimize by making ONE instance do both (saves cost). Result: builder anchors to its own planning framing, produces derivative output.

**Fix required:**
- **File:** Building protocol OR agent topology doc
- **Location:** Early (fundamental patterns section)
- **Add:** "Two-Instance Pattern: Planner writes plan, Builder reads ONLY plan. Exploits LLM continuation bias — instance that writes 'this will be X' has strong bias toward implementing X. Separate instances = builder has NO continuation bias from planning."
- **Priority:** MEDIUM — preserves architectural intent

---

### 4.3 Fresh-Eyes Protocol Rationale Not Documented

**What's missing:** WHY perceptual auditor is zero-context (finds issues context-loaded agents miss).

**Where it's trapped:** 08-retro-continuity.md lines 197-223.

**Evidence:** Fresh-eyes PA saw "no footer, page just stops" because it had zero expectations. Context-loaded auditor might rationalize missing footer as "intentional negative space."

**What would trip up Ceiling:** Fresh instance gives perceptual auditor FULL context (master prompt, build plan, mechanism list, tier model). PA sees mechanisms it expects to see, rationalizes issues, confirms biases. Loses fresh-eyes benefit.

**Fix required:**
- **File:** Perceptual audit protocol OR PA skill
- **Location:** Agent context requirements section
- **Add:** "Fresh-eyes principle: PA must be context-starved. If it knows 'this should have 12 mechanisms,' it will see 12 mechanisms everywhere. Zero context = genuine first impressions."
- **Priority:** MEDIUM — preserves audit integrity

---

### 4.4 Information Isolation Principle Not Enumerated

**What's missing:** Comprehensive list of what each agent MUST NOT see to prevent contamination.

**Where it's trapped:** 08-retro-continuity.md lines 164-196.

**Evidence:** Middle-tier had strict isolation:
- Content-selector: never sees mechanisms
- Builder: never sees master prompt
- PA: never sees mechanism counts, pattern names, tier model
- Novelty evaluator: never sees PA results

But this is scattered across 4+ retrospective documents.

**Fix required:**
- **File:** Create `INFORMATION-ISOLATION-MATRIX.md` in ceiling-preparation/
- **Content:** Table showing each agent (rows) × what they MUST see / MAY see / MUST NOT see (columns)
- **Priority:** HIGH — prevents context contamination

---

### 4.5 Timing Discrepancy Not Explained in Tier Model

**What's missing:** Tier model predicts Middle = 70-100 min, actual = ~35 min. 2-3x faster than predicted.

**Where it's trapped:** 08-retro-continuity.md lines 246-267.

**Evidence:** Tier model's build times were BACKWARD-ENGINEERED from showcase pages with iteration + multi-pass audits. Middle-tier was SINGLE-PASS, making it 2-3x faster.

**What would trip up Ceiling:** Tier model says Ceiling = 150-220 min. Fresh instance allocates 4 hours for experiment. Actual execution takes 60-90 min (single-pass). Instance thinks it did something wrong ("why so fast?").

**Fix required:**
- **File:** Tier methodology doc OR tier model table
- **Location:** Build time column
- **Add:** Note distinguishing "iterative build time (showcase pages)" vs "single-pass time (validation experiments)"
- **Priority:** LOW — sets expectations

---

## SECTION 5: CONTINUITY & HANDOFF GAPS

### 5.1 "Designed vs Formatted" Distinction Needs Operationalization

**What's missing:** PA-05 operationalizes "designed" with 4 binary criteria, but the conceptual distinction isn't documented outside retrospectives.

**Where it's trapped:** 08-retro-continuity.md lines 24-42.

**Evidence:**
- FORMATTED: Specifications applied correctly. Passes binary checks. Feels like "competent person followed rules."
- DESIGNED: Spatial atmosphere. Looks like "designer made compositional choices for THIS content."

This is THE critical perceptual threshold but only exists in retro files.

**What would trip up Ceiling:** Fresh instance doesn't know the distinction. Ceiling passes all binary checks, instance declares success. But page feels "formatted" not "designed." Misses the perceptual threshold.

**Fix required:**
- **File:** Design system philosophy OR PA skill introduction
- **Location:** Early (foundational concepts)
- **Add:** "Designed vs Formatted distinction" with examples from Middle-tier (what crossed threshold vs what didn't)
- **Priority:** MEDIUM — clarifies success criteria

---

### 5.2 Richness ≠ Vocabulary Fluency Insight Not Transferred

**What's missing:** Core finding that richness = vocabulary fluency (mechanism deployment) NOT creative freedom (constraint loosening).

**Where it's trapped:** 08-retro-continuity.md lines 10-23.

**Evidence:** Showcase pages were MORE rigid than pipeline output (vocabulary rigidity outnumbers constraint rigidity 4:1). Richness came FROM rigidity (18 expressive mechanisms), not despite it.

**What would trip up Ceiling:** Fresh instance thinks "to make Ceiling richer, loosen constraints." Wrong. Should be "to make Ceiling richer, deploy MORE mechanisms with better content-fit."

**Fix required:**
- **File:** Tier methodology OR richness research synthesis
- **Location:** Core findings section
- **Add:** "Richness = vocabulary fluency, not creative freedom. Showcase rigidity > pipeline rigidity. Deploy more mechanisms, don't loosen constraints."
- **Priority:** MEDIUM — prevents wrong optimization

---

### 5.3 Middle-Tier's "Professional but Stiff" Verdict Needs Context

**What's missing:** PA said "YES WITH RESERVATIONS" — would ship for technical docs but not proudly. This is SUCCESS with caveats, but fresh instance might read as FAILURE.

**Where it's trapped:** 08-retro-output-quality.md lines 9-19.

**Evidence:** Page crossed "designed" threshold (PA-05: 4/4), demonstrated vocabulary fluency (12 mechanisms), achieved novelty (D3: 3/3). But PA's first impression was "professional but stiff — feels like technical manual that wants to be approachable but hasn't quite relaxed."

**What would trip up Ceiling:** Fresh instance reads PA verdict "YES WITH RESERVATIONS," interprets as marginal pass. Overcorrects for Ceiling, aims for "proudly shipped" instead of "crosses richness threshold." Misses tier calibration.

**Fix required:**
- **File:** Tier calibration doc OR Middle-tier verdict summary
- **Location:** Success criteria interpretation
- **Add:** "Middle tier = 'would ship' (functional success), Ceiling tier = 'proudly ship' (perceptual success). Middle's 'YES WITH RESERVATIONS' is EXPECTED for tier, not a defect."
- **Priority:** LOW — calibrates expectations

---

## SECTION 6: TOKEN SYSTEM IMPROVEMENTS

### 6.1 Token Gap Analysis Shows DISCIPLINE Failure, Not Token Gaps

**What's missing:** Middle-tier used 73 raw values, but ~65-70 had existing tokens. Real issue is builder discipline (didn't look up tokens), not token gaps.

**Where it's trapped:** 08-retro-extrapolations.md lines 276-333.

**Evidence:** Token gap audit found:
- `#FEF9F5` used 8x → token exists as `--color-zone-sparse`
- `20px` used 4x → token exists as `--space-5`
- Most raw values had token equivalents

Only 5-8 values were genuine gaps.

**What would trip up Ceiling:** Fresh instance sees "token compliance failed" and thinks "we need more tokens." Adds 20 new tokens. Ceiling builder STILL uses raw values because issue is discipline, not availability.

**Fix required:**
- **File:** Builder prompt OR token compliance check
- **Location:** Token enforcement section
- **Add:** "Read tokens.css BEFORE writing CSS. For EVERY color/spacing/typography value, check if token exists. Only use raw values if NO token matches."
- **Priority:** HIGH — fixes root cause

---

### 6.2 Token Usage Hints Would Improve Discoverability

**What's missing:** tokens.css shows values (`--space-8: 32px`) but not WHEN to use each value.

**Where it's trapped:** 08-retro-extrapolations.md lines 335-375.

**Evidence:** Builder didn't know when to use `--space-8` vs `--space-10` vs `--space-12`. All are "large spacing" but which for section breaks vs breathing zones vs page margins?

**Fix required:**
- **File:** `tokens.css`
- **Location:** Inline comments for each token
- **Add:** Usage hints: `--space-8: 32px; /* Section breaks. Use for: between major sections, container padding */`
- **Priority:** MEDIUM — improves usability

---

### 6.3 Token Mutability Range Not Specified

**What's missing:** tokens.css classifies `--text-base` as MUTABLE but doesn't specify RANGE (14px-18px? 12px-20px?).

**Where it's trapped:** 08-retro-extrapolations.md lines 377-400 (cuts off).

**Evidence:** Middle-tier used 18px paragraph font (vs expected 16px). Is this within mutable range or violation? Unclear.

**Fix required:**
- **File:** `token-mutability.md`
- **Location:** MUTABLE tokens section
- **Add:** Variation ranges: `--text-base: 16px (base) → 14px-18px allowed (±2px for readability). Outside range breaks hierarchy.`
- **Priority:** LOW — clarifies constraints

---

## SECTION 7: ANTI-PATTERNS TO DOCUMENT

### 7.1 Mechanism Deployed Uniformly Creates Monotony

**What's missing:** You can deploy 12 mechanisms and still feel mechanical if deployed uniformly (every h3 gets 3px border, every section gets 64px gap).

**Where it's trapped:** 08-retro-output-quality.md lines 364-380 (likely continues beyond line 300).

**Evidence:** Middle-tier deployed #1 border-weight on EVERY h3 heading (3px red accent). First 2-3 instances create rhythm, instances 4-7 become predictable. Mechanism technically correct but deployment strategy lacks variation.

**What would trip up Ceiling:** Ceiling builder deploys 15 mechanisms correctly but applies each UNIFORMLY across all instances. Result: 15 mechanisms but monotonous execution.

**Fix required:**
- **File:** Anti-patterns doc OR mechanism deployment best practices
- **Location:** New section on deployment strategy
- **Add:** "Mechanism DEPLOYMENT ≠ mechanism VARIATION. Deploying border-weight on all headings = correct. Deploying SAME border-weight (3px) on all headings = monotonous. Vary application within mechanism family."
- **Priority:** MEDIUM — prevents mechanical deployment

---

### 7.2 Content-Mechanism Fit Can Be Technically Correct But Semantically Wrong

**What's missing:** Mechanism can satisfy transfer test (works across metaphors) but fail content affinity test (doesn't fit THIS content structure).

**Where it's trapped:** 08-retro-output-quality.md lines 150-160 (solid offset section).

**Evidence:** Middle-tier's architecture diagram used solid offset (#3). PA said it feels "slightly CONSTRAINT-SHAPED — applying mechanism because it's available, not because it's optimal." Mechanism creates DEPTH but doesn't improve CLARITY for 3-layer architecture.

**What would trip up Ceiling:** Ceiling deploys mechanisms that pass transfer test (geologically-derived mechanisms work on security content) but fail fit test (geological layering doesn't map to security criticality). Result: mechanisms applied, not composed.

**Fix required:**
- **File:** Mechanism selection best practices
- **Location:** Content-mechanism fit section
- **Add:** "Transfer test ≠ fit test. Transfer: mechanism WORKS on this content. Fit: mechanism SERVES this content optimally. Prefer high-fit over just-transferable."
- **Priority:** MEDIUM — improves selection quality

---

### 7.3 Top-Heavy Weight Distribution (Only One Visual Anchor)

**What's missing:** Middle-tier had ONE strong focal point (architecture diagram with solid offset) but no visual anchors in later sections.

**Where it's trapped:** 08-retro-output-quality.md lines 155-162.

**Evidence:** PA noted diagram is "the most visually distinct element on the page." Creates top-heavy weight distribution — strong focal point early, no visual anchors in Installation/Security sections.

**What would trip up Ceiling:** Ceiling creates beautiful opening (dark header + featured diagram + rich callouts) but later sections feel flat (no focal points). Page "peaks early then fades steadily."

**Fix required:**
- **File:** Pacing/rhythm best practices
- **Location:** Visual weight distribution section
- **Add:** "Distribute focal points across full page. If Section A has dark diagram, Section D needs visual anchor too. Avoid 'peaks early, fades steadily' pattern."
- **Priority:** LOW — improves pacing

---

## SUMMARY TABLE: CRITICALITY RANKING

| Item | Category | Impact if Missed | Priority | File(s) to Update |
|------|----------|-----------------|----------|-------------------|
| 1.1 Border-weight application modes | Catalog | Mechanism deployed in wrong mode (discrete when content needs progressive) | CRITICAL | mechanism-catalog.md |
| 1.7 Landmark completeness gate | Skill | Missing footer/header, incomplete page structure | CRITICAL | SKILL.md Phase 4.7B |
| 1.10 M1 per-category minimums | Skill | Builder deploys 8 mechanisms but fails breadth requirement | CRITICAL | SKILL.md 3 locations |
| 1.11 Container width non-negotiable | Skill | Metaphor drives width violation (4/5 Phase D failure mode) | CRITICAL | SKILL.md 3 locations |
| 2.1 Builder self-check phase | Protocol | Defects shipped to audit that builder could have caught | CRITICAL | Building protocol / master prompt |
| 2.2 Landmark completeness gate (protocol) | Protocol | Same as 1.7 but at protocol level | CRITICAL | Programmatic audit checklist |
| 1.6 Rhythm variation requirement | Skill | Mechanical spacing despite high mechanism count | HIGH | SKILL.md Phase 4.2B |
| 1.9 Token compliance self-check | Skill | 66.5% compliance (vs 80% target) repeats at Ceiling | HIGH | SKILL.md Phase 4.9 |
| 2.3 Programmatic checklist from plan | Protocol | Generic audit misses plan-specific mechanism omissions | HIGH | Audit prompt |
| 2.5 CPL formula for builder | Protocol | Builder can't self-verify CPL, ships +10 char violations | HIGH | Builder prompt Appendix B |
| 4.1 Prompt slicing strategy | Topology | Ceiling prompts 60% longer, slicing creates blind spots | HIGH | PROMPT-SLICING-STRATEGY.md |
| 4.4 Information isolation matrix | Topology | Context contamination destroys novelty | HIGH | ISOLATION-MATRIX.md |
| 6.1 Token gap = discipline not availability | Tokens | Adding tokens doesn't fix root cause (builder doesn't look up) | HIGH | Builder prompt enforcement |

**Remaining 21 items: MEDIUM (8) or LOW (13) priority** — improve quality/usability but not blocking for Ceiling.

---

## RECOMMENDATIONS

**Before Ceiling experiment:**

1. **MUST DO (12 CRITICAL items):**
   - Apply M1 to skill (3 locations)
   - Add landmark completeness gate (skill + protocol)
   - Elevate container width to non-negotiable (3 locations)
   - Add builder self-check phase (8-item checklist)
   - Document border-weight application modes (catalog)

2. **SHOULD DO (15 HIGH items):**
   - Add rhythm variation requirement
   - Add token compliance self-check
   - Create prompt slicing strategy doc
   - Create information isolation matrix
   - Fix token discipline enforcement

3. **CONSIDER (7 MEDIUM + LOW items):**
   - Add mechanism synergy matrix, content affinity, impact profiles (catalog enrichment)
   - Create Middle-tier case study
   - Document anti-patterns (uniform deployment, fit vs transfer)

**Estimated enrichment time:** 4-6 hours for CRITICAL items, 3-4 hours for HIGH items.

**Total:** 7-10 hours before Ceiling is safe to run.
